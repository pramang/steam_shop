
import {  Link  } from "react-router-dom";
import NavBar from "./NavBar"; 
import { HeaderWrap } from "./HeaderStyle";
import logo from '/images/steam_icon.png'

const Header = () => {
     
    return (
        <HeaderWrap>
            <div className="inner">
                <h1><Link to={"/"}>  <img src={logo} alt=""  style={{width:'100px'}}/> </Link></h1>
                <NavBar />
            </div>
        </HeaderWrap>
    );
};

export default Header;