import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (

    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor:'#3e0404f4'}}>

          <div className="col-sm-4 text-center">
            <h1 className="navbar-brand fs-1" style={{fontFamily:'cursive'}} ><i>CAFETERIA</i></h1>
          </div>
          
          <div className="col-sm-7 d-flex justify-content-center">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className='nav-link active text-white' to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-white' to={'/login'}>Menu</Link>
                  </li>
                <li className="nav-item">
                  <Link className='nav-link text-white' to={'/myorder'}>My Order</Link>
                </li>
                  {/* <li className="nav-item">
                    <Link className='nav-link text-white' to={'/orderhistory'}>Order History</Link>
                  </li> */}
          
                <li className="nav-item">
                  <Link className='nav-link text-white' to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-1">
              <ul className="navbar-nav mb-3 mb-lg-0">
                 <li className="nav-item border border-outline-light">
                <Link className='nav-link text-white' to={'/login'}>Login</Link>
              </li>
              </ul>
            </div>

          </div>
        </nav>
      </div>
    </div>


  )
}

export default Nav