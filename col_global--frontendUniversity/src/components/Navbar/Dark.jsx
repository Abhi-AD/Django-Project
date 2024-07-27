import { BsMoon, BsSun } from 'react-icons/bs';
import useDarkMode from '../../hooks/useDarkMode';

function Dark() {
    const { DarkMode, toggleDarkMode } = useDarkMode();
    
    return (
        <button
            className={`flex items-center justify-center w-32 h-12 rounded-full ${DarkMode ? 'bg-gray-800' : 'bg-gray-200'} text-sm`}
            onClick={toggleDarkMode}
        >
            {DarkMode ? (
                <>
                    <BsMoon className='text-2xl text-white' />
                    <span className='ml-2 text-white'>Dark</span>
                </>
            ) : (
                <>
                    <BsSun className='text-2xl text-blue-500' />
                    <span className='ml-2 text-black'>Light</span>
                </>
            )}
        </button>
    );
}

export default Dark;
