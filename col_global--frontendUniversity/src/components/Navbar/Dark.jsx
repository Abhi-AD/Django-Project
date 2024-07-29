import { BsMoon, BsSun } from 'react-icons/bs';
import useDarkMode from '../../hooks/useDarkMode';

function Dark() {
    const { DarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            className={`flex items-center justify-center w-12 h-24 rounded-xl ${DarkMode ? 'bg-gray-800' : 'bg-gray-200'} text-sm top-60 fixed mx-3 z-50`}
            onClick={toggleDarkMode}
        >
            {DarkMode ? (
                <BsMoon className='text-2xl text-white' />
            ) : (
                <BsSun className='text-2xl text-blue-500' />
            )}
        </button>
    );
}

export default Dark;
