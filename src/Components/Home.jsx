import React from 'react'
import "../Styles/Home.css"
import { Link } from 'react-router-dom'
import introLetter from "../Resources/GHS-introLetter.pdf"
import broser from "../Resources/GHS-Broser.pdf"
import procductCatalog from "../Resources/GHS-productCatalog.pdf"

export default function Home(props) {

    const onButtonClick = (pdfName) => {
        if (pdfName == 'introLetter') {
            fetch(introLetter).then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = introLetter;
                    alink.click();
                })
            })
        }
        else if (pdfName == 'companyBroser') {
            fetch(broser).then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = broser;
                    alink.click();
                })
            })
        }
        else {
            fetch(procductCatalog).then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = procductCatalog;
                    alink.click();
                })
            })
        }
    }


    return (

        <div className='back'>
            <div className='row white-box'>
                <video src={process.env.PUBLIC_URL + '/Assets/GHS_VIDEO_FINAL.mp4'} autoPlay muted loop />
                <div className="jumbotron">
                    <div className="container vc text-light box" style={{
                        position: 'absolute',
                        top: (props.navBtn === true && props.productNavBtn === true) ? '68%' : ((props.navBtn === true && props.productNavBtn === false) ? '55%' : '38%'),
                        left: '4%'
                    }}>
                        <figure>
                            <blockquote className="blockquote">
                                <h1>GENERAL HYDRAULIC SOLUTIONS</h1>
                            </blockquote>
                            <figcaption className="text-secondary">
                                <p>&#x23AF; SERVING THE HYDRAULIC SOLUTION FOR POWERING TOMORROW</p>
                            </figcaption>
                        </figure>
                        <button className='btn btn-large rounded border border-1 border-secodary' onClick={()=>{onButtonClick('introLetter')}}>Learn More</button>
                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />

            <div className='row growth-white-box'>
                {window.screen.width < 800 &&
                    <>
                        <div className='col home-box'>
                            <div className="container home text-light">
                                <h2>Growth is with GHS</h2>
                                <hr />
                                <p className='my-2' > For more than two decades,GHS has delivered mighty hydraulic solutions to various Industries.</p>
                                <p className='my-2'> We are the enthusiastic team of designers, engineers, and machinist for any hydraulic challenge as well as supplying hydraulic components.</p>
                                <p className='my-2'> GHS simplifies assembly and optimizes capabilities by developing and supplying customized hydraulic solutions to maximize value to customers' production lines, always oriented to meet their needs.</p>
                                <figure className='fs-5 text-end'>
                                    <figcaption className="blockquote-footer mb-4 mt-4">
                                        <cite title="Source Title">50,000+ </cite>Inquiries Till Now.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">2,000+ </cite> Hydraulic Machines Installed GHS.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">5,000+ </cite> Onsite & In-house Services.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">2,000+ </cite> Hydraulic Press Machine Installed.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">20,000+ </cite> Hydraulic Cylinder Installed.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">25,000+ </cite> Hydraulic Power Unit Installed.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">18,000+ </cite> Machine Works.
                                    </figcaption>
                                </figure>
                                <div className='row'>
                                    <button onClick={()=>{onButtonClick('companyBroser')}} className='btn btn-sm rounded btn-dark mx-auto fs-6 d-inline-block border border-light border-1 w-100' style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem' }}>DOWNLOAD COMPANY BROCHURE</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {window.screen.width > 800 &&
                    <>
                        <div className="col"></div>
                        <div className='col-7 home-box' style={{ marginRight: "9rem" }}>
                            <div className="container home ms-5 text-light">
                                <h2>Growth is with GHS</h2>
                                <hr />
                                <p className='my-2' > For more than two decades,GHS has delivered mighty hydraulic solutions to various Industries.</p>
                                <p className='my-2'> We are the enthusiastic team of designers, engineers, and machinist for any hydraulic challenge as well as supplying hydraulic components.</p>
                                <p className='my-2'> GHS simplifies assembly and optimizes capabilities by developing and supplying customized hydraulic solutions to maximize value to customers' production lines, always oriented to meet their needs.</p>
                                <figure className='fs-5 text-end'>
                                    <figcaption className="blockquote-footer mb-4 mt-4">
                                        <cite title="Source Title">50,000+ </cite>Inquiries Till Now.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">2,000+ </cite> Hydraulic Machines Installed GHS.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">5,000+ </cite> Onsite & In-house Services.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">2,000+ </cite> Hydraulic Press Machine Installed.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">20,000+ </cite> Hydraulic Cylinder Installed.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">25,000+ </cite> Hydraulic Power Unit Installed.
                                    </figcaption>
                                    <figcaption className="blockquote-footer mb-4">
                                        <cite title="Source Title">18,000+ </cite> Machine Works.
                                    </figcaption>
                                </figure>
                                <div className='row'>
                                    <button onClick={()=>{onButtonClick('companyBroser')}} className='btn btn-sm rounded btn-dark mx-auto fs-6 d-inline-block border border-light border-1 w-75' style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem' }}>DOWNLOAD COMPANY BROCHURE</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
            <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />

            <div className='row exp-white-box'>
                {window.screen.width < 800 &&
                    <div className='col home-box'>
                        <div className="container home text-light">
                            <h2>GHS' History of Success</h2>
                            <hr />
                            <figure>
                                <blockquote className="blockquote">
                                    <p>MORE THAN 22 YEARS DEDICATED TO HYDRAULICS.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Our experience allows clients to compete more successfully.
                                </figcaption>
                                <blockquote className="blockquote">
                                    <p>MORE THAN TWO DECADES IN THE IRON & STEEL SECTOR.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    More than 56,000 Hydraulic machines equipped by GHS.
                                </figcaption>

                                <blockquote className="blockquote">
                                    <p>MORE THAN A DECADE IN THE INJECTION MOULDING.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    We have helped thousands of companies in their emergency shutdown and to produced same machine part.
                                </figcaption>

                                <blockquote className="blockquote">
                                    <p>POWERFUL PARTNERSHIPS.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Our solutions are developed using superior-quality products from highly Sales & Services Hydraulic Components. We are also abide to provide any hydraulic spares & parts to our Clint.
                                </figcaption>

                                <blockquote className="blockquote">
                                    <p>PROFESSIONAL VENDORS</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Nationwide ready to help our client to gain a competitive advantage locally.
                                </figcaption>
                            </figure>
                            <div className='row'>
                                <button onClick={()=>{onButtonClick('productCatalog')}} className='btn btn-sm rounded btn-dark mx-auto fs-6 d-inline-block border border-light border-1 w-100' style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem' }}>DOWNLOAD PRODUCT CATALOG</button>
                            </div>
                        </div>
                    </div>
                }
                {window.screen.width > 800 &&
                    <>
                        <div className='col-7 home-box ms-5'>
                            <div className="container home ms-5 text-light">
                                <h2>GHS' History of Success</h2>
                                <hr />
                                <figure>
                                    <blockquote className="blockquote">
                                        <p>MORE THAN 22 YEARS DEDICATED TO HYDRAULICS.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Our experience allows clients to compete more successfully.
                                    </figcaption>

                                    <blockquote className="blockquote">
                                        <p>MORE THAN TWO DECADES IN THE IRON & STEEL SECTOR.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        More than 56,000 Hydraulic machines equipped by GHS.
                                    </figcaption>

                                    <blockquote className="blockquote">
                                        <p>MORE THAN A DECADE IN THE INJECTION MOULDING.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        We have helped thousands of companies in their emergency shutdown and to produced same machine part.
                                    </figcaption>

                                    <blockquote className="blockquote">
                                        <p>POWERFUL PARTNERSHIPS.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Our solutions are developed using superior-quality products from highly Sales & Services Hydraulic Components. We are also abide to provide any hydraulic spares & parts to our Clint.
                                    </figcaption>

                                    <blockquote className="blockquote">
                                        <p>PROFESSIONAL VENDORS</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Nationwide ready to help our client to gain a competitive advantage locally.
                                    </figcaption>
                                </figure>
                                <div className='row'>
                                    <button onClick={()=>{onButtonClick('productCatalog')}}className='btn btn-sm rounded btn-dark mx-auto fs-6 d-inline-block border border-light border-1 w-75' style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem' }}>DOWNLOAD PRODUCT CATALOG</button>
                                </div>


                            </div>
                        </div>
                        <div className="col"></div>
                    </>
                }
            </div>
            <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />

            <div className='row text-center' style={{
                height: '30rem',
                color: 'white'
            }}>
                <div className="container py-5" >

                    <div className="mt-5" >
                        <h1 className='my-2 mb-3'><strong>Power your performance with our precision hydraulic solutions</strong></h1>
                        <h3 className='my-2'>How can we help you?</h3>
                        <div className="row">
                            <div className="col-12 my-1">
                                <Link to='tel:+919429345049' className="border border-dark border-1 shadow p-3 bg-body rounded btn btn-lg bg-light text-dark">CALL TO +91-94293 45049</Link>
                            </div>
                            <div className="col my-1" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                                <Link to="/contact" className="border border-dark border-1 shadow p-3 bg-body rounded btn btn-lg bg-light text-dark">Contact</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />
        </div>

    )
}
