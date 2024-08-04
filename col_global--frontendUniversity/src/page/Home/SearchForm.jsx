
const SearchForm = () => {
     return (
          <form className="flex justify-center items-center sticky h z-50 bg-white">
               <div className="border-2 border-slate-200 rounded-full flex items-center">
                    {Array(4).fill().map((_, index) => (
                         <div key={index} className="group select">
                              <div className=" after:border-slate-800/20 flex justify-center items-center after:h-6 hover:bg-slate-200/30 rounded-full group-hover:after:border-transparent">
                                   <div className="px-8 py-4">
                                        <label htmlFor={`country-${index}`}>
                                             <p>Country</p>
                                             <select
                                                  name="country"
                                                  id={`country-${index}`}
                                                  className="appearance-none text-slate-400 focus-within:outline-none bg-transparent"
                                             >
                                                  <option value="" disabled selected>
                                                       Select your option
                                                  </option>
                                                  <option value="London" className="text-black">
                                                       London
                                                  </option>
                                                  <option value="USA" className="text-black">
                                                       USA
                                                  </option>
                                                  <option value="Thailand" className="text-black">
                                                       Thailand
                                                  </option>
                                             </select>
                                        </label>
                                   </div>
                              </div>
                         </div>
                    ))}
                    <div className="pr-2">
                         <button type="submit" className="px-8 py-5 bg-blue-400 rounded-full text-white">
                              Search
                         </button>
                    </div>
               </div>
          </form>
     );
};

export default SearchForm;
