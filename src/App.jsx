import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import {ThemeContextProvider} from './components/themeContext'

function App() {
 

  return (
    <>
      <ThemeContextProvider>
      <Navbar />
      <Main />
      <Footer />
      </ThemeContextProvider>
      </>
  )
}

export default App
