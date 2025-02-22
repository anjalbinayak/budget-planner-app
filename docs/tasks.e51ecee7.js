var e,t,n,s,o,i,a,r,l,c,d,u,h,f,m,g,E,p,C,y,O,v,I,_,T=globalThis,N={},A={},R=T.parcelRequire94c2;null==R&&((R=function(e){if(e in N)return N[e].exports;if(e in A){var t=A[e];delete A[e];var n={id:e,exports:{}};return N[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){A[e]=t},T.parcelRequire94c2=R),R.register;var S=R("ilpIi"),w=R("47Mwn");(e=h||(h={})).STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object",(t=f||(f={})).LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python",(n=m||(m={})).OUTCOME_UNSPECIFIED="outcome_unspecified",n.OUTCOME_OK="outcome_ok",n.OUTCOME_FAILED="outcome_failed",n.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=["user","model","function","system"];(s=g||(g={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",s.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",s.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",s.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",s.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(o=E||(E={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE",(i=p||(p={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH",(a=C||(C={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",a.SAFETY="SAFETY",a.OTHER="OTHER",(r=y||(y={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.OTHER="OTHER",(l=O||(O={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",l.RETRIEVAL_QUERY="RETRIEVAL_QUERY",l.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",l.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",l.CLASSIFICATION="CLASSIFICATION",l.CLUSTERING="CLUSTERING",(c=v||(v={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",c.AUTO="AUTO",c.ANY="ANY",c.NONE="NONE",(d=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class L extends M{constructor(e,t){super(e),this.response=t}}class x extends M{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class D extends M{}(u=_||(_={})).GENERATE_CONTENT="generateContent",u.STREAM_GENERATE_CONTENT="streamGenerateContent",u.COUNT_TOKENS="countTokens",u.EMBED_CONTENT="embedContent",u.BATCH_EMBED_CONTENTS="batchEmbedContents";class B{constructor(e,t,n,s,o){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",s=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",o=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function H(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(e){throw new D(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${e.message}`)}for(let[e,t]of s.entries()){if("x-goog-api-key"===e)throw new D(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new D(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function $(e,t,n,s,o,i){let a=new B(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await H(a),body:o})}}async function F(e,t,n,s,o,i={},a=fetch){let{url:r,fetchOptions:l}=await $(e,t,n,s,o,i);return U(r,l,a)}async function U(e,t,n=fetch){let s;try{s=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof x||e instanceof D||((n=new M(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return s.ok||await G(s,e),s}async function G(e,t){let n,s="";try{let t=await e.json();s=t.error.message,t.error.details&&(s+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new x(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${s}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new L(`${Y(e)}`,e);return function(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new L(`Text not available. ${Y(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new L(`${Y(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),j(e)[0]}if(e.promptFeedback)throw new L(`Function call not available. ${Y(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new L(`${Y(e)}`,e);return j(e)}if(e.promptFeedback)throw new L(`Function call not available. ${Y(e)}`,e)},e}function j(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}const k=[y.RECITATION,y.SAFETY,y.LANGUAGE];function K(e){return!!e.finishReason&&k.includes(e.finishReason)}function Y(e){var t,n,s;let o="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];K(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}return o}function q(e){return this instanceof q?(this.v=e,this):new q(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function V(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return P(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let s={};for(let o of e.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[t].content.parts.push(s)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n,s){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:o})=>{let i;if(o){if(n.trim()){e.error(new M("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(J);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new M(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(J)}return s()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(e){o[e]&&(s[e]=function(t){return new Promise(function(n,s){i.push([e,t,n,s])>1||r(e,t)})})}function r(e,t){try{var n;(n=o[e](t)).value instanceof q?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield q(t.read());if(n)break;yield yield q(P(e))}})}(t),response:V(n)}}(await F(t,_.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s))}async function W(e,t,n,s){let o=await F(t,_.GENERATE_CONTENT,e,!1,JSON.stringify(n),s);return{response:P(await o.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function z(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,o=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new M("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new M("No content is provided for sending chat message.");return s?t:n}(t)}function Z(e){let t;return t=e.contents?e:{contents:[z(e)]},e.systemInstruction&&(t.systemInstruction=Q(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],et={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},en="SILENT_ERROR";class es{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:s}=n;if(!t&&"user"!==e)throw new M(`First content should be with role 'user', got ${e}`);if(!b.includes(e))throw new M(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(b)}`);if(!Array.isArray(s))throw new M("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new M("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of s)for(let t of ee)t in e&&(o[t]+=1);let i=et[e];for(let t of ee)if(!i.includes(t)&&o[t]>0)throw new M(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,o,i,a,r;let l;await this._sendPromise;let c=z(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>W(this._apiKey,this.model,d,u)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=Y(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,s,o,i,a,r;await this._sendPromise;let l=z(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=X(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(en)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=Y(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==en&&console.error(e)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e,t,n,s){return(await F(t,_.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e,t,n,s){return(await F(t,_.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function ea(e,t,n,s){let o=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await F(t,_.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Q(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let s=Z(e),o=Object.assign(Object.assign({},this._requestOptions),t);return W(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(e,t={}){var n;let s=Z(e),o=Object.assign(Object.assign({},this._requestOptions),t);return X(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(e){var t;return new es(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let s={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},o=null!=e.generateContentRequest;if(e.contents){if(o)throw new D("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{let t=z(e);s.contents=[t]}return{generateContentRequest:s}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return eo(this.apiKey,this.model,n,s)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:z(e)}:e,s=Object.assign(Object.assign({},this._requestOptions),t);return ei(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return ea(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new M("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new er(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new D("Cached content must contain a `name` field.");if(!e.model)throw new D("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new D(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new er(this.apiKey,s,n)}}JSON.parse(localStorage.getItem("email"))||(window.location.href="index.html");const ec=document.getElementById("chatbotModal"),ed=document.getElementById("closeChatbot"),eu=document.getElementById("chatInput"),eh=document.getElementById("sendChat"),ef=document.getElementById("chatbotMessages"),em=document.getElementById("addTransactionBtn"),eg=document.getElementById("transactionModal"),eE=document.getElementById("transactionForm"),ep=document.getElementById("cancelBtn"),eC=document.getElementById("transactionsList");document.getElementById("generateQRCodeBtn").addEventListener("click",()=>{document.getElementById("qrcode").style.display="block"}),em.addEventListener("click",()=>{eg.classList.add("active")}),ep.addEventListener("click",()=>{eg.classList.remove("active"),eE.reset()}),eE.addEventListener("submit",async e=>{e.preventDefault();let t=w.auth.currentUser;if(!t){eI("Please sign in first","error");return}try{let e=document.getElementById("description").value,n=Number.parseFloat(document.getElementById("amount").value),s=document.getElementById("type").value;await (0,S.addDoc)((0,S.collection)(w.db,"transactions"),{userId:t.uid,description:e,amount:n,type:s,date:(0,S.serverTimestamp)()}),eg.classList.remove("active"),eE.reset(),eI("Transaction added successfully!"),await ey()}catch(e){eI("Error adding transaction: "+e.message,"error")}}),(0,w.auth).onAuthStateChanged(async e=>{e&&await ey()});const ey=async()=>{let e=w.auth.currentUser;if(e)try{let t=(0,S.query)((0,S.collection)(w.db,"transactions"),(0,S.where)("userId","==",e.uid)),n=await (0,S.getDocs)(t),s=n.docs.map(e=>({id:e.id,...e.data()})),o=0,i=0;if(eC.innerHTML="",n.empty){eC.innerHTML="No transactions yet";return}s.forEach(e=>{"income"===e.type?o+=Number.parseFloat(e.amount):i+=Number.parseFloat(e.amount);let t=document.createElement("div");t.className=`transaction ${e.type}`,t.innerHTML=`${e.description} ${"income"===e.type?"+":"-"}$${Number.parseFloat(e.amount).toFixed(2)}`;let n=document.createElement("button");n.innerHTML="<i class='fa fa-trash'></i>",n.className="delete-btn",n.addEventListener("click",async()=>{await (0,S.deleteDoc)((0,S.doc)(w.db,"transactions",e.id)),eI("Transaction deleted successfully!"),ey()}),t.appendChild(n),eC.appendChild(t)}),document.getElementById("totalBalance").textContent=`$${(o-i).toFixed(2)}`,document.getElementById("totalIncome").textContent=`$${o.toFixed(2)}`,document.getElementById("totalExpenses").textContent=`$${i.toFixed(2)}`}catch(e){eI("Error loading transactions: "+e.message,"error")}};async function eO(e){try{let t=new el("AIzaSyAb5n4-5OqHL9V0DE8ImoTv8dg-ltoALXU").getGenerativeModel({model:"gemini-1.5-flash"});return(await t.generateContent(e)).response.text()}catch(e){return console.error("Error calling Gemini AI:",e),"Error: Unable to process your request. Please try again later."}}function ev(e,t){let n=document.createElement("div");n.className="chat-message",n.innerHTML=`${e}: ${t}`,ef.appendChild(n),ef.scrollTop=ef.scrollHeight}function eI(e,t="success"){let n=document.createElement("div");n.className=`toast ${t}`,n.textContent=e,document.getElementById("toastContainer").appendChild(n),setTimeout(()=>n.remove(),3e3)}document.getElementById("chatbotButton").addEventListener("click",()=>{ec.classList.toggle("hidden")}),ed.addEventListener("click",()=>{ec.classList.add("hidden")}),eh.addEventListener("click",async()=>{let e=eu.value.trim();if(e){ev("You",e),eu.value="";try{let t=await eO(e);ev("Gemini AI",t)}catch(e){eI("Error processing chat request: "+e.message,"error")}}});const e_=document.getElementById("refresh-txn");e_&&e_.addEventListener("click",async()=>{await ey()}),console.log("Script loaded and executed");
//# sourceMappingURL=tasks.e51ecee7.js.map
