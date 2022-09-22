import React, { Component } from 'react';

import SearchBar from '../SearchBar';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';

import api from '../../services/api';

const KEY = process.env.REACT_APP_YT_KEY

class App extends Component {
    state = {
        videos: [],
        selectVideo: null,
    };

    componentDidMount(){
        this.onTermSubmit('tiktok');
    }

    onTermSubmit = async term => {
        const response = await api.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY,
            },
        });

        const { items } = response.data;
        this.setState({ videos: items,
            selectVideo: items[0],
        })
    };

    onVideoSelect = video => {
        this.setState({ selectVideo: video });
    }

    render(){
        return(
            <div className="ui container">                
                <SearchBar onFormSubmit={ this.onTermSubmit }/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={ this.state.selectVideo } />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={ this.onVideoSelect } videos={ this.state.videos }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;