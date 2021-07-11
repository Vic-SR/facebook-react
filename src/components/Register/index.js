import React, { useRef } from "react";
import auth from "../../firebase/util";
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import './style.css';


function Register(){
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = () => {
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      alert('Success Regiser!');
      console.log(authUser);
    }).catch ((error) =>
    {
      alert(error.message);
    })
  };
  


    return (
      <div className="register">
        <div className="registerHeader">
          <h2>REGISTER</h2>
          <a href="login"><img className="registerHeaderImg" onClick="/" src="https://www.reduceimages.com/img/close.png" /></a>
        </div>
        
        <div className="registerBody">
          <input ref={emailRef} className="registerNum" type="text" placeholder="Email"/>
          <input 
            ref={passwordRef} 
            className="registerPass" 
            // type={isRevealPwd ? "text" : "password"} 
            // onChange={e => setPwd(e.target.value)} 
            maxLength="8" 
            placeholder="New Password"/>
          {/* <img title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd(prevState => !prevState)}/> */}
        </div>

        <div className="registerFooter">
          <p className="registerExplan">가입하기 버튼을 클릭하면 ...동의하게 됩니다. </p>
          <a onClick={register}>
            <p className="regiserCheck">가입하기</p>
          </a>
        </div>
      </div>
    );
};

export default Register;