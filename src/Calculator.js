import React from 'react'
import Key from './Key'
import Display from './Display'

class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            display: ""
        }
        this.appendCalc = this.appendCalc.bind(this)
    }

    appendCalc(num) {
        this.setState( prevState => {
            return {
                display: prevState.display + num
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Display display={this.state.display} />
                </div>
                <div className="row">
                    <Key num="1" clickHandler={this.appendCalc} />
                    <Key num="2" clickHandler={this.appendCalc} />
                    <Key num="3" clickHandler={this.appendCalc} />
                    <Key num="*" clickHandler={this.appendCalc}  />
                </div>
                <div className="row">
                    <Key num="4" clickHandler={this.appendCalc} />
                    <Key num="5" clickHandler={this.appendCalc} />
                    <Key num="6" clickHandler={this.appendCalc} />
                    <Key num="%" clickHandler={this.appendCalc} />
                </div>
                <div className="row">
                    <Key num="7" clickHandler={this.appendCalc} />
                    <Key num="8" clickHandler={this.appendCalc} />
                    <Key num="9" clickHandler={this.appendCalc} />
                    <Key num="=" />
                </div>
                
                
            </div>
    )}
}

export default Calculator