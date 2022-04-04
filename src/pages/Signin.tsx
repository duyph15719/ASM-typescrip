import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { signin, signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
  email: string,
  password: string | number
}

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSumbit: SubmitHandler<FormInputs> = async (user) => {
    const { data } = await signin(user);
    if (data) {
      toast.success("Bạn đã đăng nhập thành công, chờ 3s");
      setTimeout(() => {
        navigate('/')
        localStorage.setItem("user", JSON.stringify(data))
      }, 3000)
    }
  }
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
          <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">

          <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit(onSumbit)}>
            <div className="form-floating mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="name@example.com" {...register('email')} />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Password"  {...register('password')} />
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <hr className="my-4" />
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>
          <ToastContainer />

        </div>
      </div>
    </div>
  )
}

export default Signin