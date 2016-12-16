
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ListView,
    RefreshControl,
    AlertIOS,
    Image
} from 'react-native';



const GANK = 'http://gank.io/api/data/iOS/10/';

var listData = [];


export default class HackerNews extends Component {



    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 !== r2});

        this.state={
            dataSource: ds,
            isRefreshing: false,
            page: 1
        };
    }

    static navigatorStyle = {
        navBarBackgroundColor: '#345383',
        navBarTextColor: '#C63DD2'
    }


    _renderRow(rowData, rowID) {

        return (
            <TouchableOpacity onPress={()=>this._selectedRow(rowData)}>
                <View style={styles.cellView}>
                    {/* <Image source={{uri: rowData.images[0]}} style={{height: 40, width: 40}}/> */}
                    <Text style={{color: 'gray'}}>
                        {rowData.who}: {rowData.desc}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    _selectedRow(rowData) {
        this.props.navigator.push({
            screen: 'Scene.WebView',
            title: rowData.who,
            passProps: {url: rowData.url}
        })
    }

    _onRefresh() {
        this.setState({
            page: 1
        });
        this._getData(this.state.page);
    }

    _getData(page) {

        this.setState({
            isRefreshing: true
        });
        if (page === 1) {

            fetch(GANK+page)
            .then((response) => response.json())
            .then((result)=>{
                if (listData) {
                    listData.splice(0, listData.length);
                }
                listData = result.results;
                this.setState({
                    isRefreshing: false,
                    dataSource: this.state.dataSource.cloneWithRows(listData),
                });
            })

        }
        else {

            fetch(GANK+page)
            .then((response) => response.json())
            .then((result)=>{

                var arr = result.results;
                listData = listData.concat(arr);

                this.setState({
                    isRefreshing: false,
                    dataSource: this.state.dataSource.cloneWithRows(listData),
                });
            })

        }
    }


    componentWillMount() {
        this._onRefresh();
    }



    render() {


        return (
            <View style={styles.container}>

                <ListView
                    enableEmptySections={true}
                    style={{backgroundColor: 'white'}}
                    renderRow={this._renderRow.bind(this)}
                    dataSource={this.state.dataSource}
                    renderFooter={()=>{
                        return (
                            <View style={styles.footStyle}>
                                <Text onPress={()=>{
                                    this.setState({
                                        page: this.state.page + 1
                                    });
                                    this._getData(this.state.page);
                                }}>
                                    点击加载更多
                                </Text>
                            </View>
                        )
                    }}
                    refreshControl={
                        <RefreshControl

                            onRefresh={this._onRefresh.bind(this)}
                            refreshing={this.state.isRefreshing}
                            title='loading...'
                        />

                    }
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cellView: {
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        padding: 5
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 40,
    },

    footStyle: {
        height: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
