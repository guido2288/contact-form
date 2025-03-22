
const FormInput = ({inputName , type}) => {
  return (
    <div className="flex flex-col w-full mb-6">
        <label htmlFor="" className='text-[#2A4144] font-medium mb-4'>{inputName ? inputName : ""}<span className='text-[#0C7D69]'> *</span></label>
        <input type={type} className=' rounded-lg border-[1px] border-[#86A2A5] py-3 px-6 text-[#2A4144] text-lg outline-[#0C7D69] cursor-pointer hover:border-[#0C7D69]'/>
    </div>
  )
}

export default FormInput