import React from 'react';
import HeaderSidebar from '../components/HeaderSidebar';
import Footer from '../components/Footer';


 export default class Settings extends React.Component {
    render() {
        return (
           
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
                                <Footer/>
                            </div>
                        </div>
                </div>  
                </div> 
        )
    }
    
}

