import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


function Sidebar() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("user"));
    if (name && name.name) {
      setUserName(name.name);
    }
  }, []);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3  sidebar" style={{width: "250px"}}>
    
    <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4 appName">Social Updates</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" >
        <Link to="/home" className="nav-link  text-white"  aria-current="page" >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li  >
        <Link to="create-post" className="nav-link  text-white" >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Add Story
        </Link>
      </li>
      
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://media.istockphoto.com/id/1467878602/photo/humanoid-robots-revolutionizing-mundane-tasks.webp?b=1&s=170667a&w=0&k=20&c=uaYT_UPzzt4GgDd90qaxoBnytlmvFC1514o51EiwLSw=" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>{userName}</strong>
      </a>
      
    </div>
   
  </div>
  )
}

export default Sidebar