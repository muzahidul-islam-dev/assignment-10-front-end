import React, { useEffect, useState } from 'react'
import Bill from '../components/Bill'
import axios from 'axios'
import Loading from '../components/Loading'

function Bills() {
    const [data, setData] = useState([])
    const [bills, setBills] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        axios.get('/bill').then(response => {
            setData(response?.data?.data)
            setBills(response?.data?.data)
            setLoading(false)
        }).catch(error => {
            console.log(error)
            setLoading(false)
        })
    }, [])

    const handleSearch = (searchQuery, category) => {
        setSearchData(searchQuery)
        setSelectedCategory(category)
        const categoryResult = category == 'all' ? data : data?.filter(item => item?.category?.toLowerCase() == category.toLowerCase())
        console.log(category)
        const result = categoryResult?.filter(item => item?.title?.toLowerCase()?.includes(searchQuery))
        setBills(result);
    }

    if (loading) return <Loading />
    return (
        <section className='max-w-7xl mx-auto px-10 my-20'>
            <h3 className='text-4xl text-center dark:text-white font-semibold'>All Utility Bills</h3>
            <div className='my-5'>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <div className="flex-1 relative">
                        <input type='text' className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search bills by title or location..."
                            onChange={(e) => handleSearch(e.target.value, selectedCategory)}
                            className="px-5 h-10 w-full border border-gray-900 py-2 dark:border-gray-700 rounded-lg outline-none"
                        />
                    </div>

                    <select value={selectedCategory} className='border border-gray-800 dark:border-gray-700 px-5 py-2 rounded-lg dark:bg-gray-900 outline-none' onChange={(e) => handleSearch(searchData,e.target.value)}>
                            <option value="all">All Categories</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Gas">Gas</option>
                            <option value="Water">Water</option>
                            <option value="Internet">Internet</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    bills?.map(bill => <Bill key={bill?._id} bill={bill} />)
                }
            </div>
        </section>
    )
}

export default Bills
