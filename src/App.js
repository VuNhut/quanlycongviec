import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import List from './components/List';
var randomstring = require("randomstring");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm : false
        }
    }
    
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            });
        }
    }
    
    
    generateData = () => {
        var tasks = [
            {
                id: randomstring.generate(),
                name: 'Học Angular',
                status: true
            },
            {
                id: randomstring.generate(),
                name: 'Học React',
                status: false
            },
            {
                id: randomstring.generate(),
                name: 'Học PHP',
                status: true
            }
        ];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    displayForm = () => {
        this.setState({
            isDisplayForm : true
        });
    }

    closeForm = () => {
        this.setState({
            isDisplayForm : false
        });
    }

    onSubmit = (data) => {
        data.id = randomstring.generate();
        var { tasks } = this.state;
        tasks.push(data)
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    deleteItem = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex = (idItem) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === idItem) {
                result = index;
            }
        })
        return result;
    }
    
    render() {
        var { tasks, isDisplayForm } = this.state;
        var form = isDisplayForm ? <TaskForm dataSubmit = { this.onSubmit } closeForm = { this.closeForm } /> : "";
        return (
            <div className="container">
                <div className="row">
                    { form }
                    <div className= { isDisplayForm ? "col-8" : "col-12" }>
                        <button className="btn btn-primary" onClick= { this.displayForm }><span className="mr-2"><i className="fas fa-plus"></i></span>Thêm công việc</button>
                        <button className="btn btn-info ml-2" onClick={ this.generateData } >Generate</button>
                        <div className="form-group">
                            <Search />
                            <Sort />
                        </div>
                        <List tasks = { tasks } deleteItem = { this.deleteItem } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
