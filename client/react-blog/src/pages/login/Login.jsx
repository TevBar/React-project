import "./login.css";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className ="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text"  className = " loginInput" placeholder=" email..." />
            <label>Password</label>
            <input type="password" className = " loginInput" placeholder=" Enter your password..." />
            <button className="loginButton">
            <Link to = "/login">Login</Link>
            </button>
            <button className="loginRegisterButton">
              <Link to = "/register">Register</Link>
            </button>
        </form>
    </div>
  )
}

