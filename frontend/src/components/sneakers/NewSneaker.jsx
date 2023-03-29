import React, { useState, useEffect } from 'react';
import sneakerShopApi from '../../api/sneaker-shop-api';



const NewSneaker = () => {
    const [sneaker, setSneaker] = useState({
        name: '',
        price: '',
        description: '',
        article_number: '',
        image: '',
        brand_id: '',
    });

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        async function fetchBrands() {
            const response = await sneakerShopApi.getBrands();
            setBrands(response.data);
        }
        fetchBrands();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSneaker({ ...sneaker, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSneaker({ ...sneaker, image: file });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', sneaker.name);
        formData.append('price', sneaker.price);
        formData.append('description', sneaker.description);
        formData.append('article_number', sneaker.article_number);
        formData.append('image', sneaker.image);
        formData.append('brand_id', sneaker.brand_id);
        await sneakerShopApi.postSneaker(formData);
        alert('Sneaker created successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={sneaker.name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="text" name="price" value={sneaker.price} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={sneaker.description} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="article_number">Article Number:</label>
                <input type="text" name="article_number" value={sneaker.article_number} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
            </div>
            <div>
                <label htmlFor="brand_id">Brand:</label>
                <select name="brand_id" value={sneaker.brand_id} onChange={handleInputChange}>
                    <option value="">-- Select a brand --</option>
                    {brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                            {brand.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Add Sneaker</button>
        </form>
    );
};

export default NewSneaker;
