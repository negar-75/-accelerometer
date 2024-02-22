import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccelerometerComponent from './component/accelometer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AccelerometerComponent />
    </>
  )
}

export default App
