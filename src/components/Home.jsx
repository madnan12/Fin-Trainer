
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import main_background from './Assests/main_background.png';
import disclosure_app from './Assests/disclosure_app.png';
import Trainer from './Assests/Trainer.jpg'
import '../index.css';

const Home = () => {
  return (
    <div>
      <p className='mt-4 mx-auto'>
        Meta Tag: Continuing Education, E-Learning and Training for FINServ Consultants, RIAs, Vendors, and Agents
      </p>

      <div style={{ position: 'relative'}}>
        <Figure>
          <Figure.Image
          style={{ width: '100%' }}
            src={main_background}
          />
          <div style={{ position: 'absolute', top: '0%', left: '0', height: '20%', width: '20%', overflow: 'hidden' }}>
            <Figure.Image
              width={400}
              height={300}
              alt="right image"
              src={Trainer}
              style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}
            />
          </div>
          <div style={{ position: 'absolute', top: '0', right: '0', height: '100%', width: '50%', overflow: 'hidden' }}>
            <Figure.Image
              width={400}
              height={300}
              alt="right image"
              src={disclosure_app}
              style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}
            />
          </div>
          <div style={{ position: 'absolute', top: '0', right: '5%', height: '100%', top:'5%'}}>
           <a name="" id="" class="btn text-secondary btn-outline-info" href="#" role="button">Sign in</a>
          </div>
          <Figure.Caption style={{ position: 'absolute', bottom: '0', color: '#fff', padding: '8px', top: '50%' }}>
            <h2>Tech Education and Online Training</h2>
            <hr/>
            <p>
              E-Learning & Continuing Education for independent FINServ<br /> consultants, virtual providers, Investment Advisors (RIAs),<br /> Insurance Agents, and Vendors.
            </p>
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};

export default Home;
