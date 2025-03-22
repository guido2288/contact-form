import React from 'react'
import FormInput from './FormInput'
import FormCheckBox from './FormCheckBox'
import FormMessage from './FormMessage'

const FormContact = () => {
  return (
    <form className='bg-white p-6 rounded-2xl max-w-[736px] flex flex-col w-[90%]'>
      <h2 className='text-[32px] font-bold mb-8 text-[#2A4144]'>Contact Us</h2>

      <div className='flex flex-col md:flex-row gap-4'>
        <FormInput inputName={"First Name"} type={"text"}/>
        <FormInput inputName={"Last Name"} type={"text"}/>
      </div>

      <FormInput inputName={"Email Address"} type={"email"}/>

      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <FormCheckBox />
      </div>


      <FormMessage />

      <div className='my-10 flex items-center'>
        <input type="checkbox" className='text-[#2A4144] accent-[#0C7D69]' />
        <p className='px-[24px]'>I consent to being contacted by the team <span className='text-[#0C7D69]'> *</span></p>
      </div>

      <button className='bg-[#0C7D69] px-10 py-4 rounded-lg text-lg font-bold text-white hover:bg-[#03201A] transition-all delay-100 ease-in-out cursor-pointer'>Submit</button>

    </form>
  )
}

export default FormContact