goog.provide('rewrite_clj.zip.utils');
rewrite_clj.zip.utils.update_in_path = (function rewrite_clj$zip$utils$update_in_path(p__32593,k,f){
var vec__32594 = p__32593;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32594,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32594,(1),null);
var loc = vec__32594;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,k);
if(cljs.core.seq(v)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_right = (function rewrite_clj$zip$utils$remove_right(loc){
return rewrite_clj.zip.utils.update_in_path(loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_left = (function rewrite_clj$zip$utils$remove_left(loc){
return rewrite_clj.zip.utils.update_in_path(loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
});
rewrite_clj.zip.utils.remove_while = (function rewrite_clj$zip$utils$remove_while(zloc,p_QMARK_){

var zloc__$1 = zloc;
while(true){
var ploc = clojure.zip.prev(zloc__$1);
if(cljs.core.not((function (){var and__4251__auto__ = ploc;
if(cljs.core.truth_(and__4251__auto__)){
return (p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(ploc) : p_QMARK_.call(null,ploc));
} else {
return and__4251__auto__;
}
})())){
return zloc__$1;
} else {
var G__32634 = clojure.zip.remove(zloc__$1);
zloc__$1 = G__32634;
continue;
}
break;
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_right_while = (function rewrite_clj$zip$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5751__auto__ = clojure.zip.right(zloc__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var rloc = temp__5751__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(rloc) : p_QMARK_.call(null,rloc)))){
var G__32636 = rewrite_clj.zip.utils.remove_right(zloc__$1);
zloc__$1 = G__32636;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_left_while = (function rewrite_clj$zip$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5751__auto__ = clojure.zip.left(zloc__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var lloc = temp__5751__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(lloc) : p_QMARK_.call(null,lloc)))){
var G__32637 = rewrite_clj.zip.utils.remove_left(zloc__$1);
zloc__$1 = G__32637;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_left = (function rewrite_clj$zip$utils$remove_and_move_left(p__32608){
var vec__32609 = p__32608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32609,(0),null);
var map__32612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32609,(1),null);
var map__32612__$1 = cljs.core.__destructure_map(map__32612);
var path = map__32612__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32612__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var loc = vec__32609;
if(cljs.core.seq(l)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_right = (function rewrite_clj$zip$utils$remove_and_move_right(p__32617){
var vec__32618 = p__32617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32618,(0),null);
var map__32621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32618,(1),null);
var map__32621__$1 = cljs.core.__destructure_map(map__32621);
var path = map__32621__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32621__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var loc = vec__32618;
if(cljs.core.seq(r)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta(loc));
} else {
return null;
}
});
rewrite_clj.zip.utils.remove_and_move_up = (function rewrite_clj$zip$utils$remove_and_move_up(loc){
var vec__32625 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32625,(0),null);
var map__32628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32625,(1),null);
var map__32628__$1 = cljs.core.__destructure_map(map__32628);
var path = map__32628__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32628__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32628__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32628__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32628__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw (new Error("Remove at top"));
} else {
if((cljs.core.count(l) > (0))){
return clojure.zip.up(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc)));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__4251__auto__ = ppath;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__4251__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});

//# sourceMappingURL=rewrite_clj.zip.utils.js.map