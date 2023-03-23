import React, { useState } from 'react';
import './SneakerFilter.css'

const SneakerFilter = ({ brands, categoryChanged}) => {

  const [selectedValue, setSelectedValue] = useState('ALL');

  const handleCategoryChange = (event) => {
    setSelectedValue(event.target.value);
    categoryChanged(event.target.value);
  }


  return (
    <div className='sneaker-filter'>
      <div className='category-filter'>
        <label>Márka:</label>
        <select onChange={handleCategoryChange}>
          {[{ id: 'ALL', name: 'Mind' }, ...brands].map((brand, index) => (
            <option key={index} value={brand.id}>{brand.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SneakerFilter;
