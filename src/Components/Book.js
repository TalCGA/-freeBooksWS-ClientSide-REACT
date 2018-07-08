import React, {Component} from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdSave from 'react-icons/lib/md/save'

class Book extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
        this.delete = this.delete.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderUi = this.renderUi.bind(this)
    }

    delete(){
        this.props.onDelete(this.props.index)
    }

    
    renderForm(){
        return(
            <div>
                <form onSubmit={this.save}>
                    <textarea ref={input=>this.newBook = input}/>
                    <button><MdSave onClick={this.save}/></button>
                </form>
            </div>
            )
    }
    renderUi(){ 
        return(
            <div className='book'>
                <div> {this.props.children}</div>
                <span>
                    <button onClick = {this.delete} className="btn btn-primary"><MdDelete/></button>
                </span>
            </div>
            )
    }
    render(){
        return this.state.editing ? this.renderForm(): this.renderUi()
    }
}

export default Book