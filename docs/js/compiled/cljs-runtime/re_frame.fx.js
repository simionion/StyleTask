goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__39235 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39236 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39236);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39324 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39324)){
var new_db_39325 = temp__5753__auto___39324;
var fexpr__39240_39326 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39240_39326.cljs$core$IFn$_invoke$arity$1 ? fexpr__39240_39326.cljs$core$IFn$_invoke$arity$1(new_db_39325) : fexpr__39240_39326.call(null,new_db_39325));
} else {
}

var seq__39242 = cljs.core.seq(effects_without_db);
var chunk__39243 = null;
var count__39244 = (0);
var i__39245 = (0);
while(true){
if((i__39245 < count__39244)){
var vec__39255 = chunk__39243.cljs$core$IIndexed$_nth$arity$2(null,i__39245);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39255,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39255,(1),null);
var temp__5751__auto___39327 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39327)){
var effect_fn_39328 = temp__5751__auto___39327;
(effect_fn_39328.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39328.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39328.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39329 = seq__39242;
var G__39330 = chunk__39243;
var G__39331 = count__39244;
var G__39332 = (i__39245 + (1));
seq__39242 = G__39329;
chunk__39243 = G__39330;
count__39244 = G__39331;
i__39245 = G__39332;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39242);
if(temp__5753__auto__){
var seq__39242__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39242__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39242__$1);
var G__39333 = cljs.core.chunk_rest(seq__39242__$1);
var G__39334 = c__4679__auto__;
var G__39335 = cljs.core.count(c__4679__auto__);
var G__39336 = (0);
seq__39242 = G__39333;
chunk__39243 = G__39334;
count__39244 = G__39335;
i__39245 = G__39336;
continue;
} else {
var vec__39258 = cljs.core.first(seq__39242__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39258,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39258,(1),null);
var temp__5751__auto___39337 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39337)){
var effect_fn_39338 = temp__5751__auto___39337;
(effect_fn_39338.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39338.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39338.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39339 = cljs.core.next(seq__39242__$1);
var G__39340 = null;
var G__39341 = (0);
var G__39342 = (0);
seq__39242 = G__39339;
chunk__39243 = G__39340;
count__39244 = G__39341;
i__39245 = G__39342;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38915__auto___39343 = re_frame.interop.now();
var duration__38916__auto___39344 = (end__38915__auto___39343 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38916__auto___39344,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38915__auto___39343);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39235);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39345 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39345)){
var new_db_39346 = temp__5753__auto___39345;
var fexpr__39261_39347 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39261_39347.cljs$core$IFn$_invoke$arity$1 ? fexpr__39261_39347.cljs$core$IFn$_invoke$arity$1(new_db_39346) : fexpr__39261_39347.call(null,new_db_39346));
} else {
}

