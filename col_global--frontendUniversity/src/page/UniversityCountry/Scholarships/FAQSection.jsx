import PropTypes from "prop-types";

const FAQSection = () => {
  return (
    <div className="paddingcontainer paddingbuttom">
      <div className="flex flex-col divide-y  divide-black/50">
        <FAQItem
          question="Entry requirements"
          answer={
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Award allocation:</p>
                  <p>All eligible</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Gender requirement:</p>
                  <p>All</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Nationality requirement:</p>
                  <p>All international</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Application requirement details:</p>
                  <p> <a href="#" className="text-blue-500 hover:underline">Contact the university</a></p>
                </div>

              </div>
              <p>Commencing full-time in the Bachelor of Commerce (Honours) (B3701) degree majoring in finance at a Monash University campus in Australia. To retain this scholarship:Recipients must maintain full-time enrolment.You must achieve an average score of 75 in the four Honours units in Semester 1 in order to receive their Semester 2 payment.</p>
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
