import React, { useState, useRef } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import FastestFingerFirst from "./FastestFingerFirst";

const Start = ({ setName, setTimeOut }) => {
    const [gameType, setGameType] = useState(null); // To store the selected game type
    const inputRef = useRef();

    const handleClick = () => {
        setTimeOut(false);
        if (inputRef.current.value) {
            setName(inputRef.current.value);
        }
    };

    // Callback function to reset gameType and go back to the start screen
    const handleExit = () => {
        setGameType(null); // Reset gameType to show the start screen
    };

    return (
        <>
            {/* Show buttons if no game type is selected */}
            {!gameType ? (
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "15px", marginTop: "300px", maxWidth: "600px", marginLeft: "500px" }}>
                    <MDBBtn
                        color="primary"
                        style={{
                            width: "45%", // Adjust width to ensure both buttons fit side by side
                            height: "150px",
                            fontSize: "20px",
                        }}
                        onClick={() => setGameType("quiz")}
                    >
                        Quiz
                    </MDBBtn>
                    <MDBBtn
                        color="secondary"
                        style={{
                            width: "45%", // Adjust width to ensure both buttons fit side by side
                            height: "150px",
                            fontSize: "20px",
                        }}
                        onClick={() => setGameType("fastestFinger")}
                    >
                        Fastest Finger First
                    </MDBBtn>
                </div>
            ) : gameType === "quiz" ? (
                // If the "Quiz" is selected, show the name input field
                <>
                    <div className="startScreen">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            ref={inputRef}
                            className="form-control"
                        />
                        <MDBBtn
                            style={{ width: "100%" }}
                            className="mt-2"
                            onClick={handleClick}
                        >
                            Start Game
                        </MDBBtn>
                    </div>
                </>
            ) : (
                // If the "Fastest Finger First" is selected, show the FastestFingerFirst component
                <FastestFingerFirst onExit={handleExit} />
            )}
        </>
    );
};

export default Start;