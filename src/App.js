import React from "react";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginScreen/>
            </Route>

            <Route path="/register">
              <RegisterScreen/>
            </Route>

            <Route path="/">
              <HomeScreen/>
            </Route>
          </Switch>
          
        </Router>
       

      </>
    );
};

export default App;