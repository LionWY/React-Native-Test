import React, {Component} from 'react';
import {
    CameraRoll,
    StyleSheet,
    Image,
    ScrollView,
    Text,
    View,
    AlertIOS
} from 'react-native';

var fetchParams ={
    first: 4,
    groupTypes: 'All',
    assetType: 'Photos',

};
var imgURL = 'http://vczero.github.io/lvtu/img/';

export default class CameraExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: null
        };
    }

    render() {

        var photos = this.state.photes || [];
        var photoView = [];
        for (var i = 0; i < 4; i+=2) {
            photoView.push(
                <View style={styles.row}>
                    <View style={styles.flex_1}>
                        <Image
                            resizeMode="stretch"
                            style={[styles.imgHeight, styles.m5]}
                            source={{uri: photos[i]}}
                        />
                    </View>
                    <View style={styles.flex_1}>
                        <Image
                            resizeMode="stretch"
                            style={[styles.imgHeight, styles.m5]}
                            source={{uri: photos[parseInt(i) + 1]}}
                        />
                    </View>
                </View>
            );
        }





        return (
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.flex_1}>
                        <Image
                            resizeMode="stretch"
                            style={[styles.imgHeight, styles.m5]}
                            source={{uri: imgURL + 'city.jpg'}}
                        />
                    </View>
                    <View style={styles.flex_1}>
                        <Image
                            resizeMode="stretch"
                            style={[styles.imgHeight, styles.m5]}
                            source={{uri: imgURL + '3.jpeg'}}
                        />
                    </View>
                </View>
                <View>
                    <Text onPress={this.saveImg.bind(this, 'city.jpg', '3.jpeg')}
                         style={[styles.saveImage]}>
                         保存图片到相册
                    </Text>
                </View>
                <View style={[{marginTop: 20}]}>
                    {photoView}
                </View>
            </ScrollView>

        );
    }

    componentDidMount() {
        var _that = this;

        CameraRoll.getPhotos(fetchParams)
        .then((data)=> {
            console.log('====' + data.edges);
            var edges = data.edges;
            var photos = [];
            for (var i in edges){
                photos.push(edges[i].node.image.uri);
            }
            _that.setState({
                photos: photos
            });
        }, ()=> {
            alert('图片获取失败');
        });
    }

    saveImg(img1, img2) {
        var _that = this;

        // CameraRoll.saveToCameraRoll(imgURL + img1);
        // CameraRoll.saveToCameraRoll(imgURL + img2);

        CameraRoll.saveToCameraRoll(imgURL + img2, 'photo', (url)=>{
            photos.unshift(url);
            _that.setState({
                photos: photos
            });
            AlertIOS.alert('图片保存成功');
        }, ()=> {
            AlertIOS.alert('图片保存失败');
        });

        AlertIOS.alert('图片保存成功');

        // CameraRoll.saveToCameraRoll(imgURL + img1, 'photo', (url)=>{
        //     if (url) {
        //         console.log('---------' + url);
        //         var photos =_that.state.photos;
        //         photos.unshift(url);
        //         _that.setState({
        //             photos: photos
        //         });
        //         CameraRoll.saveToCameraRoll(imgURL + img2, 'photo', (url)=>{
        //             photos.unshift(url);
        //             _that.setState({
        //                 photos: photos
        //             });
        //             alert('图片保存成功');
        //         }, ()=> {
        //             alert('图片保存失败');
        //         });
        //     }
        // }, ()=> {
        //     alert('图片保存失败');
        // });
    }

}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1
    },
    m5: {
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    row: {
        flexDirection: 'row'
    },
    imgHeight: {
        height: 120,
    },
    saveImage: {
        flex: 1,
        height: 30,
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: '#3BC1FF',
        color: '#FFF',
        lineHeight: 20,
        borderRadius: 5,
        marginHorizontal: 5,
        fontWeight: 'bold',

    }
})
