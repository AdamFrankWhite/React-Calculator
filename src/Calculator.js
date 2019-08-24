import React from 'react'
import Key from './Key'

function Calculator(){
    return (
        <div className="container">
            <div className="row">
                <Key num="1" />
                <Key num="2" />
                <Key num="3" />
                <Key num="*" />
            </div>
            <div className="row">
                <Key num="4" />
                <Key num="5" />
                <Key num="6" />
                <Key num="%" />
            </div>
            <div className="row">
                <Key num="7" />
                <Key num="8" />
                <Key num="9" />
                <Key num="=" />
            </div>
            
            
        </div>
    )
}

export default Calculator