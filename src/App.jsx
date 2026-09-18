import { useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import Parent2 from './components/Parent2'
import Oathweb from './components/Oathweb'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Leaderboard from './components/Leaderboard'
import Header from './components/Header'
import Products from './components/Products'

function App() {


  return (
    <>
    <Products />
    {/* <Header />
    <Routes>
    <Route path='/about' element={<About />}/>
      <Route path='/features' element={<Features />}/>  
      <Route path='/faq' element={<FAQ />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/leaderboard' element={<Leaderboard />}/>
    </Routes>
    <Oathweb /> */}
    {/* <Parent />
    <Parent2 /> */}
      
    </>
  )
}

export default App
