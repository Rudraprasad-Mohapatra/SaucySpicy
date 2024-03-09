import "./Cart.scss";

function Cart() {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/12820465/pexels-photo-12820465.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1",
            title: "Long Sleeve Graphic T-shirt for ladies.",
            isNew: true,
            oldPrice: 19,
            price: 12
        },

    ];

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
        </div>
    )
}

export default Cart