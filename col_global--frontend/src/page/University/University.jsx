import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataUniversity from "../../data/cardDataUniversity";

const Card = ({ imgSrc, country, description, link, date }) => (
     <Link to={link} className="relative w-full max-w-lg mx-auto h-auto rounded-lg overflow-hidden group">
          <p className="hidden">{date}</p>
          <img src={imgSrc} alt="image" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg space-y-0.5">
               <h3 className="md:text-lg text-xs animate-bottom-to-center capitalize">{country}</h3>
               <h3 className="md:text-lg text-xs  animate-bottom-to-center">{description}</h3>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     country: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     date: PropTypes.string.isRequired,
};
function University() {
     return (
          <div className="max-w-screen-2xl mx-4 mb-2 md:mx-auto md:mb-5">
               <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl mb-5">Six dream destinations</h1>
                    <div className="flex justify-end p-2">
                         <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm font-medium text-center text-blue-500 border border-blue-500">
                              View All
                         </Link>
                    </div>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {cardDataUniversity.map((item, index) => (
                         <Card key={index} {...item} />
                    ))}
               </div>

          </div>
     );
}

export default University;