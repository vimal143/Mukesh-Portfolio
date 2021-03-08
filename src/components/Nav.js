import React from "react";
// import {Link} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo1.png" alt="logo" />
            </div>
  
          </ul> 
          {state ? (
            <ul className="navbar__right">
             
              <li>
                <Link smooth to="#Banner">Home</Link>
              </li>
              <li>
              <Link smooth to="#Services">Services</Link>
              </li>
              <li>
              <Link smooth to="#About">About</Link>
              </li>
              <li>
              <Link smooth to="#Skills">Skills</Link>
              </li>
              <li>
              <Link smooth to="#Projects">Projects</Link>
              </li>
        
              <li>
              <Link smooth to="#Contact">Contact</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
        
      </div>
    </nav>
  );
};

export default Nav;
