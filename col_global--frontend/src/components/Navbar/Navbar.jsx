import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import { H_Main_Logo_Dark, H_Main_Logo_White, Main_Logo_Icon, Main_Logo_Icon_White } from '../../images';
import Dark from './Dark';
import useDarkMode from '../../hooks/useDarkMode';

const Navbar = () => {
     const [nav, setNav] = useState(false);
     const [activeMenu, setActiveMenu] = useState(null);
     const [showSearch, setShowSearch] = useState(false);
     const { DarkMode } = useDarkMode();
     const submenuRef = useRef(null);

     const handleNav = () => {
          setNav(!nav);
          setActiveMenu(null);
     };

     const handleSubMenuClick = (index) => {
          setActiveMenu(activeMenu === index ? null : index);
     };

     const toggleSearch = () => {
          setShowSearch(!showSearch);
          if (nav) {
               setNav(false);
          }
     };

     const closeSearch = () => {
          setShowSearch(false);
     };

     const closeNav = () => {
          setNav(false);
          setActiveMenu(null);
     };

     const closeSubMenu = () => {
          setActiveMenu(null);
     };

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (submenuRef.current && !submenuRef.current.contains(event.target)) {
                    setActiveMenu(null);
               }
          };

          document.addEventListener('mousedown', handleClickOutside);
          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
          };
     }, []);

     const navItems = [
          { id: 1, text: 'Home', url: '/' },
          { id: 2, text: 'University', url: '/country', },
          { id: 3, text: 'Sanbox', url: '/sanbox', },
          { id: 4, text: 'Euphoria', url: '/euphoria' },
          { id: 5, text: 'Founder Club', url: '/founder-club' },
          { id: 6, text: 'Build with Us', url: '/card' },
          { id: 7, text: 'Learn', url: '/learn' },
          { id: 8, text: 'Contact', url: '/contact' },
          { id: 9, text: 'Blog/Article', url: '/blog-articles' },
     ];

     return (
          <nav className={`border-gray-200 dark:bg-white-900 sticky top-0 z-50 ${DarkMode ? 'darkMode' : 'bg-white'}`}>
               <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                         <img
                              src={DarkMode ? H_Main_Logo_White : H_Main_Logo_Dark}
                              width={100}
                              height={55}
                              alt="Logo"
                              className="hidden xl:block"
                         />
                         <img
                              src={DarkMode ? Main_Logo_Icon_White : Main_Logo_Icon}
                              width={100}
                              height={55}
                              alt="Logo"
                              className="xl:hidden"
                         />
                    </Link>
                    <ul className='hidden xl:flex items-center '>
                         {showSearch ? (
                              <li className='relative'>
                                   <div className="flex items-left">
                                        <input
                                             type="text"
                                             placeholder="Search"
                                             className={`${DarkMode ? 'bg-transparent' : 'bg-white'} px-2 py-3 border rounded-xl`}
                                             style={{ width: "1200px" }}
                                        />
                                        <AiOutlineClose className="ml-2 cursor-pointer" onClick={closeSearch} />
                                   </div>
                              </li>
                         ) : (
                              <>
                                   {navItems.map((item) => (
                                        !item.hidden && (
                                             <li
                                                  key={item.id}
                                                  className={`p-2 ${DarkMode ? 'hover:text-blue-200' : 'hover:text-blue-700'} hover:font-bold rounded-xl m-2 cursor-pointer duration-300 relative group`}
                                                  ref={submenuRef}
                                                  onClick={() => handleSubMenuClick(item.id)}
                                             >
                                                  {item.icon ? item.icon : <Link to={item.url}>{item.text}</Link>}
                                                  {item.submenu && (
                                                       <ul className={`absolute bg-white border border-gray-200 mt-2 rounded-xl py-2 w-max ${activeMenu === item.id ? 'block' : 'hidden'}`}>
                                                            {item.submenu.map((subitem, subIndex) => (
                                                                 <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                                      <Link
                                                                           to={subitem.url}
                                                                           onClick={closeSubMenu}
                                                                           onMouseDown={(e) => e.stopPropagation()} // Prevent click bubbling
                                                                      >
                                                                           {subitem.text}
                                                                      </Link>
                                                                 </li>
                                                            ))}
                                                       </ul>
                                                  )}
                                                  {item.submenu && <AiOutlineDown className="ml-1 inline-block" />}
                                             </li>
                                        )
                                   ))}
                                   <li className='relative mx-3'>
                                        <AiOutlineSearch className='text-2xl cursor-pointer' onClick={toggleSearch} />
                                   </li>
                              </>
                         )}
                         <Dark />
                    </ul>

                    <div onClick={handleNav} className='block xl:hidden'>
                         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>

                    <ul
                         className={
                              nav
                                   ? `fixed xl:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ${DarkMode ? 'darkMode' : 'bg-white'} ease-in-out duration-500 flex flex-col gap-3`
                                   : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
                         }
                    >
                         <img
                              src={DarkMode ? Main_Logo_Icon_White : Main_Logo_Icon}
                              width={100}
                              height={55}
                              alt="COL Logo"
                              className="h-15"
                         />
                         <Dark />

                         <li className=''>
                              <div className="flex items-center px-3">
                                   <input
                                        type="text"
                                        placeholder="Search"
                                        className={`w-full h-16 px-3 border rounded-xl text-black`}
                                   />
                                   <AiOutlineSearch className='text-2xl cursor-pointer' />
                              </div>
                         </li>
                         {navItems.map((item) => (
                              !item.hidden && (
                                   <ul
                                        key={item.id}
                                        className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600 relative flex'
                                        onClick={() => handleSubMenuClick(item.id)}
                                   >
                                        {item.icon ? item.icon : <Link to={item.url} onClick={closeNav}>{item.text}</Link>}
                                        {item.submenu && activeMenu === item.id && (
                                             <ul className="absolute mx-60 bg-black border border-gray-900 mt-4 rounded-md py-2 text-white w-max">
                                                  {item.submenu.map((subitem, subIndex) => (
                                                       <li key={subIndex} className="px-8 py-2 hover:bg-gray-800 cursor-pointer">
                                                            <Link
                                                                 to={subitem.url}
                                                                 onClick={closeNav}
                                                                 onMouseDown={(e) => e.stopPropagation()} // Prevent click bubbling
                                                            >
                                                                 {subitem.text}
                                                            </Link>
                                                       </li>
                                                  ))}
                                             </ul>
                                        )}
                                        {item.submenu && <AiOutlineDown className="ml-1 inline-block text-dark" />}
                                   </ul>
                              )
                         ))}
                    </ul>
               </div>
          </nav >
     );
};

export default Navbar;
