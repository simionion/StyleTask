goog.provide('circle.modal');
circle.modal.shown_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
circle.modal.modal_show = (function circle$modal$modal_show(){
return cljs.core.reset_BANG_(circle.modal.shown_QMARK_,true);
});
circle.modal.modal_hide = (function circle$modal$modal_hide(){
return cljs.core.reset_BANG_(circle.modal.shown_QMARK_,false);
});
circle.modal.modal = (function circle$modal$modal(){
var circle__$1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-circle","active-circle",-35352509)], null)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.deref(circle.modal.shown_QMARK_))?"block":null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close","span.close",-217177185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),circle.modal.modal_hide], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),goog.string.format("Adjust diameter of circle at (%d, %d)",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"name","name",1843675177),"diameter",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$2(circle__$1,null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-circle-changed","active-circle-changed",-1741663249),circle__$1,event.target.value], null));
})], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),circle__$1], null));
});

//# sourceMappingURL=circle.modal.js.map
