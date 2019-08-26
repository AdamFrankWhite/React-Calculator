import React from 'react'

function Display(props){
    const displayStyle = {
        fontSize: "4em",
        padding: "0.1em",
        color: "red",
        fontWeight: "bold"

    }
    return (
        <div className="display">
            <h2 style={displayStyle}>{props.display}</h2>
        </div>
    )
}

export default Display