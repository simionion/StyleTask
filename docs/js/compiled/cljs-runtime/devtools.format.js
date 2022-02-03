goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27366 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._header[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._header["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_27366(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27368 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._has_body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._has_body["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_27368(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27374 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._body["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_27374(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27197 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27197["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27198 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27198["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27199 = temp__5751__auto____$2;
return (o27199["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27204 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27204["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27205 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27205["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27206 = temp__5751__auto____$2;
return (o27206["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27212 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27212["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27213 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27213["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27214 = temp__5751__auto____$2;
return (o27214["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27215 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27215["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27216 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27216["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27217 = temp__5751__auto____$2;
return (o27217["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27218 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27218["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27219 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27219["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27220 = temp__5751__auto____$2;
return (o27220["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27222 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27222["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27223 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27223["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27224 = temp__5751__auto____$2;
return (o27224["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27226 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27226["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27227 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27227["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27228 = temp__5751__auto____$2;
return (o27228["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27389 = arguments.length;
var i__4865__auto___27390 = (0);
while(true){
if((i__4865__auto___27390 < len__4864__auto___27389)){
args__4870__auto__.push((arguments[i__4865__auto___27390]));

var G__27391 = (i__4865__auto___27390 + (1));
i__4865__auto___27390 = G__27391;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27233){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27233));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27396 = arguments.length;
var i__4865__auto___27397 = (0);
while(true){
if((i__4865__auto___27397 < len__4864__auto___27396)){
args__4870__auto__.push((arguments[i__4865__auto___27397]));

var G__27398 = (i__4865__auto___27397 + (1));
i__4865__auto___27397 = G__27398;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27240){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27240));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27399 = arguments.length;
var i__4865__auto___27400 = (0);
while(true){
if((i__4865__auto___27400 < len__4864__auto___27399)){
args__4870__auto__.push((arguments[i__4865__auto___27400]));

var G__27401 = (i__4865__auto___27400 + (1));
i__4865__auto___27400 = G__27401;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27251){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27251));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27402 = arguments.length;
var i__4865__auto___27403 = (0);
while(true){
if((i__4865__auto___27403 < len__4864__auto___27402)){
args__4870__auto__.push((arguments[i__4865__auto___27403]));

var G__27404 = (i__4865__auto___27403 + (1));
i__4865__auto___27403 = G__27404;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27262){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27262));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27405 = arguments.length;
var i__4865__auto___27406 = (0);
while(true){
if((i__4865__auto___27406 < len__4864__auto___27405)){
args__4870__auto__.push((arguments[i__4865__auto___27406]));

var G__27407 = (i__4865__auto___27406 + (1));
i__4865__auto___27406 = G__27407;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq27269){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27269));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27415 = arguments.length;
var i__4865__auto___27416 = (0);
while(true){
if((i__4865__auto___27416 < len__4864__auto___27415)){
args__4870__auto__.push((arguments[i__4865__auto___27416]));

var G__27417 = (i__4865__auto___27416 + (1));
i__4865__auto___27416 = G__27417;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq27281){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27281));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27418 = arguments.length;
var i__4865__auto___27419 = (0);
while(true){
if((i__4865__auto___27419 < len__4864__auto___27418)){
args__4870__auto__.push((arguments[i__4865__auto___27419]));

var G__27420 = (i__4865__auto___27419 + (1));
i__4865__auto___27419 = G__27420;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27295){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27295));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27425 = arguments.length;
var i__4865__auto___27426 = (0);
while(true){
if((i__4865__auto___27426 < len__4864__auto___27425)){
args__4870__auto__.push((arguments[i__4865__auto___27426]));

var G__27427 = (i__4865__auto___27426 + (1));
i__4865__auto___27426 = G__27427;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27305){
var vec__27306 = p__27305;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27306,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27301_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27301_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27303){
var G__27304 = cljs.core.first(seq27303);
var seq27303__$1 = cljs.core.next(seq27303);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27304,seq27303__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__27315 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__27316 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__27317 = (function (){var G__27318 = new cljs.core.Keyword(null,"li","li",723558921);
var G__27319 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__27320 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27318,G__27319,G__27320) : devtools.format.make_template_fn.call(null,G__27318,G__27319,G__27320));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27315,G__27316,G__27317) : devtools.format.make_template_fn.call(null,G__27315,G__27316,G__27317));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27434 = arguments.length;
var i__4865__auto___27435 = (0);
while(true){
if((i__4865__auto___27435 < len__4864__auto___27434)){
args__4870__auto__.push((arguments[i__4865__auto___27435]));

var G__27436 = (i__4865__auto___27435 + (1));
i__4865__auto___27435 = G__27436;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27330){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27330));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27437 = arguments.length;
var i__4865__auto___27438 = (0);
while(true){
if((i__4865__auto___27438 < len__4864__auto___27437)){
args__4870__auto__.push((arguments[i__4865__auto___27438]));

var G__27439 = (i__4865__auto___27438 + (1));
i__4865__auto___27438 = G__27439;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27347){
var G__27348 = cljs.core.first(seq27347);
var seq27347__$1 = cljs.core.next(seq27347);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27348,seq27347__$1);
}));


//# sourceMappingURL=devtools.format.js.map
