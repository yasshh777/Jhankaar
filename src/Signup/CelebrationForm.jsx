



// export default CelebrationForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const CelebrationForm = () => {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     class: '',
//     mobileno: '',
//     event: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  
//   const handleSubmit = (e) => {
//   e.preventDefault();

//   // ✅ Show alert immediately
//   alert(`Thanks For Joining, ${formData.name}! 🎉`);

//   // ✅ Send data in the background
//   axios.post(
//     `${import.meta.env.VITE_API_BASE_URL}/api/participant/register`,
//     formData
//   )
//   .then(() => {
//     console.log("Data successfully sent to backend");
//   })
//   .catch((error) => {
//     console.error("Error:", error.response?.data || error.message);
//     alert("⚠️ Something went wrong. Please try again.");
//   });

//   // ✅ Optionally reset form instantly
//   setFormData({
//     name: '',
//     email: '',
//     class: '',
//     mobileno: '',
//     event: '',
//   });
// };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-#0D0B1F px-4">
//       <div className="w-full max-w-2xl bg-gradient-to-br animate-fadeInUp from-[#2c003e] via-[#3b0a58] to-[#1a1a1a] rounded-xl shadow-lg p-8 md:p-10 transition-all duration-700 ease-in-out transform opacity-0 translate-y-6 animate-fade-in">
//         <h2 className="text-3xl md:text-4xl font-baskerville text-center mb-8 bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent animate-gradient p-3">
//           Join The Celebration
//         </h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
//           <div className="col-span-1">
//             <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Full Name"
//               className="w-full p-2 border border-gray-400 rounded"
//               onChange={handleChange}
//               value={formData.name}
//               required
//             />
//           </div>

//           <div className="col-span-1">
//             <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
//               Email Id
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               placeholder="Your Email"
//               className="w-full p-2 border border-gray-400 rounded"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-baskerville text-sm text-white bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
//               Class
//             </label>
//             <select
//               name="class"
//               value={formData.class}
//               className="w-full p-2 rounded border border-gray-400"
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>
//                 Select Your Class
//               </option>
//               <option value="FYBSC(CS-A)">FYBSC(CS-A)</option>
//               <option value="FYBSC(CS-B)">FYBSC(CS-B)</option>
//               <option value="FYBSC(CS-C)">FYBSC(CS-C)</option>
//               <option value="SYBSC(CS-A)">SYBSC(CS-A)</option>
//               <option value="SYBSC(CS-B)">SYBSC(CS-B)</option>
//               <option value="SYBSC(CS-C)">SYBSC(CS-C)</option>
//               <option value="TYBSC(CS-A)">TYBSC(CS-A)</option>
//               <option value="TYBSC(CS-B)">TYBSC(CS-B)</option>
//               <option value="TYBSC(CS-C)">TYBSC(CS-C)</option>
//               <option value="FYBCA-A">FYBCA-A</option>
//               <option value="FYBCA-B">FYBCA-B</option>
//               <option value="FYBCA-C">FYBCA-C</option>
//               <option value="SYBCA-A">SYBCA-A</option>
//               <option value="SYBCA-B">SYBCA-B</option>
//               <option value="SYBCA-C">SYBCA-C</option>
//               <option value="TYBCA-A">TYBCA-A</option>
//               <option value="TYBCA-B">TYBCA-B</option>
//               <option value="TYBCA-C">TYBCA-C</option>
//               <option value="FYBSC(BT-A)">FYBSC(BT-A)</option>
//               <option value="FYBSC(BT-B)">FYBSC(BT-B)</option>
//               <option value="FYBSC(BT-C)">FYBSC(BT-C)</option>
//               <option value="SYBSC(BT-A)">SYBSC(BT-A)</option>
//               <option value="SYBSC(BT-B)">SYBSC(BT-B)</option>
//               <option value="SYBSC(BT-C)">SYBSC(BT-C)</option>
//               <option value="TYBSC(BT-A)">TYBSC(BT-A)</option>
//               <option value="TYBSC(BT-B)">TYBSC(BT-B)</option>
//               <option value="TYBSC(BT-C)">TYBSC(BT-C)</option>
//               <option value="FYBSC(BI-A)">FYBSC(BI-A)</option>
//               <option value="FYBSC(BI-B)">FYBSC(BI-B)</option>
//               <option value="FYBSC(BI-C)">FYBSC(BI-C)</option>
//               <option value="SYBSC(BI-A)">SYBSC(BI-A)</option>
//               <option value="SYBSC(BI-B)">SYBSC(BI-B)</option>
//               <option value="SYBSC(BI-C)">SYBSC(BI-C)</option>
//               <option value="TYBSC(BI-A)">TYBSC(BI-A)</option>
//               <option value="TYBSC(BI-B)">TYBSC(BI-B)</option>
//               <option value="TYBSC(BI-C)">TYBSC(BI-C)</option>
//             </select>
//           </div>

