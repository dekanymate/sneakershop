import React, { useState, useEffect } from 'react';
import "./Users.css";
import sneakerShopApi from "../../api/sneaker-shop-api";

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const { data } = await sneakerShopApi.getUsers();
        setUsers(data);
    };


    useEffect(() => {
        fetchData();
    }, []);



    return (
        <table className='users-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>ZipCode</th>
                    <th>Address details: </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.city}</td>
                        <td>{user.zipcode}</td>
                        <td>{user.address_details}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Users;