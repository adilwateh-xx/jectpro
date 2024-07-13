import React from 'react'

function Tags() {
    const list = [
        'tag1','tag2'
    ]

   
    return (
        <div>
            <div className='flex'>TAGS</div>
                <div className='flex'>
                    <ListTags list={list} />
                </div> 
        </div>
      
  )
}

export default Tags

 function ListTags({ list }){
  return (
   <div>
    {
        list.map((l) => (
            <dir className=" cursor-pointer justify-between my-3">
                <div className="ml-8  ">
                    <h1 className="ml-3">{l }</h1>
                </div> 
                
                 
            </dir>
        ))
    }
   </div>
  )
}

 