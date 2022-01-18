import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardLayout from 'templates/DashboardTemplate'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}

export default Dashboard
