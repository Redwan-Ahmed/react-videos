import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    // this function is an event listener which listens for change in the search bar
    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        // prevent the browser from automatically refreshing after user inputs
        event.preventDefault();
        // calling the props when user submits form
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <h2 className="ui header" style={{ textAlign: "center" }}>YouTube</h2>
                    <div className="ui fluid icon input field">
                        <input 
                        type="text" 
                        placeholder = "Search YouTube"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                        <i className="youtube icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;