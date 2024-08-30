import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'; 
import PatientNavbar from './Navbar/PatientNavbar';

const PatientLayout = () => {
  const location = useLocation(); 



  return (
    <>
      <div className="flex h-screen">
         <PatientNavbar />
         <div className="flex-1 p-7">
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  )
}

export default PatientLayout
