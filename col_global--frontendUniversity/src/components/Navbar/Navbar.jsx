import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { H_Main_Logo_Dark, H_Main_Logo_White, Main_Logo_Icon, Main_Logo_Icon_White } from '../../images';
import useDarkMode from '../../hooks/useDarkMode';
import Dark from './Dark';

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
     const { DarkMode } = useDarkMode();
     const location = useLocation();

     useEffect(() => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth'
          });
     }, [location]);


     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     const closeMenu = () => {
          setMenuOpen(false);
     };





     return (
          <div className={`sticky  top-0 left-0 z-50 w-full  ${DarkMode ? 'bg-black' : 'bg-white'}`}>
               <div className="paddingcontainer ">
                    <nav className=" flex flex-wrap items-center justify-between py-3 h-full">
                         <Link to="/" className="flex items-center" onClick={closeMenu}>
                              <img
                                   src={DarkMode ? H_Main_Logo_White : H_Main_Logo_Dark}
                                   width={100}
                                   height={55}
                                   alt="Logo"
                                   className="hidden xl:block"
                              />
                              <img
                                   src={DarkMode ? Main_Logo_Icon_White : Main_Logo_Icon}
                                   width={50}
                                   height={55}
                                   alt="Logo"
                                   className="xl:hidden"
                              />
                         </Link>
                         <div className="flex md:order-2  md:space-x- gap-10">

                              <Dark />

                              <div className="flex md:hidden">
                                   <button id="hamburger" onClick={toggleMenu} className="text-3xl">
                                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                                   </button>
                              </div>
                         </div>

                         <div className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-left font-bold mt-5 md:mt-0 md:border-none h-full ${DarkMode ? '' : 'text-[#2D2F30]'}`}>
                              <Link to="/" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Home
                              </Link>
                              <Link to="/all-university" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Top University
                              </Link>
                              <Link to="/all-country" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Country
                              </Link>
                              <Link to="/all-course" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Course
                              </Link>
                              <Link to="/contact" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Contact Us
                              </Link>
                         </div>
                    </nav>
               </div>
          </div>


     );
};

export default Navbar;
