import PropTypes from 'prop-types';

const CircularProgress = ({ percentage, size = 40, strokeWidth = 2, color = 'text-blue-600', bgColor = 'text-gray-200' }) => {
     const radius = 16;
     const circumference = 2 * Math.PI * radius;
     const offset = circumference - (percentage / 100) * circumference;

     return (
          <div className={`relative w-${size} h-${size}`}>
               <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <circle
                         cx="18"
                         cy="18"
                         r={radius}
                         fill="none"
                         className={`stroke-current ${bgColor}`}
                         strokeWidth={strokeWidth}
                    />
                    <circle
                         cx="18"
                         cy="18"
                         r={radius}
                         fill="none"
                         className={`stroke-current ${color}`}
                         strokeWidth={strokeWidth}
                         strokeDasharray={circumference}
                         strokeDashoffset={offset}
                         strokeLinecap="round"
                    />
               </svg>
               {percentage !== undefined && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                         <span className={`text-center text-2xl font-bold ${color}`}>{percentage}%</span>
                    </div>
               )}
          </div>
     );
};

CircularProgress.propTypes = {
     percentage: PropTypes.number.isRequired,
     size: PropTypes.number,
     strokeWidth: PropTypes.number,
     color: PropTypes.string,
     bgColor: PropTypes.string,
};

const ProgressReport = () => {
     return (
          <div className="flex flex-col items-end justify-center space-y-8">
               <CircularProgress percentage={80} />
          </div>
     );
}

export default ProgressReport;
