import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";
import cardDataStudyDestination from "../../data/cardDataStudyDestination";

const Card = ({ imgSrc, title, description, link, date }) => (
     <div className="max-w-sm border rounded-2xl mx-1 md:mx-2">
          <img className="rounded-2xl h-28 md:h-40 p-3" src={imgSrc} alt={title} />
          <div className="md:p-5 p-1">
               <Link to={link}>
                    <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
               </Link>
               <p className="md:mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs md:text-base">{description}</p>
               <div className="flex justify-between items-center">
                    <Link
                         to={link}
                         className="inline-flex rounded items-center p-2 md:px-3 md:py-2 text-xs md:text-lg text-center text-black border border-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                         View Details
                    </Link>
                    <p className="text-blue-500 text-xs md:text-lg md:mx-0 mx-2">{date}</p>
               </div>
          </div>
     </div>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     date: PropTypes.string.isRequired,
};

function StudyDestination() {
     return (
          <div className="slider-container max-w-screen-2xl mx-auto">
               <div className="">
                    <h1 className="font-bold mb:2  md:mb-5 mx-2 text-lg md:text-2xl">Preferred Study Destination</h1>
                    <Slider {...foursliderSettings} className="mb-5">
                         {cardDataStudyDestination.map((item, index) => (
                              <div key={index}>
                                   <Card {...item} />
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

export default StudyDestination;
