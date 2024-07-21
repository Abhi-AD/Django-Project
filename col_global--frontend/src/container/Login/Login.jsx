import { FaFacebook, FaGoogle, FaLinkedinIn, FaLock, FaRegEnvelope } from "react-icons/fa";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row w-full max-w-4xl">
                    <div className="lg:w-3/5 p-5">
                        <div className="text-left font-bold">
                            <span className="text-blue-500">COL</span> Global
                        </div>
                        <div className="py-10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">Sign in to Account</h2>
                            <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
                            <div className="flex justify-center my-2">
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaFacebook className="text-sm" />
                                </a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaLinkedinIn className="text-sm" />
                                </a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaGoogle className="text-sm" />
                                </a>
                            </div>
                            <p className="text-gray-400 my-3">or use your email account</p>
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-full max-w-xs p-2 flex items-center mb-2">
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input type="email" name="email" placeholder="Enter your email address.." className="bg-gray-100 outline-none text-sm flex-1" />
                                </div>
                                <div className="bg-gray-100 w-full max-w-xs p-2 flex items-center mb-2">
                                    <FaLock className="text-gray-400 m-2" />
                                    <input type="password" name="password" placeholder="Enter your password" className="bg-gray-100 outline-none text-sm flex-1" />
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between w-full max-w-xs mb-5">
                                    <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1" />Remember me</label>
                                    <a href="#" className="text-xs mt-2 sm:mt-0">Forget Password?</a>
                                </div>
                                <button className="border-2 border-blue-500 text-blue-500 rounded-full px-8 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white">Sign In</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-24 px-8 lg:py-36 lg:px-12">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Hello, Friend!</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-2">Fill up personal information and start journey with us.</p>
                        <a href="../register" className="border-2 border-white rounded-full px-8 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
