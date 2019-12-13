import React from 'react';
import { Link } from 'react-router-dom';
import { Input, FormLabel } from '@chakra-ui/core';
import './SignIn.css';

export default function SignIn() {
  return (
    <div id="wrapper">
      <div id="left">
        <div id="signin">
          <div className="logo">
            <img src="https://app.pluralsight.com/id/content/img/login-logo.png" alt="Alural Xight" />
          </div>
          <form>
            <div>
              <FormLabel htmlFor="email">
                Email or Username
                <Input id="email" name="email" type="text" className="text-input" />
              </FormLabel>
            </div>
            <div>
              <FormLabel htmlFor="password">
                Password
                <Input id="password" name="password" type="password" className="text-input" />
              </FormLabel>
            </div>
            <button type="button" className="primary-btn">
              Sign In
            </button>
          </form>
          <div className="links">
            <Link to="/forgot">Forgot Password</Link>
            <Link to="/signin1">Sign in with company or school</Link>
          </div>
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <Link to="/create" className="secondary-btn"> Create an account </Link>
        </div>
        <footer id="main-footer">
          <p>Copyright &copy; 2019, XpluralRight All Rights Reserved</p>
          <div>
            <Link to="terms">
              terms of use |
            </Link>
            <Link to="/policies">Privacy Policies</Link>
          </div>
        </footer>
      </div>
      <div id="right">
        <div id="showcase">
          {/* <div className="showcase-content">
            <h1 className="showcase-text">
              Let's create the future
              <strong>together</strong>
            </h1>
            <a href="#" className="secondary-btn">Start now!</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
