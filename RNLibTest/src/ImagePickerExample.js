import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

var options = {
    title: 'Select Avatar',
    customButtons: [{
        name: 'fab',
        title: 'choose from fb'
    }],

    storageOption: {
        skipBackup: true,
        path: 'image'
    }
}

export default class ImagePickerExample extends Component {
    constructor() {
        super();
        this.state={
            portrait: null
        };
    }

    _selectPhotoFromCamera(){

        console.log('........');



        ImagePicker.showImagePicker(options, (response)=>{
            console.log('------' + response);

            if (response.didCancel) {
                console.log('cancel');
                alert('cancel');
            } else if (response.error) {
                console.log(response.error);
                alert(response.error)
            } else if (response.customButton) {
                console.log('customButton');
                alert('from customButton')
            } else {

                var source = {uri: response.uri.replace('file://', ''), isStatic: true};
                console.log('=============' + source);

                this.setState({
                    portrait: source
                })
            }
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={
                    this._selectPhotoFromCamera.bind(this)
                }>
                    <View style={{backgroundColor: 'red'}}>
                        {
                            this.state.portrait == null ?
                            <Text>Select a photo</Text> :
                            <Image source={this.state.portrait} style={{height: 150, width: 150}}/>
                        }
                    </View>

                </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
