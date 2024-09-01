// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";function t(t,s,n){return r(t)?function(r,t,s){var n,a,i;for(n=e(r),a=0,i=0;i<r.length;i++)t.call(s,n(r,i),i,r)&&(a+=1);return a}(t,s,n):function(r,e,t){var s,n;for(s=0,n=0;n<r.length;n++)e.call(t,r[n],n,r)&&(s+=1);return s}(t,s,n)}export{t as default};
//# sourceMappingURL=index.mjs.map
