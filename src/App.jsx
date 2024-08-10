import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Steps from './Components/Steps/Steps'
import Courses from './Components/Courses/Courses'
import Instructor from './Components/Instructor/Instructor'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Courses />
      <Instructor />
      <Footer />
    </div>
  )
}

export default App