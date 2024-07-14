

function StikyList() {
    const todoList = ['', '', '', '', '', '']
    return (
        <div className="h-auto">
            <div className="grid grid-cols-3">
                {
                    todoList.map((d) => (
                    <div className="m-3 h-[300px] rounded-xl border" key={d}>
                        to do list
                    </div>
                    ))
                }
            </div>
        </div>
    
  )
}

export default StikyList