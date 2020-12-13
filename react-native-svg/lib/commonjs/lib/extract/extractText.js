"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.extractFont=extractFont;exports.setTSpan=setTSpan;exports.default=extractText;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _extractLengthList=_interopRequireDefault(require("./extractLengthList"));var _util=require("../util");var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/lib/extract/extractText.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var fontRegExp=/^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;var fontFamilyPrefix=/^[\s"']*/;var fontFamilySuffix=/[\s"']*$/;var commaReg=/\s*,\s*/g;var cachedFontObjectsFromString={};function extractSingleFontFamily(fontFamilyString){return fontFamilyString?fontFamilyString.split(commaReg)[0].replace(fontFamilyPrefix,'').replace(fontFamilySuffix,''):null;}function parseFontString(font){if(cachedFontObjectsFromString.hasOwnProperty(font)){return cachedFontObjectsFromString[font];}var match=fontRegExp.exec(font);if(!match){cachedFontObjectsFromString[font]=null;return null;}var isBold=/bold/.exec(match[1]);var isItalic=/italic/.exec(match[1]);cachedFontObjectsFromString[font]={fontSize:match[2]||12,fontWeight:isBold?'bold':'normal',fontStyle:isItalic?'italic':'normal',fontFamily:extractSingleFontFamily(match[3])};return cachedFontObjectsFromString[font];}function extractFont(props){var fontData=props.fontData,fontStyle=props.fontStyle,fontVariant=props.fontVariant,fontWeight=props.fontWeight,fontStretch=props.fontStretch,fontSize=props.fontSize,fontFamily=props.fontFamily,textAnchor=props.textAnchor,textDecoration=props.textDecoration,letterSpacing=props.letterSpacing,wordSpacing=props.wordSpacing,kerning=props.kerning,fontFeatureSettings=props.fontFeatureSettings,fontVariantLigatures=props.fontVariantLigatures,fontVariationSettings=props.fontVariationSettings,font=props.font;var ownedFont=(0,_util.pickNotNil)({fontData:fontData,fontStyle:fontStyle,fontVariant:fontVariant,fontWeight:fontWeight,fontStretch:fontStretch,fontSize:fontSize,fontFamily:extractSingleFontFamily(fontFamily),textAnchor:textAnchor,textDecoration:textDecoration,letterSpacing:letterSpacing,wordSpacing:wordSpacing,kerning:kerning,fontFeatureSettings:fontFeatureSettings,fontVariantLigatures:fontVariantLigatures,fontVariationSettings:fontVariationSettings});var baseFont=typeof font==='string'?parseFontString(font):font;return _objectSpread({},baseFont,{},ownedFont);}var TSpan;function setTSpan(TSpanImplementation){TSpan=TSpanImplementation;}function getChild(child){if(typeof child==='string'||typeof child==='number'){return _react.default.createElement(TSpan,{__source:{fileName:_jsxFileName,lineNumber:122}},String(child));}else{return child;}}function extractText(props,container){var x=props.x,y=props.y,dx=props.dx,dy=props.dy,rotate=props.rotate,children=props.children,inlineSize=props.inlineSize,baselineShift=props.baselineShift,verticalAlign=props.verticalAlign,alignmentBaseline=props.alignmentBaseline;var textChildren=typeof children==='string'||typeof children==='number'?container?_react.default.createElement(TSpan,{__source:{fileName:_jsxFileName,lineNumber:158}},String(children)):null:_react.Children.count(children)>1||Array.isArray(children)?_react.Children.map(children,getChild):children;return{content:textChildren===null?String(children):null,children:textChildren,inlineSize:inlineSize,baselineShift:baselineShift,verticalAlign:verticalAlign,alignmentBaseline:alignmentBaseline,font:extractFont(props),x:(0,_extractLengthList.default)(x),y:(0,_extractLengthList.default)(y),dx:(0,_extractLengthList.default)(dx),dy:(0,_extractLengthList.default)(dy),rotate:(0,_extractLengthList.default)(rotate)};}
//# sourceMappingURL=extractText.js.map