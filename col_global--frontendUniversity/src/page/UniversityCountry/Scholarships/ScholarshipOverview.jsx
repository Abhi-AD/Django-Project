
const ScholarshipOverview = () => {
     return (
          <div className="paddingcontainer paddingbuttom">
               <h1 className="text-2xl font-bold mb-4">About the scholarship</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4">
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Average applications per year:</p>
                         <p>Not specified</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Qualification:</p>
                         <p>Undergraduate</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Number of awards available:</p>
                         <p>Not specified</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Value of award:</p>
                         <p>6000 AUD</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Eligible intake:</p>
                         <p>Contact the university</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Funding details:</p>
                         <p>AUD $6000 one-off payment.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Study mode:</p>
                         <p>Full Time</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Delivery mode:</p>
                         <p>Not specified</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-semibold">Course/offer application deadline:</p>
                         <p>Contact the university</p>
                    </div>

               </div>
          </div>
     );
};

export default ScholarshipOverview;
