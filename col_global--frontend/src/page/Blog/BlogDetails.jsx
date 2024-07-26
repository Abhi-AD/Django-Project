import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import icons
import Comment from './Comment';
import blogPosts from '../../data/blogPosts';
import useDarkMode from '../../hooks/useDarkMode';

const BlogDetails = () => {

     // Example data for Table of Contents
     const tableOfContents = [
          { id: 1, title: "title 1" },
          { id: 2, title: "title 2", lessons: ["lesson 1", "lesson 2"] },
          { id: 3, title: "title 3" },
          { id: 4, title: "title 4" }
     ];

     const [openIndex, setOpenIndex] = useState(null);

     const handleToggle = (index) => {
          setOpenIndex(openIndex === index ? null : index);
     };
     const { DarkMode } = useDarkMode();

     return (
          <div className="container mx-auto py-6 px-4">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-3">
                         <div className=" rounded-lg">
                              <div className="p-6">
                                   <h1 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h1>
                                   <img src={blogPosts[0].imageUrl} alt="Featured image" className="w-full h-auto mb-8" />
                                   <p className={`${DarkMode ? '' : 'text-gray-700'} mb-4`}>{blogPosts[0].content}</p>
                                   <p className={`${DarkMode ? '' : 'text-gray-700'}`} > {blogPosts[0].time}</p>
                              </div>
                              <hr className="my-6 border-blue-500 dark:border-gray-700 hidden md:block" />
                              <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center p-6 rounded-b-lg">
                                   <div className="flex gap-4 mb-4 md:mb-0">
                                        <h1 className="text-xl font-light ">Share this</h1>
                                        <FaFacebook className={`text-3xl ${DarkMode ? '' : 'text-[#3b5998]'}`} />
                                        <FaInstagram className={`text-3xl ${DarkMode ? '' : 'text-[#E1306C]'}`} />
                                        <FaTwitter className={`text-3xl ${DarkMode ? '' : 'text-[#1DA1F2]'}`} />
                                   </div>
                                   <div className="flex gap-2">
                                        <div className={`${DarkMode ? '' : 'bg-slate-500 '} border-2 border-white p-2 rounded-xl capitalize text-white text-sm`}>
                                             design
                                        </div>
                                        <div className={`${DarkMode ? '' : 'bg-slate-500 '} border-2 border-white p-2 rounded-xl capitalize text-white text-sm`}>
                                             web
                                        </div>
                                   </div>
                              </div>
                              <Comment />
                         </div>
                    </div>

                    <div className="md:col-span-1">
                         <h1 className="text-3xl mb-8 font-bold">Table of Contents</h1>
                         <ul className="space-y-2">
                              {tableOfContents.map((item, index) => (
                                   <li
                                        key={item.id}
                                        className={`text-xl ${item.lessons ? 'cursor-pointer' : ''}`}
                                        onClick={() => item.lessons && handleToggle(index)}
                                   >
                                        {item.title}
                                        {item.lessons && (
                                             <span className="ml-2">
                                                  {openIndex === index ? (
                                                       <FiChevronUp className="inline text-xl" />
                                                  ) : (
                                                       <FiChevronDown className="inline text-xl" />
                                                  )}
                                             </span>
                                        )}
                                        {item.lessons && openIndex === index && (
                                             <ul className="ml-4 space-y-1">
                                                  {item.lessons.map((lesson, i) => (
                                                       <li key={i} className="text-base">{lesson}</li>
                                                  ))}
                                             </ul>
                                        )}
                                   </li>
                              ))}
                         </ul>

                         <div className="mt-8">
                              <h1 className="text-2xl mb-6">More Posts</h1>
                              {blogPosts.slice(1, 4).map(post => (
                                   <div key={post.id} className="rounded-lg  mb-6 border border-white">
                                        <img
                                             src={post.imageUrl}
                                             alt={post.title}
                                             className="rounded-lg h-48 w-96"
                                        />
                                        <div className="p-4">
                                             <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                                             <p className={`${DarkMode ? '' : 'text-gray-700'}`}>{post.content}</p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default BlogDetails;
