import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import NotFoundBanner from './../assets/404.svg'
function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="h-screen w-full grid justify-center items-center">
                <div>
                    <img src={NotFoundBanner} alt="" />
                    <h3 className='text-center text-4xl font-bold my-10'>Not Found</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound
