import { DATA } from "./json.js";

const TIMEOUT = 100;

export default {
  getDatas: (cb, timeout) => setTimeout(() => cb(DATA), timeout || TIMEOUT)
};
