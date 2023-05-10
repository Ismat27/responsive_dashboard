import PromotionCard from "./PromotionCard";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Pagination, Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { promotion_data } from "../data/promotions";

register();

const Promotions = () => {
  return (
    <section>
      <div className="lg:max-w-md">
        <Swiper
          modules={[Pagination, Grid]}
          breakpoints={{
            "1024": {
              // pagination: false,
              grid: {
                rows: 3,
                fill: "row",
              },
              spaceBetween: 10,
            },
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".pagination-box",
          }}
        >
          {promotion_data.map((item, index) => {
            return (
              <SwiperSlide className="" key={index}>
                <PromotionCard {...item} countdown_bg={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="pagination-box flex justify-center gap-1 mt-4"></div>
      </div>
    </section>
  );
};

export default Promotions;
