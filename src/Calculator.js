import React from 'react'
import Key from './Key'
import Display from './Display'

class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            display: "",
            calc: "",
            history: []
        }
        this.appendCalc = this.appendCalc.bind(this)
        this.evaluate = this.evaluate.bind(this)
        this.clearDisplay = this.clearDisplay.bind(this)
        this.sqrt = this.sqrt.bind(this)
        this.backspace = this.backspace.bind(this)
        this.back = this.back.bind(this)
    }

    back() {
        this.setState(prevState => {
            return {
                display: prevState.display,
                calc: prevState.calc,
                history: prevState.history
            }
        })
        console.log("ah")
    }

    clearDisplay() {
        this.setState( () => {
            return {
                display: "",
                calc: "",
                history: ""
            }
        })
    }
    backspace() {
        this.setState( prevState => {
            return {
                display: prevState.display.slice(0, -1),
                calc: prevState.calc.slice(0, -1)
            }
        })
    }

    evaluate() {
        this.setState( () => {
            return {
                display: eval(this.state.calc).toString().length < 10 ? eval(this.state.calc).toString() : eval(this.state.calc).toPrecision(10).toString(),
                calc: eval(this.state.calc).toString(),
                history: this.state.display.toString()
            }
        })
        
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
                calc: Math.sqrt(prevState.display)
            }
            
        })
    }

    // return {
    //     display: Math.sqrt(prevState.display) % 1 === 0 ? Math.sqrt(prevState.display) : Math.sqrt(prevState.display).toPrecision(10) ,
    //     calc: Math.sqrt(prevState.display)
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Display display={this.state.display} history={this.state.history}/>
                </div>
                <div className="row">
                    <Key num="<-" clickHandler={this.backspace} />
                    <Key num="+" val="+" clickHandler={this.appendCalc} />
                    <Key num="-" val="-" clickHandler={this.appendCalc} />
                    <Key num="C" clickHandler={this.clearDisplay} />
                    <Key num="x" val="*" clickHandler={this.appendCalc}  />
                    <Key num="√" clickHandler={this.sqrt}  />
                    <Key num="BACK" clickHandler={this.back} />
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

