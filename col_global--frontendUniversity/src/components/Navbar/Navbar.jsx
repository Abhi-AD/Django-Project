import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { H_Main_Logo_Dark, H_Main_Logo_White, Main_Logo_Icon, Main_Logo_Icon_White } from '../../images';
import useDarkMode from '../../hooks/useDarkMode';

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     const closeMenu = () => {
          setMenuOpen(false);
     };

     const { DarkMode } = useDarkMode();

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 100) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return (
          <div className='h-[100px] z-50 items-center'>
               <div className={` ${scrolled ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'} transition-colors duration-75 fixed top-0 w-full z-50`}>
                    <nav className={`max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between py-3`}>
                         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
                              <img
                                   src={scrolled ? H_Main_Logo_Dark : H_Main_Logo_White}
                                   width={100}
                                   height={55}
                                   alt="Logo"
                                   className="hidden xl:block"
                              />
                              <img
                                   src={scrolled ? Main_Logo_Icon_White : Main_Logo_Icon}
                                   width={100}
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
                         <div className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-left font-bold mt-5 md:mt-0 md:border-none`}>
                              <Link to="/" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Home
                              </Link>
                              <Link to="/top-university" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Top University
                              </Link>
                              <Link to="#services" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Services
                              </Link>
                              <Link to="#gallery" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" onClick={closeMenu}>
                                   Gallery
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
