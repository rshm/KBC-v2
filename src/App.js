import "./styles.css";
import { useState, useEffect } from "react";
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
  const [currentQuestion, setCurrentQuestion] = useState(null);

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

  const handleOptionClick = (option) => {
    if (option === shuffledData[questionNumber - 1].answer) {
      if (questionNumber === shuffledData.length) {
        setEarned(prizeMoney[prizeMoney.length - 1].amount);
        setTimeOut(true); // Game over, player won
      } else {
        setQuestionNumber(prev => prev + 1);
      }
    } else {
      setEarned(prizeMoney[questionNumber - 2]?.amount || "₹0");
      setTimeOut(true); // Game over, player lost
    }
  };

  const handleFiftyFifty = () => {
    setLifelines((prev) => ({ ...prev, fiftyFifty: true }));
  };

  const handlePhoneAFriend = () => {
    alert(`Your friend suggests: "I think the answer is ${shuffledData[questionNumber - 1].answer}"`);
    setLifelines((prev) => ({ ...prev, phoneAFriend: true }));
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
                      <h1 className="earned">You Earned Total: {earned}</h1>
                  ) : (
                      <>
                        <div style={{ height: "50%", position: "relative" }}>
                          <div className="timer">
                            <Timer
                                setTimeOut={setTimeOut}
                                questionNumber={questionNumber}
                            />
                          </div>
                          <div className="top-icons">
                            {/* FiftyFifty Lifeline Icon */}
                            <TbRewindBackward50
                                size={40}
                                className="top-icon"
                                onClick={handleFiftyFifty}
                                disabled={lifelines.fiftyFifty}
                            />

                            {/* PhoneAFriend Lifeline Icon */}
                            <FaPhoneAlt
                                size={40}
                                className="top-icon"
                                onClick={handlePhoneAFriend}
                                disabled={lifelines.phoneAFriend}
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
                      onClick={() => setTimeOut(true)}
                  >
                    Quit
                  </MDBBtn>
                  <MDBBtn
                      style={{ float: "right" }}
                      onClick={() => {
                        setName(null);
                        setQuestionNumber(1);
                        setEarned("₹ 0");
                      }}
                  >
                    Exit
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
