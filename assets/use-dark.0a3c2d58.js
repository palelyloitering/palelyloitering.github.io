import{a3 as t,c as n}from"./index.65778e06.js";function i(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),t.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const l={dark:{type:Boolean,default:null}};function c(e,o){return n(()=>e.dark===null?o.dark.isActive:e.dark)}export{c as a,i as c,l as u};
