import { useQuestions } from "../hook/useQuestions";

const StartScreen = ({ dispatch }) => {
  const { questions } = useQuestions();

  ///Functions
  const numQuestions = questions.length;

  ///Handlers Functions
  const handleStart = () => {
    dispatch({ type: "start" });
  };

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test you React knowledge</h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Let's start!
      </button>
    </div>
  );
};

export default StartScreen;
