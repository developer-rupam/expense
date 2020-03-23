import React, { Fragment } from 'react';
import HeaderSidebar from '../components/HeaderSidebar';
import Footer from '../components/Footer';
import {Modal,Button} from 'react-bootstrap';


 export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddBillingTypeModal : false
        };

        /***  binding functions ***/
        this.openAddBillingTypeModal = this.openAddBillingTypeModal.bind(this)
        this.closeAddBillingTypeModal = this.closeAddBillingTypeModal.bind(this)
    }

    /*** function defination for opening add biling type modal ***/
    openAddBillingTypeModal() {
        this.setState({showAddBillingTypeModal: true});
    }
    /*** function defination for closing add biling type modal ***/
    closeAddBillingTypeModal() {
        this.setState({showAddBillingTypeModal: false});
    }

    render() {
        const showAddBillingTypeModal = this.state.showAddBillingTypeModal;
        console.log(showAddBillingTypeModal)
        return (
         <Fragment> 
        <div className="page-container">
                <HeaderSidebar/>
                <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                            <h1>Settings</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="top-campaign">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h3 className="title-3 m-b-30">Assets</h3>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={this.openAddBillingTypeModal}>
                                                    <i className="fas fa-plus"></i> Add Assets
                                                    </button>
                                                </div>
                                            </div>
                                        <div className="table-responsive">
                                            <table className="table table-top-campaign">
                                                <tbody>
                                                    <tr>
                                                        <td>4. Germany</td>
                                                        <td>$20,366.96</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="top-campaign">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h3 className="title-3 m-b-30">Billing Type</h3>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={this.openAddBillingTypeModal}>
                                                    <i className="fas fa-plus"></i> Add Billing Type
                                                    </button>
                                                </div>
                                            </div>
                                        <div className="table-responsive">
                                            <table className="table table-top-campaign">
                                                <tbody>
                                                    <tr>
                                                        <td>4. Germany</td>
                                                        <td>$20,366.96</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <Footer/>
                            </div>
                        </div>
                </div>  
                </div> 

                <Modal show={showAddBillingTypeModal} onHide={this.closeAddBillingTypeModal} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Billing Type</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >
                            <div className="form-group">
                                <label htmlFor="cc-payment" className="control-label mb-1">Billing Type Name</label>
                                <input id="cc-pament" name="cc-payment" type="text" className="form-control" aria-required="true" aria-invalid="false" />
                            </div>
                            <div className="form-group has-success">
                                <label htmlFor="cc-name" className="control-label mb-1">Assets</label>
                                <select className="form-control cc-name valid">
                                    <option value="">Select an asset</option>
                                </select>    
                            </div>
                            
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="cc-exp" className="control-label mb-1">Min Limit</label>
                                        <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp"  placeholder="0.00"
                                            />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="x_card_code" className="control-label mb-1">Max Limit</label>
                                    <div className="input-group">
                                        <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc"  placeholder="1,00,000" />

                                    </div>
                                </div>
                            </div>
                            <div>
                                <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                <i className="fas fa-save"></i> Save
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                    </Modal.Footer>
                </Modal>
          </Fragment>    
        )
    }
    
}

