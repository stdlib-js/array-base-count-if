"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=c(function(h,a){
var o=require('@stdlib/array-base-assert-is-accessor-array/dist'),f=require('@stdlib/array-base-resolve-getter/dist');function v(r,e,t){var i,n;for(i=0,n=0;n<r.length;n++)e.call(t,r[n],n,r)&&(i+=1);return i}function l(r,e,t){var i,n,u;for(i=f(r),n=0,u=0;u<r.length;u++)e.call(t,i(r,u),u,r)&&(n+=1);return n}function q(r,e,t){return o(r)?l(r,e,t):v(r,e,t)}a.exports=q
});var g=s();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
