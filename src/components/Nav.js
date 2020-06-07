import React, { Component } from 'react';
//import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
//import { Container, Row, Col } from 'reactstrap';
//import { About } from './About';
//import { Projects } from './Projects';
//import { Contact } from './Contact';

export class Nav extends Component {
  render () {
  return (
    <>
      <nav>
        <ul className="nav-links">
          <Link style={{ color: 'black'}} to="/">
            <li>Home</li>
          </Link>
          <Link style={{ color: 'black'}} to="/about">
            <li>About</li>
          </Link>
          <Link style={{ color: 'black'}} to="/projects">
            <li>Projects</li>
          </Link>
          <Link style={{ color: 'black'}} to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
    );
    }
};

export default Nav;

/*<Container>
    <Row>
        <Col>
            <BrowserRouter>
                <Link style={{ color: 'black' }} className="link" to="/">Home</Link><br/><hr className="line"/>
                <Link className="link" to="/about">About</Link><br /><hr className="line"/>
                <Link className="link" to="/projects">Projects</Link><br /><hr className="line"/>
                <Link className="link" to="/contact">Contact</Link><br /><hr className="line"/>

                <Switch>
                    <Route exact path="/" />
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/projects" render={() => <Projects />} />
                    <Route exact path="/contact" render={() => <Contact />} />
                </Switch>
            </BrowserRouter>
        </Col>
        <Col>
        <h1>Fadziso Gabrielle Ndoro</h1>
        <h2>Junior Full Stack Web Developer</h2>
        </Col>
      </Row>
    </Container> */