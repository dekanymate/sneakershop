import React, { useState } from 'react';
import axios from 'axios';
import sneakerShopApi from '../../api/sneaker-shop-api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sneakerShopApi.login({ email, password });
      const token = response.data.token;
      // Save the token in local storage or cookie
      // Redirect to the dashboard or protected route
    } catch (error) {
      console.error(error);
      // Handle error and display appropriate message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
