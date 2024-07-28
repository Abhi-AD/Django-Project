import { useState } from 'react';

const UserInputComment = () => {
     const [isSignUp, setIsSignUp] = useState(false);

     return (
          <div className="flex justify-center items-center p-10 bg-gray-50">
               <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <div className="flex justify-center mb-4">
                         <button
                              onClick={() => setIsSignUp(false)}
                              className={`px-4 py-2 ${!isSignUp ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'} rounded-l-lg border`}
                         >
                              Sign In
                         </button>
                         <button
                              onClick={() => setIsSignUp(true)}
                              className={`px-4 py-2 ${isSignUp ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'} rounded-r-lg border`}
                         >
                              Sign Up
                         </button>
                    </div>
                    <div className="flex justify-center mb-6">
                         <button className="flex items-center justify-center w-1/2 px-4 py-2 mr-2 border rounded-lg">
                              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                              Google
                         </button>
                         <button className="flex items-center justify-center w-1/2 px-4 py-2 border rounded-lg">
                              <img src="https://img.icons8.com/ios-glyphs/16/000000/github.png" alt="GitHub" className="mr-2" />
                              GitHub
                         </button>
                    </div>
                    <div className="text-center text-gray-500 mb-6">OR</div>
                    {isSignUp ? (
                         <form>
                              <input
                                   type="text"
                                   placeholder="Name"
                                   className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                              />
                              <input
                                   type="email"
                                   placeholder="Email Address"
                                   className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                              />
                              <input
                                   type="password"
                                   placeholder="Password"
                                   className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                              />
                              <input
                                   type="password"
                                   placeholder="Confirm Password"
                                   className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                              />
                              <div className="mb-4">
                                   <input type="checkbox" className="mr-2" />
                                   <span className="text-gray-600">I agree to the <a href="#" className="text-blue-600">Terms and Conditions</a></span>
                              </div>
                              <button className="w-full bg-black text-white py-2 rounded-lg">Register</button>
                         </form>
                    ) : (
                         <form>
                              <input
                                   type="email"
                                   placeholder="Email Address"
                                   className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                              />
                              <input
                                   type="password"
                                   placeholder="Password"
                                   className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                              />
                              <button className="w-full bg-black text-white py-2 rounded-lg">Login</button>
                         </form>
                    )}
                    <div className="text-center mt-4">
                         {isSignUp ? (
                              <>
                                   Already have an account? <a href="#" className="text-blue-600" onClick={() => setIsSignUp(false)}>Log in</a>
                              </>
                         ) : (
                              <>
                                   Don&apso;t have an account? <a href="#" className="text-blue-600" onClick={() => setIsSignUp(true)}>Sign up</a>
                              </>
                         )}
                         <div className="mt-2">
                              <a href="#" className="text-blue-600">Reset your password?</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default UserInputComment;
