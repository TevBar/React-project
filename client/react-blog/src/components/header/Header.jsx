import "./header.css"

export default function header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className = " headerTitleSm ">React & Node</span>
            <span className = " headerTitleLg">Blog</span>
        </div>
        <img className = "headerImg"
        src = "https://images.unsplash.com/photo-1705866649609-9ea7159fe1ea?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt =" ">
        </img>
    </div>
  )
}

// export default header