import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'; 
import AdminNavbar from './Navbar/AdminNavbar';

const PatientLayout = () => {
  const location = useLocation(); 



  return (
    <>
      <div className="flex h-screen">
         <AdminNavbar />
         <div className="flex-1 p-7">
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  )
}

export default PatientLayout
