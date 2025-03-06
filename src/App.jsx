import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landinpage from './components/Landingpage'
// import Landingpagefooter from './components/Landingpagefooter'
import './App.css'
import Testimonial from './components/testimonial'
import Blog from './components/blogpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Blog/>

     
      {/* <Landingpagefooter/> */}

    </>
  )
}

export default App
