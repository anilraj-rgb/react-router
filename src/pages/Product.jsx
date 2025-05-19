import React from 'react'

//Importo useState, useEffect
import { useState, useEffect } from 'react'

//Importo Navlink
import { NavLink } from 'react-router-dom'

//Importo Navbar
import MainNavbar from '../../components/MainNavbar'

//Importo Axios
import axios from 'axios'

const Product = () => {
    const [product, setProduct] = useState([])
    const endpoint = 'https://fakestoreapi.com/products'

    useEffect(() => {
        axios.get(endpoint)
            .then((response) => {
                setProduct(response.data)
            })
    }, []);
