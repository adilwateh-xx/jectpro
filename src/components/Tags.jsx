

function Tags() {
    const list = [
        'tag1',
        'tag2',
        'tag3'
    ]

   
    return (
        <div className="w-full">
            <div className='flex ml-5 text-xs font-medium'>TAGS</div>
                <div>
                    <ListTags list={list} />
                </div> 
        </div>
      
  )
}

export default Tags

 function ListTags({ list }){
  return (
   <div className="flex px-2">
    {
        list.map((l) => (
            <div key={l} className="border flex cursor-pointer my-3 mx-1 rounded-xl justify-center">
                <div className="px-5 py-2">
                    <h1>{l}</h1>
                </div>
            </div>
        ))
    }
   </div>
  )
}

 