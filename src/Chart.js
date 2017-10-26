import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BarChart} from 'react-easy-chart';

class Chart extends Component {
  render() {
    return (
      <BarChart
   data={[
     {x: 'A', y: 20},
     {x: 'B', y: 30},
     {x: 'C', y: 40},
     {x: 'D', y: 20},
     {x: 'E', y: 40},
     {x: 'F', y: 25},
     {x: 'G', y: 5}
   ]}
 />


    );
  }
}

export default Chart;
