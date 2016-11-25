import React, {Component} from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableOpacity
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 2,
            user: null
        };
    }

    _pressBtn() {
        let _this = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                params: {
                    id: this.state.id,
                    getUser: function(user) {
                        _this.setState({
                            user: user
                        })
                    }
                }
            });
        }
    }

    render() {
        if (this.state.user) {
            return(
                <View style={{backgroundColor: 'blue', flex: 1}}>
                    <Text>
                        用户信息：{JSON.stringify(this.state.user)}
                    </Text>
                </View>
            );

        } else {
            return(
                <View style={{backgroundColor: 'blue', flex: 1}}>
                    <TouchableOpacity onPress={this._pressBtn.bind(this)}>
                        <Text style={{padding: 40}}>
                            查询ID为{this.state.id}的用户信息
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }

    }
}
