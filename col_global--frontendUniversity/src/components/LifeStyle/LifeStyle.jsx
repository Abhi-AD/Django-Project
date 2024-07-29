import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataLifeStyle from "../../data/cardDataLifeStyle";

const Card = ({ imgSrc, title, description, link }) => (
     <Link to={link} className="relative max-w-sm   mx-auto h-auto rounded-lg overflow-hidden group">
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

function LifeStyle() {
     return (
          <div className="">
               <div className="max-w-screen-2xl mx-auto flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                         <h1 className="font-bold mb:2  md:mb-2 mx-2 text-lg md:text-2xl"> Life Style</h1>
                         <Link to={'/entertainment'} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-blue-500 border-blue-500">View All</Link>

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 gap-1">
                         {cardDataLifeStyle.slice(1, 5).map((item, index) => (
                              <Card key={index} {...item} className="px-2" />
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default LifeStyle;
