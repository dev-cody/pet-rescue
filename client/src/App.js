import React from 'react'
import Header from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Home/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App