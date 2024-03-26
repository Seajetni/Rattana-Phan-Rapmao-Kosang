import React, { Children } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Link from "next/link";
import Image from 'next/image'
import Header from './header';
export default function Layout(props) {
  return (
   <>
    
    <header>
        <Header/>
    </header>

    
    <nav>
        <Nav/>
    </nav>
    

    <div className=' mx-20'>
        {props.children}
    </div>
    

    <footer>
        <Footer/>
    </footer>
    
    <nav className='mb-10'>
        <Nav/>
    </nav>
   
   
   </>
  )
}
