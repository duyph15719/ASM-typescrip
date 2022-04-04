import React from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { ProductType } from '../../types/product';

type ProductAddProps = {
    name: string
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    image: string,
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();

    const onSumbit: SubmitHandler<FormInputs> = (data) => {
        props.onAdd(data);
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit(onSumbit)}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder='Tối thiểu 5 kí tự' {...register('name')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control"  {...register('price')} />
            </div>
            <div className="mb-3">
                <label className="form-label">image</label>
                <input type="file" className="form-control" {...register('image')} />
            </div>
            <button className="btn btn-primary">Thêm sản phẩm</button>
        </form>

    </div>
  )
}

export default ProductAdd