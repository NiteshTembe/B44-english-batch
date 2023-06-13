import React from 'react'
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import Users from '../components/Users';

const Dashboard = () => {
  return (
    <>
    <Navbar navTitle="Dashboard" />
    <Sidebar />
    <MainBox />
    </>
  )
}

const MainBox = () => {
  return (
      <div className="container-fluid" style={{marginLeft: "60px", marginTop: "100px"}}>
          <Users />
      </div>
  )
}

export default Dashboard
