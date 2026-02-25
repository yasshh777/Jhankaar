

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [participants, setParticipants] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // To track which card is clicked

  const events = ["Dance", "Singing", "Drama", "Fashion show", "Mr&Mrs Jhankaar"];

  // 1. Hardcoded Login Check
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email === "admin@jhankaar.com" && loginData.password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Admin Credentials!");
    }
  };

  // 2. Fetch Data when logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/participant/all`);
      setParticipants(res.data);
    } catch (err) {
      console.error("Error fetching data");
    }
  };

  // 3. Update Status & Audition Logic
  const handleStatusUpdate = async (id, newStatus) => {
    const auditionTime = prompt("Enter Audition Date & Time (e.g., March 10, 2:00 PM):", "TBA");
    if (auditionTime === null) return;

    try {
      await axios.patch(`${import.meta.env.VITE_API_BASE_URL}/api/participant/update-status/${id}`, {
        status: newStatus,
        auditionDetails: auditionTime
      });
      alert(`Student ${newStatus} successfully!`);
      fetchData(); // Refresh list
    } catch (err) {
      alert("Failed to update.");
    }
  };

  // --- LOGIN UI ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D0B1F] px-4">
        <div className="w-full max-w-md bg-gradient-to-br from-[#2c003e] via-[#3b0a58] to-[#1a1a1a] rounded-xl p-8 shadow-2xl border border-gray-800">
          <h2 className="text-3xl font-baskerville text-center mb-8 bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Admin Email"
              className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:border-yellow-500 outline-none"
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:border-yellow-500 outline-none"
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
            />
            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold py-3 rounded-full hover:scale-105 transition shadow-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD UI ---
  return (
    <div className="min-h-screen bg-[#0D0B1F] p-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center mb-10">
          <h2 className="text-3xl font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
            Jhankaar Admin Panel
          </h2>
          <button onClick={() => setIsLoggedIn(false)} className=" absolute right-2  text-sm text-gray-400 hover:text-white underline">Logout</button>
        </div>

        {/* Event Cards Section */}
        {!selectedEvent ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div 
                key={event}
                onClick={() => setSelectedEvent(event)}
                className="cursor-pointer p-8 bg-gradient-to-br from-[#2c003e] to-[#1a1a1a] border border-gray-800 rounded-2xl hover:border-yellow-500 transition-all text-center group"
              >
                <h3 className="text-2xl font-semibold group-hover:text-yellow-500 transition">{event}</h3>
                <p className="text-gray-400 mt-2">
                  {participants.filter(p => p.event === event).length} Registrations
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* Detailed Systematic Table View */
          <div className="animate-fadeIn">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="mb-4 text-yellow-500 hover:underline flex items-center gap-2"
            >
              ← Back to Event Cards
            </button>
            
            <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-4 bg-gray-800 flex justify-between items-center">
                <h3 className="text-xl font-bold text-yellow-500">{selectedEvent} Participants</h3>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-gray-400 text-sm border-b border-gray-800">
                    <th className="p-4">Student Info</th>
                    <th className="p-4">Mobile Number</th> {/* Requested Field */}
                    <th className="p-4">Status</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.filter(p => p.event === selectedEvent).map((p) => (
                    <tr key={p._id} className="border-b border-gray-800 hover:bg-gray-900 transition">
                      <td className="p-4">
                        <div className="font-bold">{p.name}</div>
                        <div className="text-xs text-gray-500">ID: {p.studentId}</div>
                      </td>
                      <td className="p-4 text-yellow-500 font-mono">{p.mobileno}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                          p.status === 'Approved' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="p-4 flex justify-center gap-3">
                        <button 
                          onClick={() => handleStatusUpdate(p._id, 'Approved')}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full text-xs transition"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => handleStatusUpdate(p._id, 'Rejected')}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full text-xs transition"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                  {participants.filter(p => p.event === selectedEvent).length === 0 && (
                    <tr>
                      <td colSpan="4" className="p-10 text-center text-gray-500">No participants registered for this event yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;