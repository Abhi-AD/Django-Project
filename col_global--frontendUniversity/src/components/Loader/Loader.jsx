const SpinnerComponent = () => {
     return (
          <div className="min-h-screen dark:bg-slate-800 gap-6 flex items-center justify-center">
               <div className="w-36 h-36 border-8 border-dashed rounded-full border-t-blue-400 animate-spin">
               </div>
          </div>
     );
};

export default SpinnerComponent;
