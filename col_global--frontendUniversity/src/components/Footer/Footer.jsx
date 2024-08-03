import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { H_Main_Logo_White } from '../../images';

const sections = [
     {
          title: 'Quick',
          links: [
               { text: 'Home', href: '/' },
               { text: 'University', href: '/all-university' },
               { text: 'Country', href: '/all-country' },
               { text: 'Scholarships', href: '/scholarships' },
               { text: 'Contact Us', href: '/contact' },
          ]
     },
     {
          title: 'University',
          links: [
               { text: 'Harvard University', href: '/' },
               { text: 'Stanford University', href: '/' },
               { text: 'University of Oxford', href: '/' }
          ]
     },
     {
          title: 'Study Country',
          links: [
               { text: 'Germany', href: '/' },
               { text: 'United Kingdom', href: '/' },
               { text: 'Canada', href: '/' }
          ]
     },
];

const Footer = () => {
     return (
          <footer className="text-white bg-black/80 dark:bg-black/80">
               <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                    <div className="md:grid md:grid-cols-12 md:gap-12">
                         <div className="col-span-12 md:col-span-4 mb-6 md:mb-0">
                              <Link to="/" className="flex items-center mb-5">
                                   <img src={H_Main_Logo_White} className="h-20" alt="Logo" />
                              </Link>
                         </div>
                         <div className="col-span-12 md:col-span-8 grid grid-cols-1 mx-2 gap-2 sm:gap-6 sm:grid-cols-3">
                              {sections.map((section, index) => (
                                   <div key={index}>
                                        <h3 className="mb-4 text-xl font-semibold uppercase">{section.title}</h3>
                                        <ul className="font-medium">
                                             {section.links.map((link, index) => (
                                                  <li key={index} className="mb-4 mx-5 md:mx-2">
                                                       <a href={link.href} className="hover:underline" aria-label={link.text}>{link.text}</a>
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
                              <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5" aria-label="Facebook">
                                   <FaFacebookF className="w-5 h-5" />
                              </a>
                              <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5" aria-label="Discord">
                                   <FaInstagram className="w-5 h-5" />
                              </a>
                              <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5" aria-label="Twitter">
                                   <FaXTwitter className="w-5 h-5" />
                              </a>
                              <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5" aria-label="GitHub">
                                   <FaGithub className="w-5 h-5" />
                              </a>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;
