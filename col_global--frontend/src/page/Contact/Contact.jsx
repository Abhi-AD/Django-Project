import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
     return (
          <section className="bg-blue-50 dark:bg-slate-800" id="contact">
               <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4 text-left">
                         <div className="mb-2 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                                   Contact
                              </p>
                              <h2 className="font-heading mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-3xl">
                                   Get in Touch
                              </h2>
                              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                   Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                              </p>
                         </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                         <div className="grid md:grid-cols-2 gap-2">
                              <div className="card h-fit max-w-6xl md:p-1 md:max-w-4xl" id="form">
                                   <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                                   <form id="contactForm" className="space-y-4">
                                        <div>

                                             <label htmlFor="name" className="block pb-1 text-xs uppercase tracking-wide text-gray-700 dark:text-gray-300">Name</label>
                                             <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="w-full  md:w-96 rounded-md border border-gray-400 py-2 px-4 shadow-md dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none" name="name" />
                                        </div>
                                        <div>
                                             <label htmlFor="email" className="block pb-1 text-xs uppercase tracking-wide text-gray-700 dark:text-gray-300">Email</label>
                                             <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="w-full  md:w-96 rounded-md border border-gray-400 py-2 px-4 shadow-md dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none" name="email" />
                                        </div>
                                        <div>
                                             <label htmlFor="phone" className="block pb-1 text-xs uppercase tracking-wide text-gray-700 dark:text-gray-300">Phone</label>
                                             <input type="tel" id="phone" autoComplete="tel" placeholder="Your phone number" className="w-full  md:w-96 rounded-md border border-gray-400 py-2 px-4 shadow-md dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none" name="phone" />
                                        </div>
                                        <div>
                                             <label htmlFor="subject" className="block pb-1 text-xs uppercase tracking-wide text-gray-700 dark:text-gray-300">Subject</label>
                                             <input type="text" id="subject" autoComplete="subject" placeholder="Your subject" className="w-full  md:w-96 rounded-md border border-gray-400 py-2 px-4 shadow-md dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none" name="subject" />
                                        </div>
                                        <div>
                                             <label htmlFor="message" className="block pb-1 text-xs uppercase tracking-wide text-gray-700 dark:text-gray-300">Message</label>
                                             <textarea id="message" name="message" rows="4" placeholder="Write your message..." className="w-full  md:w-96 rounded-md border border-gray-400 py-2 px-4 shadow-md dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:outline-none"></textarea>
                                        </div>
                                        <div className="text-left">
                                             <button type="submit" className="w-40 md:w-48 bg-blue-800 text-white px-6 py-3 font-medium rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
                                        </div>

                                   </form>
                                   {/* <ul className="mt-6 space-y-6">
                                        <li className="flex">
                                             <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                  <FaMapMarkerAlt className="text-xl" />
                                             </div>
                                             <div className="ml-4">
                                                  <h3 className="mb-1 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                                                  <p className="text-gray-600 dark:text-slate-400">Lazimpat, Kathmandu</p>
                                             </div>
                                        </li>
                                        <li className="flex">
                                             <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                  <FaPhoneAlt className="text-xl" />
                                             </div>
                                             <div className="ml-4">
                                                  <h3 className="mb-1 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                                                  <p className="text-gray-600 dark:text-slate-400">Mobile: +977 9851208005</p>
                                             </div>
                                        </li>
                                        <li className="flex">
                                             <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                  <FaClock className="text-xl" />
                                             </div>
                                             <div className="ml-4">
                                                  <h3 className="mb-1 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working hours</h3>
                                                  <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                                  <p className="text-gray-600 dark:text-slate-400">Saturday & Sunday: 08:00 - 12:00</p>
                                             </div>
                                        </li>
                                   </ul> */}
                              </div>
                              <div className="h-full md:w-full md:h-full">
                                   <iframe
                                        width="600"
                                        height="500"
                                        frameBorder="0"
                                        style={{ border: 0, borderRadius: '10px' }}
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.46923387120768!2d85.32107667175656!3d27.72266675325045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1720005578231!5m2!1sen!2snp"
                                        allowFullScreen
                                        title="Map"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                   />
                              </div>
                         </div>
                    </div>


                    <div className="mb-4 mt-40 flex justify-center items-center">
                         <div className="mb-2 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                              <h2 className="font-heading mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-3xl">
                                   Join Us
                              </h2>
                              <ul className="mt-6 space-y-6">
                                   <li className="flex gap-9 justify-center">
                                        <FaYoutube className="text-5xl text-[#FF0000]" />
                                        <FaInstagram className="text-5xl text-[#E1306C]" />
                                        <FaTwitter className="text-5xl text-[#1DA1F2]" />
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div >
          </section >
     );
}

export default Contact;
