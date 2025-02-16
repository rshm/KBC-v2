import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { fastestFingerData } from "../fastestFingerData";
import fastestFingerFirst from "../sounds/FastestFingerFirst.mp3";
import useSound from "use-sound";

const FastestFingerFirst = ({ onExit }) => {
    const [questions, setQuestions] = useState([]); // All questions from JSON
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
    const [question, setQuestion] = useState(null); // Current question
    const [showAnswers, setShowAnswers] = useState(false); // State to control answers visibility
    const [correctAnswerText, setCorrectAnswerText] = useState(""); // Store the correct answer to display
    const [fff, { stop }] = useSound(fastestFingerFirst);

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
            setCorrectAnswerText(""); // Clear the correct answer display
        } else {
            alert("No more questions!"); // End of questions
        }
    };

    // Handle showing answers
    const handleShowAnswers = () => {
        setShowAnswers(true); // Show answers when the button is clicked
        fff();
    };

    const handleExit = () => {
        stop(); // Stop the sound when the exit button is pressed
        onExit(); // Call the onExit callback to go back to the start screen
    };

    // Handle showing the correct answer
    const handleShowCorrectAnswer = () => {
        // Directly display the correctAnswer string (like "dbca")
        setCorrectAnswerText(`Correct Answer: ${question?.correctAnswer}`);
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
                    onClick={handleExit} // Call the onExit callback to go back to the start screen
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
                    Show Options
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

                <MDBBtn
                    style={{
                        width: "200px", // Width of the buttons
                        marginBottom: "10px", // Spacing between buttons
                        backgroundColor: "orange", // Orange for "Correct Answer"
                    }}
                    className="mx-2"
                    onClick={handleShowCorrectAnswer} // Show the correct answer
                    disabled={!showAnswers} // Disable the button until "Show Options" has been clicked
                >
                    Correct Answer
                </MDBBtn>
            </div>

            {/* Correct Answer Display */}
            {correctAnswerText && (
                <div
                    style={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "2rem",
                        padding: "0px 40px 0px 40px",
                        backgroundColor: "rgba(0, 0, 0, 0.7)", /* Fully opaque white background */
                        borderRadius: "8px", /* Optional: Rounds corners for a modern look */
                        display: "inline-block",/* Keeps it sized to content */
                        color: "white", // White font color
                        width: "fit-content", // Ensure the div fits around the text
                        margin: "20px auto", // Center the div horizontally
                    }}
                >
                    {correctAnswerText}
                </div>
            )}

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
