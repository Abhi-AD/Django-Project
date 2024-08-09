import { CiLocationOn, CiMobile1, CiTimer } from "react-icons/ci";
import { FaDollarSign, FaInfo } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import JobList from "./JobList";
import RentCostList from "./RentCostList";


const UniversityCountryDetails = () => {
  const activities = [
    "Army ROTC",
    "Choral Groups",
    "Concert Band",
    "Dance",
    "Drama/Theater",
    "International Student Organization",
    "Jazz Band",
    "Literary Magazine",
    "Music Ensembles",
    "Musical Theater",
    "Pep Band",
    "Radio Station",
    "Student Government",
    "Student Newspaper",
    "Television Station"
  ];

  return (
    <div className="flex flex-col gap-6  paddingbuttom">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">OverView</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start  gap-2">
              <FaInfo className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
              <div className='flex flex-col gap-1'>
                <div className="font-bold">Type</div>
                <div>Public</div>
              </div>
            </div>
            <div className="flex items-start  gap-2">
              <CiTimer className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
              <div className='flex flex-col gap-1'>
                <div className="font-bold">Intake</div>
                <div>Summer</div>
              </div>
            </div>
            <div className="flex items-start  gap-2">
              <FaDollarSign className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
              <div className='flex flex-col gap-1'>
                <div className="font-bold">Average Per Year After Aid</div>
                <div>$25K</div>
              </div>
            </div>
            <div className="flex items-start  gap-2">
              <GiTrophyCup className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
              <div className='flex flex-col gap-1'>
                <div className="font-bold">Sports</div>
                <div>Club, Intercollegiate, Intramural and NCAA Division II
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Contact Information</h1>
            <div className="flex gap-2 items-center">
              <CiLocationOn size={24} />
              <p className='underline'>1000 E Victoria St, Carson, CA 90747</p>
            </div>
            <div className="flex gap-2 items-center">
              <CiMobile1 size={24} />
              <p>(310) 243-3645</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdComputer size={24} />
              <p className='underline text-blue-500'>csudh.edu</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-gray-500  border-gray-300">
        California State University: Dominguez Hills is a large, 4-year, public technical college. This coed college is located in a suburban setting and is primarily a commuter campus. It offers bachelor&apos;s, certificate, and master&apos;s degrees.
      </p>

      <div className="flex flex-col gap-6 ">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">Application Requirements</h1>
        <div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                  <p className="font-bold">High School GPA</p>
                </div>
                <div className="w-full sm:w-1/2">
                  <p>Considered but not required</p>
                </div>
              </div>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                  <p className="font-bold">High School Rank</p>
                </div>
                <div className="w-full sm:w-1/2">
                  <p>Neither required nor recommended</p>
                </div>
              </div>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                  <p className="font-bold">College Prep Courses</p>
                </div>
                <div className="w-full sm:w-1/2">
                  <p>Recommended</p>
                </div>
              </div>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                  <p className="font-bold">SAT/ACT Scores</p>
                </div>
                <div className="w-full sm:w-1/2">
                  <p>Not available</p>
                </div>
              </div>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <h2 className="text-2xl font-bold mb-4">Special Academics Program</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {activities.map((program, index) => (
            <div key={index} className="text-lg">
              <li>{program}</li>
            </div>
          ))}
        </div>
      </div>
      <JobList />
      <RentCostList />
    </div>

  );
};

export default UniversityCountryDetails;
