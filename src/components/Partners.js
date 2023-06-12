import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';
import fin_compliance from './Assests/fin_compliance.png'
import fin_lancer from './Assests/fin_lancer.png'
import fin_disclosure from './Assests/fin_disclosure.png'
import Trainer from './Assests/Trainer.jpg'
import '../index.css';

const Partners = () => {
    return (
        <div className='text-center'>
            <h3 className='mt-5'>Our Partners/Affiliates</h3>
            <Table responsive className='border'>
                <thead>
                    <tr>
                        <th className='tableCell'>
                        <Figure>
                        <Figure.Image
                          src={fin_disclosure}
                        />
                        </Figure>
                        </th>
                        <th className='tableCell'>
                        
                        <Figure>
                        <Figure.Image
                          src={fin_compliance}
                        />
                        </Figure>
                        </th>
                        <th className='tableCell'>
                        
                        <Figure>
                        <Figure.Image
                          src={fin_lancer}
                        />
                        </Figure>
                        
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tableCell'>


                        </td>
                        <td className='tableCell'>
                            
                        <Figure>
                        <Figure.Image
                            width={300}
                            height={300}                        
                          src={Trainer}
                        />
                        </Figure>

                        </td>
                        <td className='tableCell'>

                        </td>
                    </tr>

                </tbody>
            </Table>
            <h4 className='mt-5'>Join our FIN Lancer Network.</h4>
            <p>We're always looking for the following types to join our FIN Laner network for rev-share opportunities: <br />
                FinServ/Tech Consultants, Tech Strategists, Web Project Managers, Algorithm (AI) developers, and data scientists. <br />
                Contact us to learn more about building your book of business with us</p>

        </div>
    );
};

export default Partners;
