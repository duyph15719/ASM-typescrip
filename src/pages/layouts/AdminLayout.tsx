
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Silebar'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
        <div className="row">
            <div className="col-3">
                <Sidebar />
            </div>
            <div className="col-9">
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
  )
}

export default AdminLayout