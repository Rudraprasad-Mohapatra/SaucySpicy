import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";

export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="wrapper">
                    <div className="left">
                        <div className="item">
                            <img src="/img/bharatflag.jpg" alt="bharatflag" style={{height : "15px"}} />
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                    <div className="center">
                        <h3>LAMASTORE</h3>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    );
};
