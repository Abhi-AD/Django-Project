import { BsMoon, BsSun } from 'react-icons/bs';
import useDarkMode from '../../hooks/useDarkMode';

function Dark() {
    const { DarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg ${DarkMode ? 'bg-gray-800' : 'bg-gray-100'} text-sm fixed top-20 left-5 md:top-24 md:left-10 lg:top-32 lg:left-10 z-50 transition-colors duration-300`}
            onClick={toggleDarkMode}
        >
            {DarkMode ? (
                <BsMoon className='text-2xl text-white md:text-3xl lg:text-4xl' />
            ) : (
                <BsSun className='text-2xl text-blue-500 md:text-3xl lg:text-4xl' />
            )}
        </button>
    );
}

export default Dark;
