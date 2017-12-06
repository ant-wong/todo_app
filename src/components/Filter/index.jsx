import React from 'react';

class Filter extends React.Component {
    constructor() {
        super()

        this.changeFilter = this.changeFilter.bind(this)
    }

    changeFilter() {
        this.props.changeFilter(this.filter.value)
    }
    
    render() {

        return (
            <select onChange={this.changeFilter} ref={(select) => { this.filter = select }} id="filter">
                <option value="all">all</option>
                <option value="active">active</option>
                <option value="complete">complete</option>
            </select>
        )
    }
}

export default Filter;

// import React from 'react';

// class Filter extends React.Component {
//     constructor() {
//         super()

//         this.changeFilter = this.changeFilter.bind(this)
//     }

//     changeFilter() {
//         this.props.changeFilter(this.filter.value)
//     }

//     render() {
//         return (
//             <div className="filterBox">
//                 <select onChange={this.changeFilter} ref={(select) => { this.filter = select }}>
//                     <option value="all" >all</option>
//                     <option value="active" >active</option>
//                     <option value="complete">complete</option>
//                 </select>
//             </div>
//         )
//     }
// }

// export default Filter;