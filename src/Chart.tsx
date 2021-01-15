import * as React from 'react';
import Chart from 'chart.js';
import {
  Card,
  CardContent
} from '@material-ui/core';

interface Props {
  width: Number,
  height: Number,
  borderWidth: Number,
  type: String,
  backgroundColor: String[],
  borderColor: String[],
  data: Number[],
  labels: String[],
  chartLabel: String
}

const Chart: React.FC<Props> = (props) => {
  const {
    height,
    width,
    borderWidth,
    borderColor,
    type,
    labels,
    data,
    chartLabel
  } = props;

  React.useEffect(() => {
    const ctx = document.getElementById('chart');

    new Chart(ctx, {
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
  });

  return (
    <Card>
      <CardContent>
        <canvas id="chart" width={width} height={height} />
      </CardContent>
    </Card>
  );

};

