import React from "react";
import { NavLink } from "react-router-dom";
import "./reg.css";
export const Register = () => {
  const LoginReg = "login input__reg ";
  const PassReg = "password input__reg ";
  const PassRegReturn = "password__return input__reg";

  return (
    <div className="register__block">
      <div className="block reg">
        <img className="logo__reg" src="./img/blacklogo.png" alt="logo" />
        <input className={LoginReg} type="text" placeholder="Login" />
        <input type="password" className={PassReg} placeholder="Password" />
        <input
          type="password"
          className={PassRegReturn}
          placeholder="Return Password"
        />
        <NavLink to="/">
          <button className="enter go">Sign UP</button>
        </NavLink>
      </div>
      <input type="hidden" value={LoginReg.value} />
    </div>
  );
};
