

function TaskList({ list }) {
  return (
   <div>
    {
        list.map((l) => (
            <dir className="flex cursor-pointer">
                {l.icon}
                <h1>{l.message}</h1>
                {l.count}
            </dir>
        ))
    }
   </div>
  )
}

export default TaskList