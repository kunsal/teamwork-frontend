import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { pages } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' className="navbar-brand">TEAMWORK</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {pages.map(page => (
            <li key={page.link} className="nav-item active">
              <NavLink to={page.link} className="nav-link">{page.name}</NavLink>
            </li>
          ))} 
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
       {props.user.user !== undefined ? 
          <ul className="navbar-nav">
            <li>{props.user.user.firstName} {props.user.user.lastName}</li>
            
          </ul> : 
          <Link to='/login' className="btn btn-sm btn-primary">Login</Link>
        }
        
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Navbar);