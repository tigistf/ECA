import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chart from './Chart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Chart/>,document.getElementById('chart'));
registerServiceWorker();
