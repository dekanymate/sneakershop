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

  function handleAmountChange(id, amount) {
    setStocks((prevStocks) =>
      prevStocks.map((stock) =>
        stock.sneaker_id === id ? { ...stock, amount } : stock
      )
    );
  }

  async function handleSave() {
    try {
      await sneakerShopApi.updateStocks(stocks);
      console.log("Stocks updated successfully!");
    } catch (error) {
      console.error("Failed to update stocks:", error);
    }
  }

  return (
    <div>
      <h1>Stock List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Size</th>
            <th>Amount</th>
            <th>Current Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.sneaker_id}>
              <td>{stock.sneaker_id}</td>
              <td>{stock.size}</td>
              <td>
                <input
                  type="number"
                  value={stock.amount}
                  onChange={(e) =>
                    handleAmountChange(stock.sneaker_id, e.target.value)
                  }
                />
              </td>
              <td>{stock.current_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default StockList;
