import { Calendar, MapPin, Zap } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../components/Button'

import ElectricityBill from './../assets/electricity-bill.jpg'
function SingleBill({ bill }) {
    const [canPayNow, setCanPayNow] = useState(true)
    const [showPayModal, setShowPayModal] = useState(false)
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-lg">
                            <img src={ElectricityBill || "/placeholder.svg"} alt={bill?.title} className="object-cover" />
                        </div>


                        <div className="space-y-6">

                            <div className="p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h1 className="text-3xl font-bold">Bill Title</h1>
                                        <p className="mt-1">{bill?.category} Utility Bill</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-bold ">500</div>
                                        <p className="text-sm">Amount Due</p>
                                    </div>
                                </div>
                            </div>


                            <div className="grid grid-cols-2 bg-white dark:bg-gray-900 shadow-lg rounded-lg gap-4 border border-gray-100 dark:border-gray-800">
                                <div className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Calendar className="w-5 h-5" />
                                        <span className="text-sm">Billing Date</span>
                                    </div>
                                    <p className="font-semibold">{bill?.date}</p>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Calendar className="w-5 h-5" />
                                        <span className="text-sm">Due Date</span>
                                    </div>
                                    <p className="font-semibold">{bill?.dueDate}</p>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MapPin className="w-5 h-5" />
                                        <span className="text-sm">Location</span>
                                    </div>
                                    <p className="font-semibold text-sm">{bill?.location}</p>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Zap className="w-5 h-5 " />
                                        <span className="text-sm ">Previous Bill</span>
                                    </div>
                                    <p className="font-semibold">{bill?.previousAmount}</p>
                                </div>
                            </div>


                            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                                <h2 className="text-lg font-semibold mb-3">Bill Details</h2>
                                <p className=" mb-4">{bill?.description}</p>

                                <div className="bg-muted/50 p-4 rounded-lg">
                                    <div className="flex justify-between mb-2">
                                        <span className="">Meter Reading:</span>
                                        <span className="font-semibold">{bill?.meterReading}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="">Usage Status:</span>
                                        <span className="font-semibold ">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>

                        <div className="p-6 sticky bg-white dark:bg-gray-900 rounded-lg top-20 shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Payment</h2>

                            <div className="bg-primary/10 p-4 rounded-lg mb-6">
                                <p className="text-sm mb-1">Total Amount Due</p>
                                <p className="text-3xl font-bold">500</p>
                            </div>

                            {canPayNow ? (
                                <>
                                    <Button onClick={() => setShowPayModal(true)} className="w-full mb-3 gap-2">
                                        Pay Now
                                    </Button>
                                    <p className="text-xs text-center">Secure payment processing</p>
                                </>
                            ) : (
                                <div className="bg-destructive/10 p-4 rounded-lg mb-4">
                                    <p className="text-sm">Only current month bills can be paid.</p>
                                    <p className="text-xs mt-1">
                                        This is a {bill?.isPastDue ? "past due" : "previous month"} bill?.
                                    </p>
                                </div>
                            )}


                            <div className="border-t border-border pt-6 mt-6">
                                <h3 className="text-sm font-semibold mb-3">Payment Methods</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 dark:text-white rounded-full" />
                                        Credit Card
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 dark:text-white rounded-full" />
                                        Debit Card
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 dark:text-white rounded-full" />
                                        Bank Transfer
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {showPayModal && <PayBillModal bill={bill} onClose={() => setShowPayModal(false)} />}
        </div>
    )
}

export default SingleBill
