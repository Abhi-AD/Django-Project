import Slider from 'react-slick';
import PropTypes from 'prop-types';

import { DestinationFilter } from '../import';
import oneliderSettingsAuto from '../../components/silderSettings/oneliderSettingsAuto';


const Card = ({ imgSrc, index }) => (
     <div className=" md:w-full rounded-lg">
          <img src={imgSrc} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg " />
     </div>
);


Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     index: PropTypes.number.isRequired,
};
const HeroCarousel = () => {
     const carouselImages = [
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/young-beautiful-brunette-girl-playing-with-colorful-baloons_20279-5243.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/portrait-smiling-teenage-female-student-holding-books-takeaway-coffee-cup-standing-front-university-building_23-2148093482.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/young-beautiful-brunette-girl-playing-with-colorful-baloons_20279-5243.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
          },
          {
               imgSrc: "https://img.freepik.com/free-photo/young-asian-student-university-campus-with-laptop_231208-1862.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
          },
          {
               imgSrc: "https://img.freepik.com/premium-photo/university-graduate-black-gown-happy-student-successfully-completed-university-obtained_1119272-264.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized",
          },
     ];
     return (
          <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white">
               <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Slider {...oneliderSettingsAuto}>
                         {carouselImages.map((image, index) => (
                              <Card key={index} imgSrc={image.imgSrc} index={index + 1} />
                         ))}
                    </Slider>
               </div>
               <div className="video-content space-y-2 z-10 flex flex-col gap-10">
                    <div className="flex flex-col">
                         <h1 className="font-light text-6xl">Welcome to University</h1>
                         <h3 className="font-light text-3xl">with COL Global</h3>
                    </div>
                    <DestinationFilter />
               </div>
          </section>
     );
};

export default HeroCarousel;
