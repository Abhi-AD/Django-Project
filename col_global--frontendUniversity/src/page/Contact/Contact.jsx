import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ContactSchema } from "../../schema/requirement";

const Contact = () => {
     const baseUrl = import.meta.env.VITE_API_URL;
     const [alert, setAlert] = useState({ message: '', type: '' });

     const defaultValues = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
     };

     const { register, handleSubmit, formState: { errors } } = useForm({
          defaultValues,
          resolver: yupResolver(ContactSchema)
     });

     const createContact = async (value) => {
          console.log('Sending contact data:', value);
          try {
               const response = await axios.post(`${baseUrl}/contact`, value);
               if (response.status === 200) {
                    setAlert({ message: ['Your message has been sent successfully. Thank you for reaching out!'], type: 'success' });
               } else {
                    console.error('Unexpected response status:', response.status);
                    setAlert({ message: ['An unexpected error occurred. Please try submitting the form again.'], type: 'error' });
               }
          } catch (error) {
               if (error.response && error.response.data && error.response.data.errors) {
                    const validationErrors = error.response.data.errors;
                    const errorMessages = Object.keys(validationErrors).map((field) => validationErrors[field]);
                    setAlert({ message: errorMessages, type: 'error' });
               } else if (error.response && error.response.data && error.response.data.message) {
                    setAlert({ message: [error.response.data.message], type: 'error' });
               } else {
                    setAlert({ message: ['An error occurred while submitting your message. Please try again later.'], type: 'error' });
               }
          }
     };



     const onSubmit = async (data) => {
          console.log('Form data:', data);
          const formData = {
               name: data?.name,
               email: data?.email,
               phone: data?.phone,
               subject: data?.subject,
               message: data?.message,
          };
          createContact(formData);
     };

     useEffect(() => {
          if (alert.message) {
               const timer = setTimeout(() => {
                    setAlert({ message: '', type: '' });
               }, 300000);

               return () => clearTimeout(timer);
          }
     }, [alert.message]);

     const closeAlert = () => {
          setAlert({ message: '', type: '' });
     };

     return (
          <section className="bg-blue-200 text-black" id="contact">
               <section>
                    <div id="map" className="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3973.019247258769!2d85.31598053246842!3d27.72188686254738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d27.721342!2d85.3192503!4m3!3m2!1d27.7212933!2d85.31927979999999!5e0!3m2!1sen!2snp!4v1721987126791!5m2!1sen!2snp"
                              width="100%" height="600" className="border-0" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="container px-6 mx-auto md:px-12">
                         <div className="block rounded-lg bg-white bg-opacity-80 px-6 py-12 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border-gray-300">
                              <div className="flex flex-col gap-10">
                                   <p className="font-bold text-4xl">Contact Us</p>
                                   <div className="flex flex-wrap">
                                        <div className="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                             <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
                                                  <div className="relative mb-6">
                                                       {alert.message && (
                                                            <div className={`relative border-l-2 p-4 ${alert.type === 'success' ? 'bg-green-200 border-green-600 text-green-600' : 'bg-red-200 border-red-600 text-red-600'}`} role="alert">
                                                                 <button
                                                                      type="button"
                                                                      onClick={closeAlert}
                                                                      className="absolute top-2 right-2 text-xl font-bold text-gray-600"
                                                                 >
                                                                      &times;
                                                                 </button>
                                                                 <p className="font-bold">
                                                                      {alert.type === 'success' ? 'Success' : 'Submit failed'}
                                                                 </p>
                                                                 {alert.message.map((msg, index) => (
                                                                      <p key={index}>{msg}</p>
                                                                 ))}
                                                            </div>
                                                       )}

                                                       <label htmlFor="nameInput"><strong>Name:</strong></label>
                                                       <input type="text" {...register('name')}
                                                            className="peer block w-full rounded border-2 bg-transparent py-1 px-3 leading-6 outline-none transition duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                                                            id="nameInput" />
                                                       {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                                                  </div>
                                                  <div className="relative mb-6">
                                                       <label htmlFor="emailInput"><strong>Email:</strong></label>
                                                       <input type="email" {...register('email')}
                                                            className="peer block w-full rounded border-2 bg-transparent py-1 px-3 leading-6 outline-none transition duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                                                            id="emailInput" />
                                                       {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                                                  </div>
                                                  <div className="relative mb-6">
                                                       <label htmlFor="subjectInput"><strong>Subject:</strong></label>
                                                       <input type="text" {...register('subject')}
                                                            className="peer block w-full rounded border-2 bg-transparent py-1 px-3 leading-6 outline-none transition duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                                                            id="subjectInput" />
                                                       {errors.subject && <p className="text-red-600">{errors.subject.message}</p>}
                                                  </div>
                                                  <div className="relative mb-6">
                                                       <label htmlFor="phoneInput"><strong>Phone Number:</strong></label>
                                                       <input type="tel" {...register('phone')}
                                                            className="peer block w-full rounded border-2 bg-transparent py-1 px-3 leading-6 outline-none transition duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                                                            id="phoneInput" />
                                                       {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
                                                  </div>
                                                  <div className="relative mb-6">
                                                       <label htmlFor="messageInput"><strong>Message:</strong></label>
                                                       <textarea {...register('message')}
                                                            className="peer block w-full rounded border-2 bg-transparent py-1 px-3 leading-6 outline-none transition duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                                                            id="messageInput" rows="3"></textarea>
                                                       {errors.message && <p className="text-red-600">{errors.message.message}</p>}
                                                  </div>
                                                  <div className="mb-6 flex items-center">
                                                       <input type="checkbox" className="mr-2 rounded border-blue-300 outline-none cursor-pointer checked:before:opacity-100 checked:focus:before:shadow-[0px_0px_0px_13px_red-500] transition duration-200"
                                                            id="dataConsent" />
                                                       <label htmlFor="dataConsent" className="text-neutral-500">I agree to the processing of my personal data</label>
                                                  </div>
                                                  <div className="text-left">
                                                       <button type="submit" className="w-40 md:w-48 bg-blue-800 text-white px-6 py-3 font-medium rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
                                                  </div>
                                             </form>
                                        </div>
                                        <div className="w-full md:px-3 lg:w-7/12 lg:px-6">
                                             <div className="flex flex-wrap items-start justify-between">
                                                  <div className="mb-12 w-full lg:pr-6">
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
                                                  <div className="w-full flex flex-wrap items-center gap-8">
                                                       <FaYoutube className="text-4xl text-[#FF0000]" />
                                                       <FaInstagram className="text-4xl text-[#E1306C]" />
                                                       <FaTwitter className="text-4xl text-[#1DA1F2]" />
                                                  </div>
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

export default Contact;
