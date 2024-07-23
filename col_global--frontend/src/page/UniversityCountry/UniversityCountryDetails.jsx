import { GiRank3 } from "react-icons/gi";
import { FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReviewArticle from './ReviewArticle';
import CoursePricing from './CoursePricing';
import UniversityCountryDetailsGallery from './UniversityCountryDetailsGallery';
import cardDataTopUniversity from '../../data/cardDataTopUniversity';

const UniversityCountryDetails = () => {
  return (
    <div className="container mx-auto py-6 px-4 text-black">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white flex flex-col rounded-lg g-1 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-top">
            <div className="flex flex-col mb-4 gap-2 md:mb-0 md:mr-4">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{cardDataTopUniversity[0].title}</h1>
              <div className="flex flex-col md:flex-row gap-2 flex-wrap">
                <div className="flex items-center gap-1">
                  <GiRank3 className="text-sm md:text-base" />
                  <p>World Ranking: <span className="text-blue-500">123</span></p>
                </div>
                <div className="flex items-center gap-1">
                  <FaUserGraduate className="text-sm md:text-base" />
                  <p>Scholarship <span className="text-blue-500">Available</span></p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Link to={`/country/university/id/applyform`}>
                <button type="submit" className="bg-blue-800 text-white px-4 py-2 font-medium rounded-md hover:bg-blue-700 transition duration-200">Apply Now</button>
              </Link>
              <p className="text-gray-700">{cardDataTopUniversity[0].date}</p>
            </div>
            {/* <img
              src={cardDataTopUniversity[0].imgSrc}
              alt={cardDataTopUniversity[0].title}
              className="rounded-lg w-[-500px] h-[500px] md:w-80 mx-auto"
            /> */}
          </div>
          <div className="p-2 md:mt-10">
            <p className="text-gray-700 mb-2 md:mb-4">{cardDataTopUniversity[0].description} {cardDataTopUniversity[0].description} {cardDataTopUniversity[0].description} {cardDataTopUniversity[0].description}{cardDataTopUniversity[0].description}{cardDataTopUniversity[0].description}{cardDataTopUniversity[0].description}</p>
          </div>
        </div>
      </div>
      <CoursePricing />
      <UniversityCountryDetailsGallery />
      <ReviewArticle />
    </div >
  );
};

export default UniversityCountryDetails;
