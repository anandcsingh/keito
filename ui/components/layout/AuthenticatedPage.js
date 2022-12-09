import PropTypes from 'prop-types';
import { render } from 'react-dom';
const AuthenticatedPage = ({children}) => {
    
    const loggedIn = false;
    if (!loggedIn) {
      return (<h1>Please log IN</h1>);
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