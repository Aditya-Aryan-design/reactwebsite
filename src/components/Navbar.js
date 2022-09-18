import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">{props.home}</a>
          {/* <Link className="nav-link" aria-current="page" to="/">{props.home}</Link> */}
        </li>
        {/* <li className="nav-item">
           <Link className="nav-link" to="/about">{props.about}</Link> */}
          {/* <a className="nav-link" href="/about">{props.about}</a> 
        </li> */}
          </ul>
      <div className='mx-2' style={{display:"block",height:"20px", width:"20px",backgroundColor:"red", borderRadius:"5px"}} onClick={props.darkfun}></div>
      <div className='mx-2' style={{display:"block",height:"20px", width:"20px",backgroundColor:"blue", borderRadius:"5px"}} onClick={props.darkfun}></div>
      <div className='mx-2' style={{display:"block",height:"20px", width:"20px",backgroundColor:"yellow", borderRadius:"5px"}} onClick={props.darkfun}></div>
      <div className='mx-2' style={{display:"block",height:"20px", width:"20px",backgroundColor:"green", borderRadius:"5px"}} onClick={props.darkfun}></div>
      <div className='mx-2' style={{display:"block",height:"20px", width:"20px",backgroundColor:"black", borderRadius:"5px"}} onClick={props.darkfun}></div>
          </div>
        </div>
      </nav> 
    </>
  )
}


//setting proptypes
Navbar.propTypes = {
  //title should be string
  title: PropTypes.string.isRequired,
  home: PropTypes.string
}

//sending default props
Navbar.defaultProps = {
  title : "My Title",
  home : "home",
  about : "about",
  contact : "contact",
  textarea : "textarea",
  btn : "btn"

 }