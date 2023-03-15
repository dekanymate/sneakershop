import React, { useState } from 'react';
import './SneakerFilter.css'

const SneakerFilter = ({ brands, categoryChanged }) => {

  const [selectedValue, setSelectedValue] = useState('ALL');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    categoryChanged(event.target.value);
  }

  return (
    <div className='sneaker-filter'>
      <select onChange={handleChange}>
        {[{ id: 'ALL', brand: 'Mind' }, ...brands].map((brand, index) => (
          <option key={index} value={brand.id}>{brand.brand}</option>
        ))}
      </select>
    </div>
  );
};

export default SneakerFilter;