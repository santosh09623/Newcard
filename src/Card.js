import React, { Component } from 'react'
import "./App.css";
import Pending from "./logo/pending.svg";
import Edit from "./logo/edit1.svg";
import Delete from "./logo/Delete.svg";
import rejected from "./logo/rejected.svg";
import Form from "./Form.js";
import Reim from "./logo/reim.svg";
import Accepted from "./logo/Accepted.svg";


export default class Card extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
               <div className="m-3"><h2><img src={Reim} alt="Reim" />Reimbursements Data</h2></div> 

                <div className="container-fluid bg-white m-2">
                <div className="fw-bolder p-3"><h3>Reimbursements Data</h3></div>
                    <div className="row">
                        <div className="col-lg-9 bg-white ">

                            <table className="table">
                                <thead>
                                    <tr>
                                         <th scope="col">Date</th>
                                         <th scope="col">Requested on</th>
                                         <th scope="col">Type</th>
                                         <th scope="col">Reason</th>
                                         <th scope="col">Amount</th>
                                         <th scope="col">Attachment</th>
                                         <th scope="col" className="text-center">Status</th>  
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>13th march,2020</td>
                                        <td>23rd march,2020</td>
                                        <td>Accomodation</td>
                                        <td>Company work</td>
                                        <td>5000</td>
                                        <td>
                                            <button type="button" className=" rounded bg-white m-1 ">#1</button>
                                            <button type="button" className="rounded bg-white m-1">#2</button>
                                            <button type="button" className="rounded bg-white m-1">#3</button>

                                        </td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-outline-warning">
                                            <img src={Pending} className="m-1" alt="Pending" />Pending</button>
                                            <button className="border-0 bg-white m-2"><img src={Edit} alt="Edit" /></button>
                                            <button className="border-0 bg-white m-2"> <img src={Delete} alt="Delete" /></button>
                                        </td>
                                
                                    </tr>
                                    <tr>
                                    <td>13th march,2020</td>
                                        <td>23rd march,2020</td>
                                        <td>Accomodation</td>
                                        <td>Company work</td>
                                        <td>5000</td>
                                        <td>
                                             <button type="button" className="rounded bg-white m-1 ">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#3</button>
                                            <button type="button" className="rounded bg-white m-1">#4</button>

                                        </td>
                                        <td className="text-center"><button type="button" className="btn btn-outline-warning">
                                        <img src={Pending} className="m-1" alt="Pending" />Pending</button>
                                        <button className="border-0 bg-white m-2"><img src={Edit} alt="Edit" /></button>
                                        <button className="border-0 bg-white m-2"><img src={Delete} alt="Delete" /></button>
                                        </td>
                                
                                </tr>
                                <tr>
                                        <td>13th march,2020</td>
                                        <td>23rd march,2020</td>
                                        <td>Accomodation</td>
                                        <td>Company work</td>
                                        <td>5000</td>
                                        <td>
                                             <button type="button" className="rounded bg-white m-1 ">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-outline-success">
                                            <img src={Accepted} className="m-1" alt="Accepted" />Accepted</button>
                                            <button className="border-0 bg-white m-2"><img src={Edit} alt="Edit" /></button>
                                            <button className="border-0 bg-white m-2"> <img src={Delete} alt="Delete" /></button>
                                            </td>
                                        
                                </tr>
                                <tr>
                                        <td>13th march,2020</td>
                                        <td>23rd march,2020</td>
                                        <td>Accomodation</td>
                                        <td>Company work</td>
                                        <td>5000</td>
                                        <td>
                                             <button type="button" className="rounded bg-white m-1 ">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                       
                                        </td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-outline-success">
                                            <img src={Accepted} className="m-1" alt="Accepted" />Accepted</button>
                                            <button className="border-0 bg-white m-2"><img src={Edit} alt="Edit" /></button>
                                            <button className="border-0 bg-white m-2"><img src={Delete} alt="Delete" /></button>
                                            </td>
                                        
                                </tr>

                                <tr>
                                        <td>13th march,2020</td>
                                        <td>23rd march,2020</td>
                                        <td>Accomodation</td>
                                        <td>Company work</td>
                                        <td>5000</td>
                                        <td>
                                            <button type="button" className="rounded bg-white m-1 ">#1</button>
                                            <button type="button" className="rounded bg-white m-1">#1</button>
                                            <button type="button" className="rounded bg-white m-1">#1</button>

                                        </td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-outline-success">
                                            <img src={Accepted} className="m-1" alt="Accepted" />Accepted</button>
                                            <button className="border-0 bg-white m-2"><img src={Edit}  alt="Edit" /></button>
                                            <button className="border-0 bg-white m-2"><img src={Delete}  alt="Delete" /></button>
                                            </td>
                                
                                    </tr>
                                    <tr>
                                    <td>13th march,2020</td>
                                        <td>23rd march,2020</td>
                                        <td>Accomodation</td>
                                        <td>Company work</td>
                                        <td>5000</td>
                                        <td>
                                             <button type="button" className="rounded bg-white m-1 ">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-outline-success">
                                            <img src={Accepted} className="m-1" alt="Accepted" />Accepted</button>
                                            <button className="border-0 bg-white m-2"><img src={Edit}  alt="Edit" /></button>
                                            <button className="border-0 bg-white m-2"><img src={Delete}  alt="Delete" /></button>
                                            </td>
                                
                                </tr>
                                <tr>
                                        <td>13th march,2020</td>
                                        <td>23rd march,2020</td>
                                        <td>Accomodation</td>
                                        <td>Company work</td>
                                        <td>5000</td>
                                        <td>
                                             <button type="button" className="rounded bg-white m-1 ">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                        </td>
                                        <td className="text-center">

                                            <button type="button" className="btn btn-outline-success">
                                            <img src={Accepted} className="m-1" alt="Accepted" />Accepted</button>
                                            <button className="border-0 bg-white m-2"><img src={Edit} alt="Edit" /></button>
                                            <button className="border-0 bg-white m-2"><img src={Delete} alt="Delete" /></button>
                                        
                                            </td>
                                        
                                </tr>
                                <tr>
                                        <td>13th march,2020</td>
                                        <td>23rd march,2020</td>
                                        <td>Accomodation</td>
                                        <td>Company work</td>
                                        <td>5000</td>
                                        <td>
                                             <button type="button" className="rounded bg-white m-1 ">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                             <button type="button" className="rounded bg-white m-1">#1</button>
                                       
                                        </td>
                                        <td >
                                        <a href="##" className="">Reason?</a>
                                            <button type="button" className="btn btn-outline-danger">
                                            <img src={rejected} className="m-1" alt="Pending" />Rejected</button>
                                            <button className="border-0 bg-white m-2"><img src={Edit} alt="Edit" /></button>
                                            <button className="border-0 bg-white m-2"><img src={Delete} alt="Delete" /></button>
                                        
                                            </td>
                                        
                                </tr>
                                



                                </tbody>
                               
                            </table>
                            
                        </div>
                        <div className="col-lg-3 bg-light py-4">
                            <Form />
                            
                        </div>
                        
                    </div>
                    
                    
                </div>


            </div>

             )
    }
}
