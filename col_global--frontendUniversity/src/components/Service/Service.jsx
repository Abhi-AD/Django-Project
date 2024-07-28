import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataService from "../../data/cardDataService";
import useDarkMode from "../../hooks/useDarkMode";

const Card = ({ imgSrc, title, description, link }) => (
     <Link to={link} className="relative w-full max-w-lg mx-auto h-auto rounded-lg overflow-hidden group">
          <img src={imgSrc} alt="image" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 rounded-lg"></div>
          <div className="absolute  inset-0 flex items-start flex-col justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg space-y-0.5">
               <h3 className="md:text-xl font-bold text-sm capitalize mb-3">{title}</h3>
               <h3 className="md:text-lg text-xs ">{description}</h3>
          </div>
     </Link>


);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
};

function Service() {
     const { DarkMode } = useDarkMode();
     return (
          <div className="max-w-screen-2xl mx-auto">
               <h1 className="font-bold mb:2  md:mb-2 mx-2 text-lg md:text-2xl"> Service</h1>
               <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-3 gap-1">
                    {cardDataService.slice(1, 4).map((item, index) => (
                         <Card key={index} {...item} className="px-2" />
                    ))}
               </div>
               <div className="flex justify-end mb-10">
                    <Link to={'/service'} className={`inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center ${DarkMode ? 'hover:bg-white hover:text-black text-white' : 'hover:bg-blue-500 hover:text-white text-black  border-blue-500'}   border`}>View All</Link>
               </div>
          </div>
     );
}

export default Service;
