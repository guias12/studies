import React, { Component } from 'react';

import api from '../../services/api';
import SearchBar from '../SearchBar';
import ImageList from '../ImageList'

class App extends Component{
    state = {
        images: [],
    };

    onSearchSubmit = async (term) => {
        const response = await api.get('/search/photos', {
            params: {
                query: term,
            },            
        });
        
        const { results } = response.data
        this.setState({ images: results });
    }

    render(){
        return (
            <div className="ui container" style={ {marginTop: '10px'} }>
                <SearchBar onSubmit={ this.onSearchSubmit }/>
                <ImageList images={ this.state.images }/>
            </div>
        );
    }
}

export default App;