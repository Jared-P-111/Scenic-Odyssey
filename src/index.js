import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/Styles.css';
import App from './app/layout/App';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(<App />, rootEl);
}

//prevents page reload when not necessary
if (module.hot) {
  module.hot.accept('./app/layout/App.jsx', function () {
    setTimeout(render);
  });
}

render();
