import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    View,
    TouchableHighlight,
    Text,
    Image,
    RecyclerViewBackedScrollView,
    RefreshControl
} from 'react-native';

import NavigatorIOSExample from './NavigatorIOSExample';

export default class ListViewExample extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows({})),
            isRefreshing: false,
            _pressData: ({}: {[key: number]: boolean}),

        };

    }
    componentWillMount() {
        this.state._pressData ={};

    }

    componentDidMount(){

    }
    _onRefresh = ()=> {
        this.setState({
            isRefreshing: true
        });
        setTimeout(()=>{
            this.setState({
                isRefreshing: false
            });
        }, 1000);
    }

    render() {
        return (
            <ListView

                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSectionHeader={this._renderSection.bind(this)}
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}

                renderSeparator={this._renderSeparator}
                onEndReached={()=>alert('加载更多')}
                onEndReachedThreshold = {-120}
                renderFooter={()=>{
                    return (
                        <View style={{backgroundColor:'gray', height: 80, alignItems: 'center', justifyContent: 'center'}}>
                            <Text onPress={()=>alert('加载更多')}>
                                点击加载更多，或者上拉100cm会加载更多
                            </Text>
                        </View>
                    );
                }}
                renderHeader={()=>{
                    return (
                        <View style={{backgroundColor:'#143AAB', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>
                                这是tableView的tableViewHeader,下拉可以刷新
                            </Text>
                        </View>
                    );
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor='#0EC5EE'
                        title='Loading...'
                        titleColor='gray'

                />}
            />
        );
    }

    _renderSection(sectionID: number) {
        return (
            <View style={{backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'red'}}>
                    Section Header
                </Text>
            </View>
        )
    }


    _renderRow(rowData: string, sectionID: number, rowID: number) {
        var rowHash = Math.abs(hashCode(rowData));
        var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];

        console.log('------' + rowHash +'\r\n' + imgSource);

        return (
            <TouchableHighlight onPress={() => {
                this._pressRow(rowID);
                // highlightRow(sectionID, rowID);
            }}>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource} />
                        <Text style={styles.text}>
                            {rowData + '-' + LOREM_IPSUM.substr(0, rowHash % 600 + 10)}
                        </Text>

                    </View>

                </View>


            </TouchableHighlight>
        );
    }


    _genRows(pressData: {[key: number]: boolean}): Array<string> {
        var dataBlob = [];
        for (var i = 0; i < 10; i++) {
            var pressedText = pressData[i] ? '(pressed)' : '';
            dataBlob.push('Row' + i + pressedText);
        }

        return dataBlob;
    }

    _pressRow(rowID: number) {
        this.state._pressData[rowID] = !this.state._pressData[rowID];
        this.setState({dataSource: this.state.dataSource.cloneWithRows(
            this._genRows(this.state._pressData)
        )});
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC'
                }}
            />
        );
    }
}

var THUMB_URLS = [
    require('./img/icon1.png'),
    require('./img/icon2.png'),
    require('./img/icon3.png'),
    require('./img/icon4.png'),
    require('./img/icon1.png'),
    require('./img/icon2.png'),
    require('./img/icon3.png'),
    require('./img/icon4.png'),
    require('./img/icon1.png'),
    require('./img/icon2.png'),
    require('./img/icon3.png'),
    require('./img/icon4.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
];
var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne quite.';

var hashCode = function(str) {
    var hash = 15;
    for (var i = str.length -1; i >= 0; i--) {
        hash = ((hash<<5) - hash) + str.charCodeAt(i);
    }

    return hash;
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6'
    },
    thumb: {
        width: 64,
        height: 64
    },
    text: {
        flex: 1,
        marginLeft: 5
    }
})
