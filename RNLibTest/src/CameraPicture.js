import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';


import Camera from 'react-native-camera';

export default class CameraPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // this.props.navigator.setOnNavigatorEvent(this.navigatorEvent.bind(this));
    }

    navigatorEvent(event){
        if (event.id === 1) {
            this.props.navigator.pop();

            // alert('back');
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
                <Camera
                    ref={(cam)=>{
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                        [Capture]
                    </Text>


                </Camera>

            </View>
        )
    }

    takePicture(){
        this.camera.capture()
        .then((data)=>console.log(data))
        .catch(err=>console.log(err))
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FCA1'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
})
