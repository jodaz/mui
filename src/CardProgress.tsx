import {
  makeStyles,
  Card,
  LinearProgress,
  CircularProgress,
  CardContent
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  circular: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linear: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6)
  }
}));

export default function (props) {
  const { circular } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={(circular) ? classes.circular : classes.linear}>
        { (circular) ? <CircularProgress /> : <LinearProgress /> }
      </CardContent>
    </Card>
  );
}
