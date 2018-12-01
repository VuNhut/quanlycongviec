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
            isDisplayForm : false,
            taskEditing : {id: "", name: "", status: true}
        }
    }
    
    componentDidMount() {
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
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    displayForm = () => {
        this.setState({
            isDisplayForm : true
        });
    }

    closeForm = () => {
        this.setState({
            isDisplayForm : false,
            taskEditing : {id: "", name: "", status: true}
        });
    }

    onSubmit = (data) => {
        var { tasks } = this.state;
        if (data.id !== "") {
            var index = this.findIndex(data.id);
            if (index !== -1) {
                tasks[index].name = data.name;
                tasks[index].status = data.status;
            }
        } else {
            data.id = randomstring.generate();
            tasks.push(data);
        }
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

    updateItem = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            isDisplayForm: true,
            taskEditing : taskEditing
        })
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
        var { tasks, isDisplayForm, taskEditing } = this.state;
        var form = isDisplayForm ? <TaskForm dataSubmit = { this.onSubmit } closeForm = { this.closeForm } task = { taskEditing } /> : "";
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
                        <List tasks = { tasks } deleteItem = { this.deleteItem } updateItem = { this.updateItem } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
