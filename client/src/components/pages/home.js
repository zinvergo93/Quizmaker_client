import React from "react";
import { Link } from "react-router-dom";

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
          <div className="quiz-links">
            <Link to="/takequiz">Take a Quiz</Link>
          </div>

          <div className="quiz-links">
            <Link to="/addquiz">Add a Quiz</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
