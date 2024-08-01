import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataUniversity from "../../data/cardDataCountry";

const Card = ({ imgSrc, country, description, link }) => (
     <Link to={link} className="p-4 max-w-md">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
               <img className="h-48 w-full object-cover object-center" src={imgSrc} alt="blog" />
               <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{country}</h2>
                    <p className="leading-relaxed mb-3 truncate">{description}</p>
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
function University() {
     return (
          <div className="max-w-screen-2xl mx-4 mb-2 md:mx-auto md:mb-5">
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10">
                    {cardDataUniversity.map((item, index) => (
                         <Card key={index} {...item} />
                    ))}
               </div>

          </div>
     );
}

export default University;