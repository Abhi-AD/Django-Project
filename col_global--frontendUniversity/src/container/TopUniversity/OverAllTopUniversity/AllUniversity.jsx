import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataTopUniversity from "../../../data/cardDataTopUniversity";

const Card = ({ imgSrc, title, description, link }) => (
     <Link to={link} className="max-w-sm h-full rounded-2xl mx-1 md:mx-2 flex flex-col">
          <div className="w-full h-96 relative overflow-hidden rounded-2xl">
               <img className="inset-0 w-full h-full object-cover" src={imgSrc} alt={title} />
               <div className="absolute bottom-0 w-full h-1/3 p-3 md:p-5  flex flex-col justify-between flex-grow bg-black bg-opacity-40 backdrop-blur-sm">
                    <div className="flex flex-col justify-between flex-grow">
                         <h5 className={`text-sm sm:text-base md:text-lg font-bold tracking-tight text-white truncate `}>
                              {title}
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