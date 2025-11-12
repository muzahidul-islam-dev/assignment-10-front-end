import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Droplets, Flame, Wifi, Zap } from 'lucide-react';
import Bill from '../components/Bill';
import HeroSection from '../components/Home/HeroSection';

function Home() {
    return (
        <div>
            <HeroSection />
            <section className='max-w-7xl mx-auto px-10 my-20'>
                <h3 className='text-4xl text-center dark:text-white font-semibold'>Utility Categories</h3>
                <div className="grid grid-cols-4 gap-10 my-10">
                    <div className="group shadow border rounded-lg border-gray-200 dark:bg-linear-to-br dark:from-pink-500 dark:to-orange-500 dark:border-none hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500 hover:shadow-lg transition-all cursor-pointer p-6 h-full">
                        <div
                            className={`w-20 h-20 bg-linear-to-br dark:bg-linear-to-br dark:from-white dark:to-white from-pink-500 group-hover:from-white m-auto rounded-full to-orange-500 group-hover:to-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        >
                            <Zap className="w-8 h-8 text-white dark:text-pink-500 group-hover:text-pink-500" />
                        </div>
                        <h3 className="text-xl group-hover:text-white font-semibold mb-2 text-center">Electricity</h3>
                    </div>
                    <div className="group shadow border rounded-lg border-gray-200 dark:bg-linear-to-br dark:from-pink-500 dark:to-orange-500 dark:border-none hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500 hover:shadow-lg transition-all cursor-pointer p-6 h-full">
                        <div
                            className={`w-20 h-20 bg-linear-to-br dark:bg-linear-to-br dark:from-white dark:to-white from-pink-500 group-hover:from-white m-auto rounded-full to-orange-500 group-hover:to-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        >
                            <Flame className="w-8 h-8 text-white dark:text-pink-500 group-hover:text-pink-500" />
                        </div>
                        <h3 className="text-xl group-hover:text-white font-semibold mb-2 text-center">Gash</h3>
                    </div>
                    <div className="group shadow border rounded-lg border-gray-200 dark:bg-linear-to-br dark:from-pink-500 dark:to-orange-500 dark:border-none hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500 hover:shadow-lg transition-all cursor-pointer p-6 h-full">
                        <div
                            className={`w-20 h-20 bg-linear-to-br dark:bg-linear-to-br dark:from-white dark:to-white from-pink-500 group-hover:from-white m-auto rounded-full to-orange-500 group-hover:to-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        >
                            <Droplets className="w-8 h-8 text-white dark:text-pink-500 group-hover:text-pink-500" />
                        </div>
                        <h3 className="text-xl group-hover:text-white font-semibold mb-2 text-center">Water</h3>
                    </div>
                    <div className="group shadow border rounded-lg border-gray-200 dark:bg-linear-to-br dark:from-pink-500 dark:to-orange-500 dark:border-none hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500 hover:shadow-lg transition-all cursor-pointer p-6 h-full">
                        <div
                            className={`w-20 h-20 bg-linear-to-br dark:bg-linear-to-br dark:from-white dark:to-white from-pink-500 group-hover:from-white m-auto rounded-full to-orange-500 group-hover:to-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        >
                            <Wifi className="w-8 h-8 text-white dark:text-pink-500 group-hover:text-pink-500" />
                        </div>
                        <h3 className="text-xl  group-hover:text-white font-semibold mb-2 text-center">Internet</h3>
                    </div>
                </div>
            </section>
            <section className='max-w-7xl mx-auto px-10 my-20'>
                <h3 className='text-4xl text-center dark:text-white font-semibold'>Utility Categories</h3>
                <div className="grid grid-cols-3 gap-10 my-10">
                    <Bill />
                    <Bill />
                    <Bill />
                    <Bill />
                </div>
            </section>
        </div>
    )
}

export default Home
