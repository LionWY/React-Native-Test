import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class RightScene extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    右侧
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAC595',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        height: 40,
        width: 100,
        backgroundColor: '#6663E4'
    }
})
