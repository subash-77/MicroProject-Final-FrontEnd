import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'; 
import PsychiatristNavbar from './Navbar/PsychiatristNavbar';

const PatientLayout = () => {
  const location = useLocation(); 



  return (
    <>
      <div className="flex h-screen">
         <PsychiatristNavbar />
         <div className="flex-1 p-7">
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  )
}

export default PatientLayout
