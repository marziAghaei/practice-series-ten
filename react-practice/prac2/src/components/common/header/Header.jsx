import React from 'react';
import "./Header.css";
import logo from "../../common/Logo.png"
const Header = () => {
    return (
        <div className="header">
        <img className="logo" height={80} width={150} src={logo} alt=""/>
        <a href="">درباره ما</a>
        <a href="">کسب و کار</a>
        <a href="">پشتیبانی</a>
        <a href="">سوالات متداول</a>
        <div className="a__left"><a href="" className="a__green"> فروشگاه من</a> </div>
        
        </div>
    )
}

export default Header;