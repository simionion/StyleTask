goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35646){
var map__35647 = p__35646;
var map__35647__$1 = cljs.core.__destructure_map(map__35647);
var m = map__35647__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35647__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35647__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35654_36093 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35655_36094 = null;
var count__35656_36095 = (0);
var i__35657_36096 = (0);
while(true){
if((i__35657_36096 < count__35656_36095)){
var f_36097 = chunk__35655_36094.cljs$core$IIndexed$_nth$arity$2(null,i__35657_36096);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36097], 0));


var G__36098 = seq__35654_36093;
var G__36099 = chunk__35655_36094;
var G__36100 = count__35656_36095;
var G__36101 = (i__35657_36096 + (1));
seq__35654_36093 = G__36098;
chunk__35655_36094 = G__36099;
count__35656_36095 = G__36100;
i__35657_36096 = G__36101;
continue;
} else {
var temp__5753__auto___36102 = cljs.core.seq(seq__35654_36093);
if(temp__5753__auto___36102){
var seq__35654_36103__$1 = temp__5753__auto___36102;
if(cljs.core.chunked_seq_QMARK_(seq__35654_36103__$1)){
var c__4679__auto___36104 = cljs.core.chunk_first(seq__35654_36103__$1);
var G__36105 = cljs.core.chunk_rest(seq__35654_36103__$1);
var G__36106 = c__4679__auto___36104;
var G__36107 = cljs.core.count(c__4679__auto___36104);
var G__36108 = (0);
seq__35654_36093 = G__36105;
chunk__35655_36094 = G__36106;
count__35656_36095 = G__36107;
i__35657_36096 = G__36108;
continue;
} else {
var f_36109 = cljs.core.first(seq__35654_36103__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36109], 0));


var G__36112 = cljs.core.next(seq__35654_36103__$1);
var G__36113 = null;
var G__36114 = (0);
var G__36115 = (0);
seq__35654_36093 = G__36112;
chunk__35655_36094 = G__36113;
count__35656_36095 = G__36114;
i__35657_36096 = G__36115;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36118 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36118], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36118)))?cljs.core.second(arglists_36118):arglists_36118)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35666_36119 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35667_36120 = null;
var count__35668_36121 = (0);
var i__35669_36122 = (0);
while(true){
if((i__35669_36122 < count__35668_36121)){
var vec__35685_36127 = chunk__35667_36120.cljs$core$IIndexed$_nth$arity$2(null,i__35669_36122);
var name_36128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35685_36127,(0),null);
var map__35688_36129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35685_36127,(1),null);
var map__35688_36130__$1 = cljs.core.__destructure_map(map__35688_36129);
var doc_36131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35688_36130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35688_36130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36128], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36132], 0));

if(cljs.core.truth_(doc_36131)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36131], 0));
} else {
}


var G__36136 = seq__35666_36119;
var G__36137 = chunk__35667_36120;
var G__36138 = count__35668_36121;
var G__36139 = (i__35669_36122 + (1));
seq__35666_36119 = G__36136;
chunk__35667_36120 = G__36137;
count__35668_36121 = G__36138;
i__35669_36122 = G__36139;
continue;
} else {
var temp__5753__auto___36140 = cljs.core.seq(seq__35666_36119);
if(temp__5753__auto___36140){
var seq__35666_36142__$1 = temp__5753__auto___36140;
if(cljs.core.chunked_seq_QMARK_(seq__35666_36142__$1)){
var c__4679__auto___36143 = cljs.core.chunk_first(seq__35666_36142__$1);
var G__36144 = cljs.core.chunk_rest(seq__35666_36142__$1);
var G__36145 = c__4679__auto___36143;
var G__36146 = cljs.core.count(c__4679__auto___36143);
var G__36147 = (0);
seq__35666_36119 = G__36144;
chunk__35667_36120 = G__36145;
count__35668_36121 = G__36146;
i__35669_36122 = G__36147;
continue;
} else {
var vec__35692_36148 = cljs.core.first(seq__35666_36142__$1);
var name_36149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35692_36148,(0),null);
var map__35695_36150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35692_36148,(1),null);
var map__35695_36151__$1 = cljs.core.__destructure_map(map__35695_36150);
var doc_36152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35695_36151__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35695_36151__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36149], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36153], 0));

if(cljs.core.truth_(doc_36152)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36152], 0));
} else {
}


var G__36154 = cljs.core.next(seq__35666_36142__$1);
var G__36155 = null;
var G__36156 = (0);
var G__36157 = (0);
seq__35666_36119 = G__36154;
chunk__35667_36120 = G__36155;
count__35668_36121 = G__36156;
i__35669_36122 = G__36157;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35702 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35703 = null;
var count__35704 = (0);
var i__35705 = (0);
while(true){
if((i__35705 < count__35704)){
var role = chunk__35703.cljs$core$IIndexed$_nth$arity$2(null,i__35705);
var temp__5753__auto___36158__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36158__$1)){
var spec_36159 = temp__5753__auto___36158__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36159)], 0));
} else {
}


