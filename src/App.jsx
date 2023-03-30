import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Leftsidebar from './components/Leftsidebar'
import MainSection from './components/MainSection'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
    <Leftsidebar /> 

    <MainSection/>

    </>
    
  )
}

export default App