//           <div className="col-span-1">
//             <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               name="mobileno"
//               placeholder="Mobileno"
//               className="w-full p-2 border border-gray-400 rounded"
//               onChange={handleChange}
//               value={formData.mobileno}
//               required
//             />
//           </div>

//           <div className="col-span-1 sm:col-span-2">
//             <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
//               Event
//             </label>
//             <select
//               name="event"
//               className="w-full p-2 border border-gray-400 rounded"
//               onChange={handleChange}
//               value={formData.event}
//               required
//             >
//               <option value="" disabled>
//                 Choose Event Participation
//               </option>
//               <option value="Dance">Dance</option>
//               <option value="Singing">Singing</option>
//               <option value="Drama">Drama</option>
//               <option value="Fashion show">Fashion show</option>
//               <option value="Mr&Mrs Jhankaar">Mr&Mrs Jhankaar</option>
//             </select>
//           </div>

//           <div className="col-span-1 md:col-span-2">
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-500 font-playfai hover:animate-bounce"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CelebrationForm;


import React, { useState } from 'react';
import axios from 'axios';
import { validStudents } from '../data/students'; // Import the list we created

const CelebrationForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    studentId: '', // Added studentId to state
    email: '',
    class: '',
    mobileno: '',
    event: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation Logic
    const expectedName = validStudents[formData.studentId];
    
    if (!expectedName) {
      alert("❌ Invalid Student ID. Please check and try again.");
      return;
    }

    if (expectedName.trim().toUpperCase() !== formData.name.trim().toUpperCase()) {
      alert(`❌ The name entered does not match our records for ID ${formData.studentId}.`);
      return;
    }

    // ✅ Show alert immediately if validation passes
    alert(`Thanks For Joining, ${formData.name}! 🎉`);

    // ✅ Send data in the background
    axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/participant/register`,
      formData
    )
    .then(() => {
      console.log("Data successfully sent to backend");
    })
    .catch((error) => {
      console.error("Error:", error.response?.data || error.message);
      alert("⚠️ Something went wrong. Please try again.");
    });

    // ✅ Reset form
    setFormData({
      name: '',
      studentId: '', // Reset studentId
      email: '',
      class: '',
      mobileno: '',
      event: '',
    });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-#0D0B1F px-4">
      <div className="w-full max-w-2xl bg-gradient-to-br animate-fadeInUp from-[#2c003e] via-[#3b0a58] to-[#1a1a1a] rounded-xl shadow-lg p-8 md:p-10 transition-all duration-700 ease-in-out transform opacity-0 translate-y-6 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-baskerville text-center mb-8 bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent animate-gradient p-3">
          Join The Celebration
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          
          {/* New Student ID Field */}
          <div className="col-span-1">
            <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
              Student ID
            </label>
            <input
              type="text"
              name="studentId"
              placeholder="Enter Your ID"
              className="w-full p-2 border border-gray-400 rounded"
              onChange={handleChange}
              value={formData.studentId}
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              className="w-full p-2 border border-gray-400 rounded"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
              Email Id
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-400 rounded"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-baskerville text-sm text-white bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
              Class
            </label>
            <select
              name="class"
              value={formData.class}
              className="w-full p-2 rounded border border-gray-400"
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Your Class
              </option>
              <option value="FYBSC(CS-A)">FYBSC(CS-A)</option>
              <option value="FYBSC(CS-B)">FYBSC(CS-B)</option>
              <option value="FYBSC(CS-C)">FYBSC(CS-C)</option>
              <option value="SYBSC(CS-A)">SYBSC(CS-A)</option>
              <option value="SYBSC(CS-B)">SYBSC(CS-B)</option>
              <option value="SYBSC(CS-C)">SYBSC(CS-C)</option>
              <option value="TYBSC(CS-A)">TYBSC(CS-A)</option>
              <option value="TYBSC(CS-B)">TYBSC(CS-B)</option>
              <option value="TYBSC(CS-C)">TYBSC(CS-C)</option>
              <option value="FYBCA-A">FYBCA-A</option>
              <option value="FYBCA-B">FYBCA-B</option>
              <option value="FYBCA-C">FYBCA-C</option>
              <option value="SYBCA-A">SYBCA-A</option>
              <option value="SYBCA-B">SYBCA-B</option>
              <option value="SYBCA-C">SYBCA-C</option>
              <option value="TYBCA-A">TYBCA-A</option>
              <option value="TYBCA-B">TYBCA-B</option>
              <option value="TYBCA-C">TYBCA-C</option>
              <option value="FYBSC(BT-A)">FYBSC(BT-A)</option>
              <option value="FYBSC(BT-B)">FYBSC(BT-B)</option>
              <option value="FYBSC(BT-C)">FYBSC(BT-C)</option>
              <option value="SYBSC(BT-A)">SYBSC(BT-A)</option>
              <option value="SYBSC(BT-B)">SYBSC(BT-B)</option>
              <option value="SYBSC(BT-C)">SYBSC(BT-C)</option>
              <option value="TYBSC(BT-A)">TYBSC(BT-A)</option>
              <option value="TYBSC(BT-B)">TYBSC(BT-B)</option>
              <option value="TYBSC(BT-C)">TYBSC(BT-C)</option>
              <option value="FYBSC(BI-A)">FYBSC(BI-A)</option>
              <option value="FYBSC(BI-B)">FYBSC(BI-B)</option>
              <option value="FYBSC(BI-C)">FYBSC(BI-C)</option>
              <option value="SYBSC(BI-A)">SYBSC(BI-A)</option>
              <option value="SYBSC(BI-B)">SYBSC(BI-B)</option>
              <option value="SYBSC(BI-C)">SYBSC(BI-C)</option>
              <option value="TYBSC(BI-A)">TYBSC(BI-A)</option>
              <option value="TYBSC(BI-B)">TYBSC(BI-B)</option>
              <option value="TYBSC(BI-C)">TYBSC(BI-C)</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileno"
              placeholder="Mobileno"
              className="w-full p-2 border border-gray-400 rounded"
              onChange={handleChange}
              value={formData.mobileno}
              required
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
              Event
            </label>
            <select
              name="event"
              className="w-full p-2 border border-gray-400 rounded"
              onChange={handleChange}
              value={formData.event}
              required
            >
              <option value="" disabled>
                Choose Event Participation
              </option>
              <option value="Dance">Dance</option>
              <option value="Singing">Singing</option>
              <option value="Drama">Drama</option>
              <option value="Fashion show">Fashion show</option>
              <option value="Mr&Mrs Jhankaar">Mr&Mrs Jhankaar</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-500 font-playfai hover:animate-bounce"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CelebrationForm;