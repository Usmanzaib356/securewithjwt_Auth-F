import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
function Navbar() {

  const {islogin} =useAuth()

  return (
    <>
     <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Login</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="addproducts">Add Products</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link className="btn btn-outline-success" type="submit" to={islogin ? 'logout' : 'Signup'} >
          {islogin ? "Logout" : "Signup"}
        </Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar