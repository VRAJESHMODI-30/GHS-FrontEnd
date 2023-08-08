import React from 'react'
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom'
import "../Styles/Service.css"
export default function ServiceCategory() {

  const { ServiceName } = useParams();
  const location = useLocation();
  const service = JSON.parse(location.state.service);

  const pageScrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <> 
      <div className='row service-white-box pb-4' style={{ background: `url(${process.env.PUBLIC_URL}${service.imageUrl}) no-repeat center center / cover`,paddingTop:'11rem' }}>
        {window.screen.width < 1001 &&
          <>
            <div className='col service-jumbotron'>
              <div className="container text-light">
                <h1 className='text-start'>{service.title}</h1>
                <hr />
                <p >{service.description}</p>
                <Link to="/contact"><button onClick={pageScrollUp} className='btn btn-dark rounded border border-1 border-light me-4'>REQUEST A QUOTE</button></Link>

              </div>
            </div>
          </>

        }
        {window.screen.width > 1000 &&
          <div className='col-7 service-jumbotron ms-5 mt-3'>
            <div className="container ms-5 text-light">
              <h1 className='text-start'>{service.title}</h1>
              <hr />
              <p className='mt-4'>{service.description}</p>
              <Link to="/contact"><button onClick={pageScrollUp} className='btn btn-dark border border-1 border-light rounded me-4'>REQUEST A QUOTE</button></Link>

            </div>
          </div>
        }

      </div>
      <hr className='w-75 mx-auto rounded' style={{ margin: '0px', border: '0.2rem solid white' }} />

      <div className="container-fluid  pt-4 ms-0" style={{background: 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)'}}>
        <div className="row ms-0">
          {window.screen.width > 767 &&
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
          }
          <div className="col-md-9 text-light">
            <div className="row">
              <h2><strong>{service.title}:</strong></h2>
              <hr />
              <div dangerouslySetInnerHTML={{__html:service.html}}></div>
            </div>
          </div>
        </div>
      </div>

      <hr className='w-75 mx-auto rounded' style={{ margin: '0px', border: '0.2rem solid white' }} />
    </>
  )
}
