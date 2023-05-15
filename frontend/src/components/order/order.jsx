import React, { useState, useEffect } from 'react';
import sneakerShopApi from '../../api/sneaker-shop-api';
import "./Order.css";

const hufFormat = (amount) => {
    return new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'HUF',
        maximumFractionDigits: 0,
    }).format(amount);
};

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [selectedOrderItems, setSelectedOrderItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await sneakerShopApi.getOrders();
                setOrders(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    async function handleOrderClick(orderId) {
        try {
            const response = await sneakerShopApi.getOrderItem();
            setSelectedOrderId(orderId);
            setSelectedOrderItems(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleDelete(orderId) {
        try {
            await sneakerShopApi.deleteOrder({ id: orderId });
            const updatedOrders = orders.filter(order => order.id !== orderId);
            setOrders(updatedOrders);
            setSelectedOrderId(null);
            setSelectedOrderItems([]);
        } catch (error) {
            console.error(error);
        }
    }

    function handleBackClick() {
        setSelectedOrderId(null);
        setSelectedOrderItems([]);
    }

    return (
        <div className="orders-container">
            {selectedOrderId ? (
                <div className="order-details">
                    <h2>Order #{selectedOrderId}</h2>
                    <button onClick={handleBackClick}>Back to all orders</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>Name</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedOrderItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="all-orders">
                    <h1>All Orders</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User ID</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr
                                    key={order.id}
                                    onClick={() => handleOrderClick(order.id)}
                                    className="order-row"
                                >
                                    <td>{order.id}</td>
                                    <td>{order.user_id}</td>
                                    <td>{order.date}</td>
                                    <td>{hufFormat(order.total)}</td>
                                    <td>
                                        <button className="delete-button" onClick={(event) => {
                                            event.stopPropagation();
                                            handleDelete(order.id);
                                        }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}

export default Orders;
