import React, { useState } from 'react';
import '../Styles/ProductDetails.css';
import productBg from '../Resources/growthBlur.jpg'
import { useParams, useLocation } from 'react-router-dom';
import ReadMore from './ReadMore';
import axios from "axios";

export default function ProductDetails(props) {

    const { productname } = useParams();
    const location = useLocation();
    var ABC = location.state.productDetail;
    const Data = JSON.parse(ABC);
    const [productName, setProductName] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    function sendProductInquiry() {
        var subject = (productName.search(/[A-Z]{1,}/i) !== -1) ? productName : 'PRODUCT INQUIRY';
        var contact = (phone) ? phone : 'Contact Number is not given';
        if (name && email && question) {
            axios.post(`${process.env.REACT_APP_API_URL}send_product_inquiry`, {
                subject,
                name,
                contact,
                email,
                question
            }).then(() => {
                alert('Message sent successfuly!');
                setProductName('');
                setName('');
                setPhone('');
                setEmail('');
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
        <div className="row bg-dark text-light" style={{ background: `url(${productBg}) no-repeat center center / cover`, paddingTop: '5rem' }}>

            <div className="card-header productDetailsHead">
                <h2 className="text-start">{Data.productName}</h2>
            </div>
            <hr className='mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />
            {
                Data.productName.search(/Hydraulic\sCylinder|Hydraulic\sPress\sMachine|Hydraulic\sPower\sUnit/) !== -1 &&

                <div className="row mt-3 px-4 mx-auto">
                    <ReadMore productName={Data.productName} />
                </div>

            }


            {Data.productName.search(/Hydraulic\sCylinder/i) !== -1 &&
                <>
                    <div className="accordion mt-3 px-4 text-white mx-auto mb-4" id="accordionPressTypes" >
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingPressTypes">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePressTypes" aria-expanded="false" aria-controls="collapsePressTypes" style={{ backgroundColor: '#555', color: '#fff', borderRadius: '5px' }}>
                                    Types of Hydraulic Cylinders
                                </button>
                            </h2>
                            <div id="collapsePressTypes" className="accordion-collapse collapse fade collapse show" aria-labelledby="headingPressTypes" data-bs-parent="#accordionPressTypes">
                                <div className="accordion-body" style={{ backgroundColor: '#222', borderRadius: '5px' }}>
                                    <div className="accordion mt-3" id="accordionPressTypesDetails">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                    1. Single Acting Cylinders
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse fade collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionPressTypesDetails" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                <div className="accordion-body" >
                                                    <p>Because the head end port of these cylinders only operates in one direction, this type of cylinder is known as a single acting cylinder. The liquid will lengthen the piston rod as soon as it is injected into the cylinder barrel. The production of the return operation requires the application of an external force or a load string. The fluid is then transferred from the barrel to the reservoir using external energy. Spring-extend and spring-return single acting cylinders are the two categories. The most popular kind of single action cylinder is spring-return.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                    2. Double Acting Cylinders

                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse fade" aria-labelledby="headingTwo" data-bs-parent="#accordionPressTypesDetails" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                <div className="accordion-body">
                                                    <p>Ports are built into double acting cylinders' heads and rod ends to facilitate fluid pumping. The ports will regulate the liquid's flow and promote movement in both directions. The piston rod retracts when hydraulic fluid is delivered to the rod end. The piston rod can be extended, though, by pushing fluid to the head end. This kind of equipment is used for raising and lowering mechanisms. Differential type and synchronous type double acting cylinders fall into these two major kinds.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                    3. Welded Rod Cylinders
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse fade" aria-labelledby="headingThree" data-bs-parent="#accordionPressTypesDetails" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                <div className="accordion-body" >
                                                    <p>Because the end caps of welded rod cylinders are directly attached to the barrel, these cylinders are challenging to assemble and disassemble. Because of characteristics of this type of cylinders such compact design, internal bearing lengths, and duty cycle, these cylinders are appropriate for mobile applications.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                    4. Tie-Rod Cylinders
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse fade" aria-labelledby="headingThree" data-bs-parent="#accordionPressTypesDetails" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                <div className="accordion-body" >
                                                    <p>High-strength threaded steel rods are used in tie rod cylinders to secure the end caps to the cylinder barrel. Static seals are typically present on these cylinders to stop leakage at the barrel-to-end-cap interface. In general, small cylinders have four tie rods, whereas large, industrial-style models can have up to twenty tie rods to sustain significant stress.</p>
                                                    <p>The most typical industries for tie-rod cylinder utilisation are manufacturing and industrial. Some advantages of these cylinders include ease of assembly, repair, and maintenance. The end caps of the tie rod cylinders are held in place by threaded steel rods. Tie-rod end caps are helpful in preventing fluid leaks.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                    5. Telescopic Cylinders
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse fade" aria-labelledby="headingThree" data-bs-parent="#accordionPressTypesDetails" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                <div className="accordion-body" >
                                                    <p>There are single-acting and double-acting telescopic cylinders. More than five tubings are housed in this kind of cylinder. This is a cylinder with one or two active surfaces. More than five tubings make up the telescopic cylinder. These tubes fit within one another like little nests. Each of these nested tubings or stages gets smaller in diameter.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                    6. Mill Type Cylinders
                                                </button>
                                            </h2>
                                            <div id="collapseSix" className="accordion-collapse collapse fade" aria-labelledby="headingThree" data-bs-parent="#accordionPressTypesDetails" style={{ backgroundColor: '#444', color: '#fff', borderRadius: '5px' }}>
                                                <div className="accordion-body" >
                                                    <p>Mill-Type Cylinders are cylinders made to meet the demand for a more robust, dependable product to lower maintenance costs and downtime. The mill-type cylinder has a heavy-duty construction with steel flanged end caps, heavy-wall steel tubing, bigger pistons, bearings, an innovative gland design, and many other features based on design standards that are not constrained by NFPA. Moreover, the mill-type cylinder has a high-pressure rating that exceeds industry norms. Combined, these qualities guarantee better dependability even under the worst operating and environmental circumstances.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />
                </>
            }

            <div className="container-fluid mx-auto">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="card shadow-lg productDetails">
                            <div className="card-body">
                                <div className="row mx-auto">
                                    {window.screen.width <= 991 &&
                                        <div className="col-lg-6 text-center mx-auto">
                                            {/* <img src={Data.ImgUrl} className="img-fluid rounded" alt={Data.productName} /> */}
                                            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
                                                <div className="carousel-inner">
                                                    {Data.ImgUrl.map((imgUrl, index) => (
                                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                                            <img
                                                                src={process.env.PUBLIC_URL + imgUrl}
                                                                className="img-fluid rounded w-100"
                                                                alt={Data.productName}
                                                                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <button className={`carousel-control-prev ${Data.ImgUrl.length < 2 ? 'visually-hidden' : ''}`} type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className={`carousel-control-next ${Data.ImgUrl.length < 2 ? 'visually-hidden' : ''}`} type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    {
                                        window.screen.width > 991 &&
                                        <div className="col-lg-6 my-3">
                                            {/* <img src={Data.ImgUrl} className="img-fluid rounded" alt={Data.productName} /> */}
                                            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
                                                <div className="carousel-inner">
                                                    {Data.ImgUrl.map((imgUrl, index) => (
                                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                                            <img
                                                                src={process.env.PUBLIC_URL + imgUrl}
                                                                className="img-fluid rounded w-100"
                                                                alt={Data.productName}
                                                                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <button className={`carousel-control-prev ${Data.ImgUrl.length < 2 ? 'visually-hidden' : ''}`} type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className={`carousel-control-next ${Data.ImgUrl.length < 2 ? 'visually-hidden' : ''}`} type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    }

                                    <div className="col-lg-6 text-light">
                                        {
                                            window.screen.width < 991 &&
                                            <h4 className='text-center my-3'>{Data.productName}</h4>
                                        }
                                        {
                                            window.screen.width > 991 &&
                                            <h4>{Data.productName}</h4>
                                        }
                                        <hr />
                                        <table className="table table-dark table-striped table-bordered text-light">
                                            <tbody>
                                                {
                                                    ("Price" in Data) &&
                                                    <tr>
                                                        <th style={{ textDecoration: 'underline', lineHeight: '3rem' }}>Price </th>
                                                        <td>{Data.Price} <span className='fs-6'>per</span> Piece(s)</td>
                                                    </tr>
                                                }
                                                {
                                                    ("manufacturer" in Data) &&
                                                    <tr>
                                                        <th style={{ textDecoration: 'underline' }}>Manufacturer </th>
                                                        <td>{Data.manufacturer}</td>
                                                    </tr>
                                                }
                                                {
                                                    ("country_of_origin" in Data) &&
                                                    <tr>
                                                        <th style={{ textDecoration: 'underline' }}>Country of Origin </th>
                                                        <td>{Data.country_of_origin}</td>
                                                    </tr>
                                                }
                                                {
                                                    ("applications" in Data) &&
                                                    <tr>
                                                        <th style={{ textDecoration: 'underline' }}>Applications </th>
                                                        <td>{Data.applications}</td>
                                                    </tr>
                                                }
                                                {
                                                    ("capacity" in Data) &&
                                                    <tr>
                                                        <th style={{ textDecoration: 'underline' }}>Capacity </th>
                                                        <td>{Data.capacity}</td>
                                                    </tr>
                                                }
                                                {
                                                    ("voltage" in Data) &&
                                                    <tr>
                                                        <th style={{ textDecoration: 'underline' }}>Voltage </th>
                                                        <td>{Data.voltage}</td>
                                                    </tr>
                                                }
                                                {
                                                    ("warranty" in Data) &&
                                                    <tr>
                                                        <th style={{ textDecoration: 'underline' }}>Warranty </th>
                                                        <td>{Data.warranty}</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />

            <div className="container px-5 my-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="mb-4 text-center">Inquiry Form</h2>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="productName" className="form-label">Product Name</label>
                                    <select value={productName} onChange={(e) => { setProductName(e.target.value) }} className="form-select py-3" id="productName" name="product">
                                        <option value="">Choose a product</option>
                                        <optgroup label="Manufacturing Products">
                                            <option value="APG Clamping Machine">APG Clamping Machine</option>
                                            <option value="Bag Embossing Machine">Bag Embossing Machine</option>
                                            <option value="CNC Bending Machine">CNC Bending Machine</option>
                                            <option value="CNC Shearing Machine">CNC Shearing Machine</option>
                                            <option value="Cylinder Boring Machine">Cylinder Boring Machine</option>
                                            <option value="Glass Embossing Machine">Glass Embossing Machine</option>
                                            <option value="Hydraulic Bending Press">Hydraulic Bending Press</option>
                                            <option value="Hydraulic Cylinder">Hydraulic Cylinder</option>
                                            <option value="Hydraulic Machine">Hydraulic Machine</option>
                                            <option value="Hydraulic Oil Cylinder">Hydraulic Oil Cylinder</option>
                                            <option value="Hydraulic Press Machine">Hydraulic Press Machine</option>
                                            <option value="Hydraulic Power Unit">Hydraulic Power Unit</option>
                                            <option value="Hydraulic Sheet Metal Press Brake">Hydraulic Sheet Metal Press Brake</option>
                                            <option value="Metal Tube Bending Machine">Metal Tube Bending Machine</option>
                                            <option value="Plate Rolling Machine">Plate Rolling Machine</option>
                                            <option value="Roll Bending Machine">Roll Bending Machine</option>
                                            <option value="Special Purpose Machine">Special Purpose Machine</option>
                                        </optgroup>
                                        <optgroup label="Supplying Products">
                                            <option value="Accessories">Accessories</option>
                                            <option value="Fittings & Quick Couplings">Fittings & Quick Couplings</option>
                                            <option value="Hose">Hose</option>
                                            <option value="Hydraulic Motors">Hydraulic Motors</option>
                                            <option value="Hydraulic Pumps">Hydraulic Pumps</option>
                                            <option value="Seals & O-Rings">Seals & O-Rings</option>
                                            <option value="Valves">Valves</option>
                                        </optgroup>
                                    </select>

                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="name" className="form-label">Name<span style={{ color: '#F65151' }}>&nbsp;&#42;</span></label>
                                    <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control py-3" id="name" name="name" placeholder="Enter your name" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="email" className="form-label">Email address<span style={{ color: '#F65151' }}>&nbsp;&#42;</span></label>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control py-3" id="email" name="email" placeholder="Enter your email" required />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input value={phone} onChange={(e) => { setPhone(e.target.value) }} type="tel" className="form-control py-3" id="phone" name="phone" placeholder="Enter your phone number" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="message" className="form-label">Message<span style={{ color: '#F65151' }}>&nbsp;&#42;</span></label>
                                <textarea value={question} onChange={(e) => { setQuestion(e.target.value) }} className="form-control" id="message" name="message" rows="3" required></textarea>
                            </div>
                            <button type="button" onClick={sendProductInquiry} className="btn btn-primary rounded">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />

        </div>
    );

}
