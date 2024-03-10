import "./Cart.scss";

import { DeleteOutlineOutlined } from "@mui/icons-material";

function Cart() {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            desc: "Long Sleeve Graphic T-shirt with lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis officiis deserunt aut reiciendis ipsa cumque natus ea nesciunt voluptas delectus!",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/12820465/pexels-photo-12820465.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1",
            title: "Long Sleeve Graphic T-shirt for ladies.",
            desc: "Long Sleeve Graphic T-shirt for ladies with lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis officiis deserunt aut reiciendis ipsa cumque natus ea nesciunt voluptas delectus!",
            isNew: true,
            oldPrice: 19,
            price: 12
        },

    ];

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data.map((item) => (
                <div className="item" key={item?.id}>
                    <img src={item?.img} alt="" />
                    <div className="details">
                        <h1>{item?.title}</h1>
                        <span className="productDescription">{item?.desc?.substring(0,100)}</span>
                        <div className="price">1 x ${item?.price}</div>
                    </div>
                    <DeleteOutlineOutlined className="delete" />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset cart</span>
        </div>
    )
}

export default Cart