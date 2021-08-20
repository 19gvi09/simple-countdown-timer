import './Socials.css';
import facebook from './img/icon-facebook.svg';
import pinterest from './img/icon-pinterest.svg';
import instagram from './img/icon-instagram.svg';

function Socials() {
    return (
        <div className="socials">
            <a href="https://www.facebook.com" className="socials__link"><img className="socials__icon" src={facebook} alt="facebook"/></a>
            <a href="https://www.pinterest.com" className="socials__link"><img className="socials__icon" src={pinterest} alt="pinterest"/></a>
            <a href="https://www.instagram.com" className="socials__link"><img className="socials__icon" src={instagram} alt="instagram"/></a>
        </div>
    );
};

export default Socials;