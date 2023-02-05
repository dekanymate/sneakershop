import reactLogo from './assets/react.svg'
import './App.css'
import Brands from './components/brands/Brands'
import Admin from './components/admin/Admin';
import Registration from './components/registration/Registration';
import sneakerShopApi from './api/sneaker-shop-api';
import React, { useState, useEffect } from "react";



function App() {
  const [brands, setBrands] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  const fetchData = async () => {
    const { data } = await sneakerShopApi.getBrands();
    setBrands(data.sort((a, b) => a.id > b.id ? 0 : -1));
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <button onClick={() => setShowAdmin(!showAdmin)}>
        Toggle Admin
      </button>
      <hr />
      {showAdmin && (
        <>
          <Brands brands={brands} refresh={fetchData}></Brands>
          <hr />
          <Admin refresh={fetchData}></Admin>
        </>
      )}
      {!showAdmin && (
        <>
          <Registration></Registration>
        </>
      )}

    </div>
  )
}

export default App