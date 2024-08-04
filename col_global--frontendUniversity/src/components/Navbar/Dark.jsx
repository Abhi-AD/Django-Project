import { BsMoon, BsSun } from 'react-icons/bs';
import useDarkMode from '../../hooks/useDarkMode';

function Dark() {
    const { DarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className='p-4'
        >
            {DarkMode ? (
                <BsMoon className='text-xl text-white md:text-2xl lg:text-3xl' />
            ) : (
                <BsSun className='text-xl text-black md:text-2xl lg:text-3xl' />
            )}
        </button>
    );
}

export default Dark;
