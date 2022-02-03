goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37768 = arguments.length;
var i__4865__auto___37769 = (0);
while(true){
if((i__4865__auto___37769 < len__4864__auto___37768)){
args__4870__auto__.push((arguments[i__4865__auto___37769]));

var G__37770 = (i__4865__auto___37769 + (1));
i__4865__auto___37769 = G__37770;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37367){
var G__37368 = cljs.core.first(seq37367);
var seq37367__$1 = cljs.core.next(seq37367);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37368,seq37367__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37373 = cljs.core.seq(sources);
var chunk__37374 = null;
var count__37375 = (0);
var i__37376 = (0);
while(true){
if((i__37376 < count__37375)){
var map__37385 = chunk__37374.cljs$core$IIndexed$_nth$arity$2(null,i__37376);
var map__37385__$1 = cljs.core.__destructure_map(map__37385);
var src = map__37385__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37385__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37386){var e_37773 = e37386;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37773);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37773.message)].join('')));
}

var G__37774 = seq__37373;
var G__37775 = chunk__37374;
var G__37776 = count__37375;
var G__37777 = (i__37376 + (1));
seq__37373 = G__37774;
chunk__37374 = G__37775;
count__37375 = G__37776;
i__37376 = G__37777;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37373);
if(temp__5753__auto__){
var seq__37373__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37373__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37373__$1);
var G__37778 = cljs.core.chunk_rest(seq__37373__$1);
var G__37779 = c__4679__auto__;
var G__37780 = cljs.core.count(c__4679__auto__);
var G__37781 = (0);
seq__37373 = G__37778;
chunk__37374 = G__37779;
count__37375 = G__37780;
i__37376 = G__37781;
continue;
} else {
var map__37387 = cljs.core.first(seq__37373__$1);
var map__37387__$1 = cljs.core.__destructure_map(map__37387);
var src = map__37387__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37388){var e_37786 = e37388;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37786);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37786.message)].join('')));
}

var G__37787 = cljs.core.next(seq__37373__$1);
var G__37788 = null;
var G__37789 = (0);
var G__37790 = (0);
seq__37373 = G__37787;
chunk__37374 = G__37788;
count__37375 = G__37789;
i__37376 = G__37790;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37391 = cljs.core.seq(js_requires);
var chunk__37392 = null;
var count__37393 = (0);
var i__37394 = (0);
while(true){
if((i__37394 < count__37393)){
var js_ns = chunk__37392.cljs$core$IIndexed$_nth$arity$2(null,i__37394);
var require_str_37791 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37791);


var G__37792 = seq__37391;
var G__37793 = chunk__37392;
var G__37794 = count__37393;
var G__37795 = (i__37394 + (1));
seq__37391 = G__37792;
chunk__37392 = G__37793;
count__37393 = G__37794;
i__37394 = G__37795;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37391);
if(temp__5753__auto__){
var seq__37391__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37391__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37391__$1);
var G__37796 = cljs.core.chunk_rest(seq__37391__$1);
var G__37797 = c__4679__auto__;
var G__37798 = cljs.core.count(c__4679__auto__);
var G__37799 = (0);
seq__37391 = G__37796;
chunk__37392 = G__37797;
count__37393 = G__37798;
i__37394 = G__37799;
continue;
} else {
var js_ns = cljs.core.first(seq__37391__$1);
var require_str_37800 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37800);


