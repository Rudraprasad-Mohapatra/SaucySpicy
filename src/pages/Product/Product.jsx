import "./Product.scss";

import { AddShoppingCartOutlined } from "@mui/icons-material";
import { BalanceOutlined } from "@mui/icons-material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { useState } from "react";

export const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const images = [
        "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1",
        "https://images.pexels.com/photos/12820465/pexels-photo-12820465.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1",
    ];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$199</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed!
                    Ratione consequuntur, velit corrupti error eius minima quia in minus.
                    Debitis odit, saepe voluptas earum facilis, rerum quo vero quibusdam
                    cumque soluta sequi voluptate repellendus.
                </p>
                <div className="quantity">
                    <button
                        onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
                    >
                        -
                    </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add">
                <AddShoppingCartOutlined /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderOutlined /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceOutlined /> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                    <hr />
                    <div className="info">
                        <span>DESCRIPTION</span>
                        <hr />
                        <span>ADDITIONAL INFORMATION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
