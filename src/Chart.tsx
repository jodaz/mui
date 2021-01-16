import * as React from 'react';
import Chart from 'chart.js';
import {
  Card,
  CardContent
} from '@material-ui/core';

interface Props {
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

const CardChart: React.FC<Props> = (props) => {
  const {
    height,
    width,
    borderWidth,
    backgroundColor,
    borderColor,
    type,
    labels,
    data,
    chartLabel
  } = props;

  React.useEffect(() => {
    const canvas = document.getElementById('chart') as HTMLCanvasElement;

    new Chart(canvas, {
      type: type,
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: backgroundColor,
          label: chartLabel,
          borderColor: borderColor,
          borderWidth: borderWidth
        }]
      }
    });
  });

  return (
    <Card>
      <CardContent>
        <canvas id="chart" width={width} height={height} />
      </CardContent>
    </Card>
  );
};

export default CardChart;
