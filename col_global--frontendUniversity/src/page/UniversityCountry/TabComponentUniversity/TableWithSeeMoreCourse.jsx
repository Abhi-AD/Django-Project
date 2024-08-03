import { useState } from 'react';

const TableWithSeeMoreCourse = () => {
     const [visibleRows, setVisibleRows] = useState(3);

     const rows = [
          { program: "1. Certificate in Data Science", fee: "$300-$500" },
          { program: "2. Associate Degree in Computer Science", fee: "$800-$1200" },
          { program: "3. Bachelor of Science in Mathematics", fee: "$1500-$2000" },
          { program: "4. Master of Business Administration", fee: "$2000-$3000" },
          { program: "5. Master of Science in Engineering", fee: "$2500-$3500" },
          { program: "6. PhD in Physics", fee: "$3000-$4000" },
          { program: "7. PhD in Economics", fee: "$3200-$4200" },
          { program: "8. Doctorate in Psychology", fee: "$3400-$4400" },
          { program: "9. Doctorate in Chemistry", fee: "$3600-$4600" },
          { program: "10. Doctorate in Political Science", fee: "$3800-$4800" },
          { program: "11. Postgraduate Diploma in Management", fee: "$4000-$5000" },
          { program: "12. Postgraduate Certificate in Education", fee: "$4200-$5200" },
          { program: "13. Executive MBA", fee: "$4500-$5500" },
          { program: "14. Master of Fine Arts", fee: "$4700-$5700" },
          { program: "15. Master of Public Health", fee: "$4900-$5900" },
          { program: "16. Master of Architecture", fee: "$5100-$6100" },
          { program: "17. Master of International Relations", fee: "$5300-$6300" },
          { program: "18. Doctorate in Engineering", fee: "$5500-$6500" },
          { program: "19. Doctorate in History", fee: "$5700-$6700" },
          { program: "20. Doctorate in Sociology", fee: "$5900-$6900" },
     ];

     const handleSeeMoreClick = () => {
          setVisibleRows((prevVisibleRows) => Math.min(prevVisibleRows + 5, rows.length));
     };

     return (
          <div>
               <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                         <tr>
                              <th className="px-4 py-2 border border-gray-300">Programs</th>
                              <th className="px-4 py-2 border border-gray-300">Average Fee ($)</th>
                         </tr>
                    </thead>
                    <tbody>
                         {rows.slice(0, visibleRows).map((row, index) => (
                              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                   <td className="px-4 py-2 border border-gray-300">{row.program}</td>
                                   <td className="px-4 py-2 border border-gray-300">{row.fee}</td>
                              </tr>
                         ))}
                    </tbody>
               </table>

               {visibleRows < rows.length && (
                    <button
                         onClick={handleSeeMoreClick}
                         className="mt-4 px-4 py-2 text-blue-500 hover:underline"
                    >
                         See More
                    </button>
               )}
          </div>
     );
};

export default TableWithSeeMoreCourse;
