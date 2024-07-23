import PropTypes from 'prop-types';
import { FaAngleLeft } from 'react-icons/fa';

function LeftArrow(props) {
    const { className, onClick } = props;
    return (
        <FaAngleLeft
            className={`${className} block bg-gray-500 text-white hover:bg-blue-800 hover:text-white left-2 h-8 w-8 p-2 rounded-full z-10 border border-blue-500`}
            onClick={onClick}
        />
    );
}

LeftArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

export default LeftArrow;
