import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import List from './components/List';
import { bindActionCreators } from 'redux';
import { showTask } from './actions';
import { connect } from 'react-redux';

var randomstring = require("randomstring");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm : false,
            taskEditing : {id: "", name: "", status: true},
            filter : {
                name : "",
                status : -1
            },
            search : "",
            sort : {
                asc : false,
                desc : false
            }
        }
    }
    
    // componentDidMount() {
    //     if (localStorage && localStorage.getItem('tasks')) {
    //         var tasks = JSON.parse(localStorage.getItem('tasks'));
    //         this.setState({
    //             tasks : tasks
    //         });
    //     }
    // }
    
    
    // generateData = () => {
    //     var tasks = [
    //         {
    //             id: randomstring.generate(),
    //             name: 'Học Angular',
    //             status: true
    //         },
    //         {
    //             id: randomstring.generate(),
    //             name: 'Học React',
    //             status: false
    //         },
    //         {
    //             id: randomstring.generate(),
    //             name: 'Học PHP',
    //             status: true
    //         }
    //     ];
    //     this.setState({
    //         tasks: tasks
    //     })
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }

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

    // onSubmit = (data) => {
    //     var { tasks } = this.props;
    //     if (data.id !== "") {
    //         var index = this.findIndex(data.id);
    //         if (index !== -1) {
    //             tasks[index].name = data.name;
    //             tasks[index].status = data.status;
    //         }
    //     } else {
    //         data.id = randomstring.generate();
    //         tasks.push(data);
    //     }
    //     this.setState({
    //         tasks : tasks
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }

    deleteItem = (id) => {
        var { tasks } = this.props;
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
        var { tasks } = this.props;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            isDisplayForm: true,
            taskEditing : taskEditing
        })
    }

    findIndex = (idItem) => {
        var { tasks } = this.props;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === idItem) {
                result = index;
            }
        })
        return result;
    }

    handleFilter = (filterName, filterStatus) => {
        this.setState({
            filter : {
                name : filterName,
                status : filterStatus
            }
        });
    }

    handleSearch = (searchText) => {
        this.setState({
            search : searchText
        });
    }

    handleSort = (sortAsc, sortDesc) => {
        this.setState({
            sort : {
                asc : sortAsc,
                desc : sortDesc
            }
        });
    }
    
    render() {
        var { isDisplayForm, taskEditing, filter, search, sort } = this.state;
        var form = isDisplayForm ? <TaskForm closeForm = { this.closeForm } task = { taskEditing } /> : "";
        // tasks = tasks.filter(task => {
        //     if (filter.status !== -1) {
        //         return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1 && task.status === (filter.status === 1 ? true : false);
        //     } else {
        //         return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
        //     }
        // });
        // tasks = tasks.filter(task => {
        //         return task.name.toLowerCase().indexOf(search) !== -1;
        // });
        // if (sort.asc || sort.desc) {
        //     tasks.sort((a, b) => {
        //         return a.name > b.name ? sort.asc ? 1 : -1 : sort.asc ? -1 : 1;
        //     });
        // }
        return (
            <div className="container">
                <div className="row">
                    { form }
                    <div className= { isDisplayForm ? "col-8" : "col-12" }>
                        <button className="btn btn-primary" onClick= { this.displayForm }><span className="mr-2"><i className="fas fa-plus"></i></span>Thêm công việc</button>
                        <button className="btn btn-info ml-2" onClick={ this.generateData } >Generate</button>
                        <div className="form-group">
                            <Search searchText = { this.handleSearch } />
                            <Sort sort = { this.handleSort } />
                        </div>
                        <List deleteItem = { this.deleteItem } updateItem = { this.updateItem } handleFilter = { this.handleFilter } />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { tasks : state.task }
}

const mapDispatchToProps = dispatch => {
    return { action : bindActionCreators(showTask, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
