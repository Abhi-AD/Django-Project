import { FaUserCircle } from "react-icons/fa";

const Comment = () => {
     const comments = [
          {
               id: 1,
               user: "User 1",
               comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.     ",
               timestamp: "a min ago"
          },
          {
               id: 2,
               user: "User 2",
               comment: "Voluptatibus odit nemo ut nihil neque voluptatem.",
               timestamp: "2 mins ago"
          },
          {
               id: 3,
               user: "User 3",
               comment: "Blanditiis, perferendis laboriosam eum exercitationem esse dolor.",
               timestamp: "3 mins ago"
          }
     ];

     return (
          <div>
               <p className="text-3xl">Comments</p>
               <div className="flex justify-between mt-5">
                    <input type="text" id="name" autoComplete="given-name" placeholder="username" className="rounded-md border border-gray-400 py-2 px-4 dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none" name="name" />
                    <input type="text" id="name" autoComplete="given-name" placeholder="Your comments" className="rounded-md border border-gray-400 py-2 px-4 dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none" name="name" />
                    <button type="submit" className="bg-blue-800 text-white px-6 py-3 font-medium rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
               </div>
               {comments.map((comment) => (
                    <div key={comment.id} className="bg-slate-400 mt-3 p-3 rounded-xl flex gap-10 text-white items-center">
                         <div className="text-2xl p-4 text-black">
                              <FaUserCircle className="text-5xl" />
                              <p>{comment.user}</p>
                         </div>
                         <div>
                              <p>{comment.comment}</p>
                              <div className="flex gap-28 mt-5">
                                   <p>Replay</p>
                                   <p className="text-blue-600">{comment.timestamp}</p>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default Comment;
