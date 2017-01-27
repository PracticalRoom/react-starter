import React from 'react';

function Application ({children}) {
  return (
    <div>
      {children}
    </div>
  );
};

Application.propTypes = {
  children: React.PropTypes.node
}

export default Application;
