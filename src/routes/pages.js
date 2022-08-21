import React from 'react'
import { Header } from '../components/header'  
import { About } from '../components/about' 
import { Services } from '../components/services' 
import { Local } from '../components/local' 
import { Contact } from '../components/contact'
import '../styles/pages.sass'


export function Pages() {
  return (
    <div className="body">
    <div className="pages">
        <Header />
      <div className="align">
        <About />
        <Services />
        <Local />
      </div>
      <Contact />
    </div>
    </div>
  )
}

