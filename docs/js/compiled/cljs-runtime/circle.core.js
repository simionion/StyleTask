goog.provide('circle.core');
circle.core.dev_setup = (function circle$core$dev_setup(){
if(circle.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
circle.core.mount_root = (function circle$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [circle.views.main_panel], null),root_el);
});
circle.core.init = (function circle$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("circle.events","initialize-db","circle.events/initialize-db",-459833003)], null));

circle.core.dev_setup();

return circle.core.mount_root();
});

//# sourceMappingURL=circle.core.js.map
