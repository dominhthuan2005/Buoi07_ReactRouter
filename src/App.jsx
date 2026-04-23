import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="overlay">
      <div className="modal">
        <h1 className="title">Discover Chefify</h1>
        <p className='text'>Easy and delicious cooking instructions right here. Start exploring now!</p>

        <img
          className="image"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="food"
        />

        <button className="nextBtn">Next</button>
        <span className="skip">Skip</span>

        <button className="closeBtn">×</button>
      </div>
    </div>
    </>
  )
}

export default App
