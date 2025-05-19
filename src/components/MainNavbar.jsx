import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const links = [
    {
        path: '/',
        label: 'Homepages',
    },

    {
        path: '/product',
        label: 'Product',
    },

    {
        path: '/about',
        label: 'AboutUs',
    }
]

const MainNavbar = () => {
    return (
        <header>
            <nav>
                <ul className='list-unstyled d-flex justify content-space-beetween'>
                    {links.map((link) => {
                        return (
                            <li className='mx-2'>
                                <NavLink className='custom-links' to={link.path}>{link.label}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>

    )

}

export default MainNavbar