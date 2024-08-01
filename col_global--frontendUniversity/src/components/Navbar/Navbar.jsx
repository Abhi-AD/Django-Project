import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { H_Main_Logo_Dark, H_Main_Logo_White, Main_Logo_Icon, Main_Logo_Icon_White } from '../../images';
import useDarkMode from '../../hooks/useDarkMode';

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     const closeMenu = () => {
          setMenuOpen(false);
     };

     const { DarkMode } = useDarkMode();


     return (
          <div className='z-50 items-center'>
               <div className={`  transition-colors duration-75 top-0 w-full p-4  md:p-0`}>
                    <nav className={`max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between py-3`}>
                         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
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
                         <div className="flex md:hidden">
                              <button id="hamburger" onClick={toggleMenu} className="text-3xl">
                                   {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                              </button>
                         </div>
                         <div className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right font-bold mt-5 md:mt-0 md:border-none`}>
                              <Link to="/" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Home
                              </Link>
                              <Link to="/top-university" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Top University
                              </Link>
                              <Link to="/country" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Country
                              </Link>
                              <Link to="/scholarships" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Scholarships
                              </Link>
                              <Link to="/contact" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Contact Us
                              </Link>
                         </div>

                    </nav>
               </div>
          </div>
     );
};

export default Navbar;
