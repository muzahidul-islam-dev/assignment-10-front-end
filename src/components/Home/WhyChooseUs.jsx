import { TrendingUp, Zap } from 'lucide-react'
import React from 'react'

function WhyChooseUs() {
    return (
        <div className='bg-gray-50'>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 hover:shadow-xl transition shadow-lg border-gray-200">
                        <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Secure Payments</h3>
                        <p className="text-muted-foreground">
                            Your payment information is encrypted and secured with industry-standard security protocols.
                        </p>
                    </div>

                    <div className="p-8 hover:shadow-xl transition shadow-lg border-gray-200">
                        <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Fast Service</h3>
                        <p className="text-muted-foreground">
                            Process your bills instantly with our quick and efficient payment system.
                        </p>
                    </div>

                    <div className="p-8 hover:shadow-xl transition shadow-lg border-gray-200">
                        <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Accurate Records</h3>
                        <p className="text-muted-foreground">
                            Keep track of all your bills and payments with detailed transaction records.
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default WhyChooseUs
