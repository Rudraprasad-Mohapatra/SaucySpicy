import "./Slider.scss";

import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";

function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=400",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length -1 ? 0 : (nextSlide) => nextSlide + 1);
    }

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

export default Slider;
