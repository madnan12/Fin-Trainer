import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';

const About = () => {
    return (
        <div className='text-center'>
            <h2 className='mt-5'>How we work</h2>
            <p>

                Sign-up for portal access<br />
                Take a course audit from firm training providers<br />

                Invite Clients<br />

                Connect with a provider for more training opportunity
            </p>


            <h4 className='mt-5'>Take Course Audits </h4>
            <Table responsive className='border'>

                <tbody>
                    <tr>
                        <td className='tableCell'>
                            <h5>
                                Cryptocurrency
                            </h5>
                            Bitcoin, Ethereum, Stablecoins, and more


                        </td>
                        <td className='tableCell'>
                            <h5> A.I. </h5>
                            Chat GPT, Open AI, and More


                        </td>
                        <td className='tableCell'>
                            <h5>Digital Wallets</h5>
                            Self Custody



                        </td>
                    </tr>
                    <tr>
                        <td className='tableCell'>
                            <h5>Web 3</h5>
                            Decentralized Internet Protocols


                        </td>
                        <td className='tableCell'>
                            <h5>DeFI</h5>
                            Decentralized Finance

                        </td>
                        <td className='tableCell'>
                            <h5>Operations</h5>
                            How does new tech into my firm



                        </td>
                    </tr>

                </tbody>
            </Table>

            <h4 className='mt-5'>Reach out to training providers for</h4>
            <Table responsive className='border'>

                <tbody>
                    <tr>
                        <td className='tableCell'>
                            <h5>Continuing Education</h5>
                            Get Certifications or CE credit


                        </td>
                        <td className='tableCell'>
                            <h5>Project Managers</h5>
                            Hire Teacher/Trainers

                        </td>
                        <td className='tableCell'>
                            <h5>Consultants</h5>
                            Managed services

                        </td>

                    </tr>

                </tbody>
            </Table>

            <h4 className='mt-5'>Build your own training library</h4>

            <Table responsive className='border'>

                <tbody>
                    <tr>
                        <td className='tableCell'>
                            <h5>Staff Training</h5>
                        </td>
                        <td className='tableCell'>
                            <h5>Continuing Education Training</h5>
                        </td>
                        <td className='tableCell'>
                            <h5>Client Training</h5>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <h4 className='mt-5'>-or-</h4>
            <h4>Sell Courses</h4>
            <Table responsive className='border'>
                <tbody>
                    <tr>
                        <td className='tableCell'>
                            <h5>Build a series of courses to sell with a customized solution</h5>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default About;
