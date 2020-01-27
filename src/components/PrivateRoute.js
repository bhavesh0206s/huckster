import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: RouteComponent, ...rest})=>{
  const {currentUser} = useContext(AuthContext);

  return (
    <Route 
      {...rest} 
      render={routeProps=>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to='/signin' />
        )
      }
    />
  );
}
export default PrivateRoute;