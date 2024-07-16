import { FaEnvelope, FaEye, FaUser } from "react-icons/fa";

export default function Register() {
     return (
          <div className="bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
               <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
                    <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
                         <div>
                              <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
                              <p className=" text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
                         </div>
                         <div>
                              <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
                              <p className=" text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
                         </div>
                    </div>

                    <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
                         <div className="mb-6">
                              <h3 className="text-gray-800 text-2xl font-bold">Create an account</h3>
                         </div>

                         <div className="space-y-6">
                              <div>
                                   <label className="text-gray-800 text-sm mb-2 block">Name</label>
                                   <div className="relative flex items-center">
                                        <input name="name" type="text" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
                                        <FaUser className="w-4 h-4 absolute right-4 text-slate-400" />
                                   </div>
                              </div>

                              <div>
                                   <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                                   <div className="relative flex items-center">
                                        <input name="email" type="email" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                        <FaEnvelope className="w-4 h-4 absolute right-4 text-slate-400" />
                                   </div>
                              </div>

                              <div>
                                   <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                   <div className="relative flex items-center">
                                        <input name="password" type="password" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
                                        <FaEye className="w-4 h-4 absolute right-4 text-slate-400" />
                                   </div>
                              </div>

                              <div className="flex items-center">
                                   <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                   <label className="ml-3 block text-sm text-gray-800">
                                        I accept the <a href="" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                   </label>
                              </div>
                         </div>

                         <div className="!mt-12">
                              <button type="button" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                                   Create an account
                              </button>
                         </div>
                         <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="../login" className="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
                    </form>
               </div>
          </div>
     );
}
