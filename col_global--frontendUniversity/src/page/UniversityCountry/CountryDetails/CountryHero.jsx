import { CiShare2 } from "react-icons/ci";

const CountryHero = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6 lg:p-8">
      <div
        className="relative bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url('https://img.freepik.com/free-vector/american-flag-with-firework-display-background_1017-32397.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid')` }}
      >
        <div className="bg-black bg-opacity-50 h-[250px] md:h-[300px] lg:h-[350px] flex gap-4 md:gap-8 lg:gap-10 justify-center items-center rounded-lg p-4 md:p-6 lg:p-8">
          <div className="text-left text-white w-full md:w-[70%] lg:w-[60%]">
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">Study in USA from Nepal</h1>
            <p className="text-sm md:text-base lg:text-lg mb-6">Top Universities, Courses, Cost & Scholarships</p>
            <div className="flex items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded">
                Contact
              </button>
              <CiShare2 size={24} className="md:size-30" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-6 md:gap-8 lg:gap-10">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            There are abundant reasons why students choose Australia, which one is yours?
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            If you are looking to further your education, undertake a world-class degree or fast-track your career, Australia offers a range of opportunities. Whether you choose to undertake an MBA, engineering degree, humanities, or an English language course, Australia is difficult to beat in terms of standard of living, academic excellence, and support for international students.
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            Its quality of education, variety of courses to choose from, and post-study work opportunities make it one of the most desirable destinations among Nepalese students. When you opt to study in Australia, you get to choose from 22,000 courses available in 1,100 universities and institutions, acquire globally recognised degrees, explore various scholarship opportunities and receive education from the best instructors in the world.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            Student visa requirements for Nepalese students to study in Australia
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            The visa you need will depend on the course level, the type of study you want to pursue, and the duration of the program. As an international student, you would require a student (subclass 500) visa, regardless of your field of study, the university you applied to, and the tuition fees.
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            Coming into effect on July 1, 2016, a student subclass 500 visa lets you stay in Australia for the duration of your study program, which is mostly up to five years and in line with your enrolment date. For a smooth stay, you need to ensure that your visa remains valid and that you abide by the student visa conditions mentioned on your student visa. You can read up in detail about this kind of visa on the Australian Government’s Department of Home Affairs website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryHero;
