
const USER_MODELS = {
    1: {name: 'mot', age: 23},
    2: {name: 'LL', age: 25}
};

import React, {Component} from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableOpacity
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        };
    }

    componentDidMount() {
        this.setState({
            id: this.props.id
        });
    }

    _pressBtn() {
        const{navigator} = this.props;

        if (this.props.getUser) {
            let user = USER_MODELS[this.props.id];
            this.props.getUser(user);
        }

        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={{backgroundColor: 'red'}}>
                <Text style={{color: 'yellow'}}>
                    获得的参数：id={this.state.id}
                </Text>
                <TouchableOpacity onPress={this._pressBtn.bind(this)}>
                    <Text style={{padding: 40}}>
                        点我跳回去
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
