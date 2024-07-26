import PropTypes from 'prop-types';
import { TfiAngleDown } from "react-icons/tfi";
import { IoAddCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import courseDataLesson from "../../../../data/courseDetails/courseDataLesson";
import useDarkMode from '../../../../hooks/useDarkMode';

const CourseLessons = () => {
     const { DarkMode } = useDarkMode();
     return (
          <div className="relative w-full max-w-screen-2xl mx-auto">
               <div className="mx-auto flex flex-col gap-10">
                    <div className="flex flex-col items-left gap-3">
                         <h2 className="mt-5 text-xl font-bold tracking-tight md:text-xl">Course content</h2>
                         <div className="flex justify-between">
                              <div className="flex gap-8 font-bold">
                                   <p className={`text-sm ${DarkMode ? '' : 'text-gray-500'} md:text-lg`}><span className='text-blue-500'>23</span> sections</p>
                                   <p className={`text-sm ${DarkMode ? '' : 'text-gray-500'} md:text-lg`}><span className='text-blue-500'>156</span> lectures</p>
                                   <p className={`text-sm ${DarkMode ? '' : 'text-gray-500'} md:text-lg`}><span className='text-blue-500'>22h 13m</span> total length</p>
                              </div>
                              <p className={`text-sm font-bold ${DarkMode ? '' : 'text-blue-500'} md:text-lg`}>Expand all sections</p>
                         </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                         {courseDataLesson.map((section, sectionIndex) => (
                              <div key={sectionIndex} className='rounded-lg' >
                                   <details className={`group  rounded-lg border ${DarkMode ? 'border-blue-100' : 'border-blue-400'}`}>
                                        <summary className={`flex cursor-pointer rounded-lg list-none items-center justify-between font-medium p-4 ${DarkMode ? 'bg-gray-500 text-gray-100' : ' bg-blue-400  text-white'}`}>
                                             <span>{section.sectionTitle}</span>
                                             <span className="transition group-open:rotate-180">
                                                  <TfiAngleDown />
                                             </span>
                                        </summary>
                                        <div className="flex mt-4 p-4 flex-col gap-5">
                                             {section.lectures.map((lecture, lectureIndex) => (
                                                  <LectureDetail key={lectureIndex} lecture={lecture} />
                                             ))}
                                        </div>
                                   </details>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

const LectureDetail = ({ lecture }) => {
     const [isOpen, setIsOpen] = useState(false);
     const toggleOpen = () => {
          setIsOpen(!isOpen);
     };

     return (
          <details className="group" open={isOpen}>
               <summary className="flex cursor-pointer list-none items-center justify-between font-medium" onClick={toggleOpen}>
                    <div className="justify-between items-center flex gap-10">
                         <span>{lecture.title}</span>
                         <span className="transition transform group-open text-blue-500">
                              {isOpen ? <IoAddCircleSharp /> : <IoIosRemoveCircle />}
                         </span>
                    </div>
                    <div className="flex gap-24">
                         <p className="text-blue-500 underline">{lecture.preview}</p>
                         <p>{lecture.duration}</p>
                    </div>
               </summary>
               <p className="group-open:animate-fadeIn mt-3 text-neutral-600">{lecture.content}</p>
          </details>
     );
};

LectureDetail.propTypes = {
     lecture: PropTypes.shape({
          title: PropTypes.string.isRequired,
          preview: PropTypes.string,
          duration: PropTypes.string,
          content: PropTypes.string
     }).isRequired
};

export default CourseLessons;
