import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const DetailProduct = () => {
    const params = useParams();
    const { id } = params;
    const navigate = useNavigate();

    const [product, setProduct] = useState({})

    const getSingleProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data)
        });
    }

    useEffect(() => {
        getSingleProduct();
    }, [id]);

    return (
        <div className="product-page">
            <div className="header-container">
                <h1 className="page-title">Products</h1>
            </div>

            <div className="products-container">
                <img src={product.image} alt="" className='img-fluid' />
            </div>
            <h1>
                {product.title}
            </h1>
            <span>
                {product.title}
            </span>
            <span>
                {product.description}
            </span>
            <button
                className="btn btn-primary"
                onClick={() =>
                    navigate(`/product/${parseInt(id) + 1}`)
                }
            >
                Next Product
            </button>
        </div>
    );
}

export default DetailProduct;