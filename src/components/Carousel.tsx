import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ExperienceCard from "./ExperienceCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({
   slides,
}: {
   slides: {
      dates: string;
      companyName: string;
      role: string;
      description: string;
   }[];
}) {
   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={1}
         centeredSlides={true}
         navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
         }}
         className="cursor-pointer"
      >
         {slides.map((slide, i) => {
            return (
               <SwiperSlide key={i}>
                  <ExperienceCard
                     dates={slide.dates}
                     companyName={slide.companyName}
                     role={slide.role}
                     description={slide.description}
                  />
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
}
