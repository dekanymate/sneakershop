import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sneakerShopApi from '../../api/sneaker-shop-api';

function SneakerStock() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await sneakerShopApi.getStocks();
                setStocks(res.data);
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

    const handleSaveClick = async () => {
        try {
            const res = await sneakerShopApi.updateStocks(stocks);
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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Amount</th>
                        <th>Current Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock => (
                        <tr key={`${stock.sneaker_id}-${stock.size}`}>
                            <td>{stock.size}</td>
                            <td>
                                {stock.editMode ?
                                    <input type="number" value={stock.amount} onChange={e => handleAmountChange(e, stock)} /> :
                                    stock.amount
                                }
                            </td>
                            <td>{stock.current_price}</td>
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
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
}

export default SneakerStock;
