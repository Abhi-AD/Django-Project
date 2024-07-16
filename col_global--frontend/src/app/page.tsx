import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white mb-6" style={{}}>
        <h1 className="text-2xl text-blue-600">
          Welcome to Col Global Organization
        </h1>
      </div>
      <a href="../login" className="mt-4 text-white bg-blue-500 font-semibold py-2 px-8 rounded mx-5 mb-6">Login</a>
      <Footer />
    </>
  );
}
