import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineBook } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import { TbCategory } from 'react-icons/tb';
import { RiMiniProgramFill } from 'react-icons/ri';

const SanboxSubmenu = () => {
     const [activeMenu, setActiveMenu] = useState(null);
     const [activeSubMenu, setActiveSubMenu] = useState({});
     const submenuRef = useRef(null);

     const handleMenuClick = (index) => {
          setActiveMenu(activeMenu === index ? null : index);
          setActiveSubMenu({});
     };

     const handleSubMenuClick = (menuIndex, subIndex) => {
          setActiveSubMenu((prev) => ({
               ...prev,
               [menuIndex]: prev[menuIndex] === subIndex ? null : subIndex,
          }));
     };

     const closeSubMenu = () => {
          setActiveMenu(null);
          setActiveSubMenu({});
     };

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (submenuRef.current && !submenuRef.current.contains(event.target)) {
                    closeSubMenu();
               }
          };

          document.addEventListener('mousedown', handleClickOutside);
          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
          };
     }, []);

     const navItems = [
          {
               id: 1,
               text: 'Top activities',
               icon: <TbCategory className="text-3xl" />,
               submenu: [
                    { text: 'USA' },
                    { text: 'London', submenuiside: [{ text: 'Subitem 1' }, { text: 'Subitem 2' }] },
               ],
          },
          {
               id: 2,
               text: 'Program',
               icon: <RiMiniProgramFill className="text-3xl" />,
               submenu: [
                    { text: 'USA' },
                    { text: 'London' },
               ],
          },
          {
               id: 3,
               text: 'Learn',
               icon: <AiOutlineBook className="text-3xl" />,
               submenu: [
                    { text: 'Learn 1' },
                    { text: 'Learn 2' },
                    { text: 'Learn 3' },
               ],
          },
          {
               id: 4,
               text: 'Workshop',
               icon: <FaGlobe className="text-3xl" />,
               submenu: [
                    { text: "Women's Fashion" },
                    { text: 'Health & Beauty' },
                    { text: "Men's Fashion" },
               ],
          },
     ];

     return (
          <nav className=" border-gray-200  mb-10">
               <div className="sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
                    <ul className="flex flex-wrap items-center space-x-4 gap-3">
                         {navItems.map((item) => (
                              !item.hidden && (
                                   <li
                                        key={item.id}
                                        className="p-2 hover:text-blue-900 rounded-xl gap-2 flex items-center cursor-pointer duration-300 relative group"
                                        onClick={() => handleMenuClick(item.id)}
                                   >
                                        {item.icon} {item.url ? <Link to={item.url}>{item.text}</Link> : item.text}
                                        {item.submenu && (
                                             <ul
                                                  ref={submenuRef}
                                                  className={`absolute bg-white border-0 rounded-xl py-2 w-max ${activeMenu === item.id ? 'block' : 'hidden'} sm:left-0 sm:top-full sm:mt-0 sm:ml-2`}
                                             >
                                                  {item.submenu.map((subitem, subIndex) => (
                                                       <li
                                                            key={subIndex}
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                                                            onClick={() => handleSubMenuClick(item.id, subIndex)}
                                                       >
                                                            {subitem.url ? (
                                                                 <Link
                                                                      to={subitem.url}
                                                                      onClick={closeSubMenu}
                                                                      onMouseDown={(e) => e.stopPropagation()}
                                                                 >
                                                                      {subitem.text}
                                                                 </Link>
                                                            ) : (
                                                                 subitem.text
                                                            )}
                                                            {subitem.submenuiside && <AiOutlineDown className="ml-1 inline-block text-xl" />}
                                                            {subitem.submenuiside && (
                                                                 <ul
                                                                      className={`absolute left-full top-0 bg-white border-0 rounded-xl py-2 w-max ${activeSubMenu[item.id] === subIndex ? 'block' : 'hidden'}`}
                                                                 >
                                                                      {subitem.submenuiside.map((nestedItem, nestedIndex) => (
                                                                           <li
                                                                                key={nestedIndex}
                                                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                                                onMouseDown={(e) => e.stopPropagation()}
                                                                           >
                                                                                <Link
                                                                                     to={nestedItem.url}
                                                                                     onClick={closeSubMenu}
                                                                                >
                                                                                     {nestedItem.text}
                                                                                </Link>
                                                                           </li>
                                                                      ))}
                                                                 </ul>
                                                            )}
                                                       </li>
                                                  ))}
                                             </ul>
                                        )}
                                        {item.submenu && <AiOutlineDown className="ml-1 inline-block text-xl" />}
                                   </li>
                              )
                         ))}
                    </ul>
               </div>
          </nav>
     );
};

export default SanboxSubmenu;
