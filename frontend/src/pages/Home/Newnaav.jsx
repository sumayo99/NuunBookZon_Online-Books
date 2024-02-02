import { Link } from 'react-router-dom';
import './dist/css/style.css';
import './dist/css/input.css';
import About from '../about/About';
import Shop from '../Shop/Shop';
import Blog from '../blog/Blog';
// import login from '../Login'
import leoImage from './Sources/image1/leo.png';

function Newnaav() {
  return (
    <body className="text-slate-800 font-montserrat">
      {/* start: Navbar */}
      <nav className="navbar py-2">
        <div className="container px-4 mx-auto xl:max-w-7xl">
          <div className="flex items-center">
            <Link to="/" className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl flex-shrink-0">
            <img src={leoImage} alt="" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
            </Link>
            <div className="navbar-menu fixed sm:static w-full h-full sm:h-auto sm:ml-16 bg-white top-0 left-0 pb-16 sm:pb-0">
              <div className="h-full p-4 sm:p-0 overflow-y-auto sm:overflow-y-visible">
                <ul className="flex sm:items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
                <li>
                    <Link to="/home" className="hover:text-indigo-500 transition-colors font-medium text-[15px]">Home</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="../home/about/" className="hover:text-indigo-500 transition-colors font-medium text-[15px]">About</Link>
                  </li>
                  <li>
                    <Link to="../home/shop/" className="hover:text-indigo-500 transition-colors font-medium text-[15px]">Bookshelf</Link>
                  </li>
                  <li>
                    <Link to="../home/blog/" className="hover:text-indigo-500 transition-colors font-medium text-[15px]">Blogs</Link>
                  </li>
                  <li className="sm:!ml-auto">
                    <Link to="/" className="btn btn-outline-primary">Log-out Now</Link>
                  </li>
                </ul>
              </div>
              <button type="button" className="navbar-close w-10 h-10 flex items-center justify-center sm:hidden bg-slate-100 hover:bg-slate-200 transition-colors text-xl rounded-md mt-2 mx-auto"><i className="ri-close-line"></i></button>
            </div>
            <button type="button" className="navbar-toggle w-10 h-10 flex items-center justify-center sm:hidden bg-slate-100 hover:bg-slate-200 transition-colors text-xl rounded-md ml-auto"><i className="ri-menu-line"></i></button>
          </div>
        </div>
      </nav>
      {/* end: Navbar */}
    </body>
  );
}

export default Newnaav;
