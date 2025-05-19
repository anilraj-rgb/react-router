import React from 'react'
import { NavLink } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'


const Homepage = () => {
    return (
        <>
            <div className="container d-flex justify-content-around">
                <h1>
                    Homepage
                </h1>
                <MainNavbar />
            </div>

        </>
    )
}

export default Homepage