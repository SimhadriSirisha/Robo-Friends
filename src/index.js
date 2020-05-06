import React from 'react';//does DOM manipulation
import ReactDOM from 'react-dom'; //for websites
import './index.css';
import App from './containers/App'; //father of all the component
import * as serviceWorker from './serviceWorker';
import "tachyons";

ReactDOM.render(
	<App/>,	document.getElementById('root')
); //greeting is a props

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
