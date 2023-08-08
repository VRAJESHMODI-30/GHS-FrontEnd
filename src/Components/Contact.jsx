import React, { useState } from 'react'
import "../Styles/Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import contactBg from '../Resources/contactBg.webp';

export default function Contact() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [question, setQuestion] = useState('');

  function sendEnquiry() {
    var subject = 'PRODUCT ENQUIRY';
    var companyName = (company) ? company : 'COMPANY_NAME';
    var companyAddress = (address) ? address : 'COMPANY_ADDRESS';
    if (first && last && contact && email && question) {
      axios.post(`${process.env.REACT_APP_API_URL}send_enquiry`, {
        first,
        last,
        companyName,
        contact,
        companyAddress,
        email,
        subject,
        question,
      }).then(() => {
        alert('Message sent successfuly!');
        setFirst('');
        setLast('');
        setCompany('');
        setContact('');
        setEmail('');
        setAddress('')
        setQuestion('');
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }).catch(() => { alert('Please try after some time.') });
    }
    else {
      return alert("Fill in all required fields to send message.");
    }
  }

  return (
    <>
      <div className="bg pt-5" style={{ background: `url(${contactBg}) no-repeat center center / cover` }}>
        <div className="row text-light">
          {window.screen.width < 800 &&
            <div className="col my-1 ms-1 contact">
              <h1 className='text-start'> CONTACT</h1>
              <hr />
              <p >General hydraulic solutions (GHS) is serving complete hydraulic solutions and reliable products nationwide with appropriate standards for. GHS, manufactures as well as supplies complete hydraulic products
              </p>
              <p > <b> <FontAwesomeIcon icon={faEnvelope} /> &nbsp; </b> ghsnationwide@gmail.com</p>
              <p > <b><FontAwesomeIcon icon={faPhone} /> &nbsp; </b> +91 - 94293 45049</p>
              <p > <b><FontAwesomeIcon icon={faLocationDot} /> &nbsp; </b> Plot No - 199 Nr. Matrix, GIDC, Makarpura, Vadodara, 390010</p>
            </div>
          }
          {window.screen.width > 800 &&
            <div className="col-6 my-1 ms-5 contact">
              <h1 className='text-start'> CONTACT</h1>
              <hr />
              <p >General hydraulic solutions (GHS) is serving complete hydraulic solutions and reliable products nationwide with
                appropriate standards for. GHS, manufactures as well as supplies complete hydraulic products
              </p>
              <p > <b><FontAwesomeIcon icon={faEnvelope} /> &nbsp;</b> ghsnationwide@gmail.com</p>
              <p > <b><FontAwesomeIcon icon={faPhone} /> &nbsp;</b> +91 - 94293 45049</p>
              <p > <b><FontAwesomeIcon icon={faLocationDot} /> &nbsp; </b> Plot No - 199 Nr. Matrix, GIDC, Makarpura, Vadodara, 390010</p>
            </div>
          }

        </div>
        <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />
        <div className="row">
          <div className=" container py-3 px-5 text-light" >
            <div className="row justify-content-center">
              <div className="col-md-8 contact" >
                <h2 style={{textShadow: '1px 1px white'}}>Contact Form</h2>
                <hr className='border border-light border-1' />
                <form>
                  <div className="form-group">
                    <label htmlFor="first-name">First Name<span style={{ color: '#F65151' }}>&nbsp;&#42;</span></label>
                    <input value={first} placeholder='eg. Max' type="text" onChange={(e) => { setFirst(e.target.value) }} className="form-control rounded" id="first-name" name="first-name" required style={{ backgroundColor: '#EEF7FB' }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name<span style={{ color: '#F65151' }}>&nbsp;&#42;</span></label>
                    <input value={last} placeholder='eg. Adams' type="text" onChange={(e) => { setLast(e.target.value) }} className="form-control rounded" id="last-name" name="last-name" required style={{ backgroundColor: '#EEF7FB' }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company-name">Company Name</label>
                    <input value={company} placeholder='eg. XYZ' type="text" onChange={(e) => { setCompany(e.target.value) }} className="form-control rounded" id="company-name" name="company-name" style={{ backgroundColor: '#EEF7FB' }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-number">Contact Number<span style={{ color: '#F65151' }}>&nbsp;&#42;</span></label>
                    <input value={contact} type="text" onChange={(e) => { setContact(e.target.value) }} className="form-control rounded" id="contact-number" name="contact-number" required style={{ backgroundColor: '#EEF7FB' }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email<span style={{ color: '#F65151' }}>&nbsp;&#42;</span></label>
                    <input value={email} placeholder='eg. maxadams01@XYZ.com' type="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control rounded" id="email" name="email" required style={{ backgroundColor: '#EEF7FB' }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control rounded" id="address" name="address" rows="3" style={{ backgroundColor: '#EEF7FB' }}></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enquiry">Question<span style={{ color: '#F65151' }}>&nbsp;&#42;</span></label>
                    <textarea value={question} placeholder='Leave a comment...' onChange={(e) => { setQuestion(e.target.value) }} className="form-control rounded" id="enquiry" name="enquiry" rows="5" required style={{ backgroundColor: '#EEF7FB' }}></textarea>
                  </div>
                  <button type='button' onClick={sendEnquiry} className="btn btn-primary rounded-pill">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />
      </div>
    </>
  )
}
