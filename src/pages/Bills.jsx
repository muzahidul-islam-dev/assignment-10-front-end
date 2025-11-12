import React from 'react'
import Bill from '../components/Bill'

function Bills() {
    return (
        <div className='bg-gray-50 dark:bg-gray-900'>
            <section className='max-w-7xl mx-auto px-10 py-20'>
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

export default Bills
