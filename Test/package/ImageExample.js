
import React, {Component} from 'react';
import {
    ActivityIndicator,
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';


// const IMAGE_PREFETCH_URL = 'https://facebook.github.io/origami/public/images/blog-hero.jpg?r=1&t=' + Date.now();

// var prefetchTask = Image.prefetch(IMAGE_PREFETCH_URL);


class NetworkImageExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
            progress: 0
        };
    }

    render () {

        var loader = this.state.loading ?
            <View style={styles.progress}>
                <Text>
                    {this.state.progress}%
                </Text>
                <ActivityIndicator style={{marginLeft: 5}}/>

            </View> : null;

        return this.state.error?
            <Text>
                {this.state.error}
            </Text> :
            <Image
                source={this.props.source}
                style={[styles.base, {overflow: 'visible'}]}
                onLoadStart={(e)=> this.setState({loading: true})}
                onError={(e) => this.setState({error:e.nativeEvent.error, loading: false})}
                onProgress={(e) => this.setState({progress: Math.round(100 * e.nativeEvent.loaded /e.nativeEvent.total)})}
                onLoad={()=> this.setState({loading: false, error: false})}>
                {loader}
            </Image>


    }
}

class ImageSizeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
    }

    componentDidMount() {
        Image.getSize(this.props.source.uri, (width, height) =>{
            this.setState({width, height});
        });
    }
    render() {
        return(
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{width: 60, height: 60, backgroundColor:'transparent', marginRight: 10}}
                    source={this.props.source}
                />
                <Text>
                    Actual dimensions: {'\n'}
                    Width: {this.state.width}, Height: {this.state.height}
                </Text>
            </View>

        );
    }
}

export default class ImageExample extends Component {
    constructor(props){
        super (props);
        this.state = {};
    }

    render() {

        return(
            <View style={styles.container}>
                <View>
                    <Text>
                        https://facebook.github.io/react/img/logo_og.png
                    </Text>
                    <Image
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        style={styles.base}
                    />
                </View>
                <View>
                    <Text>
                        base64
                    </Text>
                    <Image
                        style={styles.base64}
                        source={{uri: base64Icon, scale: 1}}
                    />
                </View>
                <View style={styles.horizontal}>
                    <Text>
                        本地图片
                    </Text>
                    <Image
                        source={require('./img/icon1.png')} style={styles.icon}
                    />
                    <Image
                        source={require('./img/icon2.png')} style={styles.icon}
                    />
                    <Image
                        source={require('./img/icon3.png')} style={styles.icon}
                    />
                    <Image
                        source={require('./img/icon4.png')} style={styles.icon}
                    />

                </View>
                <View>
                    <Text>
                        NetworkImageExample
                    </Text>
                    <NetworkImageExample source={fullImage} />

                </View>
                <View>
                    <Text>
                        NetworkImageExample with defaultSource
                    </Text>
                    <NetworkImageExample source={{uri: 'https://facebook.github.io/origami/public/images/blog-hero.jpg?r=1'}}
                        defaultSource={require('./img/icon1.png')}/>
                </View>

                <View>
                    <Text>
                        smallImage with defaultSource
                    </Text>
                    <Image
                        source={smallImage}
                        defaultSource={require('./img/icon1.png')}
                        style={styles.base}
                    />
                </View>
                <View>
                    <Text>
                        ImageSizeExample
                    </Text>
                    <ImageSizeExample source={smallImage}/>
                </View>

                <View>
                    <Text>
                        gif
                    </Text>
                    <Image
                        style={styles.gif}
                        source={{uri: 'https://38.media.tumblr.com/9e9bd08c6e2d10561dd1fb4197df4c4e/tumblr_mfqekpMktw1rn90umo1_500.gif'}}
                    />
                </View>

            </View>
        );
    }
}

var fullImage = {uri: 'https://facebook.github.io/react/img/logo_og.png'};
var smallImage = {uri: 'https://facebook.github.io/react/img/logo_small_2x.png'};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 64,
        paddingLeft: 60,

    },
    base: {
        height: 50,
        width: 50,

    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: 'transparent'
    },
    progress: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: 100
    },
    leftMargin: {
        marginLeft: 10
    },
    background: {
        backgroundColor: '#222222'
    },
    sectionText: {
        marginVertical: 6,
    },
    nestedText: {
        marginLeft: 12,
        marginTop: 20,
        backgroundColor: 'transparent',
        color: 'white'
    },
    resizeMode: {
        width: 90,
        height: 90,
        borderWidth: 5,
        borderColor: 'yellow',
    },
    resizeModeText: {
        fontSize: 11,
        marginBottom: 3,
    },
    gif: {
        height: 140,
        width: 250
    },
    touchableText: {
        fontWeight: '500',
        color: 'blue'
    },
    base64: {
        flex: 1,
        height: 50,
        backgroundColor: 'red'
        // resizeMode: 'contain'
    }


})
