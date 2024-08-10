import PropTypes from 'prop-types';
import { MdClear } from 'react-icons/md';

const SearchBarCountry = ({ searchQuery, onSearchChange, onClear, DarkMode }) => (
     <div className={`flex gap-1 rounded-lg border  ${DarkMode ? 'bg-transparent' : 'border-black '}`}>
          < input
               type="text"
               value={searchQuery}
               onChange={onSearchChange}
               placeholder="Search countries..."
               className={`w-full p-2 rounded-md ${DarkMode ? 'bg-transparent text-white placeholder:text-white' : 'bg-transparent text-black placeholder:text-black'} focus:outline-none border-none`}
          />
          {
               searchQuery && (
                    <button
                         onClick={onClear}
                    >
                         <MdClear size={24} />
                    </button>
               )
          }
     </div >
);

SearchBarCountry.propTypes = {
     searchQuery: PropTypes.string.isRequired,
     onSearchChange: PropTypes.func.isRequired,
     onClear: PropTypes.func.isRequired,
     DarkMode: PropTypes.bool.isRequired,
};

export default SearchBarCountry;
