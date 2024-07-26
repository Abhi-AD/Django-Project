import PropTypes from 'prop-types';

const getColorByPercentage = (percentage) => {
     if (percentage >= 0 && percentage < 25) return 'text-red-600';
     if (percentage >= 25 && percentage < 100) return 'text-blue-600';
     if (percentage === 100) return 'text-green-600';
};

const CircularProgress = ({ percentage, size = 40, strokeWidth = 2 }) => {
     const radius = 16;
     const circumference = 2 * Math.PI * radius;
     const offset = circumference - (percentage / 100) * circumference;
     const color = getColorByPercentage(percentage);

     return (
          <div className={`relative w-${size} h-${size}`}>
               <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <circle
                         cx="18"
                         cy="18"
                         r={radius}
                         fill="none"
                         className={`stroke-current text-gray-100`}
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
                         <span className={`text-center text-xl font-bold ${color}`}>    {percentage === 100 ? 'Complete' : `${percentage}%`}</span>
                    </div>
               )}
          </div>
     );
};

CircularProgress.propTypes = {
     percentage: PropTypes.number.isRequired,
     size: PropTypes.number,
     strokeWidth: PropTypes.number,
};

const ProgressReport = () => {
     return (
          <div className="flex flex-col items-end justify-center space-y-8">
               <CircularProgress percentage={8} />
          </div>
     );
}

export default ProgressReport;
