import React from 'react'

function App() {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <button className="available">available</button>
          <h3>$55/hr</h3>
        </div>
        <div className="center">
          <img src="https://i.pinimg.com/1200x/7a/61/8f/7a618f247fe88e16b52463359ba10bf5.jpg" alt="Wade Wilson" />
          <h2>Wade Wilson</h2>
          <h4 className='ui-designer'>UI/UX designer</h4>
          <h4 className='epic-coders'>Epic Coders</h4>
          <div className='tag'>
            <span>UI</span>
            <span>UX</span>
            <span>photoshop</span>
            <span>+4</span>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$80/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
