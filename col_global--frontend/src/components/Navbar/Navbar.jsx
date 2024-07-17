import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai'; // Import AiOutlineDown for dropdown arrow
import useDarkMode from "../../hooks/useDarkMode";
import Dark from "./Dark";
import { H_Main_Logo_Dark, H_Main_Logo_White } from '../../images';

const Navbar = () => {
     const [nav, setNav] = useState(false);
     const [activeMenu, setActiveMenu] = useState(null);
     const { isDarkMode } = useDarkMode();

     const handleNav = () => {
          setNav(!nav);
          setActiveMenu(null); // Close any active submenu when toggling the main menu
     };

     const handleSubMenuClick = (index) => {
          setActiveMenu(activeMenu === index ? null : index);
     };

     const navItems = [
          { id: 1, text: 'Home' },
          { id: 2, text: 'Course', submenu: ['Course 1', 'Course 2', 'Course 3'] },
          { id: 3, text: 'Shop', submenu: ['Shop 1', 'Shop 2', 'Shop 3'] },
          { id: 4, text: 'University', submenu: ['University 1', 'University 2', 'University 3'] },
          { id: 5, text: 'Contact' },
     ];

     return (
          <nav className="bg-white border-gray-200 dark:bg-white-900 sticky top-0">
               <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                         <img
                              src={H_Main_Logo_Dark}
                              width={150}
                              height={75}
                              alt="Flowbite Logo"
                              className="h-25"
                         />
                    </a>
                    <ul className='hidden md:flex'>
                         {navItems.map((item, index) => (
                              <li
                                   key={item.id}
                                   className='p-4 hover:text-blue-900 rounded-xl m-2 cursor-pointer duration-300 relative'
                                   onClick={() => handleSubMenuClick(index)}
                              >
                                   {item.text}
                                   {item.submenu && activeMenu === index && (
                                        <ul className="absolute bg-white border border-gray-200 mt-2 rounded-xl py-2 w-max">
                                             {item.submenu.map((subitem, subIndex) => (
                                                  <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                       {subitem}
                                                  </li>
                                             ))}
                                        </ul>
                                   )}
                                   {item.submenu && <AiOutlineDown className="ml-1 inline-block" />}
                              </li>
                         ))}
                    </ul>
                    <Dark />


                    <div onClick={handleNav} className='block md:hidden'>
                         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                    <ul
                         className={
                              nav
                                   ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 text-white'
                                   : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                         }
                    >
                         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                              <img
                                   src={H_Main_Logo_White}
                                   width={150}
                                   height={75}
                                   alt="Flowbite Logo"
                                   className="h-25"
                              />
                         </a>
                         {navItems.map((item, index) => (
                              <li
                                   key={item.id}
                                   className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600 relative flex '
                                   onClick={() => handleSubMenuClick(index)}
                              >
                                   {item.text}
                                   {item.submenu && activeMenu === index && (
                                        <ul className="absolute bg-black border border-gray-900 mt-2 rounded-md py-2 text-white w-max">
                                             {item.submenu.map((subitem, subIndex) => (
                                                  <li key={subIndex} className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                                                       {subitem}
                                                  </li>
                                             ))}
                                        </ul>
                                   )}
                                   {item.submenu && <AiOutlineDown className="ml-1 inline-block text-white" />}
                              </li>
                         ))}
                    </ul>
               </div>
          </nav >
     );
};

export default Navbar;
