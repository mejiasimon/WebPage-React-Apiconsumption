import {Link } from "react-router-dom"
import './Menu.css'
export function Menu(){


    return(
    <>
<div>
  <input type="checkbox" id="active" />
  <label htmlFor="active" className="menu-btn"><i className="fas fa-bars" /></label>
  <div className="wrapper">
    <ul>
      <li><Link className="nav-link" to="/tienda">tienda</Link></li>
      <li><Link className="nav-link" to="/">History</Link></li>
      <li><Link className="nav-link" to="/members">Members</Link></li>
      <li><Link className="nav-link" to="/albums">albums</Link></li>
    </ul>
  </div>
  <div className="banner">
  <Link className="navbar-brand" to="/"><img src="https://firebasestorage.googleapis.com/v0/b/tienda-53ad2.appspot.com/o/nos.png?alt=media&token=0caa79df-757b-4815-8590-4b367709fb87" alt="" /></Link>
  </div>
</div>    
    </>)
}