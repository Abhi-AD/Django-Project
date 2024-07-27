import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataAllCourse from "../../data/cardDataAllCourse";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineLibraryBooks } from "react-icons/md";
import FilterAllCourse from "./FilterAllCourse";
import useDarkMode from "../../hooks/useDarkMode";

const Card = ({ imgSrc, title, description, link, rating, time, lesson, DarkMode }) => (
     <Link to={link}>
          <div className="max-w-xs h-80 border rounded-2xl mx-1 md:mx-2 flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
               <img
                    className="w-full h-40 object-cover"
                    src={imgSrc}
                    alt={title}
                    aria-label={title}
               />
               <div className="flex-1 flex flex-col p-4">
                    <h2 className="text-lg md:text-xl font-semibold mb-2 truncate">{title}</h2>
                    <div className="flex justify-between gap-2">
                         <div className="flex gap-2">
                              {[...Array(Math.floor(rating))].map((_, i) => (
                                   <FaStar key={i} className="w-4 h-4 text-yellow-300" />
                              ))}
                              {rating % 1 > 0 && <FaStarHalfAlt className="w-4 h-4 text-gray-300 dark:text-gray-500" />}
                         </div>
                         <div className="flex gap-1">
                              <h3 className={`ms-2 text-sm font-semibold ${DarkMode ? '' : 'text-gray-900'} flex items-center`}><IoMdTime />{time}</h3>
                              <h3 className={`ms-2 text-sm font-semibold ${DarkMode ? '' : 'text-gray-900'} flex items-center`}><MdOutlineLibraryBooks />{lesson}</h3>
                         </div>
                    </div>

                    <p className={`${DarkMode ? '' : 'text-gray-700'} dark:text-gray-300 text-base flex-1 `}>{description}</p>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     rating: PropTypes.string.isRequired,
     time: PropTypes.string.isRequired,
     lesson: PropTypes.string.isRequired,
     DarkMode: PropTypes.string.isRequired,
};

function LearnAll() {
     const { DarkMode } = useDarkMode();
     return (
          <div className="max-w-screen-xl mx-4 mb-2 md:mx-auto md:mb-5">
               <h1 className="font-bold text-2xl mb-5">All Course</h1>
               <div className="flex gap-4">
                    <div className="w-1/4">
                         <FilterAllCourse />
                    </div>
                    <div className="w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
                         {cardDataAllCourse.map((item, index) => (
                              <Card key={index} {...item} DarkMode={DarkMode} />
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default LearnAll;
