
import PropTypes from 'prop-types';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export function SampleNextArrow(props) {
     const { className, onClick } = props;
     return (
          <FaArrowRight
               className={`${className} block bg-black text-white hover:bg-gray-800 hover:text-white right-5 h-8 w-8 p-2 rounded-full z-10`}
               onClick={onClick}
          />
     );
}

SampleNextArrow.propTypes = {
     className: PropTypes.string,
     style: PropTypes.object,
     onClick: PropTypes.func,
};

export function SamplePrevArrow(props) {
     const { className, onClick } = props;
     return (
          <FaArrowLeft
               className={`${className} block bg-black text-white hover:bg-gray-800 hover:text-white left-5 h-8 w-8 p-2 rounded-full z-10`}
               onClick={onClick}
          />
     );
}

SamplePrevArrow.propTypes = {
     className: PropTypes.string,
     style: PropTypes.object,
     onClick: PropTypes.func,
};
