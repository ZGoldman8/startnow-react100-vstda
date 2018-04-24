import React, { Component } from 'react';


class ToDoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDoItem: false,
            editArray: [],
            editToDo: '',
            editPriority: 1
        }

        this.handleToDo = this.handleToDo.bind(this)
        this.editToDo = this.editToDo.bind(this)
        this.editToDoChange = this.editToDoChange.bind(this)
        this.editPriorityChange = this.editPriorityChange.bind(this)
        this.saveToDo = this.saveToDo.bind(this)

    }

    saveToDo() {
        var objectPairs = {};
        var temporaryArray = [];
        objectPairs.priority = this.state.editPriority;
        objectPairs.description = this.state.editToDo;
        temporaryArray.push(objectPairs);
        this.setState({ toDoItem: !this.state.toDoItem, editArray: temporaryArray }, () => this.props.handleEdit(this.props.index, this.state.editArray[0]))
    }

    handleToDo() {
        this.setState({ toDoItem: !this.state.toDoItem })
    }

    editToDoChange(event) {
        this.setState({ editToDo: event.target.value}, () => {console.log(this.state)})
    }

    editPriorityChange(event) {
        this.setState({ editPriority: event.target.value}, () => {console.log(this.state)})
    }

    editToDo() {
        if (this.state.toDoItem == true) {
            return (
                <div className="editForm">
                <strong>Description</strong>
                <textarea className="update-todo-text" onChange={this.editToDoChange}>
                </textarea>
                <strong>Priority</strong>
                <br /><select className="update-todo-priority" onChange={this.editPriorityChange}>
                    <option>Select Priority</option>
                    <option value="1">Low Priority</option>
                    <option value="2">Medium Priority</option>
                    <option value="3">High Priority</option>
                </select>
                <br /><br /><button className="btn btn-primary text-right update-todo" id="saveToDo" 
                            onClick={()=>{this.saveToDo()}}>Save</button><br /><br />
                <br />
            </div>
            )
        }
    }

    choosePriority() {
        if (this.props.priority == 1) {
            return (
                "update-todo list-group-item list-group-item-success"
        )}

        else if (this.props.priority == 2) {
          return (
            "update-todo list-group-item list-group-item-warning"
        )} 
        
        else {
              return (
                "update-todo list-group-item list-group-item-danger"
              )
        }   
    }
    
    render() {
        return (
            <div >
                {this.editToDo()}
        <li className={this.choosePriority()}><input type="checkbox" /> {this.props.description}
        <span className="glyphicon glyphicon-trash rounded float-right px-2 delete-todo" onClick={() => this.props.handleDelete(this.props.index)} />
        <span className="glyphicon glyphicon-edit rounded float-right px-2 edit-todo" onClick={this.handleToDo} />
        </li>
            </div>
        )
    }
}


export default ToDoItem