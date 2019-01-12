import React, { Component } from 'react';
import ListItem from './ListItem';
import ListItemNone from './ListItemNone';
import { showTask } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName : "",
            filterStatus : -1   // -1: All Status   0: Deactive Status  1: Active Status
        };
    }

    handleChange = (event) => {
        var name = event.target.name;
        var value = name === "filterStatus" ? parseInt(event.target.value) : event.target.value;
        this.props.handleFilter(name === "filterName" ? value : this.state.filterName, name === "filterStatus" ? value : this.state.filterStatus);
        this.setState({
            [name] : value
        });
    }

    render() {
        var { tasks } = this.props;
        var { filterName } = this.state;
        var elem;
        if (tasks.length === 0) {
            elem = <ListItemNone></ListItemNone>;
        } else {
            elem = tasks.map((task, index) => {
                return <ListItem key= { task.id } index= { index } task= {task} deleteItem = { this.props.deleteItem } updateItem = { this.props.updateItem } />;
            });
        }
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td><input type="text" name="filterName" value = { filterName } onChange = { this.handleChange } /></td>
                        <td><select name="filterStatus" id="state" onChange = { this.handleChange } >
                            <option value="-1">Tất cả</option>
                            <option value="1">Kích hoạt</option>
                            <option value="0">Chưa kích hoạt</option>
                        </select></td>
                        <td></td>
                    </tr>
                    { elem }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks : state.task
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action : bindActionCreators(showTask, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
