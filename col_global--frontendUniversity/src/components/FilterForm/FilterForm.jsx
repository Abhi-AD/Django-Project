const FilterForm = () => {
     return (
          <div className="mx-auto bg-blue-50 rounded-lg shadow-md p-4 flex flex-col gap-4 max-w-lg text-black">
               <div className="w-full">
                    <input
                         type="text"
                         placeholder="Search item"
                         className="w-full p-2 border rounded-md"
                    />
               </div>

               <div className="w-full">
                    <label className="block mb-1">Course type</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                         <option>Please select</option>
                         <option>Please select</option>
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <label className="block mb-1">Field of Study</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <label className="block mb-1">Course Language</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <label className="block mb-1">Mode of study</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <label className="block mb-1">Duration</label>
                    <div className="flex flex-col">
                         <input type="range" min="1" max="208" className="w-full" />
                         <div className="flex justify-between text-xs">
                              <span>1 week</span>
                              <span>More than 4 years</span>
                         </div>
                    </div>
               </div>

               <div className="w-full">
                    <h2 className="font-bold mb-2 text-lg">Location</h2>
                    <label className="block mb-1">City</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <label className="block mb-1">Type of institution</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <label className="block mb-1">Institution</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <h2 className="font-bold mb-2 text-lg">Course Type Specific</h2>
                    <label className="block mb-1">Tuition Fees</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <label className="block mb-1">Beginning</label>
                    <select className="w-full p-2 border rounded-md">
                         <option>Please select</option>
                    </select>
               </div>

               <div className="w-full">
                    <label className="block mb-1">Date</label>
                    <input
                         type="text"
                         className="w-full p-2 border rounded-md"
                         placeholder="Only for language, short and preparatory courses"
                         disabled
                    />
               </div>

               <div className="w-full">
                    <label className="block mb-1">Preparation for subject groups</label>
                    <input
                         type="text"
                         className="w-full p-2 border rounded-md"
                         placeholder="Only for preparatory courses"
                         disabled
                    />
               </div>

               <div className="w-full">
                    <label className="block mb-1">Preparation for degree programmes</label>
                    <input
                         type="text"
                         className="w-full p-2 border rounded-md"
                         placeholder="Only for preparatory courses"
                         disabled
                    />
               </div>
          </div>
     );
}

export default FilterForm;
