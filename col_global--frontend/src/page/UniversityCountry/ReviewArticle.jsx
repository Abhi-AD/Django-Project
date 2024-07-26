import { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import cardUniversityDetailsReview from '../../data/cardUniversityDetailsReview';
import useDarkMode from '../../hooks/useDarkMode';
import { Link } from 'react-router-dom';
const ReviewArticle = () => {
     const { DarkMode } = useDarkMode();
     const [isExpanded, setIsExpanded] = useState(Array(cardUniversityDetailsReview.length).fill(false));
     const toggleReadMore = (index) => {
          setIsExpanded(prevState => prevState.map((item, idx) => (idx === index ? !item : item)));
     };

     return (
          <div className='flex flex-col gap-2'>
               <h1 className='text-2xl font-semibold'>Review</h1>
               <div className="flex flex-col gap-2">
                    {cardUniversityDetailsReview.map((review, index) => (
                         <article key={index} className="p-4  dark:bg-gray-800 rounded-lg">
                              <div className="flex items-center mb-4">
                                   <img className="w-10 h-10 me-4 rounded-full" src="data:image/jpeg;base64,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" alt={review.name} />
                                   <div className="font-medium dark:text-white">
                                        <p>{review.name} <time dateTime={review.joinedDate} className={`block text-sm ${DarkMode ? '' : 'text-gray-500'}`}>Joined on August 2014</time></p>
                                   </div>
                              </div>
                              <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                   {[...Array(Math.floor(review.rating))].map((_, i) => (
                                        <FaStar key={i} className="w-4 h-4 text-yellow-300" />
                                   ))}
                                   {review.rating % 1 > 0 && <FaStarHalfAlt className="w-4 h-4 text-gray-300 dark:text-gray-500" />}
                                   <h3 className={`ms-2 text-sm font-semibold ${DarkMode ? '' : 'text-gray-900'} `}>{review.title}</h3>
                              </div>
                              <footer className={`mb-5 text-sm ${DarkMode ? '' : 'text-gray-500'}`}>
                                   <p>Reviewed in the United Kingdom on <time dateTime={review.reviewDate}>{new Date(review.reviewDate).toLocaleDateString()}</time></p>
                              </footer>
                              <p className={`mb-2 ${DarkMode ? '' : 'text-gray-500'}`}>{review.content}</p>
                              <p className={`mb-3 ${DarkMode ? '' : 'text-gray-500'}`}>
                                   {isExpanded[index] ? review.additionalContent : `${review.additionalContent.substring(0, 20)}...`}
                              </p>
                              <Link to={`#`} onClick={(e) => { e.preventDefault(); toggleReadMore(index); }} className={`block mb-5 text-sm font-medium ${DarkMode ? 'underline' : 'text-blue-600'} `}>
                                   {isExpanded[index] ? 'Read less' : 'Read more'}
                              </Link>
                              <aside>
                                   <p className={`mt-1 text-xs ${DarkMode ? '' : 'text-gray-500'} `}>{review.helpfulCount} people found this helpful</p>
                                   <div className="flex items-center mt-3">
                                        <Link to={`#`} className={`px-2 py-1.5 text-xs font-medium  focus:outline-none border  rounded-lg ${DarkMode ? '' : 'text-gray-900 bg-white border-gray-200'}   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>Helpful</Link>
                                        <Link to={`#`} className={`ps-4 text-sm font-medium ${DarkMode ? 'border-gray-200' : 'text-blue-600 border-gray-700 '} hover:underline  ms-4 border-s `}>Report abuse</Link>
                                   </div>
                              </aside>
                         </article>
                    ))}
               </div>
          </div>
     );
};

export default ReviewArticle;
