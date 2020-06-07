import React, { Component } from 'react';
import image from './images/Fadziso G Ndoro img.JPG';
import { FiMail } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { Container } from 'reactstrap';
import Nav from './Nav'

export class Contact extends Component {
  render() {
    return (
      <>
      <Nav /><hr style={{ width: 450 }}/>
      <h1 className="contact-header">Get in Touch with Me</h1>
      <Container className="container">
      <img src={image} alt="fah" id="fah"/><hr className="hr"/>
      <ul class="list-unstyled text-center">
      <li>
          <a className="contact-me" href="mailto:fadzisondoro@icloud.com"> <b><GoMail style={{ color: 'black' }}/> iCloud</b></a>
      </li>

      <li>
          <a className="contact-me" href="mailto:fadzisondoro.gn@gmail.com"> <b><FiMail style={{ color: 'black' }}/> Gmail</b></a>
      </li>

      <li>
          <a className="contact-me" href="http://linkedin.com/in/fadziso-ndoro-91b354160"> <b><GrLinkedin style={{ color: 'black' }}/> LinkedIn</b></a>
      </li>

      <li>
          <a className="contact-me" href="https://api.whatsapp.com/send?phone=27729802159"> <b><FaWhatsapp style={{ color: 'black' }}/> WhatsApp</b></a>
      </li>

      <li>
          <p className="contact-me" class="card-text"><b><MdCall /> +27 (0) 72 980 2159 </b></p><br />
      </li>
    </ul>
    </Container>
      </>
    );
  }
}

export default Contact;
