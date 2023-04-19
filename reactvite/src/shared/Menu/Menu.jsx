import {Link } from "react-router-dom"
import './Menu.css'
export function Menu(){


    return(
    <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/"><img src="https://firebasestorage.googleapis.com/v0/b/tienda-53ad2.appspot.com/o/nos.png?alt=media&token=0caa79df-757b-4815-8590-4b367709fb87" alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">History</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/members">Members</Link>
      </li>

    </ul>
  </div>
</nav>
<div className="banner">
<Link className="nav-link" to="/members"><h1 className='Members-text'>INTEGRANTES</h1></Link>
</div>


    
    </>)
}