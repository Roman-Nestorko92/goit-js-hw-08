!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function j(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(T,t),s?j(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?v(n,a-(e-c)):n}(e))}function h(e){return f=void 0,p&&r?j(e):(r=o=void 0,u)}function w(){var e=g(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(T,t),j(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const j=document.querySelector(".feedback-form");j.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(S))}),500)),j.addEventListener("submit",(function(e){if(e.preventDefault(),""===j.email.value||""===j.message.value)return alert("All items must be completed");const t=localStorage.getItem(O);console.log(JSON.parse(t)),e.currentTarget.reset(),localStorage.removeItem(O),S={}}));const O="feedback-form-state";let S=JSON.parse(localStorage.getItem(O))||{};j.email.value=S.email||"",j.message.value=S.message||""}();
//# sourceMappingURL=03-feedback.60f26642.js.map