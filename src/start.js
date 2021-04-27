import reroute from "./navigations/reroute";

export let started = false;
function start() {
  started = true;
  reroute();
}

export default start;
