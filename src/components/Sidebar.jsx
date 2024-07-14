import { FiMenu, FiSearch   } from "react-icons/fi";
import Task from './Task'
import Lists from "./Lists";
import Tags from "./Tags";


function Sidebar() {
  return (
    <div className="sidebar flex border w-[30%] h-full">
      <div className="sidebar-container shadow-md rounded-xl bg-[#f5f5f5] flex flex-col w-full m-4 border py-3 px-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Menu</h1>
          <div className="flex items-center mr-3 cursor-pointer">
            <FiMenu  size={24}/>
          </div>
        </div>

        {/* search bar */}
        <div className="relative z-0 w-full my-5 group">
          <div className="flex">
            <div className="flex items-center mx-2">
              <FiSearch size={20} color="black"/>
            </div>
            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:#f5f5f5 focus:outline-none focus:ring-0 focus:#f5f5f5 peer" placeholder=" " required />
            <label htmlFor="floating_email"  className="peer-focus:font-medium absolute left-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:#f5f5f5 peer-focus:dark:#f5f5f5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
        </div>


        <Task />
        <Lists />
        <Tags/>
        <h1>ADil</h1>
        
      </div>
    </div>
  )
}

export default Sidebar