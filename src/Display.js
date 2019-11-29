import React from 'react'

function Display(props){
    const displayStyle = {
        fontSize: "4em",
        padding: "0.1em",
        color: "red",
        fontWeight: "bold"

    }
    return (
        <div className="display-cont">
            <div className="display-calc">
                <h2>{props.history}</h2>

            </div>

            <div className="display-main">
                <h2 style={displayStyle}>{props.display}</h2>
            </div>
        </div>
       
    )
}

export default Display