import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataCountry from "../../data/cardDataCountry";

const Card = ({ imgSrc, country, description, link }) => (
     <Link to={link} className="max-w-sm h-full border rounded-2xl mx-1 md:mx-2 flex flex-col">

          <div className="w-full h-40 sm:h-48 relative overflow-hidden rounded-t-2xl">
               <img className="absolute inset-0 w-full h-full object-cover" src={imgSrc} alt={country} />
          </div>
          <div className="p-6">
               <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{country}</h2>
               <p className="leading-relaxed mb-3 truncate">{description}</p>
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
          <div className="max-w-screen-2xl mx-4 mb-2 md:mx-auto md:mb-5 flex flex-col gap-4">
               <h1 className="font-bold  text-lg md:text-2xl">Country List</h1>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {cardDataCountry.map((item, index) => (
                         <Card key={index} {...item} />
                    ))}
               </div>

          </div>
     );
}

export default AllCountry;