import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
       <div className='dashboard-buttons-wrapper'>
          <button>Continue with user 1</button>
          <button>Continue with user 2</button>
       </div>
       <div className='dashboard-image-wrapper'>
          <img class='banner-image' src='/images/banner.png' alt='banner' />
       </div>
    </div>
  )
}

export default Dashboard