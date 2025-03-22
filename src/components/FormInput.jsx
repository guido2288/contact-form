
const FormInput = ({inputName , type , register , errors , name, pattern}) => {

  return (
    <div className="flex flex-col w-full mb-6">
        <label htmlFor="" className='text-[#2A4144] font-medium mb-4'>{inputName ? inputName : ""}<span className='text-[#0C7D69]'> *</span></label>
        <input 
          {...register(name, {
            required: {
              value : true,
              message: "This field is required"
            },
            minLength: {
              value: 2,
              message: "The minimum characters required is 2"
            },
            pattern
            
          })} 
          type={type} 
          className={`rounded-lg border-[1px] ${errors ? "border-[#D73C3C]" : "border-[#86A2A5]"}  py-3 px-6 text-[#2A4144] text-lg outline-[#0C7D69] cursor-pointer hover:border-[#0C7D69]`}
        />
        {
          errors?.message && <span className="text-[#D73C3C]">{errors.message}</span>
        }
    </div>
  )
}

export default FormInput