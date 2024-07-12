import TaskList from "./TaskList"
import { FiFastForward } from "react-icons/fi";

function Task() {
    // ['Upcoming', 'Today', 'Calendar', 'Sticky Wall']
  const list = [
    {
        icon: <FiFastForward/>,
        message: 'Upcoming',
        count: 1
    },
    {
        icon: '',
        message: 'Today',
        count: 2
    },
    {
        icon: '',
        message: 'Calendar',
        count: 2
    },
    {
        icon: '',
        message: 'Sticky Wall',
        count: 2
    },
  ]
  return (
    <div className="flex border flex-col">
        <h1 className="text-xs font-medium ml-5">TASKS</h1>
        <TaskList list={list}/>
    </div>
  )
}

export default Task