var seq__39262 = cljs.core.seq(effects_without_db);
var chunk__39263 = null;
var count__39264 = (0);
var i__39265 = (0);
while(true){
if((i__39265 < count__39264)){
var vec__39275 = chunk__39263.cljs$core$IIndexed$_nth$arity$2(null,i__39265);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39275,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39275,(1),null);
var temp__5751__auto___39348 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39348)){
var effect_fn_39349 = temp__5751__auto___39348;
(effect_fn_39349.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39349.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39349.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39350 = seq__39262;
var G__39351 = chunk__39263;
var G__39352 = count__39264;
var G__39353 = (i__39265 + (1));
seq__39262 = G__39350;
chunk__39263 = G__39351;
count__39264 = G__39352;
i__39265 = G__39353;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39262);
if(temp__5753__auto__){
var seq__39262__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39262__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39262__$1);
var G__39354 = cljs.core.chunk_rest(seq__39262__$1);
var G__39355 = c__4679__auto__;
var G__39356 = cljs.core.count(c__4679__auto__);
var G__39357 = (0);
seq__39262 = G__39354;
chunk__39263 = G__39355;
count__39264 = G__39356;
i__39265 = G__39357;
continue;
} else {
var vec__39279 = cljs.core.first(seq__39262__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39279,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39279,(1),null);
var temp__5751__auto___39358 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39358)){
var effect_fn_39359 = temp__5751__auto___39358;
(effect_fn_39359.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39359.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39359.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39360 = cljs.core.next(seq__39262__$1);
var G__39361 = null;
var G__39362 = (0);
var G__39363 = (0);
seq__39262 = G__39360;
chunk__39263 = G__39361;
count__39264 = G__39362;
i__39265 = G__39363;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39282){
var map__39287 = p__39282;
var map__39287__$1 = cljs.core.__destructure_map(map__39287);
var effect = map__39287__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39287__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39287__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__39296 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39297 = null;
var count__39298 = (0);
var i__39299 = (0);
while(true){
if((i__39299 < count__39298)){
var effect = chunk__39297.cljs$core$IIndexed$_nth$arity$2(null,i__39299);
re_frame.fx.dispatch_later(effect);


var G__39365 = seq__39296;
var G__39366 = chunk__39297;
var G__39367 = count__39298;
var G__39368 = (i__39299 + (1));
seq__39296 = G__39365;
chunk__39297 = G__39366;
count__39298 = G__39367;
i__39299 = G__39368;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39296);
if(temp__5753__auto__){
var seq__39296__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39296__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39296__$1);
var G__39370 = cljs.core.chunk_rest(seq__39296__$1);
var G__39371 = c__4679__auto__;
var G__39372 = cljs.core.count(c__4679__auto__);
var G__39373 = (0);
seq__39296 = G__39370;
chunk__39297 = G__39371;
count__39298 = G__39372;
i__39299 = G__39373;
continue;
} else {
var effect = cljs.core.first(seq__39296__$1);
re_frame.fx.dispatch_later(effect);


var G__39374 = cljs.core.next(seq__39296__$1);
var G__39375 = null;
var G__39376 = (0);
var G__39377 = (0);
seq__39296 = G__39374;
chunk__39297 = G__39375;
count__39298 = G__39376;
i__39299 = G__39377;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__39300 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39301 = null;
var count__39302 = (0);
var i__39303 = (0);
while(true){
if((i__39303 < count__39302)){
var vec__39310 = chunk__39301.cljs$core$IIndexed$_nth$arity$2(null,i__39303);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39310,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39310,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39378 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39378)){
var effect_fn_39379 = temp__5751__auto___39378;
(effect_fn_39379.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39379.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39379.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39380 = seq__39300;
var G__39381 = chunk__39301;
var G__39382 = count__39302;
var G__39383 = (i__39303 + (1));
seq__39300 = G__39380;
chunk__39301 = G__39381;
count__39302 = G__39382;
i__39303 = G__39383;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39300);
if(temp__5753__auto__){
var seq__39300__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39300__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39300__$1);
var G__39384 = cljs.core.chunk_rest(seq__39300__$1);
var G__39385 = c__4679__auto__;
var G__39386 = cljs.core.count(c__4679__auto__);
var G__39387 = (0);
seq__39300 = G__39384;
chunk__39301 = G__39385;
count__39302 = G__39386;
i__39303 = G__39387;
continue;
} else {
var vec__39313 = cljs.core.first(seq__39300__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39313,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39313,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39388 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39388)){
var effect_fn_39389 = temp__5751__auto___39388;
(effect_fn_39389.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39389.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39389.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39390 = cljs.core.next(seq__39300__$1);
var G__39391 = null;
var G__39392 = (0);
var G__39393 = (0);
seq__39300 = G__39390;
chunk__39301 = G__39391;
count__39302 = G__39392;
i__39303 = G__39393;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39316 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39317 = null;
var count__39318 = (0);
var i__39319 = (0);
while(true){
if((i__39319 < count__39318)){
var event = chunk__39317.cljs$core$IIndexed$_nth$arity$2(null,i__39319);
re_frame.router.dispatch(event);


var G__39396 = seq__39316;
var G__39397 = chunk__39317;
var G__39398 = count__39318;
var G__39399 = (i__39319 + (1));
seq__39316 = G__39396;
chunk__39317 = G__39397;
count__39318 = G__39398;
i__39319 = G__39399;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39316);
if(temp__5753__auto__){
var seq__39316__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39316__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39316__$1);
var G__39400 = cljs.core.chunk_rest(seq__39316__$1);
var G__39401 = c__4679__auto__;
var G__39402 = cljs.core.count(c__4679__auto__);
var G__39403 = (0);
seq__39316 = G__39400;
chunk__39317 = G__39401;
count__39318 = G__39402;
i__39319 = G__39403;
continue;
} else {
var event = cljs.core.first(seq__39316__$1);
re_frame.router.dispatch(event);


var G__39404 = cljs.core.next(seq__39316__$1);
var G__39405 = null;
var G__39406 = (0);
var G__39407 = (0);
seq__39316 = G__39404;
chunk__39317 = G__39405;
count__39318 = G__39406;
i__39319 = G__39407;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39320 = cljs.core.seq(value);
var chunk__39321 = null;
var count__39322 = (0);
var i__39323 = (0);
while(true){
if((i__39323 < count__39322)){
var event = chunk__39321.cljs$core$IIndexed$_nth$arity$2(null,i__39323);
clear_event(event);


var G__39408 = seq__39320;
var G__39409 = chunk__39321;
var G__39410 = count__39322;
var G__39411 = (i__39323 + (1));
seq__39320 = G__39408;
chunk__39321 = G__39409;
count__39322 = G__39410;
i__39323 = G__39411;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39320);
if(temp__5753__auto__){
var seq__39320__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39320__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39320__$1);
var G__39412 = cljs.core.chunk_rest(seq__39320__$1);
var G__39413 = c__4679__auto__;
var G__39414 = cljs.core.count(c__4679__auto__);
var G__39415 = (0);
seq__39320 = G__39412;
chunk__39321 = G__39413;
count__39322 = G__39414;
i__39323 = G__39415;
continue;
} else {
var event = cljs.core.first(seq__39320__$1);
clear_event(event);


var G__39416 = cljs.core.next(seq__39320__$1);
var G__39417 = null;
var G__39418 = (0);
var G__39419 = (0);
seq__39320 = G__39416;
chunk__39321 = G__39417;
count__39322 = G__39418;
i__39323 = G__39419;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
