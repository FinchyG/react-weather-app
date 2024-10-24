import React from "react";

function AppHeader(props) {

  const headerStyle = {
    fontSize: '2.3rem',
    color: '#119000',
    marginBottom: '1rem'
  }
  
  return (
    <h1 
      style={headerStyle}
    >
      {props.textContent}    
    </h1>
  );
}

export default AppHeader;