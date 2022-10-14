import { NavLink } from "react-router-dom";
import "./reg.css";
export const Login = () => {
  return (
    <div className="register__block">
      <div action="./index.html" className="block up">
        <img className="logo__reg" src="./img/blacklogo.png" alt="logo" />
        <input className="login input__reg " type="text" placeholder="Login" />
        <input
          type="password "
          className="password input__reg "
          placeholder="Password"
        />
        <NavLink to="/playlist">
          <button className="enter">Sign in</button>
        </NavLink>
        <NavLink to="/reg">
          <button className="register">Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
};
