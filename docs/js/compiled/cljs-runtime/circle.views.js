goog.provide('circle.views');
circle.views.get_click_coordinates = (function circle$views$get_click_coordinates(e){
var xy = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - e.target.offsetLeft),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - e.target.offsetTop)], null);
return xy;
});
circle.views.build_circle = (function circle$views$build_circle(xy){
var ci = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(xy,new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2((10),(30))));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-circle","add-circle",-1463599910),ci], null));
});
circle.views.add_circle = (function circle$views$add_circle(e){
return circle.views.build_circle(circle.views.get_click_coordinates(e));
});
circle.views.undo_button = (function circle$views$undo_button(){
var undos_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undos?","undos?",-1094259081)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Undo",new cljs.core.Keyword(null,"class","class",-2030961996),"btn",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.deref(undos_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
})], null)], null);
});
});
circle.views.redo_button = (function circle$views$redo_button(){
var redos_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redos?","redos?",1340247550)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Redo",new cljs.core.Keyword(null,"class","class",-2030961996),"btn",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.deref(redos_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo","redo",501190664)], null));
})], null)], null);
});
});
circle.views.main_panel = (function circle$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [circle.modal.modal], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.circle-draw","div.circle-draw",-561741820),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action-menu","div.action-menu",-1239370495),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [circle.views.undo_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [circle.views.redo_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ci-container","div.ci-container",-1615824623),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),circle.views.add_circle], null),(function (){var iter__4652__auto__ = (function circle$views$main_panel_$_iter__29089(s__29090){
return (new cljs.core.LazySeq(null,(function (){
var s__29090__$1 = s__29090;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29090__$1);
if(temp__5753__auto__){
var s__29090__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29090__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29090__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29092 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29091 = (0);
while(true){
if((i__29091 < size__4651__auto__)){
var circle__$1 = cljs.core._nth(c__4650__auto__,i__29091);
cljs.core.chunk_append(b__29092,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.circle","div.circle",2134211799),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle__$1),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle__$1),new cljs.core.Keyword(null,"height","height",1025178622),((2) * new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle__$1)),new cljs.core.Keyword(null,"width","width",-384071477),((2) * new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle__$1))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29091,circle__$1,c__4650__auto__,size__4651__auto__,b__29092,s__29090__$2,temp__5753__auto__){
return (function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-circle","set-active-circle",-2066894489),circle__$1], null));
});})(i__29091,circle__$1,c__4650__auto__,size__4651__auto__,b__29092,s__29090__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),((function (i__29091,circle__$1,c__4650__auto__,size__4651__auto__,b__29092,s__29090__$2,temp__5753__auto__){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-circle","set-active-circle",-2066894489),circle__$1], null));
});})(i__29091,circle__$1,c__4650__auto__,size__4651__auto__,b__29092,s__29090__$2,temp__5753__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),circle__$1], null)));

var G__29093 = (i__29091 + (1));
i__29091 = G__29093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29092),circle$views$main_panel_$_iter__29089(cljs.core.chunk_rest(s__29090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29092),null);
}
} else {
var circle__$1 = cljs.core.first(s__29090__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.circle","div.circle",2134211799),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle__$1),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle__$1),new cljs.core.Keyword(null,"height","height",1025178622),((2) * new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle__$1)),new cljs.core.Keyword(null,"width","width",-384071477),((2) * new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle__$1))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (circle__$1,s__29090__$2,temp__5753__auto__){
return (function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-circle","set-active-circle",-2066894489),circle__$1], null));
});})(circle__$1,s__29090__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),((function (circle__$1,s__29090__$2,temp__5753__auto__){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-circle","set-active-circle",-2066894489),circle__$1], null));
});})(circle__$1,s__29090__$2,temp__5753__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),circle__$1], null)),circle$views$main_panel_$_iter__29089(cljs.core.rest(s__29090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-circles","get-circles",-1918861650)], null))));
})()], null)], null)], null);
});

//# sourceMappingURL=circle.views.js.map
