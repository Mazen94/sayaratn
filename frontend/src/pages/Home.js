import React from 'react'
import CardCar from '../components/CardCar'
import SlideTop from '../components/SlideTop'
import Footer from '../Footer/Footer'
import CardBottom from '../components/CardBottom'
import Description from '../components/Description'
import Maps from '../components/Maps'
import Navbar from "../components/Navbar"


function Home() {
    return (
        <div>
        
            <SlideTop/>
            <CardCar/>
            <CardBottom/>
            <Description/>
            <Maps/>
            <Footer/>
        </div>
    )
}

export default Home
