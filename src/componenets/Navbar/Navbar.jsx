import "./Navbar.scss"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from "react";
import { Link } from 'react-router-dom';

import Cart from "../Cart/Cart";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
            <div className="navbar">
                <div className="wrapper">
                    {/* Left part of the navbar */}
                    <div className="left">
                        <div className="item">
                            <img src="/img/bharatflag.jpg" alt="bharatflag" style={{height : "15px"}} />
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="item">
                            <span>RS</span>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="item">
                            <Link className='link' to="/products/1">Women</Link>
                        </div>
                        <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                        </div>
                        <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                        </div>
                    </div>
                    {/* Center of the Navbar */}
                    <div className="center">
                        <Link to="/" className='link'>LAMASTORE</Link>
                    </div>
                    {/* Rightpart of the Navbar */}
                    <div className="right"> 
                        <div className="item">
                            <Link to="/" className='link'>Homepage</Link> 
                        </div>
                        <div className="item">
                            <Link to="/about" className='link'>About</Link> 
                        </div>
                        <div className="item">
                            <Link to="/contact" className='link'>Contact</Link> 
                        </div>
                        <div className="item">
                            <Link to="/stores" className='link'>Stores</Link> 
                        </div>
                        <div className="icons">
                            <SearchOutlinedIcon />
                            <PersonOutlineOutlinedIcon />
                            <FavoriteBorderIcon />
                            <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                {open && <Cart/>}
            </div>
    );
};
