import React from 'react';
import Header from '../Header';
import AddTask from '../AddTask';
import TaskList from '../TaskList';
import Filter from '../Filter';
import Clear from '../Clear';
// import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
      todos: [
        { text: 'Get out of bed', done: false, id: 0 },
        { text: 'Eat food', done: false, id: 1 },
        { text: 'Buy snacks', done: false, id: 2 },
        { text: 'Nap', done: false, id: 3 },
        { text: 'Study', done: false, id: 4 },
        { text: 'Go to Gyu Kaku', done: false, id: 5 }
      ],
      filter: 'all',
      idCounter: 6
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleDone = this.toggleDone.bind(this)
  }

  

  componentWillMount() {
    let promise = axios.get("http://localhost:8000/todos")
    promise.then((response) => {
      console.log(response.data)
      this.setState({ todos: response.data })
    })
  }

  //CLICKADD
  clickHandler = (todoText) => {
    let newTodo = {
      text: todoText,
      done: false
    }

    axios.post('http://localhost:8000/todos', newTodo)
      .then((response) => {
        this.setState({
          todos: this.state.todos.concat(response.data)
        })
      })
  }

  //CHECKDONE
  toggleDone = (index) => {
    this.state.todos[index].done = !this.state.todos[index].done

    axios.put(`http://localhost:8000/todos`, {
      id: this.state.todos[index]._id,
      done: !this.state.todos[index].done
    })

    this.setState({
      todos: this.state.todos
    })
  }

  //CLEARBUTTON
  clickClear = () => {
    let incomplete = this.state.todos.filter(
      function (todos) {
        return !todos.done;
      }
    )

    this.setState({
      todos: incomplete
    })
  }

  //FILTERLIST
  changeFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <AddTask
          clickHandler={this.clickHandler}
        />
        <TaskList
          todos={this.state.todos}
          toggleDone={this.toggleDone}
          changeFilter={this.changeFilter}
        />
        <Filter changeFilter={this.changeFilter} />
        <Clear clickClear={this.clickClear} />
      </div>
    )
  }
}

export default App;