import React, { Component } from 'react'
import add from "./logo/add.svg";
import close from "./logo/close.svg";

export default class Form extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3>Claim Reimbursements</h3>
                <div className="row">
                    <form>
                        
                        <div className="form-group">
                        <label for="Pick a type">Type of reimbursements</label>
                        <select id="pick a type" className="form-control pr-5 border-0">
                          <option>Pick a type</option>
                          <option>abc</option>
                        </select>
                        </div>
                        <div className="form-group border-0 ">
                        <label for="ExpenceDate">Expence Date</label><br/>
                        <input type="date" className="form-control border-0" id="ExpenceDate" name="ExpenceDate"/>
                        </div>
                        <div className="form-group">
                            <label for="Details">Details</label>
                            <input type="text" className="form-control border-0" placeholder="type in the datails"/>
                        </div>
                        <div className="form-group">
                            <label for="Ammount">Ammount</label>
                            <input type="text" className="form-control border-0" placeholder="eg:8987"/>

                        </div>
                        <div>
                            <b className="text-warning"><img src={add} className="m-2" alt="Delete" />Add new file</b>
                        </div>
                        <div className=" bg-light shadow-sm mb-2">
                            Sam.pdf
                           <div className="text-right float-right"><img src={close} className="m-2 " alt="close" /></div> 
                         </div>
                         
                        <div className="m-2">
                        <button type="button" className="btn btn-success btn-lg p-2 rounded">Request Reimbursement</button>
                        </div>


                    </form>
                                                                
                    

                </div>
                
            </div>
        )
    }
}
