import React from "react";

export default function () {
  return (
    <div className="content-page-wrapper">
      <h1>QUIZ APP</h1>
      <p>
        Thank you for choosing the Quiz app. It's great for students and
        teachers, and easy to use! Click a button below to take or add a quiz.
      </p>
      <div className="right-column">
        <div className="take-a-quiz">
          <div className="add-a-quiz">
            <button>Take a Quiz</button>
          </div>

          <div className="Add-a-Quiz">
            <button>Add a Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}
