import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Trainer from './Assests/Trainer.jpg'

const Footer = () => {
  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <a href="#" style={{ textAlign: 'center', margin: 'auto' }} className='btn btn-primary mb-3'>Inquire</a>
    </div>

    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className='border'>
            <Figure>
            <Figure.Image
              src={Trainer}
              width={200}
              height={200}
            />
            </Figure>
            <p>
              Provides FINServ firms, providers, and consultants with general course audits from subject matter expert trainers in: Cryptocurrency; A.I; Digital Wallets; Web 3; DeFi; and Operations.
              We help firms to learn about new technologies, find providers, and keep clients informed. </p>
            <p>
              Our network partners support firms with Technology, Consulting, and API integrations and has worked with more than 200 SEC, State, FINRA registered firms in the U.S. and Europe since 2012.</p>

          </Col>
          <Col md={6} className='border'>
            <h6>Quick Links</h6>
              <div class="list-group">
                <a href="#">Home</a>
                <a href="#">Sign in</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Disclaimers</a>
              </div>

          </Col>
          <p className='bg-primary'>FIN Trainer is a division of Roberson Ventures Group, Inc. © All Rights Reserved (2018 - 2023).</p>
        </Row>
      </Container>
      <br /><br /> <br />
    </footer>
    </>
  );
};

export default Footer;
