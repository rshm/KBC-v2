import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { fastestFingerData } from "../fastestFingerData";

const FastestFingerFirst = () => {
    const [questions, setQuestions] = useState([]); // All questions from JSON
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
    const [question, setQuestion] = useState(null); // Current question
    const [showAnswers, setShowAnswers] = useState(false); // State to control answers visibility

    // Shuffle the questions array
    const shuffleQuestions = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Load questions from JSON and shuffle them
    useEffect(() => {
        const shuffledQuestions = shuffleQuestions([...fastestFingerData]);
        setQuestions(shuffledQuestions);
        setQuestion(shuffledQuestions[0]); // Set the first question
    }, []);

    // Handle moving to the next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1); // Move to the next question
            setQuestion(questions[currentQuestionIndex + 1]); // Update the current question
            setShowAnswers(false); // Hide answers for the next question
        } else {
            alert("No more questions!"); // End of questions
        }
    };

    // Handle showing answers
    const handleShowAnswers = () => {
        setShowAnswers(true); // Show answers when the button is clicked
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
                    onClick={handleShowAnswers} // Show answers when clicked
                    disabled={showAnswers} // Disable the button after answers are shown
                >
                    Show Answers
                </MDBBtn>

                <MDBBtn
                    style={{
                        width: "200px", // Width of the buttons
                        marginBottom: "10px", // Spacing between buttons
                        backgroundColor: "blue", // Blue for "Next Question"
                    }}
                    className="mx-2"
                    onClick={handleNextQuestion} // Move to the next question
                >
                    Next Question
                </MDBBtn>
            </div>

            {/* Question and answers section */}
            <div style={{ height: "50%", position: "relative" }}>
                <div className="ffquestion" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {question?.question}
                </div>
                {showAnswers && ( // Only show answers if showAnswers is true
                    <div className="answers">
                        {question?.answers.map((item) => (
                            <div key={item.text} className="answer">
                                {item.text}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FastestFingerFirst;