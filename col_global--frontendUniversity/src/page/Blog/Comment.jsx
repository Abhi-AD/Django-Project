import commentsPosts from "../../data/comments";
import useDarkMode from "../../hooks/useDarkMode";

const Comment = () => {
     const { DarkMode } = useDarkMode();
     return (
          <div className="p-4">
               <p className="text-3xl font-semibold mb-4">Comments</p>
               <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <input
                         type="text"
                         id="username"
                         autoComplete="given-name"
                         placeholder="Username"
                         className={`${DarkMode ? 'bg-transparent' : 'bg-white'} rounded-md border border-gray-400 py-2 px-4   focus:border-blue-500 focus:outline-none flex-1`}
                    />
                    <input
                         type="text"
                         id="comment"
                         autoComplete="off"
                         placeholder="Your comments"
                         className={`${DarkMode ? 'bg-transparent' : 'bg-white'} rounded-md border border-gray-400 py-2 px-4 focus:border-blue-500 focus:outline-none flex-1`}
                    />
                    <button
                         type="submit"
                         className={`${DarkMode ? 'hover:bg-gray-600' : 'bg-blue-800 text-white hover:bg-blue-700 '} border border-white px-4 py-2 font-medium rounded-md  transition duration-200`}
                    >
                         Send
                    </button>
               </div>
               {commentsPosts.map((comment) => (
                    <div key={comment.id} className={`${DarkMode ? '' : 'bg-slate-400'} border mb-4 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-start md:items-center text-white`}>
                         <div className="flex-shrink-0 text-2xl">
                              <img
                                   src={comment.imgUrl}
                                   alt={comment.user}
                                   className="w-10 h-10 rounded-full"
                              />
                              <p className="mt-2 text-lg font-semibold">{comment.user}</p>
                         </div>
                         <div className="flex-1">
                              <p className="mb-2">{comment.comment}</p>
                              <div className="flex justify-between text-sm">
                                   <p className={`${DarkMode ? '' : 'text-blue-600'} cursor-pointer`}>Reply</p>
                                   <p>{comment.timestamp}</p>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default Comment;
