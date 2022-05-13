import React from 'react'
import './home.css'

function HomePage() {
  return (
    <div className='home-page'>
        <h2 className="title text-center mt-4">start your journey here</h2>
        <div className="home-page-card-container">
            <div className="home-page-card">
                <img src="" alt="" />
                <div className="home-page-card-body">
                    <h3>find their furever home</h3>
                </div>
            </div>
            <div className="home-page-card">
                <img src="" alt="" />
                <div className="home-page-card-body">
                    <h3>give them a treat</h3>
                </div>
            </div>
            <div className="home-page-card">
                <img src="" alt="" />
                <div className="home-page-card-body">
                    <h3>help us help them</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage