/*! For license information please see 83.87bbc8c4.chunk.js.LICENSE.txt */
(this.webpackChunkkoenigsegg_com = this.webpackChunkkoenigsegg_com || []).push([
    [83], {
        8083: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Draggable: function() {
                    return Vt
                },
                default: function() {
                    return Vt
                }
            });
            var o, r, i, l, a, s, c, u, d, p = "transform",
                f = p + "Origin",
                h = function(t) {
                    var e = t.ownerDocument || t;
                    !(p in t.style) && "msTransform" in t.style && (f = (p = "msTransform") + "Origin");
                    for (; e.parentNode && (e = e.parentNode););
                    if (r = window, c = new T, e) {
                        o = e, i = e.documentElement, l = e.body, (u = o.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                        var n = e.createElement("div"),
                            a = e.createElement("div");
                        l.appendChild(n), n.appendChild(a), n.style.position = "static", n.style[p] = "translate3d(0,0,1px)", d = a.offsetParent !== n, l.removeChild(n)
                    }
                    return e
                },
                g = [],
                x = [],
                m = function(t) {
                    return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
                },
                y = function t(e) {
                    return "fixed" === r.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
                },
                v = function t(e, n) {
                    if (e.parentNode && (o || h(e))) {
                        var r = m(e),
                            i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                            l = r ? n ? "rect" : "g" : "div",
                            c = 2 !== n ? 0 : 100,
                            u = 3 === n ? 100 : 0,
                            d = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                            p = o.createElementNS ? o.createElementNS(i.replace(/^https/, "http"), l) : o.createElement(l);
                        return n && (r ? (s || (s = t(e)), p.setAttribute("width", .01), p.setAttribute("height", .01), p.setAttribute("transform", "translate(" + c + "," + u + ")"), s.appendChild(p)) : (a || ((a = t(e)).style.cssText = d), p.style.cssText = d + "width:0.1px;height:0.1px;top:" + u + "px;left:" + c + "px", a.appendChild(p))), p
                    }
                    throw "Need document and parent."
                },
                w = function(t, e) {
                    var n, o, i, l, h, y, w = m(t),
                        b = t === w,
                        E = w ? g : x,
                        M = t.parentNode;
                    if (t === r) return t;
                    if (E.length || E.push(v(t, 1), v(t, 2), v(t, 3)), n = w ? s : a, w) b ? (l = -(i = function(t) {
                        var e, n = t.getCTM();
                        return n || (e = t.style[p], t.style[p] = "none", t.appendChild(u), n = u.getCTM(), t.removeChild(u), e ? t.style[p] = e : t.style.removeProperty(p.replace(/([A-Z])/g, "-$1").toLowerCase())), n || c.clone()
                    }(t)).e / i.a, h = -i.f / i.d, o = c) : (i = t.getBBox(), l = (o = (o = t.transform ? t.transform.baseVal : {}).numberOfItems ? o.numberOfItems > 1 ? function(t) {
                        for (var e = new T, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                        return e
                    }(o) : o.getItem(0).matrix : c).a * i.x + o.c * i.y, h = o.b * i.x + o.d * i.y), e && "g" === t.tagName.toLowerCase() && (l = h = 0), (b ? w : M).appendChild(n), n.setAttribute("transform", "matrix(" + o.a + "," + o.b + "," + o.c + "," + o.d + "," + (o.e + l) + "," + (o.f + h) + ")");
                    else {
                        if (l = h = 0, d)
                            for (o = t.offsetParent, i = t; i && (i = i.parentNode) && i !== o && i.parentNode;)(r.getComputedStyle(i)[p] + "").length > 4 && (l = i.offsetLeft, h = i.offsetTop, i = 0);
                        if ("absolute" !== (y = r.getComputedStyle(t)).position && "fixed" !== y.position)
                            for (o = t.offsetParent; M && M !== o;) l += M.scrollLeft || 0, h += M.scrollTop || 0, M = M.parentNode;
                        (i = n.style).top = t.offsetTop - h + "px", i.left = t.offsetLeft - l + "px", i[p] = y[p], i[f] = y[f], i.position = "fixed" === y.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
                    }
                    return n
                },
                b = function(t, e, n, o, r, i, l) {
                    return t.a = e, t.b = n, t.c = o, t.d = r, t.e = i, t.f = l, t
                },
                T = function() {
                    function t(t, e, n, o, r, i) {
                        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === o && (o = 1), void 0 === r && (r = 0), void 0 === i && (i = 0), b(this, t, e, n, o, r, i)
                    }
                    var e = t.prototype;
                    return e.inverse = function() {
                        var t = this.a,
                            e = this.b,
                            n = this.c,
                            o = this.d,
                            r = this.e,
                            i = this.f,
                            l = t * o - e * n || 1e-10;
                        return b(this, o / l, -e / l, -n / l, t / l, (n * i - o * r) / l, -(t * i - e * r) / l)
                    }, e.multiply = function(t) {
                        var e = this.a,
                            n = this.b,
                            o = this.c,
                            r = this.d,
                            i = this.e,
                            l = this.f,
                            a = t.a,
                            s = t.c,
                            c = t.b,
                            u = t.d,
                            d = t.e,
                            p = t.f;
                        return b(this, a * e + c * o, a * n + c * r, s * e + u * o, s * n + u * r, i + d * e + p * o, l + d * n + p * r)
                    }, e.clone = function() {
                        return new t(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, e.equals = function(t) {
                        var e = this.a,
                            n = this.b,
                            o = this.c,
                            r = this.d,
                            i = this.e,
                            l = this.f;
                        return e === t.a && n === t.b && o === t.c && r === t.d && i === t.e && l === t.f
                    }, e.apply = function(t, e) {
                        void 0 === e && (e = {});
                        var n = t.x,
                            o = t.y,
                            r = this.a,
                            i = this.b,
                            l = this.c,
                            a = this.d,
                            s = this.e,
                            c = this.f;
                        return e.x = n * r + o * l + s || 0, e.y = n * i + o * a + c || 0, e
                    }, t
                }();

            function E(t, e, n, a) {
                if (!t || !t.parentNode || (o || h(t)).documentElement === t) return new T;
                var s = function(t) {
                        for (var e, n; t && t !== l;)(n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode;
                        return e
                    }(t),
                    c = m(t) ? g : x,
                    u = w(t, n),
                    d = c[0].getBoundingClientRect(),
                    p = c[1].getBoundingClientRect(),
                    f = c[2].getBoundingClientRect(),
                    v = u.parentNode,
                    b = !a && y(t),
                    E = new T((p.left - d.left) / 100, (p.top - d.top) / 100, (f.left - d.left) / 100, (f.top - d.top) / 100, d.left + (b ? 0 : r.pageXOffset || o.scrollLeft || i.scrollLeft || l.scrollLeft || 0), d.top + (b ? 0 : r.pageYOffset || o.scrollTop || i.scrollTop || l.scrollTop || 0));
                if (v.removeChild(u), s)
                    for (d = s.length; d--;)(p = s[d]).scaleX = p.scaleY = 0, p.renderTransform(1, p);
                return e ? E.inverse() : E
            }
            var M, X, k, S, Y, C, D, L, N, P, O, _, R, A, B, I, H, F, W, z, V, K = function() {
                    return "undefined" !== typeof window
                },
                G = function() {
                    return M || K() && (M = window.gsap) && M.registerPlugin && M
                },
                U = function(t) {
                    return "function" === typeof t
                },
                j = function(t) {
                    return "object" === typeof t
                },
                q = function(t) {
                    return "undefined" === typeof t
                },
                $ = function() {
                    return !1
                },
                Z = "transform",
                J = "transformOrigin",
                Q = function(t) {
                    return Math.round(1e4 * t) / 1e4
                },
                tt = Array.isArray,
                et = function(t, e) {
                    var n = k.createElementNS ? k.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : k.createElement(t);
                    return n.style ? n : k.createElement(t)
                },
                nt = 180 / Math.PI,
                ot = 1e20,
                rt = new T,
                it = Date.now || function() {
                    return (new Date).getTime()
                },
                lt = [],
                at = {},
                st = 0,
                ct = /^(?:a|input|textarea|button|select)$/i,
                ut = 0,
                dt = {},
                pt = {},
                ft = function(t, e) {
                    var n, o = {};
                    for (n in t) o[n] = e ? t[n] * e : t[n];
                    return o
                },
                ht = function t(e, n) {
                    for (var o, r = e.length; r--;) n ? e[r].style.touchAction = n : e[r].style.removeProperty("touch-action"), (o = e[r].children) && o.length && t(o, n)
                },
                gt = function() {
                    return lt.forEach((function(t) {
                        return t()
                    }))
                },
                xt = function() {
                    return !lt.length && M.ticker.remove(gt)
                },
                mt = function(t) {
                    for (var e = lt.length; e--;) lt[e] === t && lt.splice(e, 1);
                    M.to(xt, {
                        overwrite: !0,
                        delay: 15,
                        duration: 0,
                        onComplete: xt,
                        data: "_draggable"
                    })
                },
                yt = function(t, e, n, o) {
                    if (t.addEventListener) {
                        var r = R[e];
                        o = o || (O ? {
                            passive: !1
                        } : null), t.addEventListener(r || e, n, o), r && e !== r && t.addEventListener(e, n, o)
                    }
                },
                vt = function(t, e, n) {
                    if (t.removeEventListener) {
                        var o = R[e];
                        t.removeEventListener(o || e, n), o && e !== o && t.removeEventListener(e, n)
                    }
                },
                wt = function(t) {
                    t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation()
                },
                bt = function t(e) {
                    B = e.touches && A < e.touches.length, vt(e.target, "touchend", t)
                },
                Tt = function(t) {
                    B = t.touches && A < t.touches.length, yt(t.target, "touchend", bt)
                },
                Et = function(t) {
                    return X.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
                },
                Mt = function(t) {
                    return X.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
                },
                Xt = function t(e, n) {
                    yt(e, "scroll", n), St(e.parentNode) || t(e.parentNode, n)
                },
                kt = function t(e, n) {
                    vt(e, "scroll", n), St(e.parentNode) || t(e.parentNode, n)
                },
                St = function(t) {
                    return !(t && t !== S && 9 !== t.nodeType && t !== k.body && t !== X && t.nodeType && t.parentNode)
                },
                Yt = function(t, e) {
                    var n = "x" === e ? "Width" : "Height",
                        o = "scroll" + n,
                        r = "client" + n;
                    return Math.max(0, St(t) ? Math.max(S[o], Y[o]) - (X["inner" + n] || S[r] || Y[r]) : t[o] - t[r])
                },
                Ct = function t(e, n) {
                    var o = Yt(e, "x"),
                        r = Yt(e, "y");
                    St(e) ? e = pt : t(e.parentNode, n), e._gsMaxScrollX = o, e._gsMaxScrollY = r, n || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
                },
                Dt = function(t, e, n) {
                    var o = t.style;
                    o && (q(o[e]) && (e = N(e, t) || e), null == n ? o.removeProperty && o.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : o[e] = n)
                },
                Lt = function(t) {
                    return X.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
                },
                Nt = {},
                Pt = function(t) {
                    if (t === X) return Nt.left = Nt.top = 0, Nt.width = Nt.right = S.clientWidth || t.innerWidth || Y.clientWidth || 0, Nt.height = Nt.bottom = (t.innerHeight || 0) - 20 < S.clientHeight ? S.clientHeight : t.innerHeight || Y.clientHeight || 0, Nt;
                    var e = t.ownerDocument || k,
                        n = q(t.pageX) ? t.nodeType || q(t.left) || q(t.top) ? P(t)[0].getBoundingClientRect() : t : {
                            left: t.pageX - Mt(e),
                            top: t.pageY - Et(e),
                            right: t.pageX - Mt(e) + 1,
                            bottom: t.pageY - Et(e) + 1
                        };
                    return q(n.right) && !q(n.width) ? (n.right = n.left + n.width, n.bottom = n.top + n.height) : q(n.width) && (n = {
                        width: n.right - n.left,
                        height: n.bottom - n.top,
                        right: n.right,
                        left: n.left,
                        bottom: n.bottom,
                        top: n.top
                    }), n
                },
                Ot = function(t, e, n) {
                    var o, r = t.vars,
                        i = r[n],
                        l = t._listeners[e];
                    return U(i) && (o = i.apply(r.callbackScope || t, r[n + "Params"] || [t.pointerEvent])), l && !1 === t.dispatchEvent(e) && (o = !1), o
                },
                _t = function(t, e) {
                    var n, o, r, i = P(t)[0];
                    return i.nodeType || i === X ? At(i, e) : q(t.left) ? {
                        left: o = t.min || t.minX || t.minRotation || 0,
                        top: n = t.min || t.minY || 0,
                        width: (t.max || t.maxX || t.maxRotation || 0) - o,
                        height: (t.max || t.maxY || 0) - n
                    } : (r = {
                        x: 0,
                        y: 0
                    }, {
                        left: t.left - r.x,
                        top: t.top - r.y,
                        width: t.width,
                        height: t.height
                    })
                },
                Rt = {},
                At = function(t, e) {
                    e = P(e)[0];
                    var n, o, r, i, l, a, s, c, u, d, p, f, h, g, x = t.getBBox && t.ownerSVGElement,
                        m = t.ownerDocument || k;
                    if (t === X) r = Et(m), o = (n = Mt(m)) + (m.documentElement.clientWidth || t.innerWidth || m.body.clientWidth || 0), i = r + ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight ? m.documentElement.clientHeight : t.innerHeight || m.body.clientHeight || 0);
                    else {
                        if (e === X || q(e)) return t.getBoundingClientRect();
                        n = r = 0, x ? (p = (d = t.getBBox()).width, f = d.height) : (t.viewBox && (d = t.viewBox.baseVal) && (n = d.x || 0, r = d.y || 0, p = d.width, f = d.height), p || (d = "border-box" === (h = Lt(t)).boxSizing, p = (parseFloat(h.width) || t.clientWidth || 0) + (d ? 0 : parseFloat(h.borderLeftWidth) + parseFloat(h.borderRightWidth)), f = (parseFloat(h.height) || t.clientHeight || 0) + (d ? 0 : parseFloat(h.borderTopWidth) + parseFloat(h.borderBottomWidth)))), o = p, i = f
                    }
                    return t === e ? {
                        left: n,
                        top: r,
                        width: o - n,
                        height: i - r
                    } : (a = (l = E(e, !0).multiply(E(t))).apply({
                        x: n,
                        y: r
                    }), s = l.apply({
                        x: o,
                        y: r
                    }), c = l.apply({
                        x: o,
                        y: i
                    }), u = l.apply({
                        x: n,
                        y: i
                    }), n = Math.min(a.x, s.x, c.x, u.x), r = Math.min(a.y, s.y, c.y, u.y), {
                        left: n + ((g = e.parentNode || {}).scrollLeft || 0),
                        top: r + (g.scrollTop || 0),
                        width: Math.max(a.x, s.x, c.x, u.x) - n,
                        height: Math.max(a.y, s.y, c.y, u.y) - r
                    })
                },
                Bt = function(t, e, n, o, r, i) {
                    var l, a, s, c = {};
                    if (e)
                        if (1 !== r && e instanceof Array) {
                            if (c.end = l = [], s = e.length, j(e[0]))
                                for (a = 0; a < s; a++) l[a] = ft(e[a], r);
                            else
                                for (a = 0; a < s; a++) l[a] = e[a] * r;
                            n += 1.1, o -= 1.1
                        } else U(e) ? c.end = function(n) {
                            var o, i, l = e.call(t, n);
                            if (1 !== r)
                                if (j(l)) {
                                    for (i in o = {}, l) o[i] = l[i] * r;
                                    l = o
                                } else l *= r;
                            return l
                        } : c.end = e;
                    return (n || 0 === n) && (c.max = n), (o || 0 === o) && (c.min = o), i && (c.velocity = 0), c
                },
                It = function t(e) {
                    var n;
                    return !(!e || !e.getAttribute || e === Y) && (!("true" !== (n = e.getAttribute("data-clickable")) && ("false" === n || !e.onclick && !ct.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode))
                },
                Ht = function(t, e) {
                    for (var n, o = t.length; o--;)(n = t[o]).ondragstart = n.onselectstart = e ? null : $, M.set(n, {
                        lazy: !0,
                        userSelect: e ? "text" : "none"
                    })
                },
                Ft = function t(e) {
                    return "fixed" === Lt(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
                },
                Wt = function(t, e) {
                    t = M.utils.toArray(t)[0], e = e || {};
                    var n, o, r, i, l, a, s = document.createElement("div"),
                        c = s.style,
                        u = t.firstChild,
                        d = 0,
                        p = 0,
                        f = t.scrollTop,
                        h = t.scrollLeft,
                        g = t.scrollWidth,
                        x = t.scrollHeight,
                        m = 0,
                        y = 0,
                        v = 0;
                    z && !1 !== e.force3D ? (l = "translate3d(", a = "px,0px)") : Z && (l = "translate(", a = "px)"), this.scrollTop = function(t, e) {
                        if (!arguments.length) return -this.top();
                        this.top(-t, e)
                    }, this.scrollLeft = function(t, e) {
                        if (!arguments.length) return -this.left();
                        this.left(-t, e)
                    }, this.left = function(n, o) {
                        if (!arguments.length) return -(t.scrollLeft + p);
                        var r = t.scrollLeft - h,
                            i = p;
                        if ((r > 2 || r < -2) && !o) return h = t.scrollLeft, M.killTweensOf(this, {
                            left: 1,
                            scrollLeft: 1
                        }), this.left(-h), void(e.onKill && e.onKill());
                        (n = -n) < 0 ? (p = n - .5 | 0, n = 0) : n > y ? (p = n - y | 0, n = y) : p = 0, (p || i) && (this._skip || (c[Z] = l + -p + "px," + -d + a), p + m >= 0 && (c.paddingRight = p + m + "px")), t.scrollLeft = 0 | n, h = t.scrollLeft
                    }, this.top = function(n, o) {
                        if (!arguments.length) return -(t.scrollTop + d);
                        var r = t.scrollTop - f,
                            i = d;
                        if ((r > 2 || r < -2) && !o) return f = t.scrollTop, M.killTweensOf(this, {
                            top: 1,
                            scrollTop: 1
                        }), this.top(-f), void(e.onKill && e.onKill());
                        (n = -n) < 0 ? (d = n - .5 | 0, n = 0) : n > v ? (d = n - v | 0, n = v) : d = 0, (d || i) && (this._skip || (c[Z] = l + -p + "px," + -d + a)), t.scrollTop = 0 | n, f = t.scrollTop
                    }, this.maxScrollTop = function() {
                        return v
                    }, this.maxScrollLeft = function() {
                        return y
                    }, this.disable = function() {
                        for (u = s.firstChild; u;) i = u.nextSibling, t.appendChild(u), u = i;
                        t === s.parentNode && t.removeChild(s)
                    }, this.enable = function() {
                        if ((u = t.firstChild) !== s) {
                            for (; u;) i = u.nextSibling, s.appendChild(u), u = i;
                            t.appendChild(s), this.calibrate()
                        }
                    }, this.calibrate = function(e) {
                        var i, l, a, u = t.clientWidth === n;
                        f = t.scrollTop, h = t.scrollLeft, u && t.clientHeight === o && s.offsetHeight === r && g === t.scrollWidth && x === t.scrollHeight && !e || ((d || p) && (l = this.left(), a = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), i = Lt(t), u && !e || (c.display = "block", c.width = "auto", c.paddingRight = "0px", (m = Math.max(0, t.scrollWidth - t.clientWidth)) && (m += parseFloat(i.paddingLeft) + (V ? parseFloat(i.paddingRight) : 0))), c.display = "inline-block", c.position = "relative", c.overflow = "visible", c.verticalAlign = "top", c.boxSizing = "content-box", c.width = "100%", c.paddingRight = m + "px", V && (c.paddingBottom = i.paddingBottom), n = t.clientWidth, o = t.clientHeight, g = t.scrollWidth, x = t.scrollHeight, y = t.scrollWidth - n, v = t.scrollHeight - o, r = s.offsetHeight, c.display = "block", (l || a) && (this.left(l), this.top(a)))
                    }, this.content = s, this.element = t, this._skip = !1, this.enable()
                },
                zt = function(t) {
                    if (K() && document.body) {
                        var e = window && window.navigator;
                        X = window, k = document, S = k.documentElement, Y = k.body, C = et("div"), W = !!window.PointerEvent, (D = et("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", F = "grab" === D.style.cursor ? "grab" : "move", I = e && -1 !== e.userAgent.toLowerCase().indexOf("android"), _ = "ontouchstart" in S && "orientation" in X || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), V = function() {
                            var t, e = et("div"),
                                n = et("div"),
                                o = n.style,
                                r = Y;
                            return o.display = "inline-block", o.position = "relative", e.style.cssText = n.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", e.appendChild(n), r.appendChild(e), t = n.offsetHeight + 18 > e.scrollHeight, r.removeChild(e), t
                        }(), R = function(t) {
                            for (var e = t.split(","), n = (("onpointerdown" in C ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in C ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(",")), o = {}, r = 4; --r > -1;) o[e[r]] = n[r], o[n[r]] = e[r];
                            try {
                                S.addEventListener("test", null, Object.defineProperty({}, "passive", {
                                    get: function() {
                                        O = 1
                                    }
                                }))
                            } catch (i) {}
                            return o
                        }("touchstart,touchmove,touchend,touchcancel"), yt(k, "touchcancel", $), yt(X, "touchmove", $), Y && Y.addEventListener("touchstart", $), yt(k, "contextmenu", (function() {
                            for (var t in at) at[t].isPressed && at[t].endDrag()
                        })), M = L = G()
                    }
                    M ? (H = M.plugins.inertia, N = M.utils.checkPrefix, Z = N(Z), J = N(J), P = M.utils.toArray, z = !!N("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
                },
                Vt = function(t) {
                    var e, n;

                    function o(e, n) {
                        var r;
                        r = t.call(this) || this, L || zt(1), e = P(e)[0], H || (H = M.plugins.inertia), r.vars = n = ft(n || {}), r.target = e, r.x = r.y = r.rotation = 0, r.dragResistance = parseFloat(n.dragResistance) || 0, r.edgeResistance = isNaN(n.edgeResistance) ? 1 : parseFloat(n.edgeResistance) || 0, r.lockAxis = n.lockAxis, r.autoScroll = n.autoScroll || 0, r.lockedAxis = null, r.allowEventDefault = !!n.allowEventDefault, M.getProperty(e, "x");
                        var i, l, a, s, c, u, d, p, f, h, g, x, m, y, v, w, b, Y, C, N, O, z, V, K, G, $, Z, et, ct, xt, bt, Yt, Nt = (n.type || "x,y").toLowerCase(),
                            At = ~Nt.indexOf("x") || ~Nt.indexOf("y"),
                            Vt = -1 !== Nt.indexOf("rotation"),
                            Kt = Vt ? "rotation" : At ? "x" : "left",
                            Gt = At ? "y" : "top",
                            Ut = !(!~Nt.indexOf("x") && !~Nt.indexOf("left") && "scroll" !== Nt),
                            jt = !(!~Nt.indexOf("y") && !~Nt.indexOf("top") && "scroll" !== Nt),
                            qt = n.minimumMovement || 2,
                            $t = function(t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }(r),
                            Zt = P(n.trigger || n.handle || e),
                            Jt = {},
                            Qt = 0,
                            te = !1,
                            ee = n.autoScrollMarginTop || 40,
                            ne = n.autoScrollMarginRight || 40,
                            oe = n.autoScrollMarginBottom || 40,
                            re = n.autoScrollMarginLeft || 40,
                            ie = n.clickableTest || It,
                            le = 0,
                            ae = e._gsap || M.core.getCache(e),
                            se = Ft(e),
                            ce = function(t, n) {
                                return parseFloat(ae.get(e, t, n))
                            },
                            ue = e.ownerDocument || k,
                            de = function(t) {
                                return wt(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1
                            },
                            pe = function t(n) {
                                if ($t.autoScroll && $t.isDragging && (te || b)) {
                                    var o, r, i, a, s, c, u, d, f = e,
                                        h = 15 * $t.autoScroll;
                                    for (te = !1, pt.scrollTop = null != X.pageYOffset ? X.pageYOffset : null != ue.documentElement.scrollTop ? ue.documentElement.scrollTop : ue.body.scrollTop, pt.scrollLeft = null != X.pageXOffset ? X.pageXOffset : null != ue.documentElement.scrollLeft ? ue.documentElement.scrollLeft : ue.body.scrollLeft, a = $t.pointerX - pt.scrollLeft, s = $t.pointerY - pt.scrollTop; f && !r;) o = (r = St(f.parentNode)) ? pt : f.parentNode, i = r ? {
                                        bottom: Math.max(S.clientHeight, X.innerHeight || 0),
                                        right: Math.max(S.clientWidth, X.innerWidth || 0),
                                        left: 0,
                                        top: 0
                                    } : o.getBoundingClientRect(), c = u = 0, jt && ((d = o._gsMaxScrollY - o.scrollTop) < 0 ? u = d : s > i.bottom - oe && d ? (te = !0, u = Math.min(d, h * (1 - Math.max(0, i.bottom - s) / oe) | 0)) : s < i.top + ee && o.scrollTop && (te = !0, u = -Math.min(o.scrollTop, h * (1 - Math.max(0, s - i.top) / ee) | 0)), u && (o.scrollTop += u)), Ut && ((d = o._gsMaxScrollX - o.scrollLeft) < 0 ? c = d : a > i.right - ne && d ? (te = !0, c = Math.min(d, h * (1 - Math.max(0, i.right - a) / ne) | 0)) : a < i.left + re && o.scrollLeft && (te = !0, c = -Math.min(o.scrollLeft, h * (1 - Math.max(0, a - i.left) / re) | 0)), c && (o.scrollLeft += c)), r && (c || u) && (X.scrollTo(o.scrollLeft, o.scrollTop), Xe($t.pointerX + c, $t.pointerY + u)), f = o
                                }
                                if (b) {
                                    var g = $t.x,
                                        x = $t.y;
                                    Vt ? ($t.deltaX = g - parseFloat(ae.rotation), $t.rotation = g, ae.rotation = g + "deg", ae.renderTransform(1, ae)) : l ? (jt && ($t.deltaY = x - l.top(), l.top(x)), Ut && ($t.deltaX = g - l.left(), l.left(g))) : At ? (jt && ($t.deltaY = x - parseFloat(ae.y), ae.y = x + "px"), Ut && ($t.deltaX = g - parseFloat(ae.x), ae.x = g + "px"), ae.renderTransform(1, ae)) : (jt && ($t.deltaY = x - parseFloat(e.style.top || 0), e.style.top = x + "px"), Ut && ($t.deltaX = g - parseFloat(e.style.left || 0), e.style.left = g + "px")), !p || n || et || (et = !0, !1 === Ot($t, "drag", "onDrag") && (Ut && ($t.x -= $t.deltaX), jt && ($t.y -= $t.deltaY), t(!0)), et = !1)
                                }
                                b = !1
                            },
                            fe = function(t, n) {
                                var o, r, i = $t.x,
                                    a = $t.y;
                                e._gsap || (ae = M.core.getCache(e)), ae.uncache && M.getProperty(e, "x"), At ? ($t.x = parseFloat(ae.x), $t.y = parseFloat(ae.y)) : Vt ? $t.x = $t.rotation = parseFloat(ae.rotation) : l ? ($t.y = l.top(), $t.x = l.left()) : ($t.y = parseFloat(e.style.top || (r = Lt(e)) && r.top) || 0, $t.x = parseFloat(e.style.left || (r || {}).left) || 0), (C || N || O) && !n && ($t.isDragging || $t.isThrowing) && (O && (dt.x = $t.x, dt.y = $t.y, (o = O(dt)).x !== $t.x && ($t.x = o.x, b = !0), o.y !== $t.y && ($t.y = o.y, b = !0)), C && (o = C($t.x)) !== $t.x && ($t.x = o, Vt && ($t.rotation = o), b = !0), N && ((o = N($t.y)) !== $t.y && ($t.y = o), b = !0)), b && pe(!0), t || ($t.deltaX = $t.x - i, $t.deltaY = $t.y - a, Ot($t, "throwupdate", "onThrowUpdate"))
                            },
                            he = function(t, e, n, o) {
                                return null == e && (e = -ot), null == n && (n = ot), U(t) ? function(r) {
                                    var i = $t.isPressed ? 1 - $t.edgeResistance : 1;
                                    return t.call($t, r > n ? n + (r - n) * i : r < e ? e + (r - e) * i : r) * o
                                } : tt(t) ? function(o) {
                                    for (var r, i, l = t.length, a = 0, s = ot; --l > -1;)(i = (r = t[l]) - o) < 0 && (i = -i), i < s && r >= e && r <= n && (a = l, s = i);
                                    return t[a]
                                } : isNaN(t) ? function(t) {
                                    return t
                                } : function() {
                                    return t * o
                                }
                            },
                            ge = function() {
                                var t, o, r, i;
                                d = !1, l ? (l.calibrate(), $t.minX = g = -l.maxScrollLeft(), $t.minY = m = -l.maxScrollTop(), $t.maxX = h = $t.maxY = x = 0, d = !0) : n.bounds && (t = _t(n.bounds, e.parentNode), Vt ? ($t.minX = g = t.left, $t.maxX = h = t.left + t.width, $t.minY = m = $t.maxY = x = 0) : q(n.bounds.maxX) && q(n.bounds.maxY) ? (o = _t(e, e.parentNode), $t.minX = g = Math.round(ce(Kt, "px") + t.left - o.left - .5), $t.minY = m = Math.round(ce(Gt, "px") + t.top - o.top - .5), $t.maxX = h = Math.round(g + (t.width - o.width)), $t.maxY = x = Math.round(m + (t.height - o.height))) : (t = n.bounds, $t.minX = g = t.minX, $t.minY = m = t.minY, $t.maxX = h = t.maxX, $t.maxY = x = t.maxY), g > h && ($t.minX = h, $t.maxX = h = g, g = $t.minX), m > x && ($t.minY = x, $t.maxY = x = m, m = $t.minY), Vt && ($t.minRotation = g, $t.maxRotation = h), d = !0), n.liveSnap && (r = !0 === n.liveSnap ? n.snap || {} : n.liveSnap, i = tt(r) || U(r), Vt ? (C = he(i ? r : r.rotation, g, h, 1), N = null) : r.points ? O = function(t, e, n, o, r, i, l) {
                                    return i = i && i < ot ? i * i : ot, U(t) ? function(a) {
                                        var s, c, u, d = $t.isPressed ? 1 - $t.edgeResistance : 1,
                                            p = a.x,
                                            f = a.y;
                                        return a.x = p = p > n ? n + (p - n) * d : p < e ? e + (p - e) * d : p, a.y = f = f > r ? r + (f - r) * d : f < o ? o + (f - o) * d : f, (s = t.call($t, a)) !== a && (a.x = s.x, a.y = s.y), 1 !== l && (a.x *= l, a.y *= l), i < ot && (c = a.x - p) * c + (u = a.y - f) * u > i && (a.x = p, a.y = f), a
                                    } : tt(t) ? function(e) {
                                        for (var n, o, r, l, a = t.length, s = 0, c = ot; --a > -1;)(l = (n = (r = t[a]).x - e.x) * n + (o = r.y - e.y) * o) < c && (s = a, c = l);
                                        return c <= i ? t[s] : e
                                    } : function(t) {
                                        return t
                                    }
                                }(i ? r : r.points, g, h, m, x, r.radius, l ? -1 : 1) : (Ut && (C = he(i ? r : r.x || r.left || r.scrollLeft, g, h, l ? -1 : 1)), jt && (N = he(i ? r : r.y || r.top || r.scrollTop, m, x, l ? -1 : 1))))
                            },
                            xe = function() {
                                $t.isThrowing = !1, Ot($t, "throwcomplete", "onThrowComplete")
                            },
                            me = function() {
                                $t.isThrowing = !1
                            },
                            ye = function(t, o) {
                                var r, i, a, s;
                                t && H ? (!0 === t && (r = n.snap || n.liveSnap || {}, i = tt(r) || U(r), t = {
                                    resistance: (n.throwResistance || n.resistance || 1e3) / (Vt ? 10 : 1)
                                }, Vt ? t.rotation = Bt($t, i ? r : r.rotation, h, g, 1, o) : (Ut && (t[Kt] = Bt($t, i ? r : r.points || r.x || r.left, h, g, l ? -1 : 1, o || "x" === $t.lockedAxis)), jt && (t[Gt] = Bt($t, i ? r : r.points || r.y || r.top, x, m, l ? -1 : 1, o || "y" === $t.lockedAxis)), (r.points || tt(r) && j(r[0])) && (t.linkedProps = Kt + "," + Gt, t.radius = r.radius))), $t.isThrowing = !0, s = isNaN(n.overshootTolerance) ? 1 === n.edgeResistance ? 0 : 1 - $t.edgeResistance + .2 : n.overshootTolerance, t.duration || (t.duration = {
                                    max: Math.max(n.minDuration || 0, "maxDuration" in n ? n.maxDuration : 2),
                                    min: isNaN(n.minDuration) ? 0 === s || j(t) && t.resistance > 1e3 ? 0 : .5 : n.minDuration,
                                    overshoot: s
                                }), $t.tween = a = M.to(l || e, {
                                    inertia: t,
                                    data: "_draggable",
                                    onComplete: xe,
                                    onInterrupt: me,
                                    onUpdate: n.fastMode ? Ot : fe,
                                    onUpdateParams: n.fastMode ? [$t, "onthrowupdate", "onThrowUpdate"] : r && r.radius ? [!1, !0] : []
                                }), n.fastMode || (l && (l._skip = !0), a.render(1e9, !0, !0), fe(!0, !0), $t.endX = $t.x, $t.endY = $t.y, Vt && ($t.endRotation = $t.x), a.play(0), fe(!0, !0), l && (l._skip = !1))) : d && $t.applyBounds()
                            },
                            ve = function(t) {
                                var n, o = K;
                                K = E(e.parentNode, !0), t && $t.isPressed && !K.equals(o || new T) && (n = o.inverse().apply({
                                    x: a,
                                    y: s
                                }), K.apply(n, n), a = n.x, s = n.y), K.equals(rt) && (K = null)
                            },
                            we = function() {
                                var t, n, o, r = 1 - $t.edgeResistance,
                                    i = se ? Mt(ue) : 0,
                                    p = se ? Et(ue) : 0;
                                ve(!1), Rt.x = $t.pointerX - i, Rt.y = $t.pointerY - p, K && K.apply(Rt, Rt), a = Rt.x, s = Rt.y, b && (Xe($t.pointerX, $t.pointerY), pe(!0)), Yt = E(e), l ? (ge(), u = l.top(), c = l.left()) : (be() ? (fe(!0, !0), ge()) : $t.applyBounds(), Vt ? (t = e.ownerSVGElement ? [ae.xOrigin - e.getBBox().x, ae.yOrigin - e.getBBox().y] : (Lt(e)[J] || "0 0").split(" "), w = $t.rotationOrigin = E(e).apply({
                                    x: parseFloat(t[0]) || 0,
                                    y: parseFloat(t[1]) || 0
                                }), fe(!0, !0), n = $t.pointerX - w.x - i, o = w.y - $t.pointerY + p, c = $t.x, u = $t.y = Math.atan2(o, n) * nt) : (u = ce(Gt, "px"), c = ce(Kt, "px"))), d && r && (c > h ? c = h + (c - h) / r : c < g && (c = g - (g - c) / r), Vt || (u > x ? u = x + (u - x) / r : u < m && (u = m - (m - u) / r))), $t.startX = c = Q(c), $t.startY = u = Q(u)
                            },
                            be = function() {
                                return $t.tween && $t.tween.isActive()
                            },
                            Te = function() {
                                !D.parentNode || be() || $t.isDragging || D.parentNode.removeChild(D)
                            },
                            Ee = function(t, r) {
                                var c;
                                if (!i || $t.isPressed || !t || !("mousedown" !== t.type && "pointerdown" !== t.type || r) && it() - le < 30 && R[$t.pointerEvent.type]) bt && t && i && wt(t);
                                else {
                                    if (G = be(), $t.pointerEvent = t, R[t.type] ? (V = ~t.type.indexOf("touch") ? t.currentTarget || t.target : ue, yt(V, "touchend", ke), yt(V, "touchmove", Me), yt(V, "touchcancel", ke), yt(ue, "touchstart", Tt)) : (V = null, yt(ue, "mousemove", Me)), Z = null, W && V || (yt(ue, "mouseup", ke), t && t.target && yt(t.target, "mouseup", ke)), z = ie.call($t, t.target) && !1 === n.dragClickables && !r) return yt(t.target, "change", ke), Ot($t, "pressInit", "onPressInit"), Ot($t, "press", "onPress"), Ht(Zt, !0), void(bt = !1);
                                    var u;
                                    if ($ = !(!V || Ut === jt || !1 === $t.vars.allowNativeTouchScrolling || $t.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (Ut ? "y" : "x"), (bt = !$ && !$t.allowEventDefault) && (wt(t), yt(X, "touchforcechange", wt)), t.changedTouches ? (t = y = t.changedTouches[0], v = t.identifier) : t.pointerId ? v = t.pointerId : y = v = null, A++, u = pe, lt.push(u), 1 === lt.length && M.ticker.add(gt), s = $t.pointerY = t.pageY, a = $t.pointerX = t.pageX, Ot($t, "pressInit", "onPressInit"), ($ || $t.autoScroll) && Ct(e.parentNode), !e.parentNode || !$t.autoScroll || l || Vt || !e.parentNode._gsMaxScrollX || D.parentNode || e.getBBox || (D.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(D)), we(), $t.tween && $t.tween.kill(), $t.isThrowing = !1, M.killTweensOf(l || e, Jt, !0), l && M.killTweensOf(e, {
                                            scrollTo: 1
                                        }, !0), $t.tween = $t.lockedAxis = null, (n.zIndexBoost || !Vt && !l && !1 !== n.zIndexBoost) && (e.style.zIndex = o.zIndex++), $t.isPressed = !0, p = !(!n.onDrag && !$t._listeners.drag), f = !(!n.onMove && !$t._listeners.move), !1 !== n.cursor || n.activeCursor)
                                        for (c = Zt.length; --c > -1;) M.set(Zt[c], {
                                            cursor: n.activeCursor || n.cursor || ("grab" === F ? "grabbing" : F)
                                        });
                                    Ot($t, "press", "onPress")
                                }
                            },
                            Me = function(t) {
                                var n, o, r, l, c, u, d = t;
                                if (i && !B && $t.isPressed && t) {
                                    if ($t.pointerEvent = t, n = t.changedTouches) {
                                        if ((t = n[0]) !== y && t.identifier !== v) {
                                            for (l = n.length; --l > -1 && (t = n[l]).identifier !== v && t.target !== e;);
                                            if (l < 0) return
                                        }
                                    } else if (t.pointerId && v && t.pointerId !== v) return;
                                    V && $ && !Z && (Rt.x = t.pageX - (se ? Mt(ue) : 0), Rt.y = t.pageY - (se ? Et(ue) : 0), K && K.apply(Rt, Rt), o = Rt.x, r = Rt.y, ((c = Math.abs(o - a)) !== (u = Math.abs(r - s)) && (c > qt || u > qt) || I && $ === Z) && (Z = c > u && Ut ? "x" : "y", $ && Z !== $ && yt(X, "touchforcechange", wt), !1 !== $t.vars.lockAxisOnTouchScroll && Ut && jt && ($t.lockedAxis = "x" === Z ? "y" : "x", U($t.vars.onLockAxis) && $t.vars.onLockAxis.call($t, d)), I && $ === Z)) ? ke(d) : ($t.allowEventDefault || $ && (!Z || $ === Z) || !1 === d.cancelable ? bt && (bt = !1) : (wt(d), bt = !0), $t.autoScroll && (te = !0), Xe(t.pageX, t.pageY, f))
                                } else bt && t && i && wt(t)
                            },
                            Xe = function(t, e, n) {
                                var o, r, i, l, p, f, y = 1 - $t.dragResistance,
                                    v = 1 - $t.edgeResistance,
                                    T = $t.pointerX,
                                    E = $t.pointerY,
                                    M = u,
                                    X = $t.x,
                                    k = $t.y,
                                    S = $t.endX,
                                    Y = $t.endY,
                                    D = $t.endRotation,
                                    L = b;
                                $t.pointerX = t, $t.pointerY = e, se && (t -= Mt(ue), e -= Et(ue)), Vt ? (l = Math.atan2(w.y - e, t - w.x) * nt, (p = $t.y - l) > 180 ? (u -= 360, $t.y = l) : p < -180 && (u += 360, $t.y = l), $t.x !== c || Math.abs(u - l) > qt ? ($t.y = l, i = c + (u - l) * y) : i = c) : (K && (f = t * K.a + e * K.c + K.e, e = t * K.b + e * K.d + K.f, t = f), (r = e - s) < qt && r > -qt && (r = 0), (o = t - a) < qt && o > -qt && (o = 0), ($t.lockAxis || $t.lockedAxis) && (o || r) && ((f = $t.lockedAxis) || ($t.lockedAxis = f = Ut && Math.abs(o) > Math.abs(r) ? "y" : jt ? "x" : null, f && U($t.vars.onLockAxis) && $t.vars.onLockAxis.call($t, $t.pointerEvent)), "y" === f ? r = 0 : "x" === f && (o = 0)), i = Q(c + o * y), l = Q(u + r * y)), (C || N || O) && ($t.x !== i || $t.y !== l && !Vt) && (O && (dt.x = i, dt.y = l, f = O(dt), i = Q(f.x), l = Q(f.y)), C && (i = Q(C(i))), N && (l = Q(N(l)))), d && (i > h ? i = h + Math.round((i - h) * v) : i < g && (i = g + Math.round((i - g) * v)), Vt || (l > x ? l = Math.round(x + (l - x) * v) : l < m && (l = Math.round(m + (l - m) * v)))), ($t.x !== i || $t.y !== l && !Vt) && (Vt ? ($t.endRotation = $t.x = $t.endX = i, b = !0) : (jt && ($t.y = $t.endY = l, b = !0), Ut && ($t.x = $t.endX = i, b = !0)), n && !1 === Ot($t, "move", "onMove") ? ($t.pointerX = T, $t.pointerY = E, u = M, $t.x = X, $t.y = k, $t.endX = S, $t.endY = Y, $t.endRotation = D, b = L) : !$t.isDragging && $t.isPressed && ($t.isDragging = !0, Ot($t, "dragstart", "onDragStart")))
                            },
                            ke = function t(o, r) {
                                if (i && $t.isPressed && (!o || null == v || r || !(o.pointerId && o.pointerId !== v && o.target !== e || o.changedTouches && ! function(t, e) {
                                        for (var n = t.length; n--;)
                                            if (t[n].identifier === e) return !0
                                    }(o.changedTouches, v)))) {
                                    $t.isPressed = !1;
                                    var l, a, s, c, u, d = o,
                                        p = $t.isDragging,
                                        f = $t.vars.allowContextMenu && o && (o.ctrlKey || o.which > 2),
                                        h = M.delayedCall(.001, Te);
                                    if (V ? (vt(V, "touchend", t), vt(V, "touchmove", Me), vt(V, "touchcancel", t), vt(ue, "touchstart", Tt)) : vt(ue, "mousemove", Me), vt(X, "touchforcechange", wt), W && V || (vt(ue, "mouseup", t), o && o.target && vt(o.target, "mouseup", t)), b = !1, p && (Qt = ut = it(), $t.isDragging = !1), z && !f) return o && (vt(o.target, "change", t), $t.pointerEvent = d), Ht(Zt, !1), Ot($t, "release", "onRelease"), Ot($t, "click", "onClick"), void(z = !1);
                                    for (mt(pe), a = Zt.length; --a > -1;) Dt(Zt[a], "cursor", n.cursor || (!1 !== n.cursor ? F : null));
                                    if (A--, o) {
                                        if ((l = o.changedTouches) && (o = l[0]) !== y && o.identifier !== v) {
                                            for (a = l.length; --a > -1 && (o = l[a]).identifier !== v && o.target !== e;);
                                            if (a < 0) return
                                        }
                                        $t.pointerEvent = d, $t.pointerX = o.pageX, $t.pointerY = o.pageY
                                    }
                                    return f && d ? (wt(d), bt = !0, Ot($t, "release", "onRelease")) : d && !p ? (bt = !1, G && (n.snap || n.bounds) && ye(n.inertia || n.throwProps), Ot($t, "release", "onRelease"), I && "touchmove" === d.type || -1 !== d.type.indexOf("cancel") || (Ot($t, "click", "onClick"), it() - le < 300 && Ot($t, "doubleclick", "onDoubleClick"), c = d.target || e, le = it(), u = function() {
                                        le === ct || !$t.enabled() || $t.isPressed || d.defaultPrevented || (c.click ? c.click() : ue.createEvent && ((s = ue.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, X, 1, $t.pointerEvent.screenX, $t.pointerEvent.screenY, $t.pointerX, $t.pointerY, !1, !1, !1, !1, 0, null), c.dispatchEvent(s)))
                                    }, I || d.defaultPrevented || M.delayedCall(.05, u))) : (ye(n.inertia || n.throwProps), $t.allowEventDefault || !d || !1 === n.dragClickables && ie.call($t, d.target) || !p || $ && (!Z || $ !== Z) || !1 === d.cancelable ? bt = !1 : (bt = !0, wt(d)), Ot($t, "release", "onRelease")), be() && h.duration($t.tween.duration()), p && Ot($t, "dragend", "onDragEnd"), !0
                                }
                                bt && o && i && wt(o)
                            },
                            Se = function(t) {
                                if (t && $t.isDragging && !l) {
                                    var n = t.target || e.parentNode,
                                        o = n.scrollLeft - n._gsScrollX,
                                        r = n.scrollTop - n._gsScrollY;
                                    (o || r) && (K ? (a -= o * K.a + r * K.c, s -= r * K.d + o * K.b) : (a -= o, s -= r), n._gsScrollX += o, n._gsScrollY += r, Xe($t.pointerX, $t.pointerY))
                                }
                            },
                            Ye = function(t) {
                                var e = it(),
                                    n = e - le < 100,
                                    o = e - Qt < 50,
                                    r = n && ct === le,
                                    i = $t.pointerEvent && $t.pointerEvent.defaultPrevented,
                                    l = n && xt === le,
                                    a = t.isTrusted || null == t.isTrusted && n && r;
                                if ((r || o && !1 !== $t.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), n && (!$t.pointerEvent || !$t.pointerEvent.defaultPrevented) && (!r || a && !l)) return a && r && (xt = le), void(ct = le);
                                ($t.isPressed || o || n) && (a && t.detail && n && !i || wt(t)), n || o || (t && t.target && ($t.pointerEvent = t), Ot($t, "click", "onClick"))
                            },
                            Ce = function(t) {
                                return K ? {
                                    x: t.x * K.a + t.y * K.c + K.e,
                                    y: t.x * K.b + t.y * K.d + K.f
                                } : {
                                    x: t.x,
                                    y: t.y
                                }
                            };
                        return (Y = o.get(e)) && Y.kill(), r.startDrag = function(t, n) {
                            var o, r, i, l;
                            Ee(t || $t.pointerEvent, !0), n && !$t.hitTest(t || $t.pointerEvent) && (o = Pt(t || $t.pointerEvent), r = Pt(e), i = Ce({
                                x: o.left + o.width / 2,
                                y: o.top + o.height / 2
                            }), l = Ce({
                                x: r.left + r.width / 2,
                                y: r.top + r.height / 2
                            }), a -= i.x - l.x, s -= i.y - l.y), $t.isDragging || ($t.isDragging = !0, Ot($t, "dragstart", "onDragStart"))
                        }, r.drag = Me, r.endDrag = function(t) {
                            return ke(t || $t.pointerEvent, !0)
                        }, r.timeSinceDrag = function() {
                            return $t.isDragging ? 0 : (it() - Qt) / 1e3
                        }, r.timeSinceClick = function() {
                            return (it() - le) / 1e3
                        }, r.hitTest = function(t, e) {
                            return o.hitTest($t.target, t, e)
                        }, r.getDirection = function(t, n) {
                            var o, r, i, l, a, s, d = "velocity" === t && H ? t : j(t) && !Vt ? "element" : "start";
                            return "element" === d && (a = Pt($t.target), s = Pt(t)), o = "start" === d ? $t.x - c : "velocity" === d ? H.getVelocity(e, Kt) : a.left + a.width / 2 - (s.left + s.width / 2), Vt ? o < 0 ? "counter-clockwise" : "clockwise" : (n = n || 2, r = "start" === d ? $t.y - u : "velocity" === d ? H.getVelocity(e, Gt) : a.top + a.height / 2 - (s.top + s.height / 2), l = (i = Math.abs(o / r)) < 1 / n ? "" : o < 0 ? "left" : "right", i < n && ("" !== l && (l += "-"), l += r < 0 ? "up" : "down"), l)
                        }, r.applyBounds = function(t, o) {
                            var r, i, l, a, s, c;
                            if (t && n.bounds !== t) return n.bounds = t, $t.update(!0, o);
                            if (fe(!0), ge(), d && !be()) {
                                if (r = $t.x, i = $t.y, r > h ? r = h : r < g && (r = g), i > x ? i = x : i < m && (i = m), ($t.x !== r || $t.y !== i) && (l = !0, $t.x = $t.endX = r, Vt ? $t.endRotation = r : $t.y = $t.endY = i, b = !0, pe(!0), $t.autoScroll && !$t.isDragging))
                                    for (Ct(e.parentNode), a = e, pt.scrollTop = null != X.pageYOffset ? X.pageYOffset : null != ue.documentElement.scrollTop ? ue.documentElement.scrollTop : ue.body.scrollTop, pt.scrollLeft = null != X.pageXOffset ? X.pageXOffset : null != ue.documentElement.scrollLeft ? ue.documentElement.scrollLeft : ue.body.scrollLeft; a && !c;) s = (c = St(a.parentNode)) ? pt : a.parentNode, jt && s.scrollTop > s._gsMaxScrollY && (s.scrollTop = s._gsMaxScrollY), Ut && s.scrollLeft > s._gsMaxScrollX && (s.scrollLeft = s._gsMaxScrollX), a = s;
                                $t.isThrowing && (l || $t.endX > h || $t.endX < g || $t.endY > x || $t.endY < m) && ye(n.inertia || n.throwProps, l)
                            }
                            return $t
                        }, r.update = function(t, n, o) {
                            if (n && $t.isPressed) {
                                var r = E(e),
                                    i = Yt.apply({
                                        x: $t.x - c,
                                        y: $t.y - u
                                    }),
                                    l = E(e.parentNode, !0);
                                l.apply({
                                    x: r.e - i.x,
                                    y: r.f - i.y
                                }, i), $t.x -= i.x - l.e, $t.y -= i.y - l.f, pe(!0), we()
                            }
                            var a = $t.x,
                                s = $t.y;
                            return ve(!n), t ? $t.applyBounds() : (b && o && pe(!0), fe(!0)), n && (Xe($t.pointerX, $t.pointerY), b && pe(!0)), $t.isPressed && !n && (Ut && Math.abs(a - $t.x) > .01 || jt && Math.abs(s - $t.y) > .01 && !Vt) && we(), $t.autoScroll && (Ct(e.parentNode, $t.isDragging), te = $t.isDragging, pe(!0), kt(e, Se), Xt(e, Se)), $t
                        }, r.enable = function(t) {
                            var o, r, a, s = {
                                lazy: !0
                            };
                            if (!1 !== n.cursor && (s.cursor = n.cursor || F), M.utils.checkPrefix("touchCallout") && (s.touchCallout = "none"), "soft" !== t) {
                                for (ht(Zt, Ut === jt ? "none" : n.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight === (e.scrollWidth === e.clientHeight) || n.allowEventDefault ? "manipulation" : Ut ? "pan-y" : "pan-x"), r = Zt.length; --r > -1;) a = Zt[r], W || yt(a, "mousedown", Ee), yt(a, "touchstart", Ee), yt(a, "click", Ye, !0), M.set(a, s), a.getBBox && a.ownerSVGElement && M.set(a.ownerSVGElement, {
                                    touchAction: Ut === jt ? "none" : n.allowNativeTouchScrolling || n.allowEventDefault ? "manipulation" : Ut ? "pan-y" : "pan-x"
                                }), n.allowContextMenu || yt(a, "contextmenu", de);
                                Ht(Zt, !1)
                            }
                            return Xt(e, Se), i = !0, H && "soft" !== t && H.track(l || e, At ? "x,y" : Vt ? "rotation" : "top,left"), e._gsDragID = o = "d" + st++, at[o] = $t, l && (l.enable(), l.element._gsDragID = o), (n.bounds || Vt) && we(), n.bounds && $t.applyBounds(), $t
                        }, r.disable = function(t) {
                            for (var n, o = $t.isDragging, r = Zt.length; --r > -1;) Dt(Zt[r], "cursor", null);
                            if ("soft" !== t) {
                                for (ht(Zt, null), r = Zt.length; --r > -1;) n = Zt[r], Dt(n, "touchCallout", null), vt(n, "mousedown", Ee), vt(n, "touchstart", Ee), vt(n, "click", Ye), vt(n, "contextmenu", de);
                                Ht(Zt, !0), V && (vt(V, "touchcancel", ke), vt(V, "touchend", ke), vt(V, "touchmove", Me)), vt(ue, "mouseup", ke), vt(ue, "mousemove", Me)
                            }
                            return kt(e, Se), i = !1, H && "soft" !== t && H.untrack(l || e, At ? "x,y" : Vt ? "rotation" : "top,left"), l && l.disable(), mt(pe), $t.isDragging = $t.isPressed = z = !1, o && Ot($t, "dragend", "onDragEnd"), $t
                        }, r.enabled = function(t, e) {
                            return arguments.length ? t ? $t.enable(e) : $t.disable(e) : i
                        }, r.kill = function() {
                            return $t.isThrowing = !1, $t.tween && $t.tween.kill(), $t.disable(), M.set(Zt, {
                                clearProps: "userSelect"
                            }), delete at[e._gsDragID], $t
                        }, ~Nt.indexOf("scroll") && (l = r.scrollProxy = new Wt(e, function(t, e) {
                            for (var n in e) n in t || (t[n] = e[n]);
                            return t
                        }({
                            onKill: function() {
                                $t.isPressed && ke(null)
                            }
                        }, n)), e.style.overflowY = jt && !_ ? "auto" : "hidden", e.style.overflowX = Ut && !_ ? "auto" : "hidden", e = l.content), Vt ? Jt.rotation = 1 : (Ut && (Jt[Kt] = 1), jt && (Jt[Gt] = 1)), ae.force3D = !("force3D" in n) || n.force3D, r.enable(), r
                    }
                    return n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, o.register = function(t) {
                        M = t, zt()
                    }, o.create = function(t, e) {
                        return L || zt(!0), P(t).map((function(t) {
                            return new o(t, e)
                        }))
                    }, o.get = function(t) {
                        return at[(P(t)[0] || {})._gsDragID]
                    }, o.timeSinceDrag = function() {
                        return (it() - ut) / 1e3
                    }, o.hitTest = function(t, e, n) {
                        if (t === e) return !1;
                        var o, r, i, l = Pt(t),
                            a = Pt(e),
                            s = l.top,
                            c = l.left,
                            u = l.right,
                            d = l.bottom,
                            p = l.width,
                            f = l.height,
                            h = a.left > u || a.right < c || a.top > d || a.bottom < s;
                        return h || !n ? !h : (i = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, (o = {
                            left: Math.max(c, a.left),
                            top: Math.max(s, a.top)
                        }).width = Math.min(u, a.right) - o.left, o.height = Math.min(d, a.bottom) - o.top, !(o.width < 0 || o.height < 0) && (i ? (n *= .01, (r = o.width * o.height) >= p * f * n || r >= a.width * a.height * n) : o.width > n && o.height > n))
                    }, o
                }(function() {
                    function t(t) {
                        this._listeners = {}, this.target = t || this
                    }
                    var e = t.prototype;
                    return e.addEventListener = function(t, e) {
                        var n = this._listeners[t] || (this._listeners[t] = []);
                        ~n.indexOf(e) || n.push(e)
                    }, e.removeEventListener = function(t, e) {
                        var n = this._listeners[t],
                            o = n && n.indexOf(e) || -1;
                        o > -1 && n.splice(o, 1)
                    }, e.dispatchEvent = function(t) {
                        var e, n = this;
                        return (this._listeners[t] || []).forEach((function(o) {
                            return !1 === o.call(n, {
                                type: t,
                                target: n.target
                            }) && (e = !1)
                        })), e
                    }, t
                }());
            ! function(t, e) {
                for (var n in e) n in t || (t[n] = e[n])
            }(Vt.prototype, {
                pointerX: 0,
                pointerY: 0,
                startX: 0,
                startY: 0,
                deltaX: 0,
                deltaY: 0,
                isDragging: !1,
                isPressed: !1
            }), Vt.zIndex = 1e3, Vt.version = "3.8.0", G() && M.registerPlugin(Vt)
        }
    }
]);