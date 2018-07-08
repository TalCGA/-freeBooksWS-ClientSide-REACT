
import React, { Component } from 'react'
import ByList from './ByList'
import ReactDOM from 'react-dom'


class ByName extends Component {
    constructor(props) {
        super(props)
        this.state = {newName:"",
        books:[

        ]}

        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this)
    }

  delete(id) {
        console.log('delete at ', id)
        this.setState(prevState => ({
            books:prevState.books.filter(book => book.id !== id)
        }))
    }


  handleNameChange(event){
    this.setState({newName: event.target.value})
  }

    handleSubmit(event){
        event.preventDefault();        
        fetch('https://freebooksws.herokuapp.com/getFreeBooksByName', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({book_name:this.state.newName})
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
                <form action='https://freebooksws.herokuapp.com/getFreeBooksByName' method="POST" onSubmit={this.handleSubmit}>
                    <h3> Search a book by name:</h3>
                    <h6>For exemple "White Boots".</h6>
                    <br/>
                    <input class="form-control" onChange={this.handleNameChange} value={this.state.newName} type="text" name="bookName" />                  
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