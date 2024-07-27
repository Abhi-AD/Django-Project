import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import threesliderSettingsAuto from "../../components/silderSettings/threesliderSettingsAuto";
import useDarkMode from "../../hooks/useDarkMode";

const Card = ({ imgSrc, title, link, date, DarkMode }) => (
     <div className="max-w-xs md:max-w-md border rounded-2xl mx-0.5 md:mx-1">
          <div className="flex p-3 justify-between">
               <img className="rounded-2xl h-28 md:h-40 " src={imgSrc} alt={title} />
               <p className={` text-xs md:text-lg md:mx-0 mx-2 ${DarkMode ? '' : 'text-blue-500'}`}>{date}</p>
          </div>
          <div className="md:p-5 p-1">
               <Link to={link}>
                    <h5 className={`mb-2 text-sm md:text-lg font-bold tracking-tight ${DarkMode ? '' : 'text-gray-900'} `}>{title}</h5>
               </Link>
               <div className="flex justify-between items-center">
                    <Link
                         to={link}
                         className={`inline-flex rounded items-center p-2 md:px-3 md:py-2 text-xs md:text-lg text-center ${DarkMode ? 'border-white hover:bg-white hover:text-black text' : 'text-black border-blue-500 hover:bg-blue-500 hover:text-white'} border `}
                    >
                         Content Creators
                    </Link>
                    <Link
                         to={link}
                         className={`inline-flex rounded items-center p-2 md:px-3 md:py-2 text-xs md:text-lg text-center ${DarkMode ? 'border-white hover:bg-white hover:text-black text' : 'text-black border-blue-500 hover:bg-blue-500 hover:text-white'} border `}
                    >
                         Founter Interview
                    </Link>
               </div>
          </div>
     </div>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     date: PropTypes.string.isRequired,
     DarkMode: PropTypes.string.isRequired,
};

function SanboxSucessInterView() {
     const { DarkMode } = useDarkMode();
     const cardDataSanboxSucessInterView = [
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 is less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",

               title: "This Founder Grew His Business to Over $5,00,000 is less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 is less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",

               title: "This Founder Grew His Business to Over $5,00,000 is less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/young-asian-student-university-campus-with-laptop_231208-1862.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 is less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/university-graduate-black-gown-happy-student-successfully-completed-university-obtained_1119272-264.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 is less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
     ];

     return (
          <div className="slider-container max-w-screen-2xl mx-auto px-4">
               <h1 className="font-bold mt-4 mb-6 text-lg md:text-2xl lg:text-3xl text-left">Program</h1>
               <Slider {...threesliderSettingsAuto} className="mb-6">
                    {cardDataSanboxSucessInterView.map((item, index) => (
                         <div key={index} className="px-2">
                              <Card {...item} DarkMode={DarkMode} />
                         </div>
                    ))}
               </Slider>
               <div className="flex justify-end">
                    <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500 border-blue-500">View All</Link>
               </div>

          </div>
     );
}

export default SanboxSucessInterView;
