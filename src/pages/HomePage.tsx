import React from 'react'
import { ProductType } from '../types/product'
import { CategoryType } from '../types/category'
import { Link } from "react-router-dom";


type HomepageProps = {
  product: ProductType[],
  category: CategoryType[],
}
const HomePage = (props: HomepageProps) => {

  return (
    <div className="container my-2">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
          <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
        </div>
      </div>
      <div className="row">
        <h1>Danh Mục Sản Phẩm</h1>
        {props.category?.map((category) => {
          return <div className="col-3">
            <div className="card">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
              </div>
            </div>
          </div>
        })}
      </div>
      <div className="row my-2 mb-2">
        <h1> Sản Phẩm</h1>
        {props.product?.map((product) => {
          return <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">{product.name}</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <Link to={`/products/${product._id}`} className="btn btn-sm btn-outline-secondary">
                  Chi tiết
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={product.image}></img>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default HomePage