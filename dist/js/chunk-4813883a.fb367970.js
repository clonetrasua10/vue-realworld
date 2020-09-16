(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4813883a"],{"7c28":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"error-messages"},t._l(t.errors,(function(e,a){return r("li",{key:a},[t._v(t._s(a)+": "+t._s(t._f("error")(e)))])})),0)},i=[],o={props:{errors:{type:Object,required:!0}}},s=o,n=r("2877"),l=Object(n["a"])(s,a,i,!1,null,null,null);e["a"]=l.exports},"89b7":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"tag-list"},t._l(t.tags,(function(e,a){return r("li",{key:a,staticClass:"tag-pill tag-default"},["article"==t.type?r("i",{staticClass:"ion-close-round",on:{click:function(r){return t.$emit("removeTag",e)}}}):t._e(),t._v(" "+t._s(e)+" ")])})),0)},i=[],o=(r("b0c0"),{props:{tags:{type:Array},type:{type:String,default:"global"}},mounted:function(){},computed:{getRouteName:function(){return this.$route.name}}}),s=o,n=r("2877"),l=Object(n["a"])(s,a,i,!1,null,null,null);e["a"]=l.exports},"91f6":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("ErrorNotify",{attrs:{errors:t.errors}}),r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addTag(e))}}}),r("TagList",{attrs:{type:"article",tags:t.article.tagList},on:{removeTag:t.removeTag}})],1),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.Update(e)}}},[t._v(" Update Article ")])])])],1)])])])},i=[],o=(r("a4d3"),r("e01a"),r("5530")),s=r("7c28"),n=r("2f62"),l=r("89b7"),c={data:function(){return{errors:{}}},props:{slug:{type:String}},mounted:function(){this.$store.dispatch("article/fetchArticle",this.slug)},methods:{Update:function(){var t=this,e=this.article,r=e.body,a=e.title,i=e.description,o=e.tagList;this.$store.dispatch("article/updateArticle",{slug:this.slug,form:{body:r,title:a,description:i,tagList:o}}).then((function(e){var r=e.article;t.$router.push({name:"DetailArticle",params:{slug:r.slug}})})).catch((function(e){t.errors=e.errors}))},addTag:function(t){this.$store.dispatch("article/addTag",t.target.value),t.target.value=""},removeTag:function(t){this.$store.dispatch("article/removeTag",t)}},computed:Object(o["a"])({},Object(n["c"])({article:"article/article"})),components:{ErrorNotify:s["a"],TagList:l["a"]}},u=c,p=r("2877"),d=Object(p["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports},b0c0:function(t,e,r){var a=r("83ab"),i=r("9bf2").f,o=Function.prototype,s=o.toString,n=/^\s*function ([^ (]*)/,l="name";a&&!(l in o)&&i(o,l,{configurable:!0,get:function(){try{return s.call(this).match(n)[1]}catch(t){return""}}})},e01a:function(t,e,r){"use strict";var a=r("23e7"),i=r("83ab"),o=r("da84"),s=r("5135"),n=r("861d"),l=r("9bf2").f,c=r("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var p={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(p[e]=!0),e};c(d,u);var f=d.prototype=u.prototype;f.constructor=d;var g=f.toString,m="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var t=n(this)?this.valueOf():this,e=g.call(t);if(s(p,t))return"";var r=m?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:d})}}}]);
//# sourceMappingURL=chunk-4813883a.fb367970.js.map