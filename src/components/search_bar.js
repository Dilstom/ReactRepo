import React, { Component } from 'react';
// const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onInputChange = term => {
        this.setState({ term });
        this.props.onSearchTermChange(term)
    }
    render() {
        return (
            <div className='search-bar'>
                {/* <input onChange={this.onInputChange} /> */}
                <input
                    value={this.state.term} // input now is a controlled component
                    onChange={event => this.onInputChange(event.target.value)}
                // handleTermChange={() => { this.props.onSearchTermChange(value) }}
                />
                {/* Value of the input: {this.state.term} */}
            </div>
        );
    }

}

export default SearchBar;