import { useEffect, useState } from "react";

const InstituteFinder = () => {
     const [activeIndex, setActiveIndex] = useState(0);

     const institutes = [
          {
               title: "Find Your Best Institute Based On Your Need",
               description: "Curated result based on institute location, job search, available residence near institute, various activities, landmarks and more.",
               imgSrc1: "https://img.freepik.com/free-photo/woman-sitting-wooden-table_23-2147816849.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
               imgSrc2: "https://img.freepik.com/free-photo/united-states-capitol-washington-dc_181624-52973.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
               imgSrc3: "https://img.freepik.com/free-photo/positive-woman-making-notes-outdoor-cafe_1262-19014.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
               imgSrc4: "https://img.freepik.com/free-photo/ethnic-woman-with-usa-flag_23-2148167082.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
               imgSrc5: "https://img.freepik.com/premium-photo/female-graduate-with-big-smile-large-blue-ribbon_978137-16123.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
          },
          {
               title: "Find Your Best Institute Based On Your Need",
               description: "Curated result based on institute location, job search, available residence near institute, various activities, landmarks and more.",
               imgSrc1: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=sph",
               imgSrc2: "https://img.freepik.com/free-photo/united-states-capitol-washington-dc_181624-52973.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
               imgSrc3: "https://img.freepik.com/free-photo/positive-woman-making-notes-outdoor-cafe_1262-19014.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
               imgSrc4: "https://img.freepik.com/free-photo/ethnic-woman-with-usa-flag_23-2148167082.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
               imgSrc5: "https://img.freepik.com/premium-photo/female-graduate-with-big-smile-large-blue-ribbon_978137-16123.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid",
          },
     ];
     useEffect(() => {
          const interval = setInterval(() => {
               setActiveIndex((prevIndex) => (prevIndex === institutes.length - 1 ? 0 : prevIndex + 1));
          }, 5000);

          return () => clearInterval(interval);
     }, [institutes.length]);
     return (
          <div className='max-w-screen-2xl mx-auto p-4'>
               {institutes.map((institute, index) => (
                    <div key={index} className={` duration-700 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`} data-carousel-item>
                         <div className="flex flex-col gap-3">
                              <div className='flex flex-col gap-3'>
                                   <div className='flex flex-col md:flex-row items-start gap-2'>
                                        <div className='md:w-2/5'>
                                             <h1 className='text-left text-2xl md:text-3xl font-bold'>{institute.title}</h1>
                                        </div>
                                        <div className='md:w-3/5'>
                                             <p className='text-left text-xl md:text-2xl font-medium'>{institute.description}</p>
                                        </div>
                                   </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full w-full rounded-lg">
                                   <div className="col-span-2 sm:col-span-1 md:col-span-2 rounded-lg flex flex-col">
                                        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
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
                                                  alt="Institute 2"
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
