import React, { useState } from "react";
import "./Registration.css";
import sneakerShopApi from "../../api/sneaker-shop-api";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [addressDetails, setAddressDetails] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sneakerShopApi.postUser({
            name,
            email,
            password,
            city,
            zipcode,
            addressDetails
        });

        setName("");
        setEmail("");
        setPassword("");
        setCity("");
        setZipcode("");
        setAddressDetails("");
        alert('sikeres regisztráció')
    };

    return (
        <form className="user-registration-form" onSubmit={handleSubmit}>
            <div className="input-field-container">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="input-field"
                />
            </div>
            <div className="input-field-container">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="input-field"
                />
            </div>
            <div className="input-field-container">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="input-field"
                />
            </div>
            <div className="input-field-container">
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="input-field"
                />
            </div>
            <div className="input-field-container">
                <label htmlFor="zipcode">Zipcode:</label>
                <input
                    type="text"
                    id="zipcode"
                    value={zipcode}
                    onChange={(event) => setZipcode(event.target.value)}
                    className="input-field"
                />
            </div>
            <div className="input-field-container">
                <label htmlFor="address-details">Address Details:</label>
                <input
                    type="text"
                    id="address-details"
                    value={addressDetails}
                    onChange={(event) => setAddressDetails(event.target.value)}
                    className="input-field"
                />
            </div>
            <button type="submit" className="submit-button">
                Submit
            </button>
        </form>
    );
};

export default Registration;