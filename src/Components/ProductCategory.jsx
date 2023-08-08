import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import ProductCard from './ProductCard';
import productBg from '../Resources/growthBlur.jpg'
import "../Styles/Product.css"
import { useTrail, animated } from 'react-spring';

export default function ProductCategory() {
  const { ProductCategory } = useParams();
  const location = useLocation();
  const supplierArray = JSON.parse(location.state.suppliers);
  const data = JSON.parse(location.state.productList);
  const info = location.state.categoryInfo;
  const productCategory = location.state.productCategory;

  const [logocurrentPage, setLogoCurrentPage] = useState(1);
  const [logosPerPage] = useState(6);
  const indexOfLastLogo = logocurrentPage * logosPerPage;
  const indexOfFirstLogo = indexOfLastLogo - logosPerPage;
  const currentLogos = supplierArray.slice(indexOfFirstLogo, indexOfLastLogo);

  // const totalLogoPages = Math.ceil(supplierArray.length / logosPerPage);

  // const handleNextPageLogo = () => {
  //   if (logocurrentPage < totalLogoPages) {
  //     setLogoCurrentPage(logocurrentPage + 1);
  //   }
  // };

  // const handlePrevPageLogo = () => {
  //   if (logocurrentPage > 1) {
  //     setLogoCurrentPage(logocurrentPage - 1);
  //   }
  // };


  const trail = useTrail(currentLogos.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(data.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className='row text-light' style={{ background: `url(${productBg}) no-repeat center center / cover`, paddingTop: '5rem' }}>
        <div className=' px-4'>
          <h2 style={{ marginTop: '2rem' }}> <strong>{productCategory}</strong></h2>
          <hr></hr>
          <p>{info}</p>

        </div>
          <div className="manufature text-center py-4">
            <div className="card-group">
              {
                // data.map((ele) => {
                currentProducts.map((ele) => {
                  return <ProductCard key={ele.id} productObject={ele} subcategory={ele.subCategory} />
                  // return <ProductCard key={ele.id} imgUrl={ele.ImgUrl} productName={ele.productName} subcategory={ele.subCategory}/>
                })
              }
            </div>
            <div className="pagination float-end mx-5">
              <button
                className={`btn btn-secondary  fs-4 py-1 px-3 ${currentPage === 1 ? 'disabled' : ''} border border-light border-1 rounded me-2`}
                onClick={handlePrevPage}>&lt;</button>
              <span className='page-number'>
                {`${currentPage} of ${totalPages}`}
              </span>
              <button
                className={`btn btn-secondary fs-4 py-1 px-3 ${currentPage === totalPages ? 'disabled' : ''} border border-light border-1 rounded ms-2`}
                onClick={handleNextPage}>
                &gt;
              </button>
            </div>
          </div>
        {/* <div className="manufature text-center py-4">
        <div className="card-group">
          {
            // data.map((ele) => {
            currentProducts.map((ele) => {
              return <ProductCard key={ele.id} productObject={ele} subcategory={ele.subCategory} />
              // return <ProductCard key={ele.id} imgUrl={ele.ImgUrl} productName={ele.productName} subcategory={ele.subCategory}/>
            })
          }
        </div>
        <div className="pagination float-end mx-5">
          <button
            className={`btn btn-secondary  fs-4 py-1 px-3 ${currentPage === 1 ? 'disabled' : ''} border border-light border-1 rounded me-2`}
            onClick={handlePrevPage}>&lt;</button>
          <span className='page-number'>
            {`${currentPage} of ${totalPages}`}
          </span>
          <button
            className={`btn btn-secondary fs-4 py-1 px-3 ${currentPage === totalPages ? 'disabled' : ''} border border-light border-1 rounded ms-2`}
            onClick={handleNextPage}>
            &gt;
          </button>
        </div>
      </div> */}
      <hr className='w-75 mx-auto' />
      <div className="px-4 mb-3">
        <div className="container supplyProduct py-2">
          <h2 className='text-center'>TRUSTWORTHY BRANDS</h2>
          <hr className='w-75 mx-auto my-2' style={{ margin: '0px', border: '0.2rem solid black' }} />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center mt-2">
            {/* {currentLogos.map((props, index) => ( */}
            {supplierArray.map((props, index) => (
              <animated.div className="col" key={index + 1} style={props}>
                <div className="logo-item photo">
                  <img src={process.env.PUBLIC_URL + '/Logos/' + supplierArray[index].logoUrl} alt={`Logo ${index + 1}`} />
                </div>
              </animated.div>
            ))}
            {/* <div className="pagination mx-3">
              <button
                className={`btn btn-secondary fs-6 py-0 px-2 ${logocurrentPage === 1 ? 'disabled' : ''} border border-light border-1 rounded me-2`}
                onClick={handlePrevPageLogo}>&lt;</button>
              <span className='page-number'>
                {`${logocurrentPage} of ${totalLogoPages}`}
              </span>
              <button
                className={`btn btn-secondary fs-6 py-0 px-2 ${logocurrentPage === totalLogoPages ? 'disabled' : ''} border border-light border-1 rounded ms-2`}
                onClick={handleNextPageLogo}>
                &gt;
              </button>
            </div> */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}