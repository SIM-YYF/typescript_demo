"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const typings = require("./prop");
const bprop = require("./bprop");
const prop = new typings.Props();
class App extends react_1.Component {
    render() {
        const arr = prop.imageUrls;
        const flipThreshold = prop.flipThreshold;
        let bb = new bprop.Props();
        bb.index = 600;
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.Text, null,
                " ",
                arr),
            React.createElement(react_native_1.Text, null,
                " ",
                flipThreshold,
                " "),
            prop.loadingRender(bb)));
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
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
//# sourceMappingURL=Acom.js.map