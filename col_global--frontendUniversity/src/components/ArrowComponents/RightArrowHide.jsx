import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

function RightArrowHide(props) {
    const { className, onClick } = props;
    const { DarkMode } = useDarkMode();

    return (
        <FaAngleRight
            className={`${className} block ${DarkMode ? '' : ''} `}
            onClick={onClick}
        />
    );
}

RightArrowHide.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

export default RightArrowHide;
