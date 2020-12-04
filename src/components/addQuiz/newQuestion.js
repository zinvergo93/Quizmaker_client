import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

import AddIcon from "@material-ui/icons/Add";

const NewQuestion = (props) => {
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [answerC, setAnswerC] = useState("");
  const [answerD, setAnswerD] = useState("");
  const [answer, setAnswer] = useState("A");

  const addedQuestion = {
    question,
    answerA,
    answerB,
    answerC,
    answerD,
    answer,
    quizId: props.quizId,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleNewQuestion(e, addedQuestion);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="question"
          name="question"
          type="text"
          label="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          fullWidth
          required
        />
        <TextField
          id="answerA"
          name="answerA"
          type="text"
          label="Answer A"
          value={answerA}
          onChange={(e) => setAnswerA(e.target.value)}
          fullWidth
          required
        />
        <TextField
          id="answerB"
          name="answerB"
          type="text"
          label="Answer B"
          value={answerB}
          onChange={(e) => setAnswerB(e.target.value)}
          fullWidth
          required
        />
        <TextField
          id="answerC"
          name="C"
          type="text"
          label="Answer C"
          value={answerC}
          onChange={(e) => setAnswerC(e.target.value)}
          fullWidth
          required
        />
        <TextField
          id="answerD"
          name="D"
          type="text"
          label="Answer D"
          value={answerD}
          onChange={(e) => setAnswerD(e.target.value)}
          fullWidth
          required
        />
        <Select
          native
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          inputProps={{
            name: "Answer",
            id: "answer",
          }}
        >
          <option value={"answer_a"}>A</option>
          <option value={"answer_b"}>B</option>
          <option value={"answer_c"}>C</option>
          <option value={"answer_d"}>D</option>
        </Select>

        <Button type="submit" variant="contained" color="primary">
          <AddIcon />
        </Button>
      </form>
    </div>
  );
};

export default NewQuestion;
