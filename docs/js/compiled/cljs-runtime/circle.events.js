goog.provide('circle.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("circle.events","initialize-db","circle.events/initialize-db",-459833003),(function (_,___$1){
return circle.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-circle","add-circle",-1463599910),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("Adding circle"),(function (db,p__29210){
var vec__29211 = p__29210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29211,(0),null);
var ci = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29211,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(db),ci));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-active-circle","set-active-circle",-2066894489),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("Setting active circle"),(function (db,p__29214){
var vec__29215 = p__29214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29215,(0),null);
var ci = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29215,(1),null);
circle.modal.modal_show();

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-circle","active-circle",-35352509)], null),ci);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"active-circle-changed","active-circle-changed",-1741663249),(function (db,p__29219){
var vec__29220 = p__29219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29220,(0),null);
var circle__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29220,(1),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29220,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29218_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__29218_SHARP_),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle__$1))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__29218_SHARP_),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle__$1))));
}),new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(circle__$1,new cljs.core.Keyword(null,"d","d",1972142424),size)));
}));

//# sourceMappingURL=circle.events.js.map
