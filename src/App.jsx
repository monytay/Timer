import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10); // <-- moved this 10ms outside
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="box text-center ">
        <h1 className="text-3xl font-bold mb-4">Timer</h1>
        <div className="text-4xl font-mono mb-6">
          <span>{("0" + Math.floor(time / 60000) % 60).slice(-2)}:</span>
          <span>{("0" + Math.floor(time / 1000) % 60).slice(-2)}:</span>
          <span>{("0" + Math.floor(time / 10) % 100).slice(-2)}</span>
        </div>
        <div className="space-x-4">
          {running ? (
            <button
              onClick={() => setRunning(false)}
              className="btn"
            >
              Stop
            </button>
          ) : (
            <button
              onClick={() => setRunning(true)}
              className="btn"
            >
              Start
            </button>
          )}
          <button
            onClick={() => setTime(0)}
            className="btn"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
