import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';




export default class ThirdScene extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.props.navigator.setOnNavigatorEvent(this.navigatorEvent.bind(this));
    }

    navigatorEvent(event){
        if (event.id === 1) {
            this.props.navigator.pop();

            alert('back');
        }
    }

    static navigatorStyle = {
        navBarBackgroundColor: 'red',
        navBarTextColor: 'green',
        tabBarHidden: true,
        drawUnderTabBar: true,
        statusBarTextColorScheme: 'light'
    }
    static navigatorButtons = {
        leftButtons:[
            {
                title: 'back',
                id: 1
            }
        ]
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
        backgroundColor: '#00FCA1'
    },

})
