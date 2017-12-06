import React from 'react';

class Clear extends React.Component {
    render() {
        return (
            <button className="btn btn-default" id="clear"　onClick={this.props.clickClear}>Clear Completed</button>
        )
    }
}

export default Clear;