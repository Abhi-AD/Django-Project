import { FaDiscord, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';
export default function Footer() {
     return (


          <footer className="bg-white dark:bg-gray-900">
               <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:grid md:grid-cols-12 md:gap-4">
                         <div className="col-span-12 md:col-span-4 mb-6 md:mb-0">
                              <a href="https://flowbite.com/" className="flex items-center">
                                   {/* <img src={Footerimg} className="h-8 me-3" alt="Logo" /> */}
                                   <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">COL</span>
                              </a>
                              <h1 className='text-white'>nb</h1>
                         </div>
                         <div className="col-span-6 md:col-span-8 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                              <div>
                                   <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick</h2>
                                   <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">Home</a>
                                        </li>
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">Course</a>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">University</h2>
                                   <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">University of Stanford</a>
                                        </li>
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">University</a>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Course</h2>
                                   <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">React</a>
                                        </li>
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">Python</a>
                                        </li>
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">Flutter</a>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Shop</h2>
                                   <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">Women&apos;s Fashion</a>
                                        </li>
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">Health & Beauty</a>
                                        </li>
                                        <li className="mb-4">
                                             <a href="/" className="hover:underline">Men&apos;s Fashion</a>
                                        </li>
                                   </ul>
                              </div>
                         </div>

                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">COL-global™</a>. All Rights Reserved.
                         </span>
                         <div className="flex mt-4 sm:justify-center sm:mt-0">
                              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                   <FaFacebookF className="w-4 h-4" />
                                   <span className="sr-only">Facebook page</span>
                              </a>
                              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                   <FaDiscord className="w-4 h-4" />
                                   <span className="sr-only">Discord community</span>
                              </a>
                              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                   <FaTwitter className="w-4 h-4" />
                                   <span className="sr-only">Twitter page</span>
                              </a>
                              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                   <FaGithub className="w-4 h-4" />
                                   <span className="sr-only">GitHub account</span>
                              </a>
                         </div>
                    </div>
               </div>
          </footer>

     );
}
