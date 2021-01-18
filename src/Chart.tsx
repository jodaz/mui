import * as React from 'react';
import Chart from 'chart.js';
import {
  Card,
  Typography,
  CardContent,
  makeStyles
} from '@material-ui/core';
import CardProgress from './CardProgress';

const colors = [
  '#d63031', '#FFC312', '#C4E538', '#12CBC4', '#FDA7DF', '#ED4C67',
  '#F79F1F', '#A3CB38', '#1289A7', '#D980FA', '#B53471', '#EE5A24',
  '#009432', '#0652DD', '#9980FA', '#833471', '#EA2027', '#006266',
  '#1B1464', '#5758BB', '#6F1E51'
];

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface Props {
  loading: boolean,
  width: string,
  height: string,
  borderWidth: number,
  type: string,
  data: number[],
  labels: string[],
  name: string
};

const CardChart: React.FC<Props> = ({
    loading,
    height,
    width,
    borderWidth,
    type,
    labels,
    data,
    name
  }) => {

  const classes = useStyles();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (!loading && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");

      if (context) {
        new Chart(context, {
          type: type,
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: colors,
              borderColor: colors,
              borderWidth: borderWidth
            }]
          }
        });
      }
    }
  }, [loading]);

  return (
    <React.Fragment>
      { (!loading) ?
        <Card>
          <CardContent className={classes.root}>
            <Typography component="h6" variant="h6">
              {name}
            </Typography>
            <canvas ref={canvasRef} width={width} height={height} />
          </CardContent>
        </Card>
        : <CardProgress circular/>
      }
    </React.Fragment>
  );
};

export default CardChart;
