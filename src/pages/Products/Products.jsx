import "./Products.scss";

import { useState } from "react";
import { useParams } from "react-router-dom";

import List from "../../componenets/List/List.jsx";

export const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setmaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="1" value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="2" value={2} />
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="3" value={3} />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>

                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" name="" id="" min={0} max={1000} onChange={(e) => setmaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" name="price" onChange={() => setSort("asc")}/>
                        <label htmlFor="">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                    <input type="radio" id="desc" name="price" onChange={() => setSort("desc")}/>
                        <label htmlFor="">Price (Highest first)</label>
                        
                    </div>
                </div>
            </div>

            <div className="right">
                <img src="https://images.pexels.com/photos/20377280/pexels-photo-20377280/free-photo-of-eine-alte-windmuhle.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="catImg" />
                
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    );
};
