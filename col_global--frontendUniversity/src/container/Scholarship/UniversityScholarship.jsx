import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataScholarship from "../../data/cardDataScholarship";
import { FaCheck, FaGraduationCap } from 'react-icons/fa';
import useDarkMode from "../../hooks/useDarkMode";
import { TbCashBanknoteFilled } from "react-icons/tb";
import { useState } from "react";
import twosliderSettings from "../../components/silderSettings/twosliderSettings";
import { FaGoogleScholar, FaLocationDot } from "react-icons/fa6";

const Card = ({ imgSrc, title, location, scholarship_percentage, description, tags, author, date, link, DarkMode, onClick }) => (
     <Link to={link} className=" h-full rounded-2xl mx-1 md:mx-2 flex flex-col" onClick={(e) => {
          e.preventDefault();
          onClick({ imgSrc, title, description, location, scholarship_percentage });
     }}>
          <div className="flex flex-col md:flex-row bg-gray-200 rounded-lg overflow-hidden">
               <div className="md:w-3/6">
                    <img src={imgSrc} alt={title} className="w-full h-full" />
               </div>
               <div className="md:w-3/6 p-3 flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                         <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                         <p className="text-gray-500 text-sm">By {author} • {date}</p>
                         <p className="flex items-center gap-1"><FaLocationDot className="text-xl" />{location}</p>
                         <p className="flex items-center gap-1">
                              <FaGoogleScholar className="text-xl" />
                              <p className="text-sm md:text-lg md:mx-0 ">Upto <span className={`${DarkMode ? '' : 'text-blue-500'}`}>{scholarship_percentage}</span> Scholarship</p>
                         </p>
                         <p className="text-gray-700">{description}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         {tags.map((tag, index) => (
                              <span key={index} className={`${tag.color} text-sm rounded-full flex items-center gap-2 capitalize`}>
                                   <FaCheck className="bg-blue-500 p-1 rounded-full text-white text-lg" /> {tag.label}
                              </span>
                         ))}
                    </div>
                    <div className="mt-2">
                         <Link to={link} className="inline-block px-2 py-1 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                              Read more
                         </Link>
                    </div>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
     DarkMode: PropTypes.bool.isRequired,
     scholarship_percentage: PropTypes.string.isRequired,
     description: PropTypes.string,
     tags: PropTypes.arrayOf(
          PropTypes.shape({
               label: PropTypes.string.isRequired,
               color: PropTypes.string.isRequired,
          })
     ),
     author: PropTypes.string,
     date: PropTypes.string,
     link: PropTypes.string.isRequired,
     onClick: PropTypes.string.isRequired,
};

function UniversityScholarship() {
     const { DarkMode } = useDarkMode();
     const [selectedImage, setSelectedImage] = useState(null);

     const openModal = (imageData) => {
          setSelectedImage(imageData);
     };

     const closeModal = () => {
          setSelectedImage(null);
     };

     return (
          <div className="w-full h-fit flex flex-col gap-6 paddingbuttom bg-purple-500">
               <div className="flex flex-col gap-3">
                    <h1 className="font-bold  text-lg md:text-2xl">Popular Scholarships USA</h1>
                    <Slider {...twosliderSettings} className="w-full h-fit">
                         {cardDataScholarship.map((item, index) => (
                              <div key={index}>
                                   <Card {...item} DarkMode={DarkMode} onClick={openModal} />
                              </div>
                         ))}
                    </Slider>
               </div>
               {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 text-black">
                         <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full">
                              <div className="relative">
                                   <img src={selectedImage.imgSrc} alt={selectedImage.title} className="w-full h-auto" />
                                   <button
                                        onClick={closeModal}
                                        className="absolute top-2 right-2 w-8 h-8 bg-gray-300 text-black p-2 rounded-full flex items-center justify-center focus:outline-none text-3xl"
                                   >
                                        &times;
                                   </button>
                              </div>
                              <div className="p-4">
                                   <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                                   <p className={`font-normal ${DarkMode ? 'text-white' : 'text-gray-700'} text-xs md:text-base`}>{selectedImage.location}</p>

                                   {selectedImage.description && <p className="mt-2">{selectedImage.description}</p>}
                              </div>
                              <div className="flex flex-col gap-2 p-4">
                                   <div className="flex items-start md:items-center gap-2">
                                        <FaGraduationCap className="text-2xl" />
                                        <p className="text-sm md:text-lg md:mx-0 mx-2">Study Level: <span className={`${DarkMode ? '' : 'text-blue-500'}`}>{selectedImage.studyLevel}</span></p>
                                   </div>
                                   <div className="flex items-start md:items-center gap-2">
                                        <TbCashBanknoteFilled className="text-2xl" />
                                        <p className="text-sm md:text-lg md:mx-0 mx-2">Upto <span className={`${DarkMode ? '' : 'text-blue-500'}`}>{selectedImage.scholarship_percentage}</span> Scholarship</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
}

export default UniversityScholarship;
