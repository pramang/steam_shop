import { MainWrap, VisualWrap } from "./MainStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Content1 from "./Content1";
const Main = () => {
    return (
        <>
        <VisualWrap>
            <h2>Wellcome to Steam Shop</h2>
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
        modules={[Autoplay]}
        >
            <SwiperSlide><img src="./images/BattleGround.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="./images/binding_of_issac.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="./images/five_nights_at_Freddy's.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="./images/VioHazard.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="./images/SanNaBi.jpg"></img></SwiperSlide>
        </Swiper>
        </VisualWrap>
            <MainWrap className="main">
            </MainWrap>
        </>
    );
};
export default Main;