var G__37801 = cljs.core.next(seq__37391__$1);
var G__37802 = null;
var G__37803 = (0);
var G__37804 = (0);
seq__37391 = G__37801;
chunk__37392 = G__37802;
count__37393 = G__37803;
i__37394 = G__37804;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37396){
var map__37397 = p__37396;
var map__37397__$1 = cljs.core.__destructure_map(map__37397);
var msg = map__37397__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37397__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37397__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37398(s__37399){
return (new cljs.core.LazySeq(null,(function (){
var s__37399__$1 = s__37399;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37399__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37406 = cljs.core.first(xs__6308__auto__);
var map__37406__$1 = cljs.core.__destructure_map(map__37406);
var src = map__37406__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37406__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37406__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37399__$1,map__37406,map__37406__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37397,map__37397__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37398_$_iter__37400(s__37401){
return (new cljs.core.LazySeq(null,((function (s__37399__$1,map__37406,map__37406__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37397,map__37397__$1,msg,info,reload_info){
return (function (){
var s__37401__$1 = s__37401;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37401__$1);
if(temp__5753__auto____$1){
var s__37401__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37401__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37401__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37403 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37402 = (0);
while(true){
if((i__37402 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37402);
cljs.core.chunk_append(b__37403,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37809 = (i__37402 + (1));
i__37402 = G__37809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37403),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37398_$_iter__37400(cljs.core.chunk_rest(s__37401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37403),null);
}
} else {
var warning = cljs.core.first(s__37401__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37398_$_iter__37400(cljs.core.rest(s__37401__$2)));
}
} else {
return null;
}
break;
}
});})(s__37399__$1,map__37406,map__37406__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37397,map__37397__$1,msg,info,reload_info))
,null,null));
});})(s__37399__$1,map__37406,map__37406__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37397,map__37397__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37398(cljs.core.rest(s__37399__$1)));
} else {
var G__37810 = cljs.core.rest(s__37399__$1);
s__37399__$1 = G__37810;
continue;
}
} else {
var G__37811 = cljs.core.rest(s__37399__$1);
s__37399__$1 = G__37811;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37409_37812 = cljs.core.seq(warnings);
var chunk__37410_37813 = null;
var count__37411_37814 = (0);
var i__37412_37815 = (0);
while(true){
if((i__37412_37815 < count__37411_37814)){
var map__37415_37816 = chunk__37410_37813.cljs$core$IIndexed$_nth$arity$2(null,i__37412_37815);
var map__37415_37817__$1 = cljs.core.__destructure_map(map__37415_37816);
var w_37818 = map__37415_37817__$1;
var msg_37819__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37415_37817__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37415_37817__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37415_37817__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37415_37817__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37822)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37820),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37821),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37819__$1)].join(''));


var G__37823 = seq__37409_37812;
var G__37824 = chunk__37410_37813;
var G__37825 = count__37411_37814;
var G__37826 = (i__37412_37815 + (1));
seq__37409_37812 = G__37823;
chunk__37410_37813 = G__37824;
count__37411_37814 = G__37825;
i__37412_37815 = G__37826;
continue;
} else {
var temp__5753__auto___37827 = cljs.core.seq(seq__37409_37812);
if(temp__5753__auto___37827){
var seq__37409_37828__$1 = temp__5753__auto___37827;
if(cljs.core.chunked_seq_QMARK_(seq__37409_37828__$1)){
var c__4679__auto___37829 = cljs.core.chunk_first(seq__37409_37828__$1);
var G__37830 = cljs.core.chunk_rest(seq__37409_37828__$1);
var G__37831 = c__4679__auto___37829;
var G__37832 = cljs.core.count(c__4679__auto___37829);
var G__37833 = (0);
seq__37409_37812 = G__37830;
chunk__37410_37813 = G__37831;
count__37411_37814 = G__37832;
i__37412_37815 = G__37833;
continue;
} else {
var map__37416_37834 = cljs.core.first(seq__37409_37828__$1);
var map__37416_37835__$1 = cljs.core.__destructure_map(map__37416_37834);
var w_37836 = map__37416_37835__$1;
var msg_37837__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37416_37835__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37416_37835__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37416_37835__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37416_37835__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37840)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37838),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37839),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37837__$1)].join(''));


