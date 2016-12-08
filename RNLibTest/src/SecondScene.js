import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default class SecondScene extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static navigatorStyle = {
        // navigationBarHidden: true
        navBarHidden: true
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95DAC1'
    }
})
