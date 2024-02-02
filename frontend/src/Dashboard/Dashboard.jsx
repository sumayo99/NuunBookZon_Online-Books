import React from 'react';
import './dasboard.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import leoImage from '../pages/Home/Sources/image1/leo.png';
import loImage from '../pages/Home/Sources/image1/lo.png';
import image4 from '../pages/Home/Sources/image1/image4.jpeg'; // Replace 'path_to_your_image' with the actual path

const Dashboard = () => {
  const [suc, setSuc] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:5000/user/admin/dashboard')
      .then(res => {
        console.log("dashboard: " + res.data);
        if (res.data === "Success") {
          setSuc("Successded OK");
        } else {
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <header className="py-16">
      <div className="container px-4 mx-auto xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center p-2 pr-6 bg-white shadow-md shadow-black/5 border border-slate-200 space-x-4 rounded-full mb-6">
              <img src={loImage} alt="" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
              <div className="text-xl font-semibold" style={{ color: '#363D45' }}>Online-Book Reading</div>
            </div>
            {/* <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-tight" style={{ color: '#363D45', fontSize: '3rem' }}>Nuunbookzon</h1> */}
          </div>
          
        </div>
        <div>
            <img src={image4} alt="Image 4" className="w-140 h-100" />
          </div>
      </div>
    </header>
  );
}

export default Dashboard;