var G__37842 = cljs.core.next(seq__37409_37828__$1);
var G__37843 = null;
var G__37844 = (0);
var G__37845 = (0);
seq__37409_37812 = G__37842;
chunk__37410_37813 = G__37843;
count__37411_37814 = G__37844;
i__37412_37815 = G__37845;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37395_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37395_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37422){
var map__37424 = p__37422;
var map__37424__$1 = cljs.core.__destructure_map(map__37424);
var msg = map__37424__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37424__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37424__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37425 = cljs.core.seq(updates);
var chunk__37427 = null;
var count__37428 = (0);
var i__37429 = (0);
while(true){
if((i__37429 < count__37428)){
var path = chunk__37427.cljs$core$IIndexed$_nth$arity$2(null,i__37429);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37605_37846 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37609_37847 = null;
var count__37610_37848 = (0);
var i__37611_37849 = (0);
while(true){
if((i__37611_37849 < count__37610_37848)){
var node_37852 = chunk__37609_37847.cljs$core$IIndexed$_nth$arity$2(null,i__37611_37849);
if(cljs.core.not(node_37852.shadow$old)){
var path_match_37853 = shadow.cljs.devtools.client.browser.match_paths(node_37852.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37853)){
var new_link_37854 = (function (){var G__37642 = node_37852.cloneNode(true);
G__37642.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37853),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37642;
})();
(node_37852.shadow$old = true);

(new_link_37854.onload = ((function (seq__37605_37846,chunk__37609_37847,count__37610_37848,i__37611_37849,seq__37425,chunk__37427,count__37428,i__37429,new_link_37854,path_match_37853,node_37852,path,map__37424,map__37424__$1,msg,updates,reload_info){
return (function (e){
var seq__37644_37855 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37646_37856 = null;
var count__37647_37857 = (0);
var i__37648_37858 = (0);
while(true){
if((i__37648_37858 < count__37647_37857)){
var map__37654_37859 = chunk__37646_37856.cljs$core$IIndexed$_nth$arity$2(null,i__37648_37858);
var map__37654_37860__$1 = cljs.core.__destructure_map(map__37654_37859);
var task_37861 = map__37654_37860__$1;
var fn_str_37862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37654_37860__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37654_37860__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37864 = goog.getObjectByName(fn_str_37862,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37863)].join(''));

(fn_obj_37864.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37864.cljs$core$IFn$_invoke$arity$2(path,new_link_37854) : fn_obj_37864.call(null,path,new_link_37854));


var G__37865 = seq__37644_37855;
var G__37866 = chunk__37646_37856;
var G__37867 = count__37647_37857;
var G__37868 = (i__37648_37858 + (1));
seq__37644_37855 = G__37865;
chunk__37646_37856 = G__37866;
count__37647_37857 = G__37867;
i__37648_37858 = G__37868;
continue;
} else {
var temp__5753__auto___37869 = cljs.core.seq(seq__37644_37855);
if(temp__5753__auto___37869){
var seq__37644_37870__$1 = temp__5753__auto___37869;
if(cljs.core.chunked_seq_QMARK_(seq__37644_37870__$1)){
var c__4679__auto___37871 = cljs.core.chunk_first(seq__37644_37870__$1);
var G__37872 = cljs.core.chunk_rest(seq__37644_37870__$1);
var G__37873 = c__4679__auto___37871;
var G__37874 = cljs.core.count(c__4679__auto___37871);
var G__37875 = (0);
seq__37644_37855 = G__37872;
chunk__37646_37856 = G__37873;
count__37647_37857 = G__37874;
i__37648_37858 = G__37875;
continue;
} else {
var map__37655_37876 = cljs.core.first(seq__37644_37870__$1);
var map__37655_37877__$1 = cljs.core.__destructure_map(map__37655_37876);
var task_37878 = map__37655_37877__$1;
var fn_str_37879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655_37877__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655_37877__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37881 = goog.getObjectByName(fn_str_37879,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37880)].join(''));

(fn_obj_37881.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37881.cljs$core$IFn$_invoke$arity$2(path,new_link_37854) : fn_obj_37881.call(null,path,new_link_37854));


var G__37882 = cljs.core.next(seq__37644_37870__$1);
var G__37883 = null;
var G__37884 = (0);
var G__37885 = (0);
seq__37644_37855 = G__37882;
chunk__37646_37856 = G__37883;
count__37647_37857 = G__37884;
i__37648_37858 = G__37885;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37852);
});})(seq__37605_37846,chunk__37609_37847,count__37610_37848,i__37611_37849,seq__37425,chunk__37427,count__37428,i__37429,new_link_37854,path_match_37853,node_37852,path,map__37424,map__37424__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37853], 0));

goog.dom.insertSiblingAfter(new_link_37854,node_37852);


var G__37886 = seq__37605_37846;
var G__37887 = chunk__37609_37847;
var G__37888 = count__37610_37848;
var G__37889 = (i__37611_37849 + (1));
seq__37605_37846 = G__37886;
chunk__37609_37847 = G__37887;
count__37610_37848 = G__37888;
i__37611_37849 = G__37889;
continue;
} else {
var G__37890 = seq__37605_37846;
var G__37891 = chunk__37609_37847;
var G__37892 = count__37610_37848;
var G__37893 = (i__37611_37849 + (1));
seq__37605_37846 = G__37890;
chunk__37609_37847 = G__37891;
count__37610_37848 = G__37892;
i__37611_37849 = G__37893;
continue;
}
} else {
var G__37894 = seq__37605_37846;
var G__37895 = chunk__37609_37847;
var G__37896 = count__37610_37848;
var G__37897 = (i__37611_37849 + (1));
seq__37605_37846 = G__37894;
chunk__37609_37847 = G__37895;
count__37610_37848 = G__37896;
i__37611_37849 = G__37897;
continue;
}
} else {
var temp__5753__auto___37898 = cljs.core.seq(seq__37605_37846);
if(temp__5753__auto___37898){
var seq__37605_37899__$1 = temp__5753__auto___37898;
if(cljs.core.chunked_seq_QMARK_(seq__37605_37899__$1)){
var c__4679__auto___37900 = cljs.core.chunk_first(seq__37605_37899__$1);
var G__37901 = cljs.core.chunk_rest(seq__37605_37899__$1);
var G__37902 = c__4679__auto___37900;
var G__37903 = cljs.core.count(c__4679__auto___37900);
var G__37904 = (0);
seq__37605_37846 = G__37901;
chunk__37609_37847 = G__37902;
count__37610_37848 = G__37903;
i__37611_37849 = G__37904;
continue;
} else {
var node_37905 = cljs.core.first(seq__37605_37899__$1);
if(cljs.core.not(node_37905.shadow$old)){
var path_match_37906 = shadow.cljs.devtools.client.browser.match_paths(node_37905.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37906)){
var new_link_37907 = (function (){var G__37656 = node_37905.cloneNode(true);
G__37656.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37906),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37656;
})();
(node_37905.shadow$old = true);

(new_link_37907.onload = ((function (seq__37605_37846,chunk__37609_37847,count__37610_37848,i__37611_37849,seq__37425,chunk__37427,count__37428,i__37429,new_link_37907,path_match_37906,node_37905,seq__37605_37899__$1,temp__5753__auto___37898,path,map__37424,map__37424__$1,msg,updates,reload_info){
return (function (e){
var seq__37657_37912 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37659_37913 = null;
var count__37660_37914 = (0);
var i__37661_37915 = (0);
while(true){
if((i__37661_37915 < count__37660_37914)){
var map__37665_37916 = chunk__37659_37913.cljs$core$IIndexed$_nth$arity$2(null,i__37661_37915);
var map__37665_37917__$1 = cljs.core.__destructure_map(map__37665_37916);
var task_37918 = map__37665_37917__$1;
var fn_str_37919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665_37917__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665_37917__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37921 = goog.getObjectByName(fn_str_37919,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37920)].join(''));

(fn_obj_37921.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37921.cljs$core$IFn$_invoke$arity$2(path,new_link_37907) : fn_obj_37921.call(null,path,new_link_37907));


var G__37922 = seq__37657_37912;
var G__37923 = chunk__37659_37913;
var G__37924 = count__37660_37914;
var G__37925 = (i__37661_37915 + (1));
seq__37657_37912 = G__37922;
chunk__37659_37913 = G__37923;
count__37660_37914 = G__37924;
i__37661_37915 = G__37925;
continue;
} else {
var temp__5753__auto___37926__$1 = cljs.core.seq(seq__37657_37912);
if(temp__5753__auto___37926__$1){
var seq__37657_37927__$1 = temp__5753__auto___37926__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37657_37927__$1)){
var c__4679__auto___37928 = cljs.core.chunk_first(seq__37657_37927__$1);
var G__37929 = cljs.core.chunk_rest(seq__37657_37927__$1);
var G__37930 = c__4679__auto___37928;
var G__37931 = cljs.core.count(c__4679__auto___37928);
var G__37932 = (0);
seq__37657_37912 = G__37929;
chunk__37659_37913 = G__37930;
count__37660_37914 = G__37931;
i__37661_37915 = G__37932;
continue;
} else {
var map__37666_37933 = cljs.core.first(seq__37657_37927__$1);
var map__37666_37934__$1 = cljs.core.__destructure_map(map__37666_37933);
var task_37935 = map__37666_37934__$1;
var fn_str_37936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666_37934__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666_37934__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37938 = goog.getObjectByName(fn_str_37936,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37937)].join(''));

(fn_obj_37938.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37938.cljs$core$IFn$_invoke$arity$2(path,new_link_37907) : fn_obj_37938.call(null,path,new_link_37907));


var G__37939 = cljs.core.next(seq__37657_37927__$1);
var G__37940 = null;
var G__37941 = (0);
var G__37942 = (0);
seq__37657_37912 = G__37939;
chunk__37659_37913 = G__37940;
count__37660_37914 = G__37941;
i__37661_37915 = G__37942;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37905);
});})(seq__37605_37846,chunk__37609_37847,count__37610_37848,i__37611_37849,seq__37425,chunk__37427,count__37428,i__37429,new_link_37907,path_match_37906,node_37905,seq__37605_37899__$1,temp__5753__auto___37898,path,map__37424,map__37424__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37906], 0));

goog.dom.insertSiblingAfter(new_link_37907,node_37905);


var G__37943 = cljs.core.next(seq__37605_37899__$1);
var G__37944 = null;
var G__37945 = (0);
var G__37946 = (0);
seq__37605_37846 = G__37943;
chunk__37609_37847 = G__37944;
count__37610_37848 = G__37945;
i__37611_37849 = G__37946;
continue;
} else {
var G__37947 = cljs.core.next(seq__37605_37899__$1);
var G__37948 = null;
var G__37949 = (0);
var G__37950 = (0);
seq__37605_37846 = G__37947;
chunk__37609_37847 = G__37948;
count__37610_37848 = G__37949;
i__37611_37849 = G__37950;
continue;
}
} else {
var G__37951 = cljs.core.next(seq__37605_37899__$1);
var G__37952 = null;
var G__37953 = (0);
var G__37954 = (0);
seq__37605_37846 = G__37951;
chunk__37609_37847 = G__37952;
count__37610_37848 = G__37953;
i__37611_37849 = G__37954;
continue;
}
}
} else {
}
}
break;
}


