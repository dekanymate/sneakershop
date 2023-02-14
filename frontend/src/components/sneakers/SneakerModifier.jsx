import React, { useState } from 'react';
import axios from 'axios';

const SneakerModifier = ({ sneaker, onEdit, onDelete }) => {
  const [name, setName] = useState(sneaker.name);
  const [price, setPrice] = useState(sneaker.price);
  const [description, setDescription] = useState(sneaker.description);
  const [articleNumber, setArticleNumber] = useState(sneaker.article_number);
  const [image, setImage] = useState(sneaker.image);
  const [brandId, setBrandId] = useState(sneaker.brand_id);

  const handleEdit = async () => {
    try {
      const response = await axios.put(`/api/sneakers/${sneaker.id}`, {
        name,
        price,
        description,
        article_number: articleNumber,
        image,
        brand_id: brandId,
      });
      onEdit(response.data);
    } catch (error) {
      console.error('Error editing sneaker:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/sneakers/${sneaker.id}`);
      onDelete(sneaker);
    } catch (error) {
      console.error('Error deleting sneaker:', error);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="articleNumber">Article Number:</label>
        <input
          type="number"
          name="articleNumber"
          value={articleNumber}
          onChange={(event) => setArticleNumber(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="brandId">Brand ID:</label>
        <input
          type="number"
          name="brandId"
          value={brandId}
          onChange={(event) => setBrandId(event.target.value)}
        />
      </div>
      <div>
        <button onClick={handleEdit}>Save Changes</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default SneakerModifier;
