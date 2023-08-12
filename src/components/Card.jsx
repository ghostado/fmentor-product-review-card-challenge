import React, { useState, useEffect } from 'react';

import productImage from '../assets/image-product-desktop.jpg';
import productImageMobile from '../assets/image-product-mobile.jpg';
import iconCart from '../assets/icon-cart.svg';

// Css
import styles from './Card.module.css'

const Card = () => {

    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // const updateScreenWidth = () => {
    //     setScreenWidth(window.innerWidth);
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', updateScreenWidth);
    //     return () => {
    //         window.removeEventListener('resize', updateScreenWidth);
    //     };
    // }, []);

    // const getImageSrc = () => {

    //     if (screenWidth >= 600) {
    //         return productImage;
    //     }

    //     return productImageMobile;
    // };

    return (
        <div className={styles.container}>
            <div className={styles.productImage}>
                {/* product image */}
                <img src={productImage} alt='product-image' />
            </div>
            <div className={styles.productInfo}>
                {/* product class */}
                <h1 className={styles.productClass}>PERFUME</h1>

                {/* product title */}
                <h1 className={styles.productTitle}>
                    Gabrielle Essence Eau De Parfum
                </h1>

                {/* product description */}
                <p className={styles.description}>
                    A floral, solar and voluptuous interpretation
                    composed by Olivier Polge, Perfumer-Creator
                    for the House of CHANEL
                </p>

                {/* product price */}
                <div className={styles.prices}>
                    <h1>$149.99</h1>
                    <h2>$169.99</h2>
                </div>

                {/* add to cart button */}
                <div className={styles.button}>
                    <button>
                        <img src={iconCart} /> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card