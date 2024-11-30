import Button from './Components/uI/Button'
import { IoMdShare } from "react-icons/io";
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-red-800'>Hello</h1>
      <Button variant='primary' size='md' text='Share vault' onclick={() => {
        console.log("hello from buttton")
      }} startIcon={<IoMdShare />} />
    </>
  )
}

export default App
