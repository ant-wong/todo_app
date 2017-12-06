import React from 'react';

class AddTask extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }

    textHandler = (event) => {
        this.setState({                                                                                                                                                                                                                                                      
            text: event.target.value
        });
    }

//REFERENCE CODE

    render() {

        return (
            <form>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-default" 
                            type="button" 
                            id="add-button" 
                            onClick={(event) => { this.props.clickHandler(this.state.text) }} 
                            >Add</button>
                    </span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Add a task.." 
                        onChange={(event) => {this.textHandler(event)}}
                        />
                </div>
            </form>
        );
    }
}

export default AddTask;