
const FormMessage = () => {
  return (
    <div className=" flex flex-col mt-4">
        <label className='text-[#2A4144] font-medium mb-4'>Message<span className='text-[#0C7D69]'> *</span></label>
        <textarea rows={5} cols={5} className="resize-none rounded-lg border-[1px] border-[#86A2A5] py-3 px-6 text-[#2A4144] text-lg outline-[#0C7D69] cursor-pointer hover:border-[#0C7D69]"></textarea>
    </div>
  )
}

export default FormMessage