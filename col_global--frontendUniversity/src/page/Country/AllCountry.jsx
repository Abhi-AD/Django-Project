import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataCountry from "../../data/cardDataCountry";
import DestinationCountry from "../../container/Destinations/DestinationCountry";

const Card = ({ imgSrc, country, description, link }) => (
     <Link to={link} className=" h-full  flex flex-col">
          <div className="w-full h-96 relative overflow-hidden rounded-2xl">
               <img className="inset-0 w-full h-full object-cover" src={imgSrc} alt={country} />
               <div className="absolute bottom-0 w-full h-1/3 p-3 md:p-5  flex flex-col justify-center flex-grow bg-black bg-opacity-40 backdrop-blur-sm">
                    <div className="flex flex-col justify-center">
                         <h5 className={`text-sm sm:text-base md:text-lg font-bold tracking-tight text-white truncate `}>
                              {country}
                         </h5>
                         <p className={`text-xs sm:text-sm md:text-base  font-medium text-white line-clamp-2`}>
                              {description}
                         </p>
                    </div>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     country: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
};
function AllCountry() {
     return (
          <div className="flex flex-col gap-4 paddingcontainer paddingbuttom">
               <DestinationCountry />
               <h1 className="font-bold text-lg md:text-2xl">Country List</h1>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                    {cardDataCountry.map((item, index) => (
                         <Card key={index} {...item} />
                    ))}
               </div>
          </div>
     );
}

export default AllCountry;