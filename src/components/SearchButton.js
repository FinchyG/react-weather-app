import React from "react";

function SearchButton(props) {

    const searchButtonStyle = {
        marginTop: "2rem",
        borderRadius: "2rem",
        padding: "0.5rem"
    }

    return (
        <button 
            onClick={props.onClick}
            style={searchButtonStyle}
        >
            Search
        </button>
    )
}

export default SearchButton;