import { useState } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import NewQuiz from "../addQuiz/newQuiz";
import NewQuestion from "../addQuiz/newQuestion";
import EstablishedQuestions from "../addQuiz/establishedQuestions";

const AddQuiz = () => {
  let key = 0;

  // const [quiz, setQuiz] = useState({ id: 1, title: "Quiz Title" });
  const [quiz, setQuiz] = useState(null);
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleNewQuestion = (e, addedQuestion) => {
    e.preventDefault();
    setQuestions([...questions, addedQuestion]);
  };

  const establishedQuestions = questions
    ? questions.map((question) => {
        key++;
        return <EstablishedQuestions key={key} question={question} />;
      })
    : null;

  const handleNewQuizSubmission = (e) => {
    e.preventDefault();
    axios
      .post("https://bottega-quiz-maker-api.herokuapp.com/add-quiz", {
        title: quizName,
      })
      .then((res) => {
        setQuiz(res.data);
      })
      .catch((err) => {
        console.error("New Quiz Title", err);
      });
  };

  const handleSubmitNewQuestions = (e) => {
    e.preventDefault();
    questions.forEach((question) => {
      axios
        .post(`https://bottega-quiz-maker-api.herokuapp.com/add-question`, {
          quiz_id: question.quizId,
          question: question.question,
          answer_a: question.answerA,
          answer_b: question.answerB,
          answer_c: question.answerC,
          answer_d: question.answerD,
          correct_answer: question.answer,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error("New Questions", err);
        });
    });
  };

  const quizForm = quiz ? (
    <Grid container spacing={4}>
      <Grid item>
        <h1>{quiz.title}</h1>
      </Grid>
      <Grid item>{establishedQuestions}</Grid>
      <Grid item>
        <NewQuestion quizId={quiz.id} handleNewQuestion={handleNewQuestion} />
      </Grid>
      <Grid item>
        <Button
          color="primary"
          type="submit"
          onClick={handleSubmitNewQuestions}
        >
          Submit Questions
        </Button>
      </Grid>
    </Grid>
  ) : (
    <div>
      <NewQuiz
        handleNewQuizSubmission={handleNewQuizSubmission}
        quizName={quizName}
        setQuizName={setQuizName}
      />
    </div>
  );

  return quizForm;
};

export default AddQuiz;
