import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataScholarship from "../../data/cardDataScholarship";
import { FaCheck, FaMapMarkerAlt } from 'react-icons/fa';
import useDarkMode from "../../hooks/useDarkMode";
import threesliderSettingsAuto from "../../components/silderSettings/threesliderSettings";
import { LiaUniversitySolid } from "react-icons/lia";

const Card = ({ title, tags, collagename, link, DarkMode, location }) => (
     <Link to={link} className="h-full rounded-2xl mx-1 md:mx-2 flex flex-col">
          <div className=" w-full h-60 flex flex-col md:flex-row border rounded-lg overflow-hidden">
               <div className="p-3 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                         <div className="flex flex-col gap-1">
                              <h2 className={`text-2xl font-bold line-clamp-2  ${DarkMode ? "" : "text-gray-800"}`}>{title}</h2>
                              <div className={` truncate ${DarkMode ? "" : "text-gray-800"} text-2xl flex gap-1 items-center`}><LiaUniversitySolid /> <p className="text-sm">{collagename}</p></div>
                              <div className={` truncate ${DarkMode ? "" : "text-gray-800"} text-[20px] flex gap-1 items-center`}><FaMapMarkerAlt /> <p className="text-sm">{location}</p></div>
                         </div>

                         <hr className="w-full border-t border-gray-300" />

                         <div className="flex flex-col gap-1">
                              {tags.map((tag, index) => (
                                   <span
                                        key={index}
                                        className={`${tag.color} text-sm rounded-full flex items-center gap-2 capitalize`}
                                   >
                                        <FaCheck className="bg-blue-500 p-1 rounded-full text-white text-lg" />{' '}
                                        {tag.label}
                                   </span>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     title: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
     DarkMode: PropTypes.bool.isRequired,
     tags: PropTypes.arrayOf(
          PropTypes.shape({
               label: PropTypes.string.isRequired,
               color: PropTypes.string.isRequired,
          })
     ),
     collagename: PropTypes.string,
     link: PropTypes.string.isRequired,
};
function CountryScholarship() {
     const { DarkMode } = useDarkMode();

     return (
          <div className='paddingcontainer paddingbuttom  w-full h-fit flex flex-col   gap-6'>
               <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-lg md:text-2xl">Popular Scholarships</h1>
                    <Slider {...threesliderSettingsAuto} className="w-full h-fit" >
                         {cardDataScholarship.map((item, index) => (
                              <div key={index} className="">
                                   <Card {...item} DarkMode={DarkMode} />
                              </div>
                         ))}
                    </Slider>
               </div>
          </div>
     );
}

export default CountryScholarship;
