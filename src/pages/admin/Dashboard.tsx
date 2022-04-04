import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="btn-toolbar mb-2 mb-md-0">
      <div className="btn-group me-2">
        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
      </div>
      <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar" />
        This week
      </button>
      <canvas className="my-4 w-100" id="myChart" width={900} height={380} />

    </div>
     


  )
}

export default Dashboard