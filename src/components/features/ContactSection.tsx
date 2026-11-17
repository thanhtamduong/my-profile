// import { useState } from "react";
// import type { FormEvent } from "react";
import {
  LuCheck,
  LuClock,
  LuMail,
  LuMapPin,
  LuMessageCircleHeart,
  LuPhoneCall,
  // LuSend,
} from "react-icons/lu";
import { ADVISOR_PROFILE } from "../../data/profileData";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { LotusMotif } from "../common/LotusMotif";
import { SectionTitle } from "../common/SectionTitle";

interface ContactSectionProps {
  selectedTourTopic: string;
}

// const DESTINATION_OPTIONS = [
//   "Tour Đà Lạt",
//   "Tour Nha Trang",
//   "Tour Đà Nẵng – Hội An",
//   "Tour Huế Di Sản",
//   "Tour Singapore – Malaysia",
//   "Tour Indonesia (Bali)",
//   "Tour Hàn Quốc",
//   "Tour Nhật Bản",
//   "Tour Mỹ (Hoa Kỳ)",
//   "Tour Úc (Australia)",
//   "Tour Canada",
//   "Thiết kế tour riêng theo yêu cầu",
// ];

export function ContactSection({ selectedTourTopic }: ContactSectionProps) {
  // const [customerName, setCustomerName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [destinationOverride, setDestinationOverride] = useState<{
  //   topic: string;
  //   value: string;
  // } | null>(null);
  // const [guestCount, setGuestCount] = useState("2 – 4 khách");
  // const [note, setNote] = useState("");
  // const [submittedTopic, setSubmittedTopic] = useState<string | null>(null);

  // const destination =
  //   destinationOverride && destinationOverride.topic === selectedTourTopic
  //     ? destinationOverride.value
  //     : selectedTourTopic || DESTINATION_OPTIONS[0];

  // const isSubmitted = submittedTopic === selectedTourTopic;
  const hasEmail = ADVISOR_PROFILE.email.trim().length > 0;

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!customerName.trim() || !phone.trim()) return;
  //   setSubmittedTopic(selectedTourTopic);
  // };

  return (
    <section
      id="lien-he"
      className="relative border-t border-[#FCE7F0] bg-gradient-to-b from-[#EEF9F2]/60 via-[#FFFDFC] to-[#FFF5F8] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Kết nối tư vấn"
          title="Nhận báo giá & lịch trình"
          highlight="riêng cho chuyến đi của bạn"
          subtitle={`Để lại thông tin hoặc nhắn trực tiếp qua Zalo/Hotline, ${ADVISOR_PROFILE.nickname} sẽ gửi lịch trình chi tiết kèm ưu đãi vé tốt nhất trong vòng 15 phút.`}
        />

        <div className="mt-9 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Left Info Card */}
          <Card
            tone="mint"
            padding="lg"
            // className="relative flex flex-col justify-between overflow-hidden p-5 sm:p-7 lg:col-span-5"
            className="relative flex flex-col overflow-hidden p-5 sm:p-7 lg:col-span-12"
          >
            <LotusMotif
              variant="leaf"
              className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 text-[#186C42]/12"
            />
            <div className="relative">
              <div className="flex items-center gap-2.5">
                <LotusMotif className="h-8 w-8 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#103F2B]">
                    {ADVISOR_PROFILE.fullName}
                  </h3>
                  <p className="text-xs font-semibold text-[#C82564]">
                    {ADVISOR_PROFILE.roleTitle}
                  </p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4">
                <a
                  href={`tel:${ADVISOR_PROFILE.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 rounded-2xl border border-[#B2DFC4] bg-white p-3.5 sm:p-4 transition hover:border-[#E13D7D]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FCE7F0] text-[#C82564]">
                    <LuPhoneCall className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#103F2B]/65">
                      Hotline / Zalo trực tiếp
                    </p>
                    <p className="text-base font-extrabold text-[#103F2B]">
                      {ADVISOR_PROFILE.phone}
                    </p>
                  </div>
                </a>

                {hasEmail && (
                  <a
                    href={`mailto:${ADVISOR_PROFILE.email}`}
                    className="flex items-center gap-3.5 rounded-2xl border border-[#B2DFC4] bg-white p-3.5 sm:p-4 transition hover:border-[#E13D7D]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF9F2] text-[#186C42]">
                      <LuMail className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#103F2B]/65">
                        Email nhận lịch trình
                      </p>
                      <p className="truncate text-sm font-bold text-[#103F2B]">
                        {ADVISOR_PROFILE.email}
                      </p>
                    </div>
                  </a>
                )}

                <div className="rounded-2xl border border-[#B2DFC4] bg-white/85 p-3.5 sm:p-4 space-y-2.5 text-sm text-[#103F2B]/85">
                  <div className="flex items-start gap-2.5">
                    <LuMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#186C42]" />
                    <span>{ADVISOR_PROFILE.officeAddress}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <LuClock className="mt-0.5 h-4 w-4 shrink-0 text-[#E13D7D]" />
                    <span>{ADVISOR_PROFILE.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 space-y-2 text-xs font-medium text-[#145335]">
                <p className="flex items-start gap-2">
                  <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#E13D7D]" />
                  <span>
                    Báo giá trọn gói rõ ràng, cam kết không phát sinh chi phí ẩn
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#E13D7D]" />
                  <span>
                    Tư vấn hồ sơ Visa Mỹ, Úc, Canada, Hàn, Nhật hoàn toàn miễn
                    phí
                  </span>
                </p>
              </div>
            </div>

            <div className="relative mt-6 space-y-3">
              {selectedTourTopic && (
                <div className="rounded-2xl border border-[#FBCFE2] bg-[#FFF5F8] px-3.5 py-2.5 text-xs text-[#103F2B]">
                  <span className="font-semibold text-[#C82564]">
                    Tuyến đang quan tâm:{" "}
                  </span>
                  <span className="font-bold">{selectedTourTopic}</span>
                </div>
              )}
              <Button
                variant="secondary"
                size="lg"
                href={ADVISOR_PROFILE.zaloLink}
                target="_blank"
                rel="noreferrer"
                leftIcon={<LuMessageCircleHeart className="h-5 w-5" />}
                fullWidth
              >
                Nhắn Zalo nhận ưu đãi ngay
              </Button>
            </div>
          </Card>

          {/* Right Form */}
          {/* <Card tone="blush" padding="lg" className="p-5 sm:p-7 lg:col-span-7">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center py-8 sm:py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF9F2] text-[#186C42] ring-8 ring-[#D7F0E0]/60">
                  <LuCheck className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-xl sm:text-2xl font-bold text-[#103F2B]">
                  Đã ghi nhận yêu cầu tư vấn của {customerName}!
                </h3>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-[#103F2B]/80">
                  {ADVISOR_PROFILE.nickname} đã nhận thông tin quan tâm tuyến{" "}
                  <strong className="text-[#C82564]">{destination}</strong> (
                  {guestCount}) và sẽ liên hệ qua số <strong>{phone}</strong>{" "}
                  trong ít phút tới.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmittedTopic(null);
                      setNote("");
                    }}
                    className="w-full sm:w-auto"
                  >
                    Gửi thêm yêu cầu khác
                  </Button>
                  <Button
                    variant="primary"
                    href={ADVISOR_PROFILE.zaloLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    Chat Zalo ngay với {ADVISOR_PROFILE.nickname}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#FBCFE2] pb-3">
                  <h3 className="text-base sm:text-lg font-bold text-[#103F2B]">
                    Đăng ký nhận lịch trình & báo giá tour
                  </h3>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#C82564] border border-[#FBCFE2]">
                    Phản hồi trong 15’
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-bold text-[#103F2B]"
                    >
                      Họ và tên của bạn *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="VD: Chị Lan / Anh Minh"
                      className="w-full rounded-2xl border border-[#FBCFE2] bg-white px-4 py-2.5 text-base sm:text-sm text-[#103F2B] focus:border-[#E13D7D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-xs font-bold text-[#103F2B]"
                    >
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="VD: 0909 xxx xxx"
                      className="w-full rounded-2xl border border-[#FBCFE2] bg-white px-4 py-2.5 text-base sm:text-sm text-[#103F2B] focus:border-[#E13D7D] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-destination"
                      className="mb-1.5 block text-xs font-bold text-[#103F2B]"
                    >
                      Tour / Điểm đến quan tâm
                    </label>
                    <input
                      id="contact-destination"
                      list="tour-destinations-list"
                      value={destination}
                      onChange={(e) =>
                        setDestinationOverride({
                          topic: selectedTourTopic,
                          value: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#FBCFE2] bg-white px-4 py-2.5 text-base sm:text-sm text-[#103F2B] focus:border-[#E13D7D] focus:outline-none"
                    />
                    <datalist id="tour-destinations-list">
                      {DESTINATION_OPTIONS.map((option) => (
                        <option key={option} value={option} />
                      ))}
                    </datalist>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-guests"
                      className="mb-1.5 block text-xs font-bold text-[#103F2B]"
                    >
                      Số lượng thành viên dự kiến
                    </label>
                    <select
                      id="contact-guests"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full rounded-2xl border border-[#FBCFE2] bg-white px-4 py-2.5 text-base sm:text-sm text-[#103F2B] focus:border-[#E13D7D] focus:outline-none"
                    >
                      <option value="1 – 2 khách">
                        1 – 2 khách (Cặp đôi / Cá nhân)
                      </option>
                      <option value="2 – 4 khách">
                        2 – 4 khách (Gia đình nhỏ)
                      </option>
                      <option value="5 – 10 khách">
                        5 – 10 khách (Đại gia đình / Nhóm bạn)
                      </option>
                      <option value="Trên 10 khách">
                        Trên 10 khách (Đoàn công ty / Riêng)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-note"
                    className="mb-1.5 block text-xs font-bold text-[#103F2B]"
                  >
                    Ghi chú thêm (ngày đi dự kiến, yêu cầu khách sạn, Visa...)
                  </label>
                  <textarea
                    id="contact-note"
                    rows={4}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="VD: Dự kiến đi Đà Nẵng hoặc Nhật Bản dịp Tết / Tháng 4, cần tư vấn thêm hồ sơ Visa cho bố mẹ..."
                    className="w-full rounded-2xl border border-[#FBCFE2] bg-white px-4 py-2.5 text-base sm:text-sm text-[#103F2B] focus:border-[#E13D7D] focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  rightIcon={<LuSend className="h-4 w-4" />}
                  fullWidth
                >
                  Gửi yêu cầu tư vấn miễn phí
                </Button>
              </form>
            )}
          </Card> */}
        </div>
      </div>
    </section>
  );
}
