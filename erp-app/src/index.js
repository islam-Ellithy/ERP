import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Service from './components/Service';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Home/>, document.getElementById('root'));
registerServiceWorker();
