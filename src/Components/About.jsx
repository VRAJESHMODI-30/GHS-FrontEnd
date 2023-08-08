import React from 'react'

import "../Styles/About.css"
import aboutBg from "../Resources/contactBlur.jpg"

export default function About() {
    return (
        <>
        
            <div className='row abt-white-box pb-4 pt-4'>
                {window.screen.width<800 &&  
                    <div className='col abt-jumbotron'>
                        <div className="container abt text-light">
                            <h1>Why Us ?</h1>
                            <hr />
                            <p >GHS makes every effort to guarantee its customers the best service available.</p>
                            <p > Fast solution delivery to accelerate project readiness local cost competitiveness widest range of hydraulic solutions rapid response times and local technical support over three decades of experience Advanced & constant quality products product guarantee & free replacement for premature products continuous quest for new design & its successful deliverance.</p>
                        </div>
                    </div>
                }
                {window.screen.width>800 &&
                    <div className='col-7 abt-jumbotron ms-5'>
                        <div className="container abt ms-5 text-light">
                            <h1>Why Us ?</h1>
                            <hr />
                            <p >GHS makes every effort to guarantee its customers the best service available.</p>
                            <p  > Fast solution delivery to accelerate project readiness local cost competitiveness widest range of hydraulic solutions rapid response times and local technical support over three decades of experience Advanced & constant quality products product guarantee & free replacement for premature products continuous quest for new design & its successful deliverance.</p>
                        </div>
                    </div>
                }
            </div>
            <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />
            <div className="row text-light" style={{background:`url(${aboutBg}) no-repeat center center / cover`}}>
                <div className="paragraph my-3">
                    <h2>About Us</h2>
                    <hr className='w-25 mx-auto' />
                    <p> GENERAL HYDRAULIC SOLUTIONS (GHS) believes that no one should have to question the integrity of the mechanical systems that play such a critical role in our way of life. As a supplier of industrial raw materials in engineering and Hydraulic technologies, we strengthen public and industrial bond through our service & Commitments. GENERAL HYDRAULIC SOLUTIONS (GHS) has supplied and secured strong connections in numbers of applications all over the nation. Apart from Sales & Resales Our many solutions are developed and manufactured in-house, ensuring they meet the highest standards in the industry. We are proud partners to many to offer a full life-cycle warranty across all its technologies.</p>
                    <p> From production to engineering and sales, we have a talented team that is always ready to deliver. Our services focus on life cycle profitability, design, production, training and installation support. If you ever have engineering challenge along with sales and support, we will provide you with a solution that maximizes the productivity, safety and reliability of your application.We are passionate about sharing our knowledge, insights and expertise to ensure an optimal long-term solution and we work closely with you to understand your needs, solve your problems and support your projects.</p>
                    <p>Our Vision and Mission is to safeguard human lives therefore we always sale and resale products with high standards from a well-known brand.</p>
                </div>
            </div>
            <hr className='w-75 mx-auto' style={{ margin: '0px', border: '0.2rem solid white' }} />
           
        </>

    )
}
