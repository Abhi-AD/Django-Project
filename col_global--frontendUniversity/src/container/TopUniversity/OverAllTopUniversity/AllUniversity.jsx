import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataTopUniversity from "../../../data/cardDataTopUniversity";

const Card = ({ imgSrc, title, description, link, DarkMode }) => (
     <div className="max-w-sm h-full border rounded-2xl mx-1 md:mx-2 flex flex-col">
          <div className="w-full h-40 sm:h-48 relative overflow-hidden rounded-t-2xl">
               <img className="absolute inset-0 w-full h-full object-cover" src={imgSrc} alt={title} />
          </div>
          <div className="p-3 md:p-5 flex flex-col justify-between flex-grow">
               <div>
                    <Link to={link}>
                         <h5 className={`mb-2 text-sm sm:text-base md:text-lg font-bold tracking-tight dark:text-white truncate ${DarkMode ? '' : 'text-gray-900'}`}>
                              {title}
                         </h5>
                    </Link>
                    <p className={`mb-2 text-xs sm:text-sm md:text-base font-normal ${DarkMode ? 'text-gray-400' : 'text-gray-700'} truncate`}>
                         {description}
                    </p>
               </div>
               <div className="flex mt-3">
                    <Link
                         to={link}
                         className={`inline-flex items-center px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm text-center ${DarkMode ? 'hover:bg-white hover:text-black text-white' : 'hover:bg-blue-500 hover:text-white text-black border-blue-500'} border rounded`}
                    >
                         View Details
                    </Link>
               </div>
          </div>
     </div>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     DarkMode: PropTypes.bool.isRequired,
};
function AllUniversity() {
     return (
          <div className="max-w-screen-2xl mx-4 mb-2 md:mx-auto md:mb-5 flex flex-col gap-4">
               <h1 className="font-bold  text-lg md:text-2xl">All University</h1>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {cardDataTopUniversity.map((item, index) => (
                         <Card key={index} {...item} />
                    ))}
               </div>

          </div>
     );
}

export default AllUniversity
     ;