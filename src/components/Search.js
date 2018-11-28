import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <form className="search-form mr-3">
            <input
                type="text"
                className="form-control search-input" placeholder="Nhập từ khóa cần tìm" />
            <button className="btn btn-primary"><span><i className="fas fa-search mr-2"></i></span>Tìm kiếm</button>
        </form>
    );
  }
}

export default App;
