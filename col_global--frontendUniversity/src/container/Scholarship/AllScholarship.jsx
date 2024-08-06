import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataScholarship from "../../data/cardDataScholarship";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";
import { FaGraduationCap } from 'react-icons/fa';
import useDarkMode from "../../hooks/useDarkMode";
import { TbCashBanknoteFilled } from "react-icons/tb";
import { useState } from "react";

const Card = ({ imgSrc, collagename, studylevel, link, location, scholarship_percentage, DarkMode, onClick }) => (
     <Link to={link} className=" h-full rounded-2xl mx-1 md:mx-2 flex flex-col" onClick={(e) => {
          e.preventDefault();
          onClick({ imgSrc, collagename, studylevel, location, scholarship_percentage });
     }}>
          <div className="w-full h-40 sm:h-48 relative overflow-hidden rounded-t-2xl">
               <img className="absolute inset-0 w-full h-full object-cover" src={imgSrc} alt={collagename} />
          </div>
          <div className="p-5 flex flex-col justify-between flex-grow">
               <div className="flex-col gap-4 flex">
                    <div className="flex flex-col gap-1">
                         <h5 className={`text-base md:text-lg font-bold tracking-tight dark:text-white truncate ${DarkMode ? '' : 'text-gray-900'}`}>{collagename}</h5>
                         <p className={`font-normal ${DarkMode ? 'text-white' : 'text-gray-700'} text-xs md:text-base truncate`}>{location}</p>
                    </div>
                    <hr className={`${DarkMode ? '' : 'border-blue-500'} `} />
                    <div className="flex flex-col gap-2">
                         <div className="flex items-start md:items-center gap-2">
                              <FaGraduationCap className="text-2xl" />
                              <p className="text-sm md:text-lg md:mx-0 mx-2">Study Level: <span className={`${DarkMode ? '' : 'text-blue-500'}`}>{studylevel}</span></p>
                         </div>
                         <div className="flex items-start md:items-center gap-2">
                              <TbCashBanknoteFilled className="text-2xl" />
                              <p className="text-sm md:text-lg md:mx-0 mx-2">Upto <span className={`${DarkMode ? '' : 'text-blue-500'}`}>{scholarship_percentage}</span> Scholarship</p>
                         </div>
                    </div>
               </div>
          </div>
     </Link>
);


Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     collagename: PropTypes.string.isRequired,
     studylevel: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     DarkMode: PropTypes.bool.isRequired,
     location: PropTypes.string.isRequired,
     onClick: PropTypes.func.isRequired,
     scholarship_percentage: PropTypes.string.isRequired,
};
function AllScholarship() {
     const { DarkMode } = useDarkMode();

     const [selectedImage, setSelectedImage] = useState(null);

     const openModal = (imageData) => {
          setSelectedImage(imageData);
     };

     const closeModal = () => {
          setSelectedImage(null);
     };
     return (
          <div className='md:max-w-screen-2xl mx-auto  w-full h-fit flex flex-col   gap-6'>
               <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                         <h1 className="font-bold mb-2 md:mb-5 mx-2 text-lg md:text-2xl">Popular Scholarships</h1>
                         <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500 border-blue-500">View All</Link>
                    </div>
                    <Slider {...foursliderSettings} className="w-full h-fit" >
                         {cardDataScholarship.map((item, index) => (
                              <div key={index} className="">
                                   <Card {...item} DarkMode={DarkMode} onClick={openModal} />
                              </div>
                         ))}
                    </Slider>
               </div>
               {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 text-black">
                         <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full">
                              <div className="relative">
                                   <img src={selectedImage.imgSrc} alt={selectedImage.collagename} className="w-full h-auto" />
                                   <button
                                        onClick={closeModal}
                                        className="absolute top-2 right-2 w-8 h-8 bg-gray-300 text-black p-2 rounded-full flex items-center justify-center focus:outline-none text-3xl"
                                   >
                                        &times;
                                   </button>
                              </div>
                              <div className="p-4 flex flex-col gap-3">
                                   <div className="flex flex-col gap-1">
                                        <h3 className="text-2xl font-bold">{selectedImage.collagename}</h3>
                                        <p className={`font-normal text-black text-xs md:text-base truncate`}>{selectedImage.location}</p>
                                   </div>
                                   <hr className={`border-black `} />

                                   <div className="flex flex-col gap-2">
                                        <div className="flex items-start md:items-center gap-2">
                                             <FaGraduationCap className="text-2xl" />
                                             <p className="text-sm md:text-lg md:mx-0 mx-2">Study Level: <span className={`${DarkMode ? '' : 'text-blue-500'}`}>{selectedImage.studylevel}</span></p>
                                        </div>
                                        <div className="flex items-start md:items-center gap-2">
                                             <TbCashBanknoteFilled className="text-2xl" />
                                             <p className="text-sm md:text-lg md:mx-0 mx-2">Upto <span className={`${DarkMode ? '' : 'text-blue-500'}`}>{selectedImage.scholarship_percentage}</span> Scholarship</p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>
               )}
          </div>
     );
}

export default AllScholarship;
