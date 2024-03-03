import "./Contact.scss";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Contact() {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US :</span>
                <div className="mail">
                    <input type="email" name="" id="" placeholder="Enter your email..."/>
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                <a href="https://www.youtube.com" target="_blank"><YouTubeIcon /></a>
                <a href="https://www.instagram.com" target="_blank"><InstagramIcon /></a>
                <a href="https://www.facebook.com" target="_blank"><FacebookOutlinedIcon /></a>
                <a href="https://www.x.com" target="_blank"><XIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
