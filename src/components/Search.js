import React, { Component } from 'react';

class App extends Component {

    handleChange = (event) => {
        var searchText = event.target.value.toLowerCase();
        this.props.searchText(searchText);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input mr-2"
                placeholder="Nhập từ khóa cần tìm"
                onChange={ this.handleChange } />
        );
    }
    }

export default App;
