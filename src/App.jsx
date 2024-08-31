import "./App.css";
import { useQuestions } from "./hook/useQuestions";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import logo from "./asset/logo512.png";
import { Suspense, lazy } from "react";
const StartScreen = lazy(() => import("./components/StartScreen"));

const App = () => {
  const {
    questions,
    index,
    status,
    dispatch,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = useQuestions();

  return (
    <div className="app">
      <Header logo={logo} />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        <Suspense fallback={<Loader />}>
          {status === "ready" && <StartScreen dispatch={dispatch} />}
        </Suspense>
        {status === "active" && (
          <>
            <ProgressBar index={index} points={points} answer={answer} />
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton dispatch={dispatch} answer={answer} index={index} />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
