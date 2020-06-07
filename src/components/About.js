import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import image from './images/bootcamp.png';
import image1 from './images/pearson.png';
import Nav from './Nav';
//import Footer from './Footer';

export class About extends Component {
  render() {
    return (
      <>
      <Nav /><hr style={{ width: 450 }}/>
      <div className="about">
      <h1 className="about-header">About</h1><br/>
      <Container className="container">
        <Row>
            <Col xs="6">
                <h3>Hi, I'm Fah. Nice to meet you :) </h3>
                <p>I am a young woman with a passion for design and all things pretty, aiming to build a successful 
                career in web development as a Front-End Developer.</p><br /><hr /><br /> 

                <h4>Education</h4>
                <p>After completing my first year as a Computer Science student where I learnt the basics of C++,
                I sought after a more practical approach and landed a spot in a Full-Stack Web Development Bootcamp. 
                Here I learnt to write web applications using a variety of languages, libraries, frameworks and dev tools 
                that include HTML, CSS, Bootstrap, JavaScript, jQuery, Node.js, React.js, Express, Next.js aswell as using
                the MongoDB database. I have since continued to actively develop my portfolio and skills by learning new languages
                and frameworks used in Front-end Development. </p><br />
                <a href="https://www.hyperiondev.com/"><img src={image} alt="bootcamp" className="bootcamp"/></a>
                <a href="https://www.pearsoninstitute.africa/"><img src={image1} alt="pearson" className="pearson"/></a>
               
               <br /><br />

            </Col>
            <Col xs="6">
            <div>
            <h4>Work</h4>
            <p>In 2017 I took a gap-year and worked as a student assistant at Ariel Primary School. I took on a leadership
            role, assisting children with reading, assisting in coaching pupils for their presentations for the Allied Arts Speech 
            and Drama Festival, drama club, infants sports and swimming aswell as first team girls tennis. I also gained exceptional 
            organization skills as I was responsible for the preparation childrens work in the infants department. </p>
            <p>Currently, I am a part-time junior research assistant at <a href="https://ferrahub.com/">Ferrahub</a> where I am responsible for assisting 
            with market research as well as content creation for the company's social media profiles and website. </p>

            <p>I am inspired by beauty & color, hence being extremely motivated to expand my creative side by continually 
            developing my skills to turn complex problems into beautiful designs. When I'm not coding, you will find me
            cooking, attending dance classes or working out. </p>
            </div>
            </Col>
        </Row>   
       </Container><hr style={{ width: 600}} />
      </div>
      </>
    );
  }
}

export default About;
