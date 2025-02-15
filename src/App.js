import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import Quiz from "./components/Quiz";
import { data, prizeMoney } from "./data";
import Timer from "./components/Timer";
import Start from "./components/Start";
import { FaPhoneAlt } from 'react-icons/fa'; // Import the icons
import { TbRewindBackward50 } from "react-icons/tb";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  const [shuffledData, setShuffledData] = useState([]);
  const [lifelines, setLifelines] = useState({ fiftyFifty: false, phoneAFriend: false });
  const fiftyFiftyClicked = useRef(false);
  const phoneAFriendClicked = useRef(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [stopTimer, setStopTimer] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false); // New state to control answers visibility

  useEffect(() => {
    if (name) {
      setShuffledData(shuffleArray([...data]));
    }
  }, [name]);

  useEffect(() => {
    if (questionNumber > 1) {
      setEarned(
          prizeMoney.find((item) => item.id === questionNumber - 1).amount
      );
    }
  }, [questionNumber]);

  useEffect(() => {
    // Update current question based on questionNumber
    if (shuffledData.length > 0) {
      const question = shuffledData.find((q) => q.id === questionNumber);
      setCurrentQuestion(question);
    }
  }, [questionNumber, shuffledData]);

  const handleFiftyFifty = () => {
    if (!fiftyFiftyClicked.current) { // Only allow the first click
      setLifelines((prev) => ({ ...prev, fiftyFifty: true }));
      fiftyFiftyClicked.current = true; // Mark the icon as clicked
    }
  };

  const resetGame = () => {
    fiftyFiftyClicked.current = false;
    phoneAFriendClicked.current = false;
    setLifelines((prev) => ({ ...prev, fiftyFifty: false, phoneAFriend: false }));
    setStopTimer(false);
    setTimeOut(true);
    setShowAnswers(false); // Reset showAnswers when the game resets
  };

  const handlePhoneAFriend = () => {
    if (!phoneAFriendClicked.current) { // Only allow the first click
      setLifelines((prev) => ({ ...prev, phoneAFriend: true }));
      phoneAFriendClicked.current = true; // Mark the icon as clicked
      setStopTimer(true); // Stop the timer
    }
  };

  const handleStartQuestion = () => {
    setShowAnswers(true); // Show answers and start the timer
    setStopTimer(false); // Ensure the timer is running
  };

  return (
      <div className="App">
        {!name ? (
            <Start setName={setName} setTimeOut={setTimeOut} />
        ) : (
            <MDBRow>
              <MDBCol md="9">
                <div className="main">
                  {timeOut ? (
                      <h1 className="earned">Aap hain: {earned}</h1>
                  ) : (
                      <>
                        <div style={{ height: "50%", position: "relative" }}>
                          <div className="timer">
                            {showAnswers && ( // Only show the timer when answers are visible
                                <Timer
                                    setTimeOut={setTimeOut}
                                    questionNumber={questionNumber}
                                    stopTimer={stopTimer}
                                    setStopTimer={setStopTimer}
                                />
                            )}
                          </div>
                          <div className="top-icons">
                            {/* FiftyFifty Lifeline Icon */}
                            <TbRewindBackward50
                                size={40}
                                className={`top-icon ${fiftyFiftyClicked.current ? "clicked-icon" : ""}`}
                                onClick={handleFiftyFifty}
                                disabled={lifelines.fiftyFifty}
                                style={{ cursor: fiftyFiftyClicked.current ? "not-allowed" : "pointer" }}
                            />

                            {/* PhoneAFriend Lifeline Icon */}
                            <FaPhoneAlt
                                size={40}
                                className={`top-icon ${phoneAFriendClicked.current ? "clicked-icon" : ""}`}
                                onClick={handlePhoneAFriend}
                                disabled={lifelines.phoneAFriend}
                                style={{ cursor: phoneAFriendClicked.current ? "not-allowed" : "pointer" }}
                            />
                          </div>
                        </div>
                        <div style={{ height: "50%" }}>
                          <Quiz
                              data={shuffledData}
                              questionNumber={questionNumber}
                              setQuestionNumber={setQuestionNumber}
                              setTimeOut={setTimeOut}
                              lifelines={lifelines}
                              setLifelines={setLifelines}
                              showAnswers={showAnswers}
                              setShowAnswers={setShowAnswers}// Pass showAnswers to Quiz
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
                      color="light"
                      onClick={handleStartQuestion} // Start the question and timer
                  >
                    Op
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
                        setEarned("₹ 0");
                        resetGame();
                      }}
                  >
                    Exit
                  </MDBBtn>
                  <MDBBtn
                      style={{ float: "right"}}
                      className="mx-2"
                      color={stopTimer ? "success" : "danger"}
                      onClick={() => {
                        setStopTimer(prev => !prev)
                      }}
                  >
                     {stopTimer ? "Resume" : "Pause"}
                  </MDBBtn>
                </span>
                    <MDBCol md="6">Name: {name}</MDBCol>
                    <MDBCol md="6">Total Earned: {earned}</MDBCol>
                  </MDBRow>
                  <hr />
                  {prizeMoney.map((item) => (
                      <li
                          key={item.id}
                          className={questionNumber === item.id ? "item active" : "item"}
                      >
                        <h5 className="amount">{item.amount}</h5>
                      </li>
                  ))}
                </MDBListGroup>
              </MDBCol>
            </MDBRow>
        )}
      </div>
  );
}

export default App;