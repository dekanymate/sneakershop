import React, { useState, useEffect } from 'react';
import sneakerShopApi from '../../api/sneaker-shop-api';
import SneakerCard from './sneaker-card/SneakerCard';
import SneakerFilter from './sneaker-filter/SneakerFilter';

const SneakerList = ({ brands }) => {
  const [sneakers, setSneakers] = useState([]);
  const [filteredSneakers, setFilteredSneakers] = useState(sneakers);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const { data } = await sneakerShopApi.getSneakers();
        setSneakers(data);
        setFilteredSneakers(data)
      } catch (error) {
        console.error('Error fetching sneakers:', error);
      }
    };
    fetchSneakers();
  }, []);


  const categoryChanged = (newCategory) => {
    if (newCategory == 'ALL') {
      setFilteredSneakers(sneakers);
      return;
    }
    const filtered = sneakers.filter(sneaker => sneaker.brand_id == newCategory)
    setFilteredSneakers(filtered)
  }

  return (
    <div className='sneaker-list'>
      <SneakerFilter brands={brands} categoryChanged={categoryChanged} />
      <div className="row">
        {filteredSneakers.map((sneaker, index) => (
          <SneakerCard key={index} sneaker={sneaker} />
        ))}
        {!filteredSneakers.length && (
          <p className='text-center text-muted'>Nincs találat.</p>
        )}
      </div>
    </div>
  );
};

export default SneakerList;
