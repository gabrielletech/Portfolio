import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Nav from './Nav';
import clothing from './images/ClothingStore.png';
import iTunes from './images/ITunesStore.png';
import snake from './images/Snake.png';
import weather from './images/WeatherApp (2).png';
import homepage from './images/BlogSite.png';
import todos from './images/TodoList.jpg';

export class Projects extends Component {
  render() {
    return (
    <>
    <Nav /><hr style={{ width: 450 }}/>
      <div className="projects">
      <h1>My Projects: </h1>
      </div>

      <Container className="normal">
        <Row>
            <Col xs="6">
                <div className="project-items">
                    <a href="https://github.com/Fah22/Online-Clothing-Store"><img className="clothing" src={clothing} alt="Industria" /></a><hr />
                    <a href="https://searchitunesapp.herokuapp.com/"><img className="itunes" src={iTunes} alt="iTunes" /></a><hr />
                    <a href="https://snake-game22.herokuapp.com/"><img className="snake" src={snake} alt="SnakeGame" /></a> 
                </div>
            </Col>
            <Col xs="6">
                <div className="project-items">
                    <a href="https://github.com/Fah22/WeatherApp"><img className="weather" src={weather} alt="weatherApp" /></a><hr />
                    <a href="http://byvblogs.herokuapp.com"><img className="blogs" src={homepage} alt="byvlogs" /></a><hr />
                    <a href="http://github.com/Fah22/ToDoList-"><img className="todos" src={todos} alt="todos" /></a>
                </div>
            </Col>
            </Row>
     </Container>
    </>
    );
  }
}

export default Projects;
