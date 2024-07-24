import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import blogPosts from '../../data/blogPosts';

const Blog = () => {
     const [searchTerm, setSearchTerm] = useState('');

     const filteredPosts = blogPosts.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
     };

     return (
          <div className="container mx-auto  py-8">
               <div className="mb-8 max-w-xl mx-auto relative  bg-white">
                    <input
                         type="text"
                         placeholder="Search blog posts..."
                         value={searchTerm}
                         onChange={handleSearchChange}
                         className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 pl-10 text-lg"
                         style={{ fontSize: '1.25rem' }}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                         <BsSearch className="text-gray-400" />
                    </div>
               </div>

               <div className="flex flex-wrap -mx-2">
                    {filteredPosts.map((post, index) => (
                         <div
                              key={post.id}
                              className={`w-full px-4 mb-8 ${index < 2 ? 'md:w-1/2' : 'md:w-1/3'}`}
                         >
                              <div className="bg-white shadow-md rounded-lg h-full">
                                   <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="mb-4 rounded-lg w-full h-80 object-cover"
                                   />
                                   <div className="p-3">
                                        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                                        <p className="text-gray-700">{post.content}</p>
                                        <div className="flex justify-between mt-10">
                                             <Link to={`/blog-articles/details`} className="text-blue-500 hover:underline">
                                                  Read more
                                             </Link>
                                             <p className="text-gray-700">{post.time}</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Blog;
