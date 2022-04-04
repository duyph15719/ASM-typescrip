import React from 'react'
import Search from './Seach'

type Props = {}

const header = (props: Props) => {
    return (
        <div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-secondary">Trang Chủ</a></li>
                            <li><a href="/products" className="nav-link px-2 text-white">Sản Phẩm</a></li>
                            <li><a href="/about" className="nav-link px-2 text-white">Thông tin cửa hàng</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Thông tin liên hệ</a></li>
                            <li><a href="/cart" className="nav-link px-2 text-white">Giỏ Hàng</a></li>
                        </ul>
                        <Search />
                        <div className="text-end">
                            <a href="/signin"><button type="button" className="btn btn-outline-light me-2">Đăng Nhập</button></a>
                            <a href="/signup"><button type="button" className="btn btn-warning">Đăng Ký</button></a>
                        </div>
                    </div>
                </div>
            </header>

        </div>

    )
}

export default header