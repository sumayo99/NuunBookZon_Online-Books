// Import React
import React from 'react';
import './dist/css/style.css';
import './dist/css/input.css';
import cssImage from './dist/images/css.png';
import djangoLogo from './dist/images/django.png';
import figmaLogo from './dist/images/figma.png';
import htmlLogo from './dist/images/html.png';
import nodejsLogo from './dist/images/nodejs.png';
import pythonLogo from './dist/images/python.png';
import tailwindLogo from './dist/images/tailwindcss.png';
import godotLogo from './dist/images/godot.png';

// Create a functional component
const Section = () => {
  return (
    // start: Skills
    <section className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto xl:max-w-7xl">
        <h3 className="text-[15px] font-semibold text-indigo-500 mb-3 flex items-center after:h-0 after:w-16 after:border-t after:border-t-indigo-500 after:ml-4" >
          Our Categories
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug md:leading-snug mb-3 max-w-xl" style={{ color: '#363D45' }}>
         pagekaan waxa aad ka heli doontaa nuucya kala duwan oo ah buugaag ku xiiso gali doona.
        </h2>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
          {/* Skill Item 1 */}
          <div className="group relative pt-10">
            <img
              src={figmaLogo}
              alt=""
              className="skill-item-image w-20 block absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
            <div className="font-semibold text-center pt-12 pb-6 px-4 bg-white shadow-md rounded-md relative z-10" style={{ color: '#363D45' }}>
              Action
            </div>
          </div>
          {/* Skill Item 2 */}
          <div className="group relative pt-10">
            <img
              src={htmlLogo}
              alt=""
              className="skill-item-image w-20 block absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
            <div className="font-semibold text-center pt-12 pb-6 px-4 bg-white shadow-md rounded-md relative z-10" style={{ color: '#363D45' }}>
              Money
            </div>
          </div>
          {/* Skill Item 3 */}
          <div className="group relative pt-10">
          <img
        src={cssImage}
        alt=""
        className="skill-item-image w-20 block absolute top-0 left-1/2 -translate-x-1/2 z-0"
      />
            <div className="font-semibold text-center pt-12 pb-6 px-4 bg-white shadow-md rounded-md relative z-10" style={{ color: '#363D45' }}>
              Drama
            </div>
          </div>
          {/* Skill Item 4 */}
          <div className="group relative pt-10">
            <img
              src={nodejsLogo}
              alt=""
              className="skill-item-image w-20 block absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
            <div className="font-semibold text-center pt-12 pb-6 px-4 bg-white shadow-md rounded-md relative z-10" style={{ color: '#363D45' }}>
              Educational
            </div>
          </div>
          {/* Skill Item 6 */}
         
          {/* Skill Item 7 */}
          <div className="group relative pt-10">
            <img
              src={tailwindLogo}
              alt=""
              className="skill-item-image w-20 block absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
            <div className="font-semibold text-center pt-12 pb-6 px-4 bg-white shadow-md rounded-md relative z-10" style={{ color: '#363D45' }}>
              Technologies
            </div>
          </div>
          {/* Skill Item 8 */}
          <div className="group relative pt-10">
            <img
              src={pythonLogo}
              alt=""
              className="skill-item-image w-20 block absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
            <div className="font-semibold text-center pt-12 pb-6 px-4 bg-white shadow-md rounded-md relative z-10" style={{ color: '#363D45' }}>
              Geographic
            </div>
          </div>
          {/* Skill Item 9 */}
          <div className="group relative pt-10">
            <img
              src={djangoLogo}
              alt=""
              className="skill-item-image w-20 block absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
            <div className="font-semibold text-center pt-12 pb-6 px-4 bg-white shadow-md rounded-md relative z-10" style={{ color: '#363D45' }}>
              War
            </div>
          </div>
          {/* Skill Item 10 */}
          <div className="group relative pt-10">
            <img
              src={godotLogo}
              alt=""
              className="skill-item-image w-20 block absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
            <div className="font-semibold text-center pt-12 pb-6 px-4 bg-white shadow-md rounded-md relative z-10" style={{ color: '#363D45' }}>
              Science
            </div>
          </div>
        </div>
      </div>
    </section>
    // end: Skills
  );
};

// Export the component
export default Section ;
