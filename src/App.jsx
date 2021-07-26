import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import Home from '@pages/Home';
// eslint-disable-next-line import/no-unresolved
import '@styles/App.scss';

const App = () => {
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  console.log(videos)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
