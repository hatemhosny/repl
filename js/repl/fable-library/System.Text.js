import { addInPlace } from "./Array.js";
import { declare } from "./Types.js";
import { type } from "./Reflection.js";
import { join, format } from "./String.js";
export const StringBuilder = declare(function System_Text_StringBuilder(value, capacity) {
  const $this$$1 = this;
  $this$$1.buf = [];

  if (!(value == null)) {
    addInPlace(value, $this$$1.buf);
  }
});
export function StringBuilder$reflection() {
  return type("System.Text.StringBuilder");
}
export function StringBuilder$$$$002Ector$$Z18115A39(value, capacity) {
  return this instanceof StringBuilder ? StringBuilder.call(this, value, capacity) : new StringBuilder(value, capacity);
}
export function StringBuilder$$$$002Ector$$Z524259A4(capacity$$1) {
  return StringBuilder$$$$002Ector$$Z18115A39.call(this, null, capacity$$1);
}
export function StringBuilder$$$$002Ector$$Z721C83C5(value$$1) {
  return StringBuilder$$$$002Ector$$Z18115A39.call(this, value$$1, 16);
}
export function StringBuilder$$$$002Ector() {
  return StringBuilder$$$$002Ector$$Z18115A39.call(this, null, 16);
}
export function StringBuilder$$Append$$Z721C83C5(x, s) {
  addInPlace(s, x.buf);
  return x;
}
export function StringBuilder$$Append$$244C7CD6(x$$1, c) {
  addInPlace(c, x$$1.buf);
  return x$$1;
}
export function StringBuilder$$AppendFormat$$433E080(x$$2, fmt, o) {
  addInPlace(format(fmt, o), x$$2.buf);
  return x$$2;
}
export function StringBuilder$$AppendLine(x$$3) {
  addInPlace("\n", x$$3.buf);
  return x$$3;
}
export function StringBuilder$$AppendLine$$Z721C83C5(x$$4, s$$1) {
  addInPlace(s$$1, x$$4.buf);
  addInPlace("\n", x$$4.buf);
  return x$$4;
}

StringBuilder.prototype.toString = function () {
  const __ = this;
  return join("", __.buf);
};