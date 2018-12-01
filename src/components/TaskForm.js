import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : "",
            name : "",
            status : true
        }
    }

    componentDidMount() {
        var { task } = this.props;
        if(task.id !== "") {
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        var { task } = this.props;
        if(prevProps.task.id !== task.id && task.id !== prevState.id) {
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            })
        }
    }    
    
    closeForm = () => {
        this.props.closeForm();
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if (name === "status") {
            (value === "true" || value === true) ? value = true : value = false;
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dataSubmit(this.state);
        this.closeForm();
    }

    onClear = () => {
        this.setState({
            name : "",
            status : true
        });
    }

    render() {
        var { id } = this.state;
        return (
            <div className="col-4 task-form">
                <p className="alert alert-warning mt-2">{ id !== "" ? "Cập nhật công việc" : "Thêm công việc" }<span className="icon-close" onClick={ this.closeForm }><i className="far fa-times-circle"></i></span></p>
                <form onSubmit = { this.onSubmit }>
                    <div className="form-group">
                        <label><strong>Tên:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            name = "name"
                            value = { this.state.name }
                            onChange = { this.onChange } />
                        <label className="mt-2"><strong>Trạng thái</strong></label>
                        <select
                            className="form-control"
                            name = "status"
                            value = { this.state.status }
                            onChange = { this.onChange } >
                            <option value = {true}>Kích hoạt</option>
                            <option value = {false}>Không kích hoạt</option>
                        </select>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-warning mr-2"><span className="mr-2"><i className="fas fa-plus"></i></span>Lưu lại</button>
                            <button type="button" className="btn btn-danger" onClick={ this.onClear }><span className="mr-2"><i className="fas fa-times"></i></span>Hủy bỏ</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default TaskForm;
