import reactLogo from './assets/react.svg'
import './App.css'
import Brands from './components/brands/Brands'
import Admin from './components/admin/Admin';
import Users from './components/users/Users';
import UsersModifier from './components/users/UsersModifier';
import NewSneaker from './components/sneakers/Sneakers';
import Registration from './components/registration/Registration';
import Header from './components/header/Header';
import sneakerShopApi from './api/sneaker-shop-api';
import React, { useState, useEffect } from "react";
import SneakerList from './components/sneakers/SneakerList';
import SneakerModifier from './components/sneakers/SneakerModifier';


const APP_STATES = {
  BRANDS: 'BRANDS',
  USERS: 'USERS',
  ADD_SNEAKER: 'ADD_SNEAKER',
  SNEAKERS: 'SNEAKERS'
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
          <NewSneaker/>
        )}
        {appState == APP_STATES.SNEAKERS && (
          <SneakerList />
        )}
      </div>
    </div>
  )
}

export default App
