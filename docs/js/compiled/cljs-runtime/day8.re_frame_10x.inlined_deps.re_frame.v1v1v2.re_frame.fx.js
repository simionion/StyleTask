goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__28396 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28397 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28397);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___28549 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___28549)){
var new_db_28550 = temp__5753__auto___28549;
var fexpr__28405_28552 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28405_28552.cljs$core$IFn$_invoke$arity$1 ? fexpr__28405_28552.cljs$core$IFn$_invoke$arity$1(new_db_28550) : fexpr__28405_28552.call(null,new_db_28550));
} else {
}

var seq__28407 = cljs.core.seq(effects_without_db);
var chunk__28408 = null;
var count__28409 = (0);
var i__28410 = (0);
while(true){
if((i__28410 < count__28409)){
var vec__28427 = chunk__28408.cljs$core$IIndexed$_nth$arity$2(null,i__28410);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28427,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28427,(1),null);
var temp__5751__auto___28553 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28553)){
var effect_fn_28554 = temp__5751__auto___28553;
(effect_fn_28554.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28554.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28554.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28555 = seq__28407;
var G__28556 = chunk__28408;
var G__28557 = count__28409;
var G__28558 = (i__28410 + (1));
seq__28407 = G__28555;
chunk__28408 = G__28556;
count__28409 = G__28557;
i__28410 = G__28558;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28407);
if(temp__5753__auto__){
var seq__28407__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28407__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28407__$1);
var G__28561 = cljs.core.chunk_rest(seq__28407__$1);
var G__28562 = c__4679__auto__;
var G__28563 = cljs.core.count(c__4679__auto__);
var G__28564 = (0);
seq__28407 = G__28561;
chunk__28408 = G__28562;
count__28409 = G__28563;
i__28410 = G__28564;
continue;
} else {
var vec__28431 = cljs.core.first(seq__28407__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28431,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28431,(1),null);
var temp__5751__auto___28565 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28565)){
var effect_fn_28568 = temp__5751__auto___28565;
(effect_fn_28568.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28568.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28568.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28569 = cljs.core.next(seq__28407__$1);
var G__28570 = null;
var G__28571 = (0);
var G__28572 = (0);
seq__28407 = G__28569;
chunk__28408 = G__28570;
count__28409 = G__28571;
i__28410 = G__28572;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__28058__auto___28573 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__28059__auto___28574 = (end__28058__auto___28573 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__28059__auto___28574,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__28058__auto___28573);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28396);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___28575 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___28575)){
var new_db_28576 = temp__5753__auto___28575;
var fexpr__28434_28577 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28434_28577.cljs$core$IFn$_invoke$arity$1 ? fexpr__28434_28577.cljs$core$IFn$_invoke$arity$1(new_db_28576) : fexpr__28434_28577.call(null,new_db_28576));
} else {
}

