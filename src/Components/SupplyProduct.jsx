import React,{useState} from 'react'
import ProductCard from '../Components/ProductCard'
import "../Styles/Product.css"
import supplyProductData from "../JSON/Supply.json"
// import productBg from '../Resources/productBg.webp'
import productBg from '../Resources/growthBlur.jpg'

export default function SupplyProduct() {

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = supplyProductData.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(supplyProductData.length / productsPerPage);

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
      <div className='row text-light' style={{ background: `url(${productBg}) no-repeat center center / cover`,paddingTop:'5rem' }}>
        <div className='px-4'>
          <h2 style={{ marginTop: '2rem' }}>PRODUCTS</h2>
          <hr></hr>
        </div>
        <div className="supply text-center py-4">
          <h3>We Supply</h3>
          <hr className='w-50 m-auto mb-4' />
          <div className="card-group">
            {
              // supplyProductData.map((ele) => {
                currentProducts.map((ele) => {
                return <ProductCard key={ele.id} subCategoryObject={ele} subcategory={ele.subCategory} suppliers={ele.suppliers} />
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
      </div>

    </>
  )
}
