import React from 'react';

function NumberButton(props) {
  
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
        >
            {props.num}
        </button>
    );
  }

  export default NumberButton;