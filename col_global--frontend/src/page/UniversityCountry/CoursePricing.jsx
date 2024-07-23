import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "../../components/silderSettings/OnesliderSettings";
import cardCollagePrice from "../../data/cardCollagePrice";

const Card = ({ collagename, coursename, price }) => (
     <div className="p-1 md:p-10">
          <div className="relative  mx-auto">
               <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="flex-1 px-6 py-8 lg:p-12 bg-gray-600">
                         <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{collagename}</h3>
                         <p className="mt-6 text-base text-gray-50 sm:text-lg">{coursename}</p>
                         <div className="mt-8">
                              <div className="flex items-center">
                                   <div className="flex-1 border-t-2 border-gray-200"></div>
                              </div>
                              <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                   {["Inspect Tailwind CSS websites", "Edit mode in real-time", "Copy utility classes right into your clipboard", "Free Chrome extension upprices (Firefox coming soon)"].map((text, index) => (
                                        <li key={index} className="flex items-start lg:col-span-1">
                                             <div className="flex justify-center">
                                                  <FaCheckCircle className="text-blue-400 text-lg" />
                                                  <p className="ml-3 text-white">{text}</p>
                                             </div>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>
                    <div className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-gray-700">
                         <p className="text-lg leading-6 font-medium text-white">Pay once, own it forever</p>
                         <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                              <span>${price}</span>
                              <span className="ml-3 text-xl font-medium text-gray-50">USD</span>
                         </div>
                         <div className="mt-6">
                              <div className="rounded-md shadow">
                                   <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">Buy now</a>
                              </div>
                              <p className="text-gray-300 text-sm mt-3">100% money back guarantee</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
);

Card.propTypes = {
     collagename: PropTypes.string.isRequired,
     coursename: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     price: PropTypes.string.isRequired,
};

const CoursePricing = () => {
     return (
          <div className="slider-container max-w-screen-2xl mx-auto">
               <h1 className="font-bold mb:2 md:mb-5 mx-2 text-xl md:text-2xl">Pricing</h1>
               <Slider {...sliderSettings} className="md:mb-5 mb-3">
                    {cardCollagePrice.map((item, index) => (
                         <div key={index}>
                              <Card {...item} />
                         </div>
                    ))}
               </Slider>
               <div className="flex justify-end">
                    <Link to="" className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500 border-blue-500">
                         View All
                    </Link>
               </div>
          </div>
     );
};

export default CoursePricing;
