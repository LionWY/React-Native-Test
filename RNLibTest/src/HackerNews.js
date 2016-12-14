
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ListView
} from 'react-native';


// import {
//     SwRefreshListView,
//     RefreshStatus,
//     LoadMoreStatus,
// } from 'react-native-swRefresh';

const HACKER_NEWS_API = 'https://hacker-news.firebaseio.com/v0/';


export default class HackerNews extends Component {

    _page = 1;

    constructor() {
        super();
        this.state={
            storyIds: null,
            lastIndex: null,
            listData: null
        };
    }

    static navigatorStyle = {
        navBarBackgroundColor: '#345383',
        navBarTextColor: '#C63DD2'
    }


    _renderRow(row) {

        console.log('=========' + '11111111');

        return (
            <TouchableOpacity onPress={()=>this.selectdRow(row)}>
                <View style={styles.cellView}>
                    <Text style={{color: 'gray'}}>
                        row
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    _selectedRow(row) {
        alert('跳转')
    }

    _getData(page, callback, url) {

        console.log('-----------------');

        if (page === 1) {

            fetch(url)
            .then((response) => response.json())
            .then((storyIds)=>{

                this.setState({
                    storyIds: storyIds
                });

                this._getDataByStoryIds(storyIds, 0, 5, callback);
            })

        }
        else {

            this._getDataByStoryIds(storyIds, this.state.lastIndex, 5, callback);

        }
    }

    _getDataByStoryIds(storyIds, startIndex, amountToAdd, callback) {
        var rowData = [];
        var endIndex = (startIndex + amountToAdd) < storyIds.length ? (startIndex + amountToAdd) : storyIds.length;

        for (var i = startIndex; i < endIndex; i++) {
            var url = HACKER_NEWS_API + 'item/' + storyIds[i] + '.json';
            fetch(url)
            .then((response) => response.json())
            .then((story) => {
                rowData.push(story);
            })
        }
        callback(rowData);
        this.setState({
            lastIndex: endIndex
        })

        alert(rowData);
    }



    render() {


        return (
            <View style={styles.container}>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    cellView: {
        borderBottomWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },

})
