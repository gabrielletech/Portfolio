import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
