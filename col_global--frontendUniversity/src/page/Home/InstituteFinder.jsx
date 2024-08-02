import React from 'react'

const InstituteFinder = () => {
     return (
          <div className='max-w-screen-2xl mx-auto'>
               <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-3'>
                         <div className='flex items-start gap-2'>
                              <div className='w-2/5'>
                                   <h1 className='text-left text-3xl font-bold'>Find Your Best Institute Based On Your Need</h1>
                              </div>
                              <div className='w-3/5'>
                                   <p className='text-left text-2xl font-medium'>Curated result based on institute location, job search, available residence near institute, various activities, landmarks and more.</p>
                              </div>
                         </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                         <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 flex flex-col">
                              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                   <img
                                        src="https://img.freepik.com/free-photo/woman-sitting-wooden-table_23-2147816849.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid"
                                        alt="Wines"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                   />
                              </div>
                         </div>

                         <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 flex flex-col">
                              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                   <img
                                        src="https://img.freepik.com/free-photo/united-states-capitol-washington-dc_181624-52973.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid"
                                        alt="Gin"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                   />
                              </div>
                              <div className="grid gap-4 grid-cols-3">
                                   <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                        <img
                                             src="https://img.freepik.com/free-photo/positive-woman-making-notes-outdoor-cafe_1262-19014.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid"
                                             alt="Whiskey"
                                             className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        />
                                   </div>
                                   <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                        <img
                                             src="https://img.freepik.com/free-photo/ethnic-woman-with-usa-flag_23-2148167082.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid"
                                             alt="Vodka"
                                             className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        />
                                   </div>
                                   <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                        <img
                                             src="https://img.freepik.com/premium-photo/female-graduate-with-big-smile-large-blue-ribbon_978137-16123.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid"
                                             alt="Vodka"
                                             className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>



          </div>
     )
}

export default InstituteFinder