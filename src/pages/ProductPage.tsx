import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";

type ProductPageProps = {
    products: ProductType[];
};

const ProductPage = (props: ProductPageProps) => {
    return (
        <div className="row">
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {props.products?.map((product, index) => {
                            return <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" height={205} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body">
                                    <p className="card-text">{product.name}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <Link to={`/products/${product._id}`} className="btn btn-sm btn-outline-secondary">
                                                Chi tiết
                                            </Link>
                                        </div>
                                        <small className="text-muted">{product.price}</small>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProductPage;
