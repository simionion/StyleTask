goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35676 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35676(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35678 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35678(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34696 = coll;
var G__34697 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34696,G__34697) : shadow.dom.lazy_native_coll_seq.call(null,G__34696,G__34697));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34708 = arguments.length;
switch (G__34708) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34714 = arguments.length;
switch (G__34714) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34723 = arguments.length;
switch (G__34723) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34736 = arguments.length;
switch (G__34736) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34753 = arguments.length;
switch (G__34753) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34771 = arguments.length;
switch (G__34771) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34784){if((e34784 instanceof Object)){
var e = e34784;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34784;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34792 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34793 = null;
var count__34794 = (0);
var i__34795 = (0);
while(true){
if((i__34795 < count__34794)){
var el = chunk__34793.cljs$core$IIndexed$_nth$arity$2(null,i__34795);
var handler_35708__$1 = ((function (seq__34792,chunk__34793,count__34794,i__34795,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34792,chunk__34793,count__34794,i__34795,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35708__$1);


var G__35709 = seq__34792;
var G__35710 = chunk__34793;
var G__35711 = count__34794;
var G__35712 = (i__34795 + (1));
seq__34792 = G__35709;
chunk__34793 = G__35710;
count__34794 = G__35711;
i__34795 = G__35712;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34792);
if(temp__5753__auto__){
var seq__34792__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34792__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34792__$1);
var G__35713 = cljs.core.chunk_rest(seq__34792__$1);
var G__35714 = c__4679__auto__;
var G__35715 = cljs.core.count(c__4679__auto__);
var G__35716 = (0);
seq__34792 = G__35713;
chunk__34793 = G__35714;
count__34794 = G__35715;
i__34795 = G__35716;
continue;
} else {
var el = cljs.core.first(seq__34792__$1);
var handler_35717__$1 = ((function (seq__34792,chunk__34793,count__34794,i__34795,el,seq__34792__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34792,chunk__34793,count__34794,i__34795,el,seq__34792__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35717__$1);


var G__35718 = cljs.core.next(seq__34792__$1);
var G__35719 = null;
var G__35720 = (0);
var G__35721 = (0);
seq__34792 = G__35718;
chunk__34793 = G__35719;
count__34794 = G__35720;
i__34795 = G__35721;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34825 = arguments.length;
switch (G__34825) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34833 = cljs.core.seq(events);
var chunk__34834 = null;
var count__34835 = (0);
var i__34836 = (0);
while(true){
if((i__34836 < count__34835)){
var vec__34851 = chunk__34834.cljs$core$IIndexed$_nth$arity$2(null,i__34836);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35723 = seq__34833;
var G__35724 = chunk__34834;
var G__35725 = count__34835;
var G__35726 = (i__34836 + (1));
seq__34833 = G__35723;
chunk__34834 = G__35724;
count__34835 = G__35725;
i__34836 = G__35726;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34833);
if(temp__5753__auto__){
var seq__34833__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34833__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34833__$1);
var G__35727 = cljs.core.chunk_rest(seq__34833__$1);
var G__35728 = c__4679__auto__;
var G__35729 = cljs.core.count(c__4679__auto__);
var G__35730 = (0);
seq__34833 = G__35727;
chunk__34834 = G__35728;
count__34835 = G__35729;
i__34836 = G__35730;
continue;
} else {
var vec__34860 = cljs.core.first(seq__34833__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35731 = cljs.core.next(seq__34833__$1);
var G__35732 = null;
var G__35733 = (0);
var G__35734 = (0);
seq__34833 = G__35731;
chunk__34834 = G__35732;
count__34835 = G__35733;
i__34836 = G__35734;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34869 = cljs.core.seq(styles);
var chunk__34870 = null;
var count__34871 = (0);
var i__34872 = (0);
while(true){
if((i__34872 < count__34871)){
var vec__34893 = chunk__34870.cljs$core$IIndexed$_nth$arity$2(null,i__34872);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35735 = seq__34869;
var G__35736 = chunk__34870;
var G__35737 = count__34871;
var G__35738 = (i__34872 + (1));
seq__34869 = G__35735;
chunk__34870 = G__35736;
count__34871 = G__35737;
i__34872 = G__35738;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34869);
if(temp__5753__auto__){
var seq__34869__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34869__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34869__$1);
var G__35739 = cljs.core.chunk_rest(seq__34869__$1);
var G__35740 = c__4679__auto__;
var G__35741 = cljs.core.count(c__4679__auto__);
var G__35742 = (0);
seq__34869 = G__35739;
chunk__34870 = G__35740;
count__34871 = G__35741;
i__34872 = G__35742;
continue;
} else {
var vec__34906 = cljs.core.first(seq__34869__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34906,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34906,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35744 = cljs.core.next(seq__34869__$1);
var G__35745 = null;
var G__35746 = (0);
var G__35748 = (0);
seq__34869 = G__35744;
chunk__34870 = G__35745;
count__34871 = G__35746;
i__34872 = G__35748;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34919_35751 = key;
var G__34919_35752__$1 = (((G__34919_35751 instanceof cljs.core.Keyword))?G__34919_35751.fqn:null);
switch (G__34919_35752__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35767 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_35767,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_35767,"aria-");
}
})())){
el.setAttribute(ks_35767,value);
} else {
(el[ks_35767] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34966){
var map__34967 = p__34966;
var map__34967__$1 = cljs.core.__destructure_map(map__34967);
var props = map__34967__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34967__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34968 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34972 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34972,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34972;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34975 = arguments.length;
switch (G__34975) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34980){
var vec__34981 = p__34980;
var seq__34982 = cljs.core.seq(vec__34981);
var first__34983 = cljs.core.first(seq__34982);
var seq__34982__$1 = cljs.core.next(seq__34982);
var nn = first__34983;
var first__34983__$1 = cljs.core.first(seq__34982__$1);
var seq__34982__$2 = cljs.core.next(seq__34982__$1);
var np = first__34983__$1;
var nc = seq__34982__$2;
var node = vec__34981;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34989 = nn;
var G__34990 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34989,G__34990) : create_fn.call(null,G__34989,G__34990));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34993 = nn;
var G__34994 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34993,G__34994) : create_fn.call(null,G__34993,G__34994));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34999 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34999,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34999,(1),null);
var seq__35003_35826 = cljs.core.seq(node_children);
var chunk__35004_35827 = null;
var count__35005_35828 = (0);
var i__35006_35829 = (0);
while(true){
if((i__35006_35829 < count__35005_35828)){
var child_struct_35831 = chunk__35004_35827.cljs$core$IIndexed$_nth$arity$2(null,i__35006_35829);
var children_35832 = shadow.dom.dom_node(child_struct_35831);
if(cljs.core.seq_QMARK_(children_35832)){
var seq__35060_35833 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35832));
var chunk__35062_35834 = null;
var count__35063_35835 = (0);
var i__35064_35836 = (0);
while(true){
if((i__35064_35836 < count__35063_35835)){
var child_35842 = chunk__35062_35834.cljs$core$IIndexed$_nth$arity$2(null,i__35064_35836);
if(cljs.core.truth_(child_35842)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35842);


var G__35846 = seq__35060_35833;
var G__35847 = chunk__35062_35834;
var G__35848 = count__35063_35835;
var G__35849 = (i__35064_35836 + (1));
seq__35060_35833 = G__35846;
chunk__35062_35834 = G__35847;
count__35063_35835 = G__35848;
i__35064_35836 = G__35849;
continue;
} else {
var G__35850 = seq__35060_35833;
var G__35851 = chunk__35062_35834;
var G__35852 = count__35063_35835;
var G__35853 = (i__35064_35836 + (1));
seq__35060_35833 = G__35850;
chunk__35062_35834 = G__35851;
count__35063_35835 = G__35852;
i__35064_35836 = G__35853;
continue;
}
} else {
var temp__5753__auto___35854 = cljs.core.seq(seq__35060_35833);
if(temp__5753__auto___35854){
var seq__35060_35855__$1 = temp__5753__auto___35854;
if(cljs.core.chunked_seq_QMARK_(seq__35060_35855__$1)){
var c__4679__auto___35856 = cljs.core.chunk_first(seq__35060_35855__$1);
var G__35857 = cljs.core.chunk_rest(seq__35060_35855__$1);
var G__35858 = c__4679__auto___35856;
var G__35859 = cljs.core.count(c__4679__auto___35856);
var G__35860 = (0);
seq__35060_35833 = G__35857;
chunk__35062_35834 = G__35858;
count__35063_35835 = G__35859;
i__35064_35836 = G__35860;
continue;
} else {
var child_35861 = cljs.core.first(seq__35060_35855__$1);
if(cljs.core.truth_(child_35861)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35861);


var G__35867 = cljs.core.next(seq__35060_35855__$1);
var G__35868 = null;
var G__35869 = (0);
var G__35870 = (0);
seq__35060_35833 = G__35867;
chunk__35062_35834 = G__35868;
count__35063_35835 = G__35869;
i__35064_35836 = G__35870;
continue;
} else {
var G__35875 = cljs.core.next(seq__35060_35855__$1);
var G__35876 = null;
var G__35877 = (0);
var G__35878 = (0);
seq__35060_35833 = G__35875;
chunk__35062_35834 = G__35876;
count__35063_35835 = G__35877;
i__35064_35836 = G__35878;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35832);
}


var G__35884 = seq__35003_35826;
var G__35885 = chunk__35004_35827;
var G__35886 = count__35005_35828;
var G__35887 = (i__35006_35829 + (1));
seq__35003_35826 = G__35884;
chunk__35004_35827 = G__35885;
count__35005_35828 = G__35886;
i__35006_35829 = G__35887;
continue;
} else {
var temp__5753__auto___35891 = cljs.core.seq(seq__35003_35826);
if(temp__5753__auto___35891){
var seq__35003_35892__$1 = temp__5753__auto___35891;
if(cljs.core.chunked_seq_QMARK_(seq__35003_35892__$1)){
var c__4679__auto___35893 = cljs.core.chunk_first(seq__35003_35892__$1);
var G__35894 = cljs.core.chunk_rest(seq__35003_35892__$1);
var G__35895 = c__4679__auto___35893;
var G__35896 = cljs.core.count(c__4679__auto___35893);
var G__35897 = (0);
seq__35003_35826 = G__35894;
chunk__35004_35827 = G__35895;
count__35005_35828 = G__35896;
i__35006_35829 = G__35897;
continue;
} else {
var child_struct_35899 = cljs.core.first(seq__35003_35892__$1);
var children_35900 = shadow.dom.dom_node(child_struct_35899);
if(cljs.core.seq_QMARK_(children_35900)){
var seq__35086_35901 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35900));
var chunk__35088_35902 = null;
var count__35089_35903 = (0);
var i__35090_35904 = (0);
while(true){
if((i__35090_35904 < count__35089_35903)){
var child_35905 = chunk__35088_35902.cljs$core$IIndexed$_nth$arity$2(null,i__35090_35904);
if(cljs.core.truth_(child_35905)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35905);


var G__35906 = seq__35086_35901;
var G__35907 = chunk__35088_35902;
var G__35908 = count__35089_35903;
var G__35909 = (i__35090_35904 + (1));
seq__35086_35901 = G__35906;
chunk__35088_35902 = G__35907;
count__35089_35903 = G__35908;
i__35090_35904 = G__35909;
continue;
} else {
var G__35914 = seq__35086_35901;
var G__35915 = chunk__35088_35902;
var G__35916 = count__35089_35903;
var G__35917 = (i__35090_35904 + (1));
seq__35086_35901 = G__35914;
chunk__35088_35902 = G__35915;
count__35089_35903 = G__35916;
i__35090_35904 = G__35917;
continue;
}
} else {
var temp__5753__auto___35918__$1 = cljs.core.seq(seq__35086_35901);
if(temp__5753__auto___35918__$1){
var seq__35086_35923__$1 = temp__5753__auto___35918__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35086_35923__$1)){
var c__4679__auto___35924 = cljs.core.chunk_first(seq__35086_35923__$1);
var G__35925 = cljs.core.chunk_rest(seq__35086_35923__$1);
var G__35926 = c__4679__auto___35924;
var G__35927 = cljs.core.count(c__4679__auto___35924);
var G__35928 = (0);
seq__35086_35901 = G__35925;
chunk__35088_35902 = G__35926;
count__35089_35903 = G__35927;
i__35090_35904 = G__35928;
continue;
} else {
var child_35929 = cljs.core.first(seq__35086_35923__$1);
if(cljs.core.truth_(child_35929)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35929);


var G__35930 = cljs.core.next(seq__35086_35923__$1);
var G__35931 = null;
var G__35932 = (0);
var G__35933 = (0);
seq__35086_35901 = G__35930;
chunk__35088_35902 = G__35931;
count__35089_35903 = G__35932;
i__35090_35904 = G__35933;
continue;
} else {
var G__35934 = cljs.core.next(seq__35086_35923__$1);
var G__35935 = null;
var G__35936 = (0);
var G__35937 = (0);
seq__35086_35901 = G__35934;
chunk__35088_35902 = G__35935;
count__35089_35903 = G__35936;
i__35090_35904 = G__35937;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35900);
}


var G__35938 = cljs.core.next(seq__35003_35892__$1);
var G__35939 = null;
var G__35940 = (0);
var G__35941 = (0);
seq__35003_35826 = G__35938;
chunk__35004_35827 = G__35939;
count__35005_35828 = G__35940;
i__35006_35829 = G__35941;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35116 = cljs.core.seq(node);
var chunk__35117 = null;
var count__35118 = (0);
var i__35119 = (0);
while(true){
if((i__35119 < count__35118)){
var n = chunk__35117.cljs$core$IIndexed$_nth$arity$2(null,i__35119);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35951 = seq__35116;
var G__35952 = chunk__35117;
var G__35953 = count__35118;
var G__35954 = (i__35119 + (1));
seq__35116 = G__35951;
chunk__35117 = G__35952;
count__35118 = G__35953;
i__35119 = G__35954;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35116);
if(temp__5753__auto__){
var seq__35116__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35116__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35116__$1);
var G__35955 = cljs.core.chunk_rest(seq__35116__$1);
var G__35956 = c__4679__auto__;
var G__35957 = cljs.core.count(c__4679__auto__);
var G__35958 = (0);
seq__35116 = G__35955;
chunk__35117 = G__35956;
count__35118 = G__35957;
i__35119 = G__35958;
continue;
} else {
var n = cljs.core.first(seq__35116__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35961 = cljs.core.next(seq__35116__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35116 = G__35961;
chunk__35117 = G__35962;
count__35118 = G__35963;
i__35119 = G__35964;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35128 = arguments.length;
switch (G__35128) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35147 = arguments.length;
switch (G__35147) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35184 = arguments.length;
switch (G__35184) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35975 = arguments.length;
var i__4865__auto___35976 = (0);
while(true){
if((i__4865__auto___35976 < len__4864__auto___35975)){
args__4870__auto__.push((arguments[i__4865__auto___35976]));

var G__35977 = (i__4865__auto___35976 + (1));
i__4865__auto___35976 = G__35977;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35210_35978 = cljs.core.seq(nodes);
var chunk__35211_35979 = null;
var count__35212_35980 = (0);
var i__35213_35981 = (0);
while(true){
if((i__35213_35981 < count__35212_35980)){
var node_35983 = chunk__35211_35979.cljs$core$IIndexed$_nth$arity$2(null,i__35213_35981);
fragment.appendChild(shadow.dom._to_dom(node_35983));


var G__35984 = seq__35210_35978;
var G__35985 = chunk__35211_35979;
var G__35986 = count__35212_35980;
var G__35987 = (i__35213_35981 + (1));
seq__35210_35978 = G__35984;
chunk__35211_35979 = G__35985;
count__35212_35980 = G__35986;
i__35213_35981 = G__35987;
continue;
} else {
var temp__5753__auto___35988 = cljs.core.seq(seq__35210_35978);
if(temp__5753__auto___35988){
var seq__35210_35989__$1 = temp__5753__auto___35988;
if(cljs.core.chunked_seq_QMARK_(seq__35210_35989__$1)){
var c__4679__auto___35990 = cljs.core.chunk_first(seq__35210_35989__$1);
var G__35991 = cljs.core.chunk_rest(seq__35210_35989__$1);
var G__35992 = c__4679__auto___35990;
var G__35993 = cljs.core.count(c__4679__auto___35990);
var G__35994 = (0);
seq__35210_35978 = G__35991;
chunk__35211_35979 = G__35992;
count__35212_35980 = G__35993;
i__35213_35981 = G__35994;
continue;
} else {
var node_35996 = cljs.core.first(seq__35210_35989__$1);
fragment.appendChild(shadow.dom._to_dom(node_35996));


var G__35997 = cljs.core.next(seq__35210_35989__$1);
var G__35998 = null;
var G__35999 = (0);
var G__36000 = (0);
seq__35210_35978 = G__35997;
chunk__35211_35979 = G__35998;
count__35212_35980 = G__35999;
i__35213_35981 = G__36000;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35203){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35203));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35224_36001 = cljs.core.seq(scripts);
var chunk__35225_36002 = null;
var count__35226_36003 = (0);
var i__35227_36004 = (0);
while(true){
if((i__35227_36004 < count__35226_36003)){
var vec__35250_36006 = chunk__35225_36002.cljs$core$IIndexed$_nth$arity$2(null,i__35227_36004);
var script_tag_36007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35250_36006,(0),null);
var script_body_36008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35250_36006,(1),null);
eval(script_body_36008);


var G__36010 = seq__35224_36001;
var G__36011 = chunk__35225_36002;
var G__36012 = count__35226_36003;
var G__36013 = (i__35227_36004 + (1));
seq__35224_36001 = G__36010;
chunk__35225_36002 = G__36011;
count__35226_36003 = G__36012;
i__35227_36004 = G__36013;
continue;
} else {
var temp__5753__auto___36014 = cljs.core.seq(seq__35224_36001);
if(temp__5753__auto___36014){
var seq__35224_36015__$1 = temp__5753__auto___36014;
if(cljs.core.chunked_seq_QMARK_(seq__35224_36015__$1)){
var c__4679__auto___36016 = cljs.core.chunk_first(seq__35224_36015__$1);
var G__36017 = cljs.core.chunk_rest(seq__35224_36015__$1);
var G__36018 = c__4679__auto___36016;
var G__36019 = cljs.core.count(c__4679__auto___36016);
var G__36020 = (0);
seq__35224_36001 = G__36017;
chunk__35225_36002 = G__36018;
count__35226_36003 = G__36019;
i__35227_36004 = G__36020;
continue;
} else {
var vec__35256_36025 = cljs.core.first(seq__35224_36015__$1);
var script_tag_36026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256_36025,(0),null);
var script_body_36027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256_36025,(1),null);
eval(script_body_36027);


var G__36030 = cljs.core.next(seq__35224_36015__$1);
var G__36031 = null;
var G__36032 = (0);
var G__36033 = (0);
seq__35224_36001 = G__36030;
chunk__35225_36002 = G__36031;
count__35226_36003 = G__36032;
i__35227_36004 = G__36033;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35262){
var vec__35264 = p__35262;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35279 = arguments.length;
switch (G__35279) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35308 = cljs.core.seq(style_keys);
var chunk__35309 = null;
var count__35310 = (0);
var i__35311 = (0);
while(true){
if((i__35311 < count__35310)){
var it = chunk__35309.cljs$core$IIndexed$_nth$arity$2(null,i__35311);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36057 = seq__35308;
var G__36058 = chunk__35309;
var G__36059 = count__35310;
var G__36060 = (i__35311 + (1));
seq__35308 = G__36057;
chunk__35309 = G__36058;
count__35310 = G__36059;
i__35311 = G__36060;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35308);
if(temp__5753__auto__){
var seq__35308__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35308__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35308__$1);
var G__36065 = cljs.core.chunk_rest(seq__35308__$1);
var G__36066 = c__4679__auto__;
var G__36067 = cljs.core.count(c__4679__auto__);
var G__36068 = (0);
seq__35308 = G__36065;
chunk__35309 = G__36066;
count__35310 = G__36067;
i__35311 = G__36068;
continue;
} else {
var it = cljs.core.first(seq__35308__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36069 = cljs.core.next(seq__35308__$1);
var G__36070 = null;
var G__36071 = (0);
var G__36072 = (0);
seq__35308 = G__36069;
chunk__35309 = G__36070;
count__35310 = G__36071;
i__35311 = G__36072;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35331,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35348 = k35331;
var G__35348__$1 = (((G__35348 instanceof cljs.core.Keyword))?G__35348.fqn:null);
switch (G__35348__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35331,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35353){
var vec__35354 = p__35353;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35330){
var self__ = this;
var G__35330__$1 = this;
return (new cljs.core.RecordIter((0),G__35330__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35332,other35333){
var self__ = this;
var this35332__$1 = this;
return (((!((other35333 == null)))) && ((((this35332__$1.constructor === other35333.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35332__$1.x,other35333.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35332__$1.y,other35333.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35332__$1.__extmap,other35333.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35331){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35388 = k35331;
var G__35388__$1 = (((G__35388 instanceof cljs.core.Keyword))?G__35388.fqn:null);
switch (G__35388__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35331);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35330){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35397 = cljs.core.keyword_identical_QMARK_;
var expr__35398 = k__4511__auto__;
if(cljs.core.truth_((pred__35397.cljs$core$IFn$_invoke$arity$2 ? pred__35397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35398) : pred__35397.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35398)))){
return (new shadow.dom.Coordinate(G__35330,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35397.cljs$core$IFn$_invoke$arity$2 ? pred__35397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35398) : pred__35397.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35398)))){
return (new shadow.dom.Coordinate(self__.x,G__35330,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35330),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35330){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35330,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35342){
var extmap__4542__auto__ = (function (){var G__35408 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35342,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35342)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35408);
} else {
return G__35408;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35342),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35342),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35420,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35435 = k35420;
var G__35435__$1 = (((G__35435 instanceof cljs.core.Keyword))?G__35435.fqn:null);
switch (G__35435__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35420,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35439){
var vec__35440 = p__35439;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35419){
var self__ = this;
var G__35419__$1 = this;
return (new cljs.core.RecordIter((0),G__35419__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35421,other35422){
var self__ = this;
var this35421__$1 = this;
return (((!((other35422 == null)))) && ((((this35421__$1.constructor === other35422.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35421__$1.w,other35422.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35421__$1.h,other35422.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35421__$1.__extmap,other35422.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35420){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35466 = k35420;
var G__35466__$1 = (((G__35466 instanceof cljs.core.Keyword))?G__35466.fqn:null);
switch (G__35466__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35420);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35419){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35471 = cljs.core.keyword_identical_QMARK_;
var expr__35472 = k__4511__auto__;
if(cljs.core.truth_((pred__35471.cljs$core$IFn$_invoke$arity$2 ? pred__35471.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35472) : pred__35471.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35472)))){
return (new shadow.dom.Size(G__35419,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35471.cljs$core$IFn$_invoke$arity$2 ? pred__35471.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35472) : pred__35471.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35472)))){
return (new shadow.dom.Size(self__.w,G__35419,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35419),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35419){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35419,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35423){
var extmap__4542__auto__ = (function (){var G__35495 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35423,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35423)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35495);
} else {
return G__35495;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35423),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35423),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36213 = (i + (1));
var G__36214 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36213;
ret = G__36214;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35531){
var vec__35532 = p__35531;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35540 = arguments.length;
switch (G__35540) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36217 = ps;
var G__36218 = (i + (1));
el__$1 = G__36217;
i = G__36218;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35567 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35570_36222 = cljs.core.seq(props);
var chunk__35571_36223 = null;
var count__35572_36224 = (0);
var i__35573_36225 = (0);
while(true){
if((i__35573_36225 < count__35572_36224)){
var vec__35587_36226 = chunk__35571_36223.cljs$core$IIndexed$_nth$arity$2(null,i__35573_36225);
var k_36227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587_36226,(0),null);
var v_36228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587_36226,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36227);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36227),v_36228);


var G__36229 = seq__35570_36222;
var G__36230 = chunk__35571_36223;
var G__36231 = count__35572_36224;
var G__36232 = (i__35573_36225 + (1));
seq__35570_36222 = G__36229;
chunk__35571_36223 = G__36230;
count__35572_36224 = G__36231;
i__35573_36225 = G__36232;
continue;
} else {
var temp__5753__auto___36233 = cljs.core.seq(seq__35570_36222);
if(temp__5753__auto___36233){
var seq__35570_36236__$1 = temp__5753__auto___36233;
if(cljs.core.chunked_seq_QMARK_(seq__35570_36236__$1)){
var c__4679__auto___36238 = cljs.core.chunk_first(seq__35570_36236__$1);
var G__36239 = cljs.core.chunk_rest(seq__35570_36236__$1);
var G__36240 = c__4679__auto___36238;
var G__36241 = cljs.core.count(c__4679__auto___36238);
var G__36242 = (0);
seq__35570_36222 = G__36239;
chunk__35571_36223 = G__36240;
count__35572_36224 = G__36241;
i__35573_36225 = G__36242;
continue;
} else {
var vec__35590_36243 = cljs.core.first(seq__35570_36236__$1);
var k_36244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35590_36243,(0),null);
var v_36245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35590_36243,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36244);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36244),v_36245);


var G__36246 = cljs.core.next(seq__35570_36236__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__35570_36222 = G__36246;
chunk__35571_36223 = G__36247;
count__35572_36224 = G__36248;
i__35573_36225 = G__36249;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35595 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(1),null);
var seq__35598_36253 = cljs.core.seq(node_children);
var chunk__35600_36254 = null;
var count__35601_36255 = (0);
var i__35602_36256 = (0);
while(true){
if((i__35602_36256 < count__35601_36255)){
var child_struct_36257 = chunk__35600_36254.cljs$core$IIndexed$_nth$arity$2(null,i__35602_36256);
if((!((child_struct_36257 == null)))){
if(typeof child_struct_36257 === 'string'){
var text_36258 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36258),child_struct_36257].join(''));
} else {
var children_36261 = shadow.dom.svg_node(child_struct_36257);
if(cljs.core.seq_QMARK_(children_36261)){
var seq__35619_36262 = cljs.core.seq(children_36261);
var chunk__35621_36263 = null;
var count__35622_36264 = (0);
var i__35623_36265 = (0);
while(true){
if((i__35623_36265 < count__35622_36264)){
var child_36266 = chunk__35621_36263.cljs$core$IIndexed$_nth$arity$2(null,i__35623_36265);
if(cljs.core.truth_(child_36266)){
node.appendChild(child_36266);


var G__36269 = seq__35619_36262;
var G__36270 = chunk__35621_36263;
var G__36271 = count__35622_36264;
var G__36272 = (i__35623_36265 + (1));
seq__35619_36262 = G__36269;
chunk__35621_36263 = G__36270;
count__35622_36264 = G__36271;
i__35623_36265 = G__36272;
continue;
} else {
var G__36273 = seq__35619_36262;
var G__36274 = chunk__35621_36263;
var G__36275 = count__35622_36264;
var G__36276 = (i__35623_36265 + (1));
seq__35619_36262 = G__36273;
chunk__35621_36263 = G__36274;
count__35622_36264 = G__36275;
i__35623_36265 = G__36276;
continue;
}
} else {
var temp__5753__auto___36277 = cljs.core.seq(seq__35619_36262);
if(temp__5753__auto___36277){
var seq__35619_36278__$1 = temp__5753__auto___36277;
if(cljs.core.chunked_seq_QMARK_(seq__35619_36278__$1)){
var c__4679__auto___36279 = cljs.core.chunk_first(seq__35619_36278__$1);
var G__36280 = cljs.core.chunk_rest(seq__35619_36278__$1);
var G__36281 = c__4679__auto___36279;
var G__36282 = cljs.core.count(c__4679__auto___36279);
var G__36283 = (0);
seq__35619_36262 = G__36280;
chunk__35621_36263 = G__36281;
count__35622_36264 = G__36282;
i__35623_36265 = G__36283;
continue;
} else {
var child_36284 = cljs.core.first(seq__35619_36278__$1);
if(cljs.core.truth_(child_36284)){
node.appendChild(child_36284);


var G__36286 = cljs.core.next(seq__35619_36278__$1);
var G__36287 = null;
var G__36288 = (0);
var G__36289 = (0);
seq__35619_36262 = G__36286;
chunk__35621_36263 = G__36287;
count__35622_36264 = G__36288;
i__35623_36265 = G__36289;
continue;
} else {
var G__36290 = cljs.core.next(seq__35619_36278__$1);
var G__36291 = null;
var G__36292 = (0);
var G__36293 = (0);
seq__35619_36262 = G__36290;
chunk__35621_36263 = G__36291;
count__35622_36264 = G__36292;
i__35623_36265 = G__36293;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36261);
}
}


var G__36295 = seq__35598_36253;
var G__36296 = chunk__35600_36254;
var G__36297 = count__35601_36255;
var G__36298 = (i__35602_36256 + (1));
seq__35598_36253 = G__36295;
chunk__35600_36254 = G__36296;
count__35601_36255 = G__36297;
i__35602_36256 = G__36298;
continue;
} else {
var G__36300 = seq__35598_36253;
var G__36301 = chunk__35600_36254;
var G__36302 = count__35601_36255;
var G__36303 = (i__35602_36256 + (1));
seq__35598_36253 = G__36300;
chunk__35600_36254 = G__36301;
count__35601_36255 = G__36302;
i__35602_36256 = G__36303;
continue;
}
} else {
var temp__5753__auto___36304 = cljs.core.seq(seq__35598_36253);
if(temp__5753__auto___36304){
var seq__35598_36310__$1 = temp__5753__auto___36304;
if(cljs.core.chunked_seq_QMARK_(seq__35598_36310__$1)){
var c__4679__auto___36311 = cljs.core.chunk_first(seq__35598_36310__$1);
var G__36312 = cljs.core.chunk_rest(seq__35598_36310__$1);
var G__36313 = c__4679__auto___36311;
var G__36314 = cljs.core.count(c__4679__auto___36311);
var G__36315 = (0);
seq__35598_36253 = G__36312;
chunk__35600_36254 = G__36313;
count__35601_36255 = G__36314;
i__35602_36256 = G__36315;
continue;
} else {
var child_struct_36316 = cljs.core.first(seq__35598_36310__$1);
if((!((child_struct_36316 == null)))){
if(typeof child_struct_36316 === 'string'){
var text_36317 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36317),child_struct_36316].join(''));
} else {
var children_36318 = shadow.dom.svg_node(child_struct_36316);
if(cljs.core.seq_QMARK_(children_36318)){
var seq__35628_36319 = cljs.core.seq(children_36318);
var chunk__35630_36320 = null;
var count__35631_36321 = (0);
var i__35632_36322 = (0);
while(true){
if((i__35632_36322 < count__35631_36321)){
var child_36323 = chunk__35630_36320.cljs$core$IIndexed$_nth$arity$2(null,i__35632_36322);
if(cljs.core.truth_(child_36323)){
node.appendChild(child_36323);


var G__36331 = seq__35628_36319;
var G__36332 = chunk__35630_36320;
var G__36333 = count__35631_36321;
var G__36334 = (i__35632_36322 + (1));
seq__35628_36319 = G__36331;
chunk__35630_36320 = G__36332;
count__35631_36321 = G__36333;
i__35632_36322 = G__36334;
continue;
} else {
var G__36335 = seq__35628_36319;
var G__36336 = chunk__35630_36320;
var G__36337 = count__35631_36321;
var G__36338 = (i__35632_36322 + (1));
seq__35628_36319 = G__36335;
chunk__35630_36320 = G__36336;
count__35631_36321 = G__36337;
i__35632_36322 = G__36338;
continue;
}
} else {
var temp__5753__auto___36339__$1 = cljs.core.seq(seq__35628_36319);
if(temp__5753__auto___36339__$1){
var seq__35628_36341__$1 = temp__5753__auto___36339__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35628_36341__$1)){
var c__4679__auto___36342 = cljs.core.chunk_first(seq__35628_36341__$1);
var G__36343 = cljs.core.chunk_rest(seq__35628_36341__$1);
var G__36344 = c__4679__auto___36342;
var G__36345 = cljs.core.count(c__4679__auto___36342);
var G__36346 = (0);
seq__35628_36319 = G__36343;
chunk__35630_36320 = G__36344;
count__35631_36321 = G__36345;
i__35632_36322 = G__36346;
continue;
} else {
var child_36347 = cljs.core.first(seq__35628_36341__$1);
if(cljs.core.truth_(child_36347)){
node.appendChild(child_36347);


var G__36348 = cljs.core.next(seq__35628_36341__$1);
var G__36349 = null;
var G__36350 = (0);
var G__36351 = (0);
seq__35628_36319 = G__36348;
chunk__35630_36320 = G__36349;
count__35631_36321 = G__36350;
i__35632_36322 = G__36351;
continue;
} else {
var G__36352 = cljs.core.next(seq__35628_36341__$1);
var G__36353 = null;
var G__36354 = (0);
var G__36355 = (0);
seq__35628_36319 = G__36352;
chunk__35630_36320 = G__36353;
count__35631_36321 = G__36354;
i__35632_36322 = G__36355;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36318);
}
}


var G__36356 = cljs.core.next(seq__35598_36310__$1);
var G__36357 = null;
var G__36358 = (0);
var G__36359 = (0);
seq__35598_36253 = G__36356;
chunk__35600_36254 = G__36357;
count__35601_36255 = G__36358;
i__35602_36256 = G__36359;
continue;
} else {
var G__36360 = cljs.core.next(seq__35598_36310__$1);
var G__36361 = null;
var G__36362 = (0);
var G__36363 = (0);
seq__35598_36253 = G__36360;
chunk__35600_36254 = G__36361;
count__35601_36255 = G__36362;
i__35602_36256 = G__36363;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36374 = arguments.length;
var i__4865__auto___36378 = (0);
while(true){
if((i__4865__auto___36378 < len__4864__auto___36374)){
args__4870__auto__.push((arguments[i__4865__auto___36378]));

var G__36379 = (i__4865__auto___36378 + (1));
i__4865__auto___36378 = G__36379;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35638){
var G__35639 = cljs.core.first(seq35638);
var seq35638__$1 = cljs.core.next(seq35638);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35639,seq35638__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35645 = arguments.length;
switch (G__35645) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32380__auto___36384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_35652){
var state_val_35653 = (state_35652[(1)]);
if((state_val_35653 === (1))){
var state_35652__$1 = state_35652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35652__$1,(2),once_or_cleanup);
} else {
if((state_val_35653 === (2))){
var inst_35649 = (state_35652[(2)]);
var inst_35650 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35652__$1 = (function (){var statearr_35658 = state_35652;
(statearr_35658[(7)] = inst_35649);

return statearr_35658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35652__$1,inst_35650);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32223__auto__ = null;
var shadow$dom$state_machine__32223__auto____0 = (function (){
var statearr_35659 = [null,null,null,null,null,null,null,null];
(statearr_35659[(0)] = shadow$dom$state_machine__32223__auto__);

(statearr_35659[(1)] = (1));

return statearr_35659;
});
var shadow$dom$state_machine__32223__auto____1 = (function (state_35652){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_35652);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e35660){var ex__32226__auto__ = e35660;
var statearr_35661_36392 = state_35652;
(statearr_35661_36392[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_35652[(4)]))){
var statearr_35662_36393 = state_35652;
(statearr_35662_36393[(1)] = cljs.core.first((state_35652[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36394 = state_35652;
state_35652 = G__36394;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
shadow$dom$state_machine__32223__auto__ = function(state_35652){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32223__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32223__auto____1.call(this,state_35652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32223__auto____0;
shadow$dom$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32223__auto____1;
return shadow$dom$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_35663 = f__32381__auto__();
(statearr_35663[(6)] = c__32380__auto___36384);

return statearr_35663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
