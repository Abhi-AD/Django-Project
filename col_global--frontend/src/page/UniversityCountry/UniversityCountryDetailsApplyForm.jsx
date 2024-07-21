import { useState } from 'react';

const UniversityCountryDetailsApplyForm = () => {
     const [isSubmitted, setIsSubmitted] = useState(false);
     const [feeValue, setFeeValue] = useState(0);
     const [formData, setFormData] = useState({
          name: '',
          age: '',
          gender: '',
          course: '',
          time: '',
          services: [],
          fee: 0,
          message: '',
     });

     const genderOptions = ["Male", "Female", "Other"];
     const courseOptions = ["Technology", "Cyber", "Networking"];
     const timeOptions = ["Morning", "Day", "Evening"];
     const serviceOptions = ["Health and Wellness", "Academic Services", "Financial Services"];

     const handleSubmit = (e) => {
          e.preventDefault();
          setFormData({
               name: e.target.name.value,
               age: e.target.age.value,
               gender: e.target.gender.value,
               course: e.target.course.value,
               time: e.target.time.value,
               services: Array.from(e.target['service[]'])
                    .filter((checkbox) => checkbox.checked)
                    .map((checkbox) => checkbox.value),
               fee: feeValue,
               message: e.target.message.value,
          });
          setIsSubmitted(true);
          setTimeout(() => {
               setIsSubmitted(false);
          }, 10000);
     };

     const handleClose = () => {
          setIsSubmitted(false);
     };

     const handleFeeChange = (e) => {
          setFeeValue(e.target.value);
     };

     return (
          <div className="bg-white dark:bg-white-900 top-0 z-50">
               <div className="bg-white  rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
                    <h2 className="text-2xl font-medium mb-4">College Booking</h2>
                    {isSubmitted && (
                         <div className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4 mb-4 relative" role="alert">
                              <button
                                   onClick={handleClose}
                                   className="absolute top-2 right-2 text-green-600 hover:text-green-800"
                                   aria-label="Close"
                              >
                                   &times;
                              </button>
                              <p className="font-bold">Success</p>
                              <p>
                                   Congratulations, {formData.name}! You have applied for the {formData.course} course.
                              </p>
                              <p>
                                   Fee Price Range: ${formData.fee}
                              </p>
                              <p>
                                   We have received your application for the {formData.time} session.
                              </p>
                         </div>
                    )}
                    <form onSubmit={handleSubmit}>
                         <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                              <input
                                   type="text"
                                   id="name"
                                   name="name"
                                   className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                                   required
                              />
                         </div>
                         <div className="mb-4">
                              <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age</label>
                              <input
                                   type="number"
                                   id="age"
                                   name="age"
                                   className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                                   required
                              />
                         </div>
                         <div className="mb-4">
                              <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
                              <select
                                   id="gender"
                                   name="gender"
                                   className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                                   required
                              >
                                   <option value="">Select gender</option>
                                   {genderOptions.map((gender) => (
                                        <option key={gender} value={gender.toLowerCase()}>{gender}</option>
                                   ))}
                              </select>
                         </div>
                         <div className="mb-4">
                              <label htmlFor="course" className="block text-gray-700 font-medium mb-2">Course</label>
                              <select
                                   id="course"
                                   name="course"
                                   className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                                   required
                              >
                                   <option value="">Select course</option>
                                   {courseOptions.map((course) => (
                                        <option key={course} value={course.toLowerCase()}>{course}</option>
                                   ))}
                              </select>
                         </div>
                         <div className="mb-4">
                              <label className="block text-gray-700 font-medium mb-2">Time</label>
                              <div className="flex flex-wrap -mx-2 md:flex-row flex-col">
                                   {timeOptions.map((time, index) => (
                                        <div key={index} className="px-2 w-full md:w-1/3">
                                             <label htmlFor={`time-${time.toLowerCase()}`} className="block text-gray-700 font-medium mb-2">
                                                  <input
                                                       type="radio"
                                                       id={`time-${time.toLowerCase()}`}
                                                       name="time"
                                                       value={time.toLowerCase()}
                                                       className="mr-2"
                                                  />
                                                  {time}
                                             </label>
                                        </div>
                                   ))}
                              </div>
                         </div>
                         <div className="mb-4">
                              <label className="block text-gray-700 font-medium mb-2">Service</label>
                              <div className="flex flex-wrap -mx-2 md:flex-row flex-col">
                                   {serviceOptions.map((service) => (
                                        <div key={service} className="px-2 w-full md:w-1/3">
                                             <label htmlFor={`service-${service.toLowerCase()}`} className="block text-gray-700 font-medium mb-2">
                                                  <input
                                                       type="checkbox"
                                                       id={`service-${service.toLowerCase()}`}
                                                       name="service[]"
                                                       value={service.toLowerCase()}
                                                       className="mr-2"
                                                  />
                                                  {service}
                                             </label>
                                        </div>
                                   ))}
                              </div>
                         </div>
                         <div className="mb-4">
                              <label htmlFor="fee" className="block text-gray-700 font-medium mb-2">Fee Price Range</label>
                              <input
                                   type="range"
                                   id="fee"
                                   name="fee"
                                   className="w-full border-0"
                                   min="50"
                                   max="10000"
                                   step="1"
                                   value={feeValue}
                                   onChange={handleFeeChange}
                              />
                              <div className="text-gray-700 mt-2">${feeValue}</div>
                         </div>
                         <div className="mb-4">
                              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                              <textarea
                                   id="message"
                                   name="message"
                                   className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                                   rows="5"
                              ></textarea>
                         </div>
                         <div>
                              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default UniversityCountryDetailsApplyForm;
