import { GiRank3 } from "react-icons/gi";
import { FaUserGraduate } from 'react-icons/fa';
import cardDataTopUniversity from '../../data/cardDataTopUniversity';
import useDarkMode from "../../hooks/useDarkMode";

const UniversityCountryDetails = () => {
  const { DarkMode } = useDarkMode();
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className=" flex flex-col rounded-lg g-1 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-top">
          <div className="flex flex-col mb-4 gap-2 md:mb-0 md:mr-4">
            <h1 className="text-3xl md:text-3xl font-bold mb-2 md:mb-4">{cardDataTopUniversity[0].title}</h1>
            <div className="flex text-lg md:text-base flex-col md:flex-row gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <GiRank3 />
                <p>World Ranking: <span className={`${DarkMode ? '' : 'text-blue-500'}`}>123</span></p>
              </div>
              <div className="flex items-center gap-1">
                <FaUserGraduate className="text-sm md:text-base" />
                <p>Scholarship <span className={`${DarkMode ? '' : 'text-blue-500'}`}>Available</span></p>
              </div>
            </div>
          </div>
          {/* <img
            src={cardDataTopUniversity[0].imgSrc}
            alt={cardDataTopUniversity[0].title}
            className="rounded-lg w-[-500px] h-[500px] md:w-80 mx-auto"
          /> */}
        </div>
        <div className="p-2 md:mt-2">
          <p className={` text-lg ${DarkMode ? '' : 'text-gray-700'} mb-2 md:mb-4`}>{cardDataTopUniversity[0].description} {cardDataTopUniversity[0].description} {cardDataTopUniversity[0].description} {cardDataTopUniversity[0].description}{cardDataTopUniversity[0].description}{cardDataTopUniversity[0].description}{cardDataTopUniversity[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default UniversityCountryDetails;
