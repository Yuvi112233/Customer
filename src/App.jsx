import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
    <Navbar/>
    <Reviews/>
    <Body/>
    
    <Footer/>
    </div>
   
  )
}

export default App