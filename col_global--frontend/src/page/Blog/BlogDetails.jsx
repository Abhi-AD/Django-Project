import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import icons
import Comment from './Comment';

const BlogDetails = () => {
     // Example data for blog posts
     const blogPosts = [
          {
               id: 1,
               title: "Blog Title 1",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec velit fermentum, id pretium felis fringilla. Ut euismod euismod diam, eget malesuada tortor dapibus vel. Cras sit amet tellus ante. Sed id lacinia arcu. Sed commodo velit vel nisl maximus congue. Sed nec mi eget eros fringilla vestibulum. Nunc efficitur hendrerit ipsum, at fermentum mauris fermentum sed. Vivamus vestibulum sit amet mauris a lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec velit fermentum, id pretium felis fringilla. Ut euismod euismod diam, eget malesuada tortor dapibus vel. Cras sit amet tellus ante. Sed id lacinia arcu. Sed commodo velit vel nisl maximus congue. Sed nec mi eget eros fringilla vestibulum. Nunc efficitur hendrerit ipsum, at fermentum mauris fermentum sed. Vivamus vestibulum sit amet mauris a lacinia.",
               year: 2024,
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
          },
          {
               id: 2,
               title: "Card 1 Title",
               description: "Card 1 Description",
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
          },
          {
               id: 3,
               title: "Card 2 Title",
               description: "Card 2 Description",
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
          },
          {
               id: 4,
               title: "Card 3 Title",
               description: "Card 3 Description",
               imageUrl: "https://img.freepik.com/premium-photo/how-start-blog-blogging-beginners-ways-monetize-your-blog-blog-word-table-with-laptop_72482-5630.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
          }
     ];

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

     return (
          <div className="container mx-auto py-6 px-4">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-3">
                         <div className="bg-white rounded-lg">
                              <img
                                   src={blogPosts[0].imageUrl}
                                   alt={blogPosts[0].title}
                                   className="rounded-lg h-96 mx-auto"
                              />
                              <div className="p-6">
                                   <h1 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h1>
                                   <p className="text-gray-700 mb-4">{blogPosts[0].description}</p>
                                   <p className="text-gray-700">{blogPosts[0].year}</p>
                              </div>
                              <hr className="my-6 border-blue-500 dark:border-gray-700 hidden md:block" />
                              <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center p-6 rounded-b-lg">
                                   <div className="flex gap-4 mb-4 md:mb-0">
                                        <h1 className="text-xl font-light text-black">Share this</h1>
                                        <FaFacebook className="text-3xl text-[#3b5998]" />
                                        <FaInstagram className="text-3xl text-[#E1306C]" />
                                        <FaTwitter className="text-3xl text-[#1DA1F2]" />
                                   </div>
                                   <div className="flex gap-2">
                                        <div className="bg-slate-500 p-2 rounded-xl capitalize text-white text-sm">
                                             design
                                        </div>
                                        <div className="bg-slate-500 p-2 rounded-xl capitalize text-white text-sm">
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
                              {blogPosts.slice(1).map(post => (
                                   <div key={post.id} className="bg-white rounded-lg shadow-md mb-6">
                                        <img
                                             src={post.imageUrl}
                                             alt={post.title}
                                             className="rounded-lg h-48 w-96"
                                        />
                                        <div className="p-4">
                                             <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                                             <p className="text-gray-700">{post.description}</p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default BlogDetails;
