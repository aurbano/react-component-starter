import React from 'react';
import ReactDOM from 'react-dom';
import './example.css';
import './react-ds.css';
import ExamplePage from './ExamplePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ExamplePage />, document.getElementById('root'));
registerServiceWorker();
