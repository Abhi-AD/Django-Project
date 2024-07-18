import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Blog = () => {
     const [searchTerm, setSearchTerm] = useState('');

     const blogPosts = [
          {
               id: 1,
               title: "Blog Title 1",
               imageUrl: "https://img.freepik.com/premium-photo/notes-about-blog-concept-blog-connection-content-like-link-web-share_179068-8247.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               time: '2024'
          },
          {
               id: 2,
               title: "Blog Title 2",
               imageUrl: "https://img.freepik.com/premium-photo/notes-about-blog-concept-blog-connection-content-like-link-web-share_179068-8247.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               time: '2024'
          },
          {
               id: 3,
               title: "Blog Title 3",
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               time: '2024'
          },
          {
               id: 4,
               title: "Blog Title 4",
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               time: '2024'
          },
          {
               id: 5,
               title: "Blog Title 5",
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               time: '2024'
          },
          {
               id: 6,
               title: "Blog Title 6",
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               time: '2024'
          },
          {
               id: 7,
               title: "Blog Title 7",
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               time: '2024'
          },
          {
               id: 8,
               title: "Blog Title 8",
               imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               time: '2024'
          },
     ];

     const filteredPosts = blogPosts.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
     };

     return (
          <div className="container mx-auto py-1">
               <div className="mb-8 max-w-xl mx-auto sticky top-24 md:top-60 lg:top-24 z-50 bg-white">
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


               <div className="flex flex-wrap mx-2">
                    {filteredPosts.slice(0, 2).map((post) => (
                         <div key={post.id} className="w-full md:w-1/2 px-4 mb-8">
                              <div className="bg-white shadow-md rounded-lg h-full">
                                   <img src={post.imageUrl} alt={post.title} className="mb-4 rounded-lg w-full h-80 object-cover" />
                                   <div className="p-3">
                                        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                                        <p className="text-gray-700">{post.content}</p>
                                        <div className='flex justify-between mt-10'>
                                             <Link to={`/blog-articles/details`} className="text-blue-500 hover:underline">Read more</Link>
                                             <p className="text-gray-700">{post.time}</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
                    {filteredPosts.slice(2).map((post) => (
                         <div key={post.id} className="w-full md:w-1/3 px-4 mb-8">
                              <div className="bg-white shadow-md rounded-lg h-full">
                                   <img src={post.imageUrl} alt={post.title} className="mb-4 rounded-lg w-full h-80 object-cover" />
                                   <div className="p-3">
                                        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                                        <p className="text-gray-700">{post.content}</p>
                                        <div className='flex justify-between mt-10'>
                                             <Link to={`/blog-articles/details`} className="text-blue-500 hover:underline">Read more</Link>
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
