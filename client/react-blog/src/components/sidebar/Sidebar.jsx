import axios from 'axios';
import {useEffect, useState} from 'react';
import './sidebar.css'

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=> { 
    const getCats = async ()=> {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[]);
  return (
    <div className ="sidebar">
          <span className="sidebarTitle">About Me</span>
          <img src="" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et, aliquid, commodi impedit corrupti sint incidunt quasi.</p>
        <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <li className="sidebarListItem">{c.name}</li>
            ))};
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-x-twitter"></i>
              <i className="sidebarIcon fa-brands fa-instagram"></i>
              <i className="sidebarIcon fa-brands fa-tiktok"></i>
          </div>  
        </div>
    </div>
  )
}

