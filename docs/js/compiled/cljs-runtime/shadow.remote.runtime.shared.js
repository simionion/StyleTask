goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32811,res){
var map__32812 = p__32811;
var map__32812__$1 = cljs.core.__destructure_map(map__32812);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32812__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32812__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32813 = res;
var G__32813__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32813,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32813);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32813__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32813__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32845 = arguments.length;
switch (G__32845) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32860,msg,handlers,timeout_after_ms){
var map__32868 = p__32860;
var map__32868__$1 = cljs.core.__destructure_map(map__32868);
var runtime = map__32868__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33132 = arguments.length;
var i__4865__auto___33133 = (0);
while(true){
if((i__4865__auto___33133 < len__4864__auto___33132)){
args__4870__auto__.push((arguments[i__4865__auto___33133]));

var G__33134 = (i__4865__auto___33133 + (1));
i__4865__auto___33133 = G__33134;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32887,ev,args){
var map__32889 = p__32887;
var map__32889__$1 = cljs.core.__destructure_map(map__32889);
var runtime = map__32889__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32889__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32891 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32894 = null;
var count__32895 = (0);
var i__32896 = (0);
while(true){
if((i__32896 < count__32895)){
var ext = chunk__32894.cljs$core$IIndexed$_nth$arity$2(null,i__32896);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33136 = seq__32891;
var G__33137 = chunk__32894;
var G__33138 = count__32895;
var G__33139 = (i__32896 + (1));
seq__32891 = G__33136;
chunk__32894 = G__33137;
count__32895 = G__33138;
i__32896 = G__33139;
continue;
} else {
var G__33141 = seq__32891;
var G__33142 = chunk__32894;
var G__33143 = count__32895;
var G__33144 = (i__32896 + (1));
seq__32891 = G__33141;
chunk__32894 = G__33142;
count__32895 = G__33143;
i__32896 = G__33144;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32891);
if(temp__5753__auto__){
var seq__32891__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32891__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32891__$1);
var G__33145 = cljs.core.chunk_rest(seq__32891__$1);
var G__33146 = c__4679__auto__;
var G__33147 = cljs.core.count(c__4679__auto__);
var G__33148 = (0);
seq__32891 = G__33145;
chunk__32894 = G__33146;
count__32895 = G__33147;
i__32896 = G__33148;
continue;
} else {
var ext = cljs.core.first(seq__32891__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33149 = cljs.core.next(seq__32891__$1);
var G__33150 = null;
var G__33151 = (0);
var G__33152 = (0);
seq__32891 = G__33149;
chunk__32894 = G__33150;
count__32895 = G__33151;
i__32896 = G__33152;
continue;
} else {
var G__33153 = cljs.core.next(seq__32891__$1);
var G__33154 = null;
var G__33155 = (0);
var G__33156 = (0);
seq__32891 = G__33153;
chunk__32894 = G__33154;
count__32895 = G__33155;
i__32896 = G__33156;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32879){
var G__32880 = cljs.core.first(seq32879);
var seq32879__$1 = cljs.core.next(seq32879);
var G__32881 = cljs.core.first(seq32879__$1);
var seq32879__$2 = cljs.core.next(seq32879__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32880,G__32881,seq32879__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32991,p__32992){
var map__32997 = p__32991;
var map__32997__$1 = cljs.core.__destructure_map(map__32997);
var runtime = map__32997__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32997__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32998 = p__32992;
var map__32998__$1 = cljs.core.__destructure_map(map__32998);
var msg = map__32998__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32998__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33000 = cljs.core.deref(state_ref);
var map__33000__$1 = cljs.core.__destructure_map(map__33000);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33000__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33000__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33006){
var map__33007 = p__33006;
var map__33007__$1 = cljs.core.__destructure_map(map__33007);
var runtime = map__33007__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33007__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33009,msg){
var map__33010 = p__33009;
var map__33010__$1 = cljs.core.__destructure_map(map__33010);
var runtime = map__33010__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33010__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33029,key,p__33030){
var map__33031 = p__33029;
var map__33031__$1 = cljs.core.__destructure_map(map__33031);
var state = map__33031__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33031__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33032 = p__33030;
var map__33032__$1 = cljs.core.__destructure_map(map__33032);
var spec = map__33032__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33035,key,spec){
var map__33036 = p__33035;
var map__33036__$1 = cljs.core.__destructure_map(map__33036);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33036__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33037_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33037_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33038_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33038_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33039_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33039_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33040_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33040_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33041_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33041_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33055,key){
var map__33056 = p__33055;
var map__33056__$1 = cljs.core.__destructure_map(map__33056);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33056__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33057,msg){
var map__33058 = p__33057;
var map__33058__$1 = cljs.core.__destructure_map(map__33058);
var runtime = map__33058__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33058__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33067,p__33068){
var map__33069 = p__33067;
var map__33069__$1 = cljs.core.__destructure_map(map__33069);
var runtime = map__33069__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33069__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33070 = p__33068;
var map__33070__$1 = cljs.core.__destructure_map(map__33070);
var msg = map__33070__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33070__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33070__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33098 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33100 = null;
var count__33101 = (0);
var i__33102 = (0);
while(true){
if((i__33102 < count__33101)){
var map__33110 = chunk__33100.cljs$core$IIndexed$_nth$arity$2(null,i__33102);
var map__33110__$1 = cljs.core.__destructure_map(map__33110);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33161 = seq__33098;
var G__33162 = chunk__33100;
var G__33163 = count__33101;
var G__33164 = (i__33102 + (1));
seq__33098 = G__33161;
chunk__33100 = G__33162;
count__33101 = G__33163;
i__33102 = G__33164;
continue;
} else {
var G__33165 = seq__33098;
var G__33166 = chunk__33100;
var G__33167 = count__33101;
var G__33168 = (i__33102 + (1));
seq__33098 = G__33165;
chunk__33100 = G__33166;
count__33101 = G__33167;
i__33102 = G__33168;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33098);
if(temp__5753__auto__){
var seq__33098__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33098__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33098__$1);
var G__33169 = cljs.core.chunk_rest(seq__33098__$1);
var G__33170 = c__4679__auto__;
var G__33171 = cljs.core.count(c__4679__auto__);
var G__33172 = (0);
seq__33098 = G__33169;
chunk__33100 = G__33170;
count__33101 = G__33171;
i__33102 = G__33172;
continue;
} else {
var map__33114 = cljs.core.first(seq__33098__$1);
var map__33114__$1 = cljs.core.__destructure_map(map__33114);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33114__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33174 = cljs.core.next(seq__33098__$1);
var G__33175 = null;
var G__33176 = (0);
var G__33177 = (0);
seq__33098 = G__33174;
chunk__33100 = G__33175;
count__33101 = G__33176;
i__33102 = G__33177;
continue;
} else {
var G__33178 = cljs.core.next(seq__33098__$1);
var G__33179 = null;
var G__33180 = (0);
var G__33181 = (0);
seq__33098 = G__33178;
chunk__33100 = G__33179;
count__33101 = G__33180;
i__33102 = G__33181;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