var G__37955 = seq__37425;
var G__37956 = chunk__37427;
var G__37957 = count__37428;
var G__37958 = (i__37429 + (1));
seq__37425 = G__37955;
chunk__37427 = G__37956;
count__37428 = G__37957;
i__37429 = G__37958;
continue;
} else {
var G__37959 = seq__37425;
var G__37960 = chunk__37427;
var G__37961 = count__37428;
var G__37962 = (i__37429 + (1));
seq__37425 = G__37959;
chunk__37427 = G__37960;
count__37428 = G__37961;
i__37429 = G__37962;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37425);
if(temp__5753__auto__){
var seq__37425__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37425__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37425__$1);
var G__37963 = cljs.core.chunk_rest(seq__37425__$1);
var G__37964 = c__4679__auto__;
var G__37965 = cljs.core.count(c__4679__auto__);
var G__37966 = (0);
seq__37425 = G__37963;
chunk__37427 = G__37964;
count__37428 = G__37965;
i__37429 = G__37966;
continue;
} else {
var path = cljs.core.first(seq__37425__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37667_37967 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37671_37968 = null;
var count__37672_37969 = (0);
var i__37673_37970 = (0);
while(true){
if((i__37673_37970 < count__37672_37969)){
var node_37971 = chunk__37671_37968.cljs$core$IIndexed$_nth$arity$2(null,i__37673_37970);
if(cljs.core.not(node_37971.shadow$old)){
var path_match_37972 = shadow.cljs.devtools.client.browser.match_paths(node_37971.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37972)){
var new_link_37973 = (function (){var G__37708 = node_37971.cloneNode(true);
G__37708.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37972),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37708;
})();
(node_37971.shadow$old = true);

(new_link_37973.onload = ((function (seq__37667_37967,chunk__37671_37968,count__37672_37969,i__37673_37970,seq__37425,chunk__37427,count__37428,i__37429,new_link_37973,path_match_37972,node_37971,path,seq__37425__$1,temp__5753__auto__,map__37424,map__37424__$1,msg,updates,reload_info){
return (function (e){
var seq__37709_37974 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37711_37975 = null;
var count__37712_37976 = (0);
var i__37713_37977 = (0);
while(true){
if((i__37713_37977 < count__37712_37976)){
var map__37722_37978 = chunk__37711_37975.cljs$core$IIndexed$_nth$arity$2(null,i__37713_37977);
var map__37722_37979__$1 = cljs.core.__destructure_map(map__37722_37978);
var task_37980 = map__37722_37979__$1;
var fn_str_37981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37722_37979__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37722_37979__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37983 = goog.getObjectByName(fn_str_37981,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37982)].join(''));

(fn_obj_37983.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37983.cljs$core$IFn$_invoke$arity$2(path,new_link_37973) : fn_obj_37983.call(null,path,new_link_37973));


var G__37985 = seq__37709_37974;
var G__37986 = chunk__37711_37975;
var G__37987 = count__37712_37976;
var G__37988 = (i__37713_37977 + (1));
seq__37709_37974 = G__37985;
chunk__37711_37975 = G__37986;
count__37712_37976 = G__37987;
i__37713_37977 = G__37988;
continue;
} else {
var temp__5753__auto___37989__$1 = cljs.core.seq(seq__37709_37974);
if(temp__5753__auto___37989__$1){
var seq__37709_37990__$1 = temp__5753__auto___37989__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37709_37990__$1)){
var c__4679__auto___37991 = cljs.core.chunk_first(seq__37709_37990__$1);
var G__37992 = cljs.core.chunk_rest(seq__37709_37990__$1);
var G__37993 = c__4679__auto___37991;
var G__37994 = cljs.core.count(c__4679__auto___37991);
var G__37995 = (0);
seq__37709_37974 = G__37992;
chunk__37711_37975 = G__37993;
count__37712_37976 = G__37994;
i__37713_37977 = G__37995;
continue;
} else {
var map__37723_37996 = cljs.core.first(seq__37709_37990__$1);
var map__37723_37997__$1 = cljs.core.__destructure_map(map__37723_37996);
var task_37998 = map__37723_37997__$1;
var fn_str_37999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37723_37997__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37723_37997__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38001 = goog.getObjectByName(fn_str_37999,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38000)].join(''));

(fn_obj_38001.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38001.cljs$core$IFn$_invoke$arity$2(path,new_link_37973) : fn_obj_38001.call(null,path,new_link_37973));


var G__38002 = cljs.core.next(seq__37709_37990__$1);
var G__38003 = null;
var G__38004 = (0);
var G__38005 = (0);
seq__37709_37974 = G__38002;
chunk__37711_37975 = G__38003;
count__37712_37976 = G__38004;
i__37713_37977 = G__38005;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37971);
});})(seq__37667_37967,chunk__37671_37968,count__37672_37969,i__37673_37970,seq__37425,chunk__37427,count__37428,i__37429,new_link_37973,path_match_37972,node_37971,path,seq__37425__$1,temp__5753__auto__,map__37424,map__37424__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37972], 0));

goog.dom.insertSiblingAfter(new_link_37973,node_37971);


var G__38006 = seq__37667_37967;
var G__38007 = chunk__37671_37968;
var G__38008 = count__37672_37969;
var G__38009 = (i__37673_37970 + (1));
seq__37667_37967 = G__38006;
chunk__37671_37968 = G__38007;
count__37672_37969 = G__38008;
i__37673_37970 = G__38009;
continue;
} else {
var G__38010 = seq__37667_37967;
var G__38011 = chunk__37671_37968;
var G__38012 = count__37672_37969;
var G__38013 = (i__37673_37970 + (1));
seq__37667_37967 = G__38010;
chunk__37671_37968 = G__38011;
count__37672_37969 = G__38012;
i__37673_37970 = G__38013;
continue;
}
} else {
var G__38014 = seq__37667_37967;
var G__38015 = chunk__37671_37968;
var G__38016 = count__37672_37969;
var G__38017 = (i__37673_37970 + (1));
seq__37667_37967 = G__38014;
chunk__37671_37968 = G__38015;
count__37672_37969 = G__38016;
i__37673_37970 = G__38017;
continue;
}
} else {
var temp__5753__auto___38018__$1 = cljs.core.seq(seq__37667_37967);
if(temp__5753__auto___38018__$1){
var seq__37667_38019__$1 = temp__5753__auto___38018__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37667_38019__$1)){
var c__4679__auto___38020 = cljs.core.chunk_first(seq__37667_38019__$1);
var G__38021 = cljs.core.chunk_rest(seq__37667_38019__$1);
var G__38022 = c__4679__auto___38020;
var G__38023 = cljs.core.count(c__4679__auto___38020);
var G__38024 = (0);
seq__37667_37967 = G__38021;
chunk__37671_37968 = G__38022;
count__37672_37969 = G__38023;
i__37673_37970 = G__38024;
continue;
} else {
var node_38025 = cljs.core.first(seq__37667_38019__$1);
if(cljs.core.not(node_38025.shadow$old)){
var path_match_38026 = shadow.cljs.devtools.client.browser.match_paths(node_38025.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38026)){
var new_link_38027 = (function (){var G__37726 = node_38025.cloneNode(true);
G__37726.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38026),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37726;
})();
(node_38025.shadow$old = true);

(new_link_38027.onload = ((function (seq__37667_37967,chunk__37671_37968,count__37672_37969,i__37673_37970,seq__37425,chunk__37427,count__37428,i__37429,new_link_38027,path_match_38026,node_38025,seq__37667_38019__$1,temp__5753__auto___38018__$1,path,seq__37425__$1,temp__5753__auto__,map__37424,map__37424__$1,msg,updates,reload_info){
return (function (e){
var seq__37727_38028 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37729_38029 = null;
var count__37730_38030 = (0);
var i__37731_38031 = (0);
while(true){
if((i__37731_38031 < count__37730_38030)){
var map__37737_38032 = chunk__37729_38029.cljs$core$IIndexed$_nth$arity$2(null,i__37731_38031);
var map__37737_38033__$1 = cljs.core.__destructure_map(map__37737_38032);
var task_38034 = map__37737_38033__$1;
var fn_str_38035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37737_38033__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37737_38033__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38038 = goog.getObjectByName(fn_str_38035,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38036)].join(''));

(fn_obj_38038.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38038.cljs$core$IFn$_invoke$arity$2(path,new_link_38027) : fn_obj_38038.call(null,path,new_link_38027));


var G__38039 = seq__37727_38028;
var G__38040 = chunk__37729_38029;
var G__38041 = count__37730_38030;
var G__38042 = (i__37731_38031 + (1));
seq__37727_38028 = G__38039;
chunk__37729_38029 = G__38040;
count__37730_38030 = G__38041;
i__37731_38031 = G__38042;
continue;
} else {
var temp__5753__auto___38043__$2 = cljs.core.seq(seq__37727_38028);
if(temp__5753__auto___38043__$2){
var seq__37727_38044__$1 = temp__5753__auto___38043__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37727_38044__$1)){
var c__4679__auto___38045 = cljs.core.chunk_first(seq__37727_38044__$1);
var G__38046 = cljs.core.chunk_rest(seq__37727_38044__$1);
var G__38047 = c__4679__auto___38045;
var G__38048 = cljs.core.count(c__4679__auto___38045);
var G__38049 = (0);
seq__37727_38028 = G__38046;
chunk__37729_38029 = G__38047;
count__37730_38030 = G__38048;
i__37731_38031 = G__38049;
continue;
} else {
var map__37738_38050 = cljs.core.first(seq__37727_38044__$1);
var map__37738_38051__$1 = cljs.core.__destructure_map(map__37738_38050);
var task_38052 = map__37738_38051__$1;
var fn_str_38053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738_38051__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738_38051__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38055 = goog.getObjectByName(fn_str_38053,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38054)].join(''));

(fn_obj_38055.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38055.cljs$core$IFn$_invoke$arity$2(path,new_link_38027) : fn_obj_38055.call(null,path,new_link_38027));


var G__38058 = cljs.core.next(seq__37727_38044__$1);
var G__38059 = null;
var G__38060 = (0);
var G__38061 = (0);
seq__37727_38028 = G__38058;
chunk__37729_38029 = G__38059;
count__37730_38030 = G__38060;
i__37731_38031 = G__38061;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38025);
});})(seq__37667_37967,chunk__37671_37968,count__37672_37969,i__37673_37970,seq__37425,chunk__37427,count__37428,i__37429,new_link_38027,path_match_38026,node_38025,seq__37667_38019__$1,temp__5753__auto___38018__$1,path,seq__37425__$1,temp__5753__auto__,map__37424,map__37424__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38026], 0));

