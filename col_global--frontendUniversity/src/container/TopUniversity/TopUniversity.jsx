import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataTopUniversity from "../../data/cardDataTopUniversity";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";
import useDarkMode from "../../hooks/useDarkMode";

const Card = ({ imgSrc, title, description, link, DarkMode }) => (
     <div className="max-w-xs h-full border rounded-2xl mx-1 md:mx-2 flex flex-col">
          <img className="rounded-2xl w-full h-40 sm:h-48 object-cover p-2" src={imgSrc} alt={title} />
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

function TopUniversity() {
     const { DarkMode } = useDarkMode();
     return (
          <div className="slider-container max-w-screen-2xl mx-auto p-4 md:p-8">
               <div>
                    <h1 className={`font-bold mb-4 md:mb-8 text-lg md:text-2xl ${DarkMode ? 'text-white' : 'text-black'}`}>
                         Top University
                    </h1>
                    <Slider {...foursliderSettings} className="md:mb-8 mb-4">
                         {cardDataTopUniversity.map((item, index) => (
                              <div key={index} className="px-2">
                                   <Card {...item} DarkMode={DarkMode} />
                              </div>
                         ))}
                    </Slider>
               </div>
          </div>
     );
}

export default TopUniversity;
