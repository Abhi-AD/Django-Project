import { FaAward, FaCheck, FaDollarSign } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCreditScore } from 'react-icons/md';
import { IoLanguage } from 'react-icons/io5';
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
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">OverView</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div className="flex items-start  gap-2">
            <CiLocationOn className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
            <div className='flex flex-col gap-1'>
              <div className="font-bold">Location</div>
              <div>United Kingdom</div>
            </div>
          </div>
          <div className="flex items-start  gap-2">
            <FaAward className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
            <div className='flex flex-col gap-1'>
              <div className="font-bold">Qualification</div>
              <div>Masters Degree (Taught)</div>
            </div>
          </div>
          <div className="flex items-start  gap-2">
            <FaDollarSign className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
            <div className='flex flex-col gap-1'>
              <div className="font-bold">Fees</div>
              <div>$45K</div>
            </div>
          </div>
          <div className="flex items-start  gap-2">
            <MdOutlineCreditScore className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
            <div className='flex flex-col gap-1'>
              <div className="font-bold">Entry Score</div>
              <div>6.5 IELTS</div>
            </div>
          </div>
          <div className="flex items-start  gap-2">
            <IoLanguage className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
            <div className='flex flex-col gap-1'>
              <div className="font-bold">Language</div>
              <div>Germany, English</div>
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
