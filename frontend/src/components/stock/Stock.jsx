import React, { useState, useEffect } from "react";
import sneakerShopApi from "../../api/sneaker-shop-api";

function StockList() {
  const [stocks, setStocks] = useState([]);

  async function fetchStocks() {
    const response = await sneakerShopApi.getStocks();
    setStocks(response.data);
  }

  useEffect(() => {
    fetchStocks();
  }, []);


  return (
    <div>
      <h1>Stock List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Size</th>
            <th><label for="amount">Amount</label></th>
            <th>Current Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.sneaker_id}>
              <td>{stock.sneaker_id}</td>
              <td>{stock.size}</td>
              <td><input type="number" id="amount" name="amount" value={stock.amount}/></td>
              <td>{stock.current_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
