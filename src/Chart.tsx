import * as React from 'react';
import Chart from 'chart.js';
import {
  Card,
  CircularProgress,
  CardContent
} from '@material-ui/core';

interface Props {
  loading: boolean,
  width: string,
  height: string,
  borderWidth: number,
  type: string,
  backgroundColor: string[],
  borderColor: string[],
  data: number[],
  labels: string[],
  chartLabel: string
};

const CardChard: React.FC<Props> = ({
    loading,
    height,
    width,
    borderWidth,
    borderColor,
    type,
    labels,
    data,
    chartLabel
  }) => {

  React.useEffect(() => {
    if (!loading) {
      const canvas = document.getElementById('chart') as HTMLCanvasElement;

      new Chart(canvas, {
        type: type,
        data: {
          labels: labels,
          datasets: [{
            data: data,
            label: chartLabel,
            borderColor: borderColor,
            borderWidth: borderWidth
          }]
        }
      });
    }
  }, [loading]);

  return (
    <Card>
      <CardContent>
        { (loading) && <CircularProgress />}

        <canvas id="chart" width={width} height={height} />
      </CardContent>
    </Card>
  );
};

export default CardChard;
