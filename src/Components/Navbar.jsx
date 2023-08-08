import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../Styles/Navbar.css"

export default function Navbar(props) {
  const navBtnOpen = () => {
    props.setNavBtn(!props.navBtn);
  }

  const closeNavbar = (url) => {
    if (window.screen.width < 768) {
      const hamBtn = document.getElementById('hamBtn');
      hamBtn.click();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // if (url.search(/manufacturing|supply/i) !== -1) {
    //   setActivePage('Product');
    // }
    // else {
    //   setActivePage(url)
    // }
  }

  const productBtnClose = () => {
    props.setProductNavBtn(!props.productNavBtn);
  }
  // const location = useLocation();
  // const [activePage, setActivePage] = useState('Home');

  // useEffect(() => {
  //   getCurrentPathname();
  // }, []);

  // const getCurrentPathname = () => {
  //   const pathname = location.pathname;
  //   let pageName = "";
  //   if (pathname.search(/\/$/i) !== -1) {
  //     setActivePage('Home');
  //   }
  //   else if (pathname.search(/about/i) !== -1) {
  //     setActivePage('About');
  //   }
  //   else if (pathname.search(/contact/i) !== -1) {
  //     setActivePage('Contact');
  //   }
  //   else if (pathname.search(/service/i) !== -1) {
  //     setActivePage('Service');
  //   }
  //   else {
  //     setActivePage('Product');
  //   }
  // };
  return (
    <>
      <div className=' row mx-auto' style={{ zIndex: 100, position: 'absolute', width: '100%' }}>
        <nav className=" blur-transparent navbar navbar-expand-md navbar-light bg-transparent py-3">
          <div className="container-fluid">
            {window.screen.width < 900 &&
              <Link className="navbar-brand" to="/">
                <img  src={process.env.PUBLIC_URL + '/Assets/GHS_logo.png'} alt="Your Logo" width="65" />

              </Link>
            }
            {window.screen.width >= 900 &&
              <Link className="navbar-brand" to="/">
                <img src={process.env.PUBLIC_URL + '/Assets/GHS_logo_with_text.png'} alt="Your Logo" width="110" />
              </Link>
            }
            <button id='hamBtn' onClick={navBtnOpen} className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={window.screen.width >= 767 ? 'collapse navbar-collapse justify-content-end' : 'collapse navbar-collapse justify-content-end bg-dark rounded p-4'} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link onClick={() => closeNavbar('Home')} className="nav-link text-light" to="/" style={{ fontWeight: 'bolder' }}>HOME</Link>
                </li>
                <li className="nav-item" >
                  <Link onClick={() => closeNavbar('About')} className="nav-link text-light" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item dropdown" onClick={productBtnClose} >
                  <Link className="nav-link dropdown-toggle text-light" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PRODUCT SOLUTIONS
                  </Link>
                  <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                    <li><Link onClick={() => closeNavbar('manufacturing')} className="dropdown-item my-2 text-light" to="/manufacturing">Manufacturing Solutions</Link></li>
                    <li><Link onClick={() => closeNavbar('supply')} className="dropdown-item my-2 text-light" to="/supply">Supply Solutions</Link></li>
                  </ul>
                </li>
                <li className="nav-item" >
                  <Link onClick={() => closeNavbar('Service')} className="nav-link text-light" to="/service">SERVICES</Link>
                </li>
                <li className="nav-item" >
                  <Link onClick={() => closeNavbar('Contact')} className="nav-link text-light" to="/contact">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row mx-auto fixed-top">
          <div className='pb-1 px-5 col-6' style={{ backgroundColor: '#2c4a6d' }}></div>
          <div className='pb-1 px-5 col-6' style={{ backgroundColor: '#fed502' }}></div>
        </div>
      </div>
    </>

  )
}
