import { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    // Add more questions as needed
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-screen-xl auto p-8 bg-white rounded-lg shadow-lg">
      {showScore ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
          <p className="text-lg font-medium text-gray-700">You scored {score} out of {questions.length}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{questions[currentQuestion].questionText}</h1>
          </div>
          <div className="space-y-4">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className="w-full py-3 px-5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
