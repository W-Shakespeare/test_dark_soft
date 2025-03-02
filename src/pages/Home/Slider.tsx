import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./Slider.module.scss";
import slide1 from "../../assests/img/slide_1.webp";
import slide2 from "../../assests/img/slide_2.webp";

const Slider = () => {
  return (
    <div className={styles.wrapperSlider}>
      <div className={styles.slider}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          fadeEffect={{
            crossFade: true,
          }}
        >
          <SwiperSlide>
            <img src={slide1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
