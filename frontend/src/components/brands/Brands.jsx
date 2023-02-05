import React from "react";
import "./Brands.css";
import sneakerShopApi from "../../api/sneaker-shop-api";



const Brands = ({ brands, refresh }) => {

  const handleDelete = async (id) => {
    await sneakerShopApi.deleteBrand({id: id});
    refresh();
  }
  
  return (
    <table className="brand-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Brand Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {brands.map(brand => (
          <tr key={brand.id}>
            <td>{brand.id}</td>
            <td>{brand.brand}</td>
            <td>
              <button className="delete-button" onClick={() => handleDelete(brand.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Brands;
