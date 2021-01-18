import * as React from 'react';
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

interface Props {
  circular: boolean
}

const CardProgress: React.FC<Props> = (props) => {
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

export default CardProgress;
