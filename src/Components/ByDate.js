
import React, { Component } from 'react'
import ByList from './ByList'
import ReactDOM from 'react-dom'


class ByName extends Component {
    constructor(props) {
        super(props)
        this.state = {newStartDate:"",
        newLastDate:"",
        books:[
            
        ]}

        this.handleStartChange=this.handleStartChange.bind(this);
        this.handleLastChange=this.handleLastChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }


    handleStartChange(event){
        this.setState({newStartDate: event.target.value})
    }

    handleLastChange(event){
        this.setState({newLastDate: event.target.value})
    }


    handleSubmit(event){
        event.preventDefault();        
        fetch('https://freebooksws.herokuapp.com/getFreeBooksByDates', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({startDate:this.state.newStartDate, lastDate:this.state.newLastDate})
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            ReactDOM.render(<ByList books={data} />, document.getElementById("response"))
        })
    }

    render() {
        return (
            <div>
                <br/><br/>
                <form action='https://freebooksws.herokuapp.com/getFreeBooksByDates' method="POST" onSubmit={this.handleSubmit}>
                    <h3> Search a book by Dates:</h3>
                    <h6>For exemple Start Date:"April", Last Date:"May".</h6>
                    <br/>
                    <span>Enter Start Date(by month): </span>
                    <input class="form-control" onChange={this.handleStartChange} value={this.state.newStartDate} type="text" name="startDate" />                  
                    <br/>
                    <span>Enter Last Date(by month): </span>
                    <br/>
                    <input class="form-control" onChange={this.handleLastChange} value={this.state.newLastDate} type="text" name="lastDate" />                  
                    <br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br/><br/>
                <div id="response">
                </div>
            </div>
        )
    }
}
export default ByName