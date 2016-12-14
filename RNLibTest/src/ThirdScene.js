import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ListView
} from 'react-native';


export default class ThirdScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});

        this.state = {

            dataSource: ds.cloneWithRows(['row1', 'row2'])

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
                <Text onPress={this._pushNative.bind(this)}>
                    跳转NativeVC
                </Text>


            </View>
        )
    }

    _pushNative() {
        this.props.navigator.push({
            title: 'NativeVC',
            screen: 'Scene.NativeVC'
        })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FCA1',
        justifyContent: 'center',
        alignItems: 'center'
    },

})
