"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const widget_model_1 = require("./hooks/widget-model");
function ReactWidget(props) {
    const [pdfName, setPdfName] = widget_model_1.useModelState('pdfName');
    const [viewCount, setViewCount] = widget_model_1.useModelState('viewCount');
    const iframeCSS = {
        height: '600px',
        width: '500px',
        frameborder: 0,
    };
    return (react_1.default.createElement("div", { className: "Widget" },
        react_1.default.createElement("h1", null,
            "Viewing ",
            pdfName,
            ", viewed ",
            viewCount,
            " times"),
        pdfName !== '' ? (react_1.default.createElement("iframe", { src: pdfName, onClick: () => {
                setPdfName(pdfName);
            }, style: iframeCSS })) : null,
        react_1.default.createElement("button", { onClick: () => {
                setViewCount(viewCount + 1);
            } }, "view")));
}
function withModelContext(Component) {
    return (props) => (react_1.default.createElement(widget_model_1.WidgetModelContext.Provider, { value: props.model },
        react_1.default.createElement(Component, Object.assign({}, props))));
}
exports.default = withModelContext(ReactWidget);
//# sourceMappingURL=ReactWidget.js.map