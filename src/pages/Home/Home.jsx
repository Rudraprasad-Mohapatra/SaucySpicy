import "./Home.scss";

import FeaturedProducts from "../../componenets/FeaturedProducts/FeaturedProducts";
import Slider from "../../componenets/Slider/Slider";
export const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedProducts type="featured"/>
            <FeaturedProducts type="trending"/>
        </>
    )
}
