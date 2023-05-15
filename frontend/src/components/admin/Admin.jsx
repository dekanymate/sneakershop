import React, { useState } from "react";
import "./Admin.css";
import sneakerShopApi from "../../api/sneaker-shop-api";

const Admin = ({ refresh }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sneakerShopApi.postBrand({ brand: name });
    setName('');
    refresh();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the brand name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Admin;