import React, { Fragment } from 'react';
import { showToast } from '../utils/library'
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';




export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader : false
        };

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

        /***  binding functions ***/
        this.handleLogin = this.handleLogin.bind(this)


        
    }

     /*** function defination for login ***/
      handleLogin(e) {
        e.preventDefault();
        if(this.emailRef.current.value != '' && this.passwordRef.current.value != ''){
            
        }else{
            showToast('error','Please provide email & password')
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
                                        <form  onSubmit = {this.handleLogin}>
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input className="au-input au-input--full" type="email" name="email" ref={this.emailRef} placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input className="au-input au-input--full" type="password" name="password" ref={this.passwordRef} placeholder="Password"/>
                                            </div>
                                            <div className="login-checkbox">
                                                <label>
                                                    {/* <input type="checkbox" name="remember"/>Remember Me */}
                                                </label>
                                                <label>
                                                    <a href="#">Forgotten Password?</a>
                                                </label>
                                            </div>
                                            <button  className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                            
                                        </form>
                                        <div className="register-link">
                                            <p>
                                                Don't you have account?
                                                <Link to="/signup">Sign Up Here</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Loader show={this.state.showLoader}/>
              </Fragment> 
              
        )
    }
    
    
}

