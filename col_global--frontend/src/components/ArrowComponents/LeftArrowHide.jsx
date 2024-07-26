import PropTypes from 'prop-types';
import { FaAngleLeft } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

function LeftArrowHide(props) {
    const { className, onClick } = props;
    const { DarkMode } = useDarkMode();
    return (
        <FaAngleLeft
            className={`${className} block ${DarkMode ? '' : ''} `}
            onClick={onClick}
        />
    );
}

LeftArrowHide.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

export default LeftArrowHide;
