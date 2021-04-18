import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'

class App extends React.Component {
    state = { videos: [] };

// here we pass in the term which is being searched inside the search bar, then we call the youtube API and send a GET request
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response.data.items);
        this.setState({ videos: response.data.items });
    };

    render () {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            Videos: {this.state.videos.length}.
        </div>
        );
    }
}

export default App;