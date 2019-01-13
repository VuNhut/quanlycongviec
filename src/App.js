import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import List from './components/List';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    // updateItem = (id) => {
    //     var { tasks } = this.props;
    //     var index = this.findIndex(id);
    //     var taskEditing = tasks[index];
    //     this.setState({
    //         isDisplayForm: true,
    //         taskEditing : taskEditing
    //     })
    // }

    // findIndex = (idItem) => {
    //     var { tasks } = this.props;
    //     var result = -1;
    //     tasks.forEach((task, index) => {
    //         if (task.id === idItem) {
    //             result = index;
    //         }
    //     })
    //     return result;
    // }

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
        var { isDisplayForm, filter, search, sort } = this.state;
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
                    <TaskForm />
                    <div className= { isDisplayForm ? "col-8" : "col-12" }>
                        <button className="btn btn-primary" onClick= { this.displayForm }><span className="mr-2"><i className="fas fa-plus"></i></span>Thêm công việc</button>
                        <button className="btn btn-info ml-2" onClick={ this.generateData } >Generate</button>
                        <div className="form-group">
                            <Search searchText = { this.handleSearch } />
                            <Sort sort = { this.handleSort } />
                        </div>
                        <List deleteItem = { this.deleteItem } handleFilter = { this.handleFilter } />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks : state.task
    }
}

export default connect(mapStateToProps)(App);