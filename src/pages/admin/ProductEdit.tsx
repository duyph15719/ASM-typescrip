import React, { useEffect } from 'react'
import { SubmitHandler, useForm} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { read, update } from '../../api/product';
import { ProductType } from '../../types/product';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
    name: string
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    _id?:string,
    name: string,
    price: number,
    image: string
}

const ProductEdit = (props: ProductAddProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset} = useForm<FormInputs>();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, [id])


    const onSumbit: SubmitHandler<FormInputs> = (data) => {
        props.onUpdate(data);
        navigate('/')
        
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit(onSumbit)}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register('name')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control"  {...register('price')} />
            </div>
            <button className="btn btn-primary">Thêm sản phẩm</button>
        </form>

    </div>
  )
}

export default ProductEdit