import Logo  from"./img/Logo.svg";
import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <img src={Logo} alt="Logo" />
        </div>
    )
}

export default Header;
