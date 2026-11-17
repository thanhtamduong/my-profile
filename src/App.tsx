import { useState } from 'react';
import { ConsultModal } from './components/features/ConsultModal';
import { ContactSection } from './components/features/ContactSection';
import { Hero } from './components/features/Hero';
import { JourneyFeed } from './components/features/JourneyFeed';
import { PersonalGallery } from './components/features/PersonalGallery';
import { StatsBar } from './components/features/StatsBar';
import { TourShowcase } from './components/features/TourShowcase';
import type { TourFilterTab } from './components/features/TourShowcase';
import { FloatingContact } from './components/layout/FloatingContact';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';

export function App() {
  const [activeTourFilter, setActiveTourFilter] = useState<TourFilterTab>('all');
  const [tourSearch, setTourSearch] = useState('');
  const [selectedTourTopic, setSelectedTourTopic] = useState('');
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [consultModalTour, setConsultModalTour] = useState<string | undefined>(
    undefined
  );

  const handleOpenConsult = (tourTitle?: string) => {
    setConsultModalTour(tourTitle);
    if (tourTitle) {
      setSelectedTourTopic(tourTitle);
    }
    setConsultModalOpen(true);
  };

  const handleSelectDestination = (destination: string) => {
    setActiveTourFilter('all');
    setTourSearch(destination);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFC] text-[#103F2B]">
      <Navbar onOpenConsult={handleOpenConsult} />

      <main className="flex-1">
        <Hero
          onSelectDestination={handleSelectDestination}
          onOpenConsult={handleOpenConsult}
        />
        <StatsBar />
        <PersonalGallery />
        <TourShowcase
          activeFilter={activeTourFilter}
          onChangeFilter={setActiveTourFilter}
          externalSearch={tourSearch}
          onChangeSearch={setTourSearch}
          onBookTour={handleOpenConsult}
        />
        <JourneyFeed />
        <ContactSection selectedTourTopic={selectedTourTopic} />
      </main>

      <Footer onSelectDestination={handleSelectDestination} />
      <FloatingContact onOpenConsult={() => handleOpenConsult()} />

      <ConsultModal
        isOpen={consultModalOpen}
        defaultTour={consultModalTour}
        onClose={() => setConsultModalOpen(false)}
      />
    </div>
  );
}

export default App;
