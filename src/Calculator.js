import React from 'react'
import Key from './Key'
import Display from './Display'

class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            display: "",
            calc: ""
        }
        this.appendCalc = this.appendCalc.bind(this)
        this.evaluate = this.evaluate.bind(this)
        this.clearDisplay = this.clearDisplay.bind(this)
        this.sqrt = this.sqrt.bind(this)
        this.backspace = this.backspace.bind(this)
    }

    clearDisplay() {
        this.setState( () => {
            return {
                display: "",
                calc: ""
            }
        })
    }
    backspace() {
        this.setState( (prevState) => {
            return {
                display: prevState.display.slice(0, -1),
                calc: prevState.calc.slice(0, -1)
            }
        })
    }

    evaluate() {
        this.setState( () => {
            return {
                display: eval(this.state.calc).toString().length < 10 ? eval(this.state.calc) : eval(this.state.calc).toPrecision(10),
                calc: eval(this.state.calc)
            }
        })
        console.log(typeof this.state.calc)
        
    }

    appendCalc(num, val) {
        this.setState( prevState => {
            return {
                display: prevState.display.length < 12 ? prevState.display + val : prevState.display,
                calc: prevState.display.length < 12 ? prevState.calc + num : prevState.calc
            }
        })
    } // this method is to be passed down to child

    sqrt() {
        this.setState( prevState => {
            return {
                display: Math.sqrt(prevState.display) % 1 === 0 ? Math.sqrt(prevState.display) : Math.sqrt(prevState.display).toPrecision(10) ,
                calc: Math.sqrt(prevState.calc)
            }
            
        })
        console.log(typeof this.state.calc)

        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Display display={this.state.display} />
                </div>
                <div className="row">
                    <Key num="<-" clickHandler={this.backspace} />
                    <Key num="+" val="+" clickHandler={this.appendCalc} />
                    <Key num="C" clickHandler={this.clearDisplay} />
                    <Key num="x" val="*" clickHandler={this.appendCalc}  />
                    <Key num="√" clickHandler={this.sqrt}  />
                </div>
                <div className="row">
                    <Key num="1" val="1" clickHandler={this.appendCalc} />
                    <Key num="2" val="2" clickHandler={this.appendCalc} />
                    <Key num="3" val="3" clickHandler={this.appendCalc} />
                    <Key num="^" val="**" clickHandler={this.appendCalc}  />
                </div>
                <div className="row">
                    <Key num="4" val="4"  clickHandler={this.appendCalc} />
                    <Key num="5" val="5" clickHandler={this.appendCalc} />
                    <Key num="6" val="6" clickHandler={this.appendCalc} />
                    <Key num="÷" val="/" clickHandler={this.appendCalc} />
                </div>
                <div className="row">
                    <Key num="7" val="7" clickHandler={this.appendCalc} />
                    <Key num="8" val="8"clickHandler={this.appendCalc} />
                    <Key num="9" val="9"clickHandler={this.appendCalc} />
                    <Key num="=" clickHandler={this.evaluate}/>
                </div>
                
                
            </div>
    )}
}

export default Calculator