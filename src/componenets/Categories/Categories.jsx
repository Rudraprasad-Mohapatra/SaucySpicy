import "./Categories.scss";

import {Link} from "react-router-dom";

function Categories() {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/11484906/pexels-photo-11484906.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/3746156/pexels-photo-3746156.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <button>
                        <Link className="link" to="/products/2">Women</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/13634354/pexels-photo-13634354.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <button>
                        <Link className="link" to="/products/3">New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col col-lg">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/4062294/pexels-photo-4062294.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <button>
                        <Link className="link" to="/products/4">Accessiories</Link>
                    </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/8416242/pexels-photo-8416242.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <button>
                        <Link className="link" to="/products/5">Shoes</Link>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/1192047/pexels-photo-1192047.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <button>
                        <Link className="link" to="/products/6">Men</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
