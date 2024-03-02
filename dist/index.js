"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=v(function(C,u){
var l=require('@stdlib/array-base-assert-is-complex-typed-array/dist'),c=require('@stdlib/array-base-assert-is-accessor-array/dist'),f=require('@stdlib/array-base-resolve-getter/dist'),s=require('@stdlib/strided-base-reinterpret-complex/dist');function q(r,e,a){var n,i;for(n=0,i=0;i<r.length;i++)e.call(a,r[i],i,r)&&(n+=1);return n}function m(r,e,a){var n,i,t;for(n=f(r),i=0,t=0;t<r.length;t++)e.call(a,n(r,t),t,r)&&(i+=1);return i}function p(r,e,a){var n,i,t;for(n=s(r,0),i=0,t=0;t<n.length;t+=2)(e.call(a,n[t],t,n)||e.call(a,n[t+1],t+1,n))&&(i+=1);return i}function y(r,e,a){return c(r)?l(r)?p(r,e,a):m(r,e,a):q(r,e,a)}u.exports=y
});var g=o();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
