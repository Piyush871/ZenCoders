(function () {
    function o(n) {
      var i = e;
      n && (e[n] || (e[n] = {}), (i = e[n]));
      if (!i.define || !i.define.packaged)
        (t.original = i.define), (i.define = t), (i.define.packaged = !0);
      if (!i.require || !i.require.packaged)
        (r.original = i.require), (i.require = r), (i.require.packaged = !0);
    }
    var ACE_NAMESPACE = "",
      e = (function () {
        return this;
      })();
    !e && typeof window != "undefined" && (e = window);
    if (!ACE_NAMESPACE && typeof requirejs != "undefined") return;
    var t = function (e, n, r) {
      if (typeof e != "string") {
        t.original
          ? t.original.apply(this, arguments)
          : (console.error("dropping module because define wasn't a string."),
            console.trace());
        return;
      }
      arguments.length == 2 && (r = n),
        t.modules[e] || ((t.payloads[e] = r), (t.modules[e] = null));
    };
    (t.modules = {}), (t.payloads = {});
    var n = function (e, t, n) {
        if (typeof t == "string") {
          var i = s(e, t);
          if (i != undefined) return n && n(), i;
        } else if (Object.prototype.toString.call(t) === "[object Array]") {
          var o = [];
          for (var u = 0, a = t.length; u < a; ++u) {
            var f = s(e, t[u]);
            if (f == undefined && r.original) return;
            o.push(f);
          }
          return (n && n.apply(null, o)) || !0;
        }
      },
      r = function (e, t) {
        var i = n("", e, t);
        return i == undefined && r.original
          ? r.original.apply(this, arguments)
          : i;
      },
      i = function (e, t) {
        if (t.indexOf("!") !== -1) {
          var n = t.split("!");
          return i(e, n[0]) + "!" + i(e, n[1]);
        }
        if (t.charAt(0) == ".") {
          var r = e.split("/").slice(0, -1).join("/");
          t = r + "/" + t;
          while (t.indexOf(".") !== -1 && s != t) {
            var s = t;
            t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
          }
        }
        return t;
      },
      s = function (e, r) {
        r = i(e, r);
        var s = t.modules[r];
        if (!s) {
          s = t.payloads[r];
          if (typeof s == "function") {
            var o = {},
              u = { id: r, uri: "", exports: o, packaged: !0 },
              a = function (e, t) {
                return n(r, e, t);
              },
              f = s(a, o, u);
            (o = f || u.exports), (t.modules[r] = o), delete t.payloads[r];
          }
          s = t.modules[r] = o || s;
        }
        return s;
      };
    o(ACE_NAMESPACE);
  })(),
    define(
      "ace/lib/es6-shim",
      ["require", "exports", "module"],
      function (e, t, n) {
        function r(e, t, n) {
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          });
        }
        String.prototype.startsWith ||
          r(String.prototype, "startsWith", function (e, t) {
            return (t = t || 0), this.lastIndexOf(e, t) === t;
          }),
          String.prototype.endsWith ||
            r(String.prototype, "endsWith", function (e, t) {
              var n = this;
              if (t === undefined || t > n.length) t = n.length;
              t -= e.length;
              var r = n.indexOf(e, t);
              return r !== -1 && r === t;
            }),
          String.prototype.repeat ||
            r(String.prototype, "repeat", function (e) {
              var t = "",
                n = this;
              while (e > 0) {
                e & 1 && (t += n);
                if ((e >>= 1)) n += n;
              }
              return t;
            }),
          String.prototype.includes ||
            r(String.prototype, "includes", function (e, t) {
              return this.indexOf(e, t) != -1;
            }),
          Object.assign ||
            (Object.assign = function (e) {
              if (e === undefined || e === null)
                throw new TypeError("Cannot convert undefined or null to object");
              var t = Object(e);
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                r !== undefined &&
                  r !== null &&
                  Object.keys(r).forEach(function (e) {
                    t[e] = r[e];
                  });
              }
              return t;
            }),
          Object.values ||
            (Object.values = function (e) {
              return Object.keys(e).map(function (t) {
                return e[t];
              });
            }),
          Array.prototype.find ||
            r(Array.prototype, "find", function (e) {
              var t = this.length,
                n = arguments[1];
              for (var r = 0; r < t; r++) {
                var i = this[r];
                if (e.call(n, i, r, this)) return i;
              }
            }),
          Array.prototype.findIndex ||
            r(Array.prototype, "findIndex", function (e) {
              var t = this.length,
                n = arguments[1];
              for (var r = 0; r < t; r++) {
                var i = this[r];
                if (e.call(n, i, r, this)) return r;
              }
            }),
          Array.prototype.includes ||
            r(Array.prototype, "includes", function (e, t) {
              return this.indexOf(e, t) != -1;
            }),
          Array.prototype.fill ||
            r(Array.prototype, "fill", function (e) {
              var t = this,
                n = t.length >>> 0,
                r = arguments[1],
                i = r >> 0,
                s = i < 0 ? Math.max(n + i, 0) : Math.min(i, n),
                o = arguments[2],
                u = o === undefined ? n : o >> 0,
                a = u < 0 ? Math.max(n + u, 0) : Math.min(u, n);
              while (s < a) (t[s] = e), s++;
              return t;
            }),
          Array.of ||
            r(Array, "of", function () {
              return Array.prototype.slice.call(arguments);
            });
      }
    ),
    define(
      "ace/lib/fixoldbrowsers",
      ["require", "exports", "module", "ace/lib/es6-shim"],
      function (e, t, n) {
        "use strict";
        e("./es6-shim");
      }
    ),
    define("ace/lib/lang", ["require", "exports", "module"], function (e, t, n) {
      "use strict";
      (t.last = function (e) {
        return e[e.length - 1];
      }),
        (t.stringReverse = function (e) {
          return e.split("").reverse().join("");
        }),
        (t.stringRepeat = function (e, t) {
          var n = "";
          while (t > 0) {
            t & 1 && (n += e);
            if ((t >>= 1)) e += e;
          }
          return n;
        });
      var r = /^\s\s*/,
        i = /\s\s*$/;
      (t.stringTrimLeft = function (e) {
        return e.replace(r, "");
      }),
        (t.stringTrimRight = function (e) {
          return e.replace(i, "");
        }),
        (t.copyObject = function (e) {
          var t = {};
          for (var n in e) t[n] = e[n];
          return t;
        }),
        (t.copyArray = function (e) {
          var t = [];
          for (var n = 0, r = e.length; n < r; n++)
            e[n] && typeof e[n] == "object"
              ? (t[n] = this.copyObject(e[n]))
              : (t[n] = e[n]);
          return t;
        }),
        (t.deepCopy = function s(e) {
          if (typeof e != "object" || !e) return e;
          var t;
          if (Array.isArray(e)) {
            t = [];
            for (var n = 0; n < e.length; n++) t[n] = s(e[n]);
            return t;
          }
          if (Object.prototype.toString.call(e) !== "[object Object]") return e;
          t = {};
          for (var n in e) t[n] = s(e[n]);
          return t;
        }),
        (t.arrayToMap = function (e) {
          var t = {};
          for (var n = 0; n < e.length; n++) t[e[n]] = 1;
          return t;
        }),
        (t.createMap = function (e) {
          var t = Object.create(null);
          for (var n in e) t[n] = e[n];
          return t;
        }),
        (t.arrayRemove = function (e, t) {
          for (var n = 0; n <= e.length; n++) t === e[n] && e.splice(n, 1);
        }),
        (t.escapeRegExp = function (e) {
          return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
        }),
        (t.escapeHTML = function (e) {
          return ("" + e)
            .replace(/&/g, "&#38;")
            .replace(/"/g, "&#34;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&#60;");
        }),
        (t.getMatchOffsets = function (e, t) {
          var n = [];
          return (
            e.replace(t, function (e) {
              n.push({
                offset: arguments[arguments.length - 2],
                length: e.length,
              });
            }),
            n
          );
        }),
        (t.deferredCall = function (e) {
          var t = null,
            n = function () {
              (t = null), e();
            },
            r = function (e) {
              return r.cancel(), (t = setTimeout(n, e || 0)), r;
            };
          return (
            (r.schedule = r),
            (r.call = function () {
              return this.cancel(), e(), r;
            }),
            (r.cancel = function () {
              return clearTimeout(t), (t = null), r;
            }),
            (r.isPending = function () {
              return t;
            }),
            r
          );
        }),
        (t.delayedCall = function (e, t) {
          var n = null,
            r = function () {
              (n = null), e();
            },
            i = function (e) {
              n == null && (n = setTimeout(r, e || t));
            };
          return (
            (i.delay = function (e) {
              n && clearTimeout(n), (n = setTimeout(r, e || t));
            }),
            (i.schedule = i),
            (i.call = function () {
              this.cancel(), e();
            }),
            (i.cancel = function () {
              n && clearTimeout(n), (n = null);
            }),
            (i.isPending = function () {
              return n;
            }),
            i
          );
        });
    }),
    define(
      "ace/lib/useragent",
      ["require", "exports", "module"],
      function (e, t, n) {
        "use strict";
        (t.OS = { LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS" }),
          (t.getOS = function () {
            return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS;
          });
        var r = typeof navigator == "object" ? navigator : {},
          i = (/mac|win|linux/i.exec(r.platform) || ["other"])[0].toLowerCase(),
          s = r.userAgent || "",
          o = r.appName || "";
        (t.isWin = i == "win"),
          (t.isMac = i == "mac"),
          (t.isLinux = i == "linux"),
          (t.isIE =
            o == "Microsoft Internet Explorer" || o.indexOf("MSAppHost") >= 0
              ? parseFloat(
                  (s.match(
                    /(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/
                  ) || [])[1]
                )
              : parseFloat(
                  (s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) ||
                    [])[1]
                )),
          (t.isOldIE = t.isIE && t.isIE < 9),
          (t.isGecko = t.isMozilla = s.match(/ Gecko\/\d+/)),
          (t.isOpera =
            typeof opera == "object" &&
            Object.prototype.toString.call(window.opera) == "[object Opera]"),
          (t.isWebKit = parseFloat(s.split("WebKit/")[1]) || undefined),
          (t.isChrome = parseFloat(s.split(" Chrome/")[1]) || undefined),
          (t.isEdge = parseFloat(s.split(" Edge/")[1]) || undefined),
          (t.isAIR = s.indexOf("AdobeAIR") >= 0),
          (t.isAndroid = s.indexOf("Android") >= 0),
          (t.isChromeOS = s.indexOf(" CrOS ") >= 0),
          (t.isIOS = /iPad|iPhone|iPod/.test(s) && !window.MSStream),
          t.isIOS && (t.isMac = !0),
          (t.isMobile = t.isIOS || t.isAndroid);
      }
    ),
    define(
      "ace/lib/dom",
      ["require", "exports", "module", "ace/lib/useragent"],
      function (e, t, n) {
        "use strict";
        function u() {
          var e = o;
          (o = null),
            e &&
              e.forEach(function (e) {
                a(e[0], e[1]);
              });
        }
        function a(e, n, r) {
          if (typeof document == "undefined") return;
          if (o)
            if (r) u();
            else if (r === !1) return o.push([e, n]);
          if (s) return;
          var i = r;
          if (!r || !r.getRootNode) i = document;
          else {
            i = r.getRootNode();
            if (!i || i == r) i = document;
          }
          var a = i.ownerDocument || i;
          if (n && t.hasCssString(n, i)) return null;
          n && (e += "\n/*# sourceURL=ace/css/" + n + " */");
          var f = t.createElement("style");
          f.appendChild(a.createTextNode(e)),
            n && (f.id = n),
            i == a && (i = t.getDocumentHead(a)),
            i.insertBefore(f, i.firstChild);
        }
        var r = e("./useragent"),
          i = "http://www.w3.org/1999/xhtml";
        (t.buildDom = function l(e, t, n) {
          if (typeof e == "string" && e) {
            var r = document.createTextNode(e);
            return t && t.appendChild(r), r;
          }
          if (!Array.isArray(e))
            return e && e.appendChild && t && t.appendChild(e), e;
          if (typeof e[0] != "string" || !e[0]) {
            var i = [];
            for (var s = 0; s < e.length; s++) {
              var o = l(e[s], t, n);
              o && i.push(o);
            }
            return i;
          }
          var u = document.createElement(e[0]),
            a = e[1],
            f = 1;
          a && typeof a == "object" && !Array.isArray(a) && (f = 2);
          for (var s = f; s < e.length; s++) l(e[s], u, n);
          return (
            f == 2 &&
              Object.keys(a).forEach(function (e) {
                var t = a[e];
                e === "class"
                  ? (u.className = Array.isArray(t) ? t.join(" ") : t)
                  : typeof t == "function" || e == "value" || e[0] == "$"
                  ? (u[e] = t)
                  : e === "ref"
                  ? n && (n[t] = u)
                  : e === "style"
                  ? typeof t == "string" && (u.style.cssText = t)
                  : t != null && u.setAttribute(e, t);
              }),
            t && t.appendChild(u),
            u
          );
        }),
          (t.getDocumentHead = function (e) {
            return (
              e || (e = document),
              e.head || e.getElementsByTagName("head")[0] || e.documentElement
            );
          }),
          (t.createElement = function (e, t) {
            return document.createElementNS
              ? document.createElementNS(t || i, e)
              : document.createElement(e);
          }),
          (t.removeChildren = function (e) {
            e.innerHTML = "";
          }),
          (t.createTextNode = function (e, t) {
            var n = t ? t.ownerDocument : document;
            return n.createTextNode(e);
          }),
          (t.createFragment = function (e) {
            var t = e ? e.ownerDocument : document;
            return t.createDocumentFragment();
          }),
          (t.hasCssClass = function (e, t) {
            var n = (e.className + "").split(/\s+/g);
            return n.indexOf(t) !== -1;
          }),
          (t.addCssClass = function (e, n) {
            t.hasCssClass(e, n) || (e.className += " " + n);
          }),
          (t.removeCssClass = function (e, t) {
            var n = e.className.split(/\s+/g);
            for (;;) {
              var r = n.indexOf(t);
              if (r == -1) break;
              n.splice(r, 1);
            }
            e.className = n.join(" ");
          }),
          (t.toggleCssClass = function (e, t) {
            var n = e.className.split(/\s+/g),
              r = !0;
            for (;;) {
              var i = n.indexOf(t);
              if (i == -1) break;
              (r = !1), n.splice(i, 1);
            }
            return r && n.push(t), (e.className = n.join(" ")), r;
          }),
          (t.setCssClass = function (e, n, r) {
            r ? t.addCssClass(e, n) : t.removeCssClass(e, n);
          }),
          (t.hasCssString = function (e, t) {
            var n = 0,
              r;
            t = t || document;
            if ((r = t.querySelectorAll("style")))
              while (n < r.length) if (r[n++].id === e) return !0;
          }),
          (t.removeElementById = function (e, t) {
            (t = t || document),
              t.getElementById(e) && t.getElementById(e).remove();
          });
        var s,
          o = [];
        (t.useStrictCSP = function (e) {
          (s = e), e == 0 ? u() : o || (o = []);
        }),
          (t.importCssString = a),
          (t.importCssStylsheet = function (e, n) {
            t.buildDom(
              ["link", { rel: "stylesheet", href: e }],
              t.getDocumentHead(n)
            );
          }),
          (t.scrollbarWidth = function (e) {
            var n = t.createElement("ace_inner");
            (n.style.width = "100%"),
              (n.style.minWidth = "0px"),
              (n.style.height = "200px"),
              (n.style.display = "block");
            var r = t.createElement("ace_outer"),
              i = r.style;
            (i.position = "absolute"),
              (i.left = "-10000px"),
              (i.overflow = "hidden"),
              (i.width = "200px"),
              (i.minWidth = "0px"),
              (i.height = "150px"),
              (i.display = "block"),
              r.appendChild(n);
            var s =
              (e && e.documentElement) || (document && document.documentElement);
            if (!s) return 0;
            s.appendChild(r);
            var o = n.offsetWidth;
            i.overflow = "scroll";
            var u = n.offsetWidth;
            return o === u && (u = r.clientWidth), s.removeChild(r), o - u;
          }),
          (t.computedStyle = function (e, t) {
            return window.getComputedStyle(e, "") || {};
          }),
          (t.setStyle = function (e, t, n) {
            e[t] !== n && (e[t] = n);
          }),
          (t.HAS_CSS_ANIMATION = !1),
          (t.HAS_CSS_TRANSFORMS = !1),
          (t.HI_DPI = r.isWin
            ? typeof window != "undefined" && window.devicePixelRatio >= 1.5
            : !0),
          r.isChromeOS && (t.HI_DPI = !1);
        if (typeof document != "undefined") {
          var f = document.createElement("div");
          t.HI_DPI &&
            f.style.transform !== undefined &&
            (t.HAS_CSS_TRANSFORMS = !0),
            !r.isEdge &&
              typeof f.style.animationName != "undefined" &&
              (t.HAS_CSS_ANIMATION = !0),
            (f = null);
        }
        t.HAS_CSS_TRANSFORMS
          ? (t.translate = function (e, t, n) {
              e.style.transform =
                "translate(" + Math.round(t) + "px, " + Math.round(n) + "px)";
            })
          : (t.translate = function (e, t, n) {
              (e.style.top = Math.round(n) + "px"),
                (e.style.left = Math.round(t) + "px");
            });
      }
    ),
    define(
      "ace/lib/net",
      ["require", "exports", "module", "ace/lib/dom"],
      function (e, t, n) {
        "use strict";
        var r = e("./dom");
        (t.get = function (e, t) {
          var n = new XMLHttpRequest();
          n.open("GET", e, !0),
            (n.onreadystatechange = function () {
              n.readyState === 4 && t(n.responseText);
            }),
            n.send(null);
        }),
          (t.loadScript = function (e, t) {
            var n = r.getDocumentHead(),
              i = document.createElement("script");
            (i.src = e),
              n.appendChild(i),
              (i.onload = i.onreadystatechange =
                function (e, n) {
                  if (
                    n ||
                    !i.readyState ||
                    i.readyState == "loaded" ||
                    i.readyState == "complete"
                  )
                    (i = i.onload = i.onreadystatechange = null), n || t();
                });
          }),
          (t.qualifyURL = function (e) {
            var t = document.createElement("a");
            return (t.href = e), t.href;
          });
      }
    ),
    define("ace/lib/oop", ["require", "exports", "module"], function (e, t, n) {
      "use strict";
      (t.inherits = function (e, t) {
        (e.super_ = t),
          (e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          }));
      }),
        (t.mixin = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }),
        (t.implement = function (e, n) {
          t.mixin(e, n);
        });
    }),
    define(
      "ace/lib/event_emitter",
      ["require", "exports", "module"],
      function (e, t, n) {
        "use strict";
        var r = {},
          i = function () {
            this.propagationStopped = !0;
          },
          s = function () {
            this.defaultPrevented = !0;
          };
        (r._emit = r._dispatchEvent =
          function (e, t) {
            this._eventRegistry || (this._eventRegistry = {}),
              this._defaultHandlers || (this._defaultHandlers = {});
            var n = this._eventRegistry[e] || [],
              r = this._defaultHandlers[e];
            if (!n.length && !r) return;
            if (typeof t != "object" || !t) t = {};
            t.type || (t.type = e),
              t.stopPropagation || (t.stopPropagation = i),
              t.preventDefault || (t.preventDefault = s),
              (n = n.slice());
            for (var o = 0; o < n.length; o++) {
              n[o](t, this);
              if (t.propagationStopped) break;
            }
            if (r && !t.defaultPrevented) return r(t, this);
          }),
          (r._signal = function (e, t) {
            var n = (this._eventRegistry || {})[e];
            if (!n) return;
            n = n.slice();
            for (var r = 0; r < n.length; r++) n[r](t, this);
          }),
          (r.once = function (e, t) {
            var n = this;
            this.on(e, function r() {
              n.off(e, r), t.apply(null, arguments);
            });
            if (!t)
              return new Promise(function (e) {
                t = e;
              });
          }),
          (r.setDefaultHandler = function (e, t) {
            var n = this._defaultHandlers;
            n || (n = this._defaultHandlers = { _disabled_: {} });
            if (n[e]) {
              var r = n[e],
                i = n._disabled_[e];
              i || (n._disabled_[e] = i = []), i.push(r);
              var s = i.indexOf(t);
              s != -1 && i.splice(s, 1);
            }
            n[e] = t;
          }),
          (r.removeDefaultHandler = function (e, t) {
            var n = this._defaultHandlers;
            if (!n) return;
            var r = n._disabled_[e];
            if (n[e] == t) r && this.setDefaultHandler(e, r.pop());
            else if (r) {
              var i = r.indexOf(t);
              i != -1 && r.splice(i, 1);
            }
          }),
          (r.on = r.addEventListener =
            function (e, t, n) {
              this._eventRegistry = this._eventRegistry || {};
              var r = this._eventRegistry[e];
              return (
                r || (r = this._eventRegistry[e] = []),
                r.indexOf(t) == -1 && r[n ? "unshift" : "push"](t),
                t
              );
            }),
          (r.off =
            r.removeListener =
            r.removeEventListener =
              function (e, t) {
                this._eventRegistry = this._eventRegistry || {};
                var n = this._eventRegistry[e];
                if (!n) return;
                var r = n.indexOf(t);
                r !== -1 && n.splice(r, 1);
              }),
          (r.removeAllListeners = function (e) {
            e || (this._eventRegistry = this._defaultHandlers = undefined),
              this._eventRegistry && (this._eventRegistry[e] = undefined),
              this._defaultHandlers && (this._defaultHandlers[e] = undefined);
          }),
          (t.EventEmitter = r);
      }
    ),
    define(
      "ace/lib/app_config",
      ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"],
      function (e, t, n) {
        "no use strict";
        function o(e) {
          typeof console != "undefined" &&
            console.warn &&
            console.warn.apply(console, arguments);
        }
        function u(e, t) {
          var n = new Error(e);
          (n.data = t),
            typeof console == "object" && console.error && console.error(n),
            setTimeout(function () {
              throw n;
            });
        }
        var r = e("./oop"),
          i = e("./event_emitter").EventEmitter,
          s = {
            setOptions: function (e) {
              Object.keys(e).forEach(function (t) {
                this.setOption(t, e[t]);
              }, this);
            },
            getOptions: function (e) {
              var t = {};
              if (!e) {
                var n = this.$options;
                e = Object.keys(n).filter(function (e) {
                  return !n[e].hidden;
                });
              } else Array.isArray(e) || ((t = e), (e = Object.keys(t)));
              return (
                e.forEach(function (e) {
                  t[e] = this.getOption(e);
                }, this),
                t
              );
            },
            setOption: function (e, t) {
              if (this["$" + e] === t) return;
              var n = this.$options[e];
              if (!n) return o('misspelled option "' + e + '"');
              if (n.forwardTo)
                return this[n.forwardTo] && this[n.forwardTo].setOption(e, t);
              n.handlesSet || (this["$" + e] = t),
                n && n.set && n.set.call(this, t);
            },
            getOption: function (e) {
              var t = this.$options[e];
              return t
                ? t.forwardTo
                  ? this[t.forwardTo] && this[t.forwardTo].getOption(e)
                  : t && t.get
                  ? t.get.call(this)
                  : this["$" + e]
                : o('misspelled option "' + e + '"');
            },
          },
          a,
          f = (function () {
            function e() {
              this.$defaultOptions = {};
            }
            return (
              (e.prototype.defineOptions = function (e, t, n) {
                return (
                  e.$options || (this.$defaultOptions[t] = e.$options = {}),
                  Object.keys(n).forEach(function (t) {
                    var r = n[t];
                    typeof r == "string" && (r = { forwardTo: r }),
                      r.name || (r.name = t),
                      (e.$options[r.name] = r),
                      "initialValue" in r && (e["$" + r.name] = r.initialValue);
                  }),
                  r.implement(e, s),
                  this
                );
              }),
              (e.prototype.resetOptions = function (e) {
                Object.keys(e.$options).forEach(function (t) {
                  var n = e.$options[t];
                  "value" in n && e.setOption(t, n.value);
                });
              }),
              (e.prototype.setDefaultValue = function (e, t, n) {
                if (!e) {
                  for (e in this.$defaultOptions)
                    if (this.$defaultOptions[e][t]) break;
                  if (!this.$defaultOptions[e][t]) return !1;
                }
                var r = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
                r[t] &&
                  (r.forwardTo
                    ? this.setDefaultValue(r.forwardTo, t, n)
                    : (r[t].value = n));
              }),
              (e.prototype.setDefaultValues = function (e, t) {
                Object.keys(t).forEach(function (n) {
                  this.setDefaultValue(e, n, t[n]);
                }, this);
              }),
              (e.prototype.setMessages = function (e) {
                a = e;
              }),
              (e.prototype.nls = function (e, t) {
                a &&
                  !a[e] &&
                  o(
                    "No message found for '" +
                      e +
                      "' in the provided messages, falling back to default English message."
                  );
                var n = (a && a[e]) || e;
                return (
                  t &&
                    (n = n.replace(/\$(\$|[\d]+)/g, function (e, n) {
                      return n == "$" ? "$" : t[n];
                    })),
                  n
                );
              }),
              e
            );
          })();
        (f.prototype.warn = o),
          (f.prototype.reportError = u),
          r.implement(f.prototype, i),
          (t.AppConfig = f);
      }
    ),
    define(
      "ace/theme/textmate-css",
      ["require", "exports", "module"],
      function (e, t, n) {
        n.exports =
          '.ace-tm .ace_gutter {\n  background: #f0f0f0;\n  color: #333;\n}\n\n.ace-tm .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-tm .ace_fold {\n    background-color: #6B72E6;\n}\n\n.ace-tm {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-tm .ace_cursor {\n  color: black;\n}\n        \n.ace-tm .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-tm .ace_storage,\n.ace-tm .ace_keyword {\n  color: blue;\n}\n\n.ace-tm .ace_constant {\n  color: rgb(197, 6, 11);\n}\n\n.ace-tm .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-tm .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-tm .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_invalid {\n  background-color: rgba(255, 0, 0, 0.1);\n  color: red;\n}\n\n.ace-tm .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-tm .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_support.ace_type,\n.ace-tm .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-tm .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-tm .ace_string {\n  color: rgb(3, 106, 7);\n}\n\n.ace-tm .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-tm .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-tm .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-tm .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-tm .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-tm .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-tm .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n\n.ace-tm .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-tm .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-tm .ace_meta.ace_tag {\n  color:rgb(0, 22, 142);\n}\n\n.ace-tm .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-tm .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n.ace-tm.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n.ace-tm .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-tm .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-tm .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-tm .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-tm .ace_gutter-active-line {\n    background-color : #dcdcdc;\n}\n\n.ace-tm .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-tm .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-tm .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n';
      }
    ),
    define(
      "ace/theme/textmate",
      ["require", "exports", "module", "ace/theme/textmate-css", "ace/lib/dom"],
      function (e, t, n) {
        "use strict";
        (t.isDark = !1),
          (t.cssClass = "ace-tm"),
          (t.cssText = e("./textmate-css")),
          (t.$id = "ace/theme/textmate");
        var r = e("../lib/dom");
        r.importCssString(t.cssText, t.cssClass, !1);
      }
    ),
    define(
      "ace/config",
      [
        "require",
        "exports",
        "module",
        "ace/lib/lang",
        "ace/lib/net",
        "ace/lib/dom",
        "ace/lib/app_config",
        "ace/theme/textmate",
      ],
      function (e, t, n) {
        "no use strict";
        var r = e("./lib/lang"),
          i = e("./lib/net"),
          s = e("./lib/dom"),
          o = e("./lib/app_config").AppConfig;
        n.exports = t = new o();
        var u = {
          packaged: !1,
          workerPath: null,
          modePath: null,
          themePath: null,
          basePath: "",
          suffix: ".js",
          $moduleUrls: {},
          loadWorkerFromBlob: !0,
          sharedPopups: !1,
          useStrictCSP: null,
        };
        (t.get = function (e) {
          if (!u.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
          return u[e];
        }),
          (t.set = function (e, t) {
            if (u.hasOwnProperty(e)) u[e] = t;
            else if (this.setDefaultValue("", e, t) == 0)
              throw new Error("Unknown config key: " + e);
            e == "useStrictCSP" && s.useStrictCSP(t);
          }),
          (t.all = function () {
            return r.copyObject(u);
          }),
          (t.$modes = {}),
          (t.moduleUrl = function (e, t) {
            if (u.$moduleUrls[e]) return u.$moduleUrls[e];
            var n = e.split("/");
            t = t || n[n.length - 2] || "";
            var r = t == "snippets" ? "/" : "-",
              i = n[n.length - 1];
            if (t == "worker" && r == "-") {
              var s = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
              i = i.replace(s, "");
            }
            (!i || i == t) && n.length > 1 && (i = n[n.length - 2]);
            var o = u[t + "Path"];
            return (
              o == null ? (o = u.basePath) : r == "/" && (t = r = ""),
              o && o.slice(-1) != "/" && (o += "/"),
              o + t + r + i + this.get("suffix")
            );
          }),
          (t.setModuleUrl = function (e, t) {
            return (u.$moduleUrls[e] = t);
          });
        var a = function (t, n) {
            if (t === "ace/theme/textmate" || t === "./theme/textmate")
              return n(null, e("./theme/textmate"));
            if (f) return f(t, n);
            console.error("loader is not configured");
          },
          f;
        (t.setLoader = function (e) {
          f = e;
        }),
          (t.dynamicModules = Object.create(null)),
          (t.$loading = {}),
          (t.$loaded = {}),
          (t.loadModule = function (e, n) {
            var r, s;
            Array.isArray(e) && ((s = e[0]), (e = e[1]));
            var o = function (r) {
              if (r && !t.$loading[e]) return n && n(r);
              t.$loading[e] || (t.$loading[e] = []), t.$loading[e].push(n);
              if (t.$loading[e].length > 1) return;
              var o = function () {
                a(e, function (n, r) {
                  r && (t.$loaded[e] = r),
                    t._emit("load.module", { name: e, module: r });
                  var i = t.$loading[e];
                  (t.$loading[e] = null),
                    i.forEach(function (e) {
                      e && e(r);
                    });
                });
              };
              if (!t.get("packaged")) return o();
              i.loadScript(t.moduleUrl(e, s), o), l();
            };
            if (t.dynamicModules[e])
              t.dynamicModules[e]().then(function (e) {
                e.default ? o(e.default) : o(e);
              });
            else {
              try {
                r = this.$require(e);
              } catch (u) {}
              o(r || t.$loaded[e]);
            }
          }),
          (t.$require = function (e) {
            if (typeof n.require == "function") {
              var t = "require";
              return n[t](e);
            }
          }),
          (t.setModuleLoader = function (e, n) {
            t.dynamicModules[e] = n;
          });
        var l = function () {
          !u.basePath &&
            !u.workerPath &&
            !u.modePath &&
            !u.themePath &&
            !Object.keys(u.$moduleUrls).length &&
            (console.error(
              "Unable to infer path to ace from script src,",
              "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes",
              "or with webpack use ace/webpack-resolver"
            ),
            (l = function () {}));
        };
        t.version = "1.23.4";
      }
    ),
    define(
      "ace/loader_build",
      ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/config"],
      function (e, t, n) {
        "use strict";
        function s(t) {
          if (!i || !i.document) return;
          r.set(
            "packaged",
            t || e.packaged || n.packaged || (i.define && define.packaged)
          );
          var s = {},
            u = "",
            a = document.currentScript || document._currentScript,
            f = (a && a.ownerDocument) || document;
          a &&
            a.src &&
            (u = a.src.split(/[?#]/)[0].split("/").slice(0, -1).join("/") || "");
          var l = f.getElementsByTagName("script");
          for (var c = 0; c < l.length; c++) {
            var h = l[c],
              p = h.src || h.getAttribute("src");
            if (!p) continue;
            var d = h.attributes;
            for (var v = 0, m = d.length; v < m; v++) {
              var g = d[v];
              g.name.indexOf("data-ace-") === 0 &&
                (s[o(g.name.replace(/^data-ace-/, ""))] = g.value);
            }
            var y = p.match(/^(.*)\/ace([\-.]\w+)?\.js(\?|$)/);
            y && (u = y[1]);
          }
          u && ((s.base = s.base || u), (s.packaged = !0)),
            (s.basePath = s.base),
            (s.workerPath = s.workerPath || s.base),
            (s.modePath = s.modePath || s.base),
            (s.themePath = s.themePath || s.base),
            delete s.base;
          for (var b in s) typeof s[b] != "undefined" && r.set(b, s[b]);
        }
        function o(e) {
          return e.replace(/-(.)/g, function (e, t) {
            return t.toUpperCase();
          });
        }
        e("./lib/fixoldbrowsers");
        var r = e("./config");
        r.setLoader(function (t, n) {
          e([t], function (e) {
            n(null, e);
          });
        });
        var i = (function () {
          return this || (typeof window != "undefined" && window);
        })();
        n.exports = function (t) {
          (r.init = s),
            (r.$require = e),
            (t.require = e),
            typeof define == "function" && (t.define = define);
        };
      }
    ),
    define("ace/range", ["require", "exports", "module"], function (e, t, n) {
      "use strict";
      var r = function (e, t) {
          return e.row - t.row || e.column - t.column;
        },
        i = (function () {
          function e(e, t, n, r) {
            (this.start = { row: e, column: t }),
              (this.end = { row: n, column: r });
          }
          return (
            (e.prototype.isEqual = function (e) {
              return (
                this.start.row === e.start.row &&
                this.end.row === e.end.row &&
                this.start.column === e.start.column &&
                this.end.column === e.end.column
              );
            }),
            (e.prototype.toString = function () {
              return (
                "Range: [" +
                this.start.row +
                "/" +
                this.start.column +
                "] -> [" +
                this.end.row +
                "/" +
                this.end.column +
                "]"
              );
            }),
            (e.prototype.contains = function (e, t) {
              return this.compare(e, t) == 0;
            }),
            (e.prototype.compareRange = function (e) {
              var t,
                n = e.end,
                r = e.start;
              return (
                (t = this.compare(n.row, n.column)),
                t == 1
                  ? ((t = this.compare(r.row, r.column)),
                    t == 1 ? 2 : t == 0 ? 1 : 0)
                  : t == -1
                  ? -2
                  : ((t = this.compare(r.row, r.column)),
                    t == -1 ? -1 : t == 1 ? 42 : 0)
              );
            }),
            (e.prototype.comparePoint = function (e) {
              return this.compare(e.row, e.column);
            }),
            (e.prototype.containsRange = function (e) {
              return (
                this.comparePoint(e.start) == 0 && this.comparePoint(e.end) == 0
              );
            }),
            (e.prototype.intersects = function (e) {
              var t = this.compareRange(e);
              return t == -1 || t == 0 || t == 1;
            }),
            (e.prototype.isEnd = function (e, t) {
              return this.end.row == e && this.end.column == t;
            }),
            (e.prototype.isStart = function (e, t) {
              return this.start.row == e && this.start.column == t;
            }),
            (e.prototype.setStart = function (e, t) {
              typeof e == "object"
                ? ((this.start.column = e.column), (this.start.row = e.row))
                : ((this.start.row = e), (this.start.column = t));
            }),
            (e.prototype.setEnd = function (e, t) {
              typeof e == "object"
                ? ((this.end.column = e.column), (this.end.row = e.row))
                : ((this.end.row = e), (this.end.column = t));
            }),
            (e.prototype.inside = function (e, t) {
              return this.compare(e, t) == 0
                ? this.isEnd(e, t) || this.isStart(e, t)
                  ? !1
                  : !0
                : !1;
            }),
            (e.prototype.insideStart = function (e, t) {
              return this.compare(e, t) == 0 ? (this.isEnd(e, t) ? !1 : !0) : !1;
            }),
            (e.prototype.insideEnd = function (e, t) {
              return this.compare(e, t) == 0
                ? this.isStart(e, t)
                  ? !1
                  : !0
                : !1;
            }),
            (e.prototype.compare = function (e, t) {
              return !this.isMultiLine() && e === this.start.row
                ? t < this.start.column
                  ? -1
                  : t > this.end.column
                  ? 1
                  : 0
                : e < this.start.row
                ? -1
                : e > this.end.row
                ? 1
                : this.start.row === e
                ? t >= this.start.column
                  ? 0
                  : -1
                : this.end.row === e
                ? t <= this.end.column
                  ? 0
                  : 1
                : 0;
            }),
            (e.prototype.compareStart = function (e, t) {
              return this.start.row == e && this.start.column == t
                ? -1
                : this.compare(e, t);
            }),
            (e.prototype.compareEnd = function (e, t) {
              return this.end.row == e && this.end.column == t
                ? 1
                : this.compare(e, t);
            }),
            (e.prototype.compareInside = function (e, t) {
              return this.end.row == e && this.end.column == t
                ? 1
                : this.start.row == e && this.start.column == t
                ? -1
                : this.compare(e, t);
            }),
            (e.prototype.clipRows = function (t, n) {
              if (this.end.row > n) var r = { row: n + 1, column: 0 };
              else if (this.end.row < t) var r = { row: t, column: 0 };
              if (this.start.row > n) var i = { row: n + 1, column: 0 };
              else if (this.start.row < t) var i = { row: t, column: 0 };
              return e.fromPoints(i || this.start, r || this.end);
            }),
            (e.prototype.extend = function (t, n) {
              var r = this.compare(t, n);
              if (r == 0) return this;
              if (r == -1) var i = { row: t, column: n };
              else var s = { row: t, column: n };
              return e.fromPoints(i || this.start, s || this.end);
            }),
            (e.prototype.isEmpty = function () {
              return (
                this.start.row === this.end.row &&
                this.start.column === this.end.column
              );
            }),
            (e.prototype.isMultiLine = function () {
              return this.start.row !== this.end.row;
            }),
            (e.prototype.clone = function () {
              return e.fromPoints(this.start, this.end);
            }),
            (e.prototype.collapseRows = function () {
              return this.end.column == 0
                ? new e(
                    this.start.row,
                    0,
                    Math.max(this.start.row, this.end.row - 1),
                    0
                  )
                : new e(this.start.row, 0, this.end.row, 0);
            }),
            (e.prototype.toScreenRange = function (t) {
              var n = t.documentToScreenPosition(this.start),
                r = t.documentToScreenPosition(this.end);
              return new e(n.row, n.column, r.row, r.column);
            }),
            (e.prototype.moveBy = function (e, t) {
              (this.start.row += e),
                (this.start.column += t),
                (this.end.row += e),
                (this.end.column += t);
            }),
            e
          );
        })();
      (i.fromPoints = function (e, t) {
        return new i(e.row, e.column, t.row, t.column);
      }),
        (i.comparePoints = r),
        (i.comparePoints = function (e, t) {
          return e.row - t.row || e.column - t.column;
        }),
        (t.Range = i);
    }),
    define(
      "ace/lib/keys",
      ["require", "exports", "module", "ace/lib/oop"],
      function (e, t, n) {
        "use strict";
        var r = e("./oop"),
          i = (function () {
            var e = {
              MODIFIER_KEYS: {
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                224: "Meta",
                91: "MetaLeft",
                92: "MetaRight",
                93: "ContextMenu",
              },
              KEY_MODS: {
                ctrl: 1,
                alt: 2,
                option: 2,
                shift: 4,
                super: 8,
                meta: 8,
                command: 8,
                cmd: 8,
                control: 1,
              },
              FUNCTION_KEYS: {
                8: "Backspace",
                9: "Tab",
                13: "Return",
                19: "Pause",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "Print",
                45: "Insert",
                46: "Delete",
                96: "Numpad0",
                97: "Numpad1",
                98: "Numpad2",
                99: "Numpad3",
                100: "Numpad4",
                101: "Numpad5",
                102: "Numpad6",
                103: "Numpad7",
                104: "Numpad8",
                105: "Numpad9",
                "-13": "NumpadEnter",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "Numlock",
                145: "Scrolllock",
              },
              PRINTABLE_KEYS: {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                61: "=",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                107: "+",
                109: "-",
                110: ".",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                111: "/",
                106: "*",
              },
            };
            e.PRINTABLE_KEYS[173] = "-";
            var t, n;
            for (n in e.FUNCTION_KEYS)
              (t = e.FUNCTION_KEYS[n].toLowerCase()), (e[t] = parseInt(n, 10));
            for (n in e.PRINTABLE_KEYS)
              (t = e.PRINTABLE_KEYS[n].toLowerCase()), (e[t] = parseInt(n, 10));
            return (
              r.mixin(e, e.MODIFIER_KEYS),
              r.mixin(e, e.PRINTABLE_KEYS),
              r.mixin(e, e.FUNCTION_KEYS),
              (e.enter = e["return"]),
              (e.escape = e.esc),
              (e.del = e["delete"]),
              (function () {
                var t = ["cmd", "ctrl", "alt", "shift"];
                for (var n = Math.pow(2, t.length); n--; )
                  e.KEY_MODS[n] =
                    t
                      .filter(function (t) {
                        return n & e.KEY_MODS[t];
                      })
                      .join("-") + "-";
              })(),
              (e.KEY_MODS[0] = ""),
              (e.KEY_MODS[-1] = "input-"),
              e
            );
          })();
        r.mixin(t, i),
          (t.default = t),
          (t.keyCodeToString = function (e) {
            var t = i[e];
            return (
              typeof t != "string" && (t = String.fromCharCode(e)),
              t.toLowerCase()
            );
          });
      }
    ),
    define(
      "ace/lib/event",
      ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"],
      function (e, t, n) {
        "use strict";
        function a() {
          u = !1;
          try {
            document.createComment("").addEventListener("test", function () {}, {
              get passive() {
                u = { passive: !1 };
              },
            });
          } catch (e) {}
        }
        function f() {
          return u == undefined && a(), u;
        }
        function l(e, t, n) {
          (this.elem = e), (this.type = t), (this.callback = n);
        }
        function d(e, t, n) {
          var u = p(t);
          if (!i.isMac && s) {
            t.getModifierState &&
              (t.getModifierState("OS") || t.getModifierState("Win")) &&
              (u |= 8);
            if (s.altGr) {
              if ((3 & u) == 3) return;
              s.altGr = 0;
            }
            if (n === 18 || n === 17) {
              var a = "location" in t ? t.location : t.keyLocation;
              if (n === 17 && a === 1) s[n] == 1 && (o = t.timeStamp);
              else if (n === 18 && u === 3 && a === 2) {
                var f = t.timeStamp - o;
                f < 50 && (s.altGr = !0);
              }
            }
          }
          n in r.MODIFIER_KEYS && (n = -1);
          if (!u && n === 13) {
            var a = "location" in t ? t.location : t.keyLocation;
            if (a === 3) {
              e(t, u, -n);
              if (t.defaultPrevented) return;
            }
          }
          if (i.isChromeOS && u & 8) {
            e(t, u, n);
            if (t.defaultPrevented) return;
            u &= -9;
          }
          return !!u || n in r.FUNCTION_KEYS || n in r.PRINTABLE_KEYS
            ? e(t, u, n)
            : !1;
        }
        function v() {
          s = Object.create(null);
        }
        var r = e("./keys"),
          i = e("./useragent"),
          s = null,
          o = 0,
          u;
        l.prototype.destroy = function () {
          h(this.elem, this.type, this.callback),
            (this.elem = this.type = this.callback = undefined);
        };
        var c = (t.addListener = function (e, t, n, r) {
            e.addEventListener(t, n, f()), r && r.$toDestroy.push(new l(e, t, n));
          }),
          h = (t.removeListener = function (e, t, n) {
            e.removeEventListener(t, n, f());
          });
        (t.stopEvent = function (e) {
          return t.stopPropagation(e), t.preventDefault(e), !1;
        }),
          (t.stopPropagation = function (e) {
            e.stopPropagation && e.stopPropagation();
          }),
          (t.preventDefault = function (e) {
            e.preventDefault && e.preventDefault();
          }),
          (t.getButton = function (e) {
            return e.type == "dblclick"
              ? 0
              : e.type == "contextmenu" ||
                (i.isMac && e.ctrlKey && !e.altKey && !e.shiftKey)
              ? 2
              : e.button;
          }),
          (t.capture = function (e, t, n) {
            function i(e) {
              t && t(e),
                n && n(e),
                h(r, "mousemove", t),
                h(r, "mouseup", i),
                h(r, "dragstart", i);
            }
            var r = (e && e.ownerDocument) || document;
            return (
              c(r, "mousemove", t), c(r, "mouseup", i), c(r, "dragstart", i), i
            );
          }),
          (t.addMouseWheelListener = function (e, t, n) {
            c(
              e,
              "wheel",
              function (e) {
                var n = 0.15,
                  r = e.deltaX || 0,
                  i = e.deltaY || 0;
                switch (e.deltaMode) {
                  case e.DOM_DELTA_PIXEL:
                    (e.wheelX = r * n), (e.wheelY = i * n);
                    break;
                  case e.DOM_DELTA_LINE:
                    var s = 15;
                    (e.wheelX = r * s), (e.wheelY = i * s);
                    break;
                  case e.DOM_DELTA_PAGE:
                    var o = 150;
                    (e.wheelX = r * o), (e.wheelY = i * o);
                }
                t(e);
              },
              n
            );
          }),
          (t.addMultiMouseDownListener = function (e, n, r, s, o) {
            function p(e) {
              t.getButton(e) !== 0
                ? (u = 0)
                : e.detail > 1
                ? (u++, u > 4 && (u = 1))
                : (u = 1);
              if (i.isIE) {
                var o =
                  Math.abs(e.clientX - a) > 5 || Math.abs(e.clientY - f) > 5;
                if (!l || o) u = 1;
                l && clearTimeout(l),
                  (l = setTimeout(function () {
                    l = null;
                  }, n[u - 1] || 600)),
                  u == 1 && ((a = e.clientX), (f = e.clientY));
              }
              (e._clicks = u), r[s]("mousedown", e);
              if (u > 4) u = 0;
              else if (u > 1) return r[s](h[u], e);
            }
            var u = 0,
              a,
              f,
              l,
              h = { 2: "dblclick", 3: "tripleclick", 4: "quadclick" };
            Array.isArray(e) || (e = [e]),
              e.forEach(function (e) {
                c(e, "mousedown", p, o);
              });
          });
        var p = function (e) {
          return (
            0 |
            (e.ctrlKey ? 1 : 0) |
            (e.altKey ? 2 : 0) |
            (e.shiftKey ? 4 : 0) |
            (e.metaKey ? 8 : 0)
          );
        };
        (t.getModifierString = function (e) {
          return r.KEY_MODS[p(e)];
        }),
          (t.addCommandKeyListener = function (e, n, r) {
            if (i.isOldGecko || (i.isOpera && !("KeyboardEvent" in window))) {
              var o = null;
              c(
                e,
                "keydown",
                function (e) {
                  o = e.keyCode;
                },
                r
              ),
                c(
                  e,
                  "keypress",
                  function (e) {
                    return d(n, e, o);
                  },
                  r
                );
            } else {
              var u = null;
              c(
                e,
                "keydown",
                function (e) {
                  s[e.keyCode] = (s[e.keyCode] || 0) + 1;
                  var t = d(n, e, e.keyCode);
                  return (u = e.defaultPrevented), t;
                },
                r
              ),
                c(
                  e,
                  "keypress",
                  function (e) {
                    u &&
                      (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) &&
                      (t.stopEvent(e), (u = null));
                  },
                  r
                ),
                c(
                  e,
                  "keyup",
                  function (e) {
                    s[e.keyCode] = null;
                  },
                  r
                ),
                s || (v(), c(window, "focus", v));
            }
          });
        if (typeof window == "object" && window.postMessage && !i.isOldIE) {
          var m = 1;
          t.nextTick = function (e, n) {
            n = n || window;
            var r = "zero-timeout-message-" + m++,
              i = function (s) {
                s.data == r && (t.stopPropagation(s), h(n, "message", i), e());
              };
            c(n, "message", i), n.postMessage(r, "*");
          };
        }
        (t.$idleBlocked = !1),
          (t.onIdle = function (e, n) {
            return setTimeout(function r() {
              t.$idleBlocked ? setTimeout(r, 100) : e();
            }, n);
          }),
          (t.$idleBlockId = null),
          (t.blockIdle = function (e) {
            t.$idleBlockId && clearTimeout(t.$idleBlockId),
              (t.$idleBlocked = !0),
              (t.$idleBlockId = setTimeout(function () {
                t.$idleBlocked = !1;
              }, e || 100));
          }),
          (t.nextFrame =
            typeof window == "object" &&
            (window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.oRequestAnimationFrame)),
          t.nextFrame
            ? (t.nextFrame = t.nextFrame.bind(window))
            : (t.nextFrame = function (e) {
                setTimeout(e, 17);
              });
      }
    ),
    define("ace/clipboard", ["require", "exports", "module"], function (e, t, n) {
      "use strict";
      var r;
      n.exports = {
        lineMode: !1,
        pasteCancelled: function () {
          return r && r > Date.now() - 50 ? !0 : (r = !1);
        },
        cancel: function () {
          r = Date.now();
        },
      };
    }),
    define(
      "ace/keyboard/textinput",
      [
        "require",
        "exports",
        "module",
        "ace/lib/event",
        "ace/config",
        "ace/lib/useragent",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/clipboard",
        "ace/lib/keys",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/event"),
          i = e("../config").nls,
          s = e("../lib/useragent"),
          o = e("../lib/dom"),
          u = e("../lib/lang"),
          a = e("../clipboard"),
          f = s.isChrome < 18,
          l = s.isIE,
          c = s.isChrome > 63,
          h = 400,
          p = e("../lib/keys"),
          d = p.KEY_MODS,
          v = s.isIOS,
          m = v ? /\s/ : /\n/,
          g = s.isMobile,
          y = function (e, t) {
            function V() {
              (T = !0), n.blur(), n.focus(), (T = !1);
            }
            function J(e) {
              e.keyCode == 27 &&
                n.value.length < n.selectionStart &&
                (w || (N = n.value), (C = k = -1), M()),
                $();
            }
            function Q() {
              clearTimeout(K),
                (K = setTimeout(function () {
                  S && ((n.style.cssText = S), (S = "")),
                    (t.renderer.$isMousePressed = !1),
                    t.renderer.$keepTextAreaAtCursor &&
                      t.renderer.$moveTextAreaToCursor();
                }, 0));
            }
            function Y(e, t, n) {
              var r = null,
                i = !1;
              n.addEventListener(
                "keydown",
                function (e) {
                  r && clearTimeout(r), (i = !0);
                },
                !0
              ),
                n.addEventListener(
                  "keyup",
                  function (e) {
                    r = setTimeout(function () {
                      i = !1;
                    }, 100);
                  },
                  !0
                );
              var s = function (e) {
                if (document.activeElement !== n) return;
                if (i || w || t.$mouseHandler.isMousePressed) return;
                if (y) return;
                var r = n.selectionStart,
                  s = n.selectionEnd,
                  o = null,
                  u = 0;
                if (r == 0) o = p.up;
                else if (r == 1) o = p.home;
                else if (s > k && N[s] == "\n") o = p.end;
                else if (r < C && N[r - 1] == " ") (o = p.left), (u = d.option);
                else if (r < C || (r == C && k != C && r == s)) o = p.left;
                else if (s > k && N.slice(0, s).split("\n").length > 2)
                  o = p.down;
                else if (s > k && N[s - 1] == " ") (o = p.right), (u = d.option);
                else if (s > k || (s == k && k != C && r == s)) o = p.right;
                r !== s && (u |= d.shift);
                if (o) {
                  var a = t.onCommandKey({}, u, o);
                  if (!a && t.commands) {
                    o = p.keyCodeToString(o);
                    var f = t.commands.findKeyCommand(u, o);
                    f && t.execCommand(f);
                  }
                  (C = r), (k = s), M("");
                }
              };
              document.addEventListener("selectionchange", s),
                t.on("destroy", function () {
                  document.removeEventListener("selectionchange", s);
                });
            }
            var n = o.createElement("textarea");
            (n.className = "ace_text-input"),
              n.setAttribute("wrap", "off"),
              n.setAttribute("autocorrect", "off"),
              n.setAttribute("autocapitalize", "off"),
              n.setAttribute("spellcheck", !1),
              (n.style.opacity = "0"),
              e.insertBefore(n, e.firstChild);
            var y = !1,
              b = !1,
              w = !1,
              E = !1,
              S = "";
            g || (n.style.fontSize = "1px");
            var x = !1,
              T = !1,
              N = "",
              C = 0,
              k = 0,
              L = 0;
            try {
              var A = document.activeElement === n;
            } catch (O) {}
            (this.setAriaOptions = function (e) {
              e.activeDescendant
                ? (n.setAttribute("aria-haspopup", "true"),
                  n.setAttribute("aria-autocomplete", e.inline ? "both" : "list"),
                  n.setAttribute("aria-activedescendant", e.activeDescendant))
                : (n.setAttribute("aria-haspopup", "false"),
                  n.setAttribute("aria-autocomplete", "both"),
                  n.removeAttribute("aria-activedescendant")),
                e.role && n.setAttribute("role", e.role);
            }),
              (this.setAriaLabel = function () {
                if (t.session && t.renderer.enableKeyboardAccessibility) {
                  var e = t.session.selection.cursor.row;
                  n.setAttribute("aria-roledescription", i("editor1")),
                    n.setAttribute("aria-label", i("Cursor at row $0", [e + 1]));
                } else
                  n.removeAttribute("aria-roledescription"),
                    n.removeAttribute("aria-label");
              }),
              this.setAriaOptions({ role: "textbox" }),
              this.setAriaLabel(),
              r.addListener(
                n,
                "blur",
                function (e) {
                  if (T) return;
                  t.onBlur(e), (A = !1);
                },
                t
              ),
              r.addListener(
                n,
                "focus",
                function (e) {
                  if (T) return;
                  A = !0;
                  if (s.isEdge)
                    try {
                      if (!document.hasFocus()) return;
                    } catch (e) {}
                  t.onFocus(e), s.isEdge ? setTimeout(M) : M();
                },
                t
              ),
              (this.$focusScroll = !1),
              (this.focus = function () {
                this.setAriaLabel();
                if (S || c || this.$focusScroll == "browser")
                  return n.focus({ preventScroll: !0 });
                var e = n.style.top;
                (n.style.position = "fixed"), (n.style.top = "0px");
                try {
                  var t = n.getBoundingClientRect().top != 0;
                } catch (r) {
                  return;
                }
                var i = [];
                if (t) {
                  var s = n.parentElement;
                  while (s && s.nodeType == 1)
                    i.push(s),
                      s.setAttribute("ace_nocontext", !0),
                      !s.parentElement && s.getRootNode
                        ? (s = s.getRootNode().host)
                        : (s = s.parentElement);
                }
                n.focus({ preventScroll: !0 }),
                  t &&
                    i.forEach(function (e) {
                      e.removeAttribute("ace_nocontext");
                    }),
                  setTimeout(function () {
                    (n.style.position = ""),
                      n.style.top == "0px" && (n.style.top = e);
                  }, 0);
              }),
              (this.blur = function () {
                n.blur();
              }),
              (this.isFocused = function () {
                return A;
              }),
              t.on("beforeEndOperation", function () {
                var e = t.curOp,
                  r = e && e.command && e.command.name;
                if (r == "insertstring") return;
                var i = r && (e.docChanged || e.selectionChanged);
                w && i && ((N = n.value = ""), X()), M();
              });
            var M = v
              ? function (e) {
                  if (!A || (y && !e) || E) return;
                  e || (e = "");
                  var r = "\n ab" + e + "cde fg\n";
                  r != n.value && (n.value = N = r);
                  var i = 4,
                    s = 4 + (e.length || (t.selection.isEmpty() ? 0 : 1));
                  (C != i || k != s) && n.setSelectionRange(i, s),
                    (C = i),
                    (k = s);
                }
              : function () {
                  if (w || E) return;
                  if (!A && !H) return;
                  w = !0;
                  var e = 0,
                    r = 0,
                    i = "";
                  if (t.session) {
                    var s = t.selection,
                      o = s.getRange(),
                      u = s.cursor.row;
                    (e = o.start.column),
                      (r = o.end.column),
                      (i = t.session.getLine(u));
                    if (o.start.row != u) {
                      var a = t.session.getLine(u - 1);
                      (e = o.start.row < u - 1 ? 0 : e),
                        (r += a.length + 1),
                        (i = a + "\n" + i);
                    } else if (o.end.row != u) {
                      var f = t.session.getLine(u + 1);
                      (r = o.end.row > u + 1 ? f.length : r),
                        (r += i.length + 1),
                        (i = i + "\n" + f);
                    } else g && u > 0 && ((i = "\n" + i), (r += 1), (e += 1));
                    i.length > h &&
                      (e < h && r < h
                        ? (i = i.slice(0, h))
                        : ((i = "\n"),
                          e == r ? (e = r = 0) : ((e = 0), (r = 1))));
                  }
                  var l = i + "\n\n";
                  l != N && ((n.value = N = l), (C = k = l.length)),
                    H && ((C = n.selectionStart), (k = n.selectionEnd));
                  if (k != r || C != e || n.selectionEnd != k)
                    try {
                      n.setSelectionRange(e, r), (C = e), (k = r);
                    } catch (c) {}
                  w = !1;
                };
            (this.resetSelection = M), A && t.onFocus();
            var _ = function (e) {
                return (
                  e.selectionStart === 0 &&
                  e.selectionEnd >= N.length &&
                  e.value === N &&
                  N &&
                  e.selectionEnd !== k
                );
              },
              D = function (e) {
                if (w) return;
                y
                  ? (y = !1)
                  : _(n)
                  ? (t.selectAll(), M())
                  : g && n.selectionStart != C && M();
              },
              P = null;
            (this.setInputHandler = function (e) {
              P = e;
            }),
              (this.getInputHandler = function () {
                return P;
              });
            var H = !1,
              B = function (e, r) {
                H && (H = !1);
                if (b) return M(), e && t.onPaste(e), (b = !1), "";
                var i = n.selectionStart,
                  o = n.selectionEnd,
                  u = C,
                  a = N.length - k,
                  f = e,
                  l = e.length - i,
                  c = e.length - o,
                  h = 0;
                while (u > 0 && N[h] == e[h]) h++, u--;
                (f = f.slice(h)), (h = 1);
                while (
                  a > 0 &&
                  N.length - h > C - 1 &&
                  N[N.length - h] == e[e.length - h]
                )
                  h++, a--;
                (l -= h - 1), (c -= h - 1);
                var p = f.length - h + 1;
                p < 0 && ((u = -p), (p = 0)), (f = f.slice(0, p));
                if (!r && !f && !l && !u && !a && !c) return "";
                E = !0;
                var d = !1;
                return (
                  s.isAndroid && f == ". " && ((f = "  "), (d = !0)),
                  (f && !u && !a && !l && !c) || x
                    ? t.onTextInput(f)
                    : t.onTextInput(f, {
                        extendLeft: u,
                        extendRight: a,
                        restoreStart: l,
                        restoreEnd: c,
                      }),
                  (E = !1),
                  (N = e),
                  (C = i),
                  (k = o),
                  (L = c),
                  d ? "\n" : f
                );
              },
              j = function (e) {
                if (w) return W();
                if (e && e.inputType) {
                  if (e.inputType == "historyUndo") return t.execCommand("undo");
                  if (e.inputType == "historyRedo") return t.execCommand("redo");
                }
                var r = n.value,
                  i = B(r, !0);
                (r.length > h + 100 || m.test(i) || (g && C < 1 && C == k)) &&
                  M();
              },
              F = function (e, t, n) {
                var r = e.clipboardData || window.clipboardData;
                if (!r || f) return;
                var i = l || n ? "Text" : "text/plain";
                try {
                  return t ? r.setData(i, t) !== !1 : r.getData(i);
                } catch (e) {
                  if (!n) return F(e, t, !0);
                }
              },
              I = function (e, i) {
                var s = t.getCopyText();
                if (!s) return r.preventDefault(e);
                F(e, s)
                  ? (v &&
                      (M(s),
                      (y = s),
                      setTimeout(function () {
                        y = !1;
                      }, 10)),
                    i ? t.onCut() : t.onCopy(),
                    r.preventDefault(e))
                  : ((y = !0),
                    (n.value = s),
                    n.select(),
                    setTimeout(function () {
                      (y = !1), M(), i ? t.onCut() : t.onCopy();
                    }));
              },
              q = function (e) {
                I(e, !0);
              },
              R = function (e) {
                I(e, !1);
              },
              U = function (e) {
                var i = F(e);
                if (a.pasteCancelled()) return;
                typeof i == "string"
                  ? (i && t.onPaste(i, e),
                    s.isIE && setTimeout(M),
                    r.preventDefault(e))
                  : ((n.value = ""), (b = !0));
              };
            r.addCommandKeyListener(n, t.onCommandKey.bind(t), t),
              r.addListener(n, "select", D, t),
              r.addListener(n, "input", j, t),
              r.addListener(n, "cut", q, t),
              r.addListener(n, "copy", R, t),
              r.addListener(n, "paste", U, t),
              (!("oncut" in n) || !("oncopy" in n) || !("onpaste" in n)) &&
                r.addListener(
                  e,
                  "keydown",
                  function (e) {
                    if ((s.isMac && !e.metaKey) || !e.ctrlKey) return;
                    switch (e.keyCode) {
                      case 67:
                        R(e);
                        break;
                      case 86:
                        U(e);
                        break;
                      case 88:
                        q(e);
                    }
                  },
                  t
                );
            var z = function (e) {
                if (w || !t.onCompositionStart || t.$readOnly) return;
                w = {};
                if (x) return;
                e.data && (w.useTextareaForIME = !1),
                  setTimeout(W, 0),
                  t._signal("compositionStart"),
                  t.on("mousedown", V);
                var r = t.getSelectionRange();
                (r.end.row = r.start.row),
                  (r.end.column = r.start.column),
                  (w.markerRange = r),
                  (w.selectionStart = C),
                  t.onCompositionStart(w),
                  w.useTextareaForIME
                    ? ((N = n.value = ""), (C = 0), (k = 0))
                    : (n.msGetInputContext && (w.context = n.msGetInputContext()),
                      n.getInputContext && (w.context = n.getInputContext()));
              },
              W = function () {
                if (!w || !t.onCompositionUpdate || t.$readOnly) return;
                if (x) return V();
                if (w.useTextareaForIME) t.onCompositionUpdate(n.value);
                else {
                  var e = n.value;
                  B(e),
                    w.markerRange &&
                      (w.context &&
                        (w.markerRange.start.column = w.selectionStart =
                          w.context.compositionStartOffset),
                      (w.markerRange.end.column =
                        w.markerRange.start.column + k - w.selectionStart + L));
                }
              },
              X = function (e) {
                if (!t.onCompositionEnd || t.$readOnly) return;
                (w = !1), t.onCompositionEnd(), t.off("mousedown", V), e && j();
              },
              $ = u.delayedCall(W, 50).schedule.bind(null, null);
            r.addListener(n, "compositionstart", z, t),
              r.addListener(n, "compositionupdate", W, t),
              r.addListener(n, "keyup", J, t),
              r.addListener(n, "keydown", $, t),
              r.addListener(n, "compositionend", X, t),
              (this.getElement = function () {
                return n;
              }),
              (this.setCommandMode = function (e) {
                (x = e), (n.readOnly = !1);
              }),
              (this.setReadOnly = function (e) {
                x || (n.readOnly = e);
              }),
              (this.setCopyWithEmptySelection = function (e) {}),
              (this.onContextMenu = function (e) {
                (H = !0),
                  M(),
                  t._emit("nativecontextmenu", { target: t, domEvent: e }),
                  this.moveToMouse(e, !0);
              }),
              (this.moveToMouse = function (e, i) {
                S || (S = n.style.cssText),
                  (n.style.cssText =
                    (i ? "z-index:100000;" : "") +
                    (s.isIE ? "opacity:0.1;" : "") +
                    "text-indent: -" +
                    (C + k) * t.renderer.characterWidth * 0.5 +
                    "px;");
                var u = t.container.getBoundingClientRect(),
                  a = o.computedStyle(t.container),
                  f = u.top + (parseInt(a.borderTopWidth) || 0),
                  l = u.left + (parseInt(u.borderLeftWidth) || 0),
                  c = u.bottom - f - n.clientHeight - 2,
                  h = function (e) {
                    o.translate(
                      n,
                      e.clientX - l - 2,
                      Math.min(e.clientY - f - 2, c)
                    );
                  };
                h(e);
                if (e.type != "mousedown") return;
                (t.renderer.$isMousePressed = !0),
                  clearTimeout(K),
                  s.isWin && r.capture(t.container, h, Q);
              }),
              (this.onContextMenuClose = Q);
            var K,
              G = function (e) {
                t.textInput.onContextMenu(e), Q();
              };
            r.addListener(n, "mouseup", G, t),
              r.addListener(
                n,
                "mousedown",
                function (e) {
                  e.preventDefault(), Q();
                },
                t
              ),
              r.addListener(t.renderer.scroller, "contextmenu", G, t),
              r.addListener(n, "contextmenu", G, t),
              v && Y(e, t, n),
              (this.destroy = function () {
                n.parentElement && n.parentElement.removeChild(n);
              });
          };
        (t.TextInput = y),
          (t.$setUserAgentForTests = function (e, t) {
            (g = e), (v = t);
          });
      }
    ),
    define(
      "ace/mouse/default_handlers",
      ["require", "exports", "module", "ace/lib/useragent"],
      function (e, t, n) {
        "use strict";
        function u(e, t, n, r) {
          return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2));
        }
        function a(e, t) {
          if (e.start.row == e.end.row)
            var n = 2 * t.column - e.start.column - e.end.column;
          else if (
            e.start.row == e.end.row - 1 &&
            !e.start.column &&
            !e.end.column
          )
            var n = t.column - 4;
          else var n = 2 * t.row - e.start.row - e.end.row;
          return n < 0
            ? { cursor: e.start, anchor: e.end }
            : { cursor: e.end, anchor: e.start };
        }
        var r = e("../lib/useragent"),
          i = 0,
          s = 550,
          o = (function () {
            function e(e) {
              e.$clickSelection = null;
              var t = e.editor1;
              t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)),
                t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)),
                t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)),
                t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)),
                t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
              var n = [
                "select",
                "startSelect",
                "selectEnd",
                "selectAllEnd",
                "selectByWordsEnd",
                "selectByLinesEnd",
                "dragWait",
                "dragWaitEnd",
                "focusWait",
              ];
              n.forEach(function (t) {
                e[t] = this[t];
              }, this),
                (e.selectByLines = this.extendSelectionBy.bind(
                  e,
                  "getLineRange"
                )),
                (e.selectByWords = this.extendSelectionBy.bind(
                  e,
                  "getWordRange"
                ));
            }
            return (
              (e.prototype.onMouseDown = function (e) {
                var t = e.inSelection(),
                  n = e.getDocumentPosition();
                this.mousedownEvent = e;
                var i = this.editor1,
                  s = e.getButton();
                if (s !== 0) {
                  var o = i.getSelectionRange(),
                    u = o.isEmpty();
                  (u || s == 1) && i.selection.moveToPosition(n),
                    s == 2 &&
                      (i.textInput.onContextMenu(e.domEvent),
                      r.isMozilla || e.preventDefault());
                  return;
                }
                this.mousedownEvent.time = Date.now();
                if (t && !i.isFocused()) {
                  i.focus();
                  if (
                    this.$focusTimeout &&
                    !this.$clickSelection &&
                    !i.inMultiSelectMode
                  ) {
                    this.setState("focusWait"), this.captureMouse(e);
                    return;
                  }
                }
                return (
                  this.captureMouse(e),
                  this.startSelect(n, e.domEvent._clicks > 1),
                  e.preventDefault()
                );
              }),
              (e.prototype.startSelect = function (e, t) {
                e =
                  e ||
                  this.editor1.renderer.screenToTextCoordinates(this.x, this.y);
                var n = this.editor1;
                if (!this.mousedownEvent) return;
                this.mousedownEvent.getShiftKey()
                  ? n.selection.selectToPosition(e)
                  : t || n.selection.moveToPosition(e),
                  t || this.select(),
                  n.setStyle("ace_selecting"),
                  this.setState("select");
              }),
              (e.prototype.select = function () {
                var e,
                  t = this.editor1,
                  n = t.renderer.screenToTextCoordinates(this.x, this.y);
                if (this.$clickSelection) {
                  var r = this.$clickSelection.comparePoint(n);
                  if (r == -1) e = this.$clickSelection.end;
                  else if (r == 1) e = this.$clickSelection.start;
                  else {
                    var i = a(this.$clickSelection, n);
                    (n = i.cursor), (e = i.anchor);
                  }
                  t.selection.setSelectionAnchor(e.row, e.column);
                }
                t.selection.selectToPosition(n),
                  t.renderer.scrollCursorIntoView();
              }),
              (e.prototype.extendSelectionBy = function (e) {
                var t,
                  n = this.editor1,
                  r = n.renderer.screenToTextCoordinates(this.x, this.y),
                  i = n.selection[e](r.row, r.column);
                if (this.$clickSelection) {
                  var s = this.$clickSelection.comparePoint(i.start),
                    o = this.$clickSelection.comparePoint(i.end);
                  if (s == -1 && o <= 0) {
                    t = this.$clickSelection.end;
                    if (i.end.row != r.row || i.end.column != r.column)
                      r = i.start;
                  } else if (o == 1 && s >= 0) {
                    t = this.$clickSelection.start;
                    if (i.start.row != r.row || i.start.column != r.column)
                      r = i.end;
                  } else if (s == -1 && o == 1) (r = i.end), (t = i.start);
                  else {
                    var u = a(this.$clickSelection, r);
                    (r = u.cursor), (t = u.anchor);
                  }
                  n.selection.setSelectionAnchor(t.row, t.column);
                }
                n.selection.selectToPosition(r),
                  n.renderer.scrollCursorIntoView();
              }),
              (e.prototype.selectByLinesEnd = function () {
                (this.$clickSelection = null),
                  this.editor1.unsetStyle("ace_selecting");
              }),
              (e.prototype.focusWait = function () {
                var e = u(
                    this.mousedownEvent.x,
                    this.mousedownEvent.y,
                    this.x,
                    this.y
                  ),
                  t = Date.now();
                (e > i || t - this.mousedownEvent.time > this.$focusTimeout) &&
                  this.startSelect(this.mousedownEvent.getDocumentPosition());
              }),
              (e.prototype.onDoubleClick = function (e) {
                var t = e.getDocumentPosition(),
                  n = this.editor1,
                  r = n.session,
                  i = r.getBracketRange(t);
                i
                  ? (i.isEmpty() && (i.start.column--, i.end.column++),
                    this.setState("select"))
                  : ((i = n.selection.getWordRange(t.row, t.column)),
                    this.setState("selectByWords")),
                  (this.$clickSelection = i),
                  this.select();
              }),
              (e.prototype.onTripleClick = function (e) {
                var t = e.getDocumentPosition(),
                  n = this.editor1;
                this.setState("selectByLines");
                var r = n.getSelectionRange();
                r.isMultiLine() && r.contains(t.row, t.column)
                  ? ((this.$clickSelection = n.selection.getLineRange(
                      r.start.row
                    )),
                    (this.$clickSelection.end = n.selection.getLineRange(
                      r.end.row
                    ).end))
                  : (this.$clickSelection = n.selection.getLineRange(t.row)),
                  this.select();
              }),
              (e.prototype.onQuadClick = function (e) {
                var t = this.editor1;
                t.selectAll(),
                  (this.$clickSelection = t.getSelectionRange()),
                  this.setState("selectAll");
              }),
              (e.prototype.onMouseWheel = function (e) {
                if (e.getAccelKey()) return;
                e.getShiftKey() &&
                  e.wheelY &&
                  !e.wheelX &&
                  ((e.wheelX = e.wheelY), (e.wheelY = 0));
                var t = this.editor1;
                this.$lastScroll ||
                  (this.$lastScroll = { t: 0, vx: 0, vy: 0, allowed: 0 });
                var n = this.$lastScroll,
                  r = e.domEvent.timeStamp,
                  i = r - n.t,
                  o = i ? e.wheelX / i : n.vx,
                  u = i ? e.wheelY / i : n.vy;
                i < s && ((o = (o + n.vx) / 2), (u = (u + n.vy) / 2));
                var a = Math.abs(o / u),
                  f = !1;
                a >= 1 &&
                  t.renderer.isScrollableBy(e.wheelX * e.speed, 0) &&
                  (f = !0),
                  a <= 1 &&
                    t.renderer.isScrollableBy(0, e.wheelY * e.speed) &&
                    (f = !0);
                if (f) n.allowed = r;
                else if (r - n.allowed < s) {
                  var l =
                    Math.abs(o) <= 1.5 * Math.abs(n.vx) &&
                    Math.abs(u) <= 1.5 * Math.abs(n.vy);
                  l ? ((f = !0), (n.allowed = r)) : (n.allowed = 0);
                }
                (n.t = r), (n.vx = o), (n.vy = u);
                if (f)
                  return (
                    t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed),
                    e.stop()
                  );
              }),
              e
            );
          })();
        (o.prototype.selectEnd = o.prototype.selectByLinesEnd),
          (o.prototype.selectAllEnd = o.prototype.selectByLinesEnd),
          (o.prototype.selectByWordsEnd = o.prototype.selectByLinesEnd),
          (t.DefaultHandlers = o);
      }
    ),
    define(
      "ace/tooltip",
      ["require", "exports", "module", "ace/lib/dom", "ace/range"],
      function (e, t, n) {
        "use strict";
        var r =
            (this && this.__extends) ||
            (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                if (typeof n != "function" && n !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(n) +
                      " is not a constructor or null"
                  );
                e(t, n),
                  (t.prototype =
                    n === null
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          i =
            (this && this.__values) ||
            function (e) {
              var t = typeof Symbol == "function" && Symbol.iterator,
                n = t && e[t],
                r = 0;
              if (n) return n.call(e);
              if (e && typeof e.length == "number")
                return {
                  next: function () {
                    return (
                      e && r >= e.length && (e = void 0),
                      { value: e && e[r++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t ? "Object is not iterable." : "Symbol.iterator is not defined."
              );
            },
          s = e("./lib/dom"),
          o = e("./range").Range,
          u = "ace_tooltip",
          a = (function () {
            function e(e) {
              (this.isOpen = !1), (this.$element = null), (this.$parentNode = e);
            }
            return (
              (e.prototype.$init = function () {
                return (
                  (this.$element = s.createElement("div")),
                  (this.$element.className = u),
                  (this.$element.style.display = "none"),
                  this.$parentNode.appendChild(this.$element),
                  this.$element
                );
              }),
              (e.prototype.getElement = function () {
                return this.$element || this.$init();
              }),
              (e.prototype.setText = function (e) {
                this.getElement().textContent = e;
              }),
              (e.prototype.setHtml = function (e) {
                this.getElement().innerHTML = e;
              }),
              (e.prototype.setPosition = function (e, t) {
                (this.getElement().style.left = e + "px"),
                  (this.getElement().style.top = t + "px");
              }),
              (e.prototype.setClassName = function (e) {
                s.addCssClass(this.getElement(), e);
              }),
              (e.prototype.setTheme = function (e) {
                this.$element.className =
                  u + " " + (e.isDark ? "ace_dark " : "") + (e.cssClass || "");
              }),
              (e.prototype.show = function (e, t, n) {
                e != null && this.setText(e),
                  t != null && n != null && this.setPosition(t, n),
                  this.isOpen ||
                    ((this.getElement().style.display = "block"),
                    (this.isOpen = !0));
              }),
              (e.prototype.hide = function () {
                this.isOpen &&
                  ((this.getElement().style.display = "none"),
                  (this.getElement().className = u),
                  (this.isOpen = !1));
              }),
              (e.prototype.getHeight = function () {
                return this.getElement().offsetHeight;
              }),
              (e.prototype.getWidth = function () {
                return this.getElement().offsetWidth;
              }),
              (e.prototype.destroy = function () {
                (this.isOpen = !1),
                  this.$element &&
                    this.$element.parentNode &&
                    this.$element.parentNode.removeChild(this.$element);
              }),
              e
            );
          })(),
          f = (function () {
            function e() {
              this.popups = [];
            }
            return (
              (e.prototype.addPopup = function (e) {
                this.popups.push(e), this.updatePopups();
              }),
              (e.prototype.removePopup = function (e) {
                var t = this.popups.indexOf(e);
                t !== -1 && (this.popups.splice(t, 1), this.updatePopups());
              }),
              (e.prototype.updatePopups = function () {
                var e, t, n, r;
                this.popups.sort(function (e, t) {
                  return t.priority - e.priority;
                });
                var s = [];
                try {
                  for (
                    var o = i(this.popups), u = o.next();
                    !u.done;
                    u = o.next()
                  ) {
                    var a = u.value,
                      f = !0;
                    try {
                      for (
                        var l = ((n = void 0), i(s)), c = l.next();
                        !c.done;
                        c = l.next()
                      ) {
                        var h = c.value;
                        if (this.doPopupsOverlap(h, a)) {
                          f = !1;
                          break;
                        }
                      }
                    } catch (p) {
                      n = { error: p };
                    } finally {
                      try {
                        c && !c.done && (r = l.return) && r.call(l);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                    f ? s.push(a) : a.hide();
                  }
                } catch (d) {
                  e = { error: d };
                } finally {
                  try {
                    u && !u.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (e.prototype.doPopupsOverlap = function (e, t) {
                var n = e.getElement().getBoundingClientRect(),
                  r = t.getElement().getBoundingClientRect();
                return (
                  n.left < r.right &&
                  n.right > r.left &&
                  n.top < r.bottom &&
                  n.bottom > r.top
                );
              }),
              e
            );
          })(),
          l = new f();
        (t.popupManager = l), (t.Tooltip = a);
        var c = (function (e) {
          function t(t) {
            t === void 0 && (t = document.body);
            var n = e.call(this, t) || this;
            (n.timeout = undefined),
              (n.lastT = 0),
              (n.idleTime = 350),
              (n.lastEvent = undefined),
              (n.onMouseOut = n.onMouseOut.bind(n)),
              (n.onMouseMove = n.onMouseMove.bind(n)),
              (n.waitForHover = n.waitForHover.bind(n)),
              (n.hide = n.hide.bind(n));
            var r = n.getElement();
            return (
              (r.style.whiteSpace = "pre-wrap"),
              (r.style.pointerEvents = "auto"),
              r.addEventListener("mouseout", n.onMouseOut),
              (r.tabIndex = -1),
              r.addEventListener(
                "blur",
                function () {
                  r.contains(document.activeElement) || this.hide();
                }.bind(n)
              ),
              n
            );
          }
          return (
            r(t, e),
            (t.prototype.addToEditor = function (e) {
              e.on("mousemove", this.onMouseMove),
                e.on("mousedown", this.hide),
                e.renderer
                  .getMouseEventTarget()
                  .addEventListener("mouseout", this.onMouseOut, !0);
            }),
            (t.prototype.removeFromEditor = function (e) {
              e.off("mousemove", this.onMouseMove),
                e.off("mousedown", this.hide),
                e.renderer
                  .getMouseEventTarget()
                  .removeEventListener("mouseout", this.onMouseOut, !0),
                this.timeout &&
                  (clearTimeout(this.timeout), (this.timeout = null));
            }),
            (t.prototype.onMouseMove = function (e, t) {
              (this.lastEvent = e), (this.lastT = Date.now());
              var n = t.$mouseHandler.isMousePressed;
              if (this.isOpen) {
                var r = this.lastEvent && this.lastEvent.getDocumentPosition();
                (!this.range ||
                  !this.range.contains(r.row, r.column) ||
                  n ||
                  this.isOutsideOfText(this.lastEvent)) &&
                  this.hide();
              }
              if (this.timeout || n) return;
              (this.lastEvent = e),
                (this.timeout = setTimeout(this.waitForHover, this.idleTime));
            }),
            (t.prototype.waitForHover = function () {
              this.timeout && clearTimeout(this.timeout);
              var e = Date.now() - this.lastT;
              if (this.idleTime - e > 10) {
                this.timeout = setTimeout(this.waitForHover, this.idleTime - e);
                return;
              }
              (this.timeout = null),
                this.lastEvent &&
                  !this.isOutsideOfText(this.lastEvent) &&
                  this.$gatherData(this.lastEvent, this.lastEvent.editor1);
            }),
            (t.prototype.isOutsideOfText = function (e) {
              var t = e.editor1,
                n = e.getDocumentPosition(),
                r = t.session.getLine(n.row);
              if (n.column == r.length) {
                var i = t.renderer.pixelToScreenCoordinates(e.clientX, e.clientY),
                  s = t.session.documentToScreenPosition(n.row, n.column);
                if (s.column != i.column || s.row != i.row) return !0;
              }
              return !1;
            }),
            (t.prototype.setDataProvider = function (e) {
              this.$gatherData = e;
            }),
            (t.prototype.showForRange = function (e, t, n, r) {
              if (r && r != this.lastEvent) return;
              if (this.isOpen && document.activeElement == this.getElement())
                return;
              var i = e.renderer;
              this.isOpen ||
                (l.addPopup(this),
                this.$registerCloseEvents(),
                this.setTheme(i.theme)),
                (this.isOpen = !0),
                this.addMarker(t, e.session),
                (this.range = o.fromPoints(t.start, t.end));
              var s = this.getElement();
              (s.innerHTML = ""), s.appendChild(n), (s.style.display = "block");
              var u = i.textToScreenCoordinates(t.start.row, t.start.column),
                a = e.getCursorPosition(),
                f = s.clientHeight,
                c = i.scroller.getBoundingClientRect(),
                h = !0;
              this.row > a.row ? (h = !0) : this.row < a.row && (h = !1),
                u.pageY - f + i.lineHeight < c.top
                  ? (h = !0)
                  : u.pageY + f > c.bottom && (h = !1),
                h ? (u.pageY += i.lineHeight) : (u.pageY -= f),
                (s.style.maxWidth = c.width - (u.pageX - c.left) + "px"),
                this.setPosition(u.pageX, u.pageY);
            }),
            (t.prototype.addMarker = function (e, t) {
              this.marker && this.$markerSession.removeMarker(this.marker),
                (this.$markerSession = t),
                (this.marker =
                  t && t.addMarker(e, "ace_highlight-marker", "text"));
            }),
            (t.prototype.hide = function (e) {
              if (!e && document.activeElement == this.getElement()) return;
              if (
                e &&
                e.target &&
                (e.type != "keydown" || e.ctrlKey || e.metaKey) &&
                this.$element.contains(e.target)
              )
                return;
              (this.lastEvent = null),
                this.timeout && clearTimeout(this.timeout),
                (this.timeout = null),
                this.addMarker(null),
                this.isOpen &&
                  (this.$removeCloseEvents(),
                  (this.getElement().style.display = "none"),
                  (this.isOpen = !1),
                  l.removePopup(this));
            }),
            (t.prototype.$registerCloseEvents = function () {
              window.addEventListener("keydown", this.hide, !0),
                window.addEventListener("mousewheel", this.hide, !0),
                window.addEventListener("mousedown", this.hide, !0);
            }),
            (t.prototype.$removeCloseEvents = function () {
              window.removeEventListener("keydown", this.hide, !0),
                window.removeEventListener("mousewheel", this.hide, !0),
                window.removeEventListener("mousedown", this.hide, !0);
            }),
            (t.prototype.onMouseOut = function (e) {
              this.timeout && (clearTimeout(this.timeout), (this.timeout = null)),
                (this.lastEvent = null);
              if (!this.isOpen) return;
              if (!e.relatedTarget || e.relatedTarget == this.getElement())
                return;
              if (e && e.currentTarget.contains(e.relatedTarget)) return;
              e.relatedTarget.classList.contains("ace_content") || this.hide();
            }),
            t
          );
        })(a);
        t.HoverTooltip = c;
      }
    ),
    define(
      "ace/mouse/default_gutter_handler",
      [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
        "ace/lib/event",
        "ace/tooltip",
        "ace/config",
      ],
      function (e, t, n) {
        "use strict";
        function f(e) {
          function a() {
            var i = u.getDocumentPosition().row,
              s = t.session.getLength();
            if (i == s) {
              var o = t.renderer.pixelToScreenCoordinates(0, u.y).row,
                a = u.$pos;
              if (o > t.session.documentToScreenRow(a.row, a.column)) return f();
            }
            r.showTooltip(i);
            if (!r.isOpen) return;
            t.on("mousewheel", f);
            if (e.$tooltipFollowsMouse) c(u);
            else {
              var l = u.getGutterRow(),
                h = n.$lines.get(l);
              if (h) {
                var p = h.element.querySelector(".ace_gutter_annotation"),
                  d = p.getBoundingClientRect(),
                  v = r.getElement().style;
                (v.left = d.right + "px"), (v.top = d.bottom + "px");
              } else c(u);
            }
          }
          function f() {
            i && (i = clearTimeout(i)),
              r.isOpen && (r.hideTooltip(), t.off("mousewheel", f));
          }
          function c(e) {
            r.setPosition(e.x, e.y);
          }
          var t = e.editor1,
            n = t.renderer.$gutterLayer,
            r = new l(t);
          e.editor1.setDefaultHandler("guttermousedown", function (r) {
            if (!t.isFocused() || r.getButton() != 0) return;
            var i = n.getRegion(r);
            if (i == "foldWidgets") return;
            var s = r.getDocumentPosition().row,
              o = t.session.selection;
            if (r.getShiftKey()) o.selectTo(s, 0);
            else {
              if (r.domEvent.detail == 2)
                return t.selectAll(), r.preventDefault();
              e.$clickSelection = t.selection.getLineRange(s);
            }
            return (
              e.setState("selectByLines"), e.captureMouse(r), r.preventDefault()
            );
          });
          var i, u;
          e.editor1.setDefaultHandler("guttermousemove", function (t) {
            var n = t.domEvent.target || t.domEvent.srcElement;
            if (s.hasCssClass(n, "ace_fold-widget")) return f();
            r.isOpen && e.$tooltipFollowsMouse && c(t), (u = t);
            if (i) return;
            i = setTimeout(function () {
              (i = null), u && !e.isMousePressed ? a() : f();
            }, 50);
          }),
            o.addListener(
              t.renderer.$gutter,
              "mouseout",
              function (e) {
                u = null;
                if (!r.isOpen || i) return;
                i = setTimeout(function () {
                  (i = null), f();
                }, 50);
              },
              t
            ),
            t.on("changeSession", f),
            t.on("input", f);
        }
        var r =
            (this && this.__extends) ||
            (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                if (typeof n != "function" && n !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(n) +
                      " is not a constructor or null"
                  );
                e(t, n),
                  (t.prototype =
                    n === null
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          i =
            (this && this.__values) ||
            function (e) {
              var t = typeof Symbol == "function" && Symbol.iterator,
                n = t && e[t],
                r = 0;
              if (n) return n.call(e);
              if (e && typeof e.length == "number")
                return {
                  next: function () {
                    return (
                      e && r >= e.length && (e = void 0),
                      { value: e && e[r++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t ? "Object is not iterable." : "Symbol.iterator is not defined."
              );
            },
          s = e("../lib/dom"),
          o = e("../lib/event"),
          u = e("../tooltip").Tooltip,
          a = e("../config").nls;
        t.GutterHandler = f;
        var l = (function (e) {
          function t(t) {
            var n = e.call(this, t.container) || this;
            return (n.editor1 = t), n;
          }
          return (
            r(t, e),
            (t.prototype.setPosition = function (e, t) {
              var n = window.innerWidth || document.documentElement.clientWidth,
                r = window.innerHeight || document.documentElement.clientHeight,
                i = this.getWidth(),
                s = this.getHeight();
              (e += 15),
                (t += 15),
                e + i > n && (e -= e + i - n),
                t + s > r && (t -= 20 + s),
                u.prototype.setPosition.call(this, e, t);
            }),
            Object.defineProperty(t, "annotationLabels", {
              get: function () {
                return {
                  error: { singular: a("error"), plural: a("errors") },
                  warning: { singular: a("warning"), plural: a("warnings") },
                  info: {
                    singular: a("information message"),
                    plural: a("information messages"),
                  },
                };
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.showTooltip = function (e) {
              var n = this.editor1.renderer.$gutterLayer,
                r = n.$annotations[e],
                i;
              r
                ? (i = { text: Array.from(r.text), type: Array.from(r.type) })
                : (i = { text: [], type: [] });
              var s = n.session.getFoldLine(e);
              if (s && n.$showFoldedAnnotations) {
                var o = { error: [], warning: [], info: [] },
                  u;
                for (var a = e + 1; a <= s.end.row; a++) {
                  if (!n.$annotations[a]) continue;
                  for (var f = 0; f < n.$annotations[a].text.length; f++) {
                    var l = n.$annotations[a].type[f];
                    o[l].push(n.$annotations[a].text[f]);
                    if (l === "error") {
                      u = "error_fold";
                      continue;
                    }
                    if (l === "warning") {
                      u = "warning_fold";
                      continue;
                    }
                  }
                }
                if (u === "error_fold" || u === "warning_fold") {
                  var c = "".concat(
                    t.annotationsToSummaryString(o),
                    " in folded code."
                  );
                  i.text.push(c), i.type.push(u);
                }
              }
              if (i.text.length === 0) return this.hide();
              var h = { error: [], warning: [], info: [] },
                p = n.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon";
              for (var a = 0; a < i.text.length; a++) {
                var d = "<span class='ace_"
                  .concat(i.type[a], " ")
                  .concat(p, "' aria-label='")
                  .concat(
                    t.annotationLabels[i.type[a].replace("_fold", "")].singular,
                    "' role=img> </span> "
                  )
                  .concat(i.text[a]);
                h[i.type[a].replace("_fold", "")].push(d);
              }
              var v = [].concat(h.error, h.warning, h.info).join("<br>");
              this.setHtml(v),
                this.$element.setAttribute("aria-live", "polite"),
                this.isOpen ||
                  (this.setTheme(this.editor1.renderer.theme),
                  this.setClassName("ace_gutter-tooltip")),
                this.show(),
                this.editor1._signal("showGutterTooltip", this);
            }),
            (t.prototype.hideTooltip = function () {
              this.$element.removeAttribute("aria-live"),
                this.hide(),
                this.editor1._signal("hideGutterTooltip", this);
            }),
            (t.annotationsToSummaryString = function (e) {
              var n,
                r,
                s = [],
                o = ["error", "warning", "info"];
              try {
                for (var u = i(o), a = u.next(); !a.done; a = u.next()) {
                  var f = a.value;
                  if (!e[f].length) continue;
                  var l =
                    e[f].length === 1
                      ? t.annotationLabels[f].singular
                      : t.annotationLabels[f].plural;
                  s.push("".concat(e[f].length, " ").concat(l));
                }
              } catch (c) {
                n = { error: c };
              } finally {
                try {
                  a && !a.done && (r = u.return) && r.call(u);
                } finally {
                  if (n) throw n.error;
                }
              }
              return s.join(", ");
            }),
            t
          );
        })(u);
        t.GutterTooltip = l;
      }
    ),
    define(
      "ace/mouse/mouse_event",
      ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/event"),
          i = e("../lib/useragent"),
          s = (function () {
            function e(e, t) {
              (this.domEvent = e),
                (this.editor1 = t),
                (this.x = this.clientX = e.clientX),
                (this.y = this.clientY = e.clientY),
                (this.$pos = null),
                (this.$inSelection = null),
                (this.propagationStopped = !1),
                (this.defaultPrevented = !1);
            }
            return (
              (e.prototype.stopPropagation = function () {
                r.stopPropagation(this.domEvent), (this.propagationStopped = !0);
              }),
              (e.prototype.preventDefault = function () {
                r.preventDefault(this.domEvent), (this.defaultPrevented = !0);
              }),
              (e.prototype.stop = function () {
                this.stopPropagation(), this.preventDefault();
              }),
              (e.prototype.getDocumentPosition = function () {
                return this.$pos
                  ? this.$pos
                  : ((this.$pos = this.editor1.renderer.screenToTextCoordinates(
                      this.clientX,
                      this.clientY
                    )),
                    this.$pos);
              }),
              (e.prototype.getGutterRow = function () {
                var e = this.getDocumentPosition().row,
                  t = this.editor1.session.documentToScreenRow(e, 0),
                  n = this.editor1.session.documentToScreenRow(
                    this.editor1.renderer.$gutterLayer.$lines.get(0).row,
                    0
                  );
                return t - n;
              }),
              (e.prototype.inSelection = function () {
                if (this.$inSelection !== null) return this.$inSelection;
                var e = this.editor1,
                  t = e.getSelectionRange();
                if (t.isEmpty()) this.$inSelection = !1;
                else {
                  var n = this.getDocumentPosition();
                  this.$inSelection = t.contains(n.row, n.column);
                }
                return this.$inSelection;
              }),
              (e.prototype.getButton = function () {
                return r.getButton(this.domEvent);
              }),
              (e.prototype.getShiftKey = function () {
                return this.domEvent.shiftKey;
              }),
              (e.prototype.getAccelKey = function () {
                return i.isMac ? this.domEvent.metaKey : this.domEvent.ctrlKey;
              }),
              e
            );
          })();
        t.MouseEvent = s;
      }
    ),
    define(
      "ace/mouse/dragdrop_handler",
      [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
        "ace/lib/event",
        "ace/lib/useragent",
      ],
      function (e, t, n) {
        "use strict";
        function f(e) {
          function T(e, n) {
            var r = Date.now(),
              i = !n || e.row != n.row,
              s = !n || e.column != n.column;
            if (!S || i || s)
              t.moveCursorToPosition(e), (S = r), (x = { x: p, y: d });
            else {
              var o = l(x.x, x.y, p, d);
              o > a
                ? (S = null)
                : r - S >= u && (t.renderer.scrollCursorIntoView(), (S = null));
            }
          }
          function N(e, n) {
            var r = Date.now(),
              i = t.renderer.layerConfig.lineHeight,
              s = t.renderer.layerConfig.characterWidth,
              u = t.renderer.scroller.getBoundingClientRect(),
              a = {
                x: { left: p - u.left, right: u.right - p },
                y: { top: d - u.top, bottom: u.bottom - d },
              },
              f = Math.min(a.x.left, a.x.right),
              l = Math.min(a.y.top, a.y.bottom),
              c = { row: e.row, column: e.column };
            f / s <= 2 && (c.column += a.x.left < a.x.right ? -3 : 2),
              l / i <= 1 && (c.row += a.y.top < a.y.bottom ? -1 : 1);
            var h = e.row != c.row,
              v = e.column != c.column,
              m = !n || e.row != n.row;
            h || (v && !m)
              ? E
                ? r - E >= o && t.renderer.scrollCursorIntoView(c)
                : (E = r)
              : (E = null);
          }
          function C() {
            var e = g;
            (g = t.renderer.screenToTextCoordinates(p, d)), T(g, e), N(g, e);
          }
          function k() {
            (m = t.selection.toOrientedRange()),
              (h = t.session.addMarker(
                m,
                "ace_selection",
                t.getSelectionStyle()
              )),
              t.clearSelection(),
              t.isFocused() && t.renderer.$cursorLayer.setBlinking(!1),
              clearInterval(v),
              C(),
              (v = setInterval(C, 20)),
              (y = 0),
              i.addListener(document, "mousemove", O);
          }
          function L() {
            clearInterval(v),
              t.session.removeMarker(h),
              (h = null),
              t.selection.fromOrientedRange(m),
              t.isFocused() && !w && t.$resetCursorStyle(),
              (m = null),
              (g = null),
              (y = 0),
              (E = null),
              (S = null),
              i.removeListener(document, "mousemove", O);
          }
          function O() {
            A == null &&
              (A = setTimeout(function () {
                A != null && h && L();
              }, 20));
          }
          function M(e) {
            var t = e.types;
            return (
              !t ||
              Array.prototype.some.call(t, function (e) {
                return e == "text/plain" || e == "Text";
              })
            );
          }
          function _(e) {
            var t = ["copy", "copymove", "all", "uninitialized"],
              n = ["move", "copymove", "linkmove", "all", "uninitialized"],
              r = s.isMac ? e.altKey : e.ctrlKey,
              i = "uninitialized";
            try {
              i = e.dataTransfer.effectAllowed.toLowerCase();
            } catch (e) {}
            var o = "none";
            return (
              r && t.indexOf(i) >= 0
                ? (o = "copy")
                : n.indexOf(i) >= 0
                ? (o = "move")
                : t.indexOf(i) >= 0 && (o = "copy"),
              o
            );
          }
          var t = e.editor1,
            n = r.createElement("div");
          (n.style.cssText =
            "top:-100px;position:absolute;z-index:2147483647;opacity:0.5"),
            (n.textContent = "\u00a0");
          var f = [
            "dragWait",
            "dragWaitEnd",
            "startDrag",
            "dragReadyEnd",
            "onMouseDrag",
          ];
          f.forEach(function (t) {
            e[t] = this[t];
          }, this),
            t.on("mousedown", this.onMouseDown.bind(e));
          var c = t.container,
            h,
            p,
            d,
            v,
            m,
            g,
            y = 0,
            b,
            w,
            E,
            S,
            x;
          (this.onDragStart = function (e) {
            if (this.cancelDrag || !c.draggable) {
              var r = this;
              return (
                setTimeout(function () {
                  r.startSelect(), r.captureMouse(e);
                }, 0),
                e.preventDefault()
              );
            }
            m = t.getSelectionRange();
            var i = e.dataTransfer;
            (i.effectAllowed = t.getReadOnly() ? "copy" : "copyMove"),
              t.container.appendChild(n),
              i.setDragImage && i.setDragImage(n, 0, 0),
              setTimeout(function () {
                t.container.removeChild(n);
              }),
              i.clearData(),
              i.setData("Text", t.session.getTextRange()),
              (w = !0),
              this.setState("drag");
          }),
            (this.onDragEnd = function (e) {
              (c.draggable = !1), (w = !1), this.setState(null);
              if (!t.getReadOnly()) {
                var n = e.dataTransfer.dropEffect;
                !b && n == "move" && t.session.remove(t.getSelectionRange()),
                  t.$resetCursorStyle();
              }
              this.editor1.unsetStyle("ace_dragging"),
                this.editor1.renderer.setCursorStyle("");
            }),
            (this.onDragEnter = function (e) {
              if (t.getReadOnly() || !M(e.dataTransfer)) return;
              return (
                (p = e.clientX),
                (d = e.clientY),
                h || k(),
                y++,
                (e.dataTransfer.dropEffect = b = _(e)),
                i.preventDefault(e)
              );
            }),
            (this.onDragOver = function (e) {
              if (t.getReadOnly() || !M(e.dataTransfer)) return;
              return (
                (p = e.clientX),
                (d = e.clientY),
                h || (k(), y++),
                A !== null && (A = null),
                (e.dataTransfer.dropEffect = b = _(e)),
                i.preventDefault(e)
              );
            }),
            (this.onDragLeave = function (e) {
              y--;
              if (y <= 0 && h) return L(), (b = null), i.preventDefault(e);
            }),
            (this.onDrop = function (e) {
              if (!g) return;
              var n = e.dataTransfer;
              if (w)
                switch (b) {
                  case "move":
                    m.contains(g.row, g.column)
                      ? (m = { start: g, end: g })
                      : (m = t.moveText(m, g));
                    break;
                  case "copy":
                    m = t.moveText(m, g, !0);
                }
              else {
                var r = n.getData("Text");
                (m = { start: g, end: t.session.insert(g, r) }),
                  t.focus(),
                  (b = null);
              }
              return L(), i.preventDefault(e);
            }),
            i.addListener(c, "dragstart", this.onDragStart.bind(e), t),
            i.addListener(c, "dragend", this.onDragEnd.bind(e), t),
            i.addListener(c, "dragenter", this.onDragEnter.bind(e), t),
            i.addListener(c, "dragover", this.onDragOver.bind(e), t),
            i.addListener(c, "dragleave", this.onDragLeave.bind(e), t),
            i.addListener(c, "drop", this.onDrop.bind(e), t);
          var A = null;
        }
        function l(e, t, n, r) {
          return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2));
        }
        var r = e("../lib/dom"),
          i = e("../lib/event"),
          s = e("../lib/useragent"),
          o = 200,
          u = 200,
          a = 5;
        (function () {
          (this.dragWait = function () {
            var e = Date.now() - this.mousedownEvent.time;
            e > this.editor1.getDragDelay() && this.startDrag();
          }),
            (this.dragWaitEnd = function () {
              var e = this.editor1.container;
              (e.draggable = !1),
                this.startSelect(this.mousedownEvent.getDocumentPosition()),
                this.selectEnd();
            }),
            (this.dragReadyEnd = function (e) {
              this.editor1.$resetCursorStyle(),
                this.editor1.unsetStyle("ace_dragging"),
                this.editor1.renderer.setCursorStyle(""),
                this.dragWaitEnd();
            }),
            (this.startDrag = function () {
              this.cancelDrag = !1;
              var e = this.editor1,
                t = e.container;
              (t.draggable = !0),
                e.renderer.$cursorLayer.setBlinking(!1),
                e.setStyle("ace_dragging");
              var n = s.isWin ? "default" : "move";
              e.renderer.setCursorStyle(n), this.setState("dragReady");
            }),
            (this.onMouseDrag = function (e) {
              var t = this.editor1.container;
              if (s.isIE && this.state == "dragReady") {
                var n = l(
                  this.mousedownEvent.x,
                  this.mousedownEvent.y,
                  this.x,
                  this.y
                );
                n > 3 && t.dragDrop();
              }
              if (this.state === "dragWait") {
                var n = l(
                  this.mousedownEvent.x,
                  this.mousedownEvent.y,
                  this.x,
                  this.y
                );
                n > 0 &&
                  ((t.draggable = !1),
                  this.startSelect(this.mousedownEvent.getDocumentPosition()));
              }
            }),
            (this.onMouseDown = function (e) {
              if (!this.$dragEnabled) return;
              this.mousedownEvent = e;
              var t = this.editor1,
                n = e.inSelection(),
                r = e.getButton(),
                i = e.domEvent.detail || 1;
              if (i === 1 && r === 0 && n) {
                if (
                  e.editor1.inMultiSelectMode &&
                  (e.getAccelKey() || e.getShiftKey())
                )
                  return;
                this.mousedownEvent.time = Date.now();
                var o = e.domEvent.target || e.domEvent.srcElement;
                "unselectable" in o && (o.unselectable = "on");
                if (t.getDragDelay()) {
                  if (s.isWebKit) {
                    this.cancelDrag = !0;
                    var u = t.container;
                    u.draggable = !0;
                  }
                  this.setState("dragWait");
                } else this.startDrag();
                this.captureMouse(e, this.onMouseDrag.bind(this)),
                  (e.defaultPrevented = !0);
              }
            });
        }).call(f.prototype),
          (t.DragdropHandler = f);
      }
    ),
    define(
      "ace/mouse/touch_handler",
      [
        "require",
        "exports",
        "module",
        "ace/mouse/mouse_event",
        "ace/lib/event",
        "ace/lib/dom",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("./mouse_event").MouseEvent,
          i = e("../lib/event"),
          s = e("../lib/dom");
        t.addTouchListeners = function (e, t) {
          function b() {
            var e = window.navigator && window.navigator.clipboard,
              r = !1,
              i = function () {
                var n = t.getCopyText(),
                  i = t.session.getUndoManager().hasUndo();
                y.replaceChild(
                  s.buildDom(
                    r
                      ? [
                          "span",
                          !n && [
                            "span",
                            { class: "ace_mobile-button", action: "selectall" },
                            "Select All",
                          ],
                          n && [
                            "span",
                            { class: "ace_mobile-button", action: "copy" },
                            "Copy",
                          ],
                          n && [
                            "span",
                            { class: "ace_mobile-button", action: "cut" },
                            "Cut",
                          ],
                          e && [
                            "span",
                            { class: "ace_mobile-button", action: "paste" },
                            "Paste",
                          ],
                          i && [
                            "span",
                            { class: "ace_mobile-button", action: "undo" },
                            "Undo",
                          ],
                          [
                            "span",
                            { class: "ace_mobile-button", action: "find" },
                            "Find",
                          ],
                          [
                            "span",
                            {
                              class: "ace_mobile-button",
                              action: "openCommandPallete",
                            },
                            "Palette",
                          ],
                        ]
                      : ["span"]
                  ),
                  y.firstChild
                );
              },
              o = function (n) {
                var s = n.target.getAttribute("action");
                if (s == "more" || !r) return (r = !r), i();
                if (s == "paste")
                  e.readText().then(function (e) {
                    t.execCommand(s, e);
                  });
                else if (s) {
                  if (s == "cut" || s == "copy")
                    e
                      ? e.writeText(t.getCopyText())
                      : document.execCommand("copy");
                  t.execCommand(s);
                }
                (y.firstChild.style.display = "none"),
                  (r = !1),
                  s != "openCommandPallete" && t.focus();
              };
            y = s.buildDom(
              [
                "div",
                {
                  class: "ace_mobile-menu",
                  ontouchstart: function (e) {
                    (n = "menu"),
                      e.stopPropagation(),
                      e.preventDefault(),
                      t.textInput.focus();
                  },
                  ontouchend: function (e) {
                    e.stopPropagation(), e.preventDefault(), o(e);
                  },
                  onclick: o,
                },
                ["span"],
                ["span", { class: "ace_mobile-button", action: "more" }, "..."],
              ],
              t.container
            );
          }
          function w() {
            y || b();
            var e = t.selection.cursor,
              n = t.renderer.textToScreenCoordinates(e.row, e.column),
              r = t.renderer.textToScreenCoordinates(0, 0).pageX,
              i = t.renderer.scrollLeft,
              s = t.container.getBoundingClientRect();
            (y.style.top = n.pageY - s.top - 3 + "px"),
              n.pageX - s.left < s.width - 70
                ? ((y.style.left = ""), (y.style.right = "10px"))
                : ((y.style.right = ""), (y.style.left = r + i - s.left + "px")),
              (y.style.display = ""),
              (y.firstChild.style.display = "none"),
              t.on("input", E);
          }
          function E(e) {
            y && (y.style.display = "none"), t.off("input", E);
          }
          function S() {
            (l = null), clearTimeout(l);
            var e = t.selection.getRange(),
              r = e.contains(p.row, p.column);
            if (e.isEmpty() || !r)
              t.selection.moveToPosition(p), t.selection.selectWord();
            (n = "wait"), w();
          }
          function x() {
            (l = null), clearTimeout(l), t.selection.moveToPosition(p);
            var e =
              d >= 2
                ? t.selection.getLineRange(p.row)
                : t.session.getBracketRange(p);
            e && !e.isEmpty()
              ? t.selection.setRange(e)
              : t.selection.selectWord(),
              (n = "wait");
          }
          function T() {
            (h += 60),
              (c = setInterval(function () {
                h-- <= 0 && (clearInterval(c), (c = null)),
                  Math.abs(v) < 0.01 && (v = 0),
                  Math.abs(m) < 0.01 && (m = 0),
                  h < 20 && (v = 0.9 * v),
                  h < 20 && (m = 0.9 * m);
                var e = t.session.getScrollTop();
                t.renderer.scrollBy(10 * v, 10 * m),
                  e == t.session.getScrollTop() && (h = 0);
              }, 10));
          }
          var n = "scroll",
            o,
            u,
            a,
            f,
            l,
            c,
            h = 0,
            p,
            d = 0,
            v = 0,
            m = 0,
            g,
            y;
          i.addListener(
            e,
            "contextmenu",
            function (e) {
              if (!g) return;
              var n = t.textInput.getElement();
              n.focus();
            },
            t
          ),
            i.addListener(
              e,
              "touchstart",
              function (e) {
                var i = e.touches;
                if (l || i.length > 1) {
                  clearTimeout(l), (l = null), (a = -1), (n = "zoom");
                  return;
                }
                g = t.$mouseHandler.isMousePressed = !0;
                var s = t.renderer.layerConfig.lineHeight,
                  c = t.renderer.layerConfig.lineHeight,
                  y = e.timeStamp;
                f = y;
                var b = i[0],
                  w = b.clientX,
                  E = b.clientY;
                Math.abs(o - w) + Math.abs(u - E) > s && (a = -1),
                  (o = e.clientX = w),
                  (u = e.clientY = E),
                  (v = m = 0);
                var T = new r(e, t);
                p = T.getDocumentPosition();
                if (y - a < 500 && i.length == 1 && !h)
                  d++, e.preventDefault(), (e.button = 0), x();
                else {
                  d = 0;
                  var N = t.selection.cursor,
                    C = t.selection.isEmpty() ? N : t.selection.anchor,
                    k = t.renderer.$cursorLayer.getPixelPosition(N, !0),
                    L = t.renderer.$cursorLayer.getPixelPosition(C, !0),
                    A = t.renderer.scroller.getBoundingClientRect(),
                    O = t.renderer.layerConfig.offset,
                    M = t.renderer.scrollLeft,
                    _ = function (e, t) {
                      return (e /= c), (t = t / s - 0.75), e * e + t * t;
                    };
                  if (e.clientX < A.left) {
                    n = "zoom";
                    return;
                  }
                  var D = _(
                      e.clientX - A.left - k.left + M,
                      e.clientY - A.top - k.top + O
                    ),
                    P = _(
                      e.clientX - A.left - L.left + M,
                      e.clientY - A.top - L.top + O
                    );
                  D < 3.5 && P < 3.5 && (n = D > P ? "cursor" : "anchor"),
                    P < 3.5
                      ? (n = "anchor")
                      : D < 3.5
                      ? (n = "cursor")
                      : (n = "scroll"),
                    (l = setTimeout(S, 450));
                }
                a = y;
              },
              t
            ),
            i.addListener(
              e,
              "touchend",
              function (e) {
                (g = t.$mouseHandler.isMousePressed = !1),
                  c && clearInterval(c),
                  n == "zoom"
                    ? ((n = ""), (h = 0))
                    : l
                    ? (t.selection.moveToPosition(p), (h = 0), w())
                    : n == "scroll"
                    ? (T(), E())
                    : w(),
                  clearTimeout(l),
                  (l = null);
              },
              t
            ),
            i.addListener(
              e,
              "touchmove",
              function (e) {
                l && (clearTimeout(l), (l = null));
                var i = e.touches;
                if (i.length > 1 || n == "zoom") return;
                var s = i[0],
                  a = o - s.clientX,
                  c = u - s.clientY;
                if (n == "wait") {
                  if (!(a * a + c * c > 4)) return e.preventDefault();
                  n = "cursor";
                }
                (o = s.clientX),
                  (u = s.clientY),
                  (e.clientX = s.clientX),
                  (e.clientY = s.clientY);
                var h = e.timeStamp,
                  p = h - f;
                f = h;
                if (n == "scroll") {
                  var d = new r(e, t);
                  (d.speed = 1),
                    (d.wheelX = a),
                    (d.wheelY = c),
                    10 * Math.abs(a) < Math.abs(c) && (a = 0),
                    10 * Math.abs(c) < Math.abs(a) && (c = 0),
                    p != 0 && ((v = a / p), (m = c / p)),
                    t._emit("mousewheel", d),
                    d.propagationStopped || (v = m = 0);
                } else {
                  var g = new r(e, t),
                    y = g.getDocumentPosition();
                  n == "cursor"
                    ? t.selection.moveCursorToPosition(y)
                    : n == "anchor" &&
                      t.selection.setSelectionAnchor(y.row, y.column),
                    t.renderer.scrollCursorIntoView(y),
                    e.preventDefault();
                }
              },
              t
            );
        };
      }
    ),
    define(
      "ace/mouse/mouse_handler",
      [
        "require",
        "exports",
        "module",
        "ace/lib/event",
        "ace/lib/useragent",
        "ace/mouse/default_handlers",
        "ace/mouse/default_gutter_handler",
        "ace/mouse/mouse_event",
        "ace/mouse/dragdrop_handler",
        "ace/mouse/touch_handler",
        "ace/config",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/event"),
          i = e("../lib/useragent"),
          s = e("./default_handlers").DefaultHandlers,
          o = e("./default_gutter_handler").GutterHandler,
          u = e("./mouse_event").MouseEvent,
          a = e("./dragdrop_handler").DragdropHandler,
          f = e("./touch_handler").addTouchListeners,
          l = e("../config"),
          c = (function () {
            function e(e) {
              var t = this;
              (this.editor1 = e), new s(this), new o(this), new a(this);
              var n = function (t) {
                  var n =
                    !document.hasFocus ||
                    !document.hasFocus() ||
                    (!e.isFocused() &&
                      document.activeElement ==
                        (e.textInput && e.textInput.getElement()));
                  n && window.focus(),
                    e.focus(),
                    setTimeout(function () {
                      e.isFocused() || e.focus();
                    });
                },
                u = e.renderer.getMouseEventTarget();
              r.addListener(u, "click", this.onMouseEvent.bind(this, "click"), e),
                r.addListener(
                  u,
                  "mousemove",
                  this.onMouseMove.bind(this, "mousemove"),
                  e
                ),
                r.addMultiMouseDownListener(
                  [
                    u,
                    e.renderer.scrollBarV && e.renderer.scrollBarV.inner,
                    e.renderer.scrollBarH && e.renderer.scrollBarH.inner,
                    e.textInput && e.textInput.getElement(),
                  ].filter(Boolean),
                  [400, 300, 250],
                  this,
                  "onMouseEvent",
                  e
                ),
                r.addMouseWheelListener(
                  e.container,
                  this.onMouseWheel.bind(this, "mousewheel"),
                  e
                ),
                f(e.container, e);
              var l = e.renderer.$gutter;
              r.addListener(
                l,
                "mousedown",
                this.onMouseEvent.bind(this, "guttermousedown"),
                e
              ),
                r.addListener(
                  l,
                  "click",
                  this.onMouseEvent.bind(this, "gutterclick"),
                  e
                ),
                r.addListener(
                  l,
                  "dblclick",
                  this.onMouseEvent.bind(this, "gutterdblclick"),
                  e
                ),
                r.addListener(
                  l,
                  "mousemove",
                  this.onMouseEvent.bind(this, "guttermousemove"),
                  e
                ),
                r.addListener(u, "mousedown", n, e),
                r.addListener(l, "mousedown", n, e),
                i.isIE &&
                  e.renderer.scrollBarV &&
                  (r.addListener(
                    e.renderer.scrollBarV.element,
                    "mousedown",
                    n,
                    e
                  ),
                  r.addListener(
                    e.renderer.scrollBarH.element,
                    "mousedown",
                    n,
                    e
                  )),
                e.on(
                  "mousemove",
                  function (n) {
                    if (t.state || t.$dragDelay || !t.$dragEnabled) return;
                    var r = e.renderer.screenToTextCoordinates(n.x, n.y),
                      i = e.session.selection.getRange(),
                      s = e.renderer;
                    !i.isEmpty() && i.insideStart(r.row, r.column)
                      ? s.setCursorStyle("default")
                      : s.setCursorStyle("");
                  },
                  e
                );
            }
            return (
              (e.prototype.onMouseEvent = function (e, t) {
                if (!this.editor1.session) return;
                this.editor1._emit(e, new u(t, this.editor1));
              }),
              (e.prototype.onMouseMove = function (e, t) {
                var n =
                  this.editor1._eventRegistry &&
                  this.editor1._eventRegistry.mousemove;
                if (!n || !n.length) return;
                this.editor1._emit(e, new u(t, this.editor1));
              }),
              (e.prototype.onMouseWheel = function (e, t) {
                var n = new u(t, this.editor1);
                (n.speed = this.$scrollSpeed * 2),
                  (n.wheelX = t.wheelX),
                  (n.wheelY = t.wheelY),
                  this.editor1._emit(e, n);
              }),
              (e.prototype.setState = function (e) {
                this.state = e;
              }),
              (e.prototype.captureMouse = function (e, t) {
                (this.x = e.x), (this.y = e.y), (this.isMousePressed = !0);
                var n = this.editor1,
                  s = this.editor1.renderer;
                s.$isMousePressed = !0;
                var o = this,
                  a = function (e) {
                    if (!e) return;
                    if (i.isWebKit && !e.which && o.releaseMouse)
                      return o.releaseMouse();
                    (o.x = e.clientX),
                      (o.y = e.clientY),
                      t && t(e),
                      (o.mouseEvent = new u(e, o.editor1)),
                      (o.$mouseMoved = !0);
                  },
                  f = function (e) {
                    n.off("beforeEndOperation", c),
                      clearInterval(h),
                      n.session && l(),
                      o[o.state + "End"] && o[o.state + "End"](e),
                      (o.state = ""),
                      (o.isMousePressed = s.$isMousePressed = !1),
                      s.$keepTextAreaAtCursor && s.$moveTextAreaToCursor(),
                      (o.$onCaptureMouseMove = o.releaseMouse = null),
                      e && o.onMouseEvent("mouseup", e),
                      n.endOperation();
                  },
                  l = function () {
                    o[o.state] && o[o.state](), (o.$mouseMoved = !1);
                  };
                if (i.isOldIE && e.domEvent.type == "dblclick")
                  return setTimeout(function () {
                    f(e);
                  });
                var c = function (e) {
                  if (!o.releaseMouse) return;
                  n.curOp.command.name &&
                    n.curOp.selectionChanged &&
                    (o[o.state + "End"] && o[o.state + "End"](),
                    (o.state = ""),
                    o.releaseMouse());
                };
                n.on("beforeEndOperation", c),
                  n.startOperation({ command: { name: "mouse" } }),
                  (o.$onCaptureMouseMove = a),
                  (o.releaseMouse = r.capture(this.editor1.container, a, f));
                var h = setInterval(l, 20);
              }),
              (e.prototype.cancelContextMenu = function () {
                var e = function (t) {
                  if (t && t.domEvent && t.domEvent.type != "contextmenu") return;
                  this.editor1.off("nativecontextmenu", e),
                    t && t.domEvent && r.stopEvent(t.domEvent);
                }.bind(this);
                setTimeout(e, 10), this.editor1.on("nativecontextmenu", e);
              }),
              (e.prototype.destroy = function () {
                this.releaseMouse && this.releaseMouse();
              }),
              e
            );
          })();
        (c.prototype.releaseMouse = null),
          l.defineOptions(c.prototype, "mouseHandler", {
            scrollSpeed: { initialValue: 2 },
            dragDelay: { initialValue: i.isMac ? 150 : 0 },
            dragEnabled: { initialValue: !0 },
            focusTimeout: { initialValue: 0 },
            tooltipFollowsMouse: { initialValue: !0 },
          }),
          (t.MouseHandler = c);
      }
    ),
    define(
      "ace/mouse/fold_handler",
      ["require", "exports", "module", "ace/lib/dom"],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/dom"),
          i = (function () {
            function e(e) {
              e.on("click", function (t) {
                var n = t.getDocumentPosition(),
                  i = e.session,
                  s = i.getFoldAt(n.row, n.column, 1);
                s &&
                  (t.getAccelKey() ? i.removeFold(s) : i.expandFold(s), t.stop());
                var o = t.domEvent && t.domEvent.target;
                o &&
                  r.hasCssClass(o, "ace_inline_button") &&
                  r.hasCssClass(o, "ace_toggle_wrap") &&
                  (i.setOption("wrap", !i.getUseWrapMode()),
                  e.renderer.scrollCursorIntoView());
              }),
                e.on("gutterclick", function (t) {
                  var n = e.renderer.$gutterLayer.getRegion(t);
                  if (n == "foldWidgets") {
                    var r = t.getDocumentPosition().row,
                      i = e.session;
                    i.foldWidgets &&
                      i.foldWidgets[r] &&
                      e.session.onFoldWidgetClick(r, t),
                      e.isFocused() || e.focus(),
                      t.stop();
                  }
                }),
                e.on("gutterdblclick", function (t) {
                  var n = e.renderer.$gutterLayer.getRegion(t);
                  if (n == "foldWidgets") {
                    var r = t.getDocumentPosition().row,
                      i = e.session,
                      s = i.getParentFoldRangeData(r, !0),
                      o = s.range || s.firstRange;
                    if (o) {
                      r = o.start.row;
                      var u = i.getFoldAt(r, i.getLine(r).length, 1);
                      u
                        ? i.removeFold(u)
                        : (i.addFold("...", o),
                          e.renderer.scrollCursorIntoView({
                            row: o.start.row,
                            column: 0,
                          }));
                    }
                    t.stop();
                  }
                });
            }
            return e;
          })();
        t.FoldHandler = i;
      }
    ),
    define(
      "ace/keyboard/keybinding",
      ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/keys"),
          i = e("../lib/event"),
          s = (function () {
            function e(e) {
              (this.$editor1 = e),
                (this.$data = { editor1: e }),
                (this.$handlers = []),
                this.setDefaultHandler(e.commands);
            }
            return (
              (e.prototype.setDefaultHandler = function (e) {
                this.removeKeyboardHandler(this.$defaultHandler),
                  (this.$defaultHandler = e),
                  this.addKeyboardHandler(e, 0);
              }),
              (e.prototype.setKeyboardHandler = function (e) {
                var t = this.$handlers;
                if (t[t.length - 1] == e) return;
                while (t[t.length - 1] && t[t.length - 1] != this.$defaultHandler)
                  this.removeKeyboardHandler(t[t.length - 1]);
                this.addKeyboardHandler(e, 1);
              }),
              (e.prototype.addKeyboardHandler = function (e, t) {
                if (!e) return;
                typeof e == "function" &&
                  !e.handleKeyboard &&
                  (e.handleKeyboard = e);
                var n = this.$handlers.indexOf(e);
                n != -1 && this.$handlers.splice(n, 1),
                  t == undefined
                    ? this.$handlers.push(e)
                    : this.$handlers.splice(t, 0, e),
                  n == -1 && e.attach && e.attach(this.$editor1);
              }),
              (e.prototype.removeKeyboardHandler = function (e) {
                var t = this.$handlers.indexOf(e);
                return t == -1
                  ? !1
                  : (this.$handlers.splice(t, 1),
                    e.detach && e.detach(this.$editor1),
                    !0);
              }),
              (e.prototype.getKeyboardHandler = function () {
                return this.$handlers[this.$handlers.length - 1];
              }),
              (e.prototype.getStatusText = function () {
                var e = this.$data,
                  t = e.editor1;
                return this.$handlers
                  .map(function (n) {
                    return (n.getStatusText && n.getStatusText(t, e)) || "";
                  })
                  .filter(Boolean)
                  .join(" ");
              }),
              (e.prototype.$callKeyboardHandlers = function (e, t, n, r) {
                var s,
                  o = !1,
                  u = this.$editor1.commands;
                for (var a = this.$handlers.length; a--; ) {
                  s = this.$handlers[a].handleKeyboard(this.$data, e, t, n, r);
                  if (!s || !s.command) continue;
                  s.command == "null"
                    ? (o = !0)
                    : (o = u.exec(s.command, this.$editor1, s.args, r)),
                    o &&
                      r &&
                      e != -1 &&
                      s.passEvent != 1 &&
                      s.command.passEvent != 1 &&
                      i.stopEvent(r);
                  if (o) break;
                }
                return (
                  !o &&
                    e == -1 &&
                    ((s = { command: "insertstring" }),
                    (o = u.exec("insertstring", this.$editor1, t))),
                  o &&
                    this.$editor1._signal &&
                    this.$editor1._signal("keyboardActivity", s),
                  o
                );
              }),
              (e.prototype.onCommandKey = function (e, t, n) {
                var i = r.keyCodeToString(n);
                return this.$callKeyboardHandlers(t, i, n, e);
              }),
              (e.prototype.onTextInput = function (e) {
                return this.$callKeyboardHandlers(-1, e);
              }),
              e
            );
          })();
        t.KeyBinding = s;
      }
    ),
    define(
      "ace/lib/bidiutil",
      ["require", "exports", "module"],
      function (e, t, n) {
        "use strict";
        function F(e, t, n, r) {
          var i = s ? d : p,
            c = null,
            h = null,
            v = null,
            m = 0,
            g = null,
            y = null,
            b = -1,
            w = null,
            E = null,
            T = [];
          if (!r) for (w = 0, r = []; w < n; w++) r[w] = R(e[w]);
          (o = s), (u = !1), (a = !1), (f = !1), (l = !1);
          for (E = 0; E < n; E++) {
            (c = m),
              (T[E] = h = q(e, r, T, E)),
              (m = i[c][h]),
              (g = m & 240),
              (m &= 15),
              (t[E] = v = i[m][5]);
            if (g > 0)
              if (g == 16) {
                for (w = b; w < E; w++) t[w] = 1;
                b = -1;
              } else b = -1;
            y = i[m][6];
            if (y) b == -1 && (b = E);
            else if (b > -1) {
              for (w = b; w < E; w++) t[w] = v;
              b = -1;
            }
            r[E] == S && (t[E] = 0), (o |= v);
          }
          if (l)
            for (w = 0; w < n; w++)
              if (r[w] == x) {
                t[w] = s;
                for (var C = w - 1; C >= 0; C--) {
                  if (r[C] != N) break;
                  t[C] = s;
                }
              }
        }
        function I(e, t, n) {
          if (o < e) return;
          if (e == 1 && s == m && !f) {
            n.reverse();
            return;
          }
          var r = n.length,
            i = 0,
            u,
            a,
            l,
            c;
          while (i < r) {
            if (t[i] >= e) {
              u = i + 1;
              while (u < r && t[u] >= e) u++;
              for (a = i, l = u - 1; a < l; a++, l--)
                (c = n[a]), (n[a] = n[l]), (n[l] = c);
              i = u;
            }
            i++;
          }
        }
        function q(e, t, n, r) {
          var i = t[r],
            o,
            c,
            h,
            p;
          switch (i) {
            case g:
            case y:
              u = !1;
            case E:
            case w:
              return i;
            case b:
              return u ? w : b;
            case T:
              return (u = !0), (a = !0), y;
            case N:
              return E;
            case C:
              if (
                r < 1 ||
                r + 1 >= t.length ||
                ((o = n[r - 1]) != b && o != w) ||
                ((c = t[r + 1]) != b && c != w)
              )
                return E;
              return u && (c = w), c == o ? c : E;
            case k:
              o = r > 0 ? n[r - 1] : S;
              if (o == b && r + 1 < t.length && t[r + 1] == b) return b;
              return E;
            case L:
              if (r > 0 && n[r - 1] == b) return b;
              if (u) return E;
              (p = r + 1), (h = t.length);
              while (p < h && t[p] == L) p++;
              if (p < h && t[p] == b) return b;
              return E;
            case A:
              (h = t.length), (p = r + 1);
              while (p < h && t[p] == A) p++;
              if (p < h) {
                var d = e[r],
                  v = (d >= 1425 && d <= 2303) || d == 64286;
                o = t[p];
                if (v && (o == y || o == T)) return y;
              }
              if (r < 1 || (o = t[r - 1]) == S) return E;
              return n[r - 1];
            case S:
              return (u = !1), (f = !0), s;
            case x:
              return (l = !0), E;
            case O:
            case M:
            case D:
            case P:
            case _:
              u = !1;
            case H:
              return E;
          }
        }
        function R(e) {
          var t = e.charCodeAt(0),
            n = t >> 8;
          return n == 0
            ? t > 191
              ? g
              : B[t]
            : n == 5
            ? /[\u0591-\u05f4]/.test(e)
              ? y
              : g
            : n == 6
            ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e)
              ? A
              : /[\u0660-\u0669\u066b-\u066c]/.test(e)
              ? w
              : t == 1642
              ? L
              : /[\u06f0-\u06f9]/.test(e)
              ? b
              : T
            : n == 32 && t <= 8287
            ? j[t & 255]
            : n == 254
            ? t >= 65136
              ? T
              : E
            : E;
        }
        function U(e) {
          return e >= "\u064b" && e <= "\u0655";
        }
        var r = ["\u0621", "\u0641"],
          i = ["\u063a", "\u064a"],
          s = 0,
          o = 0,
          u = !1,
          a = !1,
          f = !1,
          l = !1,
          c = !1,
          h = !1,
          p = [
            [0, 3, 0, 1, 0, 0, 0],
            [0, 3, 0, 1, 2, 2, 0],
            [0, 3, 0, 17, 2, 0, 1],
            [0, 3, 5, 5, 4, 1, 0],
            [0, 3, 21, 21, 4, 0, 1],
            [0, 3, 5, 5, 4, 2, 0],
          ],
          d = [
            [2, 0, 1, 1, 0, 1, 0],
            [2, 0, 1, 1, 0, 2, 0],
            [2, 0, 2, 1, 3, 2, 0],
            [2, 0, 2, 33, 3, 1, 1],
          ],
          v = 0,
          m = 1,
          g = 0,
          y = 1,
          b = 2,
          w = 3,
          E = 4,
          S = 5,
          x = 6,
          T = 7,
          N = 8,
          C = 9,
          k = 10,
          L = 11,
          A = 12,
          O = 13,
          M = 14,
          _ = 15,
          D = 16,
          P = 17,
          H = 18,
          B = [
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            x,
            S,
            x,
            N,
            S,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            S,
            S,
            S,
            x,
            N,
            E,
            E,
            L,
            L,
            L,
            E,
            E,
            E,
            E,
            E,
            k,
            C,
            k,
            C,
            C,
            b,
            b,
            b,
            b,
            b,
            b,
            b,
            b,
            b,
            b,
            C,
            E,
            E,
            E,
            E,
            E,
            E,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            E,
            E,
            E,
            E,
            E,
            E,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            E,
            E,
            E,
            E,
            H,
            H,
            H,
            H,
            H,
            H,
            S,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            H,
            C,
            E,
            L,
            L,
            L,
            L,
            E,
            E,
            E,
            E,
            g,
            E,
            E,
            H,
            E,
            E,
            L,
            L,
            b,
            b,
            E,
            g,
            E,
            E,
            E,
            b,
            g,
            E,
            E,
            E,
            E,
            E,
          ],
          j = [
            N,
            N,
            N,
            N,
            N,
            N,
            N,
            N,
            N,
            N,
            N,
            H,
            H,
            H,
            g,
            y,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            N,
            S,
            O,
            M,
            _,
            D,
            P,
            C,
            L,
            L,
            L,
            L,
            L,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            C,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            E,
            N,
          ];
        (t.L = g),
          (t.R = y),
          (t.EN = b),
          (t.ON_R = 3),
          (t.AN = 4),
          (t.R_H = 5),
          (t.B = 6),
          (t.RLE = 7),
          (t.DOT = "\u00b7"),
          (t.doBidiReorder = function (e, n, r) {
            if (e.length < 2) return {};
            var i = e.split(""),
              o = new Array(i.length),
              u = new Array(i.length),
              a = [];
            (s = r ? m : v), F(i, a, i.length, n);
            for (var f = 0; f < o.length; o[f] = f, f++);
            I(2, a, o), I(1, a, o);
            for (var f = 0; f < o.length - 1; f++)
              n[f] === w
                ? (a[f] = t.AN)
                : a[f] === y &&
                  ((n[f] > T && n[f] < O) || n[f] === E || n[f] === H)
                ? (a[f] = t.ON_R)
                : f > 0 &&
                  i[f - 1] === "\u0644" &&
                  /\u0622|\u0623|\u0625|\u0627/.test(i[f]) &&
                  ((a[f - 1] = a[f] = t.R_H), f++);
            i[i.length - 1] === t.DOT && (a[i.length - 1] = t.B),
              i[0] === "\u202b" && (a[0] = t.RLE);
            for (var f = 0; f < o.length; f++) u[f] = a[o[f]];
            return { logicalFromVisual: o, bidiLevels: u };
          }),
          (t.hasBidiCharacters = function (e, t) {
            var n = !1;
            for (var r = 0; r < e.length; r++)
              (t[r] = R(e.charAt(r))),
                !n && (t[r] == y || t[r] == T || t[r] == w) && (n = !0);
            return n;
          }),
          (t.getVisualFromLogicalIdx = function (e, t) {
            for (var n = 0; n < t.logicalFromVisual.length; n++)
              if (t.logicalFromVisual[n] == e) return n;
            return 0;
          });
      }
    ),
    define(
      "ace/bidihandler",
      ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"],
      function (e, t, n) {
        "use strict";
        var r = e("./lib/bidiutil"),
          i = e("./lib/lang"),
          s = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,
          o = (function () {
            function e(e) {
              (this.session = e),
                (this.bidiMap = {}),
                (this.currentRow = null),
                (this.bidiUtil = r),
                (this.charWidths = []),
                (this.EOL = "\u00ac"),
                (this.showInvisibles = !0),
                (this.isRtlDir = !1),
                (this.$isRtl = !1),
                (this.line = ""),
                (this.wrapIndent = 0),
                (this.EOF = "\u00b6"),
                (this.RLE = "\u202b"),
                (this.contentWidth = 0),
                (this.fontMetrics = null),
                (this.rtlLineOffset = 0),
                (this.wrapOffset = 0),
                (this.isMoveLeftOperation = !1),
                (this.seenBidi = s.test(e.getValue()));
            }
            return (
              (e.prototype.isBidiRow = function (e, t, n) {
                return this.seenBidi
                  ? (e !== this.currentRow &&
                      ((this.currentRow = e),
                      this.updateRowLine(t, n),
                      this.updateBidiMap()),
                    this.bidiMap.bidiLevels)
                  : !1;
              }),
              (e.prototype.onChange = function (e) {
                this.seenBidi
                  ? (this.currentRow = null)
                  : e.action == "insert" &&
                    s.test(e.lines.join("\n")) &&
                    ((this.seenBidi = !0), (this.currentRow = null));
              }),
              (e.prototype.getDocumentRow = function () {
                var e = 0,
                  t = this.session.$screenRowCache;
                if (t.length) {
                  var n = this.session.$getRowCacheIndex(t, this.currentRow);
                  n >= 0 && (e = this.session.$docRowCache[n]);
                }
                return e;
              }),
              (e.prototype.getSplitIndex = function () {
                var e = 0,
                  t = this.session.$screenRowCache;
                if (t.length) {
                  var n,
                    r = this.session.$getRowCacheIndex(t, this.currentRow);
                  while (this.currentRow - e > 0) {
                    n = this.session.$getRowCacheIndex(
                      t,
                      this.currentRow - e - 1
                    );
                    if (n !== r) break;
                    (r = n), e++;
                  }
                } else e = this.currentRow;
                return e;
              }),
              (e.prototype.updateRowLine = function (e, t) {
                e === undefined && (e = this.getDocumentRow());
                var n = e === this.session.getLength() - 1,
                  s = n ? this.EOF : this.EOL;
                (this.wrapIndent = 0),
                  (this.line = this.session.getLine(e)),
                  (this.isRtlDir =
                    this.$isRtl || this.line.charAt(0) === this.RLE);
                if (this.session.$useWrapMode) {
                  var o = this.session.$wrapData[e];
                  o &&
                    (t === undefined && (t = this.getSplitIndex()),
                    t > 0 && o.length
                      ? ((this.wrapIndent = o.indent),
                        (this.wrapOffset =
                          this.wrapIndent * this.charWidths[r.L]),
                        (this.line =
                          t < o.length
                            ? this.line.substring(o[t - 1], o[t])
                            : this.line.substring(o[o.length - 1])))
                      : (this.line = this.line.substring(0, o[t])),
                    t == o.length &&
                      (this.line += this.showInvisibles ? s : r.DOT));
                } else this.line += this.showInvisibles ? s : r.DOT;
                var u = this.session,
                  a = 0,
                  f;
                (this.line = this.line.replace(
                  /\t|[\u1100-\u2029, \u202F-\uFFE6]/g,
                  function (e, t) {
                    return e === "	" || u.isFullWidth(e.charCodeAt(0))
                      ? ((f = e === "	" ? u.getScreenTabSize(t + a) : 2),
                        (a += f - 1),
                        i.stringRepeat(r.DOT, f))
                      : e;
                  }
                )),
                  this.isRtlDir &&
                    ((this.fontMetrics.$main.textContent =
                      this.line.charAt(this.line.length - 1) == r.DOT
                        ? this.line.substr(0, this.line.length - 1)
                        : this.line),
                    (this.rtlLineOffset =
                      this.contentWidth -
                      this.fontMetrics.$main.getBoundingClientRect().width));
              }),
              (e.prototype.updateBidiMap = function () {
                var e = [];
                r.hasBidiCharacters(this.line, e) || this.isRtlDir
                  ? (this.bidiMap = r.doBidiReorder(this.line, e, this.isRtlDir))
                  : (this.bidiMap = {});
              }),
              (e.prototype.markAsDirty = function () {
                this.currentRow = null;
              }),
              (e.prototype.updateCharacterWidths = function (e) {
                if (this.characterWidth === e.$characterSize.width) return;
                this.fontMetrics = e;
                var t = (this.characterWidth = e.$characterSize.width),
                  n = e.$measureCharWidth("\u05d4");
                (this.charWidths[r.L] =
                  this.charWidths[r.EN] =
                  this.charWidths[r.ON_R] =
                    t),
                  (this.charWidths[r.R] = this.charWidths[r.AN] = n),
                  (this.charWidths[r.R_H] = n * 0.45),
                  (this.charWidths[r.B] = this.charWidths[r.RLE] = 0),
                  (this.currentRow = null);
              }),
              (e.prototype.setShowInvisibles = function (e) {
                (this.showInvisibles = e), (this.currentRow = null);
              }),
              (e.prototype.setEolChar = function (e) {
                this.EOL = e;
              }),
              (e.prototype.setContentWidth = function (e) {
                this.contentWidth = e;
              }),
              (e.prototype.isRtlLine = function (e) {
                return this.$isRtl
                  ? !0
                  : e != undefined
                  ? this.session.getLine(e).charAt(0) == this.RLE
                  : this.isRtlDir;
              }),
              (e.prototype.setRtlDirection = function (e, t) {
                var n = e.getCursorPosition();
                for (
                  var r = e.selection.getSelectionAnchor().row;
                  r <= n.row;
                  r++
                )
                  !t &&
                  e.session.getLine(r).charAt(0) === e.session.$bidiHandler.RLE
                    ? e.session.doc.removeInLine(r, 0, 1)
                    : t &&
                      e.session.getLine(r).charAt(0) !==
                        e.session.$bidiHandler.RLE &&
                      e.session.doc.insert(
                        { column: 0, row: r },
                        e.session.$bidiHandler.RLE
                      );
              }),
              (e.prototype.getPosLeft = function (e) {
                e -= this.wrapIndent;
                var t = this.line.charAt(0) === this.RLE ? 1 : 0,
                  n = e > t ? (this.session.getOverwrite() ? e : e - 1) : t,
                  i = r.getVisualFromLogicalIdx(n, this.bidiMap),
                  s = this.bidiMap.bidiLevels,
                  o = 0;
                !this.session.getOverwrite() && e <= t && s[i] % 2 !== 0 && i++;
                for (var u = 0; u < i; u++) o += this.charWidths[s[u]];
                return (
                  !this.session.getOverwrite() &&
                    e > t &&
                    s[i] % 2 === 0 &&
                    (o += this.charWidths[s[i]]),
                  this.wrapIndent &&
                    (o += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset),
                  this.isRtlDir && (o += this.rtlLineOffset),
                  o
                );
              }),
              (e.prototype.getSelections = function (e, t) {
                var n = this.bidiMap,
                  r = n.bidiLevels,
                  i,
                  s = [],
                  o = 0,
                  u = Math.min(e, t) - this.wrapIndent,
                  a = Math.max(e, t) - this.wrapIndent,
                  f = !1,
                  l = !1,
                  c = 0;
                this.wrapIndent &&
                  (o += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
                for (var h, p = 0; p < r.length; p++)
                  (h = n.logicalFromVisual[p]),
                    (i = r[p]),
                    (f = h >= u && h < a),
                    f && !l
                      ? (c = o)
                      : !f && l && s.push({ left: c, width: o - c }),
                    (o += this.charWidths[i]),
                    (l = f);
                f && p === r.length && s.push({ left: c, width: o - c });
                if (this.isRtlDir)
                  for (var d = 0; d < s.length; d++)
                    s[d].left += this.rtlLineOffset;
                return s;
              }),
              (e.prototype.offsetToCol = function (e) {
                this.isRtlDir && (e -= this.rtlLineOffset);
                var t = 0,
                  e = Math.max(e, 0),
                  n = 0,
                  r = 0,
                  i = this.bidiMap.bidiLevels,
                  s = this.charWidths[i[r]];
                this.wrapIndent &&
                  (e -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
                while (e > n + s / 2) {
                  n += s;
                  if (r === i.length - 1) {
                    s = 0;
                    break;
                  }
                  s = this.charWidths[i[++r]];
                }
                return (
                  r > 0 && i[r - 1] % 2 !== 0 && i[r] % 2 === 0
                    ? (e < n && r--, (t = this.bidiMap.logicalFromVisual[r]))
                    : r > 0 && i[r - 1] % 2 === 0 && i[r] % 2 !== 0
                    ? (t =
                        1 +
                        (e > n
                          ? this.bidiMap.logicalFromVisual[r]
                          : this.bidiMap.logicalFromVisual[r - 1]))
                    : (this.isRtlDir &&
                        r === i.length - 1 &&
                        s === 0 &&
                        i[r - 1] % 2 === 0) ||
                      (!this.isRtlDir && r === 0 && i[r] % 2 !== 0)
                    ? (t = 1 + this.bidiMap.logicalFromVisual[r])
                    : (r > 0 && i[r - 1] % 2 !== 0 && s !== 0 && r--,
                      (t = this.bidiMap.logicalFromVisual[r])),
                  t === 0 && this.isRtlDir && t++,
                  t + this.wrapIndent
                );
              }),
              e
            );
          })();
        t.BidiHandler = o;
      }
    ),
    define(
      "ace/selection",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/lang",
        "ace/lib/event_emitter",
        "ace/range",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("./lib/oop"),
          i = e("./lib/lang"),
          s = e("./lib/event_emitter").EventEmitter,
          o = e("./range").Range,
          u = function (e) {
            (this.session = e),
              (this.doc = e.getDocument()),
              this.clearSelection(),
              (this.cursor = this.lead = this.doc.createAnchor(0, 0)),
              (this.anchor = this.doc.createAnchor(0, 0)),
              (this.$silent = !1);
            var t = this;
            this.cursor.on("change", function (e) {
              (t.$cursorChanged = !0),
                t.$silent || t._emit("changeCursor"),
                !t.$isEmpty && !t.$silent && t._emit("changeSelection"),
                !t.$keepDesiredColumnOnChange &&
                  e.old.column != e.value.column &&
                  (t.$desiredColumn = null);
            }),
              this.anchor.on("change", function () {
                (t.$anchorChanged = !0),
                  !t.$isEmpty && !t.$silent && t._emit("changeSelection");
              });
          };
        (function () {
          r.implement(this, s),
            (this.isEmpty = function () {
              return (
                this.$isEmpty ||
                (this.anchor.row == this.lead.row &&
                  this.anchor.column == this.lead.column)
              );
            }),
            (this.isMultiLine = function () {
              return !this.$isEmpty && this.anchor.row != this.cursor.row;
            }),
            (this.getCursor = function () {
              return this.lead.getPosition();
            }),
            (this.setAnchor = function (e, t) {
              (this.$isEmpty = !1), this.anchor.setPosition(e, t);
            }),
            (this.setSelectionAnchor = this.setAnchor),
            (this.getAnchor = function () {
              return this.$isEmpty
                ? this.getSelectionLead()
                : this.anchor.getPosition();
            }),
            (this.getSelectionAnchor = this.getAnchor),
            (this.getSelectionLead = function () {
              return this.lead.getPosition();
            }),
            (this.isBackwards = function () {
              var e = this.anchor,
                t = this.lead;
              return e.row > t.row || (e.row == t.row && e.column > t.column);
            }),
            (this.getRange = function () {
              var e = this.anchor,
                t = this.lead;
              return this.$isEmpty
                ? o.fromPoints(t, t)
                : this.isBackwards()
                ? o.fromPoints(t, e)
                : o.fromPoints(e, t);
            }),
            (this.clearSelection = function () {
              this.$isEmpty ||
                ((this.$isEmpty = !0), this._emit("changeSelection"));
            }),
            (this.selectAll = function () {
              this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
            }),
            (this.setRange = this.setSelectionRange =
              function (e, t) {
                var n = t ? e.end : e.start,
                  r = t ? e.start : e.end;
                this.$setSelection(n.row, n.column, r.row, r.column);
              }),
            (this.$setSelection = function (e, t, n, r) {
              if (this.$silent) return;
              var i = this.$isEmpty,
                s = this.inMultiSelectMode;
              (this.$silent = !0),
                (this.$cursorChanged = this.$anchorChanged = !1),
                this.anchor.setPosition(e, t),
                this.cursor.setPosition(n, r),
                (this.$isEmpty = !o.comparePoints(this.anchor, this.cursor)),
                (this.$silent = !1),
                this.$cursorChanged && this._emit("changeCursor"),
                (this.$cursorChanged ||
                  this.$anchorChanged ||
                  i != this.$isEmpty ||
                  s) &&
                  this._emit("changeSelection");
            }),
            (this.$moveSelection = function (e) {
              var t = this.lead;
              this.$isEmpty && this.setSelectionAnchor(t.row, t.column),
                e.call(this);
            }),
            (this.selectTo = function (e, t) {
              this.$moveSelection(function () {
                this.moveCursorTo(e, t);
              });
            }),
            (this.selectToPosition = function (e) {
              this.$moveSelection(function () {
                this.moveCursorToPosition(e);
              });
            }),
            (this.moveTo = function (e, t) {
              this.clearSelection(), this.moveCursorTo(e, t);
            }),
            (this.moveToPosition = function (e) {
              this.clearSelection(), this.moveCursorToPosition(e);
            }),
            (this.selectUp = function () {
              this.$moveSelection(this.moveCursorUp);
            }),
            (this.selectDown = function () {
              this.$moveSelection(this.moveCursorDown);
            }),
            (this.selectRight = function () {
              this.$moveSelection(this.moveCursorRight);
            }),
            (this.selectLeft = function () {
              this.$moveSelection(this.moveCursorLeft);
            }),
            (this.selectLineStart = function () {
              this.$moveSelection(this.moveCursorLineStart);
            }),
            (this.selectLineEnd = function () {
              this.$moveSelection(this.moveCursorLineEnd);
            }),
            (this.selectFileEnd = function () {
              this.$moveSelection(this.moveCursorFileEnd);
            }),
            (this.selectFileStart = function () {
              this.$moveSelection(this.moveCursorFileStart);
            }),
            (this.selectWordRight = function () {
              this.$moveSelection(this.moveCursorWordRight);
            }),
            (this.selectWordLeft = function () {
              this.$moveSelection(this.moveCursorWordLeft);
            }),
            (this.getWordRange = function (e, t) {
              if (typeof t == "undefined") {
                var n = e || this.lead;
                (e = n.row), (t = n.column);
              }
              return this.session.getWordRange(e, t);
            }),
            (this.selectWord = function () {
              this.setSelectionRange(this.getWordRange());
            }),
            (this.selectAWord = function () {
              var e = this.getCursor(),
                t = this.session.getAWordRange(e.row, e.column);
              this.setSelectionRange(t);
            }),
            (this.getLineRange = function (e, t) {
              var n = typeof e == "number" ? e : this.lead.row,
                r,
                i = this.session.getFoldLine(n);
              return (
                i ? ((n = i.start.row), (r = i.end.row)) : (r = n),
                t === !0
                  ? new o(n, 0, r, this.session.getLine(r).length)
                  : new o(n, 0, r + 1, 0)
              );
            }),
            (this.selectLine = function () {
              this.setSelectionRange(this.getLineRange());
            }),
            (this.moveCursorUp = function () {
              this.moveCursorBy(-1, 0);
            }),
            (this.moveCursorDown = function () {
              this.moveCursorBy(1, 0);
            }),
            (this.wouldMoveIntoSoftTab = function (e, t, n) {
              var r = e.column,
                i = e.column + t;
              return (
                n < 0 && ((r = e.column - t), (i = e.column)),
                this.session.isTabStop(e) &&
                  this.doc.getLine(e.row).slice(r, i).split(" ").length - 1 == t
              );
            }),
            (this.moveCursorLeft = function () {
              var e = this.lead.getPosition(),
                t;
              if ((t = this.session.getFoldAt(e.row, e.column, -1)))
                this.moveCursorTo(t.start.row, t.start.column);
              else if (e.column === 0)
                e.row > 0 &&
                  this.moveCursorTo(
                    e.row - 1,
                    this.doc.getLine(e.row - 1).length
                  );
              else {
                var n = this.session.getTabSize();
                this.wouldMoveIntoSoftTab(e, n, -1) &&
                !this.session.getNavigateWithinSoftTabs()
                  ? this.moveCursorBy(0, -n)
                  : this.moveCursorBy(0, -1);
              }
            }),
            (this.moveCursorRight = function () {
              var e = this.lead.getPosition(),
                t;
              if ((t = this.session.getFoldAt(e.row, e.column, 1)))
                this.moveCursorTo(t.end.row, t.end.column);
              else if (this.lead.column == this.doc.getLine(this.lead.row).length)
                this.lead.row < this.doc.getLength() - 1 &&
                  this.moveCursorTo(this.lead.row + 1, 0);
              else {
                var n = this.session.getTabSize(),
                  e = this.lead;
                this.wouldMoveIntoSoftTab(e, n, 1) &&
                !this.session.getNavigateWithinSoftTabs()
                  ? this.moveCursorBy(0, n)
                  : this.moveCursorBy(0, 1);
              }
            }),
            (this.moveCursorLineStart = function () {
              var e = this.lead.row,
                t = this.lead.column,
                n = this.session.documentToScreenRow(e, t),
                r = this.session.screenToDocumentPosition(n, 0),
                i = this.session.getDisplayLine(e, null, r.row, r.column),
                s = i.match(/^\s*/);
              s[0].length != t &&
                !this.session.$useEmacsStyleLineStart &&
                (r.column += s[0].length),
                this.moveCursorToPosition(r);
            }),
            (this.moveCursorLineEnd = function () {
              var e = this.lead,
                t = this.session.getDocumentLastRowColumnPosition(
                  e.row,
                  e.column
                );
              if (this.lead.column == t.column) {
                var n = this.session.getLine(t.row);
                if (t.column == n.length) {
                  var r = n.search(/\s+$/);
                  r > 0 && (t.column = r);
                }
              }
              this.moveCursorTo(t.row, t.column);
            }),
            (this.moveCursorFileEnd = function () {
              var e = this.doc.getLength() - 1,
                t = this.doc.getLine(e).length;
              this.moveCursorTo(e, t);
            }),
            (this.moveCursorFileStart = function () {
              this.moveCursorTo(0, 0);
            }),
            (this.moveCursorLongWordRight = function () {
              var e = this.lead.row,
                t = this.lead.column,
                n = this.doc.getLine(e),
                r = n.substring(t);
              (this.session.nonTokenRe.lastIndex = 0),
                (this.session.tokenRe.lastIndex = 0);
              var i = this.session.getFoldAt(e, t, 1);
              if (i) {
                this.moveCursorTo(i.end.row, i.end.column);
                return;
              }
              this.session.nonTokenRe.exec(r) &&
                ((t += this.session.nonTokenRe.lastIndex),
                (this.session.nonTokenRe.lastIndex = 0),
                (r = n.substring(t)));
              if (t >= n.length) {
                this.moveCursorTo(e, n.length),
                  this.moveCursorRight(),
                  e < this.doc.getLength() - 1 && this.moveCursorWordRight();
                return;
              }
              this.session.tokenRe.exec(r) &&
                ((t += this.session.tokenRe.lastIndex),
                (this.session.tokenRe.lastIndex = 0)),
                this.moveCursorTo(e, t);
            }),
            (this.moveCursorLongWordLeft = function () {
              var e = this.lead.row,
                t = this.lead.column,
                n;
              if ((n = this.session.getFoldAt(e, t, -1))) {
                this.moveCursorTo(n.start.row, n.start.column);
                return;
              }
              var r = this.session.getFoldStringAt(e, t, -1);
              r == null && (r = this.doc.getLine(e).substring(0, t));
              var s = i.stringReverse(r);
              (this.session.nonTokenRe.lastIndex = 0),
                (this.session.tokenRe.lastIndex = 0),
                this.session.nonTokenRe.exec(s) &&
                  ((t -= this.session.nonTokenRe.lastIndex),
                  (s = s.slice(this.session.nonTokenRe.lastIndex)),
                  (this.session.nonTokenRe.lastIndex = 0));
              if (t <= 0) {
                this.moveCursorTo(e, 0),
                  this.moveCursorLeft(),
                  e > 0 && this.moveCursorWordLeft();
                return;
              }
              this.session.tokenRe.exec(s) &&
                ((t -= this.session.tokenRe.lastIndex),
                (this.session.tokenRe.lastIndex = 0)),
                this.moveCursorTo(e, t);
            }),
            (this.$shortWordEndIndex = function (e) {
              var t = 0,
                n,
                r = /\s/,
                i = this.session.tokenRe;
              i.lastIndex = 0;
              if (this.session.tokenRe.exec(e))
                t = this.session.tokenRe.lastIndex;
              else {
                while ((n = e[t]) && r.test(n)) t++;
                if (t < 1) {
                  i.lastIndex = 0;
                  while ((n = e[t]) && !i.test(n)) {
                    (i.lastIndex = 0), t++;
                    if (r.test(n)) {
                      if (t > 2) {
                        t--;
                        break;
                      }
                      while ((n = e[t]) && r.test(n)) t++;
                      if (t > 2) break;
                    }
                  }
                }
              }
              return (i.lastIndex = 0), t;
            }),
            (this.moveCursorShortWordRight = function () {
              var e = this.lead.row,
                t = this.lead.column,
                n = this.doc.getLine(e),
                r = n.substring(t),
                i = this.session.getFoldAt(e, t, 1);
              if (i) return this.moveCursorTo(i.end.row, i.end.column);
              if (t == n.length) {
                var s = this.doc.getLength();
                do e++, (r = this.doc.getLine(e));
                while (e < s && /^\s*$/.test(r));
                /^\s+/.test(r) || (r = ""), (t = 0);
              }
              var o = this.$shortWordEndIndex(r);
              this.moveCursorTo(e, t + o);
            }),
            (this.moveCursorShortWordLeft = function () {
              var e = this.lead.row,
                t = this.lead.column,
                n;
              if ((n = this.session.getFoldAt(e, t, -1)))
                return this.moveCursorTo(n.start.row, n.start.column);
              var r = this.session.getLine(e).substring(0, t);
              if (t === 0) {
                do e--, (r = this.doc.getLine(e));
                while (e > 0 && /^\s*$/.test(r));
                (t = r.length), /\s+$/.test(r) || (r = "");
              }
              var s = i.stringReverse(r),
                o = this.$shortWordEndIndex(s);
              return this.moveCursorTo(e, t - o);
            }),
            (this.moveCursorWordRight = function () {
              this.session.$selectLongWords
                ? this.moveCursorLongWordRight()
                : this.moveCursorShortWordRight();
            }),
            (this.moveCursorWordLeft = function () {
              this.session.$selectLongWords
                ? this.moveCursorLongWordLeft()
                : this.moveCursorShortWordLeft();
            }),
            (this.moveCursorBy = function (e, t) {
              var n = this.session.documentToScreenPosition(
                  this.lead.row,
                  this.lead.column
                ),
                r;
              t === 0 &&
                (e !== 0 &&
                  (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row)
                    ? ((r = this.session.$bidiHandler.getPosLeft(n.column)),
                      (n.column = Math.round(
                        r / this.session.$bidiHandler.charWidths[0]
                      )))
                    : (r = n.column * this.session.$bidiHandler.charWidths[0])),
                this.$desiredColumn
                  ? (n.column = this.$desiredColumn)
                  : (this.$desiredColumn = n.column));
              if (
                e != 0 &&
                this.session.lineWidgets &&
                this.session.lineWidgets[this.lead.row]
              ) {
                var i = this.session.lineWidgets[this.lead.row];
                e < 0
                  ? (e -= i.rowsAbove || 0)
                  : e > 0 && (e += i.rowCount - (i.rowsAbove || 0));
              }
              var s = this.session.screenToDocumentPosition(
                n.row + e,
                n.column,
                r
              );
              e !== 0 &&
                t === 0 &&
                s.row === this.lead.row &&
                s.column === this.lead.column,
                this.moveCursorTo(s.row, s.column + t, t === 0);
            }),
            (this.moveCursorToPosition = function (e) {
              this.moveCursorTo(e.row, e.column);
            }),
            (this.moveCursorTo = function (e, t, n) {
              var r = this.session.getFoldAt(e, t, 1);
              r && ((e = r.start.row), (t = r.start.column)),
                (this.$keepDesiredColumnOnChange = !0);
              var i = this.session.getLine(e);
              /[\uDC00-\uDFFF]/.test(i.charAt(t)) &&
                i.charAt(t - 1) &&
                (this.lead.row == e && this.lead.column == t + 1
                  ? (t -= 1)
                  : (t += 1)),
                this.lead.setPosition(e, t),
                (this.$keepDesiredColumnOnChange = !1),
                n || (this.$desiredColumn = null);
            }),
            (this.moveCursorToScreen = function (e, t, n) {
              var r = this.session.screenToDocumentPosition(e, t);
              this.moveCursorTo(r.row, r.column, n);
            }),
            (this.detach = function () {
              this.lead.detach(), this.anchor.detach();
            }),
            (this.fromOrientedRange = function (e) {
              this.setSelectionRange(e, e.cursor == e.start),
                (this.$desiredColumn = e.desiredColumn || this.$desiredColumn);
            }),
            (this.toOrientedRange = function (e) {
              var t = this.getRange();
              return (
                e
                  ? ((e.start.column = t.start.column),
                    (e.start.row = t.start.row),
                    (e.end.column = t.end.column),
                    (e.end.row = t.end.row))
                  : (e = t),
                (e.cursor = this.isBackwards() ? e.start : e.end),
                (e.desiredColumn = this.$desiredColumn),
                e
              );
            }),
            (this.getRangeOfMovements = function (e) {
              var t = this.getCursor();
              try {
                e(this);
                var n = this.getCursor();
                return o.fromPoints(t, n);
              } catch (r) {
                return o.fromPoints(t, t);
              } finally {
                this.moveCursorToPosition(t);
              }
            }),
            (this.toJSON = function () {
              if (this.rangeCount)
                var e = this.ranges.map(function (e) {
                  var t = e.clone();
                  return (t.isBackwards = e.cursor == e.start), t;
                });
              else {
                var e = this.getRange();
                e.isBackwards = this.isBackwards();
              }
              return e;
            }),
            (this.fromJSON = function (e) {
              if (e.start == undefined) {
                if (this.rangeList && e.length > 1) {
                  this.toSingleRange(e[0]);
                  for (var t = e.length; t--; ) {
                    var n = o.fromPoints(e[t].start, e[t].end);
                    e[t].isBackwards && (n.cursor = n.start),
                      this.addRange(n, !0);
                  }
                  return;
                }
                e = e[0];
              }
              this.rangeList && this.toSingleRange(e),
                this.setSelectionRange(e, e.isBackwards);
            }),
            (this.isEqual = function (e) {
              if ((e.length || this.rangeCount) && e.length != this.rangeCount)
                return !1;
              if (!e.length || !this.ranges) return this.getRange().isEqual(e);
              for (var t = this.ranges.length; t--; )
                if (!this.ranges[t].isEqual(e[t])) return !1;
              return !0;
            });
        }).call(u.prototype),
          (t.Selection = u);
      }
    ),
    define(
      "ace/tokenizer",
      ["require", "exports", "module", "ace/config"],
      function (e, t, n) {
        "use strict";
        var r = e("./config"),
          i = 2e3,
          s = (function () {
            function e(e) {
              (this.states = e), (this.regExps = {}), (this.matchMappings = {});
              for (var t in this.states) {
                var n = this.states[t],
                  r = [],
                  i = 0,
                  s = (this.matchMappings[t] = { defaultToken: "text" }),
                  o = "g",
                  u = [];
                for (var a = 0; a < n.length; a++) {
                  var f = n[a];
                  f.defaultToken && (s.defaultToken = f.defaultToken),
                    f.caseInsensitive && o.indexOf("i") === -1 && (o += "i"),
                    f.unicode && o.indexOf("u") === -1 && (o += "u");
                  if (f.regex == null) continue;
                  f.regex instanceof RegExp &&
                    (f.regex = f.regex.toString().slice(1, -1));
                  var l = f.regex,
                    c = new RegExp("(?:(" + l + ")|(.))").exec("a").length - 2;
                  Array.isArray(f.token)
                    ? f.token.length == 1 || c == 1
                      ? (f.token = f.token[0])
                      : c - 1 != f.token.length
                      ? (this.reportError(
                          "number of classes and regexp groups doesn't match",
                          { rule: f, groupCount: c - 1 }
                        ),
                        (f.token = f.token[0]))
                      : ((f.tokenArray = f.token),
                        (f.token = null),
                        (f.onMatch = this.$arrayTokens))
                    : typeof f.token == "function" &&
                      !f.onMatch &&
                      (c > 1
                        ? (f.onMatch = this.$applyToken)
                        : (f.onMatch = f.token)),
                    c > 1 &&
                      (/\\\d/.test(f.regex)
                        ? (l = f.regex.replace(/\\([0-9]+)/g, function (e, t) {
                            return "\\" + (parseInt(t, 10) + i + 1);
                          }))
                        : ((c = 1), (l = this.removeCapturingGroups(f.regex))),
                      !f.splitRegex && typeof f.token != "string" && u.push(f)),
                    (s[i] = a),
                    (i += c),
                    r.push(l),
                    f.onMatch || (f.onMatch = null);
                }
                r.length || ((s[0] = 0), r.push("$")),
                  u.forEach(function (e) {
                    e.splitRegex = this.createSplitterRegexp(e.regex, o);
                  }, this),
                  (this.regExps[t] = new RegExp(
                    "(" + r.join(")|(") + ")|($)",
                    o
                  ));
              }
            }
            return (
              (e.prototype.$setMaxTokenCount = function (e) {
                i = e | 0;
              }),
              (e.prototype.$applyToken = function (e) {
                var t = this.splitRegex.exec(e).slice(1),
                  n = this.token.apply(this, t);
                if (typeof n == "string") return [{ type: n, value: e }];
                var r = [];
                for (var i = 0, s = n.length; i < s; i++)
                  t[i] && (r[r.length] = { type: n[i], value: t[i] });
                return r;
              }),
              (e.prototype.$arrayTokens = function (e) {
                if (!e) return [];
                var t = this.splitRegex.exec(e);
                if (!t) return "text";
                var n = [],
                  r = this.tokenArray;
                for (var i = 0, s = r.length; i < s; i++)
                  t[i + 1] && (n[n.length] = { type: r[i], value: t[i + 1] });
                return n;
              }),
              (e.prototype.removeCapturingGroups = function (e) {
                var t = e.replace(
                  /\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g,
                  function (e, t) {
                    return t ? "(?:" : e;
                  }
                );
                return t;
              }),
              (e.prototype.createSplitterRegexp = function (e, t) {
                if (e.indexOf("(?=") != -1) {
                  var n = 0,
                    r = !1,
                    i = {};
                  e.replace(
                    /(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,
                    function (e, t, s, o, u, a) {
                      return (
                        r
                          ? (r = u != "]")
                          : u
                          ? (r = !0)
                          : o
                          ? (n == i.stack && ((i.end = a + 1), (i.stack = -1)),
                            n--)
                          : s &&
                            (n++,
                            s.length != 1 && ((i.stack = n), (i.start = a))),
                        e
                      );
                    }
                  ),
                    i.end != null &&
                      /^\)*$/.test(e.substr(i.end)) &&
                      (e = e.substring(0, i.start) + e.substr(i.end));
                }
                return (
                  e.charAt(0) != "^" && (e = "^" + e),
                  e.charAt(e.length - 1) != "$" && (e += "$"),
                  new RegExp(e, (t || "").replace("g", ""))
                );
              }),
              (e.prototype.getLineTokens = function (e, t) {
                if (t && typeof t != "string") {
                  var n = t.slice(0);
                  (t = n[0]), t === "#tmp" && (n.shift(), (t = n.shift()));
                } else var n = [];
                var r = t || "start",
                  s = this.states[r];
                s || ((r = "start"), (s = this.states[r]));
                var o = this.matchMappings[r],
                  u = this.regExps[r];
                u.lastIndex = 0;
                var a,
                  f = [],
                  l = 0,
                  c = 0,
                  h = { type: null, value: "" };
                while ((a = u.exec(e))) {
                  var p = o.defaultToken,
                    d = null,
                    v = a[0],
                    m = u.lastIndex;
                  if (m - v.length > l) {
                    var g = e.substring(l, m - v.length);
                    h.type == p
                      ? (h.value += g)
                      : (h.type && f.push(h), (h = { type: p, value: g }));
                  }
                  for (var y = 0; y < a.length - 2; y++) {
                    if (a[y + 1] === undefined) continue;
                    (d = s[o[y]]),
                      d.onMatch ? (p = d.onMatch(v, r, n, e)) : (p = d.token),
                      d.next &&
                        (typeof d.next == "string"
                          ? (r = d.next)
                          : (r = d.next(r, n)),
                        (s = this.states[r]),
                        s ||
                          (this.reportError("state doesn't exist", r),
                          (r = "start"),
                          (s = this.states[r])),
                        (o = this.matchMappings[r]),
                        (l = m),
                        (u = this.regExps[r]),
                        (u.lastIndex = m)),
                      d.consumeLineEnd && (l = m);
                    break;
                  }
                  if (v)
                    if (typeof p == "string")
                      (!!d && d.merge === !1) || h.type !== p
                        ? (h.type && f.push(h), (h = { type: p, value: v }))
                        : (h.value += v);
                    else if (p) {
                      h.type && f.push(h), (h = { type: null, value: "" });
                      for (var y = 0; y < p.length; y++) f.push(p[y]);
                    }
                  if (l == e.length) break;
                  l = m;
                  if (c++ > i) {
                    c > 2 * e.length &&
                      this.reportError("infinite loop with in ace tokenizer", {
                        startState: t,
                        line: e,
                      });
                    while (l < e.length)
                      h.type && f.push(h),
                        (h = {
                          value: e.substring(l, (l += 500)),
                          type: "overflow",
                        });
                    (r = "start"), (n = []);
                    break;
                  }
                }
                return (
                  h.type && f.push(h),
                  n.length > 1 && n[0] !== r && n.unshift("#tmp", r),
                  { tokens: f, state: n.length ? n : r }
                );
              }),
              e
            );
          })();
        (s.prototype.reportError = r.reportError), (t.Tokenizer = s);
      }
    ),
    define(
      "ace/mode/text_highlight_rules",
      ["require", "exports", "module", "ace/lib/lang"],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/lang"),
          i = function () {
            this.$rules = {
              start: [
                { token: "empty_line", regex: "^$" },
                { defaultToken: "text" },
              ],
            };
          };
        (function () {
          (this.addRules = function (e, t) {
            if (!t) {
              for (var n in e) this.$rules[n] = e[n];
              return;
            }
            for (var n in e) {
              var r = e[n];
              for (var i = 0; i < r.length; i++) {
                var s = r[i];
                if (s.next || s.onMatch)
                  typeof s.next == "string" &&
                    s.next.indexOf(t) !== 0 &&
                    (s.next = t + s.next),
                    s.nextState &&
                      s.nextState.indexOf(t) !== 0 &&
                      (s.nextState = t + s.nextState);
              }
              this.$rules[t + n] = r;
            }
          }),
            (this.getRules = function () {
              return this.$rules;
            }),
            (this.embedRules = function (e, t, n, i, s) {
              var o = typeof e == "function" ? new e().getRules() : e;
              if (i) for (var u = 0; u < i.length; u++) i[u] = t + i[u];
              else {
                i = [];
                for (var a in o) i.push(t + a);
              }
              this.addRules(o, t);
              if (n) {
                var f = Array.prototype[s ? "push" : "unshift"];
                for (var u = 0; u < i.length; u++)
                  f.apply(this.$rules[i[u]], r.deepCopy(n));
              }
              this.$embeds || (this.$embeds = []), this.$embeds.push(t);
            }),
            (this.getEmbeds = function () {
              return this.$embeds;
            });
          var e = function (e, t) {
              return (
                (e != "start" || t.length) && t.unshift(this.nextState, e),
                this.nextState
              );
            },
            t = function (e, t) {
              return t.shift(), t.shift() || "start";
            };
          (this.normalizeRules = function () {
            function i(s) {
              var o = r[s];
              o.processed = !0;
              for (var u = 0; u < o.length; u++) {
                var a = o[u],
                  f = null;
                Array.isArray(a) && ((f = a), (a = {})),
                  !a.regex &&
                    a.start &&
                    ((a.regex = a.start),
                    a.next || (a.next = []),
                    a.next.push(
                      { defaultToken: a.token },
                      {
                        token: a.token + ".end",
                        regex: a.end || a.start,
                        next: "pop",
                      }
                    ),
                    (a.token = a.token + ".start"),
                    (a.push = !0));
                var l = a.next || a.push;
                if (l && Array.isArray(l)) {
                  var c = a.stateName;
                  c ||
                    ((c = a.token),
                    typeof c != "string" && (c = c[0] || ""),
                    r[c] && (c += n++)),
                    (r[c] = l),
                    (a.next = c),
                    i(c);
                } else l == "pop" && (a.next = t);
                a.push &&
                  ((a.nextState = a.next || a.push), (a.next = e), delete a.push);
                if (a.rules)
                  for (var h in a.rules)
                    r[h]
                      ? r[h].push && r[h].push.apply(r[h], a.rules[h])
                      : (r[h] = a.rules[h]);
                var p = typeof a == "string" ? a : a.include;
                p &&
                  (p === "$self" && (p = "start"),
                  Array.isArray(p)
                    ? (f = p.map(function (e) {
                        return r[e];
                      }))
                    : (f = r[p]));
                if (f) {
                  var d = [u, 1].concat(f);
                  a.noEscape &&
                    (d = d.filter(function (e) {
                      return !e.next;
                    })),
                    o.splice.apply(o, d),
                    u--;
                }
                a.keywordMap &&
                  ((a.token = this.createKeywordMapper(
                    a.keywordMap,
                    a.defaultToken || "text",
                    a.caseInsensitive
                  )),
                  delete a.defaultToken);
              }
            }
            var n = 0,
              r = this.$rules;
            Object.keys(r).forEach(i, this);
          }),
            (this.createKeywordMapper = function (e, t, n, r) {
              var i = Object.create(null);
              return (
                (this.$keywordList = []),
                Object.keys(e).forEach(function (t) {
                  var s = e[t],
                    o = s.split(r || "|");
                  for (var u = o.length; u--; ) {
                    var a = o[u];
                    this.$keywordList.push(a),
                      n && (a = a.toLowerCase()),
                      (i[a] = t);
                  }
                }, this),
                (e = null),
                n
                  ? function (e) {
                      return i[e.toLowerCase()] || t;
                    }
                  : function (e) {
                      return i[e] || t;
                    }
              );
            }),
            (this.getKeywords = function () {
              return this.$keywords;
            });
        }).call(i.prototype),
          (t.TextHighlightRules = i);
      }
    ),
    define(
      "ace/mode/behaviour",
      ["require", "exports", "module"],
      function (e, t, n) {
        "use strict";
        var r = function () {
          this.$behaviours = {};
        };
        (function () {
          (this.add = function (e, t, n) {
            switch (undefined) {
              case this.$behaviours:
                this.$behaviours = {};
              case this.$behaviours[e]:
                this.$behaviours[e] = {};
            }
            this.$behaviours[e][t] = n;
          }),
            (this.addBehaviours = function (e) {
              for (var t in e) for (var n in e[t]) this.add(t, n, e[t][n]);
            }),
            (this.remove = function (e) {
              this.$behaviours &&
                this.$behaviours[e] &&
                delete this.$behaviours[e];
            }),
            (this.inherit = function (e, t) {
              if (typeof e == "function") var n = new e().getBehaviours(t);
              else var n = e.getBehaviours(t);
              this.addBehaviours(n);
            }),
            (this.getBehaviours = function (e) {
              if (!e) return this.$behaviours;
              var t = {};
              for (var n = 0; n < e.length; n++)
                this.$behaviours[e[n]] && (t[e[n]] = this.$behaviours[e[n]]);
              return t;
            });
        }).call(r.prototype),
          (t.Behaviour = r);
      }
    ),
    define(
      "ace/token_iterator",
      ["require", "exports", "module", "ace/range"],
      function (e, t, n) {
        "use strict";
        var r = e("./range").Range,
          i = (function () {
            function e(e, t, n) {
              (this.$session = e),
                (this.$row = t),
                (this.$rowTokens = e.getTokens(t));
              var r = e.getTokenAt(t, n);
              this.$tokenIndex = r ? r.index : -1;
            }
            return (
              (e.prototype.stepBackward = function () {
                this.$tokenIndex -= 1;
                while (this.$tokenIndex < 0) {
                  this.$row -= 1;
                  if (this.$row < 0) return (this.$row = 0), null;
                  (this.$rowTokens = this.$session.getTokens(this.$row)),
                    (this.$tokenIndex = this.$rowTokens.length - 1);
                }
                return this.$rowTokens[this.$tokenIndex];
              }),
              (e.prototype.stepForward = function () {
                this.$tokenIndex += 1;
                var e;
                while (this.$tokenIndex >= this.$rowTokens.length) {
                  (this.$row += 1), e || (e = this.$session.getLength());
                  if (this.$row >= e) return (this.$row = e - 1), null;
                  (this.$rowTokens = this.$session.getTokens(this.$row)),
                    (this.$tokenIndex = 0);
                }
                return this.$rowTokens[this.$tokenIndex];
              }),
              (e.prototype.getCurrentToken = function () {
                return this.$rowTokens[this.$tokenIndex];
              }),
              (e.prototype.getCurrentTokenRow = function () {
                return this.$row;
              }),
              (e.prototype.getCurrentTokenColumn = function () {
                var e = this.$rowTokens,
                  t = this.$tokenIndex,
                  n = e[t].start;
                if (n !== undefined) return n;
                n = 0;
                while (t > 0) (t -= 1), (n += e[t].value.length);
                return n;
              }),
              (e.prototype.getCurrentTokenPosition = function () {
                return { row: this.$row, column: this.getCurrentTokenColumn() };
              }),
              (e.prototype.getCurrentTokenRange = function () {
                var e = this.$rowTokens[this.$tokenIndex],
                  t = this.getCurrentTokenColumn();
                return new r(this.$row, t, this.$row, t + e.value.length);
              }),
              e
            );
          })();
        t.TokenIterator = i;
      }
    ),
    define(
      "ace/mode/behaviour/cstyle",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/behaviour",
        "ace/token_iterator",
        "ace/lib/lang",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("../../lib/oop"),
          i = e("../behaviour").Behaviour,
          s = e("../../token_iterator").TokenIterator,
          o = e("../../lib/lang"),
          u = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"],
          a = [
            "text",
            "paren.rparen",
            "rparen",
            "paren",
            "punctuation.operator",
            "comment",
          ],
          f,
          l = {},
          c = { '"': '"', "'": "'" },
          h = function (e) {
            var t = -1;
            e.multiSelect &&
              ((t = e.selection.index),
              l.rangeCount != e.multiSelect.rangeCount &&
                (l = { rangeCount: e.multiSelect.rangeCount }));
            if (l[t]) return (f = l[t]);
            f = l[t] = {
              autoInsertedBrackets: 0,
              autoInsertedRow: -1,
              autoInsertedLineEnd: "",
              maybeInsertedBrackets: 0,
              maybeInsertedRow: -1,
              maybeInsertedLineStart: "",
              maybeInsertedLineEnd: "",
            };
          },
          p = function (e, t, n, r) {
            var i = e.end.row - e.start.row;
            return {
              text: n + t + r,
              selection: [0, e.start.column + 1, i, e.end.column + (i ? 0 : 1)],
            };
          },
          d = function (e) {
            (e = e || {}),
              this.add("braces", "insertion", function (t, n, r, i, s) {
                var u = r.getCursorPosition(),
                  a = i.doc.getLine(u.row);
                if (s == "{") {
                  h(r);
                  var l = r.getSelectionRange(),
                    c = i.doc.getTextRange(l);
                  if (c !== "" && c !== "{" && r.getWrapBehavioursEnabled())
                    return p(l, c, "{", "}");
                  if (d.isSaneInsertion(r, i))
                    return /[\]\}\)]/.test(a[u.column]) ||
                      r.inMultiSelectMode ||
                      e.braces
                      ? (d.recordAutoInsert(r, i, "}"),
                        { text: "{}", selection: [1, 1] })
                      : (d.recordMaybeInsert(r, i, "{"),
                        { text: "{", selection: [1, 1] });
                } else if (s == "}") {
                  h(r);
                  var v = a.substring(u.column, u.column + 1);
                  if (v == "}") {
                    var m = i.$findOpeningBracket("}", {
                      column: u.column + 1,
                      row: u.row,
                    });
                    if (m !== null && d.isAutoInsertedClosing(u, a, s))
                      return (
                        d.popAutoInsertedClosing(),
                        { text: "", selection: [1, 1] }
                      );
                  }
                } else {
                  if (s == "\n" || s == "\r\n") {
                    h(r);
                    var g = "";
                    d.isMaybeInsertedClosing(u, a) &&
                      ((g = o.stringRepeat("}", f.maybeInsertedBrackets)),
                      d.clearMaybeInsertedClosing());
                    var v = a.substring(u.column, u.column + 1);
                    if (v === "}") {
                      var y = i.findMatchingBracket(
                        { row: u.row, column: u.column + 1 },
                        "}"
                      );
                      if (!y) return null;
                      var b = this.$getIndent(i.getLine(y.row));
                    } else {
                      if (!g) {
                        d.clearMaybeInsertedClosing();
                        return;
                      }
                      var b = this.$getIndent(a);
                    }
                    var w = b + i.getTabString();
                    return {
                      text: "\n" + w + "\n" + b + g,
                      selection: [1, w.length, 1, w.length],
                    };
                  }
                  d.clearMaybeInsertedClosing();
                }
              }),
              this.add("braces", "deletion", function (e, t, n, r, i) {
                var s = r.doc.getTextRange(i);
                if (!i.isMultiLine() && s == "{") {
                  h(n);
                  var o = r.doc.getLine(i.start.row),
                    u = o.substring(i.end.column, i.end.column + 1);
                  if (u == "}") return i.end.column++, i;
                  f.maybeInsertedBrackets--;
                }
              }),
              this.add("parens", "insertion", function (e, t, n, r, i) {
                if (i == "(") {
                  h(n);
                  var s = n.getSelectionRange(),
                    o = r.doc.getTextRange(s);
                  if (o !== "" && n.getWrapBehavioursEnabled())
                    return p(s, o, "(", ")");
                  if (d.isSaneInsertion(n, r))
                    return (
                      d.recordAutoInsert(n, r, ")"),
                      { text: "()", selection: [1, 1] }
                    );
                } else if (i == ")") {
                  h(n);
                  var u = n.getCursorPosition(),
                    a = r.doc.getLine(u.row),
                    f = a.substring(u.column, u.column + 1);
                  if (f == ")") {
                    var l = r.$findOpeningBracket(")", {
                      column: u.column + 1,
                      row: u.row,
                    });
                    if (l !== null && d.isAutoInsertedClosing(u, a, i))
                      return (
                        d.popAutoInsertedClosing(),
                        { text: "", selection: [1, 1] }
                      );
                  }
                }
              }),
              this.add("parens", "deletion", function (e, t, n, r, i) {
                var s = r.doc.getTextRange(i);
                if (!i.isMultiLine() && s == "(") {
                  h(n);
                  var o = r.doc.getLine(i.start.row),
                    u = o.substring(i.start.column + 1, i.start.column + 2);
                  if (u == ")") return i.end.column++, i;
                }
              }),
              this.add("brackets", "insertion", function (e, t, n, r, i) {
                if (i == "[") {
                  h(n);
                  var s = n.getSelectionRange(),
                    o = r.doc.getTextRange(s);
                  if (o !== "" && n.getWrapBehavioursEnabled())
                    return p(s, o, "[", "]");
                  if (d.isSaneInsertion(n, r))
                    return (
                      d.recordAutoInsert(n, r, "]"),
                      { text: "[]", selection: [1, 1] }
                    );
                } else if (i == "]") {
                  h(n);
                  var u = n.getCursorPosition(),
                    a = r.doc.getLine(u.row),
                    f = a.substring(u.column, u.column + 1);
                  if (f == "]") {
                    var l = r.$findOpeningBracket("]", {
                      column: u.column + 1,
                      row: u.row,
                    });
                    if (l !== null && d.isAutoInsertedClosing(u, a, i))
                      return (
                        d.popAutoInsertedClosing(),
                        { text: "", selection: [1, 1] }
                      );
                  }
                }
              }),
              this.add("brackets", "deletion", function (e, t, n, r, i) {
                var s = r.doc.getTextRange(i);
                if (!i.isMultiLine() && s == "[") {
                  h(n);
                  var o = r.doc.getLine(i.start.row),
                    u = o.substring(i.start.column + 1, i.start.column + 2);
                  if (u == "]") return i.end.column++, i;
                }
              }),
              this.add("string_dquotes", "insertion", function (e, t, n, r, i) {
                var s = r.$mode.$quotes || c;
                if (i.length == 1 && s[i]) {
                  if (
                    this.lineCommentStart &&
                    this.lineCommentStart.indexOf(i) != -1
                  )
                    return;
                  h(n);
                  var o = i,
                    u = n.getSelectionRange(),
                    a = r.doc.getTextRange(u);
                  if (
                    a !== "" &&
                    (a.length != 1 || !s[a]) &&
                    n.getWrapBehavioursEnabled()
                  )
                    return p(u, a, o, o);
                  if (!a) {
                    var f = n.getCursorPosition(),
                      l = r.doc.getLine(f.row),
                      d = l.substring(f.column - 1, f.column),
                      v = l.substring(f.column, f.column + 1),
                      m = r.getTokenAt(f.row, f.column),
                      g = r.getTokenAt(f.row, f.column + 1);
                    if (d == "\\" && m && /escape/.test(m.type)) return null;
                    var y = m && /string|escape/.test(m.type),
                      b = !g || /string|escape/.test(g.type),
                      w;
                    if (v == o)
                      (w = y !== b), w && /string\.end/.test(g.type) && (w = !1);
                    else {
                      if (y && !b) return null;
                      if (y && b) return null;
                      var E = r.$mode.tokenRe;
                      E.lastIndex = 0;
                      var S = E.test(d);
                      E.lastIndex = 0;
                      var x = E.test(v),
                        T = r.$mode.$pairQuotesAfter,
                        N = T && T[o] && T[o].test(d);
                      if ((!N && S) || x) return null;
                      if (v && !/[\s;,.})\]\\]/.test(v)) return null;
                      var C = l[f.column - 2];
                      if (!(d != o || (C != o && !E.test(C)))) return null;
                      w = !0;
                    }
                    return { text: w ? o + o : "", selection: [1, 1] };
                  }
                }
              }),
              this.add("string_dquotes", "deletion", function (e, t, n, r, i) {
                var s = r.$mode.$quotes || c,
                  o = r.doc.getTextRange(i);
                if (!i.isMultiLine() && s.hasOwnProperty(o)) {
                  h(n);
                  var u = r.doc.getLine(i.start.row),
                    a = u.substring(i.start.column + 1, i.start.column + 2);
                  if (a == o) return i.end.column++, i;
                }
              }),
              e.closeDocComment !== !1 &&
                this.add(
                  "doc comment end",
                  "insertion",
                  function (e, t, n, r, i) {
                    if (
                      e === "doc-start" &&
                      (i === "\n" || i === "\r\n") &&
                      n.selection.isEmpty()
                    ) {
                      var s = n.getCursorPosition(),
                        o = r.doc.getLine(s.row),
                        u = r.doc.getLine(s.row + 1),
                        a = this.$getIndent(o);
                      if (/\s*\*/.test(u))
                        return /^\s*\*/.test(o)
                          ? {
                              text: i + a + "* ",
                              selection: [1, 3 + a.length, 1, 3 + a.length],
                            }
                          : {
                              text: i + a + " * ",
                              selection: [1, 3 + a.length, 1, 3 + a.length],
                            };
                      if (/\/\*\*/.test(o.substring(0, s.column)))
                        return {
                          text: i + a + " * " + i + " " + a + "*/",
                          selection: [1, 4 + a.length, 1, 4 + a.length],
                        };
                    }
                  }
                );
          };
        (d.isSaneInsertion = function (e, t) {
          var n = e.getCursorPosition(),
            r = new s(t, n.row, n.column);
          if (!this.$matchTokenType(r.getCurrentToken() || "text", u)) {
            if (/[)}\]]/.test(e.session.getLine(n.row)[n.column])) return !0;
            var i = new s(t, n.row, n.column + 1);
            if (!this.$matchTokenType(i.getCurrentToken() || "text", u))
              return !1;
          }
          return (
            r.stepForward(),
            r.getCurrentTokenRow() !== n.row ||
              this.$matchTokenType(r.getCurrentToken() || "text", a)
          );
        }),
          (d.$matchTokenType = function (e, t) {
            return t.indexOf(e.type || e) > -1;
          }),
          (d.recordAutoInsert = function (e, t, n) {
            var r = e.getCursorPosition(),
              i = t.doc.getLine(r.row);
            this.isAutoInsertedClosing(r, i, f.autoInsertedLineEnd[0]) ||
              (f.autoInsertedBrackets = 0),
              (f.autoInsertedRow = r.row),
              (f.autoInsertedLineEnd = n + i.substr(r.column)),
              f.autoInsertedBrackets++;
          }),
          (d.recordMaybeInsert = function (e, t, n) {
            var r = e.getCursorPosition(),
              i = t.doc.getLine(r.row);
            this.isMaybeInsertedClosing(r, i) || (f.maybeInsertedBrackets = 0),
              (f.maybeInsertedRow = r.row),
              (f.maybeInsertedLineStart = i.substr(0, r.column) + n),
              (f.maybeInsertedLineEnd = i.substr(r.column)),
              f.maybeInsertedBrackets++;
          }),
          (d.isAutoInsertedClosing = function (e, t, n) {
            return (
              f.autoInsertedBrackets > 0 &&
              e.row === f.autoInsertedRow &&
              n === f.autoInsertedLineEnd[0] &&
              t.substr(e.column) === f.autoInsertedLineEnd
            );
          }),
          (d.isMaybeInsertedClosing = function (e, t) {
            return (
              f.maybeInsertedBrackets > 0 &&
              e.row === f.maybeInsertedRow &&
              t.substr(e.column) === f.maybeInsertedLineEnd &&
              t.substr(0, e.column) == f.maybeInsertedLineStart
            );
          }),
          (d.popAutoInsertedClosing = function () {
            (f.autoInsertedLineEnd = f.autoInsertedLineEnd.substr(1)),
              f.autoInsertedBrackets--;
          }),
          (d.clearMaybeInsertedClosing = function () {
            f && ((f.maybeInsertedBrackets = 0), (f.maybeInsertedRow = -1));
          }),
          r.inherits(d, i),
          (t.CstyleBehaviour = d);
      }
    ),
    define("ace/unicode", ["require", "exports", "module"], function (e, t, n) {
      "use strict";
      var r = [
          48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5,
          11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2,
          82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1,
          2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0,
          17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9,
          2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3,
          9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2,
          1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2,
          2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2,
          7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3,
          9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11,
          5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2,
          4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22,
          2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2,
          2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17,
          4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14,
          2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1,
          2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2,
          0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3,
          37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2,
          3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84,
          13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2,
          2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6,
          69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5,
          62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71,
          55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3,
          7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5,
          5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4,
          11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3,
          6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0,
          17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0,
          470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93,
          18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27,
          21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44,
          25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10,
          39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7,
          11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2,
          12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5,
          15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12,
          88, 4, 5, 3, 5, 3, 5, 3, 2,
        ],
        i = 0,
        s = [];
      for (var o = 0; o < r.length; o += 2)
        s.push((i += r[o])), r[o + 1] && s.push(45, (i += r[o + 1]));
      t.wordChars = String.fromCharCode.apply(null, s);
    }),
    define(
      "ace/mode/text",
      [
        "require",
        "exports",
        "module",
        "ace/config",
        "ace/tokenizer",
        "ace/mode/text_highlight_rules",
        "ace/mode/behaviour/cstyle",
        "ace/unicode",
        "ace/lib/lang",
        "ace/token_iterator",
        "ace/range",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("../config"),
          i = e("../tokenizer").Tokenizer,
          s = e("./text_highlight_rules").TextHighlightRules,
          o = e("./behaviour/cstyle").CstyleBehaviour,
          u = e("../unicode"),
          a = e("../lib/lang"),
          f = e("../token_iterator").TokenIterator,
          l = e("../range").Range,
          c = function () {
            this.HighlightRules = s;
          };
        (function () {
          (this.$defaultBehaviour = new o()),
            (this.tokenRe = new RegExp("^[" + u.wordChars + "\\$_]+", "g")),
            (this.nonTokenRe = new RegExp(
              "^(?:[^" + u.wordChars + "\\$_]|\\s])+",
              "g"
            )),
            (this.getTokenizer = function () {
              return (
                this.$tokenizer ||
                  ((this.$highlightRules =
                    this.$highlightRules ||
                    new this.HighlightRules(this.$highlightRuleConfig)),
                  (this.$tokenizer = new i(this.$highlightRules.getRules()))),
                this.$tokenizer
              );
            }),
            (this.lineCommentStart = ""),
            (this.blockComment = ""),
            (this.toggleCommentLines = function (e, t, n, r) {
              function w(e) {
                for (var t = n; t <= r; t++) e(i.getLine(t), t);
              }
              var i = t.doc,
                s = !0,
                o = !0,
                u = Infinity,
                f = t.getTabSize(),
                l = !1;
              if (!this.lineCommentStart) {
                if (!this.blockComment) return !1;
                var c = this.blockComment.start,
                  h = this.blockComment.end,
                  p = new RegExp("^(\\s*)(?:" + a.escapeRegExp(c) + ")"),
                  d = new RegExp("(?:" + a.escapeRegExp(h) + ")\\s*$"),
                  v = function (e, t) {
                    if (g(e, t)) return;
                    if (!s || /\S/.test(e))
                      i.insertInLine({ row: t, column: e.length }, h),
                        i.insertInLine({ row: t, column: u }, c);
                  },
                  m = function (e, t) {
                    var n;
                    (n = e.match(d)) &&
                      i.removeInLine(t, e.length - n[0].length, e.length),
                      (n = e.match(p)) &&
                        i.removeInLine(t, n[1].length, n[0].length);
                  },
                  g = function (e, n) {
                    if (p.test(e)) return !0;
                    var r = t.getTokens(n);
                    for (var i = 0; i < r.length; i++)
                      if (r[i].type === "comment") return !0;
                  };
              } else {
                if (Array.isArray(this.lineCommentStart))
                  var p = this.lineCommentStart.map(a.escapeRegExp).join("|"),
                    c = this.lineCommentStart[0];
                else
                  var p = a.escapeRegExp(this.lineCommentStart),
                    c = this.lineCommentStart;
                (p = new RegExp("^(\\s*)(?:" + p + ") ?")),
                  (l = t.getUseSoftTabs());
                var m = function (e, t) {
                    var n = e.match(p);
                    if (!n) return;
                    var r = n[1].length,
                      s = n[0].length;
                    !b(e, r, s) && n[0][s - 1] == " " && s--,
                      i.removeInLine(t, r, s);
                  },
                  y = c + " ",
                  v = function (e, t) {
                    if (!s || /\S/.test(e))
                      b(e, u, u)
                        ? i.insertInLine({ row: t, column: u }, y)
                        : i.insertInLine({ row: t, column: u }, c);
                  },
                  g = function (e, t) {
                    return p.test(e);
                  },
                  b = function (e, t, n) {
                    var r = 0;
                    while (t-- && e.charAt(t) == " ") r++;
                    if (r % f != 0) return !1;
                    var r = 0;
                    while (e.charAt(n++) == " ") r++;
                    return f > 2 ? r % f != f - 1 : r % f == 0;
                  };
              }
              var E = Infinity;
              w(function (e, t) {
                var n = e.search(/\S/);
                n !== -1
                  ? (n < u && (u = n), o && !g(e, t) && (o = !1))
                  : E > e.length && (E = e.length);
              }),
                u == Infinity && ((u = E), (s = !1), (o = !1)),
                l && u % f != 0 && (u = Math.floor(u / f) * f),
                w(o ? m : v);
            }),
            (this.toggleBlockComment = function (e, t, n, r) {
              var i = this.blockComment;
              if (!i) return;
              !i.start && i[0] && (i = i[0]);
              var s = new f(t, r.row, r.column),
                o = s.getCurrentToken(),
                u = t.selection,
                a = t.selection.toOrientedRange(),
                c,
                h;
              if (o && /comment/.test(o.type)) {
                var p, d;
                while (o && /comment/.test(o.type)) {
                  var v = o.value.indexOf(i.start);
                  if (v != -1) {
                    var m = s.getCurrentTokenRow(),
                      g = s.getCurrentTokenColumn() + v;
                    p = new l(m, g, m, g + i.start.length);
                    break;
                  }
                  o = s.stepBackward();
                }
                var s = new f(t, r.row, r.column),
                  o = s.getCurrentToken();
                while (o && /comment/.test(o.type)) {
                  var v = o.value.indexOf(i.end);
                  if (v != -1) {
                    var m = s.getCurrentTokenRow(),
                      g = s.getCurrentTokenColumn() + v;
                    d = new l(m, g, m, g + i.end.length);
                    break;
                  }
                  o = s.stepForward();
                }
                d && t.remove(d),
                  p && (t.remove(p), (c = p.start.row), (h = -i.start.length));
              } else
                (h = i.start.length),
                  (c = n.start.row),
                  t.insert(n.end, i.end),
                  t.insert(n.start, i.start);
              a.start.row == c && (a.start.column += h),
                a.end.row == c && (a.end.column += h),
                t.selection.fromOrientedRange(a);
            }),
            (this.getNextLineIndent = function (e, t, n) {
              return this.$getIndent(t);
            }),
            (this.checkOutdent = function (e, t, n) {
              return !1;
            }),
            (this.autoOutdent = function (e, t, n) {}),
            (this.$getIndent = function (e) {
              return e.match(/^\s*/)[0];
            }),
            (this.createWorker = function (e) {
              return null;
            }),
            (this.createModeDelegates = function (e) {
              (this.$embeds = []), (this.$modes = {});
              for (var t in e)
                if (e[t]) {
                  var n = e[t],
                    i = n.prototype.$id,
                    s = r.$modes[i];
                  s || (r.$modes[i] = s = new n()),
                    r.$modes[t] || (r.$modes[t] = s),
                    this.$embeds.push(t),
                    (this.$modes[t] = s);
                }
              var o = [
                "toggleBlockComment",
                "toggleCommentLines",
                "getNextLineIndent",
                "checkOutdent",
                "autoOutdent",
                "transformAction",
                "getCompletions",
              ];
              for (var t = 0; t < o.length; t++)
                (function (e) {
                  var n = o[t],
                    r = e[n];
                  e[o[t]] = function () {
                    return this.$delegator(n, arguments, r);
                  };
                })(this);
            }),
            (this.$delegator = function (e, t, n) {
              var r = t[0] || "start";
              if (typeof r != "string") {
                if (Array.isArray(r[2])) {
                  var i = r[2][r[2].length - 1],
                    s = this.$modes[i];
                  if (s) return s[e].apply(s, [r[1]].concat([].slice.call(t, 1)));
                }
                r = r[0] || "start";
              }
              for (var o = 0; o < this.$embeds.length; o++) {
                if (!this.$modes[this.$embeds[o]]) continue;
                var u = r.split(this.$embeds[o]);
                if (!u[0] && u[1]) {
                  t[0] = u[1];
                  var s = this.$modes[this.$embeds[o]];
                  return s[e].apply(s, t);
                }
              }
              var a = n.apply(this, t);
              return n ? a : undefined;
            }),
            (this.transformAction = function (e, t, n, r, i) {
              if (this.$behaviour) {
                var s = this.$behaviour.getBehaviours();
                for (var o in s)
                  if (s[o][t]) {
                    var u = s[o][t].apply(this, arguments);
                    if (u) return u;
                  }
              }
            }),
            (this.getKeywords = function (e) {
              if (!this.completionKeywords) {
                var t = this.$tokenizer.rules,
                  n = [];
                for (var r in t) {
                  var i = t[r];
                  for (var s = 0, o = i.length; s < o; s++)
                    if (typeof i[s].token == "string")
                      /keyword|support|storage/.test(i[s].token) &&
                        n.push(i[s].regex);
                    else if (typeof i[s].token == "object")
                      for (var u = 0, a = i[s].token.length; u < a; u++)
                        if (/keyword|support|storage/.test(i[s].token[u])) {
                          var r = i[s].regex.match(/\(.+?\)/g)[u];
                          n.push(r.substr(1, r.length - 2));
                        }
                }
                this.completionKeywords = n;
              }
              return e ? n.concat(this.$keywordList || []) : this.$keywordList;
            }),
            (this.$createKeywordList = function () {
              return (
                this.$highlightRules || this.getTokenizer(),
                (this.$keywordList = this.$highlightRules.$keywordList || [])
              );
            }),
            (this.getCompletions = function (e, t, n, r) {
              var i = this.$keywordList || this.$createKeywordList();
              return i.map(function (e) {
                return { name: e, value: e, score: 0, meta: "keyword" };
              });
            }),
            (this.$id = "ace/mode/text");
        }).call(c.prototype),
          (t.Mode = c);
      }
    ),
    define(
      "ace/apply_delta",
      ["require", "exports", "module"],
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          throw (console.log("Invalid Delta:", e), "Invalid Delta: " + t);
        }
        function i(e, t) {
          return (
            t.row >= 0 &&
            t.row < e.length &&
            t.column >= 0 &&
            t.column <= e[t.row].length
          );
        }
        function s(e, t) {
          t.action != "insert" &&
            t.action != "remove" &&
            r(t, "delta.action must be 'insert' or 'remove'"),
            t.lines instanceof Array || r(t, "delta.lines must be an Array"),
            (!t.start || !t.end) && r(t, "delta.start/end must be an present");
          var n = t.start;
          i(e, t.start) || r(t, "delta.start must be contained in document");
          var s = t.end;
          t.action == "remove" &&
            !i(e, s) &&
            r(t, "delta.end must contained in document for 'remove' actions");
          var o = s.row - n.row,
            u = s.column - (o == 0 ? n.column : 0);
          (o != t.lines.length - 1 || t.lines[o].length != u) &&
            r(t, "delta.range must match delta lines");
        }
        t.applyDelta = function (e, t, n) {
          var r = t.start.row,
            i = t.start.column,
            s = e[r] || "";
          switch (t.action) {
            case "insert":
              var o = t.lines;
              if (o.length === 1)
                e[r] = s.substring(0, i) + t.lines[0] + s.substring(i);
              else {
                var u = [r, 1].concat(t.lines);
                e.splice.apply(e, u),
                  (e[r] = s.substring(0, i) + e[r]),
                  (e[r + t.lines.length - 1] += s.substring(i));
              }
              break;
            case "remove":
              var a = t.end.column,
                f = t.end.row;
              r === f
                ? (e[r] = s.substring(0, i) + s.substring(a))
                : e.splice(r, f - r + 1, s.substring(0, i) + e[f].substring(a));
          }
        };
      }
    ),
    define(
      "ace/anchor",
      ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"],
      function (e, t, n) {
        "use strict";
        function o(e, t, n) {
          var r = n ? e.column <= t.column : e.column < t.column;
          return e.row < t.row || (e.row == t.row && r);
        }
        function u(e, t, n) {
          var r = e.action == "insert",
            i = (r ? 1 : -1) * (e.end.row - e.start.row),
            s = (r ? 1 : -1) * (e.end.column - e.start.column),
            u = e.start,
            a = r ? u : e.end;
          return o(t, u, n)
            ? { row: t.row, column: t.column }
            : o(a, t, !n)
            ? { row: t.row + i, column: t.column + (t.row == a.row ? s : 0) }
            : { row: u.row, column: u.column };
        }
        var r = e("./lib/oop"),
          i = e("./lib/event_emitter").EventEmitter,
          s = (function () {
            function e(e, t, n) {
              (this.$onChange = this.onChange.bind(this)),
                this.attach(e),
                typeof n == "undefined"
                  ? this.setPosition(t.row, t.column)
                  : this.setPosition(t, n);
            }
            return (
              (e.prototype.getPosition = function () {
                return this.$clipPositionToDocument(this.row, this.column);
              }),
              (e.prototype.getDocument = function () {
                return this.document;
              }),
              (e.prototype.onChange = function (e) {
                if (e.start.row == e.end.row && e.start.row != this.row) return;
                if (e.start.row > this.row) return;
                var t = u(
                  e,
                  { row: this.row, column: this.column },
                  this.$insertRight
                );
                this.setPosition(t.row, t.column, !0);
              }),
              (e.prototype.setPosition = function (e, t, n) {
                var r;
                n
                  ? (r = { row: e, column: t })
                  : (r = this.$clipPositionToDocument(e, t));
                if (this.row == r.row && this.column == r.column) return;
                var i = { row: this.row, column: this.column };
                (this.row = r.row),
                  (this.column = r.column),
                  this._signal("change", { old: i, value: r });
              }),
              (e.prototype.detach = function () {
                this.document.off("change", this.$onChange);
              }),
              (e.prototype.attach = function (e) {
                (this.document = e || this.document),
                  this.document.on("change", this.$onChange);
              }),
              (e.prototype.$clipPositionToDocument = function (e, t) {
                var n = {};
                return (
                  e >= this.document.getLength()
                    ? ((n.row = Math.max(0, this.document.getLength() - 1)),
                      (n.column = this.document.getLine(n.row).length))
                    : e < 0
                    ? ((n.row = 0), (n.column = 0))
                    : ((n.row = e),
                      (n.column = Math.min(
                        this.document.getLine(n.row).length,
                        Math.max(0, t)
                      ))),
                  t < 0 && (n.column = 0),
                  n
                );
              }),
              e
            );
          })();
        (s.prototype.$insertRight = !1),
          r.implement(s.prototype, i),
          (t.Anchor = s);
      }
    ),
    define(
      "ace/document",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/apply_delta",
        "ace/lib/event_emitter",
        "ace/range",
        "ace/anchor",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("./lib/oop"),
          i = e("./apply_delta").applyDelta,
          s = e("./lib/event_emitter").EventEmitter,
          o = e("./range").Range,
          u = e("./anchor").Anchor,
          a = (function () {
            function e(e) {
              (this.$lines = [""]),
                e.length === 0
                  ? (this.$lines = [""])
                  : Array.isArray(e)
                  ? this.insertMergedLines({ row: 0, column: 0 }, e)
                  : this.insert({ row: 0, column: 0 }, e);
            }
            return (
              (e.prototype.setValue = function (e) {
                var t = this.getLength() - 1;
                this.remove(new o(0, 0, t, this.getLine(t).length)),
                  this.insert({ row: 0, column: 0 }, e || "");
              }),
              (e.prototype.getValue = function () {
                return this.getAllLines().join(this.getNewLineCharacter());
              }),
              (e.prototype.createAnchor = function (e, t) {
                return new u(this, e, t);
              }),
              (e.prototype.$detectNewLine = function (e) {
                var t = e.match(/^.*?(\r\n|\r|\n)/m);
                (this.$autoNewLine = t ? t[1] : "\n"),
                  this._signal("changeNewLineMode");
              }),
              (e.prototype.getNewLineCharacter = function () {
                switch (this.$newLineMode) {
                  case "windows":
                    return "\r\n";
                  case "unix":
                    return "\n";
                  default:
                    return this.$autoNewLine || "\n";
                }
              }),
              (e.prototype.setNewLineMode = function (e) {
                if (this.$newLineMode === e) return;
                (this.$newLineMode = e), this._signal("changeNewLineMode");
              }),
              (e.prototype.getNewLineMode = function () {
                return this.$newLineMode;
              }),
              (e.prototype.isNewLine = function (e) {
                return e == "\r\n" || e == "\r" || e == "\n";
              }),
              (e.prototype.getLine = function (e) {
                return this.$lines[e] || "";
              }),
              (e.prototype.getLines = function (e, t) {
                return this.$lines.slice(e, t + 1);
              }),
              (e.prototype.getAllLines = function () {
                return this.getLines(0, this.getLength());
              }),
              (e.prototype.getLength = function () {
                return this.$lines.length;
              }),
              (e.prototype.getTextRange = function (e) {
                return this.getLinesForRange(e).join(this.getNewLineCharacter());
              }),
              (e.prototype.getLinesForRange = function (e) {
                var t;
                if (e.start.row === e.end.row)
                  t = [
                    this.getLine(e.start.row).substring(
                      e.start.column,
                      e.end.column
                    ),
                  ];
                else {
                  (t = this.getLines(e.start.row, e.end.row)),
                    (t[0] = (t[0] || "").substring(e.start.column));
                  var n = t.length - 1;
                  e.end.row - e.start.row == n &&
                    (t[n] = t[n].substring(0, e.end.column));
                }
                return t;
              }),
              (e.prototype.insertLines = function (e, t) {
                return (
                  console.warn(
                    "Use of document.insertLines is deprecated. Use the insertFullLines method instead."
                  ),
                  this.insertFullLines(e, t)
                );
              }),
              (e.prototype.removeLines = function (e, t) {
                return (
                  console.warn(
                    "Use of document.removeLines is deprecated. Use the removeFullLines method instead."
                  ),
                  this.removeFullLines(e, t)
                );
              }),
              (e.prototype.insertNewLine = function (e) {
                return (
                  console.warn(
                    "Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."
                  ),
                  this.insertMergedLines(e, ["", ""])
                );
              }),
              (e.prototype.insert = function (e, t) {
                return (
                  this.getLength() <= 1 && this.$detectNewLine(t),
                  this.insertMergedLines(e, this.$split(t))
                );
              }),
              (e.prototype.insertInLine = function (e, t) {
                var n = this.clippedPos(e.row, e.column),
                  r = this.pos(e.row, e.column + t.length);
                return (
                  this.applyDelta(
                    { start: n, end: r, action: "insert", lines: [t] },
                    !0
                  ),
                  this.clonePos(r)
                );
              }),
              (e.prototype.clippedPos = function (e, t) {
                var n = this.getLength();
                e === undefined
                  ? (e = n)
                  : e < 0
                  ? (e = 0)
                  : e >= n && ((e = n - 1), (t = undefined));
                var r = this.getLine(e);
                return (
                  t == undefined && (t = r.length),
                  (t = Math.min(Math.max(t, 0), r.length)),
                  { row: e, column: t }
                );
              }),
              (e.prototype.clonePos = function (e) {
                return { row: e.row, column: e.column };
              }),
              (e.prototype.pos = function (e, t) {
                return { row: e, column: t };
              }),
              (e.prototype.$clipPosition = function (e) {
                var t = this.getLength();
                return (
                  e.row >= t
                    ? ((e.row = Math.max(0, t - 1)),
                      (e.column = this.getLine(t - 1).length))
                    : ((e.row = Math.max(0, e.row)),
                      (e.column = Math.min(
                        Math.max(e.column, 0),
                        this.getLine(e.row).length
                      ))),
                  e
                );
              }),
              (e.prototype.insertFullLines = function (e, t) {
                e = Math.min(Math.max(e, 0), this.getLength());
                var n = 0;
                e < this.getLength()
                  ? ((t = t.concat([""])), (n = 0))
                  : ((t = [""].concat(t)), e--, (n = this.$lines[e].length)),
                  this.insertMergedLines({ row: e, column: n }, t);
              }),
              (e.prototype.insertMergedLines = function (e, t) {
                var n = this.clippedPos(e.row, e.column),
                  r = {
                    row: n.row + t.length - 1,
                    column:
                      (t.length == 1 ? n.column : 0) + t[t.length - 1].length,
                  };
                return (
                  this.applyDelta({
                    start: n,
                    end: r,
                    action: "insert",
                    lines: t,
                  }),
                  this.clonePos(r)
                );
              }),
              (e.prototype.remove = function (e) {
                var t = this.clippedPos(e.start.row, e.start.column),
                  n = this.clippedPos(e.end.row, e.end.column);
                return (
                  this.applyDelta({
                    start: t,
                    end: n,
                    action: "remove",
                    lines: this.getLinesForRange({ start: t, end: n }),
                  }),
                  this.clonePos(t)
                );
              }),
              (e.prototype.removeInLine = function (e, t, n) {
                var r = this.clippedPos(e, t),
                  i = this.clippedPos(e, n);
                return (
                  this.applyDelta(
                    {
                      start: r,
                      end: i,
                      action: "remove",
                      lines: this.getLinesForRange({ start: r, end: i }),
                    },
                    !0
                  ),
                  this.clonePos(r)
                );
              }),
              (e.prototype.removeFullLines = function (e, t) {
                (e = Math.min(Math.max(0, e), this.getLength() - 1)),
                  (t = Math.min(Math.max(0, t), this.getLength() - 1));
                var n = t == this.getLength() - 1 && e > 0,
                  r = t < this.getLength() - 1,
                  i = n ? e - 1 : e,
                  s = n ? this.getLine(i).length : 0,
                  u = r ? t + 1 : t,
                  a = r ? 0 : this.getLine(u).length,
                  f = new o(i, s, u, a),
                  l = this.$lines.slice(e, t + 1);
                return (
                  this.applyDelta({
                    start: f.start,
                    end: f.end,
                    action: "remove",
                    lines: this.getLinesForRange(f),
                  }),
                  l
                );
              }),
              (e.prototype.removeNewLine = function (e) {
                e < this.getLength() - 1 &&
                  e >= 0 &&
                  this.applyDelta({
                    start: this.pos(e, this.getLine(e).length),
                    end: this.pos(e + 1, 0),
                    action: "remove",
                    lines: ["", ""],
                  });
              }),
              (e.prototype.replace = function (e, t) {
                e instanceof o || (e = o.fromPoints(e.start, e.end));
                if (t.length === 0 && e.isEmpty()) return e.start;
                if (t == this.getTextRange(e)) return e.end;
                this.remove(e);
                var n;
                return t ? (n = this.insert(e.start, t)) : (n = e.start), n;
              }),
              (e.prototype.applyDeltas = function (e) {
                for (var t = 0; t < e.length; t++) this.applyDelta(e[t]);
              }),
              (e.prototype.revertDeltas = function (e) {
                for (var t = e.length - 1; t >= 0; t--) this.revertDelta(e[t]);
              }),
              (e.prototype.applyDelta = function (e, t) {
                var n = e.action == "insert";
                if (
                  n
                    ? e.lines.length <= 1 && !e.lines[0]
                    : !o.comparePoints(e.start, e.end)
                )
                  return;
                n && e.lines.length > 2e4
                  ? this.$splitAndapplyLargeDelta(e, 2e4)
                  : (i(this.$lines, e, t), this._signal("change", e));
              }),
              (e.prototype.$safeApplyDelta = function (e) {
                var t = this.$lines.length;
                ((e.action == "remove" && e.start.row < t && e.end.row < t) ||
                  (e.action == "insert" && e.start.row <= t)) &&
                  this.applyDelta(e);
              }),
              (e.prototype.$splitAndapplyLargeDelta = function (e, t) {
                var n = e.lines,
                  r = n.length - t + 1,
                  i = e.start.row,
                  s = e.start.column;
                for (var o = 0, u = 0; o < r; o = u) {
                  u += t - 1;
                  var a = n.slice(o, u);
                  a.push(""),
                    this.applyDelta(
                      {
                        start: this.pos(i + o, s),
                        end: this.pos(i + u, (s = 0)),
                        action: e.action,
                        lines: a,
                      },
                      !0
                    );
                }
                (e.lines = n.slice(o)),
                  (e.start.row = i + o),
                  (e.start.column = s),
                  this.applyDelta(e, !0);
              }),
              (e.prototype.revertDelta = function (e) {
                this.$safeApplyDelta({
                  start: this.clonePos(e.start),
                  end: this.clonePos(e.end),
                  action: e.action == "insert" ? "remove" : "insert",
                  lines: e.lines.slice(),
                });
              }),
              (e.prototype.indexToPosition = function (e, t) {
                var n = this.$lines || this.getAllLines(),
                  r = this.getNewLineCharacter().length;
                for (var i = t || 0, s = n.length; i < s; i++) {
                  e -= n[i].length + r;
                  if (e < 0) return { row: i, column: e + n[i].length + r };
                }
                return { row: s - 1, column: e + n[s - 1].length + r };
              }),
              (e.prototype.positionToIndex = function (e, t) {
                var n = this.$lines || this.getAllLines(),
                  r = this.getNewLineCharacter().length,
                  i = 0,
                  s = Math.min(e.row, n.length);
                for (var o = t || 0; o < s; ++o) i += n[o].length + r;
                return i + e.column;
              }),
              (e.prototype.$split = function (e) {
                return e.split(/\r\n|\r|\n/);
              }),
              e
            );
          })();
        (a.prototype.$autoNewLine = ""),
          (a.prototype.$newLineMode = "auto"),
          r.implement(a.prototype, s),
          (t.Document = a);
      }
    ),
    define(
      "ace/background_tokenizer",
      ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"],
      function (e, t, n) {
        "use strict";
        var r = e("./lib/oop"),
          i = e("./lib/event_emitter").EventEmitter,
          s = (function () {
            function e(e, t) {
              (this.running = !1),
                (this.lines = []),
                (this.states = []),
                (this.currentLine = 0),
                (this.tokenizer = e);
              var n = this;
              this.$worker = function () {
                if (!n.running) return;
                var e = new Date(),
                  t = n.currentLine,
                  r = -1,
                  i = n.doc,
                  s = t;
                while (n.lines[t]) t++;
                var o = i.getLength(),
                  u = 0;
                n.running = !1;
                while (t < o) {
                  n.$tokenizeRow(t), (r = t);
                  do t++;
                  while (n.lines[t]);
                  u++;
                  if (u % 5 === 0 && new Date() - e > 20) {
                    n.running = setTimeout(n.$worker, 20);
                    break;
                  }
                }
                (n.currentLine = t),
                  r == -1 && (r = t),
                  s <= r && n.fireUpdateEvent(s, r);
              };
            }
            return (
              (e.prototype.setTokenizer = function (e) {
                (this.tokenizer = e),
                  (this.lines = []),
                  (this.states = []),
                  this.start(0);
              }),
              (e.prototype.setDocument = function (e) {
                (this.doc = e),
                  (this.lines = []),
                  (this.states = []),
                  this.stop();
              }),
              (e.prototype.fireUpdateEvent = function (e, t) {
                var n = { first: e, last: t };
                this._signal("update", { data: n });
              }),
              (e.prototype.start = function (e) {
                (this.currentLine = Math.min(
                  e || 0,
                  this.currentLine,
                  this.doc.getLength()
                )),
                  this.lines.splice(this.currentLine, this.lines.length),
                  this.states.splice(this.currentLine, this.states.length),
                  this.stop(),
                  (this.running = setTimeout(this.$worker, 700));
              }),
              (e.prototype.scheduleStart = function () {
                this.running || (this.running = setTimeout(this.$worker, 700));
              }),
              (e.prototype.$updateOnChange = function (e) {
                var t = e.start.row,
                  n = e.end.row - t;
                if (n === 0) this.lines[t] = null;
                else if (e.action == "remove")
                  this.lines.splice(t, n + 1, null),
                    this.states.splice(t, n + 1, null);
                else {
                  var r = Array(n + 1);
                  r.unshift(t, 1),
                    this.lines.splice.apply(this.lines, r),
                    this.states.splice.apply(this.states, r);
                }
                (this.currentLine = Math.min(
                  t,
                  this.currentLine,
                  this.doc.getLength()
                )),
                  this.stop();
              }),
              (e.prototype.stop = function () {
                this.running && clearTimeout(this.running), (this.running = !1);
              }),
              (e.prototype.getTokens = function (e) {
                return this.lines[e] || this.$tokenizeRow(e);
              }),
              (e.prototype.getState = function (e) {
                return (
                  this.currentLine == e && this.$tokenizeRow(e),
                  this.states[e] || "start"
                );
              }),
              (e.prototype.$tokenizeRow = function (e) {
                var t = this.doc.getLine(e),
                  n = this.states[e - 1],
                  r = this.tokenizer.getLineTokens(t, n, e);
                return (
                  this.states[e] + "" != r.state + ""
                    ? ((this.states[e] = r.state),
                      (this.lines[e + 1] = null),
                      this.currentLine > e + 1 && (this.currentLine = e + 1))
                    : this.currentLine == e && (this.currentLine = e + 1),
                  (this.lines[e] = r.tokens)
                );
              }),
              (e.prototype.cleanup = function () {
                (this.running = !1),
                  (this.lines = []),
                  (this.states = []),
                  (this.currentLine = 0),
                  this.removeAllListeners();
              }),
              e
            );
          })();
        r.implement(s.prototype, i), (t.BackgroundTokenizer = s);
      }
    ),
    define(
      "ace/search_highlight",
      ["require", "exports", "module", "ace/lib/lang", "ace/range"],
      function (e, t, n) {
        "use strict";
        var r = e("./lib/lang"),
          i = e("./range").Range,
          s = (function () {
            function e(e, t, n) {
              n === void 0 && (n = "text"),
                this.setRegexp(e),
                (this.clazz = t),
                (this.type = n);
            }
            return (
              (e.prototype.setRegexp = function (e) {
                if (this.regExp + "" == e + "") return;
                (this.regExp = e), (this.cache = []);
              }),
              (e.prototype.update = function (e, t, n, s) {
                if (!this.regExp) return;
                var o = s.firstRow,
                  u = s.lastRow,
                  a = {};
                for (var f = o; f <= u; f++) {
                  var l = this.cache[f];
                  l == null &&
                    ((l = r.getMatchOffsets(n.getLine(f), this.regExp)),
                    l.length > this.MAX_RANGES &&
                      (l = l.slice(0, this.MAX_RANGES)),
                    (l = l.map(function (e) {
                      return new i(f, e.offset, f, e.offset + e.length);
                    })),
                    (this.cache[f] = l.length ? l : ""));
                  for (var c = l.length; c--; ) {
                    var h = l[c].toScreenRange(n),
                      p = h.toString();
                    if (a[p]) continue;
                    (a[p] = !0), t.drawSingleLineMarker(e, h, this.clazz, s);
                  }
                }
              }),
              e
            );
          })();
        (s.prototype.MAX_RANGES = 500), (t.SearchHighlight = s);
      }
    ),
    define(
      "ace/edit_session/fold_line",
      ["require", "exports", "module", "ace/range"],
      function (e, t, n) {
        "use strict";
        var r = e("../range").Range,
          i = (function () {
            function e(e, t) {
              (this.foldData = e),
                Array.isArray(t) ? (this.folds = t) : (t = this.folds = [t]);
              var n = t[t.length - 1];
              (this.range = new r(
                t[0].start.row,
                t[0].start.column,
                n.end.row,
                n.end.column
              )),
                (this.start = this.range.start),
                (this.end = this.range.end),
                this.folds.forEach(function (e) {
                  e.setFoldLine(this);
                }, this);
            }
            return (
              (e.prototype.shiftRow = function (e) {
                (this.start.row += e),
                  (this.end.row += e),
                  this.folds.forEach(function (t) {
                    (t.start.row += e), (t.end.row += e);
                  });
              }),
              (e.prototype.addFold = function (e) {
                if (e.sameRow) {
                  if (e.start.row < this.startRow || e.endRow > this.endRow)
                    throw new Error(
                      "Can't add a fold to this FoldLine as it has no connection"
                    );
                  this.folds.push(e),
                    this.folds.sort(function (e, t) {
                      return -e.range.compareEnd(t.start.row, t.start.column);
                    }),
                    this.range.compareEnd(e.start.row, e.start.column) > 0
                      ? ((this.end.row = e.end.row),
                        (this.end.column = e.end.column))
                      : this.range.compareStart(e.end.row, e.end.column) < 0 &&
                        ((this.start.row = e.start.row),
                        (this.start.column = e.start.column));
                } else if (e.start.row == this.end.row)
                  this.folds.push(e),
                    (this.end.row = e.end.row),
                    (this.end.column = e.end.column);
                else {
                  if (e.end.row != this.start.row)
                    throw new Error(
                      "Trying to add fold to FoldRow that doesn't have a matching row"
                    );
                  this.folds.unshift(e),
                    (this.start.row = e.start.row),
                    (this.start.column = e.start.column);
                }
                e.foldLine = this;
              }),
              (e.prototype.containsRow = function (e) {
                return e >= this.start.row && e <= this.end.row;
              }),
              (e.prototype.walk = function (e, t, n) {
                var r = 0,
                  i = this.folds,
                  s,
                  o,
                  u,
                  a = !0;
                t == null && ((t = this.end.row), (n = this.end.column));
                for (var f = 0; f < i.length; f++) {
                  (s = i[f]), (o = s.range.compareStart(t, n));
                  if (o == -1) {
                    e(null, t, n, r, a);
                    return;
                  }
                  (u = e(null, s.start.row, s.start.column, r, a)),
                    (u = !u && e(s.placeholder, s.start.row, s.start.column, r));
                  if (u || o === 0) return;
                  (a = !s.sameRow), (r = s.end.column);
                }
                e(null, t, n, r, a);
              }),
              (e.prototype.getNextFoldTo = function (e, t) {
                var n, r;
                for (var i = 0; i < this.folds.length; i++) {
                  (n = this.folds[i]), (r = n.range.compareEnd(e, t));
                  if (r == -1) return { fold: n, kind: "after" };
                  if (r === 0) return { fold: n, kind: "inside" };
                }
                return null;
              }),
              (e.prototype.addRemoveChars = function (e, t, n) {
                var r = this.getNextFoldTo(e, t),
                  i,
                  s;
                if (r) {
                  i = r.fold;
                  if (
                    r.kind == "inside" &&
                    i.start.column != t &&
                    i.start.row != e
                  )
                    window.console && window.console.log(e, t, i);
                  else if (i.start.row == e) {
                    s = this.folds;
                    var o = s.indexOf(i);
                    o === 0 && (this.start.column += n);
                    for (o; o < s.length; o++) {
                      (i = s[o]), (i.start.column += n);
                      if (!i.sameRow) return;
                      i.end.column += n;
                    }
                    this.end.column += n;
                  }
                }
              }),
              (e.prototype.split = function (t, n) {
                var r = this.getNextFoldTo(t, n);
                if (!r || r.kind == "inside") return null;
                var i = r.fold,
                  s = this.folds,
                  o = this.foldData,
                  u = s.indexOf(i),
                  a = s[u - 1];
                (this.end.row = a.end.row),
                  (this.end.column = a.end.column),
                  (s = s.splice(u, s.length - u));
                var f = new e(o, s);
                return o.splice(o.indexOf(this) + 1, 0, f), f;
              }),
              (e.prototype.merge = function (e) {
                var t = e.folds;
                for (var n = 0; n < t.length; n++) this.addFold(t[n]);
                var r = this.foldData;
                r.splice(r.indexOf(e), 1);
              }),
              (e.prototype.toString = function () {
                var e = [this.range.toString() + ": ["];
                return (
                  this.folds.forEach(function (t) {
                    e.push("  " + t.toString());
                  }),
                  e.push("]"),
                  e.join("\n")
                );
              }),
              (e.prototype.idxToPosition = function (e) {
                var t = 0;
                for (var n = 0; n < this.folds.length; n++) {
                  var r = this.folds[n];
                  e -= r.start.column - t;
                  if (e < 0)
                    return { row: r.start.row, column: r.start.column + e };
                  e -= r.placeholder.length;
                  if (e < 0) return r.start;
                  t = r.end.column;
                }
                return { row: this.end.row, column: this.end.column + e };
              }),
              e
            );
          })();
        t.FoldLine = i;
      }
    ),
    define(
      "ace/range_list",
      ["require", "exports", "module", "ace/range"],
      function (e, t, n) {
        "use strict";
        var r = e("./range").Range,
          i = r.comparePoints,
          s = (function () {
            function e() {
              (this.ranges = []), (this.$bias = 1);
            }
            return (
              (e.prototype.pointIndex = function (e, t, n) {
                var r = this.ranges;
                for (var s = n || 0; s < r.length; s++) {
                  var o = r[s],
                    u = i(e, o.end);
                  if (u > 0) continue;
                  var a = i(e, o.start);
                  return u === 0
                    ? t && a !== 0
                      ? -s - 2
                      : s
                    : a > 0 || (a === 0 && !t)
                    ? s
                    : -s - 1;
                }
                return -s - 1;
              }),
              (e.prototype.add = function (e) {
                var t = !e.isEmpty(),
                  n = this.pointIndex(e.start, t);
                n < 0 && (n = -n - 1);
                var r = this.pointIndex(e.end, t, n);
                return (
                  r < 0 ? (r = -r - 1) : r++, this.ranges.splice(n, r - n, e)
                );
              }),
              (e.prototype.addList = function (e) {
                var t = [];
                for (var n = e.length; n--; ) t.push.apply(t, this.add(e[n]));
                return t;
              }),
              (e.prototype.substractPoint = function (e) {
                var t = this.pointIndex(e);
                if (t >= 0) return this.ranges.splice(t, 1);
              }),
              (e.prototype.merge = function () {
                var e = [],
                  t = this.ranges;
                t = t.sort(function (e, t) {
                  return i(e.start, t.start);
                });
                var n = t[0],
                  r;
                for (var s = 1; s < t.length; s++) {
                  (r = n), (n = t[s]);
                  var o = i(r.end, n.start);
                  if (o < 0) continue;
                  if (o == 0 && !r.isEmpty() && !n.isEmpty()) continue;
                  i(r.end, n.end) < 0 &&
                    ((r.end.row = n.end.row), (r.end.column = n.end.column)),
                    t.splice(s, 1),
                    e.push(n),
                    (n = r),
                    s--;
                }
                return (this.ranges = t), e;
              }),
              (e.prototype.contains = function (e, t) {
                return this.pointIndex({ row: e, column: t }) >= 0;
              }),
              (e.prototype.containsPoint = function (e) {
                return this.pointIndex(e) >= 0;
              }),
              (e.prototype.rangeAtPoint = function (e) {
                var t = this.pointIndex(e);
                if (t >= 0) return this.ranges[t];
              }),
              (e.prototype.clipRows = function (e, t) {
                var n = this.ranges;
                if (n[0].start.row > t || n[n.length - 1].start.row < e)
                  return [];
                var r = this.pointIndex({ row: e, column: 0 });
                r < 0 && (r = -r - 1);
                var i = this.pointIndex({ row: t, column: 0 }, r);
                i < 0 && (i = -i - 1);
                var s = [];
                for (var o = r; o < i; o++) s.push(n[o]);
                return s;
              }),
              (e.prototype.removeAll = function () {
                return this.ranges.splice(0, this.ranges.length);
              }),
              (e.prototype.attach = function (e) {
                this.session && this.detach(),
                  (this.session = e),
                  (this.onChange = this.$onChange.bind(this)),
                  this.session.on("change", this.onChange);
              }),
              (e.prototype.detach = function () {
                if (!this.session) return;
                this.session.removeListener("change", this.onChange),
                  (this.session = null);
              }),
              (e.prototype.$onChange = function (e) {
                var t = e.start,
                  n = e.end,
                  r = t.row,
                  i = n.row,
                  s = this.ranges;
                for (var o = 0, u = s.length; o < u; o++) {
                  var a = s[o];
                  if (a.end.row >= r) break;
                }
                if (e.action == "insert") {
                  var f = i - r,
                    l = -t.column + n.column;
                  for (; o < u; o++) {
                    var a = s[o];
                    if (a.start.row > r) break;
                    a.start.row == r &&
                      a.start.column >= t.column &&
                      ((a.start.column == t.column && this.$bias <= 0) ||
                        ((a.start.column += l), (a.start.row += f)));
                    if (a.end.row == r && a.end.column >= t.column) {
                      if (a.end.column == t.column && this.$bias < 0) continue;
                      a.end.column == t.column &&
                        l > 0 &&
                        o < u - 1 &&
                        a.end.column > a.start.column &&
                        a.end.column == s[o + 1].start.column &&
                        (a.end.column -= l),
                        (a.end.column += l),
                        (a.end.row += f);
                    }
                  }
                } else {
                  var f = r - i,
                    l = t.column - n.column;
                  for (; o < u; o++) {
                    var a = s[o];
                    if (a.start.row > i) break;
                    if (
                      a.end.row < i &&
                      (r < a.end.row ||
                        (r == a.end.row && t.column < a.end.column))
                    )
                      (a.end.row = r), (a.end.column = t.column);
                    else if (a.end.row == i)
                      if (a.end.column <= n.column) {
                        if (f || a.end.column > t.column)
                          (a.end.column = t.column), (a.end.row = t.row);
                      } else (a.end.column += l), (a.end.row += f);
                    else a.end.row > i && (a.end.row += f);
                    if (
                      a.start.row < i &&
                      (r < a.start.row ||
                        (r == a.start.row && t.column < a.start.column))
                    )
                      (a.start.row = r), (a.start.column = t.column);
                    else if (a.start.row == i)
                      if (a.start.column <= n.column) {
                        if (f || a.start.column > t.column)
                          (a.start.column = t.column), (a.start.row = t.row);
                      } else (a.start.column += l), (a.start.row += f);
                    else a.start.row > i && (a.start.row += f);
                  }
                }
                if (f != 0 && o < u)
                  for (; o < u; o++) {
                    var a = s[o];
                    (a.start.row += f), (a.end.row += f);
                  }
              }),
              e
            );
          })();
        (s.prototype.comparePoints = i), (t.RangeList = s);
      }
    ),
    define(
      "ace/edit_session/fold",
      ["require", "exports", "module", "ace/range_list"],
      function (e, t, n) {
        "use strict";
        function o(e, t) {
          (e.row -= t.row), e.row == 0 && (e.column -= t.column);
        }
        function u(e, t) {
          o(e.start, t), o(e.end, t);
        }
        function a(e, t) {
          e.row == 0 && (e.column += t.column), (e.row += t.row);
        }
        function f(e, t) {
          a(e.start, t), a(e.end, t);
        }
        var r =
            (this && this.__extends) ||
            (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                if (typeof n != "function" && n !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(n) +
                      " is not a constructor or null"
                  );
                e(t, n),
                  (t.prototype =
                    n === null
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          i = e("../range_list").RangeList,
          s = (function (e) {
            function t(t, n) {
              var r = e.call(this) || this;
              return (
                (r.foldLine = null),
                (r.placeholder = n),
                (r.range = t),
                (r.start = t.start),
                (r.end = t.end),
                (r.sameRow = t.start.row == t.end.row),
                (r.subFolds = r.ranges = []),
                r
              );
            }
            return (
              r(t, e),
              (t.prototype.toString = function () {
                return '"' + this.placeholder + '" ' + this.range.toString();
              }),
              (t.prototype.setFoldLine = function (e) {
                (this.foldLine = e),
                  this.subFolds.forEach(function (t) {
                    t.setFoldLine(e);
                  });
              }),
              (t.prototype.clone = function () {
                var e = this.range.clone(),
                  n = new t(e, this.placeholder);
                return (
                  this.subFolds.forEach(function (e) {
                    n.subFolds.push(e.clone());
                  }),
                  (n.collapseChildren = this.collapseChildren),
                  n
                );
              }),
              (t.prototype.addSubFold = function (e) {
                if (this.range.isEqual(e)) return;
                u(e, this.start);
                var t = e.start.row,
                  n = e.start.column;
                for (var r = 0, i = -1; r < this.subFolds.length; r++) {
                  i = this.subFolds[r].range.compare(t, n);
                  if (i != 1) break;
                }
                var s = this.subFolds[r],
                  o = 0;
                if (i == 0) {
                  if (s.range.containsRange(e)) return s.addSubFold(e);
                  o = 1;
                }
                var t = e.range.end.row,
                  n = e.range.end.column;
                for (var a = r, i = -1; a < this.subFolds.length; a++) {
                  i = this.subFolds[a].range.compare(t, n);
                  if (i != 1) break;
                }
                i == 0 && a++;
                var f = this.subFolds.splice(r, a - r, e),
                  l = i == 0 ? f.length - 1 : f.length;
                for (var c = o; c < l; c++) e.addSubFold(f[c]);
                return e.setFoldLine(this.foldLine), e;
              }),
              (t.prototype.restoreRange = function (e) {
                return f(e, this.start);
              }),
              t
            );
          })(i);
        t.Fold = s;
      }
    ),
    define(
      "ace/edit_session/folding",
      [
        "require",
        "exports",
        "module",
        "ace/range",
        "ace/edit_session/fold_line",
        "ace/edit_session/fold",
        "ace/token_iterator",
        "ace/mouse/mouse_event",
      ],
      function (e, t, n) {
        "use strict";
        function a() {
          (this.getFoldAt = function (e, t, n) {
            var r = this.getFoldLine(e);
            if (!r) return null;
            var i = r.folds;
            for (var s = 0; s < i.length; s++) {
              var o = i[s].range;
              if (o.contains(e, t)) {
                if (n == 1 && o.isEnd(e, t) && !o.isEmpty()) continue;
                if (n == -1 && o.isStart(e, t) && !o.isEmpty()) continue;
                return i[s];
              }
            }
          }),
            (this.getFoldsInRange = function (e) {
              var t = e.start,
                n = e.end,
                r = this.$foldData,
                i = [];
              (t.column += 1), (n.column -= 1);
              for (var s = 0; s < r.length; s++) {
                var o = r[s].range.compareRange(e);
                if (o == 2) continue;
                if (o == -2) break;
                var u = r[s].folds;
                for (var a = 0; a < u.length; a++) {
                  var f = u[a];
                  o = f.range.compareRange(e);
                  if (o == -2) break;
                  if (o == 2) continue;
                  if (o == 42) break;
                  i.push(f);
                }
              }
              return (t.column -= 1), (n.column += 1), i;
            }),
            (this.getFoldsInRangeList = function (e) {
              if (Array.isArray(e)) {
                var t = [];
                e.forEach(function (e) {
                  t = t.concat(this.getFoldsInRange(e));
                }, this);
              } else var t = this.getFoldsInRange(e);
              return t;
            }),
            (this.getAllFolds = function () {
              var e = [],
                t = this.$foldData;
              for (var n = 0; n < t.length; n++)
                for (var r = 0; r < t[n].folds.length; r++) e.push(t[n].folds[r]);
              return e;
            }),
            (this.getFoldStringAt = function (e, t, n, r) {
              r = r || this.getFoldLine(e);
              if (!r) return null;
              var i = { end: { column: 0 } },
                s,
                o;
              for (var u = 0; u < r.folds.length; u++) {
                o = r.folds[u];
                var a = o.range.compareEnd(e, t);
                if (a == -1) {
                  s = this.getLine(o.start.row).substring(
                    i.end.column,
                    o.start.column
                  );
                  break;
                }
                if (a === 0) return null;
                i = o;
              }
              return (
                s || (s = this.getLine(o.start.row).substring(i.end.column)),
                n == -1
                  ? s.substring(0, t - i.end.column)
                  : n == 1
                  ? s.substring(t - i.end.column)
                  : s
              );
            }),
            (this.getFoldLine = function (e, t) {
              var n = this.$foldData,
                r = 0;
              t && (r = n.indexOf(t)), r == -1 && (r = 0);
              for (r; r < n.length; r++) {
                var i = n[r];
                if (i.start.row <= e && i.end.row >= e) return i;
                if (i.end.row > e) return null;
              }
              return null;
            }),
            (this.getNextFoldLine = function (e, t) {
              var n = this.$foldData,
                r = 0;
              t && (r = n.indexOf(t)), r == -1 && (r = 0);
              for (r; r < n.length; r++) {
                var i = n[r];
                if (i.end.row >= e) return i;
              }
              return null;
            }),
            (this.getFoldedRowCount = function (e, t) {
              var n = this.$foldData,
                r = t - e + 1;
              for (var i = 0; i < n.length; i++) {
                var s = n[i],
                  o = s.end.row,
                  u = s.start.row;
                if (o >= t) {
                  u < t && (u >= e ? (r -= t - u) : (r = 0));
                  break;
                }
                o >= e && (u >= e ? (r -= o - u) : (r -= o - e + 1));
              }
              return r;
            }),
            (this.$addFoldLine = function (e) {
              return (
                this.$foldData.push(e),
                this.$foldData.sort(function (e, t) {
                  return e.start.row - t.start.row;
                }),
                e
              );
            }),
            (this.addFold = function (e, t) {
              var n = this.$foldData,
                r = !1,
                o;
              e instanceof s
                ? (o = e)
                : ((o = new s(t, e)), (o.collapseChildren = t.collapseChildren)),
                this.$clipRangeToDocument(o.range);
              var u = o.start.row,
                a = o.start.column,
                f = o.end.row,
                l = o.end.column,
                c = this.getFoldAt(u, a, 1),
                h = this.getFoldAt(f, l, -1);
              if (c && h == c) return c.addSubFold(o);
              c && !c.range.isStart(u, a) && this.removeFold(c),
                h && !h.range.isEnd(f, l) && this.removeFold(h);
              var p = this.getFoldsInRange(o.range);
              p.length > 0 &&
                (this.removeFolds(p),
                o.collapseChildren ||
                  p.forEach(function (e) {
                    o.addSubFold(e);
                  }));
              for (var d = 0; d < n.length; d++) {
                var v = n[d];
                if (f == v.start.row) {
                  v.addFold(o), (r = !0);
                  break;
                }
                if (u == v.end.row) {
                  v.addFold(o), (r = !0);
                  if (!o.sameRow) {
                    var m = n[d + 1];
                    if (m && m.start.row == f) {
                      v.merge(m);
                      break;
                    }
                  }
                  break;
                }
                if (f <= v.start.row) break;
              }
              return (
                r || (v = this.$addFoldLine(new i(this.$foldData, o))),
                this.$useWrapMode
                  ? this.$updateWrapData(v.start.row, v.start.row)
                  : this.$updateRowLengthCache(v.start.row, v.start.row),
                (this.$modified = !0),
                this._signal("changeFold", { data: o, action: "add" }),
                o
              );
            }),
            (this.addFolds = function (e) {
              e.forEach(function (e) {
                this.addFold(e);
              }, this);
            }),
            (this.removeFold = function (e) {
              var t = e.foldLine,
                n = t.start.row,
                r = t.end.row,
                i = this.$foldData,
                s = t.folds;
              if (s.length == 1) i.splice(i.indexOf(t), 1);
              else if (t.range.isEnd(e.end.row, e.end.column))
                s.pop(),
                  (t.end.row = s[s.length - 1].end.row),
                  (t.end.column = s[s.length - 1].end.column);
              else if (t.range.isStart(e.start.row, e.start.column))
                s.shift(),
                  (t.start.row = s[0].start.row),
                  (t.start.column = s[0].start.column);
              else if (e.sameRow) s.splice(s.indexOf(e), 1);
              else {
                var o = t.split(e.start.row, e.start.column);
                (s = o.folds),
                  s.shift(),
                  (o.start.row = s[0].start.row),
                  (o.start.column = s[0].start.column);
              }
              this.$updating ||
                (this.$useWrapMode
                  ? this.$updateWrapData(n, r)
                  : this.$updateRowLengthCache(n, r)),
                (this.$modified = !0),
                this._signal("changeFold", { data: e, action: "remove" });
            }),
            (this.removeFolds = function (e) {
              var t = [];
              for (var n = 0; n < e.length; n++) t.push(e[n]);
              t.forEach(function (e) {
                this.removeFold(e);
              }, this),
                (this.$modified = !0);
            }),
            (this.expandFold = function (e) {
              this.removeFold(e),
                e.subFolds.forEach(function (t) {
                  e.restoreRange(t), this.addFold(t);
                }, this),
                e.collapseChildren > 0 &&
                  this.foldAll(
                    e.start.row + 1,
                    e.end.row,
                    e.collapseChildren - 1
                  ),
                (e.subFolds = []);
            }),
            (this.expandFolds = function (e) {
              e.forEach(function (e) {
                this.expandFold(e);
              }, this);
            }),
            (this.unfold = function (e, t) {
              var n, i;
              if (e == null)
                (n = new r(0, 0, this.getLength(), 0)), t == null && (t = !0);
              else if (typeof e == "number")
                n = new r(e, 0, e, this.getLine(e).length);
              else if ("row" in e) n = r.fromPoints(e, e);
              else {
                if (Array.isArray(e))
                  return (
                    (i = []),
                    e.forEach(function (e) {
                      i = i.concat(this.unfold(e));
                    }, this),
                    i
                  );
                n = e;
              }
              i = this.getFoldsInRangeList(n);
              var s = i;
              while (
                i.length == 1 &&
                r.comparePoints(i[0].start, n.start) < 0 &&
                r.comparePoints(i[0].end, n.end) > 0
              )
                this.expandFolds(i), (i = this.getFoldsInRangeList(n));
              t != 0 ? this.removeFolds(i) : this.expandFolds(i);
              if (s.length) return s;
            }),
            (this.isRowFolded = function (e, t) {
              return !!this.getFoldLine(e, t);
            }),
            (this.getRowFoldEnd = function (e, t) {
              var n = this.getFoldLine(e, t);
              return n ? n.end.row : e;
            }),
            (this.getRowFoldStart = function (e, t) {
              var n = this.getFoldLine(e, t);
              return n ? n.start.row : e;
            }),
            (this.getFoldDisplayLine = function (e, t, n, r, i) {
              r == null && (r = e.start.row),
                i == null && (i = 0),
                t == null && (t = e.end.row),
                n == null && (n = this.getLine(t).length);
              var s = this.doc,
                o = "";
              return (
                e.walk(
                  function (e, t, n, u) {
                    if (t < r) return;
                    if (t == r) {
                      if (n < i) return;
                      u = Math.max(i, u);
                    }
                    e != null ? (o += e) : (o += s.getLine(t).substring(u, n));
                  },
                  t,
                  n
                ),
                o
              );
            }),
            (this.getDisplayLine = function (e, t, n, r) {
              var i = this.getFoldLine(e);
              if (!i) {
                var s;
                return (
                  (s = this.doc.getLine(e)), s.substring(r || 0, t || s.length)
                );
              }
              return this.getFoldDisplayLine(i, e, t, n, r);
            }),
            (this.$cloneFoldData = function () {
              var e = [];
              return (
                (e = this.$foldData.map(function (t) {
                  var n = t.folds.map(function (e) {
                    return e.clone();
                  });
                  return new i(e, n);
                })),
                e
              );
            }),
            (this.toggleFold = function (e) {
              var t = this.selection,
                n = t.getRange(),
                r,
                i;
              if (n.isEmpty()) {
                var s = n.start;
                r = this.getFoldAt(s.row, s.column);
                if (r) {
                  this.expandFold(r);
                  return;
                }
                (i = this.findMatchingBracket(s))
                  ? n.comparePoint(i) == 1
                    ? (n.end = i)
                    : ((n.start = i), n.start.column++, n.end.column--)
                  : (i = this.findMatchingBracket({
                      row: s.row,
                      column: s.column + 1,
                    }))
                  ? (n.comparePoint(i) == 1 ? (n.end = i) : (n.start = i),
                    n.start.column++)
                  : (n = this.getCommentFoldRange(s.row, s.column) || n);
              } else {
                var o = this.getFoldsInRange(n);
                if (e && o.length) {
                  this.expandFolds(o);
                  return;
                }
                o.length == 1 && (r = o[0]);
              }
              r || (r = this.getFoldAt(n.start.row, n.start.column));
              if (r && r.range.toString() == n.toString()) {
                this.expandFold(r);
                return;
              }
              var u = "...";
              if (!n.isMultiLine()) {
                u = this.getTextRange(n);
                if (u.length < 4) return;
                u = u.trim().substring(0, 2) + "..";
              }
              this.addFold(u, n);
            }),
            (this.getCommentFoldRange = function (e, t, n) {
              var i = new o(this, e, t),
                s = i.getCurrentToken(),
                u = s && s.type;
              if (s && /^comment|string/.test(u)) {
                (u = u.match(/comment|string/)[0]),
                  u == "comment" && (u += "|doc-start|\\.doc");
                var a = new RegExp(u),
                  f = new r();
                if (n != 1) {
                  do s = i.stepBackward();
                  while (s && a.test(s.type) && !/^comment.end/.test(s.type));
                  s = i.stepForward();
                }
                (f.start.row = i.getCurrentTokenRow()),
                  (f.start.column =
                    i.getCurrentTokenColumn() +
                    (/^comment.start/.test(s.type) ? s.value.length : 2)),
                  (i = new o(this, e, t));
                if (n != -1) {
                  var l = -1;
                  do {
                    s = i.stepForward();
                    if (l == -1) {
                      var c = this.getState(i.$row);
                      a.test(c) || (l = i.$row);
                    } else if (i.$row > l) break;
                  } while (s && a.test(s.type) && !/^comment.start/.test(s.type));
                  s = i.stepBackward();
                } else s = i.getCurrentToken();
                return (
                  (f.end.row = i.getCurrentTokenRow()),
                  (f.end.column = i.getCurrentTokenColumn()),
                  /^comment.end/.test(s.type) ||
                    (f.end.column += s.value.length - 2),
                  f
                );
              }
            }),
            (this.foldAll = function (e, t, n, r) {
              n == undefined && (n = 1e5);
              var i = this.foldWidgets;
              if (!i) return;
              (t = t || this.getLength()), (e = e || 0);
              for (var s = e; s < t; s++) {
                i[s] == null && (i[s] = this.getFoldWidget(s));
                if (i[s] != "start") continue;
                if (r && !r(s)) continue;
                var o = this.getFoldWidgetRange(s);
                o &&
                  o.isMultiLine() &&
                  o.end.row <= t &&
                  o.start.row >= e &&
                  ((s = o.end.row),
                  (o.collapseChildren = n),
                  this.addFold("...", o));
              }
            }),
            (this.foldToLevel = function (e) {
              this.foldAll();
              while (e-- > 0) this.unfold(null, !1);
            }),
            (this.foldAllComments = function () {
              var e = this;
              this.foldAll(null, null, null, function (t) {
                var n = e.getTokens(t);
                for (var r = 0; r < n.length; r++) {
                  var i = n[r];
                  if (i.type == "text" && /^\s+$/.test(i.value)) continue;
                  return /comment/.test(i.type) ? !0 : !1;
                }
              });
            }),
            (this.$foldStyles = { manual: 1, markbegin: 1, markbeginend: 1 }),
            (this.$foldStyle = "markbegin"),
            (this.setFoldStyle = function (e) {
              if (!this.$foldStyles[e])
                throw new Error(
                  "invalid fold style: " +
                    e +
                    "[" +
                    Object.keys(this.$foldStyles).join(", ") +
                    "]"
                );
              if (this.$foldStyle == e) return;
              (this.$foldStyle = e), e == "manual" && this.unfold();
              var t = this.$foldMode;
              this.$setFolding(null), this.$setFolding(t);
            }),
            (this.$setFolding = function (e) {
              if (this.$foldMode == e) return;
              (this.$foldMode = e),
                this.off("change", this.$updateFoldWidgets),
                this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets),
                this._signal("changeAnnotation");
              if (!e || this.$foldStyle == "manual") {
                this.foldWidgets = null;
                return;
              }
              (this.foldWidgets = []),
                (this.getFoldWidget = e.getFoldWidget.bind(
                  e,
                  this,
                  this.$foldStyle
                )),
                (this.getFoldWidgetRange = e.getFoldWidgetRange.bind(
                  e,
                  this,
                  this.$foldStyle
                )),
                (this.$updateFoldWidgets = this.updateFoldWidgets.bind(this)),
                (this.$tokenizerUpdateFoldWidgets =
                  this.tokenizerUpdateFoldWidgets.bind(this)),
                this.on("change", this.$updateFoldWidgets),
                this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
            }),
            (this.getParentFoldRangeData = function (e, t) {
              var n = this.foldWidgets;
              if (!n || (t && n[e])) return {};
              var r = e - 1,
                i;
              while (r >= 0) {
                var s = n[r];
                s == null && (s = n[r] = this.getFoldWidget(r));
                if (s == "start") {
                  var o = this.getFoldWidgetRange(r);
                  i || (i = o);
                  if (o && o.end.row >= e) break;
                }
                r--;
              }
              return { range: r !== -1 && o, firstRange: i };
            }),
            (this.onFoldWidgetClick = function (e, t) {
              t instanceof u && (t = t.domEvent);
              var n = {
                  children: t.shiftKey,
                  all: t.ctrlKey || t.metaKey,
                  siblings: t.altKey,
                },
                r = this.$toggleFoldWidget(e, n);
              if (!r) {
                var i = t.target || t.srcElement;
                i &&
                  /ace_fold-widget/.test(i.className) &&
                  (i.className += " ace_invalid");
              }
            }),
            (this.$toggleFoldWidget = function (e, t) {
              if (!this.getFoldWidget) return;
              var n = this.getFoldWidget(e),
                r = this.getLine(e),
                i = n === "end" ? -1 : 1,
                s = this.getFoldAt(e, i === -1 ? 0 : r.length, i);
              if (s)
                return (
                  t.children || t.all ? this.removeFold(s) : this.expandFold(s), s
                );
              var o = this.getFoldWidgetRange(e, !0);
              if (o && !o.isMultiLine()) {
                s = this.getFoldAt(o.start.row, o.start.column, 1);
                if (s && o.isEqual(s.range)) return this.removeFold(s), s;
              }
              if (t.siblings) {
                var u = this.getParentFoldRangeData(e);
                if (u.range)
                  var a = u.range.start.row + 1,
                    f = u.range.end.row;
                this.foldAll(a, f, t.all ? 1e4 : 0);
              } else
                t.children
                  ? ((f = o ? o.end.row : this.getLength()),
                    this.foldAll(e + 1, f, t.all ? 1e4 : 0))
                  : o &&
                    (t.all && (o.collapseChildren = 1e4), this.addFold("...", o));
              return o;
            }),
            (this.toggleFoldWidget = function (e) {
              var t = this.selection.getCursor().row;
              t = this.getRowFoldStart(t);
              var n = this.$toggleFoldWidget(t, {});
              if (n) return;
              var r = this.getParentFoldRangeData(t, !0);
              n = r.range || r.firstRange;
              if (n) {
                t = n.start.row;
                var i = this.getFoldAt(t, this.getLine(t).length, 1);
                i ? this.removeFold(i) : this.addFold("...", n);
              }
            }),
            (this.updateFoldWidgets = function (e) {
              var t = e.start.row,
                n = e.end.row - t;
              if (n === 0) this.foldWidgets[t] = null;
              else if (e.action == "remove")
                this.foldWidgets.splice(t, n + 1, null);
              else {
                var r = Array(n + 1);
                r.unshift(t, 1),
                  this.foldWidgets.splice.apply(this.foldWidgets, r);
              }
            }),
            (this.tokenizerUpdateFoldWidgets = function (e) {
              var t = e.data;
              t.first != t.last &&
                this.foldWidgets.length > t.first &&
                this.foldWidgets.splice(t.first, this.foldWidgets.length);
            });
        }
        var r = e("../range").Range,
          i = e("./fold_line").FoldLine,
          s = e("./fold").Fold,
          o = e("../token_iterator").TokenIterator,
          u = e("../mouse/mouse_event").MouseEvent;
        t.Folding = a;
      }
    ),
    define(
      "ace/edit_session/bracket_match",
      ["require", "exports", "module", "ace/token_iterator", "ace/range"],
      function (e, t, n) {
        "use strict";
        function s() {
          (this.findMatchingBracket = function (e, t) {
            if (e.column == 0) return null;
            var n = t || this.getLine(e.row).charAt(e.column - 1);
            if (n == "") return null;
            var r = n.match(/([\(\[\{])|([\)\]\}])/);
            return r
              ? r[1]
                ? this.$findClosingBracket(r[1], e)
                : this.$findOpeningBracket(r[2], e)
              : null;
          }),
            (this.getBracketRange = function (e) {
              var t = this.getLine(e.row),
                n = !0,
                r,
                s = t.charAt(e.column - 1),
                o = s && s.match(/([\(\[\{])|([\)\]\}])/);
              o ||
                ((s = t.charAt(e.column)),
                (e = { row: e.row, column: e.column + 1 }),
                (o = s && s.match(/([\(\[\{])|([\)\]\}])/)),
                (n = !1));
              if (!o) return null;
              if (o[1]) {
                var u = this.$findClosingBracket(o[1], e);
                if (!u) return null;
                (r = i.fromPoints(e, u)),
                  n || (r.end.column++, r.start.column--),
                  (r.cursor = r.end);
              } else {
                var u = this.$findOpeningBracket(o[2], e);
                if (!u) return null;
                (r = i.fromPoints(u, e)),
                  n || (r.start.column++, r.end.column--),
                  (r.cursor = r.start);
              }
              return r;
            }),
            (this.getMatchingBracketRanges = function (e, t) {
              var n = this.getLine(e.row),
                r = /([\(\[\{])|([\)\]\}])/,
                s = !t && n.charAt(e.column - 1),
                o = s && s.match(r);
              o ||
                ((s = (t === undefined || t) && n.charAt(e.column)),
                (e = { row: e.row, column: e.column + 1 }),
                (o = s && s.match(r)));
              if (!o) return null;
              var u = new i(e.row, e.column - 1, e.row, e.column),
                a = o[1]
                  ? this.$findClosingBracket(o[1], e)
                  : this.$findOpeningBracket(o[2], e);
              if (!a) return [u];
              var f = new i(a.row, a.column, a.row, a.column + 1);
              return [u, f];
            }),
            (this.$brackets = {
              ")": "(",
              "(": ")",
              "]": "[",
              "[": "]",
              "{": "}",
              "}": "{",
              "<": ">",
              ">": "<",
            }),
            (this.$findOpeningBracket = function (e, t, n) {
              var i = this.$brackets[e],
                s = 1,
                o = new r(this, t.row, t.column),
                u = o.getCurrentToken();
              u || (u = o.stepForward());
              if (!u) return;
              n ||
                (n = new RegExp(
                  "(\\.?" +
                    u.type
                      .replace(".", "\\.")
                      .replace("rparen", ".paren")
                      .replace(/\b(?:end)\b/, "(?:start|begin|end)")
                      .replace(/-close\b/, "-(close|open)") +
                    ")+"
                ));
              var a = t.column - o.getCurrentTokenColumn() - 2,
                f = u.value;
              for (;;) {
                while (a >= 0) {
                  var l = f.charAt(a);
                  if (l == i) {
                    s -= 1;
                    if (s == 0)
                      return {
                        row: o.getCurrentTokenRow(),
                        column: a + o.getCurrentTokenColumn(),
                      };
                  } else l == e && (s += 1);
                  a -= 1;
                }
                do u = o.stepBackward();
                while (u && !n.test(u.type));
                if (u == null) break;
                (f = u.value), (a = f.length - 1);
              }
              return null;
            }),
            (this.$findClosingBracket = function (e, t, n) {
              var i = this.$brackets[e],
                s = 1,
                o = new r(this, t.row, t.column),
                u = o.getCurrentToken();
              u || (u = o.stepForward());
              if (!u) return;
              n ||
                (n = new RegExp(
                  "(\\.?" +
                    u.type
                      .replace(".", "\\.")
                      .replace("lparen", ".paren")
                      .replace(/\b(?:start|begin)\b/, "(?:start|begin|end)")
                      .replace(/-open\b/, "-(close|open)") +
                    ")+"
                ));
              var a = t.column - o.getCurrentTokenColumn();
              for (;;) {
                var f = u.value,
                  l = f.length;
                while (a < l) {
                  var c = f.charAt(a);
                  if (c == i) {
                    s -= 1;
                    if (s == 0)
                      return {
                        row: o.getCurrentTokenRow(),
                        column: a + o.getCurrentTokenColumn(),
                      };
                  } else c == e && (s += 1);
                  a += 1;
                }
                do u = o.stepForward();
                while (u && !n.test(u.type));
                if (u == null) break;
                a = 0;
              }
              return null;
            }),
            (this.getMatchingTags = function (e) {
              var t = new r(this, e.row, e.column),
                n = this.$findTagName(t);
              if (!n) return;
              var i = t.stepBackward();
              return i.value === "<"
                ? this.$findClosingTag(t, n)
                : this.$findOpeningTag(t, n);
            }),
            (this.$findTagName = function (e) {
              var t = e.getCurrentToken(),
                n = !1,
                r = !1;
              if (t && t.type.indexOf("tag-name") === -1)
                do
                  r ? (t = e.stepBackward()) : (t = e.stepForward()),
                    t &&
                      (t.value === "/>"
                        ? (r = !0)
                        : t.type.indexOf("tag-name") !== -1 && (n = !0));
                while (t && !n);
              return t;
            }),
            (this.$findClosingTag = function (e, t) {
              var n,
                r = t.value,
                s = t.value,
                o = 0,
                u = new i(
                  e.getCurrentTokenRow(),
                  e.getCurrentTokenColumn(),
                  e.getCurrentTokenRow(),
                  e.getCurrentTokenColumn() + 1
                );
              t = e.stepForward();
              var a = new i(
                  e.getCurrentTokenRow(),
                  e.getCurrentTokenColumn(),
                  e.getCurrentTokenRow(),
                  e.getCurrentTokenColumn() + t.value.length
                ),
                f = !1;
              do {
                (n = t), (t = e.stepForward());
                if (t) {
                  if (t.value === ">" && !f) {
                    var l = new i(
                      e.getCurrentTokenRow(),
                      e.getCurrentTokenColumn(),
                      e.getCurrentTokenRow(),
                      e.getCurrentTokenColumn() + 1
                    );
                    f = !0;
                  }
                  if (t.type.indexOf("tag-name") !== -1) {
                    r = t.value;
                    if (s === r)
                      if (n.value === "<") o++;
                      else if (n.value === "</") {
                        o--;
                        if (o < 0) {
                          e.stepBackward();
                          var c = new i(
                            e.getCurrentTokenRow(),
                            e.getCurrentTokenColumn(),
                            e.getCurrentTokenRow(),
                            e.getCurrentTokenColumn() + 2
                          );
                          t = e.stepForward();
                          var h = new i(
                            e.getCurrentTokenRow(),
                            e.getCurrentTokenColumn(),
                            e.getCurrentTokenRow(),
                            e.getCurrentTokenColumn() + t.value.length
                          );
                          t = e.stepForward();
                          if (!t || t.value !== ">") return;
                          var p = new i(
                            e.getCurrentTokenRow(),
                            e.getCurrentTokenColumn(),
                            e.getCurrentTokenRow(),
                            e.getCurrentTokenColumn() + 1
                          );
                        }
                      }
                  } else if (s === r && t.value === "/>") {
                    o--;
                    if (o < 0)
                      var c = new i(
                          e.getCurrentTokenRow(),
                          e.getCurrentTokenColumn(),
                          e.getCurrentTokenRow(),
                          e.getCurrentTokenColumn() + 2
                        ),
                        h = c,
                        p = h,
                        l = new i(
                          a.end.row,
                          a.end.column,
                          a.end.row,
                          a.end.column + 1
                        );
                  }
                }
              } while (t && o >= 0);
              if (u && l && c && p && a && h)
                return {
                  openTag: new i(
                    u.start.row,
                    u.start.column,
                    l.end.row,
                    l.end.column
                  ),
                  closeTag: new i(
                    c.start.row,
                    c.start.column,
                    p.end.row,
                    p.end.column
                  ),
                  openTagName: a,
                  closeTagName: h,
                };
            }),
            (this.$findOpeningTag = function (e, t) {
              var n = e.getCurrentToken(),
                r = t.value,
                s = 0,
                o = e.getCurrentTokenRow(),
                u = e.getCurrentTokenColumn(),
                a = u + 2,
                f = new i(o, u, o, a);
              e.stepForward();
              var l = new i(
                e.getCurrentTokenRow(),
                e.getCurrentTokenColumn(),
                e.getCurrentTokenRow(),
                e.getCurrentTokenColumn() + t.value.length
              );
              t = e.stepForward();
              if (!t || t.value !== ">") return;
              var c = new i(
                e.getCurrentTokenRow(),
                e.getCurrentTokenColumn(),
                e.getCurrentTokenRow(),
                e.getCurrentTokenColumn() + 1
              );
              e.stepBackward(), e.stepBackward();
              do {
                (t = n),
                  (o = e.getCurrentTokenRow()),
                  (u = e.getCurrentTokenColumn()),
                  (a = u + t.value.length),
                  (n = e.stepBackward());
                if (t)
                  if (t.type.indexOf("tag-name") !== -1) {
                    if (r === t.value)
                      if (n.value === "<") {
                        s++;
                        if (s > 0) {
                          var h = new i(o, u, o, a),
                            p = new i(
                              e.getCurrentTokenRow(),
                              e.getCurrentTokenColumn(),
                              e.getCurrentTokenRow(),
                              e.getCurrentTokenColumn() + 1
                            );
                          do t = e.stepForward();
                          while (t && t.value !== ">");
                          var d = new i(
                            e.getCurrentTokenRow(),
                            e.getCurrentTokenColumn(),
                            e.getCurrentTokenRow(),
                            e.getCurrentTokenColumn() + 1
                          );
                        }
                      } else n.value === "</" && s--;
                  } else if (t.value === "/>") {
                    var v = 0,
                      m = n;
                    while (m) {
                      if (m.type.indexOf("tag-name") !== -1 && m.value === r) {
                        s--;
                        break;
                      }
                      if (m.value === "<") break;
                      (m = e.stepBackward()), v++;
                    }
                    for (var g = 0; g < v; g++) e.stepForward();
                  }
              } while (n && s <= 0);
              if (p && d && f && c && h && l)
                return {
                  openTag: new i(
                    p.start.row,
                    p.start.column,
                    d.end.row,
                    d.end.column
                  ),
                  closeTag: new i(
                    f.start.row,
                    f.start.column,
                    c.end.row,
                    c.end.column
                  ),
                  openTagName: h,
                  closeTagName: l,
                };
            });
        }
        var r = e("../token_iterator").TokenIterator,
          i = e("../range").Range;
        t.BracketMatch = s;
      }
    ),
    define(
      "ace/edit_session",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/lang",
        "ace/bidihandler",
        "ace/config",
        "ace/lib/event_emitter",
        "ace/selection",
        "ace/mode/text",
        "ace/range",
        "ace/document",
        "ace/background_tokenizer",
        "ace/search_highlight",
        "ace/edit_session/folding",
        "ace/edit_session/bracket_match",
      ],
      function (e, t, n) {
        "use strict";
        function x(e) {
          return e < 4352
            ? !1
            : (e >= 4352 && e <= 4447) ||
                (e >= 4515 && e <= 4519) ||
                (e >= 4602 && e <= 4607) ||
                (e >= 9001 && e <= 9002) ||
                (e >= 11904 && e <= 11929) ||
                (e >= 11931 && e <= 12019) ||
                (e >= 12032 && e <= 12245) ||
                (e >= 12272 && e <= 12283) ||
                (e >= 12288 && e <= 12350) ||
                (e >= 12353 && e <= 12438) ||
                (e >= 12441 && e <= 12543) ||
                (e >= 12549 && e <= 12589) ||
                (e >= 12593 && e <= 12686) ||
                (e >= 12688 && e <= 12730) ||
                (e >= 12736 && e <= 12771) ||
                (e >= 12784 && e <= 12830) ||
                (e >= 12832 && e <= 12871) ||
                (e >= 12880 && e <= 13054) ||
                (e >= 13056 && e <= 19903) ||
                (e >= 19968 && e <= 42124) ||
                (e >= 42128 && e <= 42182) ||
                (e >= 43360 && e <= 43388) ||
                (e >= 44032 && e <= 55203) ||
                (e >= 55216 && e <= 55238) ||
                (e >= 55243 && e <= 55291) ||
                (e >= 63744 && e <= 64255) ||
                (e >= 65040 && e <= 65049) ||
                (e >= 65072 && e <= 65106) ||
                (e >= 65108 && e <= 65126) ||
                (e >= 65128 && e <= 65131) ||
                (e >= 65281 && e <= 65376) ||
                (e >= 65504 && e <= 65510);
        }
        var r = e("./lib/oop"),
          i = e("./lib/lang"),
          s = e("./bidihandler").BidiHandler,
          o = e("./config"),
          u = e("./lib/event_emitter").EventEmitter,
          a = e("./selection").Selection,
          f = e("./mode/text").Mode,
          l = e("./range").Range,
          c = e("./document").Document,
          h = e("./background_tokenizer").BackgroundTokenizer,
          p = e("./search_highlight").SearchHighlight,
          d = (function () {
            function e(t, n) {
              (this.$breakpoints = []),
                (this.$decorations = []),
                (this.$frontMarkers = {}),
                (this.$backMarkers = {}),
                (this.$markerId = 1),
                (this.$undoSelect = !0),
                (this.$foldData = []),
                (this.id = "session" + ++e.$uid),
                (this.$foldData.toString = function () {
                  return this.join("\n");
                }),
                (this.bgTokenizer = new h(new f().getTokenizer(), this));
              var r = this;
              this.bgTokenizer.on("update", function (e) {
                r._signal("tokenizerUpdate", e);
              }),
                this.on("changeFold", this.onChangeFold.bind(this)),
                (this.$onChange = this.onChange.bind(this));
              if (typeof t != "object" || !t.getLine) t = new c(t);
              this.setDocument(t),
                (this.selection = new a(this)),
                (this.$bidiHandler = new s(this)),
                o.resetOptions(this),
                this.setMode(n),
                o._signal("session", this),
                (this.destroyed = !1);
            }
            return (
              (e.prototype.setDocument = function (e) {
                this.doc && this.doc.off("change", this.$onChange),
                  (this.doc = e),
                  e.on("change", this.$onChange, !0),
                  this.bgTokenizer.setDocument(this.getDocument()),
                  this.resetCaches();
              }),
              (e.prototype.getDocument = function () {
                return this.doc;
              }),
              (e.prototype.$resetRowCache = function (e) {
                if (!e) {
                  (this.$docRowCache = []), (this.$screenRowCache = []);
                  return;
                }
                var t = this.$docRowCache.length,
                  n = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
                t > n &&
                  (this.$docRowCache.splice(n, t),
                  this.$screenRowCache.splice(n, t));
              }),
              (e.prototype.$getRowCacheIndex = function (e, t) {
                var n = 0,
                  r = e.length - 1;
                while (n <= r) {
                  var i = (n + r) >> 1,
                    s = e[i];
                  if (t > s) n = i + 1;
                  else {
                    if (!(t < s)) return i;
                    r = i - 1;
                  }
                }
                return n - 1;
              }),
              (e.prototype.resetCaches = function () {
                (this.$modified = !0),
                  (this.$wrapData = []),
                  (this.$rowLengthCache = []),
                  this.$resetRowCache(0),
                  this.destroyed || this.bgTokenizer.start(0);
              }),
              (e.prototype.onChangeFold = function (e) {
                var t = e.data;
                this.$resetRowCache(t.start.row);
              }),
              (e.prototype.onChange = function (e) {
                (this.$modified = !0),
                  this.$bidiHandler.onChange(e),
                  this.$resetRowCache(e.start.row);
                var t = this.$updateInternalDataOnChange(e);
                !this.$fromUndo &&
                  this.$undoManager &&
                  (t &&
                    t.length &&
                    (this.$undoManager.add(
                      { action: "removeFolds", folds: t },
                      this.mergeUndoDeltas
                    ),
                    (this.mergeUndoDeltas = !0)),
                  this.$undoManager.add(e, this.mergeUndoDeltas),
                  (this.mergeUndoDeltas = !0),
                  this.$informUndoManager.schedule()),
                  this.bgTokenizer.$updateOnChange(e),
                  this._signal("change", e);
              }),
              (e.prototype.setValue = function (e) {
                this.doc.setValue(e),
                  this.selection.moveTo(0, 0),
                  this.$resetRowCache(0),
                  this.setUndoManager(this.$undoManager),
                  this.getUndoManager().reset();
              }),
              (e.prototype.toString = function () {
                return this.doc.getValue();
              }),
              (e.prototype.getSelection = function () {
                return this.selection;
              }),
              (e.prototype.getState = function (e) {
                return this.bgTokenizer.getState(e);
              }),
              (e.prototype.getTokens = function (e) {
                return this.bgTokenizer.getTokens(e);
              }),
              (e.prototype.getTokenAt = function (e, t) {
                var n = this.bgTokenizer.getTokens(e),
                  r,
                  i = 0;
                if (t == null) {
                  var s = n.length - 1;
                  i = this.getLine(e).length;
                } else
                  for (var s = 0; s < n.length; s++) {
                    i += n[s].value.length;
                    if (i >= t) break;
                  }
                return (
                  (r = n[s]),
                  r ? ((r.index = s), (r.start = i - r.value.length), r) : null
                );
              }),
              (e.prototype.setUndoManager = function (e) {
                (this.$undoManager = e),
                  this.$informUndoManager && this.$informUndoManager.cancel();
                if (e) {
                  var t = this;
                  e.addSession(this),
                    (this.$syncInformUndoManager = function () {
                      t.$informUndoManager.cancel(), (t.mergeUndoDeltas = !1);
                    }),
                    (this.$informUndoManager = i.delayedCall(
                      this.$syncInformUndoManager
                    ));
                } else this.$syncInformUndoManager = function () {};
              }),
              (e.prototype.markUndoGroup = function () {
                this.$syncInformUndoManager && this.$syncInformUndoManager();
              }),
              (e.prototype.getUndoManager = function () {
                return this.$undoManager || this.$defaultUndoManager;
              }),
              (e.prototype.getTabString = function () {
                return this.getUseSoftTabs()
                  ? i.stringRepeat(" ", this.getTabSize())
                  : "	";
              }),
              (e.prototype.setUseSoftTabs = function (e) {
                this.setOption("useSoftTabs", e);
              }),
              (e.prototype.getUseSoftTabs = function () {
                return this.$useSoftTabs && !this.$mode.$indentWithTabs;
              }),
              (e.prototype.setTabSize = function (e) {
                this.setOption("tabSize", e);
              }),
              (e.prototype.getTabSize = function () {
                return this.$tabSize;
              }),
              (e.prototype.isTabStop = function (e) {
                return this.$useSoftTabs && e.column % this.$tabSize === 0;
              }),
              (e.prototype.setNavigateWithinSoftTabs = function (e) {
                this.setOption("navigateWithinSoftTabs", e);
              }),
              (e.prototype.getNavigateWithinSoftTabs = function () {
                return this.$navigateWithinSoftTabs;
              }),
              (e.prototype.setOverwrite = function (e) {
                this.setOption("overwrite", e);
              }),
              (e.prototype.getOverwrite = function () {
                return this.$overwrite;
              }),
              (e.prototype.toggleOverwrite = function () {
                this.setOverwrite(!this.$overwrite);
              }),
              (e.prototype.addGutterDecoration = function (e, t) {
                this.$decorations[e] || (this.$decorations[e] = ""),
                  (this.$decorations[e] += " " + t),
                  this._signal("changeBreakpoint", {});
              }),
              (e.prototype.removeGutterDecoration = function (e, t) {
                (this.$decorations[e] = (this.$decorations[e] || "").replace(
                  " " + t,
                  ""
                )),
                  this._signal("changeBreakpoint", {});
              }),
              (e.prototype.getBreakpoints = function () {
                return this.$breakpoints;
              }),
              (e.prototype.setBreakpoints = function (e) {
                this.$breakpoints = [];
                for (var t = 0; t < e.length; t++)
                  this.$breakpoints[e[t]] = "ace_breakpoint";
                this._signal("changeBreakpoint", {});
              }),
              (e.prototype.clearBreakpoints = function () {
                (this.$breakpoints = []), this._signal("changeBreakpoint", {});
              }),
              (e.prototype.setBreakpoint = function (e, t) {
                t === undefined && (t = "ace_breakpoint"),
                  t ? (this.$breakpoints[e] = t) : delete this.$breakpoints[e],
                  this._signal("changeBreakpoint", {});
              }),
              (e.prototype.clearBreakpoint = function (e) {
                delete this.$breakpoints[e], this._signal("changeBreakpoint", {});
              }),
              (e.prototype.addMarker = function (e, t, n, r) {
                var i = this.$markerId++,
                  s = {
                    range: e,
                    type: n || "line",
                    renderer: typeof n == "function" ? n : null,
                    clazz: t,
                    inFront: !!r,
                    id: i,
                  };
                return (
                  r
                    ? ((this.$frontMarkers[i] = s),
                      this._signal("changeFrontMarker"))
                    : ((this.$backMarkers[i] = s),
                      this._signal("changeBackMarker")),
                  i
                );
              }),
              (e.prototype.addDynamicMarker = function (e, t) {
                if (!e.update) return;
                var n = this.$markerId++;
                return (
                  (e.id = n),
                  (e.inFront = !!t),
                  t
                    ? ((this.$frontMarkers[n] = e),
                      this._signal("changeFrontMarker"))
                    : ((this.$backMarkers[n] = e),
                      this._signal("changeBackMarker")),
                  e
                );
              }),
              (e.prototype.removeMarker = function (e) {
                var t = this.$frontMarkers[e] || this.$backMarkers[e];
                if (!t) return;
                var n = t.inFront ? this.$frontMarkers : this.$backMarkers;
                delete n[e],
                  this._signal(
                    t.inFront ? "changeFrontMarker" : "changeBackMarker"
                  );
              }),
              (e.prototype.getMarkers = function (e) {
                return e ? this.$frontMarkers : this.$backMarkers;
              }),
              (e.prototype.highlight = function (e) {
                if (!this.$searchHighlight) {
                  var t = new p(null, "ace_selected-word", "text");
                  this.$searchHighlight = this.addDynamicMarker(t);
                }
                this.$searchHighlight.setRegexp(e);
              }),
              (e.prototype.highlightLines = function (e, t, n, r) {
                typeof t != "number" && ((n = t), (t = e)), n || (n = "ace_step");
                var i = new l(e, 0, t, Infinity);
                return (i.id = this.addMarker(i, n, "fullLine", r)), i;
              }),
              (e.prototype.setAnnotations = function (e) {
                (this.$annotations = e), this._signal("changeAnnotation", {});
              }),
              (e.prototype.getAnnotations = function () {
                return this.$annotations || [];
              }),
              (e.prototype.clearAnnotations = function () {
                this.setAnnotations([]);
              }),
              (e.prototype.$detectNewLine = function (e) {
                var t = e.match(/^.*?(\r?\n)/m);
                t ? (this.$autoNewLine = t[1]) : (this.$autoNewLine = "\n");
              }),
              (e.prototype.getWordRange = function (e, t) {
                var n = this.getLine(e),
                  r = !1;
                t > 0 && (r = !!n.charAt(t - 1).match(this.tokenRe)),
                  r || (r = !!n.charAt(t).match(this.tokenRe));
                if (r) var i = this.tokenRe;
                else if (/^\s+$/.test(n.slice(t - 1, t + 1))) var i = /\s/;
                else var i = this.nonTokenRe;
                var s = t;
                if (s > 0) {
                  do s--;
                  while (s >= 0 && n.charAt(s).match(i));
                  s++;
                }
                var o = t;
                while (o < n.length && n.charAt(o).match(i)) o++;
                return new l(e, s, e, o);
              }),
              (e.prototype.getAWordRange = function (e, t) {
                var n = this.getWordRange(e, t),
                  r = this.getLine(n.end.row);
                while (r.charAt(n.end.column).match(/[ \t]/)) n.end.column += 1;
                return n;
              }),
              (e.prototype.setNewLineMode = function (e) {
                this.doc.setNewLineMode(e);
              }),
              (e.prototype.getNewLineMode = function () {
                return this.doc.getNewLineMode();
              }),
              (e.prototype.setUseWorker = function (e) {
                this.setOption("useWorker", e);
              }),
              (e.prototype.getUseWorker = function () {
                return this.$useWorker;
              }),
              (e.prototype.onReloadTokenizer = function (e) {
                var t = e.data;
                this.bgTokenizer.start(t.first),
                  this._signal("tokenizerUpdate", e);
              }),
              (e.prototype.setMode = function (e, t) {
                if (e && typeof e == "object") {
                  if (e.getTokenizer) return this.$onChangeMode(e);
                  var n = e,
                    r = n.path;
                } else r = e || "ace/mode/text";
                this.$modes["ace/mode/text"] ||
                  (this.$modes["ace/mode/text"] = new f());
                if (this.$modes[r] && !n) {
                  this.$onChangeMode(this.$modes[r]), t && t();
                  return;
                }
                (this.$modeId = r),
                  o.loadModule(
                    ["mode", r],
                    function (e) {
                      if (this.$modeId !== r) return t && t();
                      this.$modes[r] && !n
                        ? this.$onChangeMode(this.$modes[r])
                        : e &&
                          e.Mode &&
                          ((e = new e.Mode(n)),
                          n || ((this.$modes[r] = e), (e.$id = r)),
                          this.$onChangeMode(e)),
                        t && t();
                    }.bind(this)
                  ),
                  this.$mode ||
                    this.$onChangeMode(this.$modes["ace/mode/text"], !0);
              }),
              (e.prototype.$onChangeMode = function (e, t) {
                t || (this.$modeId = e.$id);
                if (this.$mode === e) return;
                var n = this.$mode;
                (this.$mode = e),
                  this.$stopWorker(),
                  this.$useWorker && this.$startWorker();
                var r = e.getTokenizer();
                if (r.on !== undefined) {
                  var i = this.onReloadTokenizer.bind(this);
                  r.on("update", i);
                }
                this.bgTokenizer.setTokenizer(r),
                  this.bgTokenizer.setDocument(this.getDocument()),
                  (this.tokenRe = e.tokenRe),
                  (this.nonTokenRe = e.nonTokenRe),
                  t ||
                    (e.attachToSession && e.attachToSession(this),
                    this.$options.wrapMethod.set.call(this, this.$wrapMethod),
                    this.$setFolding(e.foldingRules),
                    this.bgTokenizer.start(0),
                    this._emit("changeMode", { oldMode: n, mode: e }));
              }),
              (e.prototype.$stopWorker = function () {
                this.$worker && (this.$worker.terminate(), (this.$worker = null));
              }),
              (e.prototype.$startWorker = function () {
                try {
                  this.$worker = this.$mode.createWorker(this);
                } catch (e) {
                  o.warn("Could not load worker", e), (this.$worker = null);
                }
              }),
              (e.prototype.getMode = function () {
                return this.$mode;
              }),
              (e.prototype.setScrollTop = function (e) {
                if (this.$scrollTop === e || isNaN(e)) return;
                (this.$scrollTop = e), this._signal("changeScrollTop", e);
              }),
              (e.prototype.getScrollTop = function () {
                return this.$scrollTop;
              }),
              (e.prototype.setScrollLeft = function (e) {
                if (this.$scrollLeft === e || isNaN(e)) return;
                (this.$scrollLeft = e), this._signal("changeScrollLeft", e);
              }),
              (e.prototype.getScrollLeft = function () {
                return this.$scrollLeft;
              }),
              (e.prototype.getScreenWidth = function () {
                return (
                  this.$computeWidth(),
                  this.lineWidgets
                    ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth)
                    : this.screenWidth
                );
              }),
              (e.prototype.getLineWidgetMaxWidth = function () {
                if (this.lineWidgetsWidth != null) return this.lineWidgetsWidth;
                var e = 0;
                return (
                  this.lineWidgets.forEach(function (t) {
                    t && t.screenWidth > e && (e = t.screenWidth);
                  }),
                  (this.lineWidgetWidth = e)
                );
              }),
              (e.prototype.$computeWidth = function (e) {
                if (this.$modified || e) {
                  this.$modified = !1;
                  if (this.$useWrapMode)
                    return (this.screenWidth = this.$wrapLimit);
                  var t = this.doc.getAllLines(),
                    n = this.$rowLengthCache,
                    r = 0,
                    i = 0,
                    s = this.$foldData[i],
                    o = s ? s.start.row : Infinity,
                    u = t.length;
                  for (var a = 0; a < u; a++) {
                    if (a > o) {
                      a = s.end.row + 1;
                      if (a >= u) break;
                      (s = this.$foldData[i++]), (o = s ? s.start.row : Infinity);
                    }
                    n[a] == null && (n[a] = this.$getStringScreenWidth(t[a])[0]),
                      n[a] > r && (r = n[a]);
                  }
                  this.screenWidth = r;
                }
              }),
              (e.prototype.getLine = function (e) {
                return this.doc.getLine(e);
              }),
              (e.prototype.getLines = function (e, t) {
                return this.doc.getLines(e, t);
              }),
              (e.prototype.getLength = function () {
                return this.doc.getLength();
              }),
              (e.prototype.getTextRange = function (e) {
                return this.doc.getTextRange(e || this.selection.getRange());
              }),
              (e.prototype.insert = function (e, t) {
                return this.doc.insert(e, t);
              }),
              (e.prototype.remove = function (e) {
                return this.doc.remove(e);
              }),
              (e.prototype.removeFullLines = function (e, t) {
                return this.doc.removeFullLines(e, t);
              }),
              (e.prototype.undoChanges = function (e, t) {
                if (!e.length) return;
                this.$fromUndo = !0;
                for (var n = e.length - 1; n != -1; n--) {
                  var r = e[n];
                  r.action == "insert" || r.action == "remove"
                    ? this.doc.revertDelta(r)
                    : r.folds && this.addFolds(r.folds);
                }
                !t &&
                  this.$undoSelect &&
                  (e.selectionBefore
                    ? this.selection.fromJSON(e.selectionBefore)
                    : this.selection.setRange(this.$getUndoSelection(e, !0))),
                  (this.$fromUndo = !1);
              }),
              (e.prototype.redoChanges = function (e, t) {
                if (!e.length) return;
                this.$fromUndo = !0;
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.action == "insert" || r.action == "remove") &&
                    this.doc.$safeApplyDelta(r);
                }
                !t &&
                  this.$undoSelect &&
                  (e.selectionAfter
                    ? this.selection.fromJSON(e.selectionAfter)
                    : this.selection.setRange(this.$getUndoSelection(e, !1))),
                  (this.$fromUndo = !1);
              }),
              (e.prototype.setUndoSelect = function (e) {
                this.$undoSelect = e;
              }),
              (e.prototype.$getUndoSelection = function (e, t) {
                function n(e) {
                  return t ? e.action !== "insert" : e.action === "insert";
                }
                var r, i;
                for (var s = 0; s < e.length; s++) {
                  var o = e[s];
                  if (!o.start) continue;
                  if (!r) {
                    n(o)
                      ? (r = l.fromPoints(o.start, o.end))
                      : (r = l.fromPoints(o.start, o.start));
                    continue;
                  }
                  n(o)
                    ? ((i = o.start),
                      r.compare(i.row, i.column) == -1 && r.setStart(i),
                      (i = o.end),
                      r.compare(i.row, i.column) == 1 && r.setEnd(i))
                    : ((i = o.start),
                      r.compare(i.row, i.column) == -1 &&
                        (r = l.fromPoints(o.start, o.start)));
                }
                return r;
              }),
              (e.prototype.replace = function (e, t) {
                return this.doc.replace(e, t);
              }),
              (e.prototype.moveText = function (e, t, n) {
                var r = this.getTextRange(e),
                  i = this.getFoldsInRange(e),
                  s = l.fromPoints(t, t);
                if (!n) {
                  this.remove(e);
                  var o = e.start.row - e.end.row,
                    u = o ? -e.end.column : e.start.column - e.end.column;
                  u &&
                    (s.start.row == e.end.row &&
                      s.start.column > e.end.column &&
                      (s.start.column += u),
                    s.end.row == e.end.row &&
                      s.end.column > e.end.column &&
                      (s.end.column += u)),
                    o &&
                      s.start.row >= e.end.row &&
                      ((s.start.row += o), (s.end.row += o));
                }
                s.end = this.insert(s.start, r);
                if (i.length) {
                  var a = e.start,
                    f = s.start,
                    o = f.row - a.row,
                    u = f.column - a.column;
                  this.addFolds(
                    i.map(function (e) {
                      return (
                        (e = e.clone()),
                        e.start.row == a.row && (e.start.column += u),
                        e.end.row == a.row && (e.end.column += u),
                        (e.start.row += o),
                        (e.end.row += o),
                        e
                      );
                    })
                  );
                }
                return s;
              }),
              (e.prototype.indentRows = function (e, t, n) {
                n = n.replace(/\t/g, this.getTabString());
                for (var r = e; r <= t; r++)
                  this.doc.insertInLine({ row: r, column: 0 }, n);
              }),
              (e.prototype.outdentRows = function (e) {
                var t = e.collapseRows(),
                  n = new l(0, 0, 0, 0),
                  r = this.getTabSize();
                for (var i = t.start.row; i <= t.end.row; ++i) {
                  var s = this.getLine(i);
                  (n.start.row = i), (n.end.row = i);
                  for (var o = 0; o < r; ++o) if (s.charAt(o) != " ") break;
                  o < r && s.charAt(o) == "	"
                    ? ((n.start.column = o), (n.end.column = o + 1))
                    : ((n.start.column = 0), (n.end.column = o)),
                    this.remove(n);
                }
              }),
              (e.prototype.$moveLines = function (e, t, n) {
                (e = this.getRowFoldStart(e)), (t = this.getRowFoldEnd(t));
                if (n < 0) {
                  var r = this.getRowFoldStart(e + n);
                  if (r < 0) return 0;
                  var i = r - e;
                } else if (n > 0) {
                  var r = this.getRowFoldEnd(t + n);
                  if (r > this.doc.getLength() - 1) return 0;
                  var i = r - t;
                } else {
                  (e = this.$clipRowToDocument(e)),
                    (t = this.$clipRowToDocument(t));
                  var i = t - e + 1;
                }
                var s = new l(e, 0, t, Number.MAX_VALUE),
                  o = this.getFoldsInRange(s).map(function (e) {
                    return (
                      (e = e.clone()), (e.start.row += i), (e.end.row += i), e
                    );
                  }),
                  u =
                    n == 0
                      ? this.doc.getLines(e, t)
                      : this.doc.removeFullLines(e, t);
                return (
                  this.doc.insertFullLines(e + i, u),
                  o.length && this.addFolds(o),
                  i
                );
              }),
              (e.prototype.moveLinesUp = function (e, t) {
                return this.$moveLines(e, t, -1);
              }),
              (e.prototype.moveLinesDown = function (e, t) {
                return this.$moveLines(e, t, 1);
              }),
              (e.prototype.duplicateLines = function (e, t) {
                return this.$moveLines(e, t, 0);
              }),
              (e.prototype.$clipRowToDocument = function (e) {
                return Math.max(0, Math.min(e, this.doc.getLength() - 1));
              }),
              (e.prototype.$clipColumnToRow = function (e, t) {
                return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t);
              }),
              (e.prototype.$clipPositionToDocument = function (e, t) {
                t = Math.max(0, t);
                if (e < 0) (e = 0), (t = 0);
                else {
                  var n = this.doc.getLength();
                  e >= n
                    ? ((e = n - 1), (t = this.doc.getLine(n - 1).length))
                    : (t = Math.min(this.doc.getLine(e).length, t));
                }
                return { row: e, column: t };
              }),
              (e.prototype.$clipRangeToDocument = function (e) {
                e.start.row < 0
                  ? ((e.start.row = 0), (e.start.column = 0))
                  : (e.start.column = this.$clipColumnToRow(
                      e.start.row,
                      e.start.column
                    ));
                var t = this.doc.getLength() - 1;
                return (
                  e.end.row > t
                    ? ((e.end.row = t),
                      (e.end.column = this.doc.getLine(t).length))
                    : (e.end.column = this.$clipColumnToRow(
                        e.end.row,
                        e.end.column
                      )),
                  e
                );
              }),
              (e.prototype.setUseWrapMode = function (e) {
                if (e != this.$useWrapMode) {
                  (this.$useWrapMode = e),
                    (this.$modified = !0),
                    this.$resetRowCache(0);
                  if (e) {
                    var t = this.getLength();
                    (this.$wrapData = Array(t)), this.$updateWrapData(0, t - 1);
                  }
                  this._signal("changeWrapMode");
                }
              }),
              (e.prototype.getUseWrapMode = function () {
                return this.$useWrapMode;
              }),
              (e.prototype.setWrapLimitRange = function (e, t) {
                if (
                  this.$wrapLimitRange.min !== e ||
                  this.$wrapLimitRange.max !== t
                )
                  (this.$wrapLimitRange = { min: e, max: t }),
                    (this.$modified = !0),
                    this.$bidiHandler.markAsDirty(),
                    this.$useWrapMode && this._signal("changeWrapMode");
              }),
              (e.prototype.adjustWrapLimit = function (e, t) {
                var n = this.$wrapLimitRange;
                n.max < 0 && (n = { min: t, max: t });
                var r = this.$constrainWrapLimit(e, n.min, n.max);
                return r != this.$wrapLimit && r > 1
                  ? ((this.$wrapLimit = r),
                    (this.$modified = !0),
                    this.$useWrapMode &&
                      (this.$updateWrapData(0, this.getLength() - 1),
                      this.$resetRowCache(0),
                      this._signal("changeWrapLimit")),
                    !0)
                  : !1;
              }),
              (e.prototype.$constrainWrapLimit = function (e, t, n) {
                return t && (e = Math.max(t, e)), n && (e = Math.min(n, e)), e;
              }),
              (e.prototype.getWrapLimit = function () {
                return this.$wrapLimit;
              }),
              (e.prototype.setWrapLimit = function (e) {
                this.setWrapLimitRange(e, e);
              }),
              (e.prototype.getWrapLimitRange = function () {
                return {
                  min: this.$wrapLimitRange.min,
                  max: this.$wrapLimitRange.max,
                };
              }),
              (e.prototype.$updateInternalDataOnChange = function (e) {
                var t = this.$useWrapMode,
                  n = e.action,
                  r = e.start,
                  i = e.end,
                  s = r.row,
                  o = i.row,
                  u = o - s,
                  a = null;
                this.$updating = !0;
                if (u != 0)
                  if (n === "remove") {
                    this[t ? "$wrapData" : "$rowLengthCache"].splice(s, u);
                    var f = this.$foldData;
                    (a = this.getFoldsInRange(e)), this.removeFolds(a);
                    var l = this.getFoldLine(i.row),
                      c = 0;
                    if (l) {
                      l.addRemoveChars(i.row, i.column, r.column - i.column),
                        l.shiftRow(-u);
                      var h = this.getFoldLine(s);
                      h && h !== l && (h.merge(l), (l = h)),
                        (c = f.indexOf(l) + 1);
                    }
                    for (c; c < f.length; c++) {
                      var l = f[c];
                      l.start.row >= i.row && l.shiftRow(-u);
                    }
                    o = s;
                  } else {
                    var p = Array(u);
                    p.unshift(s, 0);
                    var d = t ? this.$wrapData : this.$rowLengthCache;
                    d.splice.apply(d, p);
                    var f = this.$foldData,
                      l = this.getFoldLine(s),
                      c = 0;
                    if (l) {
                      var v = l.range.compareInside(r.row, r.column);
                      v == 0
                        ? ((l = l.split(r.row, r.column)),
                          l &&
                            (l.shiftRow(u),
                            l.addRemoveChars(o, 0, i.column - r.column)))
                        : v == -1 &&
                          (l.addRemoveChars(s, 0, i.column - r.column),
                          l.shiftRow(u)),
                        (c = f.indexOf(l) + 1);
                    }
                    for (c; c < f.length; c++) {
                      var l = f[c];
                      l.start.row >= s && l.shiftRow(u);
                    }
                  }
                else {
                  (u = Math.abs(e.start.column - e.end.column)),
                    n === "remove" &&
                      ((a = this.getFoldsInRange(e)),
                      this.removeFolds(a),
                      (u = -u));
                  var l = this.getFoldLine(s);
                  l && l.addRemoveChars(s, r.column, u);
                }
                return (
                  t &&
                    this.$wrapData.length != this.doc.getLength() &&
                    console.error(
                      "doc.getLength() and $wrapData.length have to be the same!"
                    ),
                  (this.$updating = !1),
                  t
                    ? this.$updateWrapData(s, o)
                    : this.$updateRowLengthCache(s, o),
                  a
                );
              }),
              (e.prototype.$updateRowLengthCache = function (e, t, n) {
                (this.$rowLengthCache[e] = null),
                  (this.$rowLengthCache[t] = null);
              }),
              (e.prototype.$updateWrapData = function (e, t) {
                var n = this.doc.getAllLines(),
                  r = this.getTabSize(),
                  i = this.$wrapData,
                  s = this.$wrapLimit,
                  o,
                  u,
                  a = e;
                t = Math.min(t, n.length - 1);
                while (a <= t)
                  (u = this.getFoldLine(a, u)),
                    u
                      ? ((o = []),
                        u.walk(
                          function (e, t, r, i) {
                            var s;
                            if (e != null) {
                              (s = this.$getDisplayTokens(e, o.length)),
                                (s[0] = g);
                              for (var u = 1; u < s.length; u++) s[u] = y;
                            } else
                              s = this.$getDisplayTokens(
                                n[t].substring(i, r),
                                o.length
                              );
                            o = o.concat(s);
                          }.bind(this),
                          u.end.row,
                          n[u.end.row].length + 1
                        ),
                        (i[u.start.row] = this.$computeWrapSplits(o, s, r)),
                        (a = u.end.row + 1))
                      : ((o = this.$getDisplayTokens(n[a])),
                        (i[a] = this.$computeWrapSplits(o, s, r)),
                        a++);
              }),
              (e.prototype.$computeWrapSplits = function (e, t, n) {
                function l() {
                  var t = 0;
                  if (f === 0) return t;
                  if (a)
                    for (var r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (i == w) t += 1;
                      else {
                        if (i != E) {
                          if (i == S) continue;
                          break;
                        }
                        t += n;
                      }
                    }
                  return u && a !== !1 && (t += n), Math.min(t, f);
                }
                function c(t) {
                  var n = t - s;
                  for (var i = s; i < t; i++) {
                    var u = e[i];
                    if (u === 12 || u === 2) n -= 1;
                  }
                  r.length || ((h = l()), (r.indent = h)),
                    (o += n),
                    r.push(o),
                    (s = t);
                }
                if (e.length == 0) return [];
                var r = [],
                  i = e.length,
                  s = 0,
                  o = 0,
                  u = this.$wrapAsCode,
                  a = this.$indentedSoftWrap,
                  f = t <= Math.max(2 * n, 8) || a === !1 ? 0 : Math.floor(t / 2),
                  h = 0;
                while (i - s > t - h) {
                  var p = s + t - h;
                  if (e[p - 1] >= w && e[p] >= w) {
                    c(p);
                    continue;
                  }
                  if (e[p] == g || e[p] == y) {
                    for (p; p != s - 1; p--) if (e[p] == g) break;
                    if (p > s) {
                      c(p);
                      continue;
                    }
                    p = s + t;
                    for (p; p < e.length; p++) if (e[p] != y) break;
                    if (p == e.length) break;
                    c(p);
                    continue;
                  }
                  var d = Math.max(p - (t - (t >> 2)), s - 1);
                  while (p > d && e[p] < g) p--;
                  if (u) {
                    while (p > d && e[p] < g) p--;
                    while (p > d && e[p] == b) p--;
                  } else while (p > d && e[p] < w) p--;
                  if (p > d) {
                    c(++p);
                    continue;
                  }
                  (p = s + t), e[p] == m && p--, c(p - h);
                }
                return r;
              }),
              (e.prototype.$getDisplayTokens = function (e, t) {
                var n = [],
                  r;
                t = t || 0;
                for (var i = 0; i < e.length; i++) {
                  var s = e.charCodeAt(i);
                  if (s == 9) {
                    (r = this.getScreenTabSize(n.length + t)), n.push(E);
                    for (var o = 1; o < r; o++) n.push(S);
                  } else
                    s == 32
                      ? n.push(w)
                      : (s > 39 && s < 48) || (s > 57 && s < 64)
                      ? n.push(b)
                      : s >= 4352 && x(s)
                      ? n.push(v, m)
                      : n.push(v);
                }
                return n;
              }),
              (e.prototype.$getStringScreenWidth = function (e, t, n) {
                if (t == 0) return [0, 0];
                t == null && (t = Infinity), (n = n || 0);
                var r, i;
                for (i = 0; i < e.length; i++) {
                  (r = e.charCodeAt(i)),
                    r == 9
                      ? (n += this.getScreenTabSize(n))
                      : r >= 4352 && x(r)
                      ? (n += 2)
                      : (n += 1);
                  if (n > t) break;
                }
                return [n, i];
              }),
              (e.prototype.getRowLength = function (e) {
                var t = 1;
                return (
                  this.lineWidgets &&
                    (t +=
                      (this.lineWidgets[e] && this.lineWidgets[e].rowCount) || 0),
                  !this.$useWrapMode || !this.$wrapData[e]
                    ? t
                    : this.$wrapData[e].length + t
                );
              }),
              (e.prototype.getRowLineCount = function (e) {
                return !this.$useWrapMode || !this.$wrapData[e]
                  ? 1
                  : this.$wrapData[e].length + 1;
              }),
              (e.prototype.getRowWrapIndent = function (e) {
                if (this.$useWrapMode) {
                  var t = this.screenToDocumentPosition(e, Number.MAX_VALUE),
                    n = this.$wrapData[t.row];
                  return n.length && n[0] < t.column ? n.indent : 0;
                }
                return 0;
              }),
              (e.prototype.getScreenLastRowColumn = function (e) {
                var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
                return this.documentToScreenColumn(t.row, t.column);
              }),
              (e.prototype.getDocumentLastRowColumn = function (e, t) {
                var n = this.documentToScreenRow(e, t);
                return this.getScreenLastRowColumn(n);
              }),
              (e.prototype.getDocumentLastRowColumnPosition = function (e, t) {
                var n = this.documentToScreenRow(e, t);
                return this.screenToDocumentPosition(n, Number.MAX_VALUE / 10);
              }),
              (e.prototype.getRowSplitData = function (e) {
                return this.$useWrapMode ? this.$wrapData[e] : undefined;
              }),
              (e.prototype.getScreenTabSize = function (e) {
                return this.$tabSize - (e % this.$tabSize | 0);
              }),
              (e.prototype.screenToDocumentRow = function (e, t) {
                return this.screenToDocumentPosition(e, t).row;
              }),
              (e.prototype.screenToDocumentColumn = function (e, t) {
                return this.screenToDocumentPosition(e, t).column;
              }),
              (e.prototype.screenToDocumentPosition = function (e, t, n) {
                if (e < 0) return { row: 0, column: 0 };
                var r,
                  i = 0,
                  s = 0,
                  o,
                  u = 0,
                  a = 0,
                  f = this.$screenRowCache,
                  l = this.$getRowCacheIndex(f, e),
                  c = f.length;
                if (c && l >= 0)
                  var u = f[l],
                    i = this.$docRowCache[l],
                    h = e > f[c - 1];
                else var h = !c;
                var p = this.getLength() - 1,
                  d = this.getNextFoldLine(i),
                  v = d ? d.start.row : Infinity;
                while (u <= e) {
                  a = this.getRowLength(i);
                  if (u + a > e || i >= p) break;
                  (u += a),
                    i++,
                    i > v &&
                      ((i = d.end.row + 1),
                      (d = this.getNextFoldLine(i, d)),
                      (v = d ? d.start.row : Infinity)),
                    h &&
                      (this.$docRowCache.push(i), this.$screenRowCache.push(u));
                }
                if (d && d.start.row <= i)
                  (r = this.getFoldDisplayLine(d)), (i = d.start.row);
                else {
                  if (u + a <= e || i > p)
                    return { row: p, column: this.getLine(p).length };
                  (r = this.getLine(i)), (d = null);
                }
                var m = 0,
                  g = Math.floor(e - u);
                if (this.$useWrapMode) {
                  var y = this.$wrapData[i];
                  y &&
                    ((o = y[g]),
                    g > 0 &&
                      y.length &&
                      ((m = y.indent),
                      (s = y[g - 1] || y[y.length - 1]),
                      (r = r.substring(s))));
                }
                return (
                  n !== undefined &&
                    this.$bidiHandler.isBidiRow(u + g, i, g) &&
                    (t = this.$bidiHandler.offsetToCol(n)),
                  (s += this.$getStringScreenWidth(r, t - m)[1]),
                  this.$useWrapMode && s >= o && (s = o - 1),
                  d ? d.idxToPosition(s) : { row: i, column: s }
                );
              }),
              (e.prototype.documentToScreenPosition = function (e, t) {
                if (typeof t == "undefined")
                  var n = this.$clipPositionToDocument(e.row, e.column);
                else n = this.$clipPositionToDocument(e, t);
                (e = n.row), (t = n.column);
                var r = 0,
                  i = null,
                  s = null;
                (s = this.getFoldAt(e, t, 1)),
                  s && ((e = s.start.row), (t = s.start.column));
                var o,
                  u = 0,
                  a = this.$docRowCache,
                  f = this.$getRowCacheIndex(a, e),
                  l = a.length;
                if (l && f >= 0)
                  var u = a[f],
                    r = this.$screenRowCache[f],
                    c = e > a[l - 1];
                else var c = !l;
                var h = this.getNextFoldLine(u),
                  p = h ? h.start.row : Infinity;
                while (u < e) {
                  if (u >= p) {
                    o = h.end.row + 1;
                    if (o > e) break;
                    (h = this.getNextFoldLine(o, h)),
                      (p = h ? h.start.row : Infinity);
                  } else o = u + 1;
                  (r += this.getRowLength(u)),
                    (u = o),
                    c &&
                      (this.$docRowCache.push(u), this.$screenRowCache.push(r));
                }
                var d = "";
                h && u >= p
                  ? ((d = this.getFoldDisplayLine(h, e, t)), (i = h.start.row))
                  : ((d = this.getLine(e).substring(0, t)), (i = e));
                var v = 0;
                if (this.$useWrapMode) {
                  var m = this.$wrapData[i];
                  if (m) {
                    var g = 0;
                    while (d.length >= m[g]) r++, g++;
                    (d = d.substring(m[g - 1] || 0, d.length)),
                      (v = g > 0 ? m.indent : 0);
                  }
                }
                return (
                  this.lineWidgets &&
                    this.lineWidgets[u] &&
                    this.lineWidgets[u].rowsAbove &&
                    (r += this.lineWidgets[u].rowsAbove),
                  { row: r, column: v + this.$getStringScreenWidth(d)[0] }
                );
              }),
              (e.prototype.documentToScreenColumn = function (e, t) {
                return this.documentToScreenPosition(e, t).column;
              }),
              (e.prototype.documentToScreenRow = function (e, t) {
                return this.documentToScreenPosition(e, t).row;
              }),
              (e.prototype.getScreenLength = function () {
                var e = 0,
                  t = null;
                if (!this.$useWrapMode) {
                  e = this.getLength();
                  var n = this.$foldData;
                  for (var r = 0; r < n.length; r++)
                    (t = n[r]), (e -= t.end.row - t.start.row);
                } else {
                  var i = this.$wrapData.length,
                    s = 0,
                    r = 0,
                    t = this.$foldData[r++],
                    o = t ? t.start.row : Infinity;
                  while (s < i) {
                    var u = this.$wrapData[s];
                    (e += u ? u.length + 1 : 1),
                      s++,
                      s > o &&
                        ((s = t.end.row + 1),
                        (t = this.$foldData[r++]),
                        (o = t ? t.start.row : Infinity));
                  }
                }
                return (
                  this.lineWidgets && (e += this.$getWidgetScreenLength()), e
                );
              }),
              (e.prototype.$setFontMetrics = function (e) {
                if (!this.$enableVarChar) return;
                this.$getStringScreenWidth = function (t, n, r) {
                  if (n === 0) return [0, 0];
                  n || (n = Infinity), (r = r || 0);
                  var i, s;
                  for (s = 0; s < t.length; s++) {
                    (i = t.charAt(s)),
                      i === "	"
                        ? (r += this.getScreenTabSize(r))
                        : (r += e.getCharacterWidth(i));
                    if (r > n) break;
                  }
                  return [r, s];
                };
              }),
              (e.prototype.destroy = function () {
                this.destroyed ||
                  (this.bgTokenizer.setDocument(null),
                  this.bgTokenizer.cleanup(),
                  (this.destroyed = !0)),
                  this.$stopWorker(),
                  this.removeAllListeners(),
                  this.doc && this.doc.off("change", this.$onChange),
                  this.selection.detach();
              }),
              e
            );
          })();
        (d.$uid = 0),
          (d.prototype.$modes = o.$modes),
          (d.prototype.getValue = d.prototype.toString),
          (d.prototype.$defaultUndoManager = {
            undo: function () {},
            redo: function () {},
            hasUndo: function () {},
            hasRedo: function () {},
            reset: function () {},
            add: function () {},
            addSelection: function () {},
            startNewGroup: function () {},
            addSession: function () {},
          }),
          (d.prototype.$overwrite = !1),
          (d.prototype.$mode = null),
          (d.prototype.$modeId = null),
          (d.prototype.$scrollTop = 0),
          (d.prototype.$scrollLeft = 0),
          (d.prototype.$wrapLimit = 80),
          (d.prototype.$useWrapMode = !1),
          (d.prototype.$wrapLimitRange = { min: null, max: null }),
          (d.prototype.lineWidgets = null),
          (d.prototype.isFullWidth = x),
          r.implement(d.prototype, u);
        var v = 1,
          m = 2,
          g = 3,
          y = 4,
          b = 9,
          w = 10,
          E = 11,
          S = 12;
        e("./edit_session/folding").Folding.call(d.prototype),
          e("./edit_session/bracket_match").BracketMatch.call(d.prototype),
          o.defineOptions(d.prototype, "session", {
            wrap: {
              set: function (e) {
                !e || e == "off"
                  ? (e = !1)
                  : e == "free"
                  ? (e = !0)
                  : e == "printMargin"
                  ? (e = -1)
                  : typeof e == "string" && (e = parseInt(e, 10) || !1);
                if (this.$wrap == e) return;
                this.$wrap = e;
                if (!e) this.setUseWrapMode(!1);
                else {
                  var t = typeof e == "number" ? e : null;
                  this.setWrapLimitRange(t, t), this.setUseWrapMode(!0);
                }
              },
              get: function () {
                return this.getUseWrapMode()
                  ? this.$wrap == -1
                    ? "printMargin"
                    : this.getWrapLimitRange().min
                    ? this.$wrap
                    : "free"
                  : "off";
              },
              handlesSet: !0,
            },
            wrapMethod: {
              set: function (e) {
                (e = e == "auto" ? this.$mode.type != "text" : e != "text"),
                  e != this.$wrapAsCode &&
                    ((this.$wrapAsCode = e),
                    this.$useWrapMode &&
                      ((this.$useWrapMode = !1), this.setUseWrapMode(!0)));
              },
              initialValue: "auto",
            },
            indentedSoftWrap: {
              set: function () {
                this.$useWrapMode &&
                  ((this.$useWrapMode = !1), this.setUseWrapMode(!0));
              },
              initialValue: !0,
            },
            firstLineNumber: {
              set: function () {
                this._signal("changeBreakpoint");
              },
              initialValue: 1,
            },
            useWorker: {
              set: function (e) {
                (this.$useWorker = e),
                  this.$stopWorker(),
                  e && this.$startWorker();
              },
              initialValue: !0,
            },
            useSoftTabs: { initialValue: !0 },
            tabSize: {
              set: function (e) {
                (e = parseInt(e)),
                  e > 0 &&
                    this.$tabSize !== e &&
                    ((this.$modified = !0),
                    (this.$rowLengthCache = []),
                    (this.$tabSize = e),
                    this._signal("changeTabSize"));
              },
              initialValue: 4,
              handlesSet: !0,
            },
            navigateWithinSoftTabs: { initialValue: !1 },
            foldStyle: {
              set: function (e) {
                this.setFoldStyle(e);
              },
              handlesSet: !0,
            },
            overwrite: {
              set: function (e) {
                this._signal("changeOverwrite");
              },
              initialValue: !1,
            },
            newLineMode: {
              set: function (e) {
                this.doc.setNewLineMode(e);
              },
              get: function () {
                return this.doc.getNewLineMode();
              },
              handlesSet: !0,
            },
            mode: {
              set: function (e) {
                this.setMode(e);
              },
              get: function () {
                return this.$modeId;
              },
              handlesSet: !0,
            },
          }),
          (t.EditSession = d);
      }
    ),
    define(
      "ace/search",
      [
        "require",
        "exports",
        "module",
        "ace/lib/lang",
        "ace/lib/oop",
        "ace/range",
      ],
      function (e, t, n) {
        "use strict";
        function u(e, t) {
          function n(e) {
            return /\w/.test(e) || t.regExp ? "\\b" : "";
          }
          return n(e[0]) + e + n(e[e.length - 1]);
        }
        var r = e("./lib/lang"),
          i = e("./lib/oop"),
          s = e("./range").Range,
          o = (function () {
            function e() {
              this.$options = {};
            }
            return (
              (e.prototype.set = function (e) {
                return i.mixin(this.$options, e), this;
              }),
              (e.prototype.getOptions = function () {
                return r.copyObject(this.$options);
              }),
              (e.prototype.setOptions = function (e) {
                this.$options = e;
              }),
              (e.prototype.find = function (e) {
                var t = this.$options,
                  n = this.$matchIterator(e, t);
                if (!n) return !1;
                var r = null;
                return (
                  n.forEach(function (e, n, i, o) {
                    return (
                      (r = new s(e, n, i, o)),
                      n == o &&
                      t.start &&
                      t.start.start &&
                      t.skipCurrent != 0 &&
                      r.isEqual(t.start)
                        ? ((r = null), !1)
                        : !0
                    );
                  }),
                  r
                );
              }),
              (e.prototype.findAll = function (e) {
                var t = this.$options;
                if (!t.needle) return [];
                this.$assembleRegExp(t);
                var n = t.range,
                  i = n
                    ? e.getLines(n.start.row, n.end.row)
                    : e.doc.getAllLines(),
                  o = [],
                  u = t.re;
                if (t.$isMultiLine) {
                  var a = u.length,
                    f = i.length - a,
                    l;
                  e: for (var c = u.offset || 0; c <= f; c++) {
                    for (var h = 0; h < a; h++)
                      if (i[c + h].search(u[h]) == -1) continue e;
                    var p = i[c],
                      d = i[c + a - 1],
                      v = p.length - p.match(u[0])[0].length,
                      m = d.match(u[a - 1])[0].length;
                    if (l && l.end.row === c && l.end.column > v) continue;
                    o.push((l = new s(c, v, c + a - 1, m))),
                      a > 2 && (c = c + a - 2);
                  }
                } else
                  for (var g = 0; g < i.length; g++) {
                    var y = r.getMatchOffsets(i[g], u);
                    for (var h = 0; h < y.length; h++) {
                      var b = y[h];
                      o.push(new s(g, b.offset, g, b.offset + b.length));
                    }
                  }
                if (n) {
                  var w = n.start.column,
                    E = n.end.column,
                    g = 0,
                    h = o.length - 1;
                  while (g < h && o[g].start.column < w && o[g].start.row == 0)
                    g++;
                  var S = n.end.row - n.start.row;
                  while (g < h && o[h].end.column > E && o[h].end.row == S) h--;
                  o = o.slice(g, h + 1);
                  for (g = 0, h = o.length; g < h; g++)
                    (o[g].start.row += n.start.row),
                      (o[g].end.row += n.start.row);
                }
                return o;
              }),
              (e.prototype.replace = function (e, t) {
                var n = this.$options,
                  r = this.$assembleRegExp(n);
                if (n.$isMultiLine) return t;
                if (!r) return;
                var i = r.exec(e);
                if (!i || i[0].length != e.length) return null;
                t = e.replace(r, t);
                if (n.preserveCase) {
                  t = t.split("");
                  for (var s = Math.min(e.length, e.length); s--; ) {
                    var o = e[s];
                    o && o.toLowerCase() != o
                      ? (t[s] = t[s].toUpperCase())
                      : (t[s] = t[s].toLowerCase());
                  }
                  t = t.join("");
                }
                return t;
              }),
              (e.prototype.$assembleRegExp = function (e, t) {
                if (e.needle instanceof RegExp) return (e.re = e.needle);
                var n = e.needle;
                if (!e.needle) return (e.re = !1);
                e.regExp || (n = r.escapeRegExp(n)), e.wholeWord && (n = u(n, e));
                var i = e.caseSensitive ? "gm" : "gmi";
                e.$isMultiLine = !t && /[\n\r]/.test(n);
                if (e.$isMultiLine)
                  return (e.re = this.$assembleMultilineRegExp(n, i));
                try {
                  var s = new RegExp(n, i);
                } catch (o) {
                  s = !1;
                }
                return (e.re = s);
              }),
              (e.prototype.$assembleMultilineRegExp = function (e, t) {
                var n = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"),
                  r = [];
                for (var i = 0; i < n.length; i++)
                  try {
                    r.push(new RegExp(n[i], t));
                  } catch (s) {
                    return !1;
                  }
                return r;
              }),
              (e.prototype.$matchIterator = function (e, t) {
                var n = this.$assembleRegExp(t);
                if (!n) return !1;
                var r = t.backwards == 1,
                  i = t.skipCurrent != 0,
                  s = t.range,
                  o = t.start;
                o || (o = s ? s[r ? "end" : "start"] : e.selection.getRange()),
                  o.start && (o = o[i != r ? "end" : "start"]);
                var u = s ? s.start.row : 0,
                  a = s ? s.end.row : e.getLength() - 1;
                if (r)
                  var f = function (e) {
                    var n = o.row;
                    if (c(n, o.column, e)) return;
                    for (n--; n >= u; n--) if (c(n, Number.MAX_VALUE, e)) return;
                    if (t.wrap == 0) return;
                    for (n = a, u = o.row; n >= u; n--)
                      if (c(n, Number.MAX_VALUE, e)) return;
                  };
                else
                  var f = function (e) {
                    var n = o.row;
                    if (c(n, o.column, e)) return;
                    for (n += 1; n <= a; n++) if (c(n, 0, e)) return;
                    if (t.wrap == 0) return;
                    for (n = u, a = o.row; n <= a; n++) if (c(n, 0, e)) return;
                  };
                if (t.$isMultiLine)
                  var l = n.length,
                    c = function (t, i, s) {
                      var o = r ? t - l + 1 : t;
                      if (o < 0 || o + l > e.getLength()) return;
                      var u = e.getLine(o),
                        a = u.search(n[0]);
                      if ((!r && a < i) || a === -1) return;
                      for (var f = 1; f < l; f++) {
                        u = e.getLine(o + f);
                        if (u.search(n[f]) == -1) return;
                      }
                      var c = u.match(n[l - 1])[0].length;
                      if (r && c > i) return;
                      if (s(o, a, o + l - 1, c)) return !0;
                    };
                else if (r)
                  var c = function (t, r, i) {
                    var s = e.getLine(t),
                      o = [],
                      u,
                      a = 0;
                    n.lastIndex = 0;
                    while ((u = n.exec(s))) {
                      var f = u[0].length;
                      a = u.index;
                      if (!f) {
                        if (a >= s.length) break;
                        n.lastIndex = a += 1;
                      }
                      if (u.index + f > r) break;
                      o.push(u.index, f);
                    }
                    for (var l = o.length - 1; l >= 0; l -= 2) {
                      var c = o[l - 1],
                        f = o[l];
                      if (i(t, c, t, c + f)) return !0;
                    }
                  };
                else
                  var c = function (t, r, i) {
                    var s = e.getLine(t),
                      o,
                      u;
                    n.lastIndex = r;
                    while ((u = n.exec(s))) {
                      var a = u[0].length;
                      o = u.index;
                      if (i(t, o, t, o + a)) return !0;
                      if (!a) {
                        n.lastIndex = o += 1;
                        if (o >= s.length) return !1;
                      }
                    }
                  };
                return { forEach: f };
              }),
              e
            );
          })();
        t.Search = o;
      }
    ),
    define(
      "ace/keyboard/hash_handler",
      ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"],
      function (e, t, n) {
        "use strict";
        function a(e) {
          return (
            (typeof e == "object" && e.bindKey && e.bindKey.position) ||
            (e.isDefault ? -100 : 0)
          );
        }
        var r =
            (this && this.__extends) ||
            (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                if (typeof n != "function" && n !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(n) +
                      " is not a constructor or null"
                  );
                e(t, n),
                  (t.prototype =
                    n === null
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          i = e("../lib/keys"),
          s = e("../lib/useragent"),
          o = i.KEY_MODS,
          u = (function () {
            function e(e, t) {
              this.$init(e, t, !1);
            }
            return (
              (e.prototype.$init = function (e, t, n) {
                (this.platform = t || (s.isMac ? "mac" : "win")),
                  (this.commands = {}),
                  (this.commandKeyBinding = {}),
                  this.addCommands(e),
                  (this.$singleCommand = n);
              }),
              (e.prototype.addCommand = function (e) {
                this.commands[e.name] && this.removeCommand(e),
                  (this.commands[e.name] = e),
                  e.bindKey && this._buildKeyHash(e);
              }),
              (e.prototype.removeCommand = function (e, t) {
                var n = e && (typeof e == "string" ? e : e.name);
                (e = this.commands[n]), t || delete this.commands[n];
                var r = this.commandKeyBinding;
                for (var i in r) {
                  var s = r[i];
                  if (s == e) delete r[i];
                  else if (Array.isArray(s)) {
                    var o = s.indexOf(e);
                    o != -1 && (s.splice(o, 1), s.length == 1 && (r[i] = s[0]));
                  }
                }
              }),
              (e.prototype.bindKey = function (e, t, n) {
                typeof e == "object" &&
                  e &&
                  (n == undefined && (n = e.position), (e = e[this.platform]));
                if (!e) return;
                if (typeof t == "function")
                  return this.addCommand({
                    exec: t,
                    bindKey: e,
                    name: t.name || e,
                  });
                e.split("|").forEach(function (e) {
                  var r = "";
                  if (e.indexOf(" ") != -1) {
                    var i = e.split(/\s+/);
                    (e = i.pop()),
                      i.forEach(function (e) {
                        var t = this.parseKeys(e),
                          n = o[t.hashId] + t.key;
                        (r += (r ? " " : "") + n),
                          this._addCommandToBinding(r, "chainKeys");
                      }, this),
                      (r += " ");
                  }
                  var s = this.parseKeys(e),
                    u = o[s.hashId] + s.key;
                  this._addCommandToBinding(r + u, t, n);
                }, this);
              }),
              (e.prototype._addCommandToBinding = function (e, t, n) {
                var r = this.commandKeyBinding,
                  i;
                if (!t) delete r[e];
                else if (!r[e] || this.$singleCommand) r[e] = t;
                else {
                  Array.isArray(r[e])
                    ? (i = r[e].indexOf(t)) != -1 && r[e].splice(i, 1)
                    : (r[e] = [r[e]]),
                    typeof n != "number" && (n = a(t));
                  var s = r[e];
                  for (i = 0; i < s.length; i++) {
                    var o = s[i],
                      u = a(o);
                    if (u > n) break;
                  }
                  s.splice(i, 0, t);
                }
              }),
              (e.prototype.addCommands = function (e) {
                e &&
                  Object.keys(e).forEach(function (t) {
                    var n = e[t];
                    if (!n) return;
                    if (typeof n == "string") return this.bindKey(n, t);
                    typeof n == "function" && (n = { exec: n });
                    if (typeof n != "object") return;
                    n.name || (n.name = t), this.addCommand(n);
                  }, this);
              }),
              (e.prototype.removeCommands = function (e) {
                Object.keys(e).forEach(function (t) {
                  this.removeCommand(e[t]);
                }, this);
              }),
              (e.prototype.bindKeys = function (e) {
                Object.keys(e).forEach(function (t) {
                  this.bindKey(t, e[t]);
                }, this);
              }),
              (e.prototype._buildKeyHash = function (e) {
                this.bindKey(e.bindKey, e);
              }),
              (e.prototype.parseKeys = function (e) {
                var t = e
                    .toLowerCase()
                    .split(/[\-\+]([\-\+])?/)
                    .filter(function (e) {
                      return e;
                    }),
                  n = t.pop(),
                  r = i[n];
                if (i.FUNCTION_KEYS[r]) n = i.FUNCTION_KEYS[r].toLowerCase();
                else {
                  if (!t.length) return { key: n, hashId: -1 };
                  if (t.length == 1 && t[0] == "shift")
                    return { key: n.toUpperCase(), hashId: -1 };
                }
                var s = 0;
                for (var o = t.length; o--; ) {
                  var u = i.KEY_MODS[t[o]];
                  if (u == null)
                    return (
                      typeof console != "undefined" &&
                        console.error("invalid modifier " + t[o] + " in " + e),
                      !1
                    );
                  s |= u;
                }
                return { key: n, hashId: s };
              }),
              (e.prototype.findKeyCommand = function (e, t) {
                var n = o[e] + t;
                return this.commandKeyBinding[n];
              }),
              (e.prototype.handleKeyboard = function (e, t, n, r) {
                if (r < 0) return;
                var i = o[t] + n,
                  s = this.commandKeyBinding[i];
                e.$keyChain &&
                  ((e.$keyChain += " " + i),
                  (s = this.commandKeyBinding[e.$keyChain] || s));
                if (s)
                  if (s == "chainKeys" || s[s.length - 1] == "chainKeys")
                    return (e.$keyChain = e.$keyChain || i), { command: "null" };
                if (e.$keyChain)
                  if ((!!t && t != 4) || n.length != 1) {
                    if (t == -1 || r > 0) e.$keyChain = "";
                  } else e.$keyChain = e.$keyChain.slice(0, -i.length - 1);
                return { command: s };
              }),
              (e.prototype.getStatusText = function (e, t) {
                return t.$keyChain || "";
              }),
              e
            );
          })(),
          f = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (r.$singleCommand = !0), r;
            }
            return r(t, e), t;
          })(u);
        (f.call = function (e, t, n) {
          u.prototype.$init.call(e, t, n, !0);
        }),
          (u.call = function (e, t, n) {
            u.prototype.$init.call(e, t, n, !1);
          }),
          (t.HashHandler = f),
          (t.MultiHashHandler = u);
      }
    ),
    define(
      "ace/commands/command_manager",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/keyboard/hash_handler",
        "ace/lib/event_emitter",
      ],
      function (e, t, n) {
        "use strict";
        var r =
            (this && this.__extends) ||
            (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                if (typeof n != "function" && n !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(n) +
                      " is not a constructor or null"
                  );
                e(t, n),
                  (t.prototype =
                    n === null
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          i = e("../lib/oop"),
          s = e("../keyboard/hash_handler").MultiHashHandler,
          o = e("../lib/event_emitter").EventEmitter,
          u = (function (e) {
            function t(t, n) {
              var r = e.call(this, n, t) || this;
              return (
                (r.byName = r.commands),
                r.setDefaultHandler("exec", function (e) {
                  return e.args
                    ? e.command.exec(e.editor1, e.args, e.event, !1)
                    : e.command.exec(e.editor1, {}, e.event, !0);
                }),
                r
              );
            }
            return (
              r(t, e),
              (t.prototype.exec = function (e, t, n) {
                if (Array.isArray(e)) {
                  for (var r = e.length; r--; )
                    if (this.exec(e[r], t, n)) return !0;
                  return !1;
                }
                typeof e == "string" && (e = this.commands[e]);
                if (!e) return !1;
                if (t && t.$readOnly && !e.readOnly) return !1;
                if (
                  this.$checkCommandState != 0 &&
                  e.isAvailable &&
                  !e.isAvailable(t)
                )
                  return !1;
                var i = { editor1: t, command: e, args: n };
                return (
                  (i.returnValue = this._emit("exec", i)),
                  this._signal("afterExec", i),
                  i.returnValue === !1 ? !1 : !0
                );
              }),
              (t.prototype.toggleRecording = function (e) {
                if (this.$inReplay) return;
                return (
                  e && e._emit("changeStatus"),
                  this.recording
                    ? (this.macro.pop(),
                      this.off("exec", this.$addCommandToMacro),
                      this.macro.length || (this.macro = this.oldMacro),
                      (this.recording = !1))
                    : (this.$addCommandToMacro ||
                        (this.$addCommandToMacro = function (e) {
                          this.macro.push([e.command, e.args]);
                        }.bind(this)),
                      (this.oldMacro = this.macro),
                      (this.macro = []),
                      this.on("exec", this.$addCommandToMacro),
                      (this.recording = !0))
                );
              }),
              (t.prototype.replay = function (e) {
                if (this.$inReplay || !this.macro) return;
                if (this.recording) return this.toggleRecording(e);
                try {
                  (this.$inReplay = !0),
                    this.macro.forEach(function (t) {
                      typeof t == "string"
                        ? this.exec(t, e)
                        : this.exec(t[0], e, t[1]);
                    }, this);
                } finally {
                  this.$inReplay = !1;
                }
              }),
              (t.prototype.trimMacro = function (e) {
                return e.map(function (e) {
                  return (
                    typeof e[0] != "string" && (e[0] = e[0].name),
                    e[1] || (e = e[0]),
                    e
                  );
                });
              }),
              t
            );
          })(s);
        i.implement(u.prototype, o), (t.CommandManager = u);
      }
    ),
    define(
      "ace/commands/default_commands",
      ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"],
      function (e, t, n) {
        "use strict";
        function o(e, t) {
          return { win: e, mac: t };
        }
        var r = e("../lib/lang"),
          i = e("../config"),
          s = e("../range").Range;
        t.commands = [
          {
            name: "showSettingsMenu",
            description: "Show settings menu",
            bindKey: o("Ctrl-,", "Command-,"),
            exec: function (e) {
              i.loadModule("ace/ext/settings_menu", function (t) {
                t.init(e), e.showSettingsMenu();
              });
            },
            readOnly: !0,
          },
          {
            name: "goToNextError",
            description: "Go to next error",
            bindKey: o("Alt-E", "F4"),
            exec: function (e) {
              i.loadModule("ace/ext/error_marker", function (t) {
                t.showErrorMarker(e, 1);
              });
            },
            scrollIntoView: "animate",
            readOnly: !0,
          },
          {
            name: "goToPreviousError",
            description: "Go to previous error",
            bindKey: o("Alt-Shift-E", "Shift-F4"),
            exec: function (e) {
              i.loadModule("ace/ext/error_marker", function (t) {
                t.showErrorMarker(e, -1);
              });
            },
            scrollIntoView: "animate",
            readOnly: !0,
          },
          {
            name: "selectall",
            description: "Select all",
            bindKey: o("Ctrl-A", "Command-A"),
            exec: function (e) {
              e.selectAll();
            },
            readOnly: !0,
          },
          {
            name: "centerselection",
            description: "Center selection",
            bindKey: o(null, "Ctrl-L"),
            exec: function (e) {
              e.centerSelection();
            },
            readOnly: !0,
          },
          {
            name: "gotoline",
            description: "Go to line...",
            bindKey: o("Ctrl-L", "Command-L"),
            exec: function (e, t) {
              typeof t == "number" && !isNaN(t) && e.gotoLine(t),
                e.prompt({ $type: "gotoLine" });
            },
            readOnly: !0,
          },
          {
            name: "fold",
            bindKey: o("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
            exec: function (e) {
              e.session.toggleFold(!1);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "unfold",
            bindKey: o(
              "Alt-Shift-L|Ctrl-Shift-F1",
              "Command-Alt-Shift-L|Command-Shift-F1"
            ),
            exec: function (e) {
              e.session.toggleFold(!0);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "toggleFoldWidget",
            description: "Toggle fold widget",
            bindKey: o("F2", "F2"),
            exec: function (e) {
              e.session.toggleFoldWidget();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "toggleParentFoldWidget",
            description: "Toggle parent fold widget",
            bindKey: o("Alt-F2", "Alt-F2"),
            exec: function (e) {
              e.session.toggleFoldWidget(!0);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "foldall",
            description: "Fold all",
            bindKey: o(null, "Ctrl-Command-Option-0"),
            exec: function (e) {
              e.session.foldAll();
            },
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "foldAllComments",
            description: "Fold all comments",
            bindKey: o(null, "Ctrl-Command-Option-0"),
            exec: function (e) {
              e.session.foldAllComments();
            },
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "foldOther",
            description: "Fold other",
            bindKey: o("Alt-0", "Command-Option-0"),
            exec: function (e) {
              e.session.foldAll(), e.session.unfold(e.selection.getAllRanges());
            },
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "unfoldall",
            description: "Unfold all",
            bindKey: o("Alt-Shift-0", "Command-Option-Shift-0"),
            exec: function (e) {
              e.session.unfold();
            },
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "findnext",
            description: "Find next",
            bindKey: o("Ctrl-K", "Command-G"),
            exec: function (e) {
              e.findNext();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "findprevious",
            description: "Find previous",
            bindKey: o("Ctrl-Shift-K", "Command-Shift-G"),
            exec: function (e) {
              e.findPrevious();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0,
          },
          {
            name: "selectOrFindNext",
            description: "Select or find next",
            bindKey: o("Alt-K", "Ctrl-G"),
            exec: function (e) {
              e.selection.isEmpty() ? e.selection.selectWord() : e.findNext();
            },
            readOnly: !0,
          },
          {
            name: "selectOrFindPrevious",
            description: "Select or find previous",
            bindKey: o("Alt-Shift-K", "Ctrl-Shift-G"),
            exec: function (e) {
              e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious();
            },
            readOnly: !0,
          },
          {
            name: "find",
            description: "Find",
            bindKey: o("Ctrl-F", "Command-F"),
            exec: function (e) {
              i.loadModule("ace/ext/searchbox", function (t) {
                t.Search(e);
              });
            },
            readOnly: !0,
          },
          {
            name: "overwrite",
            description: "Overwrite",
            bindKey: "Insert",
            exec: function (e) {
              e.toggleOverwrite();
            },
            readOnly: !0,
          },
          {
            name: "selecttostart",
            description: "Select to start",
            bindKey: o("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
            exec: function (e) {
              e.getSelection().selectFileStart();
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump",
          },
          {
            name: "gotostart",
            description: "Go to start",
            bindKey: o("Ctrl-Home", "Command-Home|Command-Up"),
            exec: function (e) {
              e.navigateFileStart();
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump",
          },
          {
            name: "selectup",
            description: "Select up",
            bindKey: o("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
            exec: function (e) {
              e.getSelection().selectUp();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "golineup",
            description: "Go line up",
            bindKey: o("Up", "Up|Ctrl-P"),
            exec: function (e, t) {
              e.navigateUp(t.times);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selecttoend",
            description: "Select to end",
            bindKey: o("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
            exec: function (e) {
              e.getSelection().selectFileEnd();
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump",
          },
          {
            name: "gotoend",
            description: "Go to end",
            bindKey: o("Ctrl-End", "Command-End|Command-Down"),
            exec: function (e) {
              e.navigateFileEnd();
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump",
          },
          {
            name: "selectdown",
            description: "Select down",
            bindKey: o("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
            exec: function (e) {
              e.getSelection().selectDown();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "golinedown",
            description: "Go line down",
            bindKey: o("Down", "Down|Ctrl-N"),
            exec: function (e, t) {
              e.navigateDown(t.times);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectwordleft",
            description: "Select word left",
            bindKey: o("Ctrl-Shift-Left", "Option-Shift-Left"),
            exec: function (e) {
              e.getSelection().selectWordLeft();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "gotowordleft",
            description: "Go to word left",
            bindKey: o("Ctrl-Left", "Option-Left"),
            exec: function (e) {
              e.navigateWordLeft();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selecttolinestart",
            description: "Select to line start",
            bindKey: o("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
            exec: function (e) {
              e.getSelection().selectLineStart();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "gotolinestart",
            description: "Go to line start",
            bindKey: o("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
            exec: function (e) {
              e.navigateLineStart();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectleft",
            description: "Select left",
            bindKey: o("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
            exec: function (e) {
              e.getSelection().selectLeft();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "gotoleft",
            description: "Go to left",
            bindKey: o("Left", "Left|Ctrl-B"),
            exec: function (e, t) {
              e.navigateLeft(t.times);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectwordright",
            description: "Select word right",
            bindKey: o("Ctrl-Shift-Right", "Option-Shift-Right"),
            exec: function (e) {
              e.getSelection().selectWordRight();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "gotowordright",
            description: "Go to word right",
            bindKey: o("Ctrl-Right", "Option-Right"),
            exec: function (e) {
              e.navigateWordRight();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selecttolineend",
            description: "Select to line end",
            bindKey: o(
              "Alt-Shift-Right",
              "Command-Shift-Right|Shift-End|Ctrl-Shift-E"
            ),
            exec: function (e) {
              e.getSelection().selectLineEnd();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "gotolineend",
            description: "Go to line end",
            bindKey: o("Alt-Right|End", "Command-Right|End|Ctrl-E"),
            exec: function (e) {
              e.navigateLineEnd();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectright",
            description: "Select right",
            bindKey: o("Shift-Right", "Shift-Right"),
            exec: function (e) {
              e.getSelection().selectRight();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "gotoright",
            description: "Go to right",
            bindKey: o("Right", "Right|Ctrl-F"),
            exec: function (e, t) {
              e.navigateRight(t.times);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectpagedown",
            description: "Select page down",
            bindKey: "Shift-PageDown",
            exec: function (e) {
              e.selectPageDown();
            },
            readOnly: !0,
          },
          {
            name: "pagedown",
            description: "Page down",
            bindKey: o(null, "Option-PageDown"),
            exec: function (e) {
              e.scrollPageDown();
            },
            readOnly: !0,
          },
          {
            name: "gotopagedown",
            description: "Go to page down",
            bindKey: o("PageDown", "PageDown|Ctrl-V"),
            exec: function (e) {
              e.gotoPageDown();
            },
            readOnly: !0,
          },
          {
            name: "selectpageup",
            description: "Select page up",
            bindKey: "Shift-PageUp",
            exec: function (e) {
              e.selectPageUp();
            },
            readOnly: !0,
          },
          {
            name: "pageup",
            description: "Page up",
            bindKey: o(null, "Option-PageUp"),
            exec: function (e) {
              e.scrollPageUp();
            },
            readOnly: !0,
          },
          {
            name: "gotopageup",
            description: "Go to page up",
            bindKey: "PageUp",
            exec: function (e) {
              e.gotoPageUp();
            },
            readOnly: !0,
          },
          {
            name: "scrollup",
            description: "Scroll up",
            bindKey: o("Ctrl-Up", null),
            exec: function (e) {
              e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight);
            },
            readOnly: !0,
          },
          {
            name: "scrolldown",
            description: "Scroll down",
            bindKey: o("Ctrl-Down", null),
            exec: function (e) {
              e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight);
            },
            readOnly: !0,
          },
          {
            name: "selectlinestart",
            description: "Select line start",
            bindKey: "Shift-Home",
            exec: function (e) {
              e.getSelection().selectLineStart();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectlineend",
            description: "Select line end",
            bindKey: "Shift-End",
            exec: function (e) {
              e.getSelection().selectLineEnd();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "togglerecording",
            description: "Toggle recording",
            bindKey: o("Ctrl-Alt-E", "Command-Option-E"),
            exec: function (e) {
              e.commands.toggleRecording(e);
            },
            readOnly: !0,
          },
          {
            name: "replaymacro",
            description: "Replay macro",
            bindKey: o("Ctrl-Shift-E", "Command-Shift-E"),
            exec: function (e) {
              e.commands.replay(e);
            },
            readOnly: !0,
          },
          {
            name: "jumptomatching",
            description: "Jump to matching",
            bindKey: o("Ctrl-\\|Ctrl-P", "Command-\\"),
            exec: function (e) {
              e.jumpToMatching();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0,
          },
          {
            name: "selecttomatching",
            description: "Select to matching",
            bindKey: o("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
            exec: function (e) {
              e.jumpToMatching(!0);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0,
          },
          {
            name: "expandToMatching",
            description: "Expand to matching",
            bindKey: o("Ctrl-Shift-M", "Ctrl-Shift-M"),
            exec: function (e) {
              e.jumpToMatching(!0, !0);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0,
          },
          {
            name: "passKeysToBrowser",
            description: "Pass keys to browser",
            bindKey: o(null, null),
            exec: function () {},
            passEvent: !0,
            readOnly: !0,
          },
          {
            name: "copy",
            description: "Copy",
            exec: function (e) {},
            readOnly: !0,
          },
          {
            name: "cut",
            description: "Cut",
            exec: function (e) {
              var t = e.$copyWithEmptySelection && e.selection.isEmpty(),
                n = t ? e.selection.getLineRange() : e.selection.getRange();
              e._emit("cut", n),
                n.isEmpty() || e.session.remove(n),
                e.clearSelection();
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach",
          },
          {
            name: "paste",
            description: "Paste",
            exec: function (e, t) {
              e.$handlePaste(t);
            },
            scrollIntoView: "cursor",
          },
          {
            name: "removeline",
            description: "Remove line",
            bindKey: o("Ctrl-D", "Command-D"),
            exec: function (e) {
              e.removeLines();
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEachLine",
          },
          {
            name: "duplicateSelection",
            description: "Duplicate selection",
            bindKey: o("Ctrl-Shift-D", "Command-Shift-D"),
            exec: function (e) {
              e.duplicateSelection();
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach",
          },
          {
            name: "sortlines",
            description: "Sort lines",
            bindKey: o("Ctrl-Alt-S", "Command-Alt-S"),
            exec: function (e) {
              e.sortLines();
            },
            scrollIntoView: "selection",
            multiSelectAction: "forEachLine",
          },
          {
            name: "togglecomment",
            description: "Toggle comment",
            bindKey: o("Ctrl-/", "Command-/"),
            exec: function (e) {
              e.toggleCommentLines();
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart",
          },
          {
            name: "toggleBlockComment",
            description: "Toggle block comment",
            bindKey: o("Ctrl-Shift-/", "Command-Shift-/"),
            exec: function (e) {
              e.toggleBlockComment();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart",
          },
          {
            name: "modifyNumberUp",
            description: "Modify number up",
            bindKey: o("Ctrl-Shift-Up", "Alt-Shift-Up"),
            exec: function (e) {
              e.modifyNumber(1);
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach",
          },
          {
            name: "modifyNumberDown",
            description: "Modify number down",
            bindKey: o("Ctrl-Shift-Down", "Alt-Shift-Down"),
            exec: function (e) {
              e.modifyNumber(-1);
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach",
          },
          {
            name: "replace",
            description: "Replace",
            bindKey: o("Ctrl-H", "Command-Option-F"),
            exec: function (e) {
              i.loadModule("ace/ext/searchbox", function (t) {
                t.Search(e, !0);
              });
            },
          },
          {
            name: "undo",
            description: "Undo",
            bindKey: o("Ctrl-Z", "Command-Z"),
            exec: function (e) {
              e.undo();
            },
          },
          {
            name: "redo",
            description: "Redo",
            bindKey: o("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
            exec: function (e) {
              e.redo();
            },
          },
          {
            name: "copylinesup",
            description: "Copy lines up",
            bindKey: o("Alt-Shift-Up", "Command-Option-Up"),
            exec: function (e) {
              e.copyLinesUp();
            },
            scrollIntoView: "cursor",
          },
          {
            name: "movelinesup",
            description: "Move lines up",
            bindKey: o("Alt-Up", "Option-Up"),
            exec: function (e) {
              e.moveLinesUp();
            },
            scrollIntoView: "cursor",
          },
          {
            name: "copylinesdown",
            description: "Copy lines down",
            bindKey: o("Alt-Shift-Down", "Command-Option-Down"),
            exec: function (e) {
              e.copyLinesDown();
            },
            scrollIntoView: "cursor",
          },
          {
            name: "movelinesdown",
            description: "Move lines down",
            bindKey: o("Alt-Down", "Option-Down"),
            exec: function (e) {
              e.moveLinesDown();
            },
            scrollIntoView: "cursor",
          },
          {
            name: "del",
            description: "Delete",
            bindKey: o("Delete", "Delete|Ctrl-D|Shift-Delete"),
            exec: function (e) {
              e.remove("right");
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "backspace",
            description: "Backspace",
            bindKey: o(
              "Shift-Backspace|Backspace",
              "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"
            ),
            exec: function (e) {
              e.remove("left");
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "cut_or_delete",
            description: "Cut or delete",
            bindKey: o("Shift-Delete", null),
            exec: function (e) {
              if (!e.selection.isEmpty()) return !1;
              e.remove("left");
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "removetolinestart",
            description: "Remove to line start",
            bindKey: o("Alt-Backspace", "Command-Backspace"),
            exec: function (e) {
              e.removeToLineStart();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "removetolineend",
            description: "Remove to line end",
            bindKey: o("Alt-Delete", "Ctrl-K|Command-Delete"),
            exec: function (e) {
              e.removeToLineEnd();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "removetolinestarthard",
            description: "Remove to line start hard",
            bindKey: o("Ctrl-Shift-Backspace", null),
            exec: function (e) {
              var t = e.selection.getRange();
              (t.start.column = 0), e.session.remove(t);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "removetolineendhard",
            description: "Remove to line end hard",
            bindKey: o("Ctrl-Shift-Delete", null),
            exec: function (e) {
              var t = e.selection.getRange();
              (t.end.column = Number.MAX_VALUE), e.session.remove(t);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "removewordleft",
            description: "Remove word left",
            bindKey: o("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
            exec: function (e) {
              e.removeWordLeft();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "removewordright",
            description: "Remove word right",
            bindKey: o("Ctrl-Delete", "Alt-Delete"),
            exec: function (e) {
              e.removeWordRight();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "outdent",
            description: "Outdent",
            bindKey: o("Shift-Tab", "Shift-Tab"),
            exec: function (e) {
              e.blockOutdent();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart",
          },
          {
            name: "indent",
            description: "Indent",
            bindKey: o("Tab", "Tab"),
            exec: function (e) {
              e.indent();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart",
          },
          {
            name: "blockoutdent",
            description: "Block outdent",
            bindKey: o("Ctrl-[", "Ctrl-["),
            exec: function (e) {
              e.blockOutdent();
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart",
          },
          {
            name: "blockindent",
            description: "Block indent",
            bindKey: o("Ctrl-]", "Ctrl-]"),
            exec: function (e) {
              e.blockIndent();
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart",
          },
          {
            name: "insertstring",
            description: "Insert string",
            exec: function (e, t) {
              e.insert(t);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "inserttext",
            description: "Insert text",
            exec: function (e, t) {
              e.insert(r.stringRepeat(t.text || "", t.times || 1));
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "splitline",
            description: "Split line",
            bindKey: o(null, "Ctrl-O"),
            exec: function (e) {
              e.splitLine();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "transposeletters",
            description: "Transpose letters",
            bindKey: o("Alt-Shift-X", "Ctrl-T"),
            exec: function (e) {
              e.transposeLetters();
            },
            multiSelectAction: function (e) {
              e.transposeSelections(1);
            },
            scrollIntoView: "cursor",
          },
          {
            name: "touppercase",
            description: "To uppercase",
            bindKey: o("Ctrl-U", "Ctrl-U"),
            exec: function (e) {
              e.toUpperCase();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "tolowercase",
            description: "To lowercase",
            bindKey: o("Ctrl-Shift-U", "Ctrl-Shift-U"),
            exec: function (e) {
              e.toLowerCase();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "autoindent",
            description: "Auto Indent",
            bindKey: o(null, null),
            exec: function (e) {
              e.autoIndent();
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "animate",
          },
          {
            name: "expandtoline",
            description: "Expand to line",
            bindKey: o("Ctrl-Shift-L", "Command-Shift-L"),
            exec: function (e) {
              var t = e.selection.getRange();
              (t.start.column = t.end.column = 0),
                t.end.row++,
                e.selection.setRange(t, !1);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "openlink",
            bindKey: o("Ctrl+F3", "F3"),
            exec: function (e) {
              e.openLink();
            },
          },
          {
            name: "joinlines",
            description: "Join lines",
            bindKey: o(null, null),
            exec: function (e) {
              var t = e.selection.isBackwards(),
                n = t
                  ? e.selection.getSelectionLead()
                  : e.selection.getSelectionAnchor(),
                i = t
                  ? e.selection.getSelectionAnchor()
                  : e.selection.getSelectionLead(),
                o = e.session.doc.getLine(n.row).length,
                u = e.session.doc.getTextRange(e.selection.getRange()),
                a = u.replace(/\n\s*/, " ").length,
                f = e.session.doc.getLine(n.row);
              for (var l = n.row + 1; l <= i.row + 1; l++) {
                var c = r.stringTrimLeft(
                  r.stringTrimRight(e.session.doc.getLine(l))
                );
                c.length !== 0 && (c = " " + c), (f += c);
              }
              i.row + 1 < e.session.doc.getLength() - 1 &&
                (f += e.session.doc.getNewLineCharacter()),
                e.clearSelection(),
                e.session.doc.replace(new s(n.row, 0, i.row + 2, 0), f),
                a > 0
                  ? (e.selection.moveCursorTo(n.row, n.column),
                    e.selection.selectTo(n.row, n.column + a))
                  : ((o = e.session.doc.getLine(n.row).length > o ? o + 1 : o),
                    e.selection.moveCursorTo(n.row, o));
            },
            multiSelectAction: "forEach",
            readOnly: !0,
          },
          {
            name: "invertSelection",
            description: "Invert selection",
            bindKey: o(null, null),
            exec: function (e) {
              var t = e.session.doc.getLength() - 1,
                n = e.session.doc.getLine(t).length,
                r = e.selection.rangeList.ranges,
                i = [];
              r.length < 1 && (r = [e.selection.getRange()]);
              for (var o = 0; o < r.length; o++)
                o == r.length - 1 &&
                  (r[o].end.row !== t || r[o].end.column !== n) &&
                  i.push(new s(r[o].end.row, r[o].end.column, t, n)),
                  o === 0
                    ? (r[o].start.row !== 0 || r[o].start.column !== 0) &&
                      i.push(new s(0, 0, r[o].start.row, r[o].start.column))
                    : i.push(
                        new s(
                          r[o - 1].end.row,
                          r[o - 1].end.column,
                          r[o].start.row,
                          r[o].start.column
                        )
                      );
              e.exitMultiSelectMode(), e.clearSelection();
              for (var o = 0; o < i.length; o++) e.selection.addRange(i[o], !1);
            },
            readOnly: !0,
            scrollIntoView: "none",
          },
          {
            name: "addLineAfter",
            description: "Add new line after the current line",
            exec: function (e) {
              e.selection.clearSelection(), e.navigateLineEnd(), e.insert("\n");
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "addLineBefore",
            description: "Add new line before the current line",
            exec: function (e) {
              e.selection.clearSelection();
              var t = e.getCursorPosition();
              e.selection.moveTo(t.row - 1, Number.MAX_VALUE),
                e.insert("\n"),
                t.row === 0 && e.navigateUp();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
          },
          {
            name: "openCommandPallete",
            description: "Open command palette",
            bindKey: o("F1", "F1"),
            exec: function (e) {
              e.prompt({ $type: "commands" });
            },
            readOnly: !0,
          },
          {
            name: "modeSelect",
            description: "Change language mode...",
            bindKey: o(null, null),
            exec: function (e) {
              e.prompt({ $type: "modes" });
            },
            readOnly: !0,
          },
        ];
        for (var u = 1; u < 9; u++)
          t.commands.push({
            name: "foldToLevel" + u,
            description: "Fold To Level " + u,
            level: u,
            exec: function (e) {
              e.session.foldToLevel(this.level);
            },
            scrollIntoView: "center",
            readOnly: !0,
          });
      }
    ),
    define(
      "ace/line_widgets",
      ["require", "exports", "module", "ace/lib/dom"],
      function (e, t, n) {
        "use strict";
        var r = e("./lib/dom"),
          i = (function () {
            function e(e) {
              (this.session = e),
                (this.session.widgetManager = this),
                (this.session.getRowLength = this.getRowLength),
                (this.session.$getWidgetScreenLength =
                  this.$getWidgetScreenLength),
                (this.updateOnChange = this.updateOnChange.bind(this)),
                (this.renderWidgets = this.renderWidgets.bind(this)),
                (this.measureWidgets = this.measureWidgets.bind(this)),
                (this.session._changedWidgets = []),
                (this.$onChangeEditor = this.$onChangeEditor.bind(this)),
                this.session.on("change", this.updateOnChange),
                this.session.on("changeFold", this.updateOnFold),
                this.session.on("changeEditor", this.$onChangeEditor);
            }
            return (
              (e.prototype.getRowLength = function (e) {
                var t;
                return (
                  this.lineWidgets
                    ? (t =
                        (this.lineWidgets[e] && this.lineWidgets[e].rowCount) ||
                        0)
                    : (t = 0),
                  !this.$useWrapMode || !this.$wrapData[e]
                    ? 1 + t
                    : this.$wrapData[e].length + 1 + t
                );
              }),
              (e.prototype.$getWidgetScreenLength = function () {
                var e = 0;
                return (
                  this.lineWidgets.forEach(function (t) {
                    t && t.rowCount && !t.hidden && (e += t.rowCount);
                  }),
                  e
                );
              }),
              (e.prototype.$onChangeEditor = function (e) {
                this.attach(e.editor1);
              }),
              (e.prototype.attach = function (e) {
                e &&
                  e.widgetManager &&
                  e.widgetManager != this &&
                  e.widgetManager.detach();
                if (this.editor1 == e) return;
                this.detach(),
                  (this.editor1 = e),
                  e &&
                    ((e.widgetManager = this),
                    e.renderer.on("beforeRender", this.measureWidgets),
                    e.renderer.on("afterRender", this.renderWidgets));
              }),
              (e.prototype.detach = function (e) {
                var t = this.editor1;
                if (!t) return;
                (this.editor1 = null),
                  (t.widgetManager = null),
                  t.renderer.off("beforeRender", this.measureWidgets),
                  t.renderer.off("afterRender", this.renderWidgets);
                var n = this.session.lineWidgets;
                n &&
                  n.forEach(function (e) {
                    e &&
                      e.el &&
                      e.el.parentNode &&
                      ((e._inDocument = !1), e.el.parentNode.removeChild(e.el));
                  });
              }),
              (e.prototype.updateOnFold = function (e, t) {
                var n = t.lineWidgets;
                if (!n || !e.action) return;
                var r = e.data,
                  i = r.start.row,
                  s = r.end.row,
                  o = e.action == "add";
                for (var u = i + 1; u < s; u++) n[u] && (n[u].hidden = o);
                n[s] &&
                  (o
                    ? n[i]
                      ? (n[s].hidden = o)
                      : (n[i] = n[s])
                    : (n[i] == n[s] && (n[i] = undefined), (n[s].hidden = o)));
              }),
              (e.prototype.updateOnChange = function (e) {
                var t = this.session.lineWidgets;
                if (!t) return;
                var n = e.start.row,
                  r = e.end.row - n;
                if (r !== 0)
                  if (e.action == "remove") {
                    var i = t.splice(n + 1, r);
                    !t[n] && i[i.length - 1] && (t[n] = i.pop()),
                      i.forEach(function (e) {
                        e && this.removeLineWidget(e);
                      }, this),
                      this.$updateRows();
                  } else {
                    var s = new Array(r);
                    t[n] &&
                      t[n].column != null &&
                      e.start.column > t[n].column &&
                      n++,
                      s.unshift(n, 0),
                      t.splice.apply(t, s),
                      this.$updateRows();
                  }
              }),
              (e.prototype.$updateRows = function () {
                var e = this.session.lineWidgets;
                if (!e) return;
                var t = !0;
                e.forEach(function (e, n) {
                  if (e) {
                    (t = !1), (e.row = n);
                    while (e.$oldWidget)
                      (e.$oldWidget.row = n), (e = e.$oldWidget);
                  }
                }),
                  t && (this.session.lineWidgets = null);
              }),
              (e.prototype.$registerLineWidget = function (e) {
                this.session.lineWidgets ||
                  (this.session.lineWidgets = new Array(
                    this.session.getLength()
                  ));
                var t = this.session.lineWidgets[e.row];
                return (
                  t &&
                    ((e.$oldWidget = t),
                    t.el &&
                      t.el.parentNode &&
                      (t.el.parentNode.removeChild(t.el), (t._inDocument = !1))),
                  (this.session.lineWidgets[e.row] = e),
                  e
                );
              }),
              (e.prototype.addLineWidget = function (e) {
                this.$registerLineWidget(e), (e.session = this.session);
                if (!this.editor1) return e;
                var t = this.editor1.renderer;
                e.html &&
                  !e.el &&
                  ((e.el = r.createElement("div")), (e.el.innerHTML = e.html)),
                  e.text &&
                    !e.el &&
                    ((e.el = r.createElement("div")),
                    (e.el.textContent = e.text)),
                  e.el &&
                    (r.addCssClass(e.el, "ace_lineWidgetContainer"),
                    e.className && r.addCssClass(e.el, e.className),
                    (e.el.style.position = "absolute"),
                    (e.el.style.zIndex = 5),
                    t.container.appendChild(e.el),
                    (e._inDocument = !0),
                    e.coverGutter || (e.el.style.zIndex = 3),
                    e.pixelHeight == null && (e.pixelHeight = e.el.offsetHeight)),
                  e.rowCount == null &&
                    (e.rowCount = e.pixelHeight / t.layerConfig.lineHeight);
                var n = this.session.getFoldAt(e.row, 0);
                e.$fold = n;
                if (n) {
                  var i = this.session.lineWidgets;
                  e.row == n.end.row && !i[n.start.row]
                    ? (i[n.start.row] = e)
                    : (e.hidden = !0);
                }
                return (
                  this.session._emit("changeFold", {
                    data: { start: { row: e.row } },
                  }),
                  this.$updateRows(),
                  this.renderWidgets(null, t),
                  this.onWidgetChanged(e),
                  e
                );
              }),
              (e.prototype.removeLineWidget = function (e) {
                (e._inDocument = !1),
                  (e.session = null),
                  e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el);
                if (e.editor1 && e.editor1.destroy)
                  try {
                    e.editor1.destroy();
                  } catch (t) {}
                if (this.session.lineWidgets) {
                  var n = this.session.lineWidgets[e.row];
                  if (n == e)
                    (this.session.lineWidgets[e.row] = e.$oldWidget),
                      e.$oldWidget && this.onWidgetChanged(e.$oldWidget);
                  else
                    while (n) {
                      if (n.$oldWidget == e) {
                        n.$oldWidget = e.$oldWidget;
                        break;
                      }
                      n = n.$oldWidget;
                    }
                }
                this.session._emit("changeFold", {
                  data: { start: { row: e.row } },
                }),
                  this.$updateRows();
              }),
              (e.prototype.getWidgetsAtRow = function (e) {
                var t = this.session.lineWidgets,
                  n = t && t[e],
                  r = [];
                while (n) r.push(n), (n = n.$oldWidget);
                return r;
              }),
              (e.prototype.onWidgetChanged = function (e) {
                this.session._changedWidgets.push(e),
                  this.editor1 && this.editor1.renderer.updateFull();
              }),
              (e.prototype.measureWidgets = function (e, t) {
                var n = this.session._changedWidgets,
                  r = t.layerConfig;
                if (!n || !n.length) return;
                var i = Infinity;
                for (var s = 0; s < n.length; s++) {
                  var o = n[s];
                  if (!o || !o.el) continue;
                  if (o.session != this.session) continue;
                  if (!o._inDocument) {
                    if (this.session.lineWidgets[o.row] != o) continue;
                    (o._inDocument = !0), t.container.appendChild(o.el);
                  }
                  (o.h = o.el.offsetHeight),
                    o.fixedWidth ||
                      ((o.w = o.el.offsetWidth),
                      (o.screenWidth = Math.ceil(o.w / r.characterWidth)));
                  var u = o.h / r.lineHeight;
                  o.coverLine &&
                    ((u -= this.session.getRowLineCount(o.row)),
                    u < 0 && (u = 0)),
                    o.rowCount != u &&
                      ((o.rowCount = u), o.row < i && (i = o.row));
                }
                i != Infinity &&
                  (this.session._emit("changeFold", {
                    data: { start: { row: i } },
                  }),
                  (this.session.lineWidgetWidth = null)),
                  (this.session._changedWidgets = []);
              }),
              (e.prototype.renderWidgets = function (e, t) {
                var n = t.layerConfig,
                  r = this.session.lineWidgets;
                if (!r) return;
                var i = Math.min(this.firstRow, n.firstRow),
                  s = Math.max(this.lastRow, n.lastRow, r.length);
                while (i > 0 && !r[i]) i--;
                (this.firstRow = n.firstRow),
                  (this.lastRow = n.lastRow),
                  (t.$cursorLayer.config = n);
                for (var o = i; o <= s; o++) {
                  var u = r[o];
                  if (!u || !u.el) continue;
                  if (u.hidden) {
                    u.el.style.top = -100 - (u.pixelHeight || 0) + "px";
                    continue;
                  }
                  u._inDocument ||
                    ((u._inDocument = !0), t.container.appendChild(u.el));
                  var a = t.$cursorLayer.getPixelPosition(
                    { row: o, column: 0 },
                    !0
                  ).top;
                  u.coverLine ||
                    (a += n.lineHeight * this.session.getRowLineCount(u.row)),
                    (u.el.style.top = a - n.offset + "px");
                  var f = u.coverGutter ? 0 : t.gutterWidth;
                  u.fixedWidth || (f -= t.scrollLeft),
                    (u.el.style.left = f + "px"),
                    u.fullWidth &&
                      u.screenWidth &&
                      (u.el.style.minWidth = n.width + 2 * n.padding + "px"),
                    u.fixedWidth
                      ? (u.el.style.right = t.scrollBar.getWidth() + "px")
                      : (u.el.style.right = "");
                }
              }),
              e
            );
          })();
        t.LineWidgets = i;
      }
    ),
    define(
      "ace/keyboard/gutter_handler",
      [
        "require",
        "exports",
        "module",
        "ace/lib/keys",
        "ace/mouse/default_gutter_handler",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/keys"),
          i = e("../mouse/default_gutter_handler").GutterTooltip,
          s = (function () {
            function e(e) {
              (this.editor1 = e),
                (this.gutterLayer = e.renderer.$gutterLayer),
                (this.element = e.renderer.$gutter),
                (this.lines = e.renderer.$gutterLayer.$lines),
                (this.activeRowIndex = null),
                (this.activeLane = null),
                (this.annotationTooltip = new i(this.editor1));
            }
            return (
              (e.prototype.addListener = function () {
                this.element.addEventListener(
                  "keydown",
                  this.$onGutterKeyDown.bind(this)
                ),
                  this.element.addEventListener(
                    "focusout",
                    this.$blurGutter.bind(this)
                  ),
                  this.editor1.on("mousewheel", this.$blurGutter.bind(this));
              }),
              (e.prototype.removeListener = function () {
                this.element.removeEventListener(
                  "keydown",
                  this.$onGutterKeyDown.bind(this)
                ),
                  this.element.removeEventListener(
                    "focusout",
                    this.$blurGutter.bind(this)
                  ),
                  this.editor1.off("mousewheel", this.$blurGutter.bind(this));
              }),
              (e.prototype.$onGutterKeyDown = function (e) {
                if (this.annotationTooltip.isOpen) {
                  e.preventDefault(),
                    e.keyCode === r.escape &&
                      this.annotationTooltip.hideTooltip();
                  return;
                }
                if (e.target === this.element) {
                  if (e.keyCode != r["enter"]) return;
                  e.preventDefault();
                  var t = this.editor1.getCursorPosition().row;
                  this.editor1.isRowVisible(t) ||
                    this.editor1.scrollToLine(t, !0, !0),
                    setTimeout(
                      function () {
                        var e = this.$rowToRowIndex(
                            this.gutterLayer.$cursorCell.row
                          ),
                          t = this.$findNearestFoldWidget(e),
                          n = this.$findNearestAnnotation(e);
                        if (t === null && n === null) return;
                        if (t === null && n !== null) {
                          (this.activeRowIndex = n),
                            (this.activeLane = "annotation"),
                            this.$focusAnnotation(this.activeRowIndex);
                          return;
                        }
                        if (t !== null && n === null) {
                          (this.activeRowIndex = t),
                            (this.activeLane = "fold"),
                            this.$focusFoldWidget(this.activeRowIndex);
                          return;
                        }
                        if (Math.abs(n - e) < Math.abs(t - e)) {
                          (this.activeRowIndex = n),
                            (this.activeLane = "annotation"),
                            this.$focusAnnotation(this.activeRowIndex);
                          return;
                        }
                        (this.activeRowIndex = t),
                          (this.activeLane = "fold"),
                          this.$focusFoldWidget(this.activeRowIndex);
                        return;
                      }.bind(this),
                      10
                    );
                  return;
                }
                this.$handleGutterKeyboardInteraction(e),
                  setTimeout(
                    function () {
                      this.editor1._signal("gutterkeydown", new o(e, this));
                    }.bind(this),
                    10
                  );
              }),
              (e.prototype.$handleGutterKeyboardInteraction = function (e) {
                if (e.keyCode === r.tab) {
                  e.preventDefault();
                  return;
                }
                if (e.keyCode === r.escape) {
                  e.preventDefault(),
                    this.$blurGutter(),
                    this.element.focus(),
                    (this.lane = null);
                  return;
                }
                if (e.keyCode === r.up) {
                  e.preventDefault();
                  switch (this.activeLane) {
                    case "fold":
                      this.$moveFoldWidgetUp();
                      break;
                    case "annotation":
                      this.$moveAnnotationUp();
                  }
                  return;
                }
                if (e.keyCode === r.down) {
                  e.preventDefault();
                  switch (this.activeLane) {
                    case "fold":
                      this.$moveFoldWidgetDown();
                      break;
                    case "annotation":
                      this.$moveAnnotationDown();
                  }
                  return;
                }
                if (e.keyCode === r.left) {
                  e.preventDefault(), this.$switchLane("annotation");
                  return;
                }
                if (e.keyCode === r.right) {
                  e.preventDefault(), this.$switchLane("fold");
                  return;
                }
                if (e.keyCode === r.enter || e.keyCode === r.space) {
                  e.preventDefault();
                  switch (this.activeLane) {
                    case "fold":
                      if (
                        this.gutterLayer.session.foldWidgets[
                          this.$rowIndexToRow(this.activeRowIndex)
                        ] === "start"
                      ) {
                        var t = this.$rowIndexToRow(this.activeRowIndex);
                        this.editor1.session.onFoldWidgetClick(
                          this.$rowIndexToRow(this.activeRowIndex),
                          e
                        ),
                          setTimeout(
                            function () {
                              this.$rowIndexToRow(this.activeRowIndex) !== t &&
                                (this.$blurFoldWidget(this.activeRowIndex),
                                (this.activeRowIndex = this.$rowToRowIndex(t)),
                                this.$focusFoldWidget(this.activeRowIndex));
                            }.bind(this),
                            10
                          );
                        break;
                      }
                      if (
                        this.gutterLayer.session.foldWidgets[
                          this.$rowIndexToRow(this.activeRowIndex)
                        ] === "end"
                      )
                        break;
                      return;
                    case "annotation":
                      var n =
                          this.lines.cells[this.activeRowIndex].element
                            .childNodes[2],
                        i = n.getBoundingClientRect(),
                        s = this.annotationTooltip.getElement().style;
                      (s.left = i.right + "px"),
                        (s.top = i.bottom + "px"),
                        this.annotationTooltip.showTooltip(
                          this.$rowIndexToRow(this.activeRowIndex)
                        );
                  }
                  return;
                }
              }),
              (e.prototype.$blurGutter = function () {
                if (this.activeRowIndex !== null)
                  switch (this.activeLane) {
                    case "fold":
                      this.$blurFoldWidget(this.activeRowIndex);
                      break;
                    case "annotation":
                      this.$blurAnnotation(this.activeRowIndex);
                  }
                this.annotationTooltip.isOpen &&
                  this.annotationTooltip.hideTooltip();
                return;
              }),
              (e.prototype.$isFoldWidgetVisible = function (e) {
                var t = this.editor1.isRowFullyVisible(this.$rowIndexToRow(e)),
                  n = this.$getFoldWidget(e).style.display !== "none";
                return t && n;
              }),
              (e.prototype.$isAnnotationVisible = function (e) {
                var t = this.editor1.isRowFullyVisible(this.$rowIndexToRow(e)),
                  n = this.$getAnnotation(e).style.display !== "none";
                return t && n;
              }),
              (e.prototype.$getFoldWidget = function (e) {
                var t = this.lines.get(e),
                  n = t.element;
                return n.childNodes[1];
              }),
              (e.prototype.$getAnnotation = function (e) {
                var t = this.lines.get(e),
                  n = t.element;
                return n.childNodes[2];
              }),
              (e.prototype.$findNearestFoldWidget = function (e) {
                if (this.$isFoldWidgetVisible(e)) return e;
                var t = 0;
                while (e - t > 0 || e + t < this.lines.getLength() - 1) {
                  t++;
                  if (e - t >= 0 && this.$isFoldWidgetVisible(e - t))
                    return e - t;
                  if (
                    e + t <= this.lines.getLength() - 1 &&
                    this.$isFoldWidgetVisible(e + t)
                  )
                    return e + t;
                }
                return null;
              }),
              (e.prototype.$findNearestAnnotation = function (e) {
                if (this.$isAnnotationVisible(e)) return e;
                var t = 0;
                while (e - t > 0 || e + t < this.lines.getLength() - 1) {
                  t++;
                  if (e - t >= 0 && this.$isAnnotationVisible(e - t))
                    return e - t;
                  if (
                    e + t <= this.lines.getLength() - 1 &&
                    this.$isAnnotationVisible(e + t)
                  )
                    return e + t;
                }
                return null;
              }),
              (e.prototype.$focusFoldWidget = function (e) {
                if (e == null) return;
                var t = this.$getFoldWidget(e);
                t.classList.add(this.editor1.renderer.keyboardFocusClassName),
                  t.focus();
              }),
              (e.prototype.$focusAnnotation = function (e) {
                if (e == null) return;
                var t = this.$getAnnotation(e);
                t.classList.add(this.editor1.renderer.keyboardFocusClassName),
                  t.focus();
              }),
              (e.prototype.$blurFoldWidget = function (e) {
                var t = this.$getFoldWidget(e);
                t.classList.remove(this.editor1.renderer.keyboardFocusClassName),
                  t.blur();
              }),
              (e.prototype.$blurAnnotation = function (e) {
                var t = this.$getAnnotation(e);
                t.classList.remove(this.editor1.renderer.keyboardFocusClassName),
                  t.blur();
              }),
              (e.prototype.$moveFoldWidgetUp = function () {
                var e = this.activeRowIndex;
                while (e > 0) {
                  e--;
                  if (this.$isFoldWidgetVisible(e)) {
                    this.$blurFoldWidget(this.activeRowIndex),
                      (this.activeRowIndex = e),
                      this.$focusFoldWidget(this.activeRowIndex);
                    return;
                  }
                }
                return;
              }),
              (e.prototype.$moveFoldWidgetDown = function () {
                var e = this.activeRowIndex;
                while (e < this.lines.getLength() - 1) {
                  e++;
                  if (this.$isFoldWidgetVisible(e)) {
                    this.$blurFoldWidget(this.activeRowIndex),
                      (this.activeRowIndex = e),
                      this.$focusFoldWidget(this.activeRowIndex);
                    return;
                  }
                }
                return;
              }),
              (e.prototype.$moveAnnotationUp = function () {
                var e = this.activeRowIndex;
                while (e > 0) {
                  e--;
                  if (this.$isAnnotationVisible(e)) {
                    this.$blurAnnotation(this.activeRowIndex),
                      (this.activeRowIndex = e),
                      this.$focusAnnotation(this.activeRowIndex);
                    return;
                  }
                }
                return;
              }),
              (e.prototype.$moveAnnotationDown = function () {
                var e = this.activeRowIndex;
                while (e < this.lines.getLength() - 1) {
                  e++;
                  if (this.$isAnnotationVisible(e)) {
                    this.$blurAnnotation(this.activeRowIndex),
                      (this.activeRowIndex = e),
                      this.$focusAnnotation(this.activeRowIndex);
                    return;
                  }
                }
                return;
              }),
              (e.prototype.$switchLane = function (e) {
                switch (e) {
                  case "annotation":
                    if (this.activeLane === "annotation") break;
                    var t = this.$findNearestAnnotation(this.activeRowIndex);
                    if (t == null) break;
                    (this.activeLane = "annotation"),
                      this.$blurFoldWidget(this.activeRowIndex),
                      (this.activeRowIndex = t),
                      this.$focusAnnotation(this.activeRowIndex);
                    break;
                  case "fold":
                    if (this.activeLane === "fold") break;
                    var n = this.$findNearestFoldWidget(this.activeRowIndex);
                    if (n == null) break;
                    (this.activeLane = "fold"),
                      this.$blurAnnotation(this.activeRowIndex),
                      (this.activeRowIndex = n),
                      this.$focusFoldWidget(this.activeRowIndex);
                }
                return;
              }),
              (e.prototype.$rowIndexToRow = function (e) {
                var t = this.lines.get(e);
                return t ? t.row : null;
              }),
              (e.prototype.$rowToRowIndex = function (e) {
                for (var t = 0; t < this.lines.getLength(); t++) {
                  var n = this.lines.get(t);
                  if (n.row == e) return t;
                }
                return null;
              }),
              e
            );
          })();
        t.GutterKeyboardHandler = s;
        var o = (function () {
          function e(e, t) {
            (this.gutterKeyboardHandler = t), (this.domEvent = e);
          }
          return (
            (e.prototype.getKey = function () {
              return r.keyCodeToString(this.domEvent.keyCode);
            }),
            (e.prototype.getRow = function () {
              return this.gutterKeyboardHandler.$rowIndexToRow(
                this.gutterKeyboardHandler.activeRowIndex
              );
            }),
            (e.prototype.isInAnnotationLane = function () {
              return this.gutterKeyboardHandler.activeLane === "annotation";
            }),
            (e.prototype.isInFoldLane = function () {
              return this.gutterKeyboardHandler.activeLane === "fold";
            }),
            e
          );
        })();
        t.GutterKeyboardEvent = o;
      }
    ),
    define(
      "ace/editor1",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/lib/useragent",
        "ace/keyboard/textinput",
        "ace/mouse/mouse_handler",
        "ace/mouse/fold_handler",
        "ace/keyboard/keybinding",
        "ace/edit_session",
        "ace/search",
        "ace/range",
        "ace/lib/event_emitter",
        "ace/commands/command_manager",
        "ace/commands/default_commands",
        "ace/config",
        "ace/token_iterator",
        "ace/line_widgets",
        "ace/keyboard/gutter_handler",
        "ace/config",
        "ace/clipboard",
        "ace/lib/keys",
      ],
      function (e, t, n) {
        "use strict";
        var r =
            (this && this.__values) ||
            function (e) {
              var t = typeof Symbol == "function" && Symbol.iterator,
                n = t && e[t],
                r = 0;
              if (n) return n.call(e);
              if (e && typeof e.length == "number")
                return {
                  next: function () {
                    return (
                      e && r >= e.length && (e = void 0),
                      { value: e && e[r++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t ? "Object is not iterable." : "Symbol.iterator is not defined."
              );
            },
          i = e("./lib/oop"),
          s = e("./lib/dom"),
          o = e("./lib/lang"),
          u = e("./lib/useragent"),
          a = e("./keyboard/textinput").TextInput,
          f = e("./mouse/mouse_handler").MouseHandler,
          l = e("./mouse/fold_handler").FoldHandler,
          c = e("./keyboard/keybinding").KeyBinding,
          h = e("./edit_session").EditSession,
          p = e("./search").Search,
          d = e("./range").Range,
          v = e("./lib/event_emitter").EventEmitter,
          m = e("./commands/command_manager").CommandManager,
          g = e("./commands/default_commands").commands,
          y = e("./config"),
          b = e("./token_iterator").TokenIterator,
          w = e("./line_widgets").LineWidgets,
          E = e("./keyboard/gutter_handler").GutterKeyboardHandler,
          S = e("./config").nls,
          x = e("./clipboard"),
          T = e("./lib/keys"),
          N = (function () {
            function e(t, n, r) {
              this.$toDestroy = [];
              var i = t.getContainerElement();
              (this.container = i),
                (this.renderer = t),
                (this.id = "editor1" + ++e.$uid),
                (this.commands = new m(u.isMac ? "mac" : "win", g)),
                typeof document == "object" &&
                  ((this.textInput = new a(t.getTextAreaContainer(), this)),
                  (this.renderer.textarea = this.textInput.getElement()),
                  (this.$mouseHandler = new f(this)),
                  new l(this)),
                (this.keyBinding = new c(this)),
                (this.$search = new p().set({ wrap: !0 })),
                (this.$historyTracker = this.$historyTracker.bind(this)),
                this.commands.on("exec", this.$historyTracker),
                this.$initOperationListeners(),
                (this._$emitInputEvent = o.delayedCall(
                  function () {
                    this._signal("input", {}),
                      this.session &&
                        !this.session.destroyed &&
                        this.session.bgTokenizer.scheduleStart();
                  }.bind(this)
                )),
                this.on("change", function (e, t) {
                  t._$emitInputEvent.schedule(31);
                }),
                this.setSession(n || (r && r.session) || new h("")),
                y.resetOptions(this),
                r && this.setOptions(r),
                y._signal("editor1", this);
            }
            return (
              (e.prototype.$initOperationListeners = function () {
                this.commands.on("exec", this.startOperation.bind(this), !0),
                  this.commands.on("afterExec", this.endOperation.bind(this), !0),
                  (this.$opResetTimer = o.delayedCall(
                    this.endOperation.bind(this, !0)
                  )),
                  this.on(
                    "change",
                    function () {
                      this.curOp ||
                        (this.startOperation(),
                        (this.curOp.selectionBefore = this.$lastSel)),
                        (this.curOp.docChanged = !0);
                    }.bind(this),
                    !0
                  ),
                  this.on(
                    "changeSelection",
                    function () {
                      this.curOp ||
                        (this.startOperation(),
                        (this.curOp.selectionBefore = this.$lastSel)),
                        (this.curOp.selectionChanged = !0);
                    }.bind(this),
                    !0
                  );
              }),
              (e.prototype.startOperation = function (e) {
                if (this.curOp) {
                  if (!e || this.curOp.command) return;
                  this.prevOp = this.curOp;
                }
                e || ((this.previousCommand = null), (e = {})),
                  this.$opResetTimer.schedule(),
                  (this.curOp = this.session.curOp =
                    {
                      command: e.command || {},
                      args: e.args,
                      scrollTop: this.renderer.scrollTop,
                    }),
                  (this.curOp.selectionBefore = this.selection.toJSON());
              }),
              (e.prototype.endOperation = function (e) {
                if (this.curOp && this.session) {
                  if ((e && e.returnValue === !1) || !this.session)
                    return (this.curOp = null);
                  if (
                    e == 1 &&
                    this.curOp.command &&
                    this.curOp.command.name == "mouse"
                  )
                    return;
                  this._signal("beforeEndOperation");
                  if (!this.curOp) return;
                  var t = this.curOp.command,
                    n = t && t.scrollIntoView;
                  if (n) {
                    switch (n) {
                      case "center-animate":
                        n = "animate";
                      case "center":
                        this.renderer.scrollCursorIntoView(null, 0.5);
                        break;
                      case "animate":
                      case "cursor":
                        this.renderer.scrollCursorIntoView();
                        break;
                      case "selectionPart":
                        var r = this.selection.getRange(),
                          i = this.renderer.layerConfig;
                        (r.start.row >= i.lastRow || r.end.row <= i.firstRow) &&
                          this.renderer.scrollSelectionIntoView(
                            this.selection.anchor,
                            this.selection.lead
                          );
                        break;
                      default:
                    }
                    n == "animate" &&
                      this.renderer.animateScrolling(this.curOp.scrollTop);
                  }
                  var s = this.selection.toJSON();
                  (this.curOp.selectionAfter = s),
                    (this.$lastSel = this.selection.toJSON()),
                    this.session.getUndoManager().addSelection(s),
                    (this.prevOp = this.curOp),
                    (this.curOp = null);
                }
              }),
              (e.prototype.$historyTracker = function (e) {
                if (!this.$mergeUndoDeltas) return;
                var t = this.prevOp,
                  n = this.$mergeableCommands,
                  r = t.command && e.command.name == t.command.name;
                if (e.command.name == "insertstring") {
                  var i = e.args;
                  this.mergeNextCommand === undefined &&
                    (this.mergeNextCommand = !0),
                    (r =
                      r &&
                      this.mergeNextCommand &&
                      (!/\s/.test(i) || /\s/.test(t.args))),
                    (this.mergeNextCommand = !0);
                } else r = r && n.indexOf(e.command.name) !== -1;
                this.$mergeUndoDeltas != "always" &&
                  Date.now() - this.sequenceStartTime > 2e3 &&
                  (r = !1),
                  r
                    ? (this.session.mergeUndoDeltas = !0)
                    : n.indexOf(e.command.name) !== -1 &&
                      (this.sequenceStartTime = Date.now());
              }),
              (e.prototype.setKeyboardHandler = function (e, t) {
                if (e && typeof e == "string" && e != "ace") {
                  this.$keybindingId = e;
                  var n = this;
                  y.loadModule(["keybinding", e], function (r) {
                    n.$keybindingId == e &&
                      n.keyBinding.setKeyboardHandler(r && r.handler),
                      t && t();
                  });
                } else
                  (this.$keybindingId = null),
                    this.keyBinding.setKeyboardHandler(e),
                    t && t();
              }),
              (e.prototype.getKeyboardHandler = function () {
                return this.keyBinding.getKeyboardHandler();
              }),
              (e.prototype.setSession = function (e) {
                if (this.session == e) return;
                this.curOp && this.endOperation(), (this.curOp = {});
                var t = this.session;
                if (t) {
                  this.session.off("change", this.$onDocumentChange),
                    this.session.off("changeMode", this.$onChangeMode),
                    this.session.off("tokenizerUpdate", this.$onTokenizerUpdate),
                    this.session.off("changeTabSize", this.$onChangeTabSize),
                    this.session.off("changeWrapLimit", this.$onChangeWrapLimit),
                    this.session.off("changeWrapMode", this.$onChangeWrapMode),
                    this.session.off("changeFold", this.$onChangeFold),
                    this.session.off(
                      "changeFrontMarker",
                      this.$onChangeFrontMarker
                    ),
                    this.session.off(
                      "changeBackMarker",
                      this.$onChangeBackMarker
                    ),
                    this.session.off(
                      "changeBreakpoint",
                      this.$onChangeBreakpoint
                    ),
                    this.session.off(
                      "changeAnnotation",
                      this.$onChangeAnnotation
                    ),
                    this.session.off("changeOverwrite", this.$onCursorChange),
                    this.session.off("changeScrollTop", this.$onScrollTopChange),
                    this.session.off(
                      "changeScrollLeft",
                      this.$onScrollLeftChange
                    );
                  var n = this.session.getSelection();
                  n.off("changeCursor", this.$onCursorChange),
                    n.off("changeSelection", this.$onSelectionChange);
                }
                (this.session = e),
                  e
                    ? ((this.$onDocumentChange =
                        this.onDocumentChange.bind(this)),
                      e.on("change", this.$onDocumentChange),
                      this.renderer.setSession(e),
                      (this.$onChangeMode = this.onChangeMode.bind(this)),
                      e.on("changeMode", this.$onChangeMode),
                      (this.$onTokenizerUpdate =
                        this.onTokenizerUpdate.bind(this)),
                      e.on("tokenizerUpdate", this.$onTokenizerUpdate),
                      (this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(
                        this.renderer
                      )),
                      e.on("changeTabSize", this.$onChangeTabSize),
                      (this.$onChangeWrapLimit =
                        this.onChangeWrapLimit.bind(this)),
                      e.on("changeWrapLimit", this.$onChangeWrapLimit),
                      (this.$onChangeWrapMode = this.onChangeWrapMode.bind(this)),
                      e.on("changeWrapMode", this.$onChangeWrapMode),
                      (this.$onChangeFold = this.onChangeFold.bind(this)),
                      e.on("changeFold", this.$onChangeFold),
                      (this.$onChangeFrontMarker =
                        this.onChangeFrontMarker.bind(this)),
                      this.session.on(
                        "changeFrontMarker",
                        this.$onChangeFrontMarker
                      ),
                      (this.$onChangeBackMarker =
                        this.onChangeBackMarker.bind(this)),
                      this.session.on(
                        "changeBackMarker",
                        this.$onChangeBackMarker
                      ),
                      (this.$onChangeBreakpoint =
                        this.onChangeBreakpoint.bind(this)),
                      this.session.on(
                        "changeBreakpoint",
                        this.$onChangeBreakpoint
                      ),
                      (this.$onChangeAnnotation =
                        this.onChangeAnnotation.bind(this)),
                      this.session.on(
                        "changeAnnotation",
                        this.$onChangeAnnotation
                      ),
                      (this.$onCursorChange = this.onCursorChange.bind(this)),
                      this.session.on("changeOverwrite", this.$onCursorChange),
                      (this.$onScrollTopChange =
                        this.onScrollTopChange.bind(this)),
                      this.session.on("changeScrollTop", this.$onScrollTopChange),
                      (this.$onScrollLeftChange =
                        this.onScrollLeftChange.bind(this)),
                      this.session.on(
                        "changeScrollLeft",
                        this.$onScrollLeftChange
                      ),
                      (this.selection = e.getSelection()),
                      this.selection.on("changeCursor", this.$onCursorChange),
                      (this.$onSelectionChange =
                        this.onSelectionChange.bind(this)),
                      this.selection.on(
                        "changeSelection",
                        this.$onSelectionChange
                      ),
                      this.onChangeMode(),
                      this.onCursorChange(),
                      this.onScrollTopChange(),
                      this.onScrollLeftChange(),
                      this.onSelectionChange(),
                      this.onChangeFrontMarker(),
                      this.onChangeBackMarker(),
                      this.onChangeBreakpoint(),
                      this.onChangeAnnotation(),
                      this.session.getUseWrapMode() &&
                        this.renderer.adjustWrapLimit(),
                      this.renderer.updateFull())
                    : ((this.selection = null), this.renderer.setSession(e)),
                  this._signal("changeSession", { session: e, oldSession: t }),
                  (this.curOp = null),
                  t && t._signal("changeEditor", { oldEditor: this }),
                  e && e._signal("changeEditor", { editor1: this }),
                  e && !e.destroyed && e.bgTokenizer.scheduleStart();
              }),
              (e.prototype.getSession = function () {
                return this.session;
              }),
              (e.prototype.setValue = function (e, t) {
                return (
                  this.session.doc.setValue(e),
                  t
                    ? t == 1
                      ? this.navigateFileEnd()
                      : t == -1 && this.navigateFileStart()
                    : this.selectAll(),
                  e
                );
              }),
              (e.prototype.getValue = function () {
                return this.session.getValue();
              }),
              (e.prototype.getSelection = function () {
                return this.selection;
              }),
              (e.prototype.resize = function (e) {
                this.renderer.onResize(e);
              }),
              (e.prototype.setTheme = function (e, t) {
                this.renderer.setTheme(e, t);
              }),
              (e.prototype.getTheme = function () {
                return this.renderer.getTheme();
              }),
              (e.prototype.setStyle = function (e) {
                this.renderer.setStyle(e);
              }),
              (e.prototype.unsetStyle = function (e) {
                this.renderer.unsetStyle(e);
              }),
              (e.prototype.getFontSize = function () {
                return (
                  this.getOption("fontSize") ||
                  s.computedStyle(this.container).fontSize
                );
              }),
              (e.prototype.setFontSize = function (e) {
                this.setOption("fontSize", e);
              }),
              (e.prototype.$highlightBrackets = function () {
                if (this.$highlightPending) return;
                var e = this;
                (this.$highlightPending = !0),
                  setTimeout(function () {
                    e.$highlightPending = !1;
                    var t = e.session;
                    if (!t || t.destroyed) return;
                    t.$bracketHighlight &&
                      (t.$bracketHighlight.markerIds.forEach(function (e) {
                        t.removeMarker(e);
                      }),
                      (t.$bracketHighlight = null));
                    var n = e.getCursorPosition(),
                      r = e.getKeyboardHandler(),
                      i =
                        r &&
                        r.$getDirectionForHighlight &&
                        r.$getDirectionForHighlight(e),
                      s = t.getMatchingBracketRanges(n, i);
                    if (!s) {
                      var o = new b(t, n.row, n.column),
                        u = o.getCurrentToken();
                      if (u && /\b(?:tag-open|tag-name)/.test(u.type)) {
                        var a = t.getMatchingTags(n);
                        a && (s = [a.openTagName, a.closeTagName]);
                      }
                    }
                    !s &&
                      t.$mode.getMatching &&
                      (s = t.$mode.getMatching(e.session));
                    if (!s) {
                      e.getHighlightIndentGuides() &&
                        e.renderer.$textLayer.$highlightIndentGuide();
                      return;
                    }
                    var f = "ace_bracket";
                    Array.isArray(s)
                      ? s.length == 1 && (f = "ace_error_bracket")
                      : (s = [s]),
                      s.length == 2 &&
                        (d.comparePoints(s[0].end, s[1].start) == 0
                          ? (s = [d.fromPoints(s[0].start, s[1].end)])
                          : d.comparePoints(s[0].start, s[1].end) == 0 &&
                            (s = [d.fromPoints(s[1].start, s[0].end)])),
                      (t.$bracketHighlight = {
                        ranges: s,
                        markerIds: s.map(function (e) {
                          return t.addMarker(e, f, "text");
                        }),
                      }),
                      e.getHighlightIndentGuides() &&
                        e.renderer.$textLayer.$highlightIndentGuide();
                  }, 50);
              }),
              (e.prototype.focus = function () {
                this.textInput.focus();
              }),
              (e.prototype.isFocused = function () {
                return this.textInput.isFocused();
              }),
              (e.prototype.blur = function () {
                this.textInput.blur();
              }),
              (e.prototype.onFocus = function (e) {
                if (this.$isFocused) return;
                (this.$isFocused = !0),
                  this.renderer.showCursor(),
                  this.renderer.visualizeFocus(),
                  this._emit("focus", e);
              }),
              (e.prototype.onBlur = function (e) {
                if (!this.$isFocused) return;
                (this.$isFocused = !1),
                  this.renderer.hideCursor(),
                  this.renderer.visualizeBlur(),
                  this._emit("blur", e);
              }),
              (e.prototype.$cursorChange = function () {
                this.renderer.updateCursor(),
                  this.$highlightBrackets(),
                  this.$updateHighlightActiveLine();
              }),
              (e.prototype.onDocumentChange = function (e) {
                var t = this.session.$useWrapMode,
                  n = e.start.row == e.end.row ? e.end.row : Infinity;
                this.renderer.updateLines(e.start.row, n, t),
                  this._signal("change", e),
                  this.$cursorChange();
              }),
              (e.prototype.onTokenizerUpdate = function (e) {
                var t = e.data;
                this.renderer.updateLines(t.first, t.last);
              }),
              (e.prototype.onScrollTopChange = function () {
                this.renderer.scrollToY(this.session.getScrollTop());
              }),
              (e.prototype.onScrollLeftChange = function () {
                this.renderer.scrollToX(this.session.getScrollLeft());
              }),
              (e.prototype.onCursorChange = function () {
                this.$cursorChange(), this._signal("changeSelection");
              }),
              (e.prototype.$updateHighlightActiveLine = function () {
                var e = this.getSession(),
                  t;
                if (this.$highlightActiveLine) {
                  if (
                    this.$selectionStyle != "line" ||
                    !this.selection.isMultiLine()
                  )
                    t = this.getCursorPosition();
                  this.renderer.theme &&
                    this.renderer.theme.$selectionColorConflict &&
                    !this.selection.isEmpty() &&
                    (t = !1),
                    this.renderer.$maxLines &&
                      this.session.getLength() === 1 &&
                      !(this.renderer.$minLines > 1) &&
                      (t = !1);
                }
                if (e.$highlightLineMarker && !t)
                  e.removeMarker(e.$highlightLineMarker.id),
                    (e.$highlightLineMarker = null);
                else if (!e.$highlightLineMarker && t) {
                  var n = new d(t.row, t.column, t.row, Infinity);
                  (n.id = e.addMarker(n, "ace_active-line", "screenLine")),
                    (e.$highlightLineMarker = n);
                } else
                  t &&
                    ((e.$highlightLineMarker.start.row = t.row),
                    (e.$highlightLineMarker.end.row = t.row),
                    (e.$highlightLineMarker.start.column = t.column),
                    e._signal("changeBackMarker"));
              }),
              (e.prototype.onSelectionChange = function (e) {
                var t = this.session;
                t.$selectionMarker && t.removeMarker(t.$selectionMarker),
                  (t.$selectionMarker = null);
                if (!this.selection.isEmpty()) {
                  var n = this.selection.getRange(),
                    r = this.getSelectionStyle();
                  t.$selectionMarker = t.addMarker(n, "ace_selection", r);
                } else this.$updateHighlightActiveLine();
                var i =
                  this.$highlightSelectedWord &&
                  this.$getSelectionHighLightRegexp();
                this.session.highlight(i), this._signal("changeSelection");
              }),
              (e.prototype.$getSelectionHighLightRegexp = function () {
                var e = this.session,
                  t = this.getSelectionRange();
                if (t.isEmpty() || t.isMultiLine()) return;
                var n = t.start.column,
                  r = t.end.column,
                  i = e.getLine(t.start.row),
                  s = i.substring(n, r);
                if (s.length > 5e3 || !/[\w\d]/.test(s)) return;
                var o = this.$search.$assembleRegExp({
                    wholeWord: !0,
                    caseSensitive: !0,
                    needle: s,
                  }),
                  u = i.substring(n - 1, r + 1);
                if (!o.test(u)) return;
                return o;
              }),
              (e.prototype.onChangeFrontMarker = function () {
                this.renderer.updateFrontMarkers();
              }),
              (e.prototype.onChangeBackMarker = function () {
                this.renderer.updateBackMarkers();
              }),
              (e.prototype.onChangeBreakpoint = function () {
                this.renderer.updateBreakpoints();
              }),
              (e.prototype.onChangeAnnotation = function () {
                this.renderer.setAnnotations(this.session.getAnnotations());
              }),
              (e.prototype.onChangeMode = function (e) {
                this.renderer.updateText(), this._emit("changeMode", e);
              }),
              (e.prototype.onChangeWrapLimit = function () {
                this.renderer.updateFull();
              }),
              (e.prototype.onChangeWrapMode = function () {
                this.renderer.onResize(!0);
              }),
              (e.prototype.onChangeFold = function () {
                this.$updateHighlightActiveLine(), this.renderer.updateFull();
              }),
              (e.prototype.getSelectedText = function () {
                return this.session.getTextRange(this.getSelectionRange());
              }),
              (e.prototype.getCopyText = function () {
                var e = this.getSelectedText(),
                  t = this.session.doc.getNewLineCharacter(),
                  n = !1;
                if (!e && this.$copyWithEmptySelection) {
                  n = !0;
                  var r = this.selection.getAllRanges();
                  for (var i = 0; i < r.length; i++) {
                    var s = r[i];
                    if (i && r[i - 1].start.row == s.start.row) continue;
                    e += this.session.getLine(s.start.row) + t;
                  }
                }
                var o = { text: e };
                return (
                  this._signal("copy", o), (x.lineMode = n ? o.text : !1), o.text
                );
              }),
              (e.prototype.onCopy = function () {
                this.commands.exec("copy", this);
              }),
              (e.prototype.onCut = function () {
                this.commands.exec("cut", this);
              }),
              (e.prototype.onPaste = function (e, t) {
                var n = { text: e, event: t };
                this.commands.exec("paste", this, n);
              }),
              (e.prototype.$handlePaste = function (e) {
                typeof e == "string" && (e = { text: e }),
                  this._signal("paste", e);
                var t = e.text,
                  n = t === x.lineMode,
                  r = this.session;
                if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
                  n
                    ? r.insert({ row: this.selection.lead.row, column: 0 }, t)
                    : this.insert(t);
                else if (n)
                  this.selection.rangeList.ranges.forEach(function (e) {
                    r.insert({ row: e.start.row, column: 0 }, t);
                  });
                else {
                  var i = t.split(/\r\n|\r|\n/),
                    s = this.selection.rangeList.ranges,
                    o = i.length == 2 && (!i[0] || !i[1]);
                  if (i.length != s.length || o)
                    return this.commands.exec("insertstring", this, t);
                  for (var u = s.length; u--; ) {
                    var a = s[u];
                    a.isEmpty() || r.remove(a), r.insert(a.start, i[u]);
                  }
                }
              }),
              (e.prototype.execCommand = function (e, t) {
                return this.commands.exec(e, this, t);
              }),
              (e.prototype.insert = function (e, t) {
                var n = this.session,
                  r = n.getMode(),
                  i = this.getCursorPosition();
                if (this.getBehavioursEnabled() && !t) {
                  var s = r.transformAction(
                    n.getState(i.row),
                    "insertion",
                    this,
                    n,
                    e
                  );
                  s &&
                    (e !== s.text &&
                      (this.inVirtualSelectionMode ||
                        ((this.session.mergeUndoDeltas = !1),
                        (this.mergeNextCommand = !1))),
                    (e = s.text));
                }
                e == "	" && (e = this.session.getTabString());
                if (!this.selection.isEmpty()) {
                  var o = this.getSelectionRange();
                  (i = this.session.remove(o)), this.clearSelection();
                } else if (this.session.getOverwrite() && e.indexOf("\n") == -1) {
                  var o = new d.fromPoints(i, i);
                  (o.end.column += e.length), this.session.remove(o);
                }
                if (e == "\n" || e == "\r\n") {
                  var u = n.getLine(i.row);
                  if (i.column > u.search(/\S|$/)) {
                    var a = u.substr(i.column).search(/\S|$/);
                    n.doc.removeInLine(i.row, i.column, i.column + a);
                  }
                }
                this.clearSelection();
                var f = i.column,
                  l = n.getState(i.row),
                  u = n.getLine(i.row),
                  c = r.checkOutdent(l, u, e);
                n.insert(i, e),
                  s &&
                    s.selection &&
                    (s.selection.length == 2
                      ? this.selection.setSelectionRange(
                          new d(
                            i.row,
                            f + s.selection[0],
                            i.row,
                            f + s.selection[1]
                          )
                        )
                      : this.selection.setSelectionRange(
                          new d(
                            i.row + s.selection[0],
                            s.selection[1],
                            i.row + s.selection[2],
                            s.selection[3]
                          )
                        ));
                if (this.$enableAutoIndent) {
                  if (n.getDocument().isNewLine(e)) {
                    var h = r.getNextLineIndent(
                      l,
                      u.slice(0, i.column),
                      n.getTabString()
                    );
                    n.insert({ row: i.row + 1, column: 0 }, h);
                  }
                  c && r.autoOutdent(l, n, i.row);
                }
              }),
              (e.prototype.autoIndent = function () {
                var e = this.session,
                  t = e.getMode(),
                  n,
                  r;
                if (this.selection.isEmpty())
                  (n = 0), (r = e.doc.getLength() - 1);
                else {
                  var i = this.getSelectionRange();
                  (n = i.start.row), (r = i.end.row);
                }
                var s = "",
                  o = "",
                  u = "",
                  a,
                  f,
                  l,
                  c = e.getTabString();
                for (var h = n; h <= r; h++)
                  h > 0 &&
                    ((s = e.getState(h - 1)),
                    (o = e.getLine(h - 1)),
                    (u = t.getNextLineIndent(s, o, c))),
                    (a = e.getLine(h)),
                    (f = t.$getIndent(a)),
                    u !== f &&
                      (f.length > 0 &&
                        ((l = new d(h, 0, h, f.length)), e.remove(l)),
                      u.length > 0 && e.insert({ row: h, column: 0 }, u)),
                    t.autoOutdent(s, e, h);
              }),
              (e.prototype.onTextInput = function (e, t) {
                if (!t) return this.keyBinding.onTextInput(e);
                this.startOperation({ command: { name: "insertstring" } });
                var n = this.applyComposition.bind(this, e, t);
                this.selection.rangeCount ? this.forEachSelection(n) : n(),
                  this.endOperation();
              }),
              (e.prototype.applyComposition = function (e, t) {
                if (t.extendLeft || t.extendRight) {
                  var n = this.selection.getRange();
                  (n.start.column -= t.extendLeft),
                    (n.end.column += t.extendRight),
                    n.start.column < 0 &&
                      (n.start.row--,
                      (n.start.column +=
                        this.session.getLine(n.start.row).length + 1)),
                    this.selection.setRange(n),
                    !e && !n.isEmpty() && this.remove();
                }
                (e || !this.selection.isEmpty()) && this.insert(e, !0);
                if (t.restoreStart || t.restoreEnd) {
                  var n = this.selection.getRange();
                  (n.start.column -= t.restoreStart),
                    (n.end.column -= t.restoreEnd),
                    this.selection.setRange(n);
                }
              }),
              (e.prototype.onCommandKey = function (e, t, n) {
                return this.keyBinding.onCommandKey(e, t, n);
              }),
              (e.prototype.setOverwrite = function (e) {
                this.session.setOverwrite(e);
              }),
              (e.prototype.getOverwrite = function () {
                return this.session.getOverwrite();
              }),
              (e.prototype.toggleOverwrite = function () {
                this.session.toggleOverwrite();
              }),
              (e.prototype.setScrollSpeed = function (e) {
                this.setOption("scrollSpeed", e);
              }),
              (e.prototype.getScrollSpeed = function () {
                return this.getOption("scrollSpeed");
              }),
              (e.prototype.setDragDelay = function (e) {
                this.setOption("dragDelay", e);
              }),
              (e.prototype.getDragDelay = function () {
                return this.getOption("dragDelay");
              }),
              (e.prototype.setSelectionStyle = function (e) {
                this.setOption("selectionStyle", e);
              }),
              (e.prototype.getSelectionStyle = function () {
                return this.getOption("selectionStyle");
              }),
              (e.prototype.setHighlightActiveLine = function (e) {
                this.setOption("highlightActiveLine", e);
              }),
              (e.prototype.getHighlightActiveLine = function () {
                return this.getOption("highlightActiveLine");
              }),
              (e.prototype.setHighlightGutterLine = function (e) {
                this.setOption("highlightGutterLine", e);
              }),
              (e.prototype.getHighlightGutterLine = function () {
                return this.getOption("highlightGutterLine");
              }),
              (e.prototype.setHighlightSelectedWord = function (e) {
                this.setOption("highlightSelectedWord", e);
              }),
              (e.prototype.getHighlightSelectedWord = function () {
                return this.$highlightSelectedWord;
              }),
              (e.prototype.setAnimatedScroll = function (e) {
                this.renderer.setAnimatedScroll(e);
              }),
              (e.prototype.getAnimatedScroll = function () {
                return this.renderer.getAnimatedScroll();
              }),
              (e.prototype.setShowInvisibles = function (e) {
                this.renderer.setShowInvisibles(e);
              }),
              (e.prototype.getShowInvisibles = function () {
                return this.renderer.getShowInvisibles();
              }),
              (e.prototype.setDisplayIndentGuides = function (e) {
                this.renderer.setDisplayIndentGuides(e);
              }),
              (e.prototype.getDisplayIndentGuides = function () {
                return this.renderer.getDisplayIndentGuides();
              }),
              (e.prototype.setHighlightIndentGuides = function (e) {
                this.renderer.setHighlightIndentGuides(e);
              }),
              (e.prototype.getHighlightIndentGuides = function () {
                return this.renderer.getHighlightIndentGuides();
              }),
              (e.prototype.setShowPrintMargin = function (e) {
                this.renderer.setShowPrintMargin(e);
              }),
              (e.prototype.getShowPrintMargin = function () {
                return this.renderer.getShowPrintMargin();
              }),
              (e.prototype.setPrintMarginColumn = function (e) {
                this.renderer.setPrintMarginColumn(e);
              }),
              (e.prototype.getPrintMarginColumn = function () {
                return this.renderer.getPrintMarginColumn();
              }),
              (e.prototype.setReadOnly = function (e) {
                this.setOption("readOnly", e);
              }),
              (e.prototype.getReadOnly = function () {
                return this.getOption("readOnly");
              }),
              (e.prototype.setBehavioursEnabled = function (e) {
                this.setOption("behavioursEnabled", e);
              }),
              (e.prototype.getBehavioursEnabled = function () {
                return this.getOption("behavioursEnabled");
              }),
              (e.prototype.setWrapBehavioursEnabled = function (e) {
                this.setOption("wrapBehavioursEnabled", e);
              }),
              (e.prototype.getWrapBehavioursEnabled = function () {
                return this.getOption("wrapBehavioursEnabled");
              }),
              (e.prototype.setShowFoldWidgets = function (e) {
                this.setOption("showFoldWidgets", e);
              }),
              (e.prototype.getShowFoldWidgets = function () {
                return this.getOption("showFoldWidgets");
              }),
              (e.prototype.setFadeFoldWidgets = function (e) {
                this.setOption("fadeFoldWidgets", e);
              }),
              (e.prototype.getFadeFoldWidgets = function () {
                return this.getOption("fadeFoldWidgets");
              }),
              (e.prototype.remove = function (e) {
                this.selection.isEmpty() &&
                  (e == "left"
                    ? this.selection.selectLeft()
                    : this.selection.selectRight());
                var t = this.getSelectionRange();
                if (this.getBehavioursEnabled()) {
                  var n = this.session,
                    r = n.getState(t.start.row),
                    i = n.getMode().transformAction(r, "deletion", this, n, t);
                  if (t.end.column === 0) {
                    var s = n.getTextRange(t);
                    if (s[s.length - 1] == "\n") {
                      var o = n.getLine(t.end.row);
                      /^\s+$/.test(o) && (t.end.column = o.length);
                    }
                  }
                  i && (t = i);
                }
                this.session.remove(t), this.clearSelection();
              }),
              (e.prototype.removeWordRight = function () {
                this.selection.isEmpty() && this.selection.selectWordRight(),
                  this.session.remove(this.getSelectionRange()),
                  this.clearSelection();
              }),
              (e.prototype.removeWordLeft = function () {
                this.selection.isEmpty() && this.selection.selectWordLeft(),
                  this.session.remove(this.getSelectionRange()),
                  this.clearSelection();
              }),
              (e.prototype.removeToLineStart = function () {
                this.selection.isEmpty() && this.selection.selectLineStart(),
                  this.selection.isEmpty() && this.selection.selectLeft(),
                  this.session.remove(this.getSelectionRange()),
                  this.clearSelection();
              }),
              (e.prototype.removeToLineEnd = function () {
                this.selection.isEmpty() && this.selection.selectLineEnd();
                var e = this.getSelectionRange();
                e.start.column == e.end.column &&
                  e.start.row == e.end.row &&
                  ((e.end.column = 0), e.end.row++),
                  this.session.remove(e),
                  this.clearSelection();
              }),
              (e.prototype.splitLine = function () {
                this.selection.isEmpty() ||
                  (this.session.remove(this.getSelectionRange()),
                  this.clearSelection());
                var e = this.getCursorPosition();
                this.insert("\n"), this.moveCursorToPosition(e);
              }),
              (e.prototype.setGhostText = function (e, t) {
                this.session.widgetManager ||
                  ((this.session.widgetManager = new w(this.session)),
                  this.session.widgetManager.attach(this)),
                  this.renderer.setGhostText(e, t);
              }),
              (e.prototype.removeGhostText = function () {
                if (!this.session.widgetManager) return;
                this.renderer.removeGhostText();
              }),
              (e.prototype.transposeLetters = function () {
                if (!this.selection.isEmpty()) return;
                var e = this.getCursorPosition(),
                  t = e.column;
                if (t === 0) return;
                var n = this.session.getLine(e.row),
                  r,
                  i;
                t < n.length
                  ? ((r = n.charAt(t) + n.charAt(t - 1)),
                    (i = new d(e.row, t - 1, e.row, t + 1)))
                  : ((r = n.charAt(t - 1) + n.charAt(t - 2)),
                    (i = new d(e.row, t - 2, e.row, t))),
                  this.session.replace(i, r),
                  this.session.selection.moveToPosition(i.end);
              }),
              (e.prototype.toLowerCase = function () {
                var e = this.getSelectionRange();
                this.selection.isEmpty() && this.selection.selectWord();
                var t = this.getSelectionRange(),
                  n = this.session.getTextRange(t);
                this.session.replace(t, n.toLowerCase()),
                  this.selection.setSelectionRange(e);
              }),
              (e.prototype.toUpperCase = function () {
                var e = this.getSelectionRange();
                this.selection.isEmpty() && this.selection.selectWord();
                var t = this.getSelectionRange(),
                  n = this.session.getTextRange(t);
                this.session.replace(t, n.toUpperCase()),
                  this.selection.setSelectionRange(e);
              }),
              (e.prototype.indent = function () {
                var e = this.session,
                  t = this.getSelectionRange();
                if (t.start.row < t.end.row) {
                  var n = this.$getSelectedRows();
                  e.indentRows(n.first, n.last, "	");
                  return;
                }
                if (t.start.column < t.end.column) {
                  var r = e.getTextRange(t);
                  if (!/^\s+$/.test(r)) {
                    var n = this.$getSelectedRows();
                    e.indentRows(n.first, n.last, "	");
                    return;
                  }
                }
                var i = e.getLine(t.start.row),
                  s = t.start,
                  u = e.getTabSize(),
                  a = e.documentToScreenColumn(s.row, s.column);
                if (this.session.getUseSoftTabs())
                  var f = u - (a % u),
                    l = o.stringRepeat(" ", f);
                else {
                  var f = a % u;
                  while (i[t.start.column - 1] == " " && f) t.start.column--, f--;
                  this.selection.setSelectionRange(t), (l = "	");
                }
                return this.insert(l);
              }),
              (e.prototype.blockIndent = function () {
                var e = this.$getSelectedRows();
                this.session.indentRows(e.first, e.last, "	");
              }),
              (e.prototype.blockOutdent = function () {
                var e = this.session.getSelection();
                this.session.outdentRows(e.getRange());
              }),
              (e.prototype.sortLines = function () {
                var e = this.$getSelectedRows(),
                  t = this.session,
                  n = [];
                for (var r = e.first; r <= e.last; r++) n.push(t.getLine(r));
                n.sort(function (e, t) {
                  return e.toLowerCase() < t.toLowerCase()
                    ? -1
                    : e.toLowerCase() > t.toLowerCase()
                    ? 1
                    : 0;
                });
                var i = new d(0, 0, 0, 0);
                for (var r = e.first; r <= e.last; r++) {
                  var s = t.getLine(r);
                  (i.start.row = r),
                    (i.end.row = r),
                    (i.end.column = s.length),
                    t.replace(i, n[r - e.first]);
                }
              }),
              (e.prototype.toggleCommentLines = function () {
                var e = this.session.getState(this.getCursorPosition().row),
                  t = this.$getSelectedRows();
                this.session
                  .getMode()
                  .toggleCommentLines(e, this.session, t.first, t.last);
              }),
              (e.prototype.toggleBlockComment = function () {
                var e = this.getCursorPosition(),
                  t = this.session.getState(e.row),
                  n = this.getSelectionRange();
                this.session.getMode().toggleBlockComment(t, this.session, n, e);
              }),
              (e.prototype.getNumberAt = function (e, t) {
                var n = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                n.lastIndex = 0;
                var r = this.session.getLine(e);
                while (n.lastIndex < t) {
                  var i = n.exec(r);
                  if (i.index <= t && i.index + i[0].length >= t) {
                    var s = {
                      value: i[0],
                      start: i.index,
                      end: i.index + i[0].length,
                    };
                    return s;
                  }
                }
                return null;
              }),
              (e.prototype.modifyNumber = function (e) {
                var t = this.selection.getCursor().row,
                  n = this.selection.getCursor().column,
                  r = new d(t, n - 1, t, n),
                  i = this.session.getTextRange(r);
                if (!isNaN(parseFloat(i)) && isFinite(i)) {
                  var s = this.getNumberAt(t, n);
                  if (s) {
                    var o =
                        s.value.indexOf(".") >= 0
                          ? s.start + s.value.indexOf(".") + 1
                          : s.end,
                      u = s.start + s.value.length - o,
                      a = parseFloat(s.value);
                    (a *= Math.pow(10, u)),
                      o !== s.end && n < o
                        ? (e *= Math.pow(10, s.end - n - 1))
                        : (e *= Math.pow(10, s.end - n)),
                      (a += e),
                      (a /= Math.pow(10, u));
                    var f = a.toFixed(u),
                      l = new d(t, s.start, t, s.end);
                    this.session.replace(l, f),
                      this.moveCursorTo(
                        t,
                        Math.max(s.start + 1, n + f.length - s.value.length)
                      );
                  }
                } else this.toggleWord();
              }),
              (e.prototype.toggleWord = function () {
                var e = this.selection.getCursor().row,
                  t = this.selection.getCursor().column;
                this.selection.selectWord();
                var n = this.getSelectedText(),
                  r = this.selection.getWordRange().start.column,
                  i = n
                    .replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ")
                    .split(/\s/),
                  s = t - r - 1;
                s < 0 && (s = 0);
                var u = 0,
                  a = 0,
                  f = this;
                n.match(/[A-Za-z0-9_]+/) &&
                  i.forEach(function (t, i) {
                    (a = u + t.length),
                      s >= u &&
                        s <= a &&
                        ((n = t),
                        f.selection.clearSelection(),
                        f.moveCursorTo(e, u + r),
                        f.selection.selectTo(e, a + r)),
                      (u = a);
                  });
                var l = this.$toggleWordPairs,
                  c;
                for (var h = 0; h < l.length; h++) {
                  var p = l[h];
                  for (var d = 0; d <= 1; d++) {
                    var v = +!d,
                      m = n.match(
                        new RegExp(
                          "^\\s?_?(" + o.escapeRegExp(p[d]) + ")\\s?$",
                          "i"
                        )
                      );
                    if (m) {
                      var g = n.match(
                        new RegExp(
                          "([_]|^|\\s)(" + o.escapeRegExp(m[1]) + ")($|\\s)",
                          "g"
                        )
                      );
                      g &&
                        ((c = n.replace(
                          new RegExp(o.escapeRegExp(p[d]), "i"),
                          function (e) {
                            var t = p[v];
                            return (
                              e.toUpperCase() == e
                                ? (t = t.toUpperCase())
                                : e.charAt(0).toUpperCase() == e.charAt(0) &&
                                  (t =
                                    t.substr(0, 0) +
                                    p[v].charAt(0).toUpperCase() +
                                    t.substr(1)),
                              t
                            );
                          }
                        )),
                        this.insert(c),
                        (c = ""));
                    }
                  }
                }
              }),
              (e.prototype.findLinkAt = function (e, t) {
                var n,
                  i,
                  s = this.session.getLine(e),
                  o = s.split(/((?:https?|ftp):\/\/[\S]+)/),
                  u = t;
                u < 0 && (u = 0);
                var a = 0,
                  f = 0,
                  l;
                try {
                  for (var c = r(o), h = c.next(); !h.done; h = c.next()) {
                    var p = h.value;
                    f = a + p.length;
                    if (
                      u >= a &&
                      u <= f &&
                      p.match(/((?:https?|ftp):\/\/[\S]+)/)
                    ) {
                      l = p.replace(/[\s:.,'";}\]]+$/, "");
                      break;
                    }
                    a = f;
                  }
                } catch (d) {
                  n = { error: d };
                } finally {
                  try {
                    h && !h.done && (i = c.return) && i.call(c);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return l;
              }),
              (e.prototype.openLink = function () {
                var e = this.selection.getCursor(),
                  t = this.findLinkAt(e.row, e.column);
                return t && window.open(t, "_blank"), t != null;
              }),
              (e.prototype.removeLines = function () {
                var e = this.$getSelectedRows();
                this.session.removeFullLines(e.first, e.last),
                  this.clearSelection();
              }),
              (e.prototype.duplicateSelection = function () {
                var e = this.selection,
                  t = this.session,
                  n = e.getRange(),
                  r = e.isBackwards();
                if (n.isEmpty()) {
                  var i = n.start.row;
                  t.duplicateLines(i, i);
                } else {
                  var s = r ? n.start : n.end,
                    o = t.insert(s, t.getTextRange(n), !1);
                  (n.start = s), (n.end = o), e.setSelectionRange(n, r);
                }
              }),
              (e.prototype.moveLinesDown = function () {
                this.$moveLines(1, !1);
              }),
              (e.prototype.moveLinesUp = function () {
                this.$moveLines(-1, !1);
              }),
              (e.prototype.moveText = function (e, t, n) {
                return this.session.moveText(e, t, n);
              }),
              (e.prototype.copyLinesUp = function () {
                this.$moveLines(-1, !0);
              }),
              (e.prototype.copyLinesDown = function () {
                this.$moveLines(1, !0);
              }),
              (e.prototype.$moveLines = function (e, t) {
                var n,
                  r,
                  i = this.selection;
                if (!i.inMultiSelectMode || this.inVirtualSelectionMode) {
                  var s = i.toOrientedRange();
                  (n = this.$getSelectedRows(s)),
                    (r = this.session.$moveLines(n.first, n.last, t ? 0 : e)),
                    t && e == -1 && (r = 0),
                    s.moveBy(r, 0),
                    i.fromOrientedRange(s);
                } else {
                  var o = i.rangeList.ranges;
                  i.rangeList.detach(this.session),
                    (this.inVirtualSelectionMode = !0);
                  var u = 0,
                    a = 0,
                    f = o.length;
                  for (var l = 0; l < f; l++) {
                    var c = l;
                    o[l].moveBy(u, 0), (n = this.$getSelectedRows(o[l]));
                    var h = n.first,
                      p = n.last;
                    while (++l < f) {
                      a && o[l].moveBy(a, 0);
                      var d = this.$getSelectedRows(o[l]);
                      if (t && d.first != p) break;
                      if (!t && d.first > p + 1) break;
                      p = d.last;
                    }
                    l--,
                      (u = this.session.$moveLines(h, p, t ? 0 : e)),
                      t && e == -1 && (c = l + 1);
                    while (c <= l) o[c].moveBy(u, 0), c++;
                    t || (u = 0), (a += u);
                  }
                  i.fromOrientedRange(i.ranges[0]),
                    i.rangeList.attach(this.session),
                    (this.inVirtualSelectionMode = !1);
                }
              }),
              (e.prototype.$getSelectedRows = function (e) {
                return (
                  (e = (e || this.getSelectionRange()).collapseRows()),
                  {
                    first: this.session.getRowFoldStart(e.start.row),
                    last: this.session.getRowFoldEnd(e.end.row),
                  }
                );
              }),
              (e.prototype.onCompositionStart = function (e) {
                this.renderer.showComposition(e);
              }),
              (e.prototype.onCompositionUpdate = function (e) {
                this.renderer.setCompositionText(e);
              }),
              (e.prototype.onCompositionEnd = function () {
                this.renderer.hideComposition();
              }),
              (e.prototype.getFirstVisibleRow = function () {
                return this.renderer.getFirstVisibleRow();
              }),
              (e.prototype.getLastVisibleRow = function () {
                return this.renderer.getLastVisibleRow();
              }),
              (e.prototype.isRowVisible = function (e) {
                return (
                  e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
                );
              }),
              (e.prototype.isRowFullyVisible = function (e) {
                return (
                  e >= this.renderer.getFirstFullyVisibleRow() &&
                  e <= this.renderer.getLastFullyVisibleRow()
                );
              }),
              (e.prototype.$getVisibleRowCount = function () {
                return (
                  this.renderer.getScrollBottomRow() -
                  this.renderer.getScrollTopRow() +
                  1
                );
              }),
              (e.prototype.$moveByPage = function (e, t) {
                var n = this.renderer,
                  r = this.renderer.layerConfig,
                  i = e * Math.floor(r.height / r.lineHeight);
                t === !0
                  ? this.selection.$moveSelection(function () {
                      this.moveCursorBy(i, 0);
                    })
                  : t === !1 &&
                    (this.selection.moveCursorBy(i, 0),
                    this.selection.clearSelection());
                var s = n.scrollTop;
                n.scrollBy(0, i * r.lineHeight),
                  t != null && n.scrollCursorIntoView(null, 0.5),
                  n.animateScrolling(s);
              }),
              (e.prototype.selectPageDown = function () {
                this.$moveByPage(1, !0);
              }),
              (e.prototype.selectPageUp = function () {
                this.$moveByPage(-1, !0);
              }),
              (e.prototype.gotoPageDown = function () {
                this.$moveByPage(1, !1);
              }),
              (e.prototype.gotoPageUp = function () {
                this.$moveByPage(-1, !1);
              }),
              (e.prototype.scrollPageDown = function () {
                this.$moveByPage(1);
              }),
              (e.prototype.scrollPageUp = function () {
                this.$moveByPage(-1);
              }),
              (e.prototype.scrollToRow = function (e) {
                this.renderer.scrollToRow(e);
              }),
              (e.prototype.scrollToLine = function (e, t, n, r) {
                this.renderer.scrollToLine(e, t, n, r);
              }),
              (e.prototype.centerSelection = function () {
                var e = this.getSelectionRange(),
                  t = {
                    row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                    column: Math.floor(
                      e.start.column + (e.end.column - e.start.column) / 2
                    ),
                  };
                this.renderer.alignCursor(t, 0.5);
              }),
              (e.prototype.getCursorPosition = function () {
                return this.selection.getCursor();
              }),
              (e.prototype.getCursorPositionScreen = function () {
                return this.session.documentToScreenPosition(
                  this.getCursorPosition()
                );
              }),
              (e.prototype.getSelectionRange = function () {
                return this.selection.getRange();
              }),
              (e.prototype.selectAll = function () {
                this.selection.selectAll();
              }),
              (e.prototype.clearSelection = function () {
                this.selection.clearSelection();
              }),
              (e.prototype.moveCursorTo = function (e, t) {
                this.selection.moveCursorTo(e, t);
              }),
              (e.prototype.moveCursorToPosition = function (e) {
                this.selection.moveCursorToPosition(e);
              }),
              (e.prototype.jumpToMatching = function (e, t) {
                var n = this.getCursorPosition(),
                  r = new b(this.session, n.row, n.column),
                  i = r.getCurrentToken(),
                  s = 0;
                i && i.type.indexOf("tag-name") !== -1 && (i = r.stepBackward());
                var o = i || r.stepForward();
                if (!o) return;
                var u,
                  a = !1,
                  f = {},
                  l = n.column - o.start,
                  c,
                  h = {
                    ")": "(",
                    "(": "(",
                    "]": "[",
                    "[": "[",
                    "{": "{",
                    "}": "{",
                  };
                do {
                  if (o.value.match(/[{}()\[\]]/g))
                    for (; l < o.value.length && !a; l++) {
                      if (!h[o.value[l]]) continue;
                      (c =
                        h[o.value[l]] + "." + o.type.replace("rparen", "lparen")),
                        isNaN(f[c]) && (f[c] = 0);
                      switch (o.value[l]) {
                        case "(":
                        case "[":
                        case "{":
                          f[c]++;
                          break;
                        case ")":
                        case "]":
                        case "}":
                          f[c]--, f[c] === -1 && ((u = "bracket"), (a = !0));
                      }
                    }
                  else
                    o.type.indexOf("tag-name") !== -1 &&
                      (isNaN(f[o.value]) && (f[o.value] = 0),
                      i.value === "<" && s > 1
                        ? f[o.value]++
                        : i.value === "</" && f[o.value]--,
                      f[o.value] === -1 && ((u = "tag"), (a = !0)));
                  a || ((i = o), s++, (o = r.stepForward()), (l = 0));
                } while (o && !a);
                if (!u) return;
                var p, v;
                if (u === "bracket") {
                  p = this.session.getBracketRange(n);
                  if (!p) {
                    (p = new d(
                      r.getCurrentTokenRow(),
                      r.getCurrentTokenColumn() + l - 1,
                      r.getCurrentTokenRow(),
                      r.getCurrentTokenColumn() + l - 1
                    )),
                      (v = p.start);
                    if (
                      t ||
                      (v.row === n.row && Math.abs(v.column - n.column) < 2)
                    )
                      p = this.session.getBracketRange(v);
                  }
                } else if (u === "tag") {
                  if (!o || o.type.indexOf("tag-name") === -1) return;
                  p = new d(
                    r.getCurrentTokenRow(),
                    r.getCurrentTokenColumn() - 2,
                    r.getCurrentTokenRow(),
                    r.getCurrentTokenColumn() - 2
                  );
                  if (p.compare(n.row, n.column) === 0) {
                    var m = this.session.getMatchingTags(n);
                    m &&
                      (m.openTag.contains(n.row, n.column)
                        ? ((p = m.closeTag), (v = p.start))
                        : ((p = m.openTag),
                          m.closeTag.start.row === n.row &&
                          m.closeTag.start.column === n.column
                            ? (v = p.end)
                            : (v = p.start)));
                  }
                  v = v || p.start;
                }
                (v = (p && p.cursor) || v),
                  v &&
                    (e
                      ? p && t
                        ? this.selection.setRange(p)
                        : p && p.isEqual(this.getSelectionRange())
                        ? this.clearSelection()
                        : this.selection.selectTo(v.row, v.column)
                      : this.selection.moveTo(v.row, v.column));
              }),
              (e.prototype.gotoLine = function (e, t, n) {
                this.selection.clearSelection(),
                  this.session.unfold({ row: e - 1, column: t || 0 }),
                  this.exitMultiSelectMode && this.exitMultiSelectMode(),
                  this.moveCursorTo(e - 1, t || 0),
                  this.isRowFullyVisible(e - 1) ||
                    this.scrollToLine(e - 1, !0, n);
              }),
              (e.prototype.navigateTo = function (e, t) {
                this.selection.moveTo(e, t);
              }),
              (e.prototype.navigateUp = function (e) {
                if (
                  this.selection.isMultiLine() &&
                  !this.selection.isBackwards()
                ) {
                  var t = this.selection.anchor.getPosition();
                  return this.moveCursorToPosition(t);
                }
                this.selection.clearSelection(),
                  this.selection.moveCursorBy(-e || -1, 0);
              }),
              (e.prototype.navigateDown = function (e) {
                if (
                  this.selection.isMultiLine() &&
                  this.selection.isBackwards()
                ) {
                  var t = this.selection.anchor.getPosition();
                  return this.moveCursorToPosition(t);
                }
                this.selection.clearSelection(),
                  this.selection.moveCursorBy(e || 1, 0);
              }),
              (e.prototype.navigateLeft = function (e) {
                if (!this.selection.isEmpty()) {
                  var t = this.getSelectionRange().start;
                  this.moveCursorToPosition(t);
                } else {
                  e = e || 1;
                  while (e--) this.selection.moveCursorLeft();
                }
                this.clearSelection();
              }),
              (e.prototype.navigateRight = function (e) {
                if (!this.selection.isEmpty()) {
                  var t = this.getSelectionRange().end;
                  this.moveCursorToPosition(t);
                } else {
                  e = e || 1;
                  while (e--) this.selection.moveCursorRight();
                }
                this.clearSelection();
              }),
              (e.prototype.navigateLineStart = function () {
                this.selection.moveCursorLineStart(), this.clearSelection();
              }),
              (e.prototype.navigateLineEnd = function () {
                this.selection.moveCursorLineEnd(), this.clearSelection();
              }),
              (e.prototype.navigateFileEnd = function () {
                this.selection.moveCursorFileEnd(), this.clearSelection();
              }),
              (e.prototype.navigateFileStart = function () {
                this.selection.moveCursorFileStart(), this.clearSelection();
              }),
              (e.prototype.navigateWordRight = function () {
                this.selection.moveCursorWordRight(), this.clearSelection();
              }),
              (e.prototype.navigateWordLeft = function () {
                this.selection.moveCursorWordLeft(), this.clearSelection();
              }),
              (e.prototype.replace = function (e, t) {
                t && this.$search.set(t);
                var n = this.$search.find(this.session),
                  r = 0;
                return n
                  ? (this.$tryReplace(n, e) && (r = 1),
                    this.selection.setSelectionRange(n),
                    this.renderer.scrollSelectionIntoView(n.start, n.end),
                    r)
                  : r;
              }),
              (e.prototype.replaceAll = function (e, t) {
                t && this.$search.set(t);
                var n = this.$search.findAll(this.session),
                  r = 0;
                if (!n.length) return r;
                var i = this.getSelectionRange();
                this.selection.moveTo(0, 0);
                for (var s = n.length - 1; s >= 0; --s)
                  this.$tryReplace(n[s], e) && r++;
                return this.selection.setSelectionRange(i), r;
              }),
              (e.prototype.$tryReplace = function (e, t) {
                var n = this.session.getTextRange(e);
                return (
                  (t = this.$search.replace(n, t)),
                  t !== null ? ((e.end = this.session.replace(e, t)), e) : null
                );
              }),
              (e.prototype.getLastSearchOptions = function () {
                return this.$search.getOptions();
              }),
              (e.prototype.find = function (e, t, n) {
                t || (t = {}),
                  typeof e == "string" || e instanceof RegExp
                    ? (t.needle = e)
                    : typeof e == "object" && i.mixin(t, e);
                var r = this.selection.getRange();
                t.needle == null &&
                  ((e =
                    this.session.getTextRange(r) || this.$search.$options.needle),
                  e ||
                    ((r = this.session.getWordRange(r.start.row, r.start.column)),
                    (e = this.session.getTextRange(r))),
                  this.$search.set({ needle: e })),
                  this.$search.set(t),
                  t.start || this.$search.set({ start: r });
                var s = this.$search.find(this.session);
                if (t.preventScroll) return s;
                if (s) return this.revealRange(s, n), s;
                t.backwards ? (r.start = r.end) : (r.end = r.start),
                  this.selection.setRange(r);
              }),
              (e.prototype.findNext = function (e, t) {
                this.find({ skipCurrent: !0, backwards: !1 }, e, t);
              }),
              (e.prototype.findPrevious = function (e, t) {
                this.find(e, { skipCurrent: !0, backwards: !0 }, t);
              }),
              (e.prototype.revealRange = function (e, t) {
                this.session.unfold(e), this.selection.setSelectionRange(e);
                var n = this.renderer.scrollTop;
                this.renderer.scrollSelectionIntoView(e.start, e.end, 0.5),
                  t !== !1 && this.renderer.animateScrolling(n);
              }),
              (e.prototype.undo = function () {
                this.session.getUndoManager().undo(this.session),
                  this.renderer.scrollCursorIntoView(null, 0.5);
              }),
              (e.prototype.redo = function () {
                this.session.getUndoManager().redo(this.session),
                  this.renderer.scrollCursorIntoView(null, 0.5);
              }),
              (e.prototype.destroy = function () {
                this.$toDestroy &&
                  (this.$toDestroy.forEach(function (e) {
                    e.destroy();
                  }),
                  (this.$toDestroy = null)),
                  this.$mouseHandler && this.$mouseHandler.destroy(),
                  this.renderer.destroy(),
                  this._signal("destroy", this),
                  this.session && this.session.destroy(),
                  this._$emitInputEvent && this._$emitInputEvent.cancel(),
                  this.removeAllListeners();
              }),
              (e.prototype.setAutoScrollEditorIntoView = function (e) {
                if (!e) return;
                var t,
                  n = this,
                  r = !1;
                this.$scrollAnchor ||
                  (this.$scrollAnchor = document.createElement("div"));
                var i = this.$scrollAnchor;
                (i.style.cssText = "position:absolute"),
                  this.container.insertBefore(i, this.container.firstChild);
                var s = this.on("changeSelection", function () {
                    r = !0;
                  }),
                  o = this.renderer.on("beforeRender", function () {
                    r && (t = n.renderer.container.getBoundingClientRect());
                  }),
                  u = this.renderer.on("afterRender", function () {
                    if (
                      r &&
                      t &&
                      (n.isFocused() || (n.searchBox && n.searchBox.isFocused()))
                    ) {
                      var e = n.renderer,
                        s = e.$cursorLayer.$pixelPos,
                        o = e.layerConfig,
                        u = s.top - o.offset;
                      s.top >= 0 && u + t.top < 0
                        ? (r = !0)
                        : s.top < o.height &&
                          s.top + t.top + o.lineHeight > window.innerHeight
                        ? (r = !1)
                        : (r = null),
                        r != null &&
                          ((i.style.top = u + "px"),
                          (i.style.left = s.left + "px"),
                          (i.style.height = o.lineHeight + "px"),
                          i.scrollIntoView(r)),
                        (r = t = null);
                    }
                  });
                this.setAutoScrollEditorIntoView = function (e) {
                  if (e) return;
                  delete this.setAutoScrollEditorIntoView,
                    this.off("changeSelection", s),
                    this.renderer.off("afterRender", u),
                    this.renderer.off("beforeRender", o);
                };
              }),
              (e.prototype.$resetCursorStyle = function () {
                var e = this.$cursorStyle || "ace",
                  t = this.renderer.$cursorLayer;
                if (!t) return;
                t.setSmoothBlinking(/smooth/.test(e)),
                  (t.isBlinking = !this.$readOnly && e != "wide"),
                  s.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e));
              }),
              (e.prototype.prompt = function (e, t, n) {
                var r = this;
                y.loadModule("ace/ext/prompt", function (i) {
                  i.prompt(r, e, t, n);
                });
              }),
              e
            );
          })();
        (N.$uid = 0),
          (N.prototype.curOp = null),
          (N.prototype.prevOp = {}),
          (N.prototype.$mergeableCommands = ["backspace", "del", "insertstring"]),
          (N.prototype.$toggleWordPairs = [
            ["first", "last"],
            ["true", "false"],
            ["yes", "no"],
            ["width", "height"],
            ["top", "bottom"],
            ["right", "left"],
            ["on", "off"],
            ["x", "y"],
            ["get", "set"],
            ["max", "min"],
            ["horizontal", "vertical"],
            ["show", "hide"],
            ["add", "remove"],
            ["up", "down"],
            ["before", "after"],
            ["even", "odd"],
            ["in", "out"],
            ["inside", "outside"],
            ["next", "previous"],
            ["increase", "decrease"],
            ["attach", "detach"],
            ["&&", "||"],
            ["==", "!="],
          ]),
          i.implement(N.prototype, v),
          y.defineOptions(N.prototype, "editor1", {
            selectionStyle: {
              set: function (e) {
                this.onSelectionChange(),
                  this._signal("changeSelectionStyle", { data: e });
              },
              initialValue: "line",
            },
            highlightActiveLine: {
              set: function () {
                this.$updateHighlightActiveLine();
              },
              initialValue: !0,
            },
            highlightSelectedWord: {
              set: function (e) {
                this.$onSelectionChange();
              },
              initialValue: !0,
            },
            readOnly: {
              set: function (e) {
                this.textInput.setReadOnly(e), this.$resetCursorStyle();
              },
              initialValue: !1,
            },
            copyWithEmptySelection: {
              set: function (e) {
                this.textInput.setCopyWithEmptySelection(e);
              },
              initialValue: !1,
            },
            cursorStyle: {
              set: function (e) {
                this.$resetCursorStyle();
              },
              values: ["ace", "slim", "smooth", "wide"],
              initialValue: "ace",
            },
            mergeUndoDeltas: { values: [!1, !0, "always"], initialValue: !0 },
            behavioursEnabled: { initialValue: !0 },
            wrapBehavioursEnabled: { initialValue: !0 },
            enableAutoIndent: { initialValue: !0 },
            autoScrollEditorIntoView: {
              set: function (e) {
                this.setAutoScrollEditorIntoView(e);
              },
            },
            keyboardHandler: {
              set: function (e) {
                this.setKeyboardHandler(e);
              },
              get: function () {
                return this.$keybindingId;
              },
              handlesSet: !0,
            },
            value: {
              set: function (e) {
                this.session.setValue(e);
              },
              get: function () {
                return this.getValue();
              },
              handlesSet: !0,
              hidden: !0,
            },
            session: {
              set: function (e) {
                this.setSession(e);
              },
              get: function () {
                return this.session;
              },
              handlesSet: !0,
              hidden: !0,
            },
            showLineNumbers: {
              set: function (e) {
                this.renderer.$gutterLayer.setShowLineNumbers(e),
                  this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER),
                  e && this.$relativeLineNumbers
                    ? C.attach(this)
                    : C.detach(this);
              },
              initialValue: !0,
            },
            relativeLineNumbers: {
              set: function (e) {
                this.$showLineNumbers && e ? C.attach(this) : C.detach(this);
              },
            },
            placeholder: {
              set: function (e) {
                this.$updatePlaceholder ||
                  ((this.$updatePlaceholder = function () {
                    var e =
                      this.session &&
                      (this.renderer.$composition ||
                        this.session.getLength() > 1 ||
                        this.session.getLine(0).length > 0);
                    if (e && this.renderer.placeholderNode)
                      this.renderer.off("afterRender", this.$updatePlaceholder),
                        s.removeCssClass(this.container, "ace_hasPlaceholder"),
                        this.renderer.placeholderNode.remove(),
                        (this.renderer.placeholderNode = null);
                    else if (!e && !this.renderer.placeholderNode) {
                      this.renderer.on("afterRender", this.$updatePlaceholder),
                        s.addCssClass(this.container, "ace_hasPlaceholder");
                      var t = s.createElement("div");
                      (t.className = "ace_placeholder"),
                        (t.textContent = this.$placeholder || ""),
                        (this.renderer.placeholderNode = t),
                        this.renderer.content.appendChild(
                          this.renderer.placeholderNode
                        );
                    } else
                      !e &&
                        this.renderer.placeholderNode &&
                        (this.renderer.placeholderNode.textContent =
                          this.$placeholder || "");
                  }.bind(this)),
                  this.on("input", this.$updatePlaceholder)),
                  this.$updatePlaceholder();
              },
            },
            enableKeyboardAccessibility: {
              set: function (e) {
                var t = {
                    name: "blurTextInput",
                    description:
                      "Set focus to the editor1 content div to allow tabbing through the page",
                    bindKey: "Esc",
                    exec: function (e) {
                      e.blur(), e.renderer.scroller.focus();
                    },
                    readOnly: !0,
                  },
                  n = function (e) {
                    if (
                      e.target == this.renderer.scroller &&
                      e.keyCode === T.enter
                    ) {
                      e.preventDefault();
                      var t = this.getCursorPosition().row;
                      this.isRowVisible(t) || this.scrollToLine(t, !0, !0),
                        this.focus();
                    }
                  },
                  r;
                e
                  ? ((this.renderer.enableKeyboardAccessibility = !0),
                    (this.renderer.keyboardFocusClassName = "ace_keyboard-focus"),
                    this.textInput.getElement().setAttribute("tabindex", -1),
                    this.renderer.scroller.setAttribute("tabindex", 0),
                    this.renderer.scroller.setAttribute("role", "group"),
                    this.renderer.scroller.setAttribute(
                      "aria-roledescription",
                      S("editor1")
                    ),
                    this.renderer.scroller.classList.add(
                      this.renderer.keyboardFocusClassName
                    ),
                    this.renderer.scroller.setAttribute(
                      "aria-label",
                      S(
                        "Editor content, press Enter to start editing, press Escape to exit"
                      )
                    ),
                    this.renderer.scroller.addEventListener(
                      "keyup",
                      n.bind(this)
                    ),
                    this.commands.addCommand(t),
                    this.renderer.$gutter.setAttribute("tabindex", 0),
                    this.renderer.$gutter.setAttribute("aria-hidden", !1),
                    this.renderer.$gutter.setAttribute("role", "group"),
                    this.renderer.$gutter.setAttribute(
                      "aria-roledescription",
                      S("editor1")
                    ),
                    this.renderer.$gutter.setAttribute(
                      "aria-label",
                      S(
                        "Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit"
                      )
                    ),
                    this.renderer.$gutter.classList.add(
                      this.renderer.keyboardFocusClassName
                    ),
                    this.renderer.content.setAttribute("aria-hidden", !0),
                    r || (r = new E(this)),
                    r.addListener())
                  : ((this.renderer.enableKeyboardAccessibility = !1),
                    this.textInput.getElement().setAttribute("tabindex", 0),
                    this.renderer.scroller.setAttribute("tabindex", -1),
                    this.renderer.scroller.removeAttribute("role"),
                    this.renderer.scroller.removeAttribute(
                      "aria-roledescription"
                    ),
                    this.renderer.scroller.classList.remove(
                      this.renderer.keyboardFocusClassName
                    ),
                    this.renderer.scroller.removeAttribute("aria-label"),
                    this.renderer.scroller.removeEventListener(
                      "keyup",
                      n.bind(this)
                    ),
                    this.commands.removeCommand(t),
                    this.renderer.content.removeAttribute("aria-hidden"),
                    this.renderer.$gutter.setAttribute("tabindex", -1),
                    this.renderer.$gutter.setAttribute("aria-hidden", !0),
                    this.renderer.$gutter.removeAttribute("role"),
                    this.renderer.$gutter.removeAttribute("aria-roledescription"),
                    this.renderer.$gutter.removeAttribute("aria-label"),
                    this.renderer.$gutter.classList.remove(
                      this.renderer.keyboardFocusClassName
                    ),
                    r && r.removeListener());
              },
              initialValue: !1,
            },
            customScrollbar: "renderer",
            hScrollBarAlwaysVisible: "renderer",
            vScrollBarAlwaysVisible: "renderer",
            highlightGutterLine: "renderer",
            animatedScroll: "renderer",
            showInvisibles: "renderer",
            showPrintMargin: "renderer",
            printMarginColumn: "renderer",
            printMargin: "renderer",
            fadeFoldWidgets: "renderer",
            showFoldWidgets: "renderer",
            displayIndentGuides: "renderer",
            highlightIndentGuides: "renderer",
            showGutter: "renderer",
            fontSize: "renderer",
            fontFamily: "renderer",
            maxLines: "renderer",
            minLines: "renderer",
            scrollPastEnd: "renderer",
            fixedWidthGutter: "renderer",
            theme: "renderer",
            hasCssTransforms: "renderer",
            maxPixelHeight: "renderer",
            useTextareaForIME: "renderer",
            useResizeObserver: "renderer",
            useSvgGutterIcons: "renderer",
            showFoldedAnnotations: "renderer",
            scrollSpeed: "$mouseHandler",
            dragDelay: "$mouseHandler",
            dragEnabled: "$mouseHandler",
            focusTimeout: "$mouseHandler",
            tooltipFollowsMouse: "$mouseHandler",
            firstLineNumber: "session",
            overwrite: "session",
            newLineMode: "session",
            useWorker: "session",
            useSoftTabs: "session",
            navigateWithinSoftTabs: "session",
            tabSize: "session",
            wrap: "session",
            indentedSoftWrap: "session",
            foldStyle: "session",
            mode: "session",
          });
        var C = {
          getText: function (e, t) {
            return (
              (Math.abs(e.selection.lead.row - t) ||
                t + 1 + (t < 9 ? "\u00b7" : "")) + ""
            );
          },
          getWidth: function (e, t, n) {
            return (
              Math.max(
                t.toString().length,
                (n.lastRow + 1).toString().length,
                2
              ) * n.characterWidth
            );
          },
          update: function (e, t) {
            t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER);
          },
          attach: function (e) {
            (e.renderer.$gutterLayer.$renderer = this),
              e.on("changeSelection", this.update),
              this.update(null, e);
          },
          detach: function (e) {
            e.renderer.$gutterLayer.$renderer == this &&
              (e.renderer.$gutterLayer.$renderer = null),
              e.off("changeSelection", this.update),
              this.update(null, e);
          },
        };
        t.Editor = N;
      }
    ),
    define(
      "ace/undomanager",
      ["require", "exports", "module", "ace/range"],
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          for (var n = t; n--; ) {
            var r = e[n];
            if (r && !r[0].ignore) {
              while (n < t - 1) {
                var i = d(e[n], e[n + 1]);
                (e[n] = i[0]), (e[n + 1] = i[1]), n++;
              }
              return !0;
            }
          }
        }
        function a(e) {
          var t = e.action == "insert",
            n = e.start,
            r = e.end,
            i = (r.row - n.row) * (t ? 1 : -1),
            s = (r.column - n.column) * (t ? 1 : -1);
          t && (r = n);
          for (var o in this.marks) {
            var a = this.marks[o],
              f = u(a, n);
            if (f < 0) continue;
            if (f === 0 && t) {
              if (a.bias != 1) {
                a.bias == -1;
                continue;
              }
              f = 1;
            }
            var l = t ? f : u(a, r);
            if (l > 0) {
              (a.row += i), (a.column += a.row == r.row ? s : 0);
              continue;
            }
            !t &&
              l <= 0 &&
              ((a.row = n.row), (a.column = n.column), l === 0 && (a.bias = 1));
          }
        }
        function f(e) {
          return { row: e.row, column: e.column };
        }
        function l(e) {
          return {
            start: f(e.start),
            end: f(e.end),
            action: e.action,
            lines: e.lines.slice(),
          };
        }
        function c(e) {
          e = e || this;
          if (Array.isArray(e)) return e.map(c).join("\n");
          var t = "";
          e.action
            ? ((t = e.action == "insert" ? "+" : "-"), (t += "[" + e.lines + "]"))
            : e.value &&
              (Array.isArray(e.value)
                ? (t = e.value.map(h).join("\n"))
                : (t = h(e.value))),
            e.start && (t += h(e));
          if (e.id || e.rev) t += "	(" + (e.id || e.rev) + ")";
          return t;
        }
        function h(e) {
          return (
            e.start.row +
            ":" +
            e.start.column +
            "=>" +
            e.end.row +
            ":" +
            e.end.column
          );
        }
        function p(e, t) {
          var n = e.action == "insert",
            r = t.action == "insert";
          if (n && r)
            if (o(t.start, e.end) >= 0) m(t, e, -1);
            else {
              if (!(o(t.start, e.start) <= 0)) return null;
              m(e, t, 1);
            }
          else if (n && !r)
            if (o(t.start, e.end) >= 0) m(t, e, -1);
            else {
              if (!(o(t.end, e.start) <= 0)) return null;
              m(e, t, -1);
            }
          else if (!n && r)
            if (o(t.start, e.start) >= 0) m(t, e, 1);
            else {
              if (!(o(t.start, e.start) <= 0)) return null;
              m(e, t, 1);
            }
          else if (!n && !r)
            if (o(t.start, e.start) >= 0) m(t, e, 1);
            else {
              if (!(o(t.end, e.start) <= 0)) return null;
              m(e, t, -1);
            }
          return [t, e];
        }
        function d(e, t) {
          for (var n = e.length; n--; )
            for (var r = 0; r < t.length; r++)
              if (!p(e[n], t[r])) {
                while (n < e.length) {
                  while (r--) p(t[r], e[n]);
                  (r = t.length), n++;
                }
                return [e, t];
              }
          return (
            (e.selectionBefore =
              t.selectionBefore =
              e.selectionAfter =
              t.selectionAfter =
                null),
            [t, e]
          );
        }
        function v(e, t) {
          var n = e.action == "insert",
            r = t.action == "insert";
          if (n && r) o(e.start, t.start) < 0 ? m(t, e, 1) : m(e, t, 1);
          else if (n && !r)
            o(e.start, t.end) >= 0
              ? m(e, t, -1)
              : o(e.start, t.start) <= 0
              ? m(t, e, 1)
              : (m(e, s.fromPoints(t.start, e.start), -1), m(t, e, 1));
          else if (!n && r)
            o(t.start, e.end) >= 0
              ? m(t, e, -1)
              : o(t.start, e.start) <= 0
              ? m(e, t, 1)
              : (m(t, s.fromPoints(e.start, t.start), -1), m(e, t, 1));
          else if (!n && !r)
            if (o(t.start, e.end) >= 0) m(t, e, -1);
            else {
              if (!(o(t.end, e.start) <= 0)) {
                var i, u;
                return (
                  o(e.start, t.start) < 0 && ((i = e), (e = y(e, t.start))),
                  o(e.end, t.end) > 0 && (u = y(e, t.end)),
                  g(t.end, e.start, e.end, -1),
                  u &&
                    !i &&
                    ((e.lines = u.lines),
                    (e.start = u.start),
                    (e.end = u.end),
                    (u = e)),
                  [t, i, u].filter(Boolean)
                );
              }
              m(e, t, -1);
            }
          return [t, e];
        }
        function m(e, t, n) {
          g(e.start, t.start, t.end, n), g(e.end, t.start, t.end, n);
        }
        function g(e, t, n, r) {
          e.row == (r == 1 ? t : n).row &&
            (e.column += r * (n.column - t.column)),
            (e.row += r * (n.row - t.row));
        }
        function y(e, t) {
          var n = e.lines,
            r = e.end;
          e.end = f(t);
          var i = e.end.row - e.start.row,
            s = n.splice(i, n.length),
            o = i ? t.column : t.column - e.start.column;
          n.push(s[0].substring(0, o)), (s[0] = s[0].substr(o));
          var u = { start: f(t), end: r, lines: s, action: e.action };
          return u;
        }
        function b(e, t) {
          t = l(t);
          for (var n = e.length; n--; ) {
            var r = e[n];
            for (var i = 0; i < r.length; i++) {
              var s = r[i],
                o = v(s, t);
              (t = o[0]),
                o.length != 2 &&
                  (o[2]
                    ? (r.splice(i + 1, 1, o[1], o[2]), i++)
                    : o[1] || (r.splice(i, 1), i--));
            }
            r.length || e.splice(n, 1);
          }
          return e;
        }
        function w(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            for (var i = 0; i < r.length; i++) b(e, r[i]);
          }
        }
        var r = (function () {
          function e() {
            (this.$maxRev = 0),
              (this.$fromUndo = !1),
              (this.$undoDepth = Infinity),
              this.reset();
          }
          return (
            (e.prototype.addSession = function (e) {
              this.$session = e;
            }),
            (e.prototype.add = function (e, t, n) {
              if (this.$fromUndo) return;
              if (e == this.$lastDelta) return;
              this.$keepRedoStack || (this.$redoStack.length = 0);
              if (t === !1 || !this.lastDeltas) {
                this.lastDeltas = [];
                var r = this.$undoStack.length;
                r > this.$undoDepth - 1 &&
                  this.$undoStack.splice(0, r - this.$undoDepth + 1),
                  this.$undoStack.push(this.lastDeltas),
                  (e.id = this.$rev = ++this.$maxRev);
              }
              if (e.action == "remove" || e.action == "insert")
                this.$lastDelta = e;
              this.lastDeltas.push(e);
            }),
            (e.prototype.addSelection = function (e, t) {
              this.selections.push({ value: e, rev: t || this.$rev });
            }),
            (e.prototype.startNewGroup = function () {
              return (this.lastDeltas = null), this.$rev;
            }),
            (e.prototype.markIgnored = function (e, t) {
              t == null && (t = this.$rev + 1);
              var n = this.$undoStack;
              for (var r = n.length; r--; ) {
                var i = n[r][0];
                if (i.id <= e) break;
                i.id < t && (i.ignore = !0);
              }
              this.lastDeltas = null;
            }),
            (e.prototype.getSelection = function (e, t) {
              var n = this.selections;
              for (var r = n.length; r--; ) {
                var i = n[r];
                if (i.rev < e) return t && (i = n[r + 1]), i;
              }
            }),
            (e.prototype.getRevision = function () {
              return this.$rev;
            }),
            (e.prototype.getDeltas = function (e, t) {
              t == null && (t = this.$rev + 1);
              var n = this.$undoStack,
                r = null,
                i = 0;
              for (var s = n.length; s--; ) {
                var o = n[s][0];
                o.id < t && !r && (r = s + 1);
                if (o.id <= e) {
                  i = s + 1;
                  break;
                }
              }
              return n.slice(i, r);
            }),
            (e.prototype.getChangedRanges = function (e, t) {
              t == null && (t = this.$rev + 1);
            }),
            (e.prototype.getChangedLines = function (e, t) {
              t == null && (t = this.$rev + 1);
            }),
            (e.prototype.undo = function (e, t) {
              this.lastDeltas = null;
              var n = this.$undoStack;
              if (!i(n, n.length)) return;
              e || (e = this.$session),
                this.$redoStackBaseRev !== this.$rev &&
                  this.$redoStack.length &&
                  (this.$redoStack = []),
                (this.$fromUndo = !0);
              var r = n.pop(),
                s = null;
              return (
                r &&
                  ((s = e.undoChanges(r, t)),
                  this.$redoStack.push(r),
                  this.$syncRev()),
                (this.$fromUndo = !1),
                s
              );
            }),
            (e.prototype.redo = function (e, t) {
              (this.lastDeltas = null),
                e || (e = this.$session),
                (this.$fromUndo = !0);
              if (this.$redoStackBaseRev != this.$rev) {
                var n = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
                w(this.$redoStack, n),
                  (this.$redoStackBaseRev = this.$rev),
                  this.$redoStack.forEach(function (e) {
                    e[0].id = ++this.$maxRev;
                  }, this);
              }
              var r = this.$redoStack.pop(),
                i = null;
              return (
                r &&
                  ((i = e.redoChanges(r, t)),
                  this.$undoStack.push(r),
                  this.$syncRev()),
                (this.$fromUndo = !1),
                i
              );
            }),
            (e.prototype.$syncRev = function () {
              var e = this.$undoStack,
                t = e[e.length - 1],
                n = (t && t[0].id) || 0;
              (this.$redoStackBaseRev = n), (this.$rev = n);
            }),
            (e.prototype.reset = function () {
              (this.lastDeltas = null),
                (this.$lastDelta = null),
                (this.$undoStack = []),
                (this.$redoStack = []),
                (this.$rev = 0),
                (this.mark = 0),
                (this.$redoStackBaseRev = this.$rev),
                (this.selections = []);
            }),
            (e.prototype.canUndo = function () {
              return this.$undoStack.length > 0;
            }),
            (e.prototype.canRedo = function () {
              return this.$redoStack.length > 0;
            }),
            (e.prototype.bookmark = function (e) {
              e == undefined && (e = this.$rev), (this.mark = e);
            }),
            (e.prototype.isAtBookmark = function () {
              return this.$rev === this.mark;
            }),
            (e.prototype.toJSON = function () {}),
            (e.prototype.fromJSON = function () {}),
            (e.prototype.$prettyPrint = function (e) {
              return e
                ? c(e)
                : c(this.$undoStack) + "\n---\n" + c(this.$redoStack);
            }),
            e
          );
        })();
        (r.prototype.hasUndo = r.prototype.canUndo),
          (r.prototype.hasRedo = r.prototype.canRedo),
          (r.prototype.isClean = r.prototype.isAtBookmark),
          (r.prototype.markClean = r.prototype.bookmark);
        var s = e("./range").Range,
          o = s.comparePoints,
          u = s.comparePoints;
        t.UndoManager = r;
      }
    ),
    define(
      "ace/layer/lines",
      ["require", "exports", "module", "ace/lib/dom"],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/dom"),
          i = (function () {
            function e(e, t) {
              (this.element = e),
                (this.canvasHeight = t || 5e5),
                (this.element.style.height = this.canvasHeight * 2 + "px"),
                (this.cells = []),
                (this.cellCache = []),
                (this.$offsetCoefficient = 0);
            }
            return (
              (e.prototype.moveContainer = function (e) {
                r.translate(
                  this.element,
                  0,
                  -((e.firstRowScreen * e.lineHeight) % this.canvasHeight) -
                    e.offset * this.$offsetCoefficient
                );
              }),
              (e.prototype.pageChanged = function (e, t) {
                return (
                  Math.floor(
                    (e.firstRowScreen * e.lineHeight) / this.canvasHeight
                  ) !==
                  Math.floor(
                    (t.firstRowScreen * t.lineHeight) / this.canvasHeight
                  )
                );
              }),
              (e.prototype.computeLineTop = function (e, t, n) {
                var r = t.firstRowScreen * t.lineHeight,
                  i = Math.floor(r / this.canvasHeight),
                  s = n.documentToScreenRow(e, 0) * t.lineHeight;
                return s - i * this.canvasHeight;
              }),
              (e.prototype.computeLineHeight = function (e, t, n) {
                return t.lineHeight * n.getRowLineCount(e);
              }),
              (e.prototype.getLength = function () {
                return this.cells.length;
              }),
              (e.prototype.get = function (e) {
                return this.cells[e];
              }),
              (e.prototype.shift = function () {
                this.$cacheCell(this.cells.shift());
              }),
              (e.prototype.pop = function () {
                this.$cacheCell(this.cells.pop());
              }),
              (e.prototype.push = function (e) {
                if (Array.isArray(e)) {
                  this.cells.push.apply(this.cells, e);
                  var t = r.createFragment(this.element);
                  for (var n = 0; n < e.length; n++) t.appendChild(e[n].element);
                  this.element.appendChild(t);
                } else this.cells.push(e), this.element.appendChild(e.element);
              }),
              (e.prototype.unshift = function (e) {
                if (Array.isArray(e)) {
                  this.cells.unshift.apply(this.cells, e);
                  var t = r.createFragment(this.element);
                  for (var n = 0; n < e.length; n++) t.appendChild(e[n].element);
                  this.element.firstChild
                    ? this.element.insertBefore(t, this.element.firstChild)
                    : this.element.appendChild(t);
                } else
                  this.cells.unshift(e),
                    this.element.insertAdjacentElement("afterbegin", e.element);
              }),
              (e.prototype.last = function () {
                return this.cells.length
                  ? this.cells[this.cells.length - 1]
                  : null;
              }),
              (e.prototype.$cacheCell = function (e) {
                if (!e) return;
                e.element.remove(), this.cellCache.push(e);
              }),
              (e.prototype.createCell = function (e, t, n, i) {
                var s = this.cellCache.pop();
                if (!s) {
                  var o = r.createElement("div");
                  i && i(o),
                    this.element.appendChild(o),
                    (s = { element: o, text: "", row: e });
                }
                return (s.row = e), s;
              }),
              e
            );
          })();
        t.Lines = i;
      }
    ),
    define(
      "ace/layer/gutter",
      [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
        "ace/lib/oop",
        "ace/lib/lang",
        "ace/lib/event_emitter",
        "ace/layer/lines",
        "ace/config",
      ],
      function (e, t, n) {
        "use strict";
        function l(e) {
          var t = document.createTextNode("");
          e.appendChild(t);
          var n = r.createElement("span");
          e.appendChild(n);
          var i = r.createElement("span");
          e.appendChild(i);
          var s = r.createElement("span");
          return i.appendChild(s), e;
        }
        var r = e("../lib/dom"),
          i = e("../lib/oop"),
          s = e("../lib/lang"),
          o = e("../lib/event_emitter").EventEmitter,
          u = e("./lines").Lines,
          a = e("../config").nls,
          f = (function () {
            function e(e) {
              (this.element = r.createElement("div")),
                (this.element.className = "ace_layer ace_gutter-layer"),
                e.appendChild(this.element),
                this.setShowFoldWidgets(this.$showFoldWidgets),
                (this.gutterWidth = 0),
                (this.$annotations = []),
                (this.$updateAnnotations = this.$updateAnnotations.bind(this)),
                (this.$lines = new u(this.element)),
                (this.$lines.$offsetCoefficient = 1);
            }
            return (
              (e.prototype.setSession = function (e) {
                this.session &&
                  this.session.off("change", this.$updateAnnotations),
                  (this.session = e),
                  e && e.on("change", this.$updateAnnotations);
              }),
              (e.prototype.addGutterDecoration = function (e, t) {
                window.console &&
                  console.warn &&
                  console.warn("deprecated use session.addGutterDecoration"),
                  this.session.addGutterDecoration(e, t);
              }),
              (e.prototype.removeGutterDecoration = function (e, t) {
                window.console &&
                  console.warn &&
                  console.warn("deprecated use session.removeGutterDecoration"),
                  this.session.removeGutterDecoration(e, t);
              }),
              (e.prototype.setAnnotations = function (e) {
                this.$annotations = [];
                for (var t = 0; t < e.length; t++) {
                  var n = e[t],
                    r = n.row,
                    i = this.$annotations[r];
                  i || (i = this.$annotations[r] = { text: [], type: [] });
                  var o = n.text,
                    u = n.type;
                  (o = o ? s.escapeHTML(o) : n.html || ""),
                    i.text.indexOf(o) === -1 && (i.text.push(o), i.type.push(u));
                  var a = n.className;
                  a
                    ? (i.className = a)
                    : u == "error"
                    ? (i.className = " ace_error")
                    : u == "warning" && i.className != " ace_error"
                    ? (i.className = " ace_warning")
                    : u == "info" && !i.className && (i.className = " ace_info");
                }
              }),
              (e.prototype.$updateAnnotations = function (e) {
                if (!this.$annotations.length) return;
                var t = e.start.row,
                  n = e.end.row - t;
                if (n !== 0)
                  if (e.action == "remove")
                    this.$annotations.splice(t, n + 1, null);
                  else {
                    var r = new Array(n + 1);
                    r.unshift(t, 1),
                      this.$annotations.splice.apply(this.$annotations, r);
                  }
              }),
              (e.prototype.update = function (e) {
                this.config = e;
                var t = this.session,
                  n = e.firstRow,
                  r = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1);
                (this.oldLastRow = r),
                  (this.config = e),
                  this.$lines.moveContainer(e),
                  this.$updateCursorRow();
                var i = t.getNextFoldLine(n),
                  s = i ? i.start.row : Infinity,
                  o = null,
                  u = -1,
                  a = n;
                for (;;) {
                  a > s &&
                    ((a = i.end.row + 1),
                    (i = t.getNextFoldLine(a, i)),
                    (s = i ? i.start.row : Infinity));
                  if (a > r) {
                    while (this.$lines.getLength() > u + 1) this.$lines.pop();
                    break;
                  }
                  (o = this.$lines.get(++u)),
                    o
                      ? (o.row = a)
                      : ((o = this.$lines.createCell(a, e, this.session, l)),
                        this.$lines.push(o)),
                    this.$renderCell(o, e, i, a),
                    a++;
                }
                this._signal("afterRender"), this.$updateGutterWidth(e);
              }),
              (e.prototype.$updateGutterWidth = function (e) {
                var t = this.session,
                  n = t.gutterRenderer || this.$renderer,
                  r = t.$firstLineNumber,
                  i = this.$lines.last() ? this.$lines.last().text : "";
                if (this.$fixedWidth || t.$useWrapMode) i = t.getLength() + r - 1;
                var s = n
                    ? n.getWidth(t, i, e)
                    : i.toString().length * e.characterWidth,
                  o = this.$padding || this.$computePadding();
                (s += o.left + o.right),
                  s !== this.gutterWidth &&
                    !isNaN(s) &&
                    ((this.gutterWidth = s),
                    (this.element.parentNode.style.width =
                      this.element.style.width =
                        Math.ceil(this.gutterWidth) + "px"),
                    this._signal("changeGutterWidth", s));
              }),
              (e.prototype.$updateCursorRow = function () {
                if (!this.$highlightGutterLine) return;
                var e = this.session.selection.getCursor();
                if (this.$cursorRow === e.row) return;
                this.$cursorRow = e.row;
              }),
              (e.prototype.updateLineHighlight = function () {
                if (!this.$highlightGutterLine) return;
                var e = this.session.selection.cursor.row;
                this.$cursorRow = e;
                if (this.$cursorCell && this.$cursorCell.row == e) return;
                this.$cursorCell &&
                  (this.$cursorCell.element.className =
                    this.$cursorCell.element.className.replace(
                      "ace_gutter-active-line ",
                      ""
                    ));
                var t = this.$lines.cells;
                this.$cursorCell = null;
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (r.row >= this.$cursorRow) {
                    if (r.row > this.$cursorRow) {
                      var i = this.session.getFoldLine(this.$cursorRow);
                      if (!(n > 0 && i && i.start.row == t[n - 1].row)) break;
                      r = t[n - 1];
                    }
                    (r.element.className =
                      "ace_gutter-active-line " + r.element.className),
                      (this.$cursorCell = r);
                    break;
                  }
                }
              }),
              (e.prototype.scrollLines = function (e) {
                var t = this.config;
                (this.config = e), this.$updateCursorRow();
                if (this.$lines.pageChanged(t, e)) return this.update(e);
                this.$lines.moveContainer(e);
                var n = Math.min(
                    e.lastRow + e.gutterOffset,
                    this.session.getLength() - 1
                  ),
                  r = this.oldLastRow;
                this.oldLastRow = n;
                if (!t || r < e.firstRow) return this.update(e);
                if (n < t.firstRow) return this.update(e);
                if (t.firstRow < e.firstRow)
                  for (
                    var i = this.session.getFoldedRowCount(
                      t.firstRow,
                      e.firstRow - 1
                    );
                    i > 0;
                    i--
                  )
                    this.$lines.shift();
                if (r > n)
                  for (
                    var i = this.session.getFoldedRowCount(n + 1, r);
                    i > 0;
                    i--
                  )
                    this.$lines.pop();
                e.firstRow < t.firstRow &&
                  this.$lines.unshift(
                    this.$renderLines(e, e.firstRow, t.firstRow - 1)
                  ),
                  n > r && this.$lines.push(this.$renderLines(e, r + 1, n)),
                  this.updateLineHighlight(),
                  this._signal("afterRender"),
                  this.$updateGutterWidth(e);
              }),
              (e.prototype.$renderLines = function (e, t, n) {
                var r = [],
                  i = t,
                  s = this.session.getNextFoldLine(i),
                  o = s ? s.start.row : Infinity;
                for (;;) {
                  i > o &&
                    ((i = s.end.row + 1),
                    (s = this.session.getNextFoldLine(i, s)),
                    (o = s ? s.start.row : Infinity));
                  if (i > n) break;
                  var u = this.$lines.createCell(i, e, this.session, l);
                  this.$renderCell(u, e, s, i), r.push(u), i++;
                }
                return r;
              }),
              (e.prototype.$renderCell = function (e, t, n, i) {
                var s = e.element,
                  o = this.session,
                  u = s.childNodes[0],
                  f = s.childNodes[1],
                  l = s.childNodes[2],
                  c = l.firstChild,
                  h = o.$firstLineNumber,
                  p = o.$breakpoints,
                  d = o.$decorations,
                  v = o.gutterRenderer || this.$renderer,
                  m = this.$showFoldWidgets && o.foldWidgets,
                  g = n ? n.start.row : Number.MAX_VALUE,
                  y = t.lineHeight + "px",
                  b = this.$useSvgGutterIcons
                    ? "ace_gutter-cell_svg-icons "
                    : "ace_gutter-cell ",
                  w = this.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon",
                  E = (v ? v.getText(o, i) : i + h).toString();
                this.$highlightGutterLine &&
                  (i == this.$cursorRow ||
                    (n &&
                      i < this.$cursorRow &&
                      i >= g &&
                      this.$cursorRow <= n.end.row)) &&
                  ((b += "ace_gutter-active-line "),
                  this.$cursorCell != e &&
                    (this.$cursorCell &&
                      (this.$cursorCell.element.className =
                        this.$cursorCell.element.className.replace(
                          "ace_gutter-active-line ",
                          ""
                        )),
                    (this.$cursorCell = e))),
                  p[i] && (b += p[i]),
                  d[i] && (b += d[i]),
                  this.$annotations[i] &&
                    i !== g &&
                    (b += this.$annotations[i].className);
                if (m) {
                  var S = m[i];
                  S == null && (S = m[i] = o.getFoldWidget(i));
                }
                if (S) {
                  var x = "ace_fold-widget ace_" + S,
                    T = S == "start" && i == g && i < n.end.row;
                  if (T) {
                    x += " ace_closed";
                    var N = "",
                      C = !1;
                    for (var k = i + 1; k <= n.end.row; k++) {
                      if (!this.$annotations[k]) continue;
                      if (this.$annotations[k].className === " ace_error") {
                        (C = !0), (N = " ace_error_fold");
                        break;
                      }
                      if (this.$annotations[k].className === " ace_warning") {
                        (C = !0), (N = " ace_warning_fold");
                        continue;
                      }
                    }
                    b += N;
                  } else x += " ace_open";
                  f.className != x && (f.className = x),
                    r.setStyle(f.style, "height", y),
                    r.setStyle(f.style, "display", "inline-block"),
                    f.setAttribute("role", "button"),
                    f.setAttribute("tabindex", "-1");
                  var L = o.getFoldWidgetRange(i);
                  L
                    ? f.setAttribute(
                        "aria-label",
                        a("Toggle code folding, rows $0 through $1", [
                          L.start.row + 1,
                          L.end.row + 1,
                        ])
                      )
                    : n
                    ? f.setAttribute(
                        "aria-label",
                        a("Toggle code folding, rows $0 through $1", [
                          n.start.row + 1,
                          n.end.row + 1,
                        ])
                      )
                    : f.setAttribute(
                        "aria-label",
                        a("Toggle code folding, row $0", [i + 1])
                      ),
                    T
                      ? (f.setAttribute("aria-expanded", "false"),
                        f.setAttribute("title", a("Unfold code")))
                      : (f.setAttribute("aria-expanded", "true"),
                        f.setAttribute("title", a("Fold code")));
                } else
                  f &&
                    (r.setStyle(f.style, "display", "none"),
                    f.setAttribute("tabindex", "0"),
                    f.removeAttribute("role"),
                    f.removeAttribute("aria-label"));
                return (
                  C && this.$showFoldedAnnotations
                    ? ((l.className = "ace_gutter_annotation"),
                      (c.className = w),
                      (c.className += N),
                      r.setStyle(c.style, "height", y),
                      r.setStyle(l.style, "display", "block"),
                      r.setStyle(l.style, "height", y),
                      l.setAttribute(
                        "aria-label",
                        a("Read annotations row $0", [E])
                      ),
                      l.setAttribute("tabindex", "-1"),
                      l.setAttribute("role", "button"))
                    : this.$annotations[i]
                    ? ((l.className = "ace_gutter_annotation"),
                      (c.className = w),
                      this.$useSvgGutterIcons
                        ? (c.className += this.$annotations[i].className)
                        : s.classList.add(
                            this.$annotations[i].className.replace(" ", "")
                          ),
                      r.setStyle(c.style, "height", y),
                      r.setStyle(l.style, "display", "block"),
                      r.setStyle(l.style, "height", y),
                      l.setAttribute(
                        "aria-label",
                        a("Read annotations row $0", [E])
                      ),
                      l.setAttribute("tabindex", "-1"),
                      l.setAttribute("role", "button"))
                    : (r.setStyle(l.style, "display", "none"),
                      l.removeAttribute("aria-label"),
                      l.removeAttribute("role"),
                      l.setAttribute("tabindex", "0")),
                  E !== u.data && (u.data = E),
                  s.className != b && (s.className = b),
                  r.setStyle(
                    e.element.style,
                    "height",
                    this.$lines.computeLineHeight(i, t, o) + "px"
                  ),
                  r.setStyle(
                    e.element.style,
                    "top",
                    this.$lines.computeLineTop(i, t, o) + "px"
                  ),
                  (e.text = E),
                  l.style.display === "none" && f.style.display === "none"
                    ? e.element.setAttribute("aria-hidden", !0)
                    : e.element.setAttribute("aria-hidden", !1),
                  e
                );
              }),
              (e.prototype.setHighlightGutterLine = function (e) {
                this.$highlightGutterLine = e;
              }),
              (e.prototype.setShowLineNumbers = function (e) {
                this.$renderer = !e && {
                  getWidth: function () {
                    return 0;
                  },
                  getText: function () {
                    return "";
                  },
                };
              }),
              (e.prototype.getShowLineNumbers = function () {
                return this.$showLineNumbers;
              }),
              (e.prototype.setShowFoldWidgets = function (e) {
                e
                  ? r.addCssClass(this.element, "ace_folding-enabled")
                  : r.removeCssClass(this.element, "ace_folding-enabled"),
                  (this.$showFoldWidgets = e),
                  (this.$padding = null);
              }),
              (e.prototype.getShowFoldWidgets = function () {
                return this.$showFoldWidgets;
              }),
              (e.prototype.$computePadding = function () {
                if (!this.element.firstChild) return { left: 0, right: 0 };
                var e = r.computedStyle(this.element.firstChild);
                return (
                  (this.$padding = {}),
                  (this.$padding.left =
                    (parseInt(e.borderLeftWidth) || 0) +
                    (parseInt(e.paddingLeft) || 0) +
                    1),
                  (this.$padding.right =
                    (parseInt(e.borderRightWidth) || 0) +
                    (parseInt(e.paddingRight) || 0)),
                  this.$padding
                );
              }),
              (e.prototype.getRegion = function (e) {
                var t = this.$padding || this.$computePadding(),
                  n = this.element.getBoundingClientRect();
                if (e.x < t.left + n.left) return "markers";
                if (this.$showFoldWidgets && e.x > n.right - t.right)
                  return "foldWidgets";
              }),
              e
            );
          })();
        (f.prototype.$fixedWidth = !1),
          (f.prototype.$highlightGutterLine = !0),
          (f.prototype.$renderer = ""),
          (f.prototype.$showLineNumbers = !0),
          (f.prototype.$showFoldWidgets = !0),
          i.implement(f.prototype, o),
          (t.Gutter = f);
      }
    ),
    define(
      "ace/layer/marker",
      ["require", "exports", "module", "ace/range", "ace/lib/dom"],
      function (e, t, n) {
        "use strict";
        function o(e, t, n, r) {
          return (e ? 1 : 0) | (t ? 2 : 0) | (n ? 4 : 0) | (r ? 8 : 0);
        }
        var r = e("../range").Range,
          i = e("../lib/dom"),
          s = (function () {
            function e(e) {
              (this.element = i.createElement("div")),
                (this.element.className = "ace_layer ace_marker-layer"),
                e.appendChild(this.element);
            }
            return (
              (e.prototype.setPadding = function (e) {
                this.$padding = e;
              }),
              (e.prototype.setSession = function (e) {
                this.session = e;
              }),
              (e.prototype.setMarkers = function (e) {
                this.markers = e;
              }),
              (e.prototype.elt = function (e, t) {
                var n = this.i != -1 && this.element.childNodes[this.i];
                n
                  ? this.i++
                  : ((n = document.createElement("div")),
                    this.element.appendChild(n),
                    (this.i = -1)),
                  (n.style.cssText = t),
                  (n.className = e);
              }),
              (e.prototype.update = function (e) {
                if (!e) return;
                (this.config = e), (this.i = 0);
                var t;
                for (var n in this.markers) {
                  var r = this.markers[n];
                  if (!r.range) {
                    r.update(t, this, this.session, e);
                    continue;
                  }
                  var i = r.range.clipRows(e.firstRow, e.lastRow);
                  if (i.isEmpty()) continue;
                  i = i.toScreenRange(this.session);
                  if (r.renderer) {
                    var s = this.$getTop(i.start.row, e),
                      o = this.$padding + i.start.column * e.characterWidth;
                    r.renderer(t, i, o, s, e);
                  } else
                    r.type == "fullLine"
                      ? this.drawFullLineMarker(t, i, r.clazz, e)
                      : r.type == "screenLine"
                      ? this.drawScreenLineMarker(t, i, r.clazz, e)
                      : i.isMultiLine()
                      ? r.type == "text"
                        ? this.drawTextMarker(t, i, r.clazz, e)
                        : this.drawMultiLineMarker(t, i, r.clazz, e)
                      : this.drawSingleLineMarker(
                          t,
                          i,
                          r.clazz + " ace_start" + " ace_br15",
                          e
                        );
                }
                if (this.i != -1)
                  while (this.i < this.element.childElementCount)
                    this.element.removeChild(this.element.lastChild);
              }),
              (e.prototype.$getTop = function (e, t) {
                return (e - t.firstRowScreen) * t.lineHeight;
              }),
              (e.prototype.drawTextMarker = function (e, t, n, i, s) {
                var u = this.session,
                  a = t.start.row,
                  f = t.end.row,
                  l = a,
                  c = 0,
                  h = 0,
                  p = u.getScreenLastRowColumn(l),
                  d = new r(l, t.start.column, l, h);
                for (; l <= f; l++)
                  (d.start.row = d.end.row = l),
                    (d.start.column =
                      l == a ? t.start.column : u.getRowWrapIndent(l)),
                    (d.end.column = p),
                    (c = h),
                    (h = p),
                    (p =
                      l + 1 < f
                        ? u.getScreenLastRowColumn(l + 1)
                        : l == f
                        ? 0
                        : t.end.column),
                    this.drawSingleLineMarker(
                      e,
                      d,
                      n +
                        (l == a ? " ace_start" : "") +
                        " ace_br" +
                        o(
                          l == a || (l == a + 1 && t.start.column),
                          c < h,
                          h > p,
                          l == f
                        ),
                      i,
                      l == f ? 0 : 1,
                      s
                    );
              }),
              (e.prototype.drawMultiLineMarker = function (e, t, n, r, i) {
                var s = this.$padding,
                  o = r.lineHeight,
                  u = this.$getTop(t.start.row, r),
                  a = s + t.start.column * r.characterWidth;
                i = i || "";
                if (this.session.$bidiHandler.isBidiRow(t.start.row)) {
                  var f = t.clone();
                  (f.end.row = f.start.row),
                    (f.end.column = this.session.getLine(f.start.row).length),
                    this.drawBidiSingleLineMarker(
                      e,
                      f,
                      n + " ace_br1 ace_start",
                      r,
                      null,
                      i
                    );
                } else
                  this.elt(
                    n + " ace_br1 ace_start",
                    "height:" +
                      o +
                      "px;" +
                      "right:0;" +
                      "top:" +
                      u +
                      "px;left:" +
                      a +
                      "px;" +
                      (i || "")
                  );
                if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
                  var f = t.clone();
                  (f.start.row = f.end.row),
                    (f.start.column = 0),
                    this.drawBidiSingleLineMarker(
                      e,
                      f,
                      n + " ace_br12",
                      r,
                      null,
                      i
                    );
                } else {
                  u = this.$getTop(t.end.row, r);
                  var l = t.end.column * r.characterWidth;
                  this.elt(
                    n + " ace_br12",
                    "height:" +
                      o +
                      "px;" +
                      "width:" +
                      l +
                      "px;" +
                      "top:" +
                      u +
                      "px;" +
                      "left:" +
                      s +
                      "px;" +
                      (i || "")
                  );
                }
                o = (t.end.row - t.start.row - 1) * r.lineHeight;
                if (o <= 0) return;
                u = this.$getTop(t.start.row + 1, r);
                var c = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
                this.elt(
                  n + (c ? " ace_br" + c : ""),
                  "height:" +
                    o +
                    "px;" +
                    "right:0;" +
                    "top:" +
                    u +
                    "px;" +
                    "left:" +
                    s +
                    "px;" +
                    (i || "")
                );
              }),
              (e.prototype.drawSingleLineMarker = function (e, t, n, r, i, s) {
                if (this.session.$bidiHandler.isBidiRow(t.start.row))
                  return this.drawBidiSingleLineMarker(e, t, n, r, i, s);
                var o = r.lineHeight,
                  u =
                    (t.end.column + (i || 0) - t.start.column) * r.characterWidth,
                  a = this.$getTop(t.start.row, r),
                  f = this.$padding + t.start.column * r.characterWidth;
                this.elt(
                  n,
                  "height:" +
                    o +
                    "px;" +
                    "width:" +
                    u +
                    "px;" +
                    "top:" +
                    a +
                    "px;" +
                    "left:" +
                    f +
                    "px;" +
                    (s || "")
                );
              }),
              (e.prototype.drawBidiSingleLineMarker = function (
                e,
                t,
                n,
                r,
                i,
                s
              ) {
                var o = r.lineHeight,
                  u = this.$getTop(t.start.row, r),
                  a = this.$padding,
                  f = this.session.$bidiHandler.getSelections(
                    t.start.column,
                    t.end.column
                  );
                f.forEach(function (e) {
                  this.elt(
                    n,
                    "height:" +
                      o +
                      "px;" +
                      "width:" +
                      (e.width + (i || 0)) +
                      "px;" +
                      "top:" +
                      u +
                      "px;" +
                      "left:" +
                      (a + e.left) +
                      "px;" +
                      (s || "")
                  );
                }, this);
              }),
              (e.prototype.drawFullLineMarker = function (e, t, n, r, i) {
                var s = this.$getTop(t.start.row, r),
                  o = r.lineHeight;
                t.start.row != t.end.row && (o += this.$getTop(t.end.row, r) - s),
                  this.elt(
                    n,
                    "height:" +
                      o +
                      "px;" +
                      "top:" +
                      s +
                      "px;" +
                      "left:0;right:0;" +
                      (i || "")
                  );
              }),
              (e.prototype.drawScreenLineMarker = function (e, t, n, r, i) {
                var s = this.$getTop(t.start.row, r),
                  o = r.lineHeight;
                this.elt(
                  n,
                  "height:" +
                    o +
                    "px;" +
                    "top:" +
                    s +
                    "px;" +
                    "left:0;right:0;" +
                    (i || "")
                );
              }),
              e
            );
          })();
        (s.prototype.$padding = 0), (t.Marker = s);
      }
    ),
    define(
      "ace/layer/text",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/layer/lines",
        "ace/lib/event_emitter",
        "ace/config",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/oop"),
          i = e("../lib/dom"),
          s = e("../lib/lang"),
          o = e("./lines").Lines,
          u = e("../lib/event_emitter").EventEmitter,
          a = e("../config").nls,
          f = (function () {
            function e(e) {
              (this.dom = i),
                (this.element = this.dom.createElement("div")),
                (this.element.className = "ace_layer ace_text-layer"),
                e.appendChild(this.element),
                (this.$updateEolChar = this.$updateEolChar.bind(this)),
                (this.$lines = new o(this.element));
            }
            return (
              (e.prototype.$updateEolChar = function () {
                var e = this.session.doc,
                  t =
                    e.getNewLineCharacter() == "\n" &&
                    e.getNewLineMode() != "windows",
                  n = t ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
                if (this.EOL_CHAR != n) return (this.EOL_CHAR = n), !0;
              }),
              (e.prototype.setPadding = function (e) {
                (this.$padding = e),
                  (this.element.style.margin = "0 " + e + "px");
              }),
              (e.prototype.getLineHeight = function () {
                return this.$fontMetrics.$characterSize.height || 0;
              }),
              (e.prototype.getCharacterWidth = function () {
                return this.$fontMetrics.$characterSize.width || 0;
              }),
              (e.prototype.$setFontMetrics = function (e) {
                (this.$fontMetrics = e),
                  this.$fontMetrics.on(
                    "changeCharacterSize",
                    function (e) {
                      this._signal("changeCharacterSize", e);
                    }.bind(this)
                  ),
                  this.$pollSizeChanges();
              }),
              (e.prototype.checkForSizeChanges = function () {
                this.$fontMetrics.checkForSizeChanges();
              }),
              (e.prototype.$pollSizeChanges = function () {
                return (this.$pollSizeChangesTimer =
                  this.$fontMetrics.$pollSizeChanges());
              }),
              (e.prototype.setSession = function (e) {
                (this.session = e), e && this.$computeTabString();
              }),
              (e.prototype.setShowInvisibles = function (e) {
                return this.showInvisibles == e
                  ? !1
                  : ((this.showInvisibles = e),
                    typeof e == "string"
                      ? ((this.showSpaces = /tab/i.test(e)),
                        (this.showTabs = /space/i.test(e)),
                        (this.showEOL = /eol/i.test(e)))
                      : (this.showSpaces = this.showTabs = this.showEOL = e),
                    this.$computeTabString(),
                    !0);
              }),
              (e.prototype.setDisplayIndentGuides = function (e) {
                return this.displayIndentGuides == e
                  ? !1
                  : ((this.displayIndentGuides = e),
                    this.$computeTabString(),
                    !0);
              }),
              (e.prototype.setHighlightIndentGuides = function (e) {
                return this.$highlightIndentGuides === e
                  ? !1
                  : ((this.$highlightIndentGuides = e), e);
              }),
              (e.prototype.$computeTabString = function () {
                var e = this.session.getTabSize();
                this.tabSize = e;
                var t = (this.$tabStrings = [0]);
                for (var n = 1; n < e + 1; n++)
                  if (this.showTabs) {
                    var r = this.dom.createElement("span");
                    (r.className = "ace_invisible ace_invisible_tab"),
                      (r.textContent = s.stringRepeat(this.TAB_CHAR, n)),
                      t.push(r);
                  } else
                    t.push(
                      this.dom.createTextNode(
                        s.stringRepeat(" ", n),
                        this.element
                      )
                    );
                if (this.displayIndentGuides) {
                  this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                  var i = "ace_indent-guide",
                    o = this.showSpaces
                      ? " ace_invisible ace_invisible_space"
                      : "",
                    u = this.showSpaces
                      ? s.stringRepeat(this.SPACE_CHAR, this.tabSize)
                      : s.stringRepeat(" ", this.tabSize),
                    a = this.showTabs ? " ace_invisible ace_invisible_tab" : "",
                    f = this.showTabs
                      ? s.stringRepeat(this.TAB_CHAR, this.tabSize)
                      : u,
                    r = this.dom.createElement("span");
                  (r.className = i + o),
                    (r.textContent = u),
                    (this.$tabStrings[" "] = r);
                  var r = this.dom.createElement("span");
                  (r.className = i + a),
                    (r.textContent = f),
                    (this.$tabStrings["	"] = r);
                }
              }),
              (e.prototype.updateLines = function (e, t, n) {
                if (
                  this.config.lastRow != e.lastRow ||
                  this.config.firstRow != e.firstRow
                )
                  return this.update(e);
                this.config = e;
                var r = Math.max(t, e.firstRow),
                  i = Math.min(n, e.lastRow),
                  s = this.element.childNodes,
                  o = 0;
                for (var u = e.firstRow; u < r; u++) {
                  var a = this.session.getFoldLine(u);
                  if (a) {
                    if (a.containsRow(r)) {
                      r = a.start.row;
                      break;
                    }
                    u = a.end.row;
                  }
                  o++;
                }
                var f = !1,
                  u = r,
                  a = this.session.getNextFoldLine(u),
                  l = a ? a.start.row : Infinity;
                for (;;) {
                  u > l &&
                    ((u = a.end.row + 1),
                    (a = this.session.getNextFoldLine(u, a)),
                    (l = a ? a.start.row : Infinity));
                  if (u > i) break;
                  var c = s[o++];
                  if (c) {
                    this.dom.removeChildren(c),
                      this.$renderLine(c, u, u == l ? a : !1),
                      f &&
                        (c.style.top =
                          this.$lines.computeLineTop(u, e, this.session) + "px");
                    var h = e.lineHeight * this.session.getRowLength(u) + "px";
                    c.style.height != h && ((f = !0), (c.style.height = h));
                  }
                  u++;
                }
                if (f)
                  while (o < this.$lines.cells.length) {
                    var p = this.$lines.cells[o++];
                    p.element.style.top =
                      this.$lines.computeLineTop(p.row, e, this.session) + "px";
                  }
              }),
              (e.prototype.scrollLines = function (e) {
                var t = this.config;
                this.config = e;
                if (this.$lines.pageChanged(t, e)) return this.update(e);
                this.$lines.moveContainer(e);
                var n = e.lastRow,
                  r = t ? t.lastRow : -1;
                if (!t || r < e.firstRow) return this.update(e);
                if (n < t.firstRow) return this.update(e);
                if (!t || t.lastRow < e.firstRow) return this.update(e);
                if (e.lastRow < t.firstRow) return this.update(e);
                if (t.firstRow < e.firstRow)
                  for (
                    var i = this.session.getFoldedRowCount(
                      t.firstRow,
                      e.firstRow - 1
                    );
                    i > 0;
                    i--
                  )
                    this.$lines.shift();
                if (t.lastRow > e.lastRow)
                  for (
                    var i = this.session.getFoldedRowCount(
                      e.lastRow + 1,
                      t.lastRow
                    );
                    i > 0;
                    i--
                  )
                    this.$lines.pop();
                e.firstRow < t.firstRow &&
                  this.$lines.unshift(
                    this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1)
                  ),
                  e.lastRow > t.lastRow &&
                    this.$lines.push(
                      this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow)
                    ),
                  this.$highlightIndentGuide();
              }),
              (e.prototype.$renderLinesFragment = function (e, t, n) {
                var r = [],
                  s = t,
                  o = this.session.getNextFoldLine(s),
                  u = o ? o.start.row : Infinity;
                for (;;) {
                  s > u &&
                    ((s = o.end.row + 1),
                    (o = this.session.getNextFoldLine(s, o)),
                    (u = o ? o.start.row : Infinity));
                  if (s > n) break;
                  var a = this.$lines.createCell(s, e, this.session),
                    f = a.element;
                  this.dom.removeChildren(f),
                    i.setStyle(
                      f.style,
                      "height",
                      this.$lines.computeLineHeight(s, e, this.session) + "px"
                    ),
                    i.setStyle(
                      f.style,
                      "top",
                      this.$lines.computeLineTop(s, e, this.session) + "px"
                    ),
                    this.$renderLine(f, s, s == u ? o : !1),
                    this.$useLineGroups()
                      ? (f.className = "ace_line_group")
                      : (f.className = "ace_line"),
                    r.push(a),
                    s++;
                }
                return r;
              }),
              (e.prototype.update = function (e) {
                this.$lines.moveContainer(e), (this.config = e);
                var t = e.firstRow,
                  n = e.lastRow,
                  r = this.$lines;
                while (r.getLength()) r.pop();
                r.push(this.$renderLinesFragment(e, t, n));
              }),
              (e.prototype.$renderToken = function (e, t, n, r) {
                var i = this,
                  o =
                    /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,
                  u = this.dom.createFragment(this.element),
                  f,
                  l = 0;
                while ((f = o.exec(r))) {
                  var c = f[1],
                    h = f[2],
                    p = f[3],
                    d = f[4],
                    v = f[5];
                  if (!i.showSpaces && h) continue;
                  var m = l != f.index ? r.slice(l, f.index) : "";
                  (l = f.index + f[0].length),
                    m && u.appendChild(this.dom.createTextNode(m, this.element));
                  if (c) {
                    var g = i.session.getScreenTabSize(t + f.index);
                    u.appendChild(i.$tabStrings[g].cloneNode(!0)), (t += g - 1);
                  } else if (h)
                    if (i.showSpaces) {
                      var y = this.dom.createElement("span");
                      (y.className = "ace_invisible ace_invisible_space"),
                        (y.textContent = s.stringRepeat(i.SPACE_CHAR, h.length)),
                        u.appendChild(y);
                    } else
                      u.appendChild(this.com.createTextNode(h, this.element));
                  else if (p) {
                    var y = this.dom.createElement("span");
                    (y.className =
                      "ace_invisible ace_invisible_space ace_invalid"),
                      (y.textContent = s.stringRepeat(i.SPACE_CHAR, p.length)),
                      u.appendChild(y);
                  } else if (d) {
                    t += 1;
                    var y = this.dom.createElement("span");
                    (y.style.width = i.config.characterWidth * 2 + "px"),
                      (y.className = i.showSpaces
                        ? "ace_cjk ace_invisible ace_invisible_space"
                        : "ace_cjk"),
                      (y.textContent = i.showSpaces ? i.SPACE_CHAR : d),
                      u.appendChild(y);
                  } else if (v) {
                    t += 1;
                    var y = this.dom.createElement("span");
                    (y.style.width = i.config.characterWidth * 2 + "px"),
                      (y.className = "ace_cjk"),
                      (y.textContent = v),
                      u.appendChild(y);
                  }
                }
                u.appendChild(
                  this.dom.createTextNode(l ? r.slice(l) : r, this.element)
                );
                if (!this.$textToken[n.type]) {
                  var b = "ace_" + n.type.replace(/\./g, " ace_"),
                    y = this.dom.createElement("span");
                  n.type == "fold" &&
                    ((y.style.width =
                      n.value.length * this.config.characterWidth + "px"),
                    y.setAttribute("title", a("Unfold code"))),
                    (y.className = b),
                    y.appendChild(u),
                    e.appendChild(y);
                } else e.appendChild(u);
                return t + r.length;
              }),
              (e.prototype.renderIndentGuide = function (e, t, n) {
                var r = t.search(this.$indentGuideRe);
                if (r <= 0 || r >= n) return t;
                if (t[0] == " ") {
                  r -= r % this.tabSize;
                  var i = r / this.tabSize;
                  for (var s = 0; s < i; s++)
                    e.appendChild(this.$tabStrings[" "].cloneNode(!0));
                  return this.$highlightIndentGuide(), t.substr(r);
                }
                if (t[0] == "	") {
                  for (var s = 0; s < r; s++)
                    e.appendChild(this.$tabStrings["	"].cloneNode(!0));
                  return this.$highlightIndentGuide(), t.substr(r);
                }
                return this.$highlightIndentGuide(), t;
              }),
              (e.prototype.$highlightIndentGuide = function () {
                if (!this.$highlightIndentGuides || !this.displayIndentGuides)
                  return;
                this.$highlightIndentGuideMarker = {
                  indentLevel: undefined,
                  start: undefined,
                  end: undefined,
                  dir: undefined,
                };
                var e = this.session.doc.$lines;
                if (!e) return;
                var t = this.session.selection.getCursor(),
                  n = /^\s*/.exec(this.session.doc.getLine(t.row))[0].length,
                  r = Math.floor(n / this.tabSize);
                this.$highlightIndentGuideMarker = {
                  indentLevel: r,
                  start: t.row,
                };
                var i = this.session.$bracketHighlight;
                if (i) {
                  var s = this.session.$bracketHighlight.ranges;
                  for (var o = 0; o < s.length; o++)
                    if (t.row !== s[o].start.row) {
                      (this.$highlightIndentGuideMarker.end = s[o].start.row),
                        t.row > s[o].start.row
                          ? (this.$highlightIndentGuideMarker.dir = -1)
                          : (this.$highlightIndentGuideMarker.dir = 1);
                      break;
                    }
                }
                if (
                  !this.$highlightIndentGuideMarker.end &&
                  e[t.row] !== "" &&
                  t.column === e[t.row].length
                ) {
                  this.$highlightIndentGuideMarker.dir = 1;
                  for (var o = t.row + 1; o < e.length; o++) {
                    var u = e[o],
                      a = /^\s*/.exec(u)[0].length;
                    if (u !== "") {
                      this.$highlightIndentGuideMarker.end = o;
                      if (a <= n) break;
                    }
                  }
                }
                this.$renderHighlightIndentGuide();
              }),
              (e.prototype.$clearActiveIndentGuide = function () {
                var e = this.$lines.cells;
                for (var t = 0; t < e.length; t++) {
                  var n = e[t],
                    r = n.element.childNodes;
                  if (r.length > 0)
                    for (var i = 0; i < r.length; i++)
                      if (
                        r[i].classList &&
                        r[i].classList.contains("ace_indent-guide-active")
                      ) {
                        r[i].classList.remove("ace_indent-guide-active");
                        break;
                      }
                }
              }),
              (e.prototype.$setIndentGuideActive = function (e, t) {
                var n = this.session.doc.getLine(e.row);
                if (n !== "") {
                  var r = e.element.childNodes;
                  if (r) {
                    var i = r[t - 1];
                    i &&
                      i.classList &&
                      i.classList.contains("ace_indent-guide") &&
                      i.classList.add("ace_indent-guide-active");
                  }
                }
              }),
              (e.prototype.$renderHighlightIndentGuide = function () {
                if (!this.$lines) return;
                var e = this.$lines.cells;
                this.$clearActiveIndentGuide();
                var t = this.$highlightIndentGuideMarker.indentLevel;
                if (t !== 0)
                  if (this.$highlightIndentGuideMarker.dir === 1)
                    for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      if (
                        this.$highlightIndentGuideMarker.end &&
                        r.row >= this.$highlightIndentGuideMarker.start + 1
                      ) {
                        if (r.row >= this.$highlightIndentGuideMarker.end) break;
                        this.$setIndentGuideActive(r, t);
                      }
                    }
                  else
                    for (var n = e.length - 1; n >= 0; n--) {
                      var r = e[n];
                      if (
                        this.$highlightIndentGuideMarker.end &&
                        r.row < this.$highlightIndentGuideMarker.start
                      ) {
                        if (r.row <= this.$highlightIndentGuideMarker.end) break;
                        this.$setIndentGuideActive(r, t);
                      }
                    }
              }),
              (e.prototype.$createLineElement = function (e) {
                var t = this.dom.createElement("div");
                return (
                  (t.className = "ace_line"),
                  (t.style.height = this.config.lineHeight + "px"),
                  t
                );
              }),
              (e.prototype.$renderWrappedLine = function (e, t, n) {
                var r = 0,
                  i = 0,
                  o = n[0],
                  u = 0,
                  a = this.$createLineElement();
                e.appendChild(a);
                for (var f = 0; f < t.length; f++) {
                  var l = t[f],
                    c = l.value;
                  if (f == 0 && this.displayIndentGuides) {
                    (r = c.length), (c = this.renderIndentGuide(a, c, o));
                    if (!c) continue;
                    r -= c.length;
                  }
                  if (r + c.length < o)
                    (u = this.$renderToken(a, u, l, c)), (r += c.length);
                  else {
                    while (r + c.length >= o)
                      (u = this.$renderToken(a, u, l, c.substring(0, o - r))),
                        (c = c.substring(o - r)),
                        (r = o),
                        (a = this.$createLineElement()),
                        e.appendChild(a),
                        a.appendChild(
                          this.dom.createTextNode(
                            s.stringRepeat("\u00a0", n.indent),
                            this.element
                          )
                        ),
                        i++,
                        (u = 0),
                        (o = n[i] || Number.MAX_VALUE);
                    c.length != 0 &&
                      ((r += c.length), (u = this.$renderToken(a, u, l, c)));
                  }
                }
                n[n.length - 1] > this.MAX_LINE_LENGTH &&
                  this.$renderOverflowMessage(a, u, null, "", !0);
              }),
              (e.prototype.$renderSimpleLine = function (e, t) {
                var n = 0;
                for (var r = 0; r < t.length; r++) {
                  var i = t[r],
                    s = i.value;
                  if (r == 0 && this.displayIndentGuides) {
                    s = this.renderIndentGuide(e, s);
                    if (!s) continue;
                  }
                  if (n + s.length > this.MAX_LINE_LENGTH)
                    return this.$renderOverflowMessage(e, n, i, s);
                  n = this.$renderToken(e, n, i, s);
                }
              }),
              (e.prototype.$renderOverflowMessage = function (e, t, n, r, i) {
                n &&
                  this.$renderToken(
                    e,
                    t,
                    n,
                    r.slice(0, this.MAX_LINE_LENGTH - t)
                  );
                var s = this.dom.createElement("span");
                (s.className = "ace_inline_button ace_keyword ace_toggle_wrap"),
                  (s.textContent = i ? "<hide>" : "<click to see more...>"),
                  e.appendChild(s);
              }),
              (e.prototype.$renderLine = function (e, t, n) {
                !n && n != 0 && (n = this.session.getFoldLine(t));
                if (n) var r = this.$getFoldLineTokens(t, n);
                else var r = this.session.getTokens(t);
                var i = e;
                if (r.length) {
                  var s = this.session.getRowSplitData(t);
                  if (s && s.length) {
                    this.$renderWrappedLine(e, r, s);
                    var i = e.lastChild;
                  } else {
                    var i = e;
                    this.$useLineGroups() &&
                      ((i = this.$createLineElement()), e.appendChild(i)),
                      this.$renderSimpleLine(i, r);
                  }
                } else
                  this.$useLineGroups() &&
                    ((i = this.$createLineElement()), e.appendChild(i));
                if (this.showEOL && i) {
                  n && (t = n.end.row);
                  var o = this.dom.createElement("span");
                  (o.className = "ace_invisible ace_invisible_eol"),
                    (o.textContent =
                      t == this.session.getLength() - 1
                        ? this.EOF_CHAR
                        : this.EOL_CHAR),
                    i.appendChild(o);
                }
              }),
              (e.prototype.$getFoldLineTokens = function (e, t) {
                function i(e, t, n) {
                  var i = 0,
                    s = 0;
                  while (s + e[i].value.length < t) {
                    (s += e[i].value.length), i++;
                    if (i == e.length) return;
                  }
                  if (s != t) {
                    var o = e[i].value.substring(t - s);
                    o.length > n - t && (o = o.substring(0, n - t)),
                      r.push({ type: e[i].type, value: o }),
                      (s = t + o.length),
                      (i += 1);
                  }
                  while (s < n && i < e.length) {
                    var o = e[i].value;
                    o.length + s > n
                      ? r.push({ type: e[i].type, value: o.substring(0, n - s) })
                      : r.push(e[i]),
                      (s += o.length),
                      (i += 1);
                  }
                }
                var n = this.session,
                  r = [],
                  s = n.getTokens(e);
                return (
                  t.walk(
                    function (e, t, o, u, a) {
                      e != null
                        ? r.push({ type: "fold", value: e })
                        : (a && (s = n.getTokens(t)), s.length && i(s, u, o));
                    },
                    t.end.row,
                    this.session.getLine(t.end.row).length
                  ),
                  r
                );
              }),
              (e.prototype.$useLineGroups = function () {
                return this.session.getUseWrapMode();
              }),
              e
            );
          })();
        (f.prototype.$textToken = { text: !0, rparen: !0, lparen: !0 }),
          (f.prototype.EOF_CHAR = "\u00b6"),
          (f.prototype.EOL_CHAR_LF = "\u00ac"),
          (f.prototype.EOL_CHAR_CRLF = "\u00a4"),
          (f.prototype.EOL_CHAR = f.prototype.EOL_CHAR_LF),
          (f.prototype.TAB_CHAR = "\u2014"),
          (f.prototype.SPACE_CHAR = "\u00b7"),
          (f.prototype.$padding = 0),
          (f.prototype.MAX_LINE_LENGTH = 1e4),
          (f.prototype.showInvisibles = !1),
          (f.prototype.showSpaces = !1),
          (f.prototype.showTabs = !1),
          (f.prototype.showEOL = !1),
          (f.prototype.displayIndentGuides = !0),
          (f.prototype.$highlightIndentGuides = !0),
          (f.prototype.$tabStrings = []),
          (f.prototype.destroy = {}),
          (f.prototype.onChangeTabSize = f.prototype.$computeTabString),
          r.implement(f.prototype, u),
          (t.Text = f);
      }
    ),
    define(
      "ace/layer/cursor",
      ["require", "exports", "module", "ace/lib/dom"],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/dom"),
          i = (function () {
            function e(e) {
              (this.element = r.createElement("div")),
                (this.element.className = "ace_layer ace_cursor-layer"),
                e.appendChild(this.element),
                (this.isVisible = !1),
                (this.isBlinking = !0),
                (this.blinkInterval = 1e3),
                (this.smoothBlinking = !1),
                (this.cursors = []),
                (this.cursor = this.addCursor()),
                r.addCssClass(this.element, "ace_hidden-cursors"),
                (this.$updateCursors = this.$updateOpacity.bind(this));
            }
            return (
              (e.prototype.$updateOpacity = function (e) {
                var t = this.cursors;
                for (var n = t.length; n--; )
                  r.setStyle(t[n].style, "opacity", e ? "" : "0");
              }),
              (e.prototype.$startCssAnimation = function () {
                var e = this.cursors;
                for (var t = e.length; t--; )
                  e[t].style.animationDuration = this.blinkInterval + "ms";
                (this.$isAnimating = !0),
                  setTimeout(
                    function () {
                      this.$isAnimating &&
                        r.addCssClass(this.element, "ace_animate-blinking");
                    }.bind(this)
                  );
              }),
              (e.prototype.$stopCssAnimation = function () {
                (this.$isAnimating = !1),
                  r.removeCssClass(this.element, "ace_animate-blinking");
              }),
              (e.prototype.setPadding = function (e) {
                this.$padding = e;
              }),
              (e.prototype.setSession = function (e) {
                this.session = e;
              }),
              (e.prototype.setBlinking = function (e) {
                e != this.isBlinking &&
                  ((this.isBlinking = e), this.restartTimer());
              }),
              (e.prototype.setBlinkInterval = function (e) {
                e != this.blinkInterval &&
                  ((this.blinkInterval = e), this.restartTimer());
              }),
              (e.prototype.setSmoothBlinking = function (e) {
                e != this.smoothBlinking &&
                  ((this.smoothBlinking = e),
                  r.setCssClass(this.element, "ace_smooth-blinking", e),
                  this.$updateCursors(!0),
                  this.restartTimer());
              }),
              (e.prototype.addCursor = function () {
                var e = r.createElement("div");
                return (
                  (e.className = "ace_cursor"),
                  this.element.appendChild(e),
                  this.cursors.push(e),
                  e
                );
              }),
              (e.prototype.removeCursor = function () {
                if (this.cursors.length > 1) {
                  var e = this.cursors.pop();
                  return e.parentNode.removeChild(e), e;
                }
              }),
              (e.prototype.hideCursor = function () {
                (this.isVisible = !1),
                  r.addCssClass(this.element, "ace_hidden-cursors"),
                  this.restartTimer();
              }),
              (e.prototype.showCursor = function () {
                (this.isVisible = !0),
                  r.removeCssClass(this.element, "ace_hidden-cursors"),
                  this.restartTimer();
              }),
              (e.prototype.restartTimer = function () {
                var e = this.$updateCursors;
                clearInterval(this.intervalId),
                  clearTimeout(this.timeoutId),
                  this.$stopCssAnimation(),
                  this.smoothBlinking &&
                    ((this.$isSmoothBlinking = !1),
                    r.removeCssClass(this.element, "ace_smooth-blinking")),
                  e(!0);
                if (!this.isBlinking || !this.blinkInterval || !this.isVisible) {
                  this.$stopCssAnimation();
                  return;
                }
                this.smoothBlinking &&
                  ((this.$isSmoothBlinking = !0),
                  setTimeout(
                    function () {
                      this.$isSmoothBlinking &&
                        r.addCssClass(this.element, "ace_smooth-blinking");
                    }.bind(this)
                  ));
                if (r.HAS_CSS_ANIMATION) this.$startCssAnimation();
                else {
                  var t = function () {
                    this.timeoutId = setTimeout(function () {
                      e(!1);
                    }, 0.6 * this.blinkInterval);
                  }.bind(this);
                  (this.intervalId = setInterval(function () {
                    e(!0), t();
                  }, this.blinkInterval)),
                    t();
                }
              }),
              (e.prototype.getPixelPosition = function (e, t) {
                if (!this.config || !this.session) return { left: 0, top: 0 };
                e || (e = this.session.selection.getCursor());
                var n = this.session.documentToScreenPosition(e),
                  r =
                    this.$padding +
                    (this.session.$bidiHandler.isBidiRow(n.row, e.row)
                      ? this.session.$bidiHandler.getPosLeft(n.column)
                      : n.column * this.config.characterWidth),
                  i =
                    (n.row - (t ? this.config.firstRowScreen : 0)) *
                    this.config.lineHeight;
                return { left: r, top: i };
              }),
              (e.prototype.isCursorInView = function (e, t) {
                return e.top >= 0 && e.top < t.maxHeight;
              }),
              (e.prototype.update = function (e) {
                this.config = e;
                var t = this.session.$selectionMarkers,
                  n = 0,
                  i = 0;
                if (t === undefined || t.length === 0) t = [{ cursor: null }];
                for (var n = 0, s = t.length; n < s; n++) {
                  var o = this.getPixelPosition(t[n].cursor, !0);
                  if ((o.top > e.height + e.offset || o.top < 0) && n > 1)
                    continue;
                  var u = this.cursors[i++] || this.addCursor(),
                    a = u.style;
                  this.drawCursor
                    ? this.drawCursor(u, o, e, t[n], this.session)
                    : this.isCursorInView(o, e)
                    ? (r.setStyle(a, "display", "block"),
                      r.translate(u, o.left, o.top),
                      r.setStyle(a, "width", Math.round(e.characterWidth) + "px"),
                      r.setStyle(a, "height", e.lineHeight + "px"))
                    : r.setStyle(a, "display", "none");
                }
                while (this.cursors.length > i) this.removeCursor();
                var f = this.session.getOverwrite();
                this.$setOverwrite(f), (this.$pixelPos = o), this.restartTimer();
              }),
              (e.prototype.$setOverwrite = function (e) {
                e != this.overwrite &&
                  ((this.overwrite = e),
                  e
                    ? r.addCssClass(this.element, "ace_overwrite-cursors")
                    : r.removeCssClass(this.element, "ace_overwrite-cursors"));
              }),
              (e.prototype.destroy = function () {
                clearInterval(this.intervalId), clearTimeout(this.timeoutId);
              }),
              e
            );
          })();
        (i.prototype.$padding = 0),
          (i.prototype.drawCursor = null),
          (t.Cursor = i);
      }
    ),
    define(
      "ace/scrollbar",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/event",
        "ace/lib/event_emitter",
      ],
      function (e, t, n) {
        "use strict";
        var r =
            (this && this.__extends) ||
            (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                if (typeof n != "function" && n !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(n) +
                      " is not a constructor or null"
                  );
                e(t, n),
                  (t.prototype =
                    n === null
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          i = e("./lib/oop"),
          s = e("./lib/dom"),
          o = e("./lib/event"),
          u = e("./lib/event_emitter").EventEmitter,
          a = 32768,
          f = (function () {
            function e(e, t) {
              (this.element = s.createElement("div")),
                (this.element.className = "ace_scrollbar ace_scrollbar" + t),
                (this.inner = s.createElement("div")),
                (this.inner.className = "ace_scrollbar-inner"),
                (this.inner.textContent = "\u00a0"),
                this.element.appendChild(this.inner),
                e.appendChild(this.element),
                this.setVisible(!1),
                (this.skipEvent = !1),
                o.addListener(this.element, "scroll", this.onScroll.bind(this)),
                o.addListener(this.element, "mousedown", o.preventDefault);
            }
            return (
              (e.prototype.setVisible = function (e) {
                (this.element.style.display = e ? "" : "none"),
                  (this.isVisible = e),
                  (this.coeff = 1);
              }),
              e
            );
          })();
        i.implement(f.prototype, u);
        var l = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, "-v") || this;
            return (
              (r.scrollTop = 0),
              (r.scrollHeight = 0),
              (n.$scrollbarWidth = r.width = s.scrollbarWidth(t.ownerDocument)),
              (r.inner.style.width = r.element.style.width =
                (r.width || 15) + 5 + "px"),
              (r.$minWidth = 0),
              r
            );
          }
          return (
            r(t, e),
            (t.prototype.onScroll = function () {
              if (!this.skipEvent) {
                this.scrollTop = this.element.scrollTop;
                if (this.coeff != 1) {
                  var e = this.element.clientHeight / this.scrollHeight;
                  this.scrollTop = (this.scrollTop * (1 - e)) / (this.coeff - e);
                }
                this._emit("scroll", { data: this.scrollTop });
              }
              this.skipEvent = !1;
            }),
            (t.prototype.getWidth = function () {
              return Math.max(
                this.isVisible ? this.width : 0,
                this.$minWidth || 0
              );
            }),
            (t.prototype.setHeight = function (e) {
              this.element.style.height = e + "px";
            }),
            (t.prototype.setScrollHeight = function (e) {
              (this.scrollHeight = e),
                e > a
                  ? ((this.coeff = a / e), (e = a))
                  : this.coeff != 1 && (this.coeff = 1),
                (this.inner.style.height = e + "px");
            }),
            (t.prototype.setScrollTop = function (e) {
              this.scrollTop != e &&
                ((this.skipEvent = !0),
                (this.scrollTop = e),
                (this.element.scrollTop = e * this.coeff));
            }),
            t
          );
        })(f);
        l.prototype.setInnerHeight = l.prototype.setScrollHeight;
        var c = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, "-h") || this;
            return (
              (r.scrollLeft = 0),
              (r.height = n.$scrollbarWidth),
              (r.inner.style.height = r.element.style.height =
                (r.height || 15) + 5 + "px"),
              r
            );
          }
          return (
            r(t, e),
            (t.prototype.onScroll = function () {
              this.skipEvent ||
                ((this.scrollLeft = this.element.scrollLeft),
                this._emit("scroll", { data: this.scrollLeft })),
                (this.skipEvent = !1);
            }),
            (t.prototype.getHeight = function () {
              return this.isVisible ? this.height : 0;
            }),
            (t.prototype.setWidth = function (e) {
              this.element.style.width = e + "px";
            }),
            (t.prototype.setInnerWidth = function (e) {
              this.inner.style.width = e + "px";
            }),
            (t.prototype.setScrollWidth = function (e) {
              this.inner.style.width = e + "px";
            }),
            (t.prototype.setScrollLeft = function (e) {
              this.scrollLeft != e &&
                ((this.skipEvent = !0),
                (this.scrollLeft = this.element.scrollLeft = e));
            }),
            t
          );
        })(f);
        (t.ScrollBar = l),
          (t.ScrollBarV = l),
          (t.ScrollBarH = c),
          (t.VScrollBar = l),
          (t.HScrollBar = c);
      }
    ),
    define(
      "ace/scrollbar_custom",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/event",
        "ace/lib/event_emitter",
      ],
      function (e, t, n) {
        "use strict";
        var r =
            (this && this.__extends) ||
            (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                if (typeof n != "function" && n !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(n) +
                      " is not a constructor or null"
                  );
                e(t, n),
                  (t.prototype =
                    n === null
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          i = e("./lib/oop"),
          s = e("./lib/dom"),
          o = e("./lib/event"),
          u = e("./lib/event_emitter").EventEmitter;
        s.importCssString(
          ".ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{\n  position: absolute;\n  background: rgba(128, 128, 128, 0.6);\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n  z-index: 8;\n}\n.ace_editor>.ace_sb-v, .ace_editor>.ace_sb-h {\n  position: absolute;\n  z-index: 6;\n  background: none;\n  overflow: hidden!important;\n}\n.ace_editor>.ace_sb-v {\n  z-index: 6;\n  right: 0;\n  top: 0;\n  width: 12px;\n}\n.ace_editor>.ace_sb-v div {\n  z-index: 8;\n  right: 0;\n  width: 100%;\n}\n.ace_editor>.ace_sb-h {\n  bottom: 0;\n  left: 0;\n  height: 12px;\n}\n.ace_editor>.ace_sb-h div {\n  bottom: 0;\n  height: 100%;\n}\n.ace_editor>.ace_sb_grabbed {\n  z-index: 8;\n  background: #000;\n}",
          "ace_scrollbar.css",
          !1
        );
        var a = (function () {
          function e(e, t) {
            (this.element = s.createElement("div")),
              (this.element.className = "ace_sb" + t),
              (this.inner = s.createElement("div")),
              (this.inner.className = ""),
              this.element.appendChild(this.inner),
              (this.VScrollWidth = 12),
              (this.HScrollHeight = 12),
              e.appendChild(this.element),
              this.setVisible(!1),
              (this.skipEvent = !1),
              o.addMultiMouseDownListener(
                this.element,
                [500, 300, 300],
                this,
                "onMouseDown"
              );
          }
          return (
            (e.prototype.setVisible = function (e) {
              (this.element.style.display = e ? "" : "none"),
                (this.isVisible = e),
                (this.coeff = 1);
            }),
            e
          );
        })();
        i.implement(a.prototype, u);
        var f = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, "-v") || this;
            return (
              (r.scrollTop = 0),
              (r.scrollHeight = 0),
              (r.parent = t),
              (r.width = r.VScrollWidth),
              (r.renderer = n),
              (r.inner.style.width = r.element.style.width =
                (r.width || 15) + "px"),
              (r.$minWidth = 0),
              r
            );
          }
          return (
            r(t, e),
            (t.prototype.onMouseDown = function (e, t) {
              if (e !== "mousedown") return;
              if (o.getButton(t) !== 0 || t.detail === 2) return;
              if (t.target === this.inner) {
                var n = this,
                  r = t.clientY,
                  i = function (e) {
                    r = e.clientY;
                  },
                  s = function () {
                    clearInterval(l);
                  },
                  u = t.clientY,
                  a = this.thumbTop,
                  f = function () {
                    if (r === undefined) return;
                    var e = n.scrollTopFromThumbTop(a + r - u);
                    if (e === n.scrollTop) return;
                    n._emit("scroll", { data: e });
                  };
                o.capture(this.inner, i, s);
                var l = setInterval(f, 20);
                return o.preventDefault(t);
              }
              var c =
                t.clientY -
                this.element.getBoundingClientRect().top -
                this.thumbHeight / 2;
              return (
                this._emit("scroll", { data: this.scrollTopFromThumbTop(c) }),
                o.preventDefault(t)
              );
            }),
            (t.prototype.getHeight = function () {
              return this.height;
            }),
            (t.prototype.scrollTopFromThumbTop = function (e) {
              var t =
                (e * (this.pageHeight - this.viewHeight)) /
                (this.slideHeight - this.thumbHeight);
              return (
                (t >>= 0),
                t < 0
                  ? (t = 0)
                  : t > this.pageHeight - this.viewHeight &&
                    (t = this.pageHeight - this.viewHeight),
                t
              );
            }),
            (t.prototype.getWidth = function () {
              return Math.max(
                this.isVisible ? this.width : 0,
                this.$minWidth || 0
              );
            }),
            (t.prototype.setHeight = function (e) {
              (this.height = Math.max(0, e)),
                (this.slideHeight = this.height),
                (this.viewHeight = this.height),
                this.setScrollHeight(this.pageHeight, !0);
            }),
            (t.prototype.setScrollHeight = function (e, t) {
              if (this.pageHeight === e && !t) return;
              (this.pageHeight = e),
                (this.thumbHeight =
                  (this.slideHeight * this.viewHeight) / this.pageHeight),
                this.thumbHeight > this.slideHeight &&
                  (this.thumbHeight = this.slideHeight),
                this.thumbHeight < 15 && (this.thumbHeight = 15),
                (this.inner.style.height = this.thumbHeight + "px"),
                this.scrollTop > this.pageHeight - this.viewHeight &&
                  ((this.scrollTop = this.pageHeight - this.viewHeight),
                  this.scrollTop < 0 && (this.scrollTop = 0),
                  this._emit("scroll", { data: this.scrollTop }));
            }),
            (t.prototype.setScrollTop = function (e) {
              (this.scrollTop = e),
                e < 0 && (e = 0),
                (this.thumbTop =
                  (e * (this.slideHeight - this.thumbHeight)) /
                  (this.pageHeight - this.viewHeight)),
                (this.inner.style.top = this.thumbTop + "px");
            }),
            t
          );
        })(a);
        f.prototype.setInnerHeight = f.prototype.setScrollHeight;
        var l = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, "-h") || this;
            return (
              (r.scrollLeft = 0),
              (r.scrollWidth = 0),
              (r.height = r.HScrollHeight),
              (r.inner.style.height = r.element.style.height =
                (r.height || 12) + "px"),
              (r.renderer = n),
              r
            );
          }
          return (
            r(t, e),
            (t.prototype.onMouseDown = function (e, t) {
              if (e !== "mousedown") return;
              if (o.getButton(t) !== 0 || t.detail === 2) return;
              if (t.target === this.inner) {
                var n = this,
                  r = t.clientX,
                  i = function (e) {
                    r = e.clientX;
                  },
                  s = function () {
                    clearInterval(l);
                  },
                  u = t.clientX,
                  a = this.thumbLeft,
                  f = function () {
                    if (r === undefined) return;
                    var e = n.scrollLeftFromThumbLeft(a + r - u);
                    if (e === n.scrollLeft) return;
                    n._emit("scroll", { data: e });
                  };
                o.capture(this.inner, i, s);
                var l = setInterval(f, 20);
                return o.preventDefault(t);
              }
              var c =
                t.clientX -
                this.element.getBoundingClientRect().left -
                this.thumbWidth / 2;
              return (
                this._emit("scroll", { data: this.scrollLeftFromThumbLeft(c) }),
                o.preventDefault(t)
              );
            }),
            (t.prototype.getHeight = function () {
              return this.isVisible ? this.height : 0;
            }),
            (t.prototype.scrollLeftFromThumbLeft = function (e) {
              var t =
                (e * (this.pageWidth - this.viewWidth)) /
                (this.slideWidth - this.thumbWidth);
              return (
                (t >>= 0),
                t < 0
                  ? (t = 0)
                  : t > this.pageWidth - this.viewWidth &&
                    (t = this.pageWidth - this.viewWidth),
                t
              );
            }),
            (t.prototype.setWidth = function (e) {
              (this.width = Math.max(0, e)),
                (this.element.style.width = this.width + "px"),
                (this.slideWidth = this.width),
                (this.viewWidth = this.width),
                this.setScrollWidth(this.pageWidth, !0);
            }),
            (t.prototype.setScrollWidth = function (e, t) {
              if (this.pageWidth === e && !t) return;
              (this.pageWidth = e),
                (this.thumbWidth =
                  (this.slideWidth * this.viewWidth) / this.pageWidth),
                this.thumbWidth > this.slideWidth &&
                  (this.thumbWidth = this.slideWidth),
                this.thumbWidth < 15 && (this.thumbWidth = 15),
                (this.inner.style.width = this.thumbWidth + "px"),
                this.scrollLeft > this.pageWidth - this.viewWidth &&
                  ((this.scrollLeft = this.pageWidth - this.viewWidth),
                  this.scrollLeft < 0 && (this.scrollLeft = 0),
                  this._emit("scroll", { data: this.scrollLeft }));
            }),
            (t.prototype.setScrollLeft = function (e) {
              (this.scrollLeft = e),
                e < 0 && (e = 0),
                (this.thumbLeft =
                  (e * (this.slideWidth - this.thumbWidth)) /
                  (this.pageWidth - this.viewWidth)),
                (this.inner.style.left = this.thumbLeft + "px");
            }),
            t
          );
        })(a);
        (l.prototype.setInnerWidth = l.prototype.setScrollWidth),
          (t.ScrollBar = f),
          (t.ScrollBarV = f),
          (t.ScrollBarH = l),
          (t.VScrollBar = f),
          (t.HScrollBar = l);
      }
    ),
    define(
      "ace/renderloop",
      ["require", "exports", "module", "ace/lib/event"],
      function (e, t, n) {
        "use strict";
        var r = e("./lib/event"),
          i = (function () {
            function e(e, t) {
              (this.onRender = e),
                (this.pending = !1),
                (this.changes = 0),
                (this.$recursionLimit = 2),
                (this.window = t || window);
              var n = this;
              this._flush = function (e) {
                n.pending = !1;
                var t = n.changes;
                t && (r.blockIdle(100), (n.changes = 0), n.onRender(t));
                if (n.changes) {
                  if (n.$recursionLimit-- < 0) return;
                  n.schedule();
                } else n.$recursionLimit = 2;
              };
            }
            return (
              (e.prototype.schedule = function (e) {
                (this.changes = this.changes | e),
                  this.changes &&
                    !this.pending &&
                    (r.nextFrame(this._flush), (this.pending = !0));
              }),
              (e.prototype.clear = function (e) {
                var t = this.changes;
                return (this.changes = 0), t;
              }),
              e
            );
          })();
        t.RenderLoop = i;
      }
    ),
    define(
      "ace/layer/font_metrics",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/lib/event",
        "ace/lib/useragent",
        "ace/lib/event_emitter",
      ],
      function (e, t, n) {
        var r = e("../lib/oop"),
          i = e("../lib/dom"),
          s = e("../lib/lang"),
          o = e("../lib/event"),
          u = e("../lib/useragent"),
          a = e("../lib/event_emitter").EventEmitter,
          f = 512,
          l = typeof ResizeObserver == "function",
          c = 200,
          h = (function () {
            function e(e) {
              (this.el = i.createElement("div")),
                this.$setMeasureNodeStyles(this.el.style, !0),
                (this.$main = i.createElement("div")),
                this.$setMeasureNodeStyles(this.$main.style),
                (this.$measureNode = i.createElement("div")),
                this.$setMeasureNodeStyles(this.$measureNode.style),
                this.el.appendChild(this.$main),
                this.el.appendChild(this.$measureNode),
                e.appendChild(this.el),
                (this.$measureNode.textContent = s.stringRepeat("X", f)),
                (this.$characterSize = { width: 0, height: 0 }),
                l ? this.$addObserver() : this.checkForSizeChanges();
            }
            return (
              (e.prototype.$setMeasureNodeStyles = function (e, t) {
                (e.width = e.height = "auto"),
                  (e.left = e.top = "0px"),
                  (e.visibility = "hidden"),
                  (e.position = "absolute"),
                  (e.whiteSpace = "pre"),
                  u.isIE < 8
                    ? (e["font-family"] = "inherit")
                    : (e.font = "inherit"),
                  (e.overflow = t ? "hidden" : "visible");
              }),
              (e.prototype.checkForSizeChanges = function (e) {
                e === undefined && (e = this.$measureSizes());
                if (
                  e &&
                  (this.$characterSize.width !== e.width ||
                    this.$characterSize.height !== e.height)
                ) {
                  this.$measureNode.style.fontWeight = "bold";
                  var t = this.$measureSizes();
                  (this.$measureNode.style.fontWeight = ""),
                    (this.$characterSize = e),
                    (this.charSizes = Object.create(null)),
                    (this.allowBoldFonts =
                      t && t.width === e.width && t.height === e.height),
                    this._emit("changeCharacterSize", { data: e });
                }
              }),
              (e.prototype.$addObserver = function () {
                var e = this;
                (this.$observer = new window.ResizeObserver(function (t) {
                  e.checkForSizeChanges();
                })),
                  this.$observer.observe(this.$measureNode);
              }),
              (e.prototype.$pollSizeChanges = function () {
                if (this.$pollSizeChangesTimer || this.$observer)
                  return this.$pollSizeChangesTimer;
                var e = this;
                return (this.$pollSizeChangesTimer = o.onIdle(function t() {
                  e.checkForSizeChanges(), o.onIdle(t, 500);
                }, 500));
              }),
              (e.prototype.setPolling = function (e) {
                e
                  ? this.$pollSizeChanges()
                  : this.$pollSizeChangesTimer &&
                    (clearInterval(this.$pollSizeChangesTimer),
                    (this.$pollSizeChangesTimer = 0));
              }),
              (e.prototype.$measureSizes = function (e) {
                var t = {
                  height: (e || this.$measureNode).clientHeight,
                  width: (e || this.$measureNode).clientWidth / f,
                };
                return t.width === 0 || t.height === 0 ? null : t;
              }),
              (e.prototype.$measureCharWidth = function (e) {
                this.$main.textContent = s.stringRepeat(e, f);
                var t = this.$main.getBoundingClientRect();
                return t.width / f;
              }),
              (e.prototype.getCharacterWidth = function (e) {
                var t = this.charSizes[e];
                return (
                  t === undefined &&
                    (t = this.charSizes[e] =
                      this.$measureCharWidth(e) / this.$characterSize.width),
                  t
                );
              }),
              (e.prototype.destroy = function () {
                clearInterval(this.$pollSizeChangesTimer),
                  this.$observer && this.$observer.disconnect(),
                  this.el &&
                    this.el.parentNode &&
                    this.el.parentNode.removeChild(this.el);
              }),
              (e.prototype.$getZoom = function (e) {
                return !e || !e.parentElement
                  ? 1
                  : (window.getComputedStyle(e).zoom || 1) *
                      this.$getZoom(e.parentElement);
              }),
              (e.prototype.$initTransformMeasureNodes = function () {
                var e = function (e, t) {
                  return [
                    "div",
                    {
                      style:
                        "position: absolute;top:" + e + "px;left:" + t + "px;",
                    },
                  ];
                };
                this.els = i.buildDom(
                  [e(0, 0), e(c, 0), e(0, c), e(c, c)],
                  this.el
                );
              }),
              (e.prototype.transformCoordinates = function (e, t) {
                function r(e, t, n) {
                  var r = e[1] * t[0] - e[0] * t[1];
                  return [
                    (-t[1] * n[0] + t[0] * n[1]) / r,
                    (+e[1] * n[0] - e[0] * n[1]) / r,
                  ];
                }
                function i(e, t) {
                  return [e[0] - t[0], e[1] - t[1]];
                }
                function s(e, t) {
                  return [e[0] + t[0], e[1] + t[1]];
                }
                function o(e, t) {
                  return [e * t[0], e * t[1]];
                }
                function u(e) {
                  var t = e.getBoundingClientRect();
                  return [t.left, t.top];
                }
                if (e) {
                  var n = this.$getZoom(this.el);
                  e = o(1 / n, e);
                }
                this.els || this.$initTransformMeasureNodes();
                var a = u(this.els[0]),
                  f = u(this.els[1]),
                  l = u(this.els[2]),
                  h = u(this.els[3]),
                  p = r(i(h, f), i(h, l), i(s(f, l), s(h, a))),
                  d = o(1 + p[0], i(f, a)),
                  v = o(1 + p[1], i(l, a));
                if (t) {
                  var m = t,
                    g = (p[0] * m[0]) / c + (p[1] * m[1]) / c + 1,
                    y = s(o(m[0], d), o(m[1], v));
                  return s(o(1 / g / c, y), a);
                }
                var b = i(e, a),
                  w = r(i(d, o(p[0], b)), i(v, o(p[1], b)), b);
                return o(c, w);
              }),
              e
            );
          })();
        (h.prototype.$characterSize = { width: 0, height: 0 }),
          r.implement(h.prototype, a),
          (t.FontMetrics = h);
      }
    ),
    define(
      "ace/css/editor1-css",
      ["require", "exports", "module"],
      function (e, t, n) {
        n.exports =
          '\n.ace_br1 {border-top-left-radius    : 3px;}\n.ace_br2 {border-top-right-radius   : 3px;}\n.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}\n.ace_br4 {border-bottom-right-radius: 3px;}\n.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}\n.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}\n.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}\n.ace_br8 {border-bottom-left-radius : 3px;}\n.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}\n.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}\n.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}\n.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}\n\n\n.ace_editor {\n    position: relative;\n    overflow: hidden;\n    padding: 0;\n    font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'Source Code Pro\', \'source-code-pro\', monospace;\n    direction: ltr;\n    text-align: left;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.ace_scroller {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    bottom: 0;\n    background-color: inherit;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    cursor: text;\n}\n\n.ace_content {\n    position: absolute;\n    box-sizing: border-box;\n    min-width: 100%;\n    contain: style size layout;\n    font-variant-ligatures: no-common-ligatures;\n}\n\n.ace_keyboard-focus:focus {\n    box-shadow: inset 0 0 0 2px #5E9ED6;\n    outline: none;\n}\n\n.ace_dragging .ace_scroller:before{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: \'\';\n    background: rgba(250, 250, 250, 0.01);\n    z-index: 1000;\n}\n.ace_dragging.ace_dark .ace_scroller:before{\n    background: rgba(0, 0, 0, 0.01);\n}\n\n.ace_gutter {\n    position: absolute;\n    overflow : hidden;\n    width: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    cursor: default;\n    z-index: 4;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    contain: style size layout;\n}\n\n.ace_gutter-active-line {\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n\n.ace_scroller.ace_scroll-left:after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\n    pointer-events: none;\n}\n\n.ace_gutter-cell, .ace_gutter-cell_svg-icons {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-left: 19px;\n    padding-right: 6px;\n    background-repeat: no-repeat;\n}\n\n.ace_gutter-cell_svg-icons .ace_gutter_annotation {\n    margin-left: -14px;\n    float: left;\n}\n\n.ace_gutter-cell .ace_gutter_annotation {\n    margin-left: -19px;\n    float: left;\n}\n\n.ace_gutter-cell.ace_error, .ace_icon.ace_error, .ace_icon.ace_error_fold {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_warning, .ace_icon.ace_warning, .ace_icon.ace_warning_fold {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_info, .ace_icon.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n.ace_dark .ace_gutter-cell.ace_info, .ace_dark .ace_icon.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");\n}\n\n.ace_icon_svg.ace_error {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJyZWQiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KPGNpcmNsZSBmaWxsPSJub25lIiBjeD0iOCIgY3k9IjgiIHI9IjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjExIiB5MT0iNSIgeDI9IjUiIHkyPSIxMSIvPgo8bGluZSB4MT0iMTEiIHkxPSIxMSIgeDI9IjUiIHkyPSI1Ii8+CjwvZz4KPC9zdmc+");\n    background-color: crimson;\n}\n.ace_icon_svg.ace_warning {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJkYXJrb3JhbmdlIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+Cjxwb2x5Z29uIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIHBvaW50cz0iOCAxIDE1IDE1IDEgMTUgOCAxIi8+CjxyZWN0IHg9IjgiIHk9IjEyIiB3aWR0aD0iMC4wMSIgaGVpZ2h0PSIwLjAxIi8+CjxsaW5lIHgxPSI4IiB5MT0iNiIgeDI9IjgiIHkyPSIxMCIvPgo8L2c+Cjwvc3ZnPg==");\n    background-color: darkorange;\n}\n.ace_icon_svg.ace_info {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJibHVlIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CjxjaXJjbGUgZmlsbD0ibm9uZSIgY3g9IjgiIGN5PSI4IiByPSI3IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjxwb2x5bGluZSBwb2ludHM9IjggMTEgOCA4Ii8+Cjxwb2x5bGluZSBwb2ludHM9IjkgOCA2IDgiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTEiIHgyPSI2IiB5Mj0iMTEiLz4KPHJlY3QgeD0iOCIgeT0iNSIgd2lkdGg9IjAuMDEiIGhlaWdodD0iMC4wMSIvPgo8L2c+Cjwvc3ZnPg==");\n    background-color: royalblue;\n}\n\n.ace_icon_svg.ace_error_fold {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZD0ibSAxOC45Mjk4NTEsNy44Mjk4MDc2IGMgMC4xNDYzNTMsNi4zMzc0NjA0IC02LjMyMzE0Nyw3Ljc3Nzg0NDQgLTcuNDc3OTEyLDcuNzc3ODQ0NCAtMi4xMDcyNzI2LC0wLjEyODc1IDUuMTE3Njc4LDAuMzU2MjQ5IDUuMDUxNjk4LC03Ljg3MDA2MTggLTAuNjA0NjcyLC04LjAwMzk3MzQ5IC03LjA3NzI3MDYsLTcuNTYzMTE4OSAtNC44NTczLC03LjQzMDM5NTU2IDEuNjA2LC0wLjExNTE0MjI1IDYuODk3NDg1LDEuMjYyNTQ1OTYgNy4yODM1MTQsNy41MjI2MTI5NiB6IiBmaWxsPSJjcmltc29uIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibSA4LjExNDc1NjIsMi4wNTI5ODI4IGMgMy4zNDkxNjk4LDAgNi4wNjQxMzI4LDIuNjc2ODYyNyA2LjA2NDEzMjgsNS45Nzg5NTMgMCwzLjMwMjExMjIgLTIuNzE0OTYzLDUuOTc4OTIwMiAtNi4wNjQxMzI4LDUuOTc4OTIwMiAtMy4zNDkxNDczLDAgLTYuMDY0MTc3MiwtMi42NzY4MDggLTYuMDY0MTc3MiwtNS45Nzg5MjAyIDAuMDA1MzksLTMuMjk5ODg2MSAyLjcxNzI2NTYsLTUuOTczNjQwOCA2LjA2NDE3NzIsLTUuOTc4OTUzIHogbSAwLC0xLjczNTgyNzE5IGMgLTQuMzIxNDgzNiwwIC03LjgyNDc0MDM4LDMuNDU0MDE4NDkgLTcuODI0NzQwMzgsNy43MTQ3ODAxOSAwLDQuMjYwNzI4MiAzLjUwMzI1Njc4LDcuNzE0NzQ1MiA3LjgyNDc0MDM4LDcuNzE0NzQ1MiA0LjMyMTQ0OTgsMCA3LjgyNDY5OTgsLTMuNDU0MDE3IDcuODI0Njk5OCwtNy43MTQ3NDUyIDAsLTIuMDQ2MDkxNCAtMC44MjQzOTIsLTQuMDA4MzY3MiAtMi4yOTE3NTYsLTUuNDU1MTc0NiBDIDEyLjE4MDIyNSwxLjEyOTk2NDggMTAuMTkwMDEzLDAuMzE3MTU1NjEgOC4xMTQ3NTYyLDAuMzE3MTU1NjEgWiBNIDYuOTM3NDU2Myw4LjI0MDU5ODUgNC42NzE4Njg1LDEwLjQ4NTg1MiA2LjAwODY4MTQsMTEuODc2NzI4IDguMzE3MDAzNSw5LjYwMDc5MTEgMTAuNjI1MzM3LDExLjg3NjcyOCAxMS45NjIxMzgsMTAuNDg1ODUyIDkuNjk2NTUwOCw4LjI0MDU5ODUgMTEuOTYyMTM4LDYuMDA2ODA2NiAxMC41NzMyNDYsNC42Mzc0MzM1IDguMzE3MDAzNSw2Ljg3MzQyOTcgNi4wNjA3NjA3LDQuNjM3NDMzNSA0LjY3MTg2ODUsNi4wMDY4MDY2IFoiIGZpbGw9ImNyaW1zb24iIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=");\n    background-color: crimson;\n}\n.ace_icon_svg.ace_warning_fold {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NzY5IDE0LjczMzdMOC42NTE5MiAyLjQ4MzY5QzguMzI5NDYgMS44Mzg3NyA3LjQwOTEzIDEuODM4NzcgNy4wODY2NyAyLjQ4MzY5TDAuOTYxNjY5IDE0LjczMzdDMC42NzA3NzUgMTUuMzE1NSAxLjA5MzgzIDE2IDEuNzQ0MjkgMTZIMTMuOTk0M0MxNC42NDQ4IDE2IDE1LjA2NzggMTUuMzE1NSAxNC43NzY5IDE0LjczMzdaTTMuMTYwMDcgMTQuMjVMNy44NjkyOSA0LjgzMTU2TDEyLjU3ODUgMTQuMjVIMy4xNjAwN1pNOC43NDQyOSAxMS42MjVWMTMuMzc1SDYuOTk0MjlWMTEuNjI1SDguNzQ0MjlaTTYuOTk0MjkgMTAuNzVWNy4yNUg4Ljc0NDI5VjEwLjc1SDYuOTk0MjlaIiBmaWxsPSIjRUM3MjExIi8+CjxwYXRoIGQ9Ik0xMS4xOTkxIDIuOTUyMzhDMTAuODgwOSAyLjMxNDY3IDEwLjM1MzcgMS44MDUyNiA5LjcwNTUgMS41MDlMMTEuMDQxIDEuMDY5NzhDMTEuNjg4MyAwLjk0OTgxNCAxMi4zMzcgMS4yNzI2MyAxMi42MzE3IDEuODYxNDFMMTcuNjEzNiAxMS44MTYxQzE4LjM1MjcgMTMuMjkyOSAxNy41OTM4IDE1LjA4MDQgMTYuMDE4IDE1LjU3NDVDMTYuNDA0NCAxNC40NTA3IDE2LjMyMzEgMTMuMjE4OCAxNS43OTI0IDEyLjE1NTVMMTEuMTk5MSAyLjk1MjM4WiIgZmlsbD0iI0VDNzIxMSIvPgo8L3N2Zz4=");\n    background-color: darkorange;\n}\n\n.ace_scrollbar {\n    contain: strict;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    z-index: 6;\n}\n\n.ace_scrollbar-inner {\n    position: absolute;\n    cursor: text;\n    left: 0;\n    top: 0;\n}\n\n.ace_scrollbar-v{\n    overflow-x: hidden;\n    overflow-y: scroll;\n    top: 0;\n}\n\n.ace_scrollbar-h {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    left: 0;\n}\n\n.ace_print-margin {\n    position: absolute;\n    height: 100%;\n}\n\n.ace_text-input {\n    position: absolute;\n    z-index: 0;\n    width: 0.5em;\n    height: 1em;\n    opacity: 0;\n    background: transparent;\n    -moz-appearance: none;\n    appearance: none;\n    border: none;\n    resize: none;\n    outline: none;\n    overflow: hidden;\n    font: inherit;\n    padding: 0 1px;\n    margin: 0 -1px;\n    contain: strict;\n    -ms-user-select: text;\n    -moz-user-select: text;\n    -webkit-user-select: text;\n    user-select: text;\n    /*with `pre-line` chrome inserts &nbsp; instead of space*/\n    white-space: pre!important;\n}\n.ace_text-input.ace_composition {\n    background: transparent;\n    color: inherit;\n    z-index: 1000;\n    opacity: 1;\n}\n.ace_composition_placeholder { color: transparent }\n.ace_composition_marker { \n    border-bottom: 1px solid;\n    position: absolute;\n    border-radius: 0;\n    margin-top: 1px;\n}\n\n[ace_nocontext=true] {\n    transform: none!important;\n    filter: none!important;\n    clip-path: none!important;\n    mask : none!important;\n    contain: none!important;\n    perspective: none!important;\n    mix-blend-mode: initial!important;\n    z-index: auto;\n}\n\n.ace_layer {\n    z-index: 1;\n    position: absolute;\n    overflow: hidden;\n    /* workaround for chrome bug https://github.com/ajaxorg/ace/issues/2312*/\n    word-wrap: normal;\n    white-space: pre;\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    /* setting pointer-events: auto; on node under the mouse, which changes\n        during scroll, will break mouse wheel scrolling in Safari */\n    pointer-events: none;\n}\n\n.ace_gutter-layer {\n    position: relative;\n    width: auto;\n    text-align: right;\n    pointer-events: auto;\n    height: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer {\n    font: inherit !important;\n    position: absolute;\n    height: 1000000px;\n    width: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {\n    contain: style size layout;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.ace_hidpi .ace_text-layer,\n.ace_hidpi .ace_gutter-layer,\n.ace_hidpi .ace_content,\n.ace_hidpi .ace_gutter {\n    contain: strict;\n}\n.ace_hidpi .ace_text-layer > .ace_line, \n.ace_hidpi .ace_text-layer > .ace_line_group {\n    contain: strict;\n}\n\n.ace_cjk {\n    display: inline-block;\n    text-align: center;\n}\n\n.ace_cursor-layer {\n    z-index: 4;\n}\n\n.ace_cursor {\n    z-index: 4;\n    position: absolute;\n    box-sizing: border-box;\n    border-left: 2px solid;\n    /* workaround for smooth cursor repaintng whole screen in chrome */\n    transform: translatez(0);\n}\n\n.ace_multiselect .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_slim-cursors .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_overwrite-cursors .ace_cursor {\n    border-left-width: 0;\n    border-bottom: 1px solid;\n}\n\n.ace_hidden-cursors .ace_cursor {\n    opacity: 0.2;\n}\n\n.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {\n    opacity: 0;\n}\n\n.ace_smooth-blinking .ace_cursor {\n    transition: opacity 0.18s;\n}\n\n.ace_animate-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: step-end;\n    animation-name: blink-ace-animate;\n    animation-iteration-count: infinite;\n}\n\n.ace_animate-blinking.ace_smooth-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: ease-in-out;\n    animation-name: blink-ace-animate-smooth;\n}\n    \n@keyframes blink-ace-animate {\n    from, to { opacity: 1; }\n    60% { opacity: 0; }\n}\n\n@keyframes blink-ace-animate-smooth {\n    from, to { opacity: 1; }\n    45% { opacity: 1; }\n    60% { opacity: 0; }\n    85% { opacity: 0; }\n}\n\n.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {\n    position: absolute;\n    z-index: 3;\n}\n\n.ace_marker-layer .ace_selection {\n    position: absolute;\n    z-index: 5;\n}\n\n.ace_marker-layer .ace_bracket {\n    position: absolute;\n    z-index: 6;\n}\n\n.ace_marker-layer .ace_error_bracket {\n    position: absolute;\n    border-bottom: 1px solid #DE5555;\n    border-radius: 0;\n}\n\n.ace_marker-layer .ace_active-line {\n    position: absolute;\n    z-index: 2;\n}\n\n.ace_marker-layer .ace_selected-word {\n    position: absolute;\n    z-index: 4;\n    box-sizing: border-box;\n}\n\n.ace_line .ace_fold {\n    box-sizing: border-box;\n\n    display: inline-block;\n    height: 11px;\n    margin-top: -2px;\n    vertical-align: middle;\n\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");\n    background-repeat: no-repeat, repeat-x;\n    background-position: center center, top left;\n    color: transparent;\n\n    border: 1px solid black;\n    border-radius: 2px;\n\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.ace_dark .ace_fold {\n}\n\n.ace_fold:hover{\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");\n}\n\n.ace_tooltip {\n    background-color: #f5f5f5;\n    border: 1px solid gray;\n    border-radius: 1px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n    color: black;\n    max-width: 100%;\n    padding: 3px 4px;\n    position: fixed;\n    z-index: 999999;\n    box-sizing: border-box;\n    cursor: default;\n    white-space: pre;\n    word-wrap: break-word;\n    line-height: normal;\n    font-style: normal;\n    font-weight: normal;\n    letter-spacing: normal;\n    pointer-events: none;\n}\n\n.ace_tooltip.ace_dark {\n    background-color: #636363;\n    color: #fff;\n}\n\n.ace_tooltip:focus {\n    outline: 1px solid #5E9ED6;\n}\n\n.ace_icon {\n    display: inline-block;\n    width: 18px;\n    vertical-align: top;\n}\n\n.ace_icon_svg {\n    display: inline-block;\n    width: 12px;\n    vertical-align: top;\n    -webkit-mask-repeat: no-repeat;\n    -webkit-mask-size: 12px;\n    -webkit-mask-position: center;\n}\n\n.ace_folding-enabled > .ace_gutter-cell, .ace_folding-enabled > .ace_gutter-cell_svg-icons {\n    padding-right: 13px;\n}\n\n.ace_fold-widget {\n    box-sizing: border-box;\n\n    margin: 0 -12px 0 1px;\n    display: none;\n    width: 11px;\n    vertical-align: top;\n\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: center;\n\n    border-radius: 3px;\n    \n    border: 1px solid transparent;\n    cursor: pointer;\n}\n\n.ace_folding-enabled .ace_fold-widget {\n    display: inline-block;   \n}\n\n.ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");\n}\n\n.ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");\n}\n\n.ace_fold-widget:hover {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n}\n\n.ace_fold-widget:active {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(0, 0, 0, 0.05);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n}\n/**\n * Dark version for fold widgets\n */\n.ace_dark .ace_fold-widget {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");\n}\n.ace_dark .ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget:hover {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.ace_dark .ace_fold-widget:active {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.ace_inline_button {\n    border: 1px solid lightgray;\n    display: inline-block;\n    margin: -1px 8px;\n    padding: 0 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n.ace_inline_button:hover {\n    border-color: gray;\n    background: rgba(200,200,200,0.2);\n    display: inline-block;\n    pointer-events: auto;\n}\n\n.ace_fold-widget.ace_invalid {\n    background-color: #FFB4B4;\n    border-color: #DE5555;\n}\n\n.ace_fade-fold-widgets .ace_fold-widget {\n    transition: opacity 0.4s ease 0.05s;\n    opacity: 0;\n}\n\n.ace_fade-fold-widgets:hover .ace_fold-widget {\n    transition: opacity 0.05s ease 0.05s;\n    opacity:1;\n}\n\n.ace_underline {\n    text-decoration: underline;\n}\n\n.ace_bold {\n    font-weight: bold;\n}\n\n.ace_nobold .ace_bold {\n    font-weight: normal;\n}\n\n.ace_italic {\n    font-style: italic;\n}\n\n\n.ace_error-marker {\n    background-color: rgba(255, 0, 0,0.2);\n    position: absolute;\n    z-index: 9;\n}\n\n.ace_highlight-marker {\n    background-color: rgba(255, 255, 0,0.2);\n    position: absolute;\n    z-index: 8;\n}\n\n.ace_mobile-menu {\n    position: absolute;\n    line-height: 1.5;\n    border-radius: 4px;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    background: white;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #dcdcdc;\n    color: black;\n}\n.ace_dark > .ace_mobile-menu {\n    background: #333;\n    color: #ccc;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #444;\n\n}\n.ace_mobile-button {\n    padding: 2px;\n    cursor: pointer;\n    overflow: hidden;\n}\n.ace_mobile-button:hover {\n    background-color: #eee;\n    opacity:1;\n}\n.ace_mobile-button:active {\n    background-color: #ddd;\n}\n\n.ace_placeholder {\n    font-family: arial;\n    transform: scale(0.9);\n    transform-origin: left;\n    white-space: pre;\n    opacity: 0.7;\n    margin: 0 10px;\n}\n\n.ace_ghost_text {\n    opacity: 0.5;\n    font-style: italic;\n    white-space: pre;\n}';
      }
    ),
    define(
      "ace/layer/decorators",
      [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
        "ace/lib/oop",
        "ace/lib/event_emitter",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("../lib/dom"),
          i = e("../lib/oop"),
          s = e("../lib/event_emitter").EventEmitter,
          o = (function () {
            function e(e, t) {
              (this.canvas = r.createElement("canvas")),
                (this.renderer = t),
                (this.pixelRatio = 1),
                (this.maxHeight = t.layerConfig.maxHeight),
                (this.lineHeight = t.layerConfig.lineHeight),
                (this.canvasHeight = e.parent.scrollHeight),
                (this.heightRatio = this.canvasHeight / this.maxHeight),
                (this.canvasWidth = e.width),
                (this.minDecorationHeight = (2 * this.pixelRatio) | 0),
                (this.halfMinDecorationHeight =
                  (this.minDecorationHeight / 2) | 0),
                (this.canvas.width = this.canvasWidth),
                (this.canvas.height = this.canvasHeight),
                (this.canvas.style.top = "0px"),
                (this.canvas.style.right = "0px"),
                (this.canvas.style.zIndex = "7px"),
                (this.canvas.style.position = "absolute"),
                (this.colors = {}),
                (this.colors.dark = {
                  error: "rgba(255, 18, 18, 1)",
                  warning: "rgba(18, 136, 18, 1)",
                  info: "rgba(18, 18, 136, 1)",
                }),
                (this.colors.light = {
                  error: "rgb(255,51,51)",
                  warning: "rgb(32,133,72)",
                  info: "rgb(35,68,138)",
                }),
                e.element.appendChild(this.canvas);
            }
            return (
              (e.prototype.$updateDecorators = function (e) {
                function i(e, t) {
                  return e.priority < t.priority
                    ? -1
                    : e.priority > t.priority
                    ? 1
                    : 0;
                }
                var t =
                  this.renderer.theme.isDark === !0
                    ? this.colors.dark
                    : this.colors.light;
                if (e) {
                  (this.maxHeight = e.maxHeight),
                    (this.lineHeight = e.lineHeight),
                    (this.canvasHeight = e.height);
                  var n = (e.lastRow + 1) * this.lineHeight;
                  n < this.canvasHeight
                    ? (this.heightRatio = 1)
                    : (this.heightRatio = this.canvasHeight / this.maxHeight);
                }
                var r = this.canvas.getContext("2d"),
                  s = this.renderer.session.$annotations;
                r.clearRect(0, 0, this.canvas.width, this.canvas.height);
                if (s) {
                  var o = { info: 1, warning: 2, error: 3 };
                  s.forEach(function (e) {
                    e.priority = o[e.type] || null;
                  }),
                    (s = s.sort(i));
                  var u = this.renderer.session.$foldData;
                  for (var a = 0; a < s.length; a++) {
                    var f = s[a].row,
                      l = this.compensateFoldRows(f, u),
                      c = Math.round(
                        (f - l) * this.lineHeight * this.heightRatio
                      ),
                      h = Math.round(
                        (f - l) * this.lineHeight * this.heightRatio
                      ),
                      p = Math.round(
                        ((f - l) * this.lineHeight + this.lineHeight) *
                          this.heightRatio
                      ),
                      d = p - h;
                    if (d < this.minDecorationHeight) {
                      var v = ((h + p) / 2) | 0;
                      v < this.halfMinDecorationHeight
                        ? (v = this.halfMinDecorationHeight)
                        : v + this.halfMinDecorationHeight > this.canvasHeight &&
                          (v = this.canvasHeight - this.halfMinDecorationHeight),
                        (h = Math.round(v - this.halfMinDecorationHeight)),
                        (p = Math.round(v + this.halfMinDecorationHeight));
                    }
                    (r.fillStyle = t[s[a].type] || null),
                      r.fillRect(0, c, this.canvasWidth, p - h);
                  }
                }
                var m = this.renderer.session.selection.getCursor();
                if (m) {
                  var l = this.compensateFoldRows(m.row, u),
                    c = Math.round(
                      (m.row - l) * this.lineHeight * this.heightRatio
                    );
                  (r.fillStyle = "rgba(0, 0, 0, 0.5)"),
                    r.fillRect(0, c, this.canvasWidth, 2);
                }
              }),
              (e.prototype.compensateFoldRows = function (e, t) {
                var n = 0;
                if (t && t.length > 0)
                  for (var r = 0; r < t.length; r++)
                    e > t[r].start.row && e < t[r].end.row
                      ? (n += e - t[r].start.row)
                      : e >= t[r].end.row && (n += t[r].end.row - t[r].start.row);
                return n;
              }),
              e
            );
          })();
        i.implement(o.prototype, s), (t.Decorator = o);
      }
    ),
    define(
      "ace/virtual_renderer",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/config",
        "ace/layer/gutter",
        "ace/layer/marker",
        "ace/layer/text",
        "ace/layer/cursor",
        "ace/scrollbar",
        "ace/scrollbar",
        "ace/scrollbar_custom",
        "ace/scrollbar_custom",
        "ace/renderloop",
        "ace/layer/font_metrics",
        "ace/lib/event_emitter",
        "ace/css/editor1-css",
        "ace/layer/decorators",
        "ace/lib/useragent",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("./lib/oop"),
          i = e("./lib/dom"),
          s = e("./lib/lang"),
          o = e("./config"),
          u = e("./layer/gutter").Gutter,
          a = e("./layer/marker").Marker,
          f = e("./layer/text").Text,
          l = e("./layer/cursor").Cursor,
          c = e("./scrollbar").HScrollBar,
          h = e("./scrollbar").VScrollBar,
          p = e("./scrollbar_custom").HScrollBar,
          d = e("./scrollbar_custom").VScrollBar,
          v = e("./renderloop").RenderLoop,
          m = e("./layer/font_metrics").FontMetrics,
          g = e("./lib/event_emitter").EventEmitter,
          y = e("./css/editor1-css"),
          b = e("./layer/decorators").Decorator,
          w = e("./lib/useragent");
        i.importCssString(y, "ace_editor.css", !1);
        var E = (function () {
          function e(e, t) {
            var n = this;
            (this.container = e || i.createElement("div")),
              i.addCssClass(this.container, "ace_editor"),
              i.HI_DPI && i.addCssClass(this.container, "ace_hidpi"),
              this.setTheme(t),
              o.get("useStrictCSP") == null && o.set("useStrictCSP", !1),
              (this.$gutter = i.createElement("div")),
              (this.$gutter.className = "ace_gutter"),
              this.container.appendChild(this.$gutter),
              this.$gutter.setAttribute("aria-hidden", !0),
              (this.scroller = i.createElement("div")),
              (this.scroller.className = "ace_scroller"),
              this.container.appendChild(this.scroller),
              (this.content = i.createElement("div")),
              (this.content.className = "ace_content"),
              this.scroller.appendChild(this.content),
              (this.$gutterLayer = new u(this.$gutter)),
              this.$gutterLayer.on(
                "changeGutterWidth",
                this.onGutterResize.bind(this)
              ),
              (this.$markerBack = new a(this.content));
            var r = (this.$textLayer = new f(this.content));
            (this.canvas = r.element),
              (this.$markerFront = new a(this.content)),
              (this.$cursorLayer = new l(this.content)),
              (this.$horizScroll = !1),
              (this.$vScroll = !1),
              (this.scrollBar = this.scrollBarV = new h(this.container, this)),
              (this.scrollBarH = new c(this.container, this)),
              this.scrollBarV.on("scroll", function (e) {
                n.$scrollAnimation ||
                  n.session.setScrollTop(e.data - n.scrollMargin.top);
              }),
              this.scrollBarH.on("scroll", function (e) {
                n.$scrollAnimation ||
                  n.session.setScrollLeft(e.data - n.scrollMargin.left);
              }),
              (this.scrollTop = 0),
              (this.scrollLeft = 0),
              (this.cursorPos = { row: 0, column: 0 }),
              (this.$fontMetrics = new m(this.container)),
              this.$textLayer.$setFontMetrics(this.$fontMetrics),
              this.$textLayer.on("changeCharacterSize", function (e) {
                n.updateCharacterSize(),
                  n.onResize(!0, n.gutterWidth, n.$size.width, n.$size.height),
                  n._signal("changeCharacterSize", e);
              }),
              (this.$size = {
                width: 0,
                height: 0,
                scrollerHeight: 0,
                scrollerWidth: 0,
                $dirty: !0,
              }),
              (this.layerConfig = {
                width: 1,
                padding: 0,
                firstRow: 0,
                firstRowScreen: 0,
                lastRow: 0,
                lineHeight: 0,
                characterWidth: 0,
                minHeight: 1,
                maxHeight: 1,
                offset: 0,
                height: 1,
                gutterOffset: 1,
              }),
              (this.scrollMargin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0,
              }),
              (this.margin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0,
              }),
              (this.$keepTextAreaAtCursor = !w.isIOS),
              (this.$loop = new v(
                this.$renderChanges.bind(this),
                this.container.ownerDocument.defaultView
              )),
              this.$loop.schedule(this.CHANGE_FULL),
              this.updateCharacterSize(),
              this.setPadding(4),
              this.$addResizeObserver(),
              o.resetOptions(this),
              o._signal("renderer", this);
          }
          return (
            (e.prototype.updateCharacterSize = function () {
              this.$textLayer.allowBoldFonts != this.$allowBoldFonts &&
                ((this.$allowBoldFonts = this.$textLayer.allowBoldFonts),
                this.setStyle("ace_nobold", !this.$allowBoldFonts)),
                (this.layerConfig.characterWidth = this.characterWidth =
                  this.$textLayer.getCharacterWidth()),
                (this.layerConfig.lineHeight = this.lineHeight =
                  this.$textLayer.getLineHeight()),
                this.$updatePrintMargin(),
                i.setStyle(
                  this.scroller.style,
                  "line-height",
                  this.lineHeight + "px"
                );
            }),
            (e.prototype.setSession = function (e) {
              this.session &&
                this.session.doc.off(
                  "changeNewLineMode",
                  this.onChangeNewLineMode
                ),
                (this.session = e),
                e &&
                  this.scrollMargin.top &&
                  e.getScrollTop() <= 0 &&
                  e.setScrollTop(-this.scrollMargin.top),
                this.$cursorLayer.setSession(e),
                this.$markerBack.setSession(e),
                this.$markerFront.setSession(e),
                this.$gutterLayer.setSession(e),
                this.$textLayer.setSession(e);
              if (!e) return;
              this.$loop.schedule(this.CHANGE_FULL),
                this.session.$setFontMetrics(this.$fontMetrics),
                (this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null),
                (this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this)),
                this.onChangeNewLineMode(),
                this.session.doc.on(
                  "changeNewLineMode",
                  this.onChangeNewLineMode
                );
            }),
            (e.prototype.updateLines = function (e, t, n) {
              t === undefined && (t = Infinity),
                this.$changedLines
                  ? (this.$changedLines.firstRow > e &&
                      (this.$changedLines.firstRow = e),
                    this.$changedLines.lastRow < t &&
                      (this.$changedLines.lastRow = t))
                  : (this.$changedLines = { firstRow: e, lastRow: t });
              if (this.$changedLines.lastRow < this.layerConfig.firstRow) {
                if (!n) return;
                this.$changedLines.lastRow = this.layerConfig.lastRow;
              }
              if (this.$changedLines.firstRow > this.layerConfig.lastRow) return;
              this.$loop.schedule(this.CHANGE_LINES);
            }),
            (e.prototype.onChangeNewLineMode = function () {
              this.$loop.schedule(this.CHANGE_TEXT),
                this.$textLayer.$updateEolChar(),
                this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
            }),
            (e.prototype.onChangeTabSize = function () {
              this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER),
                this.$textLayer.onChangeTabSize();
            }),
            (e.prototype.updateText = function () {
              this.$loop.schedule(this.CHANGE_TEXT);
            }),
            (e.prototype.updateFull = function (e) {
              e
                ? this.$renderChanges(this.CHANGE_FULL, !0)
                : this.$loop.schedule(this.CHANGE_FULL);
            }),
            (e.prototype.updateFontSize = function () {
              this.$textLayer.checkForSizeChanges();
            }),
            (e.prototype.$updateSizeAsync = function () {
              this.$loop.pending ? (this.$size.$dirty = !0) : this.onResize();
            }),
            (e.prototype.onResize = function (e, t, n, r) {
              if (this.resizing > 2) return;
              this.resizing > 0 ? this.resizing++ : (this.resizing = e ? 1 : 0);
              var i = this.container;
              r || (r = i.clientHeight || i.scrollHeight),
                n || (n = i.clientWidth || i.scrollWidth);
              var s = this.$updateCachedSize(e, t, n, r);
              this.$resizeTimer && this.$resizeTimer.cancel();
              if (!this.$size.scrollerHeight || (!n && !r))
                return (this.resizing = 0);
              e && (this.$gutterLayer.$padding = null),
                e
                  ? this.$renderChanges(s | this.$changes, !0)
                  : this.$loop.schedule(s | this.$changes),
                this.resizing && (this.resizing = 0),
                (this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null),
                this.$customScrollbar && this.$updateCustomScrollbar(!0);
            }),
            (e.prototype.$updateCachedSize = function (e, t, n, r) {
              r -= this.$extraHeight || 0;
              var s = 0,
                o = this.$size,
                u = {
                  width: o.width,
                  height: o.height,
                  scrollerHeight: o.scrollerHeight,
                  scrollerWidth: o.scrollerWidth,
                };
              r &&
                (e || o.height != r) &&
                ((o.height = r),
                (s |= this.CHANGE_SIZE),
                (o.scrollerHeight = o.height),
                this.$horizScroll &&
                  (o.scrollerHeight -= this.scrollBarH.getHeight()),
                this.scrollBarV.setHeight(o.scrollerHeight),
                (this.scrollBarV.element.style.bottom =
                  this.scrollBarH.getHeight() + "px"),
                (s |= this.CHANGE_SCROLL));
              if (n && (e || o.width != n)) {
                (s |= this.CHANGE_SIZE),
                  (o.width = n),
                  t == null &&
                    (t = this.$showGutter ? this.$gutter.offsetWidth : 0),
                  (this.gutterWidth = t),
                  i.setStyle(this.scrollBarH.element.style, "left", t + "px"),
                  i.setStyle(
                    this.scroller.style,
                    "left",
                    t + this.margin.left + "px"
                  ),
                  (o.scrollerWidth = Math.max(
                    0,
                    n - t - this.scrollBarV.getWidth() - this.margin.h
                  )),
                  i.setStyle(this.$gutter.style, "left", this.margin.left + "px");
                var a = this.scrollBarV.getWidth() + "px";
                i.setStyle(this.scrollBarH.element.style, "right", a),
                  i.setStyle(this.scroller.style, "right", a),
                  i.setStyle(
                    this.scroller.style,
                    "bottom",
                    this.scrollBarH.getHeight()
                  ),
                  this.scrollBarH.setWidth(o.scrollerWidth);
                if (
                  (this.session &&
                    this.session.getUseWrapMode() &&
                    this.adjustWrapLimit()) ||
                  e
                )
                  s |= this.CHANGE_FULL;
              }
              return (o.$dirty = !n || !r), s && this._signal("resize", u), s;
            }),
            (e.prototype.onGutterResize = function (e) {
              var t = this.$showGutter ? e : 0;
              t != this.gutterWidth &&
                (this.$changes |= this.$updateCachedSize(
                  !0,
                  t,
                  this.$size.width,
                  this.$size.height
                )),
                this.session.getUseWrapMode() && this.adjustWrapLimit()
                  ? this.$loop.schedule(this.CHANGE_FULL)
                  : this.$size.$dirty
                  ? this.$loop.schedule(this.CHANGE_FULL)
                  : this.$computeLayerConfig();
            }),
            (e.prototype.adjustWrapLimit = function () {
              var e = this.$size.scrollerWidth - this.$padding * 2,
                t = Math.floor(e / this.characterWidth);
              return this.session.adjustWrapLimit(
                t,
                this.$showPrintMargin && this.$printMarginColumn
              );
            }),
            (e.prototype.setAnimatedScroll = function (e) {
              this.setOption("animatedScroll", e);
            }),
            (e.prototype.getAnimatedScroll = function () {
              return this.$animatedScroll;
            }),
            (e.prototype.setShowInvisibles = function (e) {
              this.setOption("showInvisibles", e),
                this.session.$bidiHandler.setShowInvisibles(e);
            }),
            (e.prototype.getShowInvisibles = function () {
              return this.getOption("showInvisibles");
            }),
            (e.prototype.getDisplayIndentGuides = function () {
              return this.getOption("displayIndentGuides");
            }),
            (e.prototype.setDisplayIndentGuides = function (e) {
              this.setOption("displayIndentGuides", e);
            }),
            (e.prototype.getHighlightIndentGuides = function () {
              return this.getOption("highlightIndentGuides");
            }),
            (e.prototype.setHighlightIndentGuides = function (e) {
              this.setOption("highlightIndentGuides", e);
            }),
            (e.prototype.setShowPrintMargin = function (e) {
              this.setOption("showPrintMargin", e);
            }),
            (e.prototype.getShowPrintMargin = function () {
              return this.getOption("showPrintMargin");
            }),
            (e.prototype.setPrintMarginColumn = function (e) {
              this.setOption("printMarginColumn", e);
            }),
            (e.prototype.getPrintMarginColumn = function () {
              return this.getOption("printMarginColumn");
            }),
            (e.prototype.getShowGutter = function () {
              return this.getOption("showGutter");
            }),
            (e.prototype.setShowGutter = function (e) {
              return this.setOption("showGutter", e);
            }),
            (e.prototype.getFadeFoldWidgets = function () {
              return this.getOption("fadeFoldWidgets");
            }),
            (e.prototype.setFadeFoldWidgets = function (e) {
              this.setOption("fadeFoldWidgets", e);
            }),
            (e.prototype.setHighlightGutterLine = function (e) {
              this.setOption("highlightGutterLine", e);
            }),
            (e.prototype.getHighlightGutterLine = function () {
              return this.getOption("highlightGutterLine");
            }),
            (e.prototype.$updatePrintMargin = function () {
              if (!this.$showPrintMargin && !this.$printMarginEl) return;
              if (!this.$printMarginEl) {
                var e = i.createElement("div");
                (e.className = "ace_layer ace_print-margin-layer"),
                  (this.$printMarginEl = i.createElement("div")),
                  (this.$printMarginEl.className = "ace_print-margin"),
                  e.appendChild(this.$printMarginEl),
                  this.content.insertBefore(e, this.content.firstChild);
              }
              var t = this.$printMarginEl.style;
              (t.left =
                Math.round(
                  this.characterWidth * this.$printMarginColumn + this.$padding
                ) + "px"),
                (t.visibility = this.$showPrintMargin ? "visible" : "hidden"),
                this.session &&
                  this.session.$wrap == -1 &&
                  this.adjustWrapLimit();
            }),
            (e.prototype.getContainerElement = function () {
              return this.container;
            }),
            (e.prototype.getMouseEventTarget = function () {
              return this.scroller;
            }),
            (e.prototype.getTextAreaContainer = function () {
              return this.container;
            }),
            (e.prototype.$moveTextAreaToCursor = function () {
              if (this.$isMousePressed) return;
              var e = this.textarea.style,
                t = this.$composition;
              if (!this.$keepTextAreaAtCursor && !t) {
                i.translate(this.textarea, -100, 0);
                return;
              }
              var n = this.$cursorLayer.$pixelPos;
              if (!n) return;
              t &&
                t.markerRange &&
                (n = this.$cursorLayer.getPixelPosition(t.markerRange.start, !0));
              var r = this.layerConfig,
                s = n.top,
                o = n.left;
              s -= r.offset;
              var u =
                (t && t.useTextareaForIME) || w.isMobile ? this.lineHeight : 1;
              if (s < 0 || s > r.height - u) {
                i.translate(this.textarea, 0, 0);
                return;
              }
              var a = 1,
                f = this.$size.height - u;
              if (!t) s += this.lineHeight;
              else if (t.useTextareaForIME) {
                var l = this.textarea.value;
                a =
                  this.characterWidth * this.session.$getStringScreenWidth(l)[0];
              } else s += this.lineHeight + 2;
              (o -= this.scrollLeft),
                o > this.$size.scrollerWidth - a &&
                  (o = this.$size.scrollerWidth - a),
                (o += this.gutterWidth + this.margin.left),
                i.setStyle(e, "height", u + "px"),
                i.setStyle(e, "width", a + "px"),
                i.translate(
                  this.textarea,
                  Math.min(o, this.$size.scrollerWidth - a),
                  Math.min(s, f)
                );
            }),
            (e.prototype.getFirstVisibleRow = function () {
              return this.layerConfig.firstRow;
            }),
            (e.prototype.getFirstFullyVisibleRow = function () {
              return (
                this.layerConfig.firstRow +
                (this.layerConfig.offset === 0 ? 0 : 1)
              );
            }),
            (e.prototype.getLastFullyVisibleRow = function () {
              var e = this.layerConfig,
                t = e.lastRow,
                n = this.session.documentToScreenRow(t, 0) * e.lineHeight;
              return n - this.session.getScrollTop() > e.height - e.lineHeight
                ? t - 1
                : t;
            }),
            (e.prototype.getLastVisibleRow = function () {
              return this.layerConfig.lastRow;
            }),
            (e.prototype.setPadding = function (e) {
              (this.$padding = e),
                this.$textLayer.setPadding(e),
                this.$cursorLayer.setPadding(e),
                this.$markerFront.setPadding(e),
                this.$markerBack.setPadding(e),
                this.$loop.schedule(this.CHANGE_FULL),
                this.$updatePrintMargin();
            }),
            (e.prototype.setScrollMargin = function (e, t, n, r) {
              var i = this.scrollMargin;
              (i.top = e | 0),
                (i.bottom = t | 0),
                (i.right = r | 0),
                (i.left = n | 0),
                (i.v = i.top + i.bottom),
                (i.h = i.left + i.right),
                i.top &&
                  this.scrollTop <= 0 &&
                  this.session &&
                  this.session.setScrollTop(-i.top),
                this.updateFull();
            }),
            (e.prototype.setMargin = function (e, t, n, r) {
              var i = this.margin;
              (i.top = e | 0),
                (i.bottom = t | 0),
                (i.right = r | 0),
                (i.left = n | 0),
                (i.v = i.top + i.bottom),
                (i.h = i.left + i.right),
                this.$updateCachedSize(
                  !0,
                  this.gutterWidth,
                  this.$size.width,
                  this.$size.height
                ),
                this.updateFull();
            }),
            (e.prototype.getHScrollBarAlwaysVisible = function () {
              return this.$hScrollBarAlwaysVisible;
            }),
            (e.prototype.setHScrollBarAlwaysVisible = function (e) {
              this.setOption("hScrollBarAlwaysVisible", e);
            }),
            (e.prototype.getVScrollBarAlwaysVisible = function () {
              return this.$vScrollBarAlwaysVisible;
            }),
            (e.prototype.setVScrollBarAlwaysVisible = function (e) {
              this.setOption("vScrollBarAlwaysVisible", e);
            }),
            (e.prototype.$updateScrollBarV = function () {
              var e = this.layerConfig.maxHeight,
                t = this.$size.scrollerHeight;
              !this.$maxLines &&
                this.$scrollPastEnd &&
                ((e -= (t - this.lineHeight) * this.$scrollPastEnd),
                this.scrollTop > e - t &&
                  ((e = this.scrollTop + t), (this.scrollBarV.scrollTop = null))),
                this.scrollBarV.setScrollHeight(e + this.scrollMargin.v),
                this.scrollBarV.setScrollTop(
                  this.scrollTop + this.scrollMargin.top
                );
            }),
            (e.prototype.$updateScrollBarH = function () {
              this.scrollBarH.setScrollWidth(
                this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h
              ),
                this.scrollBarH.setScrollLeft(
                  this.scrollLeft + this.scrollMargin.left
                );
            }),
            (e.prototype.freeze = function () {
              this.$frozen = !0;
            }),
            (e.prototype.unfreeze = function () {
              this.$frozen = !1;
            }),
            (e.prototype.$renderChanges = function (e, t) {
              this.$changes && ((e |= this.$changes), (this.$changes = 0));
              if (
                !this.session ||
                !this.container.offsetWidth ||
                this.$frozen ||
                (!e && !t)
              ) {
                this.$changes |= e;
                return;
              }
              if (this.$size.$dirty)
                return (this.$changes |= e), this.onResize(!0);
              this.lineHeight || this.$textLayer.checkForSizeChanges(),
                this._signal("beforeRender", e),
                this.session &&
                  this.session.$bidiHandler &&
                  this.session.$bidiHandler.updateCharacterWidths(
                    this.$fontMetrics
                  );
              var n = this.layerConfig;
              if (
                e & this.CHANGE_FULL ||
                e & this.CHANGE_SIZE ||
                e & this.CHANGE_TEXT ||
                e & this.CHANGE_LINES ||
                e & this.CHANGE_SCROLL ||
                e & this.CHANGE_H_SCROLL
              ) {
                e |= this.$computeLayerConfig() | this.$loop.clear();
                if (
                  n.firstRow != this.layerConfig.firstRow &&
                  n.firstRowScreen == this.layerConfig.firstRowScreen
                ) {
                  var r =
                    this.scrollTop +
                    (n.firstRow - Math.max(this.layerConfig.firstRow, 0)) *
                      this.lineHeight;
                  r > 0 &&
                    ((this.scrollTop = r),
                    (e |= this.CHANGE_SCROLL),
                    (e |= this.$computeLayerConfig() | this.$loop.clear()));
                }
                (n = this.layerConfig),
                  this.$updateScrollBarV(),
                  e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(),
                  i.translate(this.content, -this.scrollLeft, -n.offset);
                var s = n.width + 2 * this.$padding + "px",
                  o = n.minHeight + "px";
                i.setStyle(this.content.style, "width", s),
                  i.setStyle(this.content.style, "height", o);
              }
              e & this.CHANGE_H_SCROLL &&
                (i.translate(this.content, -this.scrollLeft, -n.offset),
                (this.scroller.className =
                  this.scrollLeft <= 0
                    ? "ace_scroller "
                    : "ace_scroller ace_scroll-left "),
                this.enableKeyboardAccessibility &&
                  (this.scroller.className += this.keyboardFocusClassName));
              if (e & this.CHANGE_FULL) {
                (this.$changedLines = null),
                  this.$textLayer.update(n),
                  this.$showGutter && this.$gutterLayer.update(n),
                  this.$customScrollbar &&
                    this.$scrollDecorator.$updateDecorators(n),
                  this.$markerBack.update(n),
                  this.$markerFront.update(n),
                  this.$cursorLayer.update(n),
                  this.$moveTextAreaToCursor(),
                  this._signal("afterRender", e);
                return;
              }
              if (e & this.CHANGE_SCROLL) {
                (this.$changedLines = null),
                  e & this.CHANGE_TEXT || e & this.CHANGE_LINES
                    ? this.$textLayer.update(n)
                    : this.$textLayer.scrollLines(n),
                  this.$showGutter &&
                    (e & this.CHANGE_GUTTER || e & this.CHANGE_LINES
                      ? this.$gutterLayer.update(n)
                      : this.$gutterLayer.scrollLines(n)),
                  this.$customScrollbar &&
                    this.$scrollDecorator.$updateDecorators(n),
                  this.$markerBack.update(n),
                  this.$markerFront.update(n),
                  this.$cursorLayer.update(n),
                  this.$moveTextAreaToCursor(),
                  this._signal("afterRender", e);
                return;
              }
              e & this.CHANGE_TEXT
                ? ((this.$changedLines = null),
                  this.$textLayer.update(n),
                  this.$showGutter && this.$gutterLayer.update(n),
                  this.$customScrollbar &&
                    this.$scrollDecorator.$updateDecorators(n))
                : e & this.CHANGE_LINES
                ? ((this.$updateLines() ||
                    (e & this.CHANGE_GUTTER && this.$showGutter)) &&
                    this.$gutterLayer.update(n),
                  this.$customScrollbar &&
                    this.$scrollDecorator.$updateDecorators(n))
                : e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER
                ? (this.$showGutter && this.$gutterLayer.update(n),
                  this.$customScrollbar &&
                    this.$scrollDecorator.$updateDecorators(n))
                : e & this.CHANGE_CURSOR &&
                  (this.$highlightGutterLine &&
                    this.$gutterLayer.updateLineHighlight(n),
                  this.$customScrollbar &&
                    this.$scrollDecorator.$updateDecorators(n)),
                e & this.CHANGE_CURSOR &&
                  (this.$cursorLayer.update(n), this.$moveTextAreaToCursor()),
                e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) &&
                  this.$markerFront.update(n),
                e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) &&
                  this.$markerBack.update(n),
                this._signal("afterRender", e);
            }),
            (e.prototype.$autosize = function () {
              var e = this.session.getScreenLength() * this.lineHeight,
                t = this.$maxLines * this.lineHeight,
                n =
                  Math.min(
                    t,
                    Math.max((this.$minLines || 1) * this.lineHeight, e)
                  ) +
                  this.scrollMargin.v +
                  (this.$extraHeight || 0);
              this.$horizScroll && (n += this.scrollBarH.getHeight()),
                this.$maxPixelHeight &&
                  n > this.$maxPixelHeight &&
                  (n = this.$maxPixelHeight);
              var r = n <= 2 * this.lineHeight,
                i = !r && e > t;
              if (
                n != this.desiredHeight ||
                this.$size.height != this.desiredHeight ||
                i != this.$vScroll
              ) {
                i != this.$vScroll &&
                  ((this.$vScroll = i), this.scrollBarV.setVisible(i));
                var s = this.container.clientWidth;
                (this.container.style.height = n + "px"),
                  this.$updateCachedSize(!0, this.$gutterWidth, s, n),
                  (this.desiredHeight = n),
                  this._signal("autosize");
              }
            }),
            (e.prototype.$computeLayerConfig = function () {
              var e = this.session,
                t = this.$size,
                n = t.height <= 2 * this.lineHeight,
                r = this.session.getScreenLength(),
                i = r * this.lineHeight,
                s = this.$getLongestLine(),
                o =
                  !n &&
                  (this.$hScrollBarAlwaysVisible ||
                    t.scrollerWidth - s - 2 * this.$padding < 0),
                u = this.$horizScroll !== o;
              u && ((this.$horizScroll = o), this.scrollBarH.setVisible(o));
              var a = this.$vScroll;
              this.$maxLines && this.lineHeight > 1 && this.$autosize();
              var f = t.scrollerHeight + this.lineHeight,
                l =
                  !this.$maxLines && this.$scrollPastEnd
                    ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd
                    : 0;
              i += l;
              var c = this.scrollMargin;
              this.session.setScrollTop(
                Math.max(
                  -c.top,
                  Math.min(this.scrollTop, i - t.scrollerHeight + c.bottom)
                )
              ),
                this.session.setScrollLeft(
                  Math.max(
                    -c.left,
                    Math.min(
                      this.scrollLeft,
                      s + 2 * this.$padding - t.scrollerWidth + c.right
                    )
                  )
                );
              var h =
                  !n &&
                  (this.$vScrollBarAlwaysVisible ||
                    t.scrollerHeight - i + l < 0 ||
                    this.scrollTop > c.top),
                p = a !== h;
              p && ((this.$vScroll = h), this.scrollBarV.setVisible(h));
              var d = this.scrollTop % this.lineHeight,
                v = Math.ceil(f / this.lineHeight) - 1,
                m = Math.max(
                  0,
                  Math.round((this.scrollTop - d) / this.lineHeight)
                ),
                g = m + v,
                y,
                b,
                w = this.lineHeight;
              m = e.screenToDocumentRow(m, 0);
              var E = e.getFoldLine(m);
              E && (m = E.start.row),
                (y = e.documentToScreenRow(m, 0)),
                (b = e.getRowLength(m) * w),
                (g = Math.min(e.screenToDocumentRow(g, 0), e.getLength() - 1)),
                (f = t.scrollerHeight + e.getRowLength(g) * w + b),
                (d = this.scrollTop - y * w);
              var S = 0;
              if (this.layerConfig.width != s || u) S = this.CHANGE_H_SCROLL;
              if (u || p)
                (S |= this.$updateCachedSize(
                  !0,
                  this.gutterWidth,
                  t.width,
                  t.height
                )),
                  this._signal("scrollbarVisibilityChanged"),
                  p && (s = this.$getLongestLine());
              return (
                (this.layerConfig = {
                  width: s,
                  padding: this.$padding,
                  firstRow: m,
                  firstRowScreen: y,
                  lastRow: g,
                  lineHeight: w,
                  characterWidth: this.characterWidth,
                  minHeight: f,
                  maxHeight: i,
                  offset: d,
                  gutterOffset: w
                    ? Math.max(
                        0,
                        Math.ceil((d + t.height - t.scrollerHeight) / w)
                      )
                    : 0,
                  height: this.$size.scrollerHeight,
                }),
                this.session.$bidiHandler &&
                  this.session.$bidiHandler.setContentWidth(s - this.$padding),
                S
              );
            }),
            (e.prototype.$updateLines = function () {
              if (!this.$changedLines) return;
              var e = this.$changedLines.firstRow,
                t = this.$changedLines.lastRow;
              this.$changedLines = null;
              var n = this.layerConfig;
              if (e > n.lastRow + 1) return;
              if (t < n.firstRow) return;
              if (t === Infinity) {
                this.$showGutter && this.$gutterLayer.update(n),
                  this.$textLayer.update(n);
                return;
              }
              return this.$textLayer.updateLines(n, e, t), !0;
            }),
            (e.prototype.$getLongestLine = function () {
              var e = this.session.getScreenWidth();
              return (
                this.showInvisibles && !this.session.$useWrapMode && (e += 1),
                this.$textLayer &&
                  e > this.$textLayer.MAX_LINE_LENGTH &&
                  (e = this.$textLayer.MAX_LINE_LENGTH + 30),
                Math.max(
                  this.$size.scrollerWidth - 2 * this.$padding,
                  Math.round(e * this.characterWidth)
                )
              );
            }),
            (e.prototype.updateFrontMarkers = function () {
              this.$markerFront.setMarkers(this.session.getMarkers(!0)),
                this.$loop.schedule(this.CHANGE_MARKER_FRONT);
            }),
            (e.prototype.updateBackMarkers = function () {
              this.$markerBack.setMarkers(this.session.getMarkers()),
                this.$loop.schedule(this.CHANGE_MARKER_BACK);
            }),
            (e.prototype.addGutterDecoration = function (e, t) {
              this.$gutterLayer.addGutterDecoration(e, t);
            }),
            (e.prototype.removeGutterDecoration = function (e, t) {
              this.$gutterLayer.removeGutterDecoration(e, t);
            }),
            (e.prototype.updateBreakpoints = function (e) {
              this.$loop.schedule(this.CHANGE_GUTTER);
            }),
            (e.prototype.setAnnotations = function (e) {
              this.$gutterLayer.setAnnotations(e),
                this.$loop.schedule(this.CHANGE_GUTTER);
            }),
            (e.prototype.updateCursor = function () {
              this.$loop.schedule(this.CHANGE_CURSOR);
            }),
            (e.prototype.hideCursor = function () {
              this.$cursorLayer.hideCursor();
            }),
            (e.prototype.showCursor = function () {
              this.$cursorLayer.showCursor();
            }),
            (e.prototype.scrollSelectionIntoView = function (e, t, n) {
              this.scrollCursorIntoView(e, n), this.scrollCursorIntoView(t, n);
            }),
            (e.prototype.scrollCursorIntoView = function (e, t, n) {
              if (this.$size.scrollerHeight === 0) return;
              var r = this.$cursorLayer.getPixelPosition(e),
                i = r.left,
                s = r.top,
                o = (n && n.top) || 0,
                u = (n && n.bottom) || 0;
              this.$scrollAnimation && (this.$stopAnimation = !0);
              var a = this.$scrollAnimation
                ? this.session.getScrollTop()
                : this.scrollTop;
              a + o > s
                ? (t &&
                    a + o > s + this.lineHeight &&
                    (s -= t * this.$size.scrollerHeight),
                  s === 0 && (s = -this.scrollMargin.top),
                  this.session.setScrollTop(s))
                : a + this.$size.scrollerHeight - u < s + this.lineHeight &&
                  (t &&
                    a + this.$size.scrollerHeight - u < s - this.lineHeight &&
                    (s += t * this.$size.scrollerHeight),
                  this.session.setScrollTop(
                    s + this.lineHeight + u - this.$size.scrollerHeight
                  ));
              var f = this.scrollLeft,
                l = 2 * this.layerConfig.characterWidth;
              i - l < f
                ? ((i -= l),
                  i < this.$padding + l && (i = -this.scrollMargin.left),
                  this.session.setScrollLeft(i))
                : ((i += l),
                  f + this.$size.scrollerWidth < i + this.characterWidth
                    ? this.session.setScrollLeft(
                        Math.round(
                          i + this.characterWidth - this.$size.scrollerWidth
                        )
                      )
                    : f <= this.$padding &&
                      i - f < this.characterWidth &&
                      this.session.setScrollLeft(0));
            }),
            (e.prototype.getScrollTop = function () {
              return this.session.getScrollTop();
            }),
            (e.prototype.getScrollLeft = function () {
              return this.session.getScrollLeft();
            }),
            (e.prototype.getScrollTopRow = function () {
              return this.scrollTop / this.lineHeight;
            }),
            (e.prototype.getScrollBottomRow = function () {
              return Math.max(
                0,
                Math.floor(
                  (this.scrollTop + this.$size.scrollerHeight) / this.lineHeight
                ) - 1
              );
            }),
            (e.prototype.scrollToRow = function (e) {
              this.session.setScrollTop(e * this.lineHeight);
            }),
            (e.prototype.alignCursor = function (e, t) {
              typeof e == "number" && (e = { row: e, column: 0 });
              var n = this.$cursorLayer.getPixelPosition(e),
                r = this.$size.scrollerHeight - this.lineHeight,
                i = n.top - r * (t || 0);
              return this.session.setScrollTop(i), i;
            }),
            (e.prototype.$calcSteps = function (e, t) {
              var n = 0,
                r = this.STEPS,
                i = [],
                s = function (e, t, n) {
                  return n * (Math.pow(e - 1, 3) + 1) + t;
                };
              for (n = 0; n < r; ++n) i.push(s(n / this.STEPS, e, t - e));
              return i;
            }),
            (e.prototype.scrollToLine = function (e, t, n, r) {
              var i = this.$cursorLayer.getPixelPosition({ row: e, column: 0 }),
                s = i.top;
              t && (s -= this.$size.scrollerHeight / 2);
              var o = this.scrollTop;
              this.session.setScrollTop(s),
                n !== !1 && this.animateScrolling(o, r);
            }),
            (e.prototype.animateScrolling = function (e, t) {
              function o() {
                (r.$timer = clearInterval(r.$timer)),
                  (r.$scrollAnimation = null),
                  (r.$stopAnimation = !1),
                  t && t();
              }
              var n = this.scrollTop;
              if (!this.$animatedScroll) return;
              var r = this;
              if (e == n) return;
              if (this.$scrollAnimation) {
                var i = this.$scrollAnimation.steps;
                if (i.length) {
                  e = i[0];
                  if (e == n) return;
                }
              }
              var s = r.$calcSteps(e, n);
              (this.$scrollAnimation = { from: e, to: n, steps: s }),
                clearInterval(this.$timer),
                r.session.setScrollTop(s.shift()),
                (r.session.$scrollTop = n),
                (this.$timer = setInterval(function () {
                  if (r.$stopAnimation) {
                    o();
                    return;
                  }
                  if (!r.session) return clearInterval(r.$timer);
                  s.length
                    ? (r.session.setScrollTop(s.shift()),
                      (r.session.$scrollTop = n))
                    : n != null
                    ? ((r.session.$scrollTop = -1),
                      r.session.setScrollTop(n),
                      (n = null))
                    : o();
                }, 10));
            }),
            (e.prototype.scrollToY = function (e) {
              this.scrollTop !== e &&
                (this.$loop.schedule(this.CHANGE_SCROLL), (this.scrollTop = e));
            }),
            (e.prototype.scrollToX = function (e) {
              this.scrollLeft !== e && (this.scrollLeft = e),
                this.$loop.schedule(this.CHANGE_H_SCROLL);
            }),
            (e.prototype.scrollTo = function (e, t) {
              this.session.setScrollTop(t), this.session.setScrollLeft(e);
            }),
            (e.prototype.scrollBy = function (e, t) {
              t && this.session.setScrollTop(this.session.getScrollTop() + t),
                e && this.session.setScrollLeft(this.session.getScrollLeft() + e);
            }),
            (e.prototype.isScrollableBy = function (e, t) {
              if (
                t < 0 &&
                this.session.getScrollTop() >= 1 - this.scrollMargin.top
              )
                return !0;
              if (
                t > 0 &&
                this.session.getScrollTop() +
                  this.$size.scrollerHeight -
                  this.layerConfig.maxHeight <
                  -1 + this.scrollMargin.bottom
              )
                return !0;
              if (
                e < 0 &&
                this.session.getScrollLeft() >= 1 - this.scrollMargin.left
              )
                return !0;
              if (
                e > 0 &&
                this.session.getScrollLeft() +
                  this.$size.scrollerWidth -
                  this.layerConfig.width <
                  -1 + this.scrollMargin.right
              )
                return !0;
            }),
            (e.prototype.pixelToScreenCoordinates = function (e, t) {
              var n;
              if (this.$hasCssTransforms) {
                n = { top: 0, left: 0 };
                var r = this.$fontMetrics.transformCoordinates([e, t]);
                (e = r[1] - this.gutterWidth - this.margin.left), (t = r[0]);
              } else n = this.scroller.getBoundingClientRect();
              var i = e + this.scrollLeft - n.left - this.$padding,
                s = i / this.characterWidth,
                o = Math.floor((t + this.scrollTop - n.top) / this.lineHeight),
                u = this.$blockCursor ? Math.floor(s) : Math.round(s);
              return { row: o, column: u, side: s - u > 0 ? 1 : -1, offsetX: i };
            }),
            (e.prototype.screenToTextCoordinates = function (e, t) {
              var n;
              if (this.$hasCssTransforms) {
                n = { top: 0, left: 0 };
                var r = this.$fontMetrics.transformCoordinates([e, t]);
                (e = r[1] - this.gutterWidth - this.margin.left), (t = r[0]);
              } else n = this.scroller.getBoundingClientRect();
              var i = e + this.scrollLeft - n.left - this.$padding,
                s = i / this.characterWidth,
                o = this.$blockCursor ? Math.floor(s) : Math.round(s),
                u = Math.floor((t + this.scrollTop - n.top) / this.lineHeight);
              return this.session.screenToDocumentPosition(u, Math.max(o, 0), i);
            }),
            (e.prototype.textToScreenCoordinates = function (e, t) {
              var n = this.scroller.getBoundingClientRect(),
                r = this.session.documentToScreenPosition(e, t),
                i =
                  this.$padding +
                  (this.session.$bidiHandler.isBidiRow(r.row, e)
                    ? this.session.$bidiHandler.getPosLeft(r.column)
                    : Math.round(r.column * this.characterWidth)),
                s = r.row * this.lineHeight;
              return {
                pageX: n.left + i - this.scrollLeft,
                pageY: n.top + s - this.scrollTop,
              };
            }),
            (e.prototype.visualizeFocus = function () {
              i.addCssClass(this.container, "ace_focus");
            }),
            (e.prototype.visualizeBlur = function () {
              i.removeCssClass(this.container, "ace_focus");
            }),
            (e.prototype.showComposition = function (e) {
              (this.$composition = e),
                e.cssText || (e.cssText = this.textarea.style.cssText),
                e.useTextareaForIME == undefined &&
                  (e.useTextareaForIME = this.$useTextareaForIME),
                this.$useTextareaForIME
                  ? (i.addCssClass(this.textarea, "ace_composition"),
                    (this.textarea.style.cssText = ""),
                    this.$moveTextAreaToCursor(),
                    (this.$cursorLayer.element.style.display = "none"))
                  : (e.markerId = this.session.addMarker(
                      e.markerRange,
                      "ace_composition_marker",
                      "text"
                    ));
            }),
            (e.prototype.setCompositionText = function (e) {
              var t = this.session.selection.cursor;
              this.addToken(e, "composition_placeholder", t.row, t.column),
                this.$moveTextAreaToCursor();
            }),
            (e.prototype.hideComposition = function () {
              if (!this.$composition) return;
              this.$composition.markerId &&
                this.session.removeMarker(this.$composition.markerId),
                i.removeCssClass(this.textarea, "ace_composition"),
                (this.textarea.style.cssText = this.$composition.cssText);
              var e = this.session.selection.cursor;
              this.removeExtraToken(e.row, e.column),
                (this.$composition = null),
                (this.$cursorLayer.element.style.display = "");
            }),
            (e.prototype.setGhostText = function (e, t) {
              var n = this.session.selection.cursor,
                r = t || { row: n.row, column: n.column };
              this.removeGhostText();
              var i = e.split("\n");
              this.addToken(i[0], "ghost_text", r.row, r.column),
                (this.$ghostText = {
                  text: e,
                  position: { row: r.row, column: r.column },
                }),
                i.length > 1 &&
                  ((this.$ghostTextWidget = {
                    text: i.slice(1).join("\n"),
                    row: r.row,
                    column: r.column,
                    className: "ace_ghost_text",
                  }),
                  this.session.widgetManager.addLineWidget(
                    this.$ghostTextWidget
                  ));
            }),
            (e.prototype.removeGhostText = function () {
              if (!this.$ghostText) return;
              var e = this.$ghostText.position;
              this.removeExtraToken(e.row, e.column),
                this.$ghostTextWidget &&
                  (this.session.widgetManager.removeLineWidget(
                    this.$ghostTextWidget
                  ),
                  (this.$ghostTextWidget = null)),
                (this.$ghostText = null);
            }),
            (e.prototype.addToken = function (e, t, n, r) {
              var i = this.session;
              i.bgTokenizer.lines[n] = null;
              var s = { type: t, value: e },
                o = i.getTokens(n);
              if (r == null || !o.length) o.push(s);
              else {
                var u = 0;
                for (var a = 0; a < o.length; a++) {
                  var f = o[a];
                  u += f.value.length;
                  if (r <= u) {
                    var l = f.value.length - (u - r),
                      c = f.value.slice(0, l),
                      h = f.value.slice(l);
                    o.splice(a, 1, { type: f.type, value: c }, s, {
                      type: f.type,
                      value: h,
                    });
                    break;
                  }
                }
              }
              this.updateLines(n, n);
            }),
            (e.prototype.removeExtraToken = function (e, t) {
              (this.session.bgTokenizer.lines[e] = null), this.updateLines(e, e);
            }),
            (e.prototype.setTheme = function (e, t) {
              function s(r) {
                if (n.$themeId != e) return t && t();
                if (!r || !r.cssClass)
                  throw new Error(
                    "couldn't load module " + e + " or it didn't call define"
                  );
                r.$id && (n.$themeId = r.$id),
                  i.importCssString(r.cssText, r.cssClass, n.container),
                  n.theme && i.removeCssClass(n.container, n.theme.cssClass);
                var s =
                  "padding" in r
                    ? r.padding
                    : "padding" in (n.theme || {})
                    ? 4
                    : n.$padding;
                n.$padding && s != n.$padding && n.setPadding(s),
                  (n.$theme = r.cssClass),
                  (n.theme = r),
                  i.addCssClass(n.container, r.cssClass),
                  i.setCssClass(n.container, "ace_dark", r.isDark),
                  n.$size && ((n.$size.width = 0), n.$updateSizeAsync()),
                  n._dispatchEvent("themeLoaded", { theme: r }),
                  t && t();
              }
              var n = this;
              (this.$themeId = e), n._dispatchEvent("themeChange", { theme: e });
              if (!e || typeof e == "string") {
                var r = e || this.$options.theme.initialValue;
                o.loadModule(["theme", r], s);
              } else s(e);
            }),
            (e.prototype.getTheme = function () {
              return this.$themeId;
            }),
            (e.prototype.setStyle = function (e, t) {
              i.setCssClass(this.container, e, t !== !1);
            }),
            (e.prototype.unsetStyle = function (e) {
              i.removeCssClass(this.container, e);
            }),
            (e.prototype.setCursorStyle = function (e) {
              i.setStyle(this.scroller.style, "cursor", e);
            }),
            (e.prototype.setMouseCursor = function (e) {
              i.setStyle(this.scroller.style, "cursor", e);
            }),
            (e.prototype.attachToShadowRoot = function () {
              i.importCssString(y, "ace_editor.css", this.container);
            }),
            (e.prototype.destroy = function () {
              this.freeze(),
                this.$fontMetrics.destroy(),
                this.$cursorLayer.destroy(),
                this.removeAllListeners(),
                (this.container.textContent = ""),
                this.setOption("useResizeObserver", !1);
            }),
            (e.prototype.$updateCustomScrollbar = function (e) {
              var t = this;
              (this.$horizScroll = this.$vScroll = null),
                this.scrollBarV.element.remove(),
                this.scrollBarH.element.remove(),
                this.$scrollDecorator && delete this.$scrollDecorator,
                e === !0
                  ? ((this.scrollBarV = new d(this.container, this)),
                    (this.scrollBarH = new p(this.container, this)),
                    this.scrollBarV.setHeight(this.$size.scrollerHeight),
                    this.scrollBarH.setWidth(this.$size.scrollerWidth),
                    this.scrollBarV.addEventListener("scroll", function (e) {
                      t.$scrollAnimation ||
                        t.session.setScrollTop(e.data - t.scrollMargin.top);
                    }),
                    this.scrollBarH.addEventListener("scroll", function (e) {
                      t.$scrollAnimation ||
                        t.session.setScrollLeft(e.data - t.scrollMargin.left);
                    }),
                    (this.$scrollDecorator = new b(this.scrollBarV, this)),
                    this.$scrollDecorator.$updateDecorators())
                  : ((this.scrollBarV = new h(this.container, this)),
                    (this.scrollBarH = new c(this.container, this)),
                    this.scrollBarV.addEventListener("scroll", function (e) {
                      t.$scrollAnimation ||
                        t.session.setScrollTop(e.data - t.scrollMargin.top);
                    }),
                    this.scrollBarH.addEventListener("scroll", function (e) {
                      t.$scrollAnimation ||
                        t.session.setScrollLeft(e.data - t.scrollMargin.left);
                    }));
            }),
            (e.prototype.$addResizeObserver = function () {
              if (!window.ResizeObserver || this.$resizeObserver) return;
              var e = this;
              (this.$resizeTimer = s.delayedCall(function () {
                e.destroyed || e.onResize();
              }, 50)),
                (this.$resizeObserver = new window.ResizeObserver(function (t) {
                  var n = t[0].contentRect.width,
                    r = t[0].contentRect.height;
                  Math.abs(e.$size.width - n) > 1 ||
                  Math.abs(e.$size.height - r) > 1
                    ? e.$resizeTimer.delay()
                    : e.$resizeTimer.cancel();
                })),
                this.$resizeObserver.observe(this.container);
            }),
            e
          );
        })();
        (E.prototype.CHANGE_CURSOR = 1),
          (E.prototype.CHANGE_MARKER = 2),
          (E.prototype.CHANGE_GUTTER = 4),
          (E.prototype.CHANGE_SCROLL = 8),
          (E.prototype.CHANGE_LINES = 16),
          (E.prototype.CHANGE_TEXT = 32),
          (E.prototype.CHANGE_SIZE = 64),
          (E.prototype.CHANGE_MARKER_BACK = 128),
          (E.prototype.CHANGE_MARKER_FRONT = 256),
          (E.prototype.CHANGE_FULL = 512),
          (E.prototype.CHANGE_H_SCROLL = 1024),
          (E.prototype.$changes = 0),
          (E.prototype.$padding = null),
          (E.prototype.$frozen = !1),
          (E.prototype.STEPS = 8),
          r.implement(E.prototype, g),
          o.defineOptions(E.prototype, "renderer", {
            useResizeObserver: {
              set: function (e) {
                !e && this.$resizeObserver
                  ? (this.$resizeObserver.disconnect(),
                    this.$resizeTimer.cancel(),
                    (this.$resizeTimer = this.$resizeObserver = null))
                  : e && !this.$resizeObserver && this.$addResizeObserver();
              },
            },
            animatedScroll: { initialValue: !1 },
            showInvisibles: {
              set: function (e) {
                this.$textLayer.setShowInvisibles(e) &&
                  this.$loop.schedule(this.CHANGE_TEXT);
              },
              initialValue: !1,
            },
            showPrintMargin: {
              set: function () {
                this.$updatePrintMargin();
              },
              initialValue: !0,
            },
            printMarginColumn: {
              set: function () {
                this.$updatePrintMargin();
              },
              initialValue: 80,
            },
            printMargin: {
              set: function (e) {
                typeof e == "number" && (this.$printMarginColumn = e),
                  (this.$showPrintMargin = !!e),
                  this.$updatePrintMargin();
              },
              get: function () {
                return this.$showPrintMargin && this.$printMarginColumn;
              },
            },
            showGutter: {
              set: function (e) {
                (this.$gutter.style.display = e ? "block" : "none"),
                  this.$loop.schedule(this.CHANGE_FULL),
                  this.onGutterResize();
              },
              initialValue: !0,
            },
            useSvgGutterIcons: {
              set: function (e) {
                this.$gutterLayer.$useSvgGutterIcons = e;
              },
              initialValue: !1,
            },
            showFoldedAnnotations: {
              set: function (e) {
                this.$gutterLayer.$showFoldedAnnotations = e;
              },
              initialValue: !1,
            },
            fadeFoldWidgets: {
              set: function (e) {
                i.setCssClass(this.$gutter, "ace_fade-fold-widgets", e);
              },
              initialValue: !1,
            },
            showFoldWidgets: {
              set: function (e) {
                this.$gutterLayer.setShowFoldWidgets(e),
                  this.$loop.schedule(this.CHANGE_GUTTER);
              },
              initialValue: !0,
            },
            displayIndentGuides: {
              set: function (e) {
                this.$textLayer.setDisplayIndentGuides(e) &&
                  this.$loop.schedule(this.CHANGE_TEXT);
              },
              initialValue: !0,
            },
            highlightIndentGuides: {
              set: function (e) {
                this.$textLayer.setHighlightIndentGuides(e) == 1
                  ? this.$textLayer.$highlightIndentGuide()
                  : this.$textLayer.$clearActiveIndentGuide(
                      this.$textLayer.$lines.cells
                    );
              },
              initialValue: !0,
            },
            highlightGutterLine: {
              set: function (e) {
                this.$gutterLayer.setHighlightGutterLine(e),
                  this.$loop.schedule(this.CHANGE_GUTTER);
              },
              initialValue: !0,
            },
            hScrollBarAlwaysVisible: {
              set: function (e) {
                (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) &&
                  this.$loop.schedule(this.CHANGE_SCROLL);
              },
              initialValue: !1,
            },
            vScrollBarAlwaysVisible: {
              set: function (e) {
                (!this.$vScrollBarAlwaysVisible || !this.$vScroll) &&
                  this.$loop.schedule(this.CHANGE_SCROLL);
              },
              initialValue: !1,
            },
            fontSize: {
              set: function (e) {
                typeof e == "number" && (e += "px"),
                  (this.container.style.fontSize = e),
                  this.updateFontSize();
              },
              initialValue: 12,
            },
            fontFamily: {
              set: function (e) {
                (this.container.style.fontFamily = e), this.updateFontSize();
              },
            },
            maxLines: {
              set: function (e) {
                this.updateFull();
              },
            },
            minLines: {
              set: function (e) {
                this.$minLines < 562949953421311 || (this.$minLines = 0),
                  this.updateFull();
              },
            },
            maxPixelHeight: {
              set: function (e) {
                this.updateFull();
              },
              initialValue: 0,
            },
            scrollPastEnd: {
              set: function (e) {
                e = +e || 0;
                if (this.$scrollPastEnd == e) return;
                (this.$scrollPastEnd = e),
                  this.$loop.schedule(this.CHANGE_SCROLL);
              },
              initialValue: 0,
              handlesSet: !0,
            },
            fixedWidthGutter: {
              set: function (e) {
                (this.$gutterLayer.$fixedWidth = !!e),
                  this.$loop.schedule(this.CHANGE_GUTTER);
              },
            },
            customScrollbar: {
              set: function (e) {
                this.$updateCustomScrollbar(e);
              },
              initialValue: !1,
            },
            theme: {
              set: function (e) {
                this.setTheme(e);
              },
              get: function () {
                return this.$themeId || this.theme;
              },
              initialValue: "./theme/textmate",
              handlesSet: !0,
            },
            hasCssTransforms: {},
            useTextareaForIME: { initialValue: !w.isMobile && !w.isIE },
          }),
          (t.VirtualRenderer = E);
      }
    ),
    define(
      "ace/worker/worker_client",
      [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/net",
        "ace/lib/event_emitter",
        "ace/config",
      ],
      function (e, t, n) {
        "use strict";
        function u(e) {
          var t = "importScripts('" + i.qualifyURL(e) + "');";
          try {
            return new Blob([t], { type: "application/javascript" });
          } catch (n) {
            var r =
                window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder,
              s = new r();
            return s.append(t), s.getBlob("application/javascript");
          }
        }
        function a(e) {
          if (typeof Worker == "undefined")
            return { postMessage: function () {}, terminate: function () {} };
          if (o.get("loadWorkerFromBlob")) {
            var t = u(e),
              n = window.URL || window.webkitURL,
              r = n.createObjectURL(t);
            return new Worker(r);
          }
          return new Worker(e);
        }
        var r = e("../lib/oop"),
          i = e("../lib/net"),
          s = e("../lib/event_emitter").EventEmitter,
          o = e("../config"),
          f = function (e) {
            e.postMessage ||
              (e = this.$createWorkerFromOldConfig.apply(this, arguments)),
              (this.$worker = e),
              (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this)),
              (this.changeListener = this.changeListener.bind(this)),
              (this.onMessage = this.onMessage.bind(this)),
              (this.callbackId = 1),
              (this.callbacks = {}),
              (this.$worker.onmessage = this.onMessage);
          };
        (function () {
          r.implement(this, s),
            (this.$createWorkerFromOldConfig = function (t, n, r, i, s) {
              e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl);
              if (o.get("packaged") || !e.toUrl)
                i = i || o.moduleUrl(n, "worker");
              else {
                var u = this.$normalizePath;
                i = i || u(e.toUrl("ace/worker/worker.js", null, "_"));
                var f = {};
                t.forEach(function (t) {
                  f[t] = u(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
                });
              }
              return (
                (this.$worker = a(i)),
                s && this.send("importScripts", s),
                this.$worker.postMessage({
                  init: !0,
                  tlns: f,
                  module: n,
                  classname: r,
                }),
                this.$worker
              );
            }),
            (this.onMessage = function (e) {
              var t = e.data;
              switch (t.type) {
                case "event":
                  this._signal(t.name, { data: t.data });
                  break;
                case "call":
                  var n = this.callbacks[t.id];
                  n && (n(t.data), delete this.callbacks[t.id]);
                  break;
                case "error":
                  this.reportError(t.data);
                  break;
                case "log":
                  window.console &&
                    console.log &&
                    console.log.apply(console, t.data);
              }
            }),
            (this.reportError = function (e) {
              window.console && console.error && console.error(e);
            }),
            (this.$normalizePath = function (e) {
              return i.qualifyURL(e);
            }),
            (this.terminate = function () {
              this._signal("terminate", {}),
                (this.deltaQueue = null),
                this.$worker.terminate(),
                (this.$worker.onerror = function (e) {
                  e.preventDefault();
                }),
                (this.$worker = null),
                this.$doc && this.$doc.off("change", this.changeListener),
                (this.$doc = null);
            }),
            (this.send = function (e, t) {
              this.$worker.postMessage({ command: e, args: t });
            }),
            (this.call = function (e, t, n) {
              if (n) {
                var r = this.callbackId++;
                (this.callbacks[r] = n), t.push(r);
              }
              this.send(e, t);
            }),
            (this.emit = function (e, t) {
              try {
                t.data &&
                  t.data.err &&
                  (t.data.err = {
                    message: t.data.err.message,
                    stack: t.data.err.stack,
                    code: t.data.err.code,
                  }),
                  this.$worker &&
                    this.$worker.postMessage({
                      event: e,
                      data: { data: t.data },
                    });
              } catch (n) {
                console.error(n.stack);
              }
            }),
            (this.attachToDocument = function (e) {
              this.$doc && this.terminate(),
                (this.$doc = e),
                this.call("setValue", [e.getValue()]),
                e.on("change", this.changeListener, !0);
            }),
            (this.changeListener = function (e) {
              this.deltaQueue ||
                ((this.deltaQueue = []), setTimeout(this.$sendDeltaQueue, 0)),
                e.action == "insert"
                  ? this.deltaQueue.push(e.start, e.lines)
                  : this.deltaQueue.push(e.start, e.end);
            }),
            (this.$sendDeltaQueue = function () {
              var e = this.deltaQueue;
              if (!e) return;
              (this.deltaQueue = null),
                e.length > 50 && e.length > this.$doc.getLength() >> 1
                  ? this.call("setValue", [this.$doc.getValue()])
                  : this.emit("change", { data: e });
            });
        }).call(f.prototype);
        var l = function (e, t, n) {
          var r = null,
            i = !1,
            u = Object.create(s),
            a = [],
            l = new f({
              messageBuffer: a,
              terminate: function () {},
              postMessage: function (e) {
                a.push(e);
                if (!r) return;
                i ? setTimeout(c) : c();
              },
            });
          l.setEmitSync = function (e) {
            i = e;
          };
          var c = function () {
            var e = a.shift();
            e.command
              ? r[e.command].apply(r, e.args)
              : e.event && u._signal(e.event, e.data);
          };
          return (
            (u.postMessage = function (e) {
              l.onMessage({ data: e });
            }),
            (u.callback = function (e, t) {
              this.postMessage({ type: "call", id: t, data: e });
            }),
            (u.emit = function (e, t) {
              this.postMessage({ type: "event", name: e, data: t });
            }),
            o.loadModule(["worker", t], function (e) {
              r = new e[n](u);
              while (a.length) c();
            }),
            l
          );
        };
        (t.UIWorkerClient = l), (t.WorkerClient = f), (t.createWorker = a);
      }
    ),
    define(
      "ace/placeholder",
      [
        "require",
        "exports",
        "module",
        "ace/range",
        "ace/lib/event_emitter",
        "ace/lib/oop",
      ],
      function (e, t, n) {
        "use strict";
        var r = e("./range").Range,
          i = e("./lib/event_emitter").EventEmitter,
          s = e("./lib/oop"),
          o = (function () {
            function e(e, t, n, r, i, s) {
              var o = this;
              (this.length = t),
                (this.session = e),
                (this.doc = e.getDocument()),
                (this.mainClass = i),
                (this.othersClass = s),
                (this.$onUpdate = this.onUpdate.bind(this)),
                this.doc.on("change", this.$onUpdate, !0),
                (this.$others = r),
                (this.$onCursorChange = function () {
                  setTimeout(function () {
                    o.onCursorChange();
                  });
                }),
                (this.$pos = n);
              var u = e.getUndoManager().$undoStack ||
                e.getUndoManager().$undostack || { length: -1 };
              (this.$undoStackDepth = u.length),
                this.setup(),
                e.selection.on("changeCursor", this.$onCursorChange);
            }
            return (
              (e.prototype.setup = function () {
                var e = this,
                  t = this.doc,
                  n = this.session;
                (this.selectionBefore = n.selection.toJSON()),
                  n.selection.inMultiSelectMode && n.selection.toSingleRange(),
                  (this.pos = t.createAnchor(this.$pos.row, this.$pos.column));
                var i = this.pos;
                (i.$insertRight = !0),
                  i.detach(),
                  (i.markerId = n.addMarker(
                    new r(i.row, i.column, i.row, i.column + this.length),
                    this.mainClass,
                    null,
                    !1
                  )),
                  (this.others = []),
                  this.$others.forEach(function (n) {
                    var r = t.createAnchor(n.row, n.column);
                    (r.$insertRight = !0), r.detach(), e.others.push(r);
                  }),
                  n.setUndoSelect(!1);
              }),
              (e.prototype.showOtherMarkers = function () {
                if (this.othersActive) return;
                var e = this.session,
                  t = this;
                (this.othersActive = !0),
                  this.others.forEach(function (n) {
                    n.markerId = e.addMarker(
                      new r(n.row, n.column, n.row, n.column + t.length),
                      t.othersClass,
                      null,
                      !1
                    );
                  });
              }),
              (e.prototype.hideOtherMarkers = function () {
                if (!this.othersActive) return;
                this.othersActive = !1;
                for (var e = 0; e < this.others.length; e++)
                  this.session.removeMarker(this.others[e].markerId);
              }),
              (e.prototype.onUpdate = function (e) {
                if (this.$updating) return this.updateAnchors(e);
                var t = e;
                if (t.start.row !== t.end.row) return;
                if (t.start.row !== this.pos.row) return;
                this.$updating = !0;
                var n =
                    e.action === "insert"
                      ? t.end.column - t.start.column
                      : t.start.column - t.end.column,
                  i =
                    t.start.column >= this.pos.column &&
                    t.start.column <= this.pos.column + this.length + 1,
                  s = t.start.column - this.pos.column;
                this.updateAnchors(e), i && (this.length += n);
                if (i && !this.session.$fromUndo)
                  if (e.action === "insert")
                    for (var o = this.others.length - 1; o >= 0; o--) {
                      var u = this.others[o],
                        a = { row: u.row, column: u.column + s };
                      this.doc.insertMergedLines(a, e.lines);
                    }
                  else if (e.action === "remove")
                    for (var o = this.others.length - 1; o >= 0; o--) {
                      var u = this.others[o],
                        a = { row: u.row, column: u.column + s };
                      this.doc.remove(
                        new r(a.row, a.column, a.row, a.column - n)
                      );
                    }
                (this.$updating = !1), this.updateMarkers();
              }),
              (e.prototype.updateAnchors = function (e) {
                this.pos.onChange(e);
                for (var t = this.others.length; t--; )
                  this.others[t].onChange(e);
                this.updateMarkers();
              }),
              (e.prototype.updateMarkers = function () {
                if (this.$updating) return;
                var e = this,
                  t = this.session,
                  n = function (n, i) {
                    t.removeMarker(n.markerId),
                      (n.markerId = t.addMarker(
                        new r(n.row, n.column, n.row, n.column + e.length),
                        i,
                        null,
                        !1
                      ));
                  };
                n(this.pos, this.mainClass);
                for (var i = this.others.length; i--; )
                  n(this.others[i], this.othersClass);
              }),
              (e.prototype.onCursorChange = function (e) {
                if (this.$updating || !this.session) return;
                var t = this.session.selection.getCursor();
                t.row === this.pos.row &&
                t.column >= this.pos.column &&
                t.column <= this.pos.column + this.length
                  ? (this.showOtherMarkers(), this._emit("cursorEnter", e))
                  : (this.hideOtherMarkers(), this._emit("cursorLeave", e));
              }),
              (e.prototype.detach = function () {
                this.session.removeMarker(this.pos && this.pos.markerId),
                  this.hideOtherMarkers(),
                  this.doc.off("change", this.$onUpdate),
                  this.session.selection.off(
                    "changeCursor",
                    this.$onCursorChange
                  ),
                  this.session.setUndoSelect(!0),
                  (this.session = null);
              }),
              (e.prototype.cancel = function () {
                if (this.$undoStackDepth === -1) return;
                var e = this.session.getUndoManager(),
                  t =
                    (e.$undoStack || e.$undostack).length - this.$undoStackDepth;
                for (var n = 0; n < t; n++) e.undo(this.session, !0);
                this.selectionBefore &&
                  this.session.selection.fromJSON(this.selectionBefore);
              }),
              e
            );
          })();
        s.implement(o.prototype, i), (t.PlaceHolder = o);
      }
    ),
    define(
      "ace/mouse/multi_select_handler",
      ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"],
      function (e, t, n) {
        function s(e, t) {
          return e.row == t.row && e.column == t.column;
        }
        function o(e) {
          var t = e.domEvent,
            n = t.altKey,
            o = t.shiftKey,
            u = t.ctrlKey,
            a = e.getAccelKey(),
            f = e.getButton();
          u && i.isMac && (f = t.button);
          if (e.editor1.inMultiSelectMode && f == 2) {
            e.editor1.textInput.onContextMenu(e.domEvent);
            return;
          }
          if (!u && !n && !a) {
            f === 0 &&
              e.editor1.inMultiSelectMode &&
              e.editor1.exitMultiSelectMode();
            return;
          }
          if (f !== 0) return;
          var l = e.editor1,
            c = l.selection,
            h = l.inMultiSelectMode,
            p = e.getDocumentPosition(),
            d = c.getCursor(),
            v = e.inSelection() || (c.isEmpty() && s(p, d)),
            m = e.x,
            g = e.y,
            y = function (e) {
              (m = e.clientX), (g = e.clientY);
            },
            b = l.session,
            w = l.renderer.pixelToScreenCoordinates(m, g),
            E = w,
            S;
          if (l.$mouseHandler.$enableJumpToDef)
            (u && n) || (a && n)
              ? (S = o ? "block" : "add")
              : n && l.$blockSelectEnabled && (S = "block");
          else if (a && !n) {
            S = "add";
            if (!h && o) return;
          } else n && l.$blockSelectEnabled && (S = "block");
          S && i.isMac && t.ctrlKey && l.$mouseHandler.cancelContextMenu();
          if (S == "add") {
            if (!h && v) return;
            if (!h) {
              var x = c.toOrientedRange();
              l.addSelectionMarker(x);
            }
            var T = c.rangeList.rangeAtPoint(p);
            (l.inVirtualSelectionMode = !0),
              o &&
                ((T = null), (x = c.ranges[0] || x), l.removeSelectionMarker(x)),
              l.once("mouseup", function () {
                var e = c.toOrientedRange();
                T && e.isEmpty() && s(T.cursor, e.cursor)
                  ? c.substractPoint(e.cursor)
                  : (o
                      ? c.substractPoint(x.cursor)
                      : x && (l.removeSelectionMarker(x), c.addRange(x)),
                    c.addRange(e)),
                  (l.inVirtualSelectionMode = !1);
              });
          } else if (S == "block") {
            e.stop(), (l.inVirtualSelectionMode = !0);
            var N,
              C = [],
              k = function () {
                var e = l.renderer.pixelToScreenCoordinates(m, g),
                  t = b.screenToDocumentPosition(e.row, e.column, e.offsetX);
                if (s(E, e) && s(t, c.lead)) return;
                (E = e),
                  l.selection.moveToPosition(t),
                  l.renderer.scrollCursorIntoView(),
                  l.removeSelectionMarkers(C),
                  (C = c.rectangularRangeBlock(E, w)),
                  l.$mouseHandler.$clickSelection &&
                    C.length == 1 &&
                    C[0].isEmpty() &&
                    (C[0] = l.$mouseHandler.$clickSelection.clone()),
                  C.forEach(l.addSelectionMarker, l),
                  l.updateSelectionMarkers();
              };
            h && !a
              ? c.toSingleRange()
              : !h && a && ((N = c.toOrientedRange()), l.addSelectionMarker(N)),
              o ? (w = b.documentToScreenPosition(c.lead)) : c.moveToPosition(p),
              (E = { row: -1, column: -1 });
            var L = function (e) {
                k(),
                  clearInterval(O),
                  l.removeSelectionMarkers(C),
                  C.length || (C = [c.toOrientedRange()]),
                  N && (l.removeSelectionMarker(N), c.toSingleRange(N));
                for (var t = 0; t < C.length; t++) c.addRange(C[t]);
                (l.inVirtualSelectionMode = !1),
                  (l.$mouseHandler.$clickSelection = null);
              },
              A = k;
            r.capture(l.container, y, L);
            var O = setInterval(function () {
              A();
            }, 20);
            return e.preventDefault();
          }
        }
        var r = e("../lib/event"),
          i = e("../lib/useragent");
        t.onMouseDown = o;
      }
    ),
    define(
      "ace/commands/multi_select_commands",
      ["require", "exports", "module", "ace/keyboard/hash_handler"],
      function (e, t, n) {
        (t.defaultCommands = [
          {
            name: "addCursorAbove",
            description: "Add cursor above",
            exec: function (e) {
              e.selectMoreLines(-1);
            },
            bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "addCursorBelow",
            description: "Add cursor below",
            exec: function (e) {
              e.selectMoreLines(1);
            },
            bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "addCursorAboveSkipCurrent",
            description: "Add cursor above (skip current)",
            exec: function (e) {
              e.selectMoreLines(-1, !0);
            },
            bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "addCursorBelowSkipCurrent",
            description: "Add cursor below (skip current)",
            exec: function (e) {
              e.selectMoreLines(1, !0);
            },
            bindKey: { win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectMoreBefore",
            description: "Select more before",
            exec: function (e) {
              e.selectMore(-1);
            },
            bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectMoreAfter",
            description: "Select more after",
            exec: function (e) {
              e.selectMore(1);
            },
            bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectNextBefore",
            description: "Select next before",
            exec: function (e) {
              e.selectMore(-1, !0);
            },
            bindKey: { win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "selectNextAfter",
            description: "Select next after",
            exec: function (e) {
              e.selectMore(1, !0);
            },
            bindKey: { win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
          {
            name: "toggleSplitSelectionIntoLines",
            description: "Split selection into lines",
            exec: function (e) {
              e.multiSelect.rangeCount > 1
                ? e.multiSelect.joinSelections()
                : e.multiSelect.splitIntoLines();
            },
            bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
            readOnly: !0,
          },
          {
            name: "splitSelectionIntoLines",
            description: "Split into lines",
            exec: function (e) {
              e.multiSelect.splitIntoLines();
            },
            readOnly: !0,
          },
          {
            name: "alignCursors",
            description: "Align cursors",
            exec: function (e) {
              e.alignCursors();
            },
            bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
            scrollIntoView: "cursor",
          },
          {
            name: "findAll",
            description: "Find all",
            exec: function (e) {
              e.findAll();
            },
            bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
            scrollIntoView: "cursor",
            readOnly: !0,
          },
        ]),
          (t.multiSelectCommands = [
            {
              name: "singleSelection",
              description: "Single selection",
              bindKey: "esc",
              exec: function (e) {
                e.exitMultiSelectMode();
              },
              scrollIntoView: "cursor",
              readOnly: !0,
              isAvailable: function (e) {
                return e && e.inMultiSelectMode;
              },
            },
          ]);
        var r = e("../keyboard/hash_handler").HashHandler;
        t.keyboardHandler = new r(t.multiSelectCommands);
      }
    ),
    define(
      "ace/multi_select",
      [
        "require",
        "exports",
        "module",
        "ace/range_list",
        "ace/range",
        "ace/selection",
        "ace/mouse/multi_select_handler",
        "ace/lib/event",
        "ace/lib/lang",
        "ace/commands/multi_select_commands",
        "ace/search",
        "ace/edit_session",
        "ace/editor1",
        "ace/config",
      ],
      function (e, t, n) {
        function h(e, t, n) {
          return (
            (c.$options.wrap = !0),
            (c.$options.needle = t),
            (c.$options.backwards = n == -1),
            c.find(e)
          );
        }
        function v(e, t) {
          return e.row == t.row && e.column == t.column;
        }
        function m(e) {
          if (e.$multiselectOnSessionChange) return;
          (e.$onAddRange = e.$onAddRange.bind(e)),
            (e.$onRemoveRange = e.$onRemoveRange.bind(e)),
            (e.$onMultiSelect = e.$onMultiSelect.bind(e)),
            (e.$onSingleSelect = e.$onSingleSelect.bind(e)),
            (e.$multiselectOnSessionChange = t.onSessionChange.bind(e)),
            (e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e)),
            e.$multiselectOnSessionChange(e),
            e.on("changeSession", e.$multiselectOnSessionChange),
            e.on("mousedown", o),
            e.commands.addCommands(f.defaultCommands),
            g(e);
        }
        function g(e) {
          function r(t) {
            n && (e.renderer.setMouseCursor(""), (n = !1));
          }
          if (!e.textInput) return;
          var t = e.textInput.getElement(),
            n = !1;
          u.addListener(
            t,
            "keydown",
            function (t) {
              var i = t.keyCode == 18 && !(t.ctrlKey || t.shiftKey || t.metaKey);
              e.$blockSelectEnabled && i
                ? n || (e.renderer.setMouseCursor("crosshair"), (n = !0))
                : n && r();
            },
            e
          ),
            u.addListener(t, "keyup", r, e),
            u.addListener(t, "blur", r, e);
        }
        var r = e("./range_list").RangeList,
          i = e("./range").Range,
          s = e("./selection").Selection,
          o = e("./mouse/multi_select_handler").onMouseDown,
          u = e("./lib/event"),
          a = e("./lib/lang"),
          f = e("./commands/multi_select_commands");
        t.commands = f.defaultCommands.concat(f.multiSelectCommands);
        var l = e("./search").Search,
          c = new l(),
          p = e("./edit_session").EditSession;
        (function () {
          this.getSelectionMarkers = function () {
            return this.$selectionMarkers;
          };
        }).call(p.prototype),
          function () {
            (this.ranges = null),
              (this.rangeList = null),
              (this.addRange = function (e, t) {
                if (!e) return;
                if (!this.inMultiSelectMode && this.rangeCount === 0) {
                  var n = this.toOrientedRange();
                  this.rangeList.add(n), this.rangeList.add(e);
                  if (this.rangeList.ranges.length != 2)
                    return (
                      this.rangeList.removeAll(), t || this.fromOrientedRange(e)
                    );
                  this.rangeList.removeAll(),
                    this.rangeList.add(n),
                    this.$onAddRange(n);
                }
                e.cursor || (e.cursor = e.end);
                var r = this.rangeList.add(e);
                return (
                  this.$onAddRange(e),
                  r.length && this.$onRemoveRange(r),
                  this.rangeCount > 1 &&
                    !this.inMultiSelectMode &&
                    (this._signal("multiSelect"),
                    (this.inMultiSelectMode = !0),
                    (this.session.$undoSelect = !1),
                    this.rangeList.attach(this.session)),
                  t || this.fromOrientedRange(e)
                );
              }),
              (this.toSingleRange = function (e) {
                e = e || this.ranges[0];
                var t = this.rangeList.removeAll();
                t.length && this.$onRemoveRange(t),
                  e && this.fromOrientedRange(e);
              }),
              (this.substractPoint = function (e) {
                var t = this.rangeList.substractPoint(e);
                if (t) return this.$onRemoveRange(t), t[0];
              }),
              (this.mergeOverlappingRanges = function () {
                var e = this.rangeList.merge();
                e.length && this.$onRemoveRange(e);
              }),
              (this.$onAddRange = function (e) {
                (this.rangeCount = this.rangeList.ranges.length),
                  this.ranges.unshift(e),
                  this._signal("addRange", { range: e });
              }),
              (this.$onRemoveRange = function (e) {
                this.rangeCount = this.rangeList.ranges.length;
                if (this.rangeCount == 1 && this.inMultiSelectMode) {
                  var t = this.rangeList.ranges.pop();
                  e.push(t), (this.rangeCount = 0);
                }
                for (var n = e.length; n--; ) {
                  var r = this.ranges.indexOf(e[n]);
                  this.ranges.splice(r, 1);
                }
                this._signal("removeRange", { ranges: e }),
                  this.rangeCount === 0 &&
                    this.inMultiSelectMode &&
                    ((this.inMultiSelectMode = !1),
                    this._signal("singleSelect"),
                    (this.session.$undoSelect = !0),
                    this.rangeList.detach(this.session)),
                  (t = t || this.ranges[0]),
                  t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t);
              }),
              (this.$initRangeList = function () {
                if (this.rangeList) return;
                (this.rangeList = new r()),
                  (this.ranges = []),
                  (this.rangeCount = 0);
              }),
              (this.getAllRanges = function () {
                return this.rangeCount
                  ? this.rangeList.ranges.concat()
                  : [this.getRange()];
              }),
              (this.splitIntoLines = function () {
                var e = this.ranges.length ? this.ranges : [this.getRange()],
                  t = [];
                for (var n = 0; n < e.length; n++) {
                  var r = e[n],
                    s = r.start.row,
                    o = r.end.row;
                  if (s === o) t.push(r.clone());
                  else {
                    t.push(
                      new i(s, r.start.column, s, this.session.getLine(s).length)
                    );
                    while (++s < o) t.push(this.getLineRange(s, !0));
                    t.push(new i(o, 0, o, r.end.column));
                  }
                  n == 0 && !this.isBackwards() && (t = t.reverse());
                }
                this.toSingleRange();
                for (var n = t.length; n--; ) this.addRange(t[n]);
              }),
              (this.joinSelections = function () {
                var e = this.rangeList.ranges,
                  t = e[e.length - 1],
                  n = i.fromPoints(e[0].start, t.end);
                this.toSingleRange(),
                  this.setSelectionRange(n, t.cursor == t.start);
              }),
              (this.toggleBlockSelection = function () {
                if (this.rangeCount > 1) {
                  var e = this.rangeList.ranges,
                    t = e[e.length - 1],
                    n = i.fromPoints(e[0].start, t.end);
                  this.toSingleRange(),
                    this.setSelectionRange(n, t.cursor == t.start);
                } else {
                  var r = this.session.documentToScreenPosition(this.cursor),
                    s = this.session.documentToScreenPosition(this.anchor),
                    o = this.rectangularRangeBlock(r, s);
                  o.forEach(this.addRange, this);
                }
              }),
              (this.rectangularRangeBlock = function (e, t, n) {
                var r = [],
                  s = e.column < t.column;
                if (s)
                  var o = e.column,
                    u = t.column,
                    a = e.offsetX,
                    f = t.offsetX;
                else
                  var o = t.column,
                    u = e.column,
                    a = t.offsetX,
                    f = e.offsetX;
                var l = e.row < t.row;
                if (l)
                  var c = e.row,
                    h = t.row;
                else
                  var c = t.row,
                    h = e.row;
                o < 0 && (o = 0), c < 0 && (c = 0), c == h && (n = !0);
                var p;
                for (var d = c; d <= h; d++) {
                  var m = i.fromPoints(
                    this.session.screenToDocumentPosition(d, o, a),
                    this.session.screenToDocumentPosition(d, u, f)
                  );
                  if (m.isEmpty()) {
                    if (p && v(m.end, p)) break;
                    p = m.end;
                  }
                  (m.cursor = s ? m.start : m.end), r.push(m);
                }
                l && r.reverse();
                if (!n) {
                  var g = r.length - 1;
                  while (r[g].isEmpty() && g > 0) g--;
                  if (g > 0) {
                    var y = 0;
                    while (r[y].isEmpty()) y++;
                  }
                  for (var b = g; b >= y; b--) r[b].isEmpty() && r.splice(b, 1);
                }
                return r;
              });
          }.call(s.prototype);
        var d = e("./editor1").Editor;
        (function () {
          (this.updateSelectionMarkers = function () {
            this.renderer.updateCursor(), this.renderer.updateBackMarkers();
          }),
            (this.addSelectionMarker = function (e) {
              e.cursor || (e.cursor = e.end);
              var t = this.getSelectionStyle();
              return (
                (e.marker = this.session.addMarker(e, "ace_selection", t)),
                this.session.$selectionMarkers.push(e),
                (this.session.selectionMarkerCount =
                  this.session.$selectionMarkers.length),
                e
              );
            }),
            (this.removeSelectionMarker = function (e) {
              if (!e.marker) return;
              this.session.removeMarker(e.marker);
              var t = this.session.$selectionMarkers.indexOf(e);
              t != -1 && this.session.$selectionMarkers.splice(t, 1),
                (this.session.selectionMarkerCount =
                  this.session.$selectionMarkers.length);
            }),
            (this.removeSelectionMarkers = function (e) {
              var t = this.session.$selectionMarkers;
              for (var n = e.length; n--; ) {
                var r = e[n];
                if (!r.marker) continue;
                this.session.removeMarker(r.marker);
                var i = t.indexOf(r);
                i != -1 && t.splice(i, 1);
              }
              this.session.selectionMarkerCount = t.length;
            }),
            (this.$onAddRange = function (e) {
              this.addSelectionMarker(e.range),
                this.renderer.updateCursor(),
                this.renderer.updateBackMarkers();
            }),
            (this.$onRemoveRange = function (e) {
              this.removeSelectionMarkers(e.ranges),
                this.renderer.updateCursor(),
                this.renderer.updateBackMarkers();
            }),
            (this.$onMultiSelect = function (e) {
              if (this.inMultiSelectMode) return;
              (this.inMultiSelectMode = !0),
                this.setStyle("ace_multiselect"),
                this.keyBinding.addKeyboardHandler(f.keyboardHandler),
                this.commands.setDefaultHandler("exec", this.$onMultiSelectExec),
                this.renderer.updateCursor(),
                this.renderer.updateBackMarkers();
            }),
            (this.$onSingleSelect = function (e) {
              if (this.session.multiSelect.inVirtualMode) return;
              (this.inMultiSelectMode = !1),
                this.unsetStyle("ace_multiselect"),
                this.keyBinding.removeKeyboardHandler(f.keyboardHandler),
                this.commands.removeDefaultHandler(
                  "exec",
                  this.$onMultiSelectExec
                ),
                this.renderer.updateCursor(),
                this.renderer.updateBackMarkers(),
                this._emit("changeSelection");
            }),
            (this.$onMultiSelectExec = function (e) {
              var t = e.command,
                n = e.editor1;
              if (!n.multiSelect) return;
              if (!t.multiSelectAction) {
                var r = t.exec(n, e.args || {});
                n.multiSelect.addRange(n.multiSelect.toOrientedRange()),
                  n.multiSelect.mergeOverlappingRanges();
              } else
                t.multiSelectAction == "forEach"
                  ? (r = n.forEachSelection(t, e.args))
                  : t.multiSelectAction == "forEachLine"
                  ? (r = n.forEachSelection(t, e.args, !0))
                  : t.multiSelectAction == "single"
                  ? (n.exitMultiSelectMode(), (r = t.exec(n, e.args || {})))
                  : (r = t.multiSelectAction(n, e.args || {}));
              return r;
            }),
            (this.forEachSelection = function (e, t, n) {
              if (this.inVirtualSelectionMode) return;
              var r = n && n.keepOrder,
                i = n == 1 || (n && n.$byLines),
                o = this.session,
                u = this.selection,
                a = u.rangeList,
                f = (r ? u : a).ranges,
                l;
              if (!f.length)
                return e.exec ? e.exec(this, t || {}) : e(this, t || {});
              var c = u._eventRegistry;
              u._eventRegistry = {};
              var h = new s(o);
              this.inVirtualSelectionMode = !0;
              for (var p = f.length; p--; ) {
                if (i) while (p > 0 && f[p].start.row == f[p - 1].end.row) p--;
                h.fromOrientedRange(f[p]),
                  (h.index = p),
                  (this.selection = o.selection = h);
                var d = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                !l && d !== undefined && (l = d), h.toOrientedRange(f[p]);
              }
              h.detach(),
                (this.selection = o.selection = u),
                (this.inVirtualSelectionMode = !1),
                (u._eventRegistry = c),
                u.mergeOverlappingRanges(),
                u.ranges[0] && u.fromOrientedRange(u.ranges[0]);
              var v = this.renderer.$scrollAnimation;
              return (
                this.onCursorChange(),
                this.onSelectionChange(),
                v && v.from == v.to && this.renderer.animateScrolling(v.from),
                l
              );
            }),
            (this.exitMultiSelectMode = function () {
              if (!this.inMultiSelectMode || this.inVirtualSelectionMode) return;
              this.multiSelect.toSingleRange();
            }),
            (this.getSelectedText = function () {
              var e = "";
              if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var t = this.multiSelect.rangeList.ranges,
                  n = [];
                for (var r = 0; r < t.length; r++)
                  n.push(this.session.getTextRange(t[r]));
                var i = this.session.getDocument().getNewLineCharacter();
                (e = n.join(i)),
                  e.length == (n.length - 1) * i.length && (e = "");
              } else
                this.selection.isEmpty() ||
                  (e = this.session.getTextRange(this.getSelectionRange()));
              return e;
            }),
            (this.$checkMultiselectChange = function (e, t) {
              if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var n = this.multiSelect.ranges[0];
                if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor)
                  return;
                var r =
                  t == this.multiSelect.anchor
                    ? n.cursor == n.start
                      ? n.end
                      : n.start
                    : n.cursor;
                r.row != t.row ||
                this.session.$clipPositionToDocument(r.row, r.column).column !=
                  t.column
                  ? this.multiSelect.toSingleRange(
                      this.multiSelect.toOrientedRange()
                    )
                  : this.multiSelect.mergeOverlappingRanges();
              }
            }),
            (this.findAll = function (e, t, n) {
              (t = t || {}), (t.needle = e || t.needle);
              if (t.needle == undefined) {
                var r = this.selection.isEmpty()
                  ? this.selection.getWordRange()
                  : this.selection.getRange();
                t.needle = this.session.getTextRange(r);
              }
              this.$search.set(t);
              var i = this.$search.findAll(this.session);
              if (!i.length) return 0;
              var s = this.multiSelect;
              n || s.toSingleRange(i[0]);
              for (var o = i.length; o--; ) s.addRange(i[o], !0);
              return (
                r && s.rangeList.rangeAtPoint(r.start) && s.addRange(r, !0),
                i.length
              );
            }),
            (this.selectMoreLines = function (e, t) {
              var n = this.selection.toOrientedRange(),
                r = n.cursor == n.end,
                s = this.session.documentToScreenPosition(n.cursor);
              this.selection.$desiredColumn &&
                (s.column = this.selection.$desiredColumn);
              var o = this.session.screenToDocumentPosition(s.row + e, s.column);
              if (!n.isEmpty())
                var u = this.session.documentToScreenPosition(
                    r ? n.end : n.start
                  ),
                  a = this.session.screenToDocumentPosition(u.row + e, u.column);
              else var a = o;
              if (r) {
                var f = i.fromPoints(o, a);
                f.cursor = f.start;
              } else {
                var f = i.fromPoints(a, o);
                f.cursor = f.end;
              }
              f.desiredColumn = s.column;
              if (!this.selection.inMultiSelectMode) this.selection.addRange(n);
              else if (t) var l = n.cursor;
              this.selection.addRange(f), l && this.selection.substractPoint(l);
            }),
            (this.transposeSelections = function (e) {
              var t = this.session,
                n = t.multiSelect,
                r = n.ranges;
              for (var i = r.length; i--; ) {
                var s = r[i];
                if (s.isEmpty()) {
                  var o = t.getWordRange(s.start.row, s.start.column);
                  (s.start.row = o.start.row),
                    (s.start.column = o.start.column),
                    (s.end.row = o.end.row),
                    (s.end.column = o.end.column);
                }
              }
              n.mergeOverlappingRanges();
              var u = [];
              for (var i = r.length; i--; ) {
                var s = r[i];
                u.unshift(t.getTextRange(s));
              }
              e < 0 ? u.unshift(u.pop()) : u.push(u.shift());
              for (var i = r.length; i--; ) {
                var s = r[i],
                  o = s.clone();
                t.replace(s, u[i]),
                  (s.start.row = o.start.row),
                  (s.start.column = o.start.column);
              }
              n.fromOrientedRange(n.ranges[0]);
            }),
            (this.selectMore = function (e, t, n) {
              var r = this.session,
                i = r.multiSelect,
                s = i.toOrientedRange();
              if (s.isEmpty()) {
                (s = r.getWordRange(s.start.row, s.start.column)),
                  (s.cursor = e == -1 ? s.start : s.end),
                  this.multiSelect.addRange(s);
                if (n) return;
              }
              var o = r.getTextRange(s),
                u = h(r, o, e);
              u &&
                ((u.cursor = e == -1 ? u.start : u.end),
                this.session.unfold(u),
                this.multiSelect.addRange(u),
                this.renderer.scrollCursorIntoView(null, 0.5)),
                t && this.multiSelect.substractPoint(s.cursor);
            }),
            (this.alignCursors = function () {
              var e = this.session,
                t = e.multiSelect,
                n = t.ranges,
                r = -1,
                s = n.filter(function (e) {
                  if (e.cursor.row == r) return !0;
                  r = e.cursor.row;
                });
              if (!n.length || s.length == n.length - 1) {
                var o = this.selection.getRange(),
                  u = o.start.row,
                  f = o.end.row,
                  l = u == f;
                if (l) {
                  var c = this.session.getLength(),
                    h;
                  do h = this.session.getLine(f);
                  while (/[=:]/.test(h) && ++f < c);
                  do h = this.session.getLine(u);
                  while (/[=:]/.test(h) && --u > 0);
                  u < 0 && (u = 0), f >= c && (f = c - 1);
                }
                var p = this.session.removeFullLines(u, f);
                (p = this.$reAlignText(p, l)),
                  this.session.insert({ row: u, column: 0 }, p.join("\n") + "\n"),
                  l ||
                    ((o.start.column = 0),
                    (o.end.column = p[p.length - 1].length)),
                  this.selection.setRange(o);
              } else {
                s.forEach(function (e) {
                  t.substractPoint(e.cursor);
                });
                var d = 0,
                  v = Infinity,
                  m = n.map(function (t) {
                    var n = t.cursor,
                      r = e.getLine(n.row),
                      i = r.substr(n.column).search(/\S/g);
                    return (
                      i == -1 && (i = 0),
                      n.column > d && (d = n.column),
                      i < v && (v = i),
                      i
                    );
                  });
                n.forEach(function (t, n) {
                  var r = t.cursor,
                    s = d - r.column,
                    o = m[n] - v;
                  s > o
                    ? e.insert(r, a.stringRepeat(" ", s - o))
                    : e.remove(new i(r.row, r.column, r.row, r.column - s + o)),
                    (t.start.column = t.end.column = d),
                    (t.start.row = t.end.row = r.row),
                    (t.cursor = t.end);
                }),
                  t.fromOrientedRange(n[0]),
                  this.renderer.updateCursor(),
                  this.renderer.updateBackMarkers();
              }
            }),
            (this.$reAlignText = function (e, t) {
              function u(e) {
                return a.stringRepeat(" ", e);
              }
              function f(e) {
                return e[2]
                  ? u(i) +
                      e[2] +
                      u(s - e[2].length + o) +
                      e[4].replace(/^([=:])\s+/, "$1 ")
                  : e[0];
              }
              function l(e) {
                return e[2]
                  ? u(i + s - e[2].length) +
                      e[2] +
                      u(o) +
                      e[4].replace(/^([=:])\s+/, "$1 ")
                  : e[0];
              }
              function c(e) {
                return e[2]
                  ? u(i) + e[2] + u(o) + e[4].replace(/^([=:])\s+/, "$1 ")
                  : e[0];
              }
              var n = !0,
                r = !0,
                i,
                s,
                o;
              return e
                .map(function (e) {
                  var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                  return t
                    ? i == null
                      ? ((i = t[1].length),
                        (s = t[2].length),
                        (o = t[3].length),
                        t)
                      : (i + s + o != t[1].length + t[2].length + t[3].length &&
                          (r = !1),
                        i != t[1].length && (n = !1),
                        i > t[1].length && (i = t[1].length),
                        s < t[2].length && (s = t[2].length),
                        o > t[3].length && (o = t[3].length),
                        t)
                    : [e];
                })
                .map(t ? f : n ? (r ? l : f) : c);
            });
        }).call(d.prototype),
          (t.onSessionChange = function (e) {
            var t = e.session;
            t &&
              !t.multiSelect &&
              ((t.$selectionMarkers = []),
              t.selection.$initRangeList(),
              (t.multiSelect = t.selection)),
              (this.multiSelect = t && t.multiSelect);
            var n = e.oldSession;
            n &&
              (n.multiSelect.off("addRange", this.$onAddRange),
              n.multiSelect.off("removeRange", this.$onRemoveRange),
              n.multiSelect.off("multiSelect", this.$onMultiSelect),
              n.multiSelect.off("singleSelect", this.$onSingleSelect),
              n.multiSelect.lead.off("change", this.$checkMultiselectChange),
              n.multiSelect.anchor.off("change", this.$checkMultiselectChange)),
              t &&
                (t.multiSelect.on("addRange", this.$onAddRange),
                t.multiSelect.on("removeRange", this.$onRemoveRange),
                t.multiSelect.on("multiSelect", this.$onMultiSelect),
                t.multiSelect.on("singleSelect", this.$onSingleSelect),
                t.multiSelect.lead.on("change", this.$checkMultiselectChange),
                t.multiSelect.anchor.on("change", this.$checkMultiselectChange)),
              t &&
                this.inMultiSelectMode != t.selection.inMultiSelectMode &&
                (t.selection.inMultiSelectMode
                  ? this.$onMultiSelect()
                  : this.$onSingleSelect());
          }),
          (t.MultiSelect = m),
          e("./config").defineOptions(d.prototype, "editor1", {
            enableMultiselect: {
              set: function (e) {
                m(this), e ? this.on("mousedown", o) : this.off("mousedown", o);
              },
              value: !0,
            },
            enableBlockSelect: {
              set: function (e) {
                this.$blockSelectEnabled = e;
              },
              value: !0,
            },
          });
      }
    ),
    define(
      "ace/mode/folding/fold_mode",
      ["require", "exports", "module", "ace/range"],
      function (e, t, n) {
        "use strict";
        var r = e("../../range").Range,
          i = (t.FoldMode = function () {});
        (function () {
          (this.foldingStartMarker = null),
            (this.foldingStopMarker = null),
            (this.getFoldWidget = function (e, t, n) {
              var r = e.getLine(n);
              return this.foldingStartMarker.test(r)
                ? "start"
                : t == "markbeginend" &&
                  this.foldingStopMarker &&
                  this.foldingStopMarker.test(r)
                ? "end"
                : "";
            }),
            (this.getFoldWidgetRange = function (e, t, n) {
              return null;
            }),
            (this.indentationBlock = function (e, t, n) {
              var i = /\S/,
                s = e.getLine(t),
                o = s.search(i);
              if (o == -1) return;
              var u = n || s.length,
                a = e.getLength(),
                f = t,
                l = t;
              while (++t < a) {
                var c = e.getLine(t).search(i);
                if (c == -1) continue;
                if (c <= o) {
                  var h = e.getTokenAt(t, 0);
                  if (!h || h.type !== "string") break;
                }
                l = t;
              }
              if (l > f) {
                var p = e.getLine(l).length;
                return new r(f, u, l, p);
              }
            }),
            (this.openingBracketBlock = function (e, t, n, i, s) {
              var o = { row: n, column: i + 1 },
                u = e.$findClosingBracket(t, o, s);
              if (!u) return;
              var a = e.foldWidgets[u.row];
              return (
                a == null && (a = e.getFoldWidget(u.row)),
                a == "start" &&
                  u.row > o.row &&
                  (u.row--, (u.column = e.getLine(u.row).length)),
                r.fromPoints(o, u)
              );
            }),
            (this.closingBracketBlock = function (e, t, n, i, s) {
              var o = { row: n, column: i },
                u = e.$findOpeningBracket(t, o);
              if (!u) return;
              return u.column++, o.column--, r.fromPoints(u, o);
            });
        }).call(i.prototype);
      }
    ),
    define(
      "ace/ext/error_marker",
      [
        "require",
        "exports",
        "module",
        "ace/line_widgets",
        "ace/lib/dom",
        "ace/range",
        "ace/config",
      ],
      function (e, t, n) {
        "use strict";
        function u(e, t, n) {
          var r = 0,
            i = e.length - 1;
          while (r <= i) {
            var s = (r + i) >> 1,
              o = n(t, e[s]);
            if (o > 0) r = s + 1;
            else {
              if (!(o < 0)) return s;
              i = s - 1;
            }
          }
          return -(r + 1);
        }
        function a(e, t, n) {
          var r = e.getAnnotations().sort(s.comparePoints);
          if (!r.length) return;
          var i = u(r, { row: t, column: -1 }, s.comparePoints);
          i < 0 && (i = -i - 1),
            i >= r.length
              ? (i = n > 0 ? 0 : r.length - 1)
              : i === 0 && n < 0 && (i = r.length - 1);
          var o = r[i];
          if (!o || !n) return;
          if (o.row === t) {
            do o = r[(i += n)];
            while (o && o.row === t);
            if (!o) return r.slice();
          }
          var a = [];
          t = o.row;
          do a[n < 0 ? "unshift" : "push"](o), (o = r[(i += n)]);
          while (o && o.row == t);
          return a.length && a;
        }
        var r = e("../line_widgets").LineWidgets,
          i = e("../lib/dom"),
          s = e("../range").Range,
          o = e("../config").nls;
        (t.showErrorMarker = function (e, t) {
          var n = e.session;
          n.widgetManager ||
            ((n.widgetManager = new r(n)), n.widgetManager.attach(e));
          var s = e.getCursorPosition(),
            u = s.row,
            f = n.widgetManager.getWidgetsAtRow(u).filter(function (e) {
              return e.type == "errorMarker";
            })[0];
          f ? f.destroy() : (u -= t);
          var l = a(n, u, t),
            c;
          if (l) {
            var h = l[0];
            (s.column =
              (h.pos && typeof h.column != "number" ? h.pos.sc : h.column) || 0),
              (s.row = h.row),
              (c = e.renderer.$gutterLayer.$annotations[s.row]);
          } else {
            if (f) return;
            c = { text: [o("Looks good!")], className: "ace_ok" };
          }
          e.session.unfold(s.row), e.selection.moveToPosition(s);
          var p = {
              row: s.row,
              fixedWidth: !0,
              coverGutter: !0,
              el: i.createElement("div"),
              type: "errorMarker",
            },
            d = p.el.appendChild(i.createElement("div")),
            v = p.el.appendChild(i.createElement("div"));
          v.className = "error_widget_arrow " + c.className;
          var m = e.renderer.$cursorLayer.getPixelPosition(s).left;
          (v.style.left = m + e.renderer.gutterWidth - 5 + "px"),
            (p.el.className = "error_widget_wrapper"),
            (d.className = "error_widget " + c.className),
            (d.innerHTML = c.text.join("<br>")),
            d.appendChild(i.createElement("div"));
          var g = function (e, t, n) {
            if (t === 0 && (n === "esc" || n === "return"))
              return p.destroy(), { command: "null" };
          };
          (p.destroy = function () {
            if (e.$mouseHandler.isMousePressed) return;
            e.keyBinding.removeKeyboardHandler(g),
              n.widgetManager.removeLineWidget(p),
              e.off("changeSelection", p.destroy),
              e.off("changeSession", p.destroy),
              e.off("mouseup", p.destroy),
              e.off("change", p.destroy);
          }),
            e.keyBinding.addKeyboardHandler(g),
            e.on("changeSelection", p.destroy),
            e.on("changeSession", p.destroy),
            e.on("mouseup", p.destroy),
            e.on("change", p.destroy),
            e.session.widgetManager.addLineWidget(p),
            (p.el.onmousedown = e.focus.bind(e)),
            e.renderer.scrollCursorIntoView(null, 0.5, {
              bottom: p.el.offsetHeight,
            });
        }),
          i.importCssString(
            "\n    .error_widget_wrapper {\n        background: inherit;\n        color: inherit;\n        border:none\n    }\n    .error_widget {\n        border-top: solid 2px;\n        border-bottom: solid 2px;\n        margin: 5px 0;\n        padding: 10px 40px;\n        white-space: pre-wrap;\n    }\n    .error_widget.ace_error, .error_widget_arrow.ace_error{\n        border-color: #ff5a5a\n    }\n    .error_widget.ace_warning, .error_widget_arrow.ace_warning{\n        border-color: #F1D817\n    }\n    .error_widget.ace_info, .error_widget_arrow.ace_info{\n        border-color: #5a5a5a\n    }\n    .error_widget.ace_ok, .error_widget_arrow.ace_ok{\n        border-color: #5aaa5a\n    }\n    .error_widget_arrow {\n        position: absolute;\n        border: solid 5px;\n        border-top-color: transparent!important;\n        border-right-color: transparent!important;\n        border-left-color: transparent!important;\n        top: -5px;\n    }\n",
            "error_marker.css",
            !1
          );
      }
    ),
    define(
      "ace/ace",
      [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
        "ace/range",
        "ace/editor1",
        "ace/edit_session",
        "ace/undomanager",
        "ace/virtual_renderer",
        "ace/worker/worker_client",
        "ace/keyboard/hash_handler",
        "ace/placeholder",
        "ace/multi_select",
        "ace/mode/folding/fold_mode",
        "ace/theme/textmate",
        "ace/ext/error_marker",
        "ace/config",
        "ace/loader_build",
      ],
      function (e, t, n) {
        "use strict";
        e("./loader_build")(t);
        var r = e("./lib/dom"),
          i = e("./range").Range,
          s = e("./editor1").Editor,
          o = e("./edit_session").EditSession,
          u = e("./undomanager").UndoManager,
          a = e("./virtual_renderer").VirtualRenderer;
        e("./worker/worker_client"),
          e("./keyboard/hash_handler"),
          e("./placeholder"),
          e("./multi_select"),
          e("./mode/folding/fold_mode"),
          e("./theme/textmate"),
          e("./ext/error_marker"),
          (t.config = e("./config")),
          (t.edit = function (e, n) {
            if (typeof e == "string") {
              var i = e;
              e = document.getElementById(i);
              if (!e) throw new Error("ace.edit can't find div #" + i);
            }
            if (e && e.env && e.env.editor1 instanceof s) return e.env.editor1;
            var o = "";
            if (e && /input|textarea/i.test(e.tagName)) {
              var u = e;
              (o = u.value),
                (e = r.createElement("pre")),
                u.parentNode.replaceChild(e, u);
            } else e && ((o = e.textContent), (e.innerHTML = ""));
            var f = t.createEditSession(o),
              l = new s(new a(e), f, n),
              c = { document: f, editor1: l, onResize: l.resize.bind(l, null) };
            return (
              u && (c.textarea = u),
              l.on("destroy", function () {
                c.editor1.container.env = null;
              }),
              (l.container.env = l.env = c),
              l
            );
          }),
          (t.createEditSession = function (e, t) {
            var n = new o(e, t);
            return n.setUndoManager(new u()), n;
          }),
          (t.Range = i),
          (t.Editor = s),
          (t.EditSession = o),
          (t.UndoManager = u),
          (t.VirtualRenderer = a),
          (t.version = t.config.version);
      }
    );
  (function () {
    window.require(["ace/ace"], function (a) {
      if (a) {
        a.config.init(true);
        a.define = window.define;
      }
      if (!window.ace) window.ace = a;
      for (var key in a) if (a.hasOwnProperty(key)) window.ace[key] = a[key];
      window.ace["default"] = window.ace;
      if (typeof module == "object" && typeof exports == "object" && module) {
        module.exports = window.ace;
      }
    });
  })();
  