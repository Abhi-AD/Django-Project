import Slider from 'react-slick';
import PropTypes from 'prop-types';
import oneliderSettingsAuto from '../../components/silderSettings/oneliderSettingsAuto';

const Card = ({ imgSrc, index }) => (
     <div className=" md:w-full md:h-[500px] rounded-lg"> {/* Set a fixed height here */}
          <img src={imgSrc} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg " />
     </div>
);


Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     index: PropTypes.number.isRequired,
};

function SanboxHeader() {
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
          <div className="mb-5">
               <Slider {...oneliderSettingsAuto}>
                    {carouselImages.map((image, index) => (
                         <Card key={index} imgSrc={image.imgSrc} index={index + 1} />
                    ))}
               </Slider>
          </div>
     );
}

export default SanboxHeader;
