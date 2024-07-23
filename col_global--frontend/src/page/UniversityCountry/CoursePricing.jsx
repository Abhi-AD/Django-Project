import PropTypes from "prop-types";
import Slider from "react-slick";
import { FaCheckCircle } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import threesliderSettings from "../../components/silderSettings/threesliderSettings";
import cardCollagePrice from "../../data/cardCollegePrice";
import { Link } from "react-router-dom";

const Card = ({ coursename, price, discountpercentage, discountprice, features, renew, link }) => (
     <div className="border rounded-lg p-6 shadow-lg md:max-w-sm md:mx-auto hover:bg-gray-300 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-4">{coursename}</h2>
          <div className="flex items-center gap-4">
               <div className="text-blue-500 line-through mb-2">${price}</div>
               <div className="border border-blue-500 text-blue-600 py-1 px-2 rounded-full inline-block mb-2">
                    SAVE {discountpercentage}%
               </div>
          </div>
          <div className="text-3xl font-bold text-blue-700 mb-4">
               ${discountprice}<span className="text-lg font-normal">/mo</span>
          </div>
          <Link to={link}>
               <button className="bg-blue-700 text-white py-2 px-6 rounded-full mb-4 text-lg">
                    Buy Now
               </button>
          </Link>
          <div className="text-gray-500 mb-4">${renew}/mo when you renew</div>
          <div className="border-t pt-4">
               <ul className="text-left">
                    {features.map((feature, index) => (
                         <li key={index} className="flex items-start">
                              <div className="flex items-center">
                                   <FaCheckCircle className="text-blue-400 text-lg" />
                                   <p className="ml-3 text-gray-700">{feature}</p>
                              </div>
                         </li>
                    ))}
               </ul>
          </div>
     </div>

);

Card.propTypes = {
     coursename: PropTypes.string.isRequired,
     price: PropTypes.string.isRequired,
     discountpercentage: PropTypes.string.isRequired,
     discountprice: PropTypes.string.isRequired,
     renew: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const CoursePricing = () => {
     return (
          <div className="slider-container max-w-screen-2xl mx-auto">
               <h1 className="font-bold mb-2 md:mb-5 mx-2 text-xl md:text-2xl">Pricing</h1>
               <Slider {...threesliderSettings} className="md:mb-5 mb-3">
                    {cardCollagePrice.map((item, index) => (
                         <div key={index}>
                              <Card {...item} />
                         </div>
                    ))}
               </Slider>
          </div>
     );
};

export default CoursePricing;
