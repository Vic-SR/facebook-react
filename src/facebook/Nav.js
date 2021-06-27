import React from "react";
import "./Nav.css";

function nav(){
    return (
      <div className="nav">
        <div className="nav_contents">
          <div className="nav_logo">
            <a href="#"><img className="nav_logoA" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"/></a>
            <a href="#"><img className="nav_logoB" src="data:image/png;base64,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"/></a>
          </div>
          <ul className="nav_menus">
            <li><a href="#">Menu1</a></li>
            <li><a href="#">Menu2</a></li>
            <li><a href="#">Menu3</a></li>
            <li><a href="#">Menu4</a></li>
          </ul>
        </div>
      </div>
    );
};

export default nav;