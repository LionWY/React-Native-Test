import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class LeftScene extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} onPress={()=>{

                    this.props.navigator.toggleDrawer({
                        side: 'left',
                        animated: true
                    });
//                     this.props.navigator.toggleDrawer({
//   side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
//   animated: true, // does the toggle have transition animation or does it happen immediately (optional)
//   // to: 'close' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
// });


                }}>
                    左侧
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#136145',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        height: 40,
        width: 100,
        backgroundColor: '#BD5DD5'
    }
})
