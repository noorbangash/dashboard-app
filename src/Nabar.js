import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Nabar  ()  {
    const [navbarBackground, setNavbarBackground] = useState(false);
  
    const listenScrollEvent = () => {
      if (window.scrollY > 20) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
      return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);
  
    return (
        <>
      <nav className={navbarBackground ? 'navbar active' : 'navbar'}>
        <Link to="/" className="logo">
          Your Logo
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <section>
        <div>
            <h1>Welcome to pakistan</h1>
            <h1>Welcome to pakistan</h1>
            
        </div>
      </section>
</>
    );
  };
  
  export default Nabar;
  