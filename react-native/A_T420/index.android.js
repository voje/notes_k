import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, TextInput, View, StyleSheet } from 'react-native';

import MyScene from './MyScene.js';

class simpleNavigation extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My initial scene.', index: 0 }}
                renderScene={ (route, navigator) => 
                    <MyScene
                        title={ route.title } 
                        onForward={ () => {
                            console.log('Going fowrard.');
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: 'Scene: ' + nextIndex,
                                index: nextIndex,
                            });
                        }}
                        onBack={ () => {
                            if ( route.index > 0 ) {
                                navigator.pop();
                            }
                        }}
                    /> // MyScene/>
                }
            /> // Navigator/>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };
        {/*setInterval(()=>{ this.setState( {showText: !this.state.showText} )}, 1000);*/}
    }
    render() {
        var ttt = this.state.showText ? this.props.text : ''; 
        return (
            <View style={styles.outline}>
                <Text style={this.props.style}>{ ttt }</Text>
            </View>
        );
    }
}

class Tinp extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'abc' };
    }
    render() {
        return (
            <View style={styles.outline}>
                <TextInput
                    style={{width: 200}}
                    placeholder='Type text here.'
                    onChangeText={(text) => this.setState({text: text})}
                />
                <Text>{ this.state.text }</Text>
            </View>
        );
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
            }}>
                <View style={styles.box1}>
                </View>
                <View style={styles.box2}>
                    <Blink style={styles.outline, styles.bigblue} text="Text1111" />
                    <Blink style={styles.outline, styles.red} text="Text22" />
                    <Tinp />
                    <Blink style={styles.outline, {color: 'green'}} text="Text333" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outline: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 34,
    },
    red: {
        color: 'red',
    },
    box1: {
        backgroundColor: 'powderblue',
        flex: 1,
    },
    box2: {
        backgroundColor: 'skyblue',
        flex: 2,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
});

AppRegistry.registerComponent( 'A_T420', () => simpleNavigation );