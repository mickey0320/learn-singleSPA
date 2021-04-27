import { started } from "../start";

function reroute() {
  if (started) {
    // 装载应用
    performAppChanges();
  } else {
    //注册应用，预先加载
    loadApps();
  }
}

// 预先加载app
function loadApps() {}
// 根据路径来装载应用
function performAppChanges() {}

export default reroute;
