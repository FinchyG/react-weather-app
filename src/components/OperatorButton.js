import React from 'react';

function OperatorButton(props) {
  
  return (
    <button 
      className={props.className}
      onClick={props.onClick}
    >
      {props.symbol}    
    </button>
  );
}

export default OperatorButton;