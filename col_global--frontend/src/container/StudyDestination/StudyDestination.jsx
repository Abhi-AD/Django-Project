import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";
import cardDataEntertainment from "../../data/cardDataEntertainment";

const Card = ({ imgSrc, title, description, link }) => (
     <Link to={link} className="relative overflow-hidden  shadow-lg group ">
          <img className="w-full h-80 object-cover rounded-lg" src={imgSrc} alt={title} />
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="absolute bottom-2 left-2 right-0 p-3">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-white">{description}</p>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
};

function StudyDestination() {
     return (
          <div className="slider-container max-w-screen-2xl mx-auto px-4">
               <h1 className="font-bold mb-2 md:mb-5 text-lg md:text-2xl">Entertainment</h1>
               <Slider {...foursliderSettings} className="mb-5 space-x-4">
                    {cardDataEntertainment.map((item, index) => (
                         <div key={index} className="px-2">
                              <Card {...item} />
                         </div>
                    ))}
               </Slider>
               <div className="flex justify-end">
                    <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-blue-500 border-blue-500">View All</Link>
               </div>
          </div>
     );
}

export default StudyDestination;
