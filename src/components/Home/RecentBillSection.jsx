import React, { useEffect, useState } from 'react'
import Bill from '../Bill'
import axios from 'axios'
import Loading from '../Loading'

function RecentBillSection() {
    const [bills, setBills] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/bill').then(response => {
            setBills(response?.data?.data?.slice(0,6))
            setLoading(false)
        }).catch(error => {
            console.log(error)
            setLoading(false)
        })
    },[])

    if(loading) return <Loading />
    return (
        <section className='max-w-7xl mx-auto px-10 my-20'>
                <h3 className='text-4xl text-center dark:text-white font-semibold'>Utility Categories</h3>
                <div className="grid grid-cols-3 gap-10 my-10">
                    {
                        bills?.map(bill => <Bill key={bill?._id} bill={bill} />)
                    }
                </div>
            </section>
    )
}

export default RecentBillSection
