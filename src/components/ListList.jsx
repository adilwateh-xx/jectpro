function ListItem({ list }) {
  return (
   <div>
    {
        list.map((l) => (
            <dir className="flex cursor-pointer justify-between my-3">
                <div className="ml-8 flex">
                    
                    <div className="flex items-center  ">{l.icon}</div>
                    <h1 className=" flex ml-3">{l.message}</h1>
                </div> 
                
                {l.count}
            </dir>
        ))
    }
   </div>
  )
}

export default ListItem