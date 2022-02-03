goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__38263 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38264 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38264);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__38267 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38268 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38268);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38267);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38263);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__38279 = arguments.length;
switch (G__38279) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__38285 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38285,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38285,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__38298_38321 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38299_38322 = null;
var count__38300_38323 = (0);
var i__38301_38324 = (0);
while(true){
if((i__38301_38324 < count__38300_38323)){
var vec__38314_38325 = chunk__38299_38322.cljs$core$IIndexed$_nth$arity$2(null,i__38301_38324);
var container_38326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314_38325,(0),null);
var comp_38327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314_38325,(1),null);
reagent.dom.re_render_component(comp_38327,container_38326);


var G__38328 = seq__38298_38321;
var G__38329 = chunk__38299_38322;
var G__38330 = count__38300_38323;
var G__38331 = (i__38301_38324 + (1));
seq__38298_38321 = G__38328;
chunk__38299_38322 = G__38329;
count__38300_38323 = G__38330;
i__38301_38324 = G__38331;
continue;
} else {
var temp__5753__auto___38332 = cljs.core.seq(seq__38298_38321);
if(temp__5753__auto___38332){
var seq__38298_38333__$1 = temp__5753__auto___38332;
if(cljs.core.chunked_seq_QMARK_(seq__38298_38333__$1)){
var c__4679__auto___38334 = cljs.core.chunk_first(seq__38298_38333__$1);
var G__38335 = cljs.core.chunk_rest(seq__38298_38333__$1);
var G__38336 = c__4679__auto___38334;
var G__38337 = cljs.core.count(c__4679__auto___38334);
var G__38338 = (0);
seq__38298_38321 = G__38335;
chunk__38299_38322 = G__38336;
count__38300_38323 = G__38337;
i__38301_38324 = G__38338;
continue;
} else {
var vec__38317_38339 = cljs.core.first(seq__38298_38333__$1);
var container_38340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38317_38339,(0),null);
var comp_38341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38317_38339,(1),null);
reagent.dom.re_render_component(comp_38341,container_38340);


var G__38342 = cljs.core.next(seq__38298_38333__$1);
var G__38343 = null;
var G__38344 = (0);
var G__38345 = (0);
seq__38298_38321 = G__38342;
chunk__38299_38322 = G__38343;
count__38300_38323 = G__38344;
i__38301_38324 = G__38345;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
