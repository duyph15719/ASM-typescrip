import React from 'react'

type Props = {}

const Silebar = (props: Props) => {
    return (
        <main className="container">
            <h1 className="visually-hidden">Sidebars examples</h1>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 280, height:750 }}>
                <a href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                    <span className="fs-4">Sidebar</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/admin" className="nav-link active" aria-current="page">
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/admin/products" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                           Sản Phẩm 
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
                            Danh mục
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                            Tài Khoản
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
                            Website
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </main>


    )
}

export default Silebar