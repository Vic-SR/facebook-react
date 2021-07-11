import React, {useRef} from "react";
import auth from "../../firebase/util";
import "./style.css";

function LoginScreen(props){
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const login = () => {
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      alert("Successed Login");
      console.log(authUser);
    }).catch ((error) => {
      alert(error.message);
    })
  }

    return (
      <div className="loginScreen">
        <p className="loginFacebook">facebook</p>
        <div className="login">
          <input ref={emailRef} type="text" className="inputId" placeholder="Email or Number"/>
          <input ref={passwordRef} type="text" className="inputPw" placeholder="Password"/>
          <a  onClick={login}><p className="loginBox">로그인</p></a>
          <p className="loginLostPassword">비밀번호를 잊으셨나요?</p>
          <a href="register"><p className="loginMakeRegister">새 계정 만들기</p></a>
        </div>
        <p className="loginboxPtag">유명인, 밴드, 비즈니스를 위한 페이지 만들기</p>
      </div>
    );
};

export default LoginScreen;