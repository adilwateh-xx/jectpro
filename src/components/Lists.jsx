import ListItem from "./ListList";
import { BiSolidCircle } from "react-icons/bi";

function Lists() {
    const list = [
    {
        icon: <BiSolidCircle  color="399918"/>,
        message: 'Personal',
        count: 1
    },
    {
        icon: <BiSolidCircle />,
        message: 'Work',
        count: 2
    },
    {
        icon: <BiSolidCircle />,
        message: 'List 1',
        count: 2
    },
    
    ]
    
    return (
      <div className="flex  flex-col">
        <h1 className="text-xs font-medium ml-5">LISTS</h1>
        <ListItem list={list}/>
    </div>
    
  )
}

export default Lists