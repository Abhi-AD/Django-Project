import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataScholarship from "../../data/cardDataScholarship";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";
import { FaUserGraduate, FaDollarSign } from 'react-icons/fa';

const Card = ({ imgSrc, collagename, studylevel, link, location, scholarship_percentage }) => (
     <div className="max-w-sm border rounded-2xl mx-1 md:mx-2">
          <img className="rounded-2xl h-40 p-3" src={imgSrc} alt={collagename} />
          <div className="p-5 ">
               <Link to={link}>
                    <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">{collagename}</h5>
                    <p className="md:mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs md:text-base">{location}</p>
               </Link>
               <hr className=" border-blue-500 mt-2 mb-2" />
               <div className="flex flex-col gap-2 mb-3">
                    <div className="flex items-start md:items-center gap-1">
                         <FaUserGraduate className="text-lg" />
                         <p className="text-sm">Study Level: <span className="text-blue-500">{studylevel}</span></p>
                    </div>
                    <div className="flex items-start md:items-center gap-1">
                         <FaDollarSign className="text-lg" />
                         <p className=" text-xs md:text-lg md:mx-0 mx-2">Upto <span className="text-blue-500">{scholarship_percentage}</span> Scholarship</p>
                    </div>
               </div>
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
     collagename: PropTypes.string.isRequired,
     studylevel: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
     scholarship_percentage: PropTypes.string.isRequired,
};

function Scholarship() {
     return (
          <div className="slider-container max-w-screen-2xl mx-auto">
               <div className="">
                    <h1 className="font-bold mb:2  md:mb-5 mx-2 text-lg md:text-2xl">Popular Scholarships</h1>
                    <Slider {...foursliderSettings} className="md:mb-5 mb-3">
                         {cardDataScholarship.map((item, index) => (
                              <div key={index}>
                                   <Card {...item} />
                              </div>
                         ))}
                    </Slider>
                    <div className="flex justify-end">
                         <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500  border-blue-500">View All</Link>
                    </div>

               </div>
          </div>
     );
}

export default Scholarship;
