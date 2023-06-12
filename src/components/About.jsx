import React from 'react';
import Figure from 'react-bootstrap/Figure';
import public_dashboard from './Assests/public_dashboard.png'

const About = () => {
  return (
    <div className='text-center'>
      <h2 className='mt-5'>What is our FIN Training Center?</h2>
      <p className='text-danger'>We provide a digital training center, access to continuing education programs, business collaboration tools, and a communications portal in one portal. </p>
    <p>
    We provide FINServ firms, providers, and consultants with course audits from subject matter technology expert trainers in: Cryptocurrency; A.I; Digital Wallets; Web 3; DeFi; and Operations.
    </p>
    <p>
    Our network partners support firms with Technology, Consulting, and API integrations and has worked with more than 200 SEC, State, FINRA registered firms in the U.S. and Europe since 2012.
    </p>

    <Figure>
      <Figure.Image
        width={250}
        height={180}
        alt="171x180"
        src={public_dashboard}
      />
      
      </Figure>
      </div>
  );
};

export default About;
