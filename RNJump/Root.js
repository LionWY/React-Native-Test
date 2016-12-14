import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


import Second from './Second';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#337ED7', alignItems: 'center', paddingTop: 64}}>
                <View style={{height: 44, backgroundColor:'red', marginTop: 60, width: 100, justifyContent: 'center', alignItems: 'center'}}>

                    <Text onPress={()=>{
                        this.props.navigator.push({
                            component: Second,
                            title: 'RN第二页',
                            leftButtonTitle: 'back',
                            onLeftButtonPress: ()=>{
                                this.props.navigator.pop()
                            },
                            passProps: {
                                text: 'root'
                            }

                        })
                    }}>
                        跳到第二页
                    </Text>
                </View>

            </View>
        );
    }
}
