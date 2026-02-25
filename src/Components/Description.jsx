


import { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { FaMusic, FaBrain, FaUsers, FaTrophy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Description() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   AOS.init({ duration: 1200 });
  // }, []);

  const pillars = [
    {
      icon: <FaMusic size={40} className="text-pink-500" />,
      title: "Culture",
      desc: "Celebrating our roots through vibrant performances and traditional showcases."
    },
    {
      icon: <FaBrain size={40} className="text-blue-500" />,
      title: "Creativity",
      desc: "Where imagination takes center stage — from art to innovation."
    },
    {
      icon: <FaUsers size={40} className="text-green-500" />,
      title: "Community",
      desc: "Unifying students, mentors, and talents under one unforgettable fest."
    },
    {
      icon: <FaTrophy size={40} className="text-yellow-500" />,
      title: "Competition",
      desc: "A battleground of talent, passion, and artistic excellence."
    }
  ];

  return (
    <section className="w-full py-10 text-white" id="about">
     <div className="w-full flex justify-center items-center py-10">
  <Link to="/announcements" className="w-full max-w-md">
    <button
      className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-500 font-playfai hover:animate-bounce shadow-lg"
    >
      View Audition Schedule & Results
    </button>
  </Link>
</div>
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-4xl text-center mb-4 text-heading font-baskerville 
          bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] 
          bg-clip-text text-transparent animate-gradient duration-1000 p-3"
          data-aos="fade-down"
        >
          "MGM Jhankaar: Echoes of Passion, Beats of Culture"
        </h2>
        <p
          className="text-center text-lg text-text mb-8 font-playfair"
          data-aos="fade-up"
        >
          Step into MGM’s most iconic celebration — a fusion of raw talent, artistic chaos, and non-stop energy. This isn’t just a fest, it’s a cultural storm waiting to blow your mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#2c003e] via-[#3b0a58] to-[#1a1a1a]
              rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform  hover:shadow-pink-500/30 font-lora"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="flex justify-center mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-gray-400 text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col gap-3 w-fit mx-auto" data-aos="fade-up">
          <button
            onClick={() => navigate("/celebration")}
            className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform  font-playfair"
          >
            Join the Celebration
          </button>
        </div>

        <div className="mt-12 text-center flex flex-col gap-3 w-fit mx-auto" data-aos="fade-up">
          <button 
          onClick={() => navigate("/adminlogin")}
          className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform font-playfair">Admin Login</button>
        </div>
      </div>
    </section>
  );
}
