import React from "react";
import "./Footer.scss";

export const Footer = () => {
    return (
    <div className="footer">
        <div className="top">

            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>

            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>

            <div className="item">
                <h1>About</h1>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla consequuntur placeat tempore, earum quam repellat maxime inventore corrupti, maiores laborum atque dolores cumque vero, labore praesentium? Necessitatibus ad delectus unde.
                </span>
            </div>

            <div className="item">
                <h1>Contact</h1>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla consequuntur placeat tempore, earum quam repellat maxime inventore corrupti, maiores laborum atque dolores cumque vero, labore praesentium? Necessitatibus ad delectus unde.
                </span>
            </div>
        </div>

        <div className="bottom">
            <div className="left">
                <span className="logo">Lamastore</span>
                <span className="copyright">&copy; Copyright 2024. All Rights Reservred</span>
            </div>
            <div className="right">
                <img src="/img/paymentmodes.jpg" alt="paymentmodes" />
            </div>
        </div>
    </div>
    );
};
