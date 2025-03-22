
const FormCheckBox = ({register, errors}) => {

  return (
    <div className="flex flex-col w-full">
        <label className='text-[#2A4144] font-medium mb-4'>Query Type <span className='text-[#0C7D69]'>*</span></label>
        <div className="flex flex-col gap-4 md:flex-row md:justify-around w-full">

            <div className="flex items-center rounded-lg md:w-full border-[1px] gap-4 border-[#86A2A5] py-3 px-6 text-[#2A4144] text-lg outline-[#0C7D69] cursor-pointer hover:border-[#0C7D69]">
                <input 
                {...register("radio",{
                  required : {
                    value: true,
                    message: "Please select a query type"
                  }}
                )}
                type="radio" 
                value="General Enquiry" 
                className=" cursor-pointer accent-[#0C7D69] w-4 h-4"
                />
                <p>General Enquiry</p>
            </div>

            <div className="flex items-center rounded-lg md:w-full border-[1px] gap-4 border-[#86A2A5] py-3 px-6 text-[#2A4144] text-lg outline-[#0C7D69] cursor-pointer hover:border-[#0C7D69]">
                <input 
                {...register("radio",{
                  required : {
                    value: true,
                    message: "Please select a query type"
                  }}
                )}
                type="radio" 
                value="Support Request" 
                className=" cursor-pointer accent-[#0C7D69] w-4 h-4"
                />
                <p>Support Request</p>
            </div>

        </div>
            {
              errors?.message && <span className="text-[#D73C3C]">{errors.message}</span>
            }
    </div>
  )
}

export default FormCheckBox