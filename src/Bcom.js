"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const bprop = require("./bprop");
class App extends react_1.Component {
    constructor(props) {
        super(props);
        this.bb = new bprop.Props();
        this.state = {};
    }
    render() {
        console.log(":::::::: this.props = ", this.props);
        const { pp } = this.props;
        this.bb = pp;
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.Text, null,
                " ",
                this.bb.index,
                "=> \u5B50\u7EC4\u4EF6")));
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
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
//# sourceMappingURL=Bcom.js.map