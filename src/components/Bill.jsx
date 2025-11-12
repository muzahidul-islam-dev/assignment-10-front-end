import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

import ElectricityBill from './../assets/electricity-bill.jpg'
import { ArrowRight } from 'lucide-react'
function Bill({bill}) {
    return (
        <div className="overflow-hidden hover:shadow-lg shadow-lg dark:shadow-blue-800 border border-gray-200 dark:border-gray-900 rounded-lg transition-shadow">
            <div className="relative h-52 overflow-hidden">
                <img
                    src={bill?.image || "/placeholder.svg"}
                    alt="Title"
                    className="object-cover transition-transform"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2">{bill?.title}</h3>

                <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                        <span className="dark:text-white">Category:</span>
                        <span className="font-medium">{bill?.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="dark:text-white">Location:</span>
                        <span className="font-medium text-right">{bill?.location}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="dark:text-white">Date:</span>
                        <span className="font-medium">{ bill?.date }</span>
                    </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="dark:text-white">Amount:</span>
                        <span className="text-xl font-bold text-primary dark:text-white">{bill?.amount} BDT</span>
                    </div>

                    <Link to={`/bills/${bill?._id}`} className="w-full">
                        <Button>
                            See Details <ArrowRight className="w-3 h-3" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Bill
