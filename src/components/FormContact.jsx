import React from 'react'
import { useForm } from 'react-hook-form'
import FormInput from './FormInput'
import FormCheckBox from './FormCheckBox'
import FormMessage from './FormMessage'

const FormContact = () => {

  const { register , handleSubmit, formState: { errors } } = useForm();

  let pattern = {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ,
    message: "Please enter a valid email address"
  }

  const onSubmit = handleSubmit( (data) => {
    console.log(data)
    
  } ) 
  

  return (
    <form onSubmit={ onSubmit } className='bg-white p-6 rounded-2xl max-w-[736px] flex flex-col w-[90%]'>
      <h2 className='text-[32px] font-bold mb-8 text-[#2A4144]'>Contact Us</h2>

      <div className='flex flex-col md:flex-row gap-4'>
        <FormInput register={register} errors={errors.name} inputName={"First Name"} name={"name"} type={"text"} />
        <FormInput register={register} errors={errors.lastName} inputName={"Last Name"} name={"lastName"} type={"text"}/>
      </div>

      <FormInput pattern={pattern} errors={errors.email} register={register} inputName={"Email Address"} name={"email"} type={"email"}/>

      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <FormCheckBox register={register} errors={errors.radio}/>
      </div>


      <FormMessage register={register} errors={errors.message}/>

      <div className='my-10 flex items-center relative'>
        <input 
          {...register("Consent", {             
              required: {
              value : true,
              message: "To submit this form, please consent to being contacted"
            }, })} 
          type="checkbox" 
          className='text-[#2A4144] accent-[#0C7D69]' 
        />
        <p className='px-[24px]'>I consent to being contacted by the team <span className='text-[#0C7D69]'> *</span></p>

        {
          errors?.Consent?.message && <span className="text-[#D73C3C] absolute bottom-[-24px]">{errors.Consent.message}</span>
        }


      </div>

      <button type='submit' className='bg-[#0C7D69] px-10 py-4 rounded-lg text-lg font-bold text-white hover:bg-[#03201A] transition-all delay-100 ease-in-out cursor-pointer'>Submit</button>

    </form>
  )
}

export default FormContact