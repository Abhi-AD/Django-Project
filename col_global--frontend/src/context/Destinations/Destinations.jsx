import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ imgSrc, country, description, link, date }) => (
     <Link to={'/university/country'} className="relative w-full max-w-lg mx-auto h-auto rounded-lg overflow-hidden group">
          <img src={imgSrc} alt="image" className="w-full h-auto object-cover" />
          <a href={link} className="absolute inset-0 bg-indigo-600 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 rounded-lg"></a>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg space-y-0.5">
               <h3 className="text-lg font-semibold animate-bottom-to-center">{country}</h3>
               <h3 className="text-lg font-semibold animate-bottom-to-center">{country}</h3>
          </div>


     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     country: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     date: PropTypes.string.isRequired,
};
function Destinations() {
     const cardDataDestinations = [
          {
               imgSrc: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=sph",
               country: "USA",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=sph",
               country: "USA",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=sph",
               country: "USA",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=sph",
               country: "USA",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=sph",
               country: "USA",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=sph",
               country: "USA",
               description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
               link: "#",
               date: '2024/04/04'
          },
     ];
     return (
          <div className="max-w-screen-2xl mx-auto">
               <div>
                    <h1 className="font-bold text-2xl mb-5">Six dream destinations</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                         {cardDataDestinations.map((item, index) => (
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

export default Destinations;