import { useState } from 'react';
import cardCollageImage from '../../../data/cardCollageImage';

const UniversityCountryDetailsGallery = () => {
     const [selectedImage, setSelectedImage] = useState(null);

     const openModal = (image) => {
          setSelectedImage(image);
     };

     const closeModal = () => {
          setSelectedImage(null);
     };

     return (
          <div className="flex flex-col gap-3 paddingbuttom">
               <h1 className="text-3xl font-bold text-left">Gallery</h1>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cardCollageImage.map((image, index) => (
                         <div
                              key={index}
                              className={`relative overflow-hidden rounded-lg group ${image.span || ''}`}
                              onClick={() => openModal(image)}
                         >
                              <img src={image.src} alt={image.title} className="w-full h-48 md:h-full object-cover cursor-pointer" />
                              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                   <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                                        {image.description && <p className="text-white">{image.description}</p>}
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
               {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
                         <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full text-black" onClick={(e) => e.stopPropagation()}>
                              <div className="relative">
                                   <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto" />
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
};

export default UniversityCountryDetailsGallery;
