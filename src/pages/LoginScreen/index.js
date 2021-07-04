import React from "react";
import "./style.css";

function LoginScreen(props){
    return (
      <div className="loginScreen">
        <p className="loginFacebook">facebook</p>
        <div className="login">
          <input type="text" className="inputId" value="Email or Number"/>
          <input type="text" className="inputPw" value="Password"/>
          <a href="/"><p className="loginBox" onClick="()">로그인</p></a>
          <p className="loginLostPassword">비밀번호를 잊으셨나요?</p>
          <a href="register"><p className="loginMakeRegister">새 계정 만들기</p></a>
        </div>
        <p className="loginboxPtag">유명인, 밴드, 비즈니스를 위한 페이지 만들기</p>
      </div>
    );
};

export default LoginScreen;