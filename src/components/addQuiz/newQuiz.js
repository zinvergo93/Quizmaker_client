import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const NewQuiz = (props) => {
  return (
    <form onSubmit={(e) => props.handleNewQuizSubmission(e)}>
      <TextField
        id="quiz"
        name="quiz"
        type="text"
        label="Quiz Title"
        value={props.quizName}
        onChange={(e) => props.setQuizName(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default NewQuiz;
