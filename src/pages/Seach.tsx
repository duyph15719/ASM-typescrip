import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/seach';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

type Props = {
    name: string,
}

const Seach = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Props>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<Props> = async (products) => {
        const { data } = await read(products);
        if (data) {
            toast.success("Bạn đã đăng nhập thành công, chờ 3s");
            setTimeout(() => {
                navigate('/products')
                localStorage.setItem("user", JSON.stringify(data))
            }, 3000)
        }
    }
    return (
        <div>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" {...register('name')}/>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Seach