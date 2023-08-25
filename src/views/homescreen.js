import '../styles/homescreen.css';

import { useEffect, useState } from "react";
import ProductThumbnail from "../components/productThumbnail"
import { fetchProducts } from '../common/services';
import NavBar from "../components/navBar"

function Homescreen() {
    const [products, setProducts] = useState([])
    // fetch API on component mount
    useEffect(() => {
        console.log("I am called ")

        fetchProducts()
            .then(json => {
                console.log(json);
                setProducts(json)

                // Handle the data, e.g., update state, perform further actions
            })
            .catch(error => {
                console.error('An error occurred:', error);
                // Handle the error, e.g., display an error message
            });
    }, [])

    return (
        <div className="homescreen">
            <div className="product-container">
                {
                    products.map((product, index) => {
                        return <ProductThumbnail
                            key={index}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            rating={product.rating} />
                    })
                }
            </div>
        </div>
    );
}

export default Homescreen;
