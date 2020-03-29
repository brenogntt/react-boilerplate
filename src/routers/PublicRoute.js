import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated,  component: Component, ...rest} ) => ( // renomeei o component pra Component | ...rest is the other props that i didn't destructure
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props}/>
        )
)}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // flip it to boolean 
});

export default connect(mapStateToProps)(PublicRoute);