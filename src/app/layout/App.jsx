import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

//App Page Components
import { Home } from '../../pages/Home.js';
import { About } from '../../pages/About.js';
import { Artists } from '../../pages/Artists.js';
import { Camping } from '../../pages/Camping.js';
import { Media } from '../../pages/Media.js';
import { Vendors } from '../../pages/Vendors.js';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: black;
  }
`;

function App() {
  console.log('Hello from App');
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/artists" component={Artists} />
      <Route path="/camping" component={Camping} />
      <Route path="/media" component={Media} />
      <Route path="/vendors" component={Vendors} />
    </BrowserRouter>
  );
}

export default App;
