"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Bcom_1 = require("./Bcom");
class Props {
    constructor() {
        this.imageUrls = ['sssssssssssss', 'sss', '222', '33333'];
        this.flipThreshold = 80;
        this.index = 0;
        this.enableImageZoom = false;
        this.loadingRender = (bprop) => {
            return React.createElement(Bcom_1.default, {
                style: {},
                pp: bprop
            }, null);
        };
    }
}
exports.Props = Props;
//# sourceMappingURL=prop.js.map