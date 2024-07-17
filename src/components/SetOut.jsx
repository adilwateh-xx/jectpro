import { FiSettings } from "react-icons/fi";
import { VscDiffRenamed } from "react-icons/vsc";


function SetOut() {
    return (
        <div className="h-full flex items-end">
            <div> 
                <div className="ml-5 flex py-1 ">
                    <div className="items-center flex"><FiSettings/></div> 
                     <div className="mb-1 pl-3">settings </div> 
                </div>
                <div className="ml-5 flex py-1">
                    <div className="items-center flex"><VscDiffRenamed/></div> 
                    <div className="mb-1 pl-3">Sign out </div> 
                </div>
            </div>
        </div>
    
  )
}

export default SetOut