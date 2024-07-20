import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaUserGraduate, FaDollarSign } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
     const { className, onClick } = props;
     return (
          <FaArrowRight
               className={`${className} block bg-black text-white hover:bg-gray-800  hover:text-white right-5 h-8 w-8 p-2 rounded-full z-10`}
               onClick={onClick}
          />
     );
}

SampleNextArrow.propTypes = {
     className: PropTypes.string,
     style: PropTypes.object,
     onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
     const { className, onClick } = props;
     return (
          <FaArrowLeft
               className={`${className} block bg-black text-white hover:bg-gray-800 hover:text-white  left-5 h-8 w-8 p-2 rounded-full z-10`}
               onClick={onClick}
          />
     );
}

SamplePrevArrow.propTypes = {
     className: PropTypes.string,
     style: PropTypes.object,
     onClick: PropTypes.func,
};

const Card = ({ imgSrc, collagename, studylevel, link, date, location, scholarship_percentage }) => (
     <div className="max-w-sm border rounded-2xl mx-4"> {/* Add mx-4 for horizontal margin */}
          <img className="rounded-2xl h-40 p-3" src={imgSrc} alt={collagename} />
          <div className="p-5 ">
               <Link to={link}>
                    <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{collagename}</h5>
                    <p className="mb-2 text-xl font-normal tracking-tight text-gray-900 dark:text-white">{location}</p>
               </Link>
               <hr className=" border-blue-500 mt-2 mb-2" />
               <div className="flex flex-col gap-2 mb-3">
                    <div className="flex items-center gap-1">
                         <FaUserGraduate className="text-sm" />
                         <p>Study Level: {studylevel}</p>
                    </div>
                    <div className="flex items-center gap-1">
                         <FaDollarSign className="text-sm" />
                         <p>Upto {scholarship_percentage} Scholarship</p>
                    </div>
               </div>

               <div className="flex justify-between items-center">
                    <Link
                         to={link}
                         className="inline-flex rounded items-center px-3 py-2 text-sm font-medium text-center text-black border border-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                         View Details
                    </Link>
                    <p className="text-blue-500">{date}</p>
               </div>
          </div>
     </div>
);


Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     collagename: PropTypes.string.isRequired,
     studylevel: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     date: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
     scholarship_percentage: PropTypes.string.isRequired,
};

function Scholarship() {
     const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
     };

     const cardDataScholarship = [
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               collagename: "ABC Collage",
               studylevel: "Post Graduate",
               date: '2024/04/04',
               location: 'USA',
               scholarship_percentage: '80%',
               link: "#",
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/young-beautiful-brunette-girl-playing-with-colorful-baloons_20279-5243.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               collagename: "ABC Collage",
               studylevel: "Post Graduate",
               date: '2024/04/04',
               location: 'USA',
               scholarship_percentage: '80%',
               link: "#",
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               collagename: "ABC Collage",
               studylevel: "Post Graduate",
               date: '2024/04/04',
               location: 'USA',
               scholarship_percentage: '80%',
               link: "#",
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/young-beautiful-brunette-girl-playing-with-colorful-baloons_20279-5243.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               collagename: "ABC Collage",
               studylevel: "Post Graduate",
               date: '2024/04/04',
               location: 'USA',
               scholarship_percentage: '80%',
               link: "#",
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/young-asian-student-university-campus-with-laptop_231208-1862.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               collagename: "ABC Collage",
               studylevel: "Post Graduate",
               date: '2024/04/04',
               location: 'USA',
               scholarship_percentage: '80%',
               link: "#",
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/university-graduate-black-gown-happy-student-successfully-completed-university-obtained_1119272-264.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               collagename: "ABC Collage",
               studylevel: "Post Graduate",
               date: '2024/04/04',
               location: 'USA',
               scholarship_percentage: '80%',
               link: "#",
          },
     ];

     return (
          <div className="slider-container max-w-screen-2xl mx-auto">
               <div className="">
                    <h1 className="font-bold text-2xl mb-5">Popular Scholarships</h1>
                    <Slider {...settings} className="mb-5">
                         {cardDataScholarship.map((item, index) => (
                              <div key={index}>
                                   <Card {...item} />
                              </div>
                         ))}
                    </Slider>
                    <div className="flex justify-end">
                         <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm font-medium text-center text-blue-500  border-blue-500">View All</Link>
                    </div>

               </div>
          </div>
     );
}

export default Scholarship;
