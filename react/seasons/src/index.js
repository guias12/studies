import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader'

class App extends Component {

    state = {
        latitude: null,
        errorMessage: '',       
    };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude } = position.coords;
                this.setState({ latitude });
            },
            err => {
                const { message } = err;
                this.setState({ errorMessage: message });
            }
        );
    }

    render() {
        if(this.state.latitude && !this.state.errorMessage) {
            return (
                <div>
                    <SeasonDisplay latitude={ this.state.latitude } />                    
                </div>
            );
        }
        
        if(!this.state.latitude && this.state.errorMessage) {
            return (
                <div>
                    <span>Error: { this.state.errorMessage }</span>
                </div>
            );
        }

        return <Loader message="Please allow the app to know your location..." />
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
