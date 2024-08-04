import { BsMoon, BsSun } from 'react-icons/bs';
import useDarkMode from '../../hooks/useDarkMode';

function Dark() {
    const { DarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
        >
            {DarkMode ? (
                <BsMoon className='text-lg text-white md:text-xl lg:text-2xl' />
            ) : (
                <BsSun className='text-lg text-black md:text-xl lg:text-2xl' />
            )}
        </button>
    );
}

export default Dark;
