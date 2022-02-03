goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33824 = arguments.length;
var i__4865__auto___33825 = (0);
while(true){
if((i__4865__auto___33825 < len__4864__auto___33824)){
args__4870__auto__.push((arguments[i__4865__auto___33825]));

var G__33826 = (i__4865__auto___33825 + (1));
i__4865__auto___33825 = G__33826;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__33809){
var vec__33810 = p__33809;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq33804){
var G__33805 = cljs.core.first(seq33804);
var seq33804__$1 = cljs.core.next(seq33804);
var G__33806 = cljs.core.first(seq33804__$1);
var seq33804__$2 = cljs.core.next(seq33804__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33805,G__33806,seq33804__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33827 = arguments.length;
var i__4865__auto___33828 = (0);
while(true){
if((i__4865__auto___33828 < len__4864__auto___33827)){
args__4870__auto__.push((arguments[i__4865__auto___33828]));

var G__33829 = (i__4865__auto___33828 + (1));
i__4865__auto___33828 = G__33829;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__33818){
var vec__33819 = p__33818;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33819,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq33813){
var G__33814 = cljs.core.first(seq33813);
var seq33813__$1 = cljs.core.next(seq33813);
var G__33815 = cljs.core.first(seq33813__$1);
var seq33813__$2 = cljs.core.next(seq33813__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33814,G__33815,seq33813__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
