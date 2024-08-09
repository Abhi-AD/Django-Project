import { useEffect, useState } from "react";

const InstituteFinder = () => {
     const [activeIndex, setActiveIndex] = useState(0);

     const institutes = [
          {
               title: " Unlock Your Potential",
               description: "Unlock endless opportunities in the USA, where education, career, and adventure come together in a land of limitless potential.",
               imgSrc1: "https://img.freepik.com/free-photo/woman-sitting-wooden-table_23-2147816849.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
               imgSrc2: "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
               imgSrc3: "https://img.freepik.com/free-photo/statue-liberty-with-cloudy-beautiful-sky_181624-1112.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
               imgSrc4: "https://img.freepik.com/free-photo/view-statue-liberty-new-york-city_23-2150860843.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
               imgSrc5: "https://img.freepik.com/free-photo/beautiful-view-empire-states-skyscrapers-new-york-city_181624-6295.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
          },
          {
               title: " The Land of Opportunity and Adventure",
               description: "Experience Australia’s vibrant culture and world-class opportunities, where adventure and success go hand in hand.",
               imgSrc1: "https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
               imgSrc2: "https://img.freepik.com/premium-photo/downtown-sydney-skyline-australia-from-top-view-twilight_255553-249.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
               imgSrc3: "https://img.freepik.com/premium-photo/city-skyline-sydney-australia-circular-quay-opera-house-touristic-poin-generative-ai_874904-105298.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
               imgSrc4: "https://img.freepik.com/premium-photo/sydney-opera-house-is-lit-up-evening-sun_99096-14721.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
               imgSrc5: "https://img.freepik.com/premium-photo/downtown-sydney-skyline-australia-twilight_943166-5235.jpg?ga=GA1.2.1316153257.1720414611&semt=ais_hybrid",
          },
     ];
     useEffect(() => {
          const interval = setInterval(() => {
               setActiveIndex((prevIndex) => (prevIndex === institutes.length - 1 ? 0 : prevIndex + 1));
          }, 5000);

          return () => clearInterval(interval);
     }, [institutes.length]);
     return (
          <div className='paddingcontainer paddingbuttom'>
               {institutes.map((institute, index) => (
                    <div key={index} className={` duration-700 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`} data-carousel-item>
                         <div className="flex flex-col gap-3">
                              <div className='flex flex-col gap-3'>
                                   <div className='flex flex-col md:flex-row items-start gap-2'>
                                        <div className='md:w-2/5'>
                                             <h1 className='text-left text-2xl md:text-3xl font-bold'>{institute.title}</h1>
                                        </div>
                                        <div className='md:w-3/5'>
                                             <p className='text-left text-xl md:text-2xl'>{institute.description}</p>
                                        </div>
                                   </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full w-full rounded-lg">
                                   <div className="col-span-2 sm:col-span-1 md:col-span-2 rounded-lg flex flex-col">
                                        <div className="group relative flex flex-col overflow-hidden rounded-lg  flex-grow">
                                             <img
                                                  src={institute.imgSrc1}
                                                  alt="Institute 1"
                                                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                             />
                                        </div>
                                   </div>

                                   <div className="col-span-2 sm:col-span-1 md:col-span-3 flex flex-col">
                                        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                             <img
                                                  src={institute.imgSrc2}
                                                  alt={institute.title}
                                                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                             />
                                        </div>
                                        <div className="grid gap-4 grid-cols-3">
                                             <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                                  <img
                                                       src={institute.imgSrc3}
                                                       alt="Institute 3"
                                                       className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                  />
                                             </div>
                                             <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                                  <img
                                                       src={institute.imgSrc4}
                                                       alt="Institute 4"
                                                       className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                  />
                                             </div>
                                             <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                                  <img
                                                       src={institute.imgSrc5}
                                                       alt="Institute 5"
                                                       className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     );
}

export default InstituteFinder;
