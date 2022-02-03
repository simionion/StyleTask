
shadow.cljs.devtools.client.env.module_loaded('app');

try { circle.core.init(); } catch (e) { console.error("An error occurred when calling (circle.core/init)"); throw(e); }