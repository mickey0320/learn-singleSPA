import { NOT_LOADED, shouldBeActive, LOADING_RESOURCE_CODE, NOT_BOOTSTRAPPED, BOOTSTRAPING, NOT_MOUNTED, MOUNTED } from "./app.helper";
import reroute from "../navigations/reroute";

const apps = [];
function registerApplication(appName, loadApp, activeWhen, customProps) {
  const app = {
    name: appName,
    loadApp,
    activeWhen,
    customProps,
    status: NOT_LOADED,
  };
  apps.push(app);
  reroute();
}

export function getAppChanges() {
  const appsToLoad = [];
  const appsToMount = [];
  const appsToUnmount = [];

  apps.forEach((app) => {
    const shouleActive = shouldBeActive(app);
    switch (app.status) {
      case NOT_LOADED:
      case LOADING_RESOURCE_CODE:
        if (shouleActive) {
          appsToLoad.push(app);
        }
        break;
      case NOT_BOOTSTRAPPED:
      case BOOTSTRAPING:
      case NOT_MOUNTED:
        if (shouleActive) {
          appsToMount.push(app);
        }
        break;
      case MOUNTED:
        if (shouleActive) {
          appsToUnmount(app);
        }
        break;
    }
  });

  return {
    appsToLoad,
    appsToMount,
    appsToUnmount,
  };
}

export default registerApplication;
