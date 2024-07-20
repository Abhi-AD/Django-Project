import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ imgSrc, title, description, link, date }) => (
     <div className="border rounded-2xl mx-2">
          <img className="rounded-2xl h-40 p-3" src={imgSrc} alt={title} />
          <div className="p-5">
               <Link to={link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
               </Link>
               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
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
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     date: PropTypes.string.isRequired,
};

function Service() {
     const cardDataService = [
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "Noteworthy technology acquisitions 2021",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/young-beautiful-brunette-girl-playing-with-colorful-baloons_20279-5243.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "Noteworthy technology acquisitions 2021",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "Noteworthy technology acquisitions 2021",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/young-beautiful-brunette-girl-playing-with-colorful-baloons_20279-5243.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "Noteworthy technology acquisitions 2021",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/young-asian-student-university-campus-with-laptop_231208-1862.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "Noteworthy technology acquisitions 2021",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/university-graduate-black-gown-happy-student-successfully-completed-university-obtained_1119272-264.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "Noteworthy technology acquisitions 2021",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/university-graduate-black-gown-happy-student-successfully-completed-university-obtained_1119272-264.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "Noteworthy technology acquisitions 2021",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/university-graduate-black-gown-happy-student-successfully-completed-university-obtained_1119272-264.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
               title: "Noteworthy technology acquisitions 2021",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
     ];

     return (
          <div className="max-w-screen-2xl mx-auto">
               <div>
                    <h1 className="font-bold text-2xl mb-5">COL Other Service</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                         {cardDataService.map((item, index) => (
                              <Card key={index} {...item} />
                         ))}
                    </div>
                    <div className="flex justify-end mt-6">
                         <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm font-medium text-center text-blue-500 border border-blue-500">
                              View All
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default Service;
