import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa';

function RightArrow(props) {
    const { className, onClick } = props;
    return (
        <FaAngleRight
            className={`${className} block bg-gray-500 text-white hover:bg-blue-800 hover:text-white right-2 h-8 w-8 p-2 rounded-full z-10 border border-blue-500`}
            onClick={onClick}
        />
    );
}

RightArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

export default RightArrow;
