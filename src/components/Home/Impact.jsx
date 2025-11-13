import React from 'react'

function Impact() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-primary/10 to-accent/10 rounded-xl mb-10 my-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
                    <p className="text-muted-foreground">Bills Paid</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15K+</div>
                    <p className="text-muted-foreground">Registered Users</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4</div>
                    <p className="text-muted-foreground">Active Categories</p>
                </div>
            </div>
        </section>
    )
}

export default Impact
