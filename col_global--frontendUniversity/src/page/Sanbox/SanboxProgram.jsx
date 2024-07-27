import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import threesliderSettingsAuto from "../../components/silderSettings/threesliderSettingsAuto";

const Card = ({ imgSrc, title, link }) => (
     <Link to={link} className="relative w-full h-full rounded-lg overflow-hidden group">
          <img src={imgSrc} alt="image" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
               <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl animate-bottom-to-center">{title}</h3>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
};

function SanboxProgram() {
     const cardDataSanboxProgram = [
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 in less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/young-beautiful-brunette-girl-playing-with-colorful-balloons_20279-5243.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 in less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 in less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/young-beautiful-brunette-girl-playing-with-colorful-balloons_20279-5243.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 in less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/young-asian-student-university-campus-with-laptop_231208-1862.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 in less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/university-graduate-black-gown-happy-student-successfully-completed-university-obtained_1119272-264.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "This Founder Grew His Business to Over $5,00,000 in less than 2 years.",
               link: "id",
               date: '2024/04/04'
          },
     ];


     return (
          <div className="slider-container max-w-screen-2xl mx-auto px-4">
               <h1 className="font-bold mt-4 mb-6 text-lg md:text-2xl lg:text-3xl text-left">Program</h1>
               <Slider {...threesliderSettingsAuto} className="mb-6">
                    {cardDataSanboxProgram.map((item, index) => (
                         <div key={index} className="px-2">
                              <Card {...item} />
                         </div>
                    ))}
               </Slider>
               <div className="flex justify-end">
                    <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500 border-blue-500">View All</Link>
               </div>

          </div>
     );
}

export default SanboxProgram;
