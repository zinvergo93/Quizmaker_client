import { Fragment } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const EstablishedQuestions = (props) => {
  const {
    number,
    question: { question, answerA, answerB, answerC, answerD, answer },
  } = props;
  return (
    <Fragment>
      <Grid container>
        <Grid item>
          <Typography>{number}</Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography>{question}</Typography>
            </Grid>
            <Grid item>
              <Typography>{answerA}</Typography>
            </Grid>
            <Grid item>
              <Typography>{answerB}</Typography>
            </Grid>
            <Grid item>
              <Typography>{answerC}</Typography>
            </Grid>
            <Grid item>
              <Typography>{answerD}</Typography>
            </Grid>
            <Grid item>
              <Typography>{answer}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default EstablishedQuestions;
