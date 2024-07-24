
const LearninsideDetails = () => {
     return (
          <div className="min-h-screen bg-gray-50 p-8">
               <div className="max-w-5xl mx-auto rounded-lg">
                    <header className="border-b pb-4 mb-8">
                         <div className="flex flex-col gap-10 ">
                              <h1 className="text-2xl font-bold">Introduction to Microsoft Excel</h1>
                              <p className="text-gray-600">Taught in English | Video subtitles available</p>
                              <p className="mt-2">Instructor: <span className="font-semibold">Summer Scaggs</span></p>
                              <button className="bg-blue-600 text-white px-4 py-2 rounded">Enroll for Free</button>
                              <span className="text-gray-700">658,915 already enrolled</span>
                         </div>
                    </header>
                    <main className="flex">
                         <div className="flex-1">
                              <nav className="border-b mb-4">
                                   <ul className="flex space-x-4">
                                        <li className="pb-2 border-b-2 border-blue-600">About</li>
                                        <li className="pb-2 text-gray-600">Outcomes</li>
                                        <li className="pb-2 text-gray-600">Project details</li>
                                        <li className="pb-2 text-gray-600">Testimonials</li>
                                        <li className="pb-2 text-gray-600">Reviews</li>
                                   </ul>
                              </nav>

                              {/* About Section */}
                              <section>
                                   <h2 className="text-xl font-semibold mb-4">What youll learn</h2>
                                   <ul className="list-disc pl-5 mb-4">
                                        <li>Create an Excel spreadsheet and learn how to maneuver around the spreadsheet for data entry.</li>
                                        <li>Create simple formulas in an Excel spreadsheet to analyze data.</li>
                                   </ul>

                                   <h2 className="text-xl font-semibold mb-4">Skills youll practice</h2>
                                   <ul className="flex flex-wrap space-x-2">
                                        <li className="bg-gray-200 px-3 py-1 rounded">Formatting Excel Spreadsheets</li>
                                        <li className="bg-gray-200 px-3 py-1 rounded">Creating Basic Formulas in Excel Spreadsheets</li>
                                        <li className="bg-gray-200 px-3 py-1 rounded">Creating Excel Spreadsheets</li>
                                        <li className="bg-gray-200 px-3 py-1 rounded">Maneuvering around Excel Spreadsheets</li>
                                   </ul>
                              </section>

                              <section className="mt-8">
                                   <h2 className="text-xl font-semibold mb-4">Details to know</h2>
                                   <p className="flex items-center space-x-2">
                                        <span className="text-blue-700">LinkedIn</span>
                                        <span>Shareable certificate</span>
                                   </p>
                              </section>
                         </div>

                         {/* Sidebar Section */}
                         <aside className="w-1/3 pl-8">
                              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                   <h2 className="text-lg font-semibold mb-2">Guided Project</h2>
                                   <p className="text-gray-600">Learn, practice, and apply job-ready skills with expert guidance</p>
                                   <div className="mt-4">
                                        <p className="font-semibold">Intermediate level</p>
                                        <p className="text-gray-600">Recommended experience</p>
                                   </div>
                                   <div className="mt-4">
                                        <p className="font-semibold">1.5 hours</p>
                                        <p className="text-gray-600">Learn at your own pace</p>
                                   </div>
                                   <div className="mt-4">
                                        <p className="font-semibold">No downloads or installation required</p>
                                        <p className="text-gray-600">Only available on desktop</p>
                                   </div>
                                   <div className="mt-4">
                                        <p className="font-semibold">Hands-on learning</p>
                                        <p className="text-blue-600 cursor-pointer">Learn more</p>
                                   </div>
                                   <div className="mt-4 flex items-center space-x-2">
                                        <span className="text-4xl font-bold">4.6</span>
                                        <span className="text-gray-600">(7,203 reviews)</span>
                                   </div>
                              </div>
                         </aside>
                    </main>
               </div>
          </div>
     )
}

export default LearninsideDetails