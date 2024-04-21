"use client"
import React from 'react'; // Import React
import Bootsrapcomponent from './Bootsrapcomponent';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const signout = () => {
    removeCookie("email");
    removeCookie("token");
  };

  
let token=cookies.token;
let email=cookies.email
let image=cookies.image
  return (
      <nav style={{ marginTop:props.home&&"50px"}} className="navbar navbar-expand-lg bg-body-tertiary "data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><span className='badge bg-danger text-bg-secondary fs-3'>DonAction </span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div  className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/news">News</a>
              </li>
              <li className="nav-item">
              <Link className='nav-link' href={"/Blogging"}>Blogging</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' href={"/Contact"}>Contact</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' href={"/About"}>About</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' href={"/Donate"}>Donate</Link>
              </li>
              <li className="nav-item">
            <Link className='nav-link' href='/Profile'>Profile</Link>
              </li>
            
              {props.email?<p style={{color:"white"}}>welcome {props.email}</p>:null}
              {props.image?<img src={props.image} height={50} width={50} style={{borderRadius:"50px"}}/>:null}
              <button  className="btn btn-outline-success" onClick={token?()=>signout():props.session?()=>signOut():null}>Signout</button>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
