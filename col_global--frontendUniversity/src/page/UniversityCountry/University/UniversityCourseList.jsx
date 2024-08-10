import PropTypes from 'prop-types';
import filteringdata from '../../../data/filterdata/filteringdata';
import { Link } from 'react-router-dom';
import useDarkMode from '../../../hooks/useDarkMode';
import Slider from 'react-slick';
import threesliderSettingsAuto from '../../../components/silderSettings/threesliderSettings';

const Card = ({ image, title, language, costs, duration, DarkMode }) => (
     <Link
          to={'/country/university/course/'}
          className={`rounded-lg border p-3 mx-2 flex flex-col gap-4 ${DarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
          style={{ height: '400px' }} // Fixed height for all cards
     >
          <div className="w-full h-60 relative overflow-hidden rounded-t-2xl">
               <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={title} />
          </div>
          <div className="p-1 flex-1 flex flex-col justify-between">
               <h2 className={`text-lg sm:text-xl font-semibold mb-2 ${DarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
               <p className={`text-sm sm:text-base ${DarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>
                    <strong>Language:</strong> {language}
               </p>
               <p className={`text-sm sm:text-base ${DarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>
                    <strong>Costs:</strong> {costs}
               </p>
               <p className={`text-sm sm:text-base ${DarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>
                    <strong>Duration:</strong> {duration}
               </p>
          </div>
     </Link>
);

Card.propTypes = {
     image: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     language: PropTypes.string.isRequired,
     costs: PropTypes.string.isRequired,
     duration: PropTypes.string.isRequired,
     DarkMode: PropTypes.bool.isRequired,
};

const UniversityCourseList = () => {
     const { DarkMode } = useDarkMode();

     return (
          <div className="paddingbuttom paddingcontainer">
               <h1 className={`font-bold md:text-2xl sm:text-xl text-lg mb-5 ${DarkMode ? 'text-white' : 'text-gray-900'}`}>
                    UCI Course
               </h1>
               <Slider {...threesliderSettingsAuto} className="w-full h-fit">
                    {filteringdata.map((item, index) => (
                         <div key={index}>
                              <Card {...item} DarkMode={DarkMode} />
                         </div>
                    ))}
               </Slider>
          </div>
     );
};

export default UniversityCourseList;
