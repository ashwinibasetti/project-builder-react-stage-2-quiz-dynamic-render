import React, { Component } from 'react'
import './Quiz2.css'

export default class Questions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             qnumber: 0,
             show: ""
        }
    }
    //previous button
    previous=()=>{
        console.log("Previous Question")
        this.setState({qnumber: (this.state.qnumber-1)>=0?(this.state.qnumber-1):(this.state.qnumber)})
    }
    //next button
    next=()=>{
        console.log("Next Question")
        this.setState({qnumber: (this.state.qnumber+1)>=15?(this.state.qnumber):(this.state.qnumber+1)})
    }
    //quit button
    quit=()=>{
        this.setState({show: "none"})
    }
    //displying questions and options
    display(){
        return(
            <div className={this.state.show+"questions"} key={this.props.value[this.state.qnumber].id}>
                <h1 className="heading">Question</h1>
                <div className="qnumbers">
                    <p><span>{this.props.value[this.state.qnumber].id}</span> of 15</p>
                    <p>{this.props.value[this.state.qnumber].question}</p>
                </div>
                <div className="options">
                    <button className="answer">{this.props.value[this.state.qnumber].optionA}</button>
                    <button className="answer">{this.props.value[this.state.qnumber].optionB}</button>
                    <button className="answer">{this.props.value[this.state.qnumber].optionC}</button>
                    <button className="answer">{this.props.value[this.state.qnumber].optionD}</button>
                </div>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.previous}>Previous</button>
                    <button className="next-btn" onClick={this.next}>Next</button>
                    <button className="quit-btn" onClick={this.quit}>Quit</button>
                </div>
            </div>
        )
        
    }
    render() {
        return (
            <>
            {this.display()}
            </>
        )
    }
}