import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact1 = () => {
     return (
          <section className={` bg-blue-200 text-black`} id="contact">
               <section className="mb-32">
                    <div id="map" className="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3973.019247258769!2d85.31598053246842!3d27.72188686254738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d27.721342!2d85.3192503!4m3!3m2!1d27.7212933!2d85.31927979999999!5e0!3m2!1sen!2snp!4v1721987126791!5m2!1sen!2snp"
                              width="100%" height="600" className="border-0" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="container px-6 mx-auto md:px-12">
                         <div className={`block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]  border-gray-300`}>
                              <div className="flex flex-wrap">
                                   <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                        <form className="text-black">
                                             <div className="relative mb-6">
                                                  <input type="text"
                                                       className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                                       id="exampleInput90" />
                                                  <label
                                                       className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                                       htmlFor="exampleInput90">Name
                                                  </label>
                                             </div>
                                             <div className="relative mb-6">
                                                  <input type="email"
                                                       className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                                       id="exampleInput91" />
                                                  <label
                                                       className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                                       htmlFor="exampleInput91">Email address
                                                  </label>
                                             </div>
                                             <div className="relative mb-6">
                                                  <input type="email"
                                                       className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                                       id="exampleInput91" />
                                                  <label
                                                       className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                                       htmlFor="exampleInput91">Subject
                                                  </label>
                                             </div>
                                             <div className="relative mb-6">
                                                  <input type="email"
                                                       className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                                       id="exampleInput91" />
                                                  <label
                                                       className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                                       htmlFor="exampleInput91">Phone Number
                                                  </label>
                                             </div>
                                             <div className="relative mb-6">
                                                  <textarea
                                                       className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                                       id="exampleFormControlTextarea1" rows="3"></textarea>
                                                  <label htmlFor="exampleFormControlTextarea1"
                                                       className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Message</label>
                                             </div>
                                             <div className="mb-6 inline-block min-h-[1.5rem] justify-left pl-[1.5rem] md:flex">
                                                  <input
                                                       className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-blue-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-['']  checked:before:opacity-[100] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_red-500] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-blue-500 checked:focus:after:bg-transparent"
                                                       type="checkbox"
                                                       value=""
                                                       id="exampleCheck96"
                                                  />
                                                  <label htmlFor="exampleCheck96"
                                                       className="ml-2 inline-block text-neutral-500">I agree to the processing of my personal data
                                                  </label>
                                             </div>
                                             <div className="text-left">
                                                  <button type="submit" className="w-40 md:w-48 bg-blue-800 text-white px-6 py-3 font-medium rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
                                             </div>
                                        </form>
                                   </div>
                                   <div className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-7/12 lg:px-6">
                                        <div className="flex flex-wrap items-start justify-between">
                                             <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:pr-6">
                                                  <div className="mb-12 flex items-center">
                                                       <div className="mr-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                                                            <FaMapMarkerAlt className="text-2xl" />
                                                       </div>
                                                       <div>
                                                            <p className="text-xl font-semibold text-primary">Location</p>
                                                            <p className="text-neutral-500 mt-1">Lazimpat, Kathmandu</p>
                                                       </div>
                                                  </div>
                                                  <div className="mb-12 flex items-center">
                                                       <div className="mr-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                                                            <FaPhoneAlt className="text-2xl" />
                                                       </div>
                                                       <div>
                                                            <p className="text-xl font-semibold text-primary">Phone</p>
                                                            <p className="text-neutral-500 mt-1">+977 9851208005</p>
                                                       </div>
                                                  </div>
                                                  <div className="mb-12 flex items-center">
                                                       <div className="mr-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                                                            <FaClock className="text-2xl" />
                                                       </div>
                                                       <div>
                                                            <p className="text-xl font-semibold text-primary">Hours</p>
                                                            <p className="text-neutral-500 mt-1">Mon-Fri: 9:00 AM - 5:00 PM</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className=" w-full flex flex-wrap items-center gap-8">
                                                  <FaYoutube className="text-4xl text-[#FF0000]" />
                                                  <FaInstagram className="text-4xl text-[#E1306C]" />
                                                  <FaTwitter className="text-4xl text-[#1DA1F2]" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </section>
     );
};

export default Contact1;
