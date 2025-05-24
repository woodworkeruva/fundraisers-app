

export default function FormData() {


    return (
    <div className="bg-black min-h-screen w-full  z-50  flex items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="bg-neutral-950 text-white w-full max-w-[90%] sm:max-w-2xl p-14 sm:p-16 md:p-20 mt-16 rounded-2xl relative"
        style={{ boxShadow: '0 0 10px 1px rgba(0, 100, 255, 1)' }}>
        <h2 className="text-sm md:text-xl font-thin mb-6 text-white">
          Add <span className="text-cyan-400 text-sm md:text-xl">Fund</span>raisers New Program
        </h2>
        <form className="space-y-4">

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Program Name"
              className="w-full md:w-1/2 px-5  py-2 md:py-3 border-[1px] border-blue-500 bg-neutral-900 rounded-md text-white placeholder:font-thin placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="PIC Name"
              className="w-full md:w-1/2 px-5   py-2 md:py-3 border border-blue-500 bg-neutral-900 rounded-md text-white placeholder:font-thin placeholder:text-sm"
            />
          </div>

          <input
            type="text"
            placeholder="Address PIC"
            className="w-full px-5 py-2 md:py-3 border border-blue-500 bg-neutral-900 rounded-md text-white placeholder:font-thin placeholder:text-sm"
          />

          <textarea
            placeholder="Program Description"
            className="w-full px-5 py-2 md:py-3 border border-blue-500 bg-neutral-900 rounded-md text-white placeholder:font-thin placeholder:text-sm"
            rows={3}
          />

          <div className="flex flex-col md:flex-row gap-4">
            {/* <input
              type="text"
              placeholder="Category Program"
              className="w-full md:w-1/2 px-5  py-2 md:py-3 border border-blue-500 bg-neutral-900 rounded-md text-white placeholder:font-thin placeholder:text-sm"
            /> */}
            <select
            className="w-full md:w-1/2 px-5 pr-10 py-2 md:py-3 border border-blue-500 bg-neutral-900 rounded-md text-sm text-neutral-400 appearance-none cursor-pointer"
            defaultValue=""
            >
            <option value="" disabled>Select Category →</option>
            <option value="Sociaty">Sociaty</option>
            <option value="Environment">Environment</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Emergency">Emergency</option>
            <option value="Animals">Animals</option>
            <option value="Sports">Sports</option>
            <option value="Arts">Arts</option>
            <option value="Culture">Culture</option>
            <option value="Religious">Religious</option>
            </select>



            <input
              type="text"
              placeholder="Program Link"
              className="w-full md:w-1/2 px-5  py-2 md:py-3 border border-blue-500 bg-neutral-900 rounded-md text-white placeholder:font-thin placeholder:text-sm"
            />
          </div>

          <input
            type="text"
            placeholder="Target Budget (IDRX)"
            className="w-full px-5 py-2 md:py-3  border border-blue-500 bg-neutral-900 rounded-md text-white placeholder:font-thin placeholder:text-sm"
          />
          

          <input
            type="text"
            placeholder="Photo Program URL"
            className="w-full px-5 py-2 md:py-3  border border-blue-500 bg-neutral-900 rounded-md text-white placeholder:font-thin placeholder:text-sm"
          />

          <button
            type="submit"
            className="w-full py-2 md:py-3 mt-4 bg-cyan-400 hover:bg-cyan-500 text-white  rounded-md transition duration-300 font-thin cursor-pointer border-2 border-cyan-500 text-sm md:text-md"
          >
            Add Program
          </button>
        </form>
      </div>
    </div>

    )
}