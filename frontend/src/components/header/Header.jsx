import React, { useState } from 'react';

const Header = ({ onButtonClick }) => {
  const [selectedButton, setSelectedButton] = useState('BRANDS');

  const handleButtonClick = (title) => {
    setSelectedButton(title);
    onButtonClick(title);
  };

  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <button
          style={selectedButton === 'BRANDS' ? styles.selectedButton : styles.button}
          onClick={() => handleButtonClick('BRANDS')}
        >
          Brands
        </button>
        <button
          style={selectedButton === 'USERS' ? styles.selectedButton : styles.button}
          onClick={() => handleButtonClick('USERS')}
        >
          Users
        </button>
        <button
          style={selectedButton === 'ADD_SNEAKER' ? styles.selectedButton : styles.button}
          onClick={() => handleButtonClick('ADD_SNEAKER')}
        >
          Add Sneaker
        </button>
        <button
          style={selectedButton === 'SNEAKERS' ? styles.selectedButton : styles.button}
          onClick={() => handleButtonClick('SNEAKERS')}
        >
          Sneakers
        </button>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    height: 80,
    marginBottom: '50px'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
  },
  button: {
    backgroundColor: '#fff',
    border: 'none',
    color: '#333',
    padding: '10px 20px',
    borderRadius: 5,
    cursor: 'pointer',
  },
  selectedButton: {
    backgroundColor: '#333',
    color: '#fff',
  },
};

export default Header;
