import React, { Component } from 'react';

class ListItem extends Component {
    deleteItem = () => {
        this.props.deleteItem(this.props.task.id);
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name }</td>
                <td>{ task.status ? "Kích hoạt" : "Chưa kích hoạt" }</td>
                <td>
                    <button className="btn btn-warning mr-2">Sửa</button>
                    <button className="btn btn-danger" onClick={ this.deleteItem }>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ListItem;
