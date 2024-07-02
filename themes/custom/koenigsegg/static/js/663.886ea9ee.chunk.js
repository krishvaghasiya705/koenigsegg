(this.webpackChunkkoenigsegg_com = this.webpackChunkkoenigsegg_com || []).push([
    [663], {
        663: function(e, t, n) {
            "use strict";
            n.d(t, {
                lazy: function() {
                    return z
                }
            });
            var a = n(4672),
                i = n(6529),
                l = n(1096),
                o = n(2899),
                r = n(3828),
                s = n(8716),
                u = n(3470),
                d = n(1070),
                m = n(5970),
                f = n(212),
                c = n(9915),
                p = n(770),
                g = n(6113);
            let v = i.default.timeline();
            const b = (e, {
                    container: t,
                    content: n,
                    tabContent: a,
                    maskedImage: l
                }, o) => {
                    const {
                        activeTab: r
                    } = t.dataset;
                    let s;
                    "undefined" !== typeof r && (l && (e.set(l[parseInt(r, 10)], {
                        zIndex: 2
                    }, 0), s = l.filter(((e, t) => t === parseInt(r, 10))), s.length > 0 && e.set(s, {
                        autoAlpha: 1
                    }), e.add(o.getTimeline(l[parseInt(r, 10)]), "<")), e.add((() => {
                        const e = a[parseInt(r, 10)];
                        e && o.getTimeline(e)
                    }), "<0.1")), n && e.add((0, f.fadeFromTo)(n, {
                        duration: .01
                    }), "<"), s && s.length > 0 && "undefined" !== typeof r && e.eventCallback("onComplete", (() => {
                        s = l.filter(((e, t) => t !== parseInt(r, 10))), s && i.default.set(s, {
                            autoAlpha: 1
                        })
                    }))
                },
                T = (e, {
                    visualWrapper: t
                }) => {
                    t && (e.add((0, p.getImageScrollTween)(t)), e.to(t, {
                        yPercent: 5,
                        ease: "none",
                        duration: 1
                    }, "-=1"))
                };
            var C = n(5982);
            const h = (e, {
                    container: t,
                    title: n,
                    cta: a
                }, i) => {
                    e.add((0, f.fadeFromTo)(t, {
                        duration: .1,
                        autoAlpha: !0
                    })), n && e.add(i.getTimeline(n), "<"), a && e.add(i.getTimeline(a), "<0.1")
                },
                I = (e, {
                    container: t,
                    title: n,
                    cta: a
                }, i) => {
                    n && e.add(i.getTimeline(n, "out")), a && e.add(i.getTimeline(a, "out"), "<"), e.add((0, f.fadeTo)(t, {
                        duration: .5,
                        autoAlpha: !0
                    }))
                },
                x = (0, a.defineComponent)({
                    name: "o4-horizontal-tab-content",
                    refs: {
                        title: (0, a.refComponent)(C.M1MultilineTitle, {
                            ref: "title"
                        }),
                        cta: (0, a.refComponent)(u.ClM1Button, {
                            ref: "cta",
                            isRequired: !1
                        })
                    },
                    setup: ({
                        refs: e
                    }) => ((0, l.useTransitionController)(e.self, {
                        setupTransitionInTimeline: h,
                        setupTransitionOutTimeline: I,
                        refs: e
                    }), [])
                }),
                k = (e, t, n, a, l = 0) => {
                    if (!t || !n) return;
                    const o = null !== a && void 0 !== a && a.value ? a.value.x : 0;
                    return i.default.to(t, {
                        x: n.offsetLeft + o,
                        scaleX: n.offsetWidth / e.offsetWidth,
                        duration: l,
                        ease: g.default.vinnieInOut
                    })
                };
            var B = n(909),
                w = n(236);
            const y = (0, a.defineComponent)({
                    name: "o5-horizontal-tab-list",
                    props: {
                        activeIndex: a.propType.number.defaultValue(0),
                        onChange: a.propType.func.optional.shape(),
                        isTransitioning: a.propType.boolean
                    },
                    refs: {
                        tabList: (0, a.refElement)("tab-list"),
                        tabButton: (0, a.refCollection)("tab-button", {
                            minimumItemsRequired: 1
                        }),
                        underline: (0, a.refElement)("underline")
                    },
                    setup({
                        props: e,
                        refs: t,
                        element: n
                    }) {
                        var l, o, r, s;
                        const u = (0, a.ref)(e.activeIndex);
                        let d, f = null === (l = t.self) || void 0 === l || null === (o = l.element) || void 0 === o ? void 0 : o.getBoundingClientRect().width,
                            c = null === (r = t.tabList) || void 0 === r || null === (s = r.element) || void 0 === s ? void 0 : s.getBoundingClientRect().width;
                        return f && c && (d = (0, w.useDraggable)(t.tabList, {
                            dragClickables: !0,
                            allowContextMenu: !0,
                            type: "x",
                            throwProps: !0,
                            edgeResistance: 1,
                            zIndexBoost: !1,
                            bounds: {
                                minX: Math.min(f - c, 0),
                                maxX: 0,
                                minY: 0,
                                maxY: 0
                            },
                            onDrag: () => {
                                k(n, (0, m.getElement)(t.underline), (0, m.getElements)(t.tabButton)[u.value], d)
                            },
                            onThrowUpdate: () => {
                                k(n, (0, m.getElement)(t.underline), (0, m.getElements)(t.tabButton)[u.value], d)
                            }
                        })), (0, a.watch)(u, (a => {
                            var i;
                            null === (i = e.onChange) || void 0 === i || i.call(e, a), k(n, (0, m.getElement)(t.underline), (0, m.getElements)(t.tabButton)[a], d, .8)
                        })), (0, B.useResizeObserver)(t.self, (() => {
                            var e, a, l, o, r, s, p;
                            d && (f = null === (e = t.self) || void 0 === e || null === (a = e.element) || void 0 === a ? void 0 : a.getBoundingClientRect().width, c = null === (l = t.tabList) || void 0 === l || null === (o = l.element) || void 0 === o ? void 0 : o.getBoundingClientRect().width, f && c && (f - c < 0 ? (null === (r = d.value) || void 0 === r || r.applyBounds({
                                minX: Math.min(f - c, 0),
                                maxX: 0
                            }), null === (s = d.value) || void 0 === s || s.enable()) : (t.tabList.element && i.default.set(t.tabList.element, {
                                x: 0
                            }), null === (p = d.value) || void 0 === p || p.disable())));
                            k(n, (0, m.getElement)(t.underline), (0, m.getElements)(t.tabButton)[u.value], d)
                        })), [...(0, a.bindMap)(t.tabButton, ((t, n) => ({
                            click: t => {
                                t.preventDefault(), e.isTransitioning || (u.value = n)
                            },
                            css: (0, a.computed)((() => ({
                                "is-current": u.value === n
                            })))
                        })))]
                    }
                }),
                E = (0, a.defineComponent)({
                    name: "c4-horizontal-tabs",
                    components: [d.ClA3Image, u.ClM1Button, x],
                    refs: {
                        content: (0, a.refElement)("content"),
                        visualWrapper: (0, a.refElement)("visual-wrapper"),
                        maskedImageWrapper: (0, a.refCollection)("masked-image-wrapper", {
                            minimumItemsRequired: 1
                        }),
                        maskedImage: (0, a.refComponents)(d.ClA3Image, {
                            ref: "masked-image",
                            minimumItemsRequired: 1
                        }),
                        tabContent: (0, a.refComponents)(x, {
                            ref: "tab-content",
                            minimumItemsRequired: 1
                        }),
                        tabs: (0, a.refComponent)(y, {
                            ref: "tabs"
                        })
                    },
                    setup({
                        refs: e,
                        element: t
                    }) {
                        (0, r.useBlockInitialized)(t);
                        const n = (0, a.ref)(0),
                            u = (0, o.useTransitionContext)(),
                            [d, C] = (0, s.useState)(!1),
                            h = (0, a.ref)(-1);
                        return (0, l.useScrollTransition)(e.self, {
                            setupTransitionInTimeline: b,
                            refs: e,
                            registerTransitionController: !0
                        }), (0, l.useScrollTransition)(e.self, {
                            setupTransitionInTimeline: T,
                            refs: e,
                            scrollTrigger: p.imageScrollTimelineTriggerDefaultOptions
                        }), (0, a.watch)(n, (async (t, n) => {
                            if (!u || d.value) return;
                            C(!0);
                            const a = ((e, t, n = "right", a, l) => {
                                var o;
                                const r = (0, m.getElements)(a.tabContent),
                                    s = (0, m.getElements)(a.maskedImage);
                                return null === (o = v) || void 0 === o || o.kill(), v = i.default.timeline(), v.set(s[t], {
                                    zIndex: 1
                                }), v.set(s[e], {
                                    zIndex: 2
                                }), v.add(l.getTimeline(r[t], "out")), v.add(l.getTimeline(r[e]), "<0.2"), v.add((0, c.maskSideReveal)(s[e], {
                                    from: n
                                }), "<"), v.add((0, f.fadeFromTo)(s[e], {
                                    duration: .01,
                                    clearProps: ""
                                }), "<"), v.fromTo(s[e].querySelector("img"), {
                                    xPercent: "right" === n ? 5 : -5
                                }, {
                                    xPercent: 0,
                                    ease: g.default.jorisInOut,
                                    duration: .7,
                                    clearProps: "xPercent"
                                }, "<"), v.to(s[t].querySelector("img"), {
                                    xPercent: .75 * ("right" === n ? -5 : 5),
                                    ease: g.default.jorisInOut,
                                    duration: .7,
                                    clearProps: "xPercent",
                                    onComplete: () => {
                                        i.default.set(s.filter(((t, n) => n !== e)), {
                                            clearProps: "zIndex"
                                        })
                                    }
                                }, "<"), v
                            })(t, n, t > n ? "right" : "left", e, u); - 1 === h.value && (h.value = a.duration()), i.default.delayedCall(h.value, (() => {
                                C(!1)
                            }))
                        })), [(0, a.bind)(e.self, {
                            attr: {
                                "data-active-tab": (0, a.computed)((() => n.value))
                            }
                        }), (0, a.bind)(e.tabs, {
                            onChange: e => {
                                n.value = e
                            },
                            isTransitioning: (0, a.computed)((() => d.value))
                        })]
                    }
                }),
                z = (0, a.supportLazy)(E)
        }
    }
]);