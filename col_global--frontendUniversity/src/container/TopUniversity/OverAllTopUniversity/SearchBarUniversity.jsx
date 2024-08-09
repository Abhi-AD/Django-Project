import PropTypes from 'prop-types';

const SearchBarUniversity = ({ searchQuery, onSearchChange, onClear, DarkMode }) => (
     <div className="flex gap-4 mb-4">
          <input
               type="text"
               value={searchQuery}
               onChange={onSearchChange}
               placeholder="Search University..."
               className={`w-full p-2 border rounded-md ${DarkMode ? 'bg-transparent text-white placeholder:text-white' : 'bg-gray-200 text-black placeholder:text-black'} focus:outline-none`}
          />
          <button
               onClick={onClear}
               className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
               Clear
          </button>
     </div>
);

SearchBarUniversity.propTypes = {
     searchQuery: PropTypes.string.isRequired,
     onSearchChange: PropTypes.func.isRequired,
     onClear: PropTypes.func.isRequired,
     DarkMode: PropTypes.bool.isRequired,

};

export default SearchBarUniversity;
