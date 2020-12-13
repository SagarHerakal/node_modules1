var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var lodashTemplate=require('lodash.template');var fromPairs=require('lodash.frompairs');var fs=require('fs');function extractGlyphMapFromCss(files,selectorPattern){var styleRulePattern='(\\.[A-Za-z0-9_.:, \\n\\t-]+)\\{[^}]*content: ?["\\\'](?:\\\\([A-Fa-f0-9]+)|([^"\\\']+))["\\\'][^}]*\\}';var allStyleRules=new RegExp(styleRulePattern,'g');var singleStyleRules=new RegExp(styleRulePattern);var allSelectors=new RegExp(selectorPattern,'g');var singleSelector=new RegExp(selectorPattern);var extractGlyphFromRule=function extractGlyphFromRule(rule){var ruleParts=rule.match(singleStyleRules);if(ruleParts[2]){return parseInt(ruleParts[2],16);}if(ruleParts[3].length>1){return ruleParts[3];}return ruleParts[3].charCodeAt();};var extractSelectorsFromRule=function extractSelectorsFromRule(rule){var ruleParts=rule.match(singleStyleRules);var selectors=ruleParts[1].match(allSelectors)||[];return selectors.map(function(selector){return selector.match(singleSelector)[1];});};return(typeof files==='string'?[files]:files).map(function(fileName){return fs.readFileSync(fileName,{encoding:'utf8'});}).map(function(contents){return contents.match(allStyleRules)||[];}).reduce(function(acc,rules){return acc.concat(rules);},[]).map(function(rule){var glyph=extractGlyphFromRule(rule);var selectors=extractSelectorsFromRule(rule);return selectors.map(function(selector){return[selector,glyph];});}).reduce(function(acc,glyphs){return(0,_extends2.default)(acc,fromPairs(glyphs));},{});}function escapeRegExp(str){return str.replace(/[-[\]/{}()*+?.\\^$|]/g,'\\$&');}function generateIconSetFromCss(cssFiles,selectorPrefix,template){var data=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var glyphMap=extractGlyphMapFromCss(cssFiles,escapeRegExp(selectorPrefix)+"([A-Za-z0-9_-]+)::?before");var content=JSON.stringify(glyphMap,null,'  ');if(template){return lodashTemplate(template)(_objectSpread({glyphMap:content},data));}return content;}module.exports=generateIconSetFromCss;