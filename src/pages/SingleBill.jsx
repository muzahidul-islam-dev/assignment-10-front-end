import { Calendar, MapPin, Zap } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import Button from '../components/Button'
import Loading from './../components/Loading'
import ElectricityBill from './../assets/electricity-bill.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { UserProvider } from '../context/AuthContext'
function SingleBill() {
    const [bill, setBill] = useState({})
    const [canPayNow, setCanPayNow] = useState(true)
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        billId: '',
        amount: 0,
        username: '',
        address: '',
        phone: '',
        date: new Date().toLocaleDateString(),
        note: ''
    })
    const {user} = use(UserProvider)
    useEffect(() => {
        axios.get(`/bill/${id}`).then(response => {
            setBill(response?.data?.data)
            setLoading(false)
        }).catch(error => {
            console.log(error)
            setLoading(false)
        })


    }, [])


    useEffect(() => {
        if (bill) {
            const inputDate = new Date(bill?.date);
            const now = new Date();

            let prevMonth = now.getMonth() - 1;
            let prevYear = now.getFullYear();

            if (prevMonth < 0) {
                prevMonth = 11;
                prevYear = prevYear - 1;
            }

            const isPreviousMonth =
                inputDate.getFullYear() === prevYear &&
                inputDate.getMonth() === prevMonth;

            setCanPayNow(isPreviousMonth)

        }
    }, [bill])


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        if (formData?.phone == '' && formData?.address == '' && formData?.note == '') {
            return toast.error('All field is required.')
        }
        axios.post('/bill/pay', formData).then(response => {
            toast.success(response?.data?.message)
            document.getElementById('my_modal_2').close()
            setFormData({
                ...formData,
                address: '',
                phone: '',
                note: ''
            })
            setIsSubmitting(false)
        }).catch(error => {
            console.log(error)
            
            setIsSubmitting(false)
        })
    }

    const onClose = () => {
        document.getElementById('my_modal_2').close()
        
            setFormData({
                ...formData,
                address: '',
                phone: '',
                note: ''
            })
    }

    const handleOpenPaymentModal = () => {
        document.getElementById('my_modal_2').showModal()
        console.log(user.email)
        setFormData({
            ...formData,
            email: user?.email,
            billId: bill?._id,
            amount: bill?.amount
        })
    }

    if (loading) return <Loading />
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-lg">
                            <img src={bill?.image || "/placeholder.svg"} alt={bill?.title} className="object-cover" />
                        </div>


                        <div className="space-y-6">

                            <div className="p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                                <div className="grid lg:grid-cols-6 items-start justify-between mb-4 gap-10 lg:gap-0">
                                    <div className='lg:col-span-4'>
                                        <h1 className="text-xl md:text-3xl font-bold">{bill?.title}</h1>
                                        <p className="mt-1">{bill?.category} Utility Bill</p>
                                    </div>
                                    <div className="lg:text-right lg:col-span-2">
                                        <div className="text-2xl font-bold ">{bill?.amount} BDT</div>
                                        <p className="text-sm">Amount Due</p>
                                    </div>
                                </div>
                            </div>


                            <div className="grid grid-cols-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg gap-4 border border-gray-100 dark:border-gray-800">
                                <div className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Calendar className="w-5 h-5" />
                                        <span className="text-sm">Billing Date</span>
                                    </div>
                                    <p className="font-semibold">{bill?.date}</p>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MapPin className="w-5 h-5" />
                                        <span className="text-sm">Location</span>
                                    </div>
                                    <p className="font-semibold text-sm">{bill?.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>

                        <div className="p-6 sticky bg-white dark:bg-gray-800 rounded-lg top-20 shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Payment</h2>

                            <div className="bg-primary/10 dark:bg-gray-800 p-4 rounded-lg mb-6">
                                <p className="text-sm mb-1">Total Amount Due</p>
                                <p className="text-3xl font-bold">{bill?.amount}</p>
                            </div>

                            {canPayNow ? (
                                <>
                                    <Button onClick={handleOpenPaymentModal} className="w-full mb-3 gap-2">
                                        Pay Now
                                    </Button>
                                    <p className="text-xs text-center">Secure payment processing</p>
                                </>
                            ) : (
                                <div className="bg-destructive/10 p-4 rounded-lg mb-4">
                                    <p className="text-sm bg-red-400 text-white py-2 px-3 rounded">Only current month bills can be paid.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">

                        <div className="">
                            <div className='my-2'>
                                <label className="text-sm font-medium block mb-1">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    disabled
                                    required
                                    className='border dark:border-gray-700 border-gray-200 dark:text-white bg-gray-200 w-full py-2 px-3 rounded my dark:bg-gray-700 cursor-not-allowed'
                                />
                            </div>
                            <div className='my-2'>
                                <label className="text-sm font-medium block mb-1">Bill ID</label>
                                <input
                                    type="text"
                                    name="billID"
                                    placeholder="Enter your bill id"
                                    value={formData.billId}
                                    disabled
                                    required
                                    className='border dark:border-gray-700 border-gray-200 dark:text-white bg-gray-200 w-full py-2 px-3 rounded my dark:bg-gray-700 cursor-not-allowed'
                                />
                            </div>
                            <div className='my-2'>
                                <label className="text-sm font-medium block mb-1">Amount</label>
                                <input
                                    type="text"
                                    name="amount"
                                    placeholder="Enter your amount"
                                    value={formData.amount}
                                    disabled
                                    required
                                    className='border dark:border-gray-700 border-gray-200 dark:text-white bg-gray-200 w-full py-2 px-3 rounded my dark:bg-gray-700 cursor-not-allowed'
                                />
                            </div>
                            <div className='my-2'>
                                <label className="text-sm font-medium block mb-1">Date</label>
                                <input
                                    type="text"
                                    name="date"
                                    placeholder="Enter your amount"
                                    value={formData.date}
                                    disabled
                                    required
                                    className='border dark:border-gray-700 border-gray-200 dark:text-white bg-gray-200 w-full py-2 px-3 rounded my dark:bg-gray-700 cursor-not-allowed'
                                />
                            </div>

                            <div className='my-2'>
                                <label className="text-sm font-medium block mb-1">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your address"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    className='border dark:border-gray-700 border-gray-200 focus:border-gray-500 dark:text-white w-full py-2 px-3 rounded my outline-none'
                                    required
                                />
                            </div>
                            <div className='my-2'>
                                <label className="text-sm font-medium block mb-1">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter your address"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    className='border dark:border-gray-700 border-gray-200 focus:border-gray-500 dark:text-white w-full py-2 px-3 rounded my outline-none'
                                    required
                                />
                            </div>

                            <div className='my-2'>
                                <label className="text-sm font-medium block mb-1">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className='border dark:border-gray-700 border-gray-200 focus:border-gray-500 dark:text-white w-full py-2 px-3 rounded my outline-none'
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium block mb-1">Additional Info (Optional)</label>
                                <textarea
                                    name="note"
                                    placeholder="Any additional information..."
                                    value={formData.note}
                                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                    className="border dark:border-gray-700 border-gray-200 focus:border-gray-500 dark:text-white w-full py-2 px-3 rounded my outline-none"
                                    rows={3}
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={isSubmitting}
                                className="btn btn-sm border border-transparent hover:text-red-500 bg-red-500 py-5 px-7 rounded text-white hover:bg-transparent hover:border-red-500"
                            >
                                Cancel
                            </button>
                            <button className="btn btn-sm border border-transparent hover:text-blue-800 bg-blue-800 py-5 px-7 rounded text-white dark:hover:text-white hover:bg-transparent hover:border-blue-800">
                                {isSubmitting ? "Processing..." : "Pay Now"}
                            </button>
                        </div>
                    </form>
                </div>

            </dialog>
        </div>
    )
}

export default SingleBill
