import { useQuestions } from "../hook/useQuestions";

const ProgressBar = ({ index, points, answer }) => {
  ///Custom Hooks
  const { questions } = useQuestions();
  ///Variables
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <string>
          {index + 1} / {numQuestions}
        </string>
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default ProgressBar;
