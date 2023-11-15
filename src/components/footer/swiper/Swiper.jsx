import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, FreeMode, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';




const Slider = () => {
    return (
        <Swiper


            spaceBetween={5}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
        >
            <div>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment.png')} width={98} height={25} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment2.png')} width={114} height={20} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment3.png')} width={61} height={36} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment4.png')} width={110} height={24} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment5.png')} width={87} height={40} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment6.png')} width={151} height={60} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment7.png')} width={56} height={52} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment8.png')} width={104} height={32} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment9.png')} width={100} height={18} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment10.png')} width={99} height={24} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment11.png')} width={64} height={22} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment12.png')} width={151} height={60} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment13.png')} width={67} height={18} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment14.png')} width={151} height={60} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment15.png')} width={98} height={17} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment16.png')} width={151} height={60} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment17.png')} width={124} height={43} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment18.png')} width={123} height={26} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment19.png')} width={123} height={30} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment20.png')} width={100} height={27} draggable={false}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={require('../../../assets/payment21.png')} width={97} height={45} draggable={false}/>
                    </div>
                </SwiperSlide>

            </div>
        </Swiper>
    );
};

export default Slider;


// spaceBetween={5}
// slidesPerView={2}
// loop={true}
// pagination={{
//     clickable: true,
// }}
// navigation={true}
// modules={[Pagination, Navigation]}