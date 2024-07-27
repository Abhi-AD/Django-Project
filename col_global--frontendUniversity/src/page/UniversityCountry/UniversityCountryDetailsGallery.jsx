import cardCollageImage from "../../data/cardCollageImage";

const UniversityCountryDetailsGallery = () => {
     return (
          <div className="">
               <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-left mb-8">Popular Place</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                         {cardCollageImage.map((image, index) => (
                              <div key={index} className={`relative overflow-hidden rounded-2xl shadow-lg group ${image.span || ''}`}>
                                   <img src={image.src} alt={image.title} className="w-full h-48 md:h-full object-cover" />
                                   <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                             <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                                             {image.description && <p className="text-white">{image.description}</p>}
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default UniversityCountryDetailsGallery;
