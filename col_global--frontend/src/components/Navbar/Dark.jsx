import { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

function Dark() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button
            className={`flex items-center justify-center w-32 h-12 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} text-sm`}
            onClick={toggleDarkMode}
        >
            {darkMode ? (
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
