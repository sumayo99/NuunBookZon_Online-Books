import React from 'react';
import './dist/css/style.css';
import './dist/css/input.css';
import './dist/js/script.js'
import imageW2 from './dist/images/W2.jpeg';
const Rev = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto xl:max-w-7xl">
        <h3 className="text-[15px] font-semibold text-indigo-500 mb-3 flex items-center after:h-0 after:w-16 after:border-t after:border-t-indigo-500 after:ml-4">Our Writers</h3>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug md:leading-snug mb-3 max-w-xl" style={{ color: '#363D45' }}>Qoraaga Ugu Saamaynta Badnaa ee Bishaan.</h2>
        <div className="flex items-center md:space-x-12 mt-12 flex-col md:flex-row space-y-12 md:space-y-0">
          <div className="w-full md:w-72 h-72 flex-shrink-0">
            <img src={imageW2} alt="" className="testimonial-item-image active w-full h-full object-cover" />
            <img src="https://source.unsplash.com/random/500x500/?user" alt="" className="testimonial-item-image hidden w-full h-full object-cover" />
            <img src="https://source.unsplash.com/random/500x500/?user" alt="" className="testimonial-item-image hidden w-full h-full object-cover" />
          </div>
          <div className="w-full">
            <div className="testimonial-item-content active">
              <img src="dist/images/doublequote.svg" alt="" className="mb-4" />
              <h1 className="text-xl font-medium leading-normal" style={{ color: '#363D45' ,  fontSize: '3rem' }}>Oraahda Laga Soo Maanguuriyay " Matic Wastamtic ".</h1>
              <div className="mt-6">
                <div className="font-bold mt-1">Cabdiqani Cumar Cali</div>
                <div className="text-sm">Qoraa</div>
              </div>
            </div>
            <div className="testimonial-item-content hidden">
              <img src="dist/images/doublequote.svg" alt="" className="mb-4" />
              <h1 className="text-xl font-medium leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquid vitae, quos at totam omnis?</h1>
              <div className="mt-6">
                <div className="font-bold mt-1">John Johnson</div>
                <div className="text-sm">CEO, XYZ Company</div>
              </div>
            </div>
            <div className="testimonial-item-content hidden">
              <img src="dist/images/doublequote.svg" alt="" className="mb-4" />
              <p className="text-xl font-medium leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, tempora et! Distinctio eum officia dolore quo repellendus temporibus dolorum at?</p>
              <div className="mt-6">
                <div className="font-bold mt-1">John Johnson</div>
                <div className="text-sm">CEO, XYZ Company</div>
              </div>
            </div>
            <div className="testimonial-toggle-wrapper mt-8 flex items-center space-x-2">
              {/* You can add any additional content or components for testimonial toggles here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rev;
