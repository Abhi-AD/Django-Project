import { useState } from 'react';
import { GiRank3 } from "react-icons/gi";
import { FaMinus, FaPlus, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReviewArticle from './ReviewArticle';
import CoursePricing from './CoursePricing';
import UniversityCountryDetailsGallery from './UniversityCountryDetailsGallery';
import cardDataTopUniversity from '../../data/cardDataTopUniversity';

const UniversityCountryDetails = () => {
  const tableOfContents = [
    { id: 1, title: "title 1", lessons: ["lesson 1", "lesson 2"] },
    { id: 2, title: "title 2", lessons: ["lesson 1", "lesson 2"] },
    { id: 3, title: "title 3", lessons: ["lesson 1", "lesson 2"] },
    { id: 4, title: "title 4  ", lessons: ["lesson 1", "lesson 2"] },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-6 px-4 text-black">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white flex flex-col rounded-lg g-2 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
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
              <Link to={`/country/university/id/applyform`}>
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-4 py-2 font-medium rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Apply Now
                </button>
              </Link>
              <p className="text-gray-700">{cardDataTopUniversity[0].date}</p>
            </div>
            <img
              src={cardDataTopUniversity[0].imgSrc}
              alt="ABC University"
              className="rounded-lg w-full md:w-80 mx-auto"
            />
          </div>
          <div className="p-2 md:mt-10">
            <p className="text-gray-700 mb-2 md:mb-4">{cardDataTopUniversity[0].description}</p>
          </div>
        </div>


        <div>
          <h1 className="text-3xl mb-8 font-bold">Table of Contents</h1>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li
                key={item.id}
                className="text-xl bg-blue-500 text-white p-2 rounded-lg border border-transparent hover:border-blue-500 hover:bg-transparent hover:text-black cursor-pointer"
                onClick={() => item.lessons && handleToggle(index)}
              >
                <div className="flex items-center justify-between">
                  <span>{item.title}</span>
                  {item.lessons && (
                    <span className="ml-2">
                      {openIndex === index ? (
                        <FaMinus className="text-xl" />
                      ) : (
                        <FaPlus className="text-sm" />
                      )}
                    </span>
                  )}
                </div>
                {item.lessons && openIndex === index && (
                  <ul className="ml-4 space-y-1 mt-2">
                    {item.lessons.map((lesson, i) => (
                      <li key={i} className="text-base"><Link to={`${item.id}`} >{lesson}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mt-8">
            {cardDataTopUniversity.slice(1).map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md mb-6">
                <img
                  src={post.imgSrc}
                  alt={post.title}
                  className="rounded-lg h-48 w-96"
                />
              </div>
            ))}
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
