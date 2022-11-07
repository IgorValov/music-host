import React from "react";
import { NavLink } from "react-router-dom";
import "./reg.css";
export const Register = () => {
  return (
    <div className="register__block">
      <div className="block reg">
        <img className="logo__reg" src="./img/blacklogo.png" alt="logo" />
        <input className="login input__reg " type="text" placeholder="Login" />
        <input
          type="password"
          className="password input__reg "
          placeholder="Password"
        />
        <input
          type="password"
          className="password__return input__reg"
          placeholder="Return Password"
        />
        <NavLink to="/">
          <button className="enter go">Sign UP</button>
        </NavLink>
      </div>
      <input type="hidden" />
    </div>
  );
};
