import React from 'react';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Education from './Components/Education';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  const h = window.innerHeight
  return (
    <Router>
      <div style={{ height: h, display: 'flex', backgroundColor:'#f6f5f7' }}>
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/profile/" exact component={About}></Route>
          <Route path="/profile/education" component={Education}></Route>
          <Route path="/profile/skills" component={Skills}></Route>
          <Route path="/profile/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
