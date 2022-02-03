goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32475 = arguments.length;
switch (G__32475) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32479 = (function (f,blockable,meta32480){
this.f = f;
this.blockable = blockable;
this.meta32480 = meta32480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32481,meta32480__$1){
var self__ = this;
var _32481__$1 = this;
return (new cljs.core.async.t_cljs$core$async32479(self__.f,self__.blockable,meta32480__$1));
}));

(cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32481){
var self__ = this;
var _32481__$1 = this;
return self__.meta32480;
}));

(cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32480","meta32480",-633868347,null)], null);
}));

(cljs.core.async.t_cljs$core$async32479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32479");

(cljs.core.async.t_cljs$core$async32479.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32479.
 */
cljs.core.async.__GT_t_cljs$core$async32479 = (function cljs$core$async$__GT_t_cljs$core$async32479(f__$1,blockable__$1,meta32480){
return (new cljs.core.async.t_cljs$core$async32479(f__$1,blockable__$1,meta32480));
});

}

return (new cljs.core.async.t_cljs$core$async32479(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32485 = arguments.length;
switch (G__32485) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32487 = arguments.length;
switch (G__32487) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32489 = arguments.length;
switch (G__32489) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34695 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34695) : fn1.call(null,val_34695));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34695) : fn1.call(null,val_34695));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32495 = arguments.length;
switch (G__32495) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34702 = n;
var x_34703 = (0);
while(true){
if((x_34703 < n__4741__auto___34702)){
(a[x_34703] = x_34703);

var G__34704 = (x_34703 + (1));
x_34703 = G__34704;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32508 = (function (flag,meta32509){
this.flag = flag;
this.meta32509 = meta32509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32510,meta32509__$1){
var self__ = this;
var _32510__$1 = this;
return (new cljs.core.async.t_cljs$core$async32508(self__.flag,meta32509__$1));
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32510){
var self__ = this;
var _32510__$1 = this;
return self__.meta32509;
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32509","meta32509",-973935690,null)], null);
}));

(cljs.core.async.t_cljs$core$async32508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32508");

(cljs.core.async.t_cljs$core$async32508.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32508.
 */
cljs.core.async.__GT_t_cljs$core$async32508 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32508(flag__$1,meta32509){
return (new cljs.core.async.t_cljs$core$async32508(flag__$1,meta32509));
});

}

return (new cljs.core.async.t_cljs$core$async32508(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32517 = (function (flag,cb,meta32518){
this.flag = flag;
this.cb = cb;
this.meta32518 = meta32518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32519,meta32518__$1){
var self__ = this;
var _32519__$1 = this;
return (new cljs.core.async.t_cljs$core$async32517(self__.flag,self__.cb,meta32518__$1));
}));

(cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32519){
var self__ = this;
var _32519__$1 = this;
return self__.meta32518;
}));

(cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32518","meta32518",-1117070344,null)], null);
}));

(cljs.core.async.t_cljs$core$async32517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32517");

(cljs.core.async.t_cljs$core$async32517.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32517.
 */
cljs.core.async.__GT_t_cljs$core$async32517 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32517(flag__$1,cb__$1,meta32518){
return (new cljs.core.async.t_cljs$core$async32517(flag__$1,cb__$1,meta32518));
});

}

