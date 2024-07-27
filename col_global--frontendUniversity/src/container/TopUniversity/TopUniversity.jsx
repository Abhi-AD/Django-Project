import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataTopUniversity from "../../data/cardDataTopUniversity";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";
import useDarkMode from "../../hooks/useDarkMode";

const Card = ({ imgSrc, title, description, link, DarkMode }) => (
     <div className="max-w-sm h-full border rounded-2xl mx-1 md:mx-2 flex flex-col">
          <img className="rounded-2xl w-full h-48 object-cover p-3" src={imgSrc} alt={title} />
          <div className="md:p-5 p-1 flex flex-col justify-between flex-grow">
               <div>
                    <Link to={link}>
                         <h5 className={`mb-2 text-base md:text-lg font-bold tracking-tight  dark:text-white truncate ${DarkMode ? '' : 'text-gray-900'}`}>{title}</h5>
                    </Link>
                    <p className={`md:mb-3 font-normal ${DarkMode ? 'text-gray-400' : 'text-gray-700'} text-xs md:text-base truncate`}>{description}</p>
               </div>
               <div className="flex mt-3">
                    <Link
                         to={link}
                         className={`inline-flex rounded items-center p-2 md:px-3 md:py-2 text-xs md:text-lg text-center ${DarkMode ? 'hover:bg-white hover:text-black text' : 'hover:bg-blue-500 hover:text-white text-black border-blue-500'} border`}
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
     DarkMode: PropTypes.string.isRequired,
};

function TopUniversity() {
     const { DarkMode } = useDarkMode();
     return (
          <div className="slider-container max-w-screen-2xl mx-auto">
               <div className="">
                    <h1 className={`font-bold mb-2 md:mb-5 mx-2 text-lg md:text-2xl ${DarkMode ? '' : 'text-black'}`}>Top University</h1>
                    <Slider {...foursliderSettings} className="md:mb-5 mb-3">
                         {cardDataTopUniversity.map((item, index) => (
                              <div key={index}>
                                   <Card {...item} DarkMode={DarkMode} />
                              </div>
                         ))}
                    </Slider>
                    <div className="flex justify-end">
                         <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500 border-blue-500">View All</Link>
                    </div>
               </div>
          </div>
     );
}

export default TopUniversity;
