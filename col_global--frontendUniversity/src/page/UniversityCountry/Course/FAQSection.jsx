import PropTypes from "prop-types";

const FAQSection = () => {
  return (
    <div className="flex flex-col divide-y  divide-black/50">
      <FAQItem
        question="Application Requirements?"
        answer={
          <>
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
          </>
        }
      />

      <FAQItem
        question="Start dates and prices?"
        answer={
          <>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-lg"><strong>Duration:</strong> 3 Year(s)</span>
                <span className="text-lg"><strong>Fees: </strong>$34K Per semester</span>
              </div>
              <span className="flex flex-col gap-1">
                <strong>Intake</strong>
                <div>
                  <li>Semester  (July), 2024	</li>
                  <li>Semester  (Jan), 2025	</li>
                </div>
              </span>
            </div>
          </>
        }
      />


      <FAQItem
        question="How to apply?"
        answer={
          <>
            <div className="flex flex-col gap-2">
              <div>
                <strong> Entry requirements for The University of Melbourne</strong>
                <li>This is information for applicants with recent secondary education (within the past two years)
                  Applicants are selected according to academic merit, in the form of the ATAR or notional ATAR calculated by the relevant Tertiary Admissions Centre. Courses which select primarily on ATAR will have minimum ATARs set in advance, and you can only be selected below this point if you have additional criteria to be considered.</li>
              </div>
              <div>
                <strong>Application Deadline</strong>
                <p>This date isn’t available Speak to an IDP counsellor to get an detailed information</p>
              </div>
            </div>
          </>
        }
      />


    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <details className="mb-2">
      <summary className="py-2  outline-none cursor-pointer focus:underline text-xl font-medium">
        {question}
      </summary>
      <div className="px-8 pb-8">
        <p>{answer}</p>
      </div>
    </details>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

export default FAQSection;
