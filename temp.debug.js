// gist doesn't support executable js...
if (typeof actionLog !== "undefined") {
  window.actionLog.listen(console.log.bind(console), "console");
  window._origin_actionLog_dispatch = window.actionLog.dispatch;
  window.actionLog.dispatch = function(...rest) {
    console.log("actionLog.dispatch", rest);
    console.error(new Error("stack"));
    debugger;
    return window._origin_actionLog_dispatch.apply(window.actionLog, rest);
  };
  console.log("waching actionLog.dispatch");
} else { console.log('failed to watch actionLog') }
