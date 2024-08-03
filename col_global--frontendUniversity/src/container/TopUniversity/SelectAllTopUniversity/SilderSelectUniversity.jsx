import { useState } from 'react';
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataTopUniversity from "../../../data/cardDataTopUniversity";
import useDarkMode from "../../../hooks/useDarkMode";
import foursliderSettingsreverse from "../../../components/silderSettings/foursliderSettingsreverse";

const Card = ({ imgSrc, title, description, link, DarkMode }) => (
     <div className="max-w-sm h-full border rounded-2xl mx-1 md:mx-2 flex flex-col">
          <div className="w-full h-40 sm:h-48 relative overflow-hidden rounded-t-2xl">
               <img className="absolute inset-0 w-full h-full object-cover" src={imgSrc} alt={title} />
          </div>
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

function SilderSelectUniversity() {
     const { DarkMode } = useDarkMode();
     const [showAll, setShowAll] = useState(false);

     const toggleShowAll = () => {
          setShowAll(!showAll);
     };

     return (
          <div className="max-w-screen-2xl mx-auto">
               <div className="flex flex-col gap-3">

                    <div className="flex items-center justify-between">
                         {!showAll && (
                              <h1 className="font-bold mb-2 md:mb-5 mx-2 text-lg md:text-2xl">USA University</h1>
                         )}
                         {showAll && (
                              <h1 className="font-bold text-lg md:text-2xl">All USA University</h1>
                         )}
                         <button
                              className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500 border-blue-500"
                              onClick={toggleShowAll}
                         >
                              {showAll ? 'Hide' : 'View All'}
                         </button>
                    </div>
                    {!showAll && (
                         <Slider {...foursliderSettingsreverse} className="">
                              {cardDataTopUniversity.map((item, index) => (
                                   <div key={index} className="">
                                        <Card {...item} DarkMode={DarkMode} />
                                   </div>
                              ))}
                         </Slider>
                    )}

                    {showAll && (
                         <div className="max-w-screen-2xl mx-4 mb-2 md:mx-auto md:mb-5 flex flex-col gap-4">
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                                   {cardDataTopUniversity.map((item, index) => (
                                        <Card key={index} {...item} />
                                   ))}
                              </div>
                         </div>
                    )}
               </div>
          </div>
     );
}

export default SilderSelectUniversity;
