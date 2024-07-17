import Sidebar from "./components/Sidebar"
import StickyWall from "./components/StickyWall"




function App() {

  return (
    <>
      <div className='container flex border-solid border-2 border-black max-w-full '>
        <Sidebar/>
        <StickyWall/>
      </div>
    </>
  )
}

export default App
