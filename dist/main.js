!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.JSR=e()}(this,function(){"use strict";const t={};function e(e,i,s){return!t[e]&&(t[e]=s,t[e](),setTimeout(()=>{t[e]=!1},i),!0)}function i(t,e,i){t.addEventListener(e,i)}function s(t,e,r){t instanceof Array?t.forEach(t=>{t instanceof Array?s(t,e,r):i(t,e,r)}):i(t,e,r)}function r(t){const e=t.toString().split(".");return e[1]?e[1].length:0}function o(t){const e=this.config.min;return(t-e)/(this.config.max-e)}function n(t){const e=this.config.min,i=this.config.max;return function(t){const e=this.config.step,i=Math.pow(10,this.stepDecimals);return t=Math.round(t/e)*e,Math.round(t*i)/i}.call(this,t=(i-e)*t+e)}var l=function(t,e){const i={};return function t(e,i,s,r){const o=i[e],n=o.count,l=[];if(n<=0)return l;s[e]=s[e]||[];for(let t=0;t<n;t+=1){const t=document.createElement("div");t.classList.add(...o.classes),s[e].push(t),l.push(t)}return o.children.length>0&&o.children.forEach(o=>{for(let l=0;l<n;l+=1)t(o,i,s,r).forEach(t=>{r[o]=void 0===r[o]?0:r[o]+1,t.dataset.jsrId=r[o];for(const e in i[o].attributes)t.setAttribute(e,i[o].attributes[e]);s[e][l].appendChild(t)})}),l}(e,t,i,{}),function(t,e){for(const i in t)1!==t[i].length||e[i].alwaysArray||(t[i]=t[i][0])}(i,t),i};const h={debug:0,info:1,warn:2,error:3,disable:4};var a=function(t){return!!(e=t)&&"object"==typeof e&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||(i=t,i.$$typeof===u);var i}(t);var e};var u="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function d(t,e){return e&&!0===e.clone&&a(t)?g((i=t,Array.isArray(i)?[]:{}),t,e):t;var i}function c(t,e,i){var s=t.slice();return e.forEach(function(e,r){void 0===s[r]?s[r]=d(e,i):a(e)?s[r]=g(t[r],e,i):-1===t.indexOf(e)&&s.push(d(e,i))}),s}function g(t,e,i){var s=Array.isArray(e);if(s===Array.isArray(t)){if(s){return((i||{arrayMerge:c}).arrayMerge||c)(t,e,i)}return function(t,e,i){var s={};return a(t)&&Object.keys(t).forEach(function(e){s[e]=d(t[e],i)}),Object.keys(e).forEach(function(r){a(e[r])&&t[r]?s[r]=g(t[r],e[r],i):s[r]=d(e[r],i)}),s}(t,e,i)}return d(e,i)}g.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce(function(t,i){return g(t,i,e)})};var m=g;function f(t,e){this.mergedLabels.push(e),this.labels[t].appendChild(this.labels[e])}function b(){const t=this.labels;(function(){this.mergedLabels.forEach(t=>{this.labelsParent.appendChild(this.labels[t])}),this.mergedLabels=[]}).call(this);let e=0,i=e+1;for(;i<t.length;)t[e].getBoundingClientRect().right+5>=t[i].getBoundingClientRect().left?(f.call(this,e,i),i+=1):(e+=1,i+=1);this.minMax[0].getBoundingClientRect().right+5>=this.labels[0].getBoundingClientRect().left?this.minMax[0].style.opacity="0":this.minMax[0].style.opacity="1",this.labels[this.labels.length-1].getBoundingClientRect().right+5>=this.minMax[1].getBoundingClientRect().left?this.minMax[1].style.opacity="0":this.minMax[1].style.opacity="1"}return class{constructor(t,i={}){const a={log:"error",min:0,max:100,step:1,enabled:!0,limit:{show:!1},modules:{eventizer:class{constructor(){this.store={}}_createNewStore(t){this.store[t]||(this.store[t]=[])}_addListener(t,e){this._createNewStore(t);const i=new class{constructor(t){this.callback=t,this.enabled=!0}disable(){this.enabled=!1}enable(){this.enabled=!0}trigger(...t){this.enabled&&this.callback(...t)}}(e);return this.store[t].push(i),i}_dispatchEvent(t,...e){if(!this.store[t])return!1;const i=this.store[t].length;for(let s=0;s<i;s+=1)this.store[t][s].trigger(...e)}register(t,e){return this._addListener(t,e)}trigger(t,...e){this._dispatchEvent(t,...e)}},core:class{constructor(){this.logger=null,this.config={min:0,max:0,step:0},this.modules={},this.values=[],this.valueInMove=[],this.stepRatio=0,this.stepRatioDecimals=0}_setValue(t,e=null,i=!1){if(!this.config.enabled)return null;e=null===e?function(t){let e=1,i=0;return this.values.forEach((s,r)=>{const o=Math.abs(s-t);o<e&&(i=r,e=o)}),i}.call(this,t):parseInt(e),i&&(t=this.valueInMove[e]+t),null!==this.limit.min&&t<this.limit.min&&(t=this.limit.min),null!==this.limit.max&&t>this.limit.max&&(t=this.limit.max),void 0!==this.values[e-1]&&t<this.values[e-1]&&(t=this.values[e-1]),void 0!==this.values[e+1]&&t>this.values[e+1]&&(t=this.values[e+1]);const s=function(t){const e=this.stepRatio,i=Math.pow(10,this.stepRatioDecimals);return t=Math.round(t/e)*e,Math.round(t*i)/i}.call(this,t);s!==this.values[e]&&(this.values[e]=s,this.modules.renderer.setSliderValue(s,e),this.modules.eventizer.trigger("core/value:update",e,n.call(this,s),s))}_bindEvents(){const t=this.modules.eventizer;t.register("view/slider:mousedown",(t,e)=>{this.logger.debug("JSR: Slider mousedown."),this.logger.debug(t),e.forEach(t=>{this.valueInMove[t]=this.values[t]})}),t.register("view/slider:mousemove",(t,i,s)=>{e("slider-mousemove",10,()=>{this.logger.debug("JSR: Slider mousemove."),this.logger.debug(t),this._setValue(s,i,!0)})}),t.register("view/slider:mouseup",t=>{this.logger.debug("JSR: Slider mouseup."),this.logger.debug(t)}),t.register("view/rail:click",(t,e)=>{this.logger.debug("JSR: Rail clicked."),this.logger.debug(t),this._setValue(e)}),t.register("view/root:arrow",(t,e,i)=>{const s=this.values[e]+(t.shiftKey?.05:t.ctrlKey?10*this.stepRatio:this.stepRatio)*i;this._setValue(s,e)}),t.register("view/bar:mousedown",(t,e)=>{this.logger.debug("JSR: Bar mousedown."),this.logger.debug(t),this.valueInMove[e]=this.values[e],this.valueInMove[e+1]=this.values[e+1]}),t.register("view/bar:mousemove",(t,i,s)=>{e("bar-mousemove",10,()=>{this.logger.debug("JSR: Bar mousemove."),this.logger.debug(t),this._setValue(s,i,!0),this._setValue(s,i+1,!0)})}),t.register("view/bar:mouseup",t=>{this.logger.debug("JSR: Bar mouseup."),this.logger.debug(t)})}build({config:t,modules:e,logger:i}){this.config=t,this.logger=i,this.modules=e,this.limit={},this.setLimit("min",this.config.limit.min,!0),this.setLimit("max",this.config.limit.max,!0),this.stepDecimals=r(this.config.step),this.stepRatio=function(){const t=this.config.min,e=this.config.max;return this.config.step/(e-t)}.call(this),this.stepRatioDecimals=r(this.stepRatio)}init(t,e){this.modules.renderer.appendRoot(t[0]),e.forEach((t,e)=>{t=o.call(this,t),this._setValue(t,e)}),this._bindEvents(),this.logger.info("JSR: Core initiated.")}getValue(t){const e=this.values[t];return n.call(this,e)}setValue(t,e){this._setValue(t,e)}setLimit(t,e,i=!1){if(null===e||void 0===e)this.limit[t]="min"===t?0:1;else{if(this.limit[t]=o.call(this,e),this.limit[t]<0?this.limit[t]=0:this.limit[t]>1&&(this.limit[t]=1),i)return;if(this.values.forEach((t,e)=>{this._setValue(t,e)}),this.config.limit.show){const t=this.modules.renderer.body.limitBar;t.style.left=`${100*this.limit.min}%`,t.style.right=`${100*(1-this.limit.max)}%`}}}},labels:class{constructor(){this.labels=[],this.minMax=[],this.values=[],this.labelsParent=null,this.mergedLabels=[]}_bindEvents(){s(this.labels,"click",t=>{t.stopPropagation()}),this.modules.eventizer.register("core/value:update",(t,e,i)=>{this.values[t]=[e,i],function(t,e,i){const s=this.labels[t];if(this.config.step<1){const t=r(e),i=r(this.config.step)-t;if(i>0){const t=e.toString().split(".");e=`${t[0]}.${t[1]||0}${Array(i).join("0")}`}}s.innerHTML=this.formatter?this.formatter(e):e,this.values[t]=i;let o=s.getBoundingClientRect();s.style.left=`calc(${100*i}% - ${o.width/2}px)`,function(){return this.values.filter(t=>void 0!==t).length===this.config.values.length}.call(this)&&b.call(this);const n=this.modules.renderer.body.root.getBoundingClientRect();(o=s.getBoundingClientRect()).right>n.right&&(s.style.left=`calc(100% - ${o.width}px)`),o.left<n.left&&(s.style.left="0")}.call(this,t,e,i)}),s(this.labels,"mousedown",t=>{const e=new MouseEvent("mousedown",t);this.modules.renderer.body.sliders[t.target.dataset.jsrId].dispatchEvent(e)}),s(window,"resize",()=>{e(`label-update-overlapping-${Math.random()}`,100,()=>{b.call(this)})})}_parseMinMax(){this.minMax[0].innerHTML=this.formatter?this.formatter(this.config.min):this.config.min,this.minMax[1].innerHTML=this.formatter?this.formatter(this.config.max):this.config.max,this.minMax[0].style.left="0%",this.minMax[1].style.right="0%",this.config.labels.minMax||(this.minMax[0].style.display="none",this.minMax[1].style.display="none")}build({config:t,modules:e,logger:i}){const s={labels:{minMax:!0,formatter:null}};this.logger=i,this.config=m(s,t),this.modules=e,this.formatter=this.config.labels.formatter,this.modules.renderer.structure.labels={classes:["jsr_label"],children:[],count:this.config.sliders,alwaysArray:!0},this.modules.renderer.structure.rail.children.push("labels"),this.modules.renderer.structure.labelsMinMax={classes:["jsr_label","jsr_label--minmax"],children:[],count:2},this.modules.renderer.structure.rail.children.push("labelsMinMax"),this.modules.eventizer.register("modules/renderer:builded",()=>{this.labels=this.modules.renderer.body.labels,this.labelsParent=this.labels[0].parentNode,this.minMax=this.modules.renderer.body.labelsMinMax,this._parseMinMax(),this._bindEvents()})}},grid:class{_bindEvents(){const t=Math.random();window.addEventListener("resize",()=>{e(`grid-resize-${t}`,50,()=>{this.logger.debug("JSR: Canvas resized."),this._setDimensions(),this._render()})})}_setDimensions(){this.width=this.modules.renderer.body.railOuter.offsetWidth,this.height=this.config.grid.height+this.config.grid.fontSize+this.config.grid.textPadding,this.devicePixelRatio=window.devicePixelRatio||1,this.canvas.style.width=`${this.width}px`,this.canvas.width=this.width*this.devicePixelRatio,this.canvas.style.height=`${this.height}px`,this.canvas.height=this.height*this.devicePixelRatio,this.context.scale(window.devicePixelRatio,window.devicePixelRatio)}_getNumberOfLines(){return Math.round(100)}_render(){const t=this.width,e=this.config.grid.height,i=this.context,s=this._getNumberOfLines(),r=1/s;i.clearRect(0,0,t,e),i.beginPath(),i.lineWidth=1,i.fillStyle=i.strokeStyle=this.config.grid.color,i.font=`${this.config.grid.fontSize}px ${this.config.grid.fontFamily}`,i.textBaseline="top";for(let o=0;o<=s;o+=1){let n=o*r*t;if(n=Math.round(100*n)/100,i.moveTo(n,0),i.lineTo(n,e),o%10==0){i.textAlign=0===o?"left":o===s?"right":"center";let n=(this.config.max-this.config.min)*(o/s)+this.config.min;this.config.labels&&this.config.labels.formatter&&(n=this.config.labels.formatter(n)),i.fillText(n.toString(),o*r*t,e+this.config.grid.textPadding)}}i.closePath(),i.stroke()}build({config:t,modules:e,logger:i}){const s={grid:{color:"rgba(0, 0, 0, 0.3)",height:10,fontSize:10,fontFamily:"sans-serif",textPadding:5}};this.logger=i,this.config=m(s,t),this.modules=e,this.canvas=document.createElement("canvas"),this.canvas.classList.add("jsr_canvas"),this.context=this.canvas.getContext("2d"),this.modules.eventizer.register("modules/renderer:rootAppended",()=>{this.modules.renderer.body.railOuter.appendChild(this.canvas),this._setDimensions(),this._render()}),this._bindEvents()}},renderer:class{constructor(){this.logger=null,this.config={},this.modules={},this.temp={sliderInMove:null,sliderClickX:0,barInMove:null,barClickX:0},this.values=[],this.body={},this.bodyStructure={root:{classes:["jsr"],children:["railOuter"],count:1},railOuter:{classes:["jsr_rail-outer"],children:["rail"],count:1},rail:{classes:["jsr_rail"],children:["bars","sliders","limitBar"],count:1},sliders:{classes:["jsr_slider"],children:[],attributes:{tabindex:0},count:2,alwaysArray:!0},bars:{classes:["jsr_bar"],children:[],count:1,alwaysArray:!0},limitBar:{classes:["jsr_bar","jsr_bar--limit"],children:[],count:1}}}_bindEvents(){const t=this.modules.eventizer;s(this.body.sliders,"click",t=>{t.stopPropagation()}),s(this.body.sliders,"mousedown",e=>{e.stopPropagation(),this.temp.sliderInMove=parseInt(e.target.dataset.jsrId),this.temp.sliderClickX=e.clientX;const i=function(t){const e=[];return this.values.forEach((i,s)=>{i===this.values[t]&&e.push(s)}),e}.call(this,this.temp.sliderInMove);i.length>1&&(this.temp.sliderInMove=i),t.trigger("view/slider:mousedown",e,i)}),s(document,"mousemove",e=>{if(e.stopPropagation(),null===this.temp.sliderInMove)return;this.temp.sliderInMove instanceof Array&&(e.clientX<this.temp.sliderClickX?this.temp.sliderInMove=this.temp.sliderInMove[0]:this.temp.sliderInMove=this.temp.sliderInMove.pop()),this.body.sliders[this.temp.sliderInMove].focus(),this.body.sliders[this.temp.sliderInMove].classList.add("jsr_slider--active");const i=(e.clientX-this.temp.sliderClickX)/this.body.railOuter.offsetWidth;t.trigger("view/slider:mousemove",e,this.temp.sliderInMove,i)}),s(document,"mouseup",e=>{null!==this.temp.sliderInMove&&(this.body.sliders.forEach(t=>{t.classList.remove("jsr_slider--active")}),t.trigger("view/slider:mouseup",e,this.temp.sliderInMove),this.temp.sliderInMove=null)}),s(this.body.railOuter,"mouseup",e=>{if(this.temp.barIsMoved)return;const i=(e.clientX-this.body.railOuter.getBoundingClientRect().left)/this.body.railOuter.offsetWidth;t.trigger("view/rail:click",e,i)}),this.body.bars&&(s(this.body.bars,"mousedown",e=>{this.temp.barInMove=parseInt(e.target.dataset.jsrId),this.temp.barClickX=e.clientX,t.trigger("view/bar:mousedown",e,this.temp.barInMove)}),s(document,"mousemove",e=>{if(null===this.temp.barInMove)return;this.temp.barIsMoved=!0;const i=(e.clientX-this.temp.barClickX)/this.body.railOuter.offsetWidth;t.trigger("view/bar:mousemove",e,this.temp.barInMove,i)}),s(document,"mouseup",e=>{null!==this.temp.barInMove&&(t.trigger("view/bar:mouseup",e,this.temp.barInMove),this.temp.barInMove=null,this.temp.barIsMoved=!1)})),s(this.body.root,"keydown",e=>{const i=e.target.dataset.jsrId,s={37:-1,38:1,39:1,40:-1}[e.keyCode.toString()];if(!s)return!1;e.preventDefault(),t.trigger("view/root:arrow",e,i,s)})}_updateBars(t,e){if(!this.body.bars)return;const i=this.body.bars[t-1],s=this.body.bars[t];i&&(i.style.right=`${100*(1-e)}%`),s&&(s.style.left=`${100*e}%`)}build({modules:t,logger:e,config:i}){this.modules=t,this.logger=e,this.config=i,this.bodyStructure.sliders.count=this.config.sliders||1,this.bodyStructure.bars.count=this.bodyStructure.sliders.count-1,this.body=l(this.bodyStructure,"root"),this._bindEvents(),this.modules.eventizer.trigger("modules/renderer:builded")}get structure(){return this.bodyStructure}appendRoot(t){t.parentNode.insertBefore(this.body.root,t.nextSibling),this.modules.eventizer.trigger("modules/renderer:rootAppended")}setSliderValue(t,e){const i=this.body.sliders[e],s=`${100*t}%`;this.logger.debug(`JSR: Slider no. ${e} set to value: ${t}.`),this.values[e]=t,i.style.left=s,this._updateBars(e,t)}},touchSupport:class{_bindEvents(){const t=[this.modules.renderer.body.sliders];this.modules.renderer.body.labels&&t.push(this.modules.renderer.body.labels),s(t,"touchstart",t=>{document.documentElement.classList.add("jsr_lockscreen"),t=t.targetTouches.item(0);const e=new MouseEvent("mousedown",t);this.modules.renderer.body.sliders[t.target.dataset.jsrId].dispatchEvent(e)}),s(t,"touchmove",t=>{t=t.targetTouches.item(0);const e=new MouseEvent("mousemove",t);document.dispatchEvent(e)}),s(document,"touchend",t=>{document.documentElement.classList.remove("jsr_lockscreen"),t=t.targetTouches.item(0);const e=new MouseEvent("mouseup",t);document.dispatchEvent(e)})}build({config:t,modules:e,logger:i}){this.logger=i,this.config=t,this.modules=e,this._bindEvents()}},inputUpdater:class{constructor(){this.input=null}_bindEvents(){this.modules.eventizer.register("core/value:update",(t,e)=>{this.inputs[t].value=e,this.modules.eventizer.trigger("input/value:update",this.inputs[t],e),this.logger.debug(`JSR: Input ${t} updated with value ${e}`)})}build({config:t,modules:e,logger:i},s){this.inputs=s.inputs,this.logger=i,this.config=t,this.modules=e,this._bindEvents()}},htmlLabels:class{_bindEvents(){this.inputs.map(t=>t.id).forEach((t,e)=>{const i=document.querySelector(`label[for="${t}"]`);i&&i.addEventListener("click",()=>{this.modules.renderer.body.sliders[e].focus()})})}build({config:t,modules:e,logger:i},s){this.logger=i,this.config=t,this.modules=e,this.inputs=s.inputs,this._bindEvents()}}}};this.config=m(a,i,{arrayMerge:(t,e)=>e}),this.specificConfig={inputUpdater:{},htmlLabels:{}},this.logger=new class{constructor(){this.level=1}setLevel(t){this.level=h[t]}debug(...t){this.level>0||console.log(...t)}log(...t){this.level>1||console.log(...t)}info(...t){this.level>1||console.info(...t)}warn(...t){this.level>2||console.warn(...t)}error(...t){this.level>3||console.error(...t)}},this.logger.setLevel(this.config.log),t=[].concat(t),this.inputs=t.map(t=>"string"==typeof t?document.querySelector(t):t);const u=this._validate({inputs:t});if(u)return u.forEach(t=>{this.logger.error(t)}),{};this.modules={};for(const t in this.config.modules)this.config.modules[t]&&(this.modules[t]=new this.config.modules[t]);this.specificConfig.inputUpdater.inputs=this.inputs,this.specificConfig.htmlLabels.inputs=this.inputs,this._buildModules(),this._init()}_validate(t){const e=[];return this.config.sliders!==this.config.values.length&&e.push("JSR: Number of sliders isn't equal to number of values."),this.inputs.length!==this.config.values.length&&e.push("JSR: Number of inputs isn't equal to number of values."),this.inputs.forEach((i,s)=>{i||e.push(`JSR: Input ${t.inputs[s]} not found.`)}),!!e.length&&e}_buildModules(){for(const t in this.modules){const e=this.modules[t].build;e?(e.call(this.modules[t],{modules:this.modules,logger:this.logger,config:this.config},this.specificConfig[t]||{}),this.logger.info(`JSR: Module ${t} builded.`)):this.logger.info(`JSR: Module ${t} skipped. No .build() method.`)}}_init(){this.inputs.forEach(t=>{t.style.display="none"}),this.modules.core.init(this.inputs,this.config.values)}addEventListener(t,e){const i={update:"input/value:update"};return this.modules.eventizer.register(i[t],e),this}setValue(t,e){return this.modules.core.setValue(e,t),this}setLimit(t,e){return this.modules.core.setLimit(t,e),this}disable(){return this.config.enabled=!1,this.modules.renderer.body.root.classList.add("jsr--disabled"),this}enable(){return this.config.enabled=!0,this.modules.renderer.body.root.classList.remove("jsr--disabled"),this}}});
