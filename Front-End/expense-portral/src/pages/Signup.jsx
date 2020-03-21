import React, { Fragment } from 'react';
import { showConfirm } from '../utils/library'
import { Link } from 'react-router-dom';


export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.fullNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
        this.passwordRef = React.createRef();
        this.reTypePasswordRef = React.createRef();

        /***  binding functions ***/
        this.handleSignup = this.handleSignup.bind(this)


        
    }

     /*** function defination for login ***/
      handleSignup(e) {
        e.preventDefault();
        if(
            this.fullNameRef.current.value != '' && this.phoneRef.current.value != '' &&
            this.emailRef.current.value != '' && this.passwordRef.current.value != '' &&
            this.reTypePasswordRef.current.value != ''
        ){

        }else{
           
        }
    }

    render() {

        


        return (
              <Fragment>
                  <div className="page-wrapper">
                    <div className="page-content--bge5">
                        <div className="container">
                            <div className="login-wrap">
                                <div className="login-content">
                                    <div className="login-logo">
                                       
                                            <img src={require("../assets/images/icon/logo.png")} alt="CoolAdmin"/>
                                        
                                    </div>
                                    <div className="login-form">
                                        <form  onSubmit = {this.handleSignup}>
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input className="au-input au-input--full" type="text" name="fullname" ref={this.fullNameRef} placeholder="Full Name"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input className="au-input au-input--full" type="email" name="email" ref={this.emailRef} placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input className="au-input au-input--full" type="text" name="phone" ref={this.phoneRef} placeholder="Phone"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input className="au-input au-input--full" type="password" name="password" ref={this.passwordRef} placeholder="Password"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Re-Type Password</label>
                                                <input className="au-input au-input--full" type="password" name="password" ref={this.reTypePasswordRef} placeholder="Re-Type Password"/>
                                            </div>
                                           
                                            <button  className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign up</button>
                                            
                                        </form>
                                        <div className="register-link">
                                            <p>
                                                Already A member?
                                                <Link to="/">Sign In Here</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
              </Fragment> 
              
        )
    }
    
    
}

