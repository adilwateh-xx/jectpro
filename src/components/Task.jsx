import TaskList from "./TaskList"
import { FiFastForward } from "react-icons/fi";
import { TfiList, TfiCalendar ,TfiLayoutGrid2} from "react-icons/tfi";


function Task() {
    // ['Upcoming', 'Today', 'Calendar', 'Sticky Wall']
  const list = [
    {
        icon: <FiFastForward/>,
        message: 'Upcoming',
        count: 1
    },
    {
        icon: <TfiList/>,
        message: 'Today',
        count: 2
    },
    {
        icon: <TfiCalendar/>,
        message: 'Calendar',
        count: 2
    },
    {
        icon: <TfiLayoutGrid2/>,
        message: 'Sticky Wall',
        count:2
    },
  ]
  return (
    <div className="flex  flex-col">
        <h1 className="text-xs font-medium ml-5">TASKS</h1>
        <TaskList list={list}/>
    </div>
  )
}

export default Task