var G__36160 = seq__35702;
var G__36161 = chunk__35703;
var G__36162 = count__35704;
var G__36163 = (i__35705 + (1));
seq__35702 = G__36160;
chunk__35703 = G__36161;
count__35704 = G__36162;
i__35705 = G__36163;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35702);
if(temp__5753__auto____$1){
var seq__35702__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35702__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35702__$1);
var G__36164 = cljs.core.chunk_rest(seq__35702__$1);
var G__36165 = c__4679__auto__;
var G__36166 = cljs.core.count(c__4679__auto__);
var G__36167 = (0);
seq__35702 = G__36164;
chunk__35703 = G__36165;
count__35704 = G__36166;
i__35705 = G__36167;
continue;
} else {
var role = cljs.core.first(seq__35702__$1);
var temp__5753__auto___36168__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36168__$2)){
var spec_36169 = temp__5753__auto___36168__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36169)], 0));
} else {
}


var G__36171 = cljs.core.next(seq__35702__$1);
var G__36172 = null;
var G__36173 = (0);
var G__36174 = (0);
seq__35702 = G__36171;
chunk__35703 = G__36172;
count__35704 = G__36173;
i__35705 = G__36174;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36179 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36180 = cljs.core.ex_cause(t);
via = G__36179;
t = G__36180;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35782 = datafied_throwable;
var map__35782__$1 = cljs.core.__destructure_map(map__35782);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35782__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35782__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35782__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35783 = cljs.core.last(via);
var map__35783__$1 = cljs.core.__destructure_map(map__35783);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35783__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35783__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35783__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35784 = data;
var map__35784__$1 = cljs.core.__destructure_map(map__35784);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35785 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35785__$1 = cljs.core.__destructure_map(map__35785);
var top_data = map__35785__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35785__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35798 = phase;
var G__35798__$1 = (((G__35798 instanceof cljs.core.Keyword))?G__35798.fqn:null);
switch (G__35798__$1) {
case "read-source":
var map__35803 = data;
var map__35803__$1 = cljs.core.__destructure_map(map__35803);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35811 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35811__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35811,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35811);
var G__35811__$2 = (cljs.core.truth_((function (){var fexpr__35825 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35825.cljs$core$IFn$_invoke$arity$1 ? fexpr__35825.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35825.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35811__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35811__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35811__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35830 = top_data;
var G__35830__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35830,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35830);
var G__35830__$2 = (cljs.core.truth_((function (){var fexpr__35841 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35841.cljs$core$IFn$_invoke$arity$1 ? fexpr__35841.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35841.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35830__$1);
var G__35830__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35830__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35830__$2);
var G__35830__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35830__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35830__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35830__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35830__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35871 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(3),null);
var G__35898 = top_data;
var G__35898__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35898,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35898);
var G__35898__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35898__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35898__$1);
var G__35898__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35898__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35898__$2);
var G__35898__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35898__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35898__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35898__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35898__$4;
}

break;
case "execution":
var vec__35947 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35781_SHARP_){
var or__4253__auto__ = (p1__35781_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35950 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35950.cljs$core$IFn$_invoke$arity$1 ? fexpr__35950.cljs$core$IFn$_invoke$arity$1(p1__35781_SHARP_) : fexpr__35950.call(null,p1__35781_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35959 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35959__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35959,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35959);
var G__35959__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35959__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35959__$1);
var G__35959__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35959__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35959__$2);
var G__35959__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35959__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35959__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35959__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35959__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35798__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35973){
var map__35974 = p__35973;
var map__35974__$1 = cljs.core.__destructure_map(map__35974);
var triage_data = map__35974__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36009 = phase;
var G__36009__$1 = (((G__36009 instanceof cljs.core.Keyword))?G__36009.fqn:null);
switch (G__36009__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36021 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36022 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36023 = loc;
var G__36024 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36035_36201 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36036_36202 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36037_36203 = true;
var _STAR_print_fn_STAR__temp_val__36038_36204 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36037_36203);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36038_36204);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35971_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35971_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36036_36202);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36035_36201);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36021,G__36022,G__36023,G__36024) : format.call(null,G__36021,G__36022,G__36023,G__36024));

break;
case "macroexpansion":
var G__36040 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36041 = cause_type;
var G__36042 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36043 = loc;
var G__36044 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36040,G__36041,G__36042,G__36043,G__36044) : format.call(null,G__36040,G__36041,G__36042,G__36043,G__36044));

break;
case "compile-syntax-check":
var G__36047 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36048 = cause_type;
var G__36049 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36050 = loc;
var G__36051 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36047,G__36048,G__36049,G__36050,G__36051) : format.call(null,G__36047,G__36048,G__36049,G__36050,G__36051));

break;
case "compilation":
var G__36052 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36053 = cause_type;
var G__36054 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36055 = loc;
var G__36056 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36052,G__36053,G__36054,G__36055,G__36056) : format.call(null,G__36052,G__36053,G__36054,G__36055,G__36056));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36061 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36062 = symbol;
var G__36063 = loc;
var G__36064 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36073_36206 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36074_36207 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36075_36208 = true;
var _STAR_print_fn_STAR__temp_val__36076_36209 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36075_36208);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36076_36209);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35972_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35972_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36074_36207);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36073_36206);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36061,G__36062,G__36063,G__36064) : format.call(null,G__36061,G__36062,G__36063,G__36064));
} else {
var G__36081 = "Execution error%s at %s(%s).\n%s\n";
var G__36082 = cause_type;
var G__36083 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36084 = loc;
var G__36085 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36081,G__36082,G__36083,G__36084,G__36085) : format.call(null,G__36081,G__36082,G__36083,G__36084,G__36085));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36009__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
