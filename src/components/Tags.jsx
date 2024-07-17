import { useState } from "react"


function Tags() {
    const tagList = [
        'tag1',
        'tag2',
        'tag3',
        'tag3',
        'tag3',
        'tag3',
        'tag3',
        '',
    ]

    const [list, setList] = useState(tagList)

    function addTag(tag) {
        list.pop()
        setList([...list, tag, ''])
    }

   
    return (
        <div className="w-full">
            <div className='flex ml-5 text-xs font-medium'>TAGS</div>
                <div>
                    <ListTags list={list} onClick={() => addTag('new')} />
                </div> 
        </div>
      
  )
}

export default Tags

 function ListTags({ list, onClick }){
  return (
   <div className="grid sm:grid-cols-2 md:grid-cols-3  px-2">
    {
        list.map((l) => (
            <div onClick={l ? () => {}: onClick} key={l} className="border flex cursor-pointer my-3 mx-1 rounded-xl justify-center">
                <div className="px-5 py-2">
                    <h1>{l ? l : '+'}</h1>
                </div>
            </div>
        ))
    }
   </div>
  )
}

 