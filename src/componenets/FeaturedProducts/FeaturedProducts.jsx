import "./FeaturedProducts.scss";

import Card from "../Card/Card.jsx";

function FeaturedProducts({type}) {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1",
            img2: "https://images.pexels.com/photos/12820465/pexels-photo-12820465.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/54206/pexels-photo-54206.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "skirt",
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Hat",
            oldPrice: 19,
            price: 12
        },
    ]

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat possimus quasi ad cum neque eum? Vel quaerat harum fugiat eius dolor voluptas explicabo, tenetur neque incidunt voluptate atque architecto.</p>
            </div>
            <div className="bottom">
                {data.map(item => {
                    console.log(item);
                    return <Card item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts;
