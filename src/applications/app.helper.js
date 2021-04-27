export const NOT_LOADED = "NOT_LOADED";
export const LOADING_RESOURCE_CODE = "LOADING_RESOURCE_CODE";
export const NOT_BOOTSTRAPPED = "NOT_BOOTSTRAPPED";
export const BOOTSTRAPING = "BOOTSTRAPING";
export const NOT_MOUNTED = "NOT_MOUNTED";
export const MOUNTING = "MOUNTING";
export const MOUNTED = "MOUNTED";
export const UPDATING = "UPDATING";
export const LOAD_ERROR = "LOAD_ERROR";
export const UNMOUNTING = "UNMOUNTING";
export const UNLOADING = "UNLOADING";
export const SKIP_BECAUSE_BROKEN = "SKIP_BECAUSE_BROKEN";

export function shouldBeActive(app) {
  return app.activeWhen(window.location);
}

// 应用是否是激活的
export function isActive(app) {
  return app.status === MOUNTED;
}
