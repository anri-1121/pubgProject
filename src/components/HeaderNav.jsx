import './header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bullet from '../img/bullet.png';
import homeIcon from '../img/homeIcon.png';

const HeaderNav = (props) => {
    const [gunMenuActive, setGunMenuActive] = useState(false);
    const menu = document.getElementById("menu");
    // document.addEventListener('scroll', function() {
    //     var scrollValue = window.pageYOffset;
    //     if(scrollValue > 20 && scrollValue < 3000) {
    //         menu.style.opacity = '0';
    //         menu.style.transition = '.6s';
    //         menu.style.visibility = 'hidden';
    //     }else {
    //         menu.style.opacity = '1';
    //         menu.style.visibility = 'visible';
    //     }
    // })
    
    return(
        <header className="header" style={{backgroundColor: props.bgColor, transition: ".4s backgroundColor ease"}}>
            <Link to="/">
                <h1 className='logo' style={{color: props.itemColor}}>L<span style={{color:props.itemColor}}>iw</span></h1>
            </Link>
            <div className='leftNav'>
                <h1 style={{color: props.itemColor, marginRight:"40px"}}> <span style={{color: props.itemColor}}>{props.pageTitle.charAt(0)}</span>{props.pageTitle.substring(1)}</h1>
            </div>
            <div className='gunShotMenu' onClick={() => setGunMenuActive(!gunMenuActive)}>
                <div className={gunMenuActive ? "ActiveGunMenu" : "firstLine"} style={{backgroundColor:props.itemColor}}></div>
                <div style={{borderColor:props.itemColor}} className="leverShootingCircle"></div>
                <div className={gunMenuActive ? "bulletReload bulletReloadDisactive" : "bulletReloadDisactive"}>
                    <img src={bullet} alt="" />
                </div>
                <div  className="secondLine" style={gunMenuActive ? {top: "35px", left:"-20px", backgroundColor:props.itemColor} : {top: "22px", backgroundColor:props.itemColor}}></div>
            </div>
            <div id='menu' style={{backgroundColor:props.bgColor, opacity:"99%"}} className={gunMenuActive ? "menu menuActive" : "menu"}>
                <ul>
                    <Link to="/">
                        <img src={homeIcon} alt="" className='menuHomeIcon'/>
                    </Link>
                    <Link to="/Europe">
                        <li  style={{color: props.itemColor}}>Europe</li>
                    </Link>
                    <Link to="/Russia">
                        <li  style={{color: props.itemColor}}>Russia</li>
                    </Link>
                    <Link to="/Arabia">
                        <li  style={{color: props.itemColor}}>Arabia</li>
                    </Link>
                    <Link to="/Georgia">
                        <li  style={{color: props.itemColor}}>Georgia</li>
                    </Link>
                    <Link to="/lives">
                        <li  style={{color: props.itemColor, marginLeft:"23px"}}>Lives</li>
                    </Link>
                </ul>
            </div>
        </header>   
    )
}

export default HeaderNav;
