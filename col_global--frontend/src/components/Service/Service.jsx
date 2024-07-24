import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataService from "../../data/cardDataService";

const Card = ({ imgSrc, title, description, link }) => (
     <div className="max-w-sm border rounded-2xl">
          <img className="rounded-2xl h-28 md:h-40 p-3" src={imgSrc} alt={title} />
          <div className="md:p-5 p-1">
               <Link to={link}>
                    <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
               </Link>
               <p className="md:mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs md:text-base">{description}</p>
               <div className="flex mt-3">
                    <Link
                         to={link}
                         className="inline-flex rounded items-center p-2 md:px-3 md:py-2 text-xs md:text-lg  text-center text-black border border-blue-500 hover:bg-blue-500 hover:text-white"
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
};

function Service() {
     return (
          <div className="max-w-screen-2xl mx-auto">
               <div>
                    <h1 className="font-bold mb:2  md:mb-2 mx-2 text-lg md:text-2xl">COL Other Service</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-1">
                         {cardDataService.map((item, index) => (
                              <Card key={index} {...item} />
                         ))}
                    </div>
                    <div className="flex justify-end">
                         <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500  border-blue-500">View All</Link>
                    </div>
               </div>
          </div>
     );
}

export default Service;
