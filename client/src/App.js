import React , {useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  const [newdata, setNewData] = useState([{}])

  useEffect(() => {
    fetch("/api")
    .then(
        response => response.json()
    ).then(
        data => {
          setNewData(data)
        }
    )
  }, [])

  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default App