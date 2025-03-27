"use client";
import {
  require_react_dom
} from "./chunk-UP6LQVYV.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/sonner/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var zt = (s) => {
  switch (s) {
    case "success":
      return te;
    case "info":
      return oe;
    case "warning":
      return ee;
    case "error":
      return ae;
    default:
      return null;
  }
};
var Zt = Array(12).fill(0);
var jt = ({ visible: s, className: e }) => import_react2.default.createElement("div", { className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "), "data-visible": s }, import_react2.default.createElement("div", { className: "sonner-spinner" }, Zt.map((t, a) => import_react2.default.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` }))));
var te = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" }));
var ee = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" }));
var oe = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" }));
var ae = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }));
var Yt = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, import_react2.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), import_react2.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var $t = () => {
  let [s, e] = import_react3.default.useState(document.hidden);
  return import_react3.default.useEffect(() => {
    let t = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), s;
};
var bt = 1;
var yt = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    });
    this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    };
    this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    };
    this.create = (e) => {
      var S;
      let { message: t, ...a } = e, h = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, l = this.toasts.find((m) => m.id === h), w = e.dismissible === void 0 ? true : e.dismissible;
      return l ? this.toasts = this.toasts.map((m) => m.id === h ? (this.publish({ ...m, ...e, id: h, title: t }), { ...m, ...e, id: h, dismissible: w, title: t }) : m) : this.addToast({ title: t, ...a, dismissible: w, id: h }), h;
    };
    this.dismiss = (e) => (e || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: true })), e);
    this.message = (e, t) => this.create({ ...t, message: e });
    this.error = (e, t) => this.create({ ...t, message: e, type: "error" });
    this.success = (e, t) => this.create({ ...t, type: "success", message: e });
    this.info = (e, t) => this.create({ ...t, type: "info", message: e });
    this.warning = (e, t) => this.create({ ...t, type: "warning", message: e });
    this.loading = (e, t) => this.create({ ...t, type: "loading", message: e });
    this.promise = (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let h = e instanceof Promise ? e : e(), l = a !== void 0, w, S = h.then(async (i) => {
        if (w = ["resolve", i], import_react4.default.isValidElement(i)) l = false, this.create({ id: a, type: "default", message: i });
        else if (se(i) && !i.ok) {
          l = false;
          let v = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
          this.create({ id: a, type: "error", message: v, description: F });
        } else if (t.success !== void 0) {
          l = false;
          let v = typeof t.success == "function" ? await t.success(i) : t.success, F = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "success", message: v, description: F });
        }
      }).catch(async (i) => {
        if (w = ["reject", i], t.error !== void 0) {
          l = false;
          let D = typeof t.error == "function" ? await t.error(i) : t.error, v = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "error", message: D, description: v });
        }
      }).finally(() => {
        var i;
        l && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
      }), m = () => new Promise((i, D) => S.then(() => w[0] === "reject" ? D(w[1]) : i(w[1])).catch(D));
      return typeof a != "string" && typeof a != "number" ? { unwrap: m } : Object.assign(a, { unwrap: m });
    };
    this.custom = (e, t) => {
      let a = (t == null ? void 0 : t.id) || bt++;
      return this.create({ jsx: e(a), id: a, ...t }), a;
    };
    this.subscribers = [], this.toasts = [];
  }
};
var T = new yt();
var ne = (s, e) => {
  let t = (e == null ? void 0 : e.id) || bt++;
  return T.addToast({ title: s, ...e, id: t }), t;
};
var se = (s) => s && typeof s == "object" && "ok" in s && typeof s.ok == "boolean" && "status" in s && typeof s.status == "number";
var ie = ne;
var le = () => T.toasts;
var ce = Object.assign(ie, { success: T.success, info: T.info, warning: T.warning, error: T.error, custom: T.custom, message: T.message, promise: T.promise, dismiss: T.dismiss, loading: T.loading }, { getHistory: le });
function wt(s, { insertAt: e } = {}) {
  if (!s || typeof document == "undefined") return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = s : a.appendChild(document.createTextNode(s));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(s) {
  return s.label !== void 0;
}
var fe = 3;
var pe = "32px";
var me = "16px";
var Ft = 4e3;
var ge = 356;
var he = 14;
var be = 20;
var ye = 200;
function k(...s) {
  return s.filter(Boolean).join(" ");
}
function we(s) {
  let [e, t] = s.split("-"), a = [];
  return e && a.push(e), t && a.push(t), a;
}
var xe = (s) => {
  var Et, Dt, Pt, Nt, Bt, Ct, It, kt, Mt, Ht, At;
  let { invert: e, toast: t, unstyled: a, interacting: h, setHeights: l, visibleToasts: w, heights: S, index: m, toasts: i, expanded: D, removeToast: v, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: c, className: ot = "", descriptionClassName: at = "", duration: K, position: rt, gap: pt, loadingIcon: nt, expandByDefault: B, classNames: r, icons: P, closeButtonAriaLabel: st = "Close toast", pauseWhenPageIsHidden: it } = s, [j, M] = import_react.default.useState(null), [lt, X] = import_react.default.useState(null), [W, H] = import_react.default.useState(false), [A, mt] = import_react.default.useState(false), [L, Y] = import_react.default.useState(false), [ct, u] = import_react.default.useState(false), [g, y] = import_react.default.useState(false), [R, z] = import_react.default.useState(0), [f, _] = import_react.default.useState(0), O = import_react.default.useRef(t.duration || K || Ft), J = import_react.default.useRef(null), C = import_react.default.useRef(null), _t = m === 0, Vt = m + 1 <= w, N = t.type, V = t.dismissible !== false, Ut = t.className || "", Kt = t.descriptionClassName || "", dt = import_react.default.useMemo(() => S.findIndex((n) => n.toastId === t.id) || 0, [S, t.id]), Xt = import_react.default.useMemo(() => {
    var n;
    return (n = t.closeButton) != null ? n : et;
  }, [t.closeButton, et]), vt = import_react.default.useMemo(() => t.duration || K || Ft, [t.duration, K]), gt = import_react.default.useRef(0), U = import_react.default.useRef(0), Tt = import_react.default.useRef(0), G = import_react.default.useRef(null), [Jt, Gt] = rt.split("-"), St = import_react.default.useMemo(() => S.reduce((n, p, d) => d >= dt ? n : n + p.height, 0), [S, dt]), Rt = $t(), Qt = t.invert || e, ht = N === "loading";
  U.current = import_react.default.useMemo(() => dt * pt + St, [dt, St]), import_react.default.useEffect(() => {
    O.current = vt;
  }, [vt]), import_react.default.useEffect(() => {
    H(true);
  }, []), import_react.default.useEffect(() => {
    let n = C.current;
    if (n) {
      let p = n.getBoundingClientRect().height;
      return _(p), l((d) => [{ toastId: t.id, height: p, position: t.position }, ...d]), () => l((d) => d.filter((b) => b.toastId !== t.id));
    }
  }, [l, t.id]), import_react.default.useLayoutEffect(() => {
    if (!W) return;
    let n = C.current, p = n.style.height;
    n.style.height = "auto";
    let d = n.getBoundingClientRect().height;
    n.style.height = p, _(d), l((b) => b.find((x) => x.toastId === t.id) ? b.map((x) => x.toastId === t.id ? { ...x, height: d } : x) : [{ toastId: t.id, height: d, position: t.position }, ...b]);
  }, [W, t.title, t.description, l, t.id]);
  let $ = import_react.default.useCallback(() => {
    mt(true), z(U.current), l((n) => n.filter((p) => p.toastId !== t.id)), setTimeout(() => {
      v(t);
    }, ye);
  }, [t, v, l, U]);
  import_react.default.useEffect(() => {
    if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let n;
    return D || h || it && Rt ? (() => {
      if (Tt.current < gt.current) {
        let b = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        O.current = O.current - b;
      }
      Tt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      O.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), n = setTimeout(() => {
        var b;
        (b = t.onAutoClose) == null || b.call(t, t), $();
      }, O.current));
    })(), () => clearTimeout(n);
  }, [D, h, t, N, it, Rt, $]), import_react.default.useEffect(() => {
    t.delete && $();
  }, [$, t.delete]);
  function qt() {
    var n, p, d;
    return P != null && P.loading ? import_react.default.createElement("div", { className: k(r == null ? void 0 : r.loader, (n = t == null ? void 0 : t.classNames) == null ? void 0 : n.loader, "sonner-loader"), "data-visible": N === "loading" }, P.loading) : nt ? import_react.default.createElement("div", { className: k(r == null ? void 0 : r.loader, (p = t == null ? void 0 : t.classNames) == null ? void 0 : p.loader, "sonner-loader"), "data-visible": N === "loading" }, nt) : import_react.default.createElement(jt, { className: k(r == null ? void 0 : r.loader, (d = t == null ? void 0 : t.classNames) == null ? void 0 : d.loader), visible: N === "loading" });
  }
  return import_react.default.createElement("li", { tabIndex: 0, ref: C, className: k(ot, Ut, r == null ? void 0 : r.toast, (Et = t == null ? void 0 : t.classNames) == null ? void 0 : Et.toast, r == null ? void 0 : r.default, r == null ? void 0 : r[N], (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt[N]), "data-sonner-toast": "", "data-rich-colors": (Pt = t.richColors) != null ? Pt : F, "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": W, "data-promise": !!t.promise, "data-swiped": g, "data-removed": A, "data-visible": Vt, "data-y-position": Jt, "data-x-position": Gt, "data-index": m, "data-front": _t, "data-swiping": L, "data-dismissible": V, "data-type": N, "data-invert": Qt, "data-swipe-out": ct, "data-swipe-direction": lt, "data-expanded": !!(D || B && W), style: { "--index": m, "--toasts-before": m, "--z-index": i.length - m, "--offset": `${A ? R : U.current}px`, "--initial-height": B ? "auto" : `${f}px`, ...ut, ...t.style }, onPointerDown: (n) => {
    ht || !V || (J.current = /* @__PURE__ */ new Date(), z(U.current), n.target.setPointerCapture(n.pointerId), n.target.tagName !== "BUTTON" && (Y(true), G.current = { x: n.clientX, y: n.clientY }));
  }, onPointerUp: () => {
    var x, Q, q, Z;
    if (ct || !V) return;
    G.current = null;
    let n = Number(((x = C.current) == null ? void 0 : x.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), p = Number(((Q = C.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), d = (/* @__PURE__ */ new Date()).getTime() - ((q = J.current) == null ? void 0 : q.getTime()), b = j === "x" ? n : p, I = Math.abs(b) / d;
    if (Math.abs(b) >= be || I > 0.11) {
      z(U.current), (Z = t.onDismiss) == null || Z.call(t, t), X(j === "x" ? n > 0 ? "right" : "left" : p > 0 ? "down" : "up"), $(), u(true), y(false);
      return;
    }
    Y(false), M(null);
  }, onPointerMove: (n) => {
    var Q, q, Z, Lt;
    if (!G.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
    let d = n.clientY - G.current.y, b = n.clientX - G.current.x, I = (q = s.swipeDirections) != null ? q : we(rt);
    !j && (Math.abs(b) > 1 || Math.abs(d) > 1) && M(Math.abs(b) > Math.abs(d) ? "x" : "y");
    let x = { x: 0, y: 0 };
    j === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && d < 0 || I.includes("bottom") && d > 0) && (x.y = d) : j === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x.x = b), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && y(true), (Z = C.current) == null || Z.style.setProperty("--swipe-amount-x", `${x.x}px`), (Lt = C.current) == null || Lt.style.setProperty("--swipe-amount-y", `${x.y}px`);
  } }, Xt && !t.jsx ? import_react.default.createElement("button", { "aria-label": st, "data-disabled": ht, "data-close-button": true, onClick: ht || !V ? () => {
  } : () => {
    var n;
    $(), (n = t.onDismiss) == null || n.call(t, t);
  }, className: k(r == null ? void 0 : r.closeButton, (Nt = t == null ? void 0 : t.classNames) == null ? void 0 : Nt.closeButton) }, (Bt = P == null ? void 0 : P.close) != null ? Bt : Yt) : null, t.jsx || (0, import_react.isValidElement)(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : import_react.default.createElement(import_react.default.Fragment, null, N || t.icon || t.promise ? import_react.default.createElement("div", { "data-icon": "", className: k(r == null ? void 0 : r.icon, (Ct = t == null ? void 0 : t.classNames) == null ? void 0 : Ct.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || qt() : null, t.type !== "loading" ? t.icon || (P == null ? void 0 : P[N]) || zt(N) : null) : null, import_react.default.createElement("div", { "data-content": "", className: k(r == null ? void 0 : r.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content) }, import_react.default.createElement("div", { "data-title": "", className: k(r == null ? void 0 : r.title, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.title) }, typeof t.title == "function" ? t.title() : t.title), t.description ? import_react.default.createElement("div", { "data-description": "", className: k(at, Kt, r == null ? void 0 : r.description, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.description) }, typeof t.description == "function" ? t.description() : t.description) : null), (0, import_react.isValidElement)(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? import_react.default.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || ft, onClick: (n) => {
    var p, d;
    tt(t.cancel) && V && ((d = (p = t.cancel).onClick) == null || d.call(p, n), $());
  }, className: k(r == null ? void 0 : r.cancelButton, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.cancelButton) }, t.cancel.label) : null, (0, import_react.isValidElement)(t.action) ? t.action : t.action && tt(t.action) ? import_react.default.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || c, onClick: (n) => {
    var p, d;
    tt(t.action) && ((d = (p = t.action).onClick) == null || d.call(p, n), !n.defaultPrevented && $());
  }, className: k(r == null ? void 0 : r.actionButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.actionButton) }, t.action.label) : null));
};
function Wt() {
  if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
  let s = document.documentElement.getAttribute("dir");
  return s === "auto" || !s ? window.getComputedStyle(document.documentElement).direction : s;
}
function ve(s, e) {
  let t = {};
  return [s, e].forEach((a, h) => {
    let l = h === 1, w = l ? "--mobile-offset" : "--offset", S = l ? me : pe;
    function m(i) {
      ["top", "right", "bottom", "left"].forEach((D) => {
        t[`${w}-${D}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof a == "number" || typeof a == "string" ? m(a) : typeof a == "object" ? ["top", "right", "bottom", "left"].forEach((i) => {
      a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
    }) : m(S);
  }), t;
}
function Ye() {
  let [s, e] = import_react.default.useState([]);
  return import_react.default.useEffect(() => T.subscribe((t) => {
    e((a) => {
      if ("dismiss" in t && t.dismiss) return a.filter((l) => l.id !== t.id);
      let h = a.findIndex((l) => l.id === t.id);
      if (h !== -1) {
        let l = [...a];
        return l[h] = { ...l[h], ...t }, l;
      } else return [t, ...a];
    });
  }), []), { toasts: s };
}
var Oe = (0, import_react.forwardRef)(function(e, t) {
  let { invert: a, position: h = "bottom-right", hotkey: l = ["altKey", "KeyT"], expand: w, closeButton: S, className: m, offset: i, mobileOffset: D, theme: v = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = fe, toastOptions: c, dir: ot = Wt(), gap: at = he, loadingIcon: K, icons: rt, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: nt } = e, [B, r] = import_react.default.useState([]), P = import_react.default.useMemo(() => Array.from(new Set([h].concat(B.filter((u) => u.position).map((u) => u.position)))), [B, h]), [st, it] = import_react.default.useState([]), [j, M] = import_react.default.useState(false), [lt, X] = import_react.default.useState(false), [W, H] = import_react.default.useState(v !== "system" ? v : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = import_react.default.useRef(null), mt = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = import_react.default.useRef(null), Y = import_react.default.useRef(false), ct = import_react.default.useCallback((u) => {
    r((g) => {
      var y;
      return (y = g.find((R) => R.id === u.id)) != null && y.delete || T.dismiss(u.id), g.filter(({ id: R }) => R !== u.id);
    });
  }, []);
  return import_react.default.useEffect(() => T.subscribe((u) => {
    if (u.dismiss) {
      r((g) => g.map((y) => y.id === u.id ? { ...y, delete: true } : y));
      return;
    }
    setTimeout(() => {
      import_react_dom.default.flushSync(() => {
        r((g) => {
          let y = g.findIndex((R) => R.id === u.id);
          return y !== -1 ? [...g.slice(0, y), { ...g[y], ...u }, ...g.slice(y + 1)] : [u, ...g];
        });
      });
    });
  }), []), import_react.default.useEffect(() => {
    if (v !== "system") {
      H(v);
      return;
    }
    if (v === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
    let u = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      u.addEventListener("change", ({ matches: g }) => {
        H(g ? "dark" : "light");
      });
    } catch (g) {
      u.addListener(({ matches: y }) => {
        try {
          H(y ? "dark" : "light");
        } catch (R) {
          console.error(R);
        }
      });
    }
  }, [v]), import_react.default.useEffect(() => {
    B.length <= 1 && M(false);
  }, [B]), import_react.default.useEffect(() => {
    let u = (g) => {
      var R, z;
      l.every((f) => g[f] || g.code === f) && (M(true), (R = A.current) == null || R.focus()), g.code === "Escape" && (document.activeElement === A.current || (z = A.current) != null && z.contains(document.activeElement)) && M(false);
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [l]), import_react.default.useEffect(() => {
    if (A.current) return () => {
      L.current && (L.current.focus({ preventScroll: true }), L.current = null, Y.current = false);
    };
  }, [A.current]), import_react.default.createElement("section", { ref: t, "aria-label": `${pt} ${mt}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, P.map((u, g) => {
    var z;
    let [y, R] = u.split("-");
    return B.length ? import_react.default.createElement("ol", { key: u, dir: ot === "auto" ? Wt() : ot, tabIndex: -1, ref: A, className: m, "data-sonner-toaster": true, "data-theme": W, "data-y-position": y, "data-lifted": j && B.length > 1 && !w, "data-x-position": R, style: { "--front-toast-height": `${((z = st[0]) == null ? void 0 : z.height) || 0}px`, "--width": `${ge}px`, "--gap": `${at}px`, ...ut, ...ve(i, D) }, onBlur: (f) => {
      Y.current && !f.currentTarget.contains(f.relatedTarget) && (Y.current = false, L.current && (L.current.focus({ preventScroll: true }), L.current = null));
    }, onFocus: (f) => {
      f.target instanceof HTMLElement && f.target.dataset.dismissible === "false" || Y.current || (Y.current = true, L.current = f.relatedTarget);
    }, onMouseEnter: () => M(true), onMouseMove: () => M(true), onMouseLeave: () => {
      lt || M(false);
    }, onPointerDown: (f) => {
      f.target instanceof HTMLElement && f.target.dataset.dismissible === "false" || X(true);
    }, onPointerUp: () => X(false) }, B.filter((f) => !f.position && g === 0 || f.position === u).map((f, _) => {
      var O, J;
      return import_react.default.createElement(xe, { key: f.id, icons: rt, index: _, toast: f, defaultRichColors: F, duration: (O = c == null ? void 0 : c.duration) != null ? O : et, className: c == null ? void 0 : c.className, descriptionClassName: c == null ? void 0 : c.descriptionClassName, invert: a, visibleToasts: ft, closeButton: (J = c == null ? void 0 : c.closeButton) != null ? J : S, interacting: lt, position: u, style: c == null ? void 0 : c.style, unstyled: c == null ? void 0 : c.unstyled, classNames: c == null ? void 0 : c.classNames, cancelButtonStyle: c == null ? void 0 : c.cancelButtonStyle, actionButtonStyle: c == null ? void 0 : c.actionButtonStyle, removeToast: ct, toasts: B.filter((C) => C.position == f.position), heights: st.filter((C) => C.position == f.position), setHeights: it, expandByDefault: w, gap: at, loadingIcon: K, expanded: j, pauseWhenPageIsHidden: nt, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
export {
  Oe as Toaster,
  ce as toast,
  Ye as useSonner
};
//# sourceMappingURL=sonner.js.map
