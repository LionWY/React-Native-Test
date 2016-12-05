import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

var url = 'http://facebook.github.io/react-native/movies.json';


export default class RequestExample extends Component {
    render () {
        return (
            <View style={{marginTop: 64}}>
                <Text onPress={this._doXMLHttpRequest} style={styles.btn}>
                    XMLHttpRequest 请求数据
                </Text>
                <Text onPress={this._doFetch} style={styles.btn}>
                    Fetch 请求数据
                </Text>
                <Text onPress={this._postRequest(url, null, (data)=>{
                    console.log('====' + data);
                })} style={styles.btn}>
                    Post 请求数据
                </Text>
                <Text onPress={this._getMoviesFromApiAsync} style={styles.btn}>
                    Movies 请求数据
                </Text>
            </View>

        );
    }

    _doXMLHttpRequest() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                console.log('success', request.responseText);
            } else {
                console.warn('error');
            }

        };
        request.open('GET', url);
        request.send();
    }

    _doFetch() {
        fetch(url)
        .then(function(data) {
            return data.text();
        })
        .then((responseText) => {
            console.log(responseText);
        })
        .catch((error)=>{
            console.warn(error);
        });
    }

    _getMoviesFromApiAsync() {
        return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    _postRequest(url, data, callback) {
        var opt = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        fetch(url, opt)
        .then((response) => response.json())
        .then((responseJson)=>{
            console.log(responseJson);
            callback(responseJson);

        })
        .catch((error)=>{
            console.warn(error);
        });
    }
}

const styles = StyleSheet.create ({
    btn: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        height: 35,
        backgroundColor: '#38B4ED',
        color: '#fff',
        lineHeight: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
