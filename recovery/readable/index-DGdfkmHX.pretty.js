(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s);
  new MutationObserver((s) => {
    for (const c of s) if (c.type === "childList") for (const d of c.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
  }).observe(document, { childList: true, subtree: true });
  function o(s) {
    const c = {};
    return s.integrity && (c.integrity = s.integrity), s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? c.credentials = "include" : s.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function a(s) {
    if (s.ep) return;
    s.ep = true;
    const c = o(s);
    fetch(s.href, c);
  }
})();
function la(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Uf = { exports: {} }, xs = {};
var xh;
function sS() {
  if (xh) return xs;
  xh = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(a, s, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      c = {};
      for (var g in s) g !== "key" && (c[g] = s[g]);
    } else c = s;
    return s = c.ref, { $$typeof: n, type: a, key: d, ref: s !== void 0 ? s : null, props: c };
  }
  return xs.Fragment = t, xs.jsx = o, xs.jsxs = o, xs;
}
var bh;
function rS() {
  return bh || (bh = 1, Uf.exports = sS()), Uf.exports;
}
var C = rS(), Lf = { exports: {} }, Ae = {};
var Nh;
function uS() {
  if (Nh) return Ae;
  Nh = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), E = Symbol.iterator;
  function b(I) {
    return I === null || typeof I != "object" ? null : (I = E && I[E] || I["@@iterator"], typeof I == "function" ? I : null);
  }
  var D = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, H = Object.assign, P = {};
  function V(I, K, oe) {
    this.props = I, this.context = K, this.refs = P, this.updater = oe || D;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(I, K) {
    if (typeof I != "object" && typeof I != "function" && I != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, I, K, "setState");
  }, V.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function ie() {
  }
  ie.prototype = V.prototype;
  function X(I, K, oe) {
    this.props = I, this.context = K, this.refs = P, this.updater = oe || D;
  }
  var j = X.prototype = new ie();
  j.constructor = X, H(j, V.prototype), j.isPureReactComponent = true;
  var ae = Array.isArray;
  function Y() {
  }
  var ne = { H: null, A: null, T: null, S: null }, Te = Object.prototype.hasOwnProperty;
  function re(I, K, oe) {
    var Q = oe.ref;
    return { $$typeof: n, type: I, key: K, ref: Q !== void 0 ? Q : null, props: oe };
  }
  function ve(I, K) {
    return re(I.type, K, I.props);
  }
  function pe(I) {
    return typeof I == "object" && I !== null && I.$$typeof === n;
  }
  function Z(I) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(oe) {
      return K[oe];
    });
  }
  var ge = /\/+/g;
  function Ee(I, K) {
    return typeof I == "object" && I !== null && I.key != null ? Z("" + I.key) : K.toString(36);
  }
  function Fe(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(Y, Y) : (I.status = "pending", I.then(function(K) {
          I.status === "pending" && (I.status = "fulfilled", I.value = K);
        }, function(K) {
          I.status === "pending" && (I.status = "rejected", I.reason = K);
        })), I.status) {
          case "fulfilled":
            return I.value;
          case "rejected":
            throw I.reason;
        }
    }
    throw I;
  }
  function B(I, K, oe, Q, _e) {
    var Ne = typeof I;
    (Ne === "undefined" || Ne === "boolean") && (I = null);
    var Me = false;
    if (I === null) Me = true;
    else switch (Ne) {
      case "bigint":
      case "string":
      case "number":
        Me = true;
        break;
      case "object":
        switch (I.$$typeof) {
          case n:
          case t:
            Me = true;
            break;
          case v:
            return Me = I._init, B(Me(I._payload), K, oe, Q, _e);
        }
    }
    if (Me) return _e = _e(I), Me = Q === "" ? "." + Ee(I, 0) : Q, ae(_e) ? (oe = "", Me != null && (oe = Me.replace(ge, "$&/") + "/"), B(_e, K, oe, "", function(Di) {
      return Di;
    })) : _e != null && (pe(_e) && (_e = ve(_e, oe + (_e.key == null || I && I.key === _e.key ? "" : ("" + _e.key).replace(ge, "$&/") + "/") + Me)), K.push(_e)), 1;
    Me = 0;
    var je = Q === "" ? "." : Q + ":";
    if (ae(I)) for (var rt = 0; rt < I.length; rt++) Q = I[rt], Ne = je + Ee(Q, rt), Me += B(Q, K, oe, Ne, _e);
    else if (rt = b(I), typeof rt == "function") for (I = rt.call(I), rt = 0; !(Q = I.next()).done; ) Q = Q.value, Ne = je + Ee(Q, rt++), Me += B(Q, K, oe, Ne, _e);
    else if (Ne === "object") {
      if (typeof I.then == "function") return B(Fe(I), K, oe, Q, _e);
      throw K = String(I), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    }
    return Me;
  }
  function te(I, K, oe) {
    if (I == null) return I;
    var Q = [], _e = 0;
    return B(I, Q, "", "", function(Ne) {
      return K.call(oe, Ne, _e++);
    }), Q;
  }
  function ce(I) {
    if (I._status === -1) {
      var K = I._result;
      K = K(), K.then(function(oe) {
        (I._status === 0 || I._status === -1) && (I._status = 1, I._result = oe);
      }, function(oe) {
        (I._status === 0 || I._status === -1) && (I._status = 2, I._result = oe);
      }), I._status === -1 && (I._status = 0, I._result = K);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var Ue = typeof reportError == "function" ? reportError : function(I) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof I == "object" && I !== null && typeof I.message == "string" ? String(I.message) : String(I), error: I });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", I);
      return;
    }
    console.error(I);
  }, Ve = { map: te, forEach: function(I, K, oe) {
    te(I, function() {
      K.apply(this, arguments);
    }, oe);
  }, count: function(I) {
    var K = 0;
    return te(I, function() {
      K++;
    }), K;
  }, toArray: function(I) {
    return te(I, function(K) {
      return K;
    }) || [];
  }, only: function(I) {
    if (!pe(I)) throw Error("React.Children.only expected to receive a single React element child.");
    return I;
  } };
  return Ae.Activity = _, Ae.Children = Ve, Ae.Component = V, Ae.Fragment = o, Ae.Profiler = s, Ae.PureComponent = X, Ae.StrictMode = a, Ae.Suspense = y, Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ne, Ae.__COMPILER_RUNTIME = { __proto__: null, c: function(I) {
    return ne.H.useMemoCache(I);
  } }, Ae.cache = function(I) {
    return function() {
      return I.apply(null, arguments);
    };
  }, Ae.cacheSignal = function() {
    return null;
  }, Ae.cloneElement = function(I, K, oe) {
    if (I == null) throw Error("The argument must be a React element, but you passed " + I + ".");
    var Q = H({}, I.props), _e = I.key;
    if (K != null) for (Ne in K.key !== void 0 && (_e = "" + K.key), K) !Te.call(K, Ne) || Ne === "key" || Ne === "__self" || Ne === "__source" || Ne === "ref" && K.ref === void 0 || (Q[Ne] = K[Ne]);
    var Ne = arguments.length - 2;
    if (Ne === 1) Q.children = oe;
    else if (1 < Ne) {
      for (var Me = Array(Ne), je = 0; je < Ne; je++) Me[je] = arguments[je + 2];
      Q.children = Me;
    }
    return re(I.type, _e, Q);
  }, Ae.createContext = function(I) {
    return I = { $$typeof: d, _currentValue: I, _currentValue2: I, _threadCount: 0, Provider: null, Consumer: null }, I.Provider = I, I.Consumer = { $$typeof: c, _context: I }, I;
  }, Ae.createElement = function(I, K, oe) {
    var Q, _e = {}, Ne = null;
    if (K != null) for (Q in K.key !== void 0 && (Ne = "" + K.key), K) Te.call(K, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (_e[Q] = K[Q]);
    var Me = arguments.length - 2;
    if (Me === 1) _e.children = oe;
    else if (1 < Me) {
      for (var je = Array(Me), rt = 0; rt < Me; rt++) je[rt] = arguments[rt + 2];
      _e.children = je;
    }
    if (I && I.defaultProps) for (Q in Me = I.defaultProps, Me) _e[Q] === void 0 && (_e[Q] = Me[Q]);
    return re(I, Ne, _e);
  }, Ae.createRef = function() {
    return { current: null };
  }, Ae.forwardRef = function(I) {
    return { $$typeof: g, render: I };
  }, Ae.isValidElement = pe, Ae.lazy = function(I) {
    return { $$typeof: v, _payload: { _status: -1, _result: I }, _init: ce };
  }, Ae.memo = function(I, K) {
    return { $$typeof: m, type: I, compare: K === void 0 ? null : K };
  }, Ae.startTransition = function(I) {
    var K = ne.T, oe = {};
    ne.T = oe;
    try {
      var Q = I(), _e = ne.S;
      _e !== null && _e(oe, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(Y, Ue);
    } catch (Ne) {
      Ue(Ne);
    } finally {
      K !== null && oe.types !== null && (K.types = oe.types), ne.T = K;
    }
  }, Ae.unstable_useCacheRefresh = function() {
    return ne.H.useCacheRefresh();
  }, Ae.use = function(I) {
    return ne.H.use(I);
  }, Ae.useActionState = function(I, K, oe) {
    return ne.H.useActionState(I, K, oe);
  }, Ae.useCallback = function(I, K) {
    return ne.H.useCallback(I, K);
  }, Ae.useContext = function(I) {
    return ne.H.useContext(I);
  }, Ae.useDebugValue = function() {
  }, Ae.useDeferredValue = function(I, K) {
    return ne.H.useDeferredValue(I, K);
  }, Ae.useEffect = function(I, K) {
    return ne.H.useEffect(I, K);
  }, Ae.useEffectEvent = function(I) {
    return ne.H.useEffectEvent(I);
  }, Ae.useId = function() {
    return ne.H.useId();
  }, Ae.useImperativeHandle = function(I, K, oe) {
    return ne.H.useImperativeHandle(I, K, oe);
  }, Ae.useInsertionEffect = function(I, K) {
    return ne.H.useInsertionEffect(I, K);
  }, Ae.useLayoutEffect = function(I, K) {
    return ne.H.useLayoutEffect(I, K);
  }, Ae.useMemo = function(I, K) {
    return ne.H.useMemo(I, K);
  }, Ae.useOptimistic = function(I, K) {
    return ne.H.useOptimistic(I, K);
  }, Ae.useReducer = function(I, K, oe) {
    return ne.H.useReducer(I, K, oe);
  }, Ae.useRef = function(I) {
    return ne.H.useRef(I);
  }, Ae.useState = function(I) {
    return ne.H.useState(I);
  }, Ae.useSyncExternalStore = function(I, K, oe) {
    return ne.H.useSyncExternalStore(I, K, oe);
  }, Ae.useTransition = function() {
    return ne.H.useTransition();
  }, Ae.version = "19.2.4", Ae;
}
var wh;
function pd() {
  return wh || (wh = 1, Lf.exports = uS()), Lf.exports;
}
var J = pd();
const cS = la(J);
var kf = { exports: {} }, bs = {}, Pf = { exports: {} }, Gf = {};
var Rh;
function fS() {
  return Rh || (Rh = 1, (function(n) {
    function t(B, te) {
      var ce = B.length;
      B.push(te);
      e: for (; 0 < ce; ) {
        var Ue = ce - 1 >>> 1, Ve = B[Ue];
        if (0 < s(Ve, te)) B[Ue] = te, B[ce] = Ve, ce = Ue;
        else break e;
      }
    }
    function o(B) {
      return B.length === 0 ? null : B[0];
    }
    function a(B) {
      if (B.length === 0) return null;
      var te = B[0], ce = B.pop();
      if (ce !== te) {
        B[0] = ce;
        e: for (var Ue = 0, Ve = B.length, I = Ve >>> 1; Ue < I; ) {
          var K = 2 * (Ue + 1) - 1, oe = B[K], Q = K + 1, _e = B[Q];
          if (0 > s(oe, ce)) Q < Ve && 0 > s(_e, oe) ? (B[Ue] = _e, B[Q] = ce, Ue = Q) : (B[Ue] = oe, B[K] = ce, Ue = K);
          else if (Q < Ve && 0 > s(_e, ce)) B[Ue] = _e, B[Q] = ce, Ue = Q;
          else break e;
        }
      }
      return te;
    }
    function s(B, te) {
      var ce = B.sortIndex - te.sortIndex;
      return ce !== 0 ? ce : B.id - te.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, g = d.now();
      n.unstable_now = function() {
        return d.now() - g;
      };
    }
    var y = [], m = [], v = 1, _ = null, E = 3, b = false, D = false, H = false, P = false, V = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function j(B) {
      for (var te = o(m); te !== null; ) {
        if (te.callback === null) a(m);
        else if (te.startTime <= B) a(m), te.sortIndex = te.expirationTime, t(y, te);
        else break;
        te = o(m);
      }
    }
    function ae(B) {
      if (H = false, j(B), !D) if (o(y) !== null) D = true, Y || (Y = true, Z());
      else {
        var te = o(m);
        te !== null && Fe(ae, te.startTime - B);
      }
    }
    var Y = false, ne = -1, Te = 5, re = -1;
    function ve() {
      return P ? true : !(n.unstable_now() - re < Te);
    }
    function pe() {
      if (P = false, Y) {
        var B = n.unstable_now();
        re = B;
        var te = true;
        try {
          e: {
            D = false, H && (H = false, ie(ne), ne = -1), b = true;
            var ce = E;
            try {
              t: {
                for (j(B), _ = o(y); _ !== null && !(_.expirationTime > B && ve()); ) {
                  var Ue = _.callback;
                  if (typeof Ue == "function") {
                    _.callback = null, E = _.priorityLevel;
                    var Ve = Ue(_.expirationTime <= B);
                    if (B = n.unstable_now(), typeof Ve == "function") {
                      _.callback = Ve, j(B), te = true;
                      break t;
                    }
                    _ === o(y) && a(y), j(B);
                  } else a(y);
                  _ = o(y);
                }
                if (_ !== null) te = true;
                else {
                  var I = o(m);
                  I !== null && Fe(ae, I.startTime - B), te = false;
                }
              }
              break e;
            } finally {
              _ = null, E = ce, b = false;
            }
            te = void 0;
          }
        } finally {
          te ? Z() : Y = false;
        }
      }
    }
    var Z;
    if (typeof X == "function") Z = function() {
      X(pe);
    };
    else if (typeof MessageChannel < "u") {
      var ge = new MessageChannel(), Ee = ge.port2;
      ge.port1.onmessage = pe, Z = function() {
        Ee.postMessage(null);
      };
    } else Z = function() {
      V(pe, 0);
    };
    function Fe(B, te) {
      ne = V(function() {
        B(n.unstable_now());
      }, te);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, n.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Te = 0 < B ? Math.floor(1e3 / B) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, n.unstable_next = function(B) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = E;
      }
      var ce = E;
      E = te;
      try {
        return B();
      } finally {
        E = ce;
      }
    }, n.unstable_requestPaint = function() {
      P = true;
    }, n.unstable_runWithPriority = function(B, te) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var ce = E;
      E = B;
      try {
        return te();
      } finally {
        E = ce;
      }
    }, n.unstable_scheduleCallback = function(B, te, ce) {
      var Ue = n.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? Ue + ce : Ue) : ce = Ue, B) {
        case 1:
          var Ve = -1;
          break;
        case 2:
          Ve = 250;
          break;
        case 5:
          Ve = 1073741823;
          break;
        case 4:
          Ve = 1e4;
          break;
        default:
          Ve = 5e3;
      }
      return Ve = ce + Ve, B = { id: v++, callback: te, priorityLevel: B, startTime: ce, expirationTime: Ve, sortIndex: -1 }, ce > Ue ? (B.sortIndex = ce, t(m, B), o(y) === null && B === o(m) && (H ? (ie(ne), ne = -1) : H = true, Fe(ae, ce - Ue))) : (B.sortIndex = Ve, t(y, B), D || b || (D = true, Y || (Y = true, Z()))), B;
    }, n.unstable_shouldYield = ve, n.unstable_wrapCallback = function(B) {
      var te = E;
      return function() {
        var ce = E;
        E = te;
        try {
          return B.apply(this, arguments);
        } finally {
          E = ce;
        }
      };
    };
  })(Gf)), Gf;
}
var Mh;
function dS() {
  return Mh || (Mh = 1, Pf.exports = fS()), Pf.exports;
}
var Of = { exports: {} }, Bt = {};
var Ih;
function pS() {
  if (Ih) return Bt;
  Ih = 1;
  var n = pd();
  function t(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++) m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + y + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var a = { d: { f: o, r: function() {
    throw Error(t(522));
  }, D: o, C: o, L: o, m: o, X: o, S: o, M: o }, p: 0, findDOMNode: null }, s = Symbol.for("react.portal");
  function c(y, m, v) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: s, key: _ == null ? null : "" + _, children: y, containerInfo: m, implementation: v };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(y, m) {
    if (y === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Bt.createPortal = function(y, m) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(t(299));
    return c(y, m, null, v);
  }, Bt.flushSync = function(y) {
    var m = d.T, v = a.p;
    try {
      if (d.T = null, a.p = 2, y) return y();
    } finally {
      d.T = m, a.p = v, a.d.f();
    }
  }, Bt.preconnect = function(y, m) {
    typeof y == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, a.d.C(y, m));
  }, Bt.prefetchDNS = function(y) {
    typeof y == "string" && a.d.D(y);
  }, Bt.preinit = function(y, m) {
    if (typeof y == "string" && m && typeof m.as == "string") {
      var v = m.as, _ = g(v, m.crossOrigin), E = typeof m.integrity == "string" ? m.integrity : void 0, b = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      v === "style" ? a.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, { crossOrigin: _, integrity: E, fetchPriority: b }) : v === "script" && a.d.X(y, { crossOrigin: _, integrity: E, fetchPriority: b, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
    }
  }, Bt.preinitModule = function(y, m) {
    if (typeof y == "string") if (typeof m == "object" && m !== null) {
      if (m.as == null || m.as === "script") {
        var v = g(m.as, m.crossOrigin);
        a.d.M(y, { crossOrigin: v, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
      }
    } else m == null && a.d.M(y);
  }, Bt.preload = function(y, m) {
    if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var v = m.as, _ = g(v, m.crossOrigin);
      a.d.L(y, v, { crossOrigin: _, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0, type: typeof m.type == "string" ? m.type : void 0, fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0, referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0, imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0, imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0, media: typeof m.media == "string" ? m.media : void 0 });
    }
  }, Bt.preloadModule = function(y, m) {
    if (typeof y == "string") if (m) {
      var v = g(m.as, m.crossOrigin);
      a.d.m(y, { as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0, crossOrigin: v, integrity: typeof m.integrity == "string" ? m.integrity : void 0 });
    } else a.d.m(y);
  }, Bt.requestFormReset = function(y) {
    a.d.r(y);
  }, Bt.unstable_batchedUpdates = function(y, m) {
    return y(m);
  }, Bt.useFormState = function(y, m, v) {
    return d.H.useFormState(y, m, v);
  }, Bt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, Bt.version = "19.2.4", Bt;
}
var Dh;
function mS() {
  if (Dh) return Of.exports;
  Dh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
    } catch (t) {
      console.error(t);
    }
  }
  return n(), Of.exports = pS(), Of.exports;
}
var Uh;
function hS() {
  if (Uh) return bs;
  Uh = 1;
  var n = dS(), t = pd(), o = mS();
  function a(e) {
    var i = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) i += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var i = e, l = e;
    if (e.alternate) for (; i.return; ) i = i.return;
    else {
      e = i;
      do
        i = e, (i.flags & 4098) !== 0 && (l = i.return), e = i.return;
      while (e);
    }
    return i.tag === 3 ? l : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var i = e.memoizedState;
      if (i === null && (e = e.alternate, e !== null && (i = e.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var i = e.memoizedState;
      if (i === null && (e = e.alternate, e !== null && (i = e.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (c(e) !== e) throw Error(a(188));
  }
  function m(e) {
    var i = e.alternate;
    if (!i) {
      if (i = c(e), i === null) throw Error(a(188));
      return i !== e ? null : e;
    }
    for (var l = e, r = i; ; ) {
      var p = l.return;
      if (p === null) break;
      var h = p.alternate;
      if (h === null) {
        if (r = p.return, r !== null) {
          l = r;
          continue;
        }
        break;
      }
      if (p.child === h.child) {
        for (h = p.child; h; ) {
          if (h === l) return y(p), e;
          if (h === r) return y(p), i;
          h = h.sibling;
        }
        throw Error(a(188));
      }
      if (l.return !== r.return) l = p, r = h;
      else {
        for (var T = false, A = p.child; A; ) {
          if (A === l) {
            T = true, l = p, r = h;
            break;
          }
          if (A === r) {
            T = true, r = p, l = h;
            break;
          }
          A = A.sibling;
        }
        if (!T) {
          for (A = h.child; A; ) {
            if (A === l) {
              T = true, l = h, r = p;
              break;
            }
            if (A === r) {
              T = true, r = h, l = p;
              break;
            }
            A = A.sibling;
          }
          if (!T) throw Error(a(189));
        }
      }
      if (l.alternate !== r) throw Error(a(190));
    }
    if (l.tag !== 3) throw Error(a(188));
    return l.stateNode.current === l ? e : i;
  }
  function v(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e;
    for (e = e.child; e !== null; ) {
      if (i = v(e), i !== null) return i;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign, E = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), ie = Symbol.for("react.consumer"), X = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), ve = Symbol.for("react.memo_cache_sentinel"), pe = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ge = Symbol.for("react.client.reference");
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case V:
        return "Profiler";
      case P:
        return "StrictMode";
      case ae:
        return "Suspense";
      case Y:
        return "SuspenseList";
      case re:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case D:
        return "Portal";
      case X:
        return e.displayName || "Context";
      case ie:
        return (e._context.displayName || "Context") + ".Consumer";
      case j:
        var i = e.render;
        return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ne:
        return i = e.displayName || null, i !== null ? i : Ee(e.type) || "Memo";
      case Te:
        i = e._payload, e = e._init;
        try {
          return Ee(e(i));
        } catch {
        }
    }
    return null;
  }
  var Fe = Array.isArray, B = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = { pending: false, data: null, method: null, action: null }, Ue = [], Ve = -1;
  function I(e) {
    return { current: e };
  }
  function K(e) {
    0 > Ve || (e.current = Ue[Ve], Ue[Ve] = null, Ve--);
  }
  function oe(e, i) {
    Ve++, Ue[Ve] = e.current, e.current = i;
  }
  var Q = I(null), _e = I(null), Ne = I(null), Me = I(null);
  function je(e, i) {
    switch (oe(Ne, i), oe(_e, e), oe(Q, null), i.nodeType) {
      case 9:
      case 11:
        e = (e = i.documentElement) && (e = e.namespaceURI) ? $m(e) : 0;
        break;
      default:
        if (e = i.tagName, i = i.namespaceURI) i = $m(i), e = Xm(i, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    K(Q), oe(Q, e);
  }
  function rt() {
    K(Q), K(_e), K(Ne);
  }
  function Di(e) {
    e.memoizedState !== null && oe(Me, e);
    var i = Q.current, l = Xm(i, e.type);
    i !== l && (oe(_e, e), oe(Q, l));
  }
  function Qo(e) {
    _e.current === e && (K(Q), K(_e)), Me.current === e && (K(Me), Es._currentValue = ce);
  }
  var Pt, ua;
  function cn(e) {
    if (Pt === void 0) try {
      throw Error();
    } catch (l) {
      var i = l.stack.trim().match(/\n( *(at )?)/);
      Pt = i && i[1] || "", ua = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Pt + e + ua;
  }
  var Zo = false;
  function Ui(e, i) {
    if (!e || Zo) return "";
    Zo = true;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = { DetermineComponentFrameRoot: function() {
        try {
          if (i) {
            var $ = function() {
              throw Error();
            };
            if (Object.defineProperty($.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct($, []);
              } catch (q) {
                var G = q;
              }
              Reflect.construct(e, [], $);
            } else {
              try {
                $.call();
              } catch (q) {
                G = q;
              }
              e.call($.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              G = q;
            }
            ($ = e()) && typeof $.catch == "function" && $.catch(function() {
            });
          }
        } catch (q) {
          if (q && G && typeof q.stack == "string") return [q.stack, G.stack];
        }
        return [null, null];
      } };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var p = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
      p && p.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var h = r.DetermineComponentFrameRoot(), T = h[0], A = h[1];
      if (T && A) {
        var w = T.split(`
`), k = A.split(`
`);
        for (p = r = 0; r < w.length && !w[r].includes("DetermineComponentFrameRoot"); ) r++;
        for (; p < k.length && !k[p].includes("DetermineComponentFrameRoot"); ) p++;
        if (r === w.length || p === k.length) for (r = w.length - 1, p = k.length - 1; 1 <= r && 0 <= p && w[r] !== k[p]; ) p--;
        for (; 1 <= r && 0 <= p; r--, p--) if (w[r] !== k[p]) {
          if (r !== 1 || p !== 1) do
            if (r--, p--, 0 > p || w[r] !== k[p]) {
              var z = `
` + w[r].replace(" at new ", " at ");
              return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
            }
          while (1 <= r && 0 <= p);
          break;
        }
      }
    } finally {
      Zo = false, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? cn(l) : "";
  }
  function Gs(e, i) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return cn(e.type);
      case 16:
        return cn("Lazy");
      case 13:
        return e.child !== i && i !== null ? cn("Suspense Fallback") : cn("Suspense");
      case 19:
        return cn("SuspenseList");
      case 0:
      case 15:
        return Ui(e.type, false);
      case 11:
        return Ui(e.type.render, false);
      case 1:
        return Ui(e.type, true);
      case 31:
        return cn("Activity");
      default:
        return "";
    }
  }
  function _o(e) {
    try {
      var i = "", l = null;
      do
        i += Gs(e, l), l = e, e = e.return;
      while (e);
      return i;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var Wo = Object.prototype.hasOwnProperty, jo = n.unstable_scheduleCallback, el = n.unstable_cancelCallback, Os = n.unstable_shouldYield, Hs = n.unstable_requestPaint, Ge = n.unstable_now, tl = n.unstable_getCurrentPriorityLevel, ca = n.unstable_ImmediatePriority, Bs = n.unstable_UserBlockingPriority, Co = n.unstable_NormalPriority, Yn = n.unstable_LowPriority, Nt = n.unstable_IdlePriority, Li = n.log, fn = n.unstable_setDisableYieldValue, Ao = null, Gt = null;
  function Ln(e) {
    if (typeof Li == "function" && fn(e), Gt && typeof Gt.setStrictMode == "function") try {
      Gt.setStrictMode(Ao, e);
    } catch {
    }
  }
  var Ot = Math.clz32 ? Math.clz32 : il, En = Math.log, nl = Math.LN2;
  function il(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (En(e) / nl | 0) | 0;
  }
  var kn = 256, Kn = 262144, xo = 4194304;
  function tn(e) {
    var i = e & 42;
    if (i !== 0) return i;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function bo(e, i, l) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var p = 0, h = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var A = r & 134217727;
    return A !== 0 ? (r = A & ~h, r !== 0 ? p = tn(r) : (T &= A, T !== 0 ? p = tn(T) : l || (l = A & ~e, l !== 0 && (p = tn(l))))) : (A = r & ~h, A !== 0 ? p = tn(A) : T !== 0 ? p = tn(T) : l || (l = r & ~e, l !== 0 && (p = tn(l)))), p === 0 ? 0 : i !== 0 && i !== p && (i & h) === 0 && (h = p & -p, l = i & -i, h >= l || h === 32 && (l & 4194048) !== 0) ? i : p;
  }
  function ki(e, i) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & i) === 0;
  }
  function qs(e, i) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return i + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fa() {
    var e = xo;
    return xo <<= 1, (xo & 62914560) === 0 && (xo = 4194304), e;
  }
  function ol(e) {
    for (var i = [], l = 0; 31 > l; l++) i.push(e);
    return i;
  }
  function Pi(e, i) {
    e.pendingLanes |= i, i !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Vs(e, i, l, r, p, h) {
    var T = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var A = e.entanglements, w = e.expirationTimes, k = e.hiddenUpdates;
    for (l = T & ~l; 0 < l; ) {
      var z = 31 - Ot(l), $ = 1 << z;
      A[z] = 0, w[z] = -1;
      var G = k[z];
      if (G !== null) for (k[z] = null, z = 0; z < G.length; z++) {
        var q = G[z];
        q !== null && (q.lane &= -536870913);
      }
      l &= ~$;
    }
    r !== 0 && nn(e, r, 0), h !== 0 && p === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(T & ~i));
  }
  function nn(e, i, l) {
    e.pendingLanes |= i, e.suspendedLanes &= ~i;
    var r = 31 - Ot(i);
    e.entangledLanes |= i, e.entanglements[r] = e.entanglements[r] | 1073741824 | l & 261930;
  }
  function No(e, i) {
    var l = e.entangledLanes |= i;
    for (e = e.entanglements; l; ) {
      var r = 31 - Ot(l), p = 1 << r;
      p & i | e[r] & i && (e[r] |= i), l &= ~p;
    }
  }
  function wo(e, i) {
    var l = i & -i;
    return l = (l & 42) !== 0 ? 1 : ll(l), (l & (e.suspendedLanes | i)) !== 0 ? 0 : l;
  }
  function ll(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ni(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function da() {
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : vh(e.type));
  }
  function al(e, i) {
    var l = te.p;
    try {
      return te.p = e, i();
    } finally {
      te.p = l;
    }
  }
  var Pn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Pn, wt = "__reactProps$" + Pn, ii = "__reactContainer$" + Pn, Gi = "__reactEvents$" + Pn, pa = "__reactListeners$" + Pn, zs = "__reactHandles$" + Pn, Oi = "__reactResources$" + Pn, Hi = "__reactMarker$" + Pn;
  function ma(e) {
    delete e[mt], delete e[wt], delete e[Gi], delete e[pa], delete e[zs];
  }
  function oi(e) {
    var i = e[mt];
    if (i) return i;
    for (var l = e.parentNode; l; ) {
      if (i = l[ii] || l[mt]) {
        if (l = i.alternate, i.child !== null || l !== null && l.child !== null) for (e = nh(e); e !== null; ) {
          if (l = e[mt]) return l;
          e = nh(e);
        }
        return i;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function li(e) {
    if (e = e[mt] || e[ii]) {
      var i = e.tag;
      if (i === 5 || i === 6 || i === 13 || i === 31 || i === 26 || i === 27 || i === 3) return e;
    }
    return null;
  }
  function Bi(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ai(e) {
    var i = e[Oi];
    return i || (i = e[Oi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), i;
  }
  function ut(e) {
    e[Hi] = true;
  }
  var sl = /* @__PURE__ */ new Set(), rl = {};
  function $n(e, i) {
    dn(e, i), dn(e + "Capture", i);
  }
  function dn(e, i) {
    for (rl[e] = i, e = 0; e < i.length; e++) sl.add(i[e]);
  }
  var ul = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), cl = {}, Fs = {};
  function ha(e) {
    return Wo.call(Fs, e) ? true : Wo.call(cl, e) ? false : ul.test(e) ? Fs[e] = true : (cl[e] = true, false);
  }
  function Rt(e, i, l) {
    if (ha(i)) if (l === null) e.removeAttribute(i);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(i);
          return;
        case "boolean":
          var r = i.toLowerCase().slice(0, 5);
          if (r !== "data-" && r !== "aria-") {
            e.removeAttribute(i);
            return;
          }
      }
      e.setAttribute(i, "" + l);
    }
  }
  function Mt(e, i, l) {
    if (l === null) e.removeAttribute(i);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttribute(i, "" + l);
    }
  }
  function Vt(e, i, l, r) {
    if (r === null) e.removeAttribute(l);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(i, l, "" + r);
    }
  }
  function It(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ro(e) {
    var i = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function zt(e, i, l) {
    var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, i);
    if (!e.hasOwnProperty(i) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var p = r.get, h = r.set;
      return Object.defineProperty(e, i, { configurable: true, get: function() {
        return p.call(this);
      }, set: function(T) {
        l = "" + T, h.call(this, T);
      } }), Object.defineProperty(e, i, { enumerable: r.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(T) {
        l = "" + T;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[i];
      } };
    }
  }
  function Dt(e) {
    if (!e._valueTracker) {
      var i = Ro(e) ? "checked" : "value";
      e._valueTracker = zt(e, i, "" + e[i]);
    }
  }
  function Mo(e) {
    if (!e) return false;
    var i = e._valueTracker;
    if (!i) return true;
    var l = i.getValue(), r = "";
    return e && (r = Ro(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== l ? (i.setValue(e), true) : false;
  }
  function Oe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ga = /[\n"\\]/g;
  function Ft(e) {
    return e.replace(ga, function(i) {
      return "\\" + i.charCodeAt(0).toString(16) + " ";
    });
  }
  function fl(e, i, l, r, p, h, T, A) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), i != null ? T === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + It(i)) : e.value !== "" + It(i) && (e.value = "" + It(i)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), i != null ? pl(e, T, It(i)) : l != null ? pl(e, T, It(l)) : r != null && e.removeAttribute("value"), p == null && h != null && (e.defaultChecked = !!h), p != null && (e.checked = p && typeof p != "function" && typeof p != "symbol"), A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" ? e.name = "" + It(A) : e.removeAttribute("name");
  }
  function dl(e, i, l, r, p, h, T, A) {
    if (h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.type = h), i != null || l != null) {
      if (!(h !== "submit" && h !== "reset" || i != null)) {
        Dt(e);
        return;
      }
      l = l != null ? "" + It(l) : "", i = i != null ? "" + It(i) : l, A || i === e.value || (e.value = i), e.defaultValue = i;
    }
    r = r ?? p, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = A ? e.checked : !!r, e.defaultChecked = !!r, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T), Dt(e);
  }
  function pl(e, i, l) {
    i === "number" && Oe(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function si(e, i, l, r) {
    if (e = e.options, i) {
      i = {};
      for (var p = 0; p < l.length; p++) i["$" + l[p]] = true;
      for (l = 0; l < e.length; l++) p = i.hasOwnProperty("$" + e[l].value), e[l].selected !== p && (e[l].selected = p), p && r && (e[l].defaultSelected = true);
    } else {
      for (l = "" + It(l), i = null, p = 0; p < e.length; p++) {
        if (e[p].value === l) {
          e[p].selected = true, r && (e[p].defaultSelected = true);
          return;
        }
        i !== null || e[p].disabled || (i = e[p]);
      }
      i !== null && (i.selected = true);
    }
  }
  function Io(e, i, l) {
    if (i != null && (i = "" + It(i), i !== e.value && (e.value = i), l == null)) {
      e.defaultValue !== i && (e.defaultValue = i);
      return;
    }
    e.defaultValue = l != null ? "" + It(l) : "";
  }
  function ot(e, i, l, r) {
    if (i == null) {
      if (r != null) {
        if (l != null) throw Error(a(92));
        if (Fe(r)) {
          if (1 < r.length) throw Error(a(93));
          r = r[0];
        }
        l = r;
      }
      l == null && (l = ""), i = l;
    }
    l = It(i), e.defaultValue = l, r = e.textContent, r === l && r !== "" && r !== null && (e.value = r), Dt(e);
  }
  function qi(e, i) {
    if (i) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = i;
        return;
      }
    }
    e.textContent = i;
  }
  var ya = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Js(e, i, l) {
    var r = i.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? r ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "" : r ? e.setProperty(i, l) : typeof l != "number" || l === 0 || ya.has(i) ? i === "float" ? e.cssFloat = l : e[i] = ("" + l).trim() : e[i] = l + "px";
  }
  function ml(e, i, l) {
    if (i != null && typeof i != "object") throw Error(a(62));
    if (e = e.style, l != null) {
      for (var r in l) !l.hasOwnProperty(r) || i != null && i.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var p in i) r = i[p], i.hasOwnProperty(p) && l[p] !== r && Js(e, p, r);
    } else for (var h in i) i.hasOwnProperty(h) && Js(e, h, i[h]);
  }
  function va(e) {
    if (e.indexOf("-") === -1) return false;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Sa = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Ys = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Do(e) {
    return Ys.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function _n() {
  }
  var et = null;
  function Xn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ye = null, Cn = null;
  function Ta(e) {
    var i = li(e);
    if (i && (e = i.stateNode)) {
      var l = e[wt] || null;
      e: switch (e = i.stateNode, i.type) {
        case "input":
          if (fl(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), i = l.name, l.type === "radio" && i != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + Ft("" + i) + '"][type="radio"]'), i = 0; i < l.length; i++) {
              var r = l[i];
              if (r !== e && r.form === e.form) {
                var p = r[wt] || null;
                if (!p) throw Error(a(90));
                fl(r, p.value, p.defaultValue, p.defaultValue, p.checked, p.defaultChecked, p.type, p.name);
              }
            }
            for (i = 0; i < l.length; i++) r = l[i], r.form === e.form && Mo(r);
          }
          break e;
        case "textarea":
          Io(e, l.value, l.defaultValue);
          break e;
        case "select":
          i = l.value, i != null && si(e, !!l.multiple, i, false);
      }
    }
  }
  var Qn = false;
  function hl(e, i, l) {
    if (Qn) return e(i, l);
    Qn = true;
    try {
      var r = e(i);
      return r;
    } finally {
      if (Qn = false, (Ye !== null || Cn !== null) && (Yr(), Ye && (i = Ye, e = Cn, Cn = Ye = null, Ta(i), e))) for (i = 0; i < e.length; i++) Ta(e[i]);
    }
  }
  function Vi(e, i) {
    var l = e.stateNode;
    if (l === null) return null;
    var r = l[wt] || null;
    if (r === null) return null;
    l = r[i];
    e: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(a(231, i, typeof l));
    return l;
  }
  var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pn = false;
  if (An) try {
    var Uo = {};
    Object.defineProperty(Uo, "passive", { get: function() {
      pn = true;
    } }), window.addEventListener("test", Uo, Uo), window.removeEventListener("test", Uo, Uo);
  } catch {
    pn = false;
  }
  var Gn = null, gl = null, On = null;
  function Hu() {
    if (On) return On;
    var e, i = gl, l = i.length, r, p = "value" in Gn ? Gn.value : Gn.textContent, h = p.length;
    for (e = 0; e < l && i[e] === p[e]; e++) ;
    var T = l - e;
    for (r = 1; r <= T && i[l - r] === p[h - r]; r++) ;
    return On = p.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ea(e) {
    var i = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && i === 13 && (e = 13)) : e = i, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _a() {
    return true;
  }
  function Bu() {
    return false;
  }
  function Jt(e) {
    function i(l, r, p, h, T) {
      this._reactName = l, this._targetInst = p, this.type = r, this.nativeEvent = h, this.target = T, this.currentTarget = null;
      for (var A in e) e.hasOwnProperty(A) && (l = e[A], this[A] = l ? l(h) : h[A]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === false) ? _a : Bu, this.isPropagationStopped = Bu, this;
    }
    return _(i.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = _a);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = _a);
    }, persist: function() {
    }, isPersistent: _a }), i;
  }
  var zi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Fi = Jt(zi), yl = _({}, zi, { view: 0, detail: 0 }), Ks = Jt(yl), $s, vl, Sl, Lo = _({}, yl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ji, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Sl && (Sl && e.type === "mousemove" ? ($s = e.screenX - Sl.screenX, vl = e.screenY - Sl.screenY) : vl = $s = 0, Sl = e), $s);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : vl;
  } }), qu = Jt(Lo), Xs = _({}, Lo, { dataTransfer: 0 }), xd = Jt(Xs), Qs = _({}, yl, { relatedTarget: 0 }), Zs = Jt(Qs), Ws = _({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bd = Jt(Ws), Nd = _({}, zi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), wd = Jt(Nd), Rd = _({}, zi, { data: 0 }), Vu = Jt(Rd), js = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, zu = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, er = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Fu(e) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(e) : (e = er[e]) ? !!i[e] : false;
  }
  function Ji() {
    return Fu;
  }
  var Tl = _({}, yl, { key: function(e) {
    if (e.key) {
      var i = js[e.key] || e.key;
      if (i !== "Unidentified") return i;
    }
    return e.type === "keypress" ? (e = Ea(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zu[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ji, charCode: function(e) {
    return e.type === "keypress" ? Ea(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ca = Jt(Tl), tr = _({}, Lo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ri = Jt(tr), Ju = _({}, yl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ji }), Aa = Jt(Ju), Yu = _({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nr = Jt(Yu), ir = _({}, Lo, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), xa = Jt(ir), or = _({}, zi, { newState: 0, oldState: 0 }), Ku = Jt(or), lr = [9, 13, 27, 32], El = An && "CompositionEvent" in window, xn = null;
  An && "documentMode" in document && (xn = document.documentMode);
  var ba = An && "TextEvent" in window && !xn, Yi = An && (!El || xn && 8 < xn && 11 >= xn), St = " ", Na = false;
  function _l(e, i) {
    switch (e) {
      case "keyup":
        return lr.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function wa(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ui = false;
  function Ra(e, i) {
    switch (e) {
      case "compositionend":
        return wa(i);
      case "keypress":
        return i.which !== 32 ? null : (Na = true, St);
      case "textInput":
        return e = i.data, e === St && Na ? null : e;
      default:
        return null;
    }
  }
  function Ma(e, i) {
    if (ui) return e === "compositionend" || !El && _l(e, i) ? (e = Hu(), On = gl = Gn = null, ui = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return Yi && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var Pe = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function ar(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i === "input" ? !!Pe[e.type] : i === "textarea";
  }
  function sr(e, i, l, r) {
    Ye ? Cn ? Cn.push(r) : Cn = [r] : Ye = r, i = jr(i, "onChange"), 0 < i.length && (l = new Fi("onChange", "change", null, l, r), e.push({ event: l, listeners: i }));
  }
  var Ht = null, Ki = null;
  function Ia(e) {
    Vm(e, 0);
  }
  function Cl(e) {
    var i = Bi(e);
    if (Mo(i)) return e;
  }
  function rr(e, i) {
    if (e === "change") return i;
  }
  var ur = false;
  if (An) {
    var Da;
    if (An) {
      var Ua = "oninput" in document;
      if (!Ua) {
        var $i = document.createElement("div");
        $i.setAttribute("oninput", "return;"), Ua = typeof $i.oninput == "function";
      }
      Da = Ua;
    } else Da = false;
    ur = Da && (!document.documentMode || 9 < document.documentMode);
  }
  function Xi() {
    Ht && (Ht.detachEvent("onpropertychange", La), Ki = Ht = null);
  }
  function La(e) {
    if (e.propertyName === "value" && Cl(Ki)) {
      var i = [];
      sr(i, Ki, e, Xn(e)), hl(Ia, i);
    }
  }
  function $u(e, i, l) {
    e === "focusin" ? (Xi(), Ht = i, Ki = l, Ht.attachEvent("onpropertychange", La)) : e === "focusout" && Xi();
  }
  function Qi(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Cl(Ki);
  }
  function Xu(e, i) {
    if (e === "click") return Cl(i);
  }
  function Qu(e, i) {
    if (e === "input" || e === "change") return Cl(i);
  }
  function ko(e, i) {
    return e === i && (e !== 0 || 1 / e === 1 / i) || e !== e && i !== i;
  }
  var Yt = typeof Object.is == "function" ? Object.is : ko;
  function bn(e, i) {
    if (Yt(e, i)) return true;
    if (typeof e != "object" || e === null || typeof i != "object" || i === null) return false;
    var l = Object.keys(e), r = Object.keys(i);
    if (l.length !== r.length) return false;
    for (r = 0; r < l.length; r++) {
      var p = l[r];
      if (!Wo.call(i, p) || !Yt(e[p], i[p])) return false;
    }
    return true;
  }
  function ka(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nn(e, i) {
    var l = ka(e);
    e = 0;
    for (var r; l; ) {
      if (l.nodeType === 3) {
        if (r = e + l.textContent.length, e <= i && r >= i) return { node: l, offset: i - e };
        e = r;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ka(l);
    }
  }
  function Zi(e, i) {
    return e && i ? e === i ? true : e && e.nodeType === 3 ? false : i && i.nodeType === 3 ? Zi(e, i.parentNode) : "contains" in e ? e.contains(i) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(i) & 16) : false : false;
  }
  function Pa(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var i = Oe(e.document); i instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof i.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) e = i.contentWindow;
      else break;
      i = Oe(e.document);
    }
    return i;
  }
  function Al(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i && (i === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || i === "textarea" || e.contentEditable === "true");
  }
  var Ga = An && "documentMode" in document && 11 >= document.documentMode, ci = null, Oa = null, fi = null, Ha = false;
  function xl(e, i, l) {
    var r = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ha || ci == null || ci !== Oe(r) || (r = ci, "selectionStart" in r && Al(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fi && bn(fi, r) || (fi = r, r = jr(Oa, "onSelect"), 0 < r.length && (i = new Fi("onSelect", "select", null, i, l), e.push({ event: i, listeners: r }), i.target = ci)));
  }
  function Zn(e, i) {
    var l = {};
    return l[e.toLowerCase()] = i.toLowerCase(), l["Webkit" + e] = "webkit" + i, l["Moz" + e] = "moz" + i, l;
  }
  var Wi = { animationend: Zn("Animation", "AnimationEnd"), animationiteration: Zn("Animation", "AnimationIteration"), animationstart: Zn("Animation", "AnimationStart"), transitionrun: Zn("Transition", "TransitionRun"), transitionstart: Zn("Transition", "TransitionStart"), transitioncancel: Zn("Transition", "TransitionCancel"), transitionend: Zn("Transition", "TransitionEnd") }, Ba = {}, cr = {};
  An && (cr = document.createElement("div").style, "AnimationEvent" in window || (delete Wi.animationend.animation, delete Wi.animationiteration.animation, delete Wi.animationstart.animation), "TransitionEvent" in window || delete Wi.transitionend.transition);
  function di(e) {
    if (Ba[e]) return Ba[e];
    if (!Wi[e]) return e;
    var i = Wi[e], l;
    for (l in i) if (i.hasOwnProperty(l) && l in cr) return Ba[e] = i[l];
    return e;
  }
  var fr = di("animationend"), dr = di("animationiteration"), bl = di("animationstart"), Zu = di("transitionrun"), Wu = di("transitionstart"), ju = di("transitioncancel"), qa = di("transitionend"), pr = /* @__PURE__ */ new Map(), Va = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Va.push("scrollEnd");
  function mn(e, i) {
    pr.set(e, i), $n(i, [e]);
  }
  var Wn = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var i = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(i)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, _t = [], ji = 0, za = 0;
  function Nl() {
    for (var e = ji, i = za = ji = 0; i < e; ) {
      var l = _t[i];
      _t[i++] = null;
      var r = _t[i];
      _t[i++] = null;
      var p = _t[i];
      _t[i++] = null;
      var h = _t[i];
      if (_t[i++] = null, r !== null && p !== null) {
        var T = r.pending;
        T === null ? p.next = p : (p.next = T.next, T.next = p), r.pending = p;
      }
      h !== 0 && Hn(l, p, h);
    }
  }
  function wl(e, i, l, r) {
    _t[ji++] = e, _t[ji++] = i, _t[ji++] = l, _t[ji++] = r, za |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function Fa(e, i, l, r) {
    return wl(e, i, l, r), mi(e);
  }
  function pi(e, i) {
    return wl(e, null, null, i), mi(e);
  }
  function Hn(e, i, l) {
    e.lanes |= l;
    var r = e.alternate;
    r !== null && (r.lanes |= l);
    for (var p = false, h = e.return; h !== null; ) h.childLanes |= l, r = h.alternate, r !== null && (r.childLanes |= l), h.tag === 22 && (e = h.stateNode, e === null || e._visibility & 1 || (p = true)), e = h, h = h.return;
    return e.tag === 3 ? (h = e.stateNode, p && i !== null && (p = 31 - Ot(l), e = h.hiddenUpdates, r = e[p], r === null ? e[p] = [i] : r.push(i), i.lane = l | 536870912), h) : null;
  }
  function mi(e) {
    if (50 < ms) throw ms = 0, nf = null, Error(a(185));
    for (var i = e.return; i !== null; ) e = i, i = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var jn = {};
  function mr(e, i, l, r) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, i, l, r) {
    return new mr(e, i, l, r);
  }
  function Ja(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Bn(e, i) {
    var l = e.alternate;
    return l === null ? (l = Kt(e.tag, i, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = i, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, i = e.dependencies, l.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function hr(e, i) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = i, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, i = l.dependencies, e.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }), e;
  }
  function Rl(e, i, l, r, p, h) {
    var T = 0;
    if (r = e, typeof e == "function") Ja(e) && (T = 1);
    else if (typeof e == "string") T = X0(e, l, Q.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case re:
        return e = Kt(31, l, i, p), e.elementType = re, e.lanes = h, e;
      case H:
        return hi(l.children, p, h, i);
      case P:
        T = 8, p |= 24;
        break;
      case V:
        return e = Kt(12, l, i, p | 2), e.elementType = V, e.lanes = h, e;
      case ae:
        return e = Kt(13, l, i, p), e.elementType = ae, e.lanes = h, e;
      case Y:
        return e = Kt(19, l, i, p), e.elementType = Y, e.lanes = h, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case X:
            T = 10;
            break e;
          case ie:
            T = 9;
            break e;
          case j:
            T = 11;
            break e;
          case ne:
            T = 14;
            break e;
          case Te:
            T = 16, r = null;
            break e;
        }
        T = 29, l = Error(a(130, e === null ? "null" : typeof e, "")), r = null;
    }
    return i = Kt(T, l, i, p), i.elementType = e, i.type = r, i.lanes = h, i;
  }
  function hi(e, i, l, r) {
    return e = Kt(7, e, r, i), e.lanes = l, e;
  }
  function Ya(e, i, l) {
    return e = Kt(6, e, null, i), e.lanes = l, e;
  }
  function gr(e) {
    var i = Kt(18, null, null, 0);
    return i.stateNode = e, i;
  }
  function Ka(e, i, l) {
    return i = Kt(4, e.children !== null ? e.children : [], e.key, i), i.lanes = l, i.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, i;
  }
  var yr = /* @__PURE__ */ new WeakMap();
  function S(e, i) {
    if (typeof e == "object" && e !== null) {
      var l = yr.get(e);
      return l !== void 0 ? l : (i = { value: e, source: i, stack: _o(i) }, yr.set(e, i), i);
    }
    return { value: e, source: i, stack: _o(i) };
  }
  var x = [], N = 0, R = null, O = 0, W = [], se = 0, de = null, Se = 1, ee = "";
  function he(e, i) {
    x[N++] = O, x[N++] = R, R = e, O = i;
  }
  function Ce(e, i, l) {
    W[se++] = Se, W[se++] = ee, W[se++] = de, de = e;
    var r = Se;
    e = ee;
    var p = 32 - Ot(r) - 1;
    r &= ~(1 << p), l += 1;
    var h = 32 - Ot(i) + p;
    if (30 < h) {
      var T = p - p % 5;
      h = (r & (1 << T) - 1).toString(32), r >>= T, p -= T, Se = 1 << 32 - Ot(i) + p | l << p | r, ee = h + e;
    } else Se = 1 << h | l << p | r, ee = e;
  }
  function tt(e) {
    e.return !== null && (he(e, 1), Ce(e, 1, 0));
  }
  function Ct(e) {
    for (; e === R; ) R = x[--N], x[N] = null, O = x[--N], x[N] = null;
    for (; e === de; ) de = W[--se], W[se] = null, ee = W[--se], W[se] = null, Se = W[--se], W[se] = null;
  }
  function Tt(e, i) {
    W[se++] = Se, W[se++] = ee, W[se++] = de, Se = i.id, ee = i.overflow, de = e;
  }
  var nt = null, Je = null, Re = false, lt = null, $t = false, Ml = Error(a(519));
  function Xt(e) {
    var i = Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw $a(S(i, e)), Ml;
  }
  function wn(e) {
    var i = e.stateNode, l = e.type, r = e.memoizedProps;
    switch (i[mt] = e, i[wt] = r, l) {
      case "dialog":
        De("cancel", i), De("close", i);
        break;
      case "iframe":
      case "object":
      case "embed":
        De("load", i);
        break;
      case "video":
      case "audio":
        for (l = 0; l < gs.length; l++) De(gs[l], i);
        break;
      case "source":
        De("error", i);
        break;
      case "img":
      case "image":
      case "link":
        De("error", i), De("load", i);
        break;
      case "details":
        De("toggle", i);
        break;
      case "input":
        De("invalid", i), dl(i, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, true);
        break;
      case "select":
        De("invalid", i);
        break;
      case "textarea":
        De("invalid", i), ot(i, r.value, r.defaultValue, r.children);
    }
    l = r.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || i.textContent === "" + l || r.suppressHydrationWarning === true || Ym(i.textContent, l) ? (r.popover != null && (De("beforetoggle", i), De("toggle", i)), r.onScroll != null && De("scroll", i), r.onScrollEnd != null && De("scrollend", i), r.onClick != null && (i.onclick = _n), i = true) : i = false, i || Xt(e, true);
  }
  function Md(e) {
    for (nt = e.return; nt; ) switch (nt.tag) {
      case 5:
      case 31:
      case 13:
        $t = false;
        return;
      case 27:
      case 3:
        $t = true;
        return;
      default:
        nt = nt.return;
    }
  }
  function Il(e) {
    if (e !== nt) return false;
    if (!Re) return Md(e), Re = true, false;
    var i = e.tag, l;
    if ((l = i !== 3 && i !== 27) && ((l = i === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || vf(e.type, e.memoizedProps)), l = !l), l && Je && Xt(e), Md(e), i === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      Je = th(e);
    } else if (i === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      Je = th(e);
    } else i === 27 ? (i = Je, mo(e.type) ? (e = Cf, Cf = null, Je = e) : Je = i) : Je = nt ? Mn(e.stateNode.nextSibling) : null;
    return true;
  }
  function Po() {
    Je = nt = null, Re = false;
  }
  function ec() {
    var e = lt;
    return e !== null && (sn === null ? sn = e : sn.push.apply(sn, e), lt = null), e;
  }
  function $a(e) {
    lt === null ? lt = [e] : lt.push(e);
  }
  var tc = I(null), Go = null, gi = null;
  function eo(e, i, l) {
    oe(tc, i._currentValue), i._currentValue = l;
  }
  function yi(e) {
    e._currentValue = tc.current, K(tc);
  }
  function nc(e, i, l) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & i) !== i ? (e.childLanes |= i, r !== null && (r.childLanes |= i)) : r !== null && (r.childLanes & i) !== i && (r.childLanes |= i), e === l) break;
      e = e.return;
    }
  }
  function ic(e, i, l, r) {
    var p = e.child;
    for (p !== null && (p.return = e); p !== null; ) {
      var h = p.dependencies;
      if (h !== null) {
        var T = p.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var A = h;
          h = p;
          for (var w = 0; w < i.length; w++) if (A.context === i[w]) {
            h.lanes |= l, A = h.alternate, A !== null && (A.lanes |= l), nc(h.return, l, e), r || (T = null);
            break e;
          }
          h = A.next;
        }
      } else if (p.tag === 18) {
        if (T = p.return, T === null) throw Error(a(341));
        T.lanes |= l, h = T.alternate, h !== null && (h.lanes |= l), nc(T, l, e), T = null;
      } else T = p.child;
      if (T !== null) T.return = p;
      else for (T = p; T !== null; ) {
        if (T === e) {
          T = null;
          break;
        }
        if (p = T.sibling, p !== null) {
          p.return = T.return, T = p;
          break;
        }
        T = T.return;
      }
      p = T;
    }
  }
  function Dl(e, i, l, r) {
    e = null;
    for (var p = i, h = false; p !== null; ) {
      if (!h) {
        if ((p.flags & 524288) !== 0) h = true;
        else if ((p.flags & 262144) !== 0) break;
      }
      if (p.tag === 10) {
        var T = p.alternate;
        if (T === null) throw Error(a(387));
        if (T = T.memoizedProps, T !== null) {
          var A = p.type;
          Yt(p.pendingProps.value, T.value) || (e !== null ? e.push(A) : e = [A]);
        }
      } else if (p === Me.current) {
        if (T = p.alternate, T === null) throw Error(a(387));
        T.memoizedState.memoizedState !== p.memoizedState.memoizedState && (e !== null ? e.push(Es) : e = [Es]);
      }
      p = p.return;
    }
    e !== null && ic(i, e, l, r), i.flags |= 262144;
  }
  function vr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Yt(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function Oo(e) {
    Go = e, gi = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ut(e) {
    return Id(Go, e);
  }
  function Sr(e, i) {
    return Go === null && Oo(e), Id(e, i);
  }
  function Id(e, i) {
    var l = i._currentValue;
    if (i = { context: i, memoizedValue: l, next: null }, gi === null) {
      if (e === null) throw Error(a(308));
      gi = i, e.dependencies = { lanes: 0, firstContext: i }, e.flags |= 524288;
    } else gi = gi.next = i;
    return l;
  }
  var Jv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], i = this.signal = { aborted: false, addEventListener: function(l, r) {
      e.push(r);
    } };
    this.abort = function() {
      i.aborted = true, e.forEach(function(l) {
        return l();
      });
    };
  }, Yv = n.unstable_scheduleCallback, Kv = n.unstable_NormalPriority, ht = { $$typeof: X, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function oc() {
    return { controller: new Jv(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Xa(e) {
    e.refCount--, e.refCount === 0 && Yv(Kv, function() {
      e.controller.abort();
    });
  }
  var Qa = null, lc = 0, Ul = 0, Ll = null;
  function $v(e, i) {
    if (Qa === null) {
      var l = Qa = [];
      lc = 0, Ul = uf(), Ll = { status: "pending", value: void 0, then: function(r) {
        l.push(r);
      } };
    }
    return lc++, i.then(Dd, Dd), i;
  }
  function Dd() {
    if (--lc === 0 && Qa !== null) {
      Ll !== null && (Ll.status = "fulfilled");
      var e = Qa;
      Qa = null, Ul = 0, Ll = null;
      for (var i = 0; i < e.length; i++) (0, e[i])();
    }
  }
  function Xv(e, i) {
    var l = [], r = { status: "pending", value: null, reason: null, then: function(p) {
      l.push(p);
    } };
    return e.then(function() {
      r.status = "fulfilled", r.value = i;
      for (var p = 0; p < l.length; p++) (0, l[p])(i);
    }, function(p) {
      for (r.status = "rejected", r.reason = p, p = 0; p < l.length; p++) (0, l[p])(void 0);
    }), r;
  }
  var Ud = B.S;
  B.S = function(e, i) {
    gm = Ge(), typeof i == "object" && i !== null && typeof i.then == "function" && $v(e, i), Ud !== null && Ud(e, i);
  };
  var Ho = I(null);
  function ac() {
    var e = Ho.current;
    return e !== null ? e : it.pooledCache;
  }
  function Tr(e, i) {
    i === null ? oe(Ho, Ho.current) : oe(Ho, i.pool);
  }
  function Ld() {
    var e = ac();
    return e === null ? null : { parent: ht._currentValue, pool: e };
  }
  var kl = Error(a(460)), sc = Error(a(474)), Er = Error(a(542)), _r = { then: function() {
  } };
  function kd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Pd(e, i, l) {
    switch (l = e[l], l === void 0 ? e.push(i) : l !== i && (i.then(_n, _n), i = l), i.status) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw e = i.reason, Od(e), e;
      default:
        if (typeof i.status == "string") i.then(_n, _n);
        else {
          if (e = it, e !== null && 100 < e.shellSuspendCounter) throw Error(a(482));
          e = i, e.status = "pending", e.then(function(r) {
            if (i.status === "pending") {
              var p = i;
              p.status = "fulfilled", p.value = r;
            }
          }, function(r) {
            if (i.status === "pending") {
              var p = i;
              p.status = "rejected", p.reason = r;
            }
          });
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw e = i.reason, Od(e), e;
        }
        throw qo = i, kl;
    }
  }
  function Bo(e) {
    try {
      var i = e._init;
      return i(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (qo = l, kl) : l;
    }
  }
  var qo = null;
  function Gd() {
    if (qo === null) throw Error(a(459));
    var e = qo;
    return qo = null, e;
  }
  function Od(e) {
    if (e === kl || e === Er) throw Error(a(483));
  }
  var Pl = null, Za = 0;
  function Cr(e) {
    var i = Za;
    return Za += 1, Pl === null && (Pl = []), Pd(Pl, e, i);
  }
  function Wa(e, i) {
    i = i.props.ref, e.ref = i !== void 0 ? i : null;
  }
  function Ar(e, i) {
    throw i.$$typeof === E ? Error(a(525)) : (e = Object.prototype.toString.call(i), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e)));
  }
  function Hd(e) {
    function i(U, M) {
      if (e) {
        var L = U.deletions;
        L === null ? (U.deletions = [M], U.flags |= 16) : L.push(M);
      }
    }
    function l(U, M) {
      if (!e) return null;
      for (; M !== null; ) i(U, M), M = M.sibling;
      return null;
    }
    function r(U) {
      for (var M = /* @__PURE__ */ new Map(); U !== null; ) U.key !== null ? M.set(U.key, U) : M.set(U.index, U), U = U.sibling;
      return M;
    }
    function p(U, M) {
      return U = Bn(U, M), U.index = 0, U.sibling = null, U;
    }
    function h(U, M, L) {
      return U.index = L, e ? (L = U.alternate, L !== null ? (L = L.index, L < M ? (U.flags |= 67108866, M) : L) : (U.flags |= 67108866, M)) : (U.flags |= 1048576, M);
    }
    function T(U) {
      return e && U.alternate === null && (U.flags |= 67108866), U;
    }
    function A(U, M, L, F) {
      return M === null || M.tag !== 6 ? (M = Ya(L, U.mode, F), M.return = U, M) : (M = p(M, L), M.return = U, M);
    }
    function w(U, M, L, F) {
      var me = L.type;
      return me === H ? z(U, M, L.props.children, F, L.key) : M !== null && (M.elementType === me || typeof me == "object" && me !== null && me.$$typeof === Te && Bo(me) === M.type) ? (M = p(M, L.props), Wa(M, L), M.return = U, M) : (M = Rl(L.type, L.key, L.props, null, U.mode, F), Wa(M, L), M.return = U, M);
    }
    function k(U, M, L, F) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== L.containerInfo || M.stateNode.implementation !== L.implementation ? (M = Ka(L, U.mode, F), M.return = U, M) : (M = p(M, L.children || []), M.return = U, M);
    }
    function z(U, M, L, F, me) {
      return M === null || M.tag !== 7 ? (M = hi(L, U.mode, F, me), M.return = U, M) : (M = p(M, L), M.return = U, M);
    }
    function $(U, M, L) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return M = Ya("" + M, U.mode, L), M.return = U, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case b:
            return L = Rl(M.type, M.key, M.props, null, U.mode, L), Wa(L, M), L.return = U, L;
          case D:
            return M = Ka(M, U.mode, L), M.return = U, M;
          case Te:
            return M = Bo(M), $(U, M, L);
        }
        if (Fe(M) || Z(M)) return M = hi(M, U.mode, L, null), M.return = U, M;
        if (typeof M.then == "function") return $(U, Cr(M), L);
        if (M.$$typeof === X) return $(U, Sr(U, M), L);
        Ar(U, M);
      }
      return null;
    }
    function G(U, M, L, F) {
      var me = M !== null ? M.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return me !== null ? null : A(U, M, "" + L, F);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            return L.key === me ? w(U, M, L, F) : null;
          case D:
            return L.key === me ? k(U, M, L, F) : null;
          case Te:
            return L = Bo(L), G(U, M, L, F);
        }
        if (Fe(L) || Z(L)) return me !== null ? null : z(U, M, L, F, null);
        if (typeof L.then == "function") return G(U, M, Cr(L), F);
        if (L.$$typeof === X) return G(U, M, Sr(U, L), F);
        Ar(U, L);
      }
      return null;
    }
    function q(U, M, L, F, me) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint") return U = U.get(L) || null, A(M, U, "" + F, me);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            return U = U.get(F.key === null ? L : F.key) || null, w(M, U, F, me);
          case D:
            return U = U.get(F.key === null ? L : F.key) || null, k(M, U, F, me);
          case Te:
            return F = Bo(F), q(U, M, L, F, me);
        }
        if (Fe(F) || Z(F)) return U = U.get(L) || null, z(M, U, F, me, null);
        if (typeof F.then == "function") return q(U, M, L, Cr(F), me);
        if (F.$$typeof === X) return q(U, M, L, Sr(M, F), me);
        Ar(M, F);
      }
      return null;
    }
    function ue(U, M, L, F) {
      for (var me = null, He = null, fe = M, we = M = 0, ke = null; fe !== null && we < L.length; we++) {
        fe.index > we ? (ke = fe, fe = null) : ke = fe.sibling;
        var Be = G(U, fe, L[we], F);
        if (Be === null) {
          fe === null && (fe = ke);
          break;
        }
        e && fe && Be.alternate === null && i(U, fe), M = h(Be, M, we), He === null ? me = Be : He.sibling = Be, He = Be, fe = ke;
      }
      if (we === L.length) return l(U, fe), Re && he(U, we), me;
      if (fe === null) {
        for (; we < L.length; we++) fe = $(U, L[we], F), fe !== null && (M = h(fe, M, we), He === null ? me = fe : He.sibling = fe, He = fe);
        return Re && he(U, we), me;
      }
      for (fe = r(fe); we < L.length; we++) ke = q(fe, U, we, L[we], F), ke !== null && (e && ke.alternate !== null && fe.delete(ke.key === null ? we : ke.key), M = h(ke, M, we), He === null ? me = ke : He.sibling = ke, He = ke);
      return e && fe.forEach(function(So) {
        return i(U, So);
      }), Re && he(U, we), me;
    }
    function ye(U, M, L, F) {
      if (L == null) throw Error(a(151));
      for (var me = null, He = null, fe = M, we = M = 0, ke = null, Be = L.next(); fe !== null && !Be.done; we++, Be = L.next()) {
        fe.index > we ? (ke = fe, fe = null) : ke = fe.sibling;
        var So = G(U, fe, Be.value, F);
        if (So === null) {
          fe === null && (fe = ke);
          break;
        }
        e && fe && So.alternate === null && i(U, fe), M = h(So, M, we), He === null ? me = So : He.sibling = So, He = So, fe = ke;
      }
      if (Be.done) return l(U, fe), Re && he(U, we), me;
      if (fe === null) {
        for (; !Be.done; we++, Be = L.next()) Be = $(U, Be.value, F), Be !== null && (M = h(Be, M, we), He === null ? me = Be : He.sibling = Be, He = Be);
        return Re && he(U, we), me;
      }
      for (fe = r(fe); !Be.done; we++, Be = L.next()) Be = q(fe, U, we, Be.value, F), Be !== null && (e && Be.alternate !== null && fe.delete(Be.key === null ? we : Be.key), M = h(Be, M, we), He === null ? me = Be : He.sibling = Be, He = Be);
      return e && fe.forEach(function(aS) {
        return i(U, aS);
      }), Re && he(U, we), me;
    }
    function Ze(U, M, L, F) {
      if (typeof L == "object" && L !== null && L.type === H && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            e: {
              for (var me = L.key; M !== null; ) {
                if (M.key === me) {
                  if (me = L.type, me === H) {
                    if (M.tag === 7) {
                      l(U, M.sibling), F = p(M, L.props.children), F.return = U, U = F;
                      break e;
                    }
                  } else if (M.elementType === me || typeof me == "object" && me !== null && me.$$typeof === Te && Bo(me) === M.type) {
                    l(U, M.sibling), F = p(M, L.props), Wa(F, L), F.return = U, U = F;
                    break e;
                  }
                  l(U, M);
                  break;
                } else i(U, M);
                M = M.sibling;
              }
              L.type === H ? (F = hi(L.props.children, U.mode, F, L.key), F.return = U, U = F) : (F = Rl(L.type, L.key, L.props, null, U.mode, F), Wa(F, L), F.return = U, U = F);
            }
            return T(U);
          case D:
            e: {
              for (me = L.key; M !== null; ) {
                if (M.key === me) if (M.tag === 4 && M.stateNode.containerInfo === L.containerInfo && M.stateNode.implementation === L.implementation) {
                  l(U, M.sibling), F = p(M, L.children || []), F.return = U, U = F;
                  break e;
                } else {
                  l(U, M);
                  break;
                }
                else i(U, M);
                M = M.sibling;
              }
              F = Ka(L, U.mode, F), F.return = U, U = F;
            }
            return T(U);
          case Te:
            return L = Bo(L), Ze(U, M, L, F);
        }
        if (Fe(L)) return ue(U, M, L, F);
        if (Z(L)) {
          if (me = Z(L), typeof me != "function") throw Error(a(150));
          return L = me.call(L), ye(U, M, L, F);
        }
        if (typeof L.then == "function") return Ze(U, M, Cr(L), F);
        if (L.$$typeof === X) return Ze(U, M, Sr(U, L), F);
        Ar(U, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, M !== null && M.tag === 6 ? (l(U, M.sibling), F = p(M, L), F.return = U, U = F) : (l(U, M), F = Ya(L, U.mode, F), F.return = U, U = F), T(U)) : l(U, M);
    }
    return function(U, M, L, F) {
      try {
        Za = 0;
        var me = Ze(U, M, L, F);
        return Pl = null, me;
      } catch (fe) {
        if (fe === kl || fe === Er) throw fe;
        var He = Kt(29, fe, null, U.mode);
        return He.lanes = F, He.return = U, He;
      } finally {
      }
    };
  }
  var Vo = Hd(true), Bd = Hd(false), to = false;
  function rc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function uc(e, i) {
    e = e.updateQueue, i.updateQueue === e && (i.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function no(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function io(e, i, l) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ze & 2) !== 0) {
      var p = r.pending;
      return p === null ? i.next = i : (i.next = p.next, p.next = i), r.pending = i, i = mi(e), Hn(e, null, l), i;
    }
    return wl(e, r, i, l), mi(e);
  }
  function ja(e, i, l) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (l & 4194048) !== 0)) {
      var r = i.lanes;
      r &= e.pendingLanes, l |= r, i.lanes = l, No(e, l);
    }
  }
  function cc(e, i) {
    var l = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, l === r)) {
      var p = null, h = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var T = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          h === null ? p = h = T : h = h.next = T, l = l.next;
        } while (l !== null);
        h === null ? p = h = i : h = h.next = i;
      } else p = h = i;
      l = { baseState: r.baseState, firstBaseUpdate: p, lastBaseUpdate: h, shared: r.shared, callbacks: r.callbacks }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = i : e.next = i, l.lastBaseUpdate = i;
  }
  var fc = false;
  function es() {
    if (fc) {
      var e = Ll;
      if (e !== null) throw e;
    }
  }
  function ts(e, i, l, r) {
    fc = false;
    var p = e.updateQueue;
    to = false;
    var h = p.firstBaseUpdate, T = p.lastBaseUpdate, A = p.shared.pending;
    if (A !== null) {
      p.shared.pending = null;
      var w = A, k = w.next;
      w.next = null, T === null ? h = k : T.next = k, T = w;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, A = z.lastBaseUpdate, A !== T && (A === null ? z.firstBaseUpdate = k : A.next = k, z.lastBaseUpdate = w));
    }
    if (h !== null) {
      var $ = p.baseState;
      T = 0, z = k = w = null, A = h;
      do {
        var G = A.lane & -536870913, q = G !== A.lane;
        if (q ? (Le & G) === G : (r & G) === G) {
          G !== 0 && G === Ul && (fc = true), z !== null && (z = z.next = { lane: 0, tag: A.tag, payload: A.payload, callback: null, next: null });
          e: {
            var ue = e, ye = A;
            G = i;
            var Ze = l;
            switch (ye.tag) {
              case 1:
                if (ue = ye.payload, typeof ue == "function") {
                  $ = ue.call(Ze, $, G);
                  break e;
                }
                $ = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = ye.payload, G = typeof ue == "function" ? ue.call(Ze, $, G) : ue, G == null) break e;
                $ = _({}, $, G);
                break e;
              case 2:
                to = true;
            }
          }
          G = A.callback, G !== null && (e.flags |= 64, q && (e.flags |= 8192), q = p.callbacks, q === null ? p.callbacks = [G] : q.push(G));
        } else q = { lane: G, tag: A.tag, payload: A.payload, callback: A.callback, next: null }, z === null ? (k = z = q, w = $) : z = z.next = q, T |= G;
        if (A = A.next, A === null) {
          if (A = p.shared.pending, A === null) break;
          q = A, A = q.next, q.next = null, p.lastBaseUpdate = q, p.shared.pending = null;
        }
      } while (true);
      z === null && (w = $), p.baseState = w, p.firstBaseUpdate = k, p.lastBaseUpdate = z, h === null && (p.shared.lanes = 0), ro |= T, e.lanes = T, e.memoizedState = $;
    }
  }
  function qd(e, i) {
    if (typeof e != "function") throw Error(a(191, e));
    e.call(i);
  }
  function Vd(e, i) {
    var l = e.callbacks;
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) qd(l[e], i);
  }
  var Gl = I(null), xr = I(0);
  function zd(e, i) {
    e = bi, oe(xr, e), oe(Gl, i), bi = e | i.baseLanes;
  }
  function dc() {
    oe(xr, bi), oe(Gl, Gl.current);
  }
  function pc() {
    bi = xr.current, K(Gl), K(xr);
  }
  var hn = I(null), Rn = null;
  function oo(e) {
    var i = e.alternate;
    oe(dt, dt.current & 1), oe(hn, e), Rn === null && (i === null || Gl.current !== null || i.memoizedState !== null) && (Rn = e);
  }
  function mc(e) {
    oe(dt, dt.current), oe(hn, e), Rn === null && (Rn = e);
  }
  function Fd(e) {
    e.tag === 22 ? (oe(dt, dt.current), oe(hn, e), Rn === null && (Rn = e)) : lo();
  }
  function lo() {
    oe(dt, dt.current), oe(hn, hn.current);
  }
  function gn(e) {
    K(hn), Rn === e && (Rn = null), K(dt);
  }
  var dt = I(0);
  function br(e) {
    for (var i = e; i !== null; ) {
      if (i.tag === 13) {
        var l = i.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ef(l) || _f(l))) return i;
      } else if (i.tag === 19 && (i.memoizedProps.revealOrder === "forwards" || i.memoizedProps.revealOrder === "backwards" || i.memoizedProps.revealOrder === "unstable_legacy-backwards" || i.memoizedProps.revealOrder === "together")) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === e) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e) return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var vi = 0, be = null, Xe = null, gt = null, Nr = false, Ol = false, zo = false, wr = 0, ns = 0, Hl = null, Qv = 0;
  function ct() {
    throw Error(a(321));
  }
  function hc(e, i) {
    if (i === null) return false;
    for (var l = 0; l < i.length && l < e.length; l++) if (!Yt(e[l], i[l])) return false;
    return true;
  }
  function gc(e, i, l, r, p, h) {
    return vi = h, be = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, B.H = e === null || e.memoizedState === null ? Np : Ic, zo = false, h = l(r, p), zo = false, Ol && (h = Yd(i, l, r, p)), Jd(e), h;
  }
  function Jd(e) {
    B.H = ls;
    var i = Xe !== null && Xe.next !== null;
    if (vi = 0, gt = Xe = be = null, Nr = false, ns = 0, Hl = null, i) throw Error(a(300));
    e === null || yt || (e = e.dependencies, e !== null && vr(e) && (yt = true));
  }
  function Yd(e, i, l, r) {
    be = e;
    var p = 0;
    do {
      if (Ol && (Hl = null), ns = 0, Ol = false, 25 <= p) throw Error(a(301));
      if (p += 1, gt = Xe = null, e.updateQueue != null) {
        var h = e.updateQueue;
        h.lastEffect = null, h.events = null, h.stores = null, h.memoCache != null && (h.memoCache.index = 0);
      }
      B.H = wp, h = i(l, r);
    } while (Ol);
    return h;
  }
  function Zv() {
    var e = B.H, i = e.useState()[0];
    return i = typeof i.then == "function" ? is(i) : i, e = e.useState()[0], (Xe !== null ? Xe.memoizedState : null) !== e && (be.flags |= 1024), i;
  }
  function yc() {
    var e = wr !== 0;
    return wr = 0, e;
  }
  function vc(e, i, l) {
    i.updateQueue = e.updateQueue, i.flags &= -2053, e.lanes &= ~l;
  }
  function Sc(e) {
    if (Nr) {
      for (e = e.memoizedState; e !== null; ) {
        var i = e.queue;
        i !== null && (i.pending = null), e = e.next;
      }
      Nr = false;
    }
    vi = 0, gt = Xe = be = null, Ol = false, ns = wr = 0, Hl = null;
  }
  function Qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return gt === null ? be.memoizedState = gt = e : gt = gt.next = e, gt;
  }
  function pt() {
    if (Xe === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xe.next;
    var i = gt === null ? be.memoizedState : gt.next;
    if (i !== null) gt = i, Xe = e;
    else {
      if (e === null) throw be.alternate === null ? Error(a(467)) : Error(a(310));
      Xe = e, e = { memoizedState: Xe.memoizedState, baseState: Xe.baseState, baseQueue: Xe.baseQueue, queue: Xe.queue, next: null }, gt === null ? be.memoizedState = gt = e : gt = gt.next = e;
    }
    return gt;
  }
  function Rr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function is(e) {
    var i = ns;
    return ns += 1, Hl === null && (Hl = []), e = Pd(Hl, e, i), i = be, (gt === null ? i.memoizedState : gt.next) === null && (i = i.alternate, B.H = i === null || i.memoizedState === null ? Np : Ic), e;
  }
  function Mr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return is(e);
      if (e.$$typeof === X) return Ut(e);
    }
    throw Error(a(438, String(e)));
  }
  function Tc(e) {
    var i = null, l = be.updateQueue;
    if (l !== null && (i = l.memoCache), i == null) {
      var r = be.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (i = { data: r.data.map(function(p) {
        return p.slice();
      }), index: 0 })));
    }
    if (i == null && (i = { data: [], index: 0 }), l === null && (l = Rr(), be.updateQueue = l), l.memoCache = i, l = i.data[i.index], l === void 0) for (l = i.data[i.index] = Array(e), r = 0; r < e; r++) l[r] = ve;
    return i.index++, l;
  }
  function Si(e, i) {
    return typeof i == "function" ? i(e) : i;
  }
  function Ir(e) {
    var i = pt();
    return Ec(i, Xe, e);
  }
  function Ec(e, i, l) {
    var r = e.queue;
    if (r === null) throw Error(a(311));
    r.lastRenderedReducer = l;
    var p = e.baseQueue, h = r.pending;
    if (h !== null) {
      if (p !== null) {
        var T = p.next;
        p.next = h.next, h.next = T;
      }
      i.baseQueue = p = h, r.pending = null;
    }
    if (h = e.baseState, p === null) e.memoizedState = h;
    else {
      i = p.next;
      var A = T = null, w = null, k = i, z = false;
      do {
        var $ = k.lane & -536870913;
        if ($ !== k.lane ? (Le & $) === $ : (vi & $) === $) {
          var G = k.revertLane;
          if (G === 0) w !== null && (w = w.next = { lane: 0, revertLane: 0, gesture: null, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }), $ === Ul && (z = true);
          else if ((vi & G) === G) {
            k = k.next, G === Ul && (z = true);
            continue;
          } else $ = { lane: 0, revertLane: k.revertLane, gesture: null, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }, w === null ? (A = w = $, T = h) : w = w.next = $, be.lanes |= G, ro |= G;
          $ = k.action, zo && l(h, $), h = k.hasEagerState ? k.eagerState : l(h, $);
        } else G = { lane: $, revertLane: k.revertLane, gesture: k.gesture, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }, w === null ? (A = w = G, T = h) : w = w.next = G, be.lanes |= $, ro |= $;
        k = k.next;
      } while (k !== null && k !== i);
      if (w === null ? T = h : w.next = A, !Yt(h, e.memoizedState) && (yt = true, z && (l = Ll, l !== null))) throw l;
      e.memoizedState = h, e.baseState = T, e.baseQueue = w, r.lastRenderedState = h;
    }
    return p === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function _c(e) {
    var i = pt(), l = i.queue;
    if (l === null) throw Error(a(311));
    l.lastRenderedReducer = e;
    var r = l.dispatch, p = l.pending, h = i.memoizedState;
    if (p !== null) {
      l.pending = null;
      var T = p = p.next;
      do
        h = e(h, T.action), T = T.next;
      while (T !== p);
      Yt(h, i.memoizedState) || (yt = true), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), l.lastRenderedState = h;
    }
    return [h, r];
  }
  function Kd(e, i, l) {
    var r = be, p = pt(), h = Re;
    if (h) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else l = i();
    var T = !Yt((Xe || p).memoizedState, l);
    if (T && (p.memoizedState = l, yt = true), p = p.queue, xc(Qd.bind(null, r, p, e), [e]), p.getSnapshot !== i || T || gt !== null && gt.memoizedState.tag & 1) {
      if (r.flags |= 2048, Bl(9, { destroy: void 0 }, Xd.bind(null, r, p, l, i), null), it === null) throw Error(a(349));
      h || (vi & 127) !== 0 || $d(r, i, l);
    }
    return l;
  }
  function $d(e, i, l) {
    e.flags |= 16384, e = { getSnapshot: i, value: l }, i = be.updateQueue, i === null ? (i = Rr(), be.updateQueue = i, i.stores = [e]) : (l = i.stores, l === null ? i.stores = [e] : l.push(e));
  }
  function Xd(e, i, l, r) {
    i.value = l, i.getSnapshot = r, Zd(i) && Wd(e);
  }
  function Qd(e, i, l) {
    return l(function() {
      Zd(i) && Wd(e);
    });
  }
  function Zd(e) {
    var i = e.getSnapshot;
    e = e.value;
    try {
      var l = i();
      return !Yt(e, l);
    } catch {
      return true;
    }
  }
  function Wd(e) {
    var i = pi(e, 2);
    i !== null && rn(i, e, 2);
  }
  function Cc(e) {
    var i = Qt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), zo) {
        Ln(true);
        try {
          l();
        } finally {
          Ln(false);
        }
      }
    }
    return i.memoizedState = i.baseState = e, i.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Si, lastRenderedState: e }, i;
  }
  function jd(e, i, l, r) {
    return e.baseState = l, Ec(e, Xe, typeof r == "function" ? r : Si);
  }
  function Wv(e, i, l, r, p) {
    if (Lr(e)) throw Error(a(485));
    if (e = i.action, e !== null) {
      var h = { payload: p, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(T) {
        h.listeners.push(T);
      } };
      B.T !== null ? l(true) : h.isTransition = false, r(h), l = i.pending, l === null ? (h.next = i.pending = h, ep(i, h)) : (h.next = l.next, i.pending = l.next = h);
    }
  }
  function ep(e, i) {
    var l = i.action, r = i.payload, p = e.state;
    if (i.isTransition) {
      var h = B.T, T = {};
      B.T = T;
      try {
        var A = l(p, r), w = B.S;
        w !== null && w(T, A), tp(e, i, A);
      } catch (k) {
        Ac(e, i, k);
      } finally {
        h !== null && T.types !== null && (h.types = T.types), B.T = h;
      }
    } else try {
      h = l(p, r), tp(e, i, h);
    } catch (k) {
      Ac(e, i, k);
    }
  }
  function tp(e, i, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(r) {
      np(e, i, r);
    }, function(r) {
      return Ac(e, i, r);
    }) : np(e, i, l);
  }
  function np(e, i, l) {
    i.status = "fulfilled", i.value = l, ip(i), e.state = l, i = e.pending, i !== null && (l = i.next, l === i ? e.pending = null : (l = l.next, i.next = l, ep(e, l)));
  }
  function Ac(e, i, l) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        i.status = "rejected", i.reason = l, ip(i), i = i.next;
      while (i !== r);
    }
    e.action = null;
  }
  function ip(e) {
    e = e.listeners;
    for (var i = 0; i < e.length; i++) (0, e[i])();
  }
  function op(e, i) {
    return i;
  }
  function lp(e, i) {
    if (Re) {
      var l = it.formState;
      if (l !== null) {
        e: {
          var r = be;
          if (Re) {
            if (Je) {
              t: {
                for (var p = Je, h = $t; p.nodeType !== 8; ) {
                  if (!h) {
                    p = null;
                    break t;
                  }
                  if (p = Mn(p.nextSibling), p === null) {
                    p = null;
                    break t;
                  }
                }
                h = p.data, p = h === "F!" || h === "F" ? p : null;
              }
              if (p) {
                Je = Mn(p.nextSibling), r = p.data === "F!";
                break e;
              }
            }
            Xt(r);
          }
          r = false;
        }
        r && (i = l[0]);
      }
    }
    return l = Qt(), l.memoizedState = l.baseState = i, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: op, lastRenderedState: i }, l.queue = r, l = Ap.bind(null, be, r), r.dispatch = l, r = Cc(false), h = Mc.bind(null, be, false, r.queue), r = Qt(), p = { state: i, dispatch: null, action: e, pending: null }, r.queue = p, l = Wv.bind(null, be, p, h, l), p.dispatch = l, r.memoizedState = e, [i, l, false];
  }
  function ap(e) {
    var i = pt();
    return sp(i, Xe, e);
  }
  function sp(e, i, l) {
    if (i = Ec(e, i, op)[0], e = Ir(Si)[0], typeof i == "object" && i !== null && typeof i.then == "function") try {
      var r = is(i);
    } catch (T) {
      throw T === kl ? Er : T;
    }
    else r = i;
    i = pt();
    var p = i.queue, h = p.dispatch;
    return l !== i.memoizedState && (be.flags |= 2048, Bl(9, { destroy: void 0 }, jv.bind(null, p, l), null)), [r, h, e];
  }
  function jv(e, i) {
    e.action = i;
  }
  function rp(e) {
    var i = pt(), l = Xe;
    if (l !== null) return sp(i, l, e);
    pt(), i = i.memoizedState, l = pt();
    var r = l.queue.dispatch;
    return l.memoizedState = e, [i, r, false];
  }
  function Bl(e, i, l, r) {
    return e = { tag: e, create: l, deps: r, inst: i, next: null }, i = be.updateQueue, i === null && (i = Rr(), be.updateQueue = i), l = i.lastEffect, l === null ? i.lastEffect = e.next = e : (r = l.next, l.next = e, e.next = r, i.lastEffect = e), e;
  }
  function up() {
    return pt().memoizedState;
  }
  function Dr(e, i, l, r) {
    var p = Qt();
    be.flags |= e, p.memoizedState = Bl(1 | i, { destroy: void 0 }, l, r === void 0 ? null : r);
  }
  function Ur(e, i, l, r) {
    var p = pt();
    r = r === void 0 ? null : r;
    var h = p.memoizedState.inst;
    Xe !== null && r !== null && hc(r, Xe.memoizedState.deps) ? p.memoizedState = Bl(i, h, l, r) : (be.flags |= e, p.memoizedState = Bl(1 | i, h, l, r));
  }
  function cp(e, i) {
    Dr(8390656, 8, e, i);
  }
  function xc(e, i) {
    Ur(2048, 8, e, i);
  }
  function e0(e) {
    be.flags |= 4;
    var i = be.updateQueue;
    if (i === null) i = Rr(), be.updateQueue = i, i.events = [e];
    else {
      var l = i.events;
      l === null ? i.events = [e] : l.push(e);
    }
  }
  function fp(e) {
    var i = pt().memoizedState;
    return e0({ ref: i, nextImpl: e }), function() {
      if ((ze & 2) !== 0) throw Error(a(440));
      return i.impl.apply(void 0, arguments);
    };
  }
  function dp(e, i) {
    return Ur(4, 2, e, i);
  }
  function pp(e, i) {
    return Ur(4, 4, e, i);
  }
  function mp(e, i) {
    if (typeof i == "function") {
      e = e();
      var l = i(e);
      return function() {
        typeof l == "function" ? l() : i(null);
      };
    }
    if (i != null) return e = e(), i.current = e, function() {
      i.current = null;
    };
  }
  function hp(e, i, l) {
    l = l != null ? l.concat([e]) : null, Ur(4, 4, mp.bind(null, i, e), l);
  }
  function bc() {
  }
  function gp(e, i) {
    var l = pt();
    i = i === void 0 ? null : i;
    var r = l.memoizedState;
    return i !== null && hc(i, r[1]) ? r[0] : (l.memoizedState = [e, i], e);
  }
  function yp(e, i) {
    var l = pt();
    i = i === void 0 ? null : i;
    var r = l.memoizedState;
    if (i !== null && hc(i, r[1])) return r[0];
    if (r = e(), zo) {
      Ln(true);
      try {
        e();
      } finally {
        Ln(false);
      }
    }
    return l.memoizedState = [r, i], r;
  }
  function Nc(e, i, l) {
    return l === void 0 || (vi & 1073741824) !== 0 && (Le & 261930) === 0 ? e.memoizedState = i : (e.memoizedState = l, e = vm(), be.lanes |= e, ro |= e, l);
  }
  function vp(e, i, l, r) {
    return Yt(l, i) ? l : Gl.current !== null ? (e = Nc(e, l, r), Yt(e, i) || (yt = true), e) : (vi & 42) === 0 || (vi & 1073741824) !== 0 && (Le & 261930) === 0 ? (yt = true, e.memoizedState = l) : (e = vm(), be.lanes |= e, ro |= e, i);
  }
  function Sp(e, i, l, r, p) {
    var h = te.p;
    te.p = h !== 0 && 8 > h ? h : 8;
    var T = B.T, A = {};
    B.T = A, Mc(e, false, i, l);
    try {
      var w = p(), k = B.S;
      if (k !== null && k(A, w), w !== null && typeof w == "object" && typeof w.then == "function") {
        var z = Xv(w, r);
        os(e, i, z, Sn(e));
      } else os(e, i, r, Sn(e));
    } catch ($) {
      os(e, i, { then: function() {
      }, status: "rejected", reason: $ }, Sn());
    } finally {
      te.p = h, T !== null && A.types !== null && (T.types = A.types), B.T = T;
    }
  }
  function t0() {
  }
  function wc(e, i, l, r) {
    if (e.tag !== 5) throw Error(a(476));
    var p = Tp(e).queue;
    Sp(e, p, i, ce, l === null ? t0 : function() {
      return Ep(e), l(r);
    });
  }
  function Tp(e) {
    var i = e.memoizedState;
    if (i !== null) return i;
    i = { memoizedState: ce, baseState: ce, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Si, lastRenderedState: ce }, next: null };
    var l = {};
    return i.next = { memoizedState: l, baseState: l, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Si, lastRenderedState: l }, next: null }, e.memoizedState = i, e = e.alternate, e !== null && (e.memoizedState = i), i;
  }
  function Ep(e) {
    var i = Tp(e);
    i.next === null && (i = e.alternate.memoizedState), os(e, i.next.queue, {}, Sn());
  }
  function Rc() {
    return Ut(Es);
  }
  function _p() {
    return pt().memoizedState;
  }
  function Cp() {
    return pt().memoizedState;
  }
  function n0(e) {
    for (var i = e.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var l = Sn();
          e = no(l);
          var r = io(i, e, l);
          r !== null && (rn(r, i, l), ja(r, i, l)), i = { cache: oc() }, e.payload = i;
          return;
      }
      i = i.return;
    }
  }
  function i0(e, i, l) {
    var r = Sn();
    l = { lane: r, revertLane: 0, gesture: null, action: l, hasEagerState: false, eagerState: null, next: null }, Lr(e) ? xp(i, l) : (l = Fa(e, i, l, r), l !== null && (rn(l, e, r), bp(l, i, r)));
  }
  function Ap(e, i, l) {
    var r = Sn();
    os(e, i, l, r);
  }
  function os(e, i, l, r) {
    var p = { lane: r, revertLane: 0, gesture: null, action: l, hasEagerState: false, eagerState: null, next: null };
    if (Lr(e)) xp(i, p);
    else {
      var h = e.alternate;
      if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = i.lastRenderedReducer, h !== null)) try {
        var T = i.lastRenderedState, A = h(T, l);
        if (p.hasEagerState = true, p.eagerState = A, Yt(A, T)) return wl(e, i, p, 0), it === null && Nl(), false;
      } catch {
      } finally {
      }
      if (l = Fa(e, i, p, r), l !== null) return rn(l, e, r), bp(l, i, r), true;
    }
    return false;
  }
  function Mc(e, i, l, r) {
    if (r = { lane: 2, revertLane: uf(), gesture: null, action: r, hasEagerState: false, eagerState: null, next: null }, Lr(e)) {
      if (i) throw Error(a(479));
    } else i = Fa(e, l, r, 2), i !== null && rn(i, e, 2);
  }
  function Lr(e) {
    var i = e.alternate;
    return e === be || i !== null && i === be;
  }
  function xp(e, i) {
    Ol = Nr = true;
    var l = e.pending;
    l === null ? i.next = i : (i.next = l.next, l.next = i), e.pending = i;
  }
  function bp(e, i, l) {
    if ((l & 4194048) !== 0) {
      var r = i.lanes;
      r &= e.pendingLanes, l |= r, i.lanes = l, No(e, l);
    }
  }
  var ls = { readContext: Ut, use: Mr, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useLayoutEffect: ct, useInsertionEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useSyncExternalStore: ct, useId: ct, useHostTransitionStatus: ct, useFormState: ct, useActionState: ct, useOptimistic: ct, useMemoCache: ct, useCacheRefresh: ct };
  ls.useEffectEvent = ct;
  var Np = { readContext: Ut, use: Mr, useCallback: function(e, i) {
    return Qt().memoizedState = [e, i === void 0 ? null : i], e;
  }, useContext: Ut, useEffect: cp, useImperativeHandle: function(e, i, l) {
    l = l != null ? l.concat([e]) : null, Dr(4194308, 4, mp.bind(null, i, e), l);
  }, useLayoutEffect: function(e, i) {
    return Dr(4194308, 4, e, i);
  }, useInsertionEffect: function(e, i) {
    Dr(4, 2, e, i);
  }, useMemo: function(e, i) {
    var l = Qt();
    i = i === void 0 ? null : i;
    var r = e();
    if (zo) {
      Ln(true);
      try {
        e();
      } finally {
        Ln(false);
      }
    }
    return l.memoizedState = [r, i], r;
  }, useReducer: function(e, i, l) {
    var r = Qt();
    if (l !== void 0) {
      var p = l(i);
      if (zo) {
        Ln(true);
        try {
          l(i);
        } finally {
          Ln(false);
        }
      }
    } else p = i;
    return r.memoizedState = r.baseState = p, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: p }, r.queue = e, e = e.dispatch = i0.bind(null, be, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var i = Qt();
    return e = { current: e }, i.memoizedState = e;
  }, useState: function(e) {
    e = Cc(e);
    var i = e.queue, l = Ap.bind(null, be, i);
    return i.dispatch = l, [e.memoizedState, l];
  }, useDebugValue: bc, useDeferredValue: function(e, i) {
    var l = Qt();
    return Nc(l, e, i);
  }, useTransition: function() {
    var e = Cc(false);
    return e = Sp.bind(null, be, e.queue, true, false), Qt().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, i, l) {
    var r = be, p = Qt();
    if (Re) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else {
      if (l = i(), it === null) throw Error(a(349));
      (Le & 127) !== 0 || $d(r, i, l);
    }
    p.memoizedState = l;
    var h = { value: l, getSnapshot: i };
    return p.queue = h, cp(Qd.bind(null, r, h, e), [e]), r.flags |= 2048, Bl(9, { destroy: void 0 }, Xd.bind(null, r, h, l, i), null), l;
  }, useId: function() {
    var e = Qt(), i = it.identifierPrefix;
    if (Re) {
      var l = ee, r = Se;
      l = (r & ~(1 << 32 - Ot(r) - 1)).toString(32) + l, i = "_" + i + "R_" + l, l = wr++, 0 < l && (i += "H" + l.toString(32)), i += "_";
    } else l = Qv++, i = "_" + i + "r_" + l.toString(32) + "_";
    return e.memoizedState = i;
  }, useHostTransitionStatus: Rc, useFormState: lp, useActionState: lp, useOptimistic: function(e) {
    var i = Qt();
    i.memoizedState = i.baseState = e;
    var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return i.queue = l, i = Mc.bind(null, be, true, l), l.dispatch = i, [e, i];
  }, useMemoCache: Tc, useCacheRefresh: function() {
    return Qt().memoizedState = n0.bind(null, be);
  }, useEffectEvent: function(e) {
    var i = Qt(), l = { impl: e };
    return i.memoizedState = l, function() {
      if ((ze & 2) !== 0) throw Error(a(440));
      return l.impl.apply(void 0, arguments);
    };
  } }, Ic = { readContext: Ut, use: Mr, useCallback: gp, useContext: Ut, useEffect: xc, useImperativeHandle: hp, useInsertionEffect: dp, useLayoutEffect: pp, useMemo: yp, useReducer: Ir, useRef: up, useState: function() {
    return Ir(Si);
  }, useDebugValue: bc, useDeferredValue: function(e, i) {
    var l = pt();
    return vp(l, Xe.memoizedState, e, i);
  }, useTransition: function() {
    var e = Ir(Si)[0], i = pt().memoizedState;
    return [typeof e == "boolean" ? e : is(e), i];
  }, useSyncExternalStore: Kd, useId: _p, useHostTransitionStatus: Rc, useFormState: ap, useActionState: ap, useOptimistic: function(e, i) {
    var l = pt();
    return jd(l, Xe, e, i);
  }, useMemoCache: Tc, useCacheRefresh: Cp };
  Ic.useEffectEvent = fp;
  var wp = { readContext: Ut, use: Mr, useCallback: gp, useContext: Ut, useEffect: xc, useImperativeHandle: hp, useInsertionEffect: dp, useLayoutEffect: pp, useMemo: yp, useReducer: _c, useRef: up, useState: function() {
    return _c(Si);
  }, useDebugValue: bc, useDeferredValue: function(e, i) {
    var l = pt();
    return Xe === null ? Nc(l, e, i) : vp(l, Xe.memoizedState, e, i);
  }, useTransition: function() {
    var e = _c(Si)[0], i = pt().memoizedState;
    return [typeof e == "boolean" ? e : is(e), i];
  }, useSyncExternalStore: Kd, useId: _p, useHostTransitionStatus: Rc, useFormState: rp, useActionState: rp, useOptimistic: function(e, i) {
    var l = pt();
    return Xe !== null ? jd(l, Xe, e, i) : (l.baseState = e, [e, l.queue.dispatch]);
  }, useMemoCache: Tc, useCacheRefresh: Cp };
  wp.useEffectEvent = fp;
  function Dc(e, i, l, r) {
    i = e.memoizedState, l = l(r, i), l = l == null ? i : _({}, i, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Uc = { enqueueSetState: function(e, i, l) {
    e = e._reactInternals;
    var r = Sn(), p = no(r);
    p.payload = i, l != null && (p.callback = l), i = io(e, p, r), i !== null && (rn(i, e, r), ja(i, e, r));
  }, enqueueReplaceState: function(e, i, l) {
    e = e._reactInternals;
    var r = Sn(), p = no(r);
    p.tag = 1, p.payload = i, l != null && (p.callback = l), i = io(e, p, r), i !== null && (rn(i, e, r), ja(i, e, r));
  }, enqueueForceUpdate: function(e, i) {
    e = e._reactInternals;
    var l = Sn(), r = no(l);
    r.tag = 2, i != null && (r.callback = i), i = io(e, r, l), i !== null && (rn(i, e, l), ja(i, e, l));
  } };
  function Rp(e, i, l, r, p, h, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, h, T) : i.prototype && i.prototype.isPureReactComponent ? !bn(l, r) || !bn(p, h) : true;
  }
  function Mp(e, i, l, r) {
    e = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(l, r), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(l, r), i.state !== e && Uc.enqueueReplaceState(i, i.state, null);
  }
  function Fo(e, i) {
    var l = i;
    if ("ref" in i) {
      l = {};
      for (var r in i) r !== "ref" && (l[r] = i[r]);
    }
    if (e = e.defaultProps) {
      l === i && (l = _({}, l));
      for (var p in e) l[p] === void 0 && (l[p] = e[p]);
    }
    return l;
  }
  function Ip(e) {
    Wn(e);
  }
  function Dp(e) {
    console.error(e);
  }
  function Up(e) {
    Wn(e);
  }
  function kr(e, i) {
    try {
      var l = e.onUncaughtError;
      l(i.value, { componentStack: i.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Lp(e, i, l) {
    try {
      var r = e.onCaughtError;
      r(l.value, { componentStack: l.stack, errorBoundary: i.tag === 1 ? i.stateNode : null });
    } catch (p) {
      setTimeout(function() {
        throw p;
      });
    }
  }
  function Lc(e, i, l) {
    return l = no(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      kr(e, i);
    }, l;
  }
  function kp(e) {
    return e = no(e), e.tag = 3, e;
  }
  function Pp(e, i, l, r) {
    var p = l.type.getDerivedStateFromError;
    if (typeof p == "function") {
      var h = r.value;
      e.payload = function() {
        return p(h);
      }, e.callback = function() {
        Lp(i, l, r);
      };
    }
    var T = l.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      Lp(i, l, r), typeof p != "function" && (uo === null ? uo = /* @__PURE__ */ new Set([this]) : uo.add(this));
      var A = r.stack;
      this.componentDidCatch(r.value, { componentStack: A !== null ? A : "" });
    });
  }
  function o0(e, i, l, r, p) {
    if (l.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (i = l.alternate, i !== null && Dl(i, l, p, true), l = hn.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Rn === null ? Kr() : l.alternate === null && ft === 0 && (ft = 3), l.flags &= -257, l.flags |= 65536, l.lanes = p, r === _r ? l.flags |= 16384 : (i = l.updateQueue, i === null ? l.updateQueue = /* @__PURE__ */ new Set([r]) : i.add(r), af(e, r, p)), false;
          case 22:
            return l.flags |= 65536, r === _r ? l.flags |= 16384 : (i = l.updateQueue, i === null ? (i = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r]) }, l.updateQueue = i) : (l = i.retryQueue, l === null ? i.retryQueue = /* @__PURE__ */ new Set([r]) : l.add(r)), af(e, r, p)), false;
        }
        throw Error(a(435, l.tag));
      }
      return af(e, r, p), Kr(), false;
    }
    if (Re) return i = hn.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = p, r !== Ml && (e = Error(a(422), { cause: r }), $a(S(e, l)))) : (r !== Ml && (i = Error(a(423), { cause: r }), $a(S(i, l))), e = e.current.alternate, e.flags |= 65536, p &= -p, e.lanes |= p, r = S(r, l), p = Lc(e.stateNode, r, p), cc(e, p), ft !== 4 && (ft = 2)), false;
    var h = Error(a(520), { cause: r });
    if (h = S(h, l), ps === null ? ps = [h] : ps.push(h), ft !== 4 && (ft = 2), i === null) return true;
    r = S(r, l), l = i;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = p & -p, l.lanes |= e, e = Lc(l.stateNode, r, e), cc(l, e), false;
        case 1:
          if (i = l.type, h = l.stateNode, (l.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (uo === null || !uo.has(h)))) return l.flags |= 65536, p &= -p, l.lanes |= p, p = kp(p), Pp(p, e, l, r), cc(l, p), false;
      }
      l = l.return;
    } while (l !== null);
    return false;
  }
  var kc = Error(a(461)), yt = false;
  function Lt(e, i, l, r) {
    i.child = e === null ? Bd(i, null, l, r) : Vo(i, e.child, l, r);
  }
  function Gp(e, i, l, r, p) {
    l = l.render;
    var h = i.ref;
    if ("ref" in r) {
      var T = {};
      for (var A in r) A !== "ref" && (T[A] = r[A]);
    } else T = r;
    return Oo(i), r = gc(e, i, l, T, h, p), A = yc(), e !== null && !yt ? (vc(e, i, p), Ti(e, i, p)) : (Re && A && tt(i), i.flags |= 1, Lt(e, i, r, p), i.child);
  }
  function Op(e, i, l, r, p) {
    if (e === null) {
      var h = l.type;
      return typeof h == "function" && !Ja(h) && h.defaultProps === void 0 && l.compare === null ? (i.tag = 15, i.type = h, Hp(e, i, h, r, p)) : (e = Rl(l.type, null, r, i, i.mode, p), e.ref = i.ref, e.return = i, i.child = e);
    }
    if (h = e.child, !zc(e, p)) {
      var T = h.memoizedProps;
      if (l = l.compare, l = l !== null ? l : bn, l(T, r) && e.ref === i.ref) return Ti(e, i, p);
    }
    return i.flags |= 1, e = Bn(h, r), e.ref = i.ref, e.return = i, i.child = e;
  }
  function Hp(e, i, l, r, p) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (bn(h, r) && e.ref === i.ref) if (yt = false, i.pendingProps = r = h, zc(e, p)) (e.flags & 131072) !== 0 && (yt = true);
      else return i.lanes = e.lanes, Ti(e, i, p);
    }
    return Pc(e, i, l, r, p);
  }
  function Bp(e, i, l, r) {
    var p = r.children, h = e !== null ? e.memoizedState : null;
    if (e === null && i.stateNode === null && (i.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r.mode === "hidden") {
      if ((i.flags & 128) !== 0) {
        if (h = h !== null ? h.baseLanes | l : l, e !== null) {
          for (r = i.child = e.child, p = 0; r !== null; ) p = p | r.lanes | r.childLanes, r = r.sibling;
          r = p & ~h;
        } else r = 0, i.child = null;
        return qp(e, i, h, l, r);
      }
      if ((l & 536870912) !== 0) i.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Tr(i, h !== null ? h.cachePool : null), h !== null ? zd(i, h) : dc(), Fd(i);
      else return r = i.lanes = 536870912, qp(e, i, h !== null ? h.baseLanes | l : l, l, r);
    } else h !== null ? (Tr(i, h.cachePool), zd(i, h), lo(), i.memoizedState = null) : (e !== null && Tr(i, null), dc(), lo());
    return Lt(e, i, p, l), i.child;
  }
  function as(e, i) {
    return e !== null && e.tag === 22 || i.stateNode !== null || (i.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), i.sibling;
  }
  function qp(e, i, l, r, p) {
    var h = ac();
    return h = h === null ? null : { parent: ht._currentValue, pool: h }, i.memoizedState = { baseLanes: l, cachePool: h }, e !== null && Tr(i, null), dc(), Fd(i), e !== null && Dl(e, i, r, true), i.childLanes = p, null;
  }
  function Pr(e, i) {
    return i = Or({ mode: i.mode, children: i.children }, e.mode), i.ref = e.ref, e.child = i, i.return = e, i;
  }
  function Vp(e, i, l) {
    return Vo(i, e.child, null, l), e = Pr(i, i.pendingProps), e.flags |= 2, gn(i), i.memoizedState = null, e;
  }
  function l0(e, i, l) {
    var r = i.pendingProps, p = (i.flags & 128) !== 0;
    if (i.flags &= -129, e === null) {
      if (Re) {
        if (r.mode === "hidden") return e = Pr(i, r), i.lanes = 536870912, as(null, e);
        if (mc(i), (e = Je) ? (e = eh(e, $t), e = e !== null && e.data === "&" ? e : null, e !== null && (i.memoizedState = { dehydrated: e, treeContext: de !== null ? { id: Se, overflow: ee } : null, retryLane: 536870912, hydrationErrors: null }, l = gr(e), l.return = i, i.child = l, nt = i, Je = null)) : e = null, e === null) throw Xt(i);
        return i.lanes = 536870912, null;
      }
      return Pr(i, r);
    }
    var h = e.memoizedState;
    if (h !== null) {
      var T = h.dehydrated;
      if (mc(i), p) if (i.flags & 256) i.flags &= -257, i = Vp(e, i, l);
      else if (i.memoizedState !== null) i.child = e.child, i.flags |= 128, i = null;
      else throw Error(a(558));
      else if (yt || Dl(e, i, l, false), p = (l & e.childLanes) !== 0, yt || p) {
        if (r = it, r !== null && (T = wo(r, l), T !== 0 && T !== h.retryLane)) throw h.retryLane = T, pi(e, T), rn(r, e, T), kc;
        Kr(), i = Vp(e, i, l);
      } else e = h.treeContext, Je = Mn(T.nextSibling), nt = i, Re = true, lt = null, $t = false, e !== null && Tt(i, e), i = Pr(i, r), i.flags |= 4096;
      return i;
    }
    return e = Bn(e.child, { mode: r.mode, children: r.children }), e.ref = i.ref, i.child = e, e.return = i, e;
  }
  function Gr(e, i) {
    var l = i.ref;
    if (l === null) e !== null && e.ref !== null && (i.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(a(284));
      (e === null || e.ref !== l) && (i.flags |= 4194816);
    }
  }
  function Pc(e, i, l, r, p) {
    return Oo(i), l = gc(e, i, l, r, void 0, p), r = yc(), e !== null && !yt ? (vc(e, i, p), Ti(e, i, p)) : (Re && r && tt(i), i.flags |= 1, Lt(e, i, l, p), i.child);
  }
  function zp(e, i, l, r, p, h) {
    return Oo(i), i.updateQueue = null, l = Yd(i, r, l, p), Jd(e), r = yc(), e !== null && !yt ? (vc(e, i, h), Ti(e, i, h)) : (Re && r && tt(i), i.flags |= 1, Lt(e, i, l, h), i.child);
  }
  function Fp(e, i, l, r, p) {
    if (Oo(i), i.stateNode === null) {
      var h = jn, T = l.contextType;
      typeof T == "object" && T !== null && (h = Ut(T)), h = new l(r, h), i.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, h.updater = Uc, i.stateNode = h, h._reactInternals = i, h = i.stateNode, h.props = r, h.state = i.memoizedState, h.refs = {}, rc(i), T = l.contextType, h.context = typeof T == "object" && T !== null ? Ut(T) : jn, h.state = i.memoizedState, T = l.getDerivedStateFromProps, typeof T == "function" && (Dc(i, l, T, r), h.state = i.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (T = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), T !== h.state && Uc.enqueueReplaceState(h, h.state, null), ts(i, r, h, p), es(), h.state = i.memoizedState), typeof h.componentDidMount == "function" && (i.flags |= 4194308), r = true;
    } else if (e === null) {
      h = i.stateNode;
      var A = i.memoizedProps, w = Fo(l, A);
      h.props = w;
      var k = h.context, z = l.contextType;
      T = jn, typeof z == "object" && z !== null && (T = Ut(z));
      var $ = l.getDerivedStateFromProps;
      z = typeof $ == "function" || typeof h.getSnapshotBeforeUpdate == "function", A = i.pendingProps !== A, z || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (A || k !== T) && Mp(i, h, r, T), to = false;
      var G = i.memoizedState;
      h.state = G, ts(i, r, h, p), es(), k = i.memoizedState, A || G !== k || to ? (typeof $ == "function" && (Dc(i, l, $, r), k = i.memoizedState), (w = to || Rp(i, l, w, r, G, k, T)) ? (z || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = r, i.memoizedState = k), h.props = r, h.state = k, h.context = T, r = w) : (typeof h.componentDidMount == "function" && (i.flags |= 4194308), r = false);
    } else {
      h = i.stateNode, uc(e, i), T = i.memoizedProps, z = Fo(l, T), h.props = z, $ = i.pendingProps, G = h.context, k = l.contextType, w = jn, typeof k == "object" && k !== null && (w = Ut(k)), A = l.getDerivedStateFromProps, (k = typeof A == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (T !== $ || G !== w) && Mp(i, h, r, w), to = false, G = i.memoizedState, h.state = G, ts(i, r, h, p), es();
      var q = i.memoizedState;
      T !== $ || G !== q || to || e !== null && e.dependencies !== null && vr(e.dependencies) ? (typeof A == "function" && (Dc(i, l, A, r), q = i.memoizedState), (z = to || Rp(i, l, z, r, G, q, w) || e !== null && e.dependencies !== null && vr(e.dependencies)) ? (k || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(r, q, w), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(r, q, w)), typeof h.componentDidUpdate == "function" && (i.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || T === e.memoizedProps && G === e.memoizedState || (i.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && G === e.memoizedState || (i.flags |= 1024), i.memoizedProps = r, i.memoizedState = q), h.props = r, h.state = q, h.context = w, r = z) : (typeof h.componentDidUpdate != "function" || T === e.memoizedProps && G === e.memoizedState || (i.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && G === e.memoizedState || (i.flags |= 1024), r = false);
    }
    return h = r, Gr(e, i), r = (i.flags & 128) !== 0, h || r ? (h = i.stateNode, l = r && typeof l.getDerivedStateFromError != "function" ? null : h.render(), i.flags |= 1, e !== null && r ? (i.child = Vo(i, e.child, null, p), i.child = Vo(i, null, l, p)) : Lt(e, i, l, p), i.memoizedState = h.state, e = i.child) : e = Ti(e, i, p), e;
  }
  function Jp(e, i, l, r) {
    return Po(), i.flags |= 256, Lt(e, i, l, r), i.child;
  }
  var Gc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Oc(e) {
    return { baseLanes: e, cachePool: Ld() };
  }
  function Hc(e, i, l) {
    return e = e !== null ? e.childLanes & ~l : 0, i && (e |= vn), e;
  }
  function Yp(e, i, l) {
    var r = i.pendingProps, p = false, h = (i.flags & 128) !== 0, T;
    if ((T = h) || (T = e !== null && e.memoizedState === null ? false : (dt.current & 2) !== 0), T && (p = true, i.flags &= -129), T = (i.flags & 32) !== 0, i.flags &= -33, e === null) {
      if (Re) {
        if (p ? oo(i) : lo(), (e = Je) ? (e = eh(e, $t), e = e !== null && e.data !== "&" ? e : null, e !== null && (i.memoizedState = { dehydrated: e, treeContext: de !== null ? { id: Se, overflow: ee } : null, retryLane: 536870912, hydrationErrors: null }, l = gr(e), l.return = i, i.child = l, nt = i, Je = null)) : e = null, e === null) throw Xt(i);
        return _f(e) ? i.lanes = 32 : i.lanes = 536870912, null;
      }
      var A = r.children;
      return r = r.fallback, p ? (lo(), p = i.mode, A = Or({ mode: "hidden", children: A }, p), r = hi(r, p, l, null), A.return = i, r.return = i, A.sibling = r, i.child = A, r = i.child, r.memoizedState = Oc(l), r.childLanes = Hc(e, T, l), i.memoizedState = Gc, as(null, r)) : (oo(i), Bc(i, A));
    }
    var w = e.memoizedState;
    if (w !== null && (A = w.dehydrated, A !== null)) {
      if (h) i.flags & 256 ? (oo(i), i.flags &= -257, i = qc(e, i, l)) : i.memoizedState !== null ? (lo(), i.child = e.child, i.flags |= 128, i = null) : (lo(), A = r.fallback, p = i.mode, r = Or({ mode: "visible", children: r.children }, p), A = hi(A, p, l, null), A.flags |= 2, r.return = i, A.return = i, r.sibling = A, i.child = r, Vo(i, e.child, null, l), r = i.child, r.memoizedState = Oc(l), r.childLanes = Hc(e, T, l), i.memoizedState = Gc, i = as(null, r));
      else if (oo(i), _f(A)) {
        if (T = A.nextSibling && A.nextSibling.dataset, T) var k = T.dgst;
        T = k, r = Error(a(419)), r.stack = "", r.digest = T, $a({ value: r, source: null, stack: null }), i = qc(e, i, l);
      } else if (yt || Dl(e, i, l, false), T = (l & e.childLanes) !== 0, yt || T) {
        if (T = it, T !== null && (r = wo(T, l), r !== 0 && r !== w.retryLane)) throw w.retryLane = r, pi(e, r), rn(T, e, r), kc;
        Ef(A) || Kr(), i = qc(e, i, l);
      } else Ef(A) ? (i.flags |= 192, i.child = e.child, i = null) : (e = w.treeContext, Je = Mn(A.nextSibling), nt = i, Re = true, lt = null, $t = false, e !== null && Tt(i, e), i = Bc(i, r.children), i.flags |= 4096);
      return i;
    }
    return p ? (lo(), A = r.fallback, p = i.mode, w = e.child, k = w.sibling, r = Bn(w, { mode: "hidden", children: r.children }), r.subtreeFlags = w.subtreeFlags & 65011712, k !== null ? A = Bn(k, A) : (A = hi(A, p, l, null), A.flags |= 2), A.return = i, r.return = i, r.sibling = A, i.child = r, as(null, r), r = i.child, A = e.child.memoizedState, A === null ? A = Oc(l) : (p = A.cachePool, p !== null ? (w = ht._currentValue, p = p.parent !== w ? { parent: w, pool: w } : p) : p = Ld(), A = { baseLanes: A.baseLanes | l, cachePool: p }), r.memoizedState = A, r.childLanes = Hc(e, T, l), i.memoizedState = Gc, as(e.child, r)) : (oo(i), l = e.child, e = l.sibling, l = Bn(l, { mode: "visible", children: r.children }), l.return = i, l.sibling = null, e !== null && (T = i.deletions, T === null ? (i.deletions = [e], i.flags |= 16) : T.push(e)), i.child = l, i.memoizedState = null, l);
  }
  function Bc(e, i) {
    return i = Or({ mode: "visible", children: i }, e.mode), i.return = e, e.child = i;
  }
  function Or(e, i) {
    return e = Kt(22, e, null, i), e.lanes = 0, e;
  }
  function qc(e, i, l) {
    return Vo(i, e.child, null, l), e = Bc(i, i.pendingProps.children), e.flags |= 2, i.memoizedState = null, e;
  }
  function Kp(e, i, l) {
    e.lanes |= i;
    var r = e.alternate;
    r !== null && (r.lanes |= i), nc(e.return, i, l);
  }
  function Vc(e, i, l, r, p, h) {
    var T = e.memoizedState;
    T === null ? e.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: r, tail: l, tailMode: p, treeForkCount: h } : (T.isBackwards = i, T.rendering = null, T.renderingStartTime = 0, T.last = r, T.tail = l, T.tailMode = p, T.treeForkCount = h);
  }
  function $p(e, i, l) {
    var r = i.pendingProps, p = r.revealOrder, h = r.tail;
    r = r.children;
    var T = dt.current, A = (T & 2) !== 0;
    if (A ? (T = T & 1 | 2, i.flags |= 128) : T &= 1, oe(dt, T), Lt(e, i, r, l), r = Re ? O : 0, !A && e !== null && (e.flags & 128) !== 0) e: for (e = i.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Kp(e, l, i);
      else if (e.tag === 19) Kp(e, l, i);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === i) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === i) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (p) {
      case "forwards":
        for (l = i.child, p = null; l !== null; ) e = l.alternate, e !== null && br(e) === null && (p = l), l = l.sibling;
        l = p, l === null ? (p = i.child, i.child = null) : (p = l.sibling, l.sibling = null), Vc(i, false, p, l, h, r);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, p = i.child, i.child = null; p !== null; ) {
          if (e = p.alternate, e !== null && br(e) === null) {
            i.child = p;
            break;
          }
          e = p.sibling, p.sibling = l, l = p, p = e;
        }
        Vc(i, true, l, null, h, r);
        break;
      case "together":
        Vc(i, false, null, null, void 0, r);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function Ti(e, i, l) {
    if (e !== null && (i.dependencies = e.dependencies), ro |= i.lanes, (l & i.childLanes) === 0) if (e !== null) {
      if (Dl(e, i, l, false), (l & i.childLanes) === 0) return null;
    } else return null;
    if (e !== null && i.child !== e.child) throw Error(a(153));
    if (i.child !== null) {
      for (e = i.child, l = Bn(e, e.pendingProps), i.child = l, l.return = i; e.sibling !== null; ) e = e.sibling, l = l.sibling = Bn(e, e.pendingProps), l.return = i;
      l.sibling = null;
    }
    return i.child;
  }
  function zc(e, i) {
    return (e.lanes & i) !== 0 ? true : (e = e.dependencies, !!(e !== null && vr(e)));
  }
  function a0(e, i, l) {
    switch (i.tag) {
      case 3:
        je(i, i.stateNode.containerInfo), eo(i, ht, e.memoizedState.cache), Po();
        break;
      case 27:
      case 5:
        Di(i);
        break;
      case 4:
        je(i, i.stateNode.containerInfo);
        break;
      case 10:
        eo(i, i.type, i.memoizedProps.value);
        break;
      case 31:
        if (i.memoizedState !== null) return i.flags |= 128, mc(i), null;
        break;
      case 13:
        var r = i.memoizedState;
        if (r !== null) return r.dehydrated !== null ? (oo(i), i.flags |= 128, null) : (l & i.child.childLanes) !== 0 ? Yp(e, i, l) : (oo(i), e = Ti(e, i, l), e !== null ? e.sibling : null);
        oo(i);
        break;
      case 19:
        var p = (e.flags & 128) !== 0;
        if (r = (l & i.childLanes) !== 0, r || (Dl(e, i, l, false), r = (l & i.childLanes) !== 0), p) {
          if (r) return $p(e, i, l);
          i.flags |= 128;
        }
        if (p = i.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), oe(dt, dt.current), r) break;
        return null;
      case 22:
        return i.lanes = 0, Bp(e, i, l, i.pendingProps);
      case 24:
        eo(i, ht, e.memoizedState.cache);
    }
    return Ti(e, i, l);
  }
  function Xp(e, i, l) {
    if (e !== null) if (e.memoizedProps !== i.pendingProps) yt = true;
    else {
      if (!zc(e, l) && (i.flags & 128) === 0) return yt = false, a0(e, i, l);
      yt = (e.flags & 131072) !== 0;
    }
    else yt = false, Re && (i.flags & 1048576) !== 0 && Ce(i, O, i.index);
    switch (i.lanes = 0, i.tag) {
      case 16:
        e: {
          var r = i.pendingProps;
          if (e = Bo(i.elementType), i.type = e, typeof e == "function") Ja(e) ? (r = Fo(e, r), i.tag = 1, i = Fp(null, i, e, r, l)) : (i.tag = 0, i = Pc(null, i, e, r, l));
          else {
            if (e != null) {
              var p = e.$$typeof;
              if (p === j) {
                i.tag = 11, i = Gp(null, i, e, r, l);
                break e;
              } else if (p === ne) {
                i.tag = 14, i = Op(null, i, e, r, l);
                break e;
              }
            }
            throw i = Ee(e) || e, Error(a(306, i, ""));
          }
        }
        return i;
      case 0:
        return Pc(e, i, i.type, i.pendingProps, l);
      case 1:
        return r = i.type, p = Fo(r, i.pendingProps), Fp(e, i, r, p, l);
      case 3:
        e: {
          if (je(i, i.stateNode.containerInfo), e === null) throw Error(a(387));
          r = i.pendingProps;
          var h = i.memoizedState;
          p = h.element, uc(e, i), ts(i, r, null, l);
          var T = i.memoizedState;
          if (r = T.cache, eo(i, ht, r), r !== h.cache && ic(i, [ht], l, true), es(), r = T.element, h.isDehydrated) if (h = { element: r, isDehydrated: false, cache: T.cache }, i.updateQueue.baseState = h, i.memoizedState = h, i.flags & 256) {
            i = Jp(e, i, r, l);
            break e;
          } else if (r !== p) {
            p = S(Error(a(424)), i), $a(p), i = Jp(e, i, r, l);
            break e;
          } else {
            switch (e = i.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
            }
            for (Je = Mn(e.firstChild), nt = i, Re = true, lt = null, $t = true, l = Bd(i, null, r, l), i.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          }
          else {
            if (Po(), r === p) {
              i = Ti(e, i, l);
              break e;
            }
            Lt(e, i, r, l);
          }
          i = i.child;
        }
        return i;
      case 26:
        return Gr(e, i), e === null ? (l = ah(i.type, null, i.pendingProps, null)) ? i.memoizedState = l : Re || (l = i.type, e = i.pendingProps, r = eu(Ne.current).createElement(l), r[mt] = i, r[wt] = e, kt(r, l, e), ut(r), i.stateNode = r) : i.memoizedState = ah(i.type, e.memoizedProps, i.pendingProps, e.memoizedState), null;
      case 27:
        return Di(i), e === null && Re && (r = i.stateNode = ih(i.type, i.pendingProps, Ne.current), nt = i, $t = true, p = Je, mo(i.type) ? (Cf = p, Je = Mn(r.firstChild)) : Je = p), Lt(e, i, i.pendingProps.children, l), Gr(e, i), e === null && (i.flags |= 4194304), i.child;
      case 5:
        return e === null && Re && ((p = r = Je) && (r = P0(r, i.type, i.pendingProps, $t), r !== null ? (i.stateNode = r, nt = i, Je = Mn(r.firstChild), $t = false, p = true) : p = false), p || Xt(i)), Di(i), p = i.type, h = i.pendingProps, T = e !== null ? e.memoizedProps : null, r = h.children, vf(p, h) ? r = null : T !== null && vf(p, T) && (i.flags |= 32), i.memoizedState !== null && (p = gc(e, i, Zv, null, null, l), Es._currentValue = p), Gr(e, i), Lt(e, i, r, l), i.child;
      case 6:
        return e === null && Re && ((e = l = Je) && (l = G0(l, i.pendingProps, $t), l !== null ? (i.stateNode = l, nt = i, Je = null, e = true) : e = false), e || Xt(i)), null;
      case 13:
        return Yp(e, i, l);
      case 4:
        return je(i, i.stateNode.containerInfo), r = i.pendingProps, e === null ? i.child = Vo(i, null, r, l) : Lt(e, i, r, l), i.child;
      case 11:
        return Gp(e, i, i.type, i.pendingProps, l);
      case 7:
        return Lt(e, i, i.pendingProps, l), i.child;
      case 8:
        return Lt(e, i, i.pendingProps.children, l), i.child;
      case 12:
        return Lt(e, i, i.pendingProps.children, l), i.child;
      case 10:
        return r = i.pendingProps, eo(i, i.type, r.value), Lt(e, i, r.children, l), i.child;
      case 9:
        return p = i.type._context, r = i.pendingProps.children, Oo(i), p = Ut(p), r = r(p), i.flags |= 1, Lt(e, i, r, l), i.child;
      case 14:
        return Op(e, i, i.type, i.pendingProps, l);
      case 15:
        return Hp(e, i, i.type, i.pendingProps, l);
      case 19:
        return $p(e, i, l);
      case 31:
        return l0(e, i, l);
      case 22:
        return Bp(e, i, l, i.pendingProps);
      case 24:
        return Oo(i), r = Ut(ht), e === null ? (p = ac(), p === null && (p = it, h = oc(), p.pooledCache = h, h.refCount++, h !== null && (p.pooledCacheLanes |= l), p = h), i.memoizedState = { parent: r, cache: p }, rc(i), eo(i, ht, p)) : ((e.lanes & l) !== 0 && (uc(e, i), ts(i, null, null, l), es()), p = e.memoizedState, h = i.memoizedState, p.parent !== r ? (p = { parent: r, cache: r }, i.memoizedState = p, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = p), eo(i, ht, r)) : (r = h.cache, eo(i, ht, r), r !== p.cache && ic(i, [ht], l, true))), Lt(e, i, i.pendingProps.children, l), i.child;
      case 29:
        throw i.pendingProps;
    }
    throw Error(a(156, i.tag));
  }
  function Ei(e) {
    e.flags |= 4;
  }
  function Fc(e, i, l, r, p) {
    if ((i = (e.mode & 32) !== 0) && (i = false), i) {
      if (e.flags |= 16777216, (p & 335544128) === p) if (e.stateNode.complete) e.flags |= 8192;
      else if (_m()) e.flags |= 8192;
      else throw qo = _r, sc;
    } else e.flags &= -16777217;
  }
  function Qp(e, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !fh(i)) if (_m()) e.flags |= 8192;
    else throw qo = _r, sc;
  }
  function Hr(e, i) {
    i !== null && (e.flags |= 4), e.flags & 16384 && (i = e.tag !== 22 ? fa() : 536870912, e.lanes |= i, Fl |= i);
  }
  function ss(e, i) {
    if (!Re) switch (e.tailMode) {
      case "hidden":
        i = e.tail;
        for (var l = null; i !== null; ) i.alternate !== null && (l = i), i = i.sibling;
        l === null ? e.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = e.tail;
        for (var r = null; l !== null; ) l.alternate !== null && (r = l), l = l.sibling;
        r === null ? i || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function at(e) {
    var i = e.alternate !== null && e.alternate.child === e.child, l = 0, r = 0;
    if (i) for (var p = e.child; p !== null; ) l |= p.lanes | p.childLanes, r |= p.subtreeFlags & 65011712, r |= p.flags & 65011712, p.return = e, p = p.sibling;
    else for (p = e.child; p !== null; ) l |= p.lanes | p.childLanes, r |= p.subtreeFlags, r |= p.flags, p.return = e, p = p.sibling;
    return e.subtreeFlags |= r, e.childLanes = l, i;
  }
  function s0(e, i, l) {
    var r = i.pendingProps;
    switch (Ct(i), i.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return at(i), null;
      case 1:
        return at(i), null;
      case 3:
        return l = i.stateNode, r = null, e !== null && (r = e.memoizedState.cache), i.memoizedState.cache !== r && (i.flags |= 2048), yi(ht), rt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Il(i) ? Ei(i) : e === null || e.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, ec())), at(i), null;
      case 26:
        var p = i.type, h = i.memoizedState;
        return e === null ? (Ei(i), h !== null ? (at(i), Qp(i, h)) : (at(i), Fc(i, p, null, r, l))) : h ? h !== e.memoizedState ? (Ei(i), at(i), Qp(i, h)) : (at(i), i.flags &= -16777217) : (e = e.memoizedProps, e !== r && Ei(i), at(i), Fc(i, p, e, r, l)), null;
      case 27:
        if (Qo(i), l = Ne.current, p = i.type, e !== null && i.stateNode != null) e.memoizedProps !== r && Ei(i);
        else {
          if (!r) {
            if (i.stateNode === null) throw Error(a(166));
            return at(i), null;
          }
          e = Q.current, Il(i) ? wn(i) : (e = ih(p, r, l), i.stateNode = e, Ei(i));
        }
        return at(i), null;
      case 5:
        if (Qo(i), p = i.type, e !== null && i.stateNode != null) e.memoizedProps !== r && Ei(i);
        else {
          if (!r) {
            if (i.stateNode === null) throw Error(a(166));
            return at(i), null;
          }
          if (h = Q.current, Il(i)) wn(i);
          else {
            var T = eu(Ne.current);
            switch (h) {
              case 1:
                h = T.createElementNS("http://www.w3.org/2000/svg", p);
                break;
              case 2:
                h = T.createElementNS("http://www.w3.org/1998/Math/MathML", p);
                break;
              default:
                switch (p) {
                  case "svg":
                    h = T.createElementNS("http://www.w3.org/2000/svg", p);
                    break;
                  case "math":
                    h = T.createElementNS("http://www.w3.org/1998/Math/MathML", p);
                    break;
                  case "script":
                    h = T.createElement("div"), h.innerHTML = "<script><\/script>", h = h.removeChild(h.firstChild);
                    break;
                  case "select":
                    h = typeof r.is == "string" ? T.createElement("select", { is: r.is }) : T.createElement("select"), r.multiple ? h.multiple = true : r.size && (h.size = r.size);
                    break;
                  default:
                    h = typeof r.is == "string" ? T.createElement(p, { is: r.is }) : T.createElement(p);
                }
            }
            h[mt] = i, h[wt] = r;
            e: for (T = i.child; T !== null; ) {
              if (T.tag === 5 || T.tag === 6) h.appendChild(T.stateNode);
              else if (T.tag !== 4 && T.tag !== 27 && T.child !== null) {
                T.child.return = T, T = T.child;
                continue;
              }
              if (T === i) break e;
              for (; T.sibling === null; ) {
                if (T.return === null || T.return === i) break e;
                T = T.return;
              }
              T.sibling.return = T.return, T = T.sibling;
            }
            i.stateNode = h;
            e: switch (kt(h, p, r), p) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
            r && Ei(i);
          }
        }
        return at(i), Fc(i, i.type, e === null ? null : e.memoizedProps, i.pendingProps, l), null;
      case 6:
        if (e && i.stateNode != null) e.memoizedProps !== r && Ei(i);
        else {
          if (typeof r != "string" && i.stateNode === null) throw Error(a(166));
          if (e = Ne.current, Il(i)) {
            if (e = i.stateNode, l = i.memoizedProps, r = null, p = nt, p !== null) switch (p.tag) {
              case 27:
              case 5:
                r = p.memoizedProps;
            }
            e[mt] = i, e = !!(e.nodeValue === l || r !== null && r.suppressHydrationWarning === true || Ym(e.nodeValue, l)), e || Xt(i, true);
          } else e = eu(e).createTextNode(r), e[mt] = i, i.stateNode = e;
        }
        return at(i), null;
      case 31:
        if (l = i.memoizedState, e === null || e.memoizedState !== null) {
          if (r = Il(i), l !== null) {
            if (e === null) {
              if (!r) throw Error(a(318));
              if (e = i.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(557));
              e[mt] = i;
            } else Po(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            at(i), e = false;
          } else l = ec(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = true;
          if (!e) return i.flags & 256 ? (gn(i), i) : (gn(i), null);
          if ((i.flags & 128) !== 0) throw Error(a(558));
        }
        return at(i), null;
      case 13:
        if (r = i.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (p = Il(i), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(a(318));
              if (p = i.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(a(317));
              p[mt] = i;
            } else Po(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            at(i), p = false;
          } else p = ec(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = p), p = true;
          if (!p) return i.flags & 256 ? (gn(i), i) : (gn(i), null);
        }
        return gn(i), (i.flags & 128) !== 0 ? (i.lanes = l, i) : (l = r !== null, e = e !== null && e.memoizedState !== null, l && (r = i.child, p = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (p = r.alternate.memoizedState.cachePool.pool), h = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (h = r.memoizedState.cachePool.pool), h !== p && (r.flags |= 2048)), l !== e && l && (i.child.flags |= 8192), Hr(i, i.updateQueue), at(i), null);
      case 4:
        return rt(), e === null && pf(i.stateNode.containerInfo), at(i), null;
      case 10:
        return yi(i.type), at(i), null;
      case 19:
        if (K(dt), r = i.memoizedState, r === null) return at(i), null;
        if (p = (i.flags & 128) !== 0, h = r.rendering, h === null) if (p) ss(r, false);
        else {
          if (ft !== 0 || e !== null && (e.flags & 128) !== 0) for (e = i.child; e !== null; ) {
            if (h = br(e), h !== null) {
              for (i.flags |= 128, ss(r, false), e = h.updateQueue, i.updateQueue = e, Hr(i, e), i.subtreeFlags = 0, e = l, l = i.child; l !== null; ) hr(l, e), l = l.sibling;
              return oe(dt, dt.current & 1 | 2), Re && he(i, r.treeForkCount), i.child;
            }
            e = e.sibling;
          }
          r.tail !== null && Ge() > Fr && (i.flags |= 128, p = true, ss(r, false), i.lanes = 4194304);
        }
        else {
          if (!p) if (e = br(h), e !== null) {
            if (i.flags |= 128, p = true, e = e.updateQueue, i.updateQueue = e, Hr(i, e), ss(r, true), r.tail === null && r.tailMode === "hidden" && !h.alternate && !Re) return at(i), null;
          } else 2 * Ge() - r.renderingStartTime > Fr && l !== 536870912 && (i.flags |= 128, p = true, ss(r, false), i.lanes = 4194304);
          r.isBackwards ? (h.sibling = i.child, i.child = h) : (e = r.last, e !== null ? e.sibling = h : i.child = h, r.last = h);
        }
        return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ge(), e.sibling = null, l = dt.current, oe(dt, p ? l & 1 | 2 : l & 1), Re && he(i, r.treeForkCount), e) : (at(i), null);
      case 22:
      case 23:
        return gn(i), pc(), r = i.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (i.flags |= 8192) : r && (i.flags |= 8192), r ? (l & 536870912) !== 0 && (i.flags & 128) === 0 && (at(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : at(i), l = i.updateQueue, l !== null && Hr(i, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== l && (i.flags |= 2048), e !== null && K(Ho), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), i.memoizedState.cache !== l && (i.flags |= 2048), yi(ht), at(i), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, i.tag));
  }
  function r0(e, i) {
    switch (Ct(i), i.tag) {
      case 1:
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 3:
        return yi(ht), rt(), e = i.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (i.flags = e & -65537 | 128, i) : null;
      case 26:
      case 27:
      case 5:
        return Qo(i), null;
      case 31:
        if (i.memoizedState !== null) {
          if (gn(i), i.alternate === null) throw Error(a(340));
          Po();
        }
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 13:
        if (gn(i), e = i.memoizedState, e !== null && e.dehydrated !== null) {
          if (i.alternate === null) throw Error(a(340));
          Po();
        }
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 19:
        return K(dt), null;
      case 4:
        return rt(), null;
      case 10:
        return yi(i.type), null;
      case 22:
      case 23:
        return gn(i), pc(), e !== null && K(Ho), e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 24:
        return yi(ht), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zp(e, i) {
    switch (Ct(i), i.tag) {
      case 3:
        yi(ht), rt();
        break;
      case 26:
      case 27:
      case 5:
        Qo(i);
        break;
      case 4:
        rt();
        break;
      case 31:
        i.memoizedState !== null && gn(i);
        break;
      case 13:
        gn(i);
        break;
      case 19:
        K(dt);
        break;
      case 10:
        yi(i.type);
        break;
      case 22:
      case 23:
        gn(i), pc(), e !== null && K(Ho);
        break;
      case 24:
        yi(ht);
    }
  }
  function rs(e, i) {
    try {
      var l = i.updateQueue, r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var p = r.next;
        l = p;
        do {
          if ((l.tag & e) === e) {
            r = void 0;
            var h = l.create, T = l.inst;
            r = h(), T.destroy = r;
          }
          l = l.next;
        } while (l !== p);
      }
    } catch (A) {
      $e(i, i.return, A);
    }
  }
  function ao(e, i, l) {
    try {
      var r = i.updateQueue, p = r !== null ? r.lastEffect : null;
      if (p !== null) {
        var h = p.next;
        r = h;
        do {
          if ((r.tag & e) === e) {
            var T = r.inst, A = T.destroy;
            if (A !== void 0) {
              T.destroy = void 0, p = i;
              var w = l, k = A;
              try {
                k();
              } catch (z) {
                $e(p, w, z);
              }
            }
          }
          r = r.next;
        } while (r !== h);
      }
    } catch (z) {
      $e(i, i.return, z);
    }
  }
  function Wp(e) {
    var i = e.updateQueue;
    if (i !== null) {
      var l = e.stateNode;
      try {
        Vd(i, l);
      } catch (r) {
        $e(e, e.return, r);
      }
    }
  }
  function jp(e, i, l) {
    l.props = Fo(e.type, e.memoizedProps), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (r) {
      $e(e, i, r);
    }
  }
  function us(e, i) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(r) : l.current = r;
      }
    } catch (p) {
      $e(e, i, p);
    }
  }
  function ei(e, i) {
    var l = e.ref, r = e.refCleanup;
    if (l !== null) if (typeof r == "function") try {
      r();
    } catch (p) {
      $e(e, i, p);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof l == "function") try {
      l(null);
    } catch (p) {
      $e(e, i, p);
    }
    else l.current = null;
  }
  function em(e) {
    var i = e.type, l = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && r.focus();
          break e;
        case "img":
          l.src ? r.src = l.src : l.srcSet && (r.srcset = l.srcSet);
      }
    } catch (p) {
      $e(e, e.return, p);
    }
  }
  function Jc(e, i, l) {
    try {
      var r = e.stateNode;
      M0(r, e.type, l, i), r[wt] = i;
    } catch (p) {
      $e(e, e.return, p);
    }
  }
  function tm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && mo(e.type) || e.tag === 4;
  }
  function Yc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || tm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && mo(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Kc(e, i, l) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, i ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, i) : (i = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, i.appendChild(e), l = l._reactRootContainer, l != null || i.onclick !== null || (i.onclick = _n));
    else if (r !== 4 && (r === 27 && mo(e.type) && (l = e.stateNode, i = null), e = e.child, e !== null)) for (Kc(e, i, l), e = e.sibling; e !== null; ) Kc(e, i, l), e = e.sibling;
  }
  function Br(e, i, l) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, i ? l.insertBefore(e, i) : l.appendChild(e);
    else if (r !== 4 && (r === 27 && mo(e.type) && (l = e.stateNode), e = e.child, e !== null)) for (Br(e, i, l), e = e.sibling; e !== null; ) Br(e, i, l), e = e.sibling;
  }
  function nm(e) {
    var i = e.stateNode, l = e.memoizedProps;
    try {
      for (var r = e.type, p = i.attributes; p.length; ) i.removeAttributeNode(p[0]);
      kt(i, r, l), i[mt] = e, i[wt] = l;
    } catch (h) {
      $e(e, e.return, h);
    }
  }
  var _i = false, vt = false, $c = false, im = typeof WeakSet == "function" ? WeakSet : Set, At = null;
  function u0(e, i) {
    if (e = e.containerInfo, gf = su, e = Pa(e), Al(e)) {
      if ("selectionStart" in e) var l = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        l = (l = e.ownerDocument) && l.defaultView || window;
        var r = l.getSelection && l.getSelection();
        if (r && r.rangeCount !== 0) {
          l = r.anchorNode;
          var p = r.anchorOffset, h = r.focusNode;
          r = r.focusOffset;
          try {
            l.nodeType, h.nodeType;
          } catch {
            l = null;
            break e;
          }
          var T = 0, A = -1, w = -1, k = 0, z = 0, $ = e, G = null;
          t: for (; ; ) {
            for (var q; $ !== l || p !== 0 && $.nodeType !== 3 || (A = T + p), $ !== h || r !== 0 && $.nodeType !== 3 || (w = T + r), $.nodeType === 3 && (T += $.nodeValue.length), (q = $.firstChild) !== null; ) G = $, $ = q;
            for (; ; ) {
              if ($ === e) break t;
              if (G === l && ++k === p && (A = T), G === h && ++z === r && (w = T), (q = $.nextSibling) !== null) break;
              $ = G, G = $.parentNode;
            }
            $ = q;
          }
          l = A === -1 || w === -1 ? null : { start: A, end: w };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (yf = { focusedElem: e, selectionRange: l }, su = false, At = i; At !== null; ) if (i = At, e = i.child, (i.subtreeFlags & 1028) !== 0 && e !== null) e.return = i, At = e;
    else for (; At !== null; ) {
      switch (i = At, h = i.alternate, e = i.flags, i.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = i.updateQueue, e = e !== null ? e.events : null, e !== null)) for (l = 0; l < e.length; l++) p = e[l], p.ref.impl = p.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && h !== null) {
            e = void 0, l = i, p = h.memoizedProps, h = h.memoizedState, r = l.stateNode;
            try {
              var ue = Fo(l.type, p);
              e = r.getSnapshotBeforeUpdate(ue, h), r.__reactInternalSnapshotBeforeUpdate = e;
            } catch (ye) {
              $e(l, l.return, ye);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = i.stateNode.containerInfo, l = e.nodeType, l === 9) Tf(e);
            else if (l === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Tf(e);
                break;
              default:
                e.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((e & 1024) !== 0) throw Error(a(163));
      }
      if (e = i.sibling, e !== null) {
        e.return = i.return, At = e;
        break;
      }
      At = i.return;
    }
  }
  function om(e, i, l) {
    var r = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ai(e, l), r & 4 && rs(5, l);
        break;
      case 1:
        if (Ai(e, l), r & 4) if (e = l.stateNode, i === null) try {
          e.componentDidMount();
        } catch (T) {
          $e(l, l.return, T);
        }
        else {
          var p = Fo(l.type, i.memoizedProps);
          i = i.memoizedState;
          try {
            e.componentDidUpdate(p, i, e.__reactInternalSnapshotBeforeUpdate);
          } catch (T) {
            $e(l, l.return, T);
          }
        }
        r & 64 && Wp(l), r & 512 && us(l, l.return);
        break;
      case 3:
        if (Ai(e, l), r & 64 && (e = l.updateQueue, e !== null)) {
          if (i = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              i = l.child.stateNode;
              break;
            case 1:
              i = l.child.stateNode;
          }
          try {
            Vd(e, i);
          } catch (T) {
            $e(l, l.return, T);
          }
        }
        break;
      case 27:
        i === null && r & 4 && nm(l);
      case 26:
      case 5:
        Ai(e, l), i === null && r & 4 && em(l), r & 512 && us(l, l.return);
        break;
      case 12:
        Ai(e, l);
        break;
      case 31:
        Ai(e, l), r & 4 && sm(e, l);
        break;
      case 13:
        Ai(e, l), r & 4 && rm(e, l), r & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = v0.bind(null, l), O0(e, l))));
        break;
      case 22:
        if (r = l.memoizedState !== null || _i, !r) {
          i = i !== null && i.memoizedState !== null || vt, p = _i;
          var h = vt;
          _i = r, (vt = i) && !h ? xi(e, l, (l.subtreeFlags & 8772) !== 0) : Ai(e, l), _i = p, vt = h;
        }
        break;
      case 30:
        break;
      default:
        Ai(e, l);
    }
  }
  function lm(e) {
    var i = e.alternate;
    i !== null && (e.alternate = null, lm(i)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (i = e.stateNode, i !== null && ma(i)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, on = false;
  function Ci(e, i, l) {
    for (l = l.child; l !== null; ) am(e, i, l), l = l.sibling;
  }
  function am(e, i, l) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(Ao, l);
    } catch {
    }
    switch (l.tag) {
      case 26:
        vt || ei(l, i), Ci(e, i, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        vt || ei(l, i);
        var r = st, p = on;
        mo(l.type) && (st = l.stateNode, on = false), Ci(e, i, l), vs(l.stateNode), st = r, on = p;
        break;
      case 5:
        vt || ei(l, i);
      case 6:
        if (r = st, p = on, st = null, Ci(e, i, l), st = r, on = p, st !== null) if (on) try {
          (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(l.stateNode);
        } catch (h) {
          $e(l, i, h);
        }
        else try {
          st.removeChild(l.stateNode);
        } catch (h) {
          $e(l, i, h);
        }
        break;
      case 18:
        st !== null && (on ? (e = st, Wm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Wl(e)) : Wm(st, l.stateNode));
        break;
      case 4:
        r = st, p = on, st = l.stateNode.containerInfo, on = true, Ci(e, i, l), st = r, on = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ao(2, l, i), vt || ao(4, l, i), Ci(e, i, l);
        break;
      case 1:
        vt || (ei(l, i), r = l.stateNode, typeof r.componentWillUnmount == "function" && jp(l, i, r)), Ci(e, i, l);
        break;
      case 21:
        Ci(e, i, l);
        break;
      case 22:
        vt = (r = vt) || l.memoizedState !== null, Ci(e, i, l), vt = r;
        break;
      default:
        Ci(e, i, l);
    }
  }
  function sm(e, i) {
    if (i.memoizedState === null && (e = i.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Wl(e);
      } catch (l) {
        $e(i, i.return, l);
      }
    }
  }
  function rm(e, i) {
    if (i.memoizedState === null && (e = i.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Wl(e);
    } catch (l) {
      $e(i, i.return, l);
    }
  }
  function c0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var i = e.stateNode;
        return i === null && (i = e.stateNode = new im()), i;
      case 22:
        return e = e.stateNode, i = e._retryCache, i === null && (i = e._retryCache = new im()), i;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function qr(e, i) {
    var l = c0(e);
    i.forEach(function(r) {
      if (!l.has(r)) {
        l.add(r);
        var p = S0.bind(null, e, r);
        r.then(p, p);
      }
    });
  }
  function ln(e, i) {
    var l = i.deletions;
    if (l !== null) for (var r = 0; r < l.length; r++) {
      var p = l[r], h = e, T = i, A = T;
      e: for (; A !== null; ) {
        switch (A.tag) {
          case 27:
            if (mo(A.type)) {
              st = A.stateNode, on = false;
              break e;
            }
            break;
          case 5:
            st = A.stateNode, on = false;
            break e;
          case 3:
          case 4:
            st = A.stateNode.containerInfo, on = true;
            break e;
        }
        A = A.return;
      }
      if (st === null) throw Error(a(160));
      am(h, T, p), st = null, on = false, h = p.alternate, h !== null && (h.return = null), p.return = null;
    }
    if (i.subtreeFlags & 13886) for (i = i.child; i !== null; ) um(i, e), i = i.sibling;
  }
  var qn = null;
  function um(e, i) {
    var l = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(i, e), an(e), r & 4 && (ao(3, e, e.return), rs(3, e), ao(5, e, e.return));
        break;
      case 1:
        ln(i, e), an(e), r & 512 && (vt || l === null || ei(l, l.return)), r & 64 && _i && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? r : l.concat(r))));
        break;
      case 26:
        var p = qn;
        if (ln(i, e), an(e), r & 512 && (vt || l === null || ei(l, l.return)), r & 4) {
          var h = l !== null ? l.memoizedState : null;
          if (r = e.memoizedState, l === null) if (r === null) if (e.stateNode === null) {
            e: {
              r = e.type, l = e.memoizedProps, p = p.ownerDocument || p;
              t: switch (r) {
                case "title":
                  h = p.getElementsByTagName("title")[0], (!h || h[Hi] || h[mt] || h.namespaceURI === "http://www.w3.org/2000/svg" || h.hasAttribute("itemprop")) && (h = p.createElement(r), p.head.insertBefore(h, p.querySelector("head > title"))), kt(h, r, l), h[mt] = e, ut(h), r = h;
                  break e;
                case "link":
                  var T = uh("link", "href", p).get(r + (l.href || ""));
                  if (T) {
                    for (var A = 0; A < T.length; A++) if (h = T[A], h.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && h.getAttribute("rel") === (l.rel == null ? null : l.rel) && h.getAttribute("title") === (l.title == null ? null : l.title) && h.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      T.splice(A, 1);
                      break t;
                    }
                  }
                  h = p.createElement(r), kt(h, r, l), p.head.appendChild(h);
                  break;
                case "meta":
                  if (T = uh("meta", "content", p).get(r + (l.content || ""))) {
                    for (A = 0; A < T.length; A++) if (h = T[A], h.getAttribute("content") === (l.content == null ? null : "" + l.content) && h.getAttribute("name") === (l.name == null ? null : l.name) && h.getAttribute("property") === (l.property == null ? null : l.property) && h.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && h.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      T.splice(A, 1);
                      break t;
                    }
                  }
                  h = p.createElement(r), kt(h, r, l), p.head.appendChild(h);
                  break;
                default:
                  throw Error(a(468, r));
              }
              h[mt] = e, ut(h), r = h;
            }
            e.stateNode = r;
          } else ch(p, e.type, e.stateNode);
          else e.stateNode = rh(p, r, e.memoizedProps);
          else h !== r ? (h === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : h.count--, r === null ? ch(p, e.type, e.stateNode) : rh(p, r, e.memoizedProps)) : r === null && e.stateNode !== null && Jc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ln(i, e), an(e), r & 512 && (vt || l === null || ei(l, l.return)), l !== null && r & 4 && Jc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (ln(i, e), an(e), r & 512 && (vt || l === null || ei(l, l.return)), e.flags & 32) {
          p = e.stateNode;
          try {
            qi(p, "");
          } catch (ue) {
            $e(e, e.return, ue);
          }
        }
        r & 4 && e.stateNode != null && (p = e.memoizedProps, Jc(e, p, l !== null ? l.memoizedProps : p)), r & 1024 && ($c = true);
        break;
      case 6:
        if (ln(i, e), an(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          r = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = r;
          } catch (ue) {
            $e(e, e.return, ue);
          }
        }
        break;
      case 3:
        if (iu = null, p = qn, qn = tu(i.containerInfo), ln(i, e), qn = p, an(e), r & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Wl(i.containerInfo);
        } catch (ue) {
          $e(e, e.return, ue);
        }
        $c && ($c = false, cm(e));
        break;
      case 4:
        r = qn, qn = tu(e.stateNode.containerInfo), ln(i, e), an(e), qn = r;
        break;
      case 12:
        ln(i, e), an(e);
        break;
      case 31:
        ln(i, e), an(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, qr(e, r)));
        break;
      case 13:
        ln(i, e), an(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (zr = Ge()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, qr(e, r)));
        break;
      case 22:
        p = e.memoizedState !== null;
        var w = l !== null && l.memoizedState !== null, k = _i, z = vt;
        if (_i = k || p, vt = z || w, ln(i, e), vt = z, _i = k, an(e), r & 8192) e: for (i = e.stateNode, i._visibility = p ? i._visibility & -2 : i._visibility | 1, p && (l === null || w || _i || vt || Jo(e)), l = null, i = e; ; ) {
          if (i.tag === 5 || i.tag === 26) {
            if (l === null) {
              w = l = i;
              try {
                if (h = w.stateNode, p) T = h.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                else {
                  A = w.stateNode;
                  var $ = w.memoizedProps.style, G = $ != null && $.hasOwnProperty("display") ? $.display : null;
                  A.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                }
              } catch (ue) {
                $e(w, w.return, ue);
              }
            }
          } else if (i.tag === 6) {
            if (l === null) {
              w = i;
              try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps;
              } catch (ue) {
                $e(w, w.return, ue);
              }
            }
          } else if (i.tag === 18) {
            if (l === null) {
              w = i;
              try {
                var q = w.stateNode;
                p ? jm(q, true) : jm(w.stateNode, false);
              } catch (ue) {
                $e(w, w.return, ue);
              }
            }
          } else if ((i.tag !== 22 && i.tag !== 23 || i.memoizedState === null || i === e) && i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
          if (i === e) break e;
          for (; i.sibling === null; ) {
            if (i.return === null || i.return === e) break e;
            l === i && (l = null), i = i.return;
          }
          l === i && (l = null), i.sibling.return = i.return, i = i.sibling;
        }
        r & 4 && (r = e.updateQueue, r !== null && (l = r.retryQueue, l !== null && (r.retryQueue = null, qr(e, l))));
        break;
      case 19:
        ln(i, e), an(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, qr(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(i, e), an(e);
    }
  }
  function an(e) {
    var i = e.flags;
    if (i & 2) {
      try {
        for (var l, r = e.return; r !== null; ) {
          if (tm(r)) {
            l = r;
            break;
          }
          r = r.return;
        }
        if (l == null) throw Error(a(160));
        switch (l.tag) {
          case 27:
            var p = l.stateNode, h = Yc(e);
            Br(e, h, p);
            break;
          case 5:
            var T = l.stateNode;
            l.flags & 32 && (qi(T, ""), l.flags &= -33);
            var A = Yc(e);
            Br(e, A, T);
            break;
          case 3:
          case 4:
            var w = l.stateNode.containerInfo, k = Yc(e);
            Kc(e, k, w);
            break;
          default:
            throw Error(a(161));
        }
      } catch (z) {
        $e(e, e.return, z);
      }
      e.flags &= -3;
    }
    i & 4096 && (e.flags &= -4097);
  }
  function cm(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var i = e;
      cm(i), i.tag === 5 && i.flags & 1024 && i.stateNode.reset(), e = e.sibling;
    }
  }
  function Ai(e, i) {
    if (i.subtreeFlags & 8772) for (i = i.child; i !== null; ) om(e, i.alternate, i), i = i.sibling;
  }
  function Jo(e) {
    for (e = e.child; e !== null; ) {
      var i = e;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ao(4, i, i.return), Jo(i);
          break;
        case 1:
          ei(i, i.return);
          var l = i.stateNode;
          typeof l.componentWillUnmount == "function" && jp(i, i.return, l), Jo(i);
          break;
        case 27:
          vs(i.stateNode);
        case 26:
        case 5:
          ei(i, i.return), Jo(i);
          break;
        case 22:
          i.memoizedState === null && Jo(i);
          break;
        case 30:
          Jo(i);
          break;
        default:
          Jo(i);
      }
      e = e.sibling;
    }
  }
  function xi(e, i, l) {
    for (l = l && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var r = i.alternate, p = e, h = i, T = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          xi(p, h, l), rs(4, h);
          break;
        case 1:
          if (xi(p, h, l), r = h, p = r.stateNode, typeof p.componentDidMount == "function") try {
            p.componentDidMount();
          } catch (k) {
            $e(r, r.return, k);
          }
          if (r = h, p = r.updateQueue, p !== null) {
            var A = r.stateNode;
            try {
              var w = p.shared.hiddenCallbacks;
              if (w !== null) for (p.shared.hiddenCallbacks = null, p = 0; p < w.length; p++) qd(w[p], A);
            } catch (k) {
              $e(r, r.return, k);
            }
          }
          l && T & 64 && Wp(h), us(h, h.return);
          break;
        case 27:
          nm(h);
        case 26:
        case 5:
          xi(p, h, l), l && r === null && T & 4 && em(h), us(h, h.return);
          break;
        case 12:
          xi(p, h, l);
          break;
        case 31:
          xi(p, h, l), l && T & 4 && sm(p, h);
          break;
        case 13:
          xi(p, h, l), l && T & 4 && rm(p, h);
          break;
        case 22:
          h.memoizedState === null && xi(p, h, l), us(h, h.return);
          break;
        case 30:
          break;
        default:
          xi(p, h, l);
      }
      i = i.sibling;
    }
  }
  function Xc(e, i) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (e = i.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Xa(l));
  }
  function Qc(e, i) {
    e = null, i.alternate !== null && (e = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== e && (i.refCount++, e != null && Xa(e));
  }
  function Vn(e, i, l, r) {
    if (i.subtreeFlags & 10256) for (i = i.child; i !== null; ) fm(e, i, l, r), i = i.sibling;
  }
  function fm(e, i, l, r) {
    var p = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Vn(e, i, l, r), p & 2048 && rs(9, i);
        break;
      case 1:
        Vn(e, i, l, r);
        break;
      case 3:
        Vn(e, i, l, r), p & 2048 && (e = null, i.alternate !== null && (e = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== e && (i.refCount++, e != null && Xa(e)));
        break;
      case 12:
        if (p & 2048) {
          Vn(e, i, l, r), e = i.stateNode;
          try {
            var h = i.memoizedProps, T = h.id, A = h.onPostCommit;
            typeof A == "function" && A(T, i.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (w) {
            $e(i, i.return, w);
          }
        } else Vn(e, i, l, r);
        break;
      case 31:
        Vn(e, i, l, r);
        break;
      case 13:
        Vn(e, i, l, r);
        break;
      case 23:
        break;
      case 22:
        h = i.stateNode, T = i.alternate, i.memoizedState !== null ? h._visibility & 2 ? Vn(e, i, l, r) : cs(e, i) : h._visibility & 2 ? Vn(e, i, l, r) : (h._visibility |= 2, ql(e, i, l, r, (i.subtreeFlags & 10256) !== 0 || false)), p & 2048 && Xc(T, i);
        break;
      case 24:
        Vn(e, i, l, r), p & 2048 && Qc(i.alternate, i);
        break;
      default:
        Vn(e, i, l, r);
    }
  }
  function ql(e, i, l, r, p) {
    for (p = p && ((i.subtreeFlags & 10256) !== 0 || false), i = i.child; i !== null; ) {
      var h = e, T = i, A = l, w = r, k = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          ql(h, T, A, w, p), rs(8, T);
          break;
        case 23:
          break;
        case 22:
          var z = T.stateNode;
          T.memoizedState !== null ? z._visibility & 2 ? ql(h, T, A, w, p) : cs(h, T) : (z._visibility |= 2, ql(h, T, A, w, p)), p && k & 2048 && Xc(T.alternate, T);
          break;
        case 24:
          ql(h, T, A, w, p), p && k & 2048 && Qc(T.alternate, T);
          break;
        default:
          ql(h, T, A, w, p);
      }
      i = i.sibling;
    }
  }
  function cs(e, i) {
    if (i.subtreeFlags & 10256) for (i = i.child; i !== null; ) {
      var l = e, r = i, p = r.flags;
      switch (r.tag) {
        case 22:
          cs(l, r), p & 2048 && Xc(r.alternate, r);
          break;
        case 24:
          cs(l, r), p & 2048 && Qc(r.alternate, r);
          break;
        default:
          cs(l, r);
      }
      i = i.sibling;
    }
  }
  var fs = 8192;
  function Vl(e, i, l) {
    if (e.subtreeFlags & fs) for (e = e.child; e !== null; ) dm(e, i, l), e = e.sibling;
  }
  function dm(e, i, l) {
    switch (e.tag) {
      case 26:
        Vl(e, i, l), e.flags & fs && e.memoizedState !== null && Q0(l, qn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Vl(e, i, l);
        break;
      case 3:
      case 4:
        var r = qn;
        qn = tu(e.stateNode.containerInfo), Vl(e, i, l), qn = r;
        break;
      case 22:
        e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = fs, fs = 16777216, Vl(e, i, l), fs = r) : Vl(e, i, l));
        break;
      default:
        Vl(e, i, l);
    }
  }
  function pm(e) {
    var i = e.alternate;
    if (i !== null && (e = i.child, e !== null)) {
      i.child = null;
      do
        i = e.sibling, e.sibling = null, e = i;
      while (e !== null);
    }
  }
  function ds(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null) for (var l = 0; l < i.length; l++) {
        var r = i[l];
        At = r, hm(r, e);
      }
      pm(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) mm(e), e = e.sibling;
  }
  function mm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ds(e), e.flags & 2048 && ao(9, e, e.return);
        break;
      case 3:
        ds(e);
        break;
      case 12:
        ds(e);
        break;
      case 22:
        var i = e.stateNode;
        e.memoizedState !== null && i._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (i._visibility &= -3, Vr(e)) : ds(e);
        break;
      default:
        ds(e);
    }
  }
  function Vr(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null) for (var l = 0; l < i.length; l++) {
        var r = i[l];
        At = r, hm(r, e);
      }
      pm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (i = e, i.tag) {
        case 0:
        case 11:
        case 15:
          ao(8, i, i.return), Vr(i);
          break;
        case 22:
          l = i.stateNode, l._visibility & 2 && (l._visibility &= -3, Vr(i));
          break;
        default:
          Vr(i);
      }
      e = e.sibling;
    }
  }
  function hm(e, i) {
    for (; At !== null; ) {
      var l = At;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ao(8, l, i);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var r = l.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Xa(l.memoizedState.cache);
      }
      if (r = l.child, r !== null) r.return = l, At = r;
      else e: for (l = e; At !== null; ) {
        r = At;
        var p = r.sibling, h = r.return;
        if (lm(r), r === l) {
          At = null;
          break e;
        }
        if (p !== null) {
          p.return = h, At = p;
          break e;
        }
        At = h;
      }
    }
  }
  var f0 = { getCacheForType: function(e) {
    var i = Ut(ht), l = i.data.get(e);
    return l === void 0 && (l = e(), i.data.set(e, l)), l;
  }, cacheSignal: function() {
    return Ut(ht).controller.signal;
  } }, d0 = typeof WeakMap == "function" ? WeakMap : Map, ze = 0, it = null, Ie = null, Le = 0, Ke = 0, yn = null, so = false, zl = false, Zc = false, bi = 0, ft = 0, ro = 0, Yo = 0, Wc = 0, vn = 0, Fl = 0, ps = null, sn = null, jc = false, zr = 0, gm = 0, Fr = 1 / 0, Jr = null, uo = null, Et = 0, co = null, Jl = null, Ni = 0, ef = 0, tf = null, ym = null, ms = 0, nf = null;
  function Sn() {
    return (ze & 2) !== 0 && Le !== 0 ? Le & -Le : B.T !== null ? uf() : da();
  }
  function vm() {
    if (vn === 0) if ((Le & 536870912) === 0 || Re) {
      var e = Kn;
      Kn <<= 1, (Kn & 3932160) === 0 && (Kn = 262144), vn = e;
    } else vn = 536870912;
    return e = hn.current, e !== null && (e.flags |= 32), vn;
  }
  function rn(e, i, l) {
    (e === it && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (Yl(e, 0), fo(e, Le, vn, false)), Pi(e, l), ((ze & 2) === 0 || e !== it) && (e === it && ((ze & 2) === 0 && (Yo |= l), ft === 4 && fo(e, Le, vn, false)), ti(e));
  }
  function Sm(e, i, l) {
    if ((ze & 6) !== 0) throw Error(a(327));
    var r = !l && (i & 127) === 0 && (i & e.expiredLanes) === 0 || ki(e, i), p = r ? h0(e, i) : lf(e, i, true), h = r;
    do {
      if (p === 0) {
        zl && !r && fo(e, i, 0, false);
        break;
      } else {
        if (l = e.current.alternate, h && !p0(l)) {
          p = lf(e, i, false), h = false;
          continue;
        }
        if (p === 2) {
          if (h = i, e.errorRecoveryDisabledLanes & h) var T = 0;
          else T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
          if (T !== 0) {
            i = T;
            e: {
              var A = e;
              p = ps;
              var w = A.current.memoizedState.isDehydrated;
              if (w && (Yl(A, T).flags |= 256), T = lf(A, T, false), T !== 2) {
                if (Zc && !w) {
                  A.errorRecoveryDisabledLanes |= h, Yo |= h, p = 4;
                  break e;
                }
                h = sn, sn = p, h !== null && (sn === null ? sn = h : sn.push.apply(sn, h));
              }
              p = T;
            }
            if (h = false, p !== 2) continue;
          }
        }
        if (p === 1) {
          Yl(e, 0), fo(e, i, 0, true);
          break;
        }
        e: {
          switch (r = e, h = p, h) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((i & 4194048) !== i) break;
            case 6:
              fo(r, i, vn, !so);
              break e;
            case 2:
              sn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((i & 62914560) === i && (p = zr + 300 - Ge(), 10 < p)) {
            if (fo(r, i, vn, !so), bo(r, 0, true) !== 0) break e;
            Ni = i, r.timeoutHandle = Qm(Tm.bind(null, r, l, sn, Jr, jc, i, vn, Yo, Fl, so, h, "Throttled", -0, 0), p);
            break e;
          }
          Tm(r, l, sn, Jr, jc, i, vn, Yo, Fl, so, h, null, -0, 0);
        }
      }
      break;
    } while (true);
    ti(e);
  }
  function Tm(e, i, l, r, p, h, T, A, w, k, z, $, G, q) {
    if (e.timeoutHandle = -1, $ = i.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: _n }, dm(i, h, $);
      var ue = (h & 62914560) === h ? zr - Ge() : (h & 4194048) === h ? gm - Ge() : 0;
      if (ue = Z0($, ue), ue !== null) {
        Ni = h, e.cancelPendingCommit = ue(wm.bind(null, e, i, h, l, r, p, T, A, w, z, $, null, G, q)), fo(e, h, T, !k);
        return;
      }
    }
    wm(e, i, h, l, r, p, T, A, w);
  }
  function p0(e) {
    for (var i = e; ; ) {
      var l = i.tag;
      if ((l === 0 || l === 11 || l === 15) && i.flags & 16384 && (l = i.updateQueue, l !== null && (l = l.stores, l !== null))) for (var r = 0; r < l.length; r++) {
        var p = l[r], h = p.getSnapshot;
        p = p.value;
        try {
          if (!Yt(h(), p)) return false;
        } catch {
          return false;
        }
      }
      if (l = i.child, i.subtreeFlags & 16384 && l !== null) l.return = i, i = l;
      else {
        if (i === e) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e) return true;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return true;
  }
  function fo(e, i, l, r) {
    i &= ~Wc, i &= ~Yo, e.suspendedLanes |= i, e.pingedLanes &= ~i, r && (e.warmLanes |= i), r = e.expirationTimes;
    for (var p = i; 0 < p; ) {
      var h = 31 - Ot(p), T = 1 << h;
      r[h] = -1, p &= ~T;
    }
    l !== 0 && nn(e, l, i);
  }
  function Yr() {
    return (ze & 6) === 0 ? (hs(0), false) : true;
  }
  function of() {
    if (Ie !== null) {
      if (Ke === 0) var e = Ie.return;
      else e = Ie, gi = Go = null, Sc(e), Pl = null, Za = 0, e = Ie;
      for (; e !== null; ) Zp(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function Yl(e, i) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, U0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Ni = 0, of(), it = e, Ie = l = Bn(e.current, null), Le = i, Ke = 0, yn = null, so = false, zl = ki(e, i), Zc = false, Fl = vn = Wc = Yo = ro = ft = 0, sn = ps = null, jc = false, (i & 8) !== 0 && (i |= i & 32);
    var r = e.entangledLanes;
    if (r !== 0) for (e = e.entanglements, r &= i; 0 < r; ) {
      var p = 31 - Ot(r), h = 1 << p;
      i |= e[p], r &= ~h;
    }
    return bi = i, Nl(), l;
  }
  function Em(e, i) {
    be = null, B.H = ls, i === kl || i === Er ? (i = Gd(), Ke = 3) : i === sc ? (i = Gd(), Ke = 4) : Ke = i === kc ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, yn = i, Ie === null && (ft = 1, kr(e, S(i, e.current)));
  }
  function _m() {
    var e = hn.current;
    return e === null ? true : (Le & 4194048) === Le ? Rn === null : (Le & 62914560) === Le || (Le & 536870912) !== 0 ? e === Rn : false;
  }
  function Cm() {
    var e = B.H;
    return B.H = ls, e === null ? ls : e;
  }
  function Am() {
    var e = B.A;
    return B.A = f0, e;
  }
  function Kr() {
    ft = 4, so || (Le & 4194048) !== Le && hn.current !== null || (zl = true), (ro & 134217727) === 0 && (Yo & 134217727) === 0 || it === null || fo(it, Le, vn, false);
  }
  function lf(e, i, l) {
    var r = ze;
    ze |= 2;
    var p = Cm(), h = Am();
    (it !== e || Le !== i) && (Jr = null, Yl(e, i)), i = false;
    var T = ft;
    e: do
      try {
        if (Ke !== 0 && Ie !== null) {
          var A = Ie, w = yn;
          switch (Ke) {
            case 8:
              of(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              hn.current === null && (i = true);
              var k = Ke;
              if (Ke = 0, yn = null, Kl(e, A, w, k), l && zl) {
                T = 0;
                break e;
              }
              break;
            default:
              k = Ke, Ke = 0, yn = null, Kl(e, A, w, k);
          }
        }
        m0(), T = ft;
        break;
      } catch (z) {
        Em(e, z);
      }
    while (true);
    return i && e.shellSuspendCounter++, gi = Go = null, ze = r, B.H = p, B.A = h, Ie === null && (it = null, Le = 0, Nl()), T;
  }
  function m0() {
    for (; Ie !== null; ) xm(Ie);
  }
  function h0(e, i) {
    var l = ze;
    ze |= 2;
    var r = Cm(), p = Am();
    it !== e || Le !== i ? (Jr = null, Fr = Ge() + 500, Yl(e, i)) : zl = ki(e, i);
    e: do
      try {
        if (Ke !== 0 && Ie !== null) {
          i = Ie;
          var h = yn;
          t: switch (Ke) {
            case 1:
              Ke = 0, yn = null, Kl(e, i, h, 1);
              break;
            case 2:
            case 9:
              if (kd(h)) {
                Ke = 0, yn = null, bm(i);
                break;
              }
              i = function() {
                Ke !== 2 && Ke !== 9 || it !== e || (Ke = 7), ti(e);
              }, h.then(i, i);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              kd(h) ? (Ke = 0, yn = null, bm(i)) : (Ke = 0, yn = null, Kl(e, i, h, 7));
              break;
            case 5:
              var T = null;
              switch (Ie.tag) {
                case 26:
                  T = Ie.memoizedState;
                case 5:
                case 27:
                  var A = Ie;
                  if (T ? fh(T) : A.stateNode.complete) {
                    Ke = 0, yn = null;
                    var w = A.sibling;
                    if (w !== null) Ie = w;
                    else {
                      var k = A.return;
                      k !== null ? (Ie = k, $r(k)) : Ie = null;
                    }
                    break t;
                  }
              }
              Ke = 0, yn = null, Kl(e, i, h, 5);
              break;
            case 6:
              Ke = 0, yn = null, Kl(e, i, h, 6);
              break;
            case 8:
              of(), ft = 6;
              break e;
            default:
              throw Error(a(462));
          }
        }
        g0();
        break;
      } catch (z) {
        Em(e, z);
      }
    while (true);
    return gi = Go = null, B.H = r, B.A = p, ze = l, Ie !== null ? 0 : (it = null, Le = 0, Nl(), ft);
  }
  function g0() {
    for (; Ie !== null && !Os(); ) xm(Ie);
  }
  function xm(e) {
    var i = Xp(e.alternate, e, bi);
    e.memoizedProps = e.pendingProps, i === null ? $r(e) : Ie = i;
  }
  function bm(e) {
    var i = e, l = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = zp(l, i, i.pendingProps, i.type, void 0, Le);
        break;
      case 11:
        i = zp(l, i, i.pendingProps, i.type.render, i.ref, Le);
        break;
      case 5:
        Sc(i);
      default:
        Zp(l, i), i = Ie = hr(i, bi), i = Xp(l, i, bi);
    }
    e.memoizedProps = e.pendingProps, i === null ? $r(e) : Ie = i;
  }
  function Kl(e, i, l, r) {
    gi = Go = null, Sc(i), Pl = null, Za = 0;
    var p = i.return;
    try {
      if (o0(e, p, i, l, Le)) {
        ft = 1, kr(e, S(l, e.current)), Ie = null;
        return;
      }
    } catch (h) {
      if (p !== null) throw Ie = p, h;
      ft = 1, kr(e, S(l, e.current)), Ie = null;
      return;
    }
    i.flags & 32768 ? (Re || r === 1 ? e = true : zl || (Le & 536870912) !== 0 ? e = false : (so = e = true, (r === 2 || r === 9 || r === 3 || r === 6) && (r = hn.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Nm(i, e)) : $r(i);
  }
  function $r(e) {
    var i = e;
    do {
      if ((i.flags & 32768) !== 0) {
        Nm(i, so);
        return;
      }
      e = i.return;
      var l = s0(i.alternate, i, bi);
      if (l !== null) {
        Ie = l;
        return;
      }
      if (i = i.sibling, i !== null) {
        Ie = i;
        return;
      }
      Ie = i = e;
    } while (i !== null);
    ft === 0 && (ft = 5);
  }
  function Nm(e, i) {
    do {
      var l = r0(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, Ie = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !i && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = l;
    } while (e !== null);
    ft = 6, Ie = null;
  }
  function wm(e, i, l, r, p, h, T, A, w) {
    e.cancelPendingCommit = null;
    do
      Xr();
    while (Et !== 0);
    if ((ze & 6) !== 0) throw Error(a(327));
    if (i !== null) {
      if (i === e.current) throw Error(a(177));
      if (h = i.lanes | i.childLanes, h |= za, Vs(e, l, h, T, A, w), e === it && (Ie = it = null, Le = 0), Jl = i, co = e, Ni = l, ef = h, tf = p, ym = r, (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, T0(Co, function() {
        return Um(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || r) {
        r = B.T, B.T = null, p = te.p, te.p = 2, T = ze, ze |= 4;
        try {
          u0(e, i, l);
        } finally {
          ze = T, te.p = p, B.T = r;
        }
      }
      Et = 1, Rm(), Mm(), Im();
    }
  }
  function Rm() {
    if (Et === 1) {
      Et = 0;
      var e = co, i = Jl, l = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || l) {
        l = B.T, B.T = null;
        var r = te.p;
        te.p = 2;
        var p = ze;
        ze |= 4;
        try {
          um(i, e);
          var h = yf, T = Pa(e.containerInfo), A = h.focusedElem, w = h.selectionRange;
          if (T !== A && A && A.ownerDocument && Zi(A.ownerDocument.documentElement, A)) {
            if (w !== null && Al(A)) {
              var k = w.start, z = w.end;
              if (z === void 0 && (z = k), "selectionStart" in A) A.selectionStart = k, A.selectionEnd = Math.min(z, A.value.length);
              else {
                var $ = A.ownerDocument || document, G = $ && $.defaultView || window;
                if (G.getSelection) {
                  var q = G.getSelection(), ue = A.textContent.length, ye = Math.min(w.start, ue), Ze = w.end === void 0 ? ye : Math.min(w.end, ue);
                  !q.extend && ye > Ze && (T = Ze, Ze = ye, ye = T);
                  var U = Nn(A, ye), M = Nn(A, Ze);
                  if (U && M && (q.rangeCount !== 1 || q.anchorNode !== U.node || q.anchorOffset !== U.offset || q.focusNode !== M.node || q.focusOffset !== M.offset)) {
                    var L = $.createRange();
                    L.setStart(U.node, U.offset), q.removeAllRanges(), ye > Ze ? (q.addRange(L), q.extend(M.node, M.offset)) : (L.setEnd(M.node, M.offset), q.addRange(L));
                  }
                }
              }
            }
            for ($ = [], q = A; q = q.parentNode; ) q.nodeType === 1 && $.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (typeof A.focus == "function" && A.focus(), A = 0; A < $.length; A++) {
              var F = $[A];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          su = !!gf, yf = gf = null;
        } finally {
          ze = p, te.p = r, B.T = l;
        }
      }
      e.current = i, Et = 2;
    }
  }
  function Mm() {
    if (Et === 2) {
      Et = 0;
      var e = co, i = Jl, l = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || l) {
        l = B.T, B.T = null;
        var r = te.p;
        te.p = 2;
        var p = ze;
        ze |= 4;
        try {
          om(e, i.alternate, i);
        } finally {
          ze = p, te.p = r, B.T = l;
        }
      }
      Et = 3;
    }
  }
  function Im() {
    if (Et === 4 || Et === 3) {
      Et = 0, Hs();
      var e = co, i = Jl, l = Ni, r = ym;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? Et = 5 : (Et = 0, Jl = co = null, Dm(e, e.pendingLanes));
      var p = e.pendingLanes;
      if (p === 0 && (uo = null), ni(l), i = i.stateNode, Gt && typeof Gt.onCommitFiberRoot == "function") try {
        Gt.onCommitFiberRoot(Ao, i, void 0, (i.current.flags & 128) === 128);
      } catch {
      }
      if (r !== null) {
        i = B.T, p = te.p, te.p = 2, B.T = null;
        try {
          for (var h = e.onRecoverableError, T = 0; T < r.length; T++) {
            var A = r[T];
            h(A.value, { componentStack: A.stack });
          }
        } finally {
          B.T = i, te.p = p;
        }
      }
      (Ni & 3) !== 0 && Xr(), ti(e), p = e.pendingLanes, (l & 261930) !== 0 && (p & 42) !== 0 ? e === nf ? ms++ : (ms = 0, nf = e) : ms = 0, hs(0);
    }
  }
  function Dm(e, i) {
    (e.pooledCacheLanes &= i) === 0 && (i = e.pooledCache, i != null && (e.pooledCache = null, Xa(i)));
  }
  function Xr() {
    return Rm(), Mm(), Im(), Um();
  }
  function Um() {
    if (Et !== 5) return false;
    var e = co, i = ef;
    ef = 0;
    var l = ni(Ni), r = B.T, p = te.p;
    try {
      te.p = 32 > l ? 32 : l, B.T = null, l = tf, tf = null;
      var h = co, T = Ni;
      if (Et = 0, Jl = co = null, Ni = 0, (ze & 6) !== 0) throw Error(a(331));
      var A = ze;
      if (ze |= 4, mm(h.current), fm(h, h.current, T, l), ze = A, hs(0, false), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
        Gt.onPostCommitFiberRoot(Ao, h);
      } catch {
      }
      return true;
    } finally {
      te.p = p, B.T = r, Dm(e, i);
    }
  }
  function Lm(e, i, l) {
    i = S(l, i), i = Lc(e.stateNode, i, 2), e = io(e, i, 2), e !== null && (Pi(e, 2), ti(e));
  }
  function $e(e, i, l) {
    if (e.tag === 3) Lm(e, e, l);
    else for (; i !== null; ) {
      if (i.tag === 3) {
        Lm(i, e, l);
        break;
      } else if (i.tag === 1) {
        var r = i.stateNode;
        if (typeof i.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (uo === null || !uo.has(r))) {
          e = S(l, e), l = kp(2), r = io(i, l, 2), r !== null && (Pp(l, r, i, e), Pi(r, 2), ti(r));
          break;
        }
      }
      i = i.return;
    }
  }
  function af(e, i, l) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new d0();
      var p = /* @__PURE__ */ new Set();
      r.set(i, p);
    } else p = r.get(i), p === void 0 && (p = /* @__PURE__ */ new Set(), r.set(i, p));
    p.has(l) || (Zc = true, p.add(l), e = y0.bind(null, e, i, l), i.then(e, e));
  }
  function y0(e, i, l) {
    var r = e.pingCache;
    r !== null && r.delete(i), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, it === e && (Le & l) === l && (ft === 4 || ft === 3 && (Le & 62914560) === Le && 300 > Ge() - zr ? (ze & 2) === 0 && Yl(e, 0) : Wc |= l, Fl === Le && (Fl = 0)), ti(e);
  }
  function km(e, i) {
    i === 0 && (i = fa()), e = pi(e, i), e !== null && (Pi(e, i), ti(e));
  }
  function v0(e) {
    var i = e.memoizedState, l = 0;
    i !== null && (l = i.retryLane), km(e, l);
  }
  function S0(e, i) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode, p = e.memoizedState;
        p !== null && (l = p.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(i), km(e, l);
  }
  function T0(e, i) {
    return jo(e, i);
  }
  var Qr = null, $l = null, sf = false, Zr = false, rf = false, po = 0;
  function ti(e) {
    e !== $l && e.next === null && ($l === null ? Qr = $l = e : $l = $l.next = e), Zr = true, sf || (sf = true, _0());
  }
  function hs(e, i) {
    if (!rf && Zr) {
      rf = true;
      do
        for (var l = false, r = Qr; r !== null; ) {
          if (e !== 0) {
            var p = r.pendingLanes;
            if (p === 0) var h = 0;
            else {
              var T = r.suspendedLanes, A = r.pingedLanes;
              h = (1 << 31 - Ot(42 | e) + 1) - 1, h &= p & ~(T & ~A), h = h & 201326741 ? h & 201326741 | 1 : h ? h | 2 : 0;
            }
            h !== 0 && (l = true, Hm(r, h));
          } else h = Le, h = bo(r, r === it ? h : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (h & 3) === 0 || ki(r, h) || (l = true, Hm(r, h));
          r = r.next;
        }
      while (l);
      rf = false;
    }
  }
  function E0() {
    Pm();
  }
  function Pm() {
    Zr = sf = false;
    var e = 0;
    po !== 0 && D0() && (e = po);
    for (var i = Ge(), l = null, r = Qr; r !== null; ) {
      var p = r.next, h = Gm(r, i);
      h === 0 ? (r.next = null, l === null ? Qr = p : l.next = p, p === null && ($l = l)) : (l = r, (e !== 0 || (h & 3) !== 0) && (Zr = true)), r = p;
    }
    Et !== 0 && Et !== 5 || hs(e), po !== 0 && (po = 0);
  }
  function Gm(e, i) {
    for (var l = e.suspendedLanes, r = e.pingedLanes, p = e.expirationTimes, h = e.pendingLanes & -62914561; 0 < h; ) {
      var T = 31 - Ot(h), A = 1 << T, w = p[T];
      w === -1 ? ((A & l) === 0 || (A & r) !== 0) && (p[T] = qs(A, i)) : w <= i && (e.expiredLanes |= A), h &= ~A;
    }
    if (i = it, l = Le, l = bo(e, e === i ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, l === 0 || e === i && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && el(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ki(e, l)) {
      if (i = l & -l, i === e.callbackPriority) return i;
      switch (r !== null && el(r), ni(l)) {
        case 2:
        case 8:
          l = Bs;
          break;
        case 32:
          l = Co;
          break;
        case 268435456:
          l = Nt;
          break;
        default:
          l = Co;
      }
      return r = Om.bind(null, e), l = jo(l, r), e.callbackPriority = i, e.callbackNode = l, i;
    }
    return r !== null && r !== null && el(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Om(e, i) {
    if (Et !== 0 && Et !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Xr() && e.callbackNode !== l) return null;
    var r = Le;
    return r = bo(e, e === it ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Sm(e, r, i), Gm(e, Ge()), e.callbackNode != null && e.callbackNode === l ? Om.bind(null, e) : null);
  }
  function Hm(e, i) {
    if (Xr()) return null;
    Sm(e, i, true);
  }
  function _0() {
    L0(function() {
      (ze & 6) !== 0 ? jo(ca, E0) : Pm();
    });
  }
  function uf() {
    if (po === 0) {
      var e = Ul;
      e === 0 && (e = kn, kn <<= 1, (kn & 261888) === 0 && (kn = 256)), po = e;
    }
    return po;
  }
  function Bm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Do("" + e);
  }
  function qm(e, i) {
    var l = i.ownerDocument.createElement("input");
    return l.name = i.name, l.value = i.value, e.id && l.setAttribute("form", e.id), i.parentNode.insertBefore(l, i), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function C0(e, i, l, r, p) {
    if (i === "submit" && l && l.stateNode === p) {
      var h = Bm((p[wt] || null).action), T = r.submitter;
      T && (i = (i = T[wt] || null) ? Bm(i.formAction) : T.getAttribute("formAction"), i !== null && (h = i, T = null));
      var A = new Fi("action", "action", null, r, p);
      e.push({ event: A, listeners: [{ instance: null, listener: function() {
        if (r.defaultPrevented) {
          if (po !== 0) {
            var w = T ? qm(p, T) : new FormData(p);
            wc(l, { pending: true, data: w, method: p.method, action: h }, null, w);
          }
        } else typeof h == "function" && (A.preventDefault(), w = T ? qm(p, T) : new FormData(p), wc(l, { pending: true, data: w, method: p.method, action: h }, h, w));
      }, currentTarget: p }] });
    }
  }
  for (var cf = 0; cf < Va.length; cf++) {
    var ff = Va[cf], A0 = ff.toLowerCase(), x0 = ff[0].toUpperCase() + ff.slice(1);
    mn(A0, "on" + x0);
  }
  mn(fr, "onAnimationEnd"), mn(dr, "onAnimationIteration"), mn(bl, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(Zu, "onTransitionRun"), mn(Wu, "onTransitionStart"), mn(ju, "onTransitionCancel"), mn(qa, "onTransitionEnd"), dn("onMouseEnter", ["mouseout", "mouseover"]), dn("onMouseLeave", ["mouseout", "mouseover"]), dn("onPointerEnter", ["pointerout", "pointerover"]), dn("onPointerLeave", ["pointerout", "pointerover"]), $n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), $n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), $n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), $n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), b0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gs));
  function Vm(e, i) {
    i = (i & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var r = e[l], p = r.event;
      r = r.listeners;
      e: {
        var h = void 0;
        if (i) for (var T = r.length - 1; 0 <= T; T--) {
          var A = r[T], w = A.instance, k = A.currentTarget;
          if (A = A.listener, w !== h && p.isPropagationStopped()) break e;
          h = A, p.currentTarget = k;
          try {
            h(p);
          } catch (z) {
            Wn(z);
          }
          p.currentTarget = null, h = w;
        }
        else for (T = 0; T < r.length; T++) {
          if (A = r[T], w = A.instance, k = A.currentTarget, A = A.listener, w !== h && p.isPropagationStopped()) break e;
          h = A, p.currentTarget = k;
          try {
            h(p);
          } catch (z) {
            Wn(z);
          }
          p.currentTarget = null, h = w;
        }
      }
    }
  }
  function De(e, i) {
    var l = i[Gi];
    l === void 0 && (l = i[Gi] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    l.has(r) || (zm(i, e, 2, false), l.add(r));
  }
  function df(e, i, l) {
    var r = 0;
    i && (r |= 4), zm(l, e, r, i);
  }
  var Wr = "_reactListening" + Math.random().toString(36).slice(2);
  function pf(e) {
    if (!e[Wr]) {
      e[Wr] = true, sl.forEach(function(l) {
        l !== "selectionchange" && (b0.has(l) || df(l, false, e), df(l, true, e));
      });
      var i = e.nodeType === 9 ? e : e.ownerDocument;
      i === null || i[Wr] || (i[Wr] = true, df("selectionchange", false, i));
    }
  }
  function zm(e, i, l, r) {
    switch (vh(i)) {
      case 2:
        var p = eS;
        break;
      case 8:
        p = tS;
        break;
      default:
        p = wf;
    }
    l = p.bind(null, i, l, e), p = void 0, !pn || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (p = true), r ? p !== void 0 ? e.addEventListener(i, l, { capture: true, passive: p }) : e.addEventListener(i, l, true) : p !== void 0 ? e.addEventListener(i, l, { passive: p }) : e.addEventListener(i, l, false);
  }
  function mf(e, i, l, r, p) {
    var h = r;
    if ((i & 1) === 0 && (i & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var T = r.tag;
      if (T === 3 || T === 4) {
        var A = r.stateNode.containerInfo;
        if (A === p) break;
        if (T === 4) for (T = r.return; T !== null; ) {
          var w = T.tag;
          if ((w === 3 || w === 4) && T.stateNode.containerInfo === p) return;
          T = T.return;
        }
        for (; A !== null; ) {
          if (T = oi(A), T === null) return;
          if (w = T.tag, w === 5 || w === 6 || w === 26 || w === 27) {
            r = h = T;
            continue e;
          }
          A = A.parentNode;
        }
      }
      r = r.return;
    }
    hl(function() {
      var k = h, z = Xn(l), $ = [];
      e: {
        var G = pr.get(e);
        if (G !== void 0) {
          var q = Fi, ue = e;
          switch (e) {
            case "keypress":
              if (Ea(l) === 0) break e;
            case "keydown":
            case "keyup":
              q = Ca;
              break;
            case "focusin":
              ue = "focus", q = Zs;
              break;
            case "focusout":
              ue = "blur", q = Zs;
              break;
            case "beforeblur":
            case "afterblur":
              q = Zs;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = qu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = xd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = Aa;
              break;
            case fr:
            case dr:
            case bl:
              q = bd;
              break;
            case qa:
              q = nr;
              break;
            case "scroll":
            case "scrollend":
              q = Ks;
              break;
            case "wheel":
              q = xa;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = wd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = ri;
              break;
            case "toggle":
            case "beforetoggle":
              q = Ku;
          }
          var ye = (i & 4) !== 0, Ze = !ye && (e === "scroll" || e === "scrollend"), U = ye ? G !== null ? G + "Capture" : null : G;
          ye = [];
          for (var M = k, L; M !== null; ) {
            var F = M;
            if (L = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || L === null || U === null || (F = Vi(M, U), F != null && ye.push(ys(M, F, L))), Ze) break;
            M = M.return;
          }
          0 < ye.length && (G = new q(G, ue, null, l, z), $.push({ event: G, listeners: ye }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", G && l !== et && (ue = l.relatedTarget || l.fromElement) && (oi(ue) || ue[ii])) break e;
          if ((q || G) && (G = z.window === z ? z : (G = z.ownerDocument) ? G.defaultView || G.parentWindow : window, q ? (ue = l.relatedTarget || l.toElement, q = k, ue = ue ? oi(ue) : null, ue !== null && (Ze = c(ue), ye = ue.tag, ue !== Ze || ye !== 5 && ye !== 27 && ye !== 6) && (ue = null)) : (q = null, ue = k), q !== ue)) {
            if (ye = qu, F = "onMouseLeave", U = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (ye = ri, F = "onPointerLeave", U = "onPointerEnter", M = "pointer"), Ze = q == null ? G : Bi(q), L = ue == null ? G : Bi(ue), G = new ye(F, M + "leave", q, l, z), G.target = Ze, G.relatedTarget = L, F = null, oi(z) === k && (ye = new ye(U, M + "enter", ue, l, z), ye.target = L, ye.relatedTarget = Ze, F = ye), Ze = F, q && ue) t: {
              for (ye = N0, U = q, M = ue, L = 0, F = U; F; F = ye(F)) L++;
              F = 0;
              for (var me = M; me; me = ye(me)) F++;
              for (; 0 < L - F; ) U = ye(U), L--;
              for (; 0 < F - L; ) M = ye(M), F--;
              for (; L--; ) {
                if (U === M || M !== null && U === M.alternate) {
                  ye = U;
                  break t;
                }
                U = ye(U), M = ye(M);
              }
              ye = null;
            }
            else ye = null;
            q !== null && Fm($, G, q, ye, false), ue !== null && Ze !== null && Fm($, Ze, ue, ye, true);
          }
        }
        e: {
          if (G = k ? Bi(k) : window, q = G.nodeName && G.nodeName.toLowerCase(), q === "select" || q === "input" && G.type === "file") var He = rr;
          else if (ar(G)) if (ur) He = Qu;
          else {
            He = Qi;
            var fe = $u;
          }
          else q = G.nodeName, !q || q.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? k && va(k.elementType) && (He = rr) : He = Xu;
          if (He && (He = He(e, k))) {
            sr($, He, l, z);
            break e;
          }
          fe && fe(e, G, k), e === "focusout" && k && G.type === "number" && k.memoizedProps.value != null && pl(G, "number", G.value);
        }
        switch (fe = k ? Bi(k) : window, e) {
          case "focusin":
            (ar(fe) || fe.contentEditable === "true") && (ci = fe, Oa = k, fi = null);
            break;
          case "focusout":
            fi = Oa = ci = null;
            break;
          case "mousedown":
            Ha = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ha = false, xl($, l, z);
            break;
          case "selectionchange":
            if (Ga) break;
          case "keydown":
          case "keyup":
            xl($, l, z);
        }
        var we;
        if (El) e: {
          switch (e) {
            case "compositionstart":
              var ke = "onCompositionStart";
              break e;
            case "compositionend":
              ke = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ke = "onCompositionUpdate";
              break e;
          }
          ke = void 0;
        }
        else ui ? _l(e, l) && (ke = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ke = "onCompositionStart");
        ke && (Yi && l.locale !== "ko" && (ui || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && ui && (we = Hu()) : (Gn = z, gl = "value" in Gn ? Gn.value : Gn.textContent, ui = true)), fe = jr(k, ke), 0 < fe.length && (ke = new Vu(ke, e, null, l, z), $.push({ event: ke, listeners: fe }), we ? ke.data = we : (we = wa(l), we !== null && (ke.data = we)))), (we = ba ? Ra(e, l) : Ma(e, l)) && (ke = jr(k, "onBeforeInput"), 0 < ke.length && (fe = new Vu("onBeforeInput", "beforeinput", null, l, z), $.push({ event: fe, listeners: ke }), fe.data = we)), C0($, e, k, l, z);
      }
      Vm($, i);
    });
  }
  function ys(e, i, l) {
    return { instance: e, listener: i, currentTarget: l };
  }
  function jr(e, i) {
    for (var l = i + "Capture", r = []; e !== null; ) {
      var p = e, h = p.stateNode;
      if (p = p.tag, p !== 5 && p !== 26 && p !== 27 || h === null || (p = Vi(e, l), p != null && r.unshift(ys(e, p, h)), p = Vi(e, i), p != null && r.push(ys(e, p, h))), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function N0(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Fm(e, i, l, r, p) {
    for (var h = i._reactName, T = []; l !== null && l !== r; ) {
      var A = l, w = A.alternate, k = A.stateNode;
      if (A = A.tag, w !== null && w === r) break;
      A !== 5 && A !== 26 && A !== 27 || k === null || (w = k, p ? (k = Vi(l, h), k != null && T.unshift(ys(l, k, w))) : p || (k = Vi(l, h), k != null && T.push(ys(l, k, w)))), l = l.return;
    }
    T.length !== 0 && e.push({ event: i, listeners: T });
  }
  var w0 = /\r\n?/g, R0 = /\u0000|\uFFFD/g;
  function Jm(e) {
    return (typeof e == "string" ? e : "" + e).replace(w0, `
`).replace(R0, "");
  }
  function Ym(e, i) {
    return i = Jm(i), Jm(e) === i;
  }
  function Qe(e, i, l, r, p, h) {
    switch (l) {
      case "children":
        typeof r == "string" ? i === "body" || i === "textarea" && r === "" || qi(e, r) : (typeof r == "number" || typeof r == "bigint") && i !== "body" && qi(e, "" + r);
        break;
      case "className":
        Mt(e, "class", r);
        break;
      case "tabIndex":
        Mt(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Mt(e, l, r);
        break;
      case "style":
        ml(e, r, h);
        break;
      case "data":
        if (i !== "object") {
          Mt(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (i !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(l);
          break;
        }
        r = Do("" + r), e.setAttribute(l, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof h == "function" && (l === "formAction" ? (i !== "input" && Qe(e, i, "name", p.name, p, null), Qe(e, i, "formEncType", p.formEncType, p, null), Qe(e, i, "formMethod", p.formMethod, p, null), Qe(e, i, "formTarget", p.formTarget, p, null)) : (Qe(e, i, "encType", p.encType, p, null), Qe(e, i, "method", p.method, p, null), Qe(e, i, "target", p.target, p, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(l);
          break;
        }
        r = Do("" + r), e.setAttribute(l, r);
        break;
      case "onClick":
        r != null && (e.onclick = _n);
        break;
      case "onScroll":
        r != null && De("scroll", e);
        break;
      case "onScrollEnd":
        r != null && De("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(a(61));
          if (l = r.__html, l != null) {
            if (p.children != null) throw Error(a(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = Do("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(l, "" + r) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        r === true ? e.setAttribute(l, "") : r !== false && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(l, r) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(l, r) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(l) : e.setAttribute(l, r);
        break;
      case "popover":
        De("beforetoggle", e), De("toggle", e), Rt(e, "popover", r);
        break;
      case "xlinkActuate":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        Rt(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Sa.get(l) || l, Rt(e, l, r));
    }
  }
  function hf(e, i, l, r, p, h) {
    switch (l) {
      case "style":
        ml(e, r, h);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(a(61));
          if (l = r.__html, l != null) {
            if (p.children != null) throw Error(a(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof r == "string" ? qi(e, r) : (typeof r == "number" || typeof r == "bigint") && qi(e, "" + r);
        break;
      case "onScroll":
        r != null && De("scroll", e);
        break;
      case "onScrollEnd":
        r != null && De("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = _n);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!rl.hasOwnProperty(l)) e: {
          if (l[0] === "o" && l[1] === "n" && (p = l.endsWith("Capture"), i = l.slice(2, p ? l.length - 7 : void 0), h = e[wt] || null, h = h != null ? h[l] : null, typeof h == "function" && e.removeEventListener(i, h, p), typeof r == "function")) {
            typeof h != "function" && h !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(i, r, p);
            break e;
          }
          l in e ? e[l] = r : r === true ? e.setAttribute(l, "") : Rt(e, l, r);
        }
    }
  }
  function kt(e, i, l) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        De("error", e), De("load", e);
        var r = false, p = false, h;
        for (h in l) if (l.hasOwnProperty(h)) {
          var T = l[h];
          if (T != null) switch (h) {
            case "src":
              r = true;
              break;
            case "srcSet":
              p = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(a(137, i));
            default:
              Qe(e, i, h, T, l, null);
          }
        }
        p && Qe(e, i, "srcSet", l.srcSet, l, null), r && Qe(e, i, "src", l.src, l, null);
        return;
      case "input":
        De("invalid", e);
        var A = h = T = p = null, w = null, k = null;
        for (r in l) if (l.hasOwnProperty(r)) {
          var z = l[r];
          if (z != null) switch (r) {
            case "name":
              p = z;
              break;
            case "type":
              T = z;
              break;
            case "checked":
              w = z;
              break;
            case "defaultChecked":
              k = z;
              break;
            case "value":
              h = z;
              break;
            case "defaultValue":
              A = z;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (z != null) throw Error(a(137, i));
              break;
            default:
              Qe(e, i, r, z, l, null);
          }
        }
        dl(e, h, A, w, k, T, p, false);
        return;
      case "select":
        De("invalid", e), r = T = h = null;
        for (p in l) if (l.hasOwnProperty(p) && (A = l[p], A != null)) switch (p) {
          case "value":
            h = A;
            break;
          case "defaultValue":
            T = A;
            break;
          case "multiple":
            r = A;
          default:
            Qe(e, i, p, A, l, null);
        }
        i = h, l = T, e.multiple = !!r, i != null ? si(e, !!r, i, false) : l != null && si(e, !!r, l, true);
        return;
      case "textarea":
        De("invalid", e), h = p = r = null;
        for (T in l) if (l.hasOwnProperty(T) && (A = l[T], A != null)) switch (T) {
          case "value":
            r = A;
            break;
          case "defaultValue":
            p = A;
            break;
          case "children":
            h = A;
            break;
          case "dangerouslySetInnerHTML":
            if (A != null) throw Error(a(91));
            break;
          default:
            Qe(e, i, T, A, l, null);
        }
        ot(e, r, p, h);
        return;
      case "option":
        for (w in l) if (l.hasOwnProperty(w) && (r = l[w], r != null)) switch (w) {
          case "selected":
            e.selected = r && typeof r != "function" && typeof r != "symbol";
            break;
          default:
            Qe(e, i, w, r, l, null);
        }
        return;
      case "dialog":
        De("beforetoggle", e), De("toggle", e), De("cancel", e), De("close", e);
        break;
      case "iframe":
      case "object":
        De("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < gs.length; r++) De(gs[r], e);
        break;
      case "image":
        De("error", e), De("load", e);
        break;
      case "details":
        De("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        De("error", e), De("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (k in l) if (l.hasOwnProperty(k) && (r = l[k], r != null)) switch (k) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(137, i));
          default:
            Qe(e, i, k, r, l, null);
        }
        return;
      default:
        if (va(i)) {
          for (z in l) l.hasOwnProperty(z) && (r = l[z], r !== void 0 && hf(e, i, z, r, l, void 0));
          return;
        }
    }
    for (A in l) l.hasOwnProperty(A) && (r = l[A], r != null && Qe(e, i, A, r, l, null));
  }
  function M0(e, i, l, r) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var p = null, h = null, T = null, A = null, w = null, k = null, z = null;
        for (q in l) {
          var $ = l[q];
          if (l.hasOwnProperty(q) && $ != null) switch (q) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              w = $;
            default:
              r.hasOwnProperty(q) || Qe(e, i, q, null, r, $);
          }
        }
        for (var G in r) {
          var q = r[G];
          if ($ = l[G], r.hasOwnProperty(G) && (q != null || $ != null)) switch (G) {
            case "type":
              h = q;
              break;
            case "name":
              p = q;
              break;
            case "checked":
              k = q;
              break;
            case "defaultChecked":
              z = q;
              break;
            case "value":
              T = q;
              break;
            case "defaultValue":
              A = q;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (q != null) throw Error(a(137, i));
              break;
            default:
              q !== $ && Qe(e, i, G, q, r, $);
          }
        }
        fl(e, T, A, w, k, z, h, p);
        return;
      case "select":
        q = T = A = G = null;
        for (h in l) if (w = l[h], l.hasOwnProperty(h) && w != null) switch (h) {
          case "value":
            break;
          case "multiple":
            q = w;
          default:
            r.hasOwnProperty(h) || Qe(e, i, h, null, r, w);
        }
        for (p in r) if (h = r[p], w = l[p], r.hasOwnProperty(p) && (h != null || w != null)) switch (p) {
          case "value":
            G = h;
            break;
          case "defaultValue":
            A = h;
            break;
          case "multiple":
            T = h;
          default:
            h !== w && Qe(e, i, p, h, r, w);
        }
        i = A, l = T, r = q, G != null ? si(e, !!l, G, false) : !!r != !!l && (i != null ? si(e, !!l, i, true) : si(e, !!l, l ? [] : "", false));
        return;
      case "textarea":
        q = G = null;
        for (A in l) if (p = l[A], l.hasOwnProperty(A) && p != null && !r.hasOwnProperty(A)) switch (A) {
          case "value":
            break;
          case "children":
            break;
          default:
            Qe(e, i, A, null, r, p);
        }
        for (T in r) if (p = r[T], h = l[T], r.hasOwnProperty(T) && (p != null || h != null)) switch (T) {
          case "value":
            G = p;
            break;
          case "defaultValue":
            q = p;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (p != null) throw Error(a(91));
            break;
          default:
            p !== h && Qe(e, i, T, p, r, h);
        }
        Io(e, G, q);
        return;
      case "option":
        for (var ue in l) if (G = l[ue], l.hasOwnProperty(ue) && G != null && !r.hasOwnProperty(ue)) switch (ue) {
          case "selected":
            e.selected = false;
            break;
          default:
            Qe(e, i, ue, null, r, G);
        }
        for (w in r) if (G = r[w], q = l[w], r.hasOwnProperty(w) && G !== q && (G != null || q != null)) switch (w) {
          case "selected":
            e.selected = G && typeof G != "function" && typeof G != "symbol";
            break;
          default:
            Qe(e, i, w, G, r, q);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ye in l) G = l[ye], l.hasOwnProperty(ye) && G != null && !r.hasOwnProperty(ye) && Qe(e, i, ye, null, r, G);
        for (k in r) if (G = r[k], q = l[k], r.hasOwnProperty(k) && G !== q && (G != null || q != null)) switch (k) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (G != null) throw Error(a(137, i));
            break;
          default:
            Qe(e, i, k, G, r, q);
        }
        return;
      default:
        if (va(i)) {
          for (var Ze in l) G = l[Ze], l.hasOwnProperty(Ze) && G !== void 0 && !r.hasOwnProperty(Ze) && hf(e, i, Ze, void 0, r, G);
          for (z in r) G = r[z], q = l[z], !r.hasOwnProperty(z) || G === q || G === void 0 && q === void 0 || hf(e, i, z, G, r, q);
          return;
        }
    }
    for (var U in l) G = l[U], l.hasOwnProperty(U) && G != null && !r.hasOwnProperty(U) && Qe(e, i, U, null, r, G);
    for ($ in r) G = r[$], q = l[$], !r.hasOwnProperty($) || G === q || G == null && q == null || Qe(e, i, $, G, r, q);
  }
  function Km(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function I0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, i = 0, l = performance.getEntriesByType("resource"), r = 0; r < l.length; r++) {
        var p = l[r], h = p.transferSize, T = p.initiatorType, A = p.duration;
        if (h && A && Km(T)) {
          for (T = 0, A = p.responseEnd, r += 1; r < l.length; r++) {
            var w = l[r], k = w.startTime;
            if (k > A) break;
            var z = w.transferSize, $ = w.initiatorType;
            z && Km($) && (w = w.responseEnd, T += z * (w < A ? 1 : (A - k) / (w - k)));
          }
          if (--r, i += 8 * (h + T) / (p.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return i / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var gf = null, yf = null;
  function eu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function $m(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xm(e, i) {
    if (e === 0) switch (i) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && i === "foreignObject" ? 0 : e;
  }
  function vf(e, i) {
    return e === "textarea" || e === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Sf = null;
  function D0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Sf ? false : (Sf = e, true) : (Sf = null, false);
  }
  var Qm = typeof setTimeout == "function" ? setTimeout : void 0, U0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Zm = typeof Promise == "function" ? Promise : void 0, L0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zm < "u" ? function(e) {
    return Zm.resolve(null).then(e).catch(k0);
  } : Qm;
  function k0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function mo(e) {
    return e === "head";
  }
  function Wm(e, i) {
    var l = i, r = 0;
    do {
      var p = l.nextSibling;
      if (e.removeChild(l), p && p.nodeType === 8) if (l = p.data, l === "/$" || l === "/&") {
        if (r === 0) {
          e.removeChild(p), Wl(i);
          return;
        }
        r--;
      } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") r++;
      else if (l === "html") vs(e.ownerDocument.documentElement);
      else if (l === "head") {
        l = e.ownerDocument.head, vs(l);
        for (var h = l.firstChild; h; ) {
          var T = h.nextSibling, A = h.nodeName;
          h[Hi] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && h.rel.toLowerCase() === "stylesheet" || l.removeChild(h), h = T;
        }
      } else l === "body" && vs(e.ownerDocument.body);
      l = p;
    } while (l);
    Wl(i);
  }
  function jm(e, i) {
    var l = e;
    e = 0;
    do {
      var r = l.nextSibling;
      if (l.nodeType === 1 ? i ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (i ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), r && r.nodeType === 8) if (l = r.data, l === "/$") {
        if (e === 0) break;
        e--;
      } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = r;
    } while (l);
  }
  function Tf(e) {
    var i = e.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var l = i;
      switch (i = i.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Tf(l), ma(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function P0(e, i, l, r) {
    for (; e.nodeType === 1; ) {
      var p = l;
      if (e.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[Hi]) switch (i) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (h = e.getAttribute("rel"), h === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (h !== p.rel || e.getAttribute("href") !== (p.href == null || p.href === "" ? null : p.href) || e.getAttribute("crossorigin") !== (p.crossOrigin == null ? null : p.crossOrigin) || e.getAttribute("title") !== (p.title == null ? null : p.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (h = e.getAttribute("src"), (h !== (p.src == null ? null : p.src) || e.getAttribute("type") !== (p.type == null ? null : p.type) || e.getAttribute("crossorigin") !== (p.crossOrigin == null ? null : p.crossOrigin)) && h && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (i === "input" && e.type === "hidden") {
        var h = p.name == null ? null : "" + p.name;
        if (p.type === "hidden" && e.getAttribute("name") === h) return e;
      } else return e;
      if (e = Mn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function G0(e, i, l) {
    if (i === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Mn(e.nextSibling), e === null)) return null;
    return e;
  }
  function eh(e, i) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Mn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ef(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function _f(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function O0(e, i) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = i;
    else if (e.data !== "$?" || l.readyState !== "loading") i();
    else {
      var r = function() {
        i(), l.removeEventListener("DOMContentLoaded", r);
      };
      l.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var i = e.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (i = e.data, i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&" || i === "F!" || i === "F") break;
        if (i === "/$" || i === "/&") return null;
      }
    }
    return e;
  }
  var Cf = null;
  function th(e) {
    e = e.nextSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (i === 0) return Mn(e.nextSibling);
          i--;
        } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || i++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function nh(e) {
    e = e.previousSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (i === 0) return e;
          i--;
        } else l !== "/$" && l !== "/&" || i++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ih(e, i, l) {
    switch (i = eu(l), e) {
      case "html":
        if (e = i.documentElement, !e) throw Error(a(452));
        return e;
      case "head":
        if (e = i.head, !e) throw Error(a(453));
        return e;
      case "body":
        if (e = i.body, !e) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function vs(e) {
    for (var i = e.attributes; i.length; ) e.removeAttributeNode(i[0]);
    ma(e);
  }
  var In = /* @__PURE__ */ new Map(), oh = /* @__PURE__ */ new Set();
  function tu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var wi = te.d;
  te.d = { f: H0, r: B0, D: q0, C: V0, L: z0, m: F0, X: Y0, S: J0, M: K0 };
  function H0() {
    var e = wi.f(), i = Yr();
    return e || i;
  }
  function B0(e) {
    var i = li(e);
    i !== null && i.tag === 5 && i.type === "form" ? Ep(i) : wi.r(e);
  }
  var Xl = typeof document > "u" ? null : document;
  function lh(e, i, l) {
    var r = Xl;
    if (r && typeof i == "string" && i) {
      var p = Ft(i);
      p = 'link[rel="' + e + '"][href="' + p + '"]', typeof l == "string" && (p += '[crossorigin="' + l + '"]'), oh.has(p) || (oh.add(p), e = { rel: e, crossOrigin: l, href: i }, r.querySelector(p) === null && (i = r.createElement("link"), kt(i, "link", e), ut(i), r.head.appendChild(i)));
    }
  }
  function q0(e) {
    wi.D(e), lh("dns-prefetch", e, null);
  }
  function V0(e, i) {
    wi.C(e, i), lh("preconnect", e, i);
  }
  function z0(e, i, l) {
    wi.L(e, i, l);
    var r = Xl;
    if (r && e && i) {
      var p = 'link[rel="preload"][as="' + Ft(i) + '"]';
      i === "image" && l && l.imageSrcSet ? (p += '[imagesrcset="' + Ft(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (p += '[imagesizes="' + Ft(l.imageSizes) + '"]')) : p += '[href="' + Ft(e) + '"]';
      var h = p;
      switch (i) {
        case "style":
          h = Ql(e);
          break;
        case "script":
          h = Zl(e);
      }
      In.has(h) || (e = _({ rel: "preload", href: i === "image" && l && l.imageSrcSet ? void 0 : e, as: i }, l), In.set(h, e), r.querySelector(p) !== null || i === "style" && r.querySelector(Ss(h)) || i === "script" && r.querySelector(Ts(h)) || (i = r.createElement("link"), kt(i, "link", e), ut(i), r.head.appendChild(i)));
    }
  }
  function F0(e, i) {
    wi.m(e, i);
    var l = Xl;
    if (l && e) {
      var r = i && typeof i.as == "string" ? i.as : "script", p = 'link[rel="modulepreload"][as="' + Ft(r) + '"][href="' + Ft(e) + '"]', h = p;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = Zl(e);
      }
      if (!In.has(h) && (e = _({ rel: "modulepreload", href: e }, i), In.set(h, e), l.querySelector(p) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ts(h))) return;
        }
        r = l.createElement("link"), kt(r, "link", e), ut(r), l.head.appendChild(r);
      }
    }
  }
  function J0(e, i, l) {
    wi.S(e, i, l);
    var r = Xl;
    if (r && e) {
      var p = ai(r).hoistableStyles, h = Ql(e);
      i = i || "default";
      var T = p.get(h);
      if (!T) {
        var A = { loading: 0, preload: null };
        if (T = r.querySelector(Ss(h))) A.loading = 5;
        else {
          e = _({ rel: "stylesheet", href: e, "data-precedence": i }, l), (l = In.get(h)) && Af(e, l);
          var w = T = r.createElement("link");
          ut(w), kt(w, "link", e), w._p = new Promise(function(k, z) {
            w.onload = k, w.onerror = z;
          }), w.addEventListener("load", function() {
            A.loading |= 1;
          }), w.addEventListener("error", function() {
            A.loading |= 2;
          }), A.loading |= 4, nu(T, i, r);
        }
        T = { type: "stylesheet", instance: T, count: 1, state: A }, p.set(h, T);
      }
    }
  }
  function Y0(e, i) {
    wi.X(e, i);
    var l = Xl;
    if (l && e) {
      var r = ai(l).hoistableScripts, p = Zl(e), h = r.get(p);
      h || (h = l.querySelector(Ts(p)), h || (e = _({ src: e, async: true }, i), (i = In.get(p)) && xf(e, i), h = l.createElement("script"), ut(h), kt(h, "link", e), l.head.appendChild(h)), h = { type: "script", instance: h, count: 1, state: null }, r.set(p, h));
    }
  }
  function K0(e, i) {
    wi.M(e, i);
    var l = Xl;
    if (l && e) {
      var r = ai(l).hoistableScripts, p = Zl(e), h = r.get(p);
      h || (h = l.querySelector(Ts(p)), h || (e = _({ src: e, async: true, type: "module" }, i), (i = In.get(p)) && xf(e, i), h = l.createElement("script"), ut(h), kt(h, "link", e), l.head.appendChild(h)), h = { type: "script", instance: h, count: 1, state: null }, r.set(p, h));
    }
  }
  function ah(e, i, l, r) {
    var p = (p = Ne.current) ? tu(p) : null;
    if (!p) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (i = Ql(l.href), l = ai(p).hoistableStyles, r = l.get(i), r || (r = { type: "style", instance: null, count: 0, state: null }, l.set(i, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Ql(l.href);
          var h = ai(p).hoistableStyles, T = h.get(e);
          if (T || (p = p.ownerDocument || p, T = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, h.set(e, T), (h = p.querySelector(Ss(e))) && !h._p && (T.instance = h, T.state.loading = 5), In.has(e) || (l = { rel: "preload", as: "style", href: l.href, crossOrigin: l.crossOrigin, integrity: l.integrity, media: l.media, hrefLang: l.hrefLang, referrerPolicy: l.referrerPolicy }, In.set(e, l), h || $0(p, e, l, T.state))), i && r === null) throw Error(a(528, ""));
          return T;
        }
        if (i && r !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return i = l.async, l = l.src, typeof l == "string" && i && typeof i != "function" && typeof i != "symbol" ? (i = Zl(l), l = ai(p).hoistableScripts, r = l.get(i), r || (r = { type: "script", instance: null, count: 0, state: null }, l.set(i, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(a(444, e));
    }
  }
  function Ql(e) {
    return 'href="' + Ft(e) + '"';
  }
  function Ss(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function sh(e) {
    return _({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function $0(e, i, l, r) {
    e.querySelector('link[rel="preload"][as="style"][' + i + "]") ? r.loading = 1 : (i = e.createElement("link"), r.preload = i, i.addEventListener("load", function() {
      return r.loading |= 1;
    }), i.addEventListener("error", function() {
      return r.loading |= 2;
    }), kt(i, "link", l), ut(i), e.head.appendChild(i));
  }
  function Zl(e) {
    return '[src="' + Ft(e) + '"]';
  }
  function Ts(e) {
    return "script[async]" + e;
  }
  function rh(e, i, l) {
    if (i.count++, i.instance === null) switch (i.type) {
      case "style":
        var r = e.querySelector('style[data-href~="' + Ft(l.href) + '"]');
        if (r) return i.instance = r, ut(r), r;
        var p = _({}, l, { "data-href": l.href, "data-precedence": l.precedence, href: null, precedence: null });
        return r = (e.ownerDocument || e).createElement("style"), ut(r), kt(r, "style", p), nu(r, l.precedence, e), i.instance = r;
      case "stylesheet":
        p = Ql(l.href);
        var h = e.querySelector(Ss(p));
        if (h) return i.state.loading |= 4, i.instance = h, ut(h), h;
        r = sh(l), (p = In.get(p)) && Af(r, p), h = (e.ownerDocument || e).createElement("link"), ut(h);
        var T = h;
        return T._p = new Promise(function(A, w) {
          T.onload = A, T.onerror = w;
        }), kt(h, "link", r), i.state.loading |= 4, nu(h, l.precedence, e), i.instance = h;
      case "script":
        return h = Zl(l.src), (p = e.querySelector(Ts(h))) ? (i.instance = p, ut(p), p) : (r = l, (p = In.get(h)) && (r = _({}, l), xf(r, p)), e = e.ownerDocument || e, p = e.createElement("script"), ut(p), kt(p, "link", r), e.head.appendChild(p), i.instance = p);
      case "void":
        return null;
      default:
        throw Error(a(443, i.type));
    }
    else i.type === "stylesheet" && (i.state.loading & 4) === 0 && (r = i.instance, i.state.loading |= 4, nu(r, l.precedence, e));
    return i.instance;
  }
  function nu(e, i, l) {
    for (var r = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), p = r.length ? r[r.length - 1] : null, h = p, T = 0; T < r.length; T++) {
      var A = r[T];
      if (A.dataset.precedence === i) h = A;
      else if (h !== p) break;
    }
    h ? h.parentNode.insertBefore(e, h.nextSibling) : (i = l.nodeType === 9 ? l.head : l, i.insertBefore(e, i.firstChild));
  }
  function Af(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy), e.title == null && (e.title = i.title);
  }
  function xf(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy), e.integrity == null && (e.integrity = i.integrity);
  }
  var iu = null;
  function uh(e, i, l) {
    if (iu === null) {
      var r = /* @__PURE__ */ new Map(), p = iu = /* @__PURE__ */ new Map();
      p.set(l, r);
    } else p = iu, r = p.get(l), r || (r = /* @__PURE__ */ new Map(), p.set(l, r));
    if (r.has(e)) return r;
    for (r.set(e, null), l = l.getElementsByTagName(e), p = 0; p < l.length; p++) {
      var h = l[p];
      if (!(h[Hi] || h[mt] || e === "link" && h.getAttribute("rel") === "stylesheet") && h.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = h.getAttribute(i) || "";
        T = e + T;
        var A = r.get(T);
        A ? A.push(h) : r.set(T, [h]);
      }
    }
    return r;
  }
  function ch(e, i, l) {
    e = e.ownerDocument || e, e.head.insertBefore(l, i === "title" ? e.querySelector("head > title") : null);
  }
  function X0(e, i, l) {
    if (l === 1 || i.itemProp != null) return false;
    switch (e) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof i.precedence != "string" || typeof i.href != "string" || i.href === "") break;
        return true;
      case "link":
        if (typeof i.rel != "string" || typeof i.href != "string" || i.href === "" || i.onLoad || i.onError) break;
        switch (i.rel) {
          case "stylesheet":
            return e = i.disabled, typeof i.precedence == "string" && e == null;
          default:
            return true;
        }
      case "script":
        if (i.async && typeof i.async != "function" && typeof i.async != "symbol" && !i.onLoad && !i.onError && i.src && typeof i.src == "string") return true;
    }
    return false;
  }
  function fh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Q0(e, i, l, r) {
    if (l.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== false) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var p = Ql(r.href), h = i.querySelector(Ss(p));
        if (h) {
          i = h._p, i !== null && typeof i == "object" && typeof i.then == "function" && (e.count++, e = ou.bind(e), i.then(e, e)), l.state.loading |= 4, l.instance = h, ut(h);
          return;
        }
        h = i.ownerDocument || i, r = sh(r), (p = In.get(p)) && Af(r, p), h = h.createElement("link"), ut(h);
        var T = h;
        T._p = new Promise(function(A, w) {
          T.onload = A, T.onerror = w;
        }), kt(h, "link", r), l.instance = h;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, i), (i = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = ou.bind(e), i.addEventListener("load", l), i.addEventListener("error", l));
    }
  }
  var bf = 0;
  function Z0(e, i) {
    return e.stylesheets && e.count === 0 && au(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var r = setTimeout(function() {
        if (e.stylesheets && au(e, e.stylesheets), e.unsuspend) {
          var h = e.unsuspend;
          e.unsuspend = null, h();
        }
      }, 6e4 + i);
      0 < e.imgBytes && bf === 0 && (bf = 62500 * I0());
      var p = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && au(e, e.stylesheets), e.unsuspend)) {
          var h = e.unsuspend;
          e.unsuspend = null, h();
        }
      }, (e.imgBytes > bf ? 50 : 800) + i);
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(r), clearTimeout(p);
      };
    } : null;
  }
  function ou() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) au(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var lu = null;
  function au(e, i) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, lu = /* @__PURE__ */ new Map(), i.forEach(W0, e), lu = null, ou.call(e));
  }
  function W0(e, i) {
    if (!(i.state.loading & 4)) {
      var l = lu.get(e);
      if (l) var r = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), lu.set(e, l);
        for (var p = e.querySelectorAll("link[data-precedence],style[data-precedence]"), h = 0; h < p.length; h++) {
          var T = p[h];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (l.set(T.dataset.precedence, T), r = T);
        }
        r && l.set(null, r);
      }
      p = i.instance, T = p.getAttribute("data-precedence"), h = l.get(T) || r, h === r && l.set(null, p), l.set(T, p), this.count++, r = ou.bind(this), p.addEventListener("load", r), p.addEventListener("error", r), h ? h.parentNode.insertBefore(p, h.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(p, e.firstChild)), i.state.loading |= 4;
    }
  }
  var Es = { $$typeof: X, Provider: null, Consumer: null, _currentValue: ce, _currentValue2: ce, _threadCount: 0 };
  function j0(e, i, l, r, p, h, T, A, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ol(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.hiddenUpdates = ol(null), this.identifierPrefix = r, this.onUncaughtError = p, this.onCaughtError = h, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function dh(e, i, l, r, p, h, T, A, w, k, z, $) {
    return e = new j0(e, i, l, T, w, k, z, $, A), i = 1, h === true && (i |= 24), h = Kt(3, null, null, i), e.current = h, h.stateNode = e, i = oc(), i.refCount++, e.pooledCache = i, i.refCount++, h.memoizedState = { element: r, isDehydrated: l, cache: i }, rc(h), e;
  }
  function ph(e) {
    return e ? (e = jn, e) : jn;
  }
  function mh(e, i, l, r, p, h) {
    p = ph(p), r.context === null ? r.context = p : r.pendingContext = p, r = no(i), r.payload = { element: l }, h = h === void 0 ? null : h, h !== null && (r.callback = h), l = io(e, r, i), l !== null && (rn(l, e, i), ja(l, e, i));
  }
  function hh(e, i) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < i ? l : i;
    }
  }
  function Nf(e, i) {
    hh(e, i), (e = e.alternate) && hh(e, i);
  }
  function gh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var i = pi(e, 67108864);
      i !== null && rn(i, e, 67108864), Nf(e, 67108864);
    }
  }
  function yh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var i = Sn();
      i = ll(i);
      var l = pi(e, i);
      l !== null && rn(l, e, i), Nf(e, i);
    }
  }
  var su = true;
  function eS(e, i, l, r) {
    var p = B.T;
    B.T = null;
    var h = te.p;
    try {
      te.p = 2, wf(e, i, l, r);
    } finally {
      te.p = h, B.T = p;
    }
  }
  function tS(e, i, l, r) {
    var p = B.T;
    B.T = null;
    var h = te.p;
    try {
      te.p = 8, wf(e, i, l, r);
    } finally {
      te.p = h, B.T = p;
    }
  }
  function wf(e, i, l, r) {
    if (su) {
      var p = Rf(r);
      if (p === null) mf(e, i, r, ru, l), Sh(e, r);
      else if (iS(p, e, i, l, r)) r.stopPropagation();
      else if (Sh(e, r), i & 4 && -1 < nS.indexOf(e)) {
        for (; p !== null; ) {
          var h = li(p);
          if (h !== null) switch (h.tag) {
            case 3:
              if (h = h.stateNode, h.current.memoizedState.isDehydrated) {
                var T = tn(h.pendingLanes);
                if (T !== 0) {
                  var A = h;
                  for (A.pendingLanes |= 2, A.entangledLanes |= 2; T; ) {
                    var w = 1 << 31 - Ot(T);
                    A.entanglements[1] |= w, T &= ~w;
                  }
                  ti(h), (ze & 6) === 0 && (Fr = Ge() + 500, hs(0));
                }
              }
              break;
            case 31:
            case 13:
              A = pi(h, 2), A !== null && rn(A, h, 2), Yr(), Nf(h, 2);
          }
          if (h = Rf(r), h === null && mf(e, i, r, ru, l), h === p) break;
          p = h;
        }
        p !== null && r.stopPropagation();
      } else mf(e, i, r, null, l);
    }
  }
  function Rf(e) {
    return e = Xn(e), Mf(e);
  }
  var ru = null;
  function Mf(e) {
    if (ru = null, e = oi(e), e !== null) {
      var i = c(e);
      if (i === null) e = null;
      else {
        var l = i.tag;
        if (l === 13) {
          if (e = d(i), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = g(i), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
          e = null;
        } else i !== e && (e = null);
      }
    }
    return ru = e, null;
  }
  function vh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (tl()) {
          case ca:
            return 2;
          case Bs:
            return 8;
          case Co:
          case Yn:
            return 32;
          case Nt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var If = false, ho = null, go = null, yo = null, _s = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), vo = [], nS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Sh(e, i) {
    switch (e) {
      case "focusin":
      case "focusout":
        ho = null;
        break;
      case "dragenter":
      case "dragleave":
        go = null;
        break;
      case "mouseover":
      case "mouseout":
        yo = null;
        break;
      case "pointerover":
      case "pointerout":
        _s.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cs.delete(i.pointerId);
    }
  }
  function As(e, i, l, r, p, h) {
    return e === null || e.nativeEvent !== h ? (e = { blockedOn: i, domEventName: l, eventSystemFlags: r, nativeEvent: h, targetContainers: [p] }, i !== null && (i = li(i), i !== null && gh(i)), e) : (e.eventSystemFlags |= r, i = e.targetContainers, p !== null && i.indexOf(p) === -1 && i.push(p), e);
  }
  function iS(e, i, l, r, p) {
    switch (i) {
      case "focusin":
        return ho = As(ho, e, i, l, r, p), true;
      case "dragenter":
        return go = As(go, e, i, l, r, p), true;
      case "mouseover":
        return yo = As(yo, e, i, l, r, p), true;
      case "pointerover":
        var h = p.pointerId;
        return _s.set(h, As(_s.get(h) || null, e, i, l, r, p)), true;
      case "gotpointercapture":
        return h = p.pointerId, Cs.set(h, As(Cs.get(h) || null, e, i, l, r, p)), true;
    }
    return false;
  }
  function Th(e) {
    var i = oi(e.target);
    if (i !== null) {
      var l = c(i);
      if (l !== null) {
        if (i = l.tag, i === 13) {
          if (i = d(l), i !== null) {
            e.blockedOn = i, al(e.priority, function() {
              yh(l);
            });
            return;
          }
        } else if (i === 31) {
          if (i = g(l), i !== null) {
            e.blockedOn = i, al(e.priority, function() {
              yh(l);
            });
            return;
          }
        } else if (i === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function uu(e) {
    if (e.blockedOn !== null) return false;
    for (var i = e.targetContainers; 0 < i.length; ) {
      var l = Rf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var r = new l.constructor(l.type, l);
        et = r, l.target.dispatchEvent(r), et = null;
      } else return i = li(l), i !== null && gh(i), e.blockedOn = l, false;
      i.shift();
    }
    return true;
  }
  function Eh(e, i, l) {
    uu(e) && l.delete(i);
  }
  function oS() {
    If = false, ho !== null && uu(ho) && (ho = null), go !== null && uu(go) && (go = null), yo !== null && uu(yo) && (yo = null), _s.forEach(Eh), Cs.forEach(Eh);
  }
  function cu(e, i) {
    e.blockedOn === i && (e.blockedOn = null, If || (If = true, n.unstable_scheduleCallback(n.unstable_NormalPriority, oS)));
  }
  var fu = null;
  function _h(e) {
    fu !== e && (fu = e, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
      fu === e && (fu = null);
      for (var i = 0; i < e.length; i += 3) {
        var l = e[i], r = e[i + 1], p = e[i + 2];
        if (typeof r != "function") {
          if (Mf(r || l) === null) continue;
          break;
        }
        var h = li(l);
        h !== null && (e.splice(i, 3), i -= 3, wc(h, { pending: true, data: p, method: l.method, action: r }, r, p));
      }
    }));
  }
  function Wl(e) {
    function i(w) {
      return cu(w, e);
    }
    ho !== null && cu(ho, e), go !== null && cu(go, e), yo !== null && cu(yo, e), _s.forEach(i), Cs.forEach(i);
    for (var l = 0; l < vo.length; l++) {
      var r = vo[l];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < vo.length && (l = vo[0], l.blockedOn === null); ) Th(l), l.blockedOn === null && vo.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for (r = 0; r < l.length; r += 3) {
      var p = l[r], h = l[r + 1], T = p[wt] || null;
      if (typeof h == "function") T || _h(l);
      else if (T) {
        var A = null;
        if (h && h.hasAttribute("formAction")) {
          if (p = h, T = h[wt] || null) A = T.formAction;
          else if (Mf(p) !== null) continue;
        } else A = T.action;
        typeof A == "function" ? l[r + 1] = A : (l.splice(r, 3), r -= 3), _h(l);
      }
    }
  }
  function Ch() {
    function e(h) {
      h.canIntercept && h.info === "react-transition" && h.intercept({ handler: function() {
        return new Promise(function(T) {
          return p = T;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function i() {
      p !== null && (p(), p = null), r || setTimeout(l, 20);
    }
    function l() {
      if (!r && !navigation.transition) {
        var h = navigation.currentEntry;
        h && h.url != null && navigation.navigate(h.url, { state: h.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var r = false, p = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", i), navigation.addEventListener("navigateerror", i), setTimeout(l, 100), function() {
        r = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", i), navigation.removeEventListener("navigateerror", i), p !== null && (p(), p = null);
      };
    }
  }
  function Df(e) {
    this._internalRoot = e;
  }
  du.prototype.render = Df.prototype.render = function(e) {
    var i = this._internalRoot;
    if (i === null) throw Error(a(409));
    var l = i.current, r = Sn();
    mh(l, r, e, i, null, null);
  }, du.prototype.unmount = Df.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var i = e.containerInfo;
      mh(e.current, 2, null, e, null, null), Yr(), i[ii] = null;
    }
  };
  function du(e) {
    this._internalRoot = e;
  }
  du.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var i = da();
      e = { blockedOn: null, target: e, priority: i };
      for (var l = 0; l < vo.length && i !== 0 && i < vo[l].priority; l++) ;
      vo.splice(l, 0, e), l === 0 && Th(e);
    }
  };
  var Ah = t.version;
  if (Ah !== "19.2.4") throw Error(a(527, Ah, "19.2.4"));
  te.findDOMNode = function(e) {
    var i = e._reactInternals;
    if (i === void 0) throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = m(i), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var lS = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: B, reconcilerVersion: "19.2.4" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pu.isDisabled && pu.supportsFiber) try {
      Ao = pu.inject(lS), Gt = pu;
    } catch {
    }
  }
  return bs.createRoot = function(e, i) {
    if (!s(e)) throw Error(a(299));
    var l = false, r = "", p = Ip, h = Dp, T = Up;
    return i != null && (i.unstable_strictMode === true && (l = true), i.identifierPrefix !== void 0 && (r = i.identifierPrefix), i.onUncaughtError !== void 0 && (p = i.onUncaughtError), i.onCaughtError !== void 0 && (h = i.onCaughtError), i.onRecoverableError !== void 0 && (T = i.onRecoverableError)), i = dh(e, 1, false, null, null, l, r, null, p, h, T, Ch), e[ii] = i.current, pf(e), new Df(i);
  }, bs.hydrateRoot = function(e, i, l) {
    if (!s(e)) throw Error(a(299));
    var r = false, p = "", h = Ip, T = Dp, A = Up, w = null;
    return l != null && (l.unstable_strictMode === true && (r = true), l.identifierPrefix !== void 0 && (p = l.identifierPrefix), l.onUncaughtError !== void 0 && (h = l.onUncaughtError), l.onCaughtError !== void 0 && (T = l.onCaughtError), l.onRecoverableError !== void 0 && (A = l.onRecoverableError), l.formState !== void 0 && (w = l.formState)), i = dh(e, 1, true, i, l ?? null, r, p, w, h, T, A, Ch), i.context = ph(null), l = i.current, r = Sn(), r = ll(r), p = no(r), p.callback = null, io(l, p, r), l = r, i.current.lanes = l, Pi(i, l), ti(i), e[ii] = i.current, pf(e), new du(i);
  }, bs.version = "19.2.4", bs;
}
var Lh;
function gS() {
  if (Lh) return kf.exports;
  Lh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
    } catch (t) {
      console.error(t);
    }
  }
  return n(), kf.exports = hS(), kf.exports;
}
var yS = gS();
const vS = la(yS);
function SS() {
  if (typeof navigator < "u" && navigator.product === "ReactNative") return true;
  if (typeof process < "u") {
    const n = process.type;
    return n === "renderer" || n === "worker" ? false : !!(process.versions && process.versions.node);
  }
  return false;
}
var Hf, kh;
function TS() {
  return kh || (kh = 1, Hf = function(t) {
    return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
  }), Hf;
}
var ES = TS();
const _S = la(ES), CS = { toWeb() {
  throw new Error("Vercel Blob: Sorry, we cannot get a Readable stream in this environment. If you see this message please open an issue here: https://github.com/vercel/storage/ with details on your environment.");
} };
var Bf = {}, qf, Ph;
function AS() {
  if (Ph) return qf;
  Ph = 1;
  function n(t, o) {
    typeof o == "boolean" && (o = { forever: o }), this._originalTimeouts = JSON.parse(JSON.stringify(t)), this._timeouts = t, this._options = o || {}, this._maxRetryTime = o && o.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0));
  }
  return qf = n, n.prototype.reset = function() {
    this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0);
  }, n.prototype.stop = function() {
    this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null;
  }, n.prototype.retry = function(t) {
    if (this._timeout && clearTimeout(this._timeout), !t) return false;
    var o = (/* @__PURE__ */ new Date()).getTime();
    if (t && o - this._operationStart >= this._maxRetryTime) return this._errors.push(t), this._errors.unshift(new Error("RetryOperation timeout occurred")), false;
    this._errors.push(t);
    var a = this._timeouts.shift();
    if (a === void 0) if (this._cachedTimeouts) this._errors.splice(0, this._errors.length - 1), a = this._cachedTimeouts.slice(-1);
    else return false;
    var s = this;
    return this._timer = setTimeout(function() {
      s._attempts++, s._operationTimeoutCb && (s._timeout = setTimeout(function() {
        s._operationTimeoutCb(s._attempts);
      }, s._operationTimeout), s._options.unref && s._timeout.unref()), s._fn(s._attempts);
    }, a), this._options.unref && this._timer.unref(), true;
  }, n.prototype.attempt = function(t, o) {
    this._fn = t, o && (o.timeout && (this._operationTimeout = o.timeout), o.cb && (this._operationTimeoutCb = o.cb));
    var a = this;
    this._operationTimeoutCb && (this._timeout = setTimeout(function() {
      a._operationTimeoutCb();
    }, a._operationTimeout)), this._operationStart = (/* @__PURE__ */ new Date()).getTime(), this._fn(this._attempts);
  }, n.prototype.try = function(t) {
    console.log("Using RetryOperation.try() is deprecated"), this.attempt(t);
  }, n.prototype.start = function(t) {
    console.log("Using RetryOperation.start() is deprecated"), this.attempt(t);
  }, n.prototype.start = n.prototype.try, n.prototype.errors = function() {
    return this._errors;
  }, n.prototype.attempts = function() {
    return this._attempts;
  }, n.prototype.mainError = function() {
    if (this._errors.length === 0) return null;
    for (var t = {}, o = null, a = 0, s = 0; s < this._errors.length; s++) {
      var c = this._errors[s], d = c.message, g = (t[d] || 0) + 1;
      t[d] = g, g >= a && (o = c, a = g);
    }
    return o;
  }, qf;
}
var Gh;
function xS() {
  return Gh || (Gh = 1, (function(n) {
    var t = AS();
    n.operation = function(o) {
      var a = n.timeouts(o);
      return new t(a, { forever: o && (o.forever || o.retries === 1 / 0), unref: o && o.unref, maxRetryTime: o && o.maxRetryTime });
    }, n.timeouts = function(o) {
      if (o instanceof Array) return [].concat(o);
      var a = { retries: 10, factor: 2, minTimeout: 1 * 1e3, maxTimeout: 1 / 0, randomize: false };
      for (var s in o) a[s] = o[s];
      if (a.minTimeout > a.maxTimeout) throw new Error("minTimeout is greater than maxTimeout");
      for (var c = [], d = 0; d < a.retries; d++) c.push(this.createTimeout(d, a));
      return o && o.forever && !c.length && c.push(this.createTimeout(d, a)), c.sort(function(g, y) {
        return g - y;
      }), c;
    }, n.createTimeout = function(o, a) {
      var s = a.randomize ? Math.random() + 1 : 1, c = Math.round(s * Math.max(a.minTimeout, 1) * Math.pow(a.factor, o));
      return c = Math.min(c, a.maxTimeout), c;
    }, n.wrap = function(o, a, s) {
      if (a instanceof Array && (s = a, a = null), !s) {
        s = [];
        for (var c in o) typeof o[c] == "function" && s.push(c);
      }
      for (var d = 0; d < s.length; d++) {
        var g = s[d], y = o[g];
        o[g] = (function(v) {
          var _ = n.operation(a), E = Array.prototype.slice.call(arguments, 1), b = E.pop();
          E.push(function(D) {
            _.retry(D) || (D && (arguments[0] = _.mainError()), b.apply(this, arguments));
          }), _.attempt(function() {
            v.apply(o, E);
          });
        }).bind(o, y), o[g].options = a;
      }
    };
  })(Bf)), Bf;
}
var Vf, Oh;
function Oy() {
  return Oh || (Oh = 1, Vf = xS()), Vf;
}
var zf, Hh;
function bS() {
  if (Hh) return zf;
  Hh = 1;
  var n = Oy();
  function t(o, a) {
    function s(c, d) {
      var g = a || {}, y;
      "randomize" in g || (g.randomize = true), y = n.operation(g);
      function m(E) {
        d(E || new Error("Aborted"));
      }
      function v(E, b) {
        if (E.bail) {
          m(E);
          return;
        }
        y.retry(E) ? g.onRetry && g.onRetry(E, b) : d(y.mainError());
      }
      function _(E) {
        var b;
        try {
          b = o(m, E);
        } catch (D) {
          v(D, E);
          return;
        }
        Promise.resolve(b).then(c).catch(function(H) {
          v(H, E);
        });
      }
      y.attempt(_);
    }
    return new Promise(s);
  }
  return zf = t, zf;
}
var NS = bS();
const wS = la(NS), md = globalThis.fetch.bind(globalThis);
var Ff, Bh;
function RS() {
  if (Bh) return Ff;
  Bh = 1;
  function n(t, o) {
    if (typeof t != "function") throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof t}\`.`);
    let a, s = 0;
    return function(...d) {
      clearTimeout(a);
      const g = Date.now(), y = g - s, m = o - y;
      m <= 0 ? (s = g, t.apply(this, d)) : a = setTimeout(() => {
        s = Date.now(), t.apply(this, d);
      }, m);
    };
  }
  return Ff = n, Ff;
}
var MS = RS();
const Hy = la(MS);
var qt = {}, IS = new Promise((n) => {
  try {
    const t = new Uint8Array([104, 101, 108, 108, 111]);
    new Blob([t]).text().then((a) => {
      n(a === "hello");
    }).catch(() => {
      n(false);
    });
  } catch {
    n(false);
  }
});
async function By(n) {
  if (n instanceof ReadableStream) return n;
  if (n instanceof Blob) return n.stream();
  if (qy(n)) return CS.toWeb(n);
  let t;
  return n instanceof ArrayBuffer ? t = new Uint8Array(n) : US(n) ? t = n : t = DS(n), await IS ? new Blob([t]).stream() : new ReadableStream({ start(o) {
    o.enqueue(t), o.close();
  } });
}
function qy(n) {
  return typeof n == "object" && typeof n.pipe == "function" && n.readable && typeof n._read == "function" && typeof n._readableState == "object";
}
function DS(n) {
  return new TextEncoder().encode(n);
}
function US(n) {
  return _S(n);
}
var LS = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i, kS = { b: 1, kb: 1024, mb: 1 << 20, gb: 1 << 30, tb: 1024 ** 4, pb: 1024 ** 5 };
function Dn(n) {
  if (typeof n == "number" && !Number.isNaN(n)) return n;
  if (typeof n != "string") return null;
  const t = LS.exec(n);
  let o, a = "b";
  if (!t) o = parseInt(n, 10);
  else {
    const [, s, , , c] = t;
    if (!s) return null;
    o = parseFloat(s), c && (a = c.toLowerCase());
  }
  return Number.isNaN(o) ? null : Math.floor(kS[a] * o);
}
var PS = "https://vercel.com/api/blob";
function GS(n) {
  if (n != null && n.token) return n.token;
  if (qt.BLOB_READ_WRITE_TOKEN) return qt.BLOB_READ_WRITE_TOKEN;
  throw new We("No token found. Either configure the `BLOB_READ_WRITE_TOKEN` environment variable, or pass a `token` option to your calls.");
}
var We = class extends Error {
  constructor(n) {
    super(`Vercel Blob: ${n}`);
  }
};
function OS(n) {
  if (typeof n != "object" || n === null) return false;
  const t = Object.getPrototypeOf(n);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
var HS = ["//"], Vy = (() => {
  if (SS()) return true;
  if (Qf().startsWith("http://localhost")) return false;
  let t = false;
  const o = new Request(Qf(), { body: new ReadableStream(), method: "POST", get duplex() {
    return t = true, "half";
  } }).headers.has("Content-Type");
  return t && !o;
})();
function Qf(n = "") {
  let t = null;
  try {
    t = qt.VERCEL_BLOB_API_URL || qt.NEXT_PUBLIC_VERCEL_BLOB_API_URL;
  } catch {
  }
  return `${t || PS}${n}`;
}
var qh = typeof TextEncoder == "function" ? new TextEncoder() : null;
function Su(n) {
  return n ? typeof n == "string" ? qh ? qh.encode(n).byteLength : new Blob([n]).size : "byteLength" in n && typeof n.byteLength == "number" ? n.byteLength : "size" in n && typeof n.size == "number" ? n.size : 0 : 0;
}
var BS = (n, t) => {
  let o = new Uint8Array(0);
  return new TransformStream({ transform(a, s) {
    const c = new Uint8Array(o.length + a.byteLength);
    for (c.set(o), c.set(new Uint8Array(a), o.length), o = c; o.length >= n; ) {
      const d = o.slice(0, n);
      s.enqueue(d), t == null || t(d.byteLength), o = o.slice(n);
    }
  }, flush(a) {
    o.length > 0 && (a.enqueue(o), t == null || t(o.byteLength));
  } });
};
function zy(n) {
  return globalThis.ReadableStream && n instanceof ReadableStream;
}
function Fy(n) {
  return !!(zy(n) || qy(n));
}
var Jy = false, Vh, zh;
try {
  ((Vh = qt.DEBUG) != null && Vh.includes("blob") || (zh = qt.NEXT_PUBLIC_DEBUG) != null && zh.includes("blob")) && (Jy = true);
} catch {
}
function un(n, ...t) {
  Jy && console.debug(`vercel-blob: ${n}`, ...t);
}
var Fh, qS = (Fh = globalThis.DOMException) != null ? Fh : (() => {
  try {
    atob("~");
  } catch (n) {
    return Object.getPrototypeOf(n).constructor;
  }
})(), VS = Object.prototype.toString, zS = (n) => VS.call(n) === "[object Error]", FS = /* @__PURE__ */ new Set(["network error", "Failed to fetch", "NetworkError when attempting to fetch resource.", "The Internet connection appears to be offline.", "Load failed", "Network request failed", "fetch failed", "terminated"]);
function JS(n) {
  return n && zS(n) && n.name === "TypeError" && typeof n.message == "string" ? n.message === "Load failed" ? n.stack === void 0 : FS.has(n.message) : false;
}
var Yy = typeof md == "function", YS = Yy && Vy, KS = 64 * 1024, Jh = async ({ input: n, init: t, onUploadProgress: o }) => {
  un("using fetch");
  let a;
  if (t.body) if (o) {
    const c = await By(t.body);
    let d = 0;
    const g = BS(KS, (y) => {
      d += y, o(d);
    });
    a = c.pipeThrough(g);
  } else a = t.body;
  const s = Vy && a && Fy(a) ? "half" : void 0;
  return md(n, { ...t, ...t.body ? { body: a } : {}, duplex: s });
}, Yh = typeof XMLHttpRequest < "u", Kh = async ({ input: n, init: t, onUploadProgress: o }) => {
  un("using xhr");
  let a = null;
  return t.body && (zy(t.body) ? a = await new Response(t.body).blob() : a = t.body), new Promise((s, c) => {
    const d = new XMLHttpRequest();
    if (d.open(t.method || "GET", n.toString(), true), o && d.upload.addEventListener("progress", (g) => {
      g.lengthComputable && o(g.loaded);
    }), d.onload = () => {
      var g;
      if ((g = t.signal) != null && g.aborted) {
        c(new DOMException("The user aborted the request.", "AbortError"));
        return;
      }
      const y = new Headers();
      d.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((_) => {
        const E = _.split(": "), b = E.shift(), D = E.join(": ");
        b && y.set(b.toLowerCase(), D);
      });
      const v = new Response(d.response, { status: d.status, statusText: d.statusText, headers: y });
      s(v);
    }, d.onerror = () => {
      c(new TypeError("Network request failed"));
    }, d.ontimeout = () => {
      c(new TypeError("Network request timed out"));
    }, d.onabort = () => {
      c(new DOMException("The user aborted a request.", "AbortError"));
    }, t.headers && new Headers(t.headers).forEach((y, m) => {
      d.setRequestHeader(m, y);
    }), t.signal && (t.signal.addEventListener("abort", () => {
      d.abort();
    }), t.signal.aborted)) {
      d.abort();
      return;
    }
    d.send(a);
  });
}, $S = async ({ input: n, init: t, onUploadProgress: o }) => {
  if (o) {
    if (YS) return Jh({ input: n, init: t, onUploadProgress: o });
    if (Yh) return Kh({ input: n, init: t, onUploadProgress: o });
  }
  if (Yy) return Jh({ input: n, init: t });
  if (Yh) return Kh({ input: n, init: t });
  throw new Error("No request implementation available");
}, $h = 950, XS = class extends We {
  constructor() {
    super("Access denied, please provide a valid token for this resource.");
  }
}, QS = class extends We {
  constructor(n) {
    super(`Content type mismatch, ${n}.`);
  }
}, ZS = class extends We {
  constructor(n) {
    super(`Pathname mismatch, ${n}. Check the pathname used in upload() or put() matches the one from the client token.`);
  }
}, WS = class extends We {
  constructor() {
    super("Client token has expired.");
  }
}, jS = class extends We {
  constructor(n) {
    super(`File is too large, ${n}.`);
  }
}, eT = class extends We {
  constructor() {
    super("This store does not exist.");
  }
}, tT = class extends We {
  constructor() {
    super("This store has been suspended.");
  }
}, Ky = class extends We {
  constructor() {
    super("Unknown error, please visit https://vercel.com/help.");
  }
}, nT = class extends We {
  constructor() {
    super("The requested blob does not exist");
  }
}, Iu = class extends We {
  constructor() {
    super("The blob service is currently not available. Please try again.");
  }
}, iT = class extends We {
  constructor(n) {
    super(`Too many requests please lower the number of concurrent requests ${n ? ` - try again in ${n} seconds` : ""}.`), this.retryAfter = n ?? 0;
  }
}, oT = class extends We {
  constructor() {
    super("The request was aborted.");
  }
}, lT = class extends We {
  constructor() {
    super("Precondition failed: ETag mismatch.");
  }
}, aT = 12;
function sT() {
  let n = null;
  try {
    n = qt.VERCEL_BLOB_API_VERSION_OVERRIDE || qt.NEXT_PUBLIC_VERCEL_BLOB_API_VERSION_OVERRIDE;
  } catch {
  }
  return `${n ?? aT}`;
}
function rT() {
  try {
    const n = qt.VERCEL_BLOB_RETRIES || "10";
    return parseInt(n, 10);
  } catch {
    return 10;
  }
}
function uT(n) {
  const t = n.headers.get("retry-after");
  return new iT(t ? parseInt(t, 10) : void 0);
}
async function cT(n) {
  var t, o, a;
  let s, c;
  try {
    const g = await n.json();
    s = (o = (t = g.error) == null ? void 0 : t.code) != null ? o : "unknown_error", c = (a = g.error) == null ? void 0 : a.message;
  } catch {
    s = "unknown_error";
  }
  c != null && c.includes("contentType") && c.includes("is not allowed") && (s = "content_type_not_allowed"), c != null && c.includes('"pathname"') && c.includes("does not match the token payload") && (s = "client_token_pathname_mismatch"), c === "Token expired" && (s = "client_token_expired"), c != null && c.includes("the file length cannot be greater than") && (s = "file_too_large");
  let d;
  switch (s) {
    case "store_suspended":
      d = new tT();
      break;
    case "forbidden":
      d = new XS();
      break;
    case "content_type_not_allowed":
      d = new QS(c);
      break;
    case "client_token_pathname_mismatch":
      d = new ZS(c);
      break;
    case "client_token_expired":
      d = new WS();
      break;
    case "file_too_large":
      d = new jS(c);
      break;
    case "not_found":
      d = new nT();
      break;
    case "store_not_found":
      d = new eT();
      break;
    case "bad_request":
      d = new We(c ?? "Bad request");
      break;
    case "service_unavailable":
      d = new Iu();
      break;
    case "rate_limited":
      d = uT(n);
      break;
    case "precondition_failed":
      d = new lT();
      break;
    case "unknown_error":
    case "not_allowed":
    default:
      d = new Ky();
      break;
  }
  return { code: s, error: d };
}
async function Du(n, t, o) {
  const a = sT(), s = GS(o), c = fT(), [, , , d = ""] = s.split("_"), g = `${d}:${Date.now()}:${Math.random().toString(16).slice(2)}`;
  let y = 0, m = 0, v = 0;
  const _ = (o == null ? void 0 : o.onUploadProgress) || dT();
  t.body && _ && (m = Su(t.body)), o != null && o.onUploadProgress && o.onUploadProgress({ loaded: 0, total: m, percentage: 0 });
  const E = await wS(async (b) => {
    let D;
    try {
      D = await $S({ input: Qf(n), init: { ...t, headers: { "x-api-blob-request-id": g, "x-api-blob-request-attempt": String(y), "x-api-version": a, ..._ ? { "x-content-length": String(m) } : {}, authorization: `Bearer ${s}`, ...c, ...t.headers } }, onUploadProgress: o != null && o.onUploadProgress ? (V) => {
        var ie;
        const X = m !== 0 ? m : V;
        v = V;
        const j = m > 0 ? Number((V / X * 100).toFixed(2)) : 0;
        j === 100 && m > 0 || (ie = o.onUploadProgress) == null || ie.call(o, { loaded: V, total: X, percentage: j });
      } : void 0 });
    } catch (V) {
      if (V instanceof qS && V.name === "AbortError") {
        b(new oT());
        return;
      }
      if (JS(V)) throw V;
      if (V instanceof TypeError) {
        b(V);
        return;
      }
      throw V;
    }
    if (D.ok) return D;
    const { code: H, error: P } = await cT(D);
    if (H === "unknown_error" || H === "service_unavailable" || H === "internal_server_error") throw P;
    b(P);
  }, { retries: rT(), onRetry: (b) => {
    b instanceof Error && un(`retrying API request to ${n}`, b.message), y = y + 1;
  } });
  if (!E) throw new Ky();
  return o != null && o.onUploadProgress && o.onUploadProgress({ loaded: v, total: v, percentage: 100 }), await E.json();
}
function fT() {
  const n = {};
  try {
    "VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API" in qt && qt.VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API !== void 0 ? n["x-proxy-through-alternative-api"] = qt.VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API : "NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API" in qt && qt.NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API !== void 0 && (n["x-proxy-through-alternative-api"] = qt.NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API);
  } catch {
  }
  return n;
}
function dT() {
  try {
    return qt.VERCEL_BLOB_USE_X_CONTENT_LENGTH === "1";
  } catch {
    return false;
  }
}
var Ko = { cacheControlMaxAge: "x-cache-control-max-age", addRandomSuffix: "x-add-random-suffix", allowOverwrite: "x-allow-overwrite", contentType: "x-content-type", access: "x-vercel-blob-access", ifMatch: "x-if-match" };
function pT(n, t) {
  const o = {};
  if (o[Ko.access] = t.access, n.includes("contentType") && t.contentType && (o[Ko.contentType] = t.contentType), n.includes("addRandomSuffix") && t.addRandomSuffix !== void 0 && (o[Ko.addRandomSuffix] = t.addRandomSuffix ? "1" : "0"), n.includes("ifMatch") && t.ifMatch) {
    if (t.allowOverwrite === false) throw new We("ifMatch and allowOverwrite: false are contradictory. ifMatch is used for conditional overwrites, which requires allowOverwrite to be true.");
    o[Ko.ifMatch] = t.ifMatch, n.includes("allowOverwrite") && t.allowOverwrite === void 0 && (o[Ko.allowOverwrite] = "1");
  }
  return n.includes("allowOverwrite") && t.allowOverwrite !== void 0 && (o[Ko.allowOverwrite] = t.allowOverwrite ? "1" : "0"), n.includes("cacheControlMaxAge") && t.cacheControlMaxAge !== void 0 && (o[Ko.cacheControlMaxAge] = t.cacheControlMaxAge.toString()), o;
}
async function mT({ pathname: n, options: t, extraChecks: o, getToken: a }) {
  if (!n) throw new We("pathname is required");
  if (n.length > $h) throw new We(`pathname is too long, maximum length is ${$h}`);
  for (const s of HS) if (n.includes(s)) throw new We(`pathname cannot contain "${s}", please encode it if needed`);
  if (!t) throw new We("missing options, see usage");
  if (t.access !== "public" && t.access !== "private") throw new We('access must be "private" or "public", see https://vercel.com/docs/vercel-blob');
  return o && o(t), a && (t.token = await a(n, t)), t;
}
async function hT({ uploadId: n, key: t, pathname: o, parts: a, headers: s, options: c }) {
  const d = new URLSearchParams({ pathname: o });
  try {
    const g = await Du(`/mpu?${d.toString()}`, { method: "POST", headers: { ...s, "content-type": "application/json", "x-mpu-action": "complete", "x-mpu-upload-id": n, "x-mpu-key": encodeURIComponent(t) }, body: JSON.stringify(a), signal: c.abortSignal }, c);
    return un("mpu: complete", g), g;
  } catch (g) {
    throw g instanceof TypeError && (g.message === "Failed to fetch" || g.message === "fetch failed") ? new Iu() : g;
  }
}
async function gT(n, t, o) {
  un("mpu: create", "pathname:", n);
  const a = new URLSearchParams({ pathname: n });
  try {
    const s = await Du(`/mpu?${a.toString()}`, { method: "POST", headers: { ...t, "x-mpu-action": "create" }, signal: o.abortSignal }, o);
    return un("mpu: create", s), s;
  } catch (s) {
    throw s instanceof TypeError && (s.message === "Failed to fetch" || s.message === "fetch failed") ? new Iu() : s;
  }
}
async function yT({ uploadId: n, key: t, pathname: o, headers: a, options: s, internalAbortController: c = new AbortController(), part: d }) {
  var g, y, m;
  const v = new URLSearchParams({ pathname: o }), _ = Du(`/mpu?${v.toString()}`, { signal: c.signal, method: "POST", headers: { ...a, "x-mpu-action": "upload", "x-mpu-key": encodeURIComponent(t), "x-mpu-upload-id": n, "x-mpu-part-number": d.partNumber.toString() }, body: d.blob }, s);
  function E() {
    c.abort();
  }
  (g = s.abortSignal) != null && g.aborted ? E() : (y = s.abortSignal) == null || y.addEventListener("abort", E);
  const b = await _;
  return (m = s.abortSignal) == null || m.removeEventListener("abort", E), b;
}
var $y = typeof window < "u" ? 6 : 8, Zf = 8 * 1024 * 1024, Ns = $y * Zf * 2;
function vT({ uploadId: n, key: t, pathname: o, stream: a, headers: s, options: c, totalToLoad: d }) {
  un("mpu: upload init", "key:", t);
  const g = new AbortController();
  return new Promise((y, m) => {
    const v = [], _ = [], E = a.getReader();
    let b = 0, D = false, H = 1, P = false, V = 0, ie = false, X = 0, j = [], ae = 0, Y;
    const ne = {};
    c.onUploadProgress && (Y = Hy(() => {
      var Z;
      const ge = Object.values(ne).reduce((B, te) => B + te, 0), Ee = d || ge, Fe = d > 0 ? Number(((ge / d || ge) * 100).toFixed(2)) : 0;
      (Z = c.onUploadProgress) == null || Z.call(c, { loaded: ge, total: Ee, percentage: Fe });
    }, 150)), Te().catch(pe);
    async function Te() {
      for (un("mpu: upload read start", "activeUploads:", b, "currentBytesInMemory:", `${Dn(V)}/${Dn(Ns)}`, "bytesSent:", Dn(X)), D = true; V < Ns && !P; ) try {
        const { value: Z, done: ge } = await E.read();
        if (ge) {
          ie = true, un("mpu: upload read consumed the whole stream"), j.length > 0 ? (v.push({ partNumber: H++, blob: new Blob(j, { type: "application/octet-stream" }) }), ve()) : b === 0 && (E.releaseLock(), y(_)), D = false;
          return;
        }
        V += Z.byteLength;
        let Ee = 0;
        for (; Ee < Z.byteLength; ) {
          const Fe = Zf - ae, B = Math.min(Ee + Fe, Z.byteLength), te = Z.slice(Ee, B);
          j.push(te), ae += te.byteLength, Ee = B, ae === Zf && (v.push({ partNumber: H++, blob: new Blob(j, { type: "application/octet-stream" }) }), j = [], ae = 0, ve());
        }
      } catch (Z) {
        pe(Z);
      }
      un("mpu: upload read end", "activeUploads:", b, "currentBytesInMemory:", `${Dn(V)}/${Dn(Ns)}`, "bytesSent:", Dn(X)), D = false;
    }
    async function re(Z) {
      b++, un("mpu: upload send part start", "partNumber:", Z.partNumber, "size:", Z.blob.size, "activeUploads:", b, "currentBytesInMemory:", `${Dn(V)}/${Dn(Ns)}`, "bytesSent:", Dn(X));
      try {
        const ge = c.onUploadProgress ? (Fe) => {
          ne[Z.partNumber] = Fe.loaded, Y && Y();
        } : void 0, Ee = await yT({ uploadId: n, key: t, pathname: o, headers: s, options: { ...c, onUploadProgress: ge }, internalAbortController: g, part: Z });
        if (un("mpu: upload send part end", "partNumber:", Z.partNumber, "activeUploads", b, "currentBytesInMemory:", `${Dn(V)}/${Dn(Ns)}`, "bytesSent:", Dn(X)), P) return;
        if (_.push({ partNumber: Z.partNumber, etag: Ee.etag }), V -= Z.blob.size, b--, X += Z.blob.size, v.length > 0 && ve(), ie) {
          b === 0 && (E.releaseLock(), y(_));
          return;
        }
        D || Te().catch(pe);
      } catch (ge) {
        pe(ge);
      }
    }
    function ve() {
      if (!P) for (un("send parts", "activeUploads", b, "partsToUpload", v.length); b < $y && v.length > 0; ) {
        const Z = v.shift();
        Z && re(Z);
      }
    }
    function pe(Z) {
      P || (P = true, g.abort(), E.releaseLock(), Z instanceof TypeError && (Z.message === "Failed to fetch" || Z.message === "fetch failed") ? m(new Iu()) : m(Z));
    }
  });
}
async function ST(n, t, o, a) {
  un("mpu: init", "pathname:", n, "headers:", o);
  const s = { ...a, onUploadProgress: void 0 };
  if (a.maximumSizeInBytes !== void 0 && !Fy(t) && Su(t) > a.maximumSizeInBytes) throw new We(`Body size of ${Su(t)} bytes exceeds the maximum allowed size of ${a.maximumSizeInBytes} bytes`);
  const c = await gT(n, o, s), d = Su(t), g = await By(t), y = await vT({ uploadId: c.uploadId, key: c.key, pathname: n, stream: g, headers: o, options: a, totalToLoad: d });
  return await hT({ uploadId: c.uploadId, key: c.key, pathname: n, parts: y, headers: o, options: s });
}
function TT({ allowedOptions: n, getToken: t, extraChecks: o }) {
  return async function(s, c, d) {
    if (!c) throw new We("body is required");
    if (OS(c)) throw new We("Body must be a string, buffer or stream. You sent a plain JavaScript object, double check what you're trying to upload.");
    const g = await mT({ pathname: s, options: d, extraChecks: o, getToken: t }), y = pT(n, g);
    if (g.multipart === true) return ST(s, c, y, g);
    const m = g.onUploadProgress ? Hy(g.onUploadProgress, 100) : void 0, v = new URLSearchParams({ pathname: s }), _ = await Du(`/?${v.toString()}`, { method: "PUT", body: c, headers: y, signal: g.abortSignal }, { ...g, onUploadProgress: m });
    return { url: _.url, downloadUrl: _.downloadUrl, pathname: _.pathname, contentType: _.contentType, contentDisposition: _.contentDisposition, etag: _.etag };
  };
}
var Jf = TT({ allowedOptions: ["contentType"], extraChecks(n) {
  if (n.handleUploadUrl === void 0) throw new We("client/`upload` requires the 'handleUploadUrl' parameter");
  if (n.addRandomSuffix !== void 0 || n.createPutExtraChecks !== void 0 || n.cacheControlMaxAge !== void 0 || n.ifMatch !== void 0) throw new We("client/`upload` doesn't allow `addRandomSuffix`, `cacheControlMaxAge`, `allowOverwrite` or `ifMatch`. Configure these options at the server side when generating client tokens.");
}, async getToken(n, t) {
  var o, a;
  return _T({ handleUploadUrl: t.handleUploadUrl, pathname: n, clientPayload: (o = t.clientPayload) != null ? o : null, multipart: (a = t.multipart) != null ? a : false, headers: t.headers });
} }), ET = { generateClientToken: "blob.generate-client-token" };
async function _T(n) {
  const { handleUploadUrl: t, pathname: o } = n, a = AT(t) ? t : CT(t), s = { type: ET.generateClientToken, payload: { pathname: o, clientPayload: n.clientPayload, multipart: n.multipart } }, c = await md(a, { method: "POST", body: JSON.stringify(s), headers: { "content-type": "application/json", ...n.headers }, signal: n.abortSignal });
  if (!c.ok) throw new We("Failed to  retrieve the client token");
  try {
    const { clientToken: d } = await c.json();
    return d;
  } catch {
    throw new We("Failed to retrieve the client token");
  }
}
function CT(n) {
  return new URL(n, location.href).href;
}
function AT(n) {
  try {
    return !!new URL(n);
  } catch {
    return false;
  }
}
const Xh = { ethnicity: "Identity", gender: "Gender", age: "Age", hairStyle: "Hair Style", hairColor: "Hair Color", clothing: "Clothing Style", environment: "Environment", lighting: "Lighting", artStyle: "Art Style", colorGrading: "Color Grading", aspectRatio: "Aspect Ratio", skinTexture: "Skin Texture", facialExpression: "Expression", pose: "Pose", shotType: "Shot Type", handProps: "Hand Props / Hand Posture", imageSize: "Image Size" }, Tu = { ethnicity: ["Randomize", "Japanese", "East Asia descent", "South East Asia descent", "Singapore", "Thailand/ Vietnam/Laos/Cambodia", "Asian", "Caucasian"], gender: ["Randomize", "Female", "Male", "Androgynous"], age: ["Randomize", "Young Adult (20s)", "Adult (30s-40s)", "Senior (60+)"], hairStyle: ["Randomize", "Male – Short Wavy / Perm Style, trendy in Japan, adds texture while keeping frames visible", "Male – Classic Short Cut, clean and professional, keeps focus on the glasses", "Male – Side Part, structured and mature, ideal for business eyewear", "Male – Slick Back, sharp and confident, highlights temples and hinges", "Male – Textured Short Crop, casual and modern without covering the frame", "Female – Low Ponytail, minimal and clean, keeps attention on the glasses", "Female – Slick Back Hair, modern and sharp, clearly shows frame shape", "Female – Middle-Part Straight Hair, balanced and symmetrical for product focus", "Female – Soft Waves (Below Cheek Level), natural movement without hiding frames", "Female – Low Bun, elegant and tidy, suitable for premium eyewear", "Female – Tucked-Behind-Ears, exposes temples clearly on both sides", "Female – Short Bob (Chin Length), stylish and frame-friendly", "Female – Long Straight Hair Slightly Pulled Back, soft and controlled look", "Female – Half-Up Half-Down, neat front with natural volume", "Female – Natural Texture, Controlled, realistic and clean without flyaways", "Female – Short Wavy Bob, trendy and light, keeps frames visible while adding softness"], skinTexture: ["Randomize", "Realistic (Default)", "Light freckles", "Post-Inflammatory Hyperpigmentation (PIH)", "Visible pores", "Mild acne scarring", "Sun spots (lentigines)"], colorGrading: ["Web Use", "Film Simulation", "Magazine"], clothing: ["Randomize", "1 Fashion lay upload (default)", "2 Casual Chic", "3 simple, well-fitting, plain black crew-neck t-shirt", "4 Smart Casual Office outfit", "5 Light Blazer, No Tie outfit", "6 Urban Casual outfit", "7 Weekend Smart Casual outfit"], environment: ["Randomize", "Reference upload (default)", "Clean Spacious Room", "Modern Office", "South East Asian Park", "Urban Walking Path (SEA)", "Midday Coffee Shop"], handProps: ["Randomize", "Take away coffee cup", "smartphone", "books", "Magazine", "small bag", "Wallet", "Arms Relaxed at Sides", "Hands Lightly Touching Thighs", "One Hand in Pocket, One Relaxed", "Hands Gently Clasped in Front", "One Hand Lightly Touching the Face"], aspectRatio: ["1:1", "3:2", "2:3", "4:3", "3:4", "16:9", "9:16"], imageSize: ["Default", "512px", "1K", "2K", "4K"], pose: ["Randomize", "Standing", "Sitting"], shotType: ["1. Extreme Close-Up, focuses on a single detail like eyes, lips, or glasses frame", "2. Close-Up, shows the full face clearly with strong emotion", "3. Headshot, head and shoulders for a clean, professional look", "4. Tight Head & Shoulders, slightly wider than a headshot, natural and commercial", "5. Bust-Up (Chest-Up), shows face, shoulders, and upper chest for lifestyle balance", "6. Waist-Up (Mid-Shot), includes hands and posture for expressive poses", "7. Three-Quarter Portrait, shows most of the body for stance and attitude", "8. Full-Body Portrait, captures the entire outfit and body language", "9. Eye-Level Portrait, natural and honest perspective", "10. High-Angle Portrait, softer and more approachable feeling", "11. Low-Angle Portrait, powerful and confident impression", "12. Profile Portrait, side view that feels elegant and artistic", "13. Three-Quarter Turn, body angled for a flattering and dynamic look", "14. Over-the-Shoulder Portrait, casual and candid mood", "15. Seated Portrait, calm, mature, and professional tone", "16. Environmental Portrait, shows the person within a real-life setting", "17. Straight-On Portrait, direct and confident presence", "18. Looking-Away Portrait, natural, lifestyle-focused, non-camera gaze"], facialExpression: ["Randomize", "Gazing left with slightly smile", "Gazing right with slightly smile", "Gazing left calm focus", "Gazing right calm focus", "Gazing left Soft Confidence", "Gazing right Soft Confidence", "Gazing left Natural Movement Pause", "Gazing right Natural Movement Pause"] }, mu = ["ethnicity", "gender", "age", "hairStyle", "skinTexture", "colorGrading", "clothing", "environment", "handProps", "aspectRatio", "imageSize", "pose", "shotType", "facialExpression"], Zt = ({ label: n, children: t }) => C.jsxs("div", { className: "flex flex-col space-y-1", children: [C.jsx("label", { className: "text-[10px] font-bold text-black uppercase tracking-tighter", children: n }), t] }), Wt = ({ value: n, onChange: t, options: o }) => C.jsx("select", { value: n, onChange: t, className: "bg-white border border-black text-black text-sm rounded-none focus:ring-0 focus:border-black block w-full p-2 transition-colors font-medium", children: o.map((a) => C.jsx("option", { value: a, children: a }, a)) }), xT = ({ attributes: n, onChange: t, onSubmit: o, isSubmitting: a, glassesCount: s, choices: c, customFields: d, customValues: g, onCustomChange: y }) => {
  const m = (v) => c != null && c[v] && Array.isArray(c[v]) && c[v].length > 0 ? c[v] : Tu[v] || [];
  return C.jsxs("div", { className: "space-y-4 bg-white p-4 border border-black", children: [C.jsx("h3", { className: "text-sm font-black text-black uppercase tracking-widest border-b border-black pb-2 mb-4", children: "Technical Specs" }), C.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [C.jsx(Zt, { label: "Identity", children: C.jsx(Wt, { value: n.ethnicity, onChange: (v) => t("ethnicity", v.target.value), options: m("ethnicity") }) }), C.jsx(Zt, { label: "Gender", children: C.jsx(Wt, { value: n.gender, onChange: (v) => t("gender", v.target.value), options: m("gender") }) }), C.jsx(Zt, { label: "Age", children: C.jsx(Wt, { value: n.age, onChange: (v) => t("age", v.target.value), options: m("age") }) }), C.jsx(Zt, { label: "Hair Style", children: C.jsx(Wt, { value: n.hairStyle, onChange: (v) => t("hairStyle", v.target.value), options: m("hairStyle") }) }), C.jsx(Zt, { label: "Skin Texture", children: C.jsx(Wt, { value: n.skinTexture, onChange: (v) => t("skinTexture", v.target.value), options: m("skinTexture") }) }), C.jsx(Zt, { label: "Color Grading", children: C.jsx(Wt, { value: n.colorGrading, onChange: (v) => t("colorGrading", v.target.value), options: m("colorGrading") }) }), C.jsx(Zt, { label: "Clothing Style", children: C.jsx(Wt, { value: n.clothing, onChange: (v) => t("clothing", v.target.value), options: m("clothing") }) }), C.jsx(Zt, { label: "Environment", children: C.jsx(Wt, { value: n.environment, onChange: (v) => t("environment", v.target.value), options: m("environment") }) }), C.jsx(Zt, { label: "Hand Props / Hand Posture", children: C.jsx(Wt, { value: n.handProps, onChange: (v) => t("handProps", v.target.value), options: m("handProps") }) }), C.jsx(Zt, { label: "Aspect Ratio", children: C.jsx(Wt, { value: n.aspectRatio, onChange: (v) => t("aspectRatio", v.target.value), options: m("aspectRatio") }) }), C.jsx(Zt, { label: "Image Size", children: C.jsx(Wt, { value: n.imageSize, onChange: (v) => t("imageSize", v.target.value), options: m("imageSize") }) }), C.jsx(Zt, { label: "Pose", children: C.jsx(Wt, { value: n.pose, onChange: (v) => t("pose", v.target.value), options: m("pose") }) }), C.jsx(Zt, { label: "Shot Type", children: C.jsx(Wt, { value: n.shotType, onChange: (v) => t("shotType", v.target.value), options: m("shotType") }) }), C.jsx(Zt, { label: "Expression", children: C.jsx(Wt, { value: n.facialExpression, onChange: (v) => t("facialExpression", v.target.value), options: m("facialExpression") }) }), (d || []).map((v) => {
    const _ = String(v.key || "").trim();
    if (!_) return null;
    const E = String(v.label || _), b = Array.isArray(v.options) ? v.options : [], D = b.includes("Randomize") ? b : ["Randomize", ...b], H = g && typeof g[_] == "string" ? g[_] : D[0] || "";
    return C.jsx(Zt, { label: E, children: C.jsx(Wt, { value: H, onChange: (P) => y == null ? void 0 : y(_, P.target.value), options: D }) }, _);
  })] }), C.jsx("button", { onClick: o, disabled: a, className: `w-full py-3 px-5 rounded-none text-white font-black text-sm uppercase tracking-widest transition-all ${a ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}`, children: a ? "Processing..." : s > 0 ? `Generate ${s} Variation${s !== 1 ? "s" : ""}` : "Upload Glasses to Start" })] });
};
var ws = { exports: {} }, Qh;
function bT() {
  if (Qh) return ws.exports;
  Qh = 1;
  const n = Oy(), t = ["Failed to fetch", "NetworkError when attempting to fetch resource.", "The Internet connection appears to be offline.", "Network request failed"];
  class o extends Error {
    constructor(g) {
      super(), g instanceof Error ? (this.originalError = g, { message: g } = g) : (this.originalError = new Error(g), this.originalError.stack = this.stack), this.name = "AbortError", this.message = g;
    }
  }
  const a = (d, g, y) => {
    const m = y.retries - (g - 1);
    return d.attemptNumber = g, d.retriesLeft = m, d;
  }, s = (d) => t.includes(d), c = (d, g) => new Promise((y, m) => {
    g = { onFailedAttempt: () => {
    }, retries: 10, ...g };
    const v = n.operation(g);
    v.attempt(async (_) => {
      try {
        y(await d(_));
      } catch (E) {
        if (!(E instanceof Error)) {
          m(new TypeError(`Non-error was thrown: "${E}". You should only throw errors.`));
          return;
        }
        if (E instanceof o) v.stop(), m(E.originalError);
        else if (E instanceof TypeError && !s(E.message)) v.stop(), m(E);
        else {
          a(E, _, g);
          try {
            await g.onFailedAttempt(E);
          } catch (b) {
            m(b);
            return;
          }
          v.retry(E) || m(v.mainError());
        }
      }
    });
  });
  return ws.exports = c, ws.exports.default = c, ws.exports.AbortError = o, ws.exports;
}
var Xy = bT();
const NT = la(Xy);
var wT = {};
let RT, MT;
function IT() {
  return { geminiUrl: RT, vertexUrl: MT };
}
function DT(n, t, o, a) {
  var s, c;
  if (!(n != null && n.baseUrl)) {
    const d = IT();
    return t ? (s = d.vertexUrl) !== null && s !== void 0 ? s : o : (c = d.geminiUrl) !== null && c !== void 0 ? c : a;
  }
  return n.baseUrl;
}
class Mi {
}
function le(n, t) {
  const o = /\{([^}]+)\}/g;
  return n.replace(o, (a, s) => {
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      const c = t[s];
      return c != null ? String(c) : "";
    } else throw new Error(`Key '${s}' not found in valueMap.`);
  });
}
function f(n, t, o) {
  for (let c = 0; c < t.length - 1; c++) {
    const d = t[c];
    if (d.endsWith("[]")) {
      const g = d.slice(0, -2);
      if (!(g in n)) if (Array.isArray(o)) n[g] = Array.from({ length: o.length }, () => ({}));
      else throw new Error(`Value must be a list given an array path ${d}`);
      if (Array.isArray(n[g])) {
        const y = n[g];
        if (Array.isArray(o)) for (let m = 0; m < y.length; m++) {
          const v = y[m];
          f(v, t.slice(c + 1), o[m]);
        }
        else for (const m of y) f(m, t.slice(c + 1), o);
      }
      return;
    } else if (d.endsWith("[0]")) {
      const g = d.slice(0, -3);
      g in n || (n[g] = [{}]);
      const y = n[g];
      f(y[0], t.slice(c + 1), o);
      return;
    }
    (!n[d] || typeof n[d] != "object") && (n[d] = {}), n = n[d];
  }
  const a = t[t.length - 1], s = n[a];
  if (s !== void 0) {
    if (!o || typeof o == "object" && Object.keys(o).length === 0 || o === s) return;
    if (typeof s == "object" && typeof o == "object" && s !== null && o !== null) Object.assign(s, o);
    else throw new Error(`Cannot set value for an existing key. Key: ${a}`);
  } else a === "_self" && typeof o == "object" && o !== null && !Array.isArray(o) ? Object.assign(n, o) : n[a] = o;
}
function u(n, t, o = void 0) {
  try {
    if (t.length === 1 && t[0] === "_self") return n;
    for (let a = 0; a < t.length; a++) {
      if (typeof n != "object" || n === null) return o;
      const s = t[a];
      if (s.endsWith("[]")) {
        const c = s.slice(0, -2);
        if (c in n) {
          const d = n[c];
          return Array.isArray(d) ? d.map((g) => u(g, t.slice(a + 1), o)) : o;
        } else return o;
      } else n = n[s];
    }
    return n;
  } catch (a) {
    if (a instanceof TypeError) return o;
    throw a;
  }
}
function UT(n, t) {
  for (const [o, a] of Object.entries(t)) {
    const s = o.split("."), c = a.split("."), d = /* @__PURE__ */ new Set();
    let g = -1;
    for (let y = 0; y < s.length; y++) if (s[y] === "*") {
      g = y;
      break;
    }
    if (g !== -1 && c.length > g) for (let y = g; y < c.length; y++) {
      const m = c[y];
      m !== "*" && !m.endsWith("[]") && !m.endsWith("[0]") && d.add(m);
    }
    Wf(n, s, c, 0, d);
  }
}
function Wf(n, t, o, a, s) {
  if (a >= t.length || typeof n != "object" || n === null) return;
  const c = t[a];
  if (c.endsWith("[]")) {
    const d = c.slice(0, -2), g = n;
    if (d in g && Array.isArray(g[d])) for (const y of g[d]) Wf(y, t, o, a + 1, s);
  } else if (c === "*") {
    if (typeof n == "object" && n !== null && !Array.isArray(n)) {
      const d = n, g = Object.keys(d).filter((m) => !m.startsWith("_") && !s.has(m)), y = {};
      for (const m of g) y[m] = d[m];
      for (const [m, v] of Object.entries(y)) {
        const _ = [];
        for (const E of o.slice(a)) E === "*" ? _.push(m) : _.push(E);
        f(d, _, v);
      }
      for (const m of g) delete d[m];
    }
  } else {
    const d = n;
    c in d && Wf(d[c], t, o, a + 1, s);
  }
}
function hd(n) {
  if (typeof n != "string") throw new Error("fromImageBytes must be a string");
  return n;
}
function LT(n) {
  const t = {}, o = u(n, ["operationName"]);
  o != null && f(t, ["operationName"], o);
  const a = u(n, ["resourceName"]);
  return a != null && f(t, ["_url", "resourceName"], a), t;
}
function kT(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["name"], o);
  const a = u(n, ["metadata"]);
  a != null && f(t, ["metadata"], a);
  const s = u(n, ["done"]);
  s != null && f(t, ["done"], s);
  const c = u(n, ["error"]);
  c != null && f(t, ["error"], c);
  const d = u(n, ["response", "generateVideoResponse"]);
  return d != null && f(t, ["response"], GT(d)), t;
}
function PT(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["name"], o);
  const a = u(n, ["metadata"]);
  a != null && f(t, ["metadata"], a);
  const s = u(n, ["done"]);
  s != null && f(t, ["done"], s);
  const c = u(n, ["error"]);
  c != null && f(t, ["error"], c);
  const d = u(n, ["response"]);
  return d != null && f(t, ["response"], OT(d)), t;
}
function GT(n) {
  const t = {}, o = u(n, ["generatedSamples"]);
  if (o != null) {
    let c = o;
    Array.isArray(c) && (c = c.map((d) => HT(d))), f(t, ["generatedVideos"], c);
  }
  const a = u(n, ["raiMediaFilteredCount"]);
  a != null && f(t, ["raiMediaFilteredCount"], a);
  const s = u(n, ["raiMediaFilteredReasons"]);
  return s != null && f(t, ["raiMediaFilteredReasons"], s), t;
}
function OT(n) {
  const t = {}, o = u(n, ["videos"]);
  if (o != null) {
    let c = o;
    Array.isArray(c) && (c = c.map((d) => BT(d))), f(t, ["generatedVideos"], c);
  }
  const a = u(n, ["raiMediaFilteredCount"]);
  a != null && f(t, ["raiMediaFilteredCount"], a);
  const s = u(n, ["raiMediaFilteredReasons"]);
  return s != null && f(t, ["raiMediaFilteredReasons"], s), t;
}
function HT(n) {
  const t = {}, o = u(n, ["video"]);
  return o != null && f(t, ["video"], YT(o)), t;
}
function BT(n) {
  const t = {}, o = u(n, ["_self"]);
  return o != null && f(t, ["video"], KT(o)), t;
}
function qT(n) {
  const t = {}, o = u(n, ["operationName"]);
  return o != null && f(t, ["_url", "operationName"], o), t;
}
function VT(n) {
  const t = {}, o = u(n, ["operationName"]);
  return o != null && f(t, ["_url", "operationName"], o), t;
}
function zT(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["name"], o);
  const a = u(n, ["metadata"]);
  a != null && f(t, ["metadata"], a);
  const s = u(n, ["done"]);
  s != null && f(t, ["done"], s);
  const c = u(n, ["error"]);
  c != null && f(t, ["error"], c);
  const d = u(n, ["response"]);
  return d != null && f(t, ["response"], FT(d)), t;
}
function FT(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["parent"]);
  a != null && f(t, ["parent"], a);
  const s = u(n, ["documentName"]);
  return s != null && f(t, ["documentName"], s), t;
}
function Qy(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["name"], o);
  const a = u(n, ["metadata"]);
  a != null && f(t, ["metadata"], a);
  const s = u(n, ["done"]);
  s != null && f(t, ["done"], s);
  const c = u(n, ["error"]);
  c != null && f(t, ["error"], c);
  const d = u(n, ["response"]);
  return d != null && f(t, ["response"], JT(d)), t;
}
function JT(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["parent"]);
  a != null && f(t, ["parent"], a);
  const s = u(n, ["documentName"]);
  return s != null && f(t, ["documentName"], s), t;
}
function YT(n) {
  const t = {}, o = u(n, ["uri"]);
  o != null && f(t, ["uri"], o);
  const a = u(n, ["encodedVideo"]);
  a != null && f(t, ["videoBytes"], hd(a));
  const s = u(n, ["encoding"]);
  return s != null && f(t, ["mimeType"], s), t;
}
function KT(n) {
  const t = {}, o = u(n, ["gcsUri"]);
  o != null && f(t, ["uri"], o);
  const a = u(n, ["bytesBase64Encoded"]);
  a != null && f(t, ["videoBytes"], hd(a));
  const s = u(n, ["mimeType"]);
  return s != null && f(t, ["mimeType"], s), t;
}
var Zh;
(function(n) {
  n.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED", n.OUTCOME_OK = "OUTCOME_OK", n.OUTCOME_FAILED = "OUTCOME_FAILED", n.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED";
})(Zh || (Zh = {}));
var Wh;
(function(n) {
  n.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED", n.PYTHON = "PYTHON";
})(Wh || (Wh = {}));
var jh;
(function(n) {
  n.SCHEDULING_UNSPECIFIED = "SCHEDULING_UNSPECIFIED", n.SILENT = "SILENT", n.WHEN_IDLE = "WHEN_IDLE", n.INTERRUPT = "INTERRUPT";
})(jh || (jh = {}));
var To;
(function(n) {
  n.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED", n.STRING = "STRING", n.NUMBER = "NUMBER", n.INTEGER = "INTEGER", n.BOOLEAN = "BOOLEAN", n.ARRAY = "ARRAY", n.OBJECT = "OBJECT", n.NULL = "NULL";
})(To || (To = {}));
var eg;
(function(n) {
  n.PHISH_BLOCK_THRESHOLD_UNSPECIFIED = "PHISH_BLOCK_THRESHOLD_UNSPECIFIED", n.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", n.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", n.BLOCK_HIGH_AND_ABOVE = "BLOCK_HIGH_AND_ABOVE", n.BLOCK_HIGHER_AND_ABOVE = "BLOCK_HIGHER_AND_ABOVE", n.BLOCK_VERY_HIGH_AND_ABOVE = "BLOCK_VERY_HIGH_AND_ABOVE", n.BLOCK_ONLY_EXTREMELY_HIGH = "BLOCK_ONLY_EXTREMELY_HIGH";
})(eg || (eg = {}));
var tg;
(function(n) {
  n.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED", n.NO_AUTH = "NO_AUTH", n.API_KEY_AUTH = "API_KEY_AUTH", n.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH", n.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH", n.OAUTH = "OAUTH", n.OIDC_AUTH = "OIDC_AUTH";
})(tg || (tg = {}));
var ng;
(function(n) {
  n.HTTP_IN_UNSPECIFIED = "HTTP_IN_UNSPECIFIED", n.HTTP_IN_QUERY = "HTTP_IN_QUERY", n.HTTP_IN_HEADER = "HTTP_IN_HEADER", n.HTTP_IN_PATH = "HTTP_IN_PATH", n.HTTP_IN_BODY = "HTTP_IN_BODY", n.HTTP_IN_COOKIE = "HTTP_IN_COOKIE";
})(ng || (ng = {}));
var ig;
(function(n) {
  n.API_SPEC_UNSPECIFIED = "API_SPEC_UNSPECIFIED", n.SIMPLE_SEARCH = "SIMPLE_SEARCH", n.ELASTIC_SEARCH = "ELASTIC_SEARCH";
})(ig || (ig = {}));
var og;
(function(n) {
  n.UNSPECIFIED = "UNSPECIFIED", n.BLOCKING = "BLOCKING", n.NON_BLOCKING = "NON_BLOCKING";
})(og || (og = {}));
var lg;
(function(n) {
  n.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", n.MODE_DYNAMIC = "MODE_DYNAMIC";
})(lg || (lg = {}));
var ag;
(function(n) {
  n.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", n.AUTO = "AUTO", n.ANY = "ANY", n.NONE = "NONE", n.VALIDATED = "VALIDATED";
})(ag || (ag = {}));
var sg;
(function(n) {
  n.THINKING_LEVEL_UNSPECIFIED = "THINKING_LEVEL_UNSPECIFIED", n.LOW = "LOW", n.MEDIUM = "MEDIUM", n.HIGH = "HIGH", n.MINIMAL = "MINIMAL";
})(sg || (sg = {}));
var rg;
(function(n) {
  n.DONT_ALLOW = "DONT_ALLOW", n.ALLOW_ADULT = "ALLOW_ADULT", n.ALLOW_ALL = "ALLOW_ALL";
})(rg || (rg = {}));
var ug;
(function(n) {
  n.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", n.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", n.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", n.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", n.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT", n.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY", n.HARM_CATEGORY_IMAGE_HATE = "HARM_CATEGORY_IMAGE_HATE", n.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT", n.HARM_CATEGORY_IMAGE_HARASSMENT = "HARM_CATEGORY_IMAGE_HARASSMENT", n.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT", n.HARM_CATEGORY_JAILBREAK = "HARM_CATEGORY_JAILBREAK";
})(ug || (ug = {}));
var cg;
(function(n) {
  n.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED", n.SEVERITY = "SEVERITY", n.PROBABILITY = "PROBABILITY";
})(cg || (cg = {}));
var fg;
(function(n) {
  n.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", n.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", n.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", n.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", n.BLOCK_NONE = "BLOCK_NONE", n.OFF = "OFF";
})(fg || (fg = {}));
var dg;
(function(n) {
  n.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", n.STOP = "STOP", n.MAX_TOKENS = "MAX_TOKENS", n.SAFETY = "SAFETY", n.RECITATION = "RECITATION", n.LANGUAGE = "LANGUAGE", n.OTHER = "OTHER", n.BLOCKLIST = "BLOCKLIST", n.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", n.SPII = "SPII", n.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", n.IMAGE_SAFETY = "IMAGE_SAFETY", n.UNEXPECTED_TOOL_CALL = "UNEXPECTED_TOOL_CALL", n.IMAGE_PROHIBITED_CONTENT = "IMAGE_PROHIBITED_CONTENT", n.NO_IMAGE = "NO_IMAGE", n.IMAGE_RECITATION = "IMAGE_RECITATION", n.IMAGE_OTHER = "IMAGE_OTHER";
})(dg || (dg = {}));
var pg;
(function(n) {
  n.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", n.NEGLIGIBLE = "NEGLIGIBLE", n.LOW = "LOW", n.MEDIUM = "MEDIUM", n.HIGH = "HIGH";
})(pg || (pg = {}));
var mg;
(function(n) {
  n.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED", n.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE", n.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW", n.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM", n.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH";
})(mg || (mg = {}));
var hg;
(function(n) {
  n.URL_RETRIEVAL_STATUS_UNSPECIFIED = "URL_RETRIEVAL_STATUS_UNSPECIFIED", n.URL_RETRIEVAL_STATUS_SUCCESS = "URL_RETRIEVAL_STATUS_SUCCESS", n.URL_RETRIEVAL_STATUS_ERROR = "URL_RETRIEVAL_STATUS_ERROR", n.URL_RETRIEVAL_STATUS_PAYWALL = "URL_RETRIEVAL_STATUS_PAYWALL", n.URL_RETRIEVAL_STATUS_UNSAFE = "URL_RETRIEVAL_STATUS_UNSAFE";
})(hg || (hg = {}));
var gg;
(function(n) {
  n.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", n.SAFETY = "SAFETY", n.OTHER = "OTHER", n.BLOCKLIST = "BLOCKLIST", n.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", n.IMAGE_SAFETY = "IMAGE_SAFETY", n.MODEL_ARMOR = "MODEL_ARMOR", n.JAILBREAK = "JAILBREAK";
})(gg || (gg = {}));
var yg;
(function(n) {
  n.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED", n.ON_DEMAND = "ON_DEMAND", n.ON_DEMAND_PRIORITY = "ON_DEMAND_PRIORITY", n.ON_DEMAND_FLEX = "ON_DEMAND_FLEX", n.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT";
})(yg || (yg = {}));
var Cu;
(function(n) {
  n.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", n.TEXT = "TEXT", n.IMAGE = "IMAGE", n.AUDIO = "AUDIO";
})(Cu || (Cu = {}));
var vg;
(function(n) {
  n.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", n.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", n.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", n.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH";
})(vg || (vg = {}));
var Sg;
(function(n) {
  n.TUNING_MODE_UNSPECIFIED = "TUNING_MODE_UNSPECIFIED", n.TUNING_MODE_FULL = "TUNING_MODE_FULL", n.TUNING_MODE_PEFT_ADAPTER = "TUNING_MODE_PEFT_ADAPTER";
})(Sg || (Sg = {}));
var Tg;
(function(n) {
  n.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED", n.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE", n.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO", n.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR", n.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT", n.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN", n.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO";
})(Tg || (Tg = {}));
var jf;
(function(n) {
  n.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED", n.JOB_STATE_QUEUED = "JOB_STATE_QUEUED", n.JOB_STATE_PENDING = "JOB_STATE_PENDING", n.JOB_STATE_RUNNING = "JOB_STATE_RUNNING", n.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED", n.JOB_STATE_FAILED = "JOB_STATE_FAILED", n.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING", n.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED", n.JOB_STATE_PAUSED = "JOB_STATE_PAUSED", n.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED", n.JOB_STATE_UPDATING = "JOB_STATE_UPDATING", n.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED";
})(jf || (jf = {}));
var Eg;
(function(n) {
  n.TUNING_JOB_STATE_UNSPECIFIED = "TUNING_JOB_STATE_UNSPECIFIED", n.TUNING_JOB_STATE_WAITING_FOR_QUOTA = "TUNING_JOB_STATE_WAITING_FOR_QUOTA", n.TUNING_JOB_STATE_PROCESSING_DATASET = "TUNING_JOB_STATE_PROCESSING_DATASET", n.TUNING_JOB_STATE_WAITING_FOR_CAPACITY = "TUNING_JOB_STATE_WAITING_FOR_CAPACITY", n.TUNING_JOB_STATE_TUNING = "TUNING_JOB_STATE_TUNING", n.TUNING_JOB_STATE_POST_PROCESSING = "TUNING_JOB_STATE_POST_PROCESSING";
})(Eg || (Eg = {}));
var _g;
(function(n) {
  n.AGGREGATION_METRIC_UNSPECIFIED = "AGGREGATION_METRIC_UNSPECIFIED", n.AVERAGE = "AVERAGE", n.MODE = "MODE", n.STANDARD_DEVIATION = "STANDARD_DEVIATION", n.VARIANCE = "VARIANCE", n.MINIMUM = "MINIMUM", n.MAXIMUM = "MAXIMUM", n.MEDIAN = "MEDIAN", n.PERCENTILE_P90 = "PERCENTILE_P90", n.PERCENTILE_P95 = "PERCENTILE_P95", n.PERCENTILE_P99 = "PERCENTILE_P99";
})(_g || (_g = {}));
var Cg;
(function(n) {
  n.PAIRWISE_CHOICE_UNSPECIFIED = "PAIRWISE_CHOICE_UNSPECIFIED", n.BASELINE = "BASELINE", n.CANDIDATE = "CANDIDATE", n.TIE = "TIE";
})(Cg || (Cg = {}));
var Ag;
(function(n) {
  n.TUNING_TASK_UNSPECIFIED = "TUNING_TASK_UNSPECIFIED", n.TUNING_TASK_I2V = "TUNING_TASK_I2V", n.TUNING_TASK_T2V = "TUNING_TASK_T2V", n.TUNING_TASK_R2V = "TUNING_TASK_R2V";
})(Ag || (Ag = {}));
var xg;
(function(n) {
  n.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", n.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", n.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", n.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH", n.MEDIA_RESOLUTION_ULTRA_HIGH = "MEDIA_RESOLUTION_ULTRA_HIGH";
})(xg || (xg = {}));
var ed;
(function(n) {
  n.COLLECTION = "COLLECTION";
})(ed || (ed = {}));
var bg;
(function(n) {
  n.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED", n.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY", n.BALANCED = "BALANCED", n.PRIORITIZE_COST = "PRIORITIZE_COST";
})(bg || (bg = {}));
var Ng;
(function(n) {
  n.ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED", n.ENVIRONMENT_BROWSER = "ENVIRONMENT_BROWSER";
})(Ng || (Ng = {}));
var wg;
(function(n) {
  n.PROMINENT_PEOPLE_UNSPECIFIED = "PROMINENT_PEOPLE_UNSPECIFIED", n.ALLOW_PROMINENT_PEOPLE = "ALLOW_PROMINENT_PEOPLE", n.BLOCK_PROMINENT_PEOPLE = "BLOCK_PROMINENT_PEOPLE";
})(wg || (wg = {}));
var Au;
(function(n) {
  n.PREDICT = "PREDICT", n.EMBED_CONTENT = "EMBED_CONTENT";
})(Au || (Au = {}));
var Rg;
(function(n) {
  n.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", n.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", n.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", n.BLOCK_NONE = "BLOCK_NONE";
})(Rg || (Rg = {}));
var Mg;
(function(n) {
  n.auto = "auto", n.en = "en", n.ja = "ja", n.ko = "ko", n.hi = "hi", n.zh = "zh", n.pt = "pt", n.es = "es";
})(Mg || (Mg = {}));
var Ig;
(function(n) {
  n.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT", n.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED", n.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND", n.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND", n.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC";
})(Ig || (Ig = {}));
var Dg;
(function(n) {
  n.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT", n.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY", n.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE", n.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH";
})(Dg || (Dg = {}));
var Ug;
(function(n) {
  n.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT", n.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON", n.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL", n.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT";
})(Ug || (Ug = {}));
var Lg;
(function(n) {
  n.EDIT_MODE_DEFAULT = "EDIT_MODE_DEFAULT", n.EDIT_MODE_INPAINT_REMOVAL = "EDIT_MODE_INPAINT_REMOVAL", n.EDIT_MODE_INPAINT_INSERTION = "EDIT_MODE_INPAINT_INSERTION", n.EDIT_MODE_OUTPAINT = "EDIT_MODE_OUTPAINT", n.EDIT_MODE_CONTROLLED_EDITING = "EDIT_MODE_CONTROLLED_EDITING", n.EDIT_MODE_STYLE = "EDIT_MODE_STYLE", n.EDIT_MODE_BGSWAP = "EDIT_MODE_BGSWAP", n.EDIT_MODE_PRODUCT_IMAGE = "EDIT_MODE_PRODUCT_IMAGE";
})(Lg || (Lg = {}));
var kg;
(function(n) {
  n.FOREGROUND = "FOREGROUND", n.BACKGROUND = "BACKGROUND", n.PROMPT = "PROMPT", n.SEMANTIC = "SEMANTIC", n.INTERACTIVE = "INTERACTIVE";
})(kg || (kg = {}));
var Pg;
(function(n) {
  n.ASSET = "ASSET", n.STYLE = "STYLE";
})(Pg || (Pg = {}));
var Gg;
(function(n) {
  n.INSERT = "INSERT", n.REMOVE = "REMOVE", n.REMOVE_STATIC = "REMOVE_STATIC", n.OUTPAINT = "OUTPAINT";
})(Gg || (Gg = {}));
var Og;
(function(n) {
  n.OPTIMIZED = "OPTIMIZED", n.LOSSLESS = "LOSSLESS";
})(Og || (Og = {}));
var Hg;
(function(n) {
  n.SUPERVISED_FINE_TUNING = "SUPERVISED_FINE_TUNING", n.PREFERENCE_TUNING = "PREFERENCE_TUNING", n.DISTILLATION = "DISTILLATION";
})(Hg || (Hg = {}));
var Bg;
(function(n) {
  n.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", n.STATE_PENDING = "STATE_PENDING", n.STATE_ACTIVE = "STATE_ACTIVE", n.STATE_FAILED = "STATE_FAILED";
})(Bg || (Bg = {}));
var qg;
(function(n) {
  n.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", n.PROCESSING = "PROCESSING", n.ACTIVE = "ACTIVE", n.FAILED = "FAILED";
})(qg || (qg = {}));
var Vg;
(function(n) {
  n.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED", n.UPLOADED = "UPLOADED", n.GENERATED = "GENERATED", n.REGISTERED = "REGISTERED";
})(Vg || (Vg = {}));
var zg;
(function(n) {
  n.TURN_COMPLETE_REASON_UNSPECIFIED = "TURN_COMPLETE_REASON_UNSPECIFIED", n.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", n.RESPONSE_REJECTED = "RESPONSE_REJECTED", n.NEED_MORE_INPUT = "NEED_MORE_INPUT";
})(zg || (zg = {}));
var Fg;
(function(n) {
  n.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", n.TEXT = "TEXT", n.IMAGE = "IMAGE", n.VIDEO = "VIDEO", n.AUDIO = "AUDIO", n.DOCUMENT = "DOCUMENT";
})(Fg || (Fg = {}));
var Jg;
(function(n) {
  n.VAD_SIGNAL_TYPE_UNSPECIFIED = "VAD_SIGNAL_TYPE_UNSPECIFIED", n.VAD_SIGNAL_TYPE_SOS = "VAD_SIGNAL_TYPE_SOS", n.VAD_SIGNAL_TYPE_EOS = "VAD_SIGNAL_TYPE_EOS";
})(Jg || (Jg = {}));
var Yg;
(function(n) {
  n.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED", n.ACTIVITY_START = "ACTIVITY_START", n.ACTIVITY_END = "ACTIVITY_END";
})(Yg || (Yg = {}));
var Kg;
(function(n) {
  n.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED", n.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH", n.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW";
})(Kg || (Kg = {}));
var $g;
(function(n) {
  n.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED", n.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH", n.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW";
})($g || ($g = {}));
var Xg;
(function(n) {
  n.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED", n.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS", n.NO_INTERRUPTION = "NO_INTERRUPTION";
})(Xg || (Xg = {}));
var Qg;
(function(n) {
  n.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED", n.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY", n.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT";
})(Qg || (Qg = {}));
var Zg;
(function(n) {
  n.SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED", n.C_MAJOR_A_MINOR = "C_MAJOR_A_MINOR", n.D_FLAT_MAJOR_B_FLAT_MINOR = "D_FLAT_MAJOR_B_FLAT_MINOR", n.D_MAJOR_B_MINOR = "D_MAJOR_B_MINOR", n.E_FLAT_MAJOR_C_MINOR = "E_FLAT_MAJOR_C_MINOR", n.E_MAJOR_D_FLAT_MINOR = "E_MAJOR_D_FLAT_MINOR", n.F_MAJOR_D_MINOR = "F_MAJOR_D_MINOR", n.G_FLAT_MAJOR_E_FLAT_MINOR = "G_FLAT_MAJOR_E_FLAT_MINOR", n.G_MAJOR_E_MINOR = "G_MAJOR_E_MINOR", n.A_FLAT_MAJOR_F_MINOR = "A_FLAT_MAJOR_F_MINOR", n.A_MAJOR_G_FLAT_MINOR = "A_MAJOR_G_FLAT_MINOR", n.B_FLAT_MAJOR_G_MINOR = "B_FLAT_MAJOR_G_MINOR", n.B_MAJOR_A_FLAT_MINOR = "B_MAJOR_A_FLAT_MINOR";
})(Zg || (Zg = {}));
var Wg;
(function(n) {
  n.MUSIC_GENERATION_MODE_UNSPECIFIED = "MUSIC_GENERATION_MODE_UNSPECIFIED", n.QUALITY = "QUALITY", n.DIVERSITY = "DIVERSITY", n.VOCALIZATION = "VOCALIZATION";
})(Wg || (Wg = {}));
var ta;
(function(n) {
  n.PLAYBACK_CONTROL_UNSPECIFIED = "PLAYBACK_CONTROL_UNSPECIFIED", n.PLAY = "PLAY", n.PAUSE = "PAUSE", n.STOP = "STOP", n.RESET_CONTEXT = "RESET_CONTEXT";
})(ta || (ta = {}));
class td {
  constructor(t) {
    const o = {};
    for (const a of t.headers.entries()) o[a[0]] = a[1];
    this.headers = o, this.responseInternal = t;
  }
  json() {
    return this.responseInternal.json();
  }
}
class Rs {
  get text() {
    var t, o, a, s, c, d, g, y;
    if (((s = (a = (o = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || o === void 0 ? void 0 : o.content) === null || a === void 0 ? void 0 : a.parts) === null || s === void 0 ? void 0 : s.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning text from the first one.");
    let m = "", v = false;
    const _ = [];
    for (const E of (y = (g = (d = (c = this.candidates) === null || c === void 0 ? void 0 : c[0]) === null || d === void 0 ? void 0 : d.content) === null || g === void 0 ? void 0 : g.parts) !== null && y !== void 0 ? y : []) {
      for (const [b, D] of Object.entries(E)) b !== "text" && b !== "thought" && b !== "thoughtSignature" && (D !== null || D !== void 0) && _.push(b);
      if (typeof E.text == "string") {
        if (typeof E.thought == "boolean" && E.thought) continue;
        v = true, m += E.text;
      }
    }
    return _.length > 0 && console.warn(`there are non-text parts ${_} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), v ? m : void 0;
  }
  get data() {
    var t, o, a, s, c, d, g, y;
    if (((s = (a = (o = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || o === void 0 ? void 0 : o.content) === null || a === void 0 ? void 0 : a.parts) === null || s === void 0 ? void 0 : s.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning data from the first one.");
    let m = "";
    const v = [];
    for (const _ of (y = (g = (d = (c = this.candidates) === null || c === void 0 ? void 0 : c[0]) === null || d === void 0 ? void 0 : d.content) === null || g === void 0 ? void 0 : g.parts) !== null && y !== void 0 ? y : []) {
      for (const [E, b] of Object.entries(_)) E !== "inlineData" && (b !== null || b !== void 0) && v.push(E);
      _.inlineData && typeof _.inlineData.data == "string" && (m += atob(_.inlineData.data));
    }
    return v.length > 0 && console.warn(`there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), m.length > 0 ? btoa(m) : void 0;
  }
  get functionCalls() {
    var t, o, a, s, c, d, g, y;
    if (((s = (a = (o = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || o === void 0 ? void 0 : o.content) === null || a === void 0 ? void 0 : a.parts) === null || s === void 0 ? void 0 : s.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning function calls from the first one.");
    const m = (y = (g = (d = (c = this.candidates) === null || c === void 0 ? void 0 : c[0]) === null || d === void 0 ? void 0 : d.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter((v) => v.functionCall).map((v) => v.functionCall).filter((v) => v !== void 0);
    if ((m == null ? void 0 : m.length) !== 0) return m;
  }
  get executableCode() {
    var t, o, a, s, c, d, g, y, m;
    if (((s = (a = (o = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || o === void 0 ? void 0 : o.content) === null || a === void 0 ? void 0 : a.parts) === null || s === void 0 ? void 0 : s.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning executable code from the first one.");
    const v = (y = (g = (d = (c = this.candidates) === null || c === void 0 ? void 0 : c[0]) === null || d === void 0 ? void 0 : d.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter((_) => _.executableCode).map((_) => _.executableCode).filter((_) => _ !== void 0);
    if ((v == null ? void 0 : v.length) !== 0) return (m = v == null ? void 0 : v[0]) === null || m === void 0 ? void 0 : m.code;
  }
  get codeExecutionResult() {
    var t, o, a, s, c, d, g, y, m;
    if (((s = (a = (o = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || o === void 0 ? void 0 : o.content) === null || a === void 0 ? void 0 : a.parts) === null || s === void 0 ? void 0 : s.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning code execution result from the first one.");
    const v = (y = (g = (d = (c = this.candidates) === null || c === void 0 ? void 0 : c[0]) === null || d === void 0 ? void 0 : d.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter((_) => _.codeExecutionResult).map((_) => _.codeExecutionResult).filter((_) => _ !== void 0);
    if ((v == null ? void 0 : v.length) !== 0) return (m = v == null ? void 0 : v[0]) === null || m === void 0 ? void 0 : m.output;
  }
}
class jg {
}
class ey {
}
class $T {
}
class XT {
}
class QT {
}
class ZT {
}
class ty {
}
class ny {
}
class iy {
}
class WT {
}
class xu {
  _fromAPIResponse({ apiResponse: t, _isVertexAI: o }) {
    const a = new xu();
    let s;
    const c = t;
    return o ? s = PT(c) : s = kT(c), Object.assign(a, s), a;
  }
}
class oy {
}
class ly {
}
class ay {
}
class sy {
}
class jT {
}
class eE {
}
class tE {
}
class gd {
  _fromAPIResponse({ apiResponse: t, _isVertexAI: o }) {
    const a = new gd(), c = zT(t);
    return Object.assign(a, c), a;
  }
}
class nE {
}
class iE {
}
class oE {
}
class lE {
}
class ry {
}
class aE {
  get text() {
    var t, o, a;
    let s = "", c = false;
    const d = [];
    for (const g of (a = (o = (t = this.serverContent) === null || t === void 0 ? void 0 : t.modelTurn) === null || o === void 0 ? void 0 : o.parts) !== null && a !== void 0 ? a : []) {
      for (const [y, m] of Object.entries(g)) y !== "text" && y !== "thought" && m !== null && d.push(y);
      if (typeof g.text == "string") {
        if (typeof g.thought == "boolean" && g.thought) continue;
        c = true, s += g.text;
      }
    }
    return d.length > 0 && console.warn(`there are non-text parts ${d} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), c ? s : void 0;
  }
  get data() {
    var t, o, a;
    let s = "";
    const c = [];
    for (const d of (a = (o = (t = this.serverContent) === null || t === void 0 ? void 0 : t.modelTurn) === null || o === void 0 ? void 0 : o.parts) !== null && a !== void 0 ? a : []) {
      for (const [g, y] of Object.entries(d)) g !== "inlineData" && y !== null && c.push(g);
      d.inlineData && typeof d.inlineData.data == "string" && (s += atob(d.inlineData.data));
    }
    return c.length > 0 && console.warn(`there are non-data parts ${c} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), s.length > 0 ? btoa(s) : void 0;
  }
}
class sE {
  get audioChunk() {
    if (this.serverContent && this.serverContent.audioChunks && this.serverContent.audioChunks.length > 0) return this.serverContent.audioChunks[0];
  }
}
class yd {
  _fromAPIResponse({ apiResponse: t, _isVertexAI: o }) {
    const a = new yd(), c = Qy(t);
    return Object.assign(a, c), a;
  }
}
function qe(n, t) {
  if (!t || typeof t != "string") throw new Error("model is required and must be a string");
  if (t.includes("..") || t.includes("?") || t.includes("&")) throw new Error("invalid model parameter");
  if (n.isVertexAI()) {
    if (t.startsWith("publishers/") || t.startsWith("projects/") || t.startsWith("models/")) return t;
    if (t.indexOf("/") >= 0) {
      const o = t.split("/", 2);
      return `publishers/${o[0]}/models/${o[1]}`;
    } else return `publishers/google/models/${t}`;
  } else return t.startsWith("models/") || t.startsWith("tunedModels/") ? t : `models/${t}`;
}
function Zy(n, t) {
  const o = qe(n, t);
  return o ? o.startsWith("publishers/") && n.isVertexAI() ? `projects/${n.getProject()}/locations/${n.getLocation()}/${o}` : o.startsWith("models/") && n.isVertexAI() ? `projects/${n.getProject()}/locations/${n.getLocation()}/publishers/google/${o}` : o : "";
}
function Wy(n) {
  return Array.isArray(n) ? n.map((t) => bu(t)) : [bu(n)];
}
function bu(n) {
  if (typeof n == "object" && n !== null) return n;
  throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof n}`);
}
function jy(n) {
  const t = bu(n);
  if (t.mimeType && t.mimeType.startsWith("image/")) return t;
  throw new Error(`Unsupported mime type: ${t.mimeType}`);
}
function ev(n) {
  const t = bu(n);
  if (t.mimeType && t.mimeType.startsWith("audio/")) return t;
  throw new Error(`Unsupported mime type: ${t.mimeType}`);
}
function uy(n) {
  if (n == null) throw new Error("PartUnion is required");
  if (typeof n == "object") return n;
  if (typeof n == "string") return { text: n };
  throw new Error(`Unsupported part type: ${typeof n}`);
}
function tv(n) {
  if (n == null || Array.isArray(n) && n.length === 0) throw new Error("PartListUnion is required");
  return Array.isArray(n) ? n.map((t) => uy(t)) : [uy(n)];
}
function nd(n) {
  return n != null && typeof n == "object" && "parts" in n && Array.isArray(n.parts);
}
function cy(n) {
  return n != null && typeof n == "object" && "functionCall" in n;
}
function fy(n) {
  return n != null && typeof n == "object" && "functionResponse" in n;
}
function xt(n) {
  if (n == null) throw new Error("ContentUnion is required");
  return nd(n) ? n : { role: "user", parts: tv(n) };
}
function vd(n, t) {
  if (!t) return [];
  if (n.isVertexAI() && Array.isArray(t)) return t.flatMap((o) => {
    const a = xt(o);
    return a.parts && a.parts.length > 0 && a.parts[0].text !== void 0 ? [a.parts[0].text] : [];
  });
  if (n.isVertexAI()) {
    const o = xt(t);
    return o.parts && o.parts.length > 0 && o.parts[0].text !== void 0 ? [o.parts[0].text] : [];
  }
  return Array.isArray(t) ? t.map((o) => xt(o)) : [xt(t)];
}
function Tn(n) {
  if (n == null || Array.isArray(n) && n.length === 0) throw new Error("contents are required");
  if (!Array.isArray(n)) {
    if (cy(n) || fy(n)) throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");
    return [xt(n)];
  }
  const t = [], o = [], a = nd(n[0]);
  for (const s of n) {
    const c = nd(s);
    if (c != a) throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");
    if (c) t.push(s);
    else {
      if (cy(s) || fy(s)) throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");
      o.push(s);
    }
  }
  return a || t.push({ role: "user", parts: tv(o) }), t;
}
function rE(n, t) {
  n.includes("null") && (t.nullable = true);
  const o = n.filter((a) => a !== "null");
  if (o.length === 1) t.type = Object.values(To).includes(o[0].toUpperCase()) ? o[0].toUpperCase() : To.TYPE_UNSPECIFIED;
  else {
    t.anyOf = [];
    for (const a of o) t.anyOf.push({ type: Object.values(To).includes(a.toUpperCase()) ? a.toUpperCase() : To.TYPE_UNSPECIFIED });
  }
}
function ia(n) {
  const t = {}, o = ["items"], a = ["anyOf"], s = ["properties"];
  if (n.type && n.anyOf) throw new Error("type and anyOf cannot be both populated.");
  const c = n.anyOf;
  c != null && c.length == 2 && (c[0].type === "null" ? (t.nullable = true, n = c[1]) : c[1].type === "null" && (t.nullable = true, n = c[0])), n.type instanceof Array && rE(n.type, t);
  for (const [d, g] of Object.entries(n)) if (g != null) if (d == "type") {
    if (g === "null") throw new Error("type: null can not be the only possible type for the field.");
    if (g instanceof Array) continue;
    t.type = Object.values(To).includes(g.toUpperCase()) ? g.toUpperCase() : To.TYPE_UNSPECIFIED;
  } else if (o.includes(d)) t[d] = ia(g);
  else if (a.includes(d)) {
    const y = [];
    for (const m of g) {
      if (m.type == "null") {
        t.nullable = true;
        continue;
      }
      y.push(ia(m));
    }
    t[d] = y;
  } else if (s.includes(d)) {
    const y = {};
    for (const [m, v] of Object.entries(g)) y[m] = ia(v);
    t[d] = y;
  } else {
    if (d === "additionalProperties") continue;
    t[d] = g;
  }
  return t;
}
function Sd(n) {
  return ia(n);
}
function Td(n) {
  if (typeof n == "object") return n;
  if (typeof n == "string") return { voiceConfig: { prebuiltVoiceConfig: { voiceName: n } } };
  throw new Error(`Unsupported speechConfig type: ${typeof n}`);
}
function Ed(n) {
  if ("multiSpeakerVoiceConfig" in n) throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");
  return n;
}
function aa(n) {
  if (n.functionDeclarations) for (const t of n.functionDeclarations) t.parameters && (Object.keys(t.parameters).includes("$schema") ? t.parametersJsonSchema || (t.parametersJsonSchema = t.parameters, delete t.parameters) : t.parameters = ia(t.parameters)), t.response && (Object.keys(t.response).includes("$schema") ? t.responseJsonSchema || (t.responseJsonSchema = t.response, delete t.response) : t.response = ia(t.response));
  return n;
}
function sa(n) {
  if (n == null) throw new Error("tools is required");
  if (!Array.isArray(n)) throw new Error("tools is required and must be an array of Tools");
  const t = [];
  for (const o of n) t.push(o);
  return t;
}
function uE(n, t, o, a = 1) {
  const s = !t.startsWith(`${o}/`) && t.split("/").length === a;
  return n.isVertexAI() ? t.startsWith("projects/") ? t : t.startsWith("locations/") ? `projects/${n.getProject()}/${t}` : t.startsWith(`${o}/`) ? `projects/${n.getProject()}/locations/${n.getLocation()}/${t}` : s ? `projects/${n.getProject()}/locations/${n.getLocation()}/${o}/${t}` : t : s ? `${o}/${t}` : t;
}
function Ii(n, t) {
  if (typeof t != "string") throw new Error("name must be a string");
  return uE(n, t, "cachedContents");
}
function nv(n) {
  switch (n) {
    case "STATE_UNSPECIFIED":
      return "JOB_STATE_UNSPECIFIED";
    case "CREATING":
      return "JOB_STATE_RUNNING";
    case "ACTIVE":
      return "JOB_STATE_SUCCEEDED";
    case "FAILED":
      return "JOB_STATE_FAILED";
    default:
      return n;
  }
}
function Eo(n) {
  return hd(n);
}
function cE(n) {
  return n != null && typeof n == "object" && "name" in n;
}
function fE(n) {
  return n != null && typeof n == "object" && "video" in n;
}
function dE(n) {
  return n != null && typeof n == "object" && "uri" in n;
}
function iv(n) {
  var t;
  let o;
  if (cE(n) && (o = n.name), !(dE(n) && (o = n.uri, o === void 0)) && !(fE(n) && (o = (t = n.video) === null || t === void 0 ? void 0 : t.uri, o === void 0))) {
    if (typeof n == "string" && (o = n), o === void 0) throw new Error("Could not extract file name from the provided input.");
    if (o.startsWith("https://")) {
      const s = o.split("files/")[1].match(/[a-z0-9]+/);
      if (s === null) throw new Error(`Could not extract file name from URI ${o}`);
      o = s[0];
    } else o.startsWith("files/") && (o = o.split("files/")[1]);
    return o;
  }
}
function ov(n, t) {
  let o;
  return n.isVertexAI() ? o = t ? "publishers/google/models" : "models" : o = t ? "models" : "tunedModels", o;
}
function lv(n) {
  for (const t of ["models", "tunedModels", "publisherModels"]) if (pE(n, t)) return n[t];
  return [];
}
function pE(n, t) {
  return n !== null && typeof n == "object" && t in n;
}
function mE(n, t = {}) {
  const o = n, a = { name: o.name, description: o.description, parametersJsonSchema: o.inputSchema };
  return o.outputSchema && (a.responseJsonSchema = o.outputSchema), t.behavior && (a.behavior = t.behavior), { functionDeclarations: [a] };
}
function hE(n, t = {}) {
  const o = [], a = /* @__PURE__ */ new Set();
  for (const s of n) {
    const c = s.name;
    if (a.has(c)) throw new Error(`Duplicate function name ${c} found in MCP tools. Please ensure function names are unique.`);
    a.add(c);
    const d = mE(s, t);
    d.functionDeclarations && o.push(...d.functionDeclarations);
  }
  return { functionDeclarations: o };
}
function av(n, t) {
  let o;
  if (typeof t == "string") if (n.isVertexAI()) if (t.startsWith("gs://")) o = { format: "jsonl", gcsUri: [t] };
  else if (t.startsWith("bq://")) o = { format: "bigquery", bigqueryUri: t };
  else throw new Error(`Unsupported string source for Vertex AI: ${t}`);
  else if (t.startsWith("files/")) o = { fileName: t };
  else throw new Error(`Unsupported string source for Gemini API: ${t}`);
  else if (Array.isArray(t)) {
    if (n.isVertexAI()) throw new Error("InlinedRequest[] is not supported in Vertex AI.");
    o = { inlinedRequests: t };
  } else o = t;
  const a = [o.gcsUri, o.bigqueryUri].filter(Boolean).length, s = [o.inlinedRequests, o.fileName].filter(Boolean).length;
  if (n.isVertexAI()) {
    if (s > 0 || a !== 1) throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.");
  } else if (a > 0 || s !== 1) throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");
  return o;
}
function gE(n) {
  if (typeof n != "string") return n;
  const t = n;
  if (t.startsWith("gs://")) return { format: "jsonl", gcsUri: t };
  if (t.startsWith("bq://")) return { format: "bigquery", bigqueryUri: t };
  throw new Error(`Unsupported destination: ${t}`);
}
function sv(n) {
  if (typeof n != "object" || n === null) return {};
  const t = n, o = t.inlinedResponses;
  if (typeof o != "object" || o === null) return n;
  const s = o.inlinedResponses;
  if (!Array.isArray(s) || s.length === 0) return n;
  let c = false;
  for (const d of s) {
    if (typeof d != "object" || d === null) continue;
    const y = d.response;
    if (typeof y != "object" || y === null) continue;
    if (y.embedding !== void 0) {
      c = true;
      break;
    }
  }
  return c && (t.inlinedEmbedContentResponses = t.inlinedResponses, delete t.inlinedResponses), n;
}
function ra(n, t) {
  const o = t;
  if (!n.isVertexAI()) {
    if (/batches\/[^/]+$/.test(o)) return o.split("/").pop();
    throw new Error(`Invalid batch job name: ${o}.`);
  }
  if (/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(o)) return o.split("/").pop();
  if (/^\d+$/.test(o)) return o;
  throw new Error(`Invalid batch job name: ${o}.`);
}
function rv(n) {
  const t = n;
  return t === "BATCH_STATE_UNSPECIFIED" ? "JOB_STATE_UNSPECIFIED" : t === "BATCH_STATE_PENDING" ? "JOB_STATE_PENDING" : t === "BATCH_STATE_RUNNING" ? "JOB_STATE_RUNNING" : t === "BATCH_STATE_SUCCEEDED" ? "JOB_STATE_SUCCEEDED" : t === "BATCH_STATE_FAILED" ? "JOB_STATE_FAILED" : t === "BATCH_STATE_CANCELLED" ? "JOB_STATE_CANCELLED" : t === "BATCH_STATE_EXPIRED" ? "JOB_STATE_EXPIRED" : t;
}
function yE(n) {
  return n.includes("gemini") && n !== "gemini-embedding-001" || n.includes("maas");
}
function vE(n) {
  const t = {}, o = u(n, ["apiKey"]);
  if (o != null && f(t, ["apiKey"], o), u(n, ["apiKeyConfig"]) !== void 0) throw new Error("apiKeyConfig parameter is not supported in Gemini API.");
  if (u(n, ["authType"]) !== void 0) throw new Error("authType parameter is not supported in Gemini API.");
  if (u(n, ["googleServiceAccountConfig"]) !== void 0) throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");
  if (u(n, ["httpBasicAuthConfig"]) !== void 0) throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oauthConfig"]) !== void 0) throw new Error("oauthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oidcConfig"]) !== void 0) throw new Error("oidcConfig parameter is not supported in Gemini API.");
  return t;
}
function SE(n) {
  const t = {}, o = u(n, ["responsesFile"]);
  o != null && f(t, ["fileName"], o);
  const a = u(n, ["inlinedResponses", "inlinedResponses"]);
  if (a != null) {
    let c = a;
    Array.isArray(c) && (c = c.map((d) => jE(d))), f(t, ["inlinedResponses"], c);
  }
  const s = u(n, ["inlinedEmbedContentResponses", "inlinedResponses"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => d)), f(t, ["inlinedEmbedContentResponses"], c);
  }
  return t;
}
function TE(n) {
  const t = {}, o = u(n, ["predictionsFormat"]);
  o != null && f(t, ["format"], o);
  const a = u(n, ["gcsDestination", "outputUriPrefix"]);
  a != null && f(t, ["gcsUri"], a);
  const s = u(n, ["bigqueryDestination", "outputUri"]);
  return s != null && f(t, ["bigqueryUri"], s), t;
}
function EE(n) {
  const t = {}, o = u(n, ["format"]);
  o != null && f(t, ["predictionsFormat"], o);
  const a = u(n, ["gcsUri"]);
  a != null && f(t, ["gcsDestination", "outputUriPrefix"], a);
  const s = u(n, ["bigqueryUri"]);
  if (s != null && f(t, ["bigqueryDestination", "outputUri"], s), u(n, ["fileName"]) !== void 0) throw new Error("fileName parameter is not supported in Vertex AI.");
  if (u(n, ["inlinedResponses"]) !== void 0) throw new Error("inlinedResponses parameter is not supported in Vertex AI.");
  if (u(n, ["inlinedEmbedContentResponses"]) !== void 0) throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");
  return t;
}
function Eu(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["name"], o);
  const a = u(n, ["metadata", "displayName"]);
  a != null && f(t, ["displayName"], a);
  const s = u(n, ["metadata", "state"]);
  s != null && f(t, ["state"], rv(s));
  const c = u(n, ["metadata", "createTime"]);
  c != null && f(t, ["createTime"], c);
  const d = u(n, ["metadata", "endTime"]);
  d != null && f(t, ["endTime"], d);
  const g = u(n, ["metadata", "updateTime"]);
  g != null && f(t, ["updateTime"], g);
  const y = u(n, ["metadata", "model"]);
  y != null && f(t, ["model"], y);
  const m = u(n, ["metadata", "output"]);
  return m != null && f(t, ["dest"], SE(sv(m))), t;
}
function id(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["name"], o);
  const a = u(n, ["displayName"]);
  a != null && f(t, ["displayName"], a);
  const s = u(n, ["state"]);
  s != null && f(t, ["state"], rv(s));
  const c = u(n, ["error"]);
  c != null && f(t, ["error"], c);
  const d = u(n, ["createTime"]);
  d != null && f(t, ["createTime"], d);
  const g = u(n, ["startTime"]);
  g != null && f(t, ["startTime"], g);
  const y = u(n, ["endTime"]);
  y != null && f(t, ["endTime"], y);
  const m = u(n, ["updateTime"]);
  m != null && f(t, ["updateTime"], m);
  const v = u(n, ["model"]);
  v != null && f(t, ["model"], v);
  const _ = u(n, ["inputConfig"]);
  _ != null && f(t, ["src"], _E(_));
  const E = u(n, ["outputConfig"]);
  E != null && f(t, ["dest"], TE(sv(E)));
  const b = u(n, ["completionStats"]);
  return b != null && f(t, ["completionStats"], b), t;
}
function _E(n) {
  const t = {}, o = u(n, ["instancesFormat"]);
  o != null && f(t, ["format"], o);
  const a = u(n, ["gcsSource", "uris"]);
  a != null && f(t, ["gcsUri"], a);
  const s = u(n, ["bigquerySource", "inputUri"]);
  return s != null && f(t, ["bigqueryUri"], s), t;
}
function CE(n, t) {
  const o = {};
  if (u(t, ["format"]) !== void 0) throw new Error("format parameter is not supported in Gemini API.");
  if (u(t, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (u(t, ["bigqueryUri"]) !== void 0) throw new Error("bigqueryUri parameter is not supported in Gemini API.");
  const a = u(t, ["fileName"]);
  a != null && f(o, ["fileName"], a);
  const s = u(t, ["inlinedRequests"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => WE(n, d))), f(o, ["requests", "requests"], c);
  }
  return o;
}
function AE(n) {
  const t = {}, o = u(n, ["format"]);
  o != null && f(t, ["instancesFormat"], o);
  const a = u(n, ["gcsUri"]);
  a != null && f(t, ["gcsSource", "uris"], a);
  const s = u(n, ["bigqueryUri"]);
  if (s != null && f(t, ["bigquerySource", "inputUri"], s), u(n, ["fileName"]) !== void 0) throw new Error("fileName parameter is not supported in Vertex AI.");
  if (u(n, ["inlinedRequests"]) !== void 0) throw new Error("inlinedRequests parameter is not supported in Vertex AI.");
  return t;
}
function xE(n) {
  const t = {}, o = u(n, ["data"]);
  if (o != null && f(t, ["data"], o), u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const a = u(n, ["mimeType"]);
  return a != null && f(t, ["mimeType"], a), t;
}
function bE(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], ra(n, a)), o;
}
function NE(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], ra(n, a)), o;
}
function wE(n) {
  const t = {}, o = u(n, ["content"]);
  o != null && f(t, ["content"], o);
  const a = u(n, ["citationMetadata"]);
  a != null && f(t, ["citationMetadata"], RE(a));
  const s = u(n, ["tokenCount"]);
  s != null && f(t, ["tokenCount"], s);
  const c = u(n, ["finishReason"]);
  c != null && f(t, ["finishReason"], c);
  const d = u(n, ["groundingMetadata"]);
  d != null && f(t, ["groundingMetadata"], d);
  const g = u(n, ["avgLogprobs"]);
  g != null && f(t, ["avgLogprobs"], g);
  const y = u(n, ["index"]);
  y != null && f(t, ["index"], y);
  const m = u(n, ["logprobsResult"]);
  m != null && f(t, ["logprobsResult"], m);
  const v = u(n, ["safetyRatings"]);
  if (v != null) {
    let E = v;
    Array.isArray(E) && (E = E.map((b) => b)), f(t, ["safetyRatings"], E);
  }
  const _ = u(n, ["urlContextMetadata"]);
  return _ != null && f(t, ["urlContextMetadata"], _), t;
}
function RE(n) {
  const t = {}, o = u(n, ["citationSources"]);
  if (o != null) {
    let a = o;
    Array.isArray(a) && (a = a.map((s) => s)), f(t, ["citations"], a);
  }
  return t;
}
function uv(n) {
  const t = {}, o = u(n, ["parts"]);
  if (o != null) {
    let s = o;
    Array.isArray(s) && (s = s.map((c) => a_(c))), f(t, ["parts"], s);
  }
  const a = u(n, ["role"]);
  return a != null && f(t, ["role"], a), t;
}
function ME(n, t) {
  const o = {}, a = u(n, ["displayName"]);
  if (t !== void 0 && a != null && f(t, ["batch", "displayName"], a), u(n, ["dest"]) !== void 0) throw new Error("dest parameter is not supported in Gemini API.");
  return o;
}
function IE(n, t) {
  const o = {}, a = u(n, ["displayName"]);
  t !== void 0 && a != null && f(t, ["displayName"], a);
  const s = u(n, ["dest"]);
  return t !== void 0 && s != null && f(t, ["outputConfig"], EE(gE(s))), o;
}
function dy(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["_url", "model"], qe(n, a));
  const s = u(t, ["src"]);
  s != null && f(o, ["batch", "inputConfig"], CE(n, av(n, s)));
  const c = u(t, ["config"]);
  return c != null && ME(c, o), o;
}
function DE(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["model"], qe(n, a));
  const s = u(t, ["src"]);
  s != null && f(o, ["inputConfig"], AE(av(n, s)));
  const c = u(t, ["config"]);
  return c != null && IE(c, o), o;
}
function UE(n, t) {
  const o = {}, a = u(n, ["displayName"]);
  return t !== void 0 && a != null && f(t, ["batch", "displayName"], a), o;
}
function LE(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["_url", "model"], qe(n, a));
  const s = u(t, ["src"]);
  s != null && f(o, ["batch", "inputConfig"], qE(n, s));
  const c = u(t, ["config"]);
  return c != null && UE(c, o), o;
}
function kE(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], ra(n, a)), o;
}
function PE(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], ra(n, a)), o;
}
function GE(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["name"]);
  a != null && f(t, ["name"], a);
  const s = u(n, ["done"]);
  s != null && f(t, ["done"], s);
  const c = u(n, ["error"]);
  return c != null && f(t, ["error"], c), t;
}
function OE(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["name"]);
  a != null && f(t, ["name"], a);
  const s = u(n, ["done"]);
  s != null && f(t, ["done"], s);
  const c = u(n, ["error"]);
  return c != null && f(t, ["error"], c), t;
}
function HE(n, t) {
  const o = {}, a = u(t, ["contents"]);
  if (a != null) {
    let c = vd(n, a);
    Array.isArray(c) && (c = c.map((d) => d)), f(o, ["requests[]", "request", "content"], c);
  }
  const s = u(t, ["config"]);
  return s != null && (f(o, ["_self"], BE(s, o)), UT(o, { "requests[].*": "requests[].request.*" })), o;
}
function BE(n, t) {
  const o = {}, a = u(n, ["taskType"]);
  t !== void 0 && a != null && f(t, ["requests[]", "taskType"], a);
  const s = u(n, ["title"]);
  t !== void 0 && s != null && f(t, ["requests[]", "title"], s);
  const c = u(n, ["outputDimensionality"]);
  if (t !== void 0 && c != null && f(t, ["requests[]", "outputDimensionality"], c), u(n, ["mimeType"]) !== void 0) throw new Error("mimeType parameter is not supported in Gemini API.");
  if (u(n, ["autoTruncate"]) !== void 0) throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return o;
}
function qE(n, t) {
  const o = {}, a = u(t, ["fileName"]);
  a != null && f(o, ["file_name"], a);
  const s = u(t, ["inlinedRequests"]);
  return s != null && f(o, ["requests"], HE(n, s)), o;
}
function VE(n) {
  const t = {};
  if (u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const o = u(n, ["fileUri"]);
  o != null && f(t, ["fileUri"], o);
  const a = u(n, ["mimeType"]);
  return a != null && f(t, ["mimeType"], a), t;
}
function zE(n) {
  const t = {}, o = u(n, ["id"]);
  o != null && f(t, ["id"], o);
  const a = u(n, ["args"]);
  a != null && f(t, ["args"], a);
  const s = u(n, ["name"]);
  if (s != null && f(t, ["name"], s), u(n, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (u(n, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
  return t;
}
function FE(n) {
  const t = {}, o = u(n, ["allowedFunctionNames"]);
  o != null && f(t, ["allowedFunctionNames"], o);
  const a = u(n, ["mode"]);
  if (a != null && f(t, ["mode"], a), u(n, ["streamFunctionCallArguments"]) !== void 0) throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
  return t;
}
function JE(n, t, o) {
  const a = {}, s = u(t, ["systemInstruction"]);
  o !== void 0 && s != null && f(o, ["systemInstruction"], uv(xt(s)));
  const c = u(t, ["temperature"]);
  c != null && f(a, ["temperature"], c);
  const d = u(t, ["topP"]);
  d != null && f(a, ["topP"], d);
  const g = u(t, ["topK"]);
  g != null && f(a, ["topK"], g);
  const y = u(t, ["candidateCount"]);
  y != null && f(a, ["candidateCount"], y);
  const m = u(t, ["maxOutputTokens"]);
  m != null && f(a, ["maxOutputTokens"], m);
  const v = u(t, ["stopSequences"]);
  v != null && f(a, ["stopSequences"], v);
  const _ = u(t, ["responseLogprobs"]);
  _ != null && f(a, ["responseLogprobs"], _);
  const E = u(t, ["logprobs"]);
  E != null && f(a, ["logprobs"], E);
  const b = u(t, ["presencePenalty"]);
  b != null && f(a, ["presencePenalty"], b);
  const D = u(t, ["frequencyPenalty"]);
  D != null && f(a, ["frequencyPenalty"], D);
  const H = u(t, ["seed"]);
  H != null && f(a, ["seed"], H);
  const P = u(t, ["responseMimeType"]);
  P != null && f(a, ["responseMimeType"], P);
  const V = u(t, ["responseSchema"]);
  V != null && f(a, ["responseSchema"], Sd(V));
  const ie = u(t, ["responseJsonSchema"]);
  if (ie != null && f(a, ["responseJsonSchema"], ie), u(t, ["routingConfig"]) !== void 0) throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (u(t, ["modelSelectionConfig"]) !== void 0) throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  const X = u(t, ["safetySettings"]);
  if (o !== void 0 && X != null) {
    let ge = X;
    Array.isArray(ge) && (ge = ge.map((Ee) => s_(Ee))), f(o, ["safetySettings"], ge);
  }
  const j = u(t, ["tools"]);
  if (o !== void 0 && j != null) {
    let ge = sa(j);
    Array.isArray(ge) && (ge = ge.map((Ee) => u_(aa(Ee)))), f(o, ["tools"], ge);
  }
  const ae = u(t, ["toolConfig"]);
  if (o !== void 0 && ae != null && f(o, ["toolConfig"], r_(ae)), u(t, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
  const Y = u(t, ["cachedContent"]);
  o !== void 0 && Y != null && f(o, ["cachedContent"], Ii(n, Y));
  const ne = u(t, ["responseModalities"]);
  ne != null && f(a, ["responseModalities"], ne);
  const Te = u(t, ["mediaResolution"]);
  Te != null && f(a, ["mediaResolution"], Te);
  const re = u(t, ["speechConfig"]);
  if (re != null && f(a, ["speechConfig"], Td(re)), u(t, ["audioTimestamp"]) !== void 0) throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const ve = u(t, ["thinkingConfig"]);
  ve != null && f(a, ["thinkingConfig"], ve);
  const pe = u(t, ["imageConfig"]);
  pe != null && f(a, ["imageConfig"], ZE(pe));
  const Z = u(t, ["enableEnhancedCivicAnswers"]);
  if (Z != null && f(a, ["enableEnhancedCivicAnswers"], Z), u(t, ["modelArmorConfig"]) !== void 0) throw new Error("modelArmorConfig parameter is not supported in Gemini API.");
  return a;
}
function YE(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["candidates"]);
  if (a != null) {
    let y = a;
    Array.isArray(y) && (y = y.map((m) => wE(m))), f(t, ["candidates"], y);
  }
  const s = u(n, ["modelVersion"]);
  s != null && f(t, ["modelVersion"], s);
  const c = u(n, ["promptFeedback"]);
  c != null && f(t, ["promptFeedback"], c);
  const d = u(n, ["responseId"]);
  d != null && f(t, ["responseId"], d);
  const g = u(n, ["usageMetadata"]);
  return g != null && f(t, ["usageMetadata"], g), t;
}
function KE(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], ra(n, a)), o;
}
function $E(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], ra(n, a)), o;
}
function XE(n) {
  const t = {}, o = u(n, ["authConfig"]);
  o != null && f(t, ["authConfig"], vE(o));
  const a = u(n, ["enableWidget"]);
  return a != null && f(t, ["enableWidget"], a), t;
}
function QE(n) {
  const t = {}, o = u(n, ["searchTypes"]);
  if (o != null && f(t, ["searchTypes"], o), u(n, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  if (u(n, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const a = u(n, ["timeRangeFilter"]);
  return a != null && f(t, ["timeRangeFilter"], a), t;
}
function ZE(n) {
  const t = {}, o = u(n, ["aspectRatio"]);
  o != null && f(t, ["aspectRatio"], o);
  const a = u(n, ["imageSize"]);
  if (a != null && f(t, ["imageSize"], a), u(n, ["personGeneration"]) !== void 0) throw new Error("personGeneration parameter is not supported in Gemini API.");
  if (u(n, ["prominentPeople"]) !== void 0) throw new Error("prominentPeople parameter is not supported in Gemini API.");
  if (u(n, ["outputMimeType"]) !== void 0) throw new Error("outputMimeType parameter is not supported in Gemini API.");
  if (u(n, ["outputCompressionQuality"]) !== void 0) throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");
  if (u(n, ["imageOutputOptions"]) !== void 0) throw new Error("imageOutputOptions parameter is not supported in Gemini API.");
  return t;
}
function WE(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["request", "model"], qe(n, a));
  const s = u(t, ["contents"]);
  if (s != null) {
    let g = Tn(s);
    Array.isArray(g) && (g = g.map((y) => uv(y))), f(o, ["request", "contents"], g);
  }
  const c = u(t, ["metadata"]);
  c != null && f(o, ["metadata"], c);
  const d = u(t, ["config"]);
  return d != null && f(o, ["request", "generationConfig"], JE(n, d, u(o, ["request"], {}))), o;
}
function jE(n) {
  const t = {}, o = u(n, ["response"]);
  o != null && f(t, ["response"], YE(o));
  const a = u(n, ["metadata"]);
  a != null && f(t, ["metadata"], a);
  const s = u(n, ["error"]);
  return s != null && f(t, ["error"], s), t;
}
function e_(n, t) {
  const o = {}, a = u(n, ["pageSize"]);
  t !== void 0 && a != null && f(t, ["_query", "pageSize"], a);
  const s = u(n, ["pageToken"]);
  if (t !== void 0 && s != null && f(t, ["_query", "pageToken"], s), u(n, ["filter"]) !== void 0) throw new Error("filter parameter is not supported in Gemini API.");
  return o;
}
function t_(n, t) {
  const o = {}, a = u(n, ["pageSize"]);
  t !== void 0 && a != null && f(t, ["_query", "pageSize"], a);
  const s = u(n, ["pageToken"]);
  t !== void 0 && s != null && f(t, ["_query", "pageToken"], s);
  const c = u(n, ["filter"]);
  return t !== void 0 && c != null && f(t, ["_query", "filter"], c), o;
}
function n_(n) {
  const t = {}, o = u(n, ["config"]);
  return o != null && e_(o, t), t;
}
function i_(n) {
  const t = {}, o = u(n, ["config"]);
  return o != null && t_(o, t), t;
}
function o_(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["nextPageToken"]);
  a != null && f(t, ["nextPageToken"], a);
  const s = u(n, ["operations"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => Eu(d))), f(t, ["batchJobs"], c);
  }
  return t;
}
function l_(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["nextPageToken"]);
  a != null && f(t, ["nextPageToken"], a);
  const s = u(n, ["batchPredictionJobs"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => id(d))), f(t, ["batchJobs"], c);
  }
  return t;
}
function a_(n) {
  const t = {}, o = u(n, ["mediaResolution"]);
  o != null && f(t, ["mediaResolution"], o);
  const a = u(n, ["codeExecutionResult"]);
  a != null && f(t, ["codeExecutionResult"], a);
  const s = u(n, ["executableCode"]);
  s != null && f(t, ["executableCode"], s);
  const c = u(n, ["fileData"]);
  c != null && f(t, ["fileData"], VE(c));
  const d = u(n, ["functionCall"]);
  d != null && f(t, ["functionCall"], zE(d));
  const g = u(n, ["functionResponse"]);
  g != null && f(t, ["functionResponse"], g);
  const y = u(n, ["inlineData"]);
  y != null && f(t, ["inlineData"], xE(y));
  const m = u(n, ["text"]);
  m != null && f(t, ["text"], m);
  const v = u(n, ["thought"]);
  v != null && f(t, ["thought"], v);
  const _ = u(n, ["thoughtSignature"]);
  _ != null && f(t, ["thoughtSignature"], _);
  const E = u(n, ["videoMetadata"]);
  return E != null && f(t, ["videoMetadata"], E), t;
}
function s_(n) {
  const t = {}, o = u(n, ["category"]);
  if (o != null && f(t, ["category"], o), u(n, ["method"]) !== void 0) throw new Error("method parameter is not supported in Gemini API.");
  const a = u(n, ["threshold"]);
  return a != null && f(t, ["threshold"], a), t;
}
function r_(n) {
  const t = {}, o = u(n, ["retrievalConfig"]);
  o != null && f(t, ["retrievalConfig"], o);
  const a = u(n, ["functionCallingConfig"]);
  return a != null && f(t, ["functionCallingConfig"], FE(a)), t;
}
function u_(n) {
  const t = {};
  if (u(n, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const o = u(n, ["computerUse"]);
  o != null && f(t, ["computerUse"], o);
  const a = u(n, ["fileSearch"]);
  a != null && f(t, ["fileSearch"], a);
  const s = u(n, ["googleSearch"]);
  s != null && f(t, ["googleSearch"], QE(s));
  const c = u(n, ["googleMaps"]);
  c != null && f(t, ["googleMaps"], XE(c));
  const d = u(n, ["codeExecution"]);
  if (d != null && f(t, ["codeExecution"], d), u(n, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = u(n, ["functionDeclarations"]);
  if (g != null) {
    let _ = g;
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["functionDeclarations"], _);
  }
  const y = u(n, ["googleSearchRetrieval"]);
  if (y != null && f(t, ["googleSearchRetrieval"], y), u(n, ["parallelAiSearch"]) !== void 0) throw new Error("parallelAiSearch parameter is not supported in Gemini API.");
  const m = u(n, ["urlContext"]);
  m != null && f(t, ["urlContext"], m);
  const v = u(n, ["mcpServers"]);
  if (v != null) {
    let _ = v;
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["mcpServers"], _);
  }
  return t;
}
var Ri;
(function(n) {
  n.PAGED_ITEM_BATCH_JOBS = "batchJobs", n.PAGED_ITEM_MODELS = "models", n.PAGED_ITEM_TUNING_JOBS = "tuningJobs", n.PAGED_ITEM_FILES = "files", n.PAGED_ITEM_CACHED_CONTENTS = "cachedContents", n.PAGED_ITEM_FILE_SEARCH_STORES = "fileSearchStores", n.PAGED_ITEM_DOCUMENTS = "documents";
})(Ri || (Ri = {}));
class Xo {
  constructor(t, o, a, s) {
    this.pageInternal = [], this.paramsInternal = {}, this.requestInternal = o, this.init(t, a, s);
  }
  init(t, o, a) {
    var s, c;
    this.nameInternal = t, this.pageInternal = o[this.nameInternal] || [], this.sdkHttpResponseInternal = o == null ? void 0 : o.sdkHttpResponse, this.idxInternal = 0;
    let d = { config: {} };
    !a || Object.keys(a).length === 0 ? d = { config: {} } : typeof a == "object" ? d = Object.assign({}, a) : d = a, d.config && (d.config.pageToken = o.nextPageToken), this.paramsInternal = d, this.pageInternalSize = (c = (s = d.config) === null || s === void 0 ? void 0 : s.pageSize) !== null && c !== void 0 ? c : this.pageInternal.length;
  }
  initNextPage(t) {
    this.init(this.nameInternal, t, this.paramsInternal);
  }
  get page() {
    return this.pageInternal;
  }
  get name() {
    return this.nameInternal;
  }
  get pageSize() {
    return this.pageInternalSize;
  }
  get sdkHttpResponse() {
    return this.sdkHttpResponseInternal;
  }
  get params() {
    return this.paramsInternal;
  }
  get pageLength() {
    return this.pageInternal.length;
  }
  getItem(t) {
    return this.pageInternal[t];
  }
  [Symbol.asyncIterator]() {
    return { next: async () => {
      if (this.idxInternal >= this.pageLength) if (this.hasNextPage()) await this.nextPage();
      else return { value: void 0, done: true };
      const t = this.getItem(this.idxInternal);
      return this.idxInternal += 1, { value: t, done: false };
    }, return: async () => ({ value: void 0, done: true }) };
  }
  async nextPage() {
    if (!this.hasNextPage()) throw new Error("No more pages to fetch.");
    const t = await this.requestInternal(this.params);
    return this.initNextPage(t), this.page;
  }
  hasNextPage() {
    var t;
    return ((t = this.params.config) === null || t === void 0 ? void 0 : t.pageToken) !== void 0;
  }
}
class c_ extends Mi {
  constructor(t) {
    super(), this.apiClient = t, this.list = async (o = {}) => new Xo(Ri.PAGED_ITEM_BATCH_JOBS, (a) => this.listInternal(a), await this.listInternal(o), o), this.create = async (o) => (this.apiClient.isVertexAI() && (o.config = this.formatDestination(o.src, o.config)), this.createInternal(o)), this.createEmbeddings = async (o) => {
      if (console.warn("batches.createEmbeddings() is experimental and may change without notice."), this.apiClient.isVertexAI()) throw new Error("Vertex AI does not support batches.createEmbeddings.");
      return this.createEmbeddingsInternal(o);
    };
  }
  createInlinedGenerateContentRequest(t) {
    const o = dy(this.apiClient, t), a = o._url, s = le("{model}:batchGenerateContent", a), g = o.batch.inputConfig.requests, y = g.requests, m = [];
    for (const v of y) {
      const _ = Object.assign({}, v);
      if (_.systemInstruction) {
        const E = _.systemInstruction;
        delete _.systemInstruction;
        const b = _.request;
        b.systemInstruction = E, _.request = b;
      }
      m.push(_);
    }
    return g.requests = m, delete o.config, delete o._url, delete o._query, { path: s, body: o };
  }
  getGcsUri(t) {
    if (typeof t == "string") return t.startsWith("gs://") ? t : void 0;
    if (!Array.isArray(t) && t.gcsUri && t.gcsUri.length > 0) return t.gcsUri[0];
  }
  getBigqueryUri(t) {
    if (typeof t == "string") return t.startsWith("bq://") ? t : void 0;
    if (!Array.isArray(t)) return t.bigqueryUri;
  }
  formatDestination(t, o) {
    const a = o ? Object.assign({}, o) : {}, s = Date.now().toString();
    if (a.displayName || (a.displayName = `genaiBatchJob_${s}`), a.dest === void 0) {
      const c = this.getGcsUri(t), d = this.getBigqueryUri(t);
      if (c) c.endsWith(".jsonl") ? a.dest = `${c.slice(0, -6)}/dest` : a.dest = `${c}_dest_${s}`;
      else if (d) a.dest = `${d}_dest_${s}`;
      else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.");
    }
    return a;
  }
  async createInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = DE(this.apiClient, t);
      return g = le("batchPredictionJobs", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d.then((v) => id(v));
    } else {
      const m = dy(this.apiClient, t);
      return g = le("{model}:batchGenerateContent", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d.then((v) => Eu(v));
    }
  }
  async createEmbeddingsInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = LE(this.apiClient, t);
      return c = le("{model}:asyncBatchEmbedContent", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => Eu(y));
    }
  }
  async get(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = $E(this.apiClient, t);
      return g = le("batchPredictionJobs/{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d.then((v) => id(v));
    } else {
      const m = KE(this.apiClient, t);
      return g = le("batches/{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d.then((v) => Eu(v));
    }
  }
  async cancel(t) {
    var o, a, s, c;
    let d = "", g = {};
    if (this.apiClient.isVertexAI()) {
      const y = NE(this.apiClient, t);
      d = le("batchPredictionJobs/{name}:cancel", y._url), g = y._query, delete y._url, delete y._query, await this.apiClient.request({ path: d, queryParams: g, body: JSON.stringify(y), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal });
    } else {
      const y = bE(this.apiClient, t);
      d = le("batches/{name}:cancel", y._url), g = y._query, delete y._url, delete y._query, await this.apiClient.request({ path: d, queryParams: g, body: JSON.stringify(y), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal });
    }
  }
  async listInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = i_(t);
      return g = le("batchPredictionJobs", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = l_(v), E = new ry();
        return Object.assign(E, _), E;
      });
    } else {
      const m = n_(t);
      return g = le("batches", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = o_(v), E = new ry();
        return Object.assign(E, _), E;
      });
    }
  }
  async delete(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = PE(this.apiClient, t);
      return g = le("batchPredictionJobs/{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "DELETE", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => OE(v));
    } else {
      const m = kE(this.apiClient, t);
      return g = le("batches/{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "DELETE", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => GE(v));
    }
  }
}
function f_(n) {
  const t = {}, o = u(n, ["apiKey"]);
  if (o != null && f(t, ["apiKey"], o), u(n, ["apiKeyConfig"]) !== void 0) throw new Error("apiKeyConfig parameter is not supported in Gemini API.");
  if (u(n, ["authType"]) !== void 0) throw new Error("authType parameter is not supported in Gemini API.");
  if (u(n, ["googleServiceAccountConfig"]) !== void 0) throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");
  if (u(n, ["httpBasicAuthConfig"]) !== void 0) throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oauthConfig"]) !== void 0) throw new Error("oauthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oidcConfig"]) !== void 0) throw new Error("oidcConfig parameter is not supported in Gemini API.");
  return t;
}
function d_(n) {
  const t = {}, o = u(n, ["data"]);
  if (o != null && f(t, ["data"], o), u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const a = u(n, ["mimeType"]);
  return a != null && f(t, ["mimeType"], a), t;
}
function py(n) {
  const t = {}, o = u(n, ["parts"]);
  if (o != null) {
    let s = o;
    Array.isArray(s) && (s = s.map((c) => k_(c))), f(t, ["parts"], s);
  }
  const a = u(n, ["role"]);
  return a != null && f(t, ["role"], a), t;
}
function p_(n, t) {
  const o = {}, a = u(n, ["ttl"]);
  t !== void 0 && a != null && f(t, ["ttl"], a);
  const s = u(n, ["expireTime"]);
  t !== void 0 && s != null && f(t, ["expireTime"], s);
  const c = u(n, ["displayName"]);
  t !== void 0 && c != null && f(t, ["displayName"], c);
  const d = u(n, ["contents"]);
  if (t !== void 0 && d != null) {
    let v = Tn(d);
    Array.isArray(v) && (v = v.map((_) => py(_))), f(t, ["contents"], v);
  }
  const g = u(n, ["systemInstruction"]);
  t !== void 0 && g != null && f(t, ["systemInstruction"], py(xt(g)));
  const y = u(n, ["tools"]);
  if (t !== void 0 && y != null) {
    let v = y;
    Array.isArray(v) && (v = v.map((_) => G_(_))), f(t, ["tools"], v);
  }
  const m = u(n, ["toolConfig"]);
  if (t !== void 0 && m != null && f(t, ["toolConfig"], P_(m)), u(n, ["kmsKeyName"]) !== void 0) throw new Error("kmsKeyName parameter is not supported in Gemini API.");
  return o;
}
function m_(n, t) {
  const o = {}, a = u(n, ["ttl"]);
  t !== void 0 && a != null && f(t, ["ttl"], a);
  const s = u(n, ["expireTime"]);
  t !== void 0 && s != null && f(t, ["expireTime"], s);
  const c = u(n, ["displayName"]);
  t !== void 0 && c != null && f(t, ["displayName"], c);
  const d = u(n, ["contents"]);
  if (t !== void 0 && d != null) {
    let _ = Tn(d);
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["contents"], _);
  }
  const g = u(n, ["systemInstruction"]);
  t !== void 0 && g != null && f(t, ["systemInstruction"], xt(g));
  const y = u(n, ["tools"]);
  if (t !== void 0 && y != null) {
    let _ = y;
    Array.isArray(_) && (_ = _.map((E) => O_(E))), f(t, ["tools"], _);
  }
  const m = u(n, ["toolConfig"]);
  t !== void 0 && m != null && f(t, ["toolConfig"], m);
  const v = u(n, ["kmsKeyName"]);
  return t !== void 0 && v != null && f(t, ["encryption_spec", "kmsKeyName"], v), o;
}
function h_(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["model"], Zy(n, a));
  const s = u(t, ["config"]);
  return s != null && p_(s, o), o;
}
function g_(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["model"], Zy(n, a));
  const s = u(t, ["config"]);
  return s != null && m_(s, o), o;
}
function y_(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], Ii(n, a)), o;
}
function v_(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], Ii(n, a)), o;
}
function S_(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  return o != null && f(t, ["sdkHttpResponse"], o), t;
}
function T_(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  return o != null && f(t, ["sdkHttpResponse"], o), t;
}
function E_(n) {
  const t = {};
  if (u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const o = u(n, ["fileUri"]);
  o != null && f(t, ["fileUri"], o);
  const a = u(n, ["mimeType"]);
  return a != null && f(t, ["mimeType"], a), t;
}
function __(n) {
  const t = {}, o = u(n, ["id"]);
  o != null && f(t, ["id"], o);
  const a = u(n, ["args"]);
  a != null && f(t, ["args"], a);
  const s = u(n, ["name"]);
  if (s != null && f(t, ["name"], s), u(n, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (u(n, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
  return t;
}
function C_(n) {
  const t = {}, o = u(n, ["allowedFunctionNames"]);
  o != null && f(t, ["allowedFunctionNames"], o);
  const a = u(n, ["mode"]);
  if (a != null && f(t, ["mode"], a), u(n, ["streamFunctionCallArguments"]) !== void 0) throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
  return t;
}
function A_(n) {
  const t = {}, o = u(n, ["description"]);
  o != null && f(t, ["description"], o);
  const a = u(n, ["name"]);
  a != null && f(t, ["name"], a);
  const s = u(n, ["parameters"]);
  s != null && f(t, ["parameters"], s);
  const c = u(n, ["parametersJsonSchema"]);
  c != null && f(t, ["parametersJsonSchema"], c);
  const d = u(n, ["response"]);
  d != null && f(t, ["response"], d);
  const g = u(n, ["responseJsonSchema"]);
  if (g != null && f(t, ["responseJsonSchema"], g), u(n, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
  return t;
}
function x_(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], Ii(n, a)), o;
}
function b_(n, t) {
  const o = {}, a = u(t, ["name"]);
  return a != null && f(o, ["_url", "name"], Ii(n, a)), o;
}
function N_(n) {
  const t = {}, o = u(n, ["authConfig"]);
  o != null && f(t, ["authConfig"], f_(o));
  const a = u(n, ["enableWidget"]);
  return a != null && f(t, ["enableWidget"], a), t;
}
function w_(n) {
  const t = {}, o = u(n, ["searchTypes"]);
  if (o != null && f(t, ["searchTypes"], o), u(n, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  if (u(n, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const a = u(n, ["timeRangeFilter"]);
  return a != null && f(t, ["timeRangeFilter"], a), t;
}
function R_(n, t) {
  const o = {}, a = u(n, ["pageSize"]);
  t !== void 0 && a != null && f(t, ["_query", "pageSize"], a);
  const s = u(n, ["pageToken"]);
  return t !== void 0 && s != null && f(t, ["_query", "pageToken"], s), o;
}
function M_(n, t) {
  const o = {}, a = u(n, ["pageSize"]);
  t !== void 0 && a != null && f(t, ["_query", "pageSize"], a);
  const s = u(n, ["pageToken"]);
  return t !== void 0 && s != null && f(t, ["_query", "pageToken"], s), o;
}
function I_(n) {
  const t = {}, o = u(n, ["config"]);
  return o != null && R_(o, t), t;
}
function D_(n) {
  const t = {}, o = u(n, ["config"]);
  return o != null && M_(o, t), t;
}
function U_(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["nextPageToken"]);
  a != null && f(t, ["nextPageToken"], a);
  const s = u(n, ["cachedContents"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => d)), f(t, ["cachedContents"], c);
  }
  return t;
}
function L_(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["nextPageToken"]);
  a != null && f(t, ["nextPageToken"], a);
  const s = u(n, ["cachedContents"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => d)), f(t, ["cachedContents"], c);
  }
  return t;
}
function k_(n) {
  const t = {}, o = u(n, ["mediaResolution"]);
  o != null && f(t, ["mediaResolution"], o);
  const a = u(n, ["codeExecutionResult"]);
  a != null && f(t, ["codeExecutionResult"], a);
  const s = u(n, ["executableCode"]);
  s != null && f(t, ["executableCode"], s);
  const c = u(n, ["fileData"]);
  c != null && f(t, ["fileData"], E_(c));
  const d = u(n, ["functionCall"]);
  d != null && f(t, ["functionCall"], __(d));
  const g = u(n, ["functionResponse"]);
  g != null && f(t, ["functionResponse"], g);
  const y = u(n, ["inlineData"]);
  y != null && f(t, ["inlineData"], d_(y));
  const m = u(n, ["text"]);
  m != null && f(t, ["text"], m);
  const v = u(n, ["thought"]);
  v != null && f(t, ["thought"], v);
  const _ = u(n, ["thoughtSignature"]);
  _ != null && f(t, ["thoughtSignature"], _);
  const E = u(n, ["videoMetadata"]);
  return E != null && f(t, ["videoMetadata"], E), t;
}
function P_(n) {
  const t = {}, o = u(n, ["retrievalConfig"]);
  o != null && f(t, ["retrievalConfig"], o);
  const a = u(n, ["functionCallingConfig"]);
  return a != null && f(t, ["functionCallingConfig"], C_(a)), t;
}
function G_(n) {
  const t = {};
  if (u(n, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const o = u(n, ["computerUse"]);
  o != null && f(t, ["computerUse"], o);
  const a = u(n, ["fileSearch"]);
  a != null && f(t, ["fileSearch"], a);
  const s = u(n, ["googleSearch"]);
  s != null && f(t, ["googleSearch"], w_(s));
  const c = u(n, ["googleMaps"]);
  c != null && f(t, ["googleMaps"], N_(c));
  const d = u(n, ["codeExecution"]);
  if (d != null && f(t, ["codeExecution"], d), u(n, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = u(n, ["functionDeclarations"]);
  if (g != null) {
    let _ = g;
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["functionDeclarations"], _);
  }
  const y = u(n, ["googleSearchRetrieval"]);
  if (y != null && f(t, ["googleSearchRetrieval"], y), u(n, ["parallelAiSearch"]) !== void 0) throw new Error("parallelAiSearch parameter is not supported in Gemini API.");
  const m = u(n, ["urlContext"]);
  m != null && f(t, ["urlContext"], m);
  const v = u(n, ["mcpServers"]);
  if (v != null) {
    let _ = v;
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["mcpServers"], _);
  }
  return t;
}
function O_(n) {
  const t = {}, o = u(n, ["retrieval"]);
  o != null && f(t, ["retrieval"], o);
  const a = u(n, ["computerUse"]);
  if (a != null && f(t, ["computerUse"], a), u(n, ["fileSearch"]) !== void 0) throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const s = u(n, ["googleSearch"]);
  s != null && f(t, ["googleSearch"], s);
  const c = u(n, ["googleMaps"]);
  c != null && f(t, ["googleMaps"], c);
  const d = u(n, ["codeExecution"]);
  d != null && f(t, ["codeExecution"], d);
  const g = u(n, ["enterpriseWebSearch"]);
  g != null && f(t, ["enterpriseWebSearch"], g);
  const y = u(n, ["functionDeclarations"]);
  if (y != null) {
    let E = y;
    Array.isArray(E) && (E = E.map((b) => A_(b))), f(t, ["functionDeclarations"], E);
  }
  const m = u(n, ["googleSearchRetrieval"]);
  m != null && f(t, ["googleSearchRetrieval"], m);
  const v = u(n, ["parallelAiSearch"]);
  v != null && f(t, ["parallelAiSearch"], v);
  const _ = u(n, ["urlContext"]);
  if (_ != null && f(t, ["urlContext"], _), u(n, ["mcpServers"]) !== void 0) throw new Error("mcpServers parameter is not supported in Vertex AI.");
  return t;
}
function H_(n, t) {
  const o = {}, a = u(n, ["ttl"]);
  t !== void 0 && a != null && f(t, ["ttl"], a);
  const s = u(n, ["expireTime"]);
  return t !== void 0 && s != null && f(t, ["expireTime"], s), o;
}
function B_(n, t) {
  const o = {}, a = u(n, ["ttl"]);
  t !== void 0 && a != null && f(t, ["ttl"], a);
  const s = u(n, ["expireTime"]);
  return t !== void 0 && s != null && f(t, ["expireTime"], s), o;
}
function q_(n, t) {
  const o = {}, a = u(t, ["name"]);
  a != null && f(o, ["_url", "name"], Ii(n, a));
  const s = u(t, ["config"]);
  return s != null && H_(s, o), o;
}
function V_(n, t) {
  const o = {}, a = u(t, ["name"]);
  a != null && f(o, ["_url", "name"], Ii(n, a));
  const s = u(t, ["config"]);
  return s != null && B_(s, o), o;
}
class z_ extends Mi {
  constructor(t) {
    super(), this.apiClient = t, this.list = async (o = {}) => new Xo(Ri.PAGED_ITEM_CACHED_CONTENTS, (a) => this.listInternal(a), await this.listInternal(o), o);
  }
  async create(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = g_(this.apiClient, t);
      return g = le("cachedContents", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d.then((v) => v);
    } else {
      const m = h_(this.apiClient, t);
      return g = le("cachedContents", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d.then((v) => v);
    }
  }
  async get(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = b_(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d.then((v) => v);
    } else {
      const m = x_(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d.then((v) => v);
    }
  }
  async delete(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = v_(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "DELETE", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = T_(v), E = new ay();
        return Object.assign(E, _), E;
      });
    } else {
      const m = y_(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "DELETE", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = S_(v), E = new ay();
        return Object.assign(E, _), E;
      });
    }
  }
  async update(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = V_(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "PATCH", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d.then((v) => v);
    } else {
      const m = q_(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "PATCH", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d.then((v) => v);
    }
  }
  async listInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = D_(t);
      return g = le("cachedContents", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = L_(v), E = new sy();
        return Object.assign(E, _), E;
      });
    } else {
      const m = I_(t);
      return g = le("cachedContents", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = U_(v), E = new sy();
        return Object.assign(E, _), E;
      });
    }
  }
}
function Nu(n, t) {
  var o = {};
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && t.indexOf(a) < 0 && (o[a] = n[a]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, a = Object.getOwnPropertySymbols(n); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[s]) && (o[a[s]] = n[a[s]]);
  return o;
}
function my(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, o = t && n[t], a = 0;
  if (o) return o.call(n);
  if (n && typeof n.length == "number") return { next: function() {
    return n && a >= n.length && (n = void 0), { value: n && n[a++], done: !n };
  } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function xe(n) {
  return this instanceof xe ? (this.v = n, this) : new xe(n);
}
function zn(n, t, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = o.apply(n, t || []), s, c = [];
  return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), g("next"), g("throw"), g("return", d), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function d(b) {
    return function(D) {
      return Promise.resolve(D).then(b, _);
    };
  }
  function g(b, D) {
    a[b] && (s[b] = function(H) {
      return new Promise(function(P, V) {
        c.push([b, H, P, V]) > 1 || y(b, H);
      });
    }, D && (s[b] = D(s[b])));
  }
  function y(b, D) {
    try {
      m(a[b](D));
    } catch (H) {
      E(c[0][3], H);
    }
  }
  function m(b) {
    b.value instanceof xe ? Promise.resolve(b.value.v).then(v, _) : E(c[0][2], b);
  }
  function v(b) {
    y("next", b);
  }
  function _(b) {
    y("throw", b);
  }
  function E(b, D) {
    b(D), c.shift(), c.length && y(c[0][0], c[0][1]);
  }
}
function Fn(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = n[Symbol.asyncIterator], o;
  return t ? t.call(n) : (n = typeof my == "function" ? my(n) : n[Symbol.iterator](), o = {}, a("next"), a("throw"), a("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o);
  function a(c) {
    o[c] = n[c] && function(d) {
      return new Promise(function(g, y) {
        d = n[c](d), s(g, y, d.done, d.value);
      });
    };
  }
  function s(c, d, g, y) {
    Promise.resolve(y).then(function(m) {
      c({ value: m, done: g });
    }, d);
  }
}
function F_(n) {
  var t;
  if (n.candidates == null || n.candidates.length === 0) return false;
  const o = (t = n.candidates[0]) === null || t === void 0 ? void 0 : t.content;
  return o === void 0 ? false : cv(o);
}
function cv(n) {
  if (n.parts === void 0 || n.parts.length === 0) return false;
  for (const t of n.parts) if (t === void 0 || Object.keys(t).length === 0) return false;
  return true;
}
function J_(n) {
  if (n.length !== 0) {
    for (const t of n) if (t.role !== "user" && t.role !== "model") throw new Error(`Role must be user or model, but got ${t.role}.`);
  }
}
function hy(n) {
  if (n === void 0 || n.length === 0) return [];
  const t = [], o = n.length;
  let a = 0;
  for (; a < o; ) if (n[a].role === "user") t.push(n[a]), a++;
  else {
    const s = [];
    let c = true;
    for (; a < o && n[a].role === "model"; ) s.push(n[a]), c && !cv(n[a]) && (c = false), a++;
    c ? t.push(...s) : t.pop();
  }
  return t;
}
class Y_ {
  constructor(t, o) {
    this.modelsModule = t, this.apiClient = o;
  }
  create(t) {
    return new K_(this.apiClient, this.modelsModule, t.model, t.config, structuredClone(t.history));
  }
}
class K_ {
  constructor(t, o, a, s = {}, c = []) {
    this.apiClient = t, this.modelsModule = o, this.model = a, this.config = s, this.history = c, this.sendPromise = Promise.resolve(), J_(c);
  }
  async sendMessage(t) {
    var o;
    await this.sendPromise;
    const a = xt(t.message), s = this.modelsModule.generateContent({ model: this.model, contents: this.getHistory(true).concat(a), config: (o = t.config) !== null && o !== void 0 ? o : this.config });
    return this.sendPromise = (async () => {
      var c, d, g;
      const y = await s, m = (d = (c = y.candidates) === null || c === void 0 ? void 0 : c[0]) === null || d === void 0 ? void 0 : d.content, v = y.automaticFunctionCallingHistory, _ = this.getHistory(true).length;
      let E = [];
      v != null && (E = (g = v.slice(_)) !== null && g !== void 0 ? g : []);
      const b = m ? [m] : [];
      this.recordHistory(a, b, E);
    })(), await this.sendPromise.catch(() => {
      this.sendPromise = Promise.resolve();
    }), s;
  }
  async sendMessageStream(t) {
    var o;
    await this.sendPromise;
    const a = xt(t.message), s = this.modelsModule.generateContentStream({ model: this.model, contents: this.getHistory(true).concat(a), config: (o = t.config) !== null && o !== void 0 ? o : this.config });
    this.sendPromise = s.then(() => {
    }).catch(() => {
    });
    const c = await s;
    return this.processStreamResponse(c, a);
  }
  getHistory(t = false) {
    const o = t ? hy(this.history) : this.history;
    return structuredClone(o);
  }
  processStreamResponse(t, o) {
    return zn(this, arguments, function* () {
      var s, c, d, g, y, m;
      const v = [];
      try {
        for (var _ = true, E = Fn(t), b; b = yield xe(E.next()), s = b.done, !s; _ = true) {
          g = b.value, _ = false;
          const D = g;
          if (F_(D)) {
            const H = (m = (y = D.candidates) === null || y === void 0 ? void 0 : y[0]) === null || m === void 0 ? void 0 : m.content;
            H !== void 0 && v.push(H);
          }
          yield yield xe(D);
        }
      } catch (D) {
        c = { error: D };
      } finally {
        try {
          !_ && !s && (d = E.return) && (yield xe(d.call(E)));
        } finally {
          if (c) throw c.error;
        }
      }
      this.recordHistory(o, v);
    });
  }
  recordHistory(t, o, a) {
    let s = [];
    o.length > 0 && o.every((c) => c.role !== void 0) ? s = o : s.push({ role: "model", parts: [] }), a && a.length > 0 ? this.history.push(...hy(a)) : this.history.push(t), this.history.push(...s);
  }
}
class Uu extends Error {
  constructor(t) {
    super(t.message), this.name = "ApiError", this.status = t.status, Object.setPrototypeOf(this, Uu.prototype);
  }
}
function $_(n) {
  const t = {}, o = u(n, ["file"]);
  return o != null && f(t, ["file"], o), t;
}
function X_(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  return o != null && f(t, ["sdkHttpResponse"], o), t;
}
function Q_(n) {
  const t = {}, o = u(n, ["name"]);
  return o != null && f(t, ["_url", "file"], iv(o)), t;
}
function Z_(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  return o != null && f(t, ["sdkHttpResponse"], o), t;
}
function W_(n) {
  const t = {}, o = u(n, ["name"]);
  return o != null && f(t, ["_url", "file"], iv(o)), t;
}
function j_(n) {
  const t = {}, o = u(n, ["uris"]);
  return o != null && f(t, ["uris"], o), t;
}
function eC(n, t) {
  const o = {}, a = u(n, ["pageSize"]);
  t !== void 0 && a != null && f(t, ["_query", "pageSize"], a);
  const s = u(n, ["pageToken"]);
  return t !== void 0 && s != null && f(t, ["_query", "pageToken"], s), o;
}
function tC(n) {
  const t = {}, o = u(n, ["config"]);
  return o != null && eC(o, t), t;
}
function nC(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["nextPageToken"]);
  a != null && f(t, ["nextPageToken"], a);
  const s = u(n, ["files"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => d)), f(t, ["files"], c);
  }
  return t;
}
function iC(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["files"]);
  if (a != null) {
    let s = a;
    Array.isArray(s) && (s = s.map((c) => c)), f(t, ["files"], s);
  }
  return t;
}
class oC extends Mi {
  constructor(t) {
    super(), this.apiClient = t, this.list = async (o = {}) => new Xo(Ri.PAGED_ITEM_FILES, (a) => this.listInternal(a), await this.listInternal(o), o);
  }
  async upload(t) {
    if (this.apiClient.isVertexAI()) throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");
    return this.apiClient.uploadFile(t.file, t.config).then((o) => o);
  }
  async download(t) {
    await this.apiClient.downloadFile(t);
  }
  async registerFiles(t) {
    throw new Error("registerFiles is only supported in Node.js environments.");
  }
  async _registerFiles(t) {
    return this.registerFilesInternal(t);
  }
  async listInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = tC(t);
      return c = le("files", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json().then((m) => {
        const v = m;
        return v.sdkHttpResponse = { headers: y.headers }, v;
      })), s.then((y) => {
        const m = nC(y), v = new nE();
        return Object.assign(v, m), v;
      });
    }
  }
  async createInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = $_(t);
      return c = le("upload/v1beta/files", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => {
        const m = X_(y), v = new iE();
        return Object.assign(v, m), v;
      });
    }
  }
  async get(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = W_(t);
      return c = le("files/{file}", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => y);
    }
  }
  async delete(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = Q_(t);
      return c = le("files/{file}", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "DELETE", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json().then((m) => {
        const v = m;
        return v.sdkHttpResponse = { headers: y.headers }, v;
      })), s.then((y) => {
        const m = Z_(y), v = new oE();
        return Object.assign(v, m), v;
      });
    }
  }
  async registerFilesInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = j_(t);
      return c = le("files:register", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => {
        const m = iC(y), v = new lE();
        return Object.assign(v, m), v;
      });
    }
  }
}
function gy(n) {
  const t = {};
  if (u(n, ["languageCodes"]) !== void 0) throw new Error("languageCodes parameter is not supported in Gemini API.");
  return t;
}
function lC(n) {
  const t = {}, o = u(n, ["apiKey"]);
  if (o != null && f(t, ["apiKey"], o), u(n, ["apiKeyConfig"]) !== void 0) throw new Error("apiKeyConfig parameter is not supported in Gemini API.");
  if (u(n, ["authType"]) !== void 0) throw new Error("authType parameter is not supported in Gemini API.");
  if (u(n, ["googleServiceAccountConfig"]) !== void 0) throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");
  if (u(n, ["httpBasicAuthConfig"]) !== void 0) throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oauthConfig"]) !== void 0) throw new Error("oauthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oidcConfig"]) !== void 0) throw new Error("oidcConfig parameter is not supported in Gemini API.");
  return t;
}
function _u(n) {
  const t = {}, o = u(n, ["data"]);
  if (o != null && f(t, ["data"], o), u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const a = u(n, ["mimeType"]);
  return a != null && f(t, ["mimeType"], a), t;
}
function aC(n) {
  const t = {}, o = u(n, ["parts"]);
  if (o != null) {
    let s = o;
    Array.isArray(s) && (s = s.map((c) => _C(c))), f(t, ["parts"], s);
  }
  const a = u(n, ["role"]);
  return a != null && f(t, ["role"], a), t;
}
function sC(n) {
  const t = {};
  if (u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const o = u(n, ["fileUri"]);
  o != null && f(t, ["fileUri"], o);
  const a = u(n, ["mimeType"]);
  return a != null && f(t, ["mimeType"], a), t;
}
function rC(n) {
  const t = {}, o = u(n, ["id"]);
  o != null && f(t, ["id"], o);
  const a = u(n, ["args"]);
  a != null && f(t, ["args"], a);
  const s = u(n, ["name"]);
  if (s != null && f(t, ["name"], s), u(n, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (u(n, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
  return t;
}
function uC(n) {
  const t = {}, o = u(n, ["description"]);
  o != null && f(t, ["description"], o);
  const a = u(n, ["name"]);
  a != null && f(t, ["name"], a);
  const s = u(n, ["parameters"]);
  s != null && f(t, ["parameters"], s);
  const c = u(n, ["parametersJsonSchema"]);
  c != null && f(t, ["parametersJsonSchema"], c);
  const d = u(n, ["response"]);
  d != null && f(t, ["response"], d);
  const g = u(n, ["responseJsonSchema"]);
  if (g != null && f(t, ["responseJsonSchema"], g), u(n, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
  return t;
}
function cC(n) {
  const t = {}, o = u(n, ["modelSelectionConfig"]);
  o != null && f(t, ["modelConfig"], o);
  const a = u(n, ["responseJsonSchema"]);
  a != null && f(t, ["responseJsonSchema"], a);
  const s = u(n, ["audioTimestamp"]);
  s != null && f(t, ["audioTimestamp"], s);
  const c = u(n, ["candidateCount"]);
  c != null && f(t, ["candidateCount"], c);
  const d = u(n, ["enableAffectiveDialog"]);
  d != null && f(t, ["enableAffectiveDialog"], d);
  const g = u(n, ["frequencyPenalty"]);
  g != null && f(t, ["frequencyPenalty"], g);
  const y = u(n, ["logprobs"]);
  y != null && f(t, ["logprobs"], y);
  const m = u(n, ["maxOutputTokens"]);
  m != null && f(t, ["maxOutputTokens"], m);
  const v = u(n, ["mediaResolution"]);
  v != null && f(t, ["mediaResolution"], v);
  const _ = u(n, ["presencePenalty"]);
  _ != null && f(t, ["presencePenalty"], _);
  const E = u(n, ["responseLogprobs"]);
  E != null && f(t, ["responseLogprobs"], E);
  const b = u(n, ["responseMimeType"]);
  b != null && f(t, ["responseMimeType"], b);
  const D = u(n, ["responseModalities"]);
  D != null && f(t, ["responseModalities"], D);
  const H = u(n, ["responseSchema"]);
  H != null && f(t, ["responseSchema"], H);
  const P = u(n, ["routingConfig"]);
  P != null && f(t, ["routingConfig"], P);
  const V = u(n, ["seed"]);
  V != null && f(t, ["seed"], V);
  const ie = u(n, ["speechConfig"]);
  ie != null && f(t, ["speechConfig"], ie);
  const X = u(n, ["stopSequences"]);
  X != null && f(t, ["stopSequences"], X);
  const j = u(n, ["temperature"]);
  j != null && f(t, ["temperature"], j);
  const ae = u(n, ["thinkingConfig"]);
  ae != null && f(t, ["thinkingConfig"], ae);
  const Y = u(n, ["topK"]);
  Y != null && f(t, ["topK"], Y);
  const ne = u(n, ["topP"]);
  if (ne != null && f(t, ["topP"], ne), u(n, ["enableEnhancedCivicAnswers"]) !== void 0) throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
  return t;
}
function fC(n) {
  const t = {}, o = u(n, ["authConfig"]);
  o != null && f(t, ["authConfig"], lC(o));
  const a = u(n, ["enableWidget"]);
  return a != null && f(t, ["enableWidget"], a), t;
}
function dC(n) {
  const t = {}, o = u(n, ["searchTypes"]);
  if (o != null && f(t, ["searchTypes"], o), u(n, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  if (u(n, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const a = u(n, ["timeRangeFilter"]);
  return a != null && f(t, ["timeRangeFilter"], a), t;
}
function pC(n, t) {
  const o = {}, a = u(n, ["generationConfig"]);
  t !== void 0 && a != null && f(t, ["setup", "generationConfig"], a);
  const s = u(n, ["responseModalities"]);
  t !== void 0 && s != null && f(t, ["setup", "generationConfig", "responseModalities"], s);
  const c = u(n, ["temperature"]);
  t !== void 0 && c != null && f(t, ["setup", "generationConfig", "temperature"], c);
  const d = u(n, ["topP"]);
  t !== void 0 && d != null && f(t, ["setup", "generationConfig", "topP"], d);
  const g = u(n, ["topK"]);
  t !== void 0 && g != null && f(t, ["setup", "generationConfig", "topK"], g);
  const y = u(n, ["maxOutputTokens"]);
  t !== void 0 && y != null && f(t, ["setup", "generationConfig", "maxOutputTokens"], y);
  const m = u(n, ["mediaResolution"]);
  t !== void 0 && m != null && f(t, ["setup", "generationConfig", "mediaResolution"], m);
  const v = u(n, ["seed"]);
  t !== void 0 && v != null && f(t, ["setup", "generationConfig", "seed"], v);
  const _ = u(n, ["speechConfig"]);
  t !== void 0 && _ != null && f(t, ["setup", "generationConfig", "speechConfig"], Ed(_));
  const E = u(n, ["thinkingConfig"]);
  t !== void 0 && E != null && f(t, ["setup", "generationConfig", "thinkingConfig"], E);
  const b = u(n, ["enableAffectiveDialog"]);
  t !== void 0 && b != null && f(t, ["setup", "generationConfig", "enableAffectiveDialog"], b);
  const D = u(n, ["systemInstruction"]);
  t !== void 0 && D != null && f(t, ["setup", "systemInstruction"], aC(xt(D)));
  const H = u(n, ["tools"]);
  if (t !== void 0 && H != null) {
    let Y = sa(H);
    Array.isArray(Y) && (Y = Y.map((ne) => AC(aa(ne)))), f(t, ["setup", "tools"], Y);
  }
  const P = u(n, ["sessionResumption"]);
  t !== void 0 && P != null && f(t, ["setup", "sessionResumption"], CC(P));
  const V = u(n, ["inputAudioTranscription"]);
  t !== void 0 && V != null && f(t, ["setup", "inputAudioTranscription"], gy(V));
  const ie = u(n, ["outputAudioTranscription"]);
  t !== void 0 && ie != null && f(t, ["setup", "outputAudioTranscription"], gy(ie));
  const X = u(n, ["realtimeInputConfig"]);
  t !== void 0 && X != null && f(t, ["setup", "realtimeInputConfig"], X);
  const j = u(n, ["contextWindowCompression"]);
  t !== void 0 && j != null && f(t, ["setup", "contextWindowCompression"], j);
  const ae = u(n, ["proactivity"]);
  if (t !== void 0 && ae != null && f(t, ["setup", "proactivity"], ae), u(n, ["explicitVadSignal"]) !== void 0) throw new Error("explicitVadSignal parameter is not supported in Gemini API.");
  return o;
}
function mC(n, t) {
  const o = {}, a = u(n, ["generationConfig"]);
  t !== void 0 && a != null && f(t, ["setup", "generationConfig"], cC(a));
  const s = u(n, ["responseModalities"]);
  t !== void 0 && s != null && f(t, ["setup", "generationConfig", "responseModalities"], s);
  const c = u(n, ["temperature"]);
  t !== void 0 && c != null && f(t, ["setup", "generationConfig", "temperature"], c);
  const d = u(n, ["topP"]);
  t !== void 0 && d != null && f(t, ["setup", "generationConfig", "topP"], d);
  const g = u(n, ["topK"]);
  t !== void 0 && g != null && f(t, ["setup", "generationConfig", "topK"], g);
  const y = u(n, ["maxOutputTokens"]);
  t !== void 0 && y != null && f(t, ["setup", "generationConfig", "maxOutputTokens"], y);
  const m = u(n, ["mediaResolution"]);
  t !== void 0 && m != null && f(t, ["setup", "generationConfig", "mediaResolution"], m);
  const v = u(n, ["seed"]);
  t !== void 0 && v != null && f(t, ["setup", "generationConfig", "seed"], v);
  const _ = u(n, ["speechConfig"]);
  t !== void 0 && _ != null && f(t, ["setup", "generationConfig", "speechConfig"], Ed(_));
  const E = u(n, ["thinkingConfig"]);
  t !== void 0 && E != null && f(t, ["setup", "generationConfig", "thinkingConfig"], E);
  const b = u(n, ["enableAffectiveDialog"]);
  t !== void 0 && b != null && f(t, ["setup", "generationConfig", "enableAffectiveDialog"], b);
  const D = u(n, ["systemInstruction"]);
  t !== void 0 && D != null && f(t, ["setup", "systemInstruction"], xt(D));
  const H = u(n, ["tools"]);
  if (t !== void 0 && H != null) {
    let ne = sa(H);
    Array.isArray(ne) && (ne = ne.map((Te) => xC(aa(Te)))), f(t, ["setup", "tools"], ne);
  }
  const P = u(n, ["sessionResumption"]);
  t !== void 0 && P != null && f(t, ["setup", "sessionResumption"], P);
  const V = u(n, ["inputAudioTranscription"]);
  t !== void 0 && V != null && f(t, ["setup", "inputAudioTranscription"], V);
  const ie = u(n, ["outputAudioTranscription"]);
  t !== void 0 && ie != null && f(t, ["setup", "outputAudioTranscription"], ie);
  const X = u(n, ["realtimeInputConfig"]);
  t !== void 0 && X != null && f(t, ["setup", "realtimeInputConfig"], X);
  const j = u(n, ["contextWindowCompression"]);
  t !== void 0 && j != null && f(t, ["setup", "contextWindowCompression"], j);
  const ae = u(n, ["proactivity"]);
  t !== void 0 && ae != null && f(t, ["setup", "proactivity"], ae);
  const Y = u(n, ["explicitVadSignal"]);
  return t !== void 0 && Y != null && f(t, ["setup", "explicitVadSignal"], Y), o;
}
function hC(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["setup", "model"], qe(n, a));
  const s = u(t, ["config"]);
  return s != null && f(o, ["config"], pC(s, o)), o;
}
function gC(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["setup", "model"], qe(n, a));
  const s = u(t, ["config"]);
  return s != null && f(o, ["config"], mC(s, o)), o;
}
function yC(n) {
  const t = {}, o = u(n, ["musicGenerationConfig"]);
  return o != null && f(t, ["musicGenerationConfig"], o), t;
}
function vC(n) {
  const t = {}, o = u(n, ["weightedPrompts"]);
  if (o != null) {
    let a = o;
    Array.isArray(a) && (a = a.map((s) => s)), f(t, ["weightedPrompts"], a);
  }
  return t;
}
function SC(n) {
  const t = {}, o = u(n, ["media"]);
  if (o != null) {
    let m = Wy(o);
    Array.isArray(m) && (m = m.map((v) => _u(v))), f(t, ["mediaChunks"], m);
  }
  const a = u(n, ["audio"]);
  a != null && f(t, ["audio"], _u(ev(a)));
  const s = u(n, ["audioStreamEnd"]);
  s != null && f(t, ["audioStreamEnd"], s);
  const c = u(n, ["video"]);
  c != null && f(t, ["video"], _u(jy(c)));
  const d = u(n, ["text"]);
  d != null && f(t, ["text"], d);
  const g = u(n, ["activityStart"]);
  g != null && f(t, ["activityStart"], g);
  const y = u(n, ["activityEnd"]);
  return y != null && f(t, ["activityEnd"], y), t;
}
function TC(n) {
  const t = {}, o = u(n, ["media"]);
  if (o != null) {
    let m = Wy(o);
    Array.isArray(m) && (m = m.map((v) => v)), f(t, ["mediaChunks"], m);
  }
  const a = u(n, ["audio"]);
  a != null && f(t, ["audio"], ev(a));
  const s = u(n, ["audioStreamEnd"]);
  s != null && f(t, ["audioStreamEnd"], s);
  const c = u(n, ["video"]);
  c != null && f(t, ["video"], jy(c));
  const d = u(n, ["text"]);
  d != null && f(t, ["text"], d);
  const g = u(n, ["activityStart"]);
  g != null && f(t, ["activityStart"], g);
  const y = u(n, ["activityEnd"]);
  return y != null && f(t, ["activityEnd"], y), t;
}
function EC(n) {
  const t = {}, o = u(n, ["setupComplete"]);
  o != null && f(t, ["setupComplete"], o);
  const a = u(n, ["serverContent"]);
  a != null && f(t, ["serverContent"], a);
  const s = u(n, ["toolCall"]);
  s != null && f(t, ["toolCall"], s);
  const c = u(n, ["toolCallCancellation"]);
  c != null && f(t, ["toolCallCancellation"], c);
  const d = u(n, ["usageMetadata"]);
  d != null && f(t, ["usageMetadata"], bC(d));
  const g = u(n, ["goAway"]);
  g != null && f(t, ["goAway"], g);
  const y = u(n, ["sessionResumptionUpdate"]);
  y != null && f(t, ["sessionResumptionUpdate"], y);
  const m = u(n, ["voiceActivityDetectionSignal"]);
  m != null && f(t, ["voiceActivityDetectionSignal"], m);
  const v = u(n, ["voiceActivity"]);
  return v != null && f(t, ["voiceActivity"], NC(v)), t;
}
function _C(n) {
  const t = {}, o = u(n, ["mediaResolution"]);
  o != null && f(t, ["mediaResolution"], o);
  const a = u(n, ["codeExecutionResult"]);
  a != null && f(t, ["codeExecutionResult"], a);
  const s = u(n, ["executableCode"]);
  s != null && f(t, ["executableCode"], s);
  const c = u(n, ["fileData"]);
  c != null && f(t, ["fileData"], sC(c));
  const d = u(n, ["functionCall"]);
  d != null && f(t, ["functionCall"], rC(d));
  const g = u(n, ["functionResponse"]);
  g != null && f(t, ["functionResponse"], g);
  const y = u(n, ["inlineData"]);
  y != null && f(t, ["inlineData"], _u(y));
  const m = u(n, ["text"]);
  m != null && f(t, ["text"], m);
  const v = u(n, ["thought"]);
  v != null && f(t, ["thought"], v);
  const _ = u(n, ["thoughtSignature"]);
  _ != null && f(t, ["thoughtSignature"], _);
  const E = u(n, ["videoMetadata"]);
  return E != null && f(t, ["videoMetadata"], E), t;
}
function CC(n) {
  const t = {}, o = u(n, ["handle"]);
  if (o != null && f(t, ["handle"], o), u(n, ["transparent"]) !== void 0) throw new Error("transparent parameter is not supported in Gemini API.");
  return t;
}
function AC(n) {
  const t = {};
  if (u(n, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const o = u(n, ["computerUse"]);
  o != null && f(t, ["computerUse"], o);
  const a = u(n, ["fileSearch"]);
  a != null && f(t, ["fileSearch"], a);
  const s = u(n, ["googleSearch"]);
  s != null && f(t, ["googleSearch"], dC(s));
  const c = u(n, ["googleMaps"]);
  c != null && f(t, ["googleMaps"], fC(c));
  const d = u(n, ["codeExecution"]);
  if (d != null && f(t, ["codeExecution"], d), u(n, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = u(n, ["functionDeclarations"]);
  if (g != null) {
    let _ = g;
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["functionDeclarations"], _);
  }
  const y = u(n, ["googleSearchRetrieval"]);
  if (y != null && f(t, ["googleSearchRetrieval"], y), u(n, ["parallelAiSearch"]) !== void 0) throw new Error("parallelAiSearch parameter is not supported in Gemini API.");
  const m = u(n, ["urlContext"]);
  m != null && f(t, ["urlContext"], m);
  const v = u(n, ["mcpServers"]);
  if (v != null) {
    let _ = v;
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["mcpServers"], _);
  }
  return t;
}
function xC(n) {
  const t = {}, o = u(n, ["retrieval"]);
  o != null && f(t, ["retrieval"], o);
  const a = u(n, ["computerUse"]);
  if (a != null && f(t, ["computerUse"], a), u(n, ["fileSearch"]) !== void 0) throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const s = u(n, ["googleSearch"]);
  s != null && f(t, ["googleSearch"], s);
  const c = u(n, ["googleMaps"]);
  c != null && f(t, ["googleMaps"], c);
  const d = u(n, ["codeExecution"]);
  d != null && f(t, ["codeExecution"], d);
  const g = u(n, ["enterpriseWebSearch"]);
  g != null && f(t, ["enterpriseWebSearch"], g);
  const y = u(n, ["functionDeclarations"]);
  if (y != null) {
    let E = y;
    Array.isArray(E) && (E = E.map((b) => uC(b))), f(t, ["functionDeclarations"], E);
  }
  const m = u(n, ["googleSearchRetrieval"]);
  m != null && f(t, ["googleSearchRetrieval"], m);
  const v = u(n, ["parallelAiSearch"]);
  v != null && f(t, ["parallelAiSearch"], v);
  const _ = u(n, ["urlContext"]);
  if (_ != null && f(t, ["urlContext"], _), u(n, ["mcpServers"]) !== void 0) throw new Error("mcpServers parameter is not supported in Vertex AI.");
  return t;
}
function bC(n) {
  const t = {}, o = u(n, ["promptTokenCount"]);
  o != null && f(t, ["promptTokenCount"], o);
  const a = u(n, ["cachedContentTokenCount"]);
  a != null && f(t, ["cachedContentTokenCount"], a);
  const s = u(n, ["candidatesTokenCount"]);
  s != null && f(t, ["responseTokenCount"], s);
  const c = u(n, ["toolUsePromptTokenCount"]);
  c != null && f(t, ["toolUsePromptTokenCount"], c);
  const d = u(n, ["thoughtsTokenCount"]);
  d != null && f(t, ["thoughtsTokenCount"], d);
  const g = u(n, ["totalTokenCount"]);
  g != null && f(t, ["totalTokenCount"], g);
  const y = u(n, ["promptTokensDetails"]);
  if (y != null) {
    let b = y;
    Array.isArray(b) && (b = b.map((D) => D)), f(t, ["promptTokensDetails"], b);
  }
  const m = u(n, ["cacheTokensDetails"]);
  if (m != null) {
    let b = m;
    Array.isArray(b) && (b = b.map((D) => D)), f(t, ["cacheTokensDetails"], b);
  }
  const v = u(n, ["candidatesTokensDetails"]);
  if (v != null) {
    let b = v;
    Array.isArray(b) && (b = b.map((D) => D)), f(t, ["responseTokensDetails"], b);
  }
  const _ = u(n, ["toolUsePromptTokensDetails"]);
  if (_ != null) {
    let b = _;
    Array.isArray(b) && (b = b.map((D) => D)), f(t, ["toolUsePromptTokensDetails"], b);
  }
  const E = u(n, ["trafficType"]);
  return E != null && f(t, ["trafficType"], E), t;
}
function NC(n) {
  const t = {}, o = u(n, ["type"]);
  return o != null && f(t, ["voiceActivityType"], o), t;
}
function wC(n, t) {
  const o = {}, a = u(n, ["apiKey"]);
  if (a != null && f(o, ["apiKey"], a), u(n, ["apiKeyConfig"]) !== void 0) throw new Error("apiKeyConfig parameter is not supported in Gemini API.");
  if (u(n, ["authType"]) !== void 0) throw new Error("authType parameter is not supported in Gemini API.");
  if (u(n, ["googleServiceAccountConfig"]) !== void 0) throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");
  if (u(n, ["httpBasicAuthConfig"]) !== void 0) throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oauthConfig"]) !== void 0) throw new Error("oauthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oidcConfig"]) !== void 0) throw new Error("oidcConfig parameter is not supported in Gemini API.");
  return o;
}
function RC(n, t) {
  const o = {}, a = u(n, ["data"]);
  if (a != null && f(o, ["data"], a), u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const s = u(n, ["mimeType"]);
  return s != null && f(o, ["mimeType"], s), o;
}
function MC(n, t) {
  const o = {}, a = u(n, ["content"]);
  a != null && f(o, ["content"], a);
  const s = u(n, ["citationMetadata"]);
  s != null && f(o, ["citationMetadata"], IC(s));
  const c = u(n, ["tokenCount"]);
  c != null && f(o, ["tokenCount"], c);
  const d = u(n, ["finishReason"]);
  d != null && f(o, ["finishReason"], d);
  const g = u(n, ["groundingMetadata"]);
  g != null && f(o, ["groundingMetadata"], g);
  const y = u(n, ["avgLogprobs"]);
  y != null && f(o, ["avgLogprobs"], y);
  const m = u(n, ["index"]);
  m != null && f(o, ["index"], m);
  const v = u(n, ["logprobsResult"]);
  v != null && f(o, ["logprobsResult"], v);
  const _ = u(n, ["safetyRatings"]);
  if (_ != null) {
    let b = _;
    Array.isArray(b) && (b = b.map((D) => D)), f(o, ["safetyRatings"], b);
  }
  const E = u(n, ["urlContextMetadata"]);
  return E != null && f(o, ["urlContextMetadata"], E), o;
}
function IC(n, t) {
  const o = {}, a = u(n, ["citationSources"]);
  if (a != null) {
    let s = a;
    Array.isArray(s) && (s = s.map((c) => c)), f(o, ["citations"], s);
  }
  return o;
}
function DC(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["contents"]);
  if (c != null) {
    let d = Tn(c);
    Array.isArray(d) && (d = d.map((g) => g)), f(a, ["contents"], d);
  }
  return a;
}
function UC(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["tokensInfo"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => d)), f(o, ["tokensInfo"], c);
  }
  return o;
}
function LC(n, t) {
  const o = {}, a = u(n, ["values"]);
  a != null && f(o, ["values"], a);
  const s = u(n, ["statistics"]);
  return s != null && f(o, ["statistics"], kC(s)), o;
}
function kC(n, t) {
  const o = {}, a = u(n, ["truncated"]);
  a != null && f(o, ["truncated"], a);
  const s = u(n, ["token_count"]);
  return s != null && f(o, ["tokenCount"], s), o;
}
function Ls(n, t) {
  const o = {}, a = u(n, ["parts"]);
  if (a != null) {
    let c = a;
    Array.isArray(c) && (c = c.map((d) => FA(d))), f(o, ["parts"], c);
  }
  const s = u(n, ["role"]);
  return s != null && f(o, ["role"], s), o;
}
function PC(n, t) {
  const o = {}, a = u(n, ["controlType"]);
  a != null && f(o, ["controlType"], a);
  const s = u(n, ["enableControlImageComputation"]);
  return s != null && f(o, ["computeControl"], s), o;
}
function GC(n, t) {
  const o = {};
  if (u(n, ["systemInstruction"]) !== void 0) throw new Error("systemInstruction parameter is not supported in Gemini API.");
  if (u(n, ["tools"]) !== void 0) throw new Error("tools parameter is not supported in Gemini API.");
  if (u(n, ["generationConfig"]) !== void 0) throw new Error("generationConfig parameter is not supported in Gemini API.");
  return o;
}
function OC(n, t, o) {
  const a = {}, s = u(n, ["systemInstruction"]);
  t !== void 0 && s != null && f(t, ["systemInstruction"], xt(s));
  const c = u(n, ["tools"]);
  if (t !== void 0 && c != null) {
    let g = c;
    Array.isArray(g) && (g = g.map((y) => mv(y))), f(t, ["tools"], g);
  }
  const d = u(n, ["generationConfig"]);
  return t !== void 0 && d != null && f(t, ["generationConfig"], RA(d)), a;
}
function HC(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["contents"]);
  if (c != null) {
    let g = Tn(c);
    Array.isArray(g) && (g = g.map((y) => Ls(y))), f(a, ["contents"], g);
  }
  const d = u(t, ["config"]);
  return d != null && GC(d), a;
}
function BC(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["contents"]);
  if (c != null) {
    let g = Tn(c);
    Array.isArray(g) && (g = g.map((y) => y)), f(a, ["contents"], g);
  }
  const d = u(t, ["config"]);
  return d != null && OC(d, a), a;
}
function qC(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["totalTokens"]);
  s != null && f(o, ["totalTokens"], s);
  const c = u(n, ["cachedContentTokenCount"]);
  return c != null && f(o, ["cachedContentTokenCount"], c), o;
}
function VC(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["totalTokens"]);
  return s != null && f(o, ["totalTokens"], s), o;
}
function zC(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  return s != null && f(a, ["_url", "name"], qe(n, s)), a;
}
function FC(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  return s != null && f(a, ["_url", "name"], qe(n, s)), a;
}
function JC(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  return a != null && f(o, ["sdkHttpResponse"], a), o;
}
function YC(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  return a != null && f(o, ["sdkHttpResponse"], a), o;
}
function KC(n, t, o) {
  const a = {}, s = u(n, ["outputGcsUri"]);
  t !== void 0 && s != null && f(t, ["parameters", "storageUri"], s);
  const c = u(n, ["negativePrompt"]);
  t !== void 0 && c != null && f(t, ["parameters", "negativePrompt"], c);
  const d = u(n, ["numberOfImages"]);
  t !== void 0 && d != null && f(t, ["parameters", "sampleCount"], d);
  const g = u(n, ["aspectRatio"]);
  t !== void 0 && g != null && f(t, ["parameters", "aspectRatio"], g);
  const y = u(n, ["guidanceScale"]);
  t !== void 0 && y != null && f(t, ["parameters", "guidanceScale"], y);
  const m = u(n, ["seed"]);
  t !== void 0 && m != null && f(t, ["parameters", "seed"], m);
  const v = u(n, ["safetyFilterLevel"]);
  t !== void 0 && v != null && f(t, ["parameters", "safetySetting"], v);
  const _ = u(n, ["personGeneration"]);
  t !== void 0 && _ != null && f(t, ["parameters", "personGeneration"], _);
  const E = u(n, ["includeSafetyAttributes"]);
  t !== void 0 && E != null && f(t, ["parameters", "includeSafetyAttributes"], E);
  const b = u(n, ["includeRaiReason"]);
  t !== void 0 && b != null && f(t, ["parameters", "includeRaiReason"], b);
  const D = u(n, ["language"]);
  t !== void 0 && D != null && f(t, ["parameters", "language"], D);
  const H = u(n, ["outputMimeType"]);
  t !== void 0 && H != null && f(t, ["parameters", "outputOptions", "mimeType"], H);
  const P = u(n, ["outputCompressionQuality"]);
  t !== void 0 && P != null && f(t, ["parameters", "outputOptions", "compressionQuality"], P);
  const V = u(n, ["addWatermark"]);
  t !== void 0 && V != null && f(t, ["parameters", "addWatermark"], V);
  const ie = u(n, ["labels"]);
  t !== void 0 && ie != null && f(t, ["labels"], ie);
  const X = u(n, ["editMode"]);
  t !== void 0 && X != null && f(t, ["parameters", "editMode"], X);
  const j = u(n, ["baseSteps"]);
  return t !== void 0 && j != null && f(t, ["parameters", "editConfig", "baseSteps"], j), a;
}
function $C(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["prompt"]);
  c != null && f(a, ["instances[0]", "prompt"], c);
  const d = u(t, ["referenceImages"]);
  if (d != null) {
    let y = d;
    Array.isArray(y) && (y = y.map((m) => QA(m))), f(a, ["instances[0]", "referenceImages"], y);
  }
  const g = u(t, ["config"]);
  return g != null && KC(g, a), a;
}
function XC(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["predictions"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => Lu(d))), f(o, ["generatedImages"], c);
  }
  return o;
}
function QC(n, t, o) {
  const a = {}, s = u(n, ["taskType"]);
  t !== void 0 && s != null && f(t, ["requests[]", "taskType"], s);
  const c = u(n, ["title"]);
  t !== void 0 && c != null && f(t, ["requests[]", "title"], c);
  const d = u(n, ["outputDimensionality"]);
  if (t !== void 0 && d != null && f(t, ["requests[]", "outputDimensionality"], d), u(n, ["mimeType"]) !== void 0) throw new Error("mimeType parameter is not supported in Gemini API.");
  if (u(n, ["autoTruncate"]) !== void 0) throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return a;
}
function ZC(n, t, o) {
  const a = {};
  let s = u(o, ["embeddingApiType"]);
  if (s === void 0 && (s = "PREDICT"), s === "PREDICT") {
    const m = u(n, ["taskType"]);
    t !== void 0 && m != null && f(t, ["instances[]", "task_type"], m);
  } else if (s === "EMBED_CONTENT") {
    const m = u(n, ["taskType"]);
    t !== void 0 && m != null && f(t, ["taskType"], m);
  }
  let c = u(o, ["embeddingApiType"]);
  if (c === void 0 && (c = "PREDICT"), c === "PREDICT") {
    const m = u(n, ["title"]);
    t !== void 0 && m != null && f(t, ["instances[]", "title"], m);
  } else if (c === "EMBED_CONTENT") {
    const m = u(n, ["title"]);
    t !== void 0 && m != null && f(t, ["title"], m);
  }
  let d = u(o, ["embeddingApiType"]);
  if (d === void 0 && (d = "PREDICT"), d === "PREDICT") {
    const m = u(n, ["outputDimensionality"]);
    t !== void 0 && m != null && f(t, ["parameters", "outputDimensionality"], m);
  } else if (d === "EMBED_CONTENT") {
    const m = u(n, ["outputDimensionality"]);
    t !== void 0 && m != null && f(t, ["outputDimensionality"], m);
  }
  let g = u(o, ["embeddingApiType"]);
  if (g === void 0 && (g = "PREDICT"), g === "PREDICT") {
    const m = u(n, ["mimeType"]);
    t !== void 0 && m != null && f(t, ["instances[]", "mimeType"], m);
  }
  let y = u(o, ["embeddingApiType"]);
  if (y === void 0 && (y = "PREDICT"), y === "PREDICT") {
    const m = u(n, ["autoTruncate"]);
    t !== void 0 && m != null && f(t, ["parameters", "autoTruncate"], m);
  } else if (y === "EMBED_CONTENT") {
    const m = u(n, ["autoTruncate"]);
    t !== void 0 && m != null && f(t, ["autoTruncate"], m);
  }
  return a;
}
function WC(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["contents"]);
  if (c != null) {
    let m = vd(n, c);
    Array.isArray(m) && (m = m.map((v) => v)), f(a, ["requests[]", "content"], m);
  }
  const d = u(t, ["content"]);
  d != null && Ls(xt(d));
  const g = u(t, ["config"]);
  g != null && QC(g, a);
  const y = u(t, ["model"]);
  return y !== void 0 && f(a, ["requests[]", "model"], qe(n, y)), a;
}
function jC(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  let c = u(o, ["embeddingApiType"]);
  if (c === void 0 && (c = "PREDICT"), c === "PREDICT") {
    const y = u(t, ["contents"]);
    if (y != null) {
      let m = vd(n, y);
      Array.isArray(m) && (m = m.map((v) => v)), f(a, ["instances[]", "content"], m);
    }
  }
  let d = u(o, ["embeddingApiType"]);
  if (d === void 0 && (d = "PREDICT"), d === "EMBED_CONTENT") {
    const y = u(t, ["content"]);
    y != null && f(a, ["content"], xt(y));
  }
  const g = u(t, ["config"]);
  return g != null && ZC(g, a, o), a;
}
function eA(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["embeddings"]);
  if (s != null) {
    let d = s;
    Array.isArray(d) && (d = d.map((g) => g)), f(o, ["embeddings"], d);
  }
  const c = u(n, ["metadata"]);
  return c != null && f(o, ["metadata"], c), o;
}
function tA(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["predictions[]", "embeddings"]);
  if (s != null) {
    let d = s;
    Array.isArray(d) && (d = d.map((g) => LC(g))), f(o, ["embeddings"], d);
  }
  const c = u(n, ["metadata"]);
  if (c != null && f(o, ["metadata"], c), t && u(t, ["embeddingApiType"]) === "EMBED_CONTENT") {
    const d = u(n, ["embedding"]), g = u(n, ["usageMetadata"]), y = u(n, ["truncated"]);
    if (d) {
      const m = {};
      g && g.promptTokenCount && (m.tokenCount = g.promptTokenCount), y && (m.truncated = y), d.statistics = m, f(o, ["embeddings"], [d]);
    }
  }
  return o;
}
function nA(n, t) {
  const o = {}, a = u(n, ["endpoint"]);
  a != null && f(o, ["name"], a);
  const s = u(n, ["deployedModelId"]);
  return s != null && f(o, ["deployedModelId"], s), o;
}
function iA(n, t) {
  const o = {};
  if (u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const a = u(n, ["fileUri"]);
  a != null && f(o, ["fileUri"], a);
  const s = u(n, ["mimeType"]);
  return s != null && f(o, ["mimeType"], s), o;
}
function oA(n, t) {
  const o = {}, a = u(n, ["id"]);
  a != null && f(o, ["id"], a);
  const s = u(n, ["args"]);
  s != null && f(o, ["args"], s);
  const c = u(n, ["name"]);
  if (c != null && f(o, ["name"], c), u(n, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (u(n, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
  return o;
}
function lA(n, t) {
  const o = {}, a = u(n, ["allowedFunctionNames"]);
  a != null && f(o, ["allowedFunctionNames"], a);
  const s = u(n, ["mode"]);
  if (s != null && f(o, ["mode"], s), u(n, ["streamFunctionCallArguments"]) !== void 0) throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
  return o;
}
function aA(n, t) {
  const o = {}, a = u(n, ["description"]);
  a != null && f(o, ["description"], a);
  const s = u(n, ["name"]);
  s != null && f(o, ["name"], s);
  const c = u(n, ["parameters"]);
  c != null && f(o, ["parameters"], c);
  const d = u(n, ["parametersJsonSchema"]);
  d != null && f(o, ["parametersJsonSchema"], d);
  const g = u(n, ["response"]);
  g != null && f(o, ["response"], g);
  const y = u(n, ["responseJsonSchema"]);
  if (y != null && f(o, ["responseJsonSchema"], y), u(n, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
  return o;
}
function sA(n, t, o, a) {
  const s = {}, c = u(t, ["systemInstruction"]);
  o !== void 0 && c != null && f(o, ["systemInstruction"], Ls(xt(c)));
  const d = u(t, ["temperature"]);
  d != null && f(s, ["temperature"], d);
  const g = u(t, ["topP"]);
  g != null && f(s, ["topP"], g);
  const y = u(t, ["topK"]);
  y != null && f(s, ["topK"], y);
  const m = u(t, ["candidateCount"]);
  m != null && f(s, ["candidateCount"], m);
  const v = u(t, ["maxOutputTokens"]);
  v != null && f(s, ["maxOutputTokens"], v);
  const _ = u(t, ["stopSequences"]);
  _ != null && f(s, ["stopSequences"], _);
  const E = u(t, ["responseLogprobs"]);
  E != null && f(s, ["responseLogprobs"], E);
  const b = u(t, ["logprobs"]);
  b != null && f(s, ["logprobs"], b);
  const D = u(t, ["presencePenalty"]);
  D != null && f(s, ["presencePenalty"], D);
  const H = u(t, ["frequencyPenalty"]);
  H != null && f(s, ["frequencyPenalty"], H);
  const P = u(t, ["seed"]);
  P != null && f(s, ["seed"], P);
  const V = u(t, ["responseMimeType"]);
  V != null && f(s, ["responseMimeType"], V);
  const ie = u(t, ["responseSchema"]);
  ie != null && f(s, ["responseSchema"], Sd(ie));
  const X = u(t, ["responseJsonSchema"]);
  if (X != null && f(s, ["responseJsonSchema"], X), u(t, ["routingConfig"]) !== void 0) throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (u(t, ["modelSelectionConfig"]) !== void 0) throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  const j = u(t, ["safetySettings"]);
  if (o !== void 0 && j != null) {
    let Ee = j;
    Array.isArray(Ee) && (Ee = Ee.map((Fe) => ZA(Fe))), f(o, ["safetySettings"], Ee);
  }
  const ae = u(t, ["tools"]);
  if (o !== void 0 && ae != null) {
    let Ee = sa(ae);
    Array.isArray(Ee) && (Ee = Ee.map((Fe) => ox(aa(Fe)))), f(o, ["tools"], Ee);
  }
  const Y = u(t, ["toolConfig"]);
  if (o !== void 0 && Y != null && f(o, ["toolConfig"], ix(Y)), u(t, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
  const ne = u(t, ["cachedContent"]);
  o !== void 0 && ne != null && f(o, ["cachedContent"], Ii(n, ne));
  const Te = u(t, ["responseModalities"]);
  Te != null && f(s, ["responseModalities"], Te);
  const re = u(t, ["mediaResolution"]);
  re != null && f(s, ["mediaResolution"], re);
  const ve = u(t, ["speechConfig"]);
  if (ve != null && f(s, ["speechConfig"], Td(ve)), u(t, ["audioTimestamp"]) !== void 0) throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const pe = u(t, ["thinkingConfig"]);
  pe != null && f(s, ["thinkingConfig"], pe);
  const Z = u(t, ["imageConfig"]);
  Z != null && f(s, ["imageConfig"], LA(Z));
  const ge = u(t, ["enableEnhancedCivicAnswers"]);
  if (ge != null && f(s, ["enableEnhancedCivicAnswers"], ge), u(t, ["modelArmorConfig"]) !== void 0) throw new Error("modelArmorConfig parameter is not supported in Gemini API.");
  return s;
}
function rA(n, t, o, a) {
  const s = {}, c = u(t, ["systemInstruction"]);
  o !== void 0 && c != null && f(o, ["systemInstruction"], xt(c));
  const d = u(t, ["temperature"]);
  d != null && f(s, ["temperature"], d);
  const g = u(t, ["topP"]);
  g != null && f(s, ["topP"], g);
  const y = u(t, ["topK"]);
  y != null && f(s, ["topK"], y);
  const m = u(t, ["candidateCount"]);
  m != null && f(s, ["candidateCount"], m);
  const v = u(t, ["maxOutputTokens"]);
  v != null && f(s, ["maxOutputTokens"], v);
  const _ = u(t, ["stopSequences"]);
  _ != null && f(s, ["stopSequences"], _);
  const E = u(t, ["responseLogprobs"]);
  E != null && f(s, ["responseLogprobs"], E);
  const b = u(t, ["logprobs"]);
  b != null && f(s, ["logprobs"], b);
  const D = u(t, ["presencePenalty"]);
  D != null && f(s, ["presencePenalty"], D);
  const H = u(t, ["frequencyPenalty"]);
  H != null && f(s, ["frequencyPenalty"], H);
  const P = u(t, ["seed"]);
  P != null && f(s, ["seed"], P);
  const V = u(t, ["responseMimeType"]);
  V != null && f(s, ["responseMimeType"], V);
  const ie = u(t, ["responseSchema"]);
  ie != null && f(s, ["responseSchema"], Sd(ie));
  const X = u(t, ["responseJsonSchema"]);
  X != null && f(s, ["responseJsonSchema"], X);
  const j = u(t, ["routingConfig"]);
  j != null && f(s, ["routingConfig"], j);
  const ae = u(t, ["modelSelectionConfig"]);
  ae != null && f(s, ["modelConfig"], ae);
  const Y = u(t, ["safetySettings"]);
  if (o !== void 0 && Y != null) {
    let ce = Y;
    Array.isArray(ce) && (ce = ce.map((Ue) => Ue)), f(o, ["safetySettings"], ce);
  }
  const ne = u(t, ["tools"]);
  if (o !== void 0 && ne != null) {
    let ce = sa(ne);
    Array.isArray(ce) && (ce = ce.map((Ue) => mv(aa(Ue)))), f(o, ["tools"], ce);
  }
  const Te = u(t, ["toolConfig"]);
  o !== void 0 && Te != null && f(o, ["toolConfig"], Te);
  const re = u(t, ["labels"]);
  o !== void 0 && re != null && f(o, ["labels"], re);
  const ve = u(t, ["cachedContent"]);
  o !== void 0 && ve != null && f(o, ["cachedContent"], Ii(n, ve));
  const pe = u(t, ["responseModalities"]);
  pe != null && f(s, ["responseModalities"], pe);
  const Z = u(t, ["mediaResolution"]);
  Z != null && f(s, ["mediaResolution"], Z);
  const ge = u(t, ["speechConfig"]);
  ge != null && f(s, ["speechConfig"], Td(ge));
  const Ee = u(t, ["audioTimestamp"]);
  Ee != null && f(s, ["audioTimestamp"], Ee);
  const Fe = u(t, ["thinkingConfig"]);
  Fe != null && f(s, ["thinkingConfig"], Fe);
  const B = u(t, ["imageConfig"]);
  if (B != null && f(s, ["imageConfig"], kA(B)), u(t, ["enableEnhancedCivicAnswers"]) !== void 0) throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
  const te = u(t, ["modelArmorConfig"]);
  return o !== void 0 && te != null && f(o, ["modelArmorConfig"], te), s;
}
function yy(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["contents"]);
  if (c != null) {
    let g = Tn(c);
    Array.isArray(g) && (g = g.map((y) => Ls(y))), f(a, ["contents"], g);
  }
  const d = u(t, ["config"]);
  return d != null && f(a, ["generationConfig"], sA(n, d, a)), a;
}
function vy(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["contents"]);
  if (c != null) {
    let g = Tn(c);
    Array.isArray(g) && (g = g.map((y) => y)), f(a, ["contents"], g);
  }
  const d = u(t, ["config"]);
  return d != null && f(a, ["generationConfig"], rA(n, d, a)), a;
}
function Sy(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["candidates"]);
  if (s != null) {
    let m = s;
    Array.isArray(m) && (m = m.map((v) => MC(v))), f(o, ["candidates"], m);
  }
  const c = u(n, ["modelVersion"]);
  c != null && f(o, ["modelVersion"], c);
  const d = u(n, ["promptFeedback"]);
  d != null && f(o, ["promptFeedback"], d);
  const g = u(n, ["responseId"]);
  g != null && f(o, ["responseId"], g);
  const y = u(n, ["usageMetadata"]);
  return y != null && f(o, ["usageMetadata"], y), o;
}
function Ty(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["candidates"]);
  if (s != null) {
    let v = s;
    Array.isArray(v) && (v = v.map((_) => _)), f(o, ["candidates"], v);
  }
  const c = u(n, ["createTime"]);
  c != null && f(o, ["createTime"], c);
  const d = u(n, ["modelVersion"]);
  d != null && f(o, ["modelVersion"], d);
  const g = u(n, ["promptFeedback"]);
  g != null && f(o, ["promptFeedback"], g);
  const y = u(n, ["responseId"]);
  y != null && f(o, ["responseId"], y);
  const m = u(n, ["usageMetadata"]);
  return m != null && f(o, ["usageMetadata"], m), o;
}
function uA(n, t, o) {
  const a = {};
  if (u(n, ["outputGcsUri"]) !== void 0) throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (u(n, ["negativePrompt"]) !== void 0) throw new Error("negativePrompt parameter is not supported in Gemini API.");
  const s = u(n, ["numberOfImages"]);
  t !== void 0 && s != null && f(t, ["parameters", "sampleCount"], s);
  const c = u(n, ["aspectRatio"]);
  t !== void 0 && c != null && f(t, ["parameters", "aspectRatio"], c);
  const d = u(n, ["guidanceScale"]);
  if (t !== void 0 && d != null && f(t, ["parameters", "guidanceScale"], d), u(n, ["seed"]) !== void 0) throw new Error("seed parameter is not supported in Gemini API.");
  const g = u(n, ["safetyFilterLevel"]);
  t !== void 0 && g != null && f(t, ["parameters", "safetySetting"], g);
  const y = u(n, ["personGeneration"]);
  t !== void 0 && y != null && f(t, ["parameters", "personGeneration"], y);
  const m = u(n, ["includeSafetyAttributes"]);
  t !== void 0 && m != null && f(t, ["parameters", "includeSafetyAttributes"], m);
  const v = u(n, ["includeRaiReason"]);
  t !== void 0 && v != null && f(t, ["parameters", "includeRaiReason"], v);
  const _ = u(n, ["language"]);
  t !== void 0 && _ != null && f(t, ["parameters", "language"], _);
  const E = u(n, ["outputMimeType"]);
  t !== void 0 && E != null && f(t, ["parameters", "outputOptions", "mimeType"], E);
  const b = u(n, ["outputCompressionQuality"]);
  if (t !== void 0 && b != null && f(t, ["parameters", "outputOptions", "compressionQuality"], b), u(n, ["addWatermark"]) !== void 0) throw new Error("addWatermark parameter is not supported in Gemini API.");
  if (u(n, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
  const D = u(n, ["imageSize"]);
  if (t !== void 0 && D != null && f(t, ["parameters", "sampleImageSize"], D), u(n, ["enhancePrompt"]) !== void 0) throw new Error("enhancePrompt parameter is not supported in Gemini API.");
  return a;
}
function cA(n, t, o) {
  const a = {}, s = u(n, ["outputGcsUri"]);
  t !== void 0 && s != null && f(t, ["parameters", "storageUri"], s);
  const c = u(n, ["negativePrompt"]);
  t !== void 0 && c != null && f(t, ["parameters", "negativePrompt"], c);
  const d = u(n, ["numberOfImages"]);
  t !== void 0 && d != null && f(t, ["parameters", "sampleCount"], d);
  const g = u(n, ["aspectRatio"]);
  t !== void 0 && g != null && f(t, ["parameters", "aspectRatio"], g);
  const y = u(n, ["guidanceScale"]);
  t !== void 0 && y != null && f(t, ["parameters", "guidanceScale"], y);
  const m = u(n, ["seed"]);
  t !== void 0 && m != null && f(t, ["parameters", "seed"], m);
  const v = u(n, ["safetyFilterLevel"]);
  t !== void 0 && v != null && f(t, ["parameters", "safetySetting"], v);
  const _ = u(n, ["personGeneration"]);
  t !== void 0 && _ != null && f(t, ["parameters", "personGeneration"], _);
  const E = u(n, ["includeSafetyAttributes"]);
  t !== void 0 && E != null && f(t, ["parameters", "includeSafetyAttributes"], E);
  const b = u(n, ["includeRaiReason"]);
  t !== void 0 && b != null && f(t, ["parameters", "includeRaiReason"], b);
  const D = u(n, ["language"]);
  t !== void 0 && D != null && f(t, ["parameters", "language"], D);
  const H = u(n, ["outputMimeType"]);
  t !== void 0 && H != null && f(t, ["parameters", "outputOptions", "mimeType"], H);
  const P = u(n, ["outputCompressionQuality"]);
  t !== void 0 && P != null && f(t, ["parameters", "outputOptions", "compressionQuality"], P);
  const V = u(n, ["addWatermark"]);
  t !== void 0 && V != null && f(t, ["parameters", "addWatermark"], V);
  const ie = u(n, ["labels"]);
  t !== void 0 && ie != null && f(t, ["labels"], ie);
  const X = u(n, ["imageSize"]);
  t !== void 0 && X != null && f(t, ["parameters", "sampleImageSize"], X);
  const j = u(n, ["enhancePrompt"]);
  return t !== void 0 && j != null && f(t, ["parameters", "enhancePrompt"], j), a;
}
function fA(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["prompt"]);
  c != null && f(a, ["instances[0]", "prompt"], c);
  const d = u(t, ["config"]);
  return d != null && uA(d, a), a;
}
function dA(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["prompt"]);
  c != null && f(a, ["instances[0]", "prompt"], c);
  const d = u(t, ["config"]);
  return d != null && cA(d, a), a;
}
function pA(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["predictions"]);
  if (s != null) {
    let d = s;
    Array.isArray(d) && (d = d.map((g) => xA(g))), f(o, ["generatedImages"], d);
  }
  const c = u(n, ["positivePromptSafetyAttributes"]);
  return c != null && f(o, ["positivePromptSafetyAttributes"], dv(c)), o;
}
function mA(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["predictions"]);
  if (s != null) {
    let d = s;
    Array.isArray(d) && (d = d.map((g) => Lu(g))), f(o, ["generatedImages"], d);
  }
  const c = u(n, ["positivePromptSafetyAttributes"]);
  return c != null && f(o, ["positivePromptSafetyAttributes"], pv(c)), o;
}
function hA(n, t, o) {
  const a = {}, s = u(n, ["numberOfVideos"]);
  if (t !== void 0 && s != null && f(t, ["parameters", "sampleCount"], s), u(n, ["outputGcsUri"]) !== void 0) throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (u(n, ["fps"]) !== void 0) throw new Error("fps parameter is not supported in Gemini API.");
  const c = u(n, ["durationSeconds"]);
  if (t !== void 0 && c != null && f(t, ["parameters", "durationSeconds"], c), u(n, ["seed"]) !== void 0) throw new Error("seed parameter is not supported in Gemini API.");
  const d = u(n, ["aspectRatio"]);
  t !== void 0 && d != null && f(t, ["parameters", "aspectRatio"], d);
  const g = u(n, ["resolution"]);
  t !== void 0 && g != null && f(t, ["parameters", "resolution"], g);
  const y = u(n, ["personGeneration"]);
  if (t !== void 0 && y != null && f(t, ["parameters", "personGeneration"], y), u(n, ["pubsubTopic"]) !== void 0) throw new Error("pubsubTopic parameter is not supported in Gemini API.");
  const m = u(n, ["negativePrompt"]);
  t !== void 0 && m != null && f(t, ["parameters", "negativePrompt"], m);
  const v = u(n, ["enhancePrompt"]);
  if (t !== void 0 && v != null && f(t, ["parameters", "enhancePrompt"], v), u(n, ["generateAudio"]) !== void 0) throw new Error("generateAudio parameter is not supported in Gemini API.");
  const _ = u(n, ["lastFrame"]);
  t !== void 0 && _ != null && f(t, ["instances[0]", "lastFrame"], ku(_));
  const E = u(n, ["referenceImages"]);
  if (t !== void 0 && E != null) {
    let b = E;
    Array.isArray(b) && (b = b.map((D) => yx(D))), f(t, ["instances[0]", "referenceImages"], b);
  }
  if (u(n, ["mask"]) !== void 0) throw new Error("mask parameter is not supported in Gemini API.");
  if (u(n, ["compressionQuality"]) !== void 0) throw new Error("compressionQuality parameter is not supported in Gemini API.");
  return a;
}
function gA(n, t, o) {
  const a = {}, s = u(n, ["numberOfVideos"]);
  t !== void 0 && s != null && f(t, ["parameters", "sampleCount"], s);
  const c = u(n, ["outputGcsUri"]);
  t !== void 0 && c != null && f(t, ["parameters", "storageUri"], c);
  const d = u(n, ["fps"]);
  t !== void 0 && d != null && f(t, ["parameters", "fps"], d);
  const g = u(n, ["durationSeconds"]);
  t !== void 0 && g != null && f(t, ["parameters", "durationSeconds"], g);
  const y = u(n, ["seed"]);
  t !== void 0 && y != null && f(t, ["parameters", "seed"], y);
  const m = u(n, ["aspectRatio"]);
  t !== void 0 && m != null && f(t, ["parameters", "aspectRatio"], m);
  const v = u(n, ["resolution"]);
  t !== void 0 && v != null && f(t, ["parameters", "resolution"], v);
  const _ = u(n, ["personGeneration"]);
  t !== void 0 && _ != null && f(t, ["parameters", "personGeneration"], _);
  const E = u(n, ["pubsubTopic"]);
  t !== void 0 && E != null && f(t, ["parameters", "pubsubTopic"], E);
  const b = u(n, ["negativePrompt"]);
  t !== void 0 && b != null && f(t, ["parameters", "negativePrompt"], b);
  const D = u(n, ["enhancePrompt"]);
  t !== void 0 && D != null && f(t, ["parameters", "enhancePrompt"], D);
  const H = u(n, ["generateAudio"]);
  t !== void 0 && H != null && f(t, ["parameters", "generateAudio"], H);
  const P = u(n, ["lastFrame"]);
  t !== void 0 && P != null && f(t, ["instances[0]", "lastFrame"], Jn(P));
  const V = u(n, ["referenceImages"]);
  if (t !== void 0 && V != null) {
    let j = V;
    Array.isArray(j) && (j = j.map((ae) => vx(ae))), f(t, ["instances[0]", "referenceImages"], j);
  }
  const ie = u(n, ["mask"]);
  t !== void 0 && ie != null && f(t, ["instances[0]", "mask"], gx(ie));
  const X = u(n, ["compressionQuality"]);
  return t !== void 0 && X != null && f(t, ["parameters", "compressionQuality"], X), a;
}
function yA(n, t) {
  const o = {}, a = u(n, ["name"]);
  a != null && f(o, ["name"], a);
  const s = u(n, ["metadata"]);
  s != null && f(o, ["metadata"], s);
  const c = u(n, ["done"]);
  c != null && f(o, ["done"], c);
  const d = u(n, ["error"]);
  d != null && f(o, ["error"], d);
  const g = u(n, ["response", "generateVideoResponse"]);
  return g != null && f(o, ["response"], EA(g)), o;
}
function vA(n, t) {
  const o = {}, a = u(n, ["name"]);
  a != null && f(o, ["name"], a);
  const s = u(n, ["metadata"]);
  s != null && f(o, ["metadata"], s);
  const c = u(n, ["done"]);
  c != null && f(o, ["done"], c);
  const d = u(n, ["error"]);
  d != null && f(o, ["error"], d);
  const g = u(n, ["response"]);
  return g != null && f(o, ["response"], _A(g)), o;
}
function SA(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["prompt"]);
  c != null && f(a, ["instances[0]", "prompt"], c);
  const d = u(t, ["image"]);
  d != null && f(a, ["instances[0]", "image"], ku(d));
  const g = u(t, ["video"]);
  g != null && f(a, ["instances[0]", "video"], hv(g));
  const y = u(t, ["source"]);
  y != null && CA(y, a);
  const m = u(t, ["config"]);
  return m != null && hA(m, a), a;
}
function TA(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["prompt"]);
  c != null && f(a, ["instances[0]", "prompt"], c);
  const d = u(t, ["image"]);
  d != null && f(a, ["instances[0]", "image"], Jn(d));
  const g = u(t, ["video"]);
  g != null && f(a, ["instances[0]", "video"], gv(g));
  const y = u(t, ["source"]);
  y != null && AA(y, a);
  const m = u(t, ["config"]);
  return m != null && gA(m, a), a;
}
function EA(n, t) {
  const o = {}, a = u(n, ["generatedSamples"]);
  if (a != null) {
    let d = a;
    Array.isArray(d) && (d = d.map((g) => NA(g))), f(o, ["generatedVideos"], d);
  }
  const s = u(n, ["raiMediaFilteredCount"]);
  s != null && f(o, ["raiMediaFilteredCount"], s);
  const c = u(n, ["raiMediaFilteredReasons"]);
  return c != null && f(o, ["raiMediaFilteredReasons"], c), o;
}
function _A(n, t) {
  const o = {}, a = u(n, ["videos"]);
  if (a != null) {
    let d = a;
    Array.isArray(d) && (d = d.map((g) => wA(g))), f(o, ["generatedVideos"], d);
  }
  const s = u(n, ["raiMediaFilteredCount"]);
  s != null && f(o, ["raiMediaFilteredCount"], s);
  const c = u(n, ["raiMediaFilteredReasons"]);
  return c != null && f(o, ["raiMediaFilteredReasons"], c), o;
}
function CA(n, t, o) {
  const a = {}, s = u(n, ["prompt"]);
  t !== void 0 && s != null && f(t, ["instances[0]", "prompt"], s);
  const c = u(n, ["image"]);
  t !== void 0 && c != null && f(t, ["instances[0]", "image"], ku(c));
  const d = u(n, ["video"]);
  return t !== void 0 && d != null && f(t, ["instances[0]", "video"], hv(d)), a;
}
function AA(n, t, o) {
  const a = {}, s = u(n, ["prompt"]);
  t !== void 0 && s != null && f(t, ["instances[0]", "prompt"], s);
  const c = u(n, ["image"]);
  t !== void 0 && c != null && f(t, ["instances[0]", "image"], Jn(c));
  const d = u(n, ["video"]);
  return t !== void 0 && d != null && f(t, ["instances[0]", "video"], gv(d)), a;
}
function xA(n, t) {
  const o = {}, a = u(n, ["_self"]);
  a != null && f(o, ["image"], PA(a));
  const s = u(n, ["raiFilteredReason"]);
  s != null && f(o, ["raiFilteredReason"], s);
  const c = u(n, ["_self"]);
  return c != null && f(o, ["safetyAttributes"], dv(c)), o;
}
function Lu(n, t) {
  const o = {}, a = u(n, ["_self"]);
  a != null && f(o, ["image"], fv(a));
  const s = u(n, ["raiFilteredReason"]);
  s != null && f(o, ["raiFilteredReason"], s);
  const c = u(n, ["_self"]);
  c != null && f(o, ["safetyAttributes"], pv(c));
  const d = u(n, ["prompt"]);
  return d != null && f(o, ["enhancedPrompt"], d), o;
}
function bA(n, t) {
  const o = {}, a = u(n, ["_self"]);
  a != null && f(o, ["mask"], fv(a));
  const s = u(n, ["labels"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => d)), f(o, ["labels"], c);
  }
  return o;
}
function NA(n, t) {
  const o = {}, a = u(n, ["video"]);
  return a != null && f(o, ["video"], mx(a)), o;
}
function wA(n, t) {
  const o = {}, a = u(n, ["_self"]);
  return a != null && f(o, ["video"], hx(a)), o;
}
function RA(n, t) {
  const o = {}, a = u(n, ["modelSelectionConfig"]);
  a != null && f(o, ["modelConfig"], a);
  const s = u(n, ["responseJsonSchema"]);
  s != null && f(o, ["responseJsonSchema"], s);
  const c = u(n, ["audioTimestamp"]);
  c != null && f(o, ["audioTimestamp"], c);
  const d = u(n, ["candidateCount"]);
  d != null && f(o, ["candidateCount"], d);
  const g = u(n, ["enableAffectiveDialog"]);
  g != null && f(o, ["enableAffectiveDialog"], g);
  const y = u(n, ["frequencyPenalty"]);
  y != null && f(o, ["frequencyPenalty"], y);
  const m = u(n, ["logprobs"]);
  m != null && f(o, ["logprobs"], m);
  const v = u(n, ["maxOutputTokens"]);
  v != null && f(o, ["maxOutputTokens"], v);
  const _ = u(n, ["mediaResolution"]);
  _ != null && f(o, ["mediaResolution"], _);
  const E = u(n, ["presencePenalty"]);
  E != null && f(o, ["presencePenalty"], E);
  const b = u(n, ["responseLogprobs"]);
  b != null && f(o, ["responseLogprobs"], b);
  const D = u(n, ["responseMimeType"]);
  D != null && f(o, ["responseMimeType"], D);
  const H = u(n, ["responseModalities"]);
  H != null && f(o, ["responseModalities"], H);
  const P = u(n, ["responseSchema"]);
  P != null && f(o, ["responseSchema"], P);
  const V = u(n, ["routingConfig"]);
  V != null && f(o, ["routingConfig"], V);
  const ie = u(n, ["seed"]);
  ie != null && f(o, ["seed"], ie);
  const X = u(n, ["speechConfig"]);
  X != null && f(o, ["speechConfig"], X);
  const j = u(n, ["stopSequences"]);
  j != null && f(o, ["stopSequences"], j);
  const ae = u(n, ["temperature"]);
  ae != null && f(o, ["temperature"], ae);
  const Y = u(n, ["thinkingConfig"]);
  Y != null && f(o, ["thinkingConfig"], Y);
  const ne = u(n, ["topK"]);
  ne != null && f(o, ["topK"], ne);
  const Te = u(n, ["topP"]);
  if (Te != null && f(o, ["topP"], Te), u(n, ["enableEnhancedCivicAnswers"]) !== void 0) throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
  return o;
}
function MA(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  return s != null && f(a, ["_url", "name"], qe(n, s)), a;
}
function IA(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  return s != null && f(a, ["_url", "name"], qe(n, s)), a;
}
function DA(n, t) {
  const o = {}, a = u(n, ["authConfig"]);
  a != null && f(o, ["authConfig"], wC(a));
  const s = u(n, ["enableWidget"]);
  return s != null && f(o, ["enableWidget"], s), o;
}
function UA(n, t) {
  const o = {}, a = u(n, ["searchTypes"]);
  if (a != null && f(o, ["searchTypes"], a), u(n, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  if (u(n, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const s = u(n, ["timeRangeFilter"]);
  return s != null && f(o, ["timeRangeFilter"], s), o;
}
function LA(n, t) {
  const o = {}, a = u(n, ["aspectRatio"]);
  a != null && f(o, ["aspectRatio"], a);
  const s = u(n, ["imageSize"]);
  if (s != null && f(o, ["imageSize"], s), u(n, ["personGeneration"]) !== void 0) throw new Error("personGeneration parameter is not supported in Gemini API.");
  if (u(n, ["prominentPeople"]) !== void 0) throw new Error("prominentPeople parameter is not supported in Gemini API.");
  if (u(n, ["outputMimeType"]) !== void 0) throw new Error("outputMimeType parameter is not supported in Gemini API.");
  if (u(n, ["outputCompressionQuality"]) !== void 0) throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");
  if (u(n, ["imageOutputOptions"]) !== void 0) throw new Error("imageOutputOptions parameter is not supported in Gemini API.");
  return o;
}
function kA(n, t) {
  const o = {}, a = u(n, ["aspectRatio"]);
  a != null && f(o, ["aspectRatio"], a);
  const s = u(n, ["imageSize"]);
  s != null && f(o, ["imageSize"], s);
  const c = u(n, ["personGeneration"]);
  c != null && f(o, ["personGeneration"], c);
  const d = u(n, ["prominentPeople"]);
  d != null && f(o, ["prominentPeople"], d);
  const g = u(n, ["outputMimeType"]);
  g != null && f(o, ["imageOutputOptions", "mimeType"], g);
  const y = u(n, ["outputCompressionQuality"]);
  y != null && f(o, ["imageOutputOptions", "compressionQuality"], y);
  const m = u(n, ["imageOutputOptions"]);
  return m != null && f(o, ["imageOutputOptions"], m), o;
}
function PA(n, t) {
  const o = {}, a = u(n, ["bytesBase64Encoded"]);
  a != null && f(o, ["imageBytes"], Eo(a));
  const s = u(n, ["mimeType"]);
  return s != null && f(o, ["mimeType"], s), o;
}
function fv(n, t) {
  const o = {}, a = u(n, ["gcsUri"]);
  a != null && f(o, ["gcsUri"], a);
  const s = u(n, ["bytesBase64Encoded"]);
  s != null && f(o, ["imageBytes"], Eo(s));
  const c = u(n, ["mimeType"]);
  return c != null && f(o, ["mimeType"], c), o;
}
function ku(n, t) {
  const o = {};
  if (u(n, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
  const a = u(n, ["imageBytes"]);
  a != null && f(o, ["bytesBase64Encoded"], Eo(a));
  const s = u(n, ["mimeType"]);
  return s != null && f(o, ["mimeType"], s), o;
}
function Jn(n, t) {
  const o = {}, a = u(n, ["gcsUri"]);
  a != null && f(o, ["gcsUri"], a);
  const s = u(n, ["imageBytes"]);
  s != null && f(o, ["bytesBase64Encoded"], Eo(s));
  const c = u(n, ["mimeType"]);
  return c != null && f(o, ["mimeType"], c), o;
}
function GA(n, t, o, a) {
  const s = {}, c = u(t, ["pageSize"]);
  o !== void 0 && c != null && f(o, ["_query", "pageSize"], c);
  const d = u(t, ["pageToken"]);
  o !== void 0 && d != null && f(o, ["_query", "pageToken"], d);
  const g = u(t, ["filter"]);
  o !== void 0 && g != null && f(o, ["_query", "filter"], g);
  const y = u(t, ["queryBase"]);
  return o !== void 0 && y != null && f(o, ["_url", "models_url"], ov(n, y)), s;
}
function OA(n, t, o, a) {
  const s = {}, c = u(t, ["pageSize"]);
  o !== void 0 && c != null && f(o, ["_query", "pageSize"], c);
  const d = u(t, ["pageToken"]);
  o !== void 0 && d != null && f(o, ["_query", "pageToken"], d);
  const g = u(t, ["filter"]);
  o !== void 0 && g != null && f(o, ["_query", "filter"], g);
  const y = u(t, ["queryBase"]);
  return o !== void 0 && y != null && f(o, ["_url", "models_url"], ov(n, y)), s;
}
function HA(n, t, o) {
  const a = {}, s = u(t, ["config"]);
  return s != null && GA(n, s, a), a;
}
function BA(n, t, o) {
  const a = {}, s = u(t, ["config"]);
  return s != null && OA(n, s, a), a;
}
function qA(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["nextPageToken"]);
  s != null && f(o, ["nextPageToken"], s);
  const c = u(n, ["_self"]);
  if (c != null) {
    let d = lv(c);
    Array.isArray(d) && (d = d.map((g) => od(g))), f(o, ["models"], d);
  }
  return o;
}
function VA(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["nextPageToken"]);
  s != null && f(o, ["nextPageToken"], s);
  const c = u(n, ["_self"]);
  if (c != null) {
    let d = lv(c);
    Array.isArray(d) && (d = d.map((g) => ld(g))), f(o, ["models"], d);
  }
  return o;
}
function zA(n, t) {
  const o = {}, a = u(n, ["maskMode"]);
  a != null && f(o, ["maskMode"], a);
  const s = u(n, ["segmentationClasses"]);
  s != null && f(o, ["maskClasses"], s);
  const c = u(n, ["maskDilation"]);
  return c != null && f(o, ["dilation"], c), o;
}
function od(n, t) {
  const o = {}, a = u(n, ["name"]);
  a != null && f(o, ["name"], a);
  const s = u(n, ["displayName"]);
  s != null && f(o, ["displayName"], s);
  const c = u(n, ["description"]);
  c != null && f(o, ["description"], c);
  const d = u(n, ["version"]);
  d != null && f(o, ["version"], d);
  const g = u(n, ["_self"]);
  g != null && f(o, ["tunedModelInfo"], lx(g));
  const y = u(n, ["inputTokenLimit"]);
  y != null && f(o, ["inputTokenLimit"], y);
  const m = u(n, ["outputTokenLimit"]);
  m != null && f(o, ["outputTokenLimit"], m);
  const v = u(n, ["supportedGenerationMethods"]);
  v != null && f(o, ["supportedActions"], v);
  const _ = u(n, ["temperature"]);
  _ != null && f(o, ["temperature"], _);
  const E = u(n, ["maxTemperature"]);
  E != null && f(o, ["maxTemperature"], E);
  const b = u(n, ["topP"]);
  b != null && f(o, ["topP"], b);
  const D = u(n, ["topK"]);
  D != null && f(o, ["topK"], D);
  const H = u(n, ["thinking"]);
  return H != null && f(o, ["thinking"], H), o;
}
function ld(n, t) {
  const o = {}, a = u(n, ["name"]);
  a != null && f(o, ["name"], a);
  const s = u(n, ["displayName"]);
  s != null && f(o, ["displayName"], s);
  const c = u(n, ["description"]);
  c != null && f(o, ["description"], c);
  const d = u(n, ["versionId"]);
  d != null && f(o, ["version"], d);
  const g = u(n, ["deployedModels"]);
  if (g != null) {
    let E = g;
    Array.isArray(E) && (E = E.map((b) => nA(b))), f(o, ["endpoints"], E);
  }
  const y = u(n, ["labels"]);
  y != null && f(o, ["labels"], y);
  const m = u(n, ["_self"]);
  m != null && f(o, ["tunedModelInfo"], ax(m));
  const v = u(n, ["defaultCheckpointId"]);
  v != null && f(o, ["defaultCheckpointId"], v);
  const _ = u(n, ["checkpoints"]);
  if (_ != null) {
    let E = _;
    Array.isArray(E) && (E = E.map((b) => b)), f(o, ["checkpoints"], E);
  }
  return o;
}
function FA(n, t) {
  const o = {}, a = u(n, ["mediaResolution"]);
  a != null && f(o, ["mediaResolution"], a);
  const s = u(n, ["codeExecutionResult"]);
  s != null && f(o, ["codeExecutionResult"], s);
  const c = u(n, ["executableCode"]);
  c != null && f(o, ["executableCode"], c);
  const d = u(n, ["fileData"]);
  d != null && f(o, ["fileData"], iA(d));
  const g = u(n, ["functionCall"]);
  g != null && f(o, ["functionCall"], oA(g));
  const y = u(n, ["functionResponse"]);
  y != null && f(o, ["functionResponse"], y);
  const m = u(n, ["inlineData"]);
  m != null && f(o, ["inlineData"], RC(m));
  const v = u(n, ["text"]);
  v != null && f(o, ["text"], v);
  const _ = u(n, ["thought"]);
  _ != null && f(o, ["thought"], _);
  const E = u(n, ["thoughtSignature"]);
  E != null && f(o, ["thoughtSignature"], E);
  const b = u(n, ["videoMetadata"]);
  return b != null && f(o, ["videoMetadata"], b), o;
}
function JA(n, t) {
  const o = {}, a = u(n, ["productImage"]);
  return a != null && f(o, ["image"], Jn(a)), o;
}
function YA(n, t, o) {
  const a = {}, s = u(n, ["numberOfImages"]);
  t !== void 0 && s != null && f(t, ["parameters", "sampleCount"], s);
  const c = u(n, ["baseSteps"]);
  t !== void 0 && c != null && f(t, ["parameters", "baseSteps"], c);
  const d = u(n, ["outputGcsUri"]);
  t !== void 0 && d != null && f(t, ["parameters", "storageUri"], d);
  const g = u(n, ["seed"]);
  t !== void 0 && g != null && f(t, ["parameters", "seed"], g);
  const y = u(n, ["safetyFilterLevel"]);
  t !== void 0 && y != null && f(t, ["parameters", "safetySetting"], y);
  const m = u(n, ["personGeneration"]);
  t !== void 0 && m != null && f(t, ["parameters", "personGeneration"], m);
  const v = u(n, ["addWatermark"]);
  t !== void 0 && v != null && f(t, ["parameters", "addWatermark"], v);
  const _ = u(n, ["outputMimeType"]);
  t !== void 0 && _ != null && f(t, ["parameters", "outputOptions", "mimeType"], _);
  const E = u(n, ["outputCompressionQuality"]);
  t !== void 0 && E != null && f(t, ["parameters", "outputOptions", "compressionQuality"], E);
  const b = u(n, ["enhancePrompt"]);
  t !== void 0 && b != null && f(t, ["parameters", "enhancePrompt"], b);
  const D = u(n, ["labels"]);
  return t !== void 0 && D != null && f(t, ["labels"], D), a;
}
function KA(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["source"]);
  c != null && XA(c, a);
  const d = u(t, ["config"]);
  return d != null && YA(d, a), a;
}
function $A(n, t) {
  const o = {}, a = u(n, ["predictions"]);
  if (a != null) {
    let s = a;
    Array.isArray(s) && (s = s.map((c) => Lu(c))), f(o, ["generatedImages"], s);
  }
  return o;
}
function XA(n, t, o) {
  const a = {}, s = u(n, ["prompt"]);
  t !== void 0 && s != null && f(t, ["instances[0]", "prompt"], s);
  const c = u(n, ["personImage"]);
  t !== void 0 && c != null && f(t, ["instances[0]", "personImage", "image"], Jn(c));
  const d = u(n, ["productImages"]);
  if (t !== void 0 && d != null) {
    let g = d;
    Array.isArray(g) && (g = g.map((y) => JA(y))), f(t, ["instances[0]", "productImages"], g);
  }
  return a;
}
function QA(n, t) {
  const o = {}, a = u(n, ["referenceImage"]);
  a != null && f(o, ["referenceImage"], Jn(a));
  const s = u(n, ["referenceId"]);
  s != null && f(o, ["referenceId"], s);
  const c = u(n, ["referenceType"]);
  c != null && f(o, ["referenceType"], c);
  const d = u(n, ["maskImageConfig"]);
  d != null && f(o, ["maskImageConfig"], zA(d));
  const g = u(n, ["controlImageConfig"]);
  g != null && f(o, ["controlImageConfig"], PC(g));
  const y = u(n, ["styleImageConfig"]);
  y != null && f(o, ["styleImageConfig"], y);
  const m = u(n, ["subjectImageConfig"]);
  return m != null && f(o, ["subjectImageConfig"], m), o;
}
function dv(n, t) {
  const o = {}, a = u(n, ["safetyAttributes", "categories"]);
  a != null && f(o, ["categories"], a);
  const s = u(n, ["safetyAttributes", "scores"]);
  s != null && f(o, ["scores"], s);
  const c = u(n, ["contentType"]);
  return c != null && f(o, ["contentType"], c), o;
}
function pv(n, t) {
  const o = {}, a = u(n, ["safetyAttributes", "categories"]);
  a != null && f(o, ["categories"], a);
  const s = u(n, ["safetyAttributes", "scores"]);
  s != null && f(o, ["scores"], s);
  const c = u(n, ["contentType"]);
  return c != null && f(o, ["contentType"], c), o;
}
function ZA(n, t) {
  const o = {}, a = u(n, ["category"]);
  if (a != null && f(o, ["category"], a), u(n, ["method"]) !== void 0) throw new Error("method parameter is not supported in Gemini API.");
  const s = u(n, ["threshold"]);
  return s != null && f(o, ["threshold"], s), o;
}
function WA(n, t) {
  const o = {}, a = u(n, ["image"]);
  return a != null && f(o, ["image"], Jn(a)), o;
}
function jA(n, t, o) {
  const a = {}, s = u(n, ["mode"]);
  t !== void 0 && s != null && f(t, ["parameters", "mode"], s);
  const c = u(n, ["maxPredictions"]);
  t !== void 0 && c != null && f(t, ["parameters", "maxPredictions"], c);
  const d = u(n, ["confidenceThreshold"]);
  t !== void 0 && d != null && f(t, ["parameters", "confidenceThreshold"], d);
  const g = u(n, ["maskDilation"]);
  t !== void 0 && g != null && f(t, ["parameters", "maskDilation"], g);
  const y = u(n, ["binaryColorThreshold"]);
  t !== void 0 && y != null && f(t, ["parameters", "binaryColorThreshold"], y);
  const m = u(n, ["labels"]);
  return t !== void 0 && m != null && f(t, ["labels"], m), a;
}
function ex(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["source"]);
  c != null && nx(c, a);
  const d = u(t, ["config"]);
  return d != null && jA(d, a), a;
}
function tx(n, t) {
  const o = {}, a = u(n, ["predictions"]);
  if (a != null) {
    let s = a;
    Array.isArray(s) && (s = s.map((c) => bA(c))), f(o, ["generatedMasks"], s);
  }
  return o;
}
function nx(n, t, o) {
  const a = {}, s = u(n, ["prompt"]);
  t !== void 0 && s != null && f(t, ["instances[0]", "prompt"], s);
  const c = u(n, ["image"]);
  t !== void 0 && c != null && f(t, ["instances[0]", "image"], Jn(c));
  const d = u(n, ["scribbleImage"]);
  return t !== void 0 && d != null && f(t, ["instances[0]", "scribble"], WA(d)), a;
}
function ix(n, t) {
  const o = {}, a = u(n, ["retrievalConfig"]);
  a != null && f(o, ["retrievalConfig"], a);
  const s = u(n, ["functionCallingConfig"]);
  return s != null && f(o, ["functionCallingConfig"], lA(s)), o;
}
function ox(n, t) {
  const o = {};
  if (u(n, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const a = u(n, ["computerUse"]);
  a != null && f(o, ["computerUse"], a);
  const s = u(n, ["fileSearch"]);
  s != null && f(o, ["fileSearch"], s);
  const c = u(n, ["googleSearch"]);
  c != null && f(o, ["googleSearch"], UA(c));
  const d = u(n, ["googleMaps"]);
  d != null && f(o, ["googleMaps"], DA(d));
  const g = u(n, ["codeExecution"]);
  if (g != null && f(o, ["codeExecution"], g), u(n, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const y = u(n, ["functionDeclarations"]);
  if (y != null) {
    let E = y;
    Array.isArray(E) && (E = E.map((b) => b)), f(o, ["functionDeclarations"], E);
  }
  const m = u(n, ["googleSearchRetrieval"]);
  if (m != null && f(o, ["googleSearchRetrieval"], m), u(n, ["parallelAiSearch"]) !== void 0) throw new Error("parallelAiSearch parameter is not supported in Gemini API.");
  const v = u(n, ["urlContext"]);
  v != null && f(o, ["urlContext"], v);
  const _ = u(n, ["mcpServers"]);
  if (_ != null) {
    let E = _;
    Array.isArray(E) && (E = E.map((b) => b)), f(o, ["mcpServers"], E);
  }
  return o;
}
function mv(n, t) {
  const o = {}, a = u(n, ["retrieval"]);
  a != null && f(o, ["retrieval"], a);
  const s = u(n, ["computerUse"]);
  if (s != null && f(o, ["computerUse"], s), u(n, ["fileSearch"]) !== void 0) throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const c = u(n, ["googleSearch"]);
  c != null && f(o, ["googleSearch"], c);
  const d = u(n, ["googleMaps"]);
  d != null && f(o, ["googleMaps"], d);
  const g = u(n, ["codeExecution"]);
  g != null && f(o, ["codeExecution"], g);
  const y = u(n, ["enterpriseWebSearch"]);
  y != null && f(o, ["enterpriseWebSearch"], y);
  const m = u(n, ["functionDeclarations"]);
  if (m != null) {
    let b = m;
    Array.isArray(b) && (b = b.map((D) => aA(D))), f(o, ["functionDeclarations"], b);
  }
  const v = u(n, ["googleSearchRetrieval"]);
  v != null && f(o, ["googleSearchRetrieval"], v);
  const _ = u(n, ["parallelAiSearch"]);
  _ != null && f(o, ["parallelAiSearch"], _);
  const E = u(n, ["urlContext"]);
  if (E != null && f(o, ["urlContext"], E), u(n, ["mcpServers"]) !== void 0) throw new Error("mcpServers parameter is not supported in Vertex AI.");
  return o;
}
function lx(n, t) {
  const o = {}, a = u(n, ["baseModel"]);
  a != null && f(o, ["baseModel"], a);
  const s = u(n, ["createTime"]);
  s != null && f(o, ["createTime"], s);
  const c = u(n, ["updateTime"]);
  return c != null && f(o, ["updateTime"], c), o;
}
function ax(n, t) {
  const o = {}, a = u(n, ["labels", "google-vertex-llm-tuning-base-model-id"]);
  a != null && f(o, ["baseModel"], a);
  const s = u(n, ["createTime"]);
  s != null && f(o, ["createTime"], s);
  const c = u(n, ["updateTime"]);
  return c != null && f(o, ["updateTime"], c), o;
}
function sx(n, t, o) {
  const a = {}, s = u(n, ["displayName"]);
  t !== void 0 && s != null && f(t, ["displayName"], s);
  const c = u(n, ["description"]);
  t !== void 0 && c != null && f(t, ["description"], c);
  const d = u(n, ["defaultCheckpointId"]);
  return t !== void 0 && d != null && f(t, ["defaultCheckpointId"], d), a;
}
function rx(n, t, o) {
  const a = {}, s = u(n, ["displayName"]);
  t !== void 0 && s != null && f(t, ["displayName"], s);
  const c = u(n, ["description"]);
  t !== void 0 && c != null && f(t, ["description"], c);
  const d = u(n, ["defaultCheckpointId"]);
  return t !== void 0 && d != null && f(t, ["defaultCheckpointId"], d), a;
}
function ux(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "name"], qe(n, s));
  const c = u(t, ["config"]);
  return c != null && sx(c, a), a;
}
function cx(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["config"]);
  return c != null && rx(c, a), a;
}
function fx(n, t, o) {
  const a = {}, s = u(n, ["outputGcsUri"]);
  t !== void 0 && s != null && f(t, ["parameters", "storageUri"], s);
  const c = u(n, ["safetyFilterLevel"]);
  t !== void 0 && c != null && f(t, ["parameters", "safetySetting"], c);
  const d = u(n, ["personGeneration"]);
  t !== void 0 && d != null && f(t, ["parameters", "personGeneration"], d);
  const g = u(n, ["includeRaiReason"]);
  t !== void 0 && g != null && f(t, ["parameters", "includeRaiReason"], g);
  const y = u(n, ["outputMimeType"]);
  t !== void 0 && y != null && f(t, ["parameters", "outputOptions", "mimeType"], y);
  const m = u(n, ["outputCompressionQuality"]);
  t !== void 0 && m != null && f(t, ["parameters", "outputOptions", "compressionQuality"], m);
  const v = u(n, ["enhanceInputImage"]);
  t !== void 0 && v != null && f(t, ["parameters", "upscaleConfig", "enhanceInputImage"], v);
  const _ = u(n, ["imagePreservationFactor"]);
  t !== void 0 && _ != null && f(t, ["parameters", "upscaleConfig", "imagePreservationFactor"], _);
  const E = u(n, ["labels"]);
  t !== void 0 && E != null && f(t, ["labels"], E);
  const b = u(n, ["numberOfImages"]);
  t !== void 0 && b != null && f(t, ["parameters", "sampleCount"], b);
  const D = u(n, ["mode"]);
  return t !== void 0 && D != null && f(t, ["parameters", "mode"], D), a;
}
function dx(n, t, o) {
  const a = {}, s = u(t, ["model"]);
  s != null && f(a, ["_url", "model"], qe(n, s));
  const c = u(t, ["image"]);
  c != null && f(a, ["instances[0]", "image"], Jn(c));
  const d = u(t, ["upscaleFactor"]);
  d != null && f(a, ["parameters", "upscaleConfig", "upscaleFactor"], d);
  const g = u(t, ["config"]);
  return g != null && fx(g, a), a;
}
function px(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["predictions"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => Lu(d))), f(o, ["generatedImages"], c);
  }
  return o;
}
function mx(n, t) {
  const o = {}, a = u(n, ["uri"]);
  a != null && f(o, ["uri"], a);
  const s = u(n, ["encodedVideo"]);
  s != null && f(o, ["videoBytes"], Eo(s));
  const c = u(n, ["encoding"]);
  return c != null && f(o, ["mimeType"], c), o;
}
function hx(n, t) {
  const o = {}, a = u(n, ["gcsUri"]);
  a != null && f(o, ["uri"], a);
  const s = u(n, ["bytesBase64Encoded"]);
  s != null && f(o, ["videoBytes"], Eo(s));
  const c = u(n, ["mimeType"]);
  return c != null && f(o, ["mimeType"], c), o;
}
function gx(n, t) {
  const o = {}, a = u(n, ["image"]);
  a != null && f(o, ["_self"], Jn(a));
  const s = u(n, ["maskMode"]);
  return s != null && f(o, ["maskMode"], s), o;
}
function yx(n, t) {
  const o = {}, a = u(n, ["image"]);
  a != null && f(o, ["image"], ku(a));
  const s = u(n, ["referenceType"]);
  return s != null && f(o, ["referenceType"], s), o;
}
function vx(n, t) {
  const o = {}, a = u(n, ["image"]);
  a != null && f(o, ["image"], Jn(a));
  const s = u(n, ["referenceType"]);
  return s != null && f(o, ["referenceType"], s), o;
}
function hv(n, t) {
  const o = {}, a = u(n, ["uri"]);
  a != null && f(o, ["uri"], a);
  const s = u(n, ["videoBytes"]);
  s != null && f(o, ["encodedVideo"], Eo(s));
  const c = u(n, ["mimeType"]);
  return c != null && f(o, ["encoding"], c), o;
}
function gv(n, t) {
  const o = {}, a = u(n, ["uri"]);
  a != null && f(o, ["gcsUri"], a);
  const s = u(n, ["videoBytes"]);
  s != null && f(o, ["bytesBase64Encoded"], Eo(s));
  const c = u(n, ["mimeType"]);
  return c != null && f(o, ["mimeType"], c), o;
}
function Sx(n, t) {
  const o = {}, a = u(n, ["displayName"]);
  return t !== void 0 && a != null && f(t, ["displayName"], a), o;
}
function Tx(n) {
  const t = {}, o = u(n, ["config"]);
  return o != null && Sx(o, t), t;
}
function Ex(n, t) {
  const o = {}, a = u(n, ["force"]);
  return t !== void 0 && a != null && f(t, ["_query", "force"], a), o;
}
function _x(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["_url", "name"], o);
  const a = u(n, ["config"]);
  return a != null && Ex(a, t), t;
}
function Cx(n) {
  const t = {}, o = u(n, ["name"]);
  return o != null && f(t, ["_url", "name"], o), t;
}
function Ax(n, t) {
  const o = {}, a = u(n, ["customMetadata"]);
  if (t !== void 0 && a != null) {
    let c = a;
    Array.isArray(c) && (c = c.map((d) => d)), f(t, ["customMetadata"], c);
  }
  const s = u(n, ["chunkingConfig"]);
  return t !== void 0 && s != null && f(t, ["chunkingConfig"], s), o;
}
function xx(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["name"], o);
  const a = u(n, ["metadata"]);
  a != null && f(t, ["metadata"], a);
  const s = u(n, ["done"]);
  s != null && f(t, ["done"], s);
  const c = u(n, ["error"]);
  c != null && f(t, ["error"], c);
  const d = u(n, ["response"]);
  return d != null && f(t, ["response"], Nx(d)), t;
}
function bx(n) {
  const t = {}, o = u(n, ["fileSearchStoreName"]);
  o != null && f(t, ["_url", "file_search_store_name"], o);
  const a = u(n, ["fileName"]);
  a != null && f(t, ["fileName"], a);
  const s = u(n, ["config"]);
  return s != null && Ax(s, t), t;
}
function Nx(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["parent"]);
  a != null && f(t, ["parent"], a);
  const s = u(n, ["documentName"]);
  return s != null && f(t, ["documentName"], s), t;
}
function wx(n, t) {
  const o = {}, a = u(n, ["pageSize"]);
  t !== void 0 && a != null && f(t, ["_query", "pageSize"], a);
  const s = u(n, ["pageToken"]);
  return t !== void 0 && s != null && f(t, ["_query", "pageToken"], s), o;
}
function Rx(n) {
  const t = {}, o = u(n, ["config"]);
  return o != null && wx(o, t), t;
}
function Mx(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["nextPageToken"]);
  a != null && f(t, ["nextPageToken"], a);
  const s = u(n, ["fileSearchStores"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => d)), f(t, ["fileSearchStores"], c);
  }
  return t;
}
function yv(n, t) {
  const o = {}, a = u(n, ["mimeType"]);
  t !== void 0 && a != null && f(t, ["mimeType"], a);
  const s = u(n, ["displayName"]);
  t !== void 0 && s != null && f(t, ["displayName"], s);
  const c = u(n, ["customMetadata"]);
  if (t !== void 0 && c != null) {
    let g = c;
    Array.isArray(g) && (g = g.map((y) => y)), f(t, ["customMetadata"], g);
  }
  const d = u(n, ["chunkingConfig"]);
  return t !== void 0 && d != null && f(t, ["chunkingConfig"], d), o;
}
function Ix(n) {
  const t = {}, o = u(n, ["fileSearchStoreName"]);
  o != null && f(t, ["_url", "file_search_store_name"], o);
  const a = u(n, ["config"]);
  return a != null && yv(a, t), t;
}
function Dx(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  return o != null && f(t, ["sdkHttpResponse"], o), t;
}
const Ux = "Content-Type", Lx = "X-Server-Timeout", kx = "User-Agent", ad = "x-goog-api-client", Px = "1.45.0", Gx = `google-genai-sdk/${Px}`, Ox = "v1beta1", Hx = "v1beta", Bx = 5, qx = [408, 429, 500, 502, 503, 504];
class Vx {
  constructor(t) {
    var o, a, s;
    this.clientOptions = Object.assign({}, t), this.customBaseUrl = (o = t.httpOptions) === null || o === void 0 ? void 0 : o.baseUrl, this.clientOptions.vertexai && (this.clientOptions.project && this.clientOptions.location ? this.clientOptions.apiKey = void 0 : this.clientOptions.apiKey && (this.clientOptions.project = void 0, this.clientOptions.location = void 0));
    const c = {};
    if (this.clientOptions.vertexai) {
      if (!this.clientOptions.location && !this.clientOptions.apiKey && !this.customBaseUrl && (this.clientOptions.location = "global"), !(this.clientOptions.project && this.clientOptions.location || this.clientOptions.apiKey) && !this.customBaseUrl) throw new Error("Authentication is not set up. Please provide either a project and location, or an API key, or a custom base URL.");
      const g = t.project && t.location || !!t.apiKey;
      this.customBaseUrl && !g ? (c.baseUrl = this.customBaseUrl, this.clientOptions.project = void 0, this.clientOptions.location = void 0) : this.clientOptions.apiKey || this.clientOptions.location === "global" ? c.baseUrl = "https://aiplatform.googleapis.com/" : this.clientOptions.project && this.clientOptions.location && (c.baseUrl = `https://${this.clientOptions.location}-aiplatform.googleapis.com/`), c.apiVersion = (a = this.clientOptions.apiVersion) !== null && a !== void 0 ? a : Ox;
    } else this.clientOptions.apiKey || console.warn("API key should be set when using the Gemini API."), c.apiVersion = (s = this.clientOptions.apiVersion) !== null && s !== void 0 ? s : Hx, c.baseUrl = "https://generativelanguage.googleapis.com/";
    c.headers = this.getDefaultHeaders(), this.clientOptions.httpOptions = c, t.httpOptions && (this.clientOptions.httpOptions = this.patchHttpOptions(c, t.httpOptions));
  }
  isVertexAI() {
    var t;
    return (t = this.clientOptions.vertexai) !== null && t !== void 0 ? t : false;
  }
  getProject() {
    return this.clientOptions.project;
  }
  getLocation() {
    return this.clientOptions.location;
  }
  getCustomBaseUrl() {
    return this.customBaseUrl;
  }
  async getAuthHeaders() {
    const t = new Headers();
    return await this.clientOptions.auth.addAuthHeaders(t), t;
  }
  getApiVersion() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.apiVersion !== void 0) return this.clientOptions.httpOptions.apiVersion;
    throw new Error("API version is not set.");
  }
  getBaseUrl() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.baseUrl !== void 0) return this.clientOptions.httpOptions.baseUrl;
    throw new Error("Base URL is not set.");
  }
  getRequestUrl() {
    return this.getRequestUrlInternal(this.clientOptions.httpOptions);
  }
  getHeaders() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.headers !== void 0) return this.clientOptions.httpOptions.headers;
    throw new Error("Headers are not set.");
  }
  getRequestUrlInternal(t) {
    if (!t || t.baseUrl === void 0 || t.apiVersion === void 0) throw new Error("HTTP options are not correctly set.");
    const a = [t.baseUrl.endsWith("/") ? t.baseUrl.slice(0, -1) : t.baseUrl];
    return t.apiVersion && t.apiVersion !== "" && a.push(t.apiVersion), a.join("/");
  }
  getBaseResourcePath() {
    return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
  }
  getApiKey() {
    return this.clientOptions.apiKey;
  }
  getWebsocketBaseUrl() {
    const t = this.getBaseUrl(), o = new URL(t);
    return o.protocol = o.protocol == "http:" ? "ws" : "wss", o.toString();
  }
  setBaseUrl(t) {
    if (this.clientOptions.httpOptions) this.clientOptions.httpOptions.baseUrl = t;
    else throw new Error("HTTP options are not correctly set.");
  }
  constructUrl(t, o, a) {
    const s = [this.getRequestUrlInternal(o)];
    return a && s.push(this.getBaseResourcePath()), t !== "" && s.push(t), new URL(`${s.join("/")}`);
  }
  shouldPrependVertexProjectPath(t, o) {
    return !(o.baseUrl && o.baseUrlResourceScope === ed.COLLECTION || this.clientOptions.apiKey || !this.clientOptions.vertexai || t.path.startsWith("projects/") || t.httpMethod === "GET" && t.path.startsWith("publishers/google/models"));
  }
  async request(t) {
    let o = this.clientOptions.httpOptions;
    t.httpOptions && (o = this.patchHttpOptions(this.clientOptions.httpOptions, t.httpOptions));
    const a = this.shouldPrependVertexProjectPath(t, o), s = this.constructUrl(t.path, o, a);
    if (t.queryParams) for (const [d, g] of Object.entries(t.queryParams)) s.searchParams.append(d, String(g));
    let c = {};
    if (t.httpMethod === "GET") {
      if (t.body && t.body !== "{}") throw new Error("Request body should be empty for GET request, but got non empty request body");
    } else c.body = t.body;
    return c = await this.includeExtraHttpOptionsToRequestInit(c, o, s.toString(), t.abortSignal), this.unaryApiCall(s, c, t.httpMethod);
  }
  patchHttpOptions(t, o) {
    const a = JSON.parse(JSON.stringify(t));
    for (const [s, c] of Object.entries(o)) typeof c == "object" ? a[s] = Object.assign(Object.assign({}, a[s]), c) : c !== void 0 && (a[s] = c);
    return a;
  }
  async requestStream(t) {
    let o = this.clientOptions.httpOptions;
    t.httpOptions && (o = this.patchHttpOptions(this.clientOptions.httpOptions, t.httpOptions));
    const a = this.shouldPrependVertexProjectPath(t, o), s = this.constructUrl(t.path, o, a);
    (!s.searchParams.has("alt") || s.searchParams.get("alt") !== "sse") && s.searchParams.set("alt", "sse");
    let c = {};
    return c.body = t.body, c = await this.includeExtraHttpOptionsToRequestInit(c, o, s.toString(), t.abortSignal), this.streamApiCall(s, c, t.httpMethod);
  }
  async includeExtraHttpOptionsToRequestInit(t, o, a, s) {
    if (o && o.timeout || s) {
      const c = new AbortController(), d = c.signal;
      if (o.timeout && (o == null ? void 0 : o.timeout) > 0) {
        const g = setTimeout(() => c.abort(), o.timeout);
        g && typeof g.unref == "function" && g.unref();
      }
      s && s.addEventListener("abort", () => {
        c.abort();
      }), t.signal = d;
    }
    return o && o.extraBody !== null && zx(t, o.extraBody), t.headers = await this.getHeadersInternal(o, a), t;
  }
  async unaryApiCall(t, o, a) {
    return this.apiCall(t.toString(), Object.assign(Object.assign({}, o), { method: a })).then(async (s) => (await Ey(s), new td(s))).catch((s) => {
      throw s instanceof Error ? s : new Error(JSON.stringify(s));
    });
  }
  async streamApiCall(t, o, a) {
    return this.apiCall(t.toString(), Object.assign(Object.assign({}, o), { method: a })).then(async (s) => (await Ey(s), this.processStreamResponse(s))).catch((s) => {
      throw s instanceof Error ? s : new Error(JSON.stringify(s));
    });
  }
  processStreamResponse(t) {
    return zn(this, arguments, function* () {
      var a;
      const s = (a = t == null ? void 0 : t.body) === null || a === void 0 ? void 0 : a.getReader(), c = new TextDecoder("utf-8");
      if (!s) throw new Error("Response body is empty");
      try {
        let d = "";
        const g = "data:", y = [`

`, "\r\r", `\r
\r
`];
        for (; ; ) {
          const { done: m, value: v } = yield xe(s.read());
          if (m) {
            if (d.trim().length > 0) throw new Error("Incomplete JSON segment at the end");
            break;
          }
          const _ = c.decode(v, { stream: true });
          try {
            const D = JSON.parse(_);
            if ("error" in D) {
              const H = JSON.parse(JSON.stringify(D.error)), P = H.status, V = H.code, ie = `got status: ${P}. ${JSON.stringify(D)}`;
              if (V >= 400 && V < 600) throw new Uu({ message: ie, status: V });
            }
          } catch (D) {
            if (D.name === "ApiError") throw D;
          }
          d += _;
          let E = -1, b = 0;
          for (; ; ) {
            E = -1, b = 0;
            for (const P of y) {
              const V = d.indexOf(P);
              V !== -1 && (E === -1 || V < E) && (E = V, b = P.length);
            }
            if (E === -1) break;
            const D = d.substring(0, E);
            d = d.substring(E + b);
            const H = D.trim();
            if (H.startsWith(g)) {
              const P = H.substring(g.length).trim();
              try {
                const V = new Response(P, { headers: t == null ? void 0 : t.headers, status: t == null ? void 0 : t.status, statusText: t == null ? void 0 : t.statusText });
                yield yield xe(new td(V));
              } catch (V) {
                throw new Error(`exception parsing stream chunk ${P}. ${V}`);
              }
            }
          }
        }
      } finally {
        s.releaseLock();
      }
    });
  }
  async apiCall(t, o) {
    var a;
    if (!this.clientOptions.httpOptions || !this.clientOptions.httpOptions.retryOptions) return fetch(t, o);
    const s = this.clientOptions.httpOptions.retryOptions;
    return NT(async () => {
      const d = await fetch(t, o);
      if (d.ok) return d;
      throw qx.includes(d.status) ? new Error(`Retryable HTTP Error: ${d.statusText}`) : new Xy.AbortError(`Non-retryable exception ${d.statusText} sending request`);
    }, { retries: ((a = s.attempts) !== null && a !== void 0 ? a : Bx) - 1 });
  }
  getDefaultHeaders() {
    const t = {}, o = Gx + " " + this.clientOptions.userAgentExtra;
    return t[kx] = o, t[ad] = o, t[Ux] = "application/json", t;
  }
  async getHeadersInternal(t, o) {
    const a = new Headers();
    if (t && t.headers) {
      for (const [s, c] of Object.entries(t.headers)) a.append(s, c);
      t.timeout && t.timeout > 0 && a.append(Lx, String(Math.ceil(t.timeout / 1e3)));
    }
    return await this.clientOptions.auth.addAuthHeaders(a, o), a;
  }
  getFileName(t) {
    var o;
    let a = "";
    return typeof t == "string" && (a = t.replace(/[/\\]+$/, ""), a = (o = a.split(/[/\\]/).pop()) !== null && o !== void 0 ? o : ""), a;
  }
  async uploadFile(t, o) {
    var a;
    const s = {};
    o != null && (s.mimeType = o.mimeType, s.name = o.name, s.displayName = o.displayName), s.name && !s.name.startsWith("files/") && (s.name = `files/${s.name}`);
    const c = this.clientOptions.uploader, d = await c.stat(t);
    s.sizeBytes = String(d.size);
    const g = (a = o == null ? void 0 : o.mimeType) !== null && a !== void 0 ? a : d.type;
    if (g === void 0 || g === "") throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
    s.mimeType = g;
    const y = { file: s }, m = this.getFileName(t), v = le("upload/v1beta/files", y._url), _ = await this.fetchUploadUrl(v, s.sizeBytes, s.mimeType, m, y, o == null ? void 0 : o.httpOptions);
    return c.upload(t, _, this);
  }
  async uploadFileToFileSearchStore(t, o, a) {
    var s;
    const c = this.clientOptions.uploader, d = await c.stat(o), g = String(d.size), y = (s = a == null ? void 0 : a.mimeType) !== null && s !== void 0 ? s : d.type;
    if (y === void 0 || y === "") throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
    const m = `upload/v1beta/${t}:uploadToFileSearchStore`, v = this.getFileName(o), _ = {};
    a != null && yv(a, _);
    const E = await this.fetchUploadUrl(m, g, y, v, _, a == null ? void 0 : a.httpOptions);
    return c.uploadToFileSearchStore(o, E, this);
  }
  async downloadFile(t) {
    await this.clientOptions.downloader.download(t, this);
  }
  async fetchUploadUrl(t, o, a, s, c, d) {
    var g;
    let y = {};
    d ? y = d : y = { apiVersion: "", headers: Object.assign({ "Content-Type": "application/json", "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": `${o}`, "X-Goog-Upload-Header-Content-Type": `${a}` }, s ? { "X-Goog-Upload-File-Name": s } : {}) };
    const m = await this.request({ path: t, body: JSON.stringify(c), httpMethod: "POST", httpOptions: y });
    if (!m || !(m != null && m.headers)) throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");
    const v = (g = m == null ? void 0 : m.headers) === null || g === void 0 ? void 0 : g["x-goog-upload-url"];
    if (v === void 0) throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");
    return v;
  }
}
async function Ey(n) {
  var t;
  if (n === void 0) throw new Error("response is undefined");
  if (!n.ok) {
    const o = n.status;
    let a;
    !((t = n.headers.get("content-type")) === null || t === void 0) && t.includes("application/json") ? a = await n.json() : a = { error: { message: await n.text(), code: n.status, status: n.statusText } };
    const s = JSON.stringify(a);
    throw o >= 400 && o < 600 ? new Uu({ message: s, status: o }) : new Error(s);
  }
}
function zx(n, t) {
  if (!t || Object.keys(t).length === 0) return;
  if (n.body instanceof Blob) {
    console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");
    return;
  }
  let o = {};
  if (typeof n.body == "string" && n.body.length > 0) try {
    const c = JSON.parse(n.body);
    if (typeof c == "object" && c !== null && !Array.isArray(c)) o = c;
    else {
      console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");
      return;
    }
  } catch {
    console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");
    return;
  }
  function a(c, d) {
    const g = Object.assign({}, c);
    for (const y in d) if (Object.prototype.hasOwnProperty.call(d, y)) {
      const m = d[y], v = g[y];
      m && typeof m == "object" && !Array.isArray(m) && v && typeof v == "object" && !Array.isArray(v) ? g[y] = a(v, m) : (v && m && typeof v != typeof m && console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${y}". Original type: ${typeof v}, New type: ${typeof m}. Overwriting.`), g[y] = m);
    }
    return g;
  }
  const s = a(o, t);
  n.body = JSON.stringify(s);
}
const Fx = "mcp_used/unknown";
let Jx = false;
function vv(n) {
  for (const t of n) if (Yx(t) || typeof t == "object" && "inputSchema" in t) return true;
  return Jx;
}
function Sv(n) {
  var t;
  const o = (t = n[ad]) !== null && t !== void 0 ? t : "";
  n[ad] = (o + ` ${Fx}`).trimStart();
}
function Yx(n) {
  return n !== null && typeof n == "object" && n instanceof _d;
}
function Kx(n) {
  return zn(this, arguments, function* (o, a = 100) {
    let s, c = 0;
    for (; c < a; ) {
      const d = yield xe(o.listTools({ cursor: s }));
      for (const g of d.tools) yield yield xe(g), c++;
      if (!d.nextCursor) break;
      s = d.nextCursor;
    }
  });
}
class _d {
  constructor(t = [], o) {
    this.mcpTools = [], this.functionNameToMcpClient = {}, this.mcpClients = t, this.config = o;
  }
  static create(t, o) {
    return new _d(t, o);
  }
  async initialize() {
    var t, o, a, s;
    if (this.mcpTools.length > 0) return;
    const c = {}, d = [];
    for (const v of this.mcpClients) try {
      for (var g = true, y = (o = void 0, Fn(Kx(v))), m; m = await y.next(), t = m.done, !t; g = true) {
        s = m.value, g = false;
        const _ = s;
        d.push(_);
        const E = _.name;
        if (c[E]) throw new Error(`Duplicate function name ${E} found in MCP tools. Please ensure function names are unique.`);
        c[E] = v;
      }
    } catch (_) {
      o = { error: _ };
    } finally {
      try {
        !g && !t && (a = y.return) && await a.call(y);
      } finally {
        if (o) throw o.error;
      }
    }
    this.mcpTools = d, this.functionNameToMcpClient = c;
  }
  async tool() {
    return await this.initialize(), hE(this.mcpTools, this.config);
  }
  async callTool(t) {
    await this.initialize();
    const o = [];
    for (const a of t) if (a.name in this.functionNameToMcpClient) {
      const s = this.functionNameToMcpClient[a.name];
      let c;
      this.config.timeout && (c = { timeout: this.config.timeout });
      const d = await s.callTool({ name: a.name, arguments: a.args }, void 0, c);
      o.push({ functionResponse: { name: a.name, response: d.isError ? { error: d } : d } });
    }
    return o;
  }
}
async function $x(n, t, o) {
  const a = new sE();
  let s;
  o.data instanceof Blob ? s = JSON.parse(await o.data.text()) : s = JSON.parse(o.data), Object.assign(a, s), t(a);
}
class Xx {
  constructor(t, o, a) {
    this.apiClient = t, this.auth = o, this.webSocketFactory = a;
  }
  async connect(t) {
    var o, a;
    if (this.apiClient.isVertexAI()) throw new Error("Live music is not supported for Vertex AI.");
    console.warn("Live music generation is experimental and may change in future versions.");
    const s = this.apiClient.getWebsocketBaseUrl(), c = this.apiClient.getApiVersion(), d = Wx(this.apiClient.getDefaultHeaders()), g = this.apiClient.getApiKey(), y = `${s}/ws/google.ai.generativelanguage.${c}.GenerativeService.BidiGenerateMusic?key=${g}`;
    let m = () => {
    };
    const v = new Promise((X) => {
      m = X;
    }), _ = t.callbacks, E = function() {
      m({});
    }, b = this.apiClient, D = { onopen: E, onmessage: (X) => {
      $x(b, _.onmessage, X);
    }, onerror: (o = _ == null ? void 0 : _.onerror) !== null && o !== void 0 ? o : function(X) {
    }, onclose: (a = _ == null ? void 0 : _.onclose) !== null && a !== void 0 ? a : function(X) {
    } }, H = this.webSocketFactory.create(y, Zx(d), D);
    H.connect(), await v;
    const ie = { setup: { model: qe(this.apiClient, t.model) } };
    return H.send(JSON.stringify(ie)), new Qx(H, this.apiClient);
  }
}
class Qx {
  constructor(t, o) {
    this.conn = t, this.apiClient = o;
  }
  async setWeightedPrompts(t) {
    if (!t.weightedPrompts || Object.keys(t.weightedPrompts).length === 0) throw new Error("Weighted prompts must be set and contain at least one entry.");
    const o = vC(t);
    this.conn.send(JSON.stringify({ clientContent: o }));
  }
  async setMusicGenerationConfig(t) {
    t.musicGenerationConfig || (t.musicGenerationConfig = {});
    const o = yC(t);
    this.conn.send(JSON.stringify(o));
  }
  sendPlaybackControl(t) {
    const o = { playbackControl: t };
    this.conn.send(JSON.stringify(o));
  }
  play() {
    this.sendPlaybackControl(ta.PLAY);
  }
  pause() {
    this.sendPlaybackControl(ta.PAUSE);
  }
  stop() {
    this.sendPlaybackControl(ta.STOP);
  }
  resetContext() {
    this.sendPlaybackControl(ta.RESET_CONTEXT);
  }
  close() {
    this.conn.close();
  }
}
function Zx(n) {
  const t = {};
  return n.forEach((o, a) => {
    t[a] = o;
  }), t;
}
function Wx(n) {
  const t = new Headers();
  for (const [o, a] of Object.entries(n)) t.append(o, a);
  return t;
}
const jx = "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
async function eb(n, t, o) {
  const a = new aE();
  let s;
  o.data instanceof Blob ? s = await o.data.text() : o.data instanceof ArrayBuffer ? s = new TextDecoder().decode(o.data) : s = o.data;
  const c = JSON.parse(s);
  if (n.isVertexAI()) {
    const d = EC(c);
    Object.assign(a, d);
  } else Object.assign(a, c);
  t(a);
}
class tb {
  constructor(t, o, a) {
    this.apiClient = t, this.auth = o, this.webSocketFactory = a, this.music = new Xx(this.apiClient, this.auth, this.webSocketFactory);
  }
  async connect(t) {
    var o, a, s, c, d, g;
    if (t.config && t.config.httpOptions) throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");
    const y = this.apiClient.getWebsocketBaseUrl(), m = this.apiClient.getApiVersion();
    let v;
    const _ = this.apiClient.getHeaders();
    t.config && t.config.tools && vv(t.config.tools) && Sv(_);
    const E = lb(_);
    if (this.apiClient.isVertexAI()) {
      const re = this.apiClient.getProject(), ve = this.apiClient.getLocation(), pe = this.apiClient.getApiKey(), Z = !!re && !!ve || !!pe;
      this.apiClient.getCustomBaseUrl() && !Z ? v = y : (v = `${y}/ws/google.cloud.aiplatform.${m}.LlmBidiService/BidiGenerateContent`, await this.auth.addAuthHeaders(E, v));
    } else {
      const re = this.apiClient.getApiKey();
      let ve = "BidiGenerateContent", pe = "key";
      re != null && re.startsWith("auth_tokens/") && (console.warn("Warning: Ephemeral token support is experimental and may change in future versions."), m !== "v1alpha" && console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."), ve = "BidiGenerateContentConstrained", pe = "access_token"), v = `${y}/ws/google.ai.generativelanguage.${m}.GenerativeService.${ve}?${pe}=${re}`;
    }
    let b = () => {
    };
    const D = new Promise((re) => {
      b = re;
    }), H = t.callbacks, P = function() {
      var re;
      (re = H == null ? void 0 : H.onopen) === null || re === void 0 || re.call(H), b({});
    }, V = this.apiClient, ie = { onopen: P, onmessage: (re) => {
      eb(V, H.onmessage, re);
    }, onerror: (o = H == null ? void 0 : H.onerror) !== null && o !== void 0 ? o : function(re) {
    }, onclose: (a = H == null ? void 0 : H.onclose) !== null && a !== void 0 ? a : function(re) {
    } }, X = this.webSocketFactory.create(v, ob(E), ie);
    X.connect(), await D;
    let j = qe(this.apiClient, t.model);
    if (this.apiClient.isVertexAI() && j.startsWith("publishers/")) {
      const re = this.apiClient.getProject(), ve = this.apiClient.getLocation();
      re && ve && (j = `projects/${re}/locations/${ve}/` + j);
    }
    let ae = {};
    this.apiClient.isVertexAI() && ((s = t.config) === null || s === void 0 ? void 0 : s.responseModalities) === void 0 && (t.config === void 0 ? t.config = { responseModalities: [Cu.AUDIO] } : t.config.responseModalities = [Cu.AUDIO]), !((c = t.config) === null || c === void 0) && c.generationConfig && console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");
    const Y = (g = (d = t.config) === null || d === void 0 ? void 0 : d.tools) !== null && g !== void 0 ? g : [], ne = [];
    for (const re of Y) if (this.isCallableTool(re)) {
      const ve = re;
      ne.push(await ve.tool());
    } else ne.push(re);
    ne.length > 0 && (t.config.tools = ne);
    const Te = { model: j, config: t.config, callbacks: t.callbacks };
    return this.apiClient.isVertexAI() ? ae = gC(this.apiClient, Te) : ae = hC(this.apiClient, Te), delete ae.config, X.send(JSON.stringify(ae)), new ib(X, this.apiClient);
  }
  isCallableTool(t) {
    return "callTool" in t && typeof t.callTool == "function";
  }
}
const nb = { turnComplete: true };
class ib {
  constructor(t, o) {
    this.conn = t, this.apiClient = o;
  }
  tLiveClientContent(t, o) {
    if (o.turns !== null && o.turns !== void 0) {
      let a = [];
      try {
        a = Tn(o.turns), t.isVertexAI() || (a = a.map((s) => Ls(s)));
      } catch {
        throw new Error(`Failed to parse client content "turns", type: '${typeof o.turns}'`);
      }
      return { clientContent: { turns: a, turnComplete: o.turnComplete } };
    }
    return { clientContent: { turnComplete: o.turnComplete } };
  }
  tLiveClienttToolResponse(t, o) {
    let a = [];
    if (o.functionResponses == null) throw new Error("functionResponses is required.");
    if (Array.isArray(o.functionResponses) ? a = o.functionResponses : a = [o.functionResponses], a.length === 0) throw new Error("functionResponses is required.");
    for (const c of a) {
      if (typeof c != "object" || c === null || !("name" in c) || !("response" in c)) throw new Error(`Could not parse function response, type '${typeof c}'.`);
      if (!t.isVertexAI() && !("id" in c)) throw new Error(jx);
    }
    return { toolResponse: { functionResponses: a } };
  }
  sendClientContent(t) {
    t = Object.assign(Object.assign({}, nb), t);
    const o = this.tLiveClientContent(this.apiClient, t);
    this.conn.send(JSON.stringify(o));
  }
  sendRealtimeInput(t) {
    let o = {};
    this.apiClient.isVertexAI() ? o = { realtimeInput: TC(t) } : o = { realtimeInput: SC(t) }, this.conn.send(JSON.stringify(o));
  }
  sendToolResponse(t) {
    if (t.functionResponses == null) throw new Error("Tool response parameters are required.");
    const o = this.tLiveClienttToolResponse(this.apiClient, t);
    this.conn.send(JSON.stringify(o));
  }
  close() {
    this.conn.close();
  }
}
function ob(n) {
  const t = {};
  return n.forEach((o, a) => {
    t[a] = o;
  }), t;
}
function lb(n) {
  const t = new Headers();
  for (const [o, a] of Object.entries(n)) t.append(o, a);
  return t;
}
const _y = 10;
function Cy(n) {
  var t, o, a;
  if (!((t = n == null ? void 0 : n.automaticFunctionCalling) === null || t === void 0) && t.disable) return true;
  let s = false;
  for (const d of (o = n == null ? void 0 : n.tools) !== null && o !== void 0 ? o : []) if (oa(d)) {
    s = true;
    break;
  }
  if (!s) return true;
  const c = (a = n == null ? void 0 : n.automaticFunctionCalling) === null || a === void 0 ? void 0 : a.maximumRemoteCalls;
  return c && (c < 0 || !Number.isInteger(c)) || c == 0 ? (console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:", c), true) : false;
}
function oa(n) {
  return "callTool" in n && typeof n.callTool == "function";
}
function ab(n) {
  var t, o, a;
  return (a = (o = (t = n.config) === null || t === void 0 ? void 0 : t.tools) === null || o === void 0 ? void 0 : o.some((s) => oa(s))) !== null && a !== void 0 ? a : false;
}
function Ay(n) {
  var t;
  const o = [];
  return !((t = n == null ? void 0 : n.config) === null || t === void 0) && t.tools && n.config.tools.forEach((a, s) => {
    if (oa(a)) return;
    const c = a;
    c.functionDeclarations && c.functionDeclarations.length > 0 && o.push(s);
  }), o;
}
function xy(n) {
  var t;
  return !(!((t = n == null ? void 0 : n.automaticFunctionCalling) === null || t === void 0) && t.ignoreCallHistory);
}
class sb extends Mi {
  constructor(t) {
    super(), this.apiClient = t, this.embedContent = async (o) => {
      if (!this.apiClient.isVertexAI()) return await this.embedContentInternal(o);
      if (o.model.includes("gemini") && o.model !== "gemini-embedding-001" || o.model.includes("maas")) {
        const s = Tn(o.contents);
        if (s.length > 1) throw new Error("The embedContent API for this model only supports one content at a time.");
        const c = Object.assign(Object.assign({}, o), { content: s[0], embeddingApiType: Au.EMBED_CONTENT });
        return await this.embedContentInternal(c);
      } else {
        const s = Object.assign(Object.assign({}, o), { embeddingApiType: Au.PREDICT });
        return await this.embedContentInternal(s);
      }
    }, this.generateContent = async (o) => {
      var a, s, c, d, g;
      const y = await this.processParamsMaybeAddMcpUsage(o);
      if (this.maybeMoveToResponseJsonSchem(o), !ab(o) || Cy(o.config)) return await this.generateContentInternal(y);
      const m = Ay(o);
      if (m.length > 0) {
        const H = m.map((P) => `tools[${P}]`).join(", ");
        throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${H}.`);
      }
      let v, _;
      const E = Tn(y.contents), b = (c = (s = (a = y.config) === null || a === void 0 ? void 0 : a.automaticFunctionCalling) === null || s === void 0 ? void 0 : s.maximumRemoteCalls) !== null && c !== void 0 ? c : _y;
      let D = 0;
      for (; D < b && (v = await this.generateContentInternal(y), !(!v.functionCalls || v.functionCalls.length === 0)); ) {
        const H = v.candidates[0].content, P = [];
        for (const V of (g = (d = o.config) === null || d === void 0 ? void 0 : d.tools) !== null && g !== void 0 ? g : []) if (oa(V)) {
          const X = await V.callTool(v.functionCalls);
          P.push(...X);
        }
        D++, _ = { role: "user", parts: P }, y.contents = Tn(y.contents), y.contents.push(H), y.contents.push(_), xy(y.config) && (E.push(H), E.push(_));
      }
      return xy(y.config) && (v.automaticFunctionCallingHistory = E), v;
    }, this.generateContentStream = async (o) => {
      var a, s, c, d, g;
      if (this.maybeMoveToResponseJsonSchem(o), Cy(o.config)) {
        const _ = await this.processParamsMaybeAddMcpUsage(o);
        return await this.generateContentStreamInternal(_);
      }
      const y = Ay(o);
      if (y.length > 0) {
        const _ = y.map((E) => `tools[${E}]`).join(", ");
        throw new Error(`Incompatible tools found at ${_}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`);
      }
      const m = (c = (s = (a = o == null ? void 0 : o.config) === null || a === void 0 ? void 0 : a.toolConfig) === null || s === void 0 ? void 0 : s.functionCallingConfig) === null || c === void 0 ? void 0 : c.streamFunctionCallArguments, v = (g = (d = o == null ? void 0 : o.config) === null || d === void 0 ? void 0 : d.automaticFunctionCalling) === null || g === void 0 ? void 0 : g.disable;
      if (m && !v) throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");
      return await this.processAfcStream(o);
    }, this.generateImages = async (o) => await this.generateImagesInternal(o).then((a) => {
      var s;
      let c;
      const d = [];
      if (a != null && a.generatedImages) for (const y of a.generatedImages) y && (y != null && y.safetyAttributes) && ((s = y == null ? void 0 : y.safetyAttributes) === null || s === void 0 ? void 0 : s.contentType) === "Positive Prompt" ? c = y == null ? void 0 : y.safetyAttributes : d.push(y);
      let g;
      return c ? g = { generatedImages: d, positivePromptSafetyAttributes: c, sdkHttpResponse: a.sdkHttpResponse } : g = { generatedImages: d, sdkHttpResponse: a.sdkHttpResponse }, g;
    }), this.list = async (o) => {
      var a;
      const d = { config: Object.assign(Object.assign({}, { queryBase: true }), o == null ? void 0 : o.config) };
      if (this.apiClient.isVertexAI() && !d.config.queryBase) {
        if (!((a = d.config) === null || a === void 0) && a.filter) throw new Error("Filtering tuned models list for Vertex AI is not currently supported");
        d.config.filter = "labels.tune-type:*";
      }
      return new Xo(Ri.PAGED_ITEM_MODELS, (g) => this.listInternal(g), await this.listInternal(d), d);
    }, this.editImage = async (o) => {
      const a = { model: o.model, prompt: o.prompt, referenceImages: [], config: o.config };
      return o.referenceImages && o.referenceImages && (a.referenceImages = o.referenceImages.map((s) => s.toReferenceImageAPI())), await this.editImageInternal(a);
    }, this.upscaleImage = async (o) => {
      let a = { numberOfImages: 1, mode: "upscale" };
      o.config && (a = Object.assign(Object.assign({}, a), o.config));
      const s = { model: o.model, image: o.image, upscaleFactor: o.upscaleFactor, config: a };
      return await this.upscaleImageInternal(s);
    }, this.generateVideos = async (o) => {
      var a, s, c, d, g, y;
      if ((o.prompt || o.image || o.video) && o.source) throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");
      return this.apiClient.isVertexAI() || (!((a = o.video) === null || a === void 0) && a.uri && (!((s = o.video) === null || s === void 0) && s.videoBytes) ? o.video = { uri: o.video.uri, mimeType: o.video.mimeType } : !((d = (c = o.source) === null || c === void 0 ? void 0 : c.video) === null || d === void 0) && d.uri && (!((y = (g = o.source) === null || g === void 0 ? void 0 : g.video) === null || y === void 0) && y.videoBytes) && (o.source.video = { uri: o.source.video.uri, mimeType: o.source.video.mimeType })), await this.generateVideosInternal(o);
    };
  }
  maybeMoveToResponseJsonSchem(t) {
    t.config && t.config.responseSchema && (t.config.responseJsonSchema || Object.keys(t.config.responseSchema).includes("$schema") && (t.config.responseJsonSchema = t.config.responseSchema, delete t.config.responseSchema));
  }
  async processParamsMaybeAddMcpUsage(t) {
    var o, a, s;
    const c = (o = t.config) === null || o === void 0 ? void 0 : o.tools;
    if (!c) return t;
    const d = await Promise.all(c.map(async (y) => oa(y) ? await y.tool() : y)), g = { model: t.model, contents: t.contents, config: Object.assign(Object.assign({}, t.config), { tools: d }) };
    if (g.config.tools = d, t.config && t.config.tools && vv(t.config.tools)) {
      const y = (s = (a = t.config.httpOptions) === null || a === void 0 ? void 0 : a.headers) !== null && s !== void 0 ? s : {};
      let m = Object.assign({}, y);
      Object.keys(m).length === 0 && (m = this.apiClient.getDefaultHeaders()), Sv(m), g.config.httpOptions = Object.assign(Object.assign({}, t.config.httpOptions), { headers: m });
    }
    return g;
  }
  async initAfcToolsMap(t) {
    var o, a, s;
    const c = /* @__PURE__ */ new Map();
    for (const d of (a = (o = t.config) === null || o === void 0 ? void 0 : o.tools) !== null && a !== void 0 ? a : []) if (oa(d)) {
      const g = d, y = await g.tool();
      for (const m of (s = y.functionDeclarations) !== null && s !== void 0 ? s : []) {
        if (!m.name) throw new Error("Function declaration name is required.");
        if (c.has(m.name)) throw new Error(`Duplicate tool declaration name: ${m.name}`);
        c.set(m.name, g);
      }
    }
    return c;
  }
  async processAfcStream(t) {
    var o, a, s;
    const c = (s = (a = (o = t.config) === null || o === void 0 ? void 0 : o.automaticFunctionCalling) === null || a === void 0 ? void 0 : a.maximumRemoteCalls) !== null && s !== void 0 ? s : _y;
    let d = false, g = 0;
    const y = await this.initAfcToolsMap(t);
    return (function(m, v, _) {
      return zn(this, arguments, function* () {
        for (var E, b, D, H, P, V; g < c; ) {
          d && (g++, d = false);
          const ae = yield xe(m.processParamsMaybeAddMcpUsage(_)), Y = yield xe(m.generateContentStreamInternal(ae)), ne = [], Te = [];
          try {
            for (var ie = true, X = (b = void 0, Fn(Y)), j; j = yield xe(X.next()), E = j.done, !E; ie = true) {
              H = j.value, ie = false;
              const re = H;
              if (yield yield xe(re), re.candidates && (!((P = re.candidates[0]) === null || P === void 0) && P.content)) {
                Te.push(re.candidates[0].content);
                for (const ve of (V = re.candidates[0].content.parts) !== null && V !== void 0 ? V : []) if (g < c && ve.functionCall) {
                  if (!ve.functionCall.name) throw new Error("Function call name was not returned by the model.");
                  if (v.has(ve.functionCall.name)) {
                    const pe = yield xe(v.get(ve.functionCall.name).callTool([ve.functionCall]));
                    ne.push(...pe);
                  } else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${ve.functionCall.name}`);
                }
              }
            }
          } catch (re) {
            b = { error: re };
          } finally {
            try {
              !ie && !E && (D = X.return) && (yield xe(D.call(X)));
            } finally {
              if (b) throw b.error;
            }
          }
          if (ne.length > 0) {
            d = true;
            const re = new Rs();
            re.candidates = [{ content: { role: "user", parts: ne } }], yield yield xe(re);
            const ve = [];
            ve.push(...Te), ve.push({ role: "user", parts: ne });
            const pe = Tn(_.contents).concat(ve);
            _.contents = pe;
          } else break;
        }
      });
    })(this, y, t);
  }
  async generateContentInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = vy(this.apiClient, t);
      return g = le("{model}:generateContent", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = Ty(v), E = new Rs();
        return Object.assign(E, _), E;
      });
    } else {
      const m = yy(this.apiClient, t);
      return g = le("{model}:generateContent", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = Sy(v), E = new Rs();
        return Object.assign(E, _), E;
      });
    }
  }
  async generateContentStreamInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = vy(this.apiClient, t);
      return g = le("{model}:streamGenerateContent?alt=sse", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.requestStream({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }), d.then(function(_) {
        return zn(this, arguments, function* () {
          var E, b, D, H;
          try {
            for (var P = true, V = Fn(_), ie; ie = yield xe(V.next()), E = ie.done, !E; P = true) {
              H = ie.value, P = false;
              const X = H, j = Ty(yield xe(X.json()), t);
              j.sdkHttpResponse = { headers: X.headers };
              const ae = new Rs();
              Object.assign(ae, j), yield yield xe(ae);
            }
          } catch (X) {
            b = { error: X };
          } finally {
            try {
              !P && !E && (D = V.return) && (yield xe(D.call(V)));
            } finally {
              if (b) throw b.error;
            }
          }
        });
      });
    } else {
      const m = yy(this.apiClient, t);
      return g = le("{model}:streamGenerateContent?alt=sse", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.requestStream({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }), d.then(function(_) {
        return zn(this, arguments, function* () {
          var E, b, D, H;
          try {
            for (var P = true, V = Fn(_), ie; ie = yield xe(V.next()), E = ie.done, !E; P = true) {
              H = ie.value, P = false;
              const X = H, j = Sy(yield xe(X.json()), t);
              j.sdkHttpResponse = { headers: X.headers };
              const ae = new Rs();
              Object.assign(ae, j), yield yield xe(ae);
            }
          } catch (X) {
            b = { error: X };
          } finally {
            try {
              !P && !E && (D = V.return) && (yield xe(D.call(V)));
            } finally {
              if (b) throw b.error;
            }
          }
        });
      });
    }
  }
  async embedContentInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = jC(this.apiClient, t, t), v = yE(t.model) ? "{model}:embedContent" : "{model}:predict";
      return g = le(v, m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((_) => _.json().then((E) => {
        const b = E;
        return b.sdkHttpResponse = { headers: _.headers }, b;
      })), d.then((_) => {
        const E = tA(_, t), b = new jg();
        return Object.assign(b, E), b;
      });
    } else {
      const m = WC(this.apiClient, t);
      return g = le("{model}:batchEmbedContents", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = eA(v), E = new jg();
        return Object.assign(E, _), E;
      });
    }
  }
  async generateImagesInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = dA(this.apiClient, t);
      return g = le("{model}:predict", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = mA(v), E = new ey();
        return Object.assign(E, _), E;
      });
    } else {
      const m = fA(this.apiClient, t);
      return g = le("{model}:predict", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = pA(v), E = new ey();
        return Object.assign(E, _), E;
      });
    }
  }
  async editImageInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const g = $C(this.apiClient, t);
      return c = le("{model}:predict", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json().then((m) => {
        const v = m;
        return v.sdkHttpResponse = { headers: y.headers }, v;
      })), s.then((y) => {
        const m = XC(y), v = new $T();
        return Object.assign(v, m), v;
      });
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async upscaleImageInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const g = dx(this.apiClient, t);
      return c = le("{model}:predict", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json().then((m) => {
        const v = m;
        return v.sdkHttpResponse = { headers: y.headers }, v;
      })), s.then((y) => {
        const m = px(y), v = new XT();
        return Object.assign(v, m), v;
      });
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async recontextImage(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const g = KA(this.apiClient, t);
      return c = le("{model}:predict", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => {
        const m = $A(y), v = new QT();
        return Object.assign(v, m), v;
      });
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async segmentImage(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const g = ex(this.apiClient, t);
      return c = le("{model}:predict", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => {
        const m = tx(y), v = new ZT();
        return Object.assign(v, m), v;
      });
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async get(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = IA(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d.then((v) => ld(v));
    } else {
      const m = MA(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d.then((v) => od(v));
    }
  }
  async listInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = BA(this.apiClient, t);
      return g = le("{models_url}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = VA(v), E = new ty();
        return Object.assign(E, _), E;
      });
    } else {
      const m = HA(this.apiClient, t);
      return g = le("{models_url}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = qA(v), E = new ty();
        return Object.assign(E, _), E;
      });
    }
  }
  async update(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = cx(this.apiClient, t);
      return g = le("{model}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "PATCH", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d.then((v) => ld(v));
    } else {
      const m = ux(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "PATCH", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d.then((v) => od(v));
    }
  }
  async delete(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = FC(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "DELETE", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = YC(v), E = new ny();
        return Object.assign(E, _), E;
      });
    } else {
      const m = zC(this.apiClient, t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "DELETE", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = JC(v), E = new ny();
        return Object.assign(E, _), E;
      });
    }
  }
  async countTokens(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = BC(this.apiClient, t);
      return g = le("{model}:countTokens", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = VC(v), E = new iy();
        return Object.assign(E, _), E;
      });
    } else {
      const m = HC(this.apiClient, t);
      return g = le("{model}:countTokens", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = qC(v), E = new iy();
        return Object.assign(E, _), E;
      });
    }
  }
  async computeTokens(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const g = DC(this.apiClient, t);
      return c = le("{model}:computeTokens", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json().then((m) => {
        const v = m;
        return v.sdkHttpResponse = { headers: y.headers }, v;
      })), s.then((y) => {
        const m = UC(y), v = new WT();
        return Object.assign(v, m), v;
      });
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async generateVideosInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = TA(this.apiClient, t);
      return g = le("{model}:predictLongRunning", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d.then((v) => {
        const _ = vA(v), E = new xu();
        return Object.assign(E, _), E;
      });
    } else {
      const m = SA(this.apiClient, t);
      return g = le("{model}:predictLongRunning", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d.then((v) => {
        const _ = yA(v), E = new xu();
        return Object.assign(E, _), E;
      });
    }
  }
}
class rb extends Mi {
  constructor(t) {
    super(), this.apiClient = t;
  }
  async getVideosOperation(t) {
    const o = t.operation, a = t.config;
    if (o.name === void 0 || o.name === "") throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const s = o.name.split("/operations/")[0];
      let c;
      a && "httpOptions" in a && (c = a.httpOptions);
      const d = await this.fetchPredictVideosOperationInternal({ operationName: o.name, resourceName: s, config: { httpOptions: c } });
      return o._fromAPIResponse({ apiResponse: d, _isVertexAI: true });
    } else {
      const s = await this.getVideosOperationInternal({ operationName: o.name, config: a });
      return o._fromAPIResponse({ apiResponse: s, _isVertexAI: false });
    }
  }
  async get(t) {
    const o = t.operation, a = t.config;
    if (o.name === void 0 || o.name === "") throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const s = o.name.split("/operations/")[0];
      let c;
      a && "httpOptions" in a && (c = a.httpOptions);
      const d = await this.fetchPredictVideosOperationInternal({ operationName: o.name, resourceName: s, config: { httpOptions: c } });
      return o._fromAPIResponse({ apiResponse: d, _isVertexAI: true });
    } else {
      const s = await this.getVideosOperationInternal({ operationName: o.name, config: a });
      return o._fromAPIResponse({ apiResponse: s, _isVertexAI: false });
    }
  }
  async getVideosOperationInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = VT(t);
      return g = le("{operationName}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json()), d;
    } else {
      const m = qT(t);
      return g = le("{operationName}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json()), d;
    }
  }
  async fetchPredictVideosOperationInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const g = LT(t);
      return c = le("{resourceName}:fetchPredictOperation", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s;
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
}
function by(n) {
  const t = {};
  if (u(n, ["languageCodes"]) !== void 0) throw new Error("languageCodes parameter is not supported in Gemini API.");
  return t;
}
function ub(n) {
  const t = {}, o = u(n, ["apiKey"]);
  if (o != null && f(t, ["apiKey"], o), u(n, ["apiKeyConfig"]) !== void 0) throw new Error("apiKeyConfig parameter is not supported in Gemini API.");
  if (u(n, ["authType"]) !== void 0) throw new Error("authType parameter is not supported in Gemini API.");
  if (u(n, ["googleServiceAccountConfig"]) !== void 0) throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");
  if (u(n, ["httpBasicAuthConfig"]) !== void 0) throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oauthConfig"]) !== void 0) throw new Error("oauthConfig parameter is not supported in Gemini API.");
  if (u(n, ["oidcConfig"]) !== void 0) throw new Error("oidcConfig parameter is not supported in Gemini API.");
  return t;
}
function cb(n) {
  const t = {}, o = u(n, ["data"]);
  if (o != null && f(t, ["data"], o), u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const a = u(n, ["mimeType"]);
  return a != null && f(t, ["mimeType"], a), t;
}
function fb(n) {
  const t = {}, o = u(n, ["parts"]);
  if (o != null) {
    let s = o;
    Array.isArray(s) && (s = s.map((c) => Tb(c))), f(t, ["parts"], s);
  }
  const a = u(n, ["role"]);
  return a != null && f(t, ["role"], a), t;
}
function db(n, t, o) {
  const a = {}, s = u(t, ["expireTime"]);
  o !== void 0 && s != null && f(o, ["expireTime"], s);
  const c = u(t, ["newSessionExpireTime"]);
  o !== void 0 && c != null && f(o, ["newSessionExpireTime"], c);
  const d = u(t, ["uses"]);
  o !== void 0 && d != null && f(o, ["uses"], d);
  const g = u(t, ["liveConnectConstraints"]);
  o !== void 0 && g != null && f(o, ["bidiGenerateContentSetup"], Sb(n, g));
  const y = u(t, ["lockAdditionalFields"]);
  return o !== void 0 && y != null && f(o, ["fieldMask"], y), a;
}
function pb(n, t) {
  const o = {}, a = u(t, ["config"]);
  return a != null && f(o, ["config"], db(n, a, o)), o;
}
function mb(n) {
  const t = {};
  if (u(n, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const o = u(n, ["fileUri"]);
  o != null && f(t, ["fileUri"], o);
  const a = u(n, ["mimeType"]);
  return a != null && f(t, ["mimeType"], a), t;
}
function hb(n) {
  const t = {}, o = u(n, ["id"]);
  o != null && f(t, ["id"], o);
  const a = u(n, ["args"]);
  a != null && f(t, ["args"], a);
  const s = u(n, ["name"]);
  if (s != null && f(t, ["name"], s), u(n, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (u(n, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
  return t;
}
function gb(n) {
  const t = {}, o = u(n, ["authConfig"]);
  o != null && f(t, ["authConfig"], ub(o));
  const a = u(n, ["enableWidget"]);
  return a != null && f(t, ["enableWidget"], a), t;
}
function yb(n) {
  const t = {}, o = u(n, ["searchTypes"]);
  if (o != null && f(t, ["searchTypes"], o), u(n, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
  if (u(n, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const a = u(n, ["timeRangeFilter"]);
  return a != null && f(t, ["timeRangeFilter"], a), t;
}
function vb(n, t) {
  const o = {}, a = u(n, ["generationConfig"]);
  t !== void 0 && a != null && f(t, ["setup", "generationConfig"], a);
  const s = u(n, ["responseModalities"]);
  t !== void 0 && s != null && f(t, ["setup", "generationConfig", "responseModalities"], s);
  const c = u(n, ["temperature"]);
  t !== void 0 && c != null && f(t, ["setup", "generationConfig", "temperature"], c);
  const d = u(n, ["topP"]);
  t !== void 0 && d != null && f(t, ["setup", "generationConfig", "topP"], d);
  const g = u(n, ["topK"]);
  t !== void 0 && g != null && f(t, ["setup", "generationConfig", "topK"], g);
  const y = u(n, ["maxOutputTokens"]);
  t !== void 0 && y != null && f(t, ["setup", "generationConfig", "maxOutputTokens"], y);
  const m = u(n, ["mediaResolution"]);
  t !== void 0 && m != null && f(t, ["setup", "generationConfig", "mediaResolution"], m);
  const v = u(n, ["seed"]);
  t !== void 0 && v != null && f(t, ["setup", "generationConfig", "seed"], v);
  const _ = u(n, ["speechConfig"]);
  t !== void 0 && _ != null && f(t, ["setup", "generationConfig", "speechConfig"], Ed(_));
  const E = u(n, ["thinkingConfig"]);
  t !== void 0 && E != null && f(t, ["setup", "generationConfig", "thinkingConfig"], E);
  const b = u(n, ["enableAffectiveDialog"]);
  t !== void 0 && b != null && f(t, ["setup", "generationConfig", "enableAffectiveDialog"], b);
  const D = u(n, ["systemInstruction"]);
  t !== void 0 && D != null && f(t, ["setup", "systemInstruction"], fb(xt(D)));
  const H = u(n, ["tools"]);
  if (t !== void 0 && H != null) {
    let Y = sa(H);
    Array.isArray(Y) && (Y = Y.map((ne) => _b(aa(ne)))), f(t, ["setup", "tools"], Y);
  }
  const P = u(n, ["sessionResumption"]);
  t !== void 0 && P != null && f(t, ["setup", "sessionResumption"], Eb(P));
  const V = u(n, ["inputAudioTranscription"]);
  t !== void 0 && V != null && f(t, ["setup", "inputAudioTranscription"], by(V));
  const ie = u(n, ["outputAudioTranscription"]);
  t !== void 0 && ie != null && f(t, ["setup", "outputAudioTranscription"], by(ie));
  const X = u(n, ["realtimeInputConfig"]);
  t !== void 0 && X != null && f(t, ["setup", "realtimeInputConfig"], X);
  const j = u(n, ["contextWindowCompression"]);
  t !== void 0 && j != null && f(t, ["setup", "contextWindowCompression"], j);
  const ae = u(n, ["proactivity"]);
  if (t !== void 0 && ae != null && f(t, ["setup", "proactivity"], ae), u(n, ["explicitVadSignal"]) !== void 0) throw new Error("explicitVadSignal parameter is not supported in Gemini API.");
  return o;
}
function Sb(n, t) {
  const o = {}, a = u(t, ["model"]);
  a != null && f(o, ["setup", "model"], qe(n, a));
  const s = u(t, ["config"]);
  return s != null && f(o, ["config"], vb(s, o)), o;
}
function Tb(n) {
  const t = {}, o = u(n, ["mediaResolution"]);
  o != null && f(t, ["mediaResolution"], o);
  const a = u(n, ["codeExecutionResult"]);
  a != null && f(t, ["codeExecutionResult"], a);
  const s = u(n, ["executableCode"]);
  s != null && f(t, ["executableCode"], s);
  const c = u(n, ["fileData"]);
  c != null && f(t, ["fileData"], mb(c));
  const d = u(n, ["functionCall"]);
  d != null && f(t, ["functionCall"], hb(d));
  const g = u(n, ["functionResponse"]);
  g != null && f(t, ["functionResponse"], g);
  const y = u(n, ["inlineData"]);
  y != null && f(t, ["inlineData"], cb(y));
  const m = u(n, ["text"]);
  m != null && f(t, ["text"], m);
  const v = u(n, ["thought"]);
  v != null && f(t, ["thought"], v);
  const _ = u(n, ["thoughtSignature"]);
  _ != null && f(t, ["thoughtSignature"], _);
  const E = u(n, ["videoMetadata"]);
  return E != null && f(t, ["videoMetadata"], E), t;
}
function Eb(n) {
  const t = {}, o = u(n, ["handle"]);
  if (o != null && f(t, ["handle"], o), u(n, ["transparent"]) !== void 0) throw new Error("transparent parameter is not supported in Gemini API.");
  return t;
}
function _b(n) {
  const t = {};
  if (u(n, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const o = u(n, ["computerUse"]);
  o != null && f(t, ["computerUse"], o);
  const a = u(n, ["fileSearch"]);
  a != null && f(t, ["fileSearch"], a);
  const s = u(n, ["googleSearch"]);
  s != null && f(t, ["googleSearch"], yb(s));
  const c = u(n, ["googleMaps"]);
  c != null && f(t, ["googleMaps"], gb(c));
  const d = u(n, ["codeExecution"]);
  if (d != null && f(t, ["codeExecution"], d), u(n, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const g = u(n, ["functionDeclarations"]);
  if (g != null) {
    let _ = g;
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["functionDeclarations"], _);
  }
  const y = u(n, ["googleSearchRetrieval"]);
  if (y != null && f(t, ["googleSearchRetrieval"], y), u(n, ["parallelAiSearch"]) !== void 0) throw new Error("parallelAiSearch parameter is not supported in Gemini API.");
  const m = u(n, ["urlContext"]);
  m != null && f(t, ["urlContext"], m);
  const v = u(n, ["mcpServers"]);
  if (v != null) {
    let _ = v;
    Array.isArray(_) && (_ = _.map((E) => E)), f(t, ["mcpServers"], _);
  }
  return t;
}
function Cb(n) {
  const t = [];
  for (const o in n) if (Object.prototype.hasOwnProperty.call(n, o)) {
    const a = n[o];
    if (typeof a == "object" && a != null && Object.keys(a).length > 0) {
      const s = Object.keys(a).map((c) => `${o}.${c}`);
      t.push(...s);
    } else t.push(o);
  }
  return t.join(",");
}
function Ab(n, t) {
  let o = null;
  const a = n.bidiGenerateContentSetup;
  if (typeof a == "object" && a !== null && "setup" in a) {
    const c = a.setup;
    typeof c == "object" && c !== null ? (n.bidiGenerateContentSetup = c, o = c) : delete n.bidiGenerateContentSetup;
  } else a !== void 0 && delete n.bidiGenerateContentSetup;
  const s = n.fieldMask;
  if (o) {
    const c = Cb(o);
    if (Array.isArray(t == null ? void 0 : t.lockAdditionalFields) && (t == null ? void 0 : t.lockAdditionalFields.length) === 0) c ? n.fieldMask = c : delete n.fieldMask;
    else if (t != null && t.lockAdditionalFields && t.lockAdditionalFields.length > 0 && s !== null && Array.isArray(s) && s.length > 0) {
      const d = ["temperature", "topK", "topP", "maxOutputTokens", "responseModalities", "seed", "speechConfig"];
      let g = [];
      s.length > 0 && (g = s.map((m) => d.includes(m) ? `generationConfig.${m}` : m));
      const y = [];
      c && y.push(c), g.length > 0 && y.push(...g), y.length > 0 ? n.fieldMask = y.join(",") : delete n.fieldMask;
    } else delete n.fieldMask;
  } else s !== null && Array.isArray(s) && s.length > 0 ? n.fieldMask = s.join(",") : delete n.fieldMask;
  return n;
}
class xb extends Mi {
  constructor(t) {
    super(), this.apiClient = t;
  }
  async create(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");
    {
      const g = pb(this.apiClient, t);
      c = le("auth_tokens", g._url), d = g._query, delete g.config, delete g._url, delete g._query;
      const y = Ab(g, t.config);
      return s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(y), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((m) => m.json()), s.then((m) => m);
    }
  }
}
function bb(n, t) {
  const o = {}, a = u(n, ["force"]);
  return t !== void 0 && a != null && f(t, ["_query", "force"], a), o;
}
function Nb(n) {
  const t = {}, o = u(n, ["name"]);
  o != null && f(t, ["_url", "name"], o);
  const a = u(n, ["config"]);
  return a != null && bb(a, t), t;
}
function wb(n) {
  const t = {}, o = u(n, ["name"]);
  return o != null && f(t, ["_url", "name"], o), t;
}
function Rb(n, t) {
  const o = {}, a = u(n, ["pageSize"]);
  t !== void 0 && a != null && f(t, ["_query", "pageSize"], a);
  const s = u(n, ["pageToken"]);
  return t !== void 0 && s != null && f(t, ["_query", "pageToken"], s), o;
}
function Mb(n) {
  const t = {}, o = u(n, ["parent"]);
  o != null && f(t, ["_url", "parent"], o);
  const a = u(n, ["config"]);
  return a != null && Rb(a, t), t;
}
function Ib(n) {
  const t = {}, o = u(n, ["sdkHttpResponse"]);
  o != null && f(t, ["sdkHttpResponse"], o);
  const a = u(n, ["nextPageToken"]);
  a != null && f(t, ["nextPageToken"], a);
  const s = u(n, ["documents"]);
  if (s != null) {
    let c = s;
    Array.isArray(c) && (c = c.map((d) => d)), f(t, ["documents"], c);
  }
  return t;
}
class Db extends Mi {
  constructor(t) {
    super(), this.apiClient = t, this.list = async (o) => new Xo(Ri.PAGED_ITEM_DOCUMENTS, (a) => this.listInternal({ parent: o.parent, config: a.config }), await this.listInternal(o), o);
  }
  async get(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = wb(t);
      return c = le("{name}", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => y);
    }
  }
  async delete(t) {
    var o, a;
    let s = "", c = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const d = Nb(t);
      s = le("{name}", d._url), c = d._query, delete d._url, delete d._query, await this.apiClient.request({ path: s, queryParams: c, body: JSON.stringify(d), httpMethod: "DELETE", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal });
    }
  }
  async listInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = Mb(t);
      return c = le("{parent}/documents", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => {
        const m = Ib(y), v = new jT();
        return Object.assign(v, m), v;
      });
    }
  }
}
class Ub extends Mi {
  constructor(t, o = new Db(t)) {
    super(), this.apiClient = t, this.documents = o, this.list = async (a = {}) => new Xo(Ri.PAGED_ITEM_FILE_SEARCH_STORES, (s) => this.listInternal(s), await this.listInternal(a), a);
  }
  async uploadToFileSearchStore(t) {
    if (this.apiClient.isVertexAI()) throw new Error("Vertex AI does not support uploading files to a file search store.");
    return this.apiClient.uploadFileToFileSearchStore(t.fileSearchStoreName, t.file, t.config);
  }
  async create(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = Tx(t);
      return c = le("fileSearchStores", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => y);
    }
  }
  async get(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = Cx(t);
      return c = le("{name}", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => y);
    }
  }
  async delete(t) {
    var o, a;
    let s = "", c = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const d = _x(t);
      s = le("{name}", d._url), c = d._query, delete d._url, delete d._query, await this.apiClient.request({ path: s, queryParams: c, body: JSON.stringify(d), httpMethod: "DELETE", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal });
    }
  }
  async listInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = Rx(t);
      return c = le("fileSearchStores", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => {
        const m = Mx(y), v = new eE();
        return Object.assign(v, m), v;
      });
    }
  }
  async uploadToFileSearchStoreInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = Ix(t);
      return c = le("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => {
        const m = Dx(y), v = new tE();
        return Object.assign(v, m), v;
      });
    }
  }
  async importFile(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = bx(t);
      return c = le("{file_search_store_name}:importFile", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json()), s.then((y) => {
        const m = xx(y), v = new gd();
        return Object.assign(v, m), v;
      });
    }
  }
}
let Tv = function() {
  const { crypto: n } = globalThis;
  if (n != null && n.randomUUID) return Tv = n.randomUUID.bind(n), n.randomUUID();
  const t = new Uint8Array(1), o = n ? () => n.getRandomValues(t)[0] : () => Math.random() * 255 & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (a) => (+a ^ o() & 15 >> +a / 4).toString(16));
};
const Lb = () => Tv();
function sd(n) {
  return typeof n == "object" && n !== null && ("name" in n && n.name === "AbortError" || "message" in n && String(n.message).includes("FetchRequestCanceledException"));
}
const rd = (n) => {
  if (n instanceof Error) return n;
  if (typeof n == "object" && n !== null) {
    try {
      if (Object.prototype.toString.call(n) === "[object Error]") {
        const t = new Error(n.message, n.cause ? { cause: n.cause } : {});
        return n.stack && (t.stack = n.stack), n.cause && !t.cause && (t.cause = n.cause), n.name && (t.name = n.name), t;
      }
    } catch {
    }
    try {
      return new Error(JSON.stringify(n));
    } catch {
    }
  }
  return new Error(n);
};
class Un extends Error {
}
class en extends Un {
  constructor(t, o, a, s) {
    super(`${en.makeMessage(t, o, a)}`), this.status = t, this.headers = s, this.error = o;
  }
  static makeMessage(t, o, a) {
    const s = o != null && o.message ? typeof o.message == "string" ? o.message : JSON.stringify(o.message) : o ? JSON.stringify(o) : a;
    return t && s ? `${t} ${s}` : t ? `${t} status code (no body)` : s || "(no status code or body)";
  }
  static generate(t, o, a, s) {
    if (!t || !s) return new Pu({ message: a, cause: rd(o) });
    const c = o;
    return t === 400 ? new _v(t, c, a, s) : t === 401 ? new Cv(t, c, a, s) : t === 403 ? new Av(t, c, a, s) : t === 404 ? new xv(t, c, a, s) : t === 409 ? new bv(t, c, a, s) : t === 422 ? new Nv(t, c, a, s) : t === 429 ? new wv(t, c, a, s) : t >= 500 ? new Rv(t, c, a, s) : new en(t, c, a, s);
  }
}
class ud extends en {
  constructor({ message: t } = {}) {
    super(void 0, void 0, t || "Request was aborted.", void 0);
  }
}
class Pu extends en {
  constructor({ message: t, cause: o }) {
    super(void 0, void 0, t || "Connection error.", void 0), o && (this.cause = o);
  }
}
class Ev extends Pu {
  constructor({ message: t } = {}) {
    super({ message: t ?? "Request timed out." });
  }
}
class _v extends en {
}
class Cv extends en {
}
class Av extends en {
}
class xv extends en {
}
class bv extends en {
}
class Nv extends en {
}
class wv extends en {
}
class Rv extends en {
}
const kb = /^[a-z][a-z0-9+.-]*:/i, Pb = (n) => kb.test(n);
let cd = (n) => (cd = Array.isArray, cd(n));
const Gb = cd;
let Ob = Gb;
const Ny = Ob;
function wy(n) {
  if (!n) return true;
  for (const t in n) return false;
  return true;
}
function Hb(n, t) {
  return Object.prototype.hasOwnProperty.call(n, t);
}
const Bb = (n, t) => {
  if (typeof t != "number" || !Number.isInteger(t)) throw new Un(`${n} must be an integer`);
  if (t < 0) throw new Un(`${n} must be a positive integer`);
  return t;
}, qb = (n) => {
  try {
    return JSON.parse(n);
  } catch {
    return;
  }
};
const Vb = (n) => new Promise((t) => setTimeout(t, n));
function zb() {
  if (typeof fetch < "u") return fetch;
  throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`");
}
function Mv(...n) {
  const t = globalThis.ReadableStream;
  if (typeof t > "u") throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
  return new t(...n);
}
function Fb(n) {
  let t = Symbol.asyncIterator in n ? n[Symbol.asyncIterator]() : n[Symbol.iterator]();
  return Mv({ start() {
  }, async pull(o) {
    const { done: a, value: s } = await t.next();
    a ? o.close() : o.enqueue(s);
  }, async cancel() {
    var o;
    await ((o = t.return) === null || o === void 0 ? void 0 : o.call(t));
  } });
}
function Iv(n) {
  if (n[Symbol.asyncIterator]) return n;
  const t = n.getReader();
  return { async next() {
    try {
      const o = await t.read();
      return o != null && o.done && t.releaseLock(), o;
    } catch (o) {
      throw t.releaseLock(), o;
    }
  }, async return() {
    const o = t.cancel();
    return t.releaseLock(), await o, { done: true, value: void 0 };
  }, [Symbol.asyncIterator]() {
    return this;
  } };
}
async function Jb(n) {
  var t, o;
  if (n === null || typeof n != "object") return;
  if (n[Symbol.asyncIterator]) {
    await ((o = (t = n[Symbol.asyncIterator]()).return) === null || o === void 0 ? void 0 : o.call(t));
    return;
  }
  const a = n.getReader(), s = a.cancel();
  a.releaseLock(), await s;
}
const Yb = ({ headers: n, body: t }) => ({ bodyHeaders: { "content-type": "application/json" }, body: JSON.stringify(t) });
function Kb(n) {
  return Object.entries(n).filter(([t, o]) => typeof o < "u").map(([t, o]) => {
    if (typeof o == "string" || typeof o == "number" || typeof o == "boolean") return `${encodeURIComponent(t)}=${encodeURIComponent(o)}`;
    if (o === null) return `${encodeURIComponent(t)}=`;
    throw new Un(`Cannot stringify type ${typeof o}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
  }).join("&");
}
const $b = "0.0.1";
const Dv = () => {
  var n;
  if (typeof File > "u") {
    const { process: t } = globalThis, o = typeof ((n = t == null ? void 0 : t.versions) === null || n === void 0 ? void 0 : n.node) == "string" && parseInt(t.versions.node.split(".")) < 20;
    throw new Error("`File` is not defined as a global, which is required for file uploads." + (o ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""));
  }
};
function Yf(n, t, o) {
  return Dv(), new File(n, t ?? "unknown_file", o);
}
function Xb(n) {
  return (typeof n == "object" && n !== null && ("name" in n && n.name && String(n.name) || "url" in n && n.url && String(n.url) || "filename" in n && n.filename && String(n.filename) || "path" in n && n.path && String(n.path)) || "").split(/[\\/]/).pop() || void 0;
}
const Qb = (n) => n != null && typeof n == "object" && typeof n[Symbol.asyncIterator] == "function";
const Uv = (n) => n != null && typeof n == "object" && typeof n.size == "number" && typeof n.type == "string" && typeof n.text == "function" && typeof n.slice == "function" && typeof n.arrayBuffer == "function", Zb = (n) => n != null && typeof n == "object" && typeof n.name == "string" && typeof n.lastModified == "number" && Uv(n), Wb = (n) => n != null && typeof n == "object" && typeof n.url == "string" && typeof n.blob == "function";
async function jb(n, t, o) {
  if (Dv(), n = await n, Zb(n)) return n instanceof File ? n : Yf([await n.arrayBuffer()], n.name);
  if (Wb(n)) {
    const s = await n.blob();
    return t || (t = new URL(n.url).pathname.split(/[\\/]/).pop()), Yf(await fd(s), t, o);
  }
  const a = await fd(n);
  if (t || (t = Xb(n)), !(o != null && o.type)) {
    const s = a.find((c) => typeof c == "object" && "type" in c && c.type);
    typeof s == "string" && (o = Object.assign(Object.assign({}, o), { type: s }));
  }
  return Yf(a, t, o);
}
async function fd(n) {
  var t, o, a, s, c;
  let d = [];
  if (typeof n == "string" || ArrayBuffer.isView(n) || n instanceof ArrayBuffer) d.push(n);
  else if (Uv(n)) d.push(n instanceof Blob ? n : await n.arrayBuffer());
  else if (Qb(n)) try {
    for (var g = true, y = Fn(n), m; m = await y.next(), t = m.done, !t; g = true) {
      s = m.value, g = false;
      const v = s;
      d.push(...await fd(v));
    }
  } catch (v) {
    o = { error: v };
  } finally {
    try {
      !g && !t && (a = y.return) && await a.call(y);
    } finally {
      if (o) throw o.error;
    }
  }
  else {
    const v = (c = n == null ? void 0 : n.constructor) === null || c === void 0 ? void 0 : c.name;
    throw new Error(`Unexpected data type: ${typeof n}${v ? `; constructor: ${v}` : ""}${eN(n)}`);
  }
  return d;
}
function eN(n) {
  return typeof n != "object" || n === null ? "" : `; props: [${Object.getOwnPropertyNames(n).map((o) => `"${o}"`).join(", ")}]`;
}
class Lv {
  constructor(t) {
    this._client = t;
  }
}
Lv._key = [];
function kv(n) {
  return n.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
const Ry = Object.freeze(/* @__PURE__ */ Object.create(null)), tN = (n = kv) => (function(o, ...a) {
  if (o.length === 1) return o[0];
  let s = false;
  const c = [], d = o.reduce((v, _, E) => {
    var b, D, H;
    /[?#]/.test(_) && (s = true);
    const P = a[E];
    let V = (s ? encodeURIComponent : n)("" + P);
    return E !== a.length && (P == null || typeof P == "object" && P.toString === ((H = Object.getPrototypeOf((D = Object.getPrototypeOf((b = P.hasOwnProperty) !== null && b !== void 0 ? b : Ry)) !== null && D !== void 0 ? D : Ry)) === null || H === void 0 ? void 0 : H.toString)) && (V = P + "", c.push({ start: v.length + _.length, length: V.length, error: `Value of type ${Object.prototype.toString.call(P).slice(8, -1)} is not a valid path parameter` })), v + _ + (E === a.length ? "" : V);
  }, ""), g = d.split(/[?#]/, 1)[0], y = /(^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;
  let m;
  for (; (m = y.exec(g)) !== null; ) {
    const v = m[0].startsWith("/"), _ = v ? 1 : 0, E = v ? m[0].slice(1) : m[0];
    c.push({ start: m.index + _, length: E.length, error: `Value "${E}" can't be safely passed as a path parameter` });
  }
  if (c.sort((v, _) => v.start - _.start), c.length > 0) {
    let v = 0;
    const _ = c.reduce((E, b) => {
      const D = " ".repeat(b.start - v), H = "^".repeat(b.length);
      return v = b.start + b.length, E + D + H;
    }, "");
    throw new Un(`Path parameters result in path with invalid segments:
${c.map((E) => E.error).join(`
`)}
${d}
${_}`);
  }
  return d;
}), hu = tN(kv);
class Pv extends Lv {
  create(t, o) {
    var a;
    const { api_version: s = this._client.apiVersion } = t, c = Nu(t, ["api_version"]);
    if ("model" in c && "agent_config" in c) throw new Un("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");
    if ("agent" in c && "generation_config" in c) throw new Un("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");
    return this._client.post(hu`/${s}/interactions`, Object.assign(Object.assign({ body: c }, o), { stream: (a = t.stream) !== null && a !== void 0 ? a : false }));
  }
  delete(t, o = {}, a) {
    const { api_version: s = this._client.apiVersion } = o ?? {};
    return this._client.delete(hu`/${s}/interactions/${t}`, a);
  }
  cancel(t, o = {}, a) {
    const { api_version: s = this._client.apiVersion } = o ?? {};
    return this._client.post(hu`/${s}/interactions/${t}/cancel`, a);
  }
  get(t, o = {}, a) {
    var s;
    const c = o ?? {}, { api_version: d = this._client.apiVersion } = c, g = Nu(c, ["api_version"]);
    return this._client.get(hu`/${d}/interactions/${t}`, Object.assign(Object.assign({ query: g }, a), { stream: (s = o == null ? void 0 : o.stream) !== null && s !== void 0 ? s : false }));
  }
}
Pv._key = Object.freeze(["interactions"]);
class Gv extends Pv {
}
function nN(n) {
  let t = 0;
  for (const s of n) t += s.length;
  const o = new Uint8Array(t);
  let a = 0;
  for (const s of n) o.set(s, a), a += s.length;
  return o;
}
let gu;
function Cd(n) {
  let t;
  return (gu ?? (t = new globalThis.TextEncoder(), gu = t.encode.bind(t)))(n);
}
let yu;
function My(n) {
  let t;
  return (yu ?? (t = new globalThis.TextDecoder(), yu = t.decode.bind(t)))(n);
}
class Gu {
  constructor() {
    this.buffer = new Uint8Array(), this.carriageReturnIndex = null, this.searchIndex = 0;
  }
  decode(t) {
    var o;
    if (t == null) return [];
    const a = t instanceof ArrayBuffer ? new Uint8Array(t) : typeof t == "string" ? Cd(t) : t;
    this.buffer = nN([this.buffer, a]);
    const s = [];
    let c;
    for (; (c = iN(this.buffer, (o = this.carriageReturnIndex) !== null && o !== void 0 ? o : this.searchIndex)) != null; ) {
      if (c.carriage && this.carriageReturnIndex == null) {
        this.carriageReturnIndex = c.index;
        continue;
      }
      if (this.carriageReturnIndex != null && (c.index !== this.carriageReturnIndex + 1 || c.carriage)) {
        s.push(My(this.buffer.subarray(0, this.carriageReturnIndex - 1))), this.buffer = this.buffer.subarray(this.carriageReturnIndex), this.carriageReturnIndex = null, this.searchIndex = 0;
        continue;
      }
      const d = this.carriageReturnIndex !== null ? c.preceding - 1 : c.preceding, g = My(this.buffer.subarray(0, d));
      s.push(g), this.buffer = this.buffer.subarray(c.index), this.carriageReturnIndex = null, this.searchIndex = 0;
    }
    return this.searchIndex = Math.max(0, this.buffer.length - 1), s;
  }
  flush() {
    return this.buffer.length ? this.decode(`
`) : [];
  }
}
Gu.NEWLINE_CHARS = /* @__PURE__ */ new Set([`
`, "\r"]);
Gu.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function iN(n, t) {
  const s = t ?? 0, c = n.indexOf(10, s), d = n.indexOf(13, s);
  if (c === -1 && d === -1) return null;
  let g;
  return c !== -1 && d !== -1 ? g = Math.min(c, d) : g = c !== -1 ? c : d, n[g] === 10 ? { preceding: g, index: g + 1, carriage: false } : { preceding: g, index: g + 1, carriage: true };
}
const wu = { off: 0, error: 200, warn: 300, info: 400, debug: 500 }, Iy = (n, t, o) => {
  if (n) {
    if (Hb(wu, n)) return n;
    jt(o).warn(`${t} was set to ${JSON.stringify(n)}, expected one of ${JSON.stringify(Object.keys(wu))}`);
  }
};
function Us() {
}
function vu(n, t, o) {
  return !t || wu[n] > wu[o] ? Us : t[n].bind(t);
}
const oN = { error: Us, warn: Us, info: Us, debug: Us };
let Dy = /* @__PURE__ */ new WeakMap();
function jt(n) {
  var t;
  const o = n.logger, a = (t = n.logLevel) !== null && t !== void 0 ? t : "off";
  if (!o) return oN;
  const s = Dy.get(o);
  if (s && s[0] === a) return s[1];
  const c = { error: vu("error", o, a), warn: vu("warn", o, a), info: vu("info", o, a), debug: vu("debug", o, a) };
  return Dy.set(o, [a, c]), c;
}
const $o = (n) => (n.options && (n.options = Object.assign({}, n.options), delete n.options.headers), n.headers && (n.headers = Object.fromEntries((n.headers instanceof Headers ? [...n.headers] : Object.entries(n.headers)).map(([t, o]) => [t, t.toLowerCase() === "x-goog-api-key" || t.toLowerCase() === "authorization" || t.toLowerCase() === "cookie" || t.toLowerCase() === "set-cookie" ? "***" : o]))), "retryOfRequestLogID" in n && (n.retryOfRequestLogID && (n.retryOf = n.retryOfRequestLogID), delete n.retryOfRequestLogID), n);
class na {
  constructor(t, o, a) {
    this.iterator = t, this.controller = o, this.client = a;
  }
  static fromSSEResponse(t, o, a) {
    let s = false;
    const c = a ? jt(a) : console;
    function d() {
      return zn(this, arguments, function* () {
        var y, m, v, _;
        if (s) throw new Un("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        s = true;
        let E = false;
        try {
          try {
            for (var b = true, D = Fn(lN(t, o)), H; H = yield xe(D.next()), y = H.done, !y; b = true) {
              _ = H.value, b = false;
              const P = _;
              if (!E) if (P.data.startsWith("[DONE]")) {
                E = true;
                continue;
              } else try {
                yield yield xe(JSON.parse(P.data));
              } catch (V) {
                throw c.error("Could not parse message into JSON:", P.data), c.error("From chunk:", P.raw), V;
              }
            }
          } catch (P) {
            m = { error: P };
          } finally {
            try {
              !b && !y && (v = D.return) && (yield xe(v.call(D)));
            } finally {
              if (m) throw m.error;
            }
          }
          E = true;
        } catch (P) {
          if (sd(P)) return yield xe(void 0);
          throw P;
        } finally {
          E || o.abort();
        }
      });
    }
    return new na(d, o, a);
  }
  static fromReadableStream(t, o, a) {
    let s = false;
    function c() {
      return zn(this, arguments, function* () {
        var y, m, v, _;
        const E = new Gu(), b = Iv(t);
        try {
          for (var D = true, H = Fn(b), P; P = yield xe(H.next()), y = P.done, !y; D = true) {
            _ = P.value, D = false;
            const V = _;
            for (const ie of E.decode(V)) yield yield xe(ie);
          }
        } catch (V) {
          m = { error: V };
        } finally {
          try {
            !D && !y && (v = H.return) && (yield xe(v.call(H)));
          } finally {
            if (m) throw m.error;
          }
        }
        for (const V of E.flush()) yield yield xe(V);
      });
    }
    function d() {
      return zn(this, arguments, function* () {
        var y, m, v, _;
        if (s) throw new Un("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        s = true;
        let E = false;
        try {
          try {
            for (var b = true, D = Fn(c()), H; H = yield xe(D.next()), y = H.done, !y; b = true) {
              _ = H.value, b = false;
              const P = _;
              E || P && (yield yield xe(JSON.parse(P)));
            }
          } catch (P) {
            m = { error: P };
          } finally {
            try {
              !b && !y && (v = D.return) && (yield xe(v.call(D)));
            } finally {
              if (m) throw m.error;
            }
          }
          E = true;
        } catch (P) {
          if (sd(P)) return yield xe(void 0);
          throw P;
        } finally {
          E || o.abort();
        }
      });
    }
    return new na(d, o, a);
  }
  [Symbol.asyncIterator]() {
    return this.iterator();
  }
  tee() {
    const t = [], o = [], a = this.iterator(), s = (c) => ({ next: () => {
      if (c.length === 0) {
        const d = a.next();
        t.push(d), o.push(d);
      }
      return c.shift();
    } });
    return [new na(() => s(t), this.controller, this.client), new na(() => s(o), this.controller, this.client)];
  }
  toReadableStream() {
    const t = this;
    let o;
    return Mv({ async start() {
      o = t[Symbol.asyncIterator]();
    }, async pull(a) {
      try {
        const { value: s, done: c } = await o.next();
        if (c) return a.close();
        const d = Cd(JSON.stringify(s) + `
`);
        a.enqueue(d);
      } catch (s) {
        a.error(s);
      }
    }, async cancel() {
      var a;
      await ((a = o.return) === null || a === void 0 ? void 0 : a.call(o));
    } });
  }
}
function lN(n, t) {
  return zn(this, arguments, function* () {
    var a, s, c, d;
    if (!n.body) throw t.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative" ? new Un("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api") : new Un("Attempted to iterate over a response with no body");
    const g = new sN(), y = new Gu(), m = Iv(n.body);
    try {
      for (var v = true, _ = Fn(aN(m)), E; E = yield xe(_.next()), a = E.done, !a; v = true) {
        d = E.value, v = false;
        const b = d;
        for (const D of y.decode(b)) {
          const H = g.decode(D);
          H && (yield yield xe(H));
        }
      }
    } catch (b) {
      s = { error: b };
    } finally {
      try {
        !v && !a && (c = _.return) && (yield xe(c.call(_)));
      } finally {
        if (s) throw s.error;
      }
    }
    for (const b of y.flush()) {
      const D = g.decode(b);
      D && (yield yield xe(D));
    }
  });
}
function aN(n) {
  return zn(this, arguments, function* () {
    var o, a, s, c;
    try {
      for (var d = true, g = Fn(n), y; y = yield xe(g.next()), o = y.done, !o; d = true) {
        c = y.value, d = false;
        const m = c;
        if (m == null) continue;
        const v = m instanceof ArrayBuffer ? new Uint8Array(m) : typeof m == "string" ? Cd(m) : m;
        yield yield xe(v);
      }
    } catch (m) {
      a = { error: m };
    } finally {
      try {
        !d && !o && (s = g.return) && (yield xe(s.call(g)));
      } finally {
        if (a) throw a.error;
      }
    }
  });
}
class sN {
  constructor() {
    this.event = null, this.data = [], this.chunks = [];
  }
  decode(t) {
    if (t.endsWith("\r") && (t = t.substring(0, t.length - 1)), !t) {
      if (!this.event && !this.data.length) return null;
      const c = { event: this.event, data: this.data.join(`
`), raw: this.chunks };
      return this.event = null, this.data = [], this.chunks = [], c;
    }
    if (this.chunks.push(t), t.startsWith(":")) return null;
    let [o, a, s] = rN(t, ":");
    return s.startsWith(" ") && (s = s.substring(1)), o === "event" ? this.event = s : o === "data" && this.data.push(s), null;
  }
}
function rN(n, t) {
  const o = n.indexOf(t);
  return o !== -1 ? [n.substring(0, o), t, n.substring(o + t.length)] : [n, "", ""];
}
async function uN(n, t) {
  const { response: o, requestLogID: a, retryOfRequestLogID: s, startTime: c } = t, d = await (async () => {
    var g;
    if (t.options.stream) return jt(n).debug("response", o.status, o.url, o.headers, o.body), t.options.__streamClass ? t.options.__streamClass.fromSSEResponse(o, t.controller, n) : na.fromSSEResponse(o, t.controller, n);
    if (o.status === 204) return null;
    if (t.options.__binaryResponse) return o;
    const y = o.headers.get("content-type"), m = (g = y == null ? void 0 : y.split(";")[0]) === null || g === void 0 ? void 0 : g.trim();
    return (m == null ? void 0 : m.includes("application/json")) || (m == null ? void 0 : m.endsWith("+json")) ? o.headers.get("content-length") === "0" ? void 0 : await o.json() : await o.text();
  })();
  return jt(n).debug(`[${a}] response parsed`, $o({ retryOfRequestLogID: s, url: o.url, status: o.status, body: d, durationMs: Date.now() - c })), d;
}
class Ad extends Promise {
  constructor(t, o, a = uN) {
    super((s) => {
      s(null);
    }), this.responsePromise = o, this.parseResponse = a, this.client = t;
  }
  _thenUnwrap(t) {
    return new Ad(this.client, this.responsePromise, async (o, a) => t(await this.parseResponse(o, a), a));
  }
  asResponse() {
    return this.responsePromise.then((t) => t.response);
  }
  async withResponse() {
    const [t, o] = await Promise.all([this.parse(), this.asResponse()]);
    return { data: t, response: o };
  }
  parse() {
    return this.parsedPromise || (this.parsedPromise = this.responsePromise.then((t) => this.parseResponse(this.client, t))), this.parsedPromise;
  }
  then(t, o) {
    return this.parse().then(t, o);
  }
  catch(t) {
    return this.parse().catch(t);
  }
  finally(t) {
    return this.parse().finally(t);
  }
}
const Ov = Symbol("brand.privateNullableHeaders");
function* cN(n) {
  if (!n) return;
  if (Ov in n) {
    const { values: a, nulls: s } = n;
    yield* a.entries();
    for (const c of s) yield [c, null];
    return;
  }
  let t = false, o;
  n instanceof Headers ? o = n.entries() : Ny(n) ? o = n : (t = true, o = Object.entries(n ?? {}));
  for (let a of o) {
    const s = a[0];
    if (typeof s != "string") throw new TypeError("expected header name to be a string");
    const c = Ny(a[1]) ? a[1] : [a[1]];
    let d = false;
    for (const g of c) g !== void 0 && (t && !d && (d = true, yield [s, null]), yield [s, g]);
  }
}
const Ms = (n) => {
  const t = new Headers(), o = /* @__PURE__ */ new Set();
  for (const a of n) {
    const s = /* @__PURE__ */ new Set();
    for (const [c, d] of cN(a)) {
      const g = c.toLowerCase();
      s.has(g) || (t.delete(c), s.add(g)), d === null ? (t.delete(c), o.add(g)) : (t.append(c, d), o.delete(g));
    }
  }
  return { [Ov]: true, values: t, nulls: o };
};
const Kf = (n) => {
  var t, o, a, s, c, d;
  if (typeof globalThis.process < "u") return (a = (o = (t = wT) === null || t === void 0 ? void 0 : t[n]) === null || o === void 0 ? void 0 : o.trim()) !== null && a !== void 0 ? a : void 0;
  if (typeof globalThis.Deno < "u") return (d = (c = (s = globalThis.Deno.env) === null || s === void 0 ? void 0 : s.get) === null || c === void 0 ? void 0 : c.call(s, n)) === null || d === void 0 ? void 0 : d.trim();
};
var Hv;
class Ou {
  constructor(t) {
    var o, a, s, c, d, g, y, { baseURL: m = Kf("GEMINI_NEXT_GEN_API_BASE_URL"), apiKey: v = (o = Kf("GEMINI_API_KEY")) !== null && o !== void 0 ? o : null, apiVersion: _ = "v1beta" } = t, E = Nu(t, ["baseURL", "apiKey", "apiVersion"]);
    const b = Object.assign(Object.assign({ apiKey: v, apiVersion: _ }, E), { baseURL: m || "https://generativelanguage.googleapis.com" });
    this.baseURL = b.baseURL, this.timeout = (a = b.timeout) !== null && a !== void 0 ? a : Ou.DEFAULT_TIMEOUT, this.logger = (s = b.logger) !== null && s !== void 0 ? s : console;
    const D = "warn";
    this.logLevel = D, this.logLevel = (d = (c = Iy(b.logLevel, "ClientOptions.logLevel", this)) !== null && c !== void 0 ? c : Iy(Kf("GEMINI_NEXT_GEN_API_LOG"), "process.env['GEMINI_NEXT_GEN_API_LOG']", this)) !== null && d !== void 0 ? d : D, this.fetchOptions = b.fetchOptions, this.maxRetries = (g = b.maxRetries) !== null && g !== void 0 ? g : 2, this.fetch = (y = b.fetch) !== null && y !== void 0 ? y : zb(), this.encoder = Yb, this._options = b, this.apiKey = v, this.apiVersion = _, this.clientAdapter = b.clientAdapter;
  }
  withOptions(t) {
    return new this.constructor(Object.assign(Object.assign(Object.assign({}, this._options), { baseURL: this.baseURL, maxRetries: this.maxRetries, timeout: this.timeout, logger: this.logger, logLevel: this.logLevel, fetch: this.fetch, fetchOptions: this.fetchOptions, apiKey: this.apiKey, apiVersion: this.apiVersion }), t));
  }
  baseURLOverridden() {
    return this.baseURL !== "https://generativelanguage.googleapis.com";
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values: t, nulls: o }) {
    if (!(t.has("authorization") || t.has("x-goog-api-key")) && !(this.apiKey && t.get("x-goog-api-key")) && !o.has("x-goog-api-key")) throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted');
  }
  async authHeaders(t) {
    const o = Ms([t.headers]);
    if (!(o.values.has("authorization") || o.values.has("x-goog-api-key"))) {
      if (this.apiKey) return Ms([{ "x-goog-api-key": this.apiKey }]);
      if (this.clientAdapter.isVertexAI()) return Ms([await this.clientAdapter.getAuthHeaders()]);
    }
  }
  stringifyQuery(t) {
    return Kb(t);
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${$b}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${Lb()}`;
  }
  makeStatusError(t, o, a, s) {
    return en.generate(t, o, a, s);
  }
  buildURL(t, o, a) {
    const s = !this.baseURLOverridden() && a || this.baseURL, c = Pb(t) ? new URL(t) : new URL(s + (s.endsWith("/") && t.startsWith("/") ? t.slice(1) : t)), d = this.defaultQuery(), g = Object.fromEntries(c.searchParams);
    return (!wy(d) || !wy(g)) && (o = Object.assign(Object.assign(Object.assign({}, g), d), o)), typeof o == "object" && o && !Array.isArray(o) && (c.search = this.stringifyQuery(o)), c.toString();
  }
  async prepareOptions(t) {
    if (this.clientAdapter && this.clientAdapter.isVertexAI() && !t.path.startsWith(`/${this.apiVersion}/projects/`)) {
      const o = t.path.slice(this.apiVersion.length + 1);
      t.path = `/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${o}`;
    }
  }
  async prepareRequest(t, { url: o, options: a }) {
  }
  get(t, o) {
    return this.methodRequest("get", t, o);
  }
  post(t, o) {
    return this.methodRequest("post", t, o);
  }
  patch(t, o) {
    return this.methodRequest("patch", t, o);
  }
  put(t, o) {
    return this.methodRequest("put", t, o);
  }
  delete(t, o) {
    return this.methodRequest("delete", t, o);
  }
  methodRequest(t, o, a) {
    return this.request(Promise.resolve(a).then((s) => Object.assign({ method: t, path: o }, s)));
  }
  request(t, o = null) {
    return new Ad(this, this.makeRequest(t, o, void 0));
  }
  async makeRequest(t, o, a) {
    var s, c, d;
    const g = await t, y = (s = g.maxRetries) !== null && s !== void 0 ? s : this.maxRetries;
    o == null && (o = y), await this.prepareOptions(g);
    const { req: m, url: v, timeout: _ } = await this.buildRequest(g, { retryCount: y - o });
    await this.prepareRequest(m, { url: v, options: g });
    const E = "log_" + (Math.random() * (1 << 24) | 0).toString(16).padStart(6, "0"), b = a === void 0 ? "" : `, retryOf: ${a}`, D = Date.now();
    if (jt(this).debug(`[${E}] sending request`, $o({ retryOfRequestLogID: a, method: g.method, url: v, options: g, headers: m.headers })), !((c = g.signal) === null || c === void 0) && c.aborted) throw new ud();
    const H = new AbortController(), P = await this.fetchWithTimeout(v, m, _, H).catch(rd), V = Date.now();
    if (P instanceof globalThis.Error) {
      const X = `retrying, ${o} attempts remaining`;
      if (!((d = g.signal) === null || d === void 0) && d.aborted) throw new ud();
      const j = sd(P) || /timed? ?out/i.test(String(P) + ("cause" in P ? String(P.cause) : ""));
      if (o) return jt(this).info(`[${E}] connection ${j ? "timed out" : "failed"} - ${X}`), jt(this).debug(`[${E}] connection ${j ? "timed out" : "failed"} (${X})`, $o({ retryOfRequestLogID: a, url: v, durationMs: V - D, message: P.message })), this.retryRequest(g, o, a ?? E);
      throw jt(this).info(`[${E}] connection ${j ? "timed out" : "failed"} - error; no more retries left`), jt(this).debug(`[${E}] connection ${j ? "timed out" : "failed"} (error; no more retries left)`, $o({ retryOfRequestLogID: a, url: v, durationMs: V - D, message: P.message })), j ? new Ev() : new Pu({ cause: P });
    }
    const ie = `[${E}${b}] ${m.method} ${v} ${P.ok ? "succeeded" : "failed"} with status ${P.status} in ${V - D}ms`;
    if (!P.ok) {
      const X = await this.shouldRetry(P);
      if (o && X) {
        const re = `retrying, ${o} attempts remaining`;
        return await Jb(P.body), jt(this).info(`${ie} - ${re}`), jt(this).debug(`[${E}] response error (${re})`, $o({ retryOfRequestLogID: a, url: P.url, status: P.status, headers: P.headers, durationMs: V - D })), this.retryRequest(g, o, a ?? E, P.headers);
      }
      const j = X ? "error; no more retries left" : "error; not retryable";
      jt(this).info(`${ie} - ${j}`);
      const ae = await P.text().catch((re) => rd(re).message), Y = qb(ae), ne = Y ? void 0 : ae;
      throw jt(this).debug(`[${E}] response error (${j})`, $o({ retryOfRequestLogID: a, url: P.url, status: P.status, headers: P.headers, message: ne, durationMs: Date.now() - D })), this.makeStatusError(P.status, Y, ne, P.headers);
    }
    return jt(this).info(ie), jt(this).debug(`[${E}] response start`, $o({ retryOfRequestLogID: a, url: P.url, status: P.status, headers: P.headers, durationMs: V - D })), { response: P, options: g, controller: H, requestLogID: E, retryOfRequestLogID: a, startTime: D };
  }
  async fetchWithTimeout(t, o, a, s) {
    const c = o || {}, { signal: d, method: g } = c, y = Nu(c, ["signal", "method"]), m = this._makeAbort(s);
    d && d.addEventListener("abort", m, { once: true });
    const v = setTimeout(m, a), _ = globalThis.ReadableStream && y.body instanceof globalThis.ReadableStream || typeof y.body == "object" && y.body !== null && Symbol.asyncIterator in y.body, E = Object.assign(Object.assign(Object.assign({ signal: s.signal }, _ ? { duplex: "half" } : {}), { method: "GET" }), y);
    g && (E.method = g.toUpperCase());
    try {
      return await this.fetch.call(void 0, t, E);
    } finally {
      clearTimeout(v);
    }
  }
  async shouldRetry(t) {
    const o = t.headers.get("x-should-retry");
    return o === "true" ? true : o === "false" ? false : t.status === 408 || t.status === 409 || t.status === 429 || t.status >= 500;
  }
  async retryRequest(t, o, a, s) {
    var c;
    let d;
    const g = s == null ? void 0 : s.get("retry-after-ms");
    if (g) {
      const m = parseFloat(g);
      Number.isNaN(m) || (d = m);
    }
    const y = s == null ? void 0 : s.get("retry-after");
    if (y && !d) {
      const m = parseFloat(y);
      Number.isNaN(m) ? d = Date.parse(y) - Date.now() : d = m * 1e3;
    }
    if (d === void 0) {
      const m = (c = t.maxRetries) !== null && c !== void 0 ? c : this.maxRetries;
      d = this.calculateDefaultRetryTimeoutMillis(o, m);
    }
    return await Vb(d), this.makeRequest(t, o - 1, a);
  }
  calculateDefaultRetryTimeoutMillis(t, o) {
    const c = o - t, d = Math.min(0.5 * Math.pow(2, c), 8), g = 1 - Math.random() * 0.25;
    return d * g * 1e3;
  }
  async buildRequest(t, { retryCount: o = 0 } = {}) {
    var a, s, c;
    const d = Object.assign({}, t), { method: g, path: y, query: m, defaultBaseURL: v } = d, _ = this.buildURL(y, m, v);
    "timeout" in d && Bb("timeout", d.timeout), d.timeout = (a = d.timeout) !== null && a !== void 0 ? a : this.timeout;
    const { bodyHeaders: E, body: b } = this.buildBody({ options: d }), D = await this.buildHeaders({ options: t, method: g, bodyHeaders: E, retryCount: o });
    return { req: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ method: g, headers: D }, d.signal && { signal: d.signal }), globalThis.ReadableStream && b instanceof globalThis.ReadableStream && { duplex: "half" }), b && { body: b }), (s = this.fetchOptions) !== null && s !== void 0 ? s : {}), (c = d.fetchOptions) !== null && c !== void 0 ? c : {}), url: _, timeout: d.timeout };
  }
  async buildHeaders({ options: t, method: o, bodyHeaders: a, retryCount: s }) {
    let c = {};
    this.idempotencyHeader && o !== "get" && (t.idempotencyKey || (t.idempotencyKey = this.defaultIdempotencyKey()), c[this.idempotencyHeader] = t.idempotencyKey);
    const d = await this.authHeaders(t);
    let g = Ms([c, { Accept: "application/json", "User-Agent": this.getUserAgent() }, this._options.defaultHeaders, a, t.headers, d]);
    return this.validateHeaders(g), g.values;
  }
  _makeAbort(t) {
    return () => t.abort();
  }
  buildBody({ options: { body: t, headers: o } }) {
    if (!t) return { bodyHeaders: void 0, body: void 0 };
    const a = Ms([o]);
    return ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof DataView || typeof t == "string" && a.values.has("content-type") || globalThis.Blob && t instanceof globalThis.Blob || t instanceof FormData || t instanceof URLSearchParams || globalThis.ReadableStream && t instanceof globalThis.ReadableStream ? { bodyHeaders: void 0, body: t } : typeof t == "object" && (Symbol.asyncIterator in t || Symbol.iterator in t && "next" in t && typeof t.next == "function") ? { bodyHeaders: void 0, body: Fb(t) } : typeof t == "object" && a.values.get("content-type") === "application/x-www-form-urlencoded" ? { bodyHeaders: { "content-type": "application/x-www-form-urlencoded" }, body: this.stringifyQuery(t) } : this.encoder({ body: t, headers: a });
  }
}
Ou.DEFAULT_TIMEOUT = 6e4;
class bt extends Ou {
  constructor() {
    super(...arguments), this.interactions = new Gv(this);
  }
}
Hv = bt;
bt.GeminiNextGenAPIClient = Hv;
bt.GeminiNextGenAPIClientError = Un;
bt.APIError = en;
bt.APIConnectionError = Pu;
bt.APIConnectionTimeoutError = Ev;
bt.APIUserAbortError = ud;
bt.NotFoundError = xv;
bt.ConflictError = bv;
bt.RateLimitError = wv;
bt.BadRequestError = _v;
bt.AuthenticationError = Cv;
bt.InternalServerError = Rv;
bt.PermissionDeniedError = Av;
bt.UnprocessableEntityError = Nv;
bt.toFile = jb;
bt.Interactions = Gv;
function fN(n, t) {
  const o = {}, a = u(n, ["name"]);
  return a != null && f(o, ["_url", "name"], a), o;
}
function dN(n, t) {
  const o = {}, a = u(n, ["name"]);
  return a != null && f(o, ["_url", "name"], a), o;
}
function pN(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  return a != null && f(o, ["sdkHttpResponse"], a), o;
}
function mN(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  return a != null && f(o, ["sdkHttpResponse"], a), o;
}
function hN(n, t, o) {
  const a = {};
  if (u(n, ["validationDataset"]) !== void 0) throw new Error("validationDataset parameter is not supported in Gemini API.");
  const s = u(n, ["tunedModelDisplayName"]);
  if (t !== void 0 && s != null && f(t, ["displayName"], s), u(n, ["description"]) !== void 0) throw new Error("description parameter is not supported in Gemini API.");
  const c = u(n, ["epochCount"]);
  t !== void 0 && c != null && f(t, ["tuningTask", "hyperparameters", "epochCount"], c);
  const d = u(n, ["learningRateMultiplier"]);
  if (d != null && f(a, ["tuningTask", "hyperparameters", "learningRateMultiplier"], d), u(n, ["exportLastCheckpointOnly"]) !== void 0) throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");
  if (u(n, ["preTunedModelCheckpointId"]) !== void 0) throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");
  if (u(n, ["adapterSize"]) !== void 0) throw new Error("adapterSize parameter is not supported in Gemini API.");
  if (u(n, ["tuningMode"]) !== void 0) throw new Error("tuningMode parameter is not supported in Gemini API.");
  if (u(n, ["customBaseModel"]) !== void 0) throw new Error("customBaseModel parameter is not supported in Gemini API.");
  const g = u(n, ["batchSize"]);
  t !== void 0 && g != null && f(t, ["tuningTask", "hyperparameters", "batchSize"], g);
  const y = u(n, ["learningRate"]);
  if (t !== void 0 && y != null && f(t, ["tuningTask", "hyperparameters", "learningRate"], y), u(n, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
  if (u(n, ["beta"]) !== void 0) throw new Error("beta parameter is not supported in Gemini API.");
  if (u(n, ["baseTeacherModel"]) !== void 0) throw new Error("baseTeacherModel parameter is not supported in Gemini API.");
  if (u(n, ["tunedTeacherModelSource"]) !== void 0) throw new Error("tunedTeacherModelSource parameter is not supported in Gemini API.");
  if (u(n, ["sftLossWeightMultiplier"]) !== void 0) throw new Error("sftLossWeightMultiplier parameter is not supported in Gemini API.");
  if (u(n, ["outputUri"]) !== void 0) throw new Error("outputUri parameter is not supported in Gemini API.");
  if (u(n, ["encryptionSpec"]) !== void 0) throw new Error("encryptionSpec parameter is not supported in Gemini API.");
  return a;
}
function gN(n, t, o) {
  const a = {};
  let s = u(o, ["config", "method"]);
  if (s === void 0 && (s = "SUPERVISED_FINE_TUNING"), s === "SUPERVISED_FINE_TUNING") {
    const Y = u(n, ["validationDataset"]);
    t !== void 0 && Y != null && f(t, ["supervisedTuningSpec"], $f(Y));
  } else if (s === "PREFERENCE_TUNING") {
    const Y = u(n, ["validationDataset"]);
    t !== void 0 && Y != null && f(t, ["preferenceOptimizationSpec"], $f(Y));
  } else if (s === "DISTILLATION") {
    const Y = u(n, ["validationDataset"]);
    t !== void 0 && Y != null && f(t, ["distillationSpec"], $f(Y));
  }
  const c = u(n, ["tunedModelDisplayName"]);
  t !== void 0 && c != null && f(t, ["tunedModelDisplayName"], c);
  const d = u(n, ["description"]);
  t !== void 0 && d != null && f(t, ["description"], d);
  let g = u(o, ["config", "method"]);
  if (g === void 0 && (g = "SUPERVISED_FINE_TUNING"), g === "SUPERVISED_FINE_TUNING") {
    const Y = u(n, ["epochCount"]);
    t !== void 0 && Y != null && f(t, ["supervisedTuningSpec", "hyperParameters", "epochCount"], Y);
  } else if (g === "PREFERENCE_TUNING") {
    const Y = u(n, ["epochCount"]);
    t !== void 0 && Y != null && f(t, ["preferenceOptimizationSpec", "hyperParameters", "epochCount"], Y);
  } else if (g === "DISTILLATION") {
    const Y = u(n, ["epochCount"]);
    t !== void 0 && Y != null && f(t, ["distillationSpec", "hyperParameters", "epochCount"], Y);
  }
  let y = u(o, ["config", "method"]);
  if (y === void 0 && (y = "SUPERVISED_FINE_TUNING"), y === "SUPERVISED_FINE_TUNING") {
    const Y = u(n, ["learningRateMultiplier"]);
    t !== void 0 && Y != null && f(t, ["supervisedTuningSpec", "hyperParameters", "learningRateMultiplier"], Y);
  } else if (y === "PREFERENCE_TUNING") {
    const Y = u(n, ["learningRateMultiplier"]);
    t !== void 0 && Y != null && f(t, ["preferenceOptimizationSpec", "hyperParameters", "learningRateMultiplier"], Y);
  } else if (y === "DISTILLATION") {
    const Y = u(n, ["learningRateMultiplier"]);
    t !== void 0 && Y != null && f(t, ["distillationSpec", "hyperParameters", "learningRateMultiplier"], Y);
  }
  let m = u(o, ["config", "method"]);
  if (m === void 0 && (m = "SUPERVISED_FINE_TUNING"), m === "SUPERVISED_FINE_TUNING") {
    const Y = u(n, ["exportLastCheckpointOnly"]);
    t !== void 0 && Y != null && f(t, ["supervisedTuningSpec", "exportLastCheckpointOnly"], Y);
  } else if (m === "PREFERENCE_TUNING") {
    const Y = u(n, ["exportLastCheckpointOnly"]);
    t !== void 0 && Y != null && f(t, ["preferenceOptimizationSpec", "exportLastCheckpointOnly"], Y);
  } else if (m === "DISTILLATION") {
    const Y = u(n, ["exportLastCheckpointOnly"]);
    t !== void 0 && Y != null && f(t, ["distillationSpec", "exportLastCheckpointOnly"], Y);
  }
  let v = u(o, ["config", "method"]);
  if (v === void 0 && (v = "SUPERVISED_FINE_TUNING"), v === "SUPERVISED_FINE_TUNING") {
    const Y = u(n, ["adapterSize"]);
    t !== void 0 && Y != null && f(t, ["supervisedTuningSpec", "hyperParameters", "adapterSize"], Y);
  } else if (v === "PREFERENCE_TUNING") {
    const Y = u(n, ["adapterSize"]);
    t !== void 0 && Y != null && f(t, ["preferenceOptimizationSpec", "hyperParameters", "adapterSize"], Y);
  } else if (v === "DISTILLATION") {
    const Y = u(n, ["adapterSize"]);
    t !== void 0 && Y != null && f(t, ["distillationSpec", "hyperParameters", "adapterSize"], Y);
  }
  let _ = u(o, ["config", "method"]);
  if (_ === void 0 && (_ = "SUPERVISED_FINE_TUNING"), _ === "SUPERVISED_FINE_TUNING") {
    const Y = u(n, ["tuningMode"]);
    t !== void 0 && Y != null && f(t, ["supervisedTuningSpec", "tuningMode"], Y);
  }
  const E = u(n, ["customBaseModel"]);
  t !== void 0 && E != null && f(t, ["customBaseModel"], E);
  let b = u(o, ["config", "method"]);
  if (b === void 0 && (b = "SUPERVISED_FINE_TUNING"), b === "SUPERVISED_FINE_TUNING") {
    const Y = u(n, ["batchSize"]);
    t !== void 0 && Y != null && f(t, ["supervisedTuningSpec", "hyperParameters", "batchSize"], Y);
  }
  let D = u(o, ["config", "method"]);
  if (D === void 0 && (D = "SUPERVISED_FINE_TUNING"), D === "SUPERVISED_FINE_TUNING") {
    const Y = u(n, ["learningRate"]);
    t !== void 0 && Y != null && f(t, ["supervisedTuningSpec", "hyperParameters", "learningRate"], Y);
  }
  const H = u(n, ["labels"]);
  t !== void 0 && H != null && f(t, ["labels"], H);
  const P = u(n, ["beta"]);
  t !== void 0 && P != null && f(t, ["preferenceOptimizationSpec", "hyperParameters", "beta"], P);
  const V = u(n, ["baseTeacherModel"]);
  t !== void 0 && V != null && f(t, ["distillationSpec", "baseTeacherModel"], V);
  const ie = u(n, ["tunedTeacherModelSource"]);
  t !== void 0 && ie != null && f(t, ["distillationSpec", "tunedTeacherModelSource"], ie);
  const X = u(n, ["sftLossWeightMultiplier"]);
  t !== void 0 && X != null && f(t, ["distillationSpec", "hyperParameters", "sftLossWeightMultiplier"], X);
  const j = u(n, ["outputUri"]);
  t !== void 0 && j != null && f(t, ["outputUri"], j);
  const ae = u(n, ["encryptionSpec"]);
  return t !== void 0 && ae != null && f(t, ["encryptionSpec"], ae), a;
}
function yN(n, t) {
  const o = {}, a = u(n, ["baseModel"]);
  a != null && f(o, ["baseModel"], a);
  const s = u(n, ["preTunedModel"]);
  s != null && f(o, ["preTunedModel"], s);
  const c = u(n, ["trainingDataset"]);
  c != null && wN(c);
  const d = u(n, ["config"]);
  return d != null && hN(d, o), o;
}
function vN(n, t) {
  const o = {}, a = u(n, ["baseModel"]);
  a != null && f(o, ["baseModel"], a);
  const s = u(n, ["preTunedModel"]);
  s != null && f(o, ["preTunedModel"], s);
  const c = u(n, ["trainingDataset"]);
  c != null && RN(c, o, t);
  const d = u(n, ["config"]);
  return d != null && gN(d, o, t), o;
}
function SN(n, t) {
  const o = {}, a = u(n, ["name"]);
  return a != null && f(o, ["_url", "name"], a), o;
}
function TN(n, t) {
  const o = {}, a = u(n, ["name"]);
  return a != null && f(o, ["_url", "name"], a), o;
}
function EN(n, t, o) {
  const a = {}, s = u(n, ["pageSize"]);
  t !== void 0 && s != null && f(t, ["_query", "pageSize"], s);
  const c = u(n, ["pageToken"]);
  t !== void 0 && c != null && f(t, ["_query", "pageToken"], c);
  const d = u(n, ["filter"]);
  return t !== void 0 && d != null && f(t, ["_query", "filter"], d), a;
}
function _N(n, t, o) {
  const a = {}, s = u(n, ["pageSize"]);
  t !== void 0 && s != null && f(t, ["_query", "pageSize"], s);
  const c = u(n, ["pageToken"]);
  t !== void 0 && c != null && f(t, ["_query", "pageToken"], c);
  const d = u(n, ["filter"]);
  return t !== void 0 && d != null && f(t, ["_query", "filter"], d), a;
}
function CN(n, t) {
  const o = {}, a = u(n, ["config"]);
  return a != null && EN(a, o), o;
}
function AN(n, t) {
  const o = {}, a = u(n, ["config"]);
  return a != null && _N(a, o), o;
}
function xN(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["nextPageToken"]);
  s != null && f(o, ["nextPageToken"], s);
  const c = u(n, ["tunedModels"]);
  if (c != null) {
    let d = c;
    Array.isArray(d) && (d = d.map((g) => Bv(g))), f(o, ["tuningJobs"], d);
  }
  return o;
}
function bN(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["nextPageToken"]);
  s != null && f(o, ["nextPageToken"], s);
  const c = u(n, ["tuningJobs"]);
  if (c != null) {
    let d = c;
    Array.isArray(d) && (d = d.map((g) => dd(g))), f(o, ["tuningJobs"], d);
  }
  return o;
}
function NN(n, t) {
  const o = {}, a = u(n, ["name"]);
  a != null && f(o, ["model"], a);
  const s = u(n, ["name"]);
  return s != null && f(o, ["endpoint"], s), o;
}
function wN(n, t) {
  const o = {};
  if (u(n, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (u(n, ["vertexDatasetResource"]) !== void 0) throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");
  const a = u(n, ["examples"]);
  if (a != null) {
    let s = a;
    Array.isArray(s) && (s = s.map((c) => c)), f(o, ["examples", "examples"], s);
  }
  return o;
}
function RN(n, t, o) {
  const a = {};
  let s = u(o, ["config", "method"]);
  if (s === void 0 && (s = "SUPERVISED_FINE_TUNING"), s === "SUPERVISED_FINE_TUNING") {
    const d = u(n, ["gcsUri"]);
    t !== void 0 && d != null && f(t, ["supervisedTuningSpec", "trainingDatasetUri"], d);
  } else if (s === "PREFERENCE_TUNING") {
    const d = u(n, ["gcsUri"]);
    t !== void 0 && d != null && f(t, ["preferenceOptimizationSpec", "trainingDatasetUri"], d);
  } else if (s === "DISTILLATION") {
    const d = u(n, ["gcsUri"]);
    t !== void 0 && d != null && f(t, ["distillationSpec", "promptDatasetUri"], d);
  }
  let c = u(o, ["config", "method"]);
  if (c === void 0 && (c = "SUPERVISED_FINE_TUNING"), c === "SUPERVISED_FINE_TUNING") {
    const d = u(n, ["vertexDatasetResource"]);
    t !== void 0 && d != null && f(t, ["supervisedTuningSpec", "trainingDatasetUri"], d);
  } else if (c === "PREFERENCE_TUNING") {
    const d = u(n, ["vertexDatasetResource"]);
    t !== void 0 && d != null && f(t, ["preferenceOptimizationSpec", "trainingDatasetUri"], d);
  } else if (c === "DISTILLATION") {
    const d = u(n, ["vertexDatasetResource"]);
    t !== void 0 && d != null && f(t, ["distillationSpec", "promptDatasetUri"], d);
  }
  if (u(n, ["examples"]) !== void 0) throw new Error("examples parameter is not supported in Vertex AI.");
  return a;
}
function Bv(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["name"]);
  s != null && f(o, ["name"], s);
  const c = u(n, ["state"]);
  c != null && f(o, ["state"], nv(c));
  const d = u(n, ["createTime"]);
  d != null && f(o, ["createTime"], d);
  const g = u(n, ["tuningTask", "startTime"]);
  g != null && f(o, ["startTime"], g);
  const y = u(n, ["tuningTask", "completeTime"]);
  y != null && f(o, ["endTime"], y);
  const m = u(n, ["updateTime"]);
  m != null && f(o, ["updateTime"], m);
  const v = u(n, ["description"]);
  v != null && f(o, ["description"], v);
  const _ = u(n, ["baseModel"]);
  _ != null && f(o, ["baseModel"], _);
  const E = u(n, ["_self"]);
  return E != null && f(o, ["tunedModel"], NN(E)), o;
}
function dd(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["name"]);
  s != null && f(o, ["name"], s);
  const c = u(n, ["state"]);
  c != null && f(o, ["state"], nv(c));
  const d = u(n, ["createTime"]);
  d != null && f(o, ["createTime"], d);
  const g = u(n, ["startTime"]);
  g != null && f(o, ["startTime"], g);
  const y = u(n, ["endTime"]);
  y != null && f(o, ["endTime"], y);
  const m = u(n, ["updateTime"]);
  m != null && f(o, ["updateTime"], m);
  const v = u(n, ["error"]);
  v != null && f(o, ["error"], v);
  const _ = u(n, ["description"]);
  _ != null && f(o, ["description"], _);
  const E = u(n, ["baseModel"]);
  E != null && f(o, ["baseModel"], E);
  const b = u(n, ["tunedModel"]);
  b != null && f(o, ["tunedModel"], b);
  const D = u(n, ["preTunedModel"]);
  D != null && f(o, ["preTunedModel"], D);
  const H = u(n, ["supervisedTuningSpec"]);
  H != null && f(o, ["supervisedTuningSpec"], H);
  const P = u(n, ["preferenceOptimizationSpec"]);
  P != null && f(o, ["preferenceOptimizationSpec"], P);
  const V = u(n, ["distillationSpec"]);
  V != null && f(o, ["distillationSpec"], V);
  const ie = u(n, ["tuningDataStats"]);
  ie != null && f(o, ["tuningDataStats"], ie);
  const X = u(n, ["encryptionSpec"]);
  X != null && f(o, ["encryptionSpec"], X);
  const j = u(n, ["partnerModelTuningSpec"]);
  j != null && f(o, ["partnerModelTuningSpec"], j);
  const ae = u(n, ["customBaseModel"]);
  ae != null && f(o, ["customBaseModel"], ae);
  const Y = u(n, ["evaluateDatasetRuns"]);
  if (Y != null) {
    let B = Y;
    Array.isArray(B) && (B = B.map((te) => te)), f(o, ["evaluateDatasetRuns"], B);
  }
  const ne = u(n, ["experiment"]);
  ne != null && f(o, ["experiment"], ne);
  const Te = u(n, ["fullFineTuningSpec"]);
  Te != null && f(o, ["fullFineTuningSpec"], Te);
  const re = u(n, ["labels"]);
  re != null && f(o, ["labels"], re);
  const ve = u(n, ["outputUri"]);
  ve != null && f(o, ["outputUri"], ve);
  const pe = u(n, ["pipelineJob"]);
  pe != null && f(o, ["pipelineJob"], pe);
  const Z = u(n, ["serviceAccount"]);
  Z != null && f(o, ["serviceAccount"], Z);
  const ge = u(n, ["tunedModelDisplayName"]);
  ge != null && f(o, ["tunedModelDisplayName"], ge);
  const Ee = u(n, ["tuningJobState"]);
  Ee != null && f(o, ["tuningJobState"], Ee);
  const Fe = u(n, ["veoTuningSpec"]);
  return Fe != null && f(o, ["veoTuningSpec"], Fe), o;
}
function MN(n, t) {
  const o = {}, a = u(n, ["sdkHttpResponse"]);
  a != null && f(o, ["sdkHttpResponse"], a);
  const s = u(n, ["name"]);
  s != null && f(o, ["name"], s);
  const c = u(n, ["metadata"]);
  c != null && f(o, ["metadata"], c);
  const d = u(n, ["done"]);
  d != null && f(o, ["done"], d);
  const g = u(n, ["error"]);
  return g != null && f(o, ["error"], g), o;
}
function $f(n, t) {
  const o = {}, a = u(n, ["gcsUri"]);
  a != null && f(o, ["validationDatasetUri"], a);
  const s = u(n, ["vertexDatasetResource"]);
  return s != null && f(o, ["validationDatasetUri"], s), o;
}
class IN extends Mi {
  constructor(t) {
    super(), this.apiClient = t, this.list = async (o = {}) => new Xo(Ri.PAGED_ITEM_TUNING_JOBS, (a) => this.listInternal(a), await this.listInternal(o), o), this.get = async (o) => await this.getInternal(o), this.tune = async (o) => {
      var a;
      if (this.apiClient.isVertexAI()) if (o.baseModel.startsWith("projects/")) {
        const s = { tunedModelName: o.baseModel };
        !((a = o.config) === null || a === void 0) && a.preTunedModelCheckpointId && (s.checkpointId = o.config.preTunedModelCheckpointId);
        const c = Object.assign(Object.assign({}, o), { preTunedModel: s });
        return c.baseModel = void 0, await this.tuneInternal(c);
      } else {
        const s = Object.assign({}, o);
        return await this.tuneInternal(s);
      }
      else {
        const s = Object.assign({}, o), c = await this.tuneMldevInternal(s);
        let d = "";
        return c.metadata !== void 0 && c.metadata.tunedModel !== void 0 ? d = c.metadata.tunedModel : c.name !== void 0 && c.name.includes("/operations/") && (d = c.name.split("/operations/")[0]), { name: d, state: jf.JOB_STATE_QUEUED };
      }
    };
  }
  async getInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = TN(t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => dd(v));
    } else {
      const m = SN(t);
      return g = le("{name}", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => Bv(v));
    }
  }
  async listInternal(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = AN(t);
      return g = le("tuningJobs", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = bN(v), E = new oy();
        return Object.assign(E, _), E;
      });
    } else {
      const m = CN(t);
      return g = le("tunedModels", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "GET", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = xN(v), E = new oy();
        return Object.assign(E, _), E;
      });
    }
  }
  async cancel(t) {
    var o, a, s, c;
    let d, g = "", y = {};
    if (this.apiClient.isVertexAI()) {
      const m = dN(t);
      return g = le("{name}:cancel", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = mN(v), E = new ly();
        return Object.assign(E, _), E;
      });
    } else {
      const m = fN(t);
      return g = le("{name}:cancel", m._url), y = m._query, delete m._url, delete m._query, d = this.apiClient.request({ path: g, queryParams: y, body: JSON.stringify(m), httpMethod: "POST", httpOptions: (s = t.config) === null || s === void 0 ? void 0 : s.httpOptions, abortSignal: (c = t.config) === null || c === void 0 ? void 0 : c.abortSignal }).then((v) => v.json().then((_) => {
        const E = _;
        return E.sdkHttpResponse = { headers: v.headers }, E;
      })), d.then((v) => {
        const _ = pN(v), E = new ly();
        return Object.assign(E, _), E;
      });
    }
  }
  async tuneInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const g = vN(t, t);
      return c = le("tuningJobs", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json().then((m) => {
        const v = m;
        return v.sdkHttpResponse = { headers: y.headers }, v;
      })), s.then((y) => dd(y));
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async tuneMldevInternal(t) {
    var o, a;
    let s, c = "", d = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const g = yN(t);
      return c = le("tunedModels", g._url), d = g._query, delete g._url, delete g._query, s = this.apiClient.request({ path: c, queryParams: d, body: JSON.stringify(g), httpMethod: "POST", httpOptions: (o = t.config) === null || o === void 0 ? void 0 : o.httpOptions, abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal }).then((y) => y.json().then((m) => {
        const v = m;
        return v.sdkHttpResponse = { headers: y.headers }, v;
      })), s.then((y) => MN(y));
    }
  }
}
class DN {
  async download(t, o) {
    throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.");
  }
}
const UN = 1024 * 1024 * 8, LN = 3, kN = 1e3, PN = 2, Ru = "x-goog-upload-status";
async function GN(n, t, o) {
  var a;
  const s = await qv(n, t, o), c = await (s == null ? void 0 : s.json());
  if (((a = s == null ? void 0 : s.headers) === null || a === void 0 ? void 0 : a[Ru]) !== "final") throw new Error("Failed to upload file: Upload status is not finalized.");
  return c.file;
}
async function ON(n, t, o) {
  var a;
  const s = await qv(n, t, o), c = await (s == null ? void 0 : s.json());
  if (((a = s == null ? void 0 : s.headers) === null || a === void 0 ? void 0 : a[Ru]) !== "final") throw new Error("Failed to upload file: Upload status is not finalized.");
  const d = Qy(c), g = new yd();
  return Object.assign(g, d), g;
}
async function qv(n, t, o) {
  var a, s;
  let c = 0, d = 0, g = new td(new Response()), y = "upload";
  for (c = n.size; d < c; ) {
    const m = Math.min(UN, c - d), v = n.slice(d, d + m);
    d + m >= c && (y += ", finalize");
    let _ = 0, E = kN;
    for (; _ < LN && (g = await o.request({ path: "", body: v, httpMethod: "POST", httpOptions: { apiVersion: "", baseUrl: t, headers: { "X-Goog-Upload-Command": y, "X-Goog-Upload-Offset": String(d), "Content-Length": String(m) } } }), !(!((a = g == null ? void 0 : g.headers) === null || a === void 0) && a[Ru])); ) _++, await BN(E), E = E * PN;
    if (d += m, ((s = g == null ? void 0 : g.headers) === null || s === void 0 ? void 0 : s[Ru]) !== "active") break;
    if (c <= d) throw new Error("All content has been uploaded, but the upload status is not finalized.");
  }
  return g;
}
async function HN(n) {
  return { size: n.size, type: n.type };
}
function BN(n) {
  return new Promise((t) => setTimeout(t, n));
}
class qN {
  async upload(t, o, a) {
    if (typeof t == "string") throw new Error("File path is not supported in browser uploader.");
    return await GN(t, o, a);
  }
  async uploadToFileSearchStore(t, o, a) {
    if (typeof t == "string") throw new Error("File path is not supported in browser uploader.");
    return await ON(t, o, a);
  }
  async stat(t) {
    if (typeof t == "string") throw new Error("File path is not supported in browser uploader.");
    return await HN(t);
  }
}
class VN {
  create(t, o, a) {
    return new zN(t, o, a);
  }
}
class zN {
  constructor(t, o, a) {
    this.url = t, this.headers = o, this.callbacks = a;
  }
  connect() {
    this.ws = new WebSocket(this.url), this.ws.onopen = this.callbacks.onopen, this.ws.onerror = this.callbacks.onerror, this.ws.onclose = this.callbacks.onclose, this.ws.onmessage = this.callbacks.onmessage;
  }
  send(t) {
    if (this.ws === void 0) throw new Error("WebSocket is not connected");
    this.ws.send(t);
  }
  close() {
    if (this.ws === void 0) throw new Error("WebSocket is not connected");
    this.ws.close();
  }
}
const Uy = "x-goog-api-key";
class FN {
  constructor(t) {
    this.apiKey = t;
  }
  async addAuthHeaders(t, o) {
    if (t.get(Uy) === null) {
      if (this.apiKey.startsWith("auth_tokens/")) throw new Error("Ephemeral tokens are only supported by the live API.");
      if (!this.apiKey) throw new Error("API key is missing. Please provide a valid API key.");
      t.append(Uy, this.apiKey);
    }
  }
}
const JN = "gl-node/";
class ks {
  get interactions() {
    var t;
    if (this._interactions !== void 0) return this._interactions;
    console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");
    const o = this.httpOptions;
    o != null && o.extraBody && console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");
    const a = new bt({ baseURL: this.apiClient.getBaseUrl(), apiKey: this.apiKey, apiVersion: this.apiClient.getApiVersion(), clientAdapter: this.apiClient, defaultHeaders: this.apiClient.getDefaultHeaders(), timeout: o == null ? void 0 : o.timeout, maxRetries: (t = o == null ? void 0 : o.retryOptions) === null || t === void 0 ? void 0 : t.attempts });
    return this._interactions = a.interactions, this._interactions;
  }
  constructor(t) {
    var o;
    if (t.apiKey == null) throw new Error("An API Key must be set when running in a browser");
    if (t.project || t.location) throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");
    this.vertexai = (o = t.vertexai) !== null && o !== void 0 ? o : false, this.apiKey = t.apiKey;
    const a = DT(t.httpOptions, t.vertexai, void 0, void 0);
    a && (t.httpOptions ? t.httpOptions.baseUrl = a : t.httpOptions = { baseUrl: a }), this.apiVersion = t.apiVersion, this.httpOptions = t.httpOptions;
    const s = new FN(this.apiKey);
    this.apiClient = new Vx({ auth: s, apiVersion: this.apiVersion, apiKey: this.apiKey, vertexai: this.vertexai, httpOptions: this.httpOptions, userAgentExtra: JN + "web", uploader: new qN(), downloader: new DN() }), this.models = new sb(this.apiClient), this.live = new tb(this.apiClient, s, new VN()), this.batches = new c_(this.apiClient), this.chats = new Y_(this.models, this.apiClient), this.caches = new z_(this.apiClient), this.files = new oC(this.apiClient), this.operations = new rb(this.apiClient), this.authTokens = new xb(this.apiClient), this.tunings = new IN(this.apiClient), this.fileSearchStores = new Ub(this.apiClient);
  }
}
const YN = "gemini-3.1-flash-lite-preview", Vv = "gemini-3.1-pro-preview", Ly = "gemini-3.1-flash-image-preview", Ps = (n) => {
  if (!n || n.trim().length === 0) throw new Error("Missing API key.");
  return n.trim();
}, Mu = async (n) => new Promise((t, o) => {
  const a = new FileReader();
  a.onloadend = () => {
    const c = a.result.split(",")[1];
    t({ inlineData: { data: c, mimeType: n.type } });
  }, a.onerror = o, a.readAsDataURL(n);
}), KN = async (n, t) => {
  var o;
  try {
    const a = new ks({ apiKey: Ps(t) }), s = await Mu(n);
    return ((o = (await a.models.generateContent({ model: Vv, contents: [{ parts: [s, { text: "Identify the location and lighting in this image. Return a simple, concise description (max 10 words). Example: 'Modern sunlit minimalist cafe'. No conversational filler." }] }], config: { httpOptions: { timeout: 3e5 } } })).text) == null ? void 0 : o.trim()) || "Realistic background.";
  } catch (a) {
    return console.error("Environment analysis failed:", a), "A realistic natural background.";
  }
}, $N = async (n, t) => {
  var o;
  try {
    const a = new ks({ apiKey: Ps(t) }), s = await Mu(n);
    return ((o = (await a.models.generateContent({ model: Vv, contents: [{ parts: [s, { text: "Identify the main clothing pieces, colors, and any non-clothing props (bags, coffee, phone, etc) in this flat-lay. Return a concise description. If props exist, explicitly mention them. Example: 'Black blazer over white tee with a brown leather handbag'. Max 15 words." }] }], config: { httpOptions: { timeout: 3e5 } } })).text) == null ? void 0 : o.trim()) || "Outfit from reference.";
  } catch (a) {
    return console.error("Fashion analysis failed:", a), "A stylish outfit.";
  }
}, XN = async (n, t) => {
  const a = await new ks({ apiKey: Ps(t) }).models.generateContent({ model: YN, contents: [{ parts: [{ text: "You are a prompt builder. Return STRICT JSON with keys: prompt, negative_prompt. No markdown, no commentary." }, { text: JSON.stringify(n) }] }], config: { httpOptions: { timeout: 3e5 }, responseMimeType: "application/json" } });
  try {
    const s = JSON.parse(a.text || "{}");
    return { prompt: String(s.prompt || ""), negativePrompt: String(s.negative_prompt || "") };
  } catch {
    return { prompt: `Create a photorealistic portrait. Use these technical specs: ${JSON.stringify(n)}`, negativePrompt: "blurry, low quality, watermark, text, logo, wrong eyeglasses" };
  }
}, QN = async (n, t, o, a, s, c, d, g, yb = null, Sb = []) => {
  var y, m, v, _;
  try {
    const E = new ks({ apiKey: Ps(g) }), D = [await Mu(n)];
    yb && D.push(await Md(yb));
    if (!yb && Array.isArray(Sb)) for (const Z of Sb) Z && Z.url && D.push(await Md(Z.url));
    if (!yb && t && s.clothing.includes("1")) {
      const Z = await Mu(t);
      D.push(Z);
    }
    const H = { "Film Simulation": "Analog film aesthetic, subtle grain, natural skin tones, soft shadows.", Magazine: "High-fashion magazine editorial look. Natural contrast, slight saturation, sharp focus, vibrant and clean colors.", "Web Use": "E-commerce standard. Middle tone focus with natural color feel, accurate and realistic color representation." }, P = { "Reference upload (default)": a || "The environment from the reference.", "Clean Spacious Room": "Inside a clean, minimalist white room with soft shadows.", "Modern Office": "Sleek contemporary office interior with blurred workstations and architectural glass.", "South East Asian Park": "Tropical lush park in Southeast Asia, vibrant greenery and dappled sunlight.", "Urban Walking Path (SEA)": "Modern urban pedestrian walkway in a Southeast Asian city, architectural elements in distance.", "Midday Coffee Shop": "Stylish coffee shop interior with natural midday light streaming through large windows." }, V = s.ethnicity.toLowerCase().includes("south east") || s.ethnicity.toLowerCase().includes("thailand") || s.ethnicity.toLowerCase().includes("singapore") || s.ethnicity.toLowerCase().includes("vietnam"), X = o && ["holding", "bag", "handbag", "cup", "phone", "smartphone", "book", "magazine", "wallet", "accessory"].some((Z) => o.toLowerCase().includes(Z)), j = () => {
      if (X) return "The model is naturally interacting with the accessories identified in the fashion reference.";
      const Z = s.handProps.toLowerCase();
      return Z.includes("relaxed") || Z.includes("touching") || Z.includes("pocket") || Z.includes("clasped") ? `Hand posture: ${s.handProps}.` : `Model is holding a ${s.handProps}.`;
    }, ae = { subject: `A ${s.ethnicity} ${s.gender} model, age ${s.age}.`, eyewear: "Model is wearing the exact eyeglasses shown in the primary reference image.", clothing: o && s.clothing.includes("1") ? o : s.clothing, custom_specs: yb ? { selected_model_mode: "preserve_selected_model_add_eyeglasses_only" } : c || {}, selected_model_reference: yb ? "Included" : "None", extra_references: !yb && Array.isArray(Sb) ? Sb.map((Z, ge) => ({ index: ge + 1, file_name: Z.fileName || `reference_${ge + 1}`, mode: Z.mode || "reference" })) : [], features: V ? "Authentic Southeast Asian facial features, distinct eye shape." : "Natural features.", skin: s.skinTexture, hair: s.hairStyle, expression: s.facialExpression, environment: P[s.environment] || s.environment, hand_props_posture: j(), composition: { pose: `The model is ${s.pose}.`, shot_type: s.shotType }, photography: { style: s.artStyle, lighting: s.lighting, color_grading: H[s.colorGrading] || s.colorGrading, skin_detail: s.skinTexture, negative_aspect: "looking directly to camera" } }, Y = yb ? `
      Make ${String(s.gender || "").toLowerCase() === "male" ? "him" : "her"} wear this uploaded eyeglasses.
      Preserve the selected model image exactly: same face, identity, expression, hairstyle, clothing, pose, lighting, background, camera angle, and composition.
      Only add the eyeglasses from the first reference image naturally onto the model's face.
      The eyeglasses must be a realistic, reasonable size relative to the model's face, aligned to the eyes and nose bridge with natural temple placement, not oversized and not covering too much of the face.
      Ignore all other technical specs while selected model mode is active.
      NEGATIVE: changing face, changing hairstyle, changing clothing, changing background, changing pose, changing expression, changing identity, oversized eyeglasses, eyeglasses too large, tiny eyeglasses, wrong scale, direct eye contact if not present, wrong eyeglasses, distorted eyeglasses, low quality, text, watermark, logo.
    ` : `
      Create a photorealistic portrait.
      1. Model MUST wear the eyeglasses from the first image.
      2. If clothing reference is provided, replicate the style, items, and accessories from that image: ${ae.clothing}.
      3. Interaction/Posture: ${ae.hand_props_posture}.
      4. Environment: ${ae.environment}.
      4b. Custom Specs: ${JSON.stringify(c || {})}
      4c. ${yb ? "Selected model reference priority: preserve the selected model's face identity, gender, approximate age, natural expression, hairline, hairstyle, and overall personal likeness. Use technical specs as generation direction, but do not override visible identity cues from the selected model unless needed for eyeglasses placement, framing, or output format." : ""}
      4d. ${Array.isArray(Sb) && Sb.length ? `Extra reference images are attached: ${Sb.map((Z, ge) => `${ge + 1}. ${Z.fileName || `reference_${ge + 1}`} (${Z.mode || "reference"})`).join(" | ")}` : ""}
      5. Full Technical Guidelines: ${JSON.stringify(ae)}
      NEGATIVE: looking directly to camera, western features, caucasian, european face, glasses mismatch.
    `, ne = yb ? { prompt: "", negativePrompt: "changing face, changing hairstyle, changing clothing, changing background, changing pose, changing expression, changing identity, oversized eyeglasses, eyeglasses too large, tiny eyeglasses, wrong scale, direct eye contact if not present, wrong eyeglasses, distorted eyeglasses, low quality, text, watermark, logo" } : await XN(ae, g), Te = Ly, Gs = (Z) => {
      const ge = String(Z || "").trim(), vt = ["1:1", "3:4", "4:3", "9:16", "16:9"];
      return vt.includes(ge) ? ge : "3:4";
    }, Qs = (Z) => {
      const ge = String(Z || "").trim();
      if (!ge || ge.toLowerCase() === "default") return;
      const vt = { "512px": "0.5K", "0.5k": "0.5K", "0.5K": "0.5K", "1024px": "1K", "1k": "1K", "1K": "1K", "2048px": "2K", "2k": "2K", "2K": "2K", "4096px": "4K", "4k": "4K", "4K": "4K" };
      return vt[ge] || vt[ge.toLowerCase()];
    }, re = yb ? { aspectRatio: "1:1", imageSize: "2K" } : { aspectRatio: Gs(s.aspectRatio) }, Js = Number(d), Zs = Qs(s.imageSize);
    Number.isFinite(Js) && (re.seed = Js), !yb && Te === Ly && Zs && (re.imageSize = Zs);
    const ve = async (Z) => {
      const ge = Z ? D : D.slice(1);
      return await E.models.generateContent({ model: Te, contents: { parts: [...ge, { text: `${ne.prompt}

NEGATIVE: ${ne.negativePrompt}

${Y}` }] }, config: { httpOptions: { timeout: 3e5 }, responseModalities: ["IMAGE"], imageConfig: re } });
    };
    let pe;
    try {
      pe = await ve(true);
    } catch (Z) {
      const ge = String((Z == null ? void 0 : Z.message) || "").toLowerCase();
      if (!yb && (((Z == null ? void 0 : Z.status) || (Z == null ? void 0 : Z.code) || ((y = Z == null ? void 0 : Z.response) == null ? void 0 : y.status)) === 400 || ge.includes("400") || ge.includes("bad request"))) pe = await ve(false);
      else throw Z;
    }
    if ((_ = (v = (m = pe.candidates) == null ? void 0 : m[0]) == null ? void 0 : v.content) != null && _.parts) {
      for (const Z of pe.candidates[0].content.parts) if (Z.inlineData) {
        const ge = Z.inlineData.mimeType || "image/png";
        return { imageUrl: `data:${ge};base64,${Z.inlineData.data}`, promptJson: JSON.stringify({ ...ae, prompt: ne.prompt, negative_prompt: ne.negativePrompt }, null, 2), mimeType: ge };
      }
    }
    throw new Error("No image generated.");
  } catch (E) {
    throw new Error(E.message || "API Error");
  }
}, ky = async (n, t, o, editSize = "2K") => {
  var y, m, v;
  const a = new ks({ apiKey: Ps(o) }), s = n.replace(/^data:image\/\w+;base64,/, ""), d = (v = (m = (y = (await a.models.generateContent({ model: "gemini-2.5-flash-image", contents: { parts: [{ inlineData: { mimeType: "image/png", data: s } }, { text: `Edit: ${t}. Keep eyeglasses and outfit consistent. Keep the original aspect ratio. Negative: looking directly to camera.` }] }, config: { imageSize: editSize } })).candidates) == null ? void 0 : y[0]) == null ? void 0 : m.content) == null ? void 0 : v.parts.find((_) => _.inlineData);
  return d != null && d.inlineData ? `data:${d.inlineData.mimeType || "image/png"};base64,${d.inlineData.data}` : n;
}, zv = "od_session_logs_v1", Xf = "od_api_key_temp_v1", Is = "od_current_session_id_v1", Py = "od_default_attributes_v1", Mbk = "od_model_database_v1", Rbk = "od_marketing_refs_v1", Ds = "krisdoan.fr@gmail.com", jl = { gender: "Female", age: "Young Adult (20s)", ethnicity: "Japanese", hairStyle: "Female – Middle-Part Straight Hair, balanced and symmetrical for product focus", hairColor: "Black", clothing: "1 Fashion lay upload (default)", environment: "Reference upload (default)", lighting: "Softbox", artStyle: "Realistic Photo", colorGrading: "Web Use", aspectRatio: "3:4", skinTexture: "Realistic (Default)", facialExpression: "Gazing left with slightly smile", pose: "Standing", shotType: "5. Bust-Up (Chest-Up), shows face, shoulders, and upper chest for lifestyle balance", handProps: "Arms Relaxed at Sides", imageSize: "Default" }, ZN = (n) => new Promise((t) => setTimeout(t, n)), Gy = () => {
  const n = sessionStorage.getItem(zv);
  if (!n) return [];
  try {
    return JSON.parse(n).map((o) => ({ ...o, totalCost: typeof o.totalCost == "number" ? o.totalCost : 0, generatedCount: typeof o.generatedCount == "number" ? o.generatedCount : 0, editedCount: typeof o.editedCount == "number" ? o.editedCount : 0, events: Array.isArray(o.events) ? o.events : [] }));
  } catch {
    return [];
  }
}, ea = (n) => {
  sessionStorage.setItem(zv, JSON.stringify(n));
}, WN = (n) => {
  const t = (/* @__PURE__ */ new Date()).toISOString();
  return { id: `session-${n.email}-${Date.now()}`, userEmail: n.email, userName: n.name, role: n.role, loginAt: t, generatedCount: 0, editedCount: 0, totalCost: 0, events: [{ at: t, type: "login" }] };
};
function jN() {
  const [n, t] = J.useState(() => {
    try {
      return localStorage.getItem("od_theme_v1") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  }), [o, a] = J.useState([]), [s, c] = J.useState(null), [d, g] = J.useState(null), [y, m] = J.useState([]), [v, _] = J.useState(false), [E, b] = J.useState("generation"), [generationSubTab, setGenerationSubTab] = J.useState("portrait"), [D, H] = J.useState(""), [P, V] = J.useState(""), [ie, X] = J.useState(null), [j, ae] = J.useState(""), [Y, ne] = J.useState(""), [Te, re] = J.useState(""), [ve, pe] = J.useState(null), [Z, ge] = J.useState(""), [Ee, Fe] = J.useState(""), [B, te] = J.useState(true), [ce, Ue] = J.useState("all"), [Ve, I] = J.useState(""), [K, oe] = J.useState("temporary"), [Q, _e] = J.useState(null), [Ne, Me] = J.useState(false), [je, rt] = J.useState({ hasGeminiApiKey: false, scope: null, ownerEmail: null, savedAt: null }), [Di, Qo] = J.useState("user"), [Pt, ua] = J.useState([]), [cn, Zo] = J.useState(null), [Ui, Gs] = J.useState(null), [_o, Wo] = J.useState([]), [jo, el] = J.useState(null), [Os, Hs] = J.useState(null), [Ge, tl] = J.useState(jl), [ca, Bs] = J.useState(false), [Co, Yn] = J.useState(null), [Nt, Li] = J.useState(null), [fn, Ao] = J.useState("gender"), [Gt, Ln] = J.useState(""), [Ot, En] = J.useState(null), [nl, il] = J.useState(false), [kn, Kn] = J.useState([]), [xo, tn] = J.useState({}), [bo, ki] = J.useState(""), [qs, fa] = J.useState(""), [ol, Pi] = J.useState(""), [Vs, nn] = J.useState(null), [No, wo] = J.useState(false), ll = J.useRef(null), [ni, da] = J.useState({ day: 0, week: 0, month: 0 }), [al, Pn] = J.useState({ day: 0, week: 0, month: 0 }), [mt, wt] = J.useState(false), [ii, Gi] = J.useState(null), [pa, zs] = J.useState(false), [Oi, Hi] = J.useState("month"), [budgetHistoryMonth, setBudgetHistoryMonth] = J.useState(() => {
    const S = /* @__PURE__ */ new Date();
    return `${S.getFullYear()}-${String(S.getMonth() + 1).padStart(2, "0")}`;
  }), [budgetHistoryCost, setBudgetHistoryCost] = J.useState(0), [budgetHistoryLoading, setBudgetHistoryLoading] = J.useState(false), [userRoleFilter, setUserRoleFilter] = J.useState(""), [modelDb, setModelDb] = J.useState(() => { try { const S = localStorage.getItem(Mbk); return S ? JSON.parse(S) : []; } catch { return []; } }), [selectedModelId, setSelectedModelId] = J.useState(""), [glassesResizePreset, setGlassesResizePreset] = J.useState("350x232"), [modelDraftName, setModelDraftName] = J.useState(""), [modelDraftGender, setModelDraftGender] = J.useState("Female"), [modelDraftAge, setModelDraftAge] = J.useState("Young Adult (20s)"), [modelDraftPreview, setModelDraftPreview] = J.useState(""), [modelDraftStatus, setModelDraftStatus] = J.useState(null), [marketingRefs, setMarketingRefs] = J.useState(() => { try { const S = localStorage.getItem(Rbk); return S ? JSON.parse(S) : []; } catch { return []; } }), [marketingCustomPrompt, setMarketingCustomPrompt] = J.useState(""), [marketingProductOnly, setMarketingProductOnly] = J.useState(false), [marketingSpecKeys, setMarketingSpecKeys] = J.useState(mu), [ma, oi] = J.useState(false), [li, Bi] = J.useState(""), [ai, ut] = J.useState(""), [sl, rl] = J.useState(""), [$n, dn] = J.useState(null), [ul, cl] = J.useState(0), [Fs, ha] = J.useState(""), [Rt, Mt] = J.useState({ isLoading: false, results: [], error: null }), [Vt, It] = J.useState(0), [Ro, zt] = J.useState(""), [Dt, Mo] = J.useState([]), [Oe, ga] = J.useState(null), [Ft, fl] = J.useState(""), [editOutputSize, setEditOutputSize] = J.useState("2K"), [editUploadName, setEditUploadName] = J.useState(""), [dl, pl] = J.useState(false), [si, Io] = J.useState(null), [ot, qi] = J.useState([]), [ya, Js] = J.useState(""), [ml, va] = J.useState(""), [Sa, Ys] = J.useState(false), [Do, _n] = J.useState(null), [et, Xn] = J.useState(null), [Ye, Cn] = J.useState(-1), [Ta, Qn] = J.useState(""), [hl, Vi] = J.useState(false), [An, pn] = J.useState(null), [Uo, Gn] = J.useState(false), [gl, On] = J.useState(null), [Hu, Ea] = J.useState("archive"), [_a, Bu] = J.useState(""), [Jt, zi] = J.useState(null), [Fi, yl] = J.useState(""), [Ks, $s] = J.useState(4), [vl, Sl] = J.useState(30), [Lo, qu] = J.useState("none"), [Xs, xd] = J.useState(0.75), [Qs, Zs] = J.useState(0.6), [Ws, bd] = J.useState(0.9), [Nd, wd] = J.useState(false), [Rd, Vu] = J.useState(null), [js, zu] = J.useState("1644"), [er, Fu] = J.useState("1436"), [Ji, Tl] = J.useState(false), [Ca, tr] = J.useState(false), ri = J.useRef(false), Ju = "https://drive.google.com/drive/folders/1sT_7togz9owcdTErY3kAH-qeL_sa785Y?usp=drive_link", Aa = { "512px": 0.045, "1K": 0.067, "2K": 0.101, "4K": 0.151, Default: 0.067 }, Yu = { "512px": "0.5K (512px)", "1K": "1K (1024px)", "2K": "2K (2048px)", "4K": "4K (4096px)", Default: "Default (1K)" }, nr = () => {
    const S = String(Ge.imageSize || "Default");
    return Aa[S] ?? Aa.Default ?? 0;
  }, ir = (S) => {
    let x = 0;
    for (let N = 0; N < S.length; N++) x += S.charCodeAt(N);
    return x;
  };
  J.useEffect(() => {
    document.documentElement.dataset.theme = n;
    try {
      localStorage.setItem("od_theme_v1", n);
    } catch {
    }
  }, [n]), J.useEffect(() => {
    try {
      localStorage.setItem(Mbk, JSON.stringify(modelDb));
    } catch {
    }
  }, [modelDb]), J.useEffect(() => {
    try {
      localStorage.setItem(Rbk, JSON.stringify(marketingRefs));
    } catch {
    }
  }, [marketingRefs]), J.useEffect(() => {
    if (!selectedModelId) return;
    const S = modelDb.find((x) => x.id === selectedModelId);
    S && tl((x) => ({ ...x, gender: S.gender || x.gender, age: S.age || x.age, imageSize: "2K" }));
  }, [selectedModelId, modelDb]), J.useEffect(() => {
    const S = Gy();
    m(S);
    const x = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    ge(x);
    try {
      sessionStorage.removeItem(Xf);
    } catch {
    }
    fetch("/api/health").then((N) => N.ok ? N.json() : null).then((N) => _(!!(N != null && N.ok))).catch(() => _(false)), (async () => {
      try {
        const N = await fetch("/api/auth").then((de) => de.ok ? de.json() : null), R = N == null ? void 0 : N.user;
        if (!(R != null && R.email)) return;
        const O = { id: String(R.email), email: String(R.email), name: String(R.name || R.email), role: R.role };
        c(O);
        const W = sessionStorage.getItem(Is);
        if (W) g(W);
        else {
          const de = await fetch("/api/sessions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "start" }) }).then((ee) => ee.ok ? ee.json() : Promise.reject(new Error(`sessions/start ${ee.status}`))), Se = String((de == null ? void 0 : de.id) || "");
          Se && (g(Se), sessionStorage.setItem(Is, Se));
        }
        const se = await Ht();
        Qi(se, true), await $i(), O.role === "admin" && (Yi().catch(() => {
        }), Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "users.list" }) }).then((de) => Array.isArray(de == null ? void 0 : de.users) ? a(de.users) : null).catch(() => {
        }));
      } catch {
      }
    })();
  }, []);
  const xa = (S) => new Date(S).toLocaleDateString("en-CA"), or = (S) => new Date(S.getFullYear(), S.getMonth(), S.getDate(), 0, 0, 0, 0), Ku = (S) => new Date(S.getFullYear(), S.getMonth(), S.getDate(), 23, 59, 59, 999), lr = (S) => {
    const x = or(S), R = (x.getDay() + 6) % 7;
    return x.setDate(x.getDate() - R), x;
  }, El = (S) => new Date(S.getFullYear(), S.getMonth(), 1, 0, 0, 0, 0), formatMonthKey = (S) => `${S.getFullYear()}-${String(S.getMonth() + 1).padStart(2, "0")}`, getMonthRange = (S) => {
    const [x, N] = String(S || "").split("-").map(Number);
    if (!x || !N) {
      const R = /* @__PURE__ */ new Date();
      return { start: El(R), end: Ku(new Date(R.getFullYear(), R.getMonth() + 1, 0)) };
    }
    const R = new Date(x, N - 1, 1, 0, 0, 0, 0);
    return { start: R, end: Ku(new Date(x, N, 0)) };
  }, buildBudgetMonthOptions = () => {
    const S = [];
    const x = /* @__PURE__ */ new Date();
    for (let N = 0; N < 12; N++) {
      S.push(formatMonthKey(new Date(x.getFullYear(), x.getMonth() - N, 1, 0, 0, 0, 0)));
    }
    return S;
  }, xn = (S) => S.reduce((x, N) => x + (Number(N.totalCost || 0) || 0), 0), ba = async (S, x) => {
    const N = new URLSearchParams();
    N.set("from", S), N.set("to", x), N.set("limit", "1000");
    const R = await Pe(`/api/sessions?${N.toString()}`);
    return Array.isArray(R == null ? void 0 : R.sessions) ? R.sessions : [];
  }, Yi = async () => {
    if (!s || s.role !== "admin") return;
    const S = /* @__PURE__ */ new Date(), x = or(S).toISOString(), N = Ku(S).toISOString(), R = lr(S).toISOString(), O = N, W = El(S).toISOString(), se = N;
    try {
      if (v) {
        const [de, Se, ee] = await Promise.all([ba(x, N), ba(R, O), ba(W, se)]);
        Pn({ day: xn(de), week: xn(Se), month: xn(ee) }), wt(true);
      } else {
        const de = S.toLocaleDateString("en-CA"), Se = lr(S), ee = El(S), he = Gy(), Ce = he.filter((Tt) => xa(Tt.loginAt) === de), tt = he.filter((Tt) => new Date(Tt.loginAt) >= Se), Ct = he.filter((Tt) => new Date(Tt.loginAt) >= ee);
        Pn({ day: xn(Ce), week: xn(tt), month: xn(Ct) }), wt(true);
      }
    } catch {
    }
  };
  J.useEffect(() => {
    if (!s || s.role !== "admin") return;
    let S = false;
    setBudgetHistoryLoading(true);
    (async () => {
      try {
        if (v) {
          const x = getMonthRange(budgetHistoryMonth), N = await ba(x.start.toISOString(), x.end.toISOString());
          S || setBudgetHistoryCost(xn(N));
        } else {
          const x = getMonthRange(budgetHistoryMonth), N = Gy().filter((R) => {
            const O = new Date(R.loginAt);
            return O >= x.start && O <= x.end;
          });
          S || setBudgetHistoryCost(xn(N));
        }
      } catch {
        S || setBudgetHistoryCost(0);
      } finally {
        S || setBudgetHistoryLoading(false);
      }
    })();
    return () => {
      S = true;
    };
  }, [s == null ? void 0 : s.role, s == null ? void 0 : s.email, v, budgetHistoryMonth, y]);
  J.useEffect(() => {
    s && (ca || Ht().then((S) => {
      Qi(S, true);
    }).catch(() => {
    }).finally(() => Bs(true)));
  }, [s, ca]), J.useEffect(() => {
    if (!s || s.role === "admin" && E === "users") return;
    const S = window.setInterval(() => {
      Ht().then((x) => Qi(x)).catch(() => {
      });
    }, 2e4);
    return () => window.clearInterval(S);
  }, [s == null ? void 0 : s.email, s == null ? void 0 : s.role, E]), J.useEffect(() => {
    const S = (x) => {
      if (v && d) try {
        const N = JSON.stringify({ action: "end", id: d }), R = new Blob([N], { type: "application/json" });
        navigator.sendBeacon ? navigator.sendBeacon("/api/sessions", R) : Ua("/api/sessions", { action: "end", id: d }).catch(() => {
        });
      } catch {
      }
      return x.preventDefault(), x.returnValue = "Before leaving: (1) confirm you saved all generated assets, (2) confirm you uploaded to Google Drive.", x.returnValue;
    };
    return window.addEventListener("beforeunload", S), () => {
      window.removeEventListener("beforeunload", S);
    };
  }, [v, d]);
  const St = J.useMemo(() => d && y.find((S) => S.id === d) || null, [d, y]), Na = J.useMemo(() => {
    const S = Number(al[Oi] || 0), x = Number(ni[Oi] || 0), N = x > 0 && S > x, R = mt ? `$${x.toFixed(3)}/$${S.toFixed(3)}` : "Loading…";
    return { used: S, lim: x, exceeded: N, label: R };
  }, [al, ni, Oi, mt]), _l = J.useMemo(() => {
    let S = y;
    if (!B && Z && (S = S.filter((x) => xa(x.loginAt) === Z)), (s == null ? void 0 : s.role) !== "admin" && (s != null && s.email)) {
      const x = s.email.toLowerCase();
      S = S.filter((N) => N.userEmail.toLowerCase() === x);
    } else if (ce === "me" && (s != null && s.email)) {
      const x = s.email.toLowerCase();
      S = S.filter((N) => N.userEmail.toLowerCase() === x);
    }
    if ((s == null ? void 0 : s.role) === "admin" && Ee.trim()) {
      const x = Ee.trim().toLowerCase();
      S = S.filter((N) => N.userEmail.toLowerCase().includes(x) || N.userName.toLowerCase().includes(x));
    }
    return S;
  }, [y, Z, Ee, B, ce, s == null ? void 0 : s.email, s == null ? void 0 : s.role]), wa = J.useMemo(() => {
    const S = {};
    for (const x of _l) {
      const N = xa(x.loginAt);
      S[N] || (S[N] = []), S[N].push(x);
    }
    return Object.entries(S).sort(([x], [N]) => x < N ? 1 : -1);
  }, [_l]), ui = (S) => {
    if (B) return;
    const x = Z ? /* @__PURE__ */ new Date(`${Z}T00:00:00`) : /* @__PURE__ */ new Date();
    if (Number.isNaN(x.getTime())) return;
    x.setDate(x.getDate() + S);
    const N = x.toLocaleDateString("en-CA");
    ge(N);
  }, Ra = (S) => {
    m((x) => {
      const N = x.map((R) => R.id !== d ? R : S(R));
      return ea(N), N;
    });
  }, Ma = (S) => {
    const x = (/* @__PURE__ */ new Date()).toISOString();
    m((N) => {
      const R = N.map((O) => O.id !== S.sessionId ? O : { ...O, generatedCount: O.generatedCount + (S.generatedCountDelta || 0), editedCount: (O.editedCount || 0) + (S.editedCountDelta || 0), totalCost: (O.totalCost || 0) + (S.costDelta || 0), events: [...O.events || [], { at: x, type: S.type, details: S.details }] });
      return ea(R), R;
    });
  }, Pe = async (S, x) => {
    const N = await fetch(S, { headers: { "Content-Type": "application/json" }, ...x });
    if (!N.ok) {
      const R = await N.text();
      throw new Error(R || `Request failed: ${N.status}`);
    }
    return await N.json();
  }, ar = () => {
    const S = localStorage.getItem(Py);
    if (!S) return null;
    try {
      const x = JSON.parse(S);
      return x && typeof x == "object" ? x : null;
    } catch {
      return null;
    }
  }, sr = (S) => {
    try {
      localStorage.setItem(Py, JSON.stringify(S));
    } catch {
    }
  }, Ht = async () => {
    try {
      const S = await Pe("/api/config/defaults");
      if (S != null && S.specOptions && typeof S.specOptions == "object" ? Li(S.specOptions) : Li(null), Array.isArray(S == null ? void 0 : S.customSpecFields)) {
        const x = S.customSpecFields.map((N) => ({ key: String((N == null ? void 0 : N.key) || "").trim(), label: String((N == null ? void 0 : N.label) || "").trim(), options: Array.isArray(N == null ? void 0 : N.options) ? N.options.map((R) => String(R)).filter(Boolean) : [], default: N != null && N.default ? String(N.default) : void 0 })).filter((N) => N.key && N.label && N.options.length > 0);
        Kn(x), tn((N) => {
          const R = { ...N };
          for (const O of x) if (!R[O.key] || !O.options.includes(R[O.key])) {
            const W = O.default && O.options.includes(O.default) ? O.default : O.options[0];
            R[O.key] = W;
          }
          for (const O of Object.keys(R)) x.some((W) => W.key === O) || delete R[O];
          return R;
        });
      } else Kn([]), tn({});
      if (S != null && S.budgetLimits && typeof S.budgetLimits == "object") {
        const x = S.budgetLimits;
        da({ day: Number(x.day || 0), week: Number(x.week || 0), month: Number(x.month || 0) });
      }
      if (Array.isArray(S == null ? void 0 : S.modelDatabase)) {
        const x = S.modelDatabase.map((N) => ({ id: String((N == null ? void 0 : N.id) || "").trim(), name: String((N == null ? void 0 : N.name) || "").trim(), gender: String((N == null ? void 0 : N.gender) || "").trim(), age: String((N == null ? void 0 : N.age) || "").trim(), preview: String((N == null ? void 0 : N.preview) || "").trim(), pathname: (N == null ? void 0 : N.pathname) || null, savedAt: (N == null ? void 0 : N.savedAt) || null, savedBy: (N == null ? void 0 : N.savedBy) || null })).filter((N) => N.id && N.name && N.preview);
        setModelDb(x);
      }
      if (typeof (S == null ? void 0 : S.budgetStatusKey) == "string") {
        const x = String(S.budgetStatusKey);
        (x === "day" || x === "week" || x === "month") && Hi(x);
      }
      return rt({ hasGeminiApiKey: !!(S != null && S.hasGeminiApiKey), scope: S != null && S.geminiApiKeyScope ? String(S.geminiApiKeyScope) : null, ownerEmail: S != null && S.geminiApiKeyOwnerEmail ? String(S.geminiApiKeyOwnerEmail) : null, savedAt: S != null && S.geminiApiKeySavedAt ? String(S.geminiApiKeySavedAt) : null }), S != null && S.defaults && typeof S.defaults == "object" ? S.defaults : null;
    } catch {
      return ar();
    }
  }, Ki = async (S) => {
    const x = { ...jl, ...S };
    await Pe("/api/config/defaults", { method: "POST", body: JSON.stringify({ defaults: x }) });
    const N = await Pe("/api/config/defaults");
    if (!(N != null && N.defaults) || typeof N.defaults != "object") throw new Error("Default settings were not saved on the server.");
    const R = { ...jl, ...N.defaults }, O = Object.keys(x).find((W) => R[W] !== x[W]);
    if (O) {
      const W = Xh[O] || String(O);
      throw new Error(`Default setting "${W}" did not match after server read-back.`);
    }
    return sr(R), R;
  }, Ia = async (S) => {
    await Pe("/api/config/defaults", { method: "POST", body: JSON.stringify({ specOptions: S }) });
  }, Cl = async () => {
    await Pe("/api/config/defaults", { method: "POST", body: JSON.stringify({ resetSpecOptions: true }) });
  }, rr = async (S) => {
    await Pe("/api/config/defaults", { method: "POST", body: JSON.stringify({ customSpecFields: S }) });
  }, ur = async () => {
    await Pe("/api/config/defaults", { method: "POST", body: JSON.stringify({ resetCustomSpecFields: true }) });
  }, Da = async (S) => {
    await Pe("/api/config/defaults", { method: "POST", body: JSON.stringify({ budgetLimits: S, budgetStatusKey: Oi }) });
  }, Ua = async (S, x) => await fetch(S, { method: "POST", keepalive: true, headers: { "Content-Type": "application/json" }, body: JSON.stringify(x ?? {}) }), $i = async () => {
    if (!v) return;
    const S = new URLSearchParams();
    !B && Z && S.set("date", Z), (s == null ? void 0 : s.role) === "admin" && Ee.trim() && S.set("userQuery", Ee.trim());
    const x = await Pe(`/api/sessions?${S.toString()}`);
    Array.isArray(x == null ? void 0 : x.sessions) && m(x.sessions);
  }, Xi = J.useMemo(() => {
    const S = { ...Tu };
    if (Nt) for (const x of Object.keys(Nt)) {
      const N = Nt[x];
      N != null && N.options && Array.isArray(N.options) && N.options.length > 0 && (S[x] = N.options);
    }
    return S;
  }, [Nt]), La = J.useMemo(() => {
    const S = {};
    if (Nt) for (const x of Object.keys(Nt)) {
      const N = Nt[x], R = N == null ? void 0 : N.options;
      if (!R || !Array.isArray(R) || R.length === 0) continue;
      const O = N == null ? void 0 : N.default;
      S[x] = O && R.includes(O) ? O : R[0];
    }
    return S;
  }, [Nt]), $u = (S) => {
    const x = { ...S };
    for (const N of mu) {
      const R = Xi[N];
      if (!R || R.length === 0) continue;
      const O = String(x[N] ?? "");
      if (R.includes(O)) continue;
      const W = La[N];
      x[N] = W && R.includes(W) ? W : R[0];
    }
    return x;
  }, Qi = (S, x = false) => {
    if (!S) return;
    const N = { ...jl, ...S }, R = JSON.stringify(N);
    (x || ll.current !== R) && (tl(N), ll.current = R);
  }, marketingPromptPreview = J.useMemo(() => {
    const S = [];
    for (const x of (marketingProductOnly ? marketingSpecKeys.filter((R) => !["ethnicity", "gender", "age", "hairStyle", "skinTexture", "pose", "shotType", "facialExpression"].includes(R)) : marketingSpecKeys)) {
      const N = Ge[x];
      if (!N) continue;
      S.push(`${Xh[x] || x}: ${N}`);
    }
    for (const x of kn) {
      const N = String(x.key || "").trim();
      if (!N) continue;
      const R = xo[N];
      if (!R) continue;
      S.push(`${x.label}: ${R}`);
    }
    return S.join(" | ");
  }, [Ge, xo, kn, marketingSpecKeys, marketingProductOnly]), Xu = (S, x) => {
    const N = { ...S };
    for (const R of mu) {
      if (S[R] !== "Randomize") continue;
      const O = (Xi[R] || []).filter((se) => se !== "Randomize");
      if (O.length === 0) continue;
      const W = O[(x + ir(String(R))) % O.length];
      N[R] = W;
    }
    return N;
  }, Qu = (S, x) => {
    const N = {};
    for (const R of kn) {
      const O = String(R.key || "").trim();
      if (!O) continue;
      const W = String(S[O] || ""), se = (R.options || []).map((Se) => String(Se)).filter(Boolean), de = se.length > 0 ? se : [];
      if (W === "Randomize") {
        const Se = de.filter((he) => he !== "Randomize");
        if (Se.length === 0) continue;
        const ee = Se[(x + ir(O)) % Se.length];
        N[O] = ee;
      } else if (de.includes(W)) N[O] = W;
      else {
        const Se = R.default && de.includes(R.default) ? R.default : de[0];
        Se && (N[O] = Se);
      }
    }
    return N;
  };
  J.useEffect(() => {
  }, []), J.useEffect(() => {
    (s == null ? void 0 : s.role) === "admin" && E === "users" || tl((S) => $u(S));
  }, [Nt, s == null ? void 0 : s.role, E]), J.useEffect(() => {
    v && s && E === "users" && $i().catch(() => {
    });
  }, [v, s == null ? void 0 : s.role, s == null ? void 0 : s.email, E, B, Z, Ee]), J.useEffect(() => {
    !s || s.role !== "admin" || E === "users" && _t().catch(() => {
    });
  }, [s == null ? void 0 : s.email, s == null ? void 0 : s.role, E]), J.useEffect(() => {
    if (!v || !s || s.role !== "admin" || E !== "users") return;
    const S = window.setInterval(() => {
      $i().catch(() => {
      });
    }, 1e4);
    return () => window.clearInterval(S);
  }, [v, s == null ? void 0 : s.email, s == null ? void 0 : s.role, E]), J.useEffect(() => {
    !s || s.role !== "admin" || Yi().catch(() => {
    });
  }, [s == null ? void 0 : s.email, s == null ? void 0 : s.role, v]), J.useEffect(() => {
    s && s.role !== "admin" && (Ue("me"), Fe(""));
  }, [s == null ? void 0 : s.email, s == null ? void 0 : s.role]);
  const ko = async () => {
    if (s) {
      Ys(true), _n(null);
      try {
        const S = new URLSearchParams();
        ml && S.set("userEmail", ml), ya.trim() && S.set("q", ya.trim()), S.set("limit", "200");
        const x = await Pe(`/api/assets?${S.toString()}`);
        if (Array.isArray(x == null ? void 0 : x.assets)) {
          const N = [...x.assets].sort((R, O) => String((O == null ? void 0 : O.createdAt) || "").localeCompare(String((R == null ? void 0 : R.createdAt) || "")));
          qi(N);
        }
      } catch (S) {
        const x = String((S == null ? void 0 : S.message) || "");
        const N = x.toLowerCase();
        N.includes("resource_exhausted") || N.includes("quota exceeded") || N.includes("quota") ? _n("Shared gallery is temporarily unavailable because the cloud quota is exhausted.") : _n(x || "Failed to load shared gallery.");
        qi([]);
      } finally {
        Ys(false);
      }
    }
  };
  J.useEffect(() => {
    s && E === "generation" && ko().catch(() => {
    });
  }, [s == null ? void 0 : s.email, E]);
  const Yt = J.useMemo(() => {
    const S = /* @__PURE__ */ new Map();
    for (const x of ot) x.userEmail && S.set(String(x.userEmail), String(x.userName || x.userEmail));
    for (const x of o) S.set(x.email, x.name || x.email);
    return Array.from(S.entries()).map(([x, N]) => ({ email: x, name: N })).sort((x, N) => x.name.localeCompare(N.name));
  }, [ot, o]), bn = (S) => S.replace(/\.[a-zA-Z0-9]+$/, "").replace(/\s+/g, "-").replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-").replace(/(^-)|(-$)/g, "").slice(0, 80), ka = () => (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA"), Nn = (S) => S === "image/png" ? "png" : S === "image/jpeg" ? "jpg" : S === "video/mp4" ? "mp4" : "bin", Zi = (S) => {
    const x = String(S || "").match(/^data:([^;]+);base64,/);
    return x ? x[1] : null;
  }, Pa = (S, x, N) => {
    const R = String(N).padStart(2, "0");
    if (!S) return `${x}_edit${R}.png`;
    const O = S.match(/^(.*?)(\.[a-zA-Z0-9]+)?$/), W = (O == null ? void 0 : O[1]) || x, se = (O == null ? void 0 : O[2]) || "";
    return `${W}_edit${R}${se || ".png"}`;
  }, Al = (S) => {
    const x = ka(), N = bn(S.referenceFileName), R = bn(S.identity), O = bn(S.age), W = bn(S.gender), se = String(S.number).padStart(2, "0");
    return `${x}_${N}_${R}_${O}_${W}_${se}`;
  }, Ga = async (S, x) => {
    const N = document.createElement("a");
    N.href = S, N.download = x, N.rel = "noopener noreferrer", document.body.appendChild(N), N.click(), document.body.removeChild(N);
  }, ci = async (S) => await (await fetch(S)).blob(), Oa = async (S) => {
    var se;
    if (!s || !S.mimeType || S.url.startsWith("http")) return;
    const x = await ci(S.url), N = S.fileName || `asset_${Date.now()}.${Nn(S.mimeType)}`, R = String(((se = S.meta) == null ? void 0 : se.reference_file) || ""), O = S.kind, W = await Jf(N, x, { access: "public", contentType: S.mimeType, handleUploadUrl: "/api/assets", clientPayload: JSON.stringify({ kind: O, mimeType: S.mimeType, userEmail: s.email, userName: s.name, referenceFileName: R, fileName: N }) });
    await Pe("/api/assets", { method: "POST", body: JSON.stringify({ action: "register", kind: O, mimeType: S.mimeType, url: W.url, pathname: W.pathname, userEmail: s.email, userName: s.name, referenceFileName: R, fileName: N }) });
  }, fi = async (S, x) => (await Jf(S.name, S, { access: "public", contentType: S.type || "application/octet-stream", handleUploadUrl: "/api/assets", clientPayload: JSON.stringify({ kind: "image", mimeType: S.type || "application/octet-stream", userEmail: (s == null ? void 0 : s.email) || "unknown", userName: (s == null ? void 0 : s.name) || "unknown", referenceFileName: `${x}_input`, fileName: S.name }) })).url, Ha = async (S, x) => {
    const N = await ci(S), R = Zi(S) || N.type || "application/octet-stream";
    return (await Jf(x, N, { access: "public", contentType: R, handleUploadUrl: "/api/assets", clientPayload: JSON.stringify({ kind: "image", mimeType: R, userEmail: (s == null ? void 0 : s.email) || "unknown", userName: (s == null ? void 0 : s.name) || "unknown", referenceFileName: "edit_source", fileName: x }) })).url;
  }, uploadModelImageToBlob = async (S, x) => {
    const N = await ci(S), R = N.type || "image/jpeg", O = await Jf(x, N, { access: "public", contentType: R, handleUploadUrl: "/api/assets", clientPayload: JSON.stringify({ kind: "image", mimeType: R, userEmail: (s == null ? void 0 : s.email) || "unknown", userName: (s == null ? void 0 : s.name) || "unknown", referenceFileName: "selected_model_database", fileName: x }) });
    return { url: O.url, pathname: O.pathname || null };
  }, saveModelDatabaseToServer = async (S) => {
    await Pe("/api/config/defaults", { method: "POST", body: JSON.stringify({ modelDatabase: S }) });
  }, xl = async (S) => {
    if (s && S.length !== 0) {
      Gn(true), On(`Uploading ${S.length} asset(s) to shared gallery…`);
      try {
        let x = 0;
        for (const N of S) try {
          await Oa(N), x++;
        } catch {
        }
        await ko(), x === S.length ? (On(`Uploaded ${x} asset(s) to shared gallery.`), setTimeout(() => On(null), 2500)) : x === 0 ? On("Shared upload failed. Please click Refresh and try generating again.") : (On(`Uploaded ${x}/${S.length} asset(s) to shared gallery.`), setTimeout(() => On(null), 4e3));
      } finally {
        Gn(false);
      }
    }
  }, Zn = (S) => new Promise((x, N) => {
    const R = new FileReader();
    R.onloadend = () => x(R.result), R.onerror = N, R.readAsDataURL(S);
  }), getGlassesResizeDimensions = (S) => {
    const x = String(S || "350x232").match(/(\d+)\s*x\s*(\d+)/i);
    return x ? { width: Number(x[1]), height: Number(x[2]) } : { width: 350, height: 232 };
  }, resizeGlassesFileForGeneration = async (S, x = 350, N = 232) => {
    try {
      const R = await Zn(S), O = new Image();
      O.decoding = "async";
      const W = new Promise((ee, he) => {
        O.onload = () => ee(), O.onerror = he;
      });
      O.src = R, await W;
      const se = document.createElement("canvas");
      se.width = x, se.height = N;
      const de = se.getContext("2d");
      if (!de) return S;
      de.clearRect(0, 0, x, N);
      const Se = Math.min(x / (O.naturalWidth || O.width), N / (O.naturalHeight || O.height)), he = Math.max(1, Math.round((O.naturalWidth || O.width) * Se)), xt = Math.max(1, Math.round((O.naturalHeight || O.height) * Se)), Ge = Math.round((x - he) / 2), tl = Math.round((N - xt) / 2);
      de.drawImage(O, Ge, tl, he, xt);
      const Ce = await new Promise((tt, Ct) => {
        se.toBlob((Tt) => Tt ? tt(Tt) : Ct(new Error("Failed to resize eyeglasses image.")), "image/png");
      }), nt = String(S.name || "glasses").replace(/\.[a-zA-Z0-9]+$/, "");
      return new File([Ce], `${nt}.png`, { type: "image/png", lastModified: Date.now() });
    } catch {
      return S;
    }
  }, compressModelImageForRequest = async (S, x = 2000, N = 0.86) => {
    const R = typeof S === "string" ? S : await Zn(S);
    if (!String(R).startsWith("data:image/")) return R;
    try {
      const O = new Image();
      O.decoding = "async";
      const W = new Promise((de, Se) => {
        O.onload = () => de(), O.onerror = Se;
      });
      O.src = R, await W;
      const se = Math.min(1, x / Math.max(O.naturalWidth || O.width, O.naturalHeight || O.height));
      if (se >= 1 && String(R).length < 650000) return R;
      const de = document.createElement("canvas");
      de.width = Math.max(1, Math.round((O.naturalWidth || O.width) * se)), de.height = Math.max(1, Math.round((O.naturalHeight || O.height) * se));
      const Se = de.getContext("2d");
      if (!Se) return R;
      Se.drawImage(O, 0, 0, de.width, de.height);
      const Ce = await new Promise((he, xt) => {
        de.toBlob((Ge) => Ge ? he(Ge) : xt(new Error("Failed to optimize selected model image.")), "image/jpeg", N);
      });
      return await Zn(Ce);
    } catch {
      return R;
    }
  }, Wi = async (S, x, N, R) => {
    const O = new Image();
    O.decoding = "async";
    const W = new Promise((ee, he) => {
      O.onload = () => ee(), O.onerror = he;
    });
    O.src = S, await W;
    const se = document.createElement("canvas");
    se.width = x, se.height = N;
    const de = se.getContext("2d");
    if (!de) throw new Error("Canvas not supported.");
    de.drawImage(O, 0, 0, x, N);
    const Se = await new Promise((ee, he) => {
      se.toBlob((Ce) => Ce ? ee(Ce) : he(new Error("Failed to encode image.")), R, R === "image/jpeg" ? 0.92 : void 0);
    });
    return await Zn(Se);
  }, Ba = async () => {
    if (Dt.length !== 0) {
      Tl(true);
      try {
        for (let S = 0; S < Dt.length; S++) {
          const x = Dt[S], N = `${ka()}_asset_${String(S + 1).padStart(2, "0")}.${Nn(x.mimeType)}`, R = x.fileName || N;
          await Wn(x.url, R), await new Promise((O) => setTimeout(O, 250));
        }
      } finally {
        Tl(false);
      }
    }
  }, cr = async () => {
    if (ot.length !== 0) {
      tr(true);
      try {
        for (let S = 0; S < ot.length; S++) {
          const x = ot[S], N = x.fileName || `${new Date(x.createdAt).toLocaleDateString("en-CA")}_${bn(x.userEmail)}_${String(S + 1).padStart(2, "0")}.${Nn(x.mimeType)}`;
          await Wn(x.url, N), await new Promise((R) => setTimeout(R, 250));
        }
      } finally {
        tr(false);
      }
    }
  }, di = async () => {
    const S = Number(js), x = Number(er);
    if (!Number.isFinite(S) || !Number.isFinite(x) || S <= 0 || x <= 0) {
      alert("Enter valid resize width/height.");
      return;
    }
    const N = Dt.filter((R) => R.kind === "image");
    if (N.length !== 0) {
      try {
        const R = N.find((O) => O.url.startsWith("data:image/")) || null;
        if (R) {
          const O = new Image(), W = new Promise((ee, he) => {
            O.onload = () => ee(), O.onerror = he;
          });
          O.src = R.url, await W;
          const se = O.naturalWidth / O.naturalHeight, de = S / x;
          if (Math.abs(de / se - 1) > 0.02 && !confirm(`Resize ratio looks different.

Original: ${O.naturalWidth}x${O.naturalHeight} (ratio ${se.toFixed(3)})
Target: ${S}x${x} (ratio ${de.toFixed(3)})

Continue anyway?`)) return;
        }
      } catch {
      }
      Tl(true);
      try {
        for (let R = 0; R < N.length; R++) {
          const O = N[R], W = O.url;
          if (!W.startsWith("data:image/")) continue;
          const se = O.mimeType || "image/jpeg", de = await Wi(W, S, x, se), ee = `${(O.fileName || `resized_${R + 1}`).replace(/\.[a-zA-Z0-9]+$/, "")}_${S}x${x}.${Nn(se)}`;
          await Ga(de, ee), await new Promise((he) => setTimeout(he, 250));
        }
      } finally {
        Tl(false);
      }
    }
  }, fr = () => {
    X(null), (async () => {
      const x = D.trim().toLowerCase(), N = P;
      if (!x || !N) {
        X("Email and password are required.");
        return;
      }
      const R = await Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "login", email: x, password: N }) }), O = R == null ? void 0 : R.user;
      if (!(O != null && O.email)) throw new Error("Login failed.");
      const W = { id: String(O.email), email: String(O.email), name: String(O.name || O.email), role: String(O.role) };
      let se = null;
      if (v) {
        const ee = await Pe("/api/sessions", { method: "POST", body: JSON.stringify({ action: "start" }) });
        se = String((ee == null ? void 0 : ee.id) || "");
      }
      const de = (/* @__PURE__ */ new Date()).toISOString();
      if (se) {
        const ee = { id: se, userEmail: W.email, userName: W.name, role: W.role, loginAt: de, logoutAt: void 0, generatedCount: 0, editedCount: 0, totalCost: 0, events: [{ at: de, type: "login" }] };
        m((he) => {
          const Ce = [...he.filter((tt) => tt.id !== ee.id), ee];
          return ea(Ce), Ce;
        }), g(se), sessionStorage.setItem(Is, se);
      } else {
        const ee = WN(W), he = [...y, ee];
        ea(he), m(he), g(ee.id), sessionStorage.setItem(Is, ee.id);
      }
      c(W), await $i(), W.role === "admin" && (Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "users.list" }) }).then((ee) => Array.isArray(ee == null ? void 0 : ee.users) ? a(ee.users) : null).catch(() => {
      }), await Yi());
      const Se = await Ht();
      Qi(Se, true), H(""), V(""), b("generation");
    })().catch((x) => X((x == null ? void 0 : x.message) || "Login failed."));
  }, dr = () => {
    if (!(Dt.length > 0 && (!window.confirm("Confirm you saved all generated assets before logging out.") || !window.confirm("Confirm the assets were uploaded to Google Drive (or you will do it now).")))) {
      if (d) {
        const S = (/* @__PURE__ */ new Date()).toISOString();
        v ? (Pe("/api/sessions", { method: "POST", body: JSON.stringify({ action: "end", id: d }) }).catch(() => {
        }), m((x) => {
          const N = x.map((R) => R.id !== d ? R : { ...R, logoutAt: S, events: [...R.events || [], { at: S, type: "logout" }] });
          return ea(N), N;
        })) : m((x) => {
          const N = x.map((R) => R.id !== d ? R : { ...R, logoutAt: S, events: [...R.events, { at: S, type: "logout" }] });
          return ea(N), N;
        });
      }
      c(null), g(null);
      try {
        sessionStorage.removeItem(Is);
      } catch {
      }
      Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "logout" }) }).catch(() => {
      }), Mt({ isLoading: false, results: [], error: null }), Mo([]), It(0), Me(false);
    }
  }, bl = async (S, x) => {
    if (x.target.files) {
      const N = Array.from(x.target.files);
      if (N.length === 0) return;
      if (S === "glasses") {
        const R = getGlassesResizeDimensions(glassesResizePreset), O = await Promise.all(N.map((W) => resizeGlassesFileForGeneration(W, R.width, R.height))), se = O.map((W) => URL.createObjectURL(W));
        ua((W) => [...W, ...O]), Wo((W) => [...W, ...se]);
      } else {
        const R = N[0], O = URL.createObjectURL(R);
        switch (S) {
          case "fashion":
            Zo(R), el(O);
            break;
          case "env":
            Gs(R), Hs(O);
            break;
        }
      }
      Mt((R) => ({ ...R, results: [], error: null }));
    }
  }, handleEditUpload = async (S) => {
    const x = S.target.files && S.target.files[0];
    if (!x) return;
    const N = await Zn(x), R = x.type || Zi(N) || "image/png";
    setEditUploadName(x.name), fl(""), Io(null), ga({ imageUrl: String(N), mimeType: R, fileName: x.name, referenceFileName: x.name, seedUsed: "local", resultIndex: null, identity: Ge.ethnicity, age: Ge.age, gender: Ge.gender });
  }, Zu = () => {
    ua([]), Wo([]), Mt((S) => ({ ...S, results: [] }));
  }, Wu = () => {
    Zo(null), el(null);
  }, ju = () => {
    Gs(null), Hs(null);
  }, addMarketingRef = () => {
    setMarketingRefs((S) => [...S, { id: `mkref-${Date.now()}-${S.length}`, fileName: "", preview: "", mode: "reference", refName: "", refFunction: "" }]);
  }, updateMarketingRefFile = async (S, x) => {
    const N = x.target.files && x.target.files[0];
    if (!N) return;
    const R = await Zn(N);
    setMarketingRefs((O) => O.map((W) => W.id === S ? { ...W, fileName: N.name, preview: String(R) } : W));
  }, updateMarketingRefMode = (S, x) => {
    setMarketingRefs((N) => N.map((R) => R.id === S ? { ...R, mode: x } : R));
  }, updateMarketingRefText = (S, x, N) => {
    setMarketingRefs((R) => R.map((O) => O.id === S ? { ...O, [x]: N } : O));
  }, removeMarketingRef = (S) => {
    setMarketingRefs((x) => x.filter((N) => N.id !== S));
  }, loadModelDraftFile = async (S) => {
    const x = S.target.files && S.target.files[0];
    if (!x) return;
    setModelDraftStatus(`Optimizing ${x.name} for selected-model generation...`);
    const N = await compressModelImageForRequest(x);
    setModelDraftPreview(String(N)), setModelDraftStatus(`Loaded ${x.name} (optimized for generation)`);
  }, saveModelRecord = async () => {
    if (!modelDraftName.trim() || !modelDraftPreview) {
      setModelDraftStatus("Model name and image are required.");
      return;
    }
    try {
      setModelDraftStatus("Saving model image to database...");
      const S = `selected_model_${Date.now()}.jpg`, x = modelDraftPreview.startsWith("http") ? { url: modelDraftPreview, pathname: null } : await uploadModelImageToBlob(modelDraftPreview, S), N = { id: `model-${Date.now()}`, name: modelDraftName.trim(), gender: modelDraftGender, age: modelDraftAge, preview: x.url, pathname: x.pathname, savedAt: (/* @__PURE__ */ new Date()).toISOString(), savedBy: (s == null ? void 0 : s.email) || "unknown" }, R = [N, ...modelDb.filter((O) => O.id !== N.id && String(O.name || "").trim().toLowerCase() !== N.name.toLowerCase()).slice(0), ...modelDb.filter((O) => O.id !== N.id && String(O.name || "").trim().toLowerCase() === N.name.toLowerCase()).slice(0, 9)];
      await saveModelDatabaseToServer(R), setModelDb(R), setSelectedModelId(N.id), tl((O) => ({ ...O, gender: N.gender || O.gender, age: N.age || O.age, imageSize: "2K" })), setModelDraftName(""), setModelDraftGender("Female"), setModelDraftAge("Young Adult (20s)"), setModelDraftPreview(""), setModelDraftStatus("Model saved to shared database.");
    } catch (S) {
      setModelDraftStatus((S == null ? void 0 : S.message) || "Failed to save model.");
    }
  }, removeModelRecord = async (S) => {
    try {
      const x = modelDb.filter((N) => N.id !== S);
      await saveModelDatabaseToServer(x), setModelDb(x), selectedModelId === S && setSelectedModelId(""), setModelDraftStatus("Model removed from shared database.");
    } catch (x) {
      setModelDraftStatus((x == null ? void 0 : x.message) || "Failed to remove model.");
    }
  }, qa = () => {
    ri.current = true, zt("Cancelling after current step…");
  }, pr = async () => {
    var S;
    if (Pt.length === 0) {
      Mt((x) => ({ ...x, error: "Upload at least one pair of glasses." }));
      return;
    }
    if (!je.hasGeminiApiKey) {
      Mt((x) => ({ ...x, error: "Server Gemini API key is not configured. Please set GEMINI_API_KEY in Vercel environment variables." }));
      return;
    }
    Mt({ isLoading: true, results: [], error: null }), zt("Preparing generation..."), ri.current = false, cl(0), ha("queued");
    try {
      const x = true;
      let N = null, R = null, O = null, W = null;
      Ui && (Ge.environment === "Reference upload (default)" || Ge.environment === "Randomize") && (zt("Uploading environment reference…"), O = await fi(Ui, "env"));
      cn && (Ge.clothing.includes("1") || Ge.clothing === "Randomize") && (zt("Uploading fashion reference…"), W = await fi(cn, "fashion"));
      const se = [];
      let de = 0;
      for (let ee = 0; ee < Pt.length && !ri.current; ee++) {
        const heRandomized = Xu(Ge, ee), heBase = generationSubTab === "marketing" ? Object.fromEntries(Object.entries(heRandomized).filter(([Nt]) => marketingSpecKeys.includes(Nt) || ["aspectRatio", "imageSize"].includes(Nt)).filter(([Nt]) => !marketingProductOnly || !["ethnicity", "gender", "age", "hairStyle", "skinTexture", "pose", "shotType", "facialExpression"].includes(Nt))) : heRandomized, selectedModelBase = selectedModelId ? modelDb.find((Nt) => Nt.id === selectedModelId) || null : null, modelCandidates = selectedModelBase ? modelDb.filter((Nt) => String(Nt.name || "").trim().toLowerCase() === String(selectedModelBase.name || "").trim().toLowerCase()) : modelDb.filter((Nt) => (!heBase.gender || heBase.gender === "Randomize" || Nt.gender === heBase.gender) && (!heBase.age || heBase.age === "Randomize" || Nt.age === heBase.age)), xt = (selectedModelBase ? modelCandidates : Pt.length > 1 ? modelCandidates : []).length ? (selectedModelBase ? modelCandidates : modelCandidates)[Math.floor(Math.random() * (selectedModelBase ? modelCandidates : modelCandidates).length)] : selectedModelBase, he = xt ? { ...heBase, gender: xt.gender || heBase.gender, age: xt.age || heBase.age, aspectRatio: "1:1", imageSize: "2K" } : heBase, Ce = { ...Qu(xo, ee), ...(xt ? { selected_model: { name: xt.name, gender: xt.gender, age: xt.age, chosen_image_id: xt.id, forced_aspect_ratio: "1:1", forced_image_size: "2K" } } : {}), ...(generationSubTab === "marketing" ? { marketing_custom_prompt: marketingCustomPrompt, marketing_product_only: marketingProductOnly, marketing_enabled_specs: marketingSpecKeys, marketing_references: marketingRefs.filter((Nt) => Nt.preview).map((Nt, Ui) => ({ index: Ui + 1, file_name: Nt.fileName || `reference_${Ui + 1}`, mode: Nt.mode || "reference", name: Nt.refName || "", function: Nt.refFunction || "" })) } : {}) }, tt = Math.floor(Math.random() * 1e6);
        ha("running"), cl(ee / Math.max(1, Pt.length) * 100 | 0), zt(`Synthesizing variation ${ee + 1} of ${Pt.length}... (sequential queue)`);
        const Ct = ((S = Pt[ee]) == null ? void 0 : S.name) || `glasses_${ee + 1}`, Tt = Al({ referenceFileName: Ct, identity: he.ethnicity, age: he.age, gender: he.gender, number: ee + 1 });
        try {
          let nt;
          if (x) {
            zt(`Uploading glasses ${ee + 1}/${Pt.length}…`);
            const Xt = await fi(Pt[ee], "glasses");
            zt(`Synthesizing variation ${ee + 1} of ${Pt.length}…`);
            const modelReferenceUrl = xt ? await compressModelImageForRequest(xt.preview) : null;
            const wn = await Pe("/api/generate", { method: "POST", body: JSON.stringify({ glassesUrl: Xt, fashionUrl: W, envUrl: O, modelUrl: modelReferenceUrl, extraReferences: generationSubTab === "marketing" ? marketingRefs.filter((Nt) => Nt.preview).map((Nt) => ({ url: Nt.preview, mode: Nt.mode || "reference", fileName: Nt.fileName || "reference", name: Nt.refName || "", function: Nt.refFunction || "" })) : [], attributes: he, customSpecs: Ce, seed: tt, aspectRatio: he.aspectRatio, imageSize: he.imageSize }) });
            if (!(wn != null && wn.ok)) throw new Error((wn == null ? void 0 : wn.error) || "Generation failed.");
            nt = { imageUrl: wn.imageUrl, mimeType: wn.mimeType, promptJson: wn.promptJson };
          } else nt = await QN(Pt[ee], cn, R, N, he, Ce, tt, Q == null ? void 0 : Q.value, xt ? xt.preview : null, generationSubTab === "marketing" ? marketingRefs.filter((Nt) => Nt.preview).map((Nt) => ({ url: Nt.preview, mode: Nt.mode || "reference", fileName: Nt.fileName || "reference", name: Nt.refName || "", function: Nt.refFunction || "" })) : []);
          const Je = nt.mimeType || "image/png", Re = `${Tt}.${Nn(Je)}`, lt = { imageUrl: nt.imageUrl, promptJson: nt.promptJson, seedUsed: tt, mimeType: Je, fileName: Re, referenceFileName: Ct, identity: he.ethnicity, age: he.age, gender: he.gender, customSpecs: Ce };
          se.push(lt), de += 1, Mt((Xt) => ({ ...Xt, results: [...Xt.results, lt] })), It(ee);
          const $t = (/* @__PURE__ */ new Date()).toISOString(), Ml = { id: `asset-img-${lt.seedUsed}-${$t}-${ee}`, kind: "image", url: lt.imageUrl, fileName: lt.fileName, mimeType: lt.mimeType, seedUsed: lt.seedUsed, createdAt: $t, promptJson: lt.promptJson, meta: { reference_file: lt.referenceFileName, identity: lt.identity, age: lt.age, gender: lt.gender, custom_specs: lt.customSpecs || {} } };
          Mo((Xt) => [...Xt, Ml]), xl([Ml]).catch(() => {
          });
        } catch (nt) {
          const Je = (nt == null ? void 0 : nt.message) || "Generation failed.", Re = { imageUrl: "", promptJson: "", seedUsed: tt, error: Je, fileName: `${Tt}_FAILED.txt`, referenceFileName: Ct, identity: he.ethnicity, age: he.age, gender: he.gender };
          se.push(Re), Mt((lt) => ({ ...lt, results: [...lt.results, Re] })), It(ee);
        } finally {
          cl((ee + 1) / Math.max(1, Pt.length) * 100 | 0);
        }
        !ri.current && ee < Pt.length - 1 && (ha("cooldown"), zt("Cooling down 2 seconds (rate-limit guard)…"), await ZN(2e3));
      }
      const Se = (/* @__PURE__ */ new Date()).toISOString();
      if (Mt({ isLoading: false, results: se, error: null }), ri.current && (zt("Cancelled."), setTimeout(() => zt(""), 1500)), d) {
        const generatedImageSize = selectedModelId ? "2K" : Ge.imageSize, ee = Yu[generatedImageSize] || generatedImageSize, Ce = (Aa[generatedImageSize] ?? 0) * de;
        v ? (await Pe("/api/sessions", { method: "POST", body: JSON.stringify({ action: "event", id: d, type: "generate", details: `Generated ${de} image(s) @ ${ee} | $${Ce.toFixed(3)}`, generatedCountDelta: de, costDelta: Ce }) }), Ma({ sessionId: d, type: "generate", details: `Generated ${de} image(s) @ ${ee} | $${Ce.toFixed(3)}`, generatedCountDelta: de, costDelta: Ce })) : Ra((tt) => ({ ...tt, generatedCount: tt.generatedCount + de, totalCost: tt.totalCost + Ce, events: [...tt.events, { at: Se, type: "generate", details: `Generated ${de} image(s) @ ${ee} | $${Ce.toFixed(3)}` }] }));
      }
    } catch (x) {
      if (String((x == null ? void 0 : x.message) || "") === "CANCELLED") {
        Mt((N) => ({ ...N, isLoading: false }));
        return;
      }
      v && d && Pe("/api/sessions", { method: "POST", body: JSON.stringify({ action: "event", id: d, type: "error", details: (x == null ? void 0 : x.message) || "Generation failed." }) }).catch(() => {
      }), Mt({ isLoading: false, results: [], error: x.message });
    } finally {
      ri.current || zt("");
    }
  }, Va = async () => {
    if (!Oe || !s) return;
    const S = je.hasGeminiApiKey;
    if (!S) {
      Io("Server Gemini API key is not configured.");
      return;
    }
    Io(null), pl(true);
    try {
      const x = Ft.trim() || "Model gazing to the opposite way";
      let N;
      if (S) {
        const Ce = Oe.mimeType || Zi(Oe.imageUrl) || "image/png", tt = `edit_source_${Date.now()}.${Nn(Ce)}`, Ct = Oe.imageUrl.startsWith("http") ? Oe.imageUrl : await Ha(Oe.imageUrl, tt), Tt = await Pe("/api/edit", { method: "POST", body: JSON.stringify({ imageUrl: Ct, instruction: x, imageSize: editOutputSize }) });
        if (!(Tt != null && Tt.ok)) throw new Error((Tt == null ? void 0 : Tt.error) || "Edit failed.");
        N = Tt.imageUrl;
      } else N = await ky(Oe.imageUrl, x, Q.value, editOutputSize);
      const R = Zi(N) || Oe.mimeType || "image/png", O = Oe.referenceFileName || `glasses_${(Oe.resultIndex ?? 0) + 1}`, W = Al({ referenceFileName: O, identity: Oe.identity || Ge.ethnicity, age: Oe.age || Ge.age, gender: Oe.gender || Ge.gender, number: (Oe.resultIndex ?? 0) + 1 }), se = String(Oe.fileName || `${W}.${Nn(R)}`).replace(/\.[a-zA-Z0-9]+$/, ""), de = Dt.filter((Ce) => (Ce.fileName || "").startsWith(`${se}_edit`)).length, Se = Pa(Oe.fileName, se, de + 1);
      typeof Oe.resultIndex == "number" && Mt((Ce) => ({ ...Ce, results: Ce.results.map((tt, Ct) => Ct === Oe.resultIndex ? { ...tt, imageUrl: N, mimeType: R, fileName: Se, promptJson: tt.promptJson || "" } : tt) })), ga((Ce) => Ce && { ...Ce, imageUrl: N, mimeType: R, fileName: Se });
      const ee = (/* @__PURE__ */ new Date()).toISOString(), he = { id: `asset-edit-${Date.now()}`, kind: "image", url: N, fileName: Se, mimeType: R, seedUsed: Oe.seedUsed, createdAt: ee, promptJson: void 0, meta: { reference_file: O, edited_from: Oe.fileName || null, instruction: x } };
      if (Mo((Ce) => [...Ce, he]), xl([he]).catch(() => {
      }), d) {
        const Ce = nr(), tt = `Edited 1 image | $${Ce.toFixed(3)} | ${x}`;
        v ? (await Pe("/api/sessions", { method: "POST", body: JSON.stringify({ action: "event", id: d, type: "edit", details: tt, editedCountDelta: 1, costDelta: Ce }) }), Ma({ sessionId: d, type: "edit", details: tt, editedCountDelta: 1, costDelta: Ce })) : Ra((Ct) => ({ ...Ct, editedCount: (Ct.editedCount || 0) + 1, totalCost: (Ct.totalCost || 0) + Ce, events: [...Ct.events || [], { at: ee, type: "edit", details: tt }] }));
      }
    } catch (x) {
      Io((x == null ? void 0 : x.message) || "Edit failed.");
    } finally {
      pl(false);
    }
  }, mn = async () => {
    if (!et || !s) return;
    const S = je.hasGeminiApiKey;
    if (!S) {
      pn("Server Gemini API key is not configured.");
      return;
    }
    if (et.kind !== "image") {
      pn("Only images can be edited.");
      return;
    }
    pn(null), Vi(true);
    try {
      const x = Ta.trim() || "Model gazing to the opposite way";
      let N;
      if (S) {
        const ee = await Pe("/api/edit", { method: "POST", body: JSON.stringify({ imageUrl: et.url, instruction: x, imageSize: editOutputSize }) });
        if (!(ee != null && ee.ok)) throw new Error((ee == null ? void 0 : ee.error) || "Edit failed.");
        N = ee.imageUrl;
      } else {
        const ee = await fetch(et.url).then((Ce) => Ce.blob()), he = await Zn(ee);
        N = await ky(he, x, Q.value, editOutputSize);
      }
      const R = Zi(N) || "image/png", O = String(et.fileName || bn(et.pathname)).replace(/\.[a-zA-Z0-9]+$/, ""), W = ot.filter((ee) => (ee.fileName || "").startsWith(`${O}_edit`)).length, se = Pa(et.fileName || `${O}.png`, O, W + 1), de = (/* @__PURE__ */ new Date()).toISOString(), Se = { id: `asset-edit-shared-${Date.now()}`, kind: "image", url: N, fileName: se, mimeType: R, seedUsed: void 0, createdAt: de, meta: { reference_file: et.referenceFileName || "", edited_from: et.fileName || et.pathname, instruction: x } };
      if (Mo((ee) => [...ee, Se]), await xl([Se]), await ko(), d) {
        const ee = nr(), he = `Edited 1 image | $${ee.toFixed(3)} | ${x}`;
        v ? (await Pe("/api/sessions", { method: "POST", body: JSON.stringify({ action: "event", id: d, type: "edit", details: he, editedCountDelta: 1, costDelta: ee }) }), Ma({ sessionId: d, type: "edit", details: he, editedCountDelta: 1, costDelta: ee })) : Ra((Ce) => ({ ...Ce, editedCount: (Ce.editedCount || 0) + 1, totalCost: (Ce.totalCost || 0) + ee, events: [...Ce.events || [], { at: de, type: "edit", details: he }] }));
      }
    } catch (x) {
      pn((x == null ? void 0 : x.message) || "Edit failed.");
    } finally {
      Vi(false);
    }
  }, Wn = async (S, x) => {
    if (S.startsWith("http")) {
      const N = await fetch(S);
      if (!N.ok) throw new Error(`Download failed: ${N.status}`);
      const R = await N.blob(), O = URL.createObjectURL(R);
      try {
        await Ga(O, x);
      } finally {
        URL.revokeObjectURL(O);
      }
      return;
    }
    await Ga(S, x);
  }, _t = async () => {
    if (!s || s.role !== "admin") return;
    const S = await Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "users.list" }) });
    Array.isArray(S == null ? void 0 : S.users) && a(S.users);
  }, ji = () => {
    pe(null), (async () => {
      if (!s || s.role !== "admin") return;
      if (!j.trim() || !Y.trim() || !Te.trim()) {
        pe("Email, name, and password are required.");
        return;
      }
      const x = s.email.toLowerCase() === Ds ? Di : "user";
      await Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "users.create", email: j.trim(), name: Y.trim(), password: Te, role: x }) }), ae(""), ne(""), re(""), pe("User created."), await _t();
    })().catch((x) => pe((x == null ? void 0 : x.message) || "Failed to create user."));
  }, za = (S, x) => {
    if (!s || s.role !== "admin" || s.email.toLowerCase() !== Ds) return;
    (async () => {
      await Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "users.setRole", email: S, role: x }) }), pe("Role updated."), await _t();
    })().catch((R) => pe((R == null ? void 0 : R.message) || "Failed to update role."));
  }, Nl = (S) => {
    if (!s || s.role !== "admin") return;
    const x = o.find((R) => R.email.toLowerCase() === S.toLowerCase());
    if (!x) return;
    if (x.role === "admin") {
      pe("Admin users cannot be removed.");
      return;
    }
    (async () => {
      await Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "users.remove", email: S }) }), pe("User removed."), await _t();
    })().catch((R) => pe((R == null ? void 0 : R.message) || "Failed to remove user."));
  }, wl = () => {
    if (!s) return;
    dn(null);
    const S = li.trim();
    if (!S) {
      dn("Name cannot be empty.");
      return;
    }
    (async () => {
      await Pe("/api/auth", { method: "POST", body: JSON.stringify({ action: "users.updateMe", name: S, currentPassword: ai || null, newPassword: sl.trim() ? sl.trim() : null }) });
      const N = await Pe("/api/auth"), R = N == null ? void 0 : N.user;
      R != null && R.email && c({ id: String(R.email), email: String(R.email), name: String(R.name || R.email), role: String(R.role) }), ut(""), rl(""), dn("Account updated."), setTimeout(() => dn(null), 2e3), _t().catch(() => {
      });
    })().catch((N) => dn((N == null ? void 0 : N.message) || "Failed to update account."));
  }, Fa = () => {
    if (!s || s.role !== "admin") return;
    I(""), Me(false), pe("API keys are now managed only in Vercel environment variables (GEMINI_API_KEY). No key is stored in the app database or browser session.");
  }, pi = () => {
    if (!s || s.role !== "admin") return;
    sessionStorage.removeItem(Xf), _e(null), Me(false), pe("Local temporary key cleared. Server key must be changed in Vercel environment variables.");
  }, Hn = (S) => (Xi[S] || Tu[S] || []).filter((N) => String(N).trim().length > 0), mi = (S) => {
    var O;
    const x = Hn(S), N = (O = Nt == null ? void 0 : Nt[S]) == null ? void 0 : O.default;
    if (N && x.includes(N)) return N;
    const R = La[S];
    return R && x.includes(R) ? R : x[0] || "";
  }, jn = (S, x, N) => {
    const R = x.map((W) => String(W).trim()).filter(Boolean), O = N && R.includes(N) ? N : R[0];
    Li((W) => ({ ...W || {}, [S]: { options: R, default: O } })), O && tl((W) => ({ ...W, [S]: O }));
  }, mr = (S) => {
    const x = { ...Nt || {} };
    for (const N of mu) {
      const R = x[N], O = Xi[N] || Tu[N] || [], W = (R != null && R.options && R.options.length > 0 ? R.options : O).map((Se) => String(Se).trim()).filter(Boolean);
      if (W.length === 0) continue;
      const se = String(S[N] || ""), de = W.includes(se) ? se : (R == null ? void 0 : R.default) || W[0];
      x[N] = { options: W, default: de };
    }
    return x;
  }, Kt = () => {
    if (!s || s.role !== "admin") return;
    const S = fn, x = Gt.trim();
    if (!x) return;
    const N = Hn(S);
    if (N.some((W) => W.toLowerCase() === x.toLowerCase())) {
      En("Option already exists."), setTimeout(() => En(null), 2e3);
      return;
    }
    const R = [...N, x], O = mi(S) || x;
    jn(S, R, O), Ln("");
  }, Ja = (S) => {
    if (!s || s.role !== "admin") return;
    const x = fn, R = Hn(x).filter((se) => se !== S);
    if (R.length === 0) return;
    const O = mi(x), W = S === O ? R[0] : O;
    jn(x, R, W);
  }, Bn = async () => {
    if (!(!s || s.role !== "admin")) {
      En(null), il(true);
      try {
        await Ia(Nt || {}), await Ht(), En("Saved technical spec choices."), setTimeout(() => En(null), 2500);
      } catch (S) {
        En((S == null ? void 0 : S.message) || "Failed to save.");
      } finally {
        il(false);
      }
    }
  }, hr = async () => {
    if (!(!s || s.role !== "admin" || !window.confirm("Reset technical spec choices to built-in defaults?"))) {
      En(null), il(true);
      try {
        await Cl(), Li(null), await Ht(), En("Reset to built-in choices."), setTimeout(() => En(null), 2500);
      } catch (x) {
        En((x == null ? void 0 : x.message) || "Failed to reset.");
      } finally {
        il(false);
      }
    }
  }, Rl = (S) => S.trim().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]+/g, "_").replace(/_+/g, "_").replace(/^_+|_+$/g, ""), hi = async () => {
    if (!s || s.role !== "admin") return;
    nn(null);
    const S = Rl(bo), x = qs.trim(), N = ol.split(",").map((W) => W.trim()).filter(Boolean), R = Array.from(new Set(N));
    if (!S || !x || R.length === 0) {
      nn("Key, label, and at least 1 option are required.");
      return;
    }
    if (kn.some((W) => W.key === S)) {
      nn("A custom spec with this key already exists.");
      return;
    }
    const O = { key: S, label: x, options: R.includes("Randomize") ? R : ["Randomize", ...R], default: R[0] }, W = [...kn, O];
    Kn(W), tn((te) => ({ ...te, [S]: O.default || O.options[0] || "Randomize" })), ki(""), fa(""), Pi("");
    try {
      await Mr(W), nn("Added and saved custom category for all users/admins."), setTimeout(() => nn(null), 2500);
    } catch (te) {
      nn((te == null ? void 0 : te.message) || "Added locally, but failed to save.");
    }
  }, Ya = (S) => {
    !s || s.role !== "admin" || !window.confirm(`Remove custom spec "${S}"?`) || (Kn((N) => N.filter((R) => R.key !== S)), tn((N) => {
      const R = { ...N };
      return delete R[S], R;
    }));
  }, gr = async () => {
    if (!(!s || s.role !== "admin")) {
      nn(null), wo(true);
      try {
        await rr(kn), await Ht(), nn("Saved custom technical spec categories."), setTimeout(() => nn(null), 2500);
      } catch (S) {
        nn((S == null ? void 0 : S.message) || "Failed to save.");
      } finally {
        wo(false);
      }
    }
  }, Ka = async () => {
    if (!(!s || s.role !== "admin" || !window.confirm("Remove ALL custom technical spec categories?"))) {
      nn(null), wo(true);
      try {
        await ur(), Kn([]), tn({}), await Ht(), nn("Custom categories cleared."), setTimeout(() => nn(null), 2500);
      } catch (x) {
        nn((x == null ? void 0 : x.message) || "Failed to reset.");
      } finally {
        wo(false);
      }
    }
  }, yr = () => {
    const S = _l.map((se) => {
      const de = se.events.map((Se) => `${Se.type}:${Se.at}${Se.details ? `:${Se.details}` : ""}`).join("|");
      return [new Date(se.loginAt).toLocaleDateString("en-CA"), se.userName, se.userEmail, se.role, se.loginAt, se.logoutAt || "", se.generatedCount.toString(), String(se.editedCount || 0), (se.totalCost ?? 0).toFixed(3), de];
    }), N = [["date", "user_name", "user_email", "role", "login_at", "logout_at", "images_generated", "images_edited", "total_cost", "events"], ...S].map((se) => se.map((de) => `"${String(de).replace(/"/g, '""')}"`).join(",")).join(`
`), R = new Blob([N], { type: "text/csv;charset=utf-8;" }), O = URL.createObjectURL(R), W = document.createElement("a");
    W.href = O, W.download = `session_logs_${(/* @__PURE__ */ new Date()).toLocaleDateString("en-CA")}.csv`, document.body.appendChild(W), W.click(), document.body.removeChild(W), URL.revokeObjectURL(O);
  };
  return J.useMemo(() => {
    const S = "input image is the reference image uploaded", x = Fi.trim() ? Number(Fi) : void 0, N = { template_name: "natural_image_to_video", description: "Template for image-to-video generation with realistic, everyday human movement. No slow-motion, no exaggerated timing. Camera stays calm and natural.", input: { image: S, seed: Number.isFinite(x) ? x : null, duration_seconds: Ks, fps: vl }, prompt: `The video starts exactly from the provided input image and shows the person performing completely natural, everyday movements at normal real-life speed with no slow-motion feeling whatsoever. Camera is mostly static with only a very subtle, gentle pan to the ${Lo} over the entire clip (no zoom, no shake, no dramatic moves). The model does casual human things like softly smiling, gently gazing off-camera to the side as if looking at someone, briefly fixing their hair or adjusting their clothes in a relaxed way, or quietly talking/mouthing words to someone just off-screen while their eyes stay focused and natural. All motions are fluid, lifelike, unhurried, and feel like a real casual moment captured on video. Natural lighting, realistic skin texture, subtle breathing and micro-expressions, perfect everyday realism.`, negative_prompt: "slow motion, fast motion, timelapse, jerky movements, robotic motion, exaggerated gestures, camera zoom, camera shake, dramatic camera movement, unnatural pauses, stiff posture, uncanny valley, low quality, blurry, overexposed, underexposed, text, watermark, logo", motion_guidance: { style: "normal_everyday_speed", camera: "minimal_slight_pan", subject_action: "casual_human_behavior", speed: "real_time_natural" }, parameters: { motion_strength: Xs, creativity: Qs, consistency: Ws } };
    return JSON.stringify(N, null, 2);
  }, [Fi, Ks, vl, Lo, Xs, Qs, Ws]), s ? C.jsxs("div", { className: "min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white", children: [C.jsx("header", { className: "border-b-2 border-black sticky top-0 bg-white z-50", children: C.jsxs("div", { className: "max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between", children: [C.jsxs("div", { className: "flex items-center gap-4", children: [C.jsx("div", { className: "w-12 h-12 bg-black flex items-center justify-center", children: C.jsx("span", { className: "text-white font-black text-2xl italic", children: "O" }) }), C.jsxs("div", { children: [C.jsx("h1", { className: "text-lg font-black tracking-tighter uppercase leading-none", children: "OWNDAYS" }), C.jsx("p", { className: "text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase", children: "Eyeglasses AI Try-On" })] })] }), C.jsxs("div", { className: "flex items-center gap-4", children: [C.jsxs("button", { onClick: () => {
    dn(null), Bi(s.name || ""), ut(""), rl(""), oi(true);
  }, className: "text-[10px] font-bold uppercase text-gray-600 border border-transparent hover:border-black px-2 py-1", title: "Account settings", children: [s.name, " (", s.role, ")"] }), C.jsx("button", { onClick: dr, className: "text-[10px] font-bold uppercase border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors", children: "Log Out" })] })] }) }), C.jsx("div", { className: "border-b border-black", children: C.jsxs("div", { className: "max-w-screen-2xl mx-auto px-6 flex items-center gap-6", children: [C.jsx("button", { onClick: () => b("generation"), className: `text-[10px] font-black uppercase py-3 border-b-2 ${E === "generation" ? "border-black" : "border-transparent text-gray-400"}`, children: "Generation" }), C.jsxs("button", { onClick: () => b("users"), className: `text-[10px] font-black uppercase py-3 border-b-2 ${E === "users" ? "border-black" : "border-transparent text-gray-400"}`, children: ["Setting", s.role === "admin" && C.jsx("span", { className: `ml-2 text-[9px] font-black uppercase ${Na.exceeded ? "text-red-600" : "text-gray-600"}`, children: Na.label })] }), C.jsx("div", { className: "flex-1" }), C.jsxs("button", { onClick: () => t((S) => S === "dark" ? "light" : "dark"), className: "text-[10px] font-black uppercase py-3 border-b-2 border-transparent hover:border-black", children: ["Theme: ", n === "dark" ? "Dark" : "Light"] })] }) }), E === "generation" ? C.jsxs("main", { className: "max-w-screen-2xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10", children: [C.jsxs("div", { className: "lg:col-span-12 border border-black p-2 bg-white flex flex-wrap items-center gap-2", children: [C.jsx("button", { onClick: () => setGenerationSubTab("portrait"), className: "border border-black px-3 py-2 text-[9px] font-black uppercase " + (generationSubTab === "portrait" ? "bg-black text-white" : "hover:bg-black hover:text-white"), children: "Generation (Portrait with Eyeglasses)" }), C.jsx("button", { onClick: () => setGenerationSubTab("edit"), className: "border border-black px-3 py-2 text-[9px] font-black uppercase " + (generationSubTab === "edit" ? "bg-black text-white" : "hover:bg-black hover:text-white"), children: "Generation (Edit function)" }), C.jsx("button", { onClick: () => setGenerationSubTab("marketing"), className: "border border-black px-3 py-2 text-[9px] font-black uppercase " + (generationSubTab === "marketing" ? "bg-black text-white" : "hover:bg-black hover:text-white"), children: "Generation (Marketing use)" })] }), C.jsxs("div", { className: "lg:col-span-4 space-y-8", children: [generationSubTab === "edit" && C.jsxs("div", { className: "border border-black p-4 bg-white space-y-3", children: [C.jsx("div", { className: "text-[10px] font-black uppercase", children: "Generation (Edit Function)" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-600 leading-relaxed", children: "Use the shared gallery to review any generated asset. Double-click an image to open the large preview, then enter an edit prompt and run the Gemini edit flow from there." }), C.jsxs("div", { className: "border border-black bg-gray-50 p-3 space-y-2", children: [C.jsxs("div", { className: "text-[9px] font-black uppercase flex items-center justify-between", children: [C.jsx("span", { children: "Shared Assets Ready" }), C.jsx("span", { children: ot.length })] }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Tip: use filters below to narrow by user or reference filename before editing." })] }), C.jsxs("div", { className: "border border-black bg-gray-50 p-3 space-y-2", children: [C.jsx("div", { className: "text-[9px] font-black uppercase", children: "Edit Upload" }), C.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [C.jsxs("label", { className: "border border-black bg-white px-3 py-2 text-[9px] font-black uppercase cursor-pointer hover:bg-black hover:text-white", children: ["Upload Image", C.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: handleEditUpload })] }), C.jsxs("select", { value: editOutputSize, onChange: (S) => setEditOutputSize(S.target.value), className: "border border-black px-2 py-2 text-[10px] bg-white", title: "Edit output resolution. Aspect ratio stays same as original.", children: [C.jsx("option", { value: "1K", children: "Output 1K" }), C.jsx("option", { value: "2K", children: "Output 2K" }), C.jsx("option", { value: "4K", children: "Output 4K" })] })] }), C.jsx("div", { className: "text-[8px] font-bold uppercase text-gray-500", children: editUploadName ? `Loaded: ${editUploadName}` : "Upload a local image to open the same edit review modal." })] }), C.jsxs("div", { className: "border border-black bg-gray-50 p-3 space-y-2", children: [C.jsx("div", { className: "text-[9px] font-black uppercase", children: "Brand Reminder" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Direct camera gaze is blocked in the core prompt logic so the result stays natural for the brand." })] })] }), generationSubTab !== "edit" && C.jsxs("div", { className: "space-y-4", children: [C.jsxs("div", { className: "border border-black p-4 bg-white space-y-3", children: [C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsx("div", { className: "text-[10px] font-black uppercase", children: "Selected Model Database" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: modelDb.length === 0 ? "No saved models" : `${modelDb.length} saved` })] }), C.jsxs("select", { value: selectedModelId, onChange: (S) => setSelectedModelId(S.target.value), className: "w-full border border-black px-2 py-2 text-[10px]", children: [C.jsx("option", { value: "", children: "No fixed model selected" }), modelDb.map((S) => C.jsxs("option", { value: S.id, children: [S.name, " | ", S.gender, " | ", S.age] }, S.id))] }), modelDb.length > 0 && C.jsxs("div", { className: "space-y-2", children: [C.jsx("div", { className: "text-[8px] font-bold uppercase text-gray-500", children: "Quick Pick" }), C.jsx("div", { className: "grid grid-cols-2 xl:grid-cols-3 gap-2", children: modelDb.slice(0, 6).map((S) => C.jsxs("button", { onClick: () => setSelectedModelId(S.id), className: `border border-black p-2 flex items-center gap-2 text-left transition-colors min-h-[56px] ${selectedModelId === S.id ? "bg-black text-white" : "bg-white hover:bg-gray-50"}`, children: [C.jsx("img", { src: S.preview, className: "w-10 h-10 object-cover border border-black bg-white shrink-0" }), C.jsxs("div", { className: "min-w-0", children: [C.jsx("div", { className: "text-[8px] font-black uppercase truncate", children: S.name }), C.jsxs("div", { className: `text-[8px] font-bold uppercase truncate ${selectedModelId === S.id ? "text-white/80" : "text-gray-500"}`, children: [S.gender, " | ", S.age] })] })] }, S.id)) })] }), selectedModelId ? C.jsxs("div", { className: "border border-black bg-gray-50 p-3 flex items-start gap-3", children: [C.jsx("img", { src: ((modelDb.find((S) => S.id === selectedModelId) || {}).preview) || "", className: "w-16 h-16 object-cover border border-black bg-white shrink-0" }), C.jsxs("div", { className: "flex-1 text-[9px] font-bold uppercase text-gray-600 space-y-1", children: [C.jsx("div", { className: "text-black", children: ((modelDb.find((S) => S.id === selectedModelId) || {}).name) || "Saved model" }), C.jsx("div", { children: [((modelDb.find((S) => S.id === selectedModelId) || {}).gender) || "", " | ", ((modelDb.find((S) => S.id === selectedModelId) || {}).age) || ""] }), C.jsx("div", { children: "Gender + age sync to technical specs automatically." }), C.jsx("div", { className: "text-[8px] text-gray-500", children: "Saved model image is also forwarded as a face-consistency reference during generation." })] }), C.jsx("button", { onClick: () => setSelectedModelId(""), className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white shrink-0", children: "Clear" })] }) : C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Optional: choose a saved model for a more controlled face baseline." })] }), C.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [C.jsxs("div", { className: "border border-black p-2 relative aspect-square flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 overflow-hidden", children: [C.jsx("input", { type: "file", multiple: true, className: "absolute inset-0 opacity-0 cursor-pointer z-10", onChange: (S) => bl("glasses", S) }), _o.length > 0 ? C.jsxs("div", { className: "w-full h-full relative", children: [C.jsx("img", { src: _o[_o.length - 1], className: "w-full h-full object-contain", alt: "Glasses" }), C.jsx("div", { className: "absolute bottom-0 right-0 bg-black text-white text-[8px] px-1 font-bold", children: _o.length }), C.jsx("button", { onClick: (S) => {
    S.stopPropagation(), Zu();
  }, className: "absolute top-0 right-0 bg-red-500 text-white text-[8px] px-1 font-bold z-20", children: "X" })] }) : C.jsx("span", { className: "text-[10px] font-bold uppercase", children: "Upload Glasses (Batch)" })] }), C.jsxs("div", { className: "border border-black p-2 relative aspect-square flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50", children: [C.jsx("input", { type: "file", className: "absolute inset-0 opacity-0 cursor-pointer", onChange: (S) => bl("fashion", S) }), jo ? C.jsxs("div", { className: "w-full h-full relative", children: [C.jsx("img", { src: jo, className: "w-full h-full object-contain", alt: "Fashion" }), C.jsx("button", { onClick: (S) => {
    S.stopPropagation(), Wu();
  }, className: "absolute top-0 right-0 bg-red-500 text-white text-[8px] px-1 font-bold z-20", children: "X" })] }) : C.jsx("span", { className: "text-[10px] font-bold uppercase", children: "Fashion Lay" })] }), C.jsxs("div", { className: "border border-black p-2 relative aspect-square flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50", children: [C.jsx("input", { type: "file", className: "absolute inset-0 opacity-0 cursor-pointer", onChange: (S) => bl("env", S) }), Os ? C.jsxs("div", { className: "w-full h-full relative", children: [C.jsx("img", { src: Os, className: "w-full h-full object-contain", alt: "Environment" }), C.jsx("button", { onClick: (S) => {
    S.stopPropagation(), ju();
  }, className: "absolute top-0 right-0 bg-red-500 text-white text-[8px] px-1 font-bold z-20", children: "X" })] }) : C.jsx("span", { className: "text-[10px] font-bold uppercase", children: "Env Reference" })] })] }), C.jsxs("div", { className: "border border-black bg-white px-2 py-2 flex flex-wrap items-center gap-2", children: [C.jsx("span", { className: "text-[9px] font-black uppercase", children: "Glasses resize" }), C.jsxs("select", { value: glassesResizePreset, onChange: (S) => setGlassesResizePreset(S.target.value), className: "border border-black px-2 py-1 text-[10px] bg-white", title: "Eyeglasses reference is resized immediately after upload before generation.", children: [C.jsx("option", { value: "1500x1000", children: "1500 x 1000 (detail)" }), C.jsx("option", { value: "600x400", children: "600 x 400 (balanced)" }), C.jsx("option", { value: "350x232", children: "350 x 232 (small)" })] }), C.jsx("span", { className: "text-[8px] font-bold uppercase text-gray-500", children: "Applied after upload" })] }), C.jsx("p", { className: "text-[8px] text-gray-400 uppercase font-bold text-center italic", children: "Ref 1: Glasses (Batch) | Ref 2: Fashion | Ref 3: Env" })] }), generationSubTab !== "edit" && C.jsx(xT, { attributes: Ge, onChange: (S, x) => tl((N) => ({ ...N, [S]: x })), onSubmit: pr, isSubmitting: Rt.isLoading, glassesCount: Pt.length, choices: Xi, customFields: kn, customValues: xo, onCustomChange: (S, x) => tn((N) => ({ ...N, [S]: x })) }), generationSubTab !== "edit" && Rt.error && C.jsx("div", { className: "p-3 bg-black text-white text-[10px] font-bold uppercase", children: Rt.error })] }), C.jsxs("div", { className: "lg:col-span-8 flex flex-col gap-6", children: [generationSubTab === "edit" && C.jsxs("div", { className: "min-h-[420px] border border-black p-6 bg-gray-50 flex flex-col items-center justify-center text-center gap-4", children: [C.jsx("div", { className: "text-6xl opacity-20", children: "⊙⊙" }), C.jsx("div", { className: "text-[11px] font-black uppercase tracking-[0.2em]", children: "Edit From Shared Gallery" }), C.jsx("div", { className: "max-w-xl text-[9px] font-bold uppercase text-gray-500 leading-relaxed", children: "Double-click any shared image below to open full preview, slide between assets, and edit with a prompt. The gallery stays available in every generation tab for quick review." }), C.jsxs("div", { className: "text-[9px] font-black uppercase border border-black bg-white px-3 py-2", children: ["Assets currently shown: ", ot.length] })] }), generationSubTab !== "edit" && C.jsxs("div", { className: "border border-black p-4 bg-white flex items-center justify-between", children: [C.jsx("div", { className: "text-[10px] font-black uppercase", children: "Session Summary" }), C.jsxs("div", { className: "text-[10px] font-bold uppercase", children: ["Images: ", (St == null ? void 0 : St.generatedCount) || 0, " | Edit images: ", (St == null ? void 0 : St.editedCount) || 0, " | Cost: $", St ? (St.totalCost ?? 0).toFixed(3) : "0.000"] })] }), generationSubTab === "marketing" && C.jsxs("div", { className: "border border-black p-4 bg-white space-y-4", children: [C.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [C.jsxs("div", { className: "space-y-1", children: [C.jsx("div", { className: "text-[10px] font-black uppercase", children: "Marketing Prompt Builder" }), C.jsx("div", { className: "text-[8px] font-bold uppercase text-gray-500", children: "Prompt builder lives in the main workspace. Shared gallery stays below the full layout." })] }), C.jsx("button", { onClick: addMarketingRef, className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Add Upload Box" })] }), C.jsxs("div", { className: "border border-black bg-gray-50 p-2 space-y-2", children: [C.jsx("div", { className: "text-[9px] font-black uppercase", children: "Marketing Type" }), C.jsxs("div", { className: "flex flex-wrap gap-2", children: [C.jsx("button", { onClick: () => setMarketingProductOnly(false), className: `border border-black px-3 py-2 text-[9px] font-black uppercase ${!marketingProductOnly ? "bg-black text-white" : "bg-white hover:bg-black hover:text-white"}`, children: "Model Campaign" }), C.jsx("button", { onClick: () => setMarketingProductOnly(true), className: `border border-black px-3 py-2 text-[9px] font-black uppercase ${marketingProductOnly ? "bg-black text-white" : "bg-white hover:bg-black hover:text-white"}`, children: "Product Shot Only" })] }), C.jsx("div", { className: "text-[8px] font-bold uppercase text-gray-500", children: marketingProductOnly ? "Product mode removes model specs from JSON prompt: no identity, gender, age, hair, skin, pose, shot type, or expression." : "Model mode keeps model-related specs and reference behavior active." })] }), C.jsx("textarea", { value: marketingCustomPrompt, onChange: (S) => setMarketingCustomPrompt(S.target.value), placeholder: "Optional marketing control prompt: define what, how the model/product reacts, surrounding props, environment, or product-only direction.", className: "w-full min-h-[90px] border border-black px-3 py-3 text-[10px] leading-5 font-mono bg-white" }), C.jsxs("div", { className: "border border-black bg-gray-50 p-3 space-y-2", children: [C.jsx("div", { className: "text-[9px] font-black uppercase", children: "Marketing Specs (normal users can remove/add back)" }), C.jsx("div", { className: "flex flex-wrap gap-2", children: (marketingProductOnly ? mu.filter((S) => !["ethnicity", "gender", "age", "hairStyle", "skinTexture", "pose", "shotType", "facialExpression"].includes(S)) : mu).map((S) => C.jsx("button", { onClick: () => setMarketingSpecKeys((x) => x.includes(S) ? x.filter((N) => N !== S) : [...x, S]), className: `border border-black px-2 py-1 text-[8px] font-black uppercase ${marketingSpecKeys.includes(S) ? "bg-black text-white" : "bg-white text-gray-500"}`, children: Xh[S] || S }, S)) })] }), marketingRefs.length === 0 ? C.jsx("div", { className: "border border-dashed border-black p-3 text-[9px] font-bold uppercase text-gray-500 bg-gray-50", children: "No extra reference boxes yet. Click Add Upload Box to create one." }) : C.jsx("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-3", children: marketingRefs.map((S, x) => C.jsxs("div", { className: "border border-black bg-gray-50 p-3 space-y-2", children: [C.jsxs("div", { className: "flex items-center justify-between gap-2", children: [C.jsxs("div", { className: "text-[9px] font-black uppercase", children: ["Reference Box ", x + 1] }), C.jsx("button", { onClick: () => removeMarketingRef(S.id), className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "X" })] }), C.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2 items-center", children: [C.jsxs("label", { className: "border border-black bg-white px-3 py-2 text-[9px] font-black uppercase cursor-pointer hover:bg-black hover:text-white text-center", children: ["Upload", C.jsx("input", { type: "file", className: "hidden", onChange: (N) => updateMarketingRefFile(S.id, N) })] }), C.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [C.jsxs("select", { value: S.mode || "reference", onChange: (N) => updateMarketingRefMode(S.id, N.target.value), className: "border border-black px-2 py-2 text-[10px]", children: [C.jsx("option", { value: "reference", children: "Reference only" }), C.jsx("option", { value: "exact", children: "Keep exactly the same" })] }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500 truncate", children: S.fileName || "No file selected" })] })] }), C.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: [C.jsx("input", { value: S.refName || "", onChange: (N) => updateMarketingRefText(S.id, "refName", N.target.value), placeholder: "Reference name (ex: bottle)", className: "border border-black px-2 py-2 text-[10px] bg-white" }), C.jsx("input", { value: S.refFunction || "", onChange: (N) => updateMarketingRefText(S.id, "refFunction", N.target.value), placeholder: "Function/use (ex: held in right hand)", className: "border border-black px-2 py-2 text-[10px] bg-white" })] }), S.preview && C.jsx("img", { src: S.preview, className: "w-full max-h-32 object-contain border border-black bg-white" })] }, S.id)) }), C.jsx("textarea", { value: (marketingProductOnly ? "PRODUCT ONLY: no model/person. | " : "") + marketingPromptPreview + (marketingCustomPrompt ? `\n| User Marketing Prompt: ${marketingCustomPrompt}` : "") + (marketingRefs.length ? `\n| Extra References: ${marketingRefs.map((S, x) => `Ref ${x + 1}=${S.refName || S.fileName || "empty"} [${S.mode || "reference"}] ${S.refFunction || ""}`).join(" ; ")}` : ""), readOnly: true, className: "w-full min-h-[240px] border border-black px-3 py-3 text-[10px] leading-5 font-mono bg-gray-50" })] }), generationSubTab !== "edit" && C.jsxs("div", { className: "min-h-[600px] border border-black p-6 bg-gray-50 relative overflow-hidden", children: [Rt.results.length > 0 ? C.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 h-full overflow-y-auto max-h-[800px] pr-2", children: Rt.results.map((S, x) => C.jsxs("div", { className: "flex flex-col gap-2", children: [C.jsxs("div", { onClick: () => It(x), onDoubleClick: () => {
    S.imageUrl && (fl(""), Io(null), ga({ imageUrl: S.imageUrl, seedUsed: S.seedUsed, fileName: S.fileName, mimeType: S.mimeType, referenceFileName: S.referenceFileName, identity: S.identity, age: S.age, gender: S.gender, resultIndex: x }));
  }, className: `relative border-2 bg-white transition-all cursor-pointer overflow-hidden h-[360px] flex items-center justify-center ${Vt === x ? "border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]" : "border-transparent opacity-50 grayscale hover:grayscale-0 hover:opacity-100"}`, children: [S.imageUrl ? C.jsx("img", { src: S.imageUrl, className: "max-w-full max-h-full object-contain" }) : C.jsx("div", { className: "w-full h-full flex items-center justify-center bg-white p-4", children: C.jsxs("div", { className: "text-center", children: [C.jsx("div", { className: "text-[10px] font-black uppercase text-red-700", children: "Failed" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-600 mt-2 break-words", children: String(S.error || "Generation failed.") })] }) }), C.jsxs("div", { className: "absolute top-2 left-2 bg-black text-white text-[8px] font-bold px-2 py-0.5 uppercase", children: ["Seed: ", S.seedUsed] })] }), C.jsx("button", { onClick: () => {
    S.imageUrl && Wn(S.imageUrl, S.fileName || `asset_${S.seedUsed}.jpg`);
  }, disabled: !S.imageUrl, className: `text-[9px] font-black uppercase tracking-tighter border border-black py-1 transition-colors ${S.imageUrl ? "hover:bg-black hover:text-white" : "opacity-40 cursor-not-allowed"}`, children: "Download Frame" })] }, x)) }) : Rt.isLoading ? C.jsx("div", { className: "h-full flex items-center justify-center", children: C.jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [C.jsx("div", { className: "w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" }), C.jsxs("div", { className: "flex flex-col gap-1", children: [C.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "Synthesis Engine Active" }), C.jsx("span", { className: "text-[9px] font-bold text-gray-500 uppercase animate-pulse", children: Ro })] }), C.jsxs("div", { className: "w-full max-w-sm", children: [C.jsxs("div", { className: "flex justify-between text-[9px] font-bold uppercase text-gray-500 mb-1", children: [C.jsx("span", { children: Fs || "running" }), C.jsxs("span", { children: [Math.round(ul), "%"] })] }), C.jsx("div", { className: "border border-black bg-white h-3", children: C.jsx("div", { className: "h-3 bg-black", style: { width: `${Math.max(0, Math.min(100, ul))}%` } }) }), C.jsx("div", { className: "text-[8px] font-bold uppercase text-gray-400 mt-1", children: "Sequential queue (1-by-1) + 2s delay between requests" })] }), C.jsx("button", { onClick: qa, className: "border border-black px-4 py-2 text-[10px] font-black uppercase hover:bg-black hover:text-white", disabled: String(Ro).toLowerCase().includes("cancell"), children: "Cancel" })] }) }) : C.jsxs("div", { className: "h-full flex flex-col items-center justify-center opacity-20 text-center", children: [C.jsx("span", { className: "text-8xl mb-4", children: "⊙⊙" }), C.jsx("p", { className: "max-w-xs text-[10px] font-black uppercase leading-tight tracking-widest", children: "Awaiting Technical Input for Virtual Synthesis" })] }), Rt.isLoading && Rt.results.length > 0 && C.jsxs("div", { className: "absolute bottom-4 left-4 right-4 border border-black bg-white px-3 py-2 flex items-center justify-between", children: [C.jsxs("div", { className: "flex-1 pr-3", children: [C.jsxs("div", { className: "flex justify-between text-[9px] font-bold uppercase text-gray-500 mb-1", children: [C.jsx("span", { children: Ro }), C.jsxs("span", { children: [Math.round(ul), "%"] })] }), C.jsx("div", { className: "border border-black bg-white h-2", children: C.jsx("div", { className: "h-2 bg-black", style: { width: `${Math.max(0, Math.min(100, ul))}%` } }) })] }), C.jsx("button", { onClick: qa, className: "border border-black px-3 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", disabled: String(Ro).toLowerCase().includes("cancell"), children: "Cancel" })] })] }), generationSubTab !== "edit" && Rt.results.length > 0 && C.jsxs("div", { className: "border border-black p-4 bg-white", children: [C.jsxs("div", { className: "flex justify-between items-center border-b border-black pb-1 mb-3", children: [C.jsxs("h4", { className: "text-[10px] font-black uppercase", children: ["Technical Prompt Logic (Variation ", Vt + 1, ")"] }), C.jsxs("span", { className: "text-[9px] font-bold", children: ["SEED: ", Rt.results[Vt].seedUsed] })] }), C.jsx("pre", { className: "text-[9px] font-mono overflow-auto max-h-40 bg-gray-50 p-2 whitespace-pre-wrap", children: Rt.results[Vt].promptJson || String(Rt.results[Vt].error || "No prompt JSON (failed generation).") })] }), generationSubTab !== "edit" && C.jsxs("div", { className: "border border-black p-4 bg-white", children: [C.jsxs("div", { className: "flex justify-between items-center border-b border-black pb-1 mb-3", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Archived Assets" }), C.jsxs("span", { className: "text-[9px] font-bold uppercase", children: ["Total: ", Dt.length] })] }), C.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-3", children: [C.jsx("button", { onClick: Ba, disabled: Ji || Dt.length === 0, className: `border border-black px-2 py-1 text-[9px] font-black uppercase ${Ji || Dt.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Download Batch (Original)" }), C.jsxs("div", { className: "flex items-center gap-2 border border-black px-2 py-1", children: [C.jsx("span", { className: "text-[9px] font-black uppercase", children: "Resize" }), C.jsx("input", { type: "number", min: 1, value: js, onChange: (S) => zu(S.target.value), className: "w-20 bg-white text-[10px] font-mono" }), C.jsx("span", { className: "text-[9px] font-black uppercase", children: "x" }), C.jsx("input", { type: "number", min: 1, value: er, onChange: (S) => Fu(S.target.value), className: "w-20 bg-white text-[10px] font-mono" })] }), C.jsx("button", { onClick: di, disabled: Ji || Dt.filter((S) => S.kind === "image").length === 0, className: `border border-black px-2 py-1 text-[9px] font-black uppercase ${Ji || Dt.filter((S) => S.kind === "image").length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Download Batch (Resized)" }), C.jsx("div", { className: "flex-1" }), C.jsx("button", { onClick: () => window.open(Ju, "_blank", "noopener,noreferrer"), className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Open Drive Folder" })] }), Dt.length === 0 ? C.jsx("div", { className: "text-[9px] text-gray-500 uppercase font-bold", children: "No archived assets yet." }) : C.jsx("div", { className: "grid grid-cols-4 gap-3", children: Dt.map((S, x) => C.jsxs("div", { className: "border border-black bg-white", children: [S.kind === "image" ? C.jsx("img", { src: S.url, className: "w-full aspect-square object-contain bg-gray-50" }) : S.url.startsWith("data:video") || S.url.startsWith("http") ? C.jsx("video", { src: S.url, className: "w-full aspect-square object-contain bg-gray-50", muted: true, controls: true }) : C.jsx("div", { className: "w-full aspect-square flex items-center justify-center text-center p-2 text-[9px] font-bold uppercase text-gray-500", children: "Video URI" }), C.jsxs("div", { className: "px-2 py-1 text-[8px] font-bold uppercase flex justify-between", children: [C.jsxs("span", { children: [S.kind === "video" ? "Video" : "Seed", " ", S.seedUsed ?? "-"] }), C.jsx("span", { children: new Date(S.createdAt).toLocaleTimeString() })] })] }, S.id || `${S.createdAt}-${x}`)) })] }), C.jsxs("div", { className: "lg:col-span-12 border border-black p-4 bg-white w-full self-stretch", children: [C.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-black pb-2 mb-4", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Shared Gallery (All Users)" }), C.jsxs("div", { className: "flex items-center gap-2", children: [C.jsx("span", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Auto-delete: 4 days" }), C.jsx("button", { onClick: cr, disabled: Ca || ot.length === 0, className: `border border-black px-2 text-[9px] font-black uppercase ${Ca || ot.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, title: "Downloads every asset currently shown (filtered).", children: Ca ? "Downloading…" : "Download All" }), C.jsx("button", { onClick: () => ko().catch(() => {
  }), className: "border border-black px-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Refresh" })] })] }), C.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[220px,minmax(0,1fr),auto,1fr] gap-2 mb-4 items-center", children: [C.jsxs("select", { value: ml, onChange: (S) => {
    va(S.target.value);
  }, className: "w-full border border-black px-2 py-2 text-[10px] min-w-[220px] bg-white", children: [C.jsx("option", { value: "", children: "All Users" }), Yt.map((S) => C.jsxs("option", { value: S.email, children: [S.name, " (", S.email, ")"] }, S.email))] }), C.jsx("input", { type: "text", placeholder: "Search (user / email / ref file)", value: ya, onChange: (S) => Js(S.target.value), className: "w-full min-w-[240px] border border-black px-2 py-2 text-[10px] bg-white" }), C.jsx("button", { onClick: () => ko().catch(() => {
  }), disabled: Sa, className: `border border-black px-3 py-2 text-[9px] font-black uppercase min-w-[120px] ${Sa ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Apply Filter" }), C.jsx("div", { className: "hidden xl:block" }), Uo && C.jsx("span", { className: "text-[9px] font-bold uppercase text-gray-500 justify-self-end", children: "Uploading…" })] }), gl && C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-600 mb-2", children: gl }), Do && C.jsx("div", { className: "text-[9px] font-bold uppercase text-red-600 mb-2", children: Do }), Sa ? C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Loading…" }) : ot.length === 0 ? C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "No shared assets yet. Newly generated assets will appear here even after logout/refresh." }) : C.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-3", children: ot.map((S) => C.jsxs("button", { onClick: () => {
    Qn(""), pn(null), Xn(S);
    const x = ot.findIndex((N) => N.id === S.id);
    Cn(x >= 0 ? x : -1);
  }, className: "w-full text-left border border-black bg-white hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-shadow", title: `${S.userName} (${S.userEmail})`, children: [S.kind === "image" ? C.jsx("img", { src: S.url, className: "w-full h-auto object-contain bg-white", loading: "lazy" }) : C.jsxs("div", { className: "relative", children: [C.jsx("video", { src: S.url, className: "w-full h-auto object-contain bg-black", muted: true, preload: "metadata" }), C.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: C.jsx("div", { className: "bg-black/70 text-white text-[9px] font-black uppercase px-2 py-1 border border-white", children: "Video" }) })] }), C.jsxs("div", { className: "px-2 py-2", children: [C.jsx("div", { className: "text-[9px] font-black uppercase truncate", children: S.fileName || S.referenceFileName || "Asset" }), C.jsxs("div", { className: "text-[8px] font-bold uppercase text-gray-500 truncate", children: [S.userName, " | ", new Date(S.createdAt).toLocaleString()] })] })] }, S.id)) })] })] })] }) : C.jsxs("main", { className: "max-w-screen-2xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children: [C.jsxs("div", { className: "space-y-4", children: [C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsx("h3", { className: "text-[10px] font-black uppercase", children: "Setting" }), C.jsxs("span", { className: "text-[9px] font-bold text-gray-500 uppercase", children: ["Role: ", s.role] })] }), C.jsxs("div", { className: "border border-black p-4 bg-white space-y-3", children: [C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Users" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Create / Manage" })] }), s.role === "admin" ? C.jsxs(C.Fragment, { children: [C.jsxs("div", { className: "space-y-2", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Create New User" }), s.email === Ds && C.jsxs("select", { value: Di, onChange: (S) => Qo(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]", children: [C.jsx("option", { value: "user", children: "user" }), C.jsx("option", { value: "admin", children: "admin" })] }), C.jsx("input", { type: "email", placeholder: "Email", value: j, onChange: (S) => ae(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]" }), C.jsx("input", { type: "text", placeholder: "Name", value: Y, onChange: (S) => ne(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]" }), C.jsx("input", { type: "password", placeholder: "Password", value: Te, onChange: (S) => re(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]" }), C.jsx("button", { onClick: ji, className: "border border-black px-4 py-2 text-[10px] font-black uppercase hover:bg-black hover:text-white", children: "Create User" })] }), C.jsxs("div", { className: "space-y-2", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Manage Users" }), C.jsxs("div", { className: "flex items-center gap-2", children: [ C.jsx("span", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Filter" }), C.jsxs("select", { value: userRoleFilter, onChange: (S) => setUserRoleFilter(S.target.value), className: "border border-black px-2 py-1 text-[10px]", children: [ C.jsx("option", { value: "", children: "select" }), C.jsx("option", { value: "all", children: "all" }), C.jsx("option", { value: "admin", children: "admin" }), C.jsx("option", { value: "user", children: "user" })] })] }), userRoleFilter === "" ? C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Select all, admin, or user to view the list." }) : C.jsx("div", { className: "space-y-3", children: o.filter((S) => userRoleFilter === "all" ? true : S.role === userRoleFilter).map((S) => C.jsxs("div", { className: "border border-black p-3 bg-gray-50", children: [ C.jsxs("div", { className: "flex justify-between text-[10px] font-bold uppercase", children: [C.jsxs("span", { children: [S.name, " (", S.role, ")"] }), C.jsx("span", { children: S.email })] }), s.email === Ds && S.email.toLowerCase() !== Ds && C.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [ C.jsx("span", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Role" }), C.jsxs("select", { value: S.role, onChange: (x) => za(S.email, x.target.value), className: "border border-black px-2 py-1 text-[10px]", children: [C.jsx("option", { value: "user", children: "user" }), C.jsx("option", { value: "admin", children: "admin" })] })] }), C.jsx("div", { className: "mt-2 flex gap-2", children: C.jsx("button", { onClick: () => Nl(S.email), className: "border border-black px-2 text-[9px] font-black uppercase " + (S.role === "admin" ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"), disabled: S.role === "admin", children: "Remove" }) })] }, S.id)) })] })] }) : C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "User management requires admin role." })] }), C.jsxs("div", { className: "border border-black p-4 bg-white space-y-3", children: [C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Technical Specs" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Defaults / Choices / Categories" })] }), s.role === "admin" ? C.jsxs(C.Fragment, { children: [C.jsxs("div", { className: "space-y-2", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Default Technical Specs" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Adjust specs in the Generation tab, then save here." }), C.jsxs("div", { className: "flex flex-wrap gap-2", children: [C.jsx("button", { onClick: async () => {
    Yn(null);
    try {
      const S = mr(Ge);
      await Ia(S), Li(S);
      const x = await Ki(Ge);
      Qi(x, true), Yn("Saved default technical specs (shared to all users/admins)."), setTimeout(() => Yn(null), 2500);
    } catch (S) {
      Yn((S == null ? void 0 : S.message) || "Failed to save default technical specs.");
    }
  }, className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Save Current As Default" }), C.jsx("button", { onClick: async () => {
    Yn(null);
    try {
      const S = mr(jl);
      await Ia(S), Li(S);
      const x = await Ki(jl);
      Qi(x, true), Yn("Reset defaults to factory (shared to all users/admins)."), setTimeout(() => Yn(null), 2500);
    } catch (S) {
      Yn((S == null ? void 0 : S.message) || "Failed to reset defaults.");
    }
  }, className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Reset Defaults" })] }), Co && C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-600", children: Co })] }), C.jsxs("div", { className: "space-y-2", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Technical Spec Choices" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Add/remove options (ex: Gender) and set the fallback default." }), C.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [C.jsx("select", { value: fn, onChange: (S) => Ao(S.target.value), className: "border border-black px-2 py-2 text-[10px] min-w-[220px]", children: mu.map((S) => C.jsx("option", { value: S, children: Xh[S] }, S)) }), C.jsx("select", { value: mi(fn), onChange: (S) => jn(fn, Hn(fn), S.target.value), className: "border border-black px-2 py-2 text-[10px] min-w-[220px]", title: "Default (fallback) value if an option is removed", children: Hn(fn).map((S) => C.jsxs("option", { value: S, children: ["Default: ", S] }, S)) })] }), C.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [C.jsx("input", { type: "text", placeholder: "Add option…", value: Gt, onChange: (S) => Ln(S.target.value), className: "flex-1 min-w-[240px] border border-black px-2 py-2 text-[10px]" }), C.jsx("button", { onClick: Kt, className: "border border-black px-2 py-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Add" }), C.jsx("button", { onClick: Bn, disabled: nl, className: `border border-black px-2 py-2 text-[9px] font-black uppercase ${nl ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Save" }), C.jsx("button", { onClick: hr, disabled: nl, className: `border border-black px-2 py-2 text-[9px] font-black uppercase ${nl ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Reset" })] }), C.jsx("div", { className: "border border-black bg-gray-50 p-2 max-h-48 overflow-y-auto", children: Hn(fn).map((S) => C.jsxs("div", { className: "flex items-center justify-between gap-2 py-1", children: [C.jsxs("div", { className: "text-[10px] font-bold uppercase text-gray-700 truncate", children: [S, S === mi(fn) ? " (default)" : ""] }), C.jsx("button", { onClick: () => Ja(S), disabled: Hn(fn).length <= 1, className: `border border-black px-2 py-0.5 text-[9px] font-black uppercase ${Hn(fn).length <= 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Remove" })] }, S)) }), Ot && C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-600", children: Ot })] }), C.jsxs("div", { className: "space-y-2", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Custom Categories" }), C.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: [C.jsx("input", { type: "text", placeholder: "Key (e.g. hairstyle_detail)", value: bo, onChange: (S) => ki(S.target.value), className: "border border-black px-2 py-2 text-[10px]" }), C.jsx("input", { type: "text", placeholder: "Label (e.g. Hairstyle Detail)", value: qs, onChange: (S) => fa(S.target.value), className: "border border-black px-2 py-2 text-[10px]" })] }), C.jsx("input", { type: "text", placeholder: "Options (comma-separated)", value: ol, onChange: (S) => Pi(S.target.value), className: "w-full border border-black px-2 py-2 text-[10px]" }), C.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [C.jsx("button", { onClick: hi, className: "border border-black px-2 py-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Add Category" }), C.jsx("button", { onClick: gr, disabled: No, className: `border border-black px-2 py-2 text-[9px] font-black uppercase ${No ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Save Categories" }), C.jsx("button", { onClick: Ka, disabled: No, className: `border border-black px-2 py-2 text-[9px] font-black uppercase ${No ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Clear All" })] }), Vs && C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-600", children: Vs }), kn.length === 0 ? C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "No custom categories yet." }) : C.jsx("div", { className: "border border-black bg-gray-50 p-2 max-h-56 overflow-y-auto", children: kn.map((S) => C.jsxs("div", { className: "border border-black bg-white p-2 mb-2", children: [C.jsxs("div", { className: "flex items-center justify-between gap-2", children: [C.jsxs("div", { className: "text-[10px] font-black uppercase text-gray-800 truncate", children: [S.label, " ", C.jsxs("span", { className: "text-gray-500", children: ["(", S.key, ")"] })] }), C.jsx("button", { onClick: () => Ya(S.key), className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Remove" })] }), C.jsxs("div", { className: "mt-1 text-[9px] font-bold uppercase text-gray-600", children: ["Options: ", (S.options || []).join(" | ")] })] }, S.key)) })] })] }) : C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Admin access required." })] }), C.jsxs("div", { className: "border border-black p-4 bg-white space-y-3", children: [C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "Model Database" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: s.role === "admin" ? "Admin Upload" : "Read Only" })] }), s.role === "admin" ? C.jsxs(C.Fragment, { children: [C.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: [C.jsx("input", { type: "text", placeholder: "Model name", value: modelDraftName, onChange: (S) => setModelDraftName(S.target.value), className: "border border-black px-2 py-2 text-[10px]" }), C.jsxs("select", { value: modelDraftGender, onChange: (S) => setModelDraftGender(S.target.value), className: "border border-black px-2 py-2 text-[10px]", children: [C.jsx("option", { value: "Female", children: "Female" }), C.jsx("option", { value: "Male", children: "Male" })] }), C.jsxs("select", { value: modelDraftAge, onChange: (S) => setModelDraftAge(S.target.value), className: "border border-black px-2 py-2 text-[10px] md:col-span-2", children: [C.jsx("option", { value: "Young Adult (20s)", children: "Young Adult (20s)" }), C.jsx("option", { value: "Adult (30s-40s)", children: "Adult (30s-40s)" }), C.jsx("option", { value: "Senior (60+)", children: "Senior (60+)" })] })] }), C.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [C.jsxs("label", { className: "border border-black px-3 py-2 text-[9px] font-black uppercase cursor-pointer hover:bg-black hover:text-white", children: ["Upload Model Image", C.jsx("input", { type: "file", className: "hidden", onChange: loadModelDraftFile })] }), C.jsx("button", { onClick: saveModelRecord, className: "border border-black px-3 py-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Save Model" })] }), modelDraftPreview && C.jsx("img", { src: modelDraftPreview, className: "w-24 h-24 object-cover border border-black bg-white" }), modelDraftStatus && C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-600", children: modelDraftStatus })] }) : C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Admins can upload the approved model database here." }), modelDb.length === 0 ? C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "No saved models yet." }) : C.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: modelDb.map((S) => C.jsxs("div", { className: "border border-black bg-gray-50 p-2 flex items-center gap-2", children: [C.jsx("img", { src: S.preview, className: "w-14 h-14 object-cover border border-black bg-white" }), C.jsxs("div", { className: "flex-1 min-w-0", children: [C.jsx("div", { className: "text-[9px] font-black uppercase truncate", children: S.name }), C.jsxs("div", { className: "text-[8px] font-bold uppercase text-gray-500 truncate", children: [S.gender, " | ", S.age] })] }), s.role === "admin" && C.jsx("button", { onClick: () => removeModelRecord(S.id), className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Remove" })] }, S.id)) })] }), C.jsxs("div", { className: "border border-black p-4 bg-white space-y-3", children: [C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsx("h4", { className: "text-[10px] font-black uppercase", children: "API Key" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Admin Only" })] }), s.role !== "admin" ? C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Admin access required." }) : C.jsxs("div", { className: "space-y-2", children: [C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: je.hasGeminiApiKey ? `Permanent key: stored on server (shared)${je.ownerEmail ? ` by ${je.ownerEmail}` : ""}${je.savedAt ? ` @ ${new Date(je.savedAt).toLocaleString()}` : ""}` : "Permanent key: not set." }), C.jsxs("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: ["Temporary key (this browser session only):", " ", (Q == null ? void 0 : Q.scope) === "temporary" && Q.value ? `set by ${Q.ownerEmail}` : "not set."] }), (Q == null ? void 0 : Q.scope) === "temporary" && Q.value ? C.jsxs("div", { className: "flex items-center gap-2", children: [C.jsx("input", { type: Ne ? "text" : "password", value: Q.value, readOnly: true, className: "flex-1 border border-black px-2 py-1 text-[10px] font-mono" }), C.jsx("button", { onClick: () => Me(!Ne), className: "border border-black px-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: Ne ? "Hide" : "Reveal" })] }) : null, C.jsxs("div", { className: "flex flex-wrap gap-2", children: [C.jsxs("select", { value: K, onChange: (S) => oe(S.target.value), className: "border border-black px-2 py-1 text-[10px]", children: [C.jsx("option", { value: "temporary", children: "Temporary (session)" }), C.jsx("option", { value: "permanent", children: "Permanent (shared)" })] }), C.jsx("input", { type: "password", placeholder: "Enter API key", value: Ve, onChange: (S) => I(S.target.value), className: "flex-1 min-w-[200px] border border-black px-2 py-1 text-[10px] font-mono" }), C.jsx("button", { onClick: Fa, className: "border border-black px-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Save" }), C.jsx("button", { onClick: pi, disabled: !je.hasGeminiApiKey && !((Q == null ? void 0 : Q.scope) === "temporary" && Q.value), className: `border border-black px-2 text-[9px] font-black uppercase ${je.hasGeminiApiKey || (Q == null ? void 0 : Q.scope) === "temporary" && Q.value ? "hover:bg-black hover:text-white" : "opacity-50 cursor-not-allowed"}`, children: "Remove Key" })] })] })] }), ve && C.jsx("div", { className: "text-[10px] font-bold uppercase text-gray-700", children: ve })] }), C.jsxs("div", { className: "border border-black p-6 bg-white space-y-4", children: [C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsx("h3", { className: "text-[10px] font-black uppercase", children: "Session Summary Log" }), C.jsxs("div", { className: "flex items-center gap-2", children: [C.jsxs("span", { className: "text-[9px] font-bold text-gray-500 uppercase", children: ["Current session: ", (St == null ? void 0 : St.generatedCount) || 0, " images | ", (St == null ? void 0 : St.editedCount) || 0, " edits | $", St ? (St.totalCost ?? 0).toFixed(3) : "0.000"] }), s.role === "admin" && C.jsx("button", { onClick: yr, className: "border border-black px-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Export CSV" })] })] }), s.role === "admin" && C.jsxs("div", { className: "border border-black bg-gray-50 p-3", children: [C.jsxs("div", { className: "flex items-center justify-between mb-2", children: [C.jsx("div", { className: "text-[10px] font-black uppercase", children: "Budget / Cost" }), C.jsx("button", { onClick: () => Yi().catch(() => {
  }), className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Refresh" })] }), C.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2", children: ["day", "week", "month"].map((S) => {
    const x = al[S] || 0, N = ni[S] || 0, R = N > 0 && x > N;
    return C.jsxs("div", { className: "border border-black bg-white p-2", children: [C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsx("button", { onClick: () => Hi(S), className: `text-[9px] font-black uppercase border border-black px-2 py-0.5 ${Oi === S ? "bg-black text-white" : "bg-white"}`, title: "Use this period for the User Management status badge", children: "Status" }), C.jsx("div", { className: "text-[9px] font-black uppercase", children: S }), C.jsxs("div", { className: `text-[9px] font-black uppercase ${R ? "text-red-600" : "text-gray-600"}`, children: ["$", N.toFixed(3), "/$", x.toFixed(3)] })] }), C.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [C.jsx("span", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Limit" }), C.jsx("input", { type: "number", min: 0, step: 1e-3, value: String(ni[S] ?? 0), onChange: (O) => da((W) => ({ ...W, [S]: Number(O.target.value || 0) })), className: "w-28 border border-black px-2 py-1 text-[10px] font-mono" })] })] }, S);
  }) }), C.jsxs("div", { className: "mt-3 border border-black bg-white p-3 space-y-2", children: [C.jsxs("div", { className: "flex flex-wrap items-center gap-2 justify-between", children: [C.jsx("div", { className: "text-[9px] font-black uppercase", children: "Monthly History" }), C.jsxs("select", { value: budgetHistoryMonth, onChange: (S) => setBudgetHistoryMonth(S.target.value), className: "border border-black px-2 py-1 text-[10px] min-w-[140px]", children: buildBudgetMonthOptions().map((S) => C.jsx("option", { value: S, children: S }, S)) })] }), C.jsxs("div", { className: "text-[9px] font-bold uppercase text-gray-700", children: ["Month ", budgetHistoryMonth, ": $", budgetHistoryCost.toFixed(3), budgetHistoryLoading ? " (loading)" : ""] }), C.jsx("div", { className: "text-[8px] font-bold uppercase text-gray-500", children: "Use the dropdown to review older monthly cost, even after a new month starts." })] }), C.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [C.jsx("button", { onClick: async () => {
    Gi(null), zs(true);
    try {
      await Da(ni), Gi("Saved budget limits."), Yi().catch(() => {
      }), setTimeout(() => Gi(null), 2500);
    } catch (S) {
      Gi((S == null ? void 0 : S.message) || "Failed to save limits.");
    } finally {
      zs(false);
    }
  }, disabled: pa, className: `border border-black px-3 py-1 text-[9px] font-black uppercase ${pa ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: pa ? "Saving…" : "Save Limits" }), ii && C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-700", children: ii })] })] }), C.jsxs("div", { className: "space-y-3 max-h-[600px] overflow-y-auto pr-2", children: [C.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [s.role === "admin" && C.jsx("button", { onClick: () => Ue("all"), className: `border border-black px-2 py-1 text-[9px] font-black uppercase ${ce === "all" ? "bg-black text-white" : "bg-white"}`, children: "All Users" }), C.jsx("button", { onClick: () => Ue("me"), className: `border border-black px-2 py-1 text-[9px] font-black uppercase ${ce === "me" ? "bg-black text-white" : "bg-white"}`, children: "Only Me" }), C.jsx("button", { onClick: () => ui(-1), className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", disabled: B, children: "Previous" }), C.jsx("div", { className: "text-[10px] font-black uppercase border border-black px-2 py-1", children: Z || "Select date" }), C.jsx("button", { onClick: () => ui(1), className: "border border-black px-2 py-1 text-[9px] font-black uppercase hover:bg-black hover:text-white", disabled: B, children: "Next" }), C.jsx("input", { type: "date", value: Z, onChange: (S) => {
    ge(S.target.value), te(false);
  }, className: "border border-black px-2 py-1 text-[10px]" }), s.role === "admin" && C.jsx("input", { type: "text", placeholder: "Filter by user (email or name)", value: Ee, onChange: (S) => Fe(S.target.value), className: "flex-1 min-w-[200px] border border-black px-2 py-1 text-[10px]" }), C.jsx("button", { onClick: () => {
    const S = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    ge(S), te(false);
  }, className: "border border-black px-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Today" }), C.jsx("button", { onClick: () => {
    te(true);
  }, className: "border border-black px-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Show All" }), C.jsx("button", { onClick: () => {
    te(false);
  }, className: "border border-black px-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Show Date" }), v && C.jsx("button", { onClick: () => $i().catch(() => {
  }), className: "border border-black px-2 text-[9px] font-black uppercase hover:bg-black hover:text-white", children: "Refresh" })] }), wa.length === 0 ? C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "No session logs yet." }) : wa.map(([S, x]) => C.jsxs("div", { className: "space-y-2", children: [C.jsx("div", { className: "text-[10px] font-black uppercase border-b border-black pb-1", children: S }), x.map((N) => C.jsxs("div", { className: "border border-black p-3 bg-gray-50", children: [C.jsxs("div", { className: "flex justify-between text-[10px] font-bold uppercase", children: [C.jsxs("span", { children: [N.userName, " (", N.role, ")"] }), C.jsx("span", { children: N.userEmail })] }), C.jsxs("div", { className: "mt-1 text-[9px] font-bold uppercase text-gray-600", children: ["Login: ", new Date(N.loginAt).toLocaleString(), " | Images: ", N.generatedCount, " | Edits: ", N.editedCount || 0, " | Cost: $", (N.totalCost ?? 0).toFixed(3)] }), N.logoutAt && C.jsxs("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: ["Logout: ", new Date(N.logoutAt).toLocaleString()] }), C.jsx("div", { className: "mt-2 text-[9px] font-mono whitespace-pre-wrap", children: N.events.map((R, O) => `${O + 1}. ${new Date(R.at).toLocaleTimeString()} - ${R.type}${R.details ? ` (${R.details})` : ""}`).join("\\n") })] }, N.id))] }, S))] })] })] }), Oe && C.jsx("div", { className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50", children: C.jsxs("div", { className: "bg-white border-2 border-black max-w-4xl w-full mx-6 p-4", children: [C.jsxs("div", { className: "flex justify-between items-center border-b border-black pb-2 mb-3", children: [C.jsx("div", { className: "text-[10px] font-black uppercase", children: "Review Image" }), C.jsx("button", { onClick: () => ga(null), className: "text-[10px] font-black uppercase border border-black px-2 py-1 hover:bg-black hover:text-white", children: "Close" })] }), C.jsxs("div", { className: "flex flex-col gap-3", children: [C.jsx("img", { src: Oe.imageUrl, className: "w-full max-h-[70vh] object-contain border border-black" }), C.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [C.jsx("input", { type: "text", placeholder: 'Edit prompt (default: "Model gazing to the opposite way")', value: Ft, onChange: (S) => fl(S.target.value), className: "flex-1 min-w-[240px] border border-black px-2 py-2 text-[10px]" }), C.jsxs("select", { value: editOutputSize, onChange: (S) => setEditOutputSize(S.target.value), className: "border border-black px-2 py-2 text-[10px] bg-white", title: "Output resolution; original aspect ratio is preserved.", children: [C.jsx("option", { value: "1K", children: "1K" }), C.jsx("option", { value: "2K", children: "2K" }), C.jsx("option", { value: "4K", children: "4K" })] }), C.jsx("button", { onClick: Va, disabled: dl, className: `text-[9px] font-black uppercase border border-black px-3 py-2 ${dl ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: dl ? "Editing…" : "Edit" })] }), si && C.jsx("div", { className: "text-[9px] font-bold uppercase text-red-700", children: si }), C.jsxs("div", { className: "flex items-center justify-between", children: [C.jsxs("div", { className: "text-[9px] font-bold uppercase", children: ["Seed: ", Oe.seedUsed] }), C.jsx("button", { onClick: () => {
    const S = Oe.mimeType || Zi(Oe.imageUrl) || "image/png", x = `review_${Oe.seedUsed}.${Nn(S)}`;
    Wn(Oe.imageUrl, Oe.fileName || x);
  }, className: "text-[9px] font-black uppercase border border-black px-3 py-1 hover:bg-black hover:text-white", children: "Download" })] })] })] }) }), et && C.jsx("div", { className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50", children: C.jsxs("div", { className: "bg-white border-2 border-black max-w-5xl w-full mx-6 p-4", children: [C.jsxs("div", { className: "flex justify-between items-center border-b border-black pb-2 mb-3", children: [C.jsxs("div", { className: "text-[10px] font-black uppercase", children: ["Shared Asset", Ye >= 0 ? ` (${Ye + 1}/${ot.length})` : ""] }), C.jsx("button", { onClick: () => Xn(null), className: "text-[10px] font-black uppercase border border-black px-2 py-1 hover:bg-black hover:text-white", children: "Close" })] }), C.jsxs("div", { className: "flex flex-col gap-3", children: [C.jsxs("div", { className: "flex items-center justify-between gap-2", children: [C.jsx("button", { onClick: () => {
    if (Ye <= 0) return;
    const S = Ye - 1, x = ot[S];
    x && (Qn(""), pn(null), Xn(x), Cn(S));
  }, disabled: Ye <= 0, className: `text-[9px] font-black uppercase border border-black px-3 py-1 ${Ye <= 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Prev" }), C.jsx("button", { onClick: () => {
    if (Ye < 0) return;
    const S = Ye + 1;
    if (S >= ot.length) return;
    const x = ot[S];
    x && (Qn(""), pn(null), Xn(x), Cn(S));
  }, disabled: Ye < 0 || Ye >= ot.length - 1, className: `text-[9px] font-black uppercase border border-black px-3 py-1 ${Ye < 0 || Ye >= ot.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: "Next" }), C.jsx("div", { className: "flex-1" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "Slide" })] }), et.kind === "image" ? C.jsxs("div", { className: "relative border border-black", children: [C.jsx("img", { src: et.url, className: "w-full max-h-[70vh] object-contain" }), C.jsx("button", { onClick: () => {
    if (Ye <= 0) return;
    const S = Ye - 1, x = ot[S];
    x && (Qn(""), pn(null), Xn(x), Cn(S));
  }, disabled: Ye <= 0, className: `absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-black bg-white text-black text-2xl font-black flex items-center justify-center ${Ye <= 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, title: "Previous", children: "<" }), C.jsx("button", { onClick: () => {
    if (Ye < 0) return;
    const S = Ye + 1;
    if (S >= ot.length) return;
    const x = ot[S];
    x && (Qn(""), pn(null), Xn(x), Cn(S));
  }, disabled: Ye < 0 || Ye >= ot.length - 1, className: `absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-black bg-white text-black text-2xl font-black flex items-center justify-center ${Ye < 0 || Ye >= ot.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, title: "Next", children: ">" })] }) : C.jsx("video", { src: et.url, className: "w-full max-h-[70vh] object-contain border border-black bg-black", controls: true }), et.kind === "image" && C.jsxs(C.Fragment, { children: [C.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [C.jsx("input", { type: "text", placeholder: 'Edit prompt (default: "Model gazing to the opposite way")', value: Ta, onChange: (S) => Qn(S.target.value), className: "flex-1 min-w-[240px] border border-black px-2 py-2 text-[10px]" }), C.jsxs("select", { value: editOutputSize, onChange: (S) => setEditOutputSize(S.target.value), className: "border border-black px-2 py-2 text-[10px] bg-white", title: "Output resolution; original aspect ratio is preserved.", children: [C.jsx("option", { value: "1K", children: "1K" }), C.jsx("option", { value: "2K", children: "2K" }), C.jsx("option", { value: "4K", children: "4K" })] }), C.jsx("button", { onClick: mn, disabled: hl, className: `text-[9px] font-black uppercase border border-black px-3 py-2 ${hl ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"}`, children: hl ? "Editing…" : "Edit" })] }), An && C.jsx("div", { className: "text-[9px] font-bold uppercase text-red-700", children: An })] }), C.jsxs("div", { className: "flex flex-wrap items-center gap-2 justify-between", children: [C.jsxs("div", { className: "text-[9px] font-bold uppercase text-gray-700", children: [et.userName, " (", et.userEmail, ") | Expires:", " ", new Date(et.expiresAt).toLocaleString()] }), C.jsxs("div", { className: "flex items-center gap-2", children: [C.jsx("button", { onClick: () => window.open(et.url, "_blank", "noopener,noreferrer"), className: "text-[9px] font-black uppercase border border-black px-3 py-1 hover:bg-black hover:text-white", children: "Open" }), C.jsx("button", { onClick: () => Wn(et.url, et.fileName || `shared_${new Date(et.createdAt).toLocaleDateString("en-CA")}.${Nn(et.mimeType)}`), className: "text-[9px] font-black uppercase border border-black px-3 py-1 hover:bg-black hover:text-white", children: "Download" })] })] })] })] }) }), ma && C.jsx("div", { className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50", children: C.jsxs("div", { className: "bg-white border-2 border-black max-w-lg w-full mx-6 p-4", children: [C.jsxs("div", { className: "flex justify-between items-center border-b border-black pb-2 mb-3", children: [C.jsx("div", { className: "text-[10px] font-black uppercase", children: "Account" }), C.jsx("button", { onClick: () => oi(false), className: "text-[10px] font-black uppercase border border-black px-2 py-1 hover:bg-black hover:text-white", children: "Close" })] }), C.jsxs("div", { className: "space-y-3", children: [C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-600", children: s.email }), C.jsxs("div", { className: "space-y-1", children: [C.jsx("label", { className: "text-[10px] font-bold uppercase text-gray-600", children: "Username" }), C.jsx("input", { type: "text", value: li, onChange: (S) => Bi(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]" })] }), C.jsxs("div", { className: "border border-black bg-gray-50 p-3 space-y-2", children: [C.jsx("div", { className: "text-[10px] font-black uppercase", children: "Change Password" }), C.jsx("input", { type: "password", placeholder: "Current password (required)", value: ai, onChange: (S) => ut(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]" }), C.jsx("input", { type: "password", placeholder: "New password", value: sl, onChange: (S) => rl(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]" }), C.jsx("div", { className: "text-[9px] font-bold uppercase text-gray-500", children: "To change password, you must enter the current password." })] }), C.jsxs("div", { className: "flex items-center gap-2", children: [C.jsx("button", { onClick: wl, className: "border border-black px-4 py-2 text-[10px] font-black uppercase hover:bg-black hover:text-white", children: "Save" }), $n && C.jsx("div", { className: "text-[10px] font-bold uppercase text-gray-700", children: $n })] })] })] }) })] }) : C.jsx("div", { className: "min-h-screen bg-white text-black flex items-center justify-center px-6", children: C.jsxs("div", { className: "w-full max-w-md border-2 border-black p-8 bg-white", children: [C.jsx("h1", { className: "text-xl font-black uppercase mb-2", children: "OWNDAYS AI Try-On" }), C.jsx("p", { className: "text-[10px] font-bold uppercase text-gray-500 mb-6", children: "Login required" }), C.jsxs("div", { className: "space-y-3", children: [C.jsx("input", { type: "email", placeholder: "Email", value: D, onChange: (S) => H(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]" }), C.jsx("input", { type: "password", placeholder: "Password", value: P, onChange: (S) => V(S.target.value), className: "w-full border border-black px-3 py-2 text-[12px]" }), ie && C.jsx("div", { className: "text-[10px] font-bold text-red-600 uppercase", children: ie }), C.jsx("button", { onClick: fr, className: "w-full border border-black py-2 text-[11px] font-black uppercase hover:bg-black hover:text-white", children: "Sign In" })] }), C.jsx("div", { className: "mt-6 text-[9px] text-gray-500 uppercase font-bold", children: "Authorized access only." })] }) });
}
const Fv = document.getElementById("root");
if (!Fv) throw new Error("Could not find root element to mount to");
const ew = vS.createRoot(Fv);
ew.render(C.jsx(cS.StrictMode, { children: C.jsx(jN, {}) }));
