import { useState } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';
import { Link } from 'react-router-dom';

const TableWithSeeMoreCourse = () => {
     const [visibleRows, setVisibleRows] = useState(3);
     const { DarkMode } = useDarkMode();

     const rows = [
          { program: "1. Certificate in Data Science", fee: "$300-$500", duration: '4years' },
          { program: "2. Associate Degree in Computer Science", fee: "$800-$1200", duration: '4years' },
          { program: "3. Bachelor of Science in Mathematics", fee: "$1500-$2000", duration: '4years' },
          { program: "4. Master of Business Administration", fee: "$2000-$3000", duration: '4years' },
          { program: "5. Master of Science in Engineering", fee: "$2500-$3500", duration: '4years' },
          { program: "6. PhD in Physics", fee: "$3000-$4000", duration: '4years' },
          { program: "7. PhD in Economics", fee: "$3200-$4200", duration: '4years' },
          { program: "8. Doctorate in Psychology", fee: "$3400-$4400", duration: '4years' },
          { program: "9. Doctorate in Chemistry", fee: "$3600-$4600", duration: '4years' },
          { program: "10. Doctorate in Political Science", fee: "$3800-$4800", duration: '4years' },
          { program: "11. Postgraduate Diploma in Management", fee: "$4000-$5000", duration: '4years' },
          { program: "12. Postgraduate Certificate in Education", fee: "$4200-$5200", duration: '4years' },
          { program: "13. Executive MBA", fee: "$4500-$5500", duration: '4years' },
          { program: "14. Master of Fine Arts", fee: "$4700-$5700", duration: '4years' },
          { program: "15. Master of Public Health", fee: "$4900-$5900", duration: '4years' },
          { program: "16. Master of Architecture", fee: "$5100-$6100", duration: '4years' },
          { program: "17. Master of International Relations", fee: "$5300-$6300", duration: '4years' },
          { program: "18. Doctorate in Engineering", fee: "$5500-$6500", duration: '4years' },
          { program: "19. Doctorate in History", fee: "$5700-$6700", duration: '4years' },
          { program: "20. Doctorate in Sociology", fee: "$5900-$6900", duration: '4years' },
     ];

     const handleSeeMoreClick = () => {
          setVisibleRows((prevVisibleRows) => Math.min(prevVisibleRows + 5, rows.length));
     };

     return (
          <div>
               <table className={`min-w-full  text-left ${DarkMode ? '' : 'bg-white border border-gray-300'} `}>
                    <thead>
                         <tr>
                              <th className="px-4 py-2 border border-gray-300">Avaliable Course</th>
                              <th className="px-4 py-2 border border-gray-300">Average Fee ($)</th>
                              <th className="px-4 py-2 border border-gray-300">Duration</th>
                         </tr>
                    </thead>
                    <tbody>
                         {rows.slice(0, visibleRows).map((row, index) => (
                              <tr key={index} className={``}>
                                   <td className={`px-4 py-2 border ${DarkMode ? 'text-white' : 'text-gray-800'} border-gray-300 hover:underline cursor-pointer`}><Link to={`/country/course`}>{row.program}</Link></td>
                                   <td className={`px-4 py-2 border ${DarkMode ? 'text-white' : 'text-gray-800'} border-gray-300`}>{row.fee}</td>
                                   <td className={`px-4 py-2 border ${DarkMode ? 'text-white' : 'text-gray-800'} border-gray-300`}>{row.duration}</td>
                              </tr>
                         ))}
                    </tbody>
               </table>

               {visibleRows < rows.length && (
                    <button
                         onClick={handleSeeMoreClick}
                         className=" px-4 py-2 text-blue-500 hover:underline"
                    >
                         See More
                    </button>
               )}
          </div>
     );
};

export default TableWithSeeMoreCourse;
