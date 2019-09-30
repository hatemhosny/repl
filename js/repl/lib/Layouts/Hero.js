import { declare, Union } from "../fable-library.2.4.2/Types.js";
import { Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Color$$$ofColor as Color$0024$0024$0024ofColor, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { union, list, type, string } from "../fable-library.2.4.2/Reflection.js";
import { createObj } from "../fable-library.2.4.2/Util.js";
export const Option = declare(function Fulma_Hero_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Hero.Option", [], Option, () => ["is-bold", "is-medium", "is-large", "is-halfheight", "is-fullheight-with-navbar", "is-fullheight", ["Color", [Color$0024002EIColor$0024reflection()]], ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function hero(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 2:
      case 3:
      case 5:
      case 4:
      case 0:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 6:
        {
          const arg00 = Color$0024$0024$0024ofColor(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }

      case 8:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 9:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  }, "hero"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, children);
}
export function head(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "hero-head"), function (props$$4, children$$5) {
    const props$$5 = props$$4;
    const children$$6 = children$$5;
    return React.createElement("div", createObj(props$$5, 1), ...children$$6);
  }, children$$4);
}
export function body(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "hero-body"), function (props$$7, children$$9) {
    const props$$8 = props$$7;
    const children$$10 = children$$9;
    return React.createElement("div", createObj(props$$8, 1), ...children$$10);
  }, children$$8);
}
export function foot(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "hero-foot"), function (props$$10, children$$13) {
    const props$$11 = props$$10;
    const children$$14 = children$$13;
    return React.createElement("div", createObj(props$$11, 1), ...children$$14);
  }, children$$12);
}
export function video(options$$4, children$$16) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "hero-video"), function (props$$13, children$$17) {
    const props$$14 = props$$13;
    const children$$18 = children$$17;
    return React.createElement("div", createObj(props$$14, 1), ...children$$18);
  }, children$$16);
}
export function buttons(options$$5, children$$20) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "hero-buttons"), function (props$$16, children$$21) {
    const props$$17 = props$$16;
    const children$$22 = children$$21;
    return React.createElement("div", createObj(props$$17, 1), ...children$$22);
  }, children$$20);
}