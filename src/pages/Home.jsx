import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import CategorySection from '../components/Home/CategorySection';
import RecentBillSection from '../components/Home/RecentBillSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Impact from '../components/Home/Impact';

function Home() {
    return (
        <div>
            <HeroSection />
            <CategorySection />
            <RecentBillSection />
            <WhyChooseUs />
            <Impact />
        </div>
    )
}

export default Home
