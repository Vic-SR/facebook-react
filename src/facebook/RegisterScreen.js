import React, { useState } from "react";
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import "./RegisterScreen.css";

import useSelectableList from "@rooks/use-selectable-list"



function RegisterScreen(){

  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  
  
    return (
      <div className="registerScreen">
        <div className="register">
          <div className="registerHeader">
            <h2>REGISTER</h2>
            <a href="login"><img className="registerHeaderImg" onClick="/" src="https://www.reduceimages.com/img/close.png" /></a>
          </div>
          <div className="registerName">
            <input className="registerLast"  type="text" placeholder="Last Name" />
            <input className="registerFirst" type="text" placeholder="First Name"/>
          </div>
          <div className="registerNumberPassword">
            <input className="registerNum" type="text" placeholder="Number or Email"/>
            <input className="registerPass" type={isRevealPwd ? "text" : "password"} onChange={e => setPwd(e.target.value)} maxLength="8" placeholder="New Password"/>
            <img title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd(prevState => !prevState)}/>
            
          </div>
          <div className="registerBirth">
            <p> Birth Day </p>
            <div className="registerDate">
              <select className="registerYear">
                <option value="0">Year</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
              <select className="registerMonth">
                <option value="0">Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="registerDay">
                <option value="0">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>  
            </div>
          </div>


          <div className="registerGenderChoice">
            <p> Gender </p>
            <div className="registerGender">
              <span className="registerMale">
                <label className="Male" for="male">Male</label>
                <input className="MaleInput" type="radio" id="male" value="1"/>
              </span>
              <span className="registerFemale">
                <label className="Female" for="female">Female</label>
                <input className="FemaleInput" type="radio" id="female" value="2"/>
              </span>
              <span className="registerChoise">
                <label className="Other" for="Other">Another</label>
                <input className="choiceInput" type="radio" id="Other" value="-1"/>
              </span>
            </div>
          </div>
          <p className="registerExplan">가입하기 버튼을 클릭하면 ...동의하게 됩니다. </p>
          <a href="/"><p className="regiserCheck">가입하기</p></a>
        </div>
      </div>
    );
  };
  
  export default RegisterScreen;