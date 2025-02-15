import "./styles.css";
import { useState, useEffect } from "react";
import Start from "./components/Start";
import Game from "./components/Game"; // Import the new Game component

function App() {
    const [name, setName] = useState(null);
    const [timeOut, setTimeOut] = useState(false);

    return (
        <div className="App">
            {!name ? (
                <Start setName={setName}  setTimeOut={setTimeOut} />
            ) : (
                <Game name={name}  setName={setName} timeOut = {timeOut} setTimeOut={setTimeOut} />
            )}
        </div>
    );
}

export default App;
