import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const tempDir = path.join(projectRoot, '.tmp-singlefile-build');
const releaseDir = path.join(projectRoot, 'dist-review');
const outputFile = path.join(releaseDir, 'ThuyLinh-Travel-Review.html');

function extractAttr(attrs, name) {
  const regex = new RegExp(`\\b${name}=["']([^"']+)["']`, 'i');
  return attrs.match(regex)?.[1] ?? null;
}

async function buildSingleHtml() {
  fs.rmSync(tempDir, { recursive: true, force: true });

  try {
    await build({
      root: projectRoot,
      base: './',
      build: {
        outDir: tempDir,
        emptyOutDir: true,
        cssCodeSplit: false,
        assetsInlineLimit: 100_000_000,
        modulePreload: false,
        rolldownOptions: {
          output: {
            codeSplitting: false,
          },
        },
      },
    });

    const indexHtmlPath = path.join(tempDir, 'index.html');
    let html = fs.readFileSync(indexHtmlPath, 'utf8');

    // Inline public/favicon.svg as data URI
    const faviconPath = path.join(projectRoot, 'public', 'favicon.svg');
    if (fs.existsSync(faviconPath)) {
      const svgContent = fs.readFileSync(faviconPath, 'utf8').trim();
      const encodedSvg = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
      html = html.replace(/<link\b([^>]*)>/gi, (tag, attrs) => {
        const rel = extractAttr(attrs, 'rel');
        if (rel?.toLowerCase() === 'icon') {
          return `<link rel="icon" type="image/svg+xml" href="${encodedSvg}" />`;
        }
        return tag;
      });
    }

    // Inline local CSS and strip modulepreload hints
    html = html.replace(/<link\b([^>]*)>/gi, (tag, attrs) => {
      const rel = extractAttr(attrs, 'rel')?.toLowerCase();
      if (rel === 'modulepreload') return '';
      if (rel !== 'stylesheet') return tag;

      const href = extractAttr(attrs, 'href');
      if (!href || /^https?:\/\//i.test(href)) return tag;

      const cleanRel = href.replace(/^\.\//, '').replace(/^\//, '');
      const cssFilePath = path.join(tempDir, cleanRel);
      if (!fs.existsSync(cssFilePath)) return tag;

      const css = fs.readFileSync(cssFilePath, 'utf8').replace(/<\/style/gi, '<\\/style');
      return `<style>\n${css}\n</style>`;
    });

    // Collect local JS bundle(s) and inline right before </body>
    const inlinedScripts = [];
    html = html.replace(/<script\b([^>]*)><\/script>/gi, (tag, attrs) => {
      const src = extractAttr(attrs, 'src');
      if (!src || /^https?:\/\//i.test(src)) return tag;

      const cleanRel = src.replace(/^\.\//, '').replace(/^\//, '');
      const jsFilePath = path.join(tempDir, cleanRel);
      if (!fs.existsSync(jsFilePath)) return tag;

      const js = fs.readFileSync(jsFilePath, 'utf8').replace(/<\/script/gi, '<\\/script');
      inlinedScripts.push(`<script type="module">\n${js}\n</script>`);
      return '';
    });

    if (inlinedScripts.length > 0) {
      html = html.replace(/<\/body>/i, () => `${inlinedScripts.join('\n')}\n</body>`);
    }

    fs.mkdirSync(releaseDir, { recursive: true });
    fs.writeFileSync(outputFile, html, 'utf8');

    console.log(`\n[build:html] Da dong goi thanh 1 file HTML duy nhat:\n-> ${outputFile}\n`);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

buildSingleHtml().catch((error) => {
  console.error('[build:html] Loi khi dong goi HTML:', error);
  process.exit(1);
});

