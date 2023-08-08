import React, { useState } from 'react'
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import "./App.css"
import ProductDetails from "./Components/ProductDetails";
import ProductCategory from "./Components/ProductCategory";
import SupplyProduct from "./Components/SupplyProduct";
import Service from "./Components/Service";
import ServiceCategory from "./Components/ServiceCategory";

function App() {

  const [navBtn, setNavBtn] = useState(false);
  const [productNavBtn, setProductNavBtn] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<Root navBtn={navBtn} setNavBtn={setNavBtn} productNavBtn={productNavBtn} setProductNavBtn={setProductNavBtn} />}>
        <Route index element={<Home navBtn={navBtn} productNavBtn={productNavBtn} />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/manufacturing" element={<Product />} />
        <Route exact path="/supply" element={<SupplyProduct />} />
        <Route path="/product-details/:type" element={<ProductDetails />} />
        <Route path="/product-category/:type" element={<ProductCategory />} />
        <Route path="/GHS-Services/:type" element={<ServiceCategory />} />
      </Route>
    )
  )


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>


  );
}

const Root = (props) => {
  return (
    <>
      {/* <div className="bottomright" style={{ zIndex: 100 }}>
        <Link to="https://api.whatsapp.com/send?phone=9429345049" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="big" /></Link>
      </div> */}
      <div className="whatsapp-container position-fixed d-flex justify-content-end justify-content-lg-start bottom-0 end-0 pb-4 pe-4 pe-lg-0" style={{zIndex:100}}>
        <Link to="https://api.whatsapp.com/send?phone=9429345049"  target="_blank" rel="noopener noreferrer" className="d-flex align-items-center bg-whatsapp rounded-circle p-3 p-md-4">
        <FontAwesomeIcon icon={faWhatsapp} size="lg" inverse />
        </Link>
      </div>

      <Navbar navBtn={props.navBtn} setNavBtn={props.setNavBtn} productNavBtn={props.productNavBtn} setProductNavBtn={props.setProductNavBtn} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
