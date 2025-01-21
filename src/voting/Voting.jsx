import React, { useState } from "react";
import "./Voting.css";
import Button from "../components/voting/Button.jsx";

export default function Voting() {
  const [votesFor, setVotesFor] = useState(0);
  const [voteAgainst, setVotesAgainst] = useState(0);

  const handleVoteFor = () => {
    setVotesFor((prev) => prev + 1);
  };

  const handleVoteAgainst = () => {
    setVotesAgainst((prev) => prev + 1);
  };

  const handleReset = () => {
    setVotesFor(0);
    setVotesAgainst(0);
  };

  const totalVotes = votesFor + voteAgainst;

  return (
    <div className="voting-container">
      <h2>Voting</h2>
      <div className="voting-buttons">
        <Button
          className="vote-for"
          text={`For(${votesFor})`}
          onClick={handleVoteFor}
        />
        <Button
          className="vote-against"
          text={`Against(${voteAgainst})`}
          onClick={handleVoteAgainst}
        />
      </div>
      <div className="total-votes">
        <p>Total amount of votes: {totalVotes}</p>
      </div>
      <Button className="reset" text="reset" onClick={handleReset} />
    </div>
  );
}
