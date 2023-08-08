import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    const pageScrollUp = ()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    }
    return (
        <>
            {props.subcategory === false &&
                <Link onClick={pageScrollUp} to={{
                    pathname: `/product-details/${props.productObject.productName}`,
                }}
                    state={{ productDetail: JSON.stringify(props.productObject) }}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="card m-4 effect productCard rounded pb-2" style={{ width: '18rem' }}>
                        <img src={process.env.PUBLIC_URL+props.productObject.ImgUrl[0]} className="card-img-top" alt="..." 
                         style={{ objectFit: "contain", width: "100%", height: "300px" }}
                        />
                        <div className="card-body">
                            <p className="card-text text-light">{props.productObject.productName}</p>
                        </div>
                    </div>
                </Link>

            }
            {
                props.subcategory === true &&
                <Link onClick={pageScrollUp} to={{
                    pathname: `/product-category/${props.subCategoryObject.productCategory}`,
                }}
                    state={{
                        productList: JSON.stringify(props.subCategoryObject.productJSON),
                        categoryInfo: props.subCategoryObject.categoryInfo,
                        productCategory: props.subCategoryObject.productCategory,
                        suppliers: JSON.stringify(props.suppliers)
                    }}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="card m-4 effect productCard rounded" style={{ width: '18rem' }}>
                        <img src={props.subCategoryObject.categoryImg[0]} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{props.subCategoryObject.productCategory}</p>
                        </div>
                    </div>
                </Link>
            }
            
        </>
    )
}
