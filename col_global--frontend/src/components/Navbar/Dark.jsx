import { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

function App() {
     const [darkMode, setDarkMode] = useState(false);

     const toggleDarkMode = () => {
          setDarkMode(!darkMode);
     };

     return (
          <button
               className={`flex items-center justify-center px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white-200'
                    } text-sm `}
               onClick={toggleDarkMode}
          >
               {darkMode ? <BsMoon className='text-2xl text-white' /> : <BsSun className='text-2xl text-blue-500' />}
          </button>
     );
}

export default App;
