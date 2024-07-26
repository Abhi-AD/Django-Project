import { useState } from 'react';
import { description, items } from '../../../../data/courseDetails/courseShorExplain';
import useDarkMode from '../../../../hooks/useDarkMode';

const CourseShorExplain = () => {
     const [showMore, setShowMore] = useState(false);
     const { DarkMode } = useDarkMode();

     return (
          <div className="relative w-full max-w-screen-2xl mx-auto mt-3">
               <h2 className="text-2xl font-bold mb-4">Requirements</h2>
               <ul className="list-disc list-inside mb-6">
                    <li>Access to a computer with an internet connection.</li>
               </ul>
               <h2 className="text-2xl font-bold mb-4">Description</h2>
               <p className="mb-4">
                    {showMore ? description : `${description.substring(0, 500)}...`}
               </p>
               {showMore && (
                    <div>
                         <p className="mb-4">
                              This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
                         </p>
                         <p className="mb-4">
                              We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we&apso;ve got you covered.
                         </p>
                         <p className="mb-4">
                              We cover a wide variety of topics, including:
                              <ul className="list-disc pl-6">
                                   {items.map((item, index) => (
                                        <li key={index} className="my-2">
                                             {item}
                                        </li>
                                   ))}
                              </ul>
                         </p>
                         <p className="mb-4">
                              You&apso;ll get lifetime access to over 100 lectures plus corresponding notebooks, coding exercises, and slides! You&apso;ll also get access to free course updates and new content as the field evolves.
                         </p>
                         <p className="mb-4">
                              This course comes with a 30-day money-back guarantee! If you are not satisfied in any way, you&apso;ll get your money back. Plus, you&apso;ll keep all the code you wrote during the course.
                         </p>
                         <p className="mb-4">
                              Ready to learn? Enroll now and become a Python programmer today!
                         </p>
                    </div>
               )}
               <button className={`${DarkMode ? '' : 'text-blue-500'} font-semibold`} onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show less' : 'Show more'}
               </button>
          </div>
     );
}

export default CourseShorExplain;
