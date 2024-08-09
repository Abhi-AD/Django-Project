import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataTopUniversity from "../../../data/cardDataTopUniversity";
import useDarkMode from "../../../hooks/useDarkMode";
import foursliderSettingsreverse from "../../../components/silderSettings/foursliderSettingsreverse";

const Card = ({ imgSrc, title, description, link }) => (
     <Link to={link} className=" h-full rounded-2xl mx-1 md:mx-2 flex flex-col">
          <div className="w-full h-96 relative overflow-hidden rounded-2xl">
               <img className="inset-0 w-full h-full object-cover" src={imgSrc} alt={title} />
               <div className="absolute bottom-0 w-full h-1/3 p-3 md:p-5  flex flex-col justify-center flex-grow bg-black bg-opacity-40 backdrop-blur-sm">
                    <div className="flex flex-col justify-center">
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
};

function SilderSelectUniversity() {
     const { DarkMode } = useDarkMode();



     return (
          <div className='paddingcontainer  w-full h-fit flex flex-col   gap-6'>

               <div className="flex flex-col gap-3">

                    <h1 className="font-bold mb-2 md:mb-5 mx-2 text-lg md:text-2xl">USA University</h1>
                    <Slider {...foursliderSettingsreverse} className="">
                         {cardDataTopUniversity.map((item, index) => (
                              <div key={index} className="">
                                   <Card {...item} DarkMode={DarkMode} />
                              </div>
                         ))}
                    </Slider>
               </div>
          </div >
     );
}

export default SilderSelectUniversity;
