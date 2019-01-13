import React, { Component } from 'react';
import { editTask } from '../actions/index';
import { connect } from 'react-redux';

class ListItem extends Component {
    deleteItem = () => {
        this.props.deleteItem(this.props.task.id);
    }
    updateItem = () => {
        this.props.editItem(this.props.task.id);
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name }</td>
                <td>{ task.status ? "Kích hoạt" : "Chưa kích hoạt" }</td>
                <td>
                    <button className="btn btn-warning mr-2" onClick={ this.updateItem }>Sửa</button>
                    <button className="btn btn-danger" onClick={ this.deleteItem }>Xóa</button>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editItem : idTask => {
            dispatch(editTask(idTask));
        }
    }
}

export default connect(null, mapDispatchToProps)(ListItem);