import React from "react";
import "./Sneakers.css";
import sneakerShopApi from "../../api/sneaker-shop-api";



const Sneakers = ({ sneakers, refresh }) => {

    const handleDelete = async (id) => {
        await sneakerShopApi.deleteBrand({ id: id });
        refresh();
    }

    return (
        <table className="brand-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {sneakers.map(sneaker => (
                    <tr key={sneaker.id}>
                        <td>{sneaker.id}</td>
                        <td>{sneaker.name}</td>
                        <td>
                            <button className="delete-button" onClick={() => handleDelete(sneaker.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Sneakers;
