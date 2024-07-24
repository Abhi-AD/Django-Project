import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataTopUniversity from "../../data/cardDataTopUniversity";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";

const Card = ({ imgSrc, title, description, link }) => (
     <div className="max-w-sm border rounded-2xl mx-1 md:mx-2">
          <img className="rounded-2xl h-28 md:h-40 p-3" src={imgSrc} alt={title} />
          <div className="md:p-5 p-1">
               <Link to={link}>
                    <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
               </Link>
               <p className="md:mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs md:text-base">{description}</p>
               <div className="flex mt-3">
                    <Link
                         to={link}
                         className="inline-flex rounded items-center p-2 md:px-3 md:py-2 text-xs md:text-lg  text-center text-black border border-blue-500 hover:bg-blue-500 hover:text-white"
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
};

function TopUniversity() {
     return (
          <div className="slider-container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="">
                    <h1 className="font-bold mb-4 md:mb-6 text-xl md:text-2xl">Top Universities</h1>
                    <Slider {...foursliderSettings} className="md:mb-6 mb-4">
                         {cardDataTopUniversity.map((item, index) => (
                              <div key={index} className="px-2 md:px-4">
                                   <Card {...item} />
                              </div>
                         ))}
                    </Slider>
                    <div className="flex justify-end mt-4">
                         <Link to={''} className="inline-flex rounded items-center px-4 py-2 text-sm md:text-lg font-medium text-center text-blue-500 border border-blue-500">View All</Link>
                    </div>
               </div>
          </div>

     );
}

export default TopUniversity;
