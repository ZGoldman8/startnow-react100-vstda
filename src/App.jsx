import React, { Component } from 'react';
import ToDoItem from './ToDoItem1';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array: [],
      priority: 1, 
      addToDo: ''
    }

    this.addToDoChange = this.addToDoChange.bind(this)
    this.addToDo = this.addToDo.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.priorityChange = this.priorityChange.bind(this)

  }

  
  addToDoChange(event) {
    this.setState({ addToDo: event.target.value }, () => { console.log(this.state) })
  }

  priorityChange(event) {
    this.setState({ priority: event.target.value }, () => {console.log(this.state)})
  }

  // Set state when clicking add
  addToDo() {
    var objectPairs = {};
    objectPairs.description = this.state.addToDo;
    objectPairs.priority = this.state.priority;
    var temporaryArr = this.state.array;
    temporaryArr.push(objectPairs);
    this.setState({ array: temporaryArr }, () => console.log(this.state.array))
  }
  
  // Splice array when clicking delete
  handleDelete(index) {
    var temporaryArr = this.state.array;
    temporaryArr.splice(index,1)      
    this.setState({array: temporaryArr }, () => console.log(this.state.array))
}

  // Edit array when clicking update
  handleEdit(index, editArray) {
    var temporaryArr = this.state.array;
    temporaryArr.splice(index, 1, editArray)
    this.setState({array: temporaryArr}, () => console.log(this.state.array))
  }

  introMessage() {
    if (this.state.array == 0) {
      return (
        <div className="card-body text-primary font-weight-bold">
          Welcome to Very Simple ToDo App!<br />
          Get started now by adding a new todo on the left.
        </div>
      )
    }
  }

  render() {
    const { toDoItem } = this.props
    return (
      <div className='container'>
        <h1 className='text-white'>Very Simple ToDo App</h1>
        <h2 className='text-white'>Track all of the things</h2>
        <hr />
        {/* First DIV Box */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card p-0">
              <div className="card-header">
                Add New ToDo
            </div>
              <div className="card-body">
                <h5 className="card-title">I want to..</h5>
                <textarea className="create-todo-text card-text" onChange={this.addToDoChange} name="addToDo"></textarea>
                <br /><br /><strong>How much of a priority is this?</strong>
                <br /><select className="create-todo-priority" onChange={this.priorityChange}>
                  <option>Select a Priority</option>
                  <option value="1">Low Priority</option>
                  <option value="2">Medium Priority</option>
                  <option value="3">High Priority</option>
                </select>
                <hr />
                <button className="btn btn-primary create-todo" id="addToDo" onClick={this.addToDo}>Add</button>
              </div>
            </div>
          </div>
          {/* Second DIV Box */}
          <div>
            <div className="card px-4">
              <div className="card-header">
                View ToDos
            </div>
                {this.introMessage()}
                <div className="row">
                <ul className="list-group">
                    {this.state.array.map((item, index) => <ToDoItem key={index} index={index} priority={item.priority} 
                    description={item.description} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
