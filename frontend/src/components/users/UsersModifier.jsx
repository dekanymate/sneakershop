import React, { useState, useEffect } from 'react';
import "./Users.css";
import sneakerShopApi from "../../api/sneaker-shop-api";

const UsersModifier = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [editing, setEditing] = useState(false);

    const fetchData = async () => {
        const { data } = await sneakerShopApi.getUsers();
        setUsers(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setEditing(true);
    };

    const handleUpdate = async (id, updatedUser) => {
        await sneakerShopApi.updateUser({ id, ...updatedUser });
        setEditing(false);
        fetchData();
    };

    const handleDelete = async (id) => {
        await sneakerShopApi.deleteUser({ id: id });
        fetchData();
    }

    return (
        <div>
            {editing ? (
                <EditUserForm
                    user={selectedUser}
                    handleUpdate={handleUpdate}
                    setEditing={setEditing}
                />
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.city}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const EditUserForm = ({ user, handleUpdate, setEditing }) => {
    const [updatedUser, setUpdatedUser] = useState({ ...user, password: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    return (
        <form className="edit-user-form">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={updatedUser.name}
                onChange={handleInputChange}
                className="edit-user-input"
            />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                id="email"
                name="email"
                value={updatedUser.email}
                onChange={handleInputChange}
                className="edit-user-input"
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={updatedUser.password}
                onChange={handleInputChange}
                className="edit-user-input"
            />
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                name="city"
                value={updatedUser.city}
                onChange={handleInputChange}
                className="edit-user-input"
            />
            <div className="edit-user-form-actions">
                <button
                    type="button"
                    onClick={() => handleUpdate(user.id, updatedUser)}
                    className="edit-user-form-button"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="edit-user-form-button"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default UsersModifier;