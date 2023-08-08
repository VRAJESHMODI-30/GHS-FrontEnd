import React from 'react';
import '../Styles/Service.css';
import { Link } from 'react-router-dom';
import services from '../JSON/Service.json'
import serviceBg from '../Resources/service.webp'
const Service = () => {
    const [activeIndex, setActiveIndex] = React.useState(-1);

    const handleCardHover = (index) => {
        setActiveIndex(index);
    };

    const handleCardLeave = () => {
        setActiveIndex(-1);
    };

    const pageScrollUp = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
         <> 
            <div className='row service-white-box pb-4' style={{background:`url(${serviceBg}) no-repeat center center / cover`}}>
                {window.screen.width < 1001 &&
                    <>
                        <div className='col service-jumbotron'>
                            <div className="container text-light">
                                <h1 className='text-start'>GHS' SERVICES</h1>
                                <hr />
                                <p >GHS makes every effort to guarantee its customers the best service available.</p>
                                <Link to="/contact"><button onClick={pageScrollUp} className='btn btn-dark rounded border border-1 border-light me-4'>CONTACT</button></Link>
                                <Link to="/manufacturing"><button onClick={pageScrollUp} className='btn btn-dark rounded border border-1 border-light'>VIEW PRODUCT</button></Link>
                            </div>
                        </div>
                    </>

                }
                {window.screen.width > 1000 &&
                    <div className='col-7 service-jumbotron ms-5'>
                        <div className="container ms-5 text-light">
                            <h1 className='text-start'>GHS' SERVICES</h1>
                            <hr />
                            <p >GHS makes every effort to guarantee its customers the best service available.</p>
                            <Link to="/contact"><button onClick={pageScrollUp} className='btn btn-dark border border-1 border-light rounded me-4'>CONTACT</button></Link>
                            <Link to="/manufacturing"><button onClick={pageScrollUp} className='btn btn-dark border border-1 border-light rounded'>VIEW PRODUCT</button></Link>
                        </div>
                    </div>
                }

            </div>
            <hr className='w-75 mx-auto rounded' style={{ margin: '0px', border: '0.2rem solid white' }} />
            <div className="container-fluid  pt-4 ms-0" style={{background: 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)'}}>
                <div className="row ms-0">
                    <div className="col-md-3 mb-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-0" style={{ overflow: 'hidden' }}>
                                <div className="row addvertise">
                                </div>
                                <div className="row mx-auto test-start bg-light px-5 pt-1" style={{ boxShadow: '0 20px 20px -20px white' }}>
                                    <h3 style={{ fontFamily: 'sans-serif' }}><strong> Need Parts For Your Machine?</strong></h3>
                                    <p>WE'VE GOT 'EM</p>
                                </div>
                                <div className="row px-5 pb-2 pt-4 mx-auto" style={{ backgroundColor: '#baa95c' }}>
                                    <p className='card-text text-dark'>We can provide replacement parts and spare parts for any of our hydraulic machines, whether they are out of warranty or newly purchased. Our team is always available to deliver parts at the best market price.</p>
                                </div>
                                <div className="pb-4 align-middle" style={{ backgroundColor: '#baa95c' }}>
                                    <Link onClick={pageScrollUp} to='/contact' style={{ textDecoration: 'none' }}><div className="btn btn-dark px-2 pt-3 me-4">&gt;</div> <span className='text-light'><b> CONTACT US TO ORDER</b></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {services.map((service, index) => (
                                <div key={service.id} className="col-sm-6 col-md-4 mb-4 ">
                                    <div className="service-card bg-light text-light border border-1 border-light hello"
                                        style={{ background: `url(${process.env.PUBLIC_URL}${service.imageUrl.replace(/Bg/,'')}) no-repeat center center / cover`}}
                                        onMouseEnter={() => handleCardHover(index)}
                                        onMouseLeave={handleCardLeave}>
                                        <div className="card-overlay"
                                            style={{ opacity: activeIndex === index ? 1 : 0 }}>
                                            <h2 className="card-text text-light fs-1" style={{ fontFamily: 'Rajdhani,Sans-serif' }}>
                                                {service.title}
                                            </h2>
                                        </div>
                                        <Link className="view-more text-primary" onClick={pageScrollUp} to={{
                                            pathname: `/GHS-Services/${service.title}`,
                                        }}
                                            state={{ service: JSON.stringify(service) }}
                                            style={{ textDecoration: 'none' }}
                                        >VIEW MORE</Link>

                                    </div>

                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto rounded' style={{ margin: '0px', border: '0.2rem solid white' }} />
        </>
    );
};

export default Service;
