"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _extractTransform=_interopRequireDefault(require("../lib/extract/extractTransform"));var _extractViewBox=_interopRequireDefault(require("../lib/extract/extractViewBox"));var _units=_interopRequireDefault(require("../lib/units"));var _Shape2=_interopRequireDefault(require("./Shape"));var _NativeComponents=require("./NativeComponents");var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/elements/Pattern.tsx";var Pattern=function(_Shape){(0,_inherits2.default)(Pattern,_Shape);function Pattern(){(0,_classCallCheck2.default)(this,Pattern);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Pattern).apply(this,arguments));}(0,_createClass2.default)(Pattern,[{key:"render",value:function render(){var props=this.props;var patternTransform=props.patternTransform,transform=props.transform,id=props.id,x=props.x,y=props.y,width=props.width,height=props.height,patternUnits=props.patternUnits,patternContentUnits=props.patternContentUnits,children=props.children,viewBox=props.viewBox,preserveAspectRatio=props.preserveAspectRatio;var matrix=(0,_extractTransform.default)(patternTransform||transform||props);return _react.default.createElement(_NativeComponents.RNSVGPattern,(0,_extends2.default)({ref:this.refMethod,name:id,x:x,y:y,width:width,height:height,matrix:matrix,patternTransform:matrix,patternUnits:patternUnits&&_units.default[patternUnits]||0,patternContentUnits:patternContentUnits?_units.default[patternContentUnits]:1},(0,_extractViewBox.default)({viewBox:viewBox,preserveAspectRatio:preserveAspectRatio}),{__source:{fileName:_jsxFileName,lineNumber:49}}),children);}}]);return Pattern;}(_Shape2.default);exports.default=Pattern;(0,_defineProperty2.default)(Pattern,"displayName",'Pattern');(0,_defineProperty2.default)(Pattern,"defaultProps",{x:'0%',y:'0%',width:'100%',height:'100%'});
//# sourceMappingURL=Pattern.js.map