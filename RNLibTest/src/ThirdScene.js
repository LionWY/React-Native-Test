import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ListView
} from 'react-native';


// var {ControlledRefreshableListView} = require('react-native-refreshable-listview')
// import {ControlledRefreshableListView} from 'react-native-refreshable-listview';



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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=><Text>{rowData}</Text>}
                />


            </View>
        )
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
