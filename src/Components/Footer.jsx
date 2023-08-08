import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import "../Styles/Footer.css"

export default function Footer() {
    return (
        <div className='row'>
            <footer className="bg-dark text-white">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-3 mb-4 mb-md-0 bg-dark item-center">
                            <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                                <div className="image-container rounded">
                                <img src={process.env.PUBLIC_URL+'/Assets/GHS_logo_with_text.png'} alt="General Hydraulics Solution" width="75%"/>
                                </div>
                            </Link>
                        </div>


                        <div className="col-md-3 mb-4 mb-md-0 text-md-center">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled" >
                                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Link to="/">Service</Link></li>
                                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Link to="/about">About</Link></li>
                                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Link to="/contact">Contact Us</Link></li>
                                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Link to="/manufacturing">Product Range</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-md-center">
                            <h5>Best Sellers</h5>
                            <ul className="list-unstyled">
                                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Link to="/manufacturing">Cylinder</Link></li>
                                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Link to="/manufacturing">Power Unit</Link></li>
                                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Link to="/manufacturing">Press Machine</Link></li>
                                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Link to="/manufacturing">Show More</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-md-center">
                            <h5>Social Follow</h5>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <Link target='_blank' to="https://in.linkedin.com/company/general-hydraulic-solutions-ghs-india?trk=similar-pages"
                                        className="youtube social mx-2">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12 text-center text-light">
                            <p className='text-light'>&copy; 2023 Genral Hydroulics Solution. All Rights Reserved.</p>
                            <p style={{fontWeight:'lighter',fontSize:'small'}} className='text-light'>Development and Management of the Website by <Link to="mailto:vrajeshmodi99@gmail.com" style={{color:'grey'}}>vrajeshmodi99@gmail.com</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
