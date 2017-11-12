import * as React from 'react'
import { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import * as typings from './prop'
import  * as bprop from './bprop'

const  prop = new typings.Props()


export default class App extends Component<{}> {

    // static defaultProps:typings.PropsDefine = new typings.Props();
    

    render() {
        const  arr = prop.imageUrls
        const   flipThreshold =prop.flipThreshold
        let  bb = new bprop.Props();
        bb.index = 600;
        return (
            <View style={styles.container}>
                <Text> {arr}</Text>
                <Text> {flipThreshold} </Text>
                {prop.loadingRender(bb)}
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});