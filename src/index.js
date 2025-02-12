// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'
// import { injectGlobal } from 'styled-components'

import App from './App'

ReactDOM.render(
  <App />, document.getElementById('root')
)

// // eslint-disable-next-line
// injectGlobal`
//   body {
//     margin: 0;
//     font-size: 16px;
//     font-family: Alegreya, serif;
//   }
// `

if (module.hot) {
  module.hot.accept(App)
}
