import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';

export default class FirstScene extends Component {

    static navigatorButtons = {

        leftButtons:[{
            title: '右滑',
            id: 0,
        }],

        rightButtons:[
            {
                title: '左滑',
                id: 1
            },
            {
                title: 'Alert',
                id: 2
            }
        ]
    }

    static navigatorStyle = {
        navBarBackgroundColor: '#94E494',
        navBarTextColor: '#2D0D46',
    }




    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
        this.state = {

        };
    }

    onNavigatorEvent(event) {
        if (event.id === 1) {
            this.props.navigator.toggleDrawer({
                side: 'right',
                animated: true
            });

        } else if (event.id === 0) {
            this.props.navigator.toggleDrawer({
                side: 'left',
                animated: true
            });
        } else if (event.id === 2) {

            alert('R2');

        }

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                        title: 'Third',
                        screen: 'Scene.ThirdScene',
                    })

                }}>
                    <Text style={styles.btn}>
                        Third
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                        title: 'camera',
                        screen: 'Scene.Picture',


                    })
                }}>
                    <Text style={styles.btn}>
                        相册-react-native-image-picker
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                        title: 'icon',
                        screen: 'Scene.Icon',


                    })
                }}>
                    <Text style={styles.btn}>
                        Icon_react-native-vector-icons
                    </Text>
                </TouchableOpacity>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9F95DA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        height: 25,
        margin: 20,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 5,
        // alignSelf: 'center',
        width: Dimensions.get('window').width - 40,
        backgroundColor: 'blue'
    }
})
