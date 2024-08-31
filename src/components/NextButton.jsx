import { useQuestions } from "../hook/useQuestions";

const NextButton = ({ dispatch, answer, index }) => {
  ///Custom Hooks
  const { questions } = useQuestions();
  ///Variables
  const numQuestions = questions.length;

  if (answer === null) return null;

  ///Handler Functions
  const handleNextQuestion = (type) => {
    dispatch({ type: type });
  };

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => handleNextQuestion("nextQuestion")}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => handleNextQuestion("finish")}
      >
        Finish
      </button>
    );
};

export default NextButton;
