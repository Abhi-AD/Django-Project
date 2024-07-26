import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataFeaturesCourse from "../../data/cardDataPopularCourse";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";
import useDarkMode from "../../hooks/useDarkMode";

const Card = ({ imgSrc, title, description, link, DarkMode }) => (
     <Link to={link}>
          <div className="max-w-xl border rounded-2xl mx-1 md:mx-2 flex flex-col">
               <img
                    className="w-full h-60 object-cover rounded-t-2xl"
                    src={imgSrc}
                    alt={title}
               />
               <div className="p-4 flex-1 flex flex-col">
                    <h2 className="text-lg font-semibold mb-2">{title}</h2>
                    <p className={`${DarkMode ? '' : 'text-gray-700'} text-base truncate`}>
                         {description}
                    </p>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     DarkMode: PropTypes.string.isRequired,
};

function PopularLearn() {
     const { DarkMode } = useDarkMode();
     return (
          <div className="slider-container max-w-screen-2xl mx-auto">
               <div className="">
                    <h1 className="font-bold mb:2  md:mb-5 mx-2 text-lg md:text-2xl">Popular Course</h1>
                    <Slider {...foursliderSettings} className="md:mb-5 mb-3">
                         {cardDataFeaturesCourse.map((item, index) => (
                              <div key={index}>
                                   <Card {...item} DarkMode={DarkMode} />
                              </div>
                         ))}
                    </Slider>
               </div>
          </div>
     );
}

export default PopularLearn;
