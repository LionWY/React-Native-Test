import React, {Component} from 'react';
import {
    WebView
} from 'react-native';

export default class WebviewExample extends Component {

    static navigatorStyle = {
        tabBarHidden: true
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <WebView
                style={{backgroundColor: 'cyan', flex: 1}}
                source={{uri: this.props.url}}

            />
        )
    }
}
