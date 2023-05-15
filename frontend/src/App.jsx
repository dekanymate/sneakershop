import './App.css'
import Brands from './components/brands/Brands'
import Admin from './components/admin/Admin';
import UsersModifier from './components/users/UsersModifier';
import NewSneaker from './components/sneakers/NewSneaker';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import sneakerShopApi from './api/sneaker-shop-api';
import React, { useState, useEffect } from "react";
import SneakerList from './components/sneaker-list/SneakerList';
import SneakerStock from './components/stock/Stock';
import Orders from './components/order/order';


const APP_STATES = {
  BRANDS: 'BRANDS',
  USERS: 'USERS',
  ADD_SNEAKER: 'ADD_SNEAKER',
  SNEAKERS: 'SNEAKERS',
  STOCK: 'STOCK',
  REGISTER: 'REGISTER',
  ORDERS: 'ORDERS'
}


function App() {
  const [appState, setAppState] = useState(APP_STATES.BRANDS);
  const [brands, setBrands] = useState([]);

  const fetchData = async () => {
    const { data } = await sneakerShopApi.getBrands();
    setBrands(data.sort((a, b) => a.id > b.id ? 0 : -1));
  };

  const setState = (state) => {
    setAppState(state);
  }


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <Header onButtonClick={setState}></Header>
      <div className="container">
        {appState == APP_STATES.BRANDS && (
          <>
            <div className="row">
              <Brands brands={brands} refresh={fetchData}></Brands>
            </div>
            <hr />
            <div className="row">
              <Admin refresh={fetchData}></Admin>
            </div>
          </>
        )}
        {appState == APP_STATES.USERS && (
          <UsersModifier refresh={fetchData}></UsersModifier>
        )}
        {appState == APP_STATES.ADD_SNEAKER && (
          <NewSneaker />
        )}
        {appState == APP_STATES.SNEAKERS && (
          <SneakerList brands={brands} />
        )}
        {appState == APP_STATES.REGISTER && (
          <Registration />
        )}
        {appState == APP_STATES.STOCK && (
          <SneakerStock />
        )}
        {appState == APP_STATES.ORDERS && (
          <Orders />
        )}
      </div>
    </div>
  )
}

export default App
