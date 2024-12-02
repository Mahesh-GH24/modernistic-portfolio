//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

 // The Outlet component will conditionally swap between the different pages according to the URL

  return (
    <>
      <Header />
      <main className="mx-3 my-5">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