return (new cljs.core.async.t_cljs$core$async32517(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32524_SHARP_){
var G__32526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32524_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32526) : fret.call(null,G__32526));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32525_SHARP_){
var G__32527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32525_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32527) : fret.call(null,G__32527));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34706 = (i + (1));
i = G__34706;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34709 = arguments.length;
var i__4865__auto___34710 = (0);
while(true){
if((i__4865__auto___34710 < len__4864__auto___34709)){
args__4870__auto__.push((arguments[i__4865__auto___34710]));

var G__34711 = (i__4865__auto___34710 + (1));
i__4865__auto___34710 = G__34711;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32530){
var map__32531 = p__32530;
var map__32531__$1 = cljs.core.__destructure_map(map__32531);
var opts = map__32531__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32528){
var G__32529 = cljs.core.first(seq32528);
var seq32528__$1 = cljs.core.next(seq32528);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32529,seq32528__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32533 = arguments.length;
switch (G__32533) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32380__auto___34715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_32566){
var state_val_32567 = (state_32566[(1)]);
if((state_val_32567 === (7))){
var inst_32562 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32573_34716 = state_32566__$1;
(statearr_32573_34716[(2)] = inst_32562);

(statearr_32573_34716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (1))){
var state_32566__$1 = state_32566;
var statearr_32574_34717 = state_32566__$1;
(statearr_32574_34717[(2)] = null);

(statearr_32574_34717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (4))){
var inst_32542 = (state_32566[(7)]);
var inst_32542__$1 = (state_32566[(2)]);
var inst_32544 = (inst_32542__$1 == null);
var state_32566__$1 = (function (){var statearr_32575 = state_32566;
(statearr_32575[(7)] = inst_32542__$1);

return statearr_32575;
})();
if(cljs.core.truth_(inst_32544)){
var statearr_32576_34718 = state_32566__$1;
(statearr_32576_34718[(1)] = (5));

} else {
var statearr_32577_34719 = state_32566__$1;
(statearr_32577_34719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (13))){
var state_32566__$1 = state_32566;
var statearr_32578_34720 = state_32566__$1;
(statearr_32578_34720[(2)] = null);

(statearr_32578_34720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (6))){
var inst_32542 = (state_32566[(7)]);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32566__$1,(11),to,inst_32542);
} else {
if((state_val_32567 === (3))){
var inst_32564 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32566__$1,inst_32564);
} else {
if((state_val_32567 === (12))){
var state_32566__$1 = state_32566;
var statearr_32579_34722 = state_32566__$1;
(statearr_32579_34722[(2)] = null);

(statearr_32579_34722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (2))){
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32566__$1,(4),from);
} else {
if((state_val_32567 === (11))){
var inst_32554 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
if(cljs.core.truth_(inst_32554)){
var statearr_32580_34724 = state_32566__$1;
(statearr_32580_34724[(1)] = (12));

} else {
var statearr_32581_34725 = state_32566__$1;
(statearr_32581_34725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (9))){
var state_32566__$1 = state_32566;
var statearr_32582_34726 = state_32566__$1;
(statearr_32582_34726[(2)] = null);

(statearr_32582_34726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (5))){
var state_32566__$1 = state_32566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32587_34727 = state_32566__$1;
(statearr_32587_34727[(1)] = (8));

} else {
var statearr_32588_34728 = state_32566__$1;
(statearr_32588_34728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (14))){
var inst_32560 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32589_34729 = state_32566__$1;
(statearr_32589_34729[(2)] = inst_32560);

(statearr_32589_34729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (10))){
var inst_32551 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32590_34730 = state_32566__$1;
(statearr_32590_34730[(2)] = inst_32551);

(statearr_32590_34730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (8))){
var inst_32548 = cljs.core.async.close_BANG_(to);
var state_32566__$1 = state_32566;
var statearr_32591_34731 = state_32566__$1;
(statearr_32591_34731[(2)] = inst_32548);

(statearr_32591_34731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_32592 = [null,null,null,null,null,null,null,null];
(statearr_32592[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_32592[(1)] = (1));

return statearr_32592;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_32566){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_32566);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e32593){var ex__32226__auto__ = e32593;
var statearr_32594_34732 = state_32566;
(statearr_32594_34732[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_32566[(4)]))){
var statearr_32595_34733 = state_32566;
(statearr_32595_34733[(1)] = cljs.core.first((state_32566[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34735 = state_32566;
state_32566 = G__34735;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_32566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_32566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_32596 = f__32381__auto__();
(statearr_32596[(6)] = c__32380__auto___34715);

return statearr_32596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32601){
var vec__32602 = p__32601;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32602,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32602,(1),null);
var job = vec__32602;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32380__auto___34737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_32609){
var state_val_32610 = (state_32609[(1)]);
if((state_val_32610 === (1))){
var state_32609__$1 = state_32609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32609__$1,(2),res,v);
} else {
if((state_val_32610 === (2))){
var inst_32606 = (state_32609[(2)]);
var inst_32607 = cljs.core.async.close_BANG_(res);
var state_32609__$1 = (function (){var statearr_32611 = state_32609;
(statearr_32611[(7)] = inst_32606);

return statearr_32611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32609__$1,inst_32607);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0 = (function (){
var statearr_32612 = [null,null,null,null,null,null,null,null];
(statearr_32612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__);

(statearr_32612[(1)] = (1));

return statearr_32612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1 = (function (state_32609){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_32609);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e32613){var ex__32226__auto__ = e32613;
var statearr_32614_34746 = state_32609;
(statearr_32614_34746[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_32609[(4)]))){
var statearr_32615_34750 = state_32609;
(statearr_32615_34750[(1)] = cljs.core.first((state_32609[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34751 = state_32609;
state_32609 = G__34751;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = function(state_32609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1.call(this,state_32609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_32616 = f__32381__auto__();
(statearr_32616[(6)] = c__32380__auto___34737);

return statearr_32616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32617){
var vec__32618 = p__32617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32618,(1),null);
var job = vec__32618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34754 = n;
var __34755 = (0);
while(true){
if((__34755 < n__4741__auto___34754)){
var G__32621_34756 = type;
var G__32621_34757__$1 = (((G__32621_34756 instanceof cljs.core.Keyword))?G__32621_34756.fqn:null);
switch (G__32621_34757__$1) {
case "compute":
var c__32380__auto___34759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34755,c__32380__auto___34759,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async){
return (function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = ((function (__34755,c__32380__auto___34759,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async){
return (function (state_32634){
var state_val_32635 = (state_32634[(1)]);
if((state_val_32635 === (1))){
var state_32634__$1 = state_32634;
var statearr_32636_34760 = state_32634__$1;
(statearr_32636_34760[(2)] = null);

(statearr_32636_34760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (2))){
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32634__$1,(4),jobs);
} else {
if((state_val_32635 === (3))){
var inst_32632 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32634__$1,inst_32632);
} else {
if((state_val_32635 === (4))){
var inst_32624 = (state_32634[(2)]);
var inst_32625 = process(inst_32624);
var state_32634__$1 = state_32634;
if(cljs.core.truth_(inst_32625)){
var statearr_32637_34761 = state_32634__$1;
(statearr_32637_34761[(1)] = (5));

} else {
var statearr_32638_34762 = state_32634__$1;
(statearr_32638_34762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (5))){
var state_32634__$1 = state_32634;
var statearr_32639_34763 = state_32634__$1;
(statearr_32639_34763[(2)] = null);

(statearr_32639_34763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (6))){
var state_32634__$1 = state_32634;
var statearr_32640_34764 = state_32634__$1;
(statearr_32640_34764[(2)] = null);

(statearr_32640_34764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (7))){
var inst_32630 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32641_34765 = state_32634__$1;
(statearr_32641_34765[(2)] = inst_32630);

(statearr_32641_34765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34755,c__32380__auto___34759,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async))
;
return ((function (__34755,switch__32222__auto__,c__32380__auto___34759,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0 = (function (){
var statearr_32642 = [null,null,null,null,null,null,null];
(statearr_32642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__);

(statearr_32642[(1)] = (1));

return statearr_32642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1 = (function (state_32634){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_32634);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e32643){var ex__32226__auto__ = e32643;
var statearr_32644_34766 = state_32634;
(statearr_32644_34766[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_32634[(4)]))){
var statearr_32645_34767 = state_32634;
(statearr_32645_34767[(1)] = cljs.core.first((state_32634[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34768 = state_32634;
state_32634 = G__34768;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = function(state_32634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1.call(this,state_32634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__;
})()
;})(__34755,switch__32222__auto__,c__32380__auto___34759,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async))
})();
var state__32382__auto__ = (function (){var statearr_32646 = f__32381__auto__();
(statearr_32646[(6)] = c__32380__auto___34759);

return statearr_32646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
});})(__34755,c__32380__auto___34759,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async))
);


break;
case "async":
var c__32380__auto___34769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34755,c__32380__auto___34769,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async){
return (function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = ((function (__34755,c__32380__auto___34769,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async){
return (function (state_32661){
var state_val_32662 = (state_32661[(1)]);
if((state_val_32662 === (1))){
var state_32661__$1 = state_32661;
var statearr_32663_34772 = state_32661__$1;
(statearr_32663_34772[(2)] = null);

(statearr_32663_34772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (2))){
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32661__$1,(4),jobs);
} else {
if((state_val_32662 === (3))){
var inst_32659 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32661__$1,inst_32659);
} else {
if((state_val_32662 === (4))){
var inst_32651 = (state_32661[(2)]);
var inst_32652 = async(inst_32651);
var state_32661__$1 = state_32661;
if(cljs.core.truth_(inst_32652)){
var statearr_32665_34773 = state_32661__$1;
(statearr_32665_34773[(1)] = (5));

} else {
var statearr_32666_34774 = state_32661__$1;
(statearr_32666_34774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (5))){
var state_32661__$1 = state_32661;
var statearr_32668_34775 = state_32661__$1;
(statearr_32668_34775[(2)] = null);

(statearr_32668_34775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (6))){
var state_32661__$1 = state_32661;
var statearr_32671_34776 = state_32661__$1;
(statearr_32671_34776[(2)] = null);

(statearr_32671_34776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (7))){
var inst_32657 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32673_34777 = state_32661__$1;
(statearr_32673_34777[(2)] = inst_32657);

(statearr_32673_34777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34755,c__32380__auto___34769,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async))
;
return ((function (__34755,switch__32222__auto__,c__32380__auto___34769,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0 = (function (){
var statearr_32681 = [null,null,null,null,null,null,null];
(statearr_32681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__);

(statearr_32681[(1)] = (1));

return statearr_32681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1 = (function (state_32661){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_32661);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e32682){var ex__32226__auto__ = e32682;
var statearr_32683_34778 = state_32661;
(statearr_32683_34778[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_32661[(4)]))){
var statearr_32684_34779 = state_32661;
(statearr_32684_34779[(1)] = cljs.core.first((state_32661[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34780 = state_32661;
state_32661 = G__34780;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = function(state_32661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1.call(this,state_32661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__;
})()
;})(__34755,switch__32222__auto__,c__32380__auto___34769,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async))
})();
var state__32382__auto__ = (function (){var statearr_32688 = f__32381__auto__();
(statearr_32688[(6)] = c__32380__auto___34769);

return statearr_32688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
});})(__34755,c__32380__auto___34769,G__32621_34756,G__32621_34757__$1,n__4741__auto___34754,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32621_34757__$1)].join('')));

}

var G__34781 = (__34755 + (1));
__34755 = G__34781;
continue;
} else {
}
break;
}

var c__32380__auto___34782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_32716){
var state_val_32717 = (state_32716[(1)]);
if((state_val_32717 === (7))){
var inst_32712 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
var statearr_32718_34783 = state_32716__$1;
(statearr_32718_34783[(2)] = inst_32712);

(statearr_32718_34783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (1))){
var state_32716__$1 = state_32716;
var statearr_32719_34785 = state_32716__$1;
(statearr_32719_34785[(2)] = null);

(statearr_32719_34785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (4))){
var inst_32694 = (state_32716[(7)]);
var inst_32694__$1 = (state_32716[(2)]);
var inst_32695 = (inst_32694__$1 == null);
var state_32716__$1 = (function (){var statearr_32721 = state_32716;
(statearr_32721[(7)] = inst_32694__$1);

return statearr_32721;
})();
if(cljs.core.truth_(inst_32695)){
var statearr_32723_34786 = state_32716__$1;
(statearr_32723_34786[(1)] = (5));

} else {
var statearr_32724_34787 = state_32716__$1;
(statearr_32724_34787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (6))){
var inst_32694 = (state_32716[(7)]);
var inst_32699 = (state_32716[(8)]);
var inst_32699__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32704 = [inst_32694,inst_32699__$1];
var inst_32705 = (new cljs.core.PersistentVector(null,2,(5),inst_32700,inst_32704,null));
var state_32716__$1 = (function (){var statearr_32725 = state_32716;
(statearr_32725[(8)] = inst_32699__$1);

return statearr_32725;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32716__$1,(8),jobs,inst_32705);
} else {
if((state_val_32717 === (3))){
var inst_32714 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32716__$1,inst_32714);
} else {
if((state_val_32717 === (2))){
var state_32716__$1 = state_32716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32716__$1,(4),from);
} else {
if((state_val_32717 === (9))){
var inst_32709 = (state_32716[(2)]);
var state_32716__$1 = (function (){var statearr_32726 = state_32716;
(statearr_32726[(9)] = inst_32709);

return statearr_32726;
})();
var statearr_32727_34788 = state_32716__$1;
(statearr_32727_34788[(2)] = null);

(statearr_32727_34788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (5))){
var inst_32697 = cljs.core.async.close_BANG_(jobs);
var state_32716__$1 = state_32716;
var statearr_32728_34789 = state_32716__$1;
(statearr_32728_34789[(2)] = inst_32697);

(statearr_32728_34789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (8))){
var inst_32699 = (state_32716[(8)]);
var inst_32707 = (state_32716[(2)]);
var state_32716__$1 = (function (){var statearr_32729 = state_32716;
(statearr_32729[(10)] = inst_32707);

return statearr_32729;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32716__$1,(9),results,inst_32699);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0 = (function (){
var statearr_32733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__);

(statearr_32733[(1)] = (1));

return statearr_32733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1 = (function (state_32716){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_32716);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e32734){var ex__32226__auto__ = e32734;
var statearr_32735_34796 = state_32716;
(statearr_32735_34796[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_32716[(4)]))){
var statearr_32736_34797 = state_32716;
(statearr_32736_34797[(1)] = cljs.core.first((state_32716[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34798 = state_32716;
state_32716 = G__34798;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = function(state_32716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1.call(this,state_32716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_32737 = f__32381__auto__();
(statearr_32737[(6)] = c__32380__auto___34782);

return statearr_32737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


var c__32380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_32775){
var state_val_32776 = (state_32775[(1)]);
if((state_val_32776 === (7))){
var inst_32771 = (state_32775[(2)]);
var state_32775__$1 = state_32775;
var statearr_32777_34801 = state_32775__$1;
(statearr_32777_34801[(2)] = inst_32771);

(statearr_32777_34801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (20))){
var state_32775__$1 = state_32775;
var statearr_32778_34802 = state_32775__$1;
(statearr_32778_34802[(2)] = null);

(statearr_32778_34802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (1))){
var state_32775__$1 = state_32775;
var statearr_32779_34803 = state_32775__$1;
(statearr_32779_34803[(2)] = null);

(statearr_32779_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (4))){
var inst_32740 = (state_32775[(7)]);
var inst_32740__$1 = (state_32775[(2)]);
var inst_32741 = (inst_32740__$1 == null);
var state_32775__$1 = (function (){var statearr_32780 = state_32775;
(statearr_32780[(7)] = inst_32740__$1);

return statearr_32780;
})();
if(cljs.core.truth_(inst_32741)){
var statearr_32781_34804 = state_32775__$1;
(statearr_32781_34804[(1)] = (5));

} else {
var statearr_32782_34805 = state_32775__$1;
(statearr_32782_34805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (15))){
var inst_32753 = (state_32775[(8)]);
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32775__$1,(18),to,inst_32753);
} else {
if((state_val_32776 === (21))){
var inst_32766 = (state_32775[(2)]);
var state_32775__$1 = state_32775;
var statearr_32783_34807 = state_32775__$1;
(statearr_32783_34807[(2)] = inst_32766);

(statearr_32783_34807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (13))){
var inst_32768 = (state_32775[(2)]);
var state_32775__$1 = (function (){var statearr_32784 = state_32775;
(statearr_32784[(9)] = inst_32768);

return statearr_32784;
})();
var statearr_32785_34809 = state_32775__$1;
(statearr_32785_34809[(2)] = null);

(statearr_32785_34809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (6))){
var inst_32740 = (state_32775[(7)]);
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32775__$1,(11),inst_32740);
} else {
if((state_val_32776 === (17))){
var inst_32761 = (state_32775[(2)]);
var state_32775__$1 = state_32775;
if(cljs.core.truth_(inst_32761)){
var statearr_32786_34810 = state_32775__$1;
(statearr_32786_34810[(1)] = (19));

} else {
var statearr_32787_34811 = state_32775__$1;
(statearr_32787_34811[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (3))){
var inst_32773 = (state_32775[(2)]);
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32775__$1,inst_32773);
} else {
if((state_val_32776 === (12))){
var inst_32750 = (state_32775[(10)]);
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32775__$1,(14),inst_32750);
} else {
if((state_val_32776 === (2))){
var state_32775__$1 = state_32775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32775__$1,(4),results);
} else {
if((state_val_32776 === (19))){
var state_32775__$1 = state_32775;
var statearr_32788_34812 = state_32775__$1;
(statearr_32788_34812[(2)] = null);

(statearr_32788_34812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (11))){
var inst_32750 = (state_32775[(2)]);
var state_32775__$1 = (function (){var statearr_32789 = state_32775;
(statearr_32789[(10)] = inst_32750);

return statearr_32789;
})();
var statearr_32790_34813 = state_32775__$1;
(statearr_32790_34813[(2)] = null);

(statearr_32790_34813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (9))){
var state_32775__$1 = state_32775;
var statearr_32791_34814 = state_32775__$1;
(statearr_32791_34814[(2)] = null);

(statearr_32791_34814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (5))){
var state_32775__$1 = state_32775;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32792_34816 = state_32775__$1;
(statearr_32792_34816[(1)] = (8));

} else {
var statearr_32794_34818 = state_32775__$1;
(statearr_32794_34818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (14))){
var inst_32755 = (state_32775[(11)]);
var inst_32753 = (state_32775[(8)]);
var inst_32753__$1 = (state_32775[(2)]);
var inst_32754 = (inst_32753__$1 == null);
var inst_32755__$1 = cljs.core.not(inst_32754);
var state_32775__$1 = (function (){var statearr_32795 = state_32775;
(statearr_32795[(11)] = inst_32755__$1);

(statearr_32795[(8)] = inst_32753__$1);

return statearr_32795;
})();
if(inst_32755__$1){
var statearr_32796_34819 = state_32775__$1;
(statearr_32796_34819[(1)] = (15));

} else {
var statearr_32797_34820 = state_32775__$1;
(statearr_32797_34820[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (16))){
var inst_32755 = (state_32775[(11)]);
var state_32775__$1 = state_32775;
var statearr_32798_34821 = state_32775__$1;
(statearr_32798_34821[(2)] = inst_32755);

(statearr_32798_34821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (10))){
var inst_32747 = (state_32775[(2)]);
var state_32775__$1 = state_32775;
var statearr_32799_34823 = state_32775__$1;
(statearr_32799_34823[(2)] = inst_32747);

(statearr_32799_34823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (18))){
var inst_32758 = (state_32775[(2)]);
var state_32775__$1 = state_32775;
var statearr_32800_34824 = state_32775__$1;
(statearr_32800_34824[(2)] = inst_32758);

(statearr_32800_34824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32776 === (8))){
var inst_32744 = cljs.core.async.close_BANG_(to);
var state_32775__$1 = state_32775;
var statearr_32801_34826 = state_32775__$1;
(statearr_32801_34826[(2)] = inst_32744);

(statearr_32801_34826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0 = (function (){
var statearr_32802 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__);

(statearr_32802[(1)] = (1));

return statearr_32802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1 = (function (state_32775){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_32775);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e32803){var ex__32226__auto__ = e32803;
var statearr_32804_34827 = state_32775;
(statearr_32804_34827[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_32775[(4)]))){
var statearr_32805_34828 = state_32775;
(statearr_32805_34828[(1)] = cljs.core.first((state_32775[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34829 = state_32775;
state_32775 = G__34829;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__ = function(state_32775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1.call(this,state_32775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_32806 = f__32381__auto__();
(statearr_32806[(6)] = c__32380__auto__);

return statearr_32806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));

return c__32380__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32808 = arguments.length;
switch (G__32808) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32810 = arguments.length;
switch (G__32810) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32816 = arguments.length;
switch (G__32816) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32380__auto___34840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_32842){
var state_val_32843 = (state_32842[(1)]);
if((state_val_32843 === (7))){
var inst_32838 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
var statearr_32852_34841 = state_32842__$1;
(statearr_32852_34841[(2)] = inst_32838);

(statearr_32852_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (1))){
var state_32842__$1 = state_32842;
var statearr_32857_34842 = state_32842__$1;
(statearr_32857_34842[(2)] = null);

(statearr_32857_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (4))){
var inst_32819 = (state_32842[(7)]);
var inst_32819__$1 = (state_32842[(2)]);
var inst_32820 = (inst_32819__$1 == null);
var state_32842__$1 = (function (){var statearr_32861 = state_32842;
(statearr_32861[(7)] = inst_32819__$1);

return statearr_32861;
})();
if(cljs.core.truth_(inst_32820)){
var statearr_32867_34843 = state_32842__$1;
(statearr_32867_34843[(1)] = (5));

} else {
var statearr_32870_34844 = state_32842__$1;
(statearr_32870_34844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (13))){
var state_32842__$1 = state_32842;
var statearr_32876_34848 = state_32842__$1;
(statearr_32876_34848[(2)] = null);

(statearr_32876_34848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (6))){
var inst_32819 = (state_32842[(7)]);
var inst_32825 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32819) : p.call(null,inst_32819));
var state_32842__$1 = state_32842;
if(cljs.core.truth_(inst_32825)){
var statearr_32877_34849 = state_32842__$1;
(statearr_32877_34849[(1)] = (9));

} else {
var statearr_32878_34850 = state_32842__$1;
(statearr_32878_34850[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (3))){
var inst_32840 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32842__$1,inst_32840);
} else {
if((state_val_32843 === (12))){
var state_32842__$1 = state_32842;
var statearr_32882_34854 = state_32842__$1;
(statearr_32882_34854[(2)] = null);

(statearr_32882_34854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (2))){
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32842__$1,(4),ch);
} else {
if((state_val_32843 === (11))){
var inst_32819 = (state_32842[(7)]);
var inst_32829 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32842__$1,(8),inst_32829,inst_32819);
} else {
if((state_val_32843 === (9))){
var state_32842__$1 = state_32842;
var statearr_32883_34858 = state_32842__$1;
(statearr_32883_34858[(2)] = tc);

(statearr_32883_34858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (5))){
var inst_32822 = cljs.core.async.close_BANG_(tc);
var inst_32823 = cljs.core.async.close_BANG_(fc);
var state_32842__$1 = (function (){var statearr_32884 = state_32842;
(statearr_32884[(8)] = inst_32822);

return statearr_32884;
})();
var statearr_32885_34859 = state_32842__$1;
(statearr_32885_34859[(2)] = inst_32823);

(statearr_32885_34859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (14))){
var inst_32836 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
var statearr_32888_34863 = state_32842__$1;
(statearr_32888_34863[(2)] = inst_32836);

(statearr_32888_34863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (10))){
var state_32842__$1 = state_32842;
var statearr_32890_34864 = state_32842__$1;
(statearr_32890_34864[(2)] = fc);

(statearr_32890_34864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (8))){
var inst_32831 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
if(cljs.core.truth_(inst_32831)){
var statearr_32901_34865 = state_32842__$1;
(statearr_32901_34865[(1)] = (12));

} else {
var statearr_32902_34866 = state_32842__$1;
(statearr_32902_34866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_32903 = [null,null,null,null,null,null,null,null,null];
(statearr_32903[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_32903[(1)] = (1));

return statearr_32903;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_32842){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_32842);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e32904){var ex__32226__auto__ = e32904;
var statearr_32905_34867 = state_32842;
(statearr_32905_34867[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_32842[(4)]))){
var statearr_32906_34868 = state_32842;
(statearr_32906_34868[(1)] = cljs.core.first((state_32842[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34873 = state_32842;
state_32842 = G__34873;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_32842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_32842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_32912 = f__32381__auto__();
(statearr_32912[(6)] = c__32380__auto___34840);

return statearr_32912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_32972){
var state_val_32973 = (state_32972[(1)]);
if((state_val_32973 === (7))){
var inst_32968 = (state_32972[(2)]);
var state_32972__$1 = state_32972;
var statearr_32999_34877 = state_32972__$1;
(statearr_32999_34877[(2)] = inst_32968);

(statearr_32999_34877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (1))){
var inst_32941 = init;
var inst_32943 = inst_32941;
var state_32972__$1 = (function (){var statearr_33001 = state_32972;
(statearr_33001[(7)] = inst_32943);

return statearr_33001;
})();
var statearr_33002_34878 = state_32972__$1;
(statearr_33002_34878[(2)] = null);

(statearr_33002_34878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (4))){
var inst_32951 = (state_32972[(8)]);
var inst_32951__$1 = (state_32972[(2)]);
var inst_32956 = (inst_32951__$1 == null);
var state_32972__$1 = (function (){var statearr_33003 = state_32972;
(statearr_33003[(8)] = inst_32951__$1);

return statearr_33003;
})();
if(cljs.core.truth_(inst_32956)){
var statearr_33004_34879 = state_32972__$1;
(statearr_33004_34879[(1)] = (5));

} else {
var statearr_33005_34883 = state_32972__$1;
(statearr_33005_34883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (6))){
var inst_32943 = (state_32972[(7)]);
var inst_32951 = (state_32972[(8)]);
var inst_32959 = (state_32972[(9)]);
var inst_32959__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32943,inst_32951) : f.call(null,inst_32943,inst_32951));
var inst_32960 = cljs.core.reduced_QMARK_(inst_32959__$1);
var state_32972__$1 = (function (){var statearr_33024 = state_32972;
(statearr_33024[(9)] = inst_32959__$1);

return statearr_33024;
})();
if(inst_32960){
var statearr_33025_34887 = state_32972__$1;
(statearr_33025_34887[(1)] = (8));

} else {
var statearr_33026_34892 = state_32972__$1;
(statearr_33026_34892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (3))){
var inst_32970 = (state_32972[(2)]);
var state_32972__$1 = state_32972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32972__$1,inst_32970);
} else {
if((state_val_32973 === (2))){
var state_32972__$1 = state_32972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32972__$1,(4),ch);
} else {
if((state_val_32973 === (9))){
var inst_32959 = (state_32972[(9)]);
var inst_32943 = inst_32959;
var state_32972__$1 = (function (){var statearr_33027 = state_32972;
(statearr_33027[(7)] = inst_32943);

return statearr_33027;
})();
var statearr_33028_34899 = state_32972__$1;
(statearr_33028_34899[(2)] = null);

(statearr_33028_34899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (5))){
var inst_32943 = (state_32972[(7)]);
var state_32972__$1 = state_32972;
var statearr_33033_34903 = state_32972__$1;
(statearr_33033_34903[(2)] = inst_32943);

(statearr_33033_34903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (10))){
var inst_32966 = (state_32972[(2)]);
var state_32972__$1 = state_32972;
var statearr_33034_34904 = state_32972__$1;
(statearr_33034_34904[(2)] = inst_32966);

(statearr_33034_34904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (8))){
var inst_32959 = (state_32972[(9)]);
var inst_32962 = cljs.core.deref(inst_32959);
var state_32972__$1 = state_32972;
var statearr_33042_34905 = state_32972__$1;
(statearr_33042_34905[(2)] = inst_32962);

(statearr_33042_34905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32223__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32223__auto____0 = (function (){
var statearr_33043 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33043[(0)] = cljs$core$async$reduce_$_state_machine__32223__auto__);

(statearr_33043[(1)] = (1));

return statearr_33043;
});
var cljs$core$async$reduce_$_state_machine__32223__auto____1 = (function (state_32972){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_32972);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e33044){var ex__32226__auto__ = e33044;
var statearr_33045_34909 = state_32972;
(statearr_33045_34909[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_32972[(4)]))){
var statearr_33046_34910 = state_32972;
(statearr_33046_34910[(1)] = cljs.core.first((state_32972[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34911 = state_32972;
state_32972 = G__34911;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32223__auto__ = function(state_32972){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32223__auto____1.call(this,state_32972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32223__auto____0;
cljs$core$async$reduce_$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32223__auto____1;
return cljs$core$async$reduce_$_state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_33047 = f__32381__auto__();
(statearr_33047[(6)] = c__32380__auto__);

return statearr_33047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));

return c__32380__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_33053){
var state_val_33054 = (state_33053[(1)]);
if((state_val_33054 === (1))){
var inst_33048 = cljs.core.async.reduce(f__$1,init,ch);
var state_33053__$1 = state_33053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33053__$1,(2),inst_33048);
} else {
if((state_val_33054 === (2))){
var inst_33050 = (state_33053[(2)]);
var inst_33051 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33050) : f__$1.call(null,inst_33050));
var state_33053__$1 = state_33053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33053__$1,inst_33051);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32223__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32223__auto____0 = (function (){
var statearr_33059 = [null,null,null,null,null,null,null];
(statearr_33059[(0)] = cljs$core$async$transduce_$_state_machine__32223__auto__);

(statearr_33059[(1)] = (1));

return statearr_33059;
});
var cljs$core$async$transduce_$_state_machine__32223__auto____1 = (function (state_33053){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_33053);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e33060){var ex__32226__auto__ = e33060;
var statearr_33061_34923 = state_33053;
(statearr_33061_34923[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_33053[(4)]))){
var statearr_33062_34924 = state_33053;
(statearr_33062_34924[(1)] = cljs.core.first((state_33053[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34925 = state_33053;
state_33053 = G__34925;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32223__auto__ = function(state_33053){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32223__auto____1.call(this,state_33053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32223__auto____0;
cljs$core$async$transduce_$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32223__auto____1;
return cljs$core$async$transduce_$_state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_33064 = f__32381__auto__();
(statearr_33064[(6)] = c__32380__auto__);

return statearr_33064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));

return c__32380__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33066 = arguments.length;
switch (G__33066) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_33095){
var state_val_33096 = (state_33095[(1)]);
if((state_val_33096 === (7))){
var inst_33077 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
var statearr_33105_34934 = state_33095__$1;
(statearr_33105_34934[(2)] = inst_33077);

(statearr_33105_34934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (1))){
var inst_33071 = cljs.core.seq(coll);
var inst_33072 = inst_33071;
var state_33095__$1 = (function (){var statearr_33106 = state_33095;
(statearr_33106[(7)] = inst_33072);

return statearr_33106;
})();
var statearr_33107_34938 = state_33095__$1;
(statearr_33107_34938[(2)] = null);

(statearr_33107_34938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (4))){
var inst_33072 = (state_33095[(7)]);
var inst_33075 = cljs.core.first(inst_33072);
var state_33095__$1 = state_33095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33095__$1,(7),ch,inst_33075);
} else {
if((state_val_33096 === (13))){
var inst_33089 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
var statearr_33109_34939 = state_33095__$1;
(statearr_33109_34939[(2)] = inst_33089);

(statearr_33109_34939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (6))){
var inst_33080 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
if(cljs.core.truth_(inst_33080)){
var statearr_33111_34940 = state_33095__$1;
(statearr_33111_34940[(1)] = (8));

} else {
var statearr_33112_34941 = state_33095__$1;
(statearr_33112_34941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (3))){
var inst_33093 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33095__$1,inst_33093);
} else {
if((state_val_33096 === (12))){
var state_33095__$1 = state_33095;
var statearr_33113_34945 = state_33095__$1;
(statearr_33113_34945[(2)] = null);

(statearr_33113_34945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (2))){
var inst_33072 = (state_33095[(7)]);
var state_33095__$1 = state_33095;
if(cljs.core.truth_(inst_33072)){
var statearr_33115_34946 = state_33095__$1;
(statearr_33115_34946[(1)] = (4));

} else {
var statearr_33116_34947 = state_33095__$1;
(statearr_33116_34947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (11))){
var inst_33086 = cljs.core.async.close_BANG_(ch);
var state_33095__$1 = state_33095;
var statearr_33117_34952 = state_33095__$1;
(statearr_33117_34952[(2)] = inst_33086);

(statearr_33117_34952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (9))){
var state_33095__$1 = state_33095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33118_34953 = state_33095__$1;
(statearr_33118_34953[(1)] = (11));

} else {
var statearr_33119_34954 = state_33095__$1;
(statearr_33119_34954[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (5))){
var inst_33072 = (state_33095[(7)]);
var state_33095__$1 = state_33095;
var statearr_33120_34955 = state_33095__$1;
(statearr_33120_34955[(2)] = inst_33072);

(statearr_33120_34955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (10))){
var inst_33091 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
var statearr_33121_34956 = state_33095__$1;
(statearr_33121_34956[(2)] = inst_33091);

(statearr_33121_34956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (8))){
var inst_33072 = (state_33095[(7)]);
var inst_33082 = cljs.core.next(inst_33072);
var inst_33072__$1 = inst_33082;
var state_33095__$1 = (function (){var statearr_33123 = state_33095;
(statearr_33123[(7)] = inst_33072__$1);

return statearr_33123;
})();
var statearr_33124_34957 = state_33095__$1;
(statearr_33124_34957[(2)] = null);

(statearr_33124_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_33126 = [null,null,null,null,null,null,null,null];
(statearr_33126[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_33126[(1)] = (1));

return statearr_33126;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_33095){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_33095);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e33128){var ex__32226__auto__ = e33128;
var statearr_33129_34960 = state_33095;
(statearr_33129_34960[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_33095[(4)]))){
var statearr_33130_34961 = state_33095;
(statearr_33130_34961[(1)] = cljs.core.first((state_33095[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34962 = state_33095;
state_33095 = G__34962;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_33095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_33095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_33135 = f__32381__auto__();
(statearr_33135[(6)] = c__32380__auto__);

return statearr_33135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));

return c__32380__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33158 = arguments.length;
switch (G__33158) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34964 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34964(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34965 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34965(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34971 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34971(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34973 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34973(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33183 = (function (ch,cs,meta33184){
this.ch = ch;
this.cs = cs;
this.meta33184 = meta33184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33185,meta33184__$1){
var self__ = this;
var _33185__$1 = this;
return (new cljs.core.async.t_cljs$core$async33183(self__.ch,self__.cs,meta33184__$1));
}));

(cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33185){
var self__ = this;
var _33185__$1 = this;
return self__.meta33184;
}));

(cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33184","meta33184",-476384697,null)], null);
}));

(cljs.core.async.t_cljs$core$async33183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33183");

(cljs.core.async.t_cljs$core$async33183.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33183.
 */
cljs.core.async.__GT_t_cljs$core$async33183 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33183(ch__$1,cs__$1,meta33184){
return (new cljs.core.async.t_cljs$core$async33183(ch__$1,cs__$1,meta33184));
});

}

return (new cljs.core.async.t_cljs$core$async33183(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32380__auto___34976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_33323){
var state_val_33324 = (state_33323[(1)]);
if((state_val_33324 === (7))){
var inst_33319 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33325_34977 = state_33323__$1;
(statearr_33325_34977[(2)] = inst_33319);

(statearr_33325_34977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (20))){
var inst_33222 = (state_33323[(7)]);
var inst_33235 = cljs.core.first(inst_33222);
var inst_33236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33235,(0),null);
var inst_33237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33235,(1),null);
var state_33323__$1 = (function (){var statearr_33326 = state_33323;
(statearr_33326[(8)] = inst_33236);

return statearr_33326;
})();
if(cljs.core.truth_(inst_33237)){
var statearr_33327_34978 = state_33323__$1;
(statearr_33327_34978[(1)] = (22));

} else {
var statearr_33328_34979 = state_33323__$1;
(statearr_33328_34979[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (27))){
var inst_33266 = (state_33323[(9)]);
var inst_33273 = (state_33323[(10)]);
var inst_33268 = (state_33323[(11)]);
var inst_33191 = (state_33323[(12)]);
var inst_33273__$1 = cljs.core._nth(inst_33266,inst_33268);
var inst_33274 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33273__$1,inst_33191,done);
var state_33323__$1 = (function (){var statearr_33329 = state_33323;
(statearr_33329[(10)] = inst_33273__$1);

return statearr_33329;
})();
if(cljs.core.truth_(inst_33274)){
var statearr_33330_34984 = state_33323__$1;
(statearr_33330_34984[(1)] = (30));

} else {
var statearr_33331_34985 = state_33323__$1;
(statearr_33331_34985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (1))){
var state_33323__$1 = state_33323;
var statearr_33333_34986 = state_33323__$1;
(statearr_33333_34986[(2)] = null);

(statearr_33333_34986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (24))){
var inst_33222 = (state_33323[(7)]);
var inst_33242 = (state_33323[(2)]);
var inst_33243 = cljs.core.next(inst_33222);
var inst_33200 = inst_33243;
var inst_33201 = null;
var inst_33202 = (0);
var inst_33203 = (0);
var state_33323__$1 = (function (){var statearr_33334 = state_33323;
(statearr_33334[(13)] = inst_33201);

(statearr_33334[(14)] = inst_33203);

(statearr_33334[(15)] = inst_33202);

(statearr_33334[(16)] = inst_33200);

(statearr_33334[(17)] = inst_33242);

return statearr_33334;
})();
var statearr_33335_34987 = state_33323__$1;
(statearr_33335_34987[(2)] = null);

(statearr_33335_34987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (39))){
var state_33323__$1 = state_33323;
var statearr_33339_34988 = state_33323__$1;
(statearr_33339_34988[(2)] = null);

(statearr_33339_34988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (4))){
var inst_33191 = (state_33323[(12)]);
var inst_33191__$1 = (state_33323[(2)]);
var inst_33192 = (inst_33191__$1 == null);
var state_33323__$1 = (function (){var statearr_33340 = state_33323;
(statearr_33340[(12)] = inst_33191__$1);

return statearr_33340;
})();
if(cljs.core.truth_(inst_33192)){
var statearr_33341_34991 = state_33323__$1;
(statearr_33341_34991[(1)] = (5));

} else {
var statearr_33342_34992 = state_33323__$1;
(statearr_33342_34992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (15))){
var inst_33201 = (state_33323[(13)]);
var inst_33203 = (state_33323[(14)]);
var inst_33202 = (state_33323[(15)]);
var inst_33200 = (state_33323[(16)]);
var inst_33218 = (state_33323[(2)]);
var inst_33219 = (inst_33203 + (1));
var tmp33336 = inst_33201;
var tmp33337 = inst_33202;
var tmp33338 = inst_33200;
var inst_33200__$1 = tmp33338;
var inst_33201__$1 = tmp33336;
var inst_33202__$1 = tmp33337;
var inst_33203__$1 = inst_33219;
var state_33323__$1 = (function (){var statearr_33343 = state_33323;
(statearr_33343[(13)] = inst_33201__$1);

(statearr_33343[(18)] = inst_33218);

(statearr_33343[(14)] = inst_33203__$1);

(statearr_33343[(15)] = inst_33202__$1);

(statearr_33343[(16)] = inst_33200__$1);

return statearr_33343;
})();
var statearr_33344_34995 = state_33323__$1;
(statearr_33344_34995[(2)] = null);

(statearr_33344_34995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (21))){
var inst_33246 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33348_34996 = state_33323__$1;
(statearr_33348_34996[(2)] = inst_33246);

(statearr_33348_34996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (31))){
var inst_33273 = (state_33323[(10)]);
var inst_33277 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33273);
var state_33323__$1 = state_33323;
var statearr_33349_34997 = state_33323__$1;
(statearr_33349_34997[(2)] = inst_33277);

(statearr_33349_34997[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (32))){
var inst_33266 = (state_33323[(9)]);
var inst_33267 = (state_33323[(19)]);
var inst_33268 = (state_33323[(11)]);
var inst_33265 = (state_33323[(20)]);
var inst_33279 = (state_33323[(2)]);
var inst_33280 = (inst_33268 + (1));
var tmp33345 = inst_33266;
var tmp33346 = inst_33267;
var tmp33347 = inst_33265;
var inst_33265__$1 = tmp33347;
var inst_33266__$1 = tmp33345;
var inst_33267__$1 = tmp33346;
var inst_33268__$1 = inst_33280;
var state_33323__$1 = (function (){var statearr_33351 = state_33323;
(statearr_33351[(9)] = inst_33266__$1);

(statearr_33351[(19)] = inst_33267__$1);

(statearr_33351[(11)] = inst_33268__$1);

(statearr_33351[(21)] = inst_33279);

(statearr_33351[(20)] = inst_33265__$1);

return statearr_33351;
})();
var statearr_33352_35007 = state_33323__$1;
(statearr_33352_35007[(2)] = null);

(statearr_33352_35007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (40))){
var inst_33292 = (state_33323[(22)]);
var inst_33296 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33292);
var state_33323__$1 = state_33323;
var statearr_33353_35014 = state_33323__$1;
(statearr_33353_35014[(2)] = inst_33296);

(statearr_33353_35014[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (33))){
var inst_33283 = (state_33323[(23)]);
var inst_33285 = cljs.core.chunked_seq_QMARK_(inst_33283);
var state_33323__$1 = state_33323;
if(inst_33285){
var statearr_33354_35015 = state_33323__$1;
(statearr_33354_35015[(1)] = (36));

} else {
var statearr_33355_35016 = state_33323__$1;
(statearr_33355_35016[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (13))){
var inst_33212 = (state_33323[(24)]);
var inst_33215 = cljs.core.async.close_BANG_(inst_33212);
var state_33323__$1 = state_33323;
var statearr_33356_35017 = state_33323__$1;
(statearr_33356_35017[(2)] = inst_33215);

(statearr_33356_35017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (22))){
var inst_33236 = (state_33323[(8)]);
var inst_33239 = cljs.core.async.close_BANG_(inst_33236);
var state_33323__$1 = state_33323;
var statearr_33357_35019 = state_33323__$1;
(statearr_33357_35019[(2)] = inst_33239);

(statearr_33357_35019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (36))){
var inst_33283 = (state_33323[(23)]);
var inst_33287 = cljs.core.chunk_first(inst_33283);
var inst_33288 = cljs.core.chunk_rest(inst_33283);
var inst_33289 = cljs.core.count(inst_33287);
var inst_33265 = inst_33288;
var inst_33266 = inst_33287;
var inst_33267 = inst_33289;
var inst_33268 = (0);
var state_33323__$1 = (function (){var statearr_33359 = state_33323;
(statearr_33359[(9)] = inst_33266);

(statearr_33359[(19)] = inst_33267);

(statearr_33359[(11)] = inst_33268);

(statearr_33359[(20)] = inst_33265);

return statearr_33359;
})();
var statearr_33360_35030 = state_33323__$1;
(statearr_33360_35030[(2)] = null);

(statearr_33360_35030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (41))){
var inst_33283 = (state_33323[(23)]);
var inst_33298 = (state_33323[(2)]);
var inst_33299 = cljs.core.next(inst_33283);
var inst_33265 = inst_33299;
var inst_33266 = null;
var inst_33267 = (0);
var inst_33268 = (0);
var state_33323__$1 = (function (){var statearr_33361 = state_33323;
(statearr_33361[(25)] = inst_33298);

(statearr_33361[(9)] = inst_33266);

(statearr_33361[(19)] = inst_33267);

(statearr_33361[(11)] = inst_33268);

(statearr_33361[(20)] = inst_33265);

return statearr_33361;
})();
var statearr_33362_35031 = state_33323__$1;
(statearr_33362_35031[(2)] = null);

(statearr_33362_35031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (43))){
var state_33323__$1 = state_33323;
var statearr_33363_35032 = state_33323__$1;
(statearr_33363_35032[(2)] = null);

(statearr_33363_35032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (29))){
var inst_33307 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33364_35033 = state_33323__$1;
(statearr_33364_35033[(2)] = inst_33307);

(statearr_33364_35033[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (44))){
var inst_33316 = (state_33323[(2)]);
var state_33323__$1 = (function (){var statearr_33366 = state_33323;
(statearr_33366[(26)] = inst_33316);

return statearr_33366;
})();
var statearr_33367_35035 = state_33323__$1;
(statearr_33367_35035[(2)] = null);

(statearr_33367_35035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (6))){
var inst_33256 = (state_33323[(27)]);
var inst_33255 = cljs.core.deref(cs);
var inst_33256__$1 = cljs.core.keys(inst_33255);
var inst_33257 = cljs.core.count(inst_33256__$1);
var inst_33258 = cljs.core.reset_BANG_(dctr,inst_33257);
var inst_33263 = cljs.core.seq(inst_33256__$1);
var inst_33265 = inst_33263;
var inst_33266 = null;
var inst_33267 = (0);
var inst_33268 = (0);
var state_33323__$1 = (function (){var statearr_33368 = state_33323;
(statearr_33368[(9)] = inst_33266);

(statearr_33368[(27)] = inst_33256__$1);

(statearr_33368[(19)] = inst_33267);

(statearr_33368[(11)] = inst_33268);

(statearr_33368[(28)] = inst_33258);

(statearr_33368[(20)] = inst_33265);

return statearr_33368;
})();
var statearr_33369_35037 = state_33323__$1;
(statearr_33369_35037[(2)] = null);

(statearr_33369_35037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (28))){
var inst_33283 = (state_33323[(23)]);
var inst_33265 = (state_33323[(20)]);
var inst_33283__$1 = cljs.core.seq(inst_33265);
var state_33323__$1 = (function (){var statearr_33370 = state_33323;
(statearr_33370[(23)] = inst_33283__$1);

return statearr_33370;
})();
if(inst_33283__$1){
var statearr_33371_35038 = state_33323__$1;
(statearr_33371_35038[(1)] = (33));

} else {
var statearr_33373_35039 = state_33323__$1;
(statearr_33373_35039[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (25))){
var inst_33267 = (state_33323[(19)]);
var inst_33268 = (state_33323[(11)]);
var inst_33270 = (inst_33268 < inst_33267);
var inst_33271 = inst_33270;
var state_33323__$1 = state_33323;
if(cljs.core.truth_(inst_33271)){
var statearr_33374_35046 = state_33323__$1;
(statearr_33374_35046[(1)] = (27));

} else {
var statearr_33375_35047 = state_33323__$1;
(statearr_33375_35047[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (34))){
var state_33323__$1 = state_33323;
var statearr_33376_35048 = state_33323__$1;
(statearr_33376_35048[(2)] = null);

(statearr_33376_35048[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (17))){
var state_33323__$1 = state_33323;
var statearr_33377_35049 = state_33323__$1;
(statearr_33377_35049[(2)] = null);

(statearr_33377_35049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (3))){
var inst_33321 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33323__$1,inst_33321);
} else {
if((state_val_33324 === (12))){
var inst_33251 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33378_35050 = state_33323__$1;
(statearr_33378_35050[(2)] = inst_33251);

(statearr_33378_35050[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (2))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33323__$1,(4),ch);
} else {
if((state_val_33324 === (23))){
var state_33323__$1 = state_33323;
var statearr_33379_35051 = state_33323__$1;
(statearr_33379_35051[(2)] = null);

(statearr_33379_35051[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (35))){
var inst_33305 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33381_35052 = state_33323__$1;
(statearr_33381_35052[(2)] = inst_33305);

(statearr_33381_35052[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (19))){
var inst_33222 = (state_33323[(7)]);
var inst_33227 = cljs.core.chunk_first(inst_33222);
var inst_33228 = cljs.core.chunk_rest(inst_33222);
var inst_33229 = cljs.core.count(inst_33227);
var inst_33200 = inst_33228;
var inst_33201 = inst_33227;
var inst_33202 = inst_33229;
var inst_33203 = (0);
var state_33323__$1 = (function (){var statearr_33382 = state_33323;
(statearr_33382[(13)] = inst_33201);

(statearr_33382[(14)] = inst_33203);

(statearr_33382[(15)] = inst_33202);

(statearr_33382[(16)] = inst_33200);

return statearr_33382;
})();
var statearr_33383_35053 = state_33323__$1;
(statearr_33383_35053[(2)] = null);

(statearr_33383_35053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (11))){
var inst_33222 = (state_33323[(7)]);
var inst_33200 = (state_33323[(16)]);
var inst_33222__$1 = cljs.core.seq(inst_33200);
var state_33323__$1 = (function (){var statearr_33384 = state_33323;
(statearr_33384[(7)] = inst_33222__$1);

return statearr_33384;
})();
if(inst_33222__$1){
var statearr_33385_35054 = state_33323__$1;
(statearr_33385_35054[(1)] = (16));

} else {
var statearr_33386_35055 = state_33323__$1;
(statearr_33386_35055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (9))){
var inst_33253 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33388_35056 = state_33323__$1;
(statearr_33388_35056[(2)] = inst_33253);

(statearr_33388_35056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (5))){
var inst_33198 = cljs.core.deref(cs);
var inst_33199 = cljs.core.seq(inst_33198);
var inst_33200 = inst_33199;
var inst_33201 = null;
var inst_33202 = (0);
var inst_33203 = (0);
var state_33323__$1 = (function (){var statearr_33389 = state_33323;
(statearr_33389[(13)] = inst_33201);

(statearr_33389[(14)] = inst_33203);

(statearr_33389[(15)] = inst_33202);

(statearr_33389[(16)] = inst_33200);

return statearr_33389;
})();
var statearr_33390_35057 = state_33323__$1;
(statearr_33390_35057[(2)] = null);

(statearr_33390_35057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (14))){
var state_33323__$1 = state_33323;
var statearr_33391_35058 = state_33323__$1;
(statearr_33391_35058[(2)] = null);

(statearr_33391_35058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (45))){
var inst_33313 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33392_35059 = state_33323__$1;
(statearr_33392_35059[(2)] = inst_33313);

(statearr_33392_35059[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (26))){
var inst_33256 = (state_33323[(27)]);
var inst_33309 = (state_33323[(2)]);
var inst_33310 = cljs.core.seq(inst_33256);
var state_33323__$1 = (function (){var statearr_33393 = state_33323;
(statearr_33393[(29)] = inst_33309);

return statearr_33393;
})();
if(inst_33310){
var statearr_33394_35066 = state_33323__$1;
(statearr_33394_35066[(1)] = (42));

} else {
var statearr_33395_35067 = state_33323__$1;
(statearr_33395_35067[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (16))){
var inst_33222 = (state_33323[(7)]);
var inst_33224 = cljs.core.chunked_seq_QMARK_(inst_33222);
var state_33323__$1 = state_33323;
if(inst_33224){
var statearr_33397_35068 = state_33323__$1;
(statearr_33397_35068[(1)] = (19));

} else {
var statearr_33398_35069 = state_33323__$1;
(statearr_33398_35069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (38))){
var inst_33302 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33399_35070 = state_33323__$1;
(statearr_33399_35070[(2)] = inst_33302);

(statearr_33399_35070[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (30))){
var state_33323__$1 = state_33323;
var statearr_33400_35072 = state_33323__$1;
(statearr_33400_35072[(2)] = null);

(statearr_33400_35072[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (10))){
var inst_33201 = (state_33323[(13)]);
var inst_33203 = (state_33323[(14)]);
var inst_33211 = cljs.core._nth(inst_33201,inst_33203);
var inst_33212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33211,(0),null);
var inst_33213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33211,(1),null);
var state_33323__$1 = (function (){var statearr_33401 = state_33323;
(statearr_33401[(24)] = inst_33212);

return statearr_33401;
})();
if(cljs.core.truth_(inst_33213)){
var statearr_33402_35074 = state_33323__$1;
(statearr_33402_35074[(1)] = (13));

} else {
var statearr_33403_35075 = state_33323__$1;
(statearr_33403_35075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (18))){
var inst_33249 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33404_35076 = state_33323__$1;
(statearr_33404_35076[(2)] = inst_33249);

(statearr_33404_35076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (42))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33323__$1,(45),dchan);
} else {
if((state_val_33324 === (37))){
var inst_33292 = (state_33323[(22)]);
var inst_33283 = (state_33323[(23)]);
var inst_33191 = (state_33323[(12)]);
var inst_33292__$1 = cljs.core.first(inst_33283);
var inst_33293 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33292__$1,inst_33191,done);
var state_33323__$1 = (function (){var statearr_33406 = state_33323;
(statearr_33406[(22)] = inst_33292__$1);

return statearr_33406;
})();
if(cljs.core.truth_(inst_33293)){
var statearr_33407_35078 = state_33323__$1;
(statearr_33407_35078[(1)] = (39));

} else {
var statearr_33408_35079 = state_33323__$1;
(statearr_33408_35079[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (8))){
var inst_33203 = (state_33323[(14)]);
var inst_33202 = (state_33323[(15)]);
var inst_33205 = (inst_33203 < inst_33202);
var inst_33206 = inst_33205;
var state_33323__$1 = state_33323;
if(cljs.core.truth_(inst_33206)){
var statearr_33409_35080 = state_33323__$1;
(statearr_33409_35080[(1)] = (10));

} else {
var statearr_33410_35081 = state_33323__$1;
(statearr_33410_35081[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32223__auto__ = null;
var cljs$core$async$mult_$_state_machine__32223__auto____0 = (function (){
var statearr_33411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33411[(0)] = cljs$core$async$mult_$_state_machine__32223__auto__);

(statearr_33411[(1)] = (1));

return statearr_33411;
});
var cljs$core$async$mult_$_state_machine__32223__auto____1 = (function (state_33323){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_33323);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e33412){var ex__32226__auto__ = e33412;
var statearr_33413_35082 = state_33323;
(statearr_33413_35082[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_33323[(4)]))){
var statearr_33415_35083 = state_33323;
(statearr_33415_35083[(1)] = cljs.core.first((state_33323[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_33323;
state_33323 = G__35084;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32223__auto__ = function(state_33323){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32223__auto____1.call(this,state_33323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32223__auto____0;
cljs$core$async$mult_$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32223__auto____1;
return cljs$core$async$mult_$_state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_33416 = f__32381__auto__();
(statearr_33416[(6)] = c__32380__auto___34976);

return statearr_33416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33418 = arguments.length;
switch (G__33418) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35101 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35101(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35102 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35102(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35103 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35103(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35105 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35105(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35106 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35106(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35107 = arguments.length;
var i__4865__auto___35108 = (0);
while(true){
if((i__4865__auto___35108 < len__4864__auto___35107)){
args__4870__auto__.push((arguments[i__4865__auto___35108]));

var G__35109 = (i__4865__auto___35108 + (1));
i__4865__auto___35108 = G__35109;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33428){
var map__33429 = p__33428;
var map__33429__$1 = cljs.core.__destructure_map(map__33429);
var opts = map__33429__$1;
var statearr_33430_35110 = state;
(statearr_33430_35110[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33431_35111 = state;
(statearr_33431_35111[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33432_35112 = state;
(statearr_33432_35112[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33423){
var G__33424 = cljs.core.first(seq33423);
var seq33423__$1 = cljs.core.next(seq33423);
var G__33425 = cljs.core.first(seq33423__$1);
var seq33423__$2 = cljs.core.next(seq33423__$1);
var G__33426 = cljs.core.first(seq33423__$2);
var seq33423__$3 = cljs.core.next(seq33423__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33424,G__33425,G__33426,seq33423__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33435 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33436){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33436 = meta33436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33437,meta33436__$1){
var self__ = this;
var _33437__$1 = this;
return (new cljs.core.async.t_cljs$core$async33435(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33436__$1));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33437){
var self__ = this;
var _33437__$1 = this;
return self__.meta33436;
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33436","meta33436",-853821444,null)], null);
}));

(cljs.core.async.t_cljs$core$async33435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33435");

(cljs.core.async.t_cljs$core$async33435.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33435.
 */
cljs.core.async.__GT_t_cljs$core$async33435 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33435(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33436){
return (new cljs.core.async.t_cljs$core$async33435(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33436));
});

}

return (new cljs.core.async.t_cljs$core$async33435(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32380__auto___35122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_33510){
var state_val_33511 = (state_33510[(1)]);
if((state_val_33511 === (7))){
var inst_33469 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33469)){
var statearr_33512_35123 = state_33510__$1;
(statearr_33512_35123[(1)] = (8));

} else {
var statearr_33513_35124 = state_33510__$1;
(statearr_33513_35124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (20))){
var inst_33462 = (state_33510[(7)]);
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33510__$1,(23),out,inst_33462);
} else {
if((state_val_33511 === (1))){
var inst_33445 = calc_state();
var inst_33446 = cljs.core.__destructure_map(inst_33445);
var inst_33447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33446,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33446,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33446,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33450 = inst_33445;
var state_33510__$1 = (function (){var statearr_33514 = state_33510;
(statearr_33514[(8)] = inst_33449);

(statearr_33514[(9)] = inst_33448);

(statearr_33514[(10)] = inst_33447);

(statearr_33514[(11)] = inst_33450);

return statearr_33514;
})();
var statearr_33515_35125 = state_33510__$1;
(statearr_33515_35125[(2)] = null);

(statearr_33515_35125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (24))){
var inst_33453 = (state_33510[(12)]);
var inst_33450 = inst_33453;
var state_33510__$1 = (function (){var statearr_33517 = state_33510;
(statearr_33517[(11)] = inst_33450);

return statearr_33517;
})();
var statearr_33518_35126 = state_33510__$1;
(statearr_33518_35126[(2)] = null);

(statearr_33518_35126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (4))){
var inst_33462 = (state_33510[(7)]);
var inst_33464 = (state_33510[(13)]);
var inst_33461 = (state_33510[(2)]);
var inst_33462__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33461,(0),null);
var inst_33463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33461,(1),null);
var inst_33464__$1 = (inst_33462__$1 == null);
var state_33510__$1 = (function (){var statearr_33519 = state_33510;
(statearr_33519[(14)] = inst_33463);

(statearr_33519[(7)] = inst_33462__$1);

(statearr_33519[(13)] = inst_33464__$1);

return statearr_33519;
})();
if(cljs.core.truth_(inst_33464__$1)){
var statearr_33520_35129 = state_33510__$1;
(statearr_33520_35129[(1)] = (5));

} else {
var statearr_33521_35130 = state_33510__$1;
(statearr_33521_35130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (15))){
var inst_33454 = (state_33510[(15)]);
var inst_33483 = (state_33510[(16)]);
var inst_33483__$1 = cljs.core.empty_QMARK_(inst_33454);
var state_33510__$1 = (function (){var statearr_33522 = state_33510;
(statearr_33522[(16)] = inst_33483__$1);

return statearr_33522;
})();
if(inst_33483__$1){
var statearr_33523_35131 = state_33510__$1;
(statearr_33523_35131[(1)] = (17));

} else {
var statearr_33524_35132 = state_33510__$1;
(statearr_33524_35132[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (21))){
var inst_33453 = (state_33510[(12)]);
var inst_33450 = inst_33453;
var state_33510__$1 = (function (){var statearr_33525 = state_33510;
(statearr_33525[(11)] = inst_33450);

return statearr_33525;
})();
var statearr_33527_35133 = state_33510__$1;
(statearr_33527_35133[(2)] = null);

(statearr_33527_35133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (13))){
var inst_33476 = (state_33510[(2)]);
var inst_33477 = calc_state();
var inst_33450 = inst_33477;
var state_33510__$1 = (function (){var statearr_33528 = state_33510;
(statearr_33528[(11)] = inst_33450);

(statearr_33528[(17)] = inst_33476);

return statearr_33528;
})();
var statearr_33529_35134 = state_33510__$1;
(statearr_33529_35134[(2)] = null);

(statearr_33529_35134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (22))){
var inst_33503 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33530_35135 = state_33510__$1;
(statearr_33530_35135[(2)] = inst_33503);

(statearr_33530_35135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (6))){
var inst_33463 = (state_33510[(14)]);
var inst_33467 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33463,change);
var state_33510__$1 = state_33510;
var statearr_33531_35136 = state_33510__$1;
(statearr_33531_35136[(2)] = inst_33467);

(statearr_33531_35136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (25))){
var state_33510__$1 = state_33510;
var statearr_33532_35137 = state_33510__$1;
(statearr_33532_35137[(2)] = null);

(statearr_33532_35137[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (17))){
var inst_33455 = (state_33510[(18)]);
var inst_33463 = (state_33510[(14)]);
var inst_33485 = (inst_33455.cljs$core$IFn$_invoke$arity$1 ? inst_33455.cljs$core$IFn$_invoke$arity$1(inst_33463) : inst_33455.call(null,inst_33463));
var inst_33486 = cljs.core.not(inst_33485);
var state_33510__$1 = state_33510;
var statearr_33533_35145 = state_33510__$1;
(statearr_33533_35145[(2)] = inst_33486);

(statearr_33533_35145[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (3))){
var inst_33507 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33510__$1,inst_33507);
} else {
if((state_val_33511 === (12))){
var state_33510__$1 = state_33510;
var statearr_33535_35148 = state_33510__$1;
(statearr_33535_35148[(2)] = null);

(statearr_33535_35148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (2))){
var inst_33450 = (state_33510[(11)]);
var inst_33453 = (state_33510[(12)]);
var inst_33453__$1 = cljs.core.__destructure_map(inst_33450);
var inst_33454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33453__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33453__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33453__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33510__$1 = (function (){var statearr_33536 = state_33510;
(statearr_33536[(15)] = inst_33454);

(statearr_33536[(18)] = inst_33455);

(statearr_33536[(12)] = inst_33453__$1);

return statearr_33536;
})();
return cljs.core.async.ioc_alts_BANG_(state_33510__$1,(4),inst_33456);
} else {
if((state_val_33511 === (23))){
var inst_33494 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33494)){
var statearr_33537_35150 = state_33510__$1;
(statearr_33537_35150[(1)] = (24));

} else {
var statearr_33538_35151 = state_33510__$1;
(statearr_33538_35151[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (19))){
var inst_33489 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33539_35152 = state_33510__$1;
(statearr_33539_35152[(2)] = inst_33489);

(statearr_33539_35152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (11))){
var inst_33463 = (state_33510[(14)]);
var inst_33473 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33463);
var state_33510__$1 = state_33510;
var statearr_33541_35162 = state_33510__$1;
(statearr_33541_35162[(2)] = inst_33473);

(statearr_33541_35162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (9))){
var inst_33480 = (state_33510[(19)]);
var inst_33454 = (state_33510[(15)]);
var inst_33463 = (state_33510[(14)]);
var inst_33480__$1 = (inst_33454.cljs$core$IFn$_invoke$arity$1 ? inst_33454.cljs$core$IFn$_invoke$arity$1(inst_33463) : inst_33454.call(null,inst_33463));
var state_33510__$1 = (function (){var statearr_33542 = state_33510;
(statearr_33542[(19)] = inst_33480__$1);

return statearr_33542;
})();
if(cljs.core.truth_(inst_33480__$1)){
var statearr_33543_35163 = state_33510__$1;
(statearr_33543_35163[(1)] = (14));

} else {
var statearr_33544_35164 = state_33510__$1;
(statearr_33544_35164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (5))){
var inst_33464 = (state_33510[(13)]);
var state_33510__$1 = state_33510;
var statearr_33545_35165 = state_33510__$1;
(statearr_33545_35165[(2)] = inst_33464);

(statearr_33545_35165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (14))){
var inst_33480 = (state_33510[(19)]);
var state_33510__$1 = state_33510;
var statearr_33546_35169 = state_33510__$1;
(statearr_33546_35169[(2)] = inst_33480);

(statearr_33546_35169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (26))){
var inst_33499 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33547_35171 = state_33510__$1;
(statearr_33547_35171[(2)] = inst_33499);

(statearr_33547_35171[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (16))){
var inst_33491 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33491)){
var statearr_33549_35172 = state_33510__$1;
(statearr_33549_35172[(1)] = (20));

} else {
var statearr_33550_35173 = state_33510__$1;
(statearr_33550_35173[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (10))){
var inst_33505 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33551_35174 = state_33510__$1;
(statearr_33551_35174[(2)] = inst_33505);

(statearr_33551_35174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (18))){
var inst_33483 = (state_33510[(16)]);
var state_33510__$1 = state_33510;
var statearr_33552_35176 = state_33510__$1;
(statearr_33552_35176[(2)] = inst_33483);

(statearr_33552_35176[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33511 === (8))){
var inst_33462 = (state_33510[(7)]);
var inst_33471 = (inst_33462 == null);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33471)){
var statearr_33553_35185 = state_33510__$1;
(statearr_33553_35185[(1)] = (11));

} else {
var statearr_33554_35186 = state_33510__$1;
(statearr_33554_35186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32223__auto__ = null;
var cljs$core$async$mix_$_state_machine__32223__auto____0 = (function (){
var statearr_33556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33556[(0)] = cljs$core$async$mix_$_state_machine__32223__auto__);

(statearr_33556[(1)] = (1));

return statearr_33556;
});
var cljs$core$async$mix_$_state_machine__32223__auto____1 = (function (state_33510){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_33510);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e33557){var ex__32226__auto__ = e33557;
var statearr_33558_35187 = state_33510;
(statearr_33558_35187[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_33510[(4)]))){
var statearr_33559_35189 = state_33510;
(statearr_33559_35189[(1)] = cljs.core.first((state_33510[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35190 = state_33510;
state_33510 = G__35190;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32223__auto__ = function(state_33510){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32223__auto____1.call(this,state_33510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32223__auto____0;
cljs$core$async$mix_$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32223__auto____1;
return cljs$core$async$mix_$_state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_33560 = f__32381__auto__();
(statearr_33560[(6)] = c__32380__auto___35122);

return statearr_33560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35191 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35191(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35194 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35194(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35200 = (function() {
var G__35201 = null;
var G__35201__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35201__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35201 = function(p,v){
switch(arguments.length){
case 1:
return G__35201__1.call(this,p);
case 2:
return G__35201__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35201.cljs$core$IFn$_invoke$arity$1 = G__35201__1;
G__35201.cljs$core$IFn$_invoke$arity$2 = G__35201__2;
return G__35201;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33566 = arguments.length;
switch (G__33566) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35200(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35200(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33571 = arguments.length;
switch (G__33571) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33569_SHARP_){
if(cljs.core.truth_((p1__33569_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33569_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33569_SHARP_.call(null,topic)))){
return p1__33569_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33569_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33574 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33575){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33575 = meta33575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33576,meta33575__$1){
var self__ = this;
var _33576__$1 = this;
return (new cljs.core.async.t_cljs$core$async33574(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33575__$1));
}));

(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33576){
var self__ = this;
var _33576__$1 = this;
return self__.meta33575;
}));

(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33574.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33575","meta33575",1040913398,null)], null);
}));

(cljs.core.async.t_cljs$core$async33574.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33574");

(cljs.core.async.t_cljs$core$async33574.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33574");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33574.
 */
cljs.core.async.__GT_t_cljs$core$async33574 = (function cljs$core$async$__GT_t_cljs$core$async33574(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33575){
return (new cljs.core.async.t_cljs$core$async33574(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33575));
});

}

return (new cljs.core.async.t_cljs$core$async33574(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32380__auto___35223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_33652){
var state_val_33653 = (state_33652[(1)]);
if((state_val_33653 === (7))){
var inst_33646 = (state_33652[(2)]);
var state_33652__$1 = state_33652;
var statearr_33655_35228 = state_33652__$1;
(statearr_33655_35228[(2)] = inst_33646);

(statearr_33655_35228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (20))){
var state_33652__$1 = state_33652;
var statearr_33659_35232 = state_33652__$1;
(statearr_33659_35232[(2)] = null);

(statearr_33659_35232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (1))){
var state_33652__$1 = state_33652;
var statearr_33660_35233 = state_33652__$1;
(statearr_33660_35233[(2)] = null);

(statearr_33660_35233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (24))){
var inst_33629 = (state_33652[(7)]);
var inst_33638 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33629);
var state_33652__$1 = state_33652;
var statearr_33664_35234 = state_33652__$1;
(statearr_33664_35234[(2)] = inst_33638);

(statearr_33664_35234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (4))){
var inst_33581 = (state_33652[(8)]);
var inst_33581__$1 = (state_33652[(2)]);
var inst_33582 = (inst_33581__$1 == null);
var state_33652__$1 = (function (){var statearr_33665 = state_33652;
(statearr_33665[(8)] = inst_33581__$1);

return statearr_33665;
})();
if(cljs.core.truth_(inst_33582)){
var statearr_33666_35237 = state_33652__$1;
(statearr_33666_35237[(1)] = (5));

} else {
var statearr_33667_35238 = state_33652__$1;
(statearr_33667_35238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (15))){
var inst_33623 = (state_33652[(2)]);
var state_33652__$1 = state_33652;
var statearr_33669_35242 = state_33652__$1;
(statearr_33669_35242[(2)] = inst_33623);

(statearr_33669_35242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (21))){
var inst_33643 = (state_33652[(2)]);
var state_33652__$1 = (function (){var statearr_33672 = state_33652;
(statearr_33672[(9)] = inst_33643);

return statearr_33672;
})();
var statearr_33674_35243 = state_33652__$1;
(statearr_33674_35243[(2)] = null);

(statearr_33674_35243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (13))){
var inst_33605 = (state_33652[(10)]);
var inst_33607 = cljs.core.chunked_seq_QMARK_(inst_33605);
var state_33652__$1 = state_33652;
if(inst_33607){
var statearr_33675_35246 = state_33652__$1;
(statearr_33675_35246[(1)] = (16));

} else {
var statearr_33677_35247 = state_33652__$1;
(statearr_33677_35247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (22))){
var inst_33635 = (state_33652[(2)]);
var state_33652__$1 = state_33652;
if(cljs.core.truth_(inst_33635)){
var statearr_33679_35248 = state_33652__$1;
(statearr_33679_35248[(1)] = (23));

} else {
var statearr_33681_35249 = state_33652__$1;
(statearr_33681_35249[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (6))){
var inst_33581 = (state_33652[(8)]);
var inst_33629 = (state_33652[(7)]);
var inst_33631 = (state_33652[(11)]);
var inst_33629__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33581) : topic_fn.call(null,inst_33581));
var inst_33630 = cljs.core.deref(mults);
var inst_33631__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33630,inst_33629__$1);
var state_33652__$1 = (function (){var statearr_33684 = state_33652;
(statearr_33684[(7)] = inst_33629__$1);

(statearr_33684[(11)] = inst_33631__$1);

return statearr_33684;
})();
if(cljs.core.truth_(inst_33631__$1)){
var statearr_33685_35253 = state_33652__$1;
(statearr_33685_35253[(1)] = (19));

} else {
var statearr_33688_35254 = state_33652__$1;
(statearr_33688_35254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (25))){
var inst_33640 = (state_33652[(2)]);
var state_33652__$1 = state_33652;
var statearr_33690_35255 = state_33652__$1;
(statearr_33690_35255[(2)] = inst_33640);

(statearr_33690_35255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (17))){
var inst_33605 = (state_33652[(10)]);
var inst_33614 = cljs.core.first(inst_33605);
var inst_33615 = cljs.core.async.muxch_STAR_(inst_33614);
var inst_33616 = cljs.core.async.close_BANG_(inst_33615);
var inst_33617 = cljs.core.next(inst_33605);
var inst_33591 = inst_33617;
var inst_33592 = null;
var inst_33593 = (0);
var inst_33594 = (0);
var state_33652__$1 = (function (){var statearr_33694 = state_33652;
(statearr_33694[(12)] = inst_33593);

(statearr_33694[(13)] = inst_33594);

(statearr_33694[(14)] = inst_33591);

(statearr_33694[(15)] = inst_33592);

(statearr_33694[(16)] = inst_33616);

return statearr_33694;
})();
var statearr_33696_35259 = state_33652__$1;
(statearr_33696_35259[(2)] = null);

(statearr_33696_35259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (3))){
var inst_33649 = (state_33652[(2)]);
var state_33652__$1 = state_33652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33652__$1,inst_33649);
} else {
if((state_val_33653 === (12))){
var inst_33625 = (state_33652[(2)]);
var state_33652__$1 = state_33652;
var statearr_33699_35261 = state_33652__$1;
(statearr_33699_35261[(2)] = inst_33625);

(statearr_33699_35261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (2))){
var state_33652__$1 = state_33652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33652__$1,(4),ch);
} else {
if((state_val_33653 === (23))){
var state_33652__$1 = state_33652;
var statearr_33703_35263 = state_33652__$1;
(statearr_33703_35263[(2)] = null);

(statearr_33703_35263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (19))){
var inst_33581 = (state_33652[(8)]);
var inst_33631 = (state_33652[(11)]);
var inst_33633 = cljs.core.async.muxch_STAR_(inst_33631);
var state_33652__$1 = state_33652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33652__$1,(22),inst_33633,inst_33581);
} else {
if((state_val_33653 === (11))){
var inst_33605 = (state_33652[(10)]);
var inst_33591 = (state_33652[(14)]);
var inst_33605__$1 = cljs.core.seq(inst_33591);
var state_33652__$1 = (function (){var statearr_33708 = state_33652;
(statearr_33708[(10)] = inst_33605__$1);

return statearr_33708;
})();
if(inst_33605__$1){
var statearr_33709_35268 = state_33652__$1;
(statearr_33709_35268[(1)] = (13));

} else {
var statearr_33712_35269 = state_33652__$1;
(statearr_33712_35269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (9))){
var inst_33627 = (state_33652[(2)]);
var state_33652__$1 = state_33652;
var statearr_33714_35270 = state_33652__$1;
(statearr_33714_35270[(2)] = inst_33627);

(statearr_33714_35270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (5))){
var inst_33588 = cljs.core.deref(mults);
var inst_33589 = cljs.core.vals(inst_33588);
var inst_33590 = cljs.core.seq(inst_33589);
var inst_33591 = inst_33590;
var inst_33592 = null;
var inst_33593 = (0);
var inst_33594 = (0);
var state_33652__$1 = (function (){var statearr_33716 = state_33652;
(statearr_33716[(12)] = inst_33593);

(statearr_33716[(13)] = inst_33594);

(statearr_33716[(14)] = inst_33591);

(statearr_33716[(15)] = inst_33592);

return statearr_33716;
})();
var statearr_33717_35271 = state_33652__$1;
(statearr_33717_35271[(2)] = null);

(statearr_33717_35271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (14))){
var state_33652__$1 = state_33652;
var statearr_33723_35272 = state_33652__$1;
(statearr_33723_35272[(2)] = null);

(statearr_33723_35272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (16))){
var inst_33605 = (state_33652[(10)]);
var inst_33609 = cljs.core.chunk_first(inst_33605);
var inst_33610 = cljs.core.chunk_rest(inst_33605);
var inst_33611 = cljs.core.count(inst_33609);
var inst_33591 = inst_33610;
var inst_33592 = inst_33609;
var inst_33593 = inst_33611;
var inst_33594 = (0);
var state_33652__$1 = (function (){var statearr_33726 = state_33652;
(statearr_33726[(12)] = inst_33593);

(statearr_33726[(13)] = inst_33594);

(statearr_33726[(14)] = inst_33591);

(statearr_33726[(15)] = inst_33592);

return statearr_33726;
})();
var statearr_33730_35273 = state_33652__$1;
(statearr_33730_35273[(2)] = null);

(statearr_33730_35273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (10))){
var inst_33593 = (state_33652[(12)]);
var inst_33594 = (state_33652[(13)]);
var inst_33591 = (state_33652[(14)]);
var inst_33592 = (state_33652[(15)]);
var inst_33599 = cljs.core._nth(inst_33592,inst_33594);
var inst_33600 = cljs.core.async.muxch_STAR_(inst_33599);
var inst_33601 = cljs.core.async.close_BANG_(inst_33600);
var inst_33602 = (inst_33594 + (1));
var tmp33718 = inst_33593;
var tmp33719 = inst_33591;
var tmp33720 = inst_33592;
var inst_33591__$1 = tmp33719;
var inst_33592__$1 = tmp33720;
var inst_33593__$1 = tmp33718;
var inst_33594__$1 = inst_33602;
var state_33652__$1 = (function (){var statearr_33734 = state_33652;
(statearr_33734[(17)] = inst_33601);

(statearr_33734[(12)] = inst_33593__$1);

(statearr_33734[(13)] = inst_33594__$1);

(statearr_33734[(14)] = inst_33591__$1);

(statearr_33734[(15)] = inst_33592__$1);

return statearr_33734;
})();
var statearr_33736_35274 = state_33652__$1;
(statearr_33736_35274[(2)] = null);

(statearr_33736_35274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (18))){
var inst_33620 = (state_33652[(2)]);
var state_33652__$1 = state_33652;
var statearr_33738_35275 = state_33652__$1;
(statearr_33738_35275[(2)] = inst_33620);

(statearr_33738_35275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33653 === (8))){
var inst_33593 = (state_33652[(12)]);
var inst_33594 = (state_33652[(13)]);
var inst_33596 = (inst_33594 < inst_33593);
var inst_33597 = inst_33596;
var state_33652__$1 = state_33652;
if(cljs.core.truth_(inst_33597)){
var statearr_33742_35277 = state_33652__$1;
(statearr_33742_35277[(1)] = (10));

} else {
var statearr_33744_35278 = state_33652__$1;
(statearr_33744_35278[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_33749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33749[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_33749[(1)] = (1));

return statearr_33749;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_33652){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_33652);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e33750){var ex__32226__auto__ = e33750;
var statearr_33752_35280 = state_33652;
(statearr_33752_35280[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_33652[(4)]))){
var statearr_33753_35281 = state_33652;
(statearr_33753_35281[(1)] = cljs.core.first((state_33652[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35282 = state_33652;
state_33652 = G__35282;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_33652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_33652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_33757 = f__32381__auto__();
(statearr_33757[(6)] = c__32380__auto___35223);

return statearr_33757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33764 = arguments.length;
switch (G__33764) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33776 = arguments.length;
switch (G__33776) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33790 = arguments.length;
switch (G__33790) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32380__auto___35291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_33870){
var state_val_33871 = (state_33870[(1)]);
if((state_val_33871 === (7))){
var state_33870__$1 = state_33870;
var statearr_33876_35292 = state_33870__$1;
(statearr_33876_35292[(2)] = null);

(statearr_33876_35292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (1))){
var state_33870__$1 = state_33870;
var statearr_33878_35299 = state_33870__$1;
(statearr_33878_35299[(2)] = null);

(statearr_33878_35299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (4))){
var inst_33808 = (state_33870[(7)]);
var inst_33810 = (state_33870[(8)]);
var inst_33812 = (inst_33810 < inst_33808);
var state_33870__$1 = state_33870;
if(cljs.core.truth_(inst_33812)){
var statearr_33882_35300 = state_33870__$1;
(statearr_33882_35300[(1)] = (6));

} else {
var statearr_33883_35301 = state_33870__$1;
(statearr_33883_35301[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (15))){
var inst_33852 = (state_33870[(9)]);
var inst_33858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33852);
var state_33870__$1 = state_33870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33870__$1,(17),out,inst_33858);
} else {
if((state_val_33871 === (13))){
var inst_33852 = (state_33870[(9)]);
var inst_33852__$1 = (state_33870[(2)]);
var inst_33853 = cljs.core.some(cljs.core.nil_QMARK_,inst_33852__$1);
var state_33870__$1 = (function (){var statearr_33888 = state_33870;
(statearr_33888[(9)] = inst_33852__$1);

return statearr_33888;
})();
if(cljs.core.truth_(inst_33853)){
var statearr_33889_35305 = state_33870__$1;
(statearr_33889_35305[(1)] = (14));

} else {
var statearr_33891_35306 = state_33870__$1;
(statearr_33891_35306[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (6))){
var state_33870__$1 = state_33870;
var statearr_33892_35307 = state_33870__$1;
(statearr_33892_35307[(2)] = null);

(statearr_33892_35307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (17))){
var inst_33860 = (state_33870[(2)]);
var state_33870__$1 = (function (){var statearr_33903 = state_33870;
(statearr_33903[(10)] = inst_33860);

return statearr_33903;
})();
var statearr_33904_35312 = state_33870__$1;
(statearr_33904_35312[(2)] = null);

(statearr_33904_35312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (3))){
var inst_33865 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33870__$1,inst_33865);
} else {
if((state_val_33871 === (12))){
var _ = (function (){var statearr_33906 = state_33870;
(statearr_33906[(4)] = cljs.core.rest((state_33870[(4)])));

return statearr_33906;
})();
var state_33870__$1 = state_33870;
var ex33902 = (state_33870__$1[(2)]);
var statearr_33910_35317 = state_33870__$1;
(statearr_33910_35317[(5)] = ex33902);


if((ex33902 instanceof Object)){
var statearr_33914_35318 = state_33870__$1;
(statearr_33914_35318[(1)] = (11));

(statearr_33914_35318[(5)] = null);

} else {
throw ex33902;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (2))){
var inst_33807 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33808 = cnt;
var inst_33810 = (0);
var state_33870__$1 = (function (){var statearr_33921 = state_33870;
(statearr_33921[(11)] = inst_33807);

(statearr_33921[(7)] = inst_33808);

(statearr_33921[(8)] = inst_33810);

return statearr_33921;
})();
var statearr_33923_35319 = state_33870__$1;
(statearr_33923_35319[(2)] = null);

(statearr_33923_35319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (11))){
var inst_33827 = (state_33870[(2)]);
var inst_33828 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33870__$1 = (function (){var statearr_33930 = state_33870;
(statearr_33930[(12)] = inst_33827);

return statearr_33930;
})();
var statearr_33931_35320 = state_33870__$1;
(statearr_33931_35320[(2)] = inst_33828);

(statearr_33931_35320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (9))){
var inst_33810 = (state_33870[(8)]);
var _ = (function (){var statearr_33933 = state_33870;
(statearr_33933[(4)] = cljs.core.cons((12),(state_33870[(4)])));

return statearr_33933;
})();
var inst_33837 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33810) : chs__$1.call(null,inst_33810));
var inst_33839 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33810) : done.call(null,inst_33810));
var inst_33840 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33837,inst_33839);
var ___$1 = (function (){var statearr_33934 = state_33870;
(statearr_33934[(4)] = cljs.core.rest((state_33870[(4)])));

return statearr_33934;
})();
var state_33870__$1 = state_33870;
var statearr_33937_35327 = state_33870__$1;
(statearr_33937_35327[(2)] = inst_33840);

(statearr_33937_35327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (5))){
var inst_33850 = (state_33870[(2)]);
var state_33870__$1 = (function (){var statearr_33941 = state_33870;
(statearr_33941[(13)] = inst_33850);

return statearr_33941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33870__$1,(13),dchan);
} else {
if((state_val_33871 === (14))){
var inst_33855 = cljs.core.async.close_BANG_(out);
var state_33870__$1 = state_33870;
var statearr_33945_35328 = state_33870__$1;
(statearr_33945_35328[(2)] = inst_33855);

(statearr_33945_35328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (16))){
var inst_33863 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
var statearr_33952_35329 = state_33870__$1;
(statearr_33952_35329[(2)] = inst_33863);

(statearr_33952_35329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (10))){
var inst_33810 = (state_33870[(8)]);
var inst_33843 = (state_33870[(2)]);
var inst_33844 = (inst_33810 + (1));
var inst_33810__$1 = inst_33844;
var state_33870__$1 = (function (){var statearr_33959 = state_33870;
(statearr_33959[(14)] = inst_33843);

(statearr_33959[(8)] = inst_33810__$1);

return statearr_33959;
})();
var statearr_33961_35334 = state_33870__$1;
(statearr_33961_35334[(2)] = null);

(statearr_33961_35334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (8))){
var inst_33848 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
var statearr_33964_35341 = state_33870__$1;
(statearr_33964_35341[(2)] = inst_33848);

(statearr_33964_35341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_33968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33968[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_33968[(1)] = (1));

return statearr_33968;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_33870){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_33870);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e33969){var ex__32226__auto__ = e33969;
var statearr_33972_35343 = state_33870;
(statearr_33972_35343[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_33870[(4)]))){
var statearr_33974_35344 = state_33870;
(statearr_33974_35344[(1)] = cljs.core.first((state_33870[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35345 = state_33870;
state_33870 = G__35345;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_33870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_33870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_33983 = f__32381__auto__();
(statearr_33983[(6)] = c__32380__auto___35291);

return statearr_33983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33989 = arguments.length;
switch (G__33989) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32380__auto___35349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_34030){
var state_val_34031 = (state_34030[(1)]);
if((state_val_34031 === (7))){
var inst_34006 = (state_34030[(7)]);
var inst_34005 = (state_34030[(8)]);
var inst_34005__$1 = (state_34030[(2)]);
var inst_34006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34005__$1,(0),null);
var inst_34007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34005__$1,(1),null);
var inst_34008 = (inst_34006__$1 == null);
var state_34030__$1 = (function (){var statearr_34033 = state_34030;
(statearr_34033[(9)] = inst_34007);

(statearr_34033[(7)] = inst_34006__$1);

(statearr_34033[(8)] = inst_34005__$1);

return statearr_34033;
})();
if(cljs.core.truth_(inst_34008)){
var statearr_34034_35351 = state_34030__$1;
(statearr_34034_35351[(1)] = (8));

} else {
var statearr_34035_35352 = state_34030__$1;
(statearr_34035_35352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (1))){
var inst_33994 = cljs.core.vec(chs);
var inst_33996 = inst_33994;
var state_34030__$1 = (function (){var statearr_34036 = state_34030;
(statearr_34036[(10)] = inst_33996);

return statearr_34036;
})();
var statearr_34037_35357 = state_34030__$1;
(statearr_34037_35357[(2)] = null);

(statearr_34037_35357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (4))){
var inst_33996 = (state_34030[(10)]);
var state_34030__$1 = state_34030;
return cljs.core.async.ioc_alts_BANG_(state_34030__$1,(7),inst_33996);
} else {
if((state_val_34031 === (6))){
var inst_34025 = (state_34030[(2)]);
var state_34030__$1 = state_34030;
var statearr_34042_35358 = state_34030__$1;
(statearr_34042_35358[(2)] = inst_34025);

(statearr_34042_35358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (3))){
var inst_34027 = (state_34030[(2)]);
var state_34030__$1 = state_34030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34030__$1,inst_34027);
} else {
if((state_val_34031 === (2))){
var inst_33996 = (state_34030[(10)]);
var inst_33998 = cljs.core.count(inst_33996);
var inst_33999 = (inst_33998 > (0));
var state_34030__$1 = state_34030;
if(cljs.core.truth_(inst_33999)){
var statearr_34048_35359 = state_34030__$1;
(statearr_34048_35359[(1)] = (4));

} else {
var statearr_34049_35360 = state_34030__$1;
(statearr_34049_35360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (11))){
var inst_33996 = (state_34030[(10)]);
var inst_34015 = (state_34030[(2)]);
var tmp34046 = inst_33996;
var inst_33996__$1 = tmp34046;
var state_34030__$1 = (function (){var statearr_34050 = state_34030;
(statearr_34050[(11)] = inst_34015);

(statearr_34050[(10)] = inst_33996__$1);

return statearr_34050;
})();
var statearr_34055_35361 = state_34030__$1;
(statearr_34055_35361[(2)] = null);

(statearr_34055_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (9))){
var inst_34006 = (state_34030[(7)]);
var state_34030__$1 = state_34030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34030__$1,(11),out,inst_34006);
} else {
if((state_val_34031 === (5))){
var inst_34023 = cljs.core.async.close_BANG_(out);
var state_34030__$1 = state_34030;
var statearr_34064_35362 = state_34030__$1;
(statearr_34064_35362[(2)] = inst_34023);

(statearr_34064_35362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (10))){
var inst_34021 = (state_34030[(2)]);
var state_34030__$1 = state_34030;
var statearr_34065_35363 = state_34030__$1;
(statearr_34065_35363[(2)] = inst_34021);

(statearr_34065_35363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (8))){
var inst_34007 = (state_34030[(9)]);
var inst_33996 = (state_34030[(10)]);
var inst_34006 = (state_34030[(7)]);
var inst_34005 = (state_34030[(8)]);
var inst_34010 = (function (){var cs = inst_33996;
var vec__34001 = inst_34005;
var v = inst_34006;
var c = inst_34007;
return (function (p1__33984_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33984_SHARP_);
});
})();
var inst_34011 = cljs.core.filterv(inst_34010,inst_33996);
var inst_33996__$1 = inst_34011;
var state_34030__$1 = (function (){var statearr_34067 = state_34030;
(statearr_34067[(10)] = inst_33996__$1);

return statearr_34067;
})();
var statearr_34068_35369 = state_34030__$1;
(statearr_34068_35369[(2)] = null);

(statearr_34068_35369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_34073 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34073[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_34073[(1)] = (1));

return statearr_34073;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_34030){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_34030);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e34078){var ex__32226__auto__ = e34078;
var statearr_34079_35375 = state_34030;
(statearr_34079_35375[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_34030[(4)]))){
var statearr_34080_35376 = state_34030;
(statearr_34080_35376[(1)] = cljs.core.first((state_34030[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35377 = state_34030;
state_34030 = G__35377;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_34030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_34030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_34081 = f__32381__auto__();
(statearr_34081[(6)] = c__32380__auto___35349);

return statearr_34081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34091 = arguments.length;
switch (G__34091) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32380__auto___35379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_34120){
var state_val_34121 = (state_34120[(1)]);
if((state_val_34121 === (7))){
var inst_34102 = (state_34120[(7)]);
var inst_34102__$1 = (state_34120[(2)]);
var inst_34103 = (inst_34102__$1 == null);
var inst_34104 = cljs.core.not(inst_34103);
var state_34120__$1 = (function (){var statearr_34126 = state_34120;
(statearr_34126[(7)] = inst_34102__$1);

return statearr_34126;
})();
if(inst_34104){
var statearr_34127_35381 = state_34120__$1;
(statearr_34127_35381[(1)] = (8));

} else {
var statearr_34131_35382 = state_34120__$1;
(statearr_34131_35382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (1))){
var inst_34096 = (0);
var state_34120__$1 = (function (){var statearr_34133 = state_34120;
(statearr_34133[(8)] = inst_34096);

return statearr_34133;
})();
var statearr_34134_35383 = state_34120__$1;
(statearr_34134_35383[(2)] = null);

(statearr_34134_35383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (4))){
var state_34120__$1 = state_34120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34120__$1,(7),ch);
} else {
if((state_val_34121 === (6))){
var inst_34115 = (state_34120[(2)]);
var state_34120__$1 = state_34120;
var statearr_34135_35385 = state_34120__$1;
(statearr_34135_35385[(2)] = inst_34115);

(statearr_34135_35385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (3))){
var inst_34117 = (state_34120[(2)]);
var inst_34118 = cljs.core.async.close_BANG_(out);
var state_34120__$1 = (function (){var statearr_34136 = state_34120;
(statearr_34136[(9)] = inst_34117);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34120__$1,inst_34118);
} else {
if((state_val_34121 === (2))){
var inst_34096 = (state_34120[(8)]);
var inst_34098 = (inst_34096 < n);
var state_34120__$1 = state_34120;
if(cljs.core.truth_(inst_34098)){
var statearr_34137_35386 = state_34120__$1;
(statearr_34137_35386[(1)] = (4));

} else {
var statearr_34138_35387 = state_34120__$1;
(statearr_34138_35387[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (11))){
var inst_34096 = (state_34120[(8)]);
var inst_34107 = (state_34120[(2)]);
var inst_34108 = (inst_34096 + (1));
var inst_34096__$1 = inst_34108;
var state_34120__$1 = (function (){var statearr_34143 = state_34120;
(statearr_34143[(10)] = inst_34107);

(statearr_34143[(8)] = inst_34096__$1);

return statearr_34143;
})();
var statearr_34144_35394 = state_34120__$1;
(statearr_34144_35394[(2)] = null);

(statearr_34144_35394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (9))){
var state_34120__$1 = state_34120;
var statearr_34148_35395 = state_34120__$1;
(statearr_34148_35395[(2)] = null);

(statearr_34148_35395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (5))){
var state_34120__$1 = state_34120;
var statearr_34150_35396 = state_34120__$1;
(statearr_34150_35396[(2)] = null);

(statearr_34150_35396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (10))){
var inst_34112 = (state_34120[(2)]);
var state_34120__$1 = state_34120;
var statearr_34151_35400 = state_34120__$1;
(statearr_34151_35400[(2)] = inst_34112);

(statearr_34151_35400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34121 === (8))){
var inst_34102 = (state_34120[(7)]);
var state_34120__$1 = state_34120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34120__$1,(11),out,inst_34102);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_34155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34155[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_34155[(1)] = (1));

return statearr_34155;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_34120){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_34120);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e34157){var ex__32226__auto__ = e34157;
var statearr_34158_35401 = state_34120;
(statearr_34158_35401[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_34120[(4)]))){
var statearr_34159_35402 = state_34120;
(statearr_34159_35402[(1)] = cljs.core.first((state_34120[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35403 = state_34120;
state_34120 = G__35403;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_34120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_34120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_34160 = f__32381__auto__();
(statearr_34160[(6)] = c__32380__auto___35379);

return statearr_34160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34162 = (function (f,ch,meta34163){
this.f = f;
this.ch = ch;
this.meta34163 = meta34163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34164,meta34163__$1){
var self__ = this;
var _34164__$1 = this;
return (new cljs.core.async.t_cljs$core$async34162(self__.f,self__.ch,meta34163__$1));
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34164){
var self__ = this;
var _34164__$1 = this;
return self__.meta34163;
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34170 = (function (f,ch,meta34163,_,fn1,meta34171){
this.f = f;
this.ch = ch;
this.meta34163 = meta34163;
this._ = _;
this.fn1 = fn1;
this.meta34171 = meta34171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34172,meta34171__$1){
var self__ = this;
var _34172__$1 = this;
return (new cljs.core.async.t_cljs$core$async34170(self__.f,self__.ch,self__.meta34163,self__._,self__.fn1,meta34171__$1));
}));

(cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34172){
var self__ = this;
var _34172__$1 = this;
return self__.meta34171;
}));

(cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34161_SHARP_){
var G__34175 = (((p1__34161_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34161_SHARP_) : self__.f.call(null,p1__34161_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34175) : f1.call(null,G__34175));
});
}));

(cljs.core.async.t_cljs$core$async34170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34163","meta34163",-1443804621,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34162","cljs.core.async/t_cljs$core$async34162",428952116,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34171","meta34171",2147128277,null)], null);
}));

(cljs.core.async.t_cljs$core$async34170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34170");

(cljs.core.async.t_cljs$core$async34170.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34170.
 */
cljs.core.async.__GT_t_cljs$core$async34170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34170(f__$1,ch__$1,meta34163__$1,___$2,fn1__$1,meta34171){
return (new cljs.core.async.t_cljs$core$async34170(f__$1,ch__$1,meta34163__$1,___$2,fn1__$1,meta34171));
});

}

return (new cljs.core.async.t_cljs$core$async34170(self__.f,self__.ch,self__.meta34163,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34176 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34176) : self__.f.call(null,G__34176));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34163","meta34163",-1443804621,null)], null);
}));

(cljs.core.async.t_cljs$core$async34162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34162");

(cljs.core.async.t_cljs$core$async34162.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34162.
 */
cljs.core.async.__GT_t_cljs$core$async34162 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34162(f__$1,ch__$1,meta34163){
return (new cljs.core.async.t_cljs$core$async34162(f__$1,ch__$1,meta34163));
});

}

return (new cljs.core.async.t_cljs$core$async34162(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34177 = (function (f,ch,meta34178){
this.f = f;
this.ch = ch;
this.meta34178 = meta34178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34179,meta34178__$1){
var self__ = this;
var _34179__$1 = this;
return (new cljs.core.async.t_cljs$core$async34177(self__.f,self__.ch,meta34178__$1));
}));

(cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34179){
var self__ = this;
var _34179__$1 = this;
return self__.meta34178;
}));

(cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34178","meta34178",-714569336,null)], null);
}));

(cljs.core.async.t_cljs$core$async34177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34177");

(cljs.core.async.t_cljs$core$async34177.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34177.
 */
cljs.core.async.__GT_t_cljs$core$async34177 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34177(f__$1,ch__$1,meta34178){
return (new cljs.core.async.t_cljs$core$async34177(f__$1,ch__$1,meta34178));
});

}

return (new cljs.core.async.t_cljs$core$async34177(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34182 = (function (p,ch,meta34183){
this.p = p;
this.ch = ch;
this.meta34183 = meta34183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34184,meta34183__$1){
var self__ = this;
var _34184__$1 = this;
return (new cljs.core.async.t_cljs$core$async34182(self__.p,self__.ch,meta34183__$1));
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34184){
var self__ = this;
var _34184__$1 = this;
return self__.meta34183;
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34183","meta34183",-331673541,null)], null);
}));

(cljs.core.async.t_cljs$core$async34182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34182");

(cljs.core.async.t_cljs$core$async34182.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34182.
 */
cljs.core.async.__GT_t_cljs$core$async34182 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34182(p__$1,ch__$1,meta34183){
return (new cljs.core.async.t_cljs$core$async34182(p__$1,ch__$1,meta34183));
});

}

return (new cljs.core.async.t_cljs$core$async34182(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34190 = arguments.length;
switch (G__34190) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32380__auto___35425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_34211){
var state_val_34212 = (state_34211[(1)]);
if((state_val_34212 === (7))){
var inst_34207 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34213_35426 = state_34211__$1;
(statearr_34213_35426[(2)] = inst_34207);

(statearr_34213_35426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (1))){
var state_34211__$1 = state_34211;
var statearr_34214_35430 = state_34211__$1;
(statearr_34214_35430[(2)] = null);

(statearr_34214_35430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (4))){
var inst_34193 = (state_34211[(7)]);
var inst_34193__$1 = (state_34211[(2)]);
var inst_34194 = (inst_34193__$1 == null);
var state_34211__$1 = (function (){var statearr_34215 = state_34211;
(statearr_34215[(7)] = inst_34193__$1);

return statearr_34215;
})();
if(cljs.core.truth_(inst_34194)){
var statearr_34216_35431 = state_34211__$1;
(statearr_34216_35431[(1)] = (5));

} else {
var statearr_34217_35432 = state_34211__$1;
(statearr_34217_35432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (6))){
var inst_34193 = (state_34211[(7)]);
var inst_34198 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34193) : p.call(null,inst_34193));
var state_34211__$1 = state_34211;
if(cljs.core.truth_(inst_34198)){
var statearr_34218_35433 = state_34211__$1;
(statearr_34218_35433[(1)] = (8));

} else {
var statearr_34219_35434 = state_34211__$1;
(statearr_34219_35434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (3))){
var inst_34209 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34211__$1,inst_34209);
} else {
if((state_val_34212 === (2))){
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34211__$1,(4),ch);
} else {
if((state_val_34212 === (11))){
var inst_34201 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34222_35436 = state_34211__$1;
(statearr_34222_35436[(2)] = inst_34201);

(statearr_34222_35436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (9))){
var state_34211__$1 = state_34211;
var statearr_34223_35437 = state_34211__$1;
(statearr_34223_35437[(2)] = null);

(statearr_34223_35437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (5))){
var inst_34196 = cljs.core.async.close_BANG_(out);
var state_34211__$1 = state_34211;
var statearr_34224_35438 = state_34211__$1;
(statearr_34224_35438[(2)] = inst_34196);

(statearr_34224_35438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (10))){
var inst_34204 = (state_34211[(2)]);
var state_34211__$1 = (function (){var statearr_34226 = state_34211;
(statearr_34226[(8)] = inst_34204);

return statearr_34226;
})();
var statearr_34230_35443 = state_34211__$1;
(statearr_34230_35443[(2)] = null);

(statearr_34230_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (8))){
var inst_34193 = (state_34211[(7)]);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34211__$1,(11),out,inst_34193);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_34231 = [null,null,null,null,null,null,null,null,null];
(statearr_34231[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_34231[(1)] = (1));

return statearr_34231;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_34211){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_34211);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e34232){var ex__32226__auto__ = e34232;
var statearr_34234_35444 = state_34211;
(statearr_34234_35444[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_34211[(4)]))){
var statearr_34235_35445 = state_34211;
(statearr_34235_35445[(1)] = cljs.core.first((state_34211[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35446 = state_34211;
state_34211 = G__35446;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_34211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_34211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_34237 = f__32381__auto__();
(statearr_34237[(6)] = c__32380__auto___35425);

return statearr_34237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34242 = arguments.length;
switch (G__34242) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_34326){
var state_val_34327 = (state_34326[(1)]);
if((state_val_34327 === (7))){
var inst_34322 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34328_35448 = state_34326__$1;
(statearr_34328_35448[(2)] = inst_34322);

(statearr_34328_35448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (20))){
var inst_34273 = (state_34326[(7)]);
var inst_34297 = (state_34326[(2)]);
var inst_34298 = cljs.core.next(inst_34273);
var inst_34259 = inst_34298;
var inst_34260 = null;
var inst_34261 = (0);
var inst_34262 = (0);
var state_34326__$1 = (function (){var statearr_34333 = state_34326;
(statearr_34333[(8)] = inst_34259);

(statearr_34333[(9)] = inst_34261);

(statearr_34333[(10)] = inst_34297);

(statearr_34333[(11)] = inst_34262);

(statearr_34333[(12)] = inst_34260);

return statearr_34333;
})();
var statearr_34340_35449 = state_34326__$1;
(statearr_34340_35449[(2)] = null);

(statearr_34340_35449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (1))){
var state_34326__$1 = state_34326;
var statearr_34341_35450 = state_34326__$1;
(statearr_34341_35450[(2)] = null);

(statearr_34341_35450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (4))){
var inst_34248 = (state_34326[(13)]);
var inst_34248__$1 = (state_34326[(2)]);
var inst_34249 = (inst_34248__$1 == null);
var state_34326__$1 = (function (){var statearr_34345 = state_34326;
(statearr_34345[(13)] = inst_34248__$1);

return statearr_34345;
})();
if(cljs.core.truth_(inst_34249)){
var statearr_34346_35451 = state_34326__$1;
(statearr_34346_35451[(1)] = (5));

} else {
var statearr_34347_35452 = state_34326__$1;
(statearr_34347_35452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (15))){
var state_34326__$1 = state_34326;
var statearr_34351_35453 = state_34326__$1;
(statearr_34351_35453[(2)] = null);

(statearr_34351_35453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (21))){
var state_34326__$1 = state_34326;
var statearr_34352_35454 = state_34326__$1;
(statearr_34352_35454[(2)] = null);

(statearr_34352_35454[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (13))){
var inst_34259 = (state_34326[(8)]);
var inst_34261 = (state_34326[(9)]);
var inst_34262 = (state_34326[(11)]);
var inst_34260 = (state_34326[(12)]);
var inst_34269 = (state_34326[(2)]);
var inst_34270 = (inst_34262 + (1));
var tmp34348 = inst_34259;
var tmp34349 = inst_34261;
var tmp34350 = inst_34260;
var inst_34259__$1 = tmp34348;
var inst_34260__$1 = tmp34350;
var inst_34261__$1 = tmp34349;
var inst_34262__$1 = inst_34270;
var state_34326__$1 = (function (){var statearr_34353 = state_34326;
(statearr_34353[(8)] = inst_34259__$1);

(statearr_34353[(14)] = inst_34269);

(statearr_34353[(9)] = inst_34261__$1);

(statearr_34353[(11)] = inst_34262__$1);

(statearr_34353[(12)] = inst_34260__$1);

return statearr_34353;
})();
var statearr_34354_35455 = state_34326__$1;
(statearr_34354_35455[(2)] = null);

(statearr_34354_35455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (22))){
var state_34326__$1 = state_34326;
var statearr_34355_35456 = state_34326__$1;
(statearr_34355_35456[(2)] = null);

(statearr_34355_35456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (6))){
var inst_34248 = (state_34326[(13)]);
var inst_34257 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34248) : f.call(null,inst_34248));
var inst_34258 = cljs.core.seq(inst_34257);
var inst_34259 = inst_34258;
var inst_34260 = null;
var inst_34261 = (0);
var inst_34262 = (0);
var state_34326__$1 = (function (){var statearr_34356 = state_34326;
(statearr_34356[(8)] = inst_34259);

(statearr_34356[(9)] = inst_34261);

(statearr_34356[(11)] = inst_34262);

(statearr_34356[(12)] = inst_34260);

return statearr_34356;
})();
var statearr_34357_35457 = state_34326__$1;
(statearr_34357_35457[(2)] = null);

(statearr_34357_35457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (17))){
var inst_34273 = (state_34326[(7)]);
var inst_34277 = cljs.core.chunk_first(inst_34273);
var inst_34291 = cljs.core.chunk_rest(inst_34273);
var inst_34292 = cljs.core.count(inst_34277);
var inst_34259 = inst_34291;
var inst_34260 = inst_34277;
var inst_34261 = inst_34292;
var inst_34262 = (0);
var state_34326__$1 = (function (){var statearr_34362 = state_34326;
(statearr_34362[(8)] = inst_34259);

(statearr_34362[(9)] = inst_34261);

(statearr_34362[(11)] = inst_34262);

(statearr_34362[(12)] = inst_34260);

return statearr_34362;
})();
var statearr_34363_35458 = state_34326__$1;
(statearr_34363_35458[(2)] = null);

(statearr_34363_35458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (3))){
var inst_34324 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34326__$1,inst_34324);
} else {
if((state_val_34327 === (12))){
var inst_34306 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34364_35459 = state_34326__$1;
(statearr_34364_35459[(2)] = inst_34306);

(statearr_34364_35459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (2))){
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34326__$1,(4),in$);
} else {
if((state_val_34327 === (23))){
var inst_34320 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34365_35460 = state_34326__$1;
(statearr_34365_35460[(2)] = inst_34320);

(statearr_34365_35460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (19))){
var inst_34301 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34366_35461 = state_34326__$1;
(statearr_34366_35461[(2)] = inst_34301);

(statearr_34366_35461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (11))){
var inst_34259 = (state_34326[(8)]);
var inst_34273 = (state_34326[(7)]);
var inst_34273__$1 = cljs.core.seq(inst_34259);
var state_34326__$1 = (function (){var statearr_34367 = state_34326;
(statearr_34367[(7)] = inst_34273__$1);

return statearr_34367;
})();
if(inst_34273__$1){
var statearr_34368_35462 = state_34326__$1;
(statearr_34368_35462[(1)] = (14));

} else {
var statearr_34369_35463 = state_34326__$1;
(statearr_34369_35463[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (9))){
var inst_34308 = (state_34326[(2)]);
var inst_34309 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34326__$1 = (function (){var statearr_34371 = state_34326;
(statearr_34371[(15)] = inst_34308);

return statearr_34371;
})();
if(cljs.core.truth_(inst_34309)){
var statearr_34375_35464 = state_34326__$1;
(statearr_34375_35464[(1)] = (21));

} else {
var statearr_34376_35465 = state_34326__$1;
(statearr_34376_35465[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (5))){
var inst_34251 = cljs.core.async.close_BANG_(out);
var state_34326__$1 = state_34326;
var statearr_34377_35467 = state_34326__$1;
(statearr_34377_35467[(2)] = inst_34251);

(statearr_34377_35467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (14))){
var inst_34273 = (state_34326[(7)]);
var inst_34275 = cljs.core.chunked_seq_QMARK_(inst_34273);
var state_34326__$1 = state_34326;
if(inst_34275){
var statearr_34378_35468 = state_34326__$1;
(statearr_34378_35468[(1)] = (17));

} else {
var statearr_34381_35469 = state_34326__$1;
(statearr_34381_35469[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (16))){
var inst_34304 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34382_35470 = state_34326__$1;
(statearr_34382_35470[(2)] = inst_34304);

(statearr_34382_35470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (10))){
var inst_34262 = (state_34326[(11)]);
var inst_34260 = (state_34326[(12)]);
var inst_34267 = cljs.core._nth(inst_34260,inst_34262);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34326__$1,(13),out,inst_34267);
} else {
if((state_val_34327 === (18))){
var inst_34273 = (state_34326[(7)]);
var inst_34295 = cljs.core.first(inst_34273);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34326__$1,(20),out,inst_34295);
} else {
if((state_val_34327 === (8))){
var inst_34261 = (state_34326[(9)]);
var inst_34262 = (state_34326[(11)]);
var inst_34264 = (inst_34262 < inst_34261);
var inst_34265 = inst_34264;
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34265)){
var statearr_34384_35474 = state_34326__$1;
(statearr_34384_35474[(1)] = (10));

} else {
var statearr_34385_35475 = state_34326__$1;
(statearr_34385_35475[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32223__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32223__auto____0 = (function (){
var statearr_34387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34387[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32223__auto__);

(statearr_34387[(1)] = (1));

return statearr_34387;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32223__auto____1 = (function (state_34326){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_34326);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e34388){var ex__32226__auto__ = e34388;
var statearr_34389_35476 = state_34326;
(statearr_34389_35476[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_34326[(4)]))){
var statearr_34390_35477 = state_34326;
(statearr_34390_35477[(1)] = cljs.core.first((state_34326[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35478 = state_34326;
state_34326 = G__35478;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32223__auto__ = function(state_34326){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32223__auto____1.call(this,state_34326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32223__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32223__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_34391 = f__32381__auto__();
(statearr_34391[(6)] = c__32380__auto__);

return statearr_34391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));

return c__32380__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34393 = arguments.length;
switch (G__34393) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34397 = arguments.length;
switch (G__34397) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34401 = arguments.length;
switch (G__34401) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32380__auto___35486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_34428){
var state_val_34429 = (state_34428[(1)]);
if((state_val_34429 === (7))){
var inst_34423 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34430_35487 = state_34428__$1;
(statearr_34430_35487[(2)] = inst_34423);

(statearr_34430_35487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (1))){
var inst_34405 = null;
var state_34428__$1 = (function (){var statearr_34431 = state_34428;
(statearr_34431[(7)] = inst_34405);

return statearr_34431;
})();
var statearr_34432_35488 = state_34428__$1;
(statearr_34432_35488[(2)] = null);

(statearr_34432_35488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (4))){
var inst_34408 = (state_34428[(8)]);
var inst_34408__$1 = (state_34428[(2)]);
var inst_34409 = (inst_34408__$1 == null);
var inst_34410 = cljs.core.not(inst_34409);
var state_34428__$1 = (function (){var statearr_34433 = state_34428;
(statearr_34433[(8)] = inst_34408__$1);

return statearr_34433;
})();
if(inst_34410){
var statearr_34434_35492 = state_34428__$1;
(statearr_34434_35492[(1)] = (5));

} else {
var statearr_34435_35493 = state_34428__$1;
(statearr_34435_35493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (6))){
var state_34428__$1 = state_34428;
var statearr_34436_35494 = state_34428__$1;
(statearr_34436_35494[(2)] = null);

(statearr_34436_35494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (3))){
var inst_34425 = (state_34428[(2)]);
var inst_34426 = cljs.core.async.close_BANG_(out);
var state_34428__$1 = (function (){var statearr_34437 = state_34428;
(statearr_34437[(9)] = inst_34425);

return statearr_34437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34428__$1,inst_34426);
} else {
if((state_val_34429 === (2))){
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34428__$1,(4),ch);
} else {
if((state_val_34429 === (11))){
var inst_34408 = (state_34428[(8)]);
var inst_34417 = (state_34428[(2)]);
var inst_34405 = inst_34408;
var state_34428__$1 = (function (){var statearr_34443 = state_34428;
(statearr_34443[(7)] = inst_34405);

(statearr_34443[(10)] = inst_34417);

return statearr_34443;
})();
var statearr_34444_35496 = state_34428__$1;
(statearr_34444_35496[(2)] = null);

(statearr_34444_35496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (9))){
var inst_34408 = (state_34428[(8)]);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34428__$1,(11),out,inst_34408);
} else {
if((state_val_34429 === (5))){
var inst_34408 = (state_34428[(8)]);
var inst_34405 = (state_34428[(7)]);
var inst_34412 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34408,inst_34405);
var state_34428__$1 = state_34428;
if(inst_34412){
var statearr_34448_35497 = state_34428__$1;
(statearr_34448_35497[(1)] = (8));

} else {
var statearr_34449_35498 = state_34428__$1;
(statearr_34449_35498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (10))){
var inst_34420 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34450_35499 = state_34428__$1;
(statearr_34450_35499[(2)] = inst_34420);

(statearr_34450_35499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (8))){
var inst_34405 = (state_34428[(7)]);
var tmp34447 = inst_34405;
var inst_34405__$1 = tmp34447;
var state_34428__$1 = (function (){var statearr_34451 = state_34428;
(statearr_34451[(7)] = inst_34405__$1);

return statearr_34451;
})();
var statearr_34452_35500 = state_34428__$1;
(statearr_34452_35500[(2)] = null);

(statearr_34452_35500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_34455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_34428){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_34428);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e34459){var ex__32226__auto__ = e34459;
var statearr_34460_35501 = state_34428;
(statearr_34460_35501[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_34428[(4)]))){
var statearr_34461_35502 = state_34428;
(statearr_34461_35502[(1)] = cljs.core.first((state_34428[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35503 = state_34428;
state_34428 = G__35503;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_34428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_34428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_34462 = f__32381__auto__();
(statearr_34462[(6)] = c__32380__auto___35486);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34464 = arguments.length;
switch (G__34464) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32380__auto___35506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_34502){
var state_val_34503 = (state_34502[(1)]);
if((state_val_34503 === (7))){
var inst_34498 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
var statearr_34508_35507 = state_34502__$1;
(statearr_34508_35507[(2)] = inst_34498);

(statearr_34508_35507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (1))){
var inst_34465 = (new Array(n));
var inst_34466 = inst_34465;
var inst_34467 = (0);
var state_34502__$1 = (function (){var statearr_34509 = state_34502;
(statearr_34509[(7)] = inst_34467);

(statearr_34509[(8)] = inst_34466);

return statearr_34509;
})();
var statearr_34510_35508 = state_34502__$1;
(statearr_34510_35508[(2)] = null);

(statearr_34510_35508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (4))){
var inst_34470 = (state_34502[(9)]);
var inst_34470__$1 = (state_34502[(2)]);
var inst_34471 = (inst_34470__$1 == null);
var inst_34472 = cljs.core.not(inst_34471);
var state_34502__$1 = (function (){var statearr_34515 = state_34502;
(statearr_34515[(9)] = inst_34470__$1);

return statearr_34515;
})();
if(inst_34472){
var statearr_34516_35509 = state_34502__$1;
(statearr_34516_35509[(1)] = (5));

} else {
var statearr_34517_35510 = state_34502__$1;
(statearr_34517_35510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (15))){
var inst_34492 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
var statearr_34518_35511 = state_34502__$1;
(statearr_34518_35511[(2)] = inst_34492);

(statearr_34518_35511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (13))){
var state_34502__$1 = state_34502;
var statearr_34519_35512 = state_34502__$1;
(statearr_34519_35512[(2)] = null);

(statearr_34519_35512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (6))){
var inst_34467 = (state_34502[(7)]);
var inst_34488 = (inst_34467 > (0));
var state_34502__$1 = state_34502;
if(cljs.core.truth_(inst_34488)){
var statearr_34520_35513 = state_34502__$1;
(statearr_34520_35513[(1)] = (12));

} else {
var statearr_34521_35514 = state_34502__$1;
(statearr_34521_35514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (3))){
var inst_34500 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34502__$1,inst_34500);
} else {
if((state_val_34503 === (12))){
var inst_34466 = (state_34502[(8)]);
var inst_34490 = cljs.core.vec(inst_34466);
var state_34502__$1 = state_34502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34502__$1,(15),out,inst_34490);
} else {
if((state_val_34503 === (2))){
var state_34502__$1 = state_34502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34502__$1,(4),ch);
} else {
if((state_val_34503 === (11))){
var inst_34482 = (state_34502[(2)]);
var inst_34483 = (new Array(n));
var inst_34466 = inst_34483;
var inst_34467 = (0);
var state_34502__$1 = (function (){var statearr_34522 = state_34502;
(statearr_34522[(7)] = inst_34467);

(statearr_34522[(8)] = inst_34466);

(statearr_34522[(10)] = inst_34482);

return statearr_34522;
})();
var statearr_34523_35519 = state_34502__$1;
(statearr_34523_35519[(2)] = null);

(statearr_34523_35519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (9))){
var inst_34466 = (state_34502[(8)]);
var inst_34480 = cljs.core.vec(inst_34466);
var state_34502__$1 = state_34502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34502__$1,(11),out,inst_34480);
} else {
if((state_val_34503 === (5))){
var inst_34470 = (state_34502[(9)]);
var inst_34467 = (state_34502[(7)]);
var inst_34475 = (state_34502[(11)]);
var inst_34466 = (state_34502[(8)]);
var inst_34474 = (inst_34466[inst_34467] = inst_34470);
var inst_34475__$1 = (inst_34467 + (1));
var inst_34476 = (inst_34475__$1 < n);
var state_34502__$1 = (function (){var statearr_34524 = state_34502;
(statearr_34524[(11)] = inst_34475__$1);

(statearr_34524[(12)] = inst_34474);

return statearr_34524;
})();
if(cljs.core.truth_(inst_34476)){
var statearr_34525_35528 = state_34502__$1;
(statearr_34525_35528[(1)] = (8));

} else {
var statearr_34526_35529 = state_34502__$1;
(statearr_34526_35529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (14))){
var inst_34495 = (state_34502[(2)]);
var inst_34496 = cljs.core.async.close_BANG_(out);
var state_34502__$1 = (function (){var statearr_34530 = state_34502;
(statearr_34530[(13)] = inst_34495);

return statearr_34530;
})();
var statearr_34531_35530 = state_34502__$1;
(statearr_34531_35530[(2)] = inst_34496);

(statearr_34531_35530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (10))){
var inst_34486 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
var statearr_34532_35535 = state_34502__$1;
(statearr_34532_35535[(2)] = inst_34486);

(statearr_34532_35535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (8))){
var inst_34475 = (state_34502[(11)]);
var inst_34466 = (state_34502[(8)]);
var tmp34528 = inst_34466;
var inst_34466__$1 = tmp34528;
var inst_34467 = inst_34475;
var state_34502__$1 = (function (){var statearr_34533 = state_34502;
(statearr_34533[(7)] = inst_34467);

(statearr_34533[(8)] = inst_34466__$1);

return statearr_34533;
})();
var statearr_34534_35536 = state_34502__$1;
(statearr_34534_35536[(2)] = null);

(statearr_34534_35536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_34538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34538[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_34538[(1)] = (1));

return statearr_34538;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_34502){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_34502);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e34539){var ex__32226__auto__ = e34539;
var statearr_34540_35538 = state_34502;
(statearr_34540_35538[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_34502[(4)]))){
var statearr_34541_35539 = state_34502;
(statearr_34541_35539[(1)] = cljs.core.first((state_34502[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35541 = state_34502;
state_34502 = G__35541;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_34502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_34502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_34542 = f__32381__auto__();
(statearr_34542[(6)] = c__32380__auto___35506);

return statearr_34542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34544 = arguments.length;
switch (G__34544) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32380__auto___35543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32381__auto__ = (function (){var switch__32222__auto__ = (function (state_34589){
var state_val_34590 = (state_34589[(1)]);
if((state_val_34590 === (7))){
var inst_34585 = (state_34589[(2)]);
var state_34589__$1 = state_34589;
var statearr_34591_35544 = state_34589__$1;
(statearr_34591_35544[(2)] = inst_34585);

(statearr_34591_35544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (1))){
var inst_34545 = [];
var inst_34546 = inst_34545;
var inst_34547 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34589__$1 = (function (){var statearr_34592 = state_34589;
(statearr_34592[(7)] = inst_34546);

(statearr_34592[(8)] = inst_34547);

return statearr_34592;
})();
var statearr_34593_35545 = state_34589__$1;
(statearr_34593_35545[(2)] = null);

(statearr_34593_35545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (4))){
var inst_34550 = (state_34589[(9)]);
var inst_34550__$1 = (state_34589[(2)]);
var inst_34551 = (inst_34550__$1 == null);
var inst_34552 = cljs.core.not(inst_34551);
var state_34589__$1 = (function (){var statearr_34594 = state_34589;
(statearr_34594[(9)] = inst_34550__$1);

return statearr_34594;
})();
if(inst_34552){
var statearr_34595_35546 = state_34589__$1;
(statearr_34595_35546[(1)] = (5));

} else {
var statearr_34596_35547 = state_34589__$1;
(statearr_34596_35547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (15))){
var inst_34546 = (state_34589[(7)]);
var inst_34577 = cljs.core.vec(inst_34546);
var state_34589__$1 = state_34589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34589__$1,(18),out,inst_34577);
} else {
if((state_val_34590 === (13))){
var inst_34572 = (state_34589[(2)]);
var state_34589__$1 = state_34589;
var statearr_34597_35550 = state_34589__$1;
(statearr_34597_35550[(2)] = inst_34572);

(statearr_34597_35550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (6))){
var inst_34546 = (state_34589[(7)]);
var inst_34574 = inst_34546.length;
var inst_34575 = (inst_34574 > (0));
var state_34589__$1 = state_34589;
if(cljs.core.truth_(inst_34575)){
var statearr_34598_35551 = state_34589__$1;
(statearr_34598_35551[(1)] = (15));

} else {
var statearr_34599_35552 = state_34589__$1;
(statearr_34599_35552[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (17))){
var inst_34582 = (state_34589[(2)]);
var inst_34583 = cljs.core.async.close_BANG_(out);
var state_34589__$1 = (function (){var statearr_34600 = state_34589;
(statearr_34600[(10)] = inst_34582);

return statearr_34600;
})();
var statearr_34601_35553 = state_34589__$1;
(statearr_34601_35553[(2)] = inst_34583);

(statearr_34601_35553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (3))){
var inst_34587 = (state_34589[(2)]);
var state_34589__$1 = state_34589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34589__$1,inst_34587);
} else {
if((state_val_34590 === (12))){
var inst_34546 = (state_34589[(7)]);
var inst_34565 = cljs.core.vec(inst_34546);
var state_34589__$1 = state_34589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34589__$1,(14),out,inst_34565);
} else {
if((state_val_34590 === (2))){
var state_34589__$1 = state_34589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34589__$1,(4),ch);
} else {
if((state_val_34590 === (11))){
var inst_34550 = (state_34589[(9)]);
var inst_34554 = (state_34589[(11)]);
var inst_34546 = (state_34589[(7)]);
var inst_34562 = inst_34546.push(inst_34550);
var tmp34602 = inst_34546;
var inst_34546__$1 = tmp34602;
var inst_34547 = inst_34554;
var state_34589__$1 = (function (){var statearr_34603 = state_34589;
(statearr_34603[(7)] = inst_34546__$1);

(statearr_34603[(8)] = inst_34547);

(statearr_34603[(12)] = inst_34562);

return statearr_34603;
})();
var statearr_34604_35554 = state_34589__$1;
(statearr_34604_35554[(2)] = null);

(statearr_34604_35554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (9))){
var inst_34547 = (state_34589[(8)]);
var inst_34558 = cljs.core.keyword_identical_QMARK_(inst_34547,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34589__$1 = state_34589;
var statearr_34605_35555 = state_34589__$1;
(statearr_34605_35555[(2)] = inst_34558);

(statearr_34605_35555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (5))){
var inst_34550 = (state_34589[(9)]);
var inst_34554 = (state_34589[(11)]);
var inst_34555 = (state_34589[(13)]);
var inst_34547 = (state_34589[(8)]);
var inst_34554__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34550) : f.call(null,inst_34550));
var inst_34555__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34554__$1,inst_34547);
var state_34589__$1 = (function (){var statearr_34607 = state_34589;
(statearr_34607[(11)] = inst_34554__$1);

(statearr_34607[(13)] = inst_34555__$1);

return statearr_34607;
})();
if(inst_34555__$1){
var statearr_34608_35556 = state_34589__$1;
(statearr_34608_35556[(1)] = (8));

} else {
var statearr_34609_35557 = state_34589__$1;
(statearr_34609_35557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (14))){
var inst_34550 = (state_34589[(9)]);
var inst_34554 = (state_34589[(11)]);
var inst_34567 = (state_34589[(2)]);
var inst_34568 = [];
var inst_34569 = inst_34568.push(inst_34550);
var inst_34546 = inst_34568;
var inst_34547 = inst_34554;
var state_34589__$1 = (function (){var statearr_34610 = state_34589;
(statearr_34610[(14)] = inst_34567);

(statearr_34610[(15)] = inst_34569);

(statearr_34610[(7)] = inst_34546);

(statearr_34610[(8)] = inst_34547);

return statearr_34610;
})();
var statearr_34611_35558 = state_34589__$1;
(statearr_34611_35558[(2)] = null);

(statearr_34611_35558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (16))){
var state_34589__$1 = state_34589;
var statearr_34612_35559 = state_34589__$1;
(statearr_34612_35559[(2)] = null);

(statearr_34612_35559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (10))){
var inst_34560 = (state_34589[(2)]);
var state_34589__$1 = state_34589;
if(cljs.core.truth_(inst_34560)){
var statearr_34613_35560 = state_34589__$1;
(statearr_34613_35560[(1)] = (11));

} else {
var statearr_34614_35561 = state_34589__$1;
(statearr_34614_35561[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (18))){
var inst_34579 = (state_34589[(2)]);
var state_34589__$1 = state_34589;
var statearr_34615_35562 = state_34589__$1;
(statearr_34615_35562[(2)] = inst_34579);

(statearr_34615_35562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34590 === (8))){
var inst_34555 = (state_34589[(13)]);
var state_34589__$1 = state_34589;
var statearr_34619_35563 = state_34589__$1;
(statearr_34619_35563[(2)] = inst_34555);

(statearr_34619_35563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32223__auto__ = null;
var cljs$core$async$state_machine__32223__auto____0 = (function (){
var statearr_34620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34620[(0)] = cljs$core$async$state_machine__32223__auto__);

(statearr_34620[(1)] = (1));

return statearr_34620;
});
var cljs$core$async$state_machine__32223__auto____1 = (function (state_34589){
while(true){
var ret_value__32224__auto__ = (function (){try{while(true){
var result__32225__auto__ = switch__32222__auto__(state_34589);
if(cljs.core.keyword_identical_QMARK_(result__32225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32225__auto__;
}
break;
}
}catch (e34621){var ex__32226__auto__ = e34621;
var statearr_34622_35564 = state_34589;
(statearr_34622_35564[(2)] = ex__32226__auto__);


if(cljs.core.seq((state_34589[(4)]))){
var statearr_34623_35565 = state_34589;
(statearr_34623_35565[(1)] = cljs.core.first((state_34589[(4)])));

} else {
throw ex__32226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35566 = state_34589;
state_34589 = G__35566;
continue;
} else {
return ret_value__32224__auto__;
}
break;
}
});
cljs$core$async$state_machine__32223__auto__ = function(state_34589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32223__auto____1.call(this,state_34589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32223__auto____0;
cljs$core$async$state_machine__32223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32223__auto____1;
return cljs$core$async$state_machine__32223__auto__;
})()
})();
var state__32382__auto__ = (function (){var statearr_34624 = f__32381__auto__();
(statearr_34624[(6)] = c__32380__auto___35543);

return statearr_34624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32382__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
