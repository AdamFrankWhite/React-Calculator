import React from 'react'



class Key extends React.Component {
    render() {
        return (
                <div 
                    className={`calc-key ${this.props.color}`} 
                    onClick={() => this.props.clickHandler(this.props.val, this.props.num, this.props.count)} 
                >
                    <span>{this.props.num}</span>
                </div>
            )
        }
    }

export default Key