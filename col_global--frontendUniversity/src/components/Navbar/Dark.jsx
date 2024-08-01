import { BsMoon, BsSun } from 'react-icons/bs';
import useDarkMode from '../../hooks/useDarkMode';

function Dark() {
    const { DarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg ${DarkMode ? 'bg-gray-800' : 'bg-gray-300'} text-sm fixed top-20 left-5 md:top-24 md:left-10 lg:top-32 lg:left-10 z-50 transition-colors duration-300`}
            onClick={toggleDarkMode}
        >
            {DarkMode ? (
                <BsMoon className='text-lg text-white md:text-xl lg:text-2xl' />
            ) : (
                <BsSun className='text-lg text-blue-500 md:text-xl lg:text-2xl' />
            )}
        </button>
    );
}

export default Dark;
