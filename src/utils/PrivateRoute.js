import React from "react";

import {
    Route,
    Redirect
  } from "react-router-dom";
function PrivateRoute ({children, authed, ...rest}) {
    return (
        <>
            <Route
                {...rest}
                render={(props) => authed === true
                ? children
                : <Redirect to={{pathname: '/user/login', state: {from: props.location}}} />}
            />
        </>
    )
  }
  
export default PrivateRoute;