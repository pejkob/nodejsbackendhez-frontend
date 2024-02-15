import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {

  const onLogOutClicked=()=>{
    localStorage.removeItem("login")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/get-all">Items</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href='/Login'>Login</a>
        </li>
        {props.loggedIn?<li className='nav-item'><NavLink to={"/"} className='nav-link rounded bg-danger' onClick={()=>onLogOutClicked()}>Log out</NavLink></li>:<></>}
       
      
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar