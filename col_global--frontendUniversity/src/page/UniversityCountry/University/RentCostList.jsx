import { useState } from 'react';

const RentCostList = () => {
     const [visibleRows, setVisibleRows] = useState(3);

     const rows = [
          { property: "1 Bedroom Apartment", rent: "$1,200 per month" },
          { property: "2 Bedroom Apartment", rent: "$1,500 per month" },
          { property: "Studio Apartment", rent: "$900 per month" },
          { property: "3 Bedroom House", rent: "$2,500 per month" },
          { property: "Townhouse", rent: "$2,000 per month" },
          { property: "Shared Room", rent: "$500 per month" },
          { property: "Luxury Condo", rent: "$3,500 per month" },
          { property: "Loft", rent: "$2,800 per month" },
          { property: "Bungalow", rent: "$1,800 per month" },
          { property: "Penthouse Suite", rent: "$4,000 per month" }
     ];

     const handleSeeMoreClick = () => {
          setVisibleRows((prevVisibleRows) => Math.min(prevVisibleRows + 5, rows.length));
     };

     const handleSeeLessClick = () => {
          setVisibleRows((prevVisibleRows) => Math.max(prevVisibleRows - 5, 3));
     };

     return (
          <div className='flex flex-col gap-2'>
               <p className='font-bold text-lg'>Rental Costs</p>
               <div>
                    <table className="min-w-full text-left">
                         <thead>
                              <tr>
                                   <th className="w-1/2">Property Type</th>
                                   <th className="w-1/2">Rent ($)</th>
                              </tr>
                         </thead>
                         <tbody>
                              {rows.slice(0, visibleRows).map((row, index) => (
                                   <tr key={index}>
                                        <td className="font-bold">{row.property}</td>
                                        <td className="">{row.rent}</td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>

                    <div className="mt-4">
                         {visibleRows < rows.length && (
                              <button
                                   onClick={handleSeeMoreClick}
                                   className="text-blue-500 hover:underline mr-4"
                              >
                                   See More
                              </button>
                         )}
                         {visibleRows > 3 && (
                              <button
                                   onClick={handleSeeLessClick}
                                   className="text-blue-500 hover:underline"
                              >
                                   See Less
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default RentCostList;
