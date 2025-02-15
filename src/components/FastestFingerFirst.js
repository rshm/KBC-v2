import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import {fastestFingerData} from "../fastestFingerData"
import useSound from "use-sound";
import kbcwelcome from "../sounds/kbcwelcome.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const FastestFingerFirst = () => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(kbcwelcome);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    // Sample question for Fastest Finger First (you can customize this or pass it as props)
    const data = [
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answers: [
                { text: "China", correct: false },
                { text: "Japan", correct: true },
                { text: "South Korea", correct: false },
                { text: "Thailand", correct: false },
            ],
        },
    ];

    useEffect(() => {
        setQuestion(data[0]); // You can customize this to fetch dynamic data if needed
        letsPlay(); // Play welcome sound when the game starts
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
                    // Here, you can add logic for moving to the next round or ending the game
                    alert("Correct! You can move to the next round.");
                });
            } else {
                wrongAnswer();
                delay(1000, () => {
                    alert("Wrong answer! You are out.");
                });
            }
        });
    };

    return (
        <div className="main">
            {/* Container for the buttons */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50%", // To keep it in the middle of the screen
                    marginTop: "10%", // Adjust top margin
                }}
            >
                <MDBBtn
                    style={{
                        width: "200px", // Width of the buttons
                        marginBottom: "10px", // Spacing between buttons
                        backgroundColor: "red", // Red for "Exit"
                    }}
                    className="mx-2"
                    onClick={() => alert("Exiting game...")}
                >
                    Exit
                </MDBBtn>

                <MDBBtn
                    style={{
                        width: "200px", // Width of the buttons
                        marginBottom: "10px", // Spacing between buttons
                        backgroundColor: "green", // Green for "Show Answers"
                    }}
                    className="mx-2"
                    onClick={() => alert("Showing answers...")}
                >
                    Show Answers
                </MDBBtn>

                <MDBBtn
                    style={{
                        width: "200px", // Width of the buttons
                        marginBottom: "10px", // Spacing between buttons
                        backgroundColor: "blue", // Yellow for "Next Question"
                    }}
                    className="mx-2"
                    onClick={() => alert("Next question...")}
                >
                    Next Question
                </MDBBtn>
            </div>

            {/* Question and answers section */}
            <div style={{ height: "50%", position: "relative" }}>
                <div className="ffquestion" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {question?.question}
                </div>
                <div className="answers">
                    {question?.answers.map((item) => (
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
        </div>
    );
};

export default FastestFingerFirst;
