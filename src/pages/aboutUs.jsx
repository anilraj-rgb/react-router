import React from 'react'
import { NavLink } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'

const AboutUs = () => {
    return (
        <>
            <div className="container d-flex justify-content-around">
                <h1>
                    About Us
                </h1>
                <MainNavbar />
            </div>

        </>
    )
}

export default AboutUs