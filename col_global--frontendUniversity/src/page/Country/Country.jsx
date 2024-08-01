import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useDarkMode from "../../hooks/useDarkMode";
import foursliderSettingsreverse from "../../components/silderSettings/foursliderSettingsreverse";
import cardDataCountry from "../../data/cardDataCountry";

const Card = ({ imgSrc, title, description, link, DarkMode }) => (
     <div className="max-w-sm h-full border rounded-2xl mx-1 md:mx-2 flex flex-col">
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

function Country() {
     const { DarkMode } = useDarkMode();
     return (
          <div className=" max-w-screen-2xl mx-auto">
               <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                         <h1 className="font-bold mb-2 md:mb-5 mx-2 text-lg md:text-2xl">Study Destinations</h1>
                         <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500 border-blue-500">View All</Link>
                    </div>
                    <Slider {...foursliderSettingsreverse} className="">
                         {cardDataCountry.map((item, index) => (
                              <div key={index} className="px-2">
                                   <Card {...item} DarkMode={DarkMode} />
                              </div>
                         ))}
                    </Slider>
               </div>
          </div>
     );
}

export default Country;
