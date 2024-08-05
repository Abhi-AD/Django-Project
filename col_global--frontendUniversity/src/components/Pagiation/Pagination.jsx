import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
     const handlePageChange = (page) => {
          if (page >= 1 && page <= totalPages) {
               onPageChange(page);
          }
     };

     return (
          <div className="flex items-center justify-center space-x-2">
               <button
                    className="px-4 py-2 border rounded"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
               >
                    Previous
               </button>
               {[...Array(totalPages)].map((_, index) => (
                    <button
                         key={index}
                         className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
                         onClick={() => handlePageChange(index + 1)}
                    >
                         {index + 1}
                    </button>
               ))}
               <button
                    className="px-4 py-2 border rounded"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
               >
                    Next
               </button>
          </div>
     );
};

Pagination.propTypes = {
     currentPage: PropTypes.number.isRequired,
     totalPages: PropTypes.number.isRequired,
     onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
