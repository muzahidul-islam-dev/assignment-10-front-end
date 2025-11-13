import React, { useEffect, useState } from 'react';
import Bill from '../components/Bill';
import axios from 'axios';
import Loading from '../components/Loading';

function Bills() {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBills = async () => {
            await axios.get('/bill').then(response => {
                setBills(response?.data?.data || []);
                setLoading(false)
            }).catch(error => {
                console.log(error)
                setLoading(false)
            });

        };

        fetchBills();

    }, []);

    const handleFilter = async (search, category) => {
        setSearchTerm(search)
        setSelectedCategory(category)
        await axios.get(`/bill/bill-filter/all?search=${search}&category=${category}`).then(response => {
            setBills(response?.data?.data || []);
            setLoading(false)
        }).catch(error => {
            console.log(error)
            setLoading(false)
        });
    }

    if (loading) return <Loading />;

    return (
        <section className="max-w-7xl mx-auto px-10 my-20">
            <h3 className="text-4xl text-center dark:text-white font-semibold">
                All Utility Bills
            </h3>

            <div className="my-5">
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search bills by title or location..."
                            value={searchTerm}
                            onChange={(e) => handleFilter(e.target.value, selectedCategory)}
                            className="px-5 h-10 w-full border border-gray-900 py-2 dark:border-gray-700 rounded-lg outline-none"
                        />
                    </div>

                    <select
                        value={selectedCategory}
                        onChange={(e) => handleFilter(searchTerm, e.target.value)}
                        className="border border-gray-800 dark:border-gray-700 px-5 py-2 rounded-lg dark:bg-gray-900 outline-none"
                    >
                        <option value="all">All Categories</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Gas">Gas</option>
                        <option value="Water">Water</option>
                        <option value="Internet">Internet</option>
                    </select>
                </div>
            </div>

            {/* 🔹 Bill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {bills.length > 0 ? (
                    bills.map((bill) => <Bill key={bill?._id} bill={bill} />)
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400 col-span-3">
                        No bills found.
                    </p>
                )}
            </div>
        </section>
    );
}

export default Bills;
