import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    View,
    TouchableHighlight,
    Text,
    RecyclerViewBackedScrollView
} from 'react-native';

export default class ListViewExample extends Component {

    // statics: {
    //     title: '<ListView>',
    //     description: 'Performant, scrollable list of data.',
    // }

    this.state = {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this._genRows({})),
        };
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //         return {
    //             dataSource: ds.cloneWithRows(this._genRows({})),
    //         }
    //
    //     };
    //
    // }
    // _pressData: ({}: {[key: number]: boolean})
    // _pressData: ({}: {[key: number]: boolean})

    componentWillMount() {
        this._pressData ={};
    }

    render() {
        return (
            <ListView

                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...porps} />}
                renderSeparator={this._renderSeparator}
            />
        );
    }

    _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID:number) => void) {
        var rowHash = Math.abs(hashCode(rowData));
        var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
        return (
            <TouchableHighlight onPress={()=>{
                this._pressRow(rowID);
                highlightRow(sectionID, rowID);
                }}>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource} />
                        <Text style={styles.text}>
                            {rowData + '-' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
                        </Text>

                    </View>

                </View>


            </TouchableHighlight>
        );
    }

    _genRows(pressData: {[key: number]: boolean}): Array<string> {
        var dataBlob = [];
        for (var i = 0; i < 100; i++) {
            var pressedText = pressData[i] ? '(pressed)' : '';
            dataBlob.push('Row' + i + pressedText);
        }

        return dataBlob;
    }

    _pressRows(rowID: number) {
        this._pressData[rowID] = !this._pressData[rowID];
        this.setState({dataSource: this.state.dataSource.cloneWithRows(
            this._genRows(this._pressData)
        )});
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <View>
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC'
                }}
            </View>
        );
    }
}

var THUMB_URLS = [
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
    require('./img/icon1.png'),
];
var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

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
        flex: 1
    }
})
