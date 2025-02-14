import React, {useState, useEffect} from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Quiz = ({data, questionNumber, setQuestionNumber, setTimeOut, lifelines, setLifelines}) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    const delay = (duration, callBack) => {
        setTimeout(() => {
            callBack();
        }, duration);
    };

    const handleClick = (item) => {
        setSelectedAnswer(item);
        setClassName("answer active");

        delay(1000, () => {
            setClassName(item.correct ? "answer correct" : "answer wrong");
        });

        delay(1000, () => {
            if (item.correct) {
                correctAnswer();
                delay(3000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setLifelines((prev) => ({...prev, fiftyFifty: false}));
                    setSelectedAnswer(null);

                });
            } else {
                wrongAnswer();
                delay(1000, () => {
                    setTimeOut(true);
                });
            }
        });
    };

    // Filter answers if Fifty-Fifty lifeline is used
    const answersToDisplay = lifelines.fiftyFifty
        ? question?.answers.filter((answer) => question?.fiftyFifty.includes(answer.text))
        : question?.answers;

    console.log(answersToDisplay)

    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {answersToDisplay?.map((item) => (
                    <div
                        key={item.text}
                        className={selectedAnswer === item ? className : "answer"}
                        onClick={() => !selectedAnswer && handleClick(item)}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
