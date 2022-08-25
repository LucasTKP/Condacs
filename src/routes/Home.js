import React from 'react'
import { Header } from '../components/header'  
import { About } from '../components/about' 
import { Services } from '../components/services' 
import { Local } from '../components/local' 
import { Contact } from '../components/contact'
import '../styles/home.sass'


export function Home() {
  return (
    <div className="body">
    <div className="pages">
        <Header />
        <About />
      <div className="align">
        <Services />
        <Local />
      </div>
      <Contact />
    </div>
    </div>
  )
}

