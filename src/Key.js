import React from 'react'



class Key extends React.Component {
    render() {
        return (
                <div 
                    className={`calc-key `} 
                    onClick={() => this.props.clickHandler(this.props.val, this.props.num)} 
                >
                    <span>{this.props.num}</span>
                </div>
            )
        }
    }

export default Key