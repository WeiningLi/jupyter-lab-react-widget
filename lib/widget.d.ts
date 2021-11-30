import { DOMWidgetModel, DOMWidgetView, ISerializers } from '@jupyter-widgets/base';
import '../css/widget.css';
declare const defaultModelProperties: {
    pdfName: string;
    viewCount: number;
};
export declare type WidgetModelState = typeof defaultModelProperties;
export declare class ExampleModel extends DOMWidgetModel {
    defaults(): any;
    static serializers: ISerializers;
    static model_name: string;
    static model_module: any;
    static model_module_version: any;
    static view_name: string;
    static view_module: any;
    static view_module_version: any;
}
export declare class ExampleView extends DOMWidgetView {
    render(): void;
}
export {};
