import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

    deleteItem = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        var { tasks } = this.props;
        var elem = tasks.map((task, index) => {
            return <ListItem key= { task.id } index= { index } task= {task} deleteItem = { this.deleteItem } />;
        }); 
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
                        <td><input type="text" /></td>
                        <td><select name="state" id="state">
                            <option value="all">Tất cả</option>
                            <option value="kich-hoat">Kích hoạt</option>
                            <option value="chua-kich-hoat">Chưa kích hoạt</option>
                        </select></td>
                        <td></td>
                    </tr>
                    { elem }
                </tbody>
            </table>
        );
    }
}

export default List;
