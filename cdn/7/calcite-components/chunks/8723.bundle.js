/*! For license information please see 8723.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8723],{8723:(t,e,i)=>{i.r(e),i.d(e,{calcite_flow:()=>r});var s=i(9113),n=i(8773),o=i(8545);const r=class{constructor(t){(0,s.r)(this,t),this.itemMutationObserver=(0,n.c)("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:i}=this,s=Array.from(e.querySelectorAll("calcite-flow-item"+(t?`,${t}`:""))).filter((t=>t.closest("calcite-flow")===e)),n=i.length,o=s.length,r=s[o-1],a=s[o-2];if(o&&r&&s.forEach((t=>{t.showBackButton=t===r&&o>1,t.hidden=t!==r})),a&&(a.menuOpen=!1),this.items=s,n!==o){const t=this.getFlowDirection(n,o);this.itemCount=o,this.flowDirection=t}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const i=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await i.call(e)}catch(t){return}return e.remove(),e}async setFocus(){await(0,o.c)(this);const{items:t}=this,e=t[t.length-1];return e?.setFocus()}connectedCallback(){this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){(0,o.s)(this)}componentDidLoad(){(0,o.a)(this)}disconnectedCallback(){this.itemMutationObserver?.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={frame:!0,"frame--advancing":"advancing"===t,"frame--retreating":"retreating"===t};return(0,s.h)("div",{class:e},(0,s.h)("slot",null))}get el(){return(0,s.g)(this)}};r.style=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"},8545:(t,e,i)=>{i.d(e,{a:()=>a,b:()=>c,c:()=>l,s:()=>r});var s=i(9113);const n=new WeakMap,o=new WeakMap;function r(t){o.set(t,new Promise((e=>n.set(t,e))))}function a(t){n.get(t)()}function c(t){return o.get(t)}async function l(t){return await c(t),(0,s.f)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},8773:(t,e,i)=>{function s(t,e,i){const s=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new s(e,i)}i.d(e,{c:()=>s})}}]);