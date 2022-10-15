console.log("Module 2 is running");

import { inc } from "./mymodule.js";

console.log("inc(100)", inc());

export function selam() {
  console.log("MERHABA");
}

export default function () {
  console.log("GÜLE GÜLE");
}
