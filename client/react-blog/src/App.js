import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';



function App() {
  const user = false;
  return(
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/register" element={user?  <Home/> :<Register/>}/>
        <Route exact path = "/write" element={user?  <write/> :<Write/>}/>
        <Route exact path = "/settings" element={user?  <Home/> :<Settings/>}/>
        <Route exact path = "/login" element={user?  <Home/> :<Login/>}/>
        <Route exact path = "/post/:postId" element={<Single/>}/>
      </Routes>
    </Router>
  )
}

export default App;





