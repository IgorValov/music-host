import React from "react";
import { NavLink } from "react-router-dom";
import "./reg.css";
export const Register = () => {
  const loginReg = "login input__reg ";
  const passReg = "password input__reg ";
  const passRegReturn = "password__return input__reg";

  return (
    <div className="register__block">
      <div className="block reg">
        <img className="logo__reg" src="./img/blacklogo.png" alt="logo" />
        <input className={loginReg} type="text" placeholder="Login" />
        <input type="password" className={passReg} placeholder="Password" />
        <input
          type="password"
          className={passRegReturn}
          placeholder="Return Password"
        />
        <NavLink to="/">
          <button className="enter go">Sign UP</button>
        </NavLink>
      </div>
      <input type="hidden" value={loginReg.value} />
    </div>
  );
};
