import "./Home.scss";

import Categories from "../../componenets/Categories/Categories.jsx";
import Contact from "../../componenets/Contact/Contact.jsx";
import FeaturedProducts from "../../componenets/FeaturedProducts/FeaturedProducts";
import Slider from "../../componenets/Slider/Slider";

export const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedProducts type="featured"/>
            <Categories />
            <Contact />
            <FeaturedProducts type="trending"/>
        </>
    )
}
