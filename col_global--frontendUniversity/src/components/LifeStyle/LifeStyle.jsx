import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataLifeStyle from "../../data/cardDataLifeStyle";
import { useState } from "react";

const Card = ({ imgSrc, title, description, onClick }) => (
     <Link onClick={(e) => {
          e.preventDefault();
          onClick({ imgSrc, title, description });
     }} className="relative block w-full h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden group">
          <img src={imgSrc} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
               <div className="text-center">
                    <h3 className="text-lg md:text-xl font-bold capitalize mb-2">{title}</h3>
                    <p className="text-xs md:text-sm">{description}</p>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     onClick: PropTypes.func.isRequired,
};

function LifeStyle() {
     const [selectedImage, setSelectedImage] = useState(null);

     const openModal = (imageData) => {
          setSelectedImage(imageData);
     };

     const closeModal = () => {
          setSelectedImage(null);
     };

     return (
          <div className="p-4 xl:p-0">
               <div className="max-w-screen-2xl mx-auto flex flex-col gap-6">
                    <div className="flex items-center justify-between mb-4">
                         <h1 className="text-sm sm:text-xl md:text-2xl font-bold">Life Style</h1>
                         <Link to='/entertainment' className="inline-flex rounded items-center px-3 py-2 text-sm md:text-lg font-medium text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                              View All
                         </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
                         {cardDataLifeStyle.slice(0, 4).map((item, index) => (
                              <Card key={index} {...item} onClick={openModal} />
                         ))}
                    </div>
                    {selectedImage && (
                         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
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
          </div>
     );
}

export default LifeStyle;
