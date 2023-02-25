import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActionButton2 from '../../../core/components/buttons/actionButton2';
import "../stylesheets/signUp.scss";

class SignUpView extends Component {
  state = {  } 
  render() { 
    const signUpBtnConfig = {
      name: "Sign Up", 
      className: "signup-btn",
      onClick: () => {},
      theme: "primary"
    };

    return (
      <div id="sign-up-view">
        <div className="content-card">
          <div className="title">We are excited for you to join!</div>
          <div className="group">
            <div className="label">School ID</div>
            <input type="text" name="school_id" id="" placeholder='School ID' />
          </div>
          <div className="flex-center">
            <div className="group">
              <div className="label">First Name</div>
              <input type="text" name="first_name" id="" placeholder='First Name' />
            </div>
            <div className="group">
              <div className="label">Last Name</div>
              <input type="text" name="last_name" id="" placeholder='Last Name' />
            </div>
          </div>
          <div className="flex-center">
            <div className="group">
              <div className="label">Email</div>
              <input type="email" name="email" id="" placeholder='Enter Email' />
            </div>
            <div className="group">
              <div className="label">Password</div>
              <input type="password" name="password" id="" placeholder='Enter Password' />
            </div>
          </div>
          <div className="group">
            <div className="label">Image</div>
            <input type="file" name="image" id="" />
          </div>
          <ActionButton2 config={signUpBtnConfig} />
          <div className="signin-btn-content">
            Already have an account?
            <Link to="/sign_in"> Sign In </Link>
            now!
          </div>
        </div>
      </div>
    );
  }
}
 
export default SignUpView;