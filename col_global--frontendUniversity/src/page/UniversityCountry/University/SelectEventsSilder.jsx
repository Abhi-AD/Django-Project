import { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiCalendarDate } from 'react-icons/ci';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import cardDataEvents from '../../../data/cardDataEvents';
const Card = ({ imgSrc, title, description, link, onClick, enddate, startdate }) => (
     <Link
          to={link}
          className=""
          onClick={(e) => {
               e.preventDefault();
               onClick({ imgSrc, title, description, enddate, startdate });
          }}
     >
          <li>{title}</li>

     </Link>

);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     onClick: PropTypes.func.isRequired,
     startdate: PropTypes.func.isRequired,
     enddate: PropTypes.func.isRequired,
};

function SelectEventsSilder() {
     const [selectedImage, setSelectedImage] = useState(null);

     const openModal = (imageData) => {
          setSelectedImage(imageData);
     };

     const closeModal = () => {
          setSelectedImage(null);
     };

     return (
          <div className='w-full h-fit flex flex-col gap-6 paddingbuttom bg-red-500'>
               <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-lg md:text-2xl">Special Academics Program</h1>
                    <div className="relative">
                         {cardDataEvents.map((item, index) => (
                              <div key={index} className="px-2">
                                   <Card {...item} onClick={openModal} />
                              </div>
                         ))}
                    </div>
               </div>

               {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 text-black overflow-auto" onClick={closeModal}>
                         <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                              <div className="relative">
                                   <img src={selectedImage.imgSrc} alt={selectedImage.title} className="w-full h-auto object-contain" />
                                   <button
                                        onClick={closeModal}
                                        className="absolute top-2 right-2 w-8 h-8 bg-gray-300 text-black p-2 rounded-full flex items-center justify-center focus:outline-none text-3xl"
                                   >
                                        &times;
                                   </button>
                              </div>
                              <div className="p-4">
                                   <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                                   <div className="flex flex-col gap-2">
                                        <div className="flex items-start md:items-center gap-1">
                                             <CiCalendarDate className="text-lg" />
                                             <p className="text-sm">Start Date <span>{selectedImage.startdate}</span></p>
                                        </div>
                                        <div className="flex items-start md:items-center gap-1">
                                             <IoCalendarNumberOutline className="text-lg" />
                                             <p className="text-sm">End Date <span>{selectedImage.enddate}</span></p>
                                        </div>
                                        {selectedImage.description && <p className="capitalize">{selectedImage.description}</p>}
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
}

export default SelectEventsSilder;
