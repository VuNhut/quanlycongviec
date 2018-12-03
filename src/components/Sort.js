import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSortAsc : false,
            isSortDesc : false
        };
    }

    handleSortAsc = () => {
        this.props.sort(true, false);
        this.setState({
            isSortAsc : true,
            isSortDesc : false
        });
    }

    handleSortDesc = () => {
        this.props.sort(false, true);
        this.setState({
            isSortAsc : false,
            isSortDesc : true
        });
    }
    
    render() {
        var { isSortAsc, isSortDesc } = this.state;
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                            Sắp xếp
                        </button>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                    <button className={ isSortAsc ? "dropdown-item active" : "dropdown-item"} href="#" onClick = { this.handleSortAsc }>Từ A - Z</button>
                    <button className={ isSortDesc ? "dropdown-item active" : "dropdown-item"} href="#" onClick = { this.handleSortDesc }>từ Z - A</button>
                </div>
            </div>
        );
    }
}

export default Sort;
