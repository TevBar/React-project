import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = false;
  return (
    <div className ="top">
        <div className = "topLeft">
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-tiktok"></i>
        </div>
        <div className = "topCenter">
            <ul className= "topList">
                <li className = "topListItem">
                    <Link className = "link" to ="/">Home</Link>
                </li>
                <li className = "topListItem">
                    <Link className = "link" to ="/about">About</Link>
                </li>
                <li className = "topListItem">
                    <Link className = "link" to ="/contact">Contact</Link>
                </li>
                <li className = "topListItem">
                    <Link className = "link" to ="/write">Write</Link>
                </li>
                <li className = "topListItem">
                    {/* <Link className = "link" to ="/login">Login</Link> */}
                    {user && "Logout"}
                </li>
                {/* <li className = "topListItem">
                    <Link className = "link" to ="/register">Register</Link>
                </li> */}
            </ul>
        </div>
        <div className = "topRight">
            {
                user ? (
                    <img 
                    className ="topImg"
                    src ="https://static.animecorner.me/2023/05/one-piece-luffy-birthday-2023-1024x576.jpg" 
                    alt =""
                    />
                ) : (
                    <ul className = "topLis">
                        <li className = " topListItem">
                            <Link className = "link" to ="/login">
                                login
                            </Link>    
                        </li>
                        <li className = " topListItem">
                            <Link className = "link" to ="/register">
                                register
                            </Link>    
                        </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  );
}


