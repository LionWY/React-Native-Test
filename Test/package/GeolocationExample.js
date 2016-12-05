import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

export default class GeolocationExample extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown'
    };

    watchID: ?number = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={{marginTop: 64}}>
                <Text>
                    <Text style={{fontWeight: '500'}}>
                        Initial position:
                    </Text>
                    {this.state.initialPosition}
                </Text>
                <Text>
                    <Text style={{fontWeight: '500'}}>
                        Current position:
                    </Text>
                    {this.state.lastPosition}
                </Text>
            </View>

        );
    }

}
