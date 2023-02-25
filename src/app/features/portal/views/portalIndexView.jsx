import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActionButton2 from '../../../core/components/buttons/actionButton2';
import "../stylesheets/index.scss";

class PortalIndexView extends Component {
  state = {  } 
  render() { 
    const signInBtnConfig = {
      name: "Sign In", 
      className: "signin-btn",
      onClick: () => {},
      theme: "primary"
    };

    return (
      <div id="portal-index-view">
        <div className="content-card">
          <div className="section">
            <div className="title">Welcome Back!</div>
            <div className="group">
              <div className="label">Email</div>
              <input type="email" name="email" id="" placeholder='Enter Email' />
            </div>
            <div className="group">
              <div className="label">Password</div>
              <input type="password" name="password" id="" placeholder='Enter Password' />
            </div>
            <ActionButton2 config={signInBtnConfig} />
            <div className="signup-btn-content">
              Don't have an account yet?
              <Link to="/sign_up"> Sign Up </Link>
              now!
            </div>
          </div>
          <div className="section">
            <img src={require("../../../core/assets/samples/book.png")} alt="" />
            <div className="subtitle">Book - Harry Potter</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam beatae necessitatibus quasi corporis harum consequuntur. Esse velit aliquid tempora, eligendi veniam earum explicabo unde officiis repellat quas, nisi deserunt voluptatibus.</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default PortalIndexView;