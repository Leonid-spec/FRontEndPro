import React, { useState } from "react";
import MyButton from "../components/feedback/MyButton.jsx";
import "./button.css";

export default function FeedBack() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handlLike = () => {
    setLikes((prev) => prev + 1);
  };
  const handDisLike = () => {
    setDislikes((prev) => prev + 1);
  };

  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedBack-container">
      <div className="feedBack-Btn">
        <div className="images">
          <img
            src="data:image/png;base64,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"
            alt="like"
          />
        </div>
        <MyButton className="button" onClick={handlLike} text="Like" />
        <span className="feedBack-count">{likes}</span>
        <MyButton className="button" onClick={handDisLike} text="DisLike" />
        <span className="feedBack-count">{dislikes}</span>
      </div>
      <MyButton className="fury" onClick={handleReset} text="Reset Results" />
    </div>
  );
}
