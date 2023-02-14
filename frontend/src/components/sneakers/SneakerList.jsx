import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sneakerShopApi from '../../api/sneaker-shop-api';

const SneakerList = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await sneakerShopApi.getSneakers();
        setSneakers(response.data);
      } catch (error) {
        console.error('Error fetching sneakers:', error);
      }
    };
    fetchSneakers();
  }, []);

  const removeSneaker = async (id) => {
    console.log(id, sneakers.id, sneakers)
    try {
      await sneakerShopApi.deleteSneaker(id);
      setSneakers(sneakers.filter((sneaker) => sneakers.id !== id));
    } catch (error) {
      console.error('Error removing sneaker:', error);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">Sneakers</h1>
      <div className="flex flex-wrap justify-between">
        {sneakers.map((sneaker) => (
          <div className="bg-white rounded-lg shadow-lg" key={sneaker.id}>
            <img
              src={sneaker.image}
              alt={sneaker.name}
              className="object-cover h-64 w-full rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{sneaker.name}</h2>
              <p className="text-gray-700 mb-4">{sneaker.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold">
                  {sneaker.price} Ft
                </span>
                <span className="text-sm text-gray-600">
                  Brand ID: {sneaker.brand_id}
                </span>
                <span>
                    Sneaker ID: {sneaker.id}
                </span>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => removeSneaker(sneaker.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                >
                  Remove
                </button>
                <button
                  onClick={() => console.log('Edit button clicked', sneaker)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SneakerList;
