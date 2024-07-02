(this.webpackChunkkoenigsegg_com = this.webpackChunkkoenigsegg_com || []).push([
    [177], {
        6300: function(e, n, t) {
            "use strict";

            function i(e, n = "in", t = !1) {
                var i, r, o;
                t && (null === e || void 0 === e || null === (i = e.getTimeline(n)) || void 0 === i || i.kill()), null === e || void 0 === e || null === (r = e.setupTimeline({
                    direction: n,
                    reset: !0
                })) || void 0 === r || null === (o = r.scrollTrigger) || void 0 === o || o.update(!0)
            }
            t.d(n, {
                resetScrollTransition: function() {
                    return i
                }
            })
        },
        4177: function(e, n, t) {
            "use strict";
            t.d(n, {
                lazy: function() {
                    return v
                }
            });
            var i = t(4672),
                r = t(1096),
                o = t(3011),
                a = t(5982),
                l = t(5830),
                s = t(6019),
                m = t(3470),
                u = t(6529),
                c = t(9720),
                d = t(770);
            const p = (e, {
                    title: n,
                    image: t,
                    copy: i,
                    cta: r
                }, o) => {
                    n && e.add(o.getTimeline(n)), t && e.add(o.getTimeline(t), ">-0.35"), i && e.add((0, c.splitFadeIn)(i, {
                        duration: .5,
                        stagger: .1
                    }), "<"), r && e.add(o.getTimeline(r), ">-0.4")
                },
                f = (e, {
                    imageWrapper: n,
                    copy: t,
                    ctaWrapper: i,
                    image: r
                }) => {
                    const o = u.default.utils.mapRange(480, 1440, 50, 90, u.default.utils.clamp(480, 1440, window.innerWidth));
                    n && e.fromTo(n, {
                        yPercent: 15
                    }, {
                        yPercent: -15,
                        duration: 1,
                        ease: "none"
                    }), r && e.add((0, d.getImageScrollTween)(r), "<"), t && e.fromTo(t, {
                        y: -o
                    }, {
                        y: o,
                        duration: 1,
                        ease: "none"
                    }, "<"), i && e.fromTo(i, {
                        y: -o
                    }, {
                        y: o,
                        duration: 1,
                        ease: "none"
                    }, "<")
                };
            var g = t(909),
                T = t(6300),
                k = t(3828);
            const C = (0, i.defineComponent)({
                    name: "c6-feature-block",
                    components: [o.ClA1Heading, l.M2MaskedImage, a.M1MultilineTitle, s.ClA5Text, m.ClM1Button],
                    props: {},
                    refs: {
                        title: (0, i.refComponent)(a.M1MultilineTitle, {
                            ref: "title"
                        }),
                        image: (0, i.refComponent)(l.M2MaskedImage, {
                            ref: "image"
                        }),
                        copy: (0, i.refComponent)(s.ClA5Text, {
                            ref: "copy"
                        }),
                        cta: (0, i.refComponent)(m.ClM1Button, {
                            ref: "cta"
                        }),
                        ctaWrapper: (0, i.refElement)("cta-wrapper"),
                        imageWrapper: (0, i.refElement)("image-wrapper"),
                        parallaxAnchor: (0, i.refElement)("image-wrapper")
                    },
                    setup({
                        refs: e,
                        element: n
                    }) {
                        (0, k.useBlockInitialized)(n);
                        const t = (0, r.useScrollTransition)(e.self, {
                                setupTransitionInTimeline: p,
                                refs: e,
                                registerTransitionController: !0
                            }),
                            i = (0, r.useScrollTransition)(e.self, {
                                setupTransitionInTimeline: f,
                                refs: e,
                                scrollTrigger: d.imageScrollTimelineTriggerDefaultOptions
                            });
                        return (0, g.useResizeObserver)(e.copy, (() => {
                            (0, T.resetScrollTransition)(t), (0, T.resetScrollTransition)(i)
                        }), 300), []
                    }
                }),
                v = (0, i.supportLazy)(C)
        },
        5830: function(e, n, t) {
            "use strict";
            t.d(n, {
                M2MaskedImage: function() {
                    return d
                }
            });
            var i = t(4672),
                r = t(1096),
                o = t(1070),
                a = t(6529),
                l = t(1198),
                s = t(9915),
                m = t(212),
                u = t(6113);
            const c = (e, {
                    image: n,
                    container: t
                }) => {
                    const i = null === n || void 0 === n ? void 0 : n.querySelector("img");
                    i && e.add(a.default.timeline().fromTo(i, {
                        scale: 1.4
                    }, {
                        scale: 1,
                        duration: .6667,
                        ease: u.default.jorisOut3
                    }).add((0, m.fadeFromTo)(i, {
                        duration: .333,
                        ease: l.Sine.easeInOut
                    }), "<"));
                    const r = "horizontal" === t.dataset.maskDirection,
                        o = "top" === t.dataset.maskVerticalFrom ? "top" : "bottom";
                    e.add(r ? (0, s.maskSideReveal)(t) : (0, s.maskReveal)(t, {
                        from: o
                    }), "<")
                },
                d = (0, i.defineComponent)({
                    name: "m2-masked-image",
                    refs: {
                        image: (0, i.refComponent)(o.ClA3Image, {
                            ref: "image"
                        })
                    },
                    setup: ({
                        refs: e
                    }) => ((0, r.useTransitionController)(e.self, {
                        setupTransitionInTimeline: c,
                        refs: e
                    }), [])
                })
        }
    }
]);