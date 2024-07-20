import { FaUserCircle } from "react-icons/fa";

const Comment = () => {
     const comments = [
          {
               id: 1,
               user: "User 1",
               comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               timestamp: "a min ago"
          },
          {
               id: 2,
               user: "User 2",
               comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               timestamp: "2 mins ago"
          },
          {
               id: 3,
               user: "User 3",
               comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               timestamp: "3 mins ago"
          }
     ];

     return (
          <div className="p-4">
               <p className="text-3xl font-semibold mb-4">Comments</p>
               <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <input
                         type="text"
                         id="username"
                         autoComplete="given-name"
                         placeholder="Username"
                         className="rounded-md border border-gray-400 py-2 px-4 dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none flex-1"
                    />
                    <input
                         type="text"
                         id="comment"
                         autoComplete="off"
                         placeholder="Your comments"
                         className="rounded-md border border-gray-400 py-2 px-4 dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none flex-1"
                    />
                    <button
                         type="submit"
                         className="bg-blue-800 text-white px-4 py-2 font-medium rounded-md hover:bg-blue-700 transition duration-200"
                    >
                         Send
                    </button>
               </div>
               {comments.map((comment) => (
                    <div key={comment.id} className="bg-slate-400 mb-4 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-start md:items-center text-white">
                         <div className="flex-shrink-0 text-2xl">
                              <FaUserCircle className="text-5xl" />
                              <p className="mt-2 text-lg font-semibold">{comment.user}</p>
                         </div>
                         <div className="flex-1">
                              <p className="mb-2">{comment.comment}</p>
                              <div className="flex justify-between text-sm">
                                   <p className="text-blue-600 cursor-pointer">Reply</p>
                                   <p>{comment.timestamp}</p>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default Comment;
