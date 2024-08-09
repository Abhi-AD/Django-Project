import { FaAward, FaCheck } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { BiSolidDollarCircle } from "react-icons/bi";
const UniversityCourseHero = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
        <img
          src="https://img.freepik.com/free-vector/american-flag-with-firework-display-background_1017-32397.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid"
          alt="University Logo"
          className="md:w-24 md:h-24 w-full "
        />
        <div className="flex items-left flex-col">
          <h2 className="text-2xl font-bold">MSc Financial Management</h2>
          <p className="text-gray-500">At UNIVERSITY OF BIRMINGHAM</p>
          <div className="flex flex-wrap gap-2">
            <div className="flex gap-1 items-center">
              <CiLocationOn size={24} />
              <span>United Kingdom</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaAward size={24} />
              <span>Masters Degree (Taught)</span>
            </div>
            <div className="flex gap-1 items-center">
              <BiSolidDollarCircle size={24} />
              <span>$45K</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaAward size={24} />
              <span>$45K</span>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-col gap-1">
        <span className="font-bold text-xl">About the course</span>
        <p className="text-lg">Take control of your career in financial management. Our MSc Financial Management programme provides the knowledge and skills that will give you a significant edge in this competitive finance sector. At the heart of every economy, finance offers a world of interesting, challenging and highly lucrative career paths. Our programme is designed to strengthen the knowledge and skills you need to work in financial management and provide you with a significant edge in the competitive global sector. This course is for graduates with mathematical experience and an interest in working in the financial sector. This programme will give such university graduates the knowledge, skills and qualification(s) that they need to work in these industries. Financial Management graduates are in high demand from a wide range of top employers for their specialist skills. Our ever-growing relationship with key employers in the sector will provide you with the opportunity to meet and network with leading global organisations. You will study a variety of innovative topics that will prepare you for a global career, including foreign exchange markets, international treasury management, ethics, governance and regulation in treasury. You will gain knowledge of real-world investment challenges with an emphasis on ethical and sustainable business practices.</p>
        <span className={` text-sm rounded-full flex items-center gap-2 capitalize`}>
          <FaCheck className="bg-blue-500 p-1 rounded-full text-white text-lg" />Scholarships
        </span>
      </div>








    </div>
  );
};

export default UniversityCourseHero;
