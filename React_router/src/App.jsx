import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rounting from './Rounting'
import { Link ,Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <header className=''>
        <nav>
          <Link to="/">Home</Link> {' | '}
          <Link to="/about">About</Link> {' | '}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Rounting />
        <Outlet />
      </main>
      
      <footer>
        <h1>This is the footer</h1>
      </footer>
    </div>
  );
}
 

export default App
