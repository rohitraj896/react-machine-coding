import React, { useState } from "react";

function CricketScore() {
  const [ballNumber, setBallNumber] = useState(1);
  const [totalRuns, setTotalRuns] = useState(0);
  const [scores, setScores] = useState([]);

  const updateScore = runsScored => {
    if (ballNumber > 6) return;
    setTotalRuns(prevTotal => prevTotal + runsScored);
    setScores([...scores, { ball: ballNumber, runs: runsScored }]);
    setBallNumber(ballNumber + 1);
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Cricket Score Tracker</h2>
      <table
        style={{
          width: "50%",
          borderCollapse: "collapse",
          margin: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Ball Number
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Runs Scored
            </th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {score.ball}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {score.runs}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{ padding: "10px", background: "gray" }}
          onClick={() => updateScore(1)}
        >
          1{" "}
        </button>
        <button
          style={{ padding: "10px", background: "gray" }}
          onClick={() => updateScore(2)}
        >
          2{" "}
        </button>
        <button
          style={{ padding: "10px", background: "gray" }}
          onClick={() => updateScore(3)}
        >
          3{" "}
        </button>
        <button
          style={{ padding: "10px", background: "gray" }}
          onClick={() => updateScore(4)}
        >
          4{" "}
        </button>
        <button
          style={{ padding: "10px", background: "gray" }}
          onClick={() => updateScore(6)}
        >
          6{" "}
        </button>
      </div>
      {ballNumber > 6 && <p>Total Score: {totalRuns}</p>}
    </div>
  );
}

export default CricketScore;
