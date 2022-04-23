import{r as I,o as U,a as $,b as i,c as k,n as S,d as F,e as b,f as g,F as W,g as H,h as w,w as z,i as P,j as G,v as X,t as Y}from"./app.0dfe8ec5.js";var J="/reusable-vue-scroll-progress-bar/assets/cat.6dd1faf7.png",v=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},R="Expected a function",D=0/0,K="[object Symbol]",Q=/^\s+|\s+$/g,Z=/^[-+]0x[0-9a-f]+$/i,tt=/^0b[01]+$/i,at=/^0o[0-7]+$/i,nt=parseInt,st=typeof v=="object"&&v&&v.Object===Object&&v,et=typeof self=="object"&&self&&self.Object===Object&&self,ot=st||et||Function("return this")(),lt=Object.prototype,rt=lt.toString,pt=Math.max,ct=Math.min,q=function(){return ot.Date.now()};function it(t,a,n){var e,r,p,u,o,l,d=0,j=!1,h=!1,y=!0;if(typeof t!="function")throw new TypeError(R);a=N(a)||0,_(n)&&(j=!!n.leading,h="maxWait"in n,p=h?pt(N(n.maxWait)||0,a):p,y="trailing"in n?!!n.trailing:y);function x(s){var c=e,f=r;return e=r=void 0,d=s,u=t.apply(f,c),u}function A(s){return d=s,o=setTimeout(m,a),j?x(s):u}function B(s){var c=s-l,f=s-d,V=a-c;return h?ct(V,p-f):V}function C(s){var c=s-l,f=s-d;return l===void 0||c>=a||c<0||h&&f>=p}function m(){var s=q();if(C(s))return O(s);o=setTimeout(m,B(s))}function O(s){return o=void 0,y&&e?x(s):(e=r=void 0,u)}function L(){o!==void 0&&clearTimeout(o),d=0,e=l=r=o=void 0}function M(){return o===void 0?u:O(q())}function T(){var s=q(),c=C(s);if(e=arguments,r=this,l=s,c){if(o===void 0)return A(l);if(h)return o=setTimeout(m,a),x(l)}return o===void 0&&(o=setTimeout(m,a)),u}return T.cancel=L,T.flush=M,T}function ut(t,a,n){var e=!0,r=!0;if(typeof t!="function")throw new TypeError(R);return _(n)&&(e="leading"in n?!!n.leading:e,r="trailing"in n?!!n.trailing:r),it(t,a,{leading:e,maxWait:a,trailing:r})}function _(t){var a=typeof t;return!!t&&(a=="object"||a=="function")}function dt(t){return!!t&&typeof t=="object"}function gt(t){return typeof t=="symbol"||dt(t)&&rt.call(t)==K}function N(t){if(typeof t=="number")return t;if(gt(t))return D;if(_(t)){var a=typeof t.valueOf=="function"?t.valueOf():t;t=_(a)?a+"":a}if(typeof t!="string")return t===0?t:+t;t=t.replace(Q,"");var n=tt.test(t);return n||at.test(t)?nt(t.slice(2),n?2:8):Z.test(t)?D:+t}var ht=ut;const E={props:{containerStyle:{type:String,default:"width: 100%; top: 0; left: 0; position: fixed; z-index: 99"},height:{type:Number,default:5},color:{type:String,default:"#42b883"}},setup(t){const a=I(0);function n(){const e=document.documentElement.scrollHeight-document.documentElement.clientHeight;a.value=Math.ceil(window.scrollY/e*100)}return U(async()=>{window.addEventListener("scroll",ht(n,15))}),$(async()=>{window.removeEventListener("scroll",n)}),(e,r)=>(i(),k("div",{style:S(t.containerStyle)},[a.value>0?(i(),k("div",{key:0,"data-testid":"scroll-progress-bar",style:S({width:`${a.value}%`})},[F(e.$slots,"default",{width:a.value},()=>[g("div",{style:S({height:`${t.height}px`,background:t.color})},null,4)])],4)):b("",!0)],4))}};const ft=P(`<h1 id="reusable-vue-scroll-progress-bar-for-vue-3" tabindex="-1">Reusable Vue Scroll Progress Bar for Vue 3 <a class="header-anchor" href="#reusable-vue-scroll-progress-bar-for-vue-3" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>This is a simple and easy-to-use scroll progress bar for Vue 3.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> reusable-vue-scroll-progress-bar
</code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-progress-bar</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-progress-bar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Id</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>containerStyle</code></td><td><code>String</code></td><td><code>&#39;width: 100%; top: 0; left: 0; position: fixed;&#39;</code></td><td>Style attribute of the outer container</td></tr><tr><td><code>height</code></td><td><code>Number</code></td><td><code>5</code></td><td>Height of the progress bar</td></tr><tr><td><code>color</code></td><td><code>String</code></td><td><code>&#39;#42b883&#39;</code></td><td>Color of the progress bar</td></tr></tbody></table><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2>`,10),kt={style:{"padding-bottom":"1rem"}},mt={style:{"padding-bottom":"1rem"}},vt=["id","value"],bt=["for"],_t=g("br",null,null,-1),yt=["width"],xt=g("img",{class:"custom-image",src:J},null,-1),Tt=[xt],St=P(`<h4 id="default" tabindex="-1">Default: <a class="header-anchor" href="#default" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-progress-bar</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="red" tabindex="-1">Red: <a class="header-anchor" href="#red" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-progress-bar</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="custom" tabindex="-1">Custom: <a class="header-anchor" href="#custom" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-progress-bar</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{width}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-style<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./assets/cat.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-progress-bar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Using scoped slots like in the example above allows you to have full control over how the progress bar should look like.</p><div style="padding-bottom:50vh;"></div>`,8),Et='{"title":"Reusable Vue Scroll Progress Bar for Vue 3","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Examples","slug":"examples"}],"relativePath":"index.md"}',wt={},It=Object.assign(wt,{setup(t){const a="Default",n="Red",e="Custom",r=I([a,n,e]),p=I(r.value[0]);return(u,o)=>(i(),k("div",null,[ft,g("div",kt,[(i(!0),k(W,null,H(r.value,l=>(i(),k("div",mt,[G(g("input",{type:"radio",id:l,value:l,"onUpdate:modelValue":o[0]||(o[0]=d=>p.value=d)},null,8,vt),[[X,p.value]]),g("label",{for:l},Y(l),9,bt),_t]))),256))]),p.value===a?(i(),w(E,{key:0})):b("",!0),p.value===n?(i(),w(E,{key:1,color:"red",height:20})):b("",!0),p.value===e?(i(),w(E,{key:2},{default:z(({width:l})=>[g("div",{width:l,class:"custom-style"},Tt,8,yt)]),_:1})):b("",!0),St]))}});export{Et as __pageData,It as default};
