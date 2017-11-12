import * as React from 'react'
import { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import * as bprop from './bprop'
export default class App extends Component<{}> {

    constructor(props) {
      super(props);
      this.bb = new bprop.Props();
      this.state = {};
    }


    render() {

        console.log(":::::::: this.props = ", this.props)
        const {pp} = this.props;

        this.bb = pp;
        return (
            <View style={styles.container}>
                <Text> {this.bb.index}=> 子组件</Text>

        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {

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