goog.dom.insertSiblingAfter(new_link_38027,node_38025);


var G__38062 = cljs.core.next(seq__37667_38019__$1);
var G__38063 = null;
var G__38064 = (0);
var G__38065 = (0);
seq__37667_37967 = G__38062;
chunk__37671_37968 = G__38063;
count__37672_37969 = G__38064;
i__37673_37970 = G__38065;
continue;
} else {
var G__38066 = cljs.core.next(seq__37667_38019__$1);
var G__38067 = null;
var G__38068 = (0);
var G__38069 = (0);
seq__37667_37967 = G__38066;
chunk__37671_37968 = G__38067;
count__37672_37969 = G__38068;
i__37673_37970 = G__38069;
continue;
}
} else {
var G__38070 = cljs.core.next(seq__37667_38019__$1);
var G__38071 = null;
var G__38072 = (0);
var G__38073 = (0);
seq__37667_37967 = G__38070;
chunk__37671_37968 = G__38071;
count__37672_37969 = G__38072;
i__37673_37970 = G__38073;
continue;
}
}
} else {
}
}
break;
}


var G__38074 = cljs.core.next(seq__37425__$1);
var G__38075 = null;
var G__38076 = (0);
var G__38077 = (0);
seq__37425 = G__38074;
chunk__37427 = G__38075;
count__37428 = G__38076;
i__37429 = G__38077;
continue;
} else {
var G__38078 = cljs.core.next(seq__37425__$1);
var G__38079 = null;
var G__38080 = (0);
var G__38081 = (0);
seq__37425 = G__38078;
chunk__37427 = G__38079;
count__37428 = G__38080;
i__37429 = G__38081;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37741){
var map__37742 = p__37741;
var map__37742__$1 = cljs.core.__destructure_map(map__37742);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37742__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37749){
var map__37750 = p__37749;
var map__37750__$1 = cljs.core.__destructure_map(map__37750);
var _ = map__37750__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37751,done,error){
var map__37752 = p__37751;
var map__37752__$1 = cljs.core.__destructure_map(map__37752);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37752__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37753,done,error){
var map__37754 = p__37753;
var map__37754__$1 = cljs.core.__destructure_map(map__37754);
var msg = map__37754__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37754__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37754__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37754__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37755){
var map__37756 = p__37755;
var map__37756__$1 = cljs.core.__destructure_map(map__37756);
var src = map__37756__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37756__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37758 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37758) : done.call(null,G__37758));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37759){
var map__37760 = p__37759;
var map__37760__$1 = cljs.core.__destructure_map(map__37760);
var msg__$1 = map__37760__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37760__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37761){var ex = e37761;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37762){
var map__37763 = p__37762;
var map__37763__$1 = cljs.core.__destructure_map(map__37763);
var env = map__37763__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37763__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37764){
var map__37765 = p__37764;
var map__37765__$1 = cljs.core.__destructure_map(map__37765);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37765__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37765__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37766){
var map__37767 = p__37766;
var map__37767__$1 = cljs.core.__destructure_map(map__37767);
var svc = map__37767__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37767__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
