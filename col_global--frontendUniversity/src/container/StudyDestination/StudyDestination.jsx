import { useState } from 'react';
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foursliderSettings from "../../components/silderSettings/foursliderSettings";
import cardDataEntertainment from "../../data/cardDataEntertainment";

const Card = ({ imgSrc, title, description, link, onClick }) => (
     <Link
          to={link}
          className="relative overflow-hidden group"
          onClick={(e) => {
               e.preventDefault();
               onClick({ imgSrc, title, description });
          }}
     >
          <img className="w-full h-80 object-cover rounded-lg" src={imgSrc} alt={title} />
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="absolute bottom-2 left-2 right-0 p-3">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-white">{description}</p>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     onClick: PropTypes.func.isRequired,
};

function StudyDestination() {
     const [selectedImage, setSelectedImage] = useState(null);

     const openModal = (imageData) => {
          setSelectedImage(imageData);
     };

     const closeModal = () => {
          setSelectedImage(null);
     };

     return (
          <div className="max-w-screen-2xl mx-auto">
               <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                         <h1 className="font-bold mb:2 md:mb-2 mx-2 text-lg md:text-2xl">Entertainment</h1>
                         <Link to={'/entertainment'} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-blue-500 border-blue-500">View All</Link>
                    </div>
                    <div className="relative">
                         <Slider {...foursliderSettings}>
                              {cardDataEntertainment.map((item, index) => (
                                   <div key={index} className="px-2">
                                        <Card {...item} onClick={openModal} />
                                   </div>
                              ))}
                         </Slider>
                    </div>
               </div>

               {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
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
                                   {selectedImage.description && <p className="mt-2">{selectedImage.description}</p>}
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
}

export default StudyDestination;
