import React, { Children } from 'react'

import Footer from './Footer'
import Link from "next/link";
import Image from 'next/image'
import Header from './header';
import { Nav } from './Nav';
export default function Layout(props) {
  return (
   <>
    


    
    <nav>
        <Nav/>
    </nav>
    

    <div >
        {props.children}
    </div>
    

    <footer>
        <Footer/>
    </footer>
    

   
   
   </>
  )
}
