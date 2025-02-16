import { useState, useEffect, useRef } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import Quiz from "./Quiz";
import { data, prizeMoney } from "../data";
import Timer from "./Timer";
import { FaPhoneAlt, FaPlay, FaPause } from "react-icons/fa";
import { TbRewindBackward50 } from "react-icons/tb";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Game = ({ name, setName, timeOut , setTimeOut }) => {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [earned, setEarned] = useState("Suraksha Sadhak");
    const [shuffledData, setShuffledData] = useState([]);
    const [lifelines, setLifelines] = useState({ fiftyFifty: false, phoneAFriend: false });
    const fiftyFiftyClicked = useRef(false);
    const phoneAFriendClicked = useRef(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [stopTimer, setStopTimer] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [scClicked, setScClicked] = useState(false);
    const [optionsClicked, setOptionsClicked] = useState(false); // Track if Options button is clicked

    useEffect(() => {
        if (name) {
            setShuffledData(shuffleArray([...data]));
        }
    }, [name]);

    useEffect(() => {
        if (questionNumber > 1) {
            setEarned(prizeMoney.find((item) => item.id === questionNumber - 1).amount);
        }
    }, [questionNumber]);

    useEffect(() => {
        if (shuffledData.length > 0) {
            const question = shuffledData.find((q) => q.id === questionNumber);
            setCurrentQuestion(question);
        }
    }, [questionNumber, shuffledData]);

    const handleFiftyFifty = () => {
        if (!fiftyFiftyClicked.current) {
            setLifelines((prev) => ({ ...prev, fiftyFifty: true }));
            fiftyFiftyClicked.current = true;
        }
    };

    const resetGame = () => {
        fiftyFiftyClicked.current = false;
        phoneAFriendClicked.current = false;
        setLifelines({ fiftyFifty: false, phoneAFriend: false });
        setStopTimer(false);
        setTimeOut(true);
        setShowAnswers(false);
    };

    const handlePhoneAFriend = () => {
        if (!phoneAFriendClicked.current) {
            setLifelines((prev) => ({ ...prev, phoneAFriend: true }));
            phoneAFriendClicked.current = true;
            setStopTimer(true);
        }
    };

    const handleStartQuestion = () => {
        setShowAnswers(true);
        setStopTimer(false);
        setOptionsClicked(true); // Mark that Options button has been clicked
    };

    return (
        <MDBRow>
            <MDBCol md="9">
                <div className="main">
                    {timeOut ? (
                        <h1 className="earned">Aap hain: {earned}</h1>
                    ) : (
                        <>
                            <div style={{ height: "50%", position: "relative" }}>
                                <div className="timer">
                                    {showAnswers && (
                                        <Timer
                                            setTimeOut={setTimeOut}
                                            questionNumber={questionNumber}
                                            stopTimer={stopTimer}
                                            setStopTimer={setStopTimer}
                                        />
                                    )}
                                </div>
                                <div className="top-icons">
                                    <TbRewindBackward50
                                        size={40}
                                        className={`top-icon ${fiftyFiftyClicked.current ? "clicked-icon" : ""}`}
                                        onClick={handleFiftyFifty}
                                        disabled={lifelines.fiftyFifty}
                                        style={{ cursor: fiftyFiftyClicked.current ? "not-allowed" : "pointer" }}
                                    />
                                    <FaPhoneAlt
                                        size={40}
                                        className={`top-icon ${phoneAFriendClicked.current ? "clicked-icon" : ""}`}
                                        onClick={handlePhoneAFriend}
                                        disabled={lifelines.phoneAFriend}
                                        style={{ cursor: phoneAFriendClicked.current ? "not-allowed" : "pointer" }}
                                    />
                                    <div
                                        className="top-icon"
                                        style={{ cursor: "pointer", display: "inline-block" }}
                                        onClick={() => setStopTimer((prev) => !prev)}
                                    >
                                        {stopTimer ? (
                                            <FaPlay size={40} className={stopTimer ? "clicked-icon" : ""} />
                                        ) : (
                                            <FaPause size={40} className={stopTimer ? "clicked-icon" : ""} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: "50%" }}>
                                <Quiz
                                    data={shuffledData}
                                    questionNumber={questionNumber}
                                    setQuestionNumber={setQuestionNumber}
                                    lifelines={lifelines}
                                    setLifelines={setLifelines}
                                    showAnswers={showAnswers}
                                    setShowAnswers={setShowAnswers}
                                    setStopTimer={setStopTimer}
                                    scClicked={scClicked}
                                />
                            </div>
                        </>
                    )}
                </div>
            </MDBCol>
            <MDBCol md="3" className="money">
                <MDBListGroup className="money-list">
                    <MDBRow>
                        <span className="mb-2">
                            <MDBBtn
                                style={{ float: "right" }}
                                className="mx-2"
                                onClick={handleStartQuestion}
                            >
                                Options
                            </MDBBtn>
                            <MDBBtn
                                style={{ float: "right" }}
                                className="mx-2"
                                color="light"
                                onClick={() => resetGame()}
                            >
                                Quit
                            </MDBBtn>
                            <MDBBtn
                                style={{ float: "right" }}
                                onClick={() => {
                                    setName(null);
                                    setQuestionNumber(1);
                                    setTimeOut(true);
                                    resetGame();
                                }}
                            >
                                Exit
                            </MDBBtn>

                            <MDBBtn
                                style={{ float: "right" }}
                                onClick={() => {
                                    setScClicked(true);
                                }}
                                disabled={!optionsClicked} // Disable SCA button until Options is clicked
                            >
                                SCA
                            </MDBBtn>
                        </span>
                        <MDBCol md="6">Name: {name}</MDBCol>
                        <MDBCol md="6">Aap hain: {earned}</MDBCol>
                    </MDBRow>
                    <hr />
                    {prizeMoney.map((item) => (
                        <li key={item.id} className={questionNumber === item.id ? "item active" : "item"}>
                            <h5 className="amount">{item.amount}</h5>
                        </li>
                    ))}
                </MDBListGroup>
            </MDBCol>
        </MDBRow>
    );
};

export default Game;
