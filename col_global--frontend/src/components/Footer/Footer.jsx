import { FaDiscord, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { H_Main_Logo_White } from '../../images';

const sections = [
     {
          title: 'Quick',
          links: [
               { text: 'Home', href: '/' },
               { text: 'Course', href: '/' }
          ]
     },
     {
          title: 'University',
          links: [
               { text: 'University of Stanford', href: '/' },
               { text: 'University', href: '/' }
          ]
     },
     {
          title: 'Course',
          links: [
               { text: 'React', href: '/' },
               { text: 'Python', href: '/' },
               { text: 'Flutter', href: '/' }
          ]
     },
     {
          title: 'Shop',
          links: [
               { text: 'Women\'s Fashion', href: '/' },
               { text: 'Health & Beauty', href: '/' },
               { text: 'Men\'s Fashion', href: '/' }
          ]
     }
];

const Footer = () => {
     return (
          <footer className="text-white bg-black/80 dark:bg-black/80">
               <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                    <div className="md:grid md:grid-cols-12 md:gap-12">
                         <div className="col-span-12 md:col-span-4 mb-6 md:mb-0">
                              <Link to="/" className="flex items-center mb-5">
                                   <img src={H_Main_Logo_White} className="h-8 me-3" alt="Logo" />
                              </Link>
                              <h1 className='text-2xl mb-5'>Sign up for our NewsLetter</h1>
                              <p className='text-xs mb-5'>Be the first to know about our special offers, new product launches, and events</p>
                              <div className="bg-gray-100 w-80 p-2 flex items-center mb-2 rounded-sm">
                                   <input type="email" name="email" placeholder="Enter your email address.." className="bg-gray-100 outline-none text-sm flex-1 text-black mr-5" />
                                   <button className="border-1 border-blue-500 bg-blue-500 rounded-xl px-2 py-2 inline-block">Sign In</button>
                              </div>
                         </div>
                         <div className="col-span-6 md:col-span-8 grid grid-cols-1 mx-2 gap-2 sm:gap-6 sm:grid-cols-4">
                              {sections.map((section, index) => (
                                   <div key={index}>
                                        <h2 className="mb-4 text-xl font-semibold uppercase">{section.title}</h2>
                                        <ul className="font-medium">
                                             {section.links.map((link, index) => (
                                                  <li key={index} className="mb-4 mx-5 md:mx-2">
                                                       <a href={link.href} className="hover:underline">{link.text}</a>
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              ))}
                         </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">COL-global™</a>. All Rights Reserved.</span>
                         <div className="flex mt-4 sm:justify-center sm:mt-0">
                              <a href="#" className="text-gray-500 hover dark:hover:text-white">
                                   <FaFacebookF className="w-4 h-4" />
                                   <span className="sr-only">Facebook page</span>
                              </a>
                              <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                                   <FaDiscord className="w-4 h-4" />
                                   <span className="sr-only">Discord community</span>
                              </a>
                              <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                                   <FaTwitter className="w-4 h-4" />
                                   <span className="sr-only">Twitter page</span>
                              </a>
                              <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                                   <FaGithub className="w-4 h-4" />
                                   <span className="sr-only">GitHub account</span>
                              </a>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;
