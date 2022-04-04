import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/product';
import { ProductType } from '../types/product';

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data);
    }
    getProduct();
  }, [id])
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" style={{ width: 600, height: 450 }} />
          </div>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">{product?.name}</div>
              <div className="reviews-counter">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} defaultChecked />
                  <label htmlFor="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} defaultChecked />
                  <label htmlFor="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} defaultChecked />
                  <label htmlFor="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">1 star</label>
                </div>
                <span>3 Reviews</span>
              </div>
              <div className="product-price-discount"><span>$39.00</span><span className="line-through">$29.00</span></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="size">Size</label>
                <select id="size" name="size" className="form-control">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="color">Color</label>
                <select id="color" name="color" className="form-control">
                  <option>Blue</option>
                  <option>Green</option>
                  <option>Red</option>
                </select>
              </div>
            </div>
            <div className="product-count">
              <label htmlFor="size">Quantity</label>
              <form action="#" className="display-flex">
                <input type="number" name="quantity" defaultValue={1} className="qty" />
              </form>
              <a href="#" className="round-black-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetail