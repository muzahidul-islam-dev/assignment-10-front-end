import React from 'react'
import Bill from '../Bill'

function RecentBillSection() {
    return (
        <section className='max-w-7xl mx-auto px-10 my-20'>
                <h3 className='text-4xl text-center dark:text-white font-semibold'>Utility Categories</h3>
                <div className="grid grid-cols-3 gap-10 my-10">
                    <Bill />
                    <Bill />
                    <Bill />
                    <Bill />
                </div>
            </section>
    )
}

export default RecentBillSection
