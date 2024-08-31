const Options = ({ options, dispatch, correctOption, answer }) => {
  ///Variables
  const isAnswered = answer !== null;

  ///Handlers Functions
  const handlerClick = (option) => {
    dispatch({ type: "newAnswer", payload: option });
  };
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            isAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          key={option}
          onClick={() => handlerClick(index)}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
