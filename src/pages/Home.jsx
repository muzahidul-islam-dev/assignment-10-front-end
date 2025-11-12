import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import CategorySection from '../components/Home/CategorySection';
import RecentBillSection from '../components/Home/RecentBillSection';

function Home() {
    return (
        <div>
            <HeroSection />
            <CategorySection />
            <RecentBillSection />
        </div>
    )
}

export default Home
