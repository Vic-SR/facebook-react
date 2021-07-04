import React from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import "./Nav.css";

function nav(){
    return (
      <div className="nav">
        <div className="nav_contents">
          <div className="nav_logo">
            <a href="#"><img className="nav_logoA" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"/></a>
            
          </div>
          <ul className="nav_menus">
            <li><a href="login">로그인</a></li>
            <li><a href="login">로그아웃</a></li>
          </ul>
        </div>
      </div>
    );
};

export default nav;