import Options from "./Options";

const Question = ({ questions, dispatch, answer }) => {
  ///Variables
  const { question, options, correctOption } = questions;

  return (
    <div>
      <h4>{question}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        correctOption={correctOption}
        answer={answer}
      />
    </div>
  );
};

export default Question;
