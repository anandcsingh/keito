import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Authentication from '../../modules/Authentication'
import Login from './Login'

import React, { useEffect } from "react";
import Router from 'next/router';


const AuthenticatedPage = ({children}) => {
  
    if (!Authentication.loggedIn) {
      //useEffect(() => Router.push('/login'));
      return (
        <>
          <Login />
        </>
      );
    }
    else {
    return (
        <>
          {children}
        </>
      );
    }
};



export default AuthenticatedPage;