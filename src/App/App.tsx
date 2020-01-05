import React, { useState, useCallback, useEffect } from "react";

import Check from "./Check";

import { formulas, reshuffle } from "./ChemicalData";

import { sound } from "./Sounds";

const MAIN_ANIMATION_DURATION = 10000;
const CLICK_ANIMATION_DURATION = 1000;

const CHECKS_TOTAL = 5;

const App: React.FC = () => {
  const [checkNumber, setCheckNumber] = useState(1);
  const [resufledFormulas, setResufledFormulas] = useState(formulas);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const element = document.documentElement;
    element.style.setProperty(
      "--main-animation-duration",
      (MAIN_ANIMATION_DURATION / 1000).toFixed(2) + "s"
    );
    element.style.setProperty(
      "--click-animation-duration",
      (CLICK_ANIMATION_DURATION / 1000).toFixed(2) + "s"
    );
    return () => {};
  }, []);

  const handleStartClick = useCallback(() => {
    console.log("Нажата кнопка старт");
    const newResufledFormulas = reshuffle(formulas);
    setResufledFormulas(newResufledFormulas);
    console.log("newResufledFormulas = ", newResufledFormulas);
    setCheckNumber(1);
    setScore(0);
    sound(0);
  }, []);

  const handleFinishEvent = useCallback(
    ({
      name,
      type,
      answer
    }: {
      name: string;
      type: string;
      answer: string | undefined;
    }) => {
      console.log("handleFinishEvent name = ", name);
      console.log("handleFinishEvent type = ", type);
      console.log("handleFinishEvent answer = ", answer);
      let newScore;
      if (answer === undefined) {
        newScore = score;
      } else {
        if (type === answer) {
          newScore = score + 2;
        } else {
          newScore = score - 1;
        }
      }

      setScore(newScore);
      setCheckNumber(
        checkNumber > CHECKS_TOTAL || checkNumber >= resufledFormulas.length
          ? 0
          : checkNumber + 1
      );
    },
    [checkNumber, resufledFormulas.length, score]
  );

  return (
    <div>
      {checkNumber === 0 ? (
        <div key="Старт">
          <button onClick={handleStartClick}>Старт</button>
        </div>
      ) : (
        <Check
          key={checkNumber}
          checkNumber={checkNumber}
          checksTotal={CHECKS_TOTAL}
          clickAnimationDuration={CLICK_ANIMATION_DURATION}
          formula={resufledFormulas[checkNumber - 1]}
          handleFinishEvent={handleFinishEvent}
          mainAnimationDuration={MAIN_ANIMATION_DURATION}
          score={score}
        />
      )}
    </div>
  );
};

export default App;
