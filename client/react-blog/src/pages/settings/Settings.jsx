import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className = " settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className =" settingsUpdateTitle">Update your account</span><br/>
                <span className =" settingsDeleteTitle">Delete your account</span>
            </div>
            <form action="" className="settingsForm">
                <label>Profile picture</label>
                <div className="settingsPP">
                    <img 
                    src="https://images.unsplash.com/photo-1560746420-1b4dc6d92d17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D" 
                    alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder=" Tevin"/>
                <label>Email</label>
                <input type="text" placeholder=" Barriostevin@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

