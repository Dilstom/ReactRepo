import React, { Component } from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_K from '../cred';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// const API_KEY = 'AIzaSyDO-_OYwLCB1iW4x7QWEjHgKBKTaE-L_n8';
const API_KEY = API_K;

// create a new comoponents. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videosY => {
            // this.setState({ videos })
            this.setState({
                videos: videosY,
                selectedVideo: videosY[0]
            })
            // console.log('state: ', this.state.videos)
        });
    }

    render() {
        // console.log('props in app: ', this.props)
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={video => this.setState({ selectedVideo: video })} />
            </div>
        )
    }
}

// Take this component's generated HTML and put it on the page (in  the DOM)

ReactDom.render(<App />, document.querySelector('.container'))