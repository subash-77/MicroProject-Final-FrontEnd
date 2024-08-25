// // import React, { useState, useEffect } from 'react';
// // import ReactDOM from 'react-dom';
// // import { AiOutlineClose } from 'react-icons/ai';
// // import axios from 'axios';

// // const Modal = ({ isOpen, onClose, profile, onUpdate }) => {
// //   const [editMode, setEditMode] = useState(false);
// //   const [profileData, setProfileData] = useState(profile);
// //   const [errors, setErrors] = useState({});
// //   const [successModalVisible, setSuccessModalVisible] = useState(false);

// //   useEffect(() => {
// //     setProfileData(profile);
// //   }, [profile]);

// //   if (!isOpen) return null;

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name.startsWith('psychiatristAvailability.')) {
// //       const key = name.split('.')[1];
// //       setProfileData(prevState => ({
// //         ...prevState,
// //         psychiatristAvailability: {
// //           ...prevState.psychiatristAvailability,
// //           [key]: value
// //         }
// //       }));
// //     } else {
// //       setProfileData(prevState => ({
// //         ...prevState,
// //         [name]: value
// //       }));
// //     }
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     // Validation rules
// //     if (!profileData.username) newErrors.username = 'Username is required';
// //     if (!profileData.email) newErrors.email = 'Email is required';
// //     if (!profileData.password) newErrors.password = 'Password is required';
// //     if (!profileData.specialization) newErrors.specialization = 'Specialization is required';
// //     if (!profileData.experienceYear) newErrors.experienceYear = 'Experience year is required';
// //     if (!profileData.bio) newErrors.bio = 'Bio is required';
// //     if (!profileData.education) newErrors.education = 'Education is required';
// //     if (!profileData.fees) newErrors.fees = 'Fees are required';
// //     if (!profileData.psychiatristAvailability?.availableDate) newErrors.availableDate = 'Availability date is required';
// //     if (profileData.psychiatristAvailability?.slot1 === '') newErrors.slot1 = 'Slot 1 is required';
// //     if (profileData.psychiatristAvailability?.slot2 === '') newErrors.slot2 = 'Slot 2 is required';
// //     if (profileData.psychiatristAvailability?.slot3 === '') newErrors.slot3 = 'Slot 3 is required';

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleUpdate = () => {
// //     if (!validateForm()) return; // Stop if validation fails
    
// //     if (!profileData.psychiatristId) {
// //       console.error("Invalid psychiatrist ID");
// //       return;
// //     }
  
// //     axios.put(`http://localhost:1225/psychiatrist/psychiatrist/${profileData.psychiatristId}`, profileData)
// //       .then(response => {
// //         console.log("Update successful:", response.data);
// //         onUpdate(response.data); // Update parent component with new data
// //         setEditMode(false); // Exit edit mode
// //         alert("records updated");
       
// //         onClose(); // Close the modal
// //       })
// //       .catch(err => {
// //         console.error("Update failed:", err);
// //       });
// //   };

// //   return ReactDOM.createPortal(
// //     <div>
// //       {successModalVisible && (
// //         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
// //           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-sm w-full">
// //             <strong className="font-bold">Success!</strong>
// //             <span className="block sm:inline">Record updated successfully.</span>
// //           </div>
// //         </div>
// //       )}
// //       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-40">
// //         <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-2xl font-semibold">{editMode ? 'Edit Profile' : 'Profile Details'}</h2>
// //             <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
// //               <AiOutlineClose className="h-6 w-6" />
// //             </button>
// //           </div>
// //           <form>
// //             {/* Form Fields */}
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Username</label>
// //               <input
// //                 type="text"
// //                 name="username"
// //                 value={profileData.username || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Email</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={profileData.email || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Password</label>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 value={profileData.password || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Specialization</label>
// //               <input
// //                 type="text"
// //                 name="specialization"
// //                 value={profileData.specialization || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.specialization && <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Experience Year</label>
// //               <input
// //                 type="text"
// //                 name="experienceYear"
// //                 value={profileData.experienceYear || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.experienceYear && <p className="text-red-500 text-xs mt-1">{errors.experienceYear}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Bio</label>
// //               <textarea
// //                 name="bio"
// //                 value={profileData.bio || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Education</label>
// //               <input
// //                 type="text"
// //                 name="education"
// //                 value={profileData.education || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Fees</label>
// //               <input
// //                 type="text"
// //                 name="fees"
// //                 value={profileData.fees || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.fees && <p className="text-red-500 text-xs mt-1">{errors.fees}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Availability Date</label>
// //               <input
// //                 type="date"
// //                 name="psychiatristAvailability.availableDate"
// //                 value={profileData.psychiatristAvailability?.availableDate || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.availableDate && <p className="text-red-500 text-xs mt-1">{errors.availableDate}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Slot 1  : 10.00 - 11.00 AM</label>
// //               <select
// //                 name="psychiatristAvailability.slot1"
// //                 value={profileData.psychiatristAvailability?.slot1 || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="0">0</option>
// //                 <option value="1">1</option>
// //               </select>
// //               {errors.slot1 && <p className="text-red-500 text-xs mt-1">{errors.slot1}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Slot 2 : 02.00 03.00 PM</label>
// //               <select
// //                 name="psychiatristAvailability.slot2"
// //                 value={profileData.psychiatristAvailability?.slot2 || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="0">0</option>
// //                 <option value="1">1</option>
// //               </select>
// //               {errors.slot2 && <p className="text-red-500 text-xs mt-1">{errors.slot2}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Slot 3 : 07.00 - 08.00 PM</label>
// //               <select
// //                 name="psychiatristAvailability.slot3"
// //                 value={profileData.psychiatristAvailability?.slot3 || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="0">0</option>
// //                 <option value="1">1</option>
// //               </select>
// //               {errors.slot3 && <p className="text-red-500 text-xs mt-1">{errors.slot3}</p>}
// //             </div>
// //             {editMode && (
// //               <button
// //                 type="button"
// //                 onClick={handleUpdate}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150"
// //               >
// //                 Update
// //               </button>
// //             )}
// //           </form>
// //           {!editMode && (
// //             <button
// //               type="button"
// //               onClick={() => setEditMode(true)}
// //               className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-150"
// //             >
// //               Edit
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>,
// //     document.body
// //   );
// // };

// // export default Modal;


// // import React, { useState, useEffect } from 'react';
// // import ReactDOM from 'react-dom';
// // import { AiOutlineClose } from 'react-icons/ai';
// // import axios from 'axios';

// // const Modal = ({ isOpen, onClose, profile, onUpdate }) => {
// //   const [editMode, setEditMode] = useState(false);
// //   const [profileData, setProfileData] = useState(profile);
// //   const [errors, setErrors] = useState({});
// //   const [successMessage, setSuccessMessage] = useState('');

// //   useEffect(() => {
// //     setProfileData(profile);
// //   }, [profile]);

// //   if (!isOpen) return null;

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name.startsWith('psychiatristAvailability.')) {
// //       const key = name.split('.')[1];
// //       setProfileData(prevState => ({
// //         ...prevState,
// //         psychiatristAvailability: {
// //           ...prevState.psychiatristAvailability,
// //           [key]: value
// //         }
// //       }));
// //     } else {
// //       setProfileData(prevState => ({
// //         ...prevState,
// //         [name]: value
// //       }));
// //     }
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     // Validation rules
// //     if (!profileData.username) newErrors.username = 'Username is required';
// //     if (!profileData.email) newErrors.email = 'Email is required';
// //     if (!profileData.password) newErrors.password = 'Password is required';
// //     if (!profileData.specialization) newErrors.specialization = 'Specialization is required';
// //     if (!profileData.experienceYear) newErrors.experienceYear = 'Experience year is required';
// //     if (!profileData.bio) newErrors.bio = 'Bio is required';
// //     if (!profileData.education) newErrors.education = 'Education is required';
// //     if (!profileData.fees) newErrors.fees = 'Fees are required';
// //     if (!profileData.psychiatristAvailability?.availableDate) newErrors.availableDate = 'Availability date is required';
// //     if (profileData.psychiatristAvailability?.slot1 === '') newErrors.slot1 = 'Slot 1 is required';
// //     if (profileData.psychiatristAvailability?.slot2 === '') newErrors.slot2 = 'Slot 2 is required';
// //     if (profileData.psychiatristAvailability?.slot3 === '') newErrors.slot3 = 'Slot 3 is required';

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleUpdate = () => {
// //     if (!validateForm()) return; // Stop if validation fails

// //     if (!profileData.psychiatristId) {
// //       console.error("Invalid psychiatrist ID");
// //       return;
// //     }

// //     axios.put(`http://localhost:1225/psychiatrist/psychiatrist/${profileData.psychiatristId}`, profileData)
// //       .then(response => {
// //         console.log("Update successful:", response.data);
// //         onUpdate(response.data); // Update parent component with new data
// //         setSuccessMessage("Record updated successfully."); // Set success message
// //         setEditMode(false); // Exit edit mode
// //         // You can also set a timer to clear the success message if desired
// //         setTimeout(() => setSuccessMessage(''), 5000); // Clear success message after 5 seconds
// //         // Optionally close the modal after showing the success message
// //         // onClose();
// //       })
// //       .catch(err => {
// //         console.error("Update failed:", err);
// //         setSuccessMessage("Failed to update record.");
// //       });
// //   };

// //   return ReactDOM.createPortal(
// //     <div>
// //       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-40">
// //         <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-2xl font-semibold">{editMode ? 'Edit Profile' : 'Profile Details'}</h2>
// //             <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
// //               <AiOutlineClose className="h-6 w-6" />
// //             </button>
// //           </div>
// //           <form>
// //             {/* Form Fields */}
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Username</label>
// //               <input
// //                 type="text"
// //                 name="username"
// //                 value={profileData.username || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Email</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={profileData.email || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Password</label>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 value={profileData.password || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Specialization</label>
// //               <input
// //                 type="text"
// //                 name="specialization"
// //                 value={profileData.specialization || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.specialization && <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Experience Year</label>
// //               <input
// //                 type="text"
// //                 name="experienceYear"
// //                 value={profileData.experienceYear || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.experienceYear && <p className="text-red-500 text-xs mt-1">{errors.experienceYear}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Bio</label>
// //               <textarea
// //                 name="bio"
// //                 value={profileData.bio || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Education</label>
// //               <input
// //                 type="text"
// //                 name="education"
// //                 value={profileData.education || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Fees</label>
// //               <input
// //                 type="text"
// //                 name="fees"
// //                 value={profileData.fees || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.fees && <p className="text-red-500 text-xs mt-1">{errors.fees}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Availability Date</label>
// //               <input
// //                 type="date"
// //                 name="psychiatristAvailability.availableDate"
// //                 value={profileData.psychiatristAvailability?.availableDate || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               />
// //               {errors.availableDate && <p className="text-red-500 text-xs mt-1">{errors.availableDate}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Slot 1 : 10.00 - 11.00 AM</label>
// //               <select
// //                 name="psychiatristAvailability.slot1"
// //                 value={profileData.psychiatristAvailability?.slot1 || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="0">0</option>
// //                 <option value="1">1</option>
// //               </select>
// //               {errors.slot1 && <p className="text-red-500 text-xs mt-1">{errors.slot1}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Slot 2 : 02.00 - 03.00 PM</label>
// //               <select
// //                 name="psychiatristAvailability.slot2"
// //                 value={profileData.psychiatristAvailability?.slot2 || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="0">0</option>
// //                 <option value="1">1</option>
// //               </select>
// //               {errors.slot2 && <p className="text-red-500 text-xs mt-1">{errors.slot2}</p>}
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700">Slot 3 : 07.00 - 08.00 PM</label>
// //               <select
// //                 name="psychiatristAvailability.slot3"
// //                 value={profileData.psychiatristAvailability?.slot3 || ''}
// //                 onChange={handleInputChange}
// //                 disabled={!editMode}
// //                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="0">0</option>
// //                 <option value="1">1</option>
// //               </select>
// //               {errors.slot3 && <p className="text-red-500 text-xs mt-1">{errors.slot3}</p>}
// //             </div>
// //             {successMessage && (
// //               <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
// //                 <p>{successMessage}</p>
// //               </div>
// //             )}
// //             {editMode && (
// //               <button
// //                 type="button"
// //                 onClick={handleUpdate}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150"
// //               >
// //                 Update
// //               </button>
// //             )}
// //           </form>
// //           {!editMode && (
// //             <button
// //               type="button"
// //               onClick={() => setEditMode(true)}
// //               className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-150"
// //             >
// //               Edit
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>,
// //     document.body
// //   );
// // };

// // export default Modal;


// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { AiOutlineClose } from 'react-icons/ai';
// import axios from 'axios';

// const Modal = ({ isOpen, onClose, profile, onUpdate }) => {
//   const [editMode, setEditMode] = useState(false);
//   const [profileData, setProfileData] = useState(profile);
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     setProfileData(profile);
//   }, [profile]);

//   if (!isOpen) return null;

//   const today = new Date().toISOString().split('T')[0];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith('psychiatristAvailability.')) {
//       const key = name.split('.')[1];
//       setProfileData(prevState => ({
//         ...prevState,
//         psychiatristAvailability: {
//           ...prevState.psychiatristAvailability,
//           [key]: value
//         }
//       }));
//     } else {
//       setProfileData(prevState => ({
//         ...prevState,
//         [name]: value
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     // Validation rules
//     if (!profileData.username) newErrors.username = 'Username is required';
//     if (!profileData.email) newErrors.email = 'Email is required';
//     if (!profileData.password) newErrors.password = 'Password is required';
//     if (!profileData.specialization) newErrors.specialization = 'Specialization is required';
//     if (!profileData.experienceYear) newErrors.experienceYear = 'Experience year is required';
//     if (!profileData.bio) newErrors.bio = 'Bio is required';
//     if (!profileData.education) newErrors.education = 'Education is required';
//     if (!profileData.fees) newErrors.fees = 'Fees are required';
//     if (!profileData.psychiatristAvailability?.availableDate) newErrors.availableDate = 'Availability date is required';
//     if (profileData.psychiatristAvailability?.slot1 === '') newErrors.slot1 = 'Slot 1 is required';
//     if (profileData.psychiatristAvailability?.slot2 === '') newErrors.slot2 = 'Slot 2 is required';
//     if (profileData.psychiatristAvailability?.slot3 === '') newErrors.slot3 = 'Slot 3 is required';

//     // Validate date
//     const selectedDate = profileData.psychiatristAvailability?.availableDate;
//     if (selectedDate && selectedDate < today) {
//       newErrors.availableDate = 'Availability date must be a future date';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleUpdate = () => {
//     if (!validateForm()) return; // Stop if validation fails

//     if (!profileData.psychiatristId) {
//       console.error("Invalid psychiatrist ID");
//       return;
//     }

//     axios.put(`http://localhost:1225/psychiatrist/psychiatrist/${profileData.psychiatristId}`, profileData)
//       .then(response => {
//         console.log("Update successful:", response.data);
//         onUpdate(response.data); // Update parent component with new data
//         setSuccessMessage("Record updated successfully."); // Set success message
//         setEditMode(false); // Exit edit mode
//         // You can also set a timer to clear the success message if desired
//         setTimeout(() => setSuccessMessage(''), 5000); // Clear success message after 5 seconds
//         // Optionally close the modal after showing the success message
//         // onClose();
//       })
//       .catch(err => {
//         console.error("Update failed:", err);
//         setSuccessMessage("Failed to update record.");
//       });
//   };

//   return ReactDOM.createPortal(
//     <div>
//       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-40">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold">{editMode ? 'Edit Profile' : 'Profile Details'}</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
//               <AiOutlineClose className="h-6 w-6" />
//             </button>
//           </div>
//           <form>
//             {/* Form Fields */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={profileData.username || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={profileData.email || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={profileData.password || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Specialization</label>
//               <input
//                 type="text"
//                 name="specialization"
//                 value={profileData.specialization || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.specialization && <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Experience Year</label>
//               <input
//                 type="text"
//                 name="experienceYear"
//                 value={profileData.experienceYear || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.experienceYear && <p className="text-red-500 text-xs mt-1">{errors.experienceYear}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Bio</label>
//               <textarea
//                 name="bio"
//                 value={profileData.bio || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Education</label>
//               <input
//                 type="text"
//                 name="education"
//                 value={profileData.education || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Fees</label>
//               <input
//                 type="text"
//                 name="fees"
//                 value={profileData.fees || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.fees && <p className="text-red-500 text-xs mt-1">{errors.fees}</p>}
//             </div>
//             {/* <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Availability Date</label>
//               <input
//                 type="date"
//                 name="psychiatristAvailability.availableDate"
//                 value={profileData.psychiatristAvailability?.availableDate || ''}
//                 onChange={handleInputChange}
//                 min={today} // Prevent selection of past dates
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.availableDate && <p className="text-red-500 text-xs mt-1">{errors.availableDate}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Slot 1 : 10.00 - 11.00 AM</label>
//               <select
//                 name="psychiatristAvailability.slot1"
//                 value={profileData.psychiatristAvailability?.slot1 || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               >
//                 <option value="">Select</option>
//                 <option value="0">0</option>
//                 <option value="1">1</option>
//               </select>
//               {errors.slot1 && <p className="text-red-500 text-xs mt-1">{errors.slot1}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Slot 2 : 02.00 - 03.00 PM</label>
//               <select
//                 name="psychiatristAvailability.slot2"
//                 value={profileData.psychiatristAvailability?.slot2 || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               >
//                 <option value="">Select</option>
//                 <option value="0">0</option>
//                 <option value="1">1</option>
//               </select>
//               {errors.slot2 && <p className="text-red-500 text-xs mt-1">{errors.slot2}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Slot 3 : 07.00 - 08.00 PM</label>
//               <select
//                 name="psychiatristAvailability.slot3"
//                 value={profileData.psychiatristAvailability?.slot3 || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               >
//                 <option value="">Select</option>
//                 <option value="0">0</option>
//                 <option value="1">1</option>
//               </select>
//               {errors.slot3 && <p className="text-red-500 text-xs mt-1">{errors.slot3}</p>}
//             </div> */}
//             {successMessage && (
//               <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
//                 <p>{successMessage}</p>
//               </div>
//             )}
//             {editMode && (
//               <button
//                 type="button"
//                 onClick={handleUpdate}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150"
//               >
//                 Update
//               </button>
//             )}
//           </form>
//           {!editMode && (
//             <button
//               type="button"
//               onClick={() => setEditMode(true)}
//               className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-150"
//             >
//               Edit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;


// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { AiOutlineClose } from 'react-icons/ai';
// import axios from 'axios';

// const Modal = ({ isOpen, onClose, profile, onUpdate }) => {
//   const [editMode, setEditMode] = useState(false);
//   const [profileData, setProfileData] = useState(profile);
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmNewPassword, setConfirmNewPassword] = useState('');
//   const [isOldPasswordVerified, setIsOldPasswordVerified] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     setProfileData(profile);
//     setOldPassword('');
//     setNewPassword('');
//     setConfirmNewPassword('');
//     setIsOldPasswordVerified(false);
//     setErrors({});
//     setSuccessMessage('');
//     setErrorMessage('');
//   }, [profile, isOpen]);

//   if (!isOpen) return null;

//   const today = new Date().toISOString().split('T')[0];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'oldPassword') {
//       setOldPassword(value);
//     } else if (name === 'newPassword') {
//       setNewPassword(value);
//     } else if (name === 'confirmNewPassword') {
//       setConfirmNewPassword(value);
//     } else if (name.startsWith('psychiatristAvailability.')) {
//       const key = name.split('.')[1];
//       setProfileData(prevState => ({
//         ...prevState,
//         psychiatristAvailability: {
//           ...prevState.psychiatristAvailability,
//           [key]: value
//         }
//       }));
//     } else {
//       setProfileData(prevState => ({
//         ...prevState,
//         [name]: value
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     // Validation rules
//     if (editMode) {
//       if (!profileData.username) newErrors.username = 'Username is required';
//       if (!profileData.email) newErrors.email = 'Email is required';
//       if (newPassword && newPassword !== confirmNewPassword) newErrors.confirmPassword = 'Passwords do not match';
//       if (profileData.password && oldPassword !== profileData.password) newErrors.oldPassword = 'Old password is incorrect';
//       if (!profileData.specialization) newErrors.specialization = 'Specialization is required';
//       if (!profileData.experienceYear) newErrors.experienceYear = 'Experience year is required';
//       if (!profileData.bio) newErrors.bio = 'Bio is required';
//       if (!profileData.education) newErrors.education = 'Education is required';
//       if (!profileData.fees) newErrors.fees = 'Fees are required';
//       if (!profileData.psychiatristAvailability?.availableDate) newErrors.availableDate = 'Availability date is required';
//       if (profileData.psychiatristAvailability?.slot1 === '') newErrors.slot1 = 'Slot 1 is required';
//       if (profileData.psychiatristAvailability?.slot2 === '') newErrors.slot2 = 'Slot 2 is required';
//       if (profileData.psychiatristAvailability?.slot3 === '') newErrors.slot3 = 'Slot 3 is required';

//       // Validate date
//       const selectedDate = profileData.psychiatristAvailability?.availableDate;
//       if (selectedDate && selectedDate < today) {
//         newErrors.availableDate = 'Availability date must be a future date';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleVerifyOldPassword = () => {
//     if (oldPassword === profileData.password) {
//       setIsOldPasswordVerified(true);
//       setErrorMessage('');
//     } else {
//       setIsOldPasswordVerified(false);
//       setErrorMessage('Old password is incorrect');
//     }
//   };

//   const handleUpdate = () => {
//     if (!validateForm()) return; // Stop if validation fails

//     if (newPassword && newPassword !== confirmNewPassword) {
//       setErrorMessage('New passwords do not match');
//       return;
//     }

//     if (!profileData.psychiatristId) {
//       console.error("Invalid psychiatrist ID");
//       return;
//     }

//     const updatedProfileData = {
//       ...profileData,
//       password: isOldPasswordVerified ? (newPassword || profileData.password) : profileData.password // Use new password if provided and verified
//     };

//     axios.put(`http://localhost:1225/psychiatrist/psychiatrist/${profileData.psychiatristId}`, updatedProfileData)
//       .then(response => {
//         console.log("Update successful:", response.data);
//         onUpdate(response.data); // Update parent component with new data
//         setSuccessMessage("Profile updated successfully."); // Set success message
//         setEditMode(false); // Exit edit mode
//         setTimeout(() => setSuccessMessage(''), 5000); // Clear success message after 5 seconds
//       })
//       .catch(err => {
//         console.error("Update failed:", err);
//         setErrorMessage("Failed to update profile.");
//       });
//   };

//   return ReactDOM.createPortal(
//     <div>
//       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-40">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold">{editMode ? 'Edit Profile' : 'Profile Details'}</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
//               <AiOutlineClose className="h-6 w-6" />
//             </button>
//           </div>
//           <form>
//             {/* Form Fields */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={profileData.username || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={profileData.email || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Current Password</label>
//               <input
//                 type="password"
//                 name="currentPassword"
//                 value={profileData.password || ''}
//                 disabled={true}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//             </div>
//             {editMode && (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">Old Password</label>
//                   <input
//                     type="password"
//                     name="oldPassword"
//                     value={oldPassword}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//                   />
//                   <button
//                     type="button"
//                     onClick={handleVerifyOldPassword}
//                     className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//                   >
//                     Verify Old Password
//                   </button>
//                   {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
//                 </div>
//                 {isOldPasswordVerified && (
//                   <>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700">New Password</label>
//                       <input
//                         type="password"
//                         name="newPassword"
//                         value={newPassword}
//                         onChange={handleInputChange}
//                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//                       />
//                       {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>}
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
//                       <input
//                         type="password"
//                         name="confirmNewPassword"
//                         value={confirmNewPassword}
//                         onChange={handleInputChange}
//                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//                       />
//                       {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Specialization</label>
//               <input
//                 type="text"
//                 name="specialization"
//                 value={profileData.specialization || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.specialization && <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>}
//             </div>
//             {/* Additional Fields */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Experience Year</label>
//               <input
//                 type="number"
//                 name="experienceYear"
//                 value={profileData.experienceYear || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.experienceYear && <p className="text-red-500 text-xs mt-1">{errors.experienceYear}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Bio</label>
//               <textarea
//                 name="bio"
//                 value={profileData.bio || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Education</label>
//               <input
//                 type="text"
//                 name="education"
//                 value={profileData.education || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Fees</label>
//               <input
//                 type="text"
//                 name="fees"
//                 value={profileData.fees || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.fees && <p className="text-red-500 text-xs mt-1">{errors.fees}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Availability Date</label>
//               <input
//                 type="date"
//                 name="psychiatristAvailability.availableDate"
//                 value={profileData.psychiatristAvailability?.availableDate || ''}
//                 onChange={handleInputChange}
//                 min={today}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.availableDate && <p className="text-red-500 text-xs mt-1">{errors.availableDate}</p>}
//             </div>
//             {/* Availability slots */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Slot 1</label>
//               <input
//                 type="text"
//                 name="psychiatristAvailability.slot1"
//                 value={profileData.psychiatristAvailability?.slot1 || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.slot1 && <p className="text-red-500 text-xs mt-1">{errors.slot1}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Slot 2</label>
//               <input
//                 type="text"
//                 name="psychiatristAvailability.slot2"
//                 value={profileData.psychiatristAvailability?.slot2 || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.slot2 && <p className="text-red-500 text-xs mt-1">{errors.slot2}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Slot 3</label>
//               <input
//                 type="text"
//                 name="psychiatristAvailability.slot3"
//                 value={profileData.psychiatristAvailability?.slot3 || ''}
//                 onChange={handleInputChange}
//                 disabled={!editMode}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
//               />
//               {errors.slot3 && <p className="text-red-500 text-xs mt-1">{errors.slot3}</p>}
//             </div>
//             {successMessage && (
//               <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
//                 <p>{successMessage}</p>
//               </div>
//             )}
//             {errorMessage && (
//               <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
//                 <p>{errorMessage}</p>
//               </div>
//             )}
//             {editMode ? (
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={handleUpdate}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                 >
//                   Update
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setEditMode(false)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => setEditMode(true)}
//                 className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//               >
//                 Edit
//               </button>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

const Modal = ({ isOpen, onClose, profile, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(profile);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isOldPasswordVerified, setIsOldPasswordVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setProfileData(profile);
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setIsOldPasswordVerified(false);
    setErrors({});
    setSuccessMessage('');
    setErrorMessage('');
  }, [profile, isOpen]);

  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmNewPassword') {
      setConfirmNewPassword(value);
    } else {
      setProfileData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (editMode) {
      if (!profileData.username) newErrors.username = 'Username is required';
      if (!profileData.email) newErrors.email = 'Email is required';
      if (newPassword && newPassword !== confirmNewPassword) newErrors.confirmPassword = 'Passwords do not match';
      if (profileData.password && oldPassword !== profileData.password) newErrors.oldPassword = 'Old password is incorrect';
      if (!profileData.specialization) newErrors.specialization = 'Specialization is required';
      if (!profileData.experienceYear) newErrors.experienceYear = 'Experience year is required';
      if (!profileData.bio) newErrors.bio = 'Bio is required';
      if (!profileData.education) newErrors.education = 'Education is required';
      if (!profileData.fees) newErrors.fees = 'Fees are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerifyOldPassword = () => {
    if (oldPassword === profileData.password) {
      setIsOldPasswordVerified(true);
      setErrorMessage('');
    } else {
      setIsOldPasswordVerified(false);
      setErrorMessage('Old password is incorrect');
    }
  };

  const handleUpdate = () => {
    if (!validateForm()) return; // Stop if validation fails

    if (newPassword && newPassword !== confirmNewPassword) {
      setErrorMessage('New passwords do not match');
      return;
    }

    if (!profileData.psychiatristId) {
      console.error("Invalid psychiatrist ID");
      return;
    }

    const updatedProfileData = {
      ...profileData,
      password: isOldPasswordVerified ? (newPassword || profileData.password) : profileData.password // Use new password if provided and verified
    };

    axios.put(`http://localhost:1225/psychiatrist/psychiatrist/${profileData.psychiatristId}`, updatedProfileData)
      .then(response => {
        console.log("Update successful:", response.data);
        onUpdate(response.data); // Update parent component with new data
        setSuccessMessage("Profile updated successfully."); // Set success message
        setEditMode(false); // Exit edit mode
        setTimeout(() => setSuccessMessage(''), 5000); // Clear success message after 5 seconds
      })
      .catch(err => {
        console.error("Update failed:", err);
        setErrorMessage("Failed to update profile.");
      });
  };

  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-40">
        <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">{editMode ? 'Edit Profile' : 'Profile Details'}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <AiOutlineClose className="h-6 w-6" />
            </button>
          </div>
          <form>
            {/* Form Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={profileData.username || ''}
                onChange={handleInputChange}
                disabled={!editMode}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email || ''}
                onChange={handleInputChange}
                disabled={!editMode}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={profileData.password || ''}
                disabled={true}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
              />
            </div>
            {editMode && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Old Password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOldPassword}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Verify Old Password
                  </button>
                  {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
                </div>
                {isOldPasswordVerified && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">New Password</label>
                      <input
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
                      />
                      {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                      <input
                        type="password"
                        name="confirmNewPassword"
                        value={confirmNewPassword}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
                      />
                      {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>
                  </>
                )}
              </>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={profileData.specialization || ''}
                onChange={handleInputChange}
                disabled={!editMode}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
              />
              {errors.specialization && <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Experience Year</label>
              <input
                type="number"
                name="experienceYear"
                value={profileData.experienceYear || ''}
                onChange={handleInputChange}
                disabled={!editMode}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
              />
              {errors.experienceYear && <p className="text-red-500 text-xs mt-1">{errors.experienceYear}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={profileData.bio || ''}
                onChange={handleInputChange}
                disabled={!editMode}
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
              />
              {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Education</label>
              <input
                type="text"
                name="education"
                value={profileData.education || ''}
                onChange={handleInputChange}
                disabled={!editMode}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
              />
              {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Fees</label>
              <input
                type="number"
                name="fees"
                value={profileData.fees || ''}
                onChange={handleInputChange}
                disabled={!editMode}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm px-3 py-2"
              />
              {errors.fees && <p className="text-red-500 text-xs mt-1">{errors.fees}</p>}
            </div>

            {successMessage && <p className="text-green-500 text-xs mt-1">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
            
            <div className="flex justify-end gap-4 mt-4">
              {editMode ? (
                <>
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditMode(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
