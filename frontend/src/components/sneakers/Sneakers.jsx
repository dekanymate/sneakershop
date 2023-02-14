import React, { useState } from 'react';
import './Sneakers.css'
import sneakerShopApi from "../../api/sneaker-shop-api";

const NewSneaker = () => {
    const [sneaker, setSneaker] = useState({
        name: '',
        price: '',
        description: '',
        article_number: '',
        image: '',
        brand_id: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSneaker({ ...sneaker, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sneakerShopApi.postSneaker(sneaker);
        alert('Sikeres felvétel')
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={sneaker.name}
                onChange={handleInputChange}
            />
            <label htmlFor="price">Price</label>
            <input
                type="text"
                id="price"
                name="price"
                value={sneaker.price}
                onChange={handleInputChange}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                id="description"
                name="description"
                value={sneaker.description}
                onChange={handleInputChange}
            />
            <label htmlFor="article_number">Article Number</label>
            <input
                type="text"
                id="article_number"
                name="article_number"
                value={sneaker.article_number}
                onChange={handleInputChange}
            />
            <label htmlFor="image">Image</label>
            <input
                type="text"
                id="image"
                name="image"
                value={sneaker.image}
                onChange={handleInputChange}
            />
            <label htmlFor="brand_id">Brand ID</label>
            <input
                type="text"
                id="brand_id"
                name="brand_id"
                value={sneaker.brand_id}
                onChange={handleInputChange}
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default NewSneaker;
