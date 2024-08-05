import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
     const [contentHeight, setContentHeight] = useState('100vh');
     useEffect(() => {
          const updateContentHeight = () => {
               const navbar = document.querySelector('nav');
               const footer = document.querySelector('footer');
               const navbarHeight = navbar ? navbar.offsetHeight : 0;
               const footerHeight = footer ? footer.offsetHeight : 0;
               const newHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
               setContentHeight(newHeight);
          };

          updateContentHeight();

          window.addEventListener('resize', updateContentHeight);

          return () => window.removeEventListener('resize', updateContentHeight);
     }, []);
     return (
          <div className="border-gray-200 dark:bg-white-900 top-0">
               <div style={{ minHeight: contentHeight }} className="items-center justify-center flex">
                    <div className="flex-1 p-4 sm:p-6 lg:p-8">
                         <div className="container mx-auto max-w-lg text-center">
                              <p className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                                   Something&apos;s missing.
                              </p>
                              <p className="mb-4 text-base sm:text-lg lg:text-xl font-light text-gray-500 dark:text-gray-400">
                                   Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
                              </p>
                              <Link to={`/`} className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-6 py-2.5 text-center dark:focus:ring-blue-900 my-4">
                                   Back to Homepage
                              </Link>
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default NotFound;
