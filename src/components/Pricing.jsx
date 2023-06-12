import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';

const Pricing = () => {
    return (
        <div className='text-center'>
            <h3 className='mt-5'>Pricing</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th className='tableCell'>-</th>
                        <th className='tableCell'>Enterprise</th>
                        <th className='tableCell'>Premium</th>
                        <th className='tableCell'>Basic</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tableCell'>
                            -
                        </td>
                        <td className='tableCell'>
                            <h6>$6,000/yr | $500/mo.</h6>

                            <p className='text-danger'> Additional Admins
                                Contact us <br />
                                Save when purchased annually</p>
                        </td>
                        <td className='tableCell'>
                            <h6>$2500/yr | $200/mo. </h6>
                            <p className='text-danger'>
                                Additional Admins <br />
                                $250/yr. | $25/mo.<br />
                                Save when purchased annually</p>

                        </td>
                        <td className='tableCell'>
                            <h6>$1250/yr | $125/mo. </h6>
                            <p className='text-danger'>
                                Additional Admins<br />
                                $250/yr. | $25/mo.<br />

                                Save when purchased annually</p>

                        </td>
                    </tr>
                    <tr>
                        <td className='tableCell'>
                        </td>
                        <td className='tableCell'>
                            <button className='btn btn-primary'>Buy Now</button>
                        </td>
                        <td className='tableCell'>
                            <button className='btn btn-primary'>Buy Now</button>
                        </td>
                        <td className='tableCell'>
                            <button className='btn btn-primary'>Buy Now</button>

                        </td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                            Disclosure Portal <br />
                            4 admin users <br />
                            25 public/staff portals <br />

                        </td>
                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                        <td className='tableCell'>√</td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                            Disclosure Portal <br />
                            4 admin users<br />
                            unlimited  <br />
                            public/staff portals

                            

                        </td>
                        <td className='tableCell'></td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>-</td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Disclosure Portal<br />
                        10 admin users<br />
                        unlimited <br />
                        public/staff portals
                        

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'></td>
                        <td className='tableCell'>-</td>
                    </tr>
                    <tr style={{height:50}}>

                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Courses* <br/>
                        Discounts from <br/>
                        education/consulting providers<br/>

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>√</td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Learning Management System
                        <p className='text-danger'>Upload/Build your own training library</p>
                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>√</td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Sell Courses<br/>
                        White labeling<br/>
                        Branding

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Hosting

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default Pricing;
