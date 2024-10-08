import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id="contact-us">
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up Form 
          <span className='text-coral-red'> Updates </span> & Newsletter</h3>
          <div className='flex gap-2 justify-center
          items-center flex-col'>
            <input type='text' placeholder='Enter your email' className='border-none w-[400px] max-sm:w-100px bg-gray-300 rounded-xl p-3 input'/>
            <Button label="Sign Up"/>
          </div>
    </section>
  )
}

export default Subscribe
