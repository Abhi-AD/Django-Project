import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Comment from "./Comment";

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
               imageUrl: "https://img.freepik.com/free-vector/creative-process-landing-page_23-2148157880.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
          },
          {
               id: 4,
               title: "Card 3 Title",
               description: "Card 3 Description",
               imageUrl: "https://img.freepik.com/premium-photo/how-start-blog-blogging-beginners-ways-monetize-your-blog-blog-word-table-with-laptop_72482-5630.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
          }
     ];

     return (
          <div className="container mx-auto py-1">
               <div className="grid grid-cols-4 gap-16">
                    <div className="col-span-3">
                         <div className="bg-white rounded-lg">
                              <img
                                   src={blogPosts[0].imageUrl}
                                   alt={blogPosts[0].title}
                                   className="rounded-t-lg w-full h-80 object-cover"
                              />
                              <div className="p-6">
                                   <h1 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h1>
                                   <p className="text-gray-700 mb-4">{blogPosts[0].description}</p>
                                   <p className="text-gray-700">{blogPosts[0].year}</p>
                              </div>
                              <hr className="my-6 border-blue-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
                              <div className="flex justify-between text-white w-full">
                                   <div className="flex gap-4">
                                        <h1 className="text-2xl font-extralight text-black">Share this</h1>
                                        <FaFacebook className="text-3xl text-[#3b5998]" />
                                        <FaInstagram className="text-3xl text-[#E1306C]" />
                                        <FaTwitter className="text-3xl text-[#1DA1F2]" />
                                   </div>
                                   <div className="flex gap-2">
                                        <div className="bg-slate-500 p-3 rounded-xl capitalize">
                                             design
                                        </div>
                                        <div className="bg-slate-500 p-3 rounded-xl capitalize">
                                             web
                                        </div>
                                   </div>
                              </div>
                              <Comment />


                         </div>


                    </div>

                    <div className="col-span-1">
                         <h1 className="text-3xl mb-8 font-bold">Table of Contents</h1>
                         <ul className="rounded-lg ">
                              <li className="mb-2 text-xl">title 1</li>
                              <li className="mb-2 text-xl">title 2
                                   <ul className="ml-4">
                                        <li className="mb-1 text-base">lession 1</li>
                                        <li className="mb-1 text-base">lession 2</li>
                                   </ul>
                              </li>
                              <li className="mb-2 text-xl">title 3</li>
                              <li className="mb-2 text-xl">title 4</li>
                         </ul>



                         <div>
                              <h1 className="text-2xl mb-8">More Posts</h1>
                              {blogPosts.slice(1).map(post => (
                                   <div key={post.id} className="bg-white  rounded-lg mb-9">
                                        <img
                                             src={post.imageUrl}
                                             alt={post.title}
                                             className="rounded-t-lg w-full h-40 object-cover"
                                        />
                                        <div className="p-4">
                                             <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                                             <p className="text-gray-700">{post.description}</p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div >
          </div >
     );
};

export default BlogDetails;
