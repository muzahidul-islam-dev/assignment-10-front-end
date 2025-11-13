import React from 'react'

import Banner1 from './../../assets/banner-1.jpg'
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../Button'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function HeroSection() {
    return (
        <section className=''>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='h-[400px] md:h-[700px] lg:h-screen'
                    modules={[Pagination, Navigation]}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    
                >
                    <SwiperSlide>
                        <div
                            key={1}
                            className={`absolute inset-0 transition-opacity duration-1000 opacity-100`}
                        >
                            <img
                                src={Banner1 || "/placeholder.svg"}
                                alt={'banner 1'}
                                className="object-cover w-full h-screen"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white px-4 max-w-2xl">
                                    <h1 className="text-3xl md:text-5xl font-bold mb-4">24/7 Bill Access</h1>
                                    <p className="text-lg md:text-xl mb-8">Access and pay your bills anytime, anywhere with our mobile-friendly platform</p>
                                    <Link href="/bills">
                                        <Button>
                                            View Bills
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            key={1}
                            className={`absolute inset-0 transition-opacity duration-1000 opacity-100`}
                        >
                            <img
                                src={Banner1 || "/placeholder.svg"}
                                alt={'banner 1'}
                                className="object-cover w-full h-screen"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white px-4 max-w-2xl">
                                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Pay Bills Easily and Securely</h1>
                                    <p className="text-lg md:text-xl mb-8">Manage all your utility bills in one place with quick and secure payments</p>
                                    <Link href="/bills">
                                        <Button>
                                            View Bills
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            key={1}
                            className={`absolute inset-0 transition-opacity duration-1000 opacity-100`}
                        >
                            <img
                                src={Banner1 || "/placeholder.svg"}
                                alt={'banner 1'}
                                className="object-cover w-full h-screen"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white px-4 max-w-2xl">
                                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Track Your Usage</h1>
                                    <p className="text-lg md:text-xl mb-8">Monitor your utility consumption and get detailed billing insights</p>
                                    <Link href="/bills">
                                        <Button>
                                            View Bills
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
    )
}

export default HeroSection
