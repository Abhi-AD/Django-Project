import { FaDiscord, FaFacebookF, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { H_Main_Logo_White } from '../../images';

const sections = [
     {
          title: 'Quick',
          links: [
               { text: 'Home', href: '/' },
               { text: 'TopUniversity', href: '/' }
          ]
     },
     {
          title: 'University',
          links: [
               { text: 'Top University', href: '/' },
               { text: 'University', href: '/' }
          ]
     },
     {
          title: 'Country',
          links: [
               { text: 'UK', href: '/' },
               { text: 'US', href: '/' },
               { text: 'UAE', href: '/' }
          ]
     },
];

const Footer = () => {
     return (
          <footer className="text-white bg-black/80 dark:bg-black/80">
               <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                    <div className="md:grid md:grid-cols-12 md:gap-12 ">
                         <div className="col-span-12 md:col-span-4 mb-6 md:mb-0">
                              <Link to="/" className="flex items-center mb-5">
                                   <img src={H_Main_Logo_White} className="h-20 " alt="Logo" />
                              </Link>
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
                                   <FaXTwitter className="w-4 h-4" />
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
