import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/bootstrap.min.css';
import NavBar from './Component/NavBar';
import LeftCol from './Component/LeftCol';
import RightCol from './Component/RightCol';
import Main from './Component/Main';


ReactDOM.render( <NavBar></NavBar>, document.getElementById("root") );
ReactDOM.render( <LeftCol></LeftCol>, document.getElementById("leftColumn") );
ReactDOM.render( <Main></Main>, document.getElementById("MainColumn") );
ReactDOM.render( <RightCol></RightCol>, document.getElementById("rightColumn") );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
