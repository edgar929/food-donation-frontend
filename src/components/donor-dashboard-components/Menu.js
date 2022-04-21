import React from "react";
import { Link } from "react-router-dom";
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import PeopleIcon from '@mui/icons-material/People';
import RequestQuoteTwoToneIcon from '@mui/icons-material/RequestQuoteTwoTone';

export default function Menu(){
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">SaveLife</span>
  </a>
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
            </p>
          </a>
        </li>
        <li className="nav-item nav-link">
            <PeopleIcon fontSize="medium"/>
            <p>
              {/* <Link to="/all_users">Users</Link> */}
              <a href="/all_products">Products</a>
            </p>
        </li>
        <li className="nav-item nav-link">
            <InventoryTwoToneIcon />
            <p>
              <Link to="/add-product">New Product</Link>
            </p>
        </li>
        <li className="nav-item nav-link">
            <RequestQuoteTwoToneIcon fontSize="medium"/>
            <p>
              <Link to="/requests">Requests</Link>
            </p>
        </li>
        
      </ul>
    </nav>
  </div>
</aside>

    )
}