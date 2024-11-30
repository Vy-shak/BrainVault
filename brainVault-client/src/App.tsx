import Button from './Components/uI/Button'
import IconShare from './Icons/Share'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-red-800'>Hello</h1>
      <Button variant='primary' size='sm' text='Share vault'
        onclick={() => {
          console.log("hello from buttton")
        }} startIcon={<IconShare />} />
    </>
  )
}

export default App
