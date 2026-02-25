import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Announcements = () => {
  const [participants, setParticipants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all participants from the backend
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/participant/all`)
      .then((res) => {
        setParticipants(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching announcements:", err);
        setLoading(false);
      });
  }, []);

  // Filter list based on Name or Student ID
  const filteredParticipants = participants.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.studentId.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#0D0B1F] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-baskerville text-center mb-8 bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent p-2">
          Jhankaar Audition Schedule
        </h1>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Search by Name or Student ID..." 
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:border-pink-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <p className="text-center text-white">Loading schedule...</p>
        ) : (
          <div className="overflow-x-auto bg-[#1a1a1a] rounded-xl shadow-2xl border border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800 text-[#f7b267]">
                  <th className="p-4 border-b border-gray-700">Student Name</th>
                  <th className="p-4 border-b border-gray-700">Event</th>
                  <th className="p-4 border-b border-gray-700">Status</th>
                  <th className="p-4 border-b border-gray-700">Audition Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {filteredParticipants.length > 0 ? (
                  filteredParticipants.map((p) => (
                    <tr key={p._id} className="hover:bg-gray-800 transition-colors">
                      <td className="p-4 border-b border-gray-800">{p.name}</td>
                      <td className="p-4 border-b border-gray-800">{p.event}</td>
                      <td className="p-4 border-b border-gray-800">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          p.status === 'Approved' ? 'bg-green-900 text-green-300' : 
                          p.status === 'Rejected' ? 'bg-red-900 text-red-300' : 
                          'bg-yellow-900 text-yellow-300'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="p-4 border-b border-gray-800 text-sm italic">
                        {p.auditionDetails}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-gray-500">No registrations found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;