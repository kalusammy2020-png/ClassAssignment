import React from 'react'

function Hero() {
  return (
    <section className='flex justify-between items-center w-full space-x-5 ml-8 mr-5 my-20'>
        <div className='w-[55%] space-y-5'>
            <h1 className='font-bold text-3xl'>Own Your</h1>
            <h2 className='font-bold text-3xl text-amber-600'>Orders Easily.</h2>
            <p>Helping Business Take Orders,
                <br />
                Manage Their Sales & Get Paid
            </p>
            <button className='bg-amber-600 text-white p-3 rounded-lg'><a href="">Get Started ↗</a></button>
        </div>
        <div>
            <img src="public/Oath Hero Section.png" alt="Hero image" className='w-[40%]' />
        </div>

    </section>
  )
}

export default Hero