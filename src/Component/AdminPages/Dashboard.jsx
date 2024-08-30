// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Modal from './Modal'; // Ensure you have a Modal component

// const Dashboard = () => {
//   const [records, setRecords] = useState([]);
//   const [selectedPayment, setSelectedPayment] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1225/admin/allPatients")
//       .then((response) => {
//         setRecords(response.data);
//         console.log(JSON.stringify(response.data, null, 2));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const openModal = (payment) => {
//     setSelectedPayment(payment);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedPayment(null);
//   };

//   const renderModalContent = () => {
//     if (!selectedPayment) return null;

//     const { amount, paymentDate, paymentType } = selectedPayment;

//     return (
//       <div>
//         <h3 className="font-bold">Payment Details</h3>
//         <p><strong>Amount:</strong> {amount}</p>
//         <p><strong>Payment Date:</strong> {new Date(paymentDate).toLocaleDateString()}</p>
//         <p><strong>Payment Type:</strong> {paymentType}</p>
//       </div>
//     );
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>
//       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {records.map((record) => (
//           <div key={record.userId} className="relative border border-gray-200 rounded-lg p-4 shadow-sm">
//             <h2 className="text-xl font-semibold">{record.userName}</h2>
//             <p><strong>Patient ID:</strong> {record.userId}</p>
//             <p><strong>Email:</strong> {record.email}</p>
//             {/* <p><strong>Role:</strong> {record.role}</p> */}
//             <div className="mt-4">
//               <h3 className="font-semibold">Patient Info</h3>
//               <p><strong>Name:</strong> {record.appointment[0].patientInfo.name}</p>
//               <p><strong>Age:</strong> {record.appointment[0].patientInfo.age}</p>
//               <p><strong>Gender:</strong> {record.appointment[0].patientInfo.gender}</p>
//               <p><strong>Phone No:</strong> {record.appointment[0].patientInfo.phoneNo}</p>
//               <button
//                 onClick={() => openModal(record.appointment[0].payment)}
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 View Payment Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {isModalOpen && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           title="Payment Details"
//           content={renderModalContent()}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from './DashboardModal';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { motion } from 'framer-motion';


ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1225/admin/allPatients")
      .then((response) => {
        setRecords(response.data);
        console.log(JSON.stringify(response.data, null, 2));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = (payment) => {
    setSelectedPayment(payment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPayment(null);
  };

  const renderModalContent = () => {
    if (!selectedPayment) return null;

    const { amount, paymentDate, paymentType } = selectedPayment;

    return (
      <div>
        <h3 className="font-bold">Payment Details</h3>
        <p><strong>Amount:</strong> {amount}</p>
        <p><strong>Payment Date:</strong> {new Date(paymentDate).toLocaleDateString()}</p>
        <p><strong>Payment Type:</strong> {paymentType}</p>
      </div>
    );
  };

  
  const paymentData = records.flatMap(record => record.appointment.map(app => app.payment));
  const paymentAmounts = paymentData.map(payment => parseFloat(payment.amount));
  const paymentTypes = paymentData.map(payment => payment.paymentType);
  
  const paymentChartData = {
    labels: paymentTypes,
    datasets: [
      {
        label: 'Payments by Type',
        data: paymentAmounts,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const paymentChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} Rupees`
        }
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Payment Overview</h2>
          <div className="h-72">
            <Pie data={paymentChartData} options={paymentChartOptions} />
          </div>
        </motion.div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {records.map((record) => (
            <motion.div
              key={record.userId}
              className="relative border border-gray-200 rounded-lg p-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold">{record.userName}</h2>
              <p><strong>Patient ID:</strong> {record.userId}</p>
              <p><strong>Email:</strong> {record.email}</p>
              <div className="mt-4">
                <h3 className="font-semibold">Patient Info</h3>
                <p><strong>Name:</strong> {record.appointment[0].patientInfo.name}</p>
                <p><strong>Age:</strong> {record.appointment[0].patientInfo.age}</p>
                <p><strong>Gender:</strong> {record.appointment[0].patientInfo.gender}</p>
                <p><strong>Phone No:</strong> {record.appointment[0].patientInfo.phoneNo}</p>
                <button
                  onClick={() => openModal(record.appointment[0].payment)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Payment Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Payment Details"
          content={renderModalContent()}
        />
      )}
    </div>
  );
};

export default Dashboard;

