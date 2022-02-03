goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38937){
var map__38938 = p__38937;
var map__38938__$1 = cljs.core.__destructure_map(map__38938);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38938__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38938__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38938__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38938__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38941_38970 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38942_38971 = null;
var count__38943_38972 = (0);
var i__38944_38973 = (0);
while(true){
if((i__38944_38973 < count__38943_38972)){
var vec__38956_38974 = chunk__38942_38971.cljs$core$IIndexed$_nth$arity$2(null,i__38944_38973);
var k_38975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38956_38974,(0),null);
var cb_38976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38956_38974,(1),null);
try{var G__38961_38977 = cljs.core.deref(re_frame.trace.traces);
(cb_38976.cljs$core$IFn$_invoke$arity$1 ? cb_38976.cljs$core$IFn$_invoke$arity$1(G__38961_38977) : cb_38976.call(null,G__38961_38977));
}catch (e38959){var e_38978 = e38959;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38975,"while storing",cljs.core.deref(re_frame.trace.traces),e_38978], 0));
}

var G__38979 = seq__38941_38970;
var G__38980 = chunk__38942_38971;
var G__38981 = count__38943_38972;
var G__38982 = (i__38944_38973 + (1));
seq__38941_38970 = G__38979;
chunk__38942_38971 = G__38980;
count__38943_38972 = G__38981;
i__38944_38973 = G__38982;
continue;
} else {
var temp__5753__auto___38983 = cljs.core.seq(seq__38941_38970);
if(temp__5753__auto___38983){
var seq__38941_38984__$1 = temp__5753__auto___38983;
if(cljs.core.chunked_seq_QMARK_(seq__38941_38984__$1)){
var c__4679__auto___38985 = cljs.core.chunk_first(seq__38941_38984__$1);
var G__38986 = cljs.core.chunk_rest(seq__38941_38984__$1);
var G__38987 = c__4679__auto___38985;
var G__38988 = cljs.core.count(c__4679__auto___38985);
var G__38989 = (0);
seq__38941_38970 = G__38986;
chunk__38942_38971 = G__38987;
count__38943_38972 = G__38988;
i__38944_38973 = G__38989;
continue;
} else {
var vec__38962_38990 = cljs.core.first(seq__38941_38984__$1);
var k_38991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38962_38990,(0),null);
var cb_38992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38962_38990,(1),null);
try{var G__38966_38993 = cljs.core.deref(re_frame.trace.traces);
(cb_38992.cljs$core$IFn$_invoke$arity$1 ? cb_38992.cljs$core$IFn$_invoke$arity$1(G__38966_38993) : cb_38992.call(null,G__38966_38993));
}catch (e38965){var e_38994 = e38965;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38991,"while storing",cljs.core.deref(re_frame.trace.traces),e_38994], 0));
}

var G__38995 = cljs.core.next(seq__38941_38984__$1);
var G__38996 = null;
var G__38997 = (0);
var G__38998 = (0);
seq__38941_38970 = G__38995;
chunk__38942_38971 = G__38996;
count__38943_38972 = G__38997;
i__38944_38973 = G__38998;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
