import { writable } from "svelte/store";

export const menu = writable({
  content: "",
  parent: "",
  opt: "",
  visible: false,
  pos: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  items: [],
  index: -1,
});
