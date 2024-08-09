import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataEvents from "../../../data/cardDataEvents";
import useDarkMode from "../../../hooks/useDarkMode";
import { CiCalendarDate } from "react-icons/ci";
import { IoCalendarNumberOutline } from "react-icons/io5";
const Card = ({ imgSrc, title, country, startdate, enddate }) => {
     const { DarkMode } = useDarkMode();

     return (
          <div className="h-full border rounded-2xl flex flex-col">
               <div className="w-full h-40 sm:h-48 relative overflow-hidden rounded-t-xl">
                    <img className="absolute inset-0 w-full h-full object-cover" src={imgSrc} alt={title} />
               </div>
               <div className=" p-4  flex flex-col justify-between flex-grow">
                    <h5 className={`text-base md:text-lg font-bold tracking-tight ${DarkMode ? 'text-white' : 'text-gray-900'} truncate`}>{title}</h5>
                    <p className={`font-normal ${DarkMode ? 'text-white' : 'text-gray-700'} text-xs md:text-base truncate`}>{country}</p>
                    <div className="flex flex-col gap-2 ">
                         <div className="flex items-start md:items-center gap-1 ">
                              <CiCalendarDate className="text-lg" />
                              <p className={`text-sm ${DarkMode ? 'text-white' : 'text-gray-700'}`}>Start Date <span className={`${DarkMode ? 'text-white' : 'text-blue-500'}`}>{startdate}</span></p>
                         </div>
                         <div className="flex items-start md:items-center gap-1">
                              <IoCalendarNumberOutline className="text-lg" />
                              <p className={`text-sm ${DarkMode ? 'text-white' : 'text-gray-700'}`}>End Date <span className={`${DarkMode ? 'text-white' : 'text-blue-500'}`}>{enddate}</span></p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

Card.propTypes = {
     title: PropTypes.string.isRequired,
     imgSrc: PropTypes.string.isRequired,
     country: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     startdate: PropTypes.string.isRequired,
     enddate: PropTypes.string.isRequired,
};

function OverEventsAll() {
     return (
          <div className="paddingcontainer  paddingbuttom flex flex-col gap-3">
               <h1 className="font-bold text-lg md:text-2xl">Popular Events</h1>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {cardDataEvents.map((item, index) => (
                         <Card key={index} {...item} />
                    ))}
               </div>
          </div>
     );
}

export default OverEventsAll;