var seq__28435 = cljs.core.seq(effects_without_db);
var chunk__28436 = null;
var count__28437 = (0);
var i__28438 = (0);
while(true){
if((i__28438 < count__28437)){
var vec__28446 = chunk__28436.cljs$core$IIndexed$_nth$arity$2(null,i__28438);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28446,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28446,(1),null);
var temp__5751__auto___28579 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28579)){
var effect_fn_28580 = temp__5751__auto___28579;
(effect_fn_28580.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28580.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28580.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28583 = seq__28435;
var G__28584 = chunk__28436;
var G__28585 = count__28437;
var G__28586 = (i__28438 + (1));
seq__28435 = G__28583;
chunk__28436 = G__28584;
count__28437 = G__28585;
i__28438 = G__28586;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28435);
if(temp__5753__auto__){
var seq__28435__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28435__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28435__$1);
var G__28591 = cljs.core.chunk_rest(seq__28435__$1);
var G__28592 = c__4679__auto__;
var G__28593 = cljs.core.count(c__4679__auto__);
var G__28594 = (0);
seq__28435 = G__28591;
chunk__28436 = G__28592;
count__28437 = G__28593;
i__28438 = G__28594;
continue;
} else {
var vec__28452 = cljs.core.first(seq__28435__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(1),null);
var temp__5751__auto___28597 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28597)){
var effect_fn_28600 = temp__5751__auto___28597;
(effect_fn_28600.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28600.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28600.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28603 = cljs.core.next(seq__28435__$1);
var G__28604 = null;
var G__28605 = (0);
var G__28606 = (0);
seq__28435 = G__28603;
chunk__28436 = G__28604;
count__28437 = G__28605;
i__28438 = G__28606;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__28459){
var map__28460 = p__28459;
var map__28460__$1 = cljs.core.__destructure_map(map__28460);
var effect = map__28460__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28460__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28460__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__28461 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28462 = null;
var count__28463 = (0);
var i__28464 = (0);
while(true){
if((i__28464 < count__28463)){
var effect = chunk__28462.cljs$core$IIndexed$_nth$arity$2(null,i__28464);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__28608 = seq__28461;
var G__28609 = chunk__28462;
var G__28610 = count__28463;
var G__28611 = (i__28464 + (1));
seq__28461 = G__28608;
chunk__28462 = G__28609;
count__28463 = G__28610;
i__28464 = G__28611;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28461);
if(temp__5753__auto__){
var seq__28461__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28461__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28461__$1);
var G__28614 = cljs.core.chunk_rest(seq__28461__$1);
var G__28615 = c__4679__auto__;
var G__28616 = cljs.core.count(c__4679__auto__);
var G__28617 = (0);
seq__28461 = G__28614;
chunk__28462 = G__28615;
count__28463 = G__28616;
i__28464 = G__28617;
continue;
} else {
var effect = cljs.core.first(seq__28461__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__28618 = cljs.core.next(seq__28461__$1);
var G__28619 = null;
var G__28620 = (0);
var G__28621 = (0);
seq__28461 = G__28618;
chunk__28462 = G__28619;
count__28463 = G__28620;
i__28464 = G__28621;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__28489 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28490 = null;
var count__28491 = (0);
var i__28492 = (0);
while(true){
if((i__28492 < count__28491)){
var vec__28504 = chunk__28490.cljs$core$IIndexed$_nth$arity$2(null,i__28492);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28504,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___28624 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28624)){
var effect_fn_28625 = temp__5751__auto___28624;
(effect_fn_28625.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28625.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28625.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28627 = seq__28489;
var G__28628 = chunk__28490;
var G__28629 = count__28491;
var G__28630 = (i__28492 + (1));
seq__28489 = G__28627;
chunk__28490 = G__28628;
count__28491 = G__28629;
i__28492 = G__28630;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28489);
if(temp__5753__auto__){
var seq__28489__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28489__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28489__$1);
var G__28632 = cljs.core.chunk_rest(seq__28489__$1);
var G__28633 = c__4679__auto__;
var G__28634 = cljs.core.count(c__4679__auto__);
var G__28635 = (0);
seq__28489 = G__28632;
chunk__28490 = G__28633;
count__28491 = G__28634;
i__28492 = G__28635;
continue;
} else {
var vec__28509 = cljs.core.first(seq__28489__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28509,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28509,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___28639 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28639)){
var effect_fn_28640 = temp__5751__auto___28639;
(effect_fn_28640.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28640.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28640.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28642 = cljs.core.next(seq__28489__$1);
var G__28643 = null;
var G__28644 = (0);
var G__28645 = (0);
seq__28489 = G__28642;
chunk__28490 = G__28643;
count__28491 = G__28644;
i__28492 = G__28645;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__28513 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28514 = null;
var count__28515 = (0);
var i__28516 = (0);
while(true){
if((i__28516 < count__28515)){
var event = chunk__28514.cljs$core$IIndexed$_nth$arity$2(null,i__28516);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__28650 = seq__28513;
var G__28651 = chunk__28514;
var G__28652 = count__28515;
var G__28653 = (i__28516 + (1));
seq__28513 = G__28650;
chunk__28514 = G__28651;
count__28515 = G__28652;
i__28516 = G__28653;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28513);
if(temp__5753__auto__){
var seq__28513__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28513__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28513__$1);
var G__28657 = cljs.core.chunk_rest(seq__28513__$1);
var G__28658 = c__4679__auto__;
var G__28659 = cljs.core.count(c__4679__auto__);
var G__28660 = (0);
seq__28513 = G__28657;
chunk__28514 = G__28658;
count__28515 = G__28659;
i__28516 = G__28660;
continue;
} else {
var event = cljs.core.first(seq__28513__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__28662 = cljs.core.next(seq__28513__$1);
var G__28663 = null;
var G__28664 = (0);
var G__28665 = (0);
seq__28513 = G__28662;
chunk__28514 = G__28663;
count__28515 = G__28664;
i__28516 = G__28665;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__28529 = cljs.core.seq(value);
var chunk__28530 = null;
var count__28531 = (0);
var i__28532 = (0);
while(true){
if((i__28532 < count__28531)){
var event = chunk__28530.cljs$core$IIndexed$_nth$arity$2(null,i__28532);
clear_event(event);


var G__28666 = seq__28529;
var G__28667 = chunk__28530;
var G__28668 = count__28531;
var G__28669 = (i__28532 + (1));
seq__28529 = G__28666;
chunk__28530 = G__28667;
count__28531 = G__28668;
i__28532 = G__28669;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28529);
if(temp__5753__auto__){
var seq__28529__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28529__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28529__$1);
var G__28670 = cljs.core.chunk_rest(seq__28529__$1);
var G__28671 = c__4679__auto__;
var G__28672 = cljs.core.count(c__4679__auto__);
var G__28673 = (0);
seq__28529 = G__28670;
chunk__28530 = G__28671;
count__28531 = G__28672;
i__28532 = G__28673;
continue;
} else {
var event = cljs.core.first(seq__28529__$1);
clear_event(event);


var G__28674 = cljs.core.next(seq__28529__$1);
var G__28675 = null;
var G__28676 = (0);
var G__28677 = (0);
seq__28529 = G__28674;
chunk__28530 = G__28675;
count__28531 = G__28676;
i__28532 = G__28677;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
