import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
        <div className="dropdown open">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                        Sắp xếp
                    </button>
            <div className="dropdown-menu" aria-labelledby="triggerId">
                <button className="dropdown-item" href="#">Từ A - Z</button>
                <button className="dropdown-item disabled" href="#">từ Z - A</button>
            </div>
        </div>
    );
  }
}

export default Sort;
