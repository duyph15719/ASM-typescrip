import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product';

type ProductManagerProps = {
    products: ProductType[],
    onRemove: (_id?: string | number) => void
}

const ProductManager = (props: ProductManagerProps) => {

    return (
        <div className="container my-2">
            <a href="/admin/products/add"><button type="button" className="btn btn-primary btn-lg">Thêm Sản Phẩm</button></a>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products?.map((product, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><Link to={`/admin/products/${product._id}/edit`} className="btn btn-primary">Update</Link></td>
                                <td><button onClick={() => props.onRemove(product._id)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ProductManager