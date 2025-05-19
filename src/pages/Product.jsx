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


      return (
        <div className="product-page">
            <div className="header-container">
                <h1 className="page-title">Products</h1>
                <MainNavbar />
            </div>

            <div className="products-container">
                {product.length === 0 ? (
                    <div className="loading-container">Caricamento Prodotti...</div>
                ) : (
                    product.map((item) => (
                        <div className="product-card" key={item.id}>
                            <div className="product-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">{item.title}</h3>
                                <p className="product-price">${item.price}</p>
                                <p className="product-description">{item.description}</p>
                                <NavLink to={`/product/${item.id}`} className="btn btn-primary">
                                    View Details
                                </NavLink>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Product