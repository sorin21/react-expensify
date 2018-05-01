// Higher Order Component
// A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return props => <div>
      {props.isAdmin && <p>This is prive info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>;
};

const requireAuthentication = (WrappedComponent) => {
  return props => <div>
      {props.isAutheticated ? <WrappedComponent {...props} /> : <p>You are not authenticated!</p>}
    </div>;
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo =  requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAutheticated={true} info="This is the detail" />, document.getElementById('app'));