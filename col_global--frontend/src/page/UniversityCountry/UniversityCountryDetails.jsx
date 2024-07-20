import { useState } from 'react';
import { GiRank3 } from "react-icons/gi";
import { FaMinus, FaPlus, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReviewArticle from './ReviewArticle';

const UniversityCountryDetails = () => {
  // Example data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec velit fermentum, id pretium felis fringilla. Ut euismod euismod diam, eget malesuada tortor dapibus vel. Cras sit amet tellus ante. Sed id lacinia arcu. Sed commodo velit vel nisl maximus congue. Sed nec mi eget eros fringilla vestibulum. Nunc efficitur hendrerit ipsum, at fermentum mauris fermentum sed. Vivamus vestibulum sit amet mauris a lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec velit fermentum, id pretium felis fringilla. Ut euismod euismod diam, eget malesuada tortor dapibus vel. Cras sit amet tellus ante. Sed id lacinia arcu. Sed commodo velit vel nisl maximus congue. Sed nec mi eget eros fringilla vestibulum. Nunc efficitur hendrerit ipsum, at fermentum mauris fermentum sed. Vivamus vestibulum sit amet mauris a lacinia.",
      year: 2024,
      imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
    },
    {
      id: 2,
      title: "Card 2 Title",
      description: "Card 2 Description",
      imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
    },
    {
      id: 3,
      title: "Card 3 Title",
      description: "Card 3 Description",
      imageUrl: "https://img.freepik.com/premium-photo/how-start-blog-blogging-beginners-ways-monetize-your-blog-blog-word-table-with-laptop_72482-5630.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
    }
  ];

  // Example data for Table of Contents
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
    <div className="container mx-auto py-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[60%_25%_15%] gap-6">
        <div className="bg-white flex flex-col rounded-lg g-2 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex flex-col mb-4 gap-2 md:mb-0 md:mr-4">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">ABC University</h1>
              <div className="flex flex-col md:flex-row gap-2 flex-wrap">
                <div className="flex items-center gap-1">
                  <GiRank3 className="text-sm md:text-base" />
                  <p>
                    World Ranking: <span className="text-blue-500">123</span>
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaUserGraduate className="text-sm md:text-base" />
                  <p>
                    Scholarship <span className="text-blue-500">Available</span>
                  </p>
                </div>

              </div>
              <button
                type="submit"
                className="bg-blue-800 text-white px-4 py-2 font-medium rounded-md hover:bg-blue-700 transition duration-200"
              >
                Apply Now
              </button>
            </div>
            <img
              src="https://img.freepik.com/free-vector/blogger-review-concept_23-2148515144.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
              alt="ABC University"
              className="rounded-lg w-full md:w-80 mx-auto"
            />
          </div>
          <div className="p-2 md:p-6">
            <p className="text-gray-700 mb-2 md:mb-4">{blogPosts[0].description}</p>
            <p className="text-gray-700">{blogPosts[0].year}</p>
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
            {blogPosts.slice(0).map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md mb-6">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="rounded-lg h-48 w-96"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReviewArticle />
    </div >
  );
};

export default UniversityCountryDetails;
