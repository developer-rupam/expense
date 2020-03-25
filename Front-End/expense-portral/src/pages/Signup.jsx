import React, { Fragment } from 'react';
import { showConfirm } from '../utils/library';
import { WEBSERVICE } from '../utils/init';
import { Link,withRouter } from 'react-router-dom';
import { signup } from '../utils/service';


 class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPasswordMatched : false,
        };

        this.fullNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
        this.passwordRef = React.createRef();
        this.reTypePasswordRef = React.createRef();

        /***  binding functions ***/
        this.handleSignup = this.handleSignup.bind(this);
        this.matchPassword = this.matchPassword.bind(this);


        
    }

    /*** function defination for ***/
    matchPassword(){
        if(this.passwordRef.current.value == this.reTypePasswordRef.current.value){
            var passwordMatchStatus = true
        }else{
            var passwordMatchStatus = false
        }
        this.setState({isPasswordMatched : passwordMatchStatus})
    }
    
     /*** function defination for login ***/
      handleSignup(e) {
        e.preventDefault();
        if(
            this.fullNameRef.current.value != '' && this.phoneRef.current.value != '' &&
            this.emailRef.current.value != '' && this.passwordRef.current.value != '' &&
            this.reTypePasswordRef.current.value != '' && this.state.isPasswordMatched == true
        ){
            var payload = { 
                name : this.fullNameRef.current.value,
                email : this.emailRef.current.value,
                phone : this.phoneRef.current.value,
                password : this.passwordRef.current.value,
            }

            signup(payload).then(function(res){
                var response = res.data;
                if(response.error.error_data != 0){
                    //TODO: Show error toast
                }else{
                    //TODO: success alert here
                    console.log(this.props)
                    this.props.history.push('/')
                }
            }.bind(this)).catch(function(err){
                console.log(err)
            })
           
        }else{
           //TODO: error alert here
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
                                                <input className="au-input au-input--full" type="password" name="password" ref={this.passwordRef} onKeyUp={this.matchPassword} placeholder="Password"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Re-Type Password</label>
                                                <input className="au-input au-input--full" type="password" name="password" ref={this.reTypePasswordRef} onKeyUp={this.matchPassword} placeholder="Re-Type Password"/>
                                                {this.state.isPasswordMatched ? <span className="text-success"> <i className="fas fa-check-circle"></i> Password Matched</span> : <span className="text-danger"> <i className="fas fa-times-circle"></i> Password Mismatched</span>}
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

export default withRouter(Signup)