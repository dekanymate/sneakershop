import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sneakerShopApi from '../../api/sneaker-shop-api';
import './SneakerStock.css';

const hufFormat = (amount) => {
    return new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'HUF',
        maximumFractionDigits: 0,
    }).format(amount);
};

function SneakerStock() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const stocksResponse = await sneakerShopApi.getStocks();
                const sneakersResponse = await sneakerShopApi.getSneakers();

                const stocksWithSneakerName = stocksResponse.data.map(stock => {
                    const sneaker = sneakersResponse.data.find(sneaker => sneaker.id === stock.sneaker_id);
                    const sneakerName = sneaker ? sneaker.name : 'Unknown Sneaker';
                    return { ...stock, sneakerName };
                });

                setStocks(stocksWithSneakerName);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const handleAmountChange = (event, stock) => {
        const newStocks = [...stocks];
        const index = newStocks.findIndex(s => s.sneaker_id === stock.sneaker_id && s.size === stock.size);
        newStocks[index].amount = parseInt(event.target.value);
        setStocks(newStocks);
    };

    const handleSaveClick = async (id, updatedStock) => {
        try {
            const res = await sneakerShopApi.updateStocks(id, updatedStock);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };


    const handleEditClick = (stock) => {
        const newStocks = [...stocks];
        const index = newStocks.findIndex(s => s.sneaker_id === stock.sneaker_id && s.size === stock.size);
        newStocks[index].editMode = true;
        setStocks(newStocks);
    };

    const handleCancelClick = (stock) => {
        const newStocks = [...stocks];
        const index = newStocks.findIndex(s => s.sneaker_id === stock.sneaker_id && s.size === stock.size);
        newStocks[index].editMode = false;
        setStocks(newStocks);
    };

    return (
        <div className="sneaker-stock-container">
            <table className="sneaker-stock-table">
                <thead>
                    <tr>
                        <th>Sneaker</th>
                        <th>Size</th>
                        <th>Amount</th>
                        <th>Current Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock => (
                        <tr key={`${stock.sneaker_id}-${stock.size}`}>
                            <td>{stock.sneakerName}</td>
                            <td>{stock.size}</td>
                            <td>
                                {stock.editMode ?
                                    <input type="number" value={stock.amount} onChange={e => handleAmountChange(e, stock)} /> :
                                    stock.amount
                                }
                            </td>
                            <td>{hufFormat(stock.current_price)}</td>
                            <td>
                                {stock.editMode ?
                                    <>
                                        <button onClick={() => handleCancelClick(stock)}>Cancel</button>
                                    </> :
                                    <>
                                        <button onClick={() => handleEditClick(stock)}>Edit</button>
                                    </>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="sneaker-stock-save-button" onClick={handleSaveClick}>Save</button>
        </div>
    );
}

export default SneakerStock;
