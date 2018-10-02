webpackJsonp([1],{0:function(e,t){},"2TLM":function(e,t){},"7zck":function(e,t){},Lh7m:function(e,t){},M8ab:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("gJtD"),s("j1ja");var i=s("7+uW"),r=s("8+8L"),a=s("3EgV"),n=s.n(a),o=s("kF/l"),l=s.n(o),u={data:function(){return{title:"",navbtn_to:"/results",options:{target:this.$http.options.root+"/upload",testChunks:!1}}},methods:{refresh:function(){location.reload()}},mounted:function(){this.$refs.btnBack.style.display="none",this.$refs.btnResults.style.display="",this.navbtn_to="/results"},created:function(){this.$store.state.uploader=new l.a(this.options)}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{attrs:{d:"app"}},[s("v-toolbar",{attrs:{lg1:"",dark:"",color:"primary"}},[s("v-flex",{attrs:{lg8:"","offset-lg2":""}},[s("v-toolbar",{attrs:{flat:"",color:"transparent"}},[s("v-toolbar-items",[s("v-btn",{attrs:{to:e.navbtn_to,depressed:"",large:"",color:"primary"}},[s("v-icon",{ref:"btnBack",attrs:{dark:"",large:""}},[e._v("arrow_back")]),e._v(" "),s("v-icon",{ref:"btnResults",attrs:{large:""}},[e._v("list")])],1)],1),e._v(" "),s("v-spacer"),e._v(" "),s("v-toolbar-title",[e._v(e._s(e.title))]),e._v(" "),s("v-spacer"),e._v(" "),s("v-toolbar-items",[s("v-btn",{attrs:{depressed:"",large:"",color:"primary"},on:{click:function(t){e.refresh()}}},[s("v-icon",{attrs:{large:""}},[e._v("refresh")])],1)],1)],1)],1)],1),e._v(" "),s("router-view",{attrs:{app:this}})],1)},staticRenderFns:[]};var c=s("VU/8")(u,d,!1,function(e){s("p8tV")},null,null).exports,f=s("/ocq");function p(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}var h=s("Dd8w"),v=s.n(h),m=s("NYxO"),_={name:"Analyzing",data:function(){return{update:!0}},computed:v()({},Object(m.b)({analyzing:"getAnalyzingFiles"})),methods:v()({},Object(m.c)({addFiles:"addAnalyzingFile",clearFiles:"clearAnalyzes"}),{analyzes:function(){var e=this;this.resource.getAnalyzing({}).then(function(t){for(var s in e.clearFiles(),t.body)if(t.body.hasOwnProperty(s)){var i=t.body[s];e.addFiles({file:s,isAnalyzing:i})}},function(e){console.log("Server is unavailable now, please try it again later.")})}}),created:function(){this.resource=this.$resource("",{},{getAnalyzing:{method:"GET",url:"analyzes"}})},mounted:function(){this.analyzes(),this.upd_interval=setInterval(function(){this.update?this.analyzes():clearInterval(this.upd_interval)}.bind(this),1e3)},beforeDestroy:function(){clearInterval(this.upd_interval)}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-list",{attrs:{"two-line":""}},[e._l(e.analyzing,function(t,i){return[s("v-list-tile",{attrs:{ripple:""}},[s("v-list-tile-content",[s("v-list-tile-title",[e._v(e._s(t.file))])],1),e._v(" "),s("v-list-tile-action",[!0===t.isAnalyzing?s("v-progress-circular",{attrs:{indeterminate:"",color:"secondary"}}):"NotPE"===t.isAnalyzing?s("v-icon",{attrs:{flat:"",color:"error",size:35}},[e._v("thumb_down")]):s("v-icon",{attrs:{flat:"",color:"success",size:35}},[e._v("done")])],1)],1),e._v(" "),i+1<e.analyzing.length?s("v-divider",{key:i}):e._e()]})],2)],1)},staticRenderFns:[]};var y={components:{Analyzing:s("VU/8")(_,g,!1,function(e){s("r84O")},"data-v-2e84d076",null).exports},props:{app:Object,autoStart:{type:Boolean,default:!0},fileStatusText:{type:Object,default:function(){return{success:"success",error:"error",uploading:"uploading",paused:"paused",waiting:"waiting"}}}},data:function(){return{started:!1,files:[],fileList:[],uploaderInstance:null,attrs:{accept:".exe, .dll, .sys"},tabs:null}},computed:{},methods:{uploadStart:function(){this.started=!0},fileAdded:function(e){if(this.$emit(p("fileAdded"),e),e.ignored)return!1},filesAdded:function(e,t){if(this.$emit(p("filesAdded"),e,t),e.ignored||t.ignored)return!1},fileRemoved:function(e){this.files=this.$store.state.uploader.files,this.fileList=this.$store.state.uploader.fileList},filesSubmitted:function(e,t){this.files=this.$store.state.uploader.files,this.fileList=this.$store.state.uploader.fileList,this.autoStart&&this.$store.state.uploader.upload()},allEvent:function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=t[0];"fileAdded"!==i&&"filesAdded"!==i&&(t[0]=p(i),this.$emit.apply(this,t))}},created:function(){this.$store.state.uploader.fileStatusText=this.fileStatusText,this.$store.state.uploader.on("catchAll",this.allEvent),this.$store.state.uploader.on("uploadStart",this.uploadStart),this.$store.state.uploader.on("fileAdded",this.fileAdded),this.$store.state.uploader.on("filesAdded",this.filesAdded),this.$store.state.uploader.on("fileRemoved",this.fileRemoved),this.$store.state.uploader.on("filesSubmitted",this.filesSubmitted),this.files=this.$store.state.uploader.files,this.fileList=this.$store.state.uploader.fileList},mounted:function(){this.app.title="Drop a file in the field below",this.app.$refs.btnBack.style.display="none",this.app.$refs.btnResults.style.display="",this.app.navbtn_to="/results"}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"justify-center":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",lg8:"","offset-lg2":""}},[s("uploader-drop",{staticClass:"dropzone"},[s("uploader-btn",{attrs:{attrs:e.attrs}},[e._v("Select file")]),e._v(" "),s("uploader-btn",{attrs:{directory:!0}},[e._v("Select folder")])],1),e._v(" "),s("br"),e._v(" "),s("v-tabs",{attrs:{slot:"extension","fixed-tabs":"",color:"transparent"},slot:"extension",model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[s("v-tabs-slider"),e._v(" "),s("v-tab",{staticClass:"primary--text",attrs:{href:"#uploads"}},[s("v-icon",{attrs:{large:"",color:"primary"}},[e._v("cloud_upload")])],1),e._v(" "),s("v-tab",{staticClass:"primary--text",attrs:{href:"#processing"}},[s("v-icon",{attrs:{large:"",color:"primary"}},[e._v("schedule")])],1)],1),e._v(" "),s("v-tabs-items",{staticClass:"white elevation-1",model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[s("br"),e._v(" "),s("v-tab-item",{attrs:{id:"uploads"}},[s("p",{staticClass:"title"},[e._v("Uploading files.")]),e._v(" "),s("uploader-list",{staticClass:"uploader",attrs:{"file-list":e.fileList}})],1),e._v(" "),s("v-tab-item",{attrs:{id:"processing"}},[s("p",{staticClass:"title"},[e._v("Analyzing files.")]),e._v(" "),s("analyzing")],1)],1)],1)],1)],1)},staticRenderFns:[]};var x=s("VU/8")(y,b,!1,function(e){s("NfY/")},"data-v-7e73df7e",null).exports,w={props:{app:Object},data:function(){return{alert:!1,alert_text:"",alert_mode:"success",search:"",certainty:"0",headers:[{text:"Feature",align:"center",value:"name"},{text:"Value",align:"center",value:"value"}],static_results:[]}},methods:{getResult:function(){var e=this;this.resource.getResults({filename:this.filename}).then(function(t){var s=t.body;for(var i in e.static_results=[],s){var r=s[i],a=i;if("signature_trusted"===a)null===r&&(r="No signature found.");else if("imports"===a)null!==r&&(r="Number of imports: "+r.length);else if("prediction"===a){e.certainty=100*r;continue}var n={name:a,value:r};e.static_results.push(n)}204===t.status&&(e.alert=!0,e.alert_mode="warning",e.alert_text=e.filename+" file results not found")},function(t){e.alert=!0,e.alert_mode="error",e.alert_text="Server is unavailable now, please try it again later."})}},mounted:function(){this.app.title="Static analyzer",this.app.$refs.btnBack.style.display="",this.app.$refs.btnResults.style.display="none",this.app.navbtn_to="/results"},created:function(){this.filename=this.$route.params.file;this.resource=this.$resource("",{},{getResults:{method:"GET",url:"results"}}),this.getResult()}},S={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-flex",{attrs:{xs12:"",md10:"",lg8:"",xl6:"","offset-md1":"","offset-lg2":"","offset-xl3":""}},[s("div",[s("v-alert",{attrs:{type:e.alert_mode,dismissible:""},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v("\n      "+e._s(e.alert_text)+"\n    ")])],1),e._v(" "),s("br"),e._v(" "),s("p",{staticClass:"headline",attrs:{slot:"activator"},slot:"activator"},[e._v(e._s(e.filename)+"\n    "),s("v-btn",{attrs:{flat:"",icon:"",color:"orange darken-2"},on:{click:function(t){e.getResult()}}},[s("v-icon",[e._v("autorenew")])],1)],1),e._v(" "),e.certainty>.5?s("span",{staticClass:"headline warning--text"},[e._v("Malware certainty: "+e._s(parseFloat(e.certainty).toFixed(3))+"%")]):s("span",{staticClass:"headline success--text"},[e._v("Malware certainty: "+e._s(parseFloat(e.certainty).toFixed(3))+"%")]),e._v(" "),s("br"),e._v(" "),s("v-container",{staticClass:"results"},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),s("v-data-table",{staticClass:"elevation-1 yellow lighten-3",attrs:{headers:e.headers,items:e.static_results,search:e.search,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),e._v(" "),s("td",[e._v(e._s(t.item.value))])]}}])},[s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v('\n          Your search for "'+e._s(e.search)+'" found no results.\n        ')])],1)],1)],1)],1)},staticRenderFns:[]};var A=s("VU/8")(w,S,!1,function(e){s("UeZF")},"data-v-6b3ee7bb",null).exports,C={props:{app:Object},data:function(){return{search:"",hide_malicious:!1,hide_legal:!1}},computed:v()({},Object(m.b)({results:"getCompleted"}),{malicious_thresh:{get:function(){return this.$store.state.malicious_threshold},set:function(e){this.$store.commit("setThresh",e)}},malwares:function(){var e=0;for(var t in this.results)this.results[t].prediction>this.malicious_thresh&&e++;return e}}),methods:v()({},Object(m.c)({addResult:"addCompleted",clearResults:"clearCompleted"}),{completed:function(){var e=this;this.resource.getCompleted({}).then(function(t){for(var s in e.clearResults(),t.body)if(t.body.hasOwnProperty(s)){var i=t.body[s];e.addResult(i)}},function(e){console.log("Server is unavailable now, please try it again later.")})},malw_count:function(){var e=0;for(var t in this.results)this.results[t].prediction>this.malicious_thresh&&e++;return e}}),created:function(){this.resource=this.$resource("",{},{getCompleted:{method:"GET",url:"completed"}})},mounted:function(){this.app.title="Analysis results",this.app.$refs.btnBack.style.display="",this.app.$refs.btnResults.style.display="none",this.app.navbtn_to="/",this.completed()},updated:function(){}},$={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-flex",{attrs:{xs12:"",lg6:"","offset-lg3":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),s("v-flex",{attrs:{xs5:"","offset-xs1":""}},[s("v-switch",{attrs:{label:"Hide Legal",color:"info"},model:{value:e.hide_malicious,callback:function(t){e.hide_malicious=t},expression:"hide_malicious"}})],1),e._v(" "),s("v-flex",{attrs:{xs5:"","offset-xs1":""}},[s("v-switch",{attrs:{label:"Hide Malicious",color:"info"},model:{value:e.hide_legal,callback:function(t){e.hide_legal=t},expression:"hide_legal"}})],1),e._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-slider",{attrs:{"thumb-label":"",hint:"Files above "+e.malicious_thresh.toString()+" will be considered as malware.",min:0,max:1,step:"0.01",label:"Threshold"},model:{value:e.malicious_thresh,callback:function(t){e.malicious_thresh=t},expression:"malicious_thresh"}}),e._v(" "),s("br")],1),e._v(" "),s("v-flex",{attrs:{xs6:""}},[s("span",{staticClass:"body-2 warning--text"},[e._v("Malwares: "+e._s(e.malwares))])]),e._v(" "),s("v-flex",{attrs:{xs6:""}},[s("span",{staticClass:"body-2 success--text"},[e._v("Legitimate: "+e._s(e.results.length-e.malwares)+" ")])]),e._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-list",{attrs:{"two-line":""}},[s("span",{directives:[{name:"show",rawName:"v-show",value:0===e.results.length,expression:"results.length===0"}]},[e._v("No results now.")]),e._v(" "),e._l(e.results,function(t,i){return[!t.name.toLowerCase().includes(e.search.toLowerCase())||!t.malicious&&e.hide_malicious||t.malicious&&e.hide_legal?e._e():s("v-list-tile",{key:t.name,attrs:{to:"/result/"+t.name,ripple:""}},[s("v-list-tile-content",[s("v-list-tile-title",[e._v(e._s(t.name))]),e._v(" "),s("v-list-tile-sub-title",{staticClass:"text--primary"},[e._v(e._s(t.location))]),e._v(" "),s("v-list-tile-sub-title",[e._v("Analysis time: "),s("strong",[e._v(e._s(parseFloat(t.time).toFixed(3)))]),e._v(" seconds")])],1),e._v(" "),s("v-list-tile-action",[s("v-list-tile-action-text",[s("strong",[e._v(e._s(parseFloat(t.prediction).toFixed(3))+"%")])]),e._v(" "),t.malicious?s("v-icon",{attrs:{color:"red lighten-1"}},[e._v("bug_report")]):s("v-icon",{attrs:{color:"success"}},[e._v("check_circle")])],1)],1),e._v(" "),i+1<e.results.length?s("v-divider",{key:i}):e._e()]})],2)],1)],1)],1)],1)],1)},staticRenderFns:[]};var z=s("VU/8")(C,$,!1,function(e){s("M8ab")},"data-v-164015c6",null).exports;i.a.use(f.a);var k=new f.a({routes:[{path:"/",name:"Main",component:x},{path:"/result/:file",name:"Results",component:A},{path:"/results",name:"ListResults",component:z},{path:"/upload",name:"Upload",component:c}]}),F=(s("7zck"),{name:"uploader-btn",props:{directory:{type:Boolean,default:!1},single:{type:Boolean,default:!1},attrs:{type:Object}},mounted:function(){var e=this;this.$nextTick(function(){e.$store.state.uploader.assignBrowse(e.$refs.btn,e.directory,e.single,e.attrs)})}}),R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{ref:"btn"},[t("v-btn",{attrs:{flat:"",large:""}},[this._t("default")],2)],1)},staticRenderFns:[]};var E=s("VU/8")(F,R,!1,function(e){s("2TLM")},null,null).exports,L={name:"uploader-drop",data:function(){return{dropClass:""}},methods:{onDragEnter:function(){this.dropClass="uploader-dragover"},onDragLeave:function(){this.dropClass=""},onDrop:function(){this.dropClass="uploader-droped"}},mounted:function(){var e=this;this.$nextTick(function(){var t=e.$refs.drop;e.$store.state.uploader.assignDrop(t),t.addEventListener("dragenter",e.onDragEnter,!1),t.addEventListener("dragleave",e.onDragLeave,!1),t.addEventListener("drop",e.onDrop,!1)})},beforeDestroy:function(){var e=this.$refs.drop;e.removeEventListener("dragenter",this.onDragEnter,!1),e.removeEventListener("dragleave",this.onDragLeave,!1),e.removeEventListener("drop",this.onDrop,!1),this.$store.state.uploader.unAssignDrop(e)}},U={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"drop",staticClass:"uploader-drop",class:this.dropClass},[this._t("default")],2)},staticRenderFns:[]};var T=s("VU/8")(L,U,!1,function(e){s("pR/H")},null,null).exports,V={name:"uploader-unsupport",mixins:[{mounted:function(){this.uploader=function(e){for(var t=e.$parent;t;){if(t.uploader)return t.uploader;t=t.$parent}return null}(this)}},{data:function(){return{support:!0}},mounted:function(){this.support=this.uploader.support}}]},j={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:!this.support,expression:"!support"}],staticClass:"uploader-unsupport"},[this._t("default",[this._m(0)])],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n      Your browser, unfortunately, is not supported by Uploader.js. The library requires support for "),t("a",{attrs:{href:"http://www.w3.org/TR/FileAPI/"}},[this._v("the HTML5 File API")]),this._v(" along with "),t("a",{attrs:{href:"http://www.w3.org/TR/FileAPI/#normalization-of-params"}},[this._v("file slicing")]),this._v(".\n    ")])}]};var D=s("VU/8")(V,j,!1,function(e){s("Lh7m")},null,null).exports,O=s("fZjL"),N=s.n(O),M=["fileProgress","fileSuccess","fileComplete","fileError"],P={name:"uploader-file",props:{file:{type:Object,default:function(){return{}}},list:{type:Boolean,default:!1}},data:function(){return{paused:!1,error:!1,averageSpeed:0,currentSpeed:0,isComplete:!1,isUploading:!1,size:0,formatedSize:"",uploadedSize:0,progress:0,timeRemaining:0,type:"",extension:"",progressingClass:""}},computed:{fileCategory:function(){var e=this.extension,t=this.file.isFolder?"folder":"unknown",s=this.file.uploader.opts.categoryMap||{image:["gif","jpg","jpeg","png","bmp","webp"],video:["mp4","m3u8","rmvb","avi","swf","3gp","mkv","flv"],audio:["mp3","wav","wma","ogg","aac","flac"],document:["doc","txt","docx","pages","epub","pdf","numbers","csv","xls","xlsx","keynote","ppt","pptx"]};return N()(s).forEach(function(i){s[i].indexOf(e)>-1&&(t=i)}),t},progressStyle:function(){var e=Math.floor(100*this.progress),t="translateX("+Math.floor(e-100)+"%)";return{progress:e+"%",webkitTransform:t,mozTransform:t,msTransform:t,transform:t}},formatedAverageSpeed:function(){return l.a.utils.formatSize(this.averageSpeed)+" / s"},status:function(){var e=this.isUploading,t=this.isComplete,s=this.error,i=this.paused;return t?"success":s?"error":e?"uploading":i?"paused":"waiting"},statusText:function(){var e=this.status;return this.file.uploader.fileStatusText[e]||e},formatedTimeRemaining:function(){var e=this.timeRemaining,t=this.file;if(e===Number.POSITIVE_INFINITY||0===e)return"";var s=function(e){var t=Math.floor(e/31536e3);if(t)return t+" year"+n(t);var s=Math.floor((e%=31536e3)/86400);if(s)return s+" day"+n(s);var i=Math.floor((e%=86400)/3600);if(i)return i+" hour"+n(i);var r=Math.floor((e%=3600)/60);if(r)return r+" minute"+n(r);var a=e%60;return a+" second"+n(a);function n(e){return e>1?"s":""}}(e),i=t.uploader.opts.parseTimeRemaining;return i&&(s=i(e,s)),s}},watch:{status:function(e,t){t&&"uploading"===e&&"uploading"!==t?this.tid=setTimeout(function(){},200):clearTimeout(this.tid)}},methods:{_actionCheck:function(){this.paused=this.file.paused,this.error=this.file.error,this.isUploading=this.file.isUploading()},pause:function(){this.file.pause(),this._actionCheck(),this._fileProgress()},resume:function(){this.file.resume(),this._actionCheck()},remove:function(){this.file.cancel()},retry:function(){this.file.retry(),this._actionCheck()},fileEventsHandler:function(e,t){var s=t[0],i=t[1],r=this.list?s:i;if(this.file===r){if(this.list&&"fileSuccess"===e)return;this["_"+e].apply(this,t)}},_fileProgress:function(){this.progress=this.file.progress(),this.averageSpeed=this.file.averageSpeed,this.currentSpeed=this.file.currentSpeed,this.timeRemaining=this.file.timeRemaining(),this.uploadedSize=this.file.sizeUploaded(),this._actionCheck()},_fileSuccess:function(){this._fileProgress(),this.error=!1,this.isComplete=!0,this.isUploading=!1},_fileComplete:function(){console.log("complete"),this._fileSuccess()},_fileError:function(){this._fileProgress(),this.error=!0,this.isComplete=!1,this.isUploading=!1}},mounted:function(){var e=this;["paused","error","averageSpeed","currentSpeed"].forEach(function(t){e[t]=e.file[t]}),["isComplete","isUploading",{key:"size",fn:"getSize"},{key:"formatedSize",fn:"getFormatSize"},{key:"uploadedSize",fn:"sizeUploaded"},"progress","timeRemaining",{key:"type",fn:"getType"},{key:"extension",fn:"getExtension"}].forEach(function(t){"string"==typeof t?e[t]=e.file[t]():e[t.key]=e.file[t.fn]()});var t=this._handlers={};M.forEach(function(s){e.file.uploader.on(s,function(s){return t[s]=function(){for(var t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];e.fileEventsHandler(s,i)},t[s]}(s))})},destroyed:function(){var e=this;M.forEach(function(t){e.file.uploader.off(t,e._handlers[t])}),this._handlers=null}},B={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-list-tile",{key:e.file.id,attrs:{file:e.file,list:e.list,status:e.status,paused:e.paused,error:e.error,"average-speed":e.averageSpeed,"formated-average-speed":e.formatedAverageSpeed,"current-speed":e.currentSpeed,"is-complete":e.isComplete,"is-uploading":e.isUploading,size:e.size,"formated-size":e.formatedSize,"uploaded-size":e.uploadedSize,progress:e.progress,"progress-style":e.progressStyle,"progressing-class":e.progressingClass,"time-remaining":e.timeRemaining,"formated-time-remaining":e.formatedTimeRemaining,type:e.type,extension:e.extension,"file-category":e.fileCategory}},[s("v-progress-linear",{staticStyle:{position:"absolute",height:"100%",width:"100%",left:"0"},style:e.progressStyle,attrs:{height:"45",color:"success"}}),e._v(" "),s("v-list-tile-content",{staticStyle:{position:"relative"}},[s("v-list-tile-title",[s("i",{attrs:{icon:e.fileCategory}}),e._v(e._s(e.file.name))]),e._v(" "),s("v-list-tile-sub-title",[e._v(" "+e._s(e.formatedSize))]),e._v(" "),s("v-list-tile-sub-title")],1),e._v(" "),s("v-list-tile-action",{staticStyle:{position:"relative",right:"100px"}},[s("v-list-tile-action-text",[s("span",{directives:[{name:"show",rawName:"v-show",value:"uploading"!==e.status,expression:"status !== 'uploading'"}]},[e._v(e._s(e.statusText))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:"uploading"===e.status,expression:"status === 'uploading'"}]},[s("span",[e._v(e._s(e.progressStyle.progress))]),e._v(" "),s("em",[e._v(e._s(e.formatedAverageSpeed))]),e._v(" "),s("i",[e._v(e._s(e.formatedTimeRemaining))])])])],1),e._v(" "),s("div",{staticStyle:{position:"relative",right:"10px"}},[e.isUploading?s("v-btn",{attrs:{small:"",flat:"",icon:"",color:"primary"},on:{click:e.pause}},[s("v-icon",[e._v("pan_tool")])],1):e._e(),e._v(" "),e.paused?s("v-btn",{attrs:{small:"",flat:"",icon:"",color:"primary"},on:{click:e.resume}},[s("v-icon",[e._v("backup")])],1):e._e(),e._v(" "),e.error?s("v-btn",{attrs:{small:"",flat:"",icon:"",color:"primary"},on:{click:e.retry}},[s("v-icon",[e._v("autorenew")])],1):e._e(),e._v(" "),e.isComplete?s("v-btn",{attrs:{small:"",flat:"",icon:"",color:"warning"},on:{click:e.remove}},[s("v-icon",[e._v("highlight_off")])],1):e._e()],1)],1)},staticRenderFns:[]};var I=s("VU/8")(P,B,!1,function(e){s("y8CN")},null,null).exports,H={name:"uploader-list",props:{fileList:Array},components:{UploaderFile:I}},Y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{row:""}},[s("v-flex",[s("v-card",[s("v-list",{attrs:{"two-line":""}},[0===e.fileList.length?s("span",[e._v("No files yet.")]):e._e(),e._v(" "),e._l(e.fileList,function(t,i){return[s("uploader-file",{attrs:{file:t,list:!0}}),e._v(" "),i+1<e.fileList.length?s("v-divider",{key:i}):e._e()]})],2)],1)],1)],1)},staticRenderFns:[]};var Z=s("VU/8")(H,Y,!1,function(e){s("rW4+")},null,null).exports,G={name:"uploader-files",computed:{files:function(){return this.$parent.files}},components:{UploaderFile:I}},J={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"uploader-files"},[this._t("default",[t("ul",this._l(this.files,function(e){return t("li",{key:e.id},[t("uploader-file",{attrs:{file:e}})],1)}))],{files:this.files})],2)},staticRenderFns:[]};var W=s("VU/8")(G,J,!1,function(e){s("pw6c")},null,null).exports,q={name:"uploader",props:{options:{type:Object,default:function(){return{}}},autoStart:{type:Boolean,default:!0},fileStatusText:{type:Object,default:function(){return{success:"success",error:"error",uploading:"uploading",paused:"paused",waiting:"waiting"}}}},data:function(){return{started:!1,files:[],fileList:[]}},methods:{uploadStart:function(){this.started=!0},fileAdded:function(e){if(this.$emit(p("fileAdded"),e),e.ignored)return!1},filesAdded:function(e,t){if(this.$emit(p("filesAdded"),e,t),e.ignored||t.ignored)return!1},fileRemoved:function(e){this.files=this.uploader.files,this.fileList=this.uploader.fileList},filesSubmitted:function(e,t){this.files=this.uploader.files,this.fileList=this.uploader.fileList,this.autoStart&&this.uploader.upload()},allEvent:function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=t[0];"fileAdded"!==i&&"filesAdded"!==i&&(t[0]=p(i),this.$emit.apply(this,t))}},created:function(){var e=new l.a(this.options);this.uploader=e,this.uploader.fileStatusText=this.fileStatusText,e.on("catchAll",this.allEvent),e.on("uploadStart",this.uploadStart),e.on("fileAdded",this.fileAdded),e.on("filesAdded",this.filesAdded),e.on("fileRemoved",this.fileRemoved),e.on("filesSubmitted",this.filesSubmitted)},destroyed:function(){var e=this.uploader;e.off("catchAll",this.allEvent),e.off("uploadStart",this.uploadStart),e.off("fileAdded",this.fileAdded),e.off("filesAdded",this.filesAdded),e.off("fileRemoved",this.fileRemoved),e.off("filesSubmitted",this.filesSubmitted),this.uploader=null},components:{UploaderBtn:E,UploaderDrop:T,UploaderUnsupport:D,UploaderList:Z,UploaderFiles:W,UploaderFile:I}},X={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"uploader"},[e._t("default",[s("uploader-unsupport"),e._v(" "),s("uploader-drop",[s("p",[e._v("Drop files here to upload or")]),e._v(" "),s("uploader-btn",[e._v("select files")]),e._v(" "),s("uploader-btn",{attrs:{directory:!0}},[e._v("select folder")])],1),e._v(" "),s("uploader-list")],{files:e.files,fileList:e.fileList,started:e.started})],2)},staticRenderFns:[]};var K=s("VU/8")(q,X,!1,function(e){s("zViV")},null,null).exports,Q={install:te,Uploader:K,UploaderBtn:E,UploaderDrop:T,UploaderUnsupport:D,UploaderList:Z,UploaderFiles:W,UploaderFile:I};"undefined"!=typeof window&&window.Vue&&window.Vue.use(te);var ee=Q;function te(e){te.installed||(e.component(K.name,K),e.component(E.name,E),e.component(T.name,T),e.component(D.name,D),e.component(Z.name,Z),e.component(W.name,W),e.component(I.name,I))}i.a.use(m.a);var se=new m.a.Store({state:{uploader:null,analyzing_files:[{file:"some_File.exe",isAnalyzing:!0}],malicious_threshold:.8,completed:[{time:"1 sec",location:"F:/PeFiles/L.exe",name:"L1.exe",info:"Some information",prediction:.2,malicious:!1}]},getters:{getAnalyzingFiles:function(e){return e.analyzing_files},getThresh:function(e){return e.malicious_threshold},getCompleted:function(e){for(var t in e.completed)e.completed[t].malicious=e.completed[t].prediction>e.malicious_threshold;return e.completed}},mutations:{addAnalyzingFile:function(e,t){var s=t.file,i=t.isAnalyzing;e.analyzing_files.push({file:s,isAnalyzing:i})},clearAnalyzes:function(e){e.analyzing_files=[]},setThresh:function(e,t){e.malicious_threshold=t},addCompleted:function(e,t){e.completed.push({time:t.time,location:t.location,name:t.name,info:t.info,prediction:t.prediction,malicious:!0})},clearCompleted:function(e){e.completed=[]}}});i.a.use(m.a),i.a.use(ee),i.a.use(r.a),i.a.http.options.root="http://127.0.0.1:8000",i.a.use(n.a,{theme:{primary:"#FFCC80",secondary:"#FF9E80",accent:"#385f8b",error:"#ffa2b0",warning:"#ff627d",info:"#90CAF9",success:"#00E676"}}),i.a.config.productionTip=!1,new i.a({el:"#app",router:k,store:se,components:{App:c},template:"<App/>"})},"NfY/":function(e,t){},UeZF:function(e,t){},gJtD:function(e,t){},p8tV:function(e,t){},"pR/H":function(e,t){},pw6c:function(e,t){},r84O:function(e,t){},"rW4+":function(e,t){},y8CN:function(e,t){},zViV:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.de2cdf4ebcf0c293c817.js.map