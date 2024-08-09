import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardDataTopUniversity from "../../../data/cardDataTopUniversity";
import FilterUniversity from "../../Destinations/FilterUniversity";
import { useState } from "react";
import SearchBarUniversity from "./SearchBarUniversity";
import useDarkMode from "../../../hooks/useDarkMode";

const Card = ({ imgSrc, title, description, link }) => (
     <Link to={link} className=" h-full rounded-2xl flex flex-col">
          <div className="w-full h-96 relative overflow-hidden rounded-2xl">
               <img className="inset-0 w-full h-full object-cover" src={imgSrc} alt={title} />
               <div className="absolute bottom-0 w-full h-1/3 p-3 md:p-5  flex flex-col justify-center flex-grow bg-black bg-opacity-40 backdrop-blur-sm">
                    <div className="flex flex-col justify-center">
                         <h5 className={`text-sm sm:text-base md:text-lg font-bold tracking-tight text-white truncate `}>
                              {title}
                         </h5>
                         <p className={`text-xs sm:text-sm md:text-base  font-medium text-white line-clamp-2`}>
                              {description}
                         </p>
                    </div>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
};

function AllUniversity() {
     const { DarkMode } = useDarkMode();
     const [searchQuery, setSearchQuery] = useState('');

     const handleSearchChange = (e) => {
          setSearchQuery(e.target.value);
     };

     const handleClearSearch = () => {
          setSearchQuery('');
     };

     const filteredUniversity = cardDataTopUniversity.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
     );

     return (
          <div className="flex flex-col gap-4 paddingcontainer paddingbuttom">
               <FilterUniversity />
               <div className="flex  justify-between">
                    <h1 className="font-bold text-lg md:text-2xl">All University</h1>
                    <SearchBarUniversity
                         searchQuery={searchQuery}
                         onSearchChange={handleSearchChange}
                         onClear={handleClearSearch}
                         DarkMode={DarkMode}

                    />
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                    {filteredUniversity.map((item, index) => (
                         <Card key={index} {...item} />
                    ))}
               </div>
          </div>
     );
}

export default AllUniversity;
