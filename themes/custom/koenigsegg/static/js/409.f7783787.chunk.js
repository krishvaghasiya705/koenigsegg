(this.webpackChunkkoenigsegg_com = this.webpackChunkkoenigsegg_com || []).push([
    [409], {
        770: function(e, t, n) {
            "use strict";
            n.d(t, {
                imageScrollTimelineTriggerDefaultOptions: function() {
                    return a
                },
                getImageScrollTween: function() {
                    return r
                },
                setupImageScrollTimeline: function() {
                    return i
                }
            });
            var o = n(6529);
            const a = {
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0
                },
                r = (e, t = 1) => o.default.fromTo(e, {
                    scale: 1.1
                }, {
                    duration: t,
                    scale: 1,
                    ease: "none"
                }),
                i = (e, {
                    image: t
                }) => {
                    t && e.add(r(t))
                }
        },
        3805: function(e, t, n) {
            "use strict";
            n.d(t, {
                slideDownFadeIn: function() {
                    return i
                }
            });
            var o = n(6529),
                a = n(212);
            const r = {
                ease: n(6113).default.jorisInOut,
                duration: .7,
                from: -50,
                fadeTo: 1,
                clearProps: "y",
                autoAlpha: !1
            };

            function i(e, t = {}) {
                const n = { ...r,
                        ...t
                    },
                    i = o.default.timeline();
                return i.add((0, a.fadeFromTo)(e, {
                    duration: n.duration,
                    stagger: n.stagger,
                    to: n.fadeTo,
                    autoAlpha: n.autoAlpha
                })), i.fromTo(e, {
                    y: n.from
                }, {
                    y: 0,
                    clearProps: n.clearProps,
                    duration: n.duration,
                    stagger: n.stagger,
                    ease: n.ease
                }, "<"), i
            }
        },
        9720: function(e, t, n) {
            "use strict";
            n.d(t, {
                splitFadeIn: function() {
                    return u
                }
            });
            var o = n(6529),
                a = n(8832);
            const r = {
                duration: .5,
                stagger: .1,
                fadeTo: 1,
                clearProps: "autoAlpha",
                autoAlpha: !0
            };
            var i = n(212);
            const l = new Map;

            function s(e, t) {
                if (l.has(e)) {
                    const t = l.get(e);
                    null === t || void 0 === t || t.revert()
                }
                const n = function(e, t) {
                    return new a.default(e, {
                        type: t,
                        charsClass: "split-element",
                        wordsClass: "split-element",
                        linesClass: "split-element"
                    })
                }(e, t);
                return l.set(e, n), n[t]
            }

            function u(e, t = {}) {
                var n;
                const a = { ...r,
                        ...t
                    },
                    l = o.default.timeline(),
                    u = s(e, "lines"),
                    d = Math.min(null !== (n = a.stagger) && void 0 !== n ? n : .05, .5 / u.length);
                return u.forEach((e => {
                    var t;
                    l.add((0, i.fadeFromTo)(e, {
                        to: a.fadeTo,
                        duration: a.duration,
                        autoAlpha: a.autoAlpha,
                        clearProps: a.clearProps
                    }), `<${d}`), l.fromTo(e, {
                        x: 20
                    }, {
                        x: 0,
                        clearProps: "x",
                        duration: null !== (t = a.duration) && void 0 !== t ? t : .5,
                        ease: "power3.out"
                    }, "<")
                })), l.add((0, i.fadeFromTo)(e, {
                    duration: .01
                }), .01), l
            }
        },
        4250: function(e, t, n) {
            "use strict";
            n.d(t, {
                A2Video: function() {
                    return u
                }
            });
            var o = n(4672),
                a = n(1096),
                r = n(8085),
                i = n(212);
            const l = (e, {
                videoElement: t
            }) => {
                t && (e.fromTo(t, {
                    scale: 1.4
                }, {
                    scale: 1,
                    duration: .7,
                    ease: "power3.out"
                }), e.add((0, i.fadeFromTo)(t), "<"))
            };
            var s = n(5967);
            const u = (0, o.defineComponent)({
                name: "a2-video",
                props: {
                    onEnded: o.propType.func.optional.shape(),
                    enableTransitionIn: o.propType.boolean.optional,
                    playInView: o.propType.boolean.optional
                },
                refs: {
                    videoElement: (0, o.refElement)("video-element")
                },
                setup({
                    refs: e,
                    props: t
                }) {
                    (0, r.default)(e.self, "ended", (() => {
                        var e;
                        return null === (e = t.onEnded) || void 0 === e ? void 0 : e.call(t)
                    })), (0, a.useTransitionController)(e.self, {
                        setupTransitionInTimeline: t.enableTransitionIn ? l : void 0,
                        refs: e
                    });
                    const n = (0, s.useIntersectionObserver)(e.self, {
                        threshold: [0, 1]
                    });
                    return (0, o.watch)(n, (n => {
                        if (!t.playInView) return;
                        const o = e.videoElement.element;
                        n ? o.play() : o.pause()
                    })), []
                }
            })
        },
        3011: function(e, t, n) {
            "use strict";
            n.d(t, {
                ClA1Heading: function() {
                    return a
                }
            });
            var o = n(4672);
            const a = (0, o.defineComponent)({
                name: "cl-a1-heading",
                props: {
                    copy: o.propType.string.optional.source({
                        type: "html"
                    })
                },
                setup: ({
                    props: e,
                    refs: t
                }) => [(0, o.bind)(t.self, {
                    html: (0, o.computed)((() => {
                        var t;
                        return null !== (t = e.copy) && void 0 !== t ? t : ""
                    }))
                })]
            })
        },
        2453: function(e, t, n) {
            "use strict";
            n.d(t, {
                svgContext: function() {
                    return o
                },
                isIcon: function() {
                    return r
                }
            });
            const o = n(3613),
                a = o.keys().map(((e = "") => {
                    var t, n;
                    return null !== (t = (null !== (n = e.split("/").pop()) && void 0 !== n ? n : "").split(".").shift()) && void 0 !== t ? t : ""
                })),
                r = e => "string" === typeof e && a.includes(e)
        },
        4791: function(e, t, n) {
            "use strict";
            n.d(t, {
                ClA2Icon: function() {
                    return r
                }
            });
            var o = n(4672),
                a = n(2453);
            const r = (0, o.defineComponent)({
                name: "cl-a2-icon",
                props: {
                    name: o.propType.string.validate(a.isIcon)
                },
                setup: ({
                    props: e,
                    refs: t
                }) => [(0, o.bind)(t.self, {
                    html: (0, o.computed)((() => e.name ? (0, a.svgContext)(`./${e.name}.svg`) : ""))
                })]
            })
        },
        1070: function(e, t, n) {
            "use strict";
            n.d(t, {
                ClA3Image: function() {
                    return p
                }
            });
            var o = n(4672),
                a = n(3653),
                r = n.n(a),
                i = (n(4745), n(1096)),
                l = n(1198),
                s = n(212),
                u = n(6113);
            const d = (e, {
                imageElement: t
            }) => {
                t && (e.fromTo(t, {
                    scale: 1.4
                }, {
                    scale: 1,
                    duration: .6667,
                    ease: u.default.jorisInOut
                }), e.add((0, s.fadeFromTo)(t, {
                    duration: .333,
                    ease: l.Sine.easeInOut
                }), "<"))
            };
            var c = n(8085);
            r().cfg.hFac = 1.5;
            const p = (0, o.defineComponent)({
                name: "cl-a3-image",
                props: {
                    onLoad: o.propType.func.optional.shape(),
                    enableTransitionIn: o.propType.boolean.optional
                },
                refs: {
                    imageElement: (0, o.refElement)("image-element")
                },
                setup: ({
                    refs: e,
                    props: t
                }) => ((0, i.useTransitionController)(e.self, {
                    setupTransitionInTimeline: t.enableTransitionIn ? d : void 0,
                    refs: e
                }), (0, c.default)(e.imageElement, "lazyloaded", (e => {
                    var n;
                    return null === (n = t.onLoad) || void 0 === n ? void 0 : n.call(t, e)
                })), [])
            })
        },
        6019: function(e, t, n) {
            "use strict";
            n.d(t, {
                ClA5Text: function() {
                    return a
                }
            });
            var o = n(4672);
            const a = (0, o.defineComponent)({
                name: "cl-a5-text",
                props: {
                    copy: o.propType.string.optional
                },
                setup: ({
                    props: e,
                    refs: t
                }) => [(0, o.bind)(t.self, {
                    html: (0, o.computed)((() => {
                        var n, o, a;
                        return null !== (n = null !== (o = e.copy) && void 0 !== o ? o : null === (a = t.self.element) || void 0 === a ? void 0 : a.innerHTML) && void 0 !== n ? n : ""
                    }))
                })]
            })
        },
        5286: function(e, t, n) {
            "use strict";
            n.d(t, {
                C26VideoOverlay: function() {
                    return b
                },
                lazy: function() {
                    return C
                }
            });
            var o = n(4672),
                a = n(7117),
                r = n(1096),
                i = n(3828),
                l = n(3470),
                s = n(8204),
                u = n.n(s),
                d = n(5970);

            function c(e) {
                const t = (0, o.shallowRef)(null);
                return (0, o.onUnmounted)((() => {
                    var e;
                    null === (e = t.value) || void 0 === e || e.destroy()
                })), {
                    player: t,
                    play: () => {
                        var e;
                        return null === t || void 0 === t || null === (e = t.value) || void 0 === e ? void 0 : e.playVideo()
                    },
                    pause: () => {
                        var e;
                        return null === t || void 0 === t || null === (e = t.value) || void 0 === e ? void 0 : e.pauseVideo()
                    },
                    stop: () => {
                        var e;
                        return null === t || void 0 === t || null === (e = t.value) || void 0 === e ? void 0 : e.stopVideo()
                    },
                    load: n => {
                        var o;
                        null === t.value && (t.value = u()((0, d.getElement)(e), {
                            playerVars: {
                                rel: 0,
                                modestbranding: 1,
                                iv_load_policy: 3
                            }
                        })), null === t || void 0 === t || null === (o = t.value) || void 0 === o || o.loadVideoById(n)
                    }
                }
            }
            var p = n(212),
                m = n(9915);
            const v = (e, {
                    container: t,
                    videoOuterWrapper: n,
                    closeButton: o
                }, a) => {
                    e.add((0, p.fadeFromTo)(t, {
                        autoAlpha: !0,
                        duration: .01
                    })), e.add((0, m.maskReveal)(t)), n && (e.add((0, m.maskReveal)(n), "<0.3"), e.add((0, p.fadeFromTo)(n, {
                        duration: .01
                    }), "<"), e.fromTo(n, {
                        yPercent: -10
                    }, {
                        yPercent: 0,
                        ease: "power2.out",
                        duration: .7
                    }, "<")), o && e.add(a.getTimeline(o), "<0.1")
                },
                f = (e, {
                    container: t
                }) => {
                    e.add((0, m.maskHide)(t)), e.add((0, p.fadeTo)(t, {
                        autoAlpha: !0,
                        duration: .01
                    }))
                };
            var g = n(504),
                h = n(8085);
            const y = e => ((e, t, n = document.documentElement) => {
                (0, h.default)(n, "keydown", (n => {
                    (Array.isArray(e) ? e.includes(n.key) : n.key === e) && t(n)
                }))
            })(g.Key.Escape, e);
            var w = n(8716),
                T = n(913);
            const b = (0, o.defineComponent)({
                    name: "c26-video-overlay",
                    components: [l.ClM1Button],
                    props: {
                        youtubeId: o.propType.string.optional
                    },
                    refs: {
                        videoOuterWrapper: (0, o.refElement)("video-outer-wrapper"),
                        videoWrapper: (0, o.refElement)("video-wrapper"),
                        closeButton: (0, o.refComponent)(l.ClM1Button, {
                            ref: "close-cta"
                        })
                    },
                    setup({
                        refs: e,
                        props: t,
                        element: n
                    }) {
                        var l;
                        (0, i.useBlockInitialized)(n);
                        const [s, u] = (0, w.useState)(!1), d = (0, o.ref)(null !== (l = t.youtubeId) && void 0 !== l ? l : null), p = (0, o.ref)(null), m = (0, r.useTransitionController)(e.self, {
                            setupTransitionInTimeline: v,
                            setupTransitionOutTimeline: f,
                            refs: e
                        }), {
                            load: g,
                            play: h,
                            pause: b
                        } = c(e.videoWrapper), {
                            onVideoPlayerStart: C,
                            onVideoPlayerStop: z,
                            stopVideoPlayer: x
                        } = (0, T.useVideoPlayer)();
                        return C((e => {
                            var t;
                            null === m || void 0 === m || m.transitionIn(), e.youtubeId === d.value && h(), d.value = e.youtubeId, p.value = null !== (t = e.title) && void 0 !== t ? t : null, (0, a.disableBodyScroll)(n, {
                                reserveScrollBarGap: !0
                            }), u(!0)
                        })), z((async () => {
                            b(), await (null === m || void 0 === m ? void 0 : m.transitionOut()), (0, a.enableBodyScroll)(n), u(!1)
                        })), y((() => s.value && x())), (0, o.watch)(d, (e => {
                            e && (g(e), h())
                        })), [(0, o.bind)(e.closeButton, {
                            onClick: x
                        })]
                    }
                }),
                C = (0, o.supportLazy)(b)
        },
        8409: function(e, t, n) {
            "use strict";
            n.d(t, {
                lazy: function() {
                    return Q
                }
            });
            var o = n(4672),
                a = n(810),
                r = n(1096),
                i = n(3470),
                l = n(3011),
                s = n(1070),
                u = n(4250),
                d = n(3805),
                c = n(770);
            const p = (e, {
                    backgroundImage: t,
                    backgroundVideo: n,
                    headerContent: o
                }, a) => {
                    t && e.add(a.getTimeline(t), 0), n && e.add(a.getTimeline(n), 0), o && e.add((0, d.slideDownFadeIn)(o), "<0.05")
                },
                m = (e, {
                    backgroundImage: t
                }) => {
                    t && e.add((0, c.getImageScrollTween)(t), "<")
                };
            var v = n(3828),
                f = n(549),
                g = n(1668),
                h = n(1608);
            const y = (0, o.defineComponent)({
                name: "c1-header-main",
                components: [i.ClM1Button, l.ClA1Heading, s.ClA3Image, u.A2Video, f.O2FaqTopicChooser],
                props: {
                    categories: o.propType.array.optional
                },
                refs: {
                    backgroundImage: (0, o.refComponent)(s.ClA3Image, {
                        ref: "background-image",
                        isRequired: !1
                    }),
                    backgroundVideo: (0, o.refComponent)(u.A2Video, {
                        ref: "background-video",
                        isRequired: !1
                    }),
                    headerContent: (0, o.refElement)("header-content"),
                    categoryFilter: (0, o.refComponent)(f.O2FaqTopicChooser, {
                        ref: "category-filter",
                        isRequired: !1
                    })
                },
                setup({
                    props: e,
                    refs: t,
                    element: n
                }) {
                    (0, v.useBlockInitialized)(n);
                    const {
                        changeCategoryFilter: a
                    } = (0, h.useCategoryFilter)(), i = (0, r.useTransitionController)(t.self, {
                        setupTransitionInTimeline: p,
                        refs: t
                    });
                    (0, r.useScrollTransition)(t.self, {
                        setupTransitionInTimeline: m,
                        refs: t,
                        scrollTrigger: { ...c.imageScrollTimelineTriggerDefaultOptions,
                            start: "top top"
                        }
                    });
                    const l = t => {
                            var n;
                            null !== (n = e.categories) && void 0 !== n && n[t] && a(e.categories[t].value)
                        },
                        {
                            isLoadingAssetsForTransitionIn: s,
                            onTransitionInStart: u
                        } = (0, g.useReadyForTransitionIn)(),
                        d = (0, o.ref)(s());
                    return u((() => {
                        null === i || void 0 === i || i.transitionIn()
                    })), (0, o.onMounted)((() => {
                        if (l(0), t.backgroundImage.component) {
                            const e = t.backgroundImage.component.element.querySelector("img");
                            e && d.value && (e.onload = d.value)
                        }
                    })), [(0, o.bind)(t.categoryFilter, {
                        onActiveIndexChange: e => l(e)
                    })]
                }
            });
            var w = n(6113);
            const T = (e, {
                    visualWrapper: t,
                    visual: n,
                    image: o,
                    video: a,
                    backCta: r,
                    title: i
                }, l) => {
                    o && n && t && (e.add(l.getTimeline(o)), e.fromTo(n, {
                        bottom: () => Math.min(0, t.offsetHeight - window.innerHeight)
                    }, {
                        bottom: 0,
                        duration: .8,
                        ease: w.default.vinnieInOut,
                        clearProps: "bottom"
                    }, "<")), a && e.add(l.getTimeline(a), "<"), r && e.add((0, d.slideDownFadeIn)(r, {
                        from: 20
                    }), "<0.2"), i && e.add((0, d.slideDownFadeIn)(i, {
                        from: 50
                    }), "<0.1")
                },
                b = (0, o.defineComponent)({
                    name: "c2-header-detail",
                    components: [l.ClA1Heading, s.ClA3Image, i.ClM1Button, u.A2Video],
                    refs: {
                        visualWrapper: (0, o.refElement)("visual-wrapper"),
                        visual: (0, o.refElement)("visual"),
                        image: (0, o.refComponent)(s.ClA3Image, {
                            ref: "image",
                            isRequired: !1
                        }),
                        video: (0, o.refComponent)(u.A2Video, {
                            ref: "video",
                            isRequired: !1
                        }),
                        title: (0, o.refComponent)(l.ClA1Heading, {
                            ref: "title"
                        }),
                        backCta: (0, o.refComponent)(i.ClM1Button, {
                            ref: "back-cta"
                        })
                    },
                    setup: ({
                        refs: e,
                        element: t
                    }) => ((0, v.useBlockInitialized)(t), (0, r.useScrollTransition)(e.self, {
                        setupTransitionInTimeline: T,
                        refs: e,
                        registerTransitionController: !0
                    }), (0, r.useScrollTransition)(e.self, {
                        setupTransitionInTimeline: c.setupImageScrollTimeline,
                        refs: {
                            image: e.image
                        },
                        scrollTrigger: c.imageScrollTimelineTriggerDefaultOptions
                    }), [])
                });
            var C = n(6019),
                z = n(9720),
                x = n(212);
            const I = (e, {
                container: t,
                background: n,
                title: o,
                copy: a,
                subtitle: r
            }, i) => {
                n && (e.fromTo(n, {
                    scaleY: 1
                }, {
                    scaleY: () => Math.min(1, t.offsetHeight / window.innerHeight),
                    duration: .8,
                    ease: w.default.vinnieInOut
                }), e.add((0, x.fadeFromTo)(n, {
                    from: 1,
                    to: 0,
                    autoAlpha: !0,
                    duration: .01
                }))), o && e.add(i.getTimeline(o), ">-0.4"), a && e.add((0, z.splitFadeIn)(a), "-=0.4"), r && e.add((0, d.slideDownFadeIn)(r, {
                    from: 20
                }), "-=0.4")
            };
            var k = n(5982);
            const M = [y, b, (0, o.defineComponent)({
                    name: "c3-header-content",
                    components: [l.ClA1Heading, C.ClA5Text, k.M1MultilineTitle],
                    refs: {
                        background: (0, o.refElement)("background"),
                        title: (0, o.refComponent)(k.M1MultilineTitle, {
                            ref: "title"
                        }),
                        copy: (0, o.refComponent)(C.ClA5Text, {
                            ref: "copy"
                        }),
                        subtitle: (0, o.refComponent)(l.ClA1Heading, {
                            ref: "subtitle",
                            isRequired: !1
                        })
                    },
                    setup: ({
                        refs: e,
                        element: t
                    }) => ((0, v.useBlockInitialized)(t), (0, r.useScrollTransition)(e.self, {
                        setupTransitionInTimeline: I,
                        registerTransitionController: !0,
                        refs: e
                    }), [])
                }), (0, o.lazy)("c24-dealer-locator", (() => Promise.all([n.e(439), n.e(284)]).then(n.bind(n, 4284)))), (0, o.lazy)("c5-vertical-tabs", (() => n.e(749).then(n.bind(n, 8749)))), (0, o.lazy)("c22-technical-specifications", (() => n.e(373).then(n.bind(n, 8373)))), (0, o.lazy)("c8-content-video", (() => n.e(385).then(n.bind(n, 5385)))), (0, o.lazy)("c26-video-overlay", (() => Promise.resolve().then(n.bind(n, 5286)))), (0, o.lazy)("c16-text-image-with-detail", (() => Promise.all([n.e(439), n.e(897)]).then(n.bind(n, 5897)))), (0, o.lazy)("c18-topic-highlight", (() => Promise.all([n.e(439), n.e(946)]).then(n.bind(n, 7946)))), (0, o.lazy)("c4-horizontal-tabs", (() => n.e(663).then(n.bind(n, 663)))), (0, o.lazy)("c15-quick-links", (() => n.e(437).then(n.bind(n, 5437)))), (0, o.lazy)("c10c-history-image", (() => n.e(25).then(n.bind(n, 6025)))), (0, o.lazy)("c10b-history-columns", (() => Promise.all([n.e(439), n.e(436)]).then(n.bind(n, 3436)))), (0, o.lazy)("c10a-history-header", (() => n.e(307).then(n.bind(n, 6307)))), (0, o.lazy)("c8a-featured-content-image", (() => n.e(485).then(n.bind(n, 2946)))), (0, o.lazy)("c20-faq", (() => n.e(421).then(n.bind(n, 3421)))), (0, o.lazy)("c21-quote", (() => n.e(265).then(n.bind(n, 5265)))), (0, o.lazy)("c13-basic-text-block", (() => n.e(719).then(n.bind(n, 9719)))), (0, o.lazy)("c19-call-to-action", (() => n.e(341).then(n.bind(n, 9341)))), (0, o.lazy)("c17-specs", (() => n.e(419).then(n.bind(n, 419)))), (0, o.lazy)("c7-grid", (() => Promise.all([n.e(439), n.e(202)]).then(n.bind(n, 5202)))), (0, o.lazy)("c14-image-slider", (() => Promise.all([n.e(175), n.e(795)]).then(n.bind(n, 2795)))), (0, o.lazy)("c6-feature-block", (() => n.e(177).then(n.bind(n, 4177)))), (0, o.lazy)("c9-text-with-image", (() => n.e(751).then(n.bind(n, 7751)))), (0, o.lazy)("c11-big-text", (() => n.e(957).then(n.bind(n, 8957)))), (0, o.lazy)("c12-text-with-ctas", (() => n.e(688).then(n.bind(n, 5688)))), (0, o.lazy)("c999-stagger-split-text", (() => n.e(313).then(n.bind(n, 1313)))), (0, o.lazy)("c25-not-found", (() => n.e(887).then(n.bind(n, 5887))))],
                A = (0, o.defineComponent)({
                    name: "block-renderer",
                    components: M,
                    setup: () => []
                });
            var E = n(7117),
                O = n(4785),
                B = n(6529);
            const P = (e, {
                    navigationWrapper: t
                }) => {
                    t && e.add((0, d.slideDownFadeIn)(t, {
                        duration: .6667,
                        from: -40
                    }))
                },
                S = (e, {
                    navigation: t,
                    closeButton: n,
                    menuIcon: o
                }, a) => {
                    if (t && e.add(a.getTimeline(t)), n && e.add(a.getTimeline(n), "<"), o) {
                        const t = Array.from(o.querySelectorAll(".line"));
                        e.fromTo(o, {
                            rotation: 0
                        }, {
                            rotation: 45,
                            duration: .3,
                            ease: "power2.out"
                        }, 0), e.add((() => {
                            B.default.killTweensOf(t), B.default.fromTo(t, {
                                y: 0,
                                rotation: 0,
                                transformOrigin: "center center"
                            }, {
                                y: B.default.utils.wrap([3, -3]),
                                rotation: B.default.utils.wrap([0, -90]),
                                duration: .3,
                                ease: "power2.out"
                            })
                        }), 0)
                    }
                },
                V = (e, {
                    navigation: t,
                    closeButton: n,
                    menuIcon: o
                }, a) => {
                    if (t && e.add(a.getTimeline(t, "out"), .01), n && e.add(a.getTimeline(n, "out"), "<"), o) {
                        const t = Array.from(o.querySelectorAll(".line"));
                        e.to(o, {
                            rotation: 0,
                            duration: .3,
                            ease: "power2.out",
                            clearProps: "rotation"
                        }, .01), e.add((() => {
                            B.default.killTweensOf(t), B.default.to(t, {
                                y: 0,
                                rotation: 0,
                                transformOrigin: "center center",
                                duration: B.default.utils.wrap([.3, .15]),
                                ease: "power2.out",
                                clearProps: "y,rotation"
                            })
                        }), "<")
                    }
                };
            B.default.timeline();
            var R = n(4791),
                L = n(9915);
            const F = (e, {
                    container: t,
                    menuWrapper: n,
                    primaryLinkWrapper: o,
                    secondaryLinks: a
                }) => {
                    e.add((0, x.fadeFromTo)(t, {
                        duration: .01,
                        autoAlpha: !0
                    })), n && e.add((0, L.maskReveal)(n)), e.add((0, x.fadeFromTo)(o, {
                        stagger: .1
                    }), ">-0.5"), a && e.add((0, x.fadeFromTo)(a), "<0.2")
                },
                W = (e, {
                    container: t,
                    menuWrapper: n,
                    primaryLinkWrapper: o,
                    secondaryLinks: a
                }) => {
                    e.add((0, x.fadeTo)(o, {
                        duration: .3
                    })), a && e.add((0, x.fadeTo)(a, {
                        duration: .3
                    }), "<"), n && e.add((0, L.maskHide)(n), "<"), e.add((0, x.fadeTo)(t, {
                        duration: .01,
                        autoAlpha: !0
                    }))
                },
                H = (0, o.defineComponent)({
                    name: "o8-menu",
                    components: [l.ClA1Heading, C.ClA5Text],
                    refs: {
                        menuWrapper: (0, o.refElement)("menu-wrapper"),
                        primaryLinkWrapper: (0, o.refCollection)("primary-link-wrapper", {
                            minimumItemsRequired: 1
                        }),
                        primaryLink: (0, o.refCollection)("primary-link", {
                            minimumItemsRequired: 1
                        }),
                        secondaryLinks: (0, o.refElement)("secondary-links")
                    },
                    setup({
                        refs: e
                    }) {
                        const t = (0, o.ref)(-1);
                        return (0, r.useTransitionController)(e.self, {
                            setupTransitionInTimeline: F,
                            setupTransitionOutTimeline: W,
                            refs: e
                        }), [...(0, o.bindMap)(e.primaryLink, ((e, n) => ({
                            mouseenter: () => {
                                t.value = n
                            },
                            mouseleave: () => {
                                t.value = -1
                            },
                            css: (0, o.computed)((() => ({
                                "is-inactive": t.value > -1 && t.value !== n
                            })))
                        })))]
                    }
                });
            var q = n(8716);
            var D = n(8085),
                $ = n(9858);
            const j = (0, o.defineComponent)({
                    name: "n1-main-navigation",
                    components: [l.ClA1Heading, R.ClA2Icon],
                    refs: {
                        background: (0, o.refElement)("background"),
                        fixedWrapper: (0, o.refElement)("fixed-wrapper"),
                        navigationWrapper: (0, o.refElement)("navigation-wrapper"),
                        navigation: (0, o.refComponent)(H, {
                            ref: "navigation"
                        }),
                        navigationOption: (0, o.refCollection)("navigation-option", {
                            minimumItemsRequired: 0
                        }),
                        navigationToggle: (0, o.refElement)("navigation-toggle"),
                        menuIcon: (0, o.refComponent)(R.ClA2Icon, {
                            ref: "menu-icon"
                        }),
                        closeButton: (0, o.refComponent)(i.ClM1Button, {
                            ref: "close-button"
                        }),
                        logoLink: (0, o.refElement)("logo-link")
                    },
                    setup({
                        refs: e,
                        element: t
                    }) {
                        (0, v.useBlockInitialized)(t);
                        const n = () => window.pageYOffset || document.documentElement.scrollTop,
                            a = (0, $.useClientBounds)(e.fixedWrapper),
                            i = (0, $.useClientBounds)(e.fixedWrapper, {
                                updateOnResize: !0,
                                updateOnScroll: !0
                            }),
                            l = (0, o.computed)((() => i.value.height)),
                            [s, u] = (e => {
                                const [t, n] = (0, q.useState)(e);
                                return [t, e => {
                                    n(void 0 === e ? !t.value : e)
                                }]
                            })(!1),
                            d = (0, o.ref)(window.innerWidth - document.documentElement.clientWidth),
                            c = (0, o.ref)(0),
                            p = (0, o.computed)((() => 2 * a.value.height)),
                            m = (0, o.computed)((() => c.value > p.value)),
                            f = (0, o.ref)(!1),
                            h = (0, o.computed)((() => f.value || m.value)),
                            y = Math.min(.15 * window.innerHeight, 100),
                            T = (0, o.ref)(1),
                            b = (0, o.ref)(0),
                            C = (0, o.computed)((() => T.value < 0 && c.value < b.value - y)),
                            z = (0, o.ref)(-2),
                            x = (0, o.computed)((() => h.value ? 0 : B.default.utils.clamp(0, 1, B.default.utils.normalize(0, a.value.height, c.value)))),
                            I = (0, o.ref)(!1),
                            k = (0, r.useTransitionController)(e.self, {
                                setupTransitionInTimeline: P,
                                refs: e
                            }),
                            M = (0, r.useTransitionController)(e.self, {
                                registerTransitionController: !1,
                                setupTransitionInTimeline: S,
                                setupTransitionOutTimeline: V,
                                refs: e
                            }),
                            {
                                onTransitionInStart: A,
                                startAreAssetsLoadedWatcher: R
                            } = (0, g.useReadyForTransitionIn)();
                        A((() => {
                            null === k || void 0 === k || k.transitionIn()
                        }));
                        return (0, D.default)(window, "scroll", (() => {
                            c.value = n()
                        })), (0, o.watch)(s, (async n => {
                            var o, a, r;
                            (I.value = !0, n) ? (Object.assign(null === (o = e.fixedWrapper.element) || void 0 === o ? void 0 : o.style, {
                                marginRight: `${d.value}px`
                            }), (0, E.disableBodyScroll)(null === (a = e.navigation) || void 0 === a || null === (r = a.component) || void 0 === r ? void 0 : r.element, {
                                reserveScrollBarGap: !0
                            }), O.default.on(t), await (null === M || void 0 === M ? void 0 : M.transitionIn()), I.value = !1) : (null === M || void 0 === M || M.transitionOut().then((() => {
                                var t, n, o;
                                e.navigation.component && (e.navigation.component.element.scrollTop = 0), (0, E.enableBodyScroll)(null === (t = e.navigation) || void 0 === t || null === (n = t.component) || void 0 === n ? void 0 : n.element), Object.assign(null === (o = e.fixedWrapper.element) || void 0 === o ? void 0 : o.style, {
                                    marginRight: ""
                                }), I.value = !1
                            })), O.default.off(t))
                        })), (0, o.watch)(x, (e => {
                            B.default.set(t, {
                                "--naturalScrollOffset": e
                            })
                        })), (0, o.watch)(m, (t => {
                            f.value = !0, e.fixedWrapper.element && B.default.to(e.fixedWrapper.element, {
                                autoAlpha: t ? 1 : 0,
                                duration: t ? 0 : .3,
                                ease: t ? "none" : "power2.out",
                                onComplete: () => {
                                    f.value = !1, !t && e.fixedWrapper.element && B.default.set(e.fixedWrapper.element, {
                                        autoAlpha: 1,
                                        clearProps: "autoAlpha"
                                    })
                                }
                            }), t && (z.value = -1)
                        })), (0, o.watch)(c, ((e, t) => {
                            T.value = e > t ? 1 : -1
                        })), (0, o.watch)(T, (e => {
                            e < 0 && (b.value = n())
                        })), (0, o.watch)(C, (e => {
                            B.default.to(z, {
                                value: e ? 0 : -1,
                                duration: e ? .7 : .3,
                                ease: e ? w.default.jorisOut3 : "power2.out"
                            })
                        })), (0, o.watch)(z, (e => {
                            B.default.set(document.body, {
                                "--stickyVisibility": e
                            })
                        })), (0, o.watch)(l, (e => {
                            B.default.set(document.body, {
                                "--navigationHeight": `${e}px`
                            })
                        })), (0, o.onMounted)((() => setTimeout(R, 0))), [...(0, o.bindMap)(e.navigationOption, (() => ({
                            attr: {
                                inert: (0, o.computed)((() => s.value))
                            }
                        }))), (0, o.bind)(e.fixedWrapper, {
                            css: (0, o.computed)((() => ({
                                "is-fixed": h.value,
                                "is-navigation-open": s.value
                            })))
                        }), (0, o.bind)(e.navigationToggle, {
                            click: () => {
                                I.value || u()
                            },
                            attr: {
                                "data-open": (0, o.computed)((() => s.value)),
                                "aria-label": (0, o.computed)((() => s.value ? "close menu" : "open menu"))
                            }
                        }), (0, o.bind)(e.closeButton, {
                            attr: {
                                inert: (0, o.computed)((() => !0))
                            }
                        }), (0, o.bind)(e.logoLink, {
                            event: {
                                focus: () => window.scrollTo(0, 0)
                            }
                        })]
                    }
                }),
                U = ((0, o.supportLazy)(j), (e, {
                    title: t
                }, n) => {
                    t && e.add(n.getTimeline(t))
                }),
                _ = (0, o.defineComponent)({
                    name: "n2-footer",
                    components: [R.ClA2Icon, C.ClA5Text, k.M1MultilineTitle],
                    refs: {
                        title: (0, o.refComponent)(k.M1MultilineTitle, {
                            ref: "title"
                        })
                    },
                    setup: ({
                        refs: e,
                        element: t
                    }) => ((0, v.useBlockInitialized)(t), (0, r.useScrollTransition)(e.self, {
                        setupTransitionInTimeline: U,
                        registerTransitionController: !0,
                        refs: e
                    }), [])
                });
            (0, o.supportLazy)(_);
            const Y = (e, {
                    content: t,
                    callToAction: n
                }, o) => {
                    t && (e.add((0, x.fadeFromTo)(t, {
                        autoAlpha: !0,
                        duration: .01,
                        clearProps: ""
                    })), e.fromTo(t, {
                        "--yProgress": 1
                    }, {
                        "--yProgress": 0,
                        duration: .8,
                        ease: w.default.vinnieInOut
                    }, .2), n && e.add(o.getTimeline(n), "<0.1"))
                },
                N = (e, {
                    content: t
                }) => {
                    t && (e.to(t, {
                        "--yProgress": 1,
                        duration: .6,
                        ease: w.default.vinnieInOut
                    }), e.add((0, x.fadeTo)(t, {
                        duration: .01
                    })))
                },
                X = (0, o.defineComponent)({
                    name: "n3-cookie-notice",
                    components: [i.ClM1Button, C.ClA5Text, R.ClA2Icon],
                    props: {
                        cookieName: o.propType.string
                    },
                    refs: {
                        content: (0, o.refElement)("content"),
                        callToAction: (0, o.refComponent)(i.ClM1Button, {
                            ref: "call-to-action"
                        })
                    },
                    setup({
                        props: e,
                        refs: t
                    }) {
                        const [n, a] = function(e, t) {
                            var n;
                            const [o, a] = (0, q.useState)(null !== (n = t || localStorage.getItem(e)) && void 0 !== n ? n : "");
                            return [o, t => {
                                localStorage.setItem(e, t), a(t)
                            }, () => {
                                localStorage.removeItem(e), a("")
                            }]
                        }(e.cookieName), i = (0, r.useTransitionController)(t.self, {
                            setupTransitionInTimeline: Y,
                            setupTransitionOutTimeline: N,
                            refs: t
                        });
                        return (0, o.onMounted)((() => {
                            n.value || null === i || void 0 === i || i.transitionIn()
                        })), (0, o.watch)(n, (e => {
                            e && (null === i || void 0 === i || i.transitionOut())
                        })), [(0, o.bind)(t.callToAction, {
                            onClick: () => a("true")
                        })]
                    }
                });
            (0, o.supportLazy)(X);
            var G = n(5286);
            const K = (0, o.defineComponent)({
                    name: "default-layout",
                    components: [A, j, _, X, G.C26VideoOverlay],
                    setup: () => []
                }),
                Q = (0, a.supportLazy)(K)
        },
        3470: function(e, t, n) {
            "use strict";
            n.d(t, {
                ClM1Button: function() {
                    return T
                }
            });
            var o = n(4672),
                a = n(1096),
                r = n(6113),
                i = n(212),
                l = n(3805);
            var s = n(4791),
                u = n(6019);
            const d = {
                    icon: (0, o.refComponent)(s.ClA2Icon, {
                        ref: "icon",
                        isRequired: !1
                    }),
                    label: (0, o.refComponent)(u.ClA5Text, {
                        ref: "label",
                        isRequired: !1
                    })
                },
                c = (e, t) => [(0, o.bind)(t.self, {
                    attr: {
                        disabled: (0, o.computed)((() => e.disabled)),
                        href: (0, o.computed)((() => e.href)),
                        ariaLabel: (0, o.computed)((() => e.ariaLabel)),
                        ariaControls: (0, o.computed)((() => e.ariaControls))
                    },
                    event: {
                        click: t => {
                            var n;
                            return null === (n = e.onClick) || void 0 === n ? void 0 : n.call(e, t)
                        },
                        focus: t => {
                            var n;
                            return null === (n = e.onFocus) || void 0 === n ? void 0 : n.call(e, t)
                        },
                        blur: t => {
                            var n;
                            return null === (n = e.onBlur) || void 0 === n ? void 0 : n.call(e, t)
                        }
                    }
                }), (0, o.bind)(t.label, {
                    copy: (0, o.computed)((() => e.label))
                }), (0, o.bind)(t.icon, {
                    name: (0, o.computed)((() => {
                        var t;
                        return null !== (t = e.icon) && void 0 !== t ? t : ""
                    }))
                })];
            var p = n(2453);
            const m = {
                onClick: o.propType.func.optional.shape(),
                label: o.propType.string.defaultValue("").source({
                    type: "html",
                    target: "label"
                }),
                icon: o.propType.string.optional.validate(p.isIcon).source({
                    type: "data",
                    name: "name",
                    target: "icon"
                }),
                disabled: o.propType.boolean.optional.source({
                    type: "attr"
                }),
                href: o.propType.string.optional.source({
                    type: "attr"
                }),
                ariaLabel: o.propType.string.optional.source({
                    type: "attr",
                    name: "aria-label"
                }),
                ariaControls: o.propType.string.optional.source({
                    type: "attr",
                    name: "aria-controls"
                }),
                onFocus: o.propType.func.optional.shape(),
                onBlur: o.propType.func.optional.shape()
            };
            var v = n(9858),
                f = n(6529),
                g = n(6574);
            f.default.registerPlugin(g.default);
            const h = ["primary", "secondary", "tertiary"],
                y = 12.5,
                w = Math.sqrt(312.5),
                T = (0, o.defineComponent)({
                    name: "cl-m1-button",
                    props: { ...m,
                        visualStyle: o.propType.string.validate((e => "string" === typeof e && h.includes(e))).source({
                            name: "style"
                        })
                    },
                    components: [s.ClA2Icon],
                    refs: { ...d,
                        outline: (0, o.refElement)("primary-outline", {
                            isRequired: !1
                        }),
                        outlinePath: (0, o.refElement)("primary-outline-path", {
                            isRequired: !1
                        }),
                        underline: (0, o.refElement)("underline", {
                            isRequired: !1
                        }),
                        labelWrapper: (0, o.refElement)("label-wrapper", {
                            isRequired: !1
                        }),
                        icon: (0, o.refComponent)(s.ClA2Icon, {
                            ref: "icon",
                            isRequired: !1
                        }),
                        iconHover: (0, o.refComponent)(s.ClA2Icon, {
                            ref: "icon-hover",
                            isRequired: !1
                        })
                    },
                    setup({
                        props: e,
                        refs: t
                    }) {
                        const n = (0, v.useClientBounds)(t.self),
                            s = (0, o.ref)(0),
                            u = (0, o.ref)(0),
                            d = (0, o.shallowRef)("primary" === e.visualStyle),
                            p = (0, o.ref)(e.icon),
                            m = (0, o.computed)((() => {
                                if (!d.value) return "";
                                const {
                                    width: e,
                                    height: t
                                } = n.value;
                                return `12.5 ${t}\n              L0 ${t-y}\n              L0 12.5\n              L12.5 0\n              L${e-y} 0\n              L${e} 12.5`
                            }));
                        (0, a.useTransitionController)(t.self, {
                            setupTransitionInTimeline: (e, t, n) => d.value ? ((e, t, n, {
                                container: o,
                                labelWrapper: a,
                                icon: s
                            }) => {
                                n.add((0, i.fadeFromTo)(o, {
                                    duration: .01
                                })), n.fromTo(e, {
                                    value: 0
                                }, {
                                    value: 1,
                                    duration: .8,
                                    ease: r.default.vinnieInOut
                                }), a && n.add((0, l.slideDownFadeIn)(a, {
                                    from: -20
                                }), "<"), s && n.add((0, l.slideDownFadeIn)(s, {
                                    from: -20
                                }), "<")
                            })(s, 0, e, t) : void 0,
                            setupTransitionOutTimeline: (e, t, n) => d.value ? ((e, {
                                container: t
                            }) => {
                                e.add((0, i.fadeTo)(t, {
                                    duration: .3
                                }))
                            })(e, t) : void 0,
                            refs: t
                        });
                        const g = (0, a.useTransitionController)(t.self, {
                            setupTransitionInTimeline: (e, t, n) => ((e, t, n, {
                                container: o,
                                underline: a,
                                outlinePath: i,
                                icon: l,
                                iconHover: s
                            }) => {
                                if (a && n.to(a, {
                                        xPercent: 102,
                                        duration: .6,
                                        ease: r.default.vinnieInOut
                                    }), "primary" === o.dataset.style || "secondary" === o.dataset.style) {
                                    if (t.value && l && s) {
                                        const e = {
                                                xStart: 0,
                                                xEnd: 0,
                                                yStart: 0,
                                                yEnd: 0
                                            },
                                            o = {
                                                xStart: 0,
                                                xEnd: 0,
                                                yStart: 0,
                                                yEnd: 0
                                            };
                                        switch (t.value) {
                                            case "arrow-right":
                                                e.xEnd = 150, o.xStart = -150;
                                                break;
                                            case "arrow-down":
                                                e.yEnd = 150, o.yStart = -150;
                                                break;
                                            case "arrow-left":
                                                e.xEnd = -150, o.xStart = 150
                                        }
                                        n.fromTo(l, {
                                            xPercent: e.xStart,
                                            yPercent: e.yStart,
                                            autoAlpha: 1
                                        }, {
                                            xPercent: e.xEnd,
                                            yPercent: e.yEnd,
                                            duration: .4,
                                            ease: r.default.vinnieInOut
                                        }, "<"), n.fromTo(s, {
                                            xPercent: o.xStart,
                                            yPercent: o.yStart
                                        }, {
                                            xPercent: o.xEnd,
                                            yPercent: o.yEnd,
                                            duration: .4,
                                            ease: r.default.vinnieInOut
                                        }, "<")
                                    }
                                    i && n.to(i, {
                                        opacity: 1,
                                        stroke: "#f6be00",
                                        duration: .2
                                    }, "<"), "primary" === o.dataset.style && n.fromTo(e, {
                                        value: 0
                                    }, {
                                        value: -1,
                                        duration: .66667,
                                        ease: r.default.jorisInOut
                                    }, "<")
                                }
                            })(u, p, e, t),
                            setupTransitionOutTimeline: (e, t, n) => ((e, t, n, {
                                container: o,
                                underline: a,
                                outlinePath: i,
                                icon: l,
                                iconHover: s
                            }) => {
                                if (a && n.to(a, {
                                        xPercent: 0,
                                        duration: .2,
                                        ease: r.default.easeInQuad
                                    }), "primary" === o.dataset.style || "secondary" === o.dataset.style) {
                                    if (t.value && l && s) {
                                        const e = {
                                                xEnd: 0,
                                                yEnd: 0
                                            },
                                            o = {
                                                xEnd: 0,
                                                yEnd: 0
                                            };
                                        switch (t.value) {
                                            case "arrow-right":
                                                o.xEnd = -150;
                                                break;
                                            case "arrow-down":
                                                o.yEnd = -150;
                                                break;
                                            case "arrow-left":
                                                o.xEnd = 150
                                        }
                                        n.set(s, {
                                            xPercent: o.xEnd,
                                            yPercent: o.yEnd,
                                            clearProps: "all"
                                        }, "<"), n.set(l, {
                                            xPercent: e.xEnd,
                                            yPercent: e.yEnd,
                                            clearProps: "all"
                                        }, "<")
                                    }
                                    i && n.to(i, {
                                        opacity: .3,
                                        stroke: "currentColor",
                                        duration: .1
                                    }, "<"), "primary" === o.dataset.style && n.to(e, {
                                        value: -2,
                                        duration: .5,
                                        ease: "power2.out"
                                    }, "<")
                                }
                            })(u, p, e, t),
                            refs: t,
                            registerTransitionController: !1
                        });
                        return [...c(e, t), (0, o.bind)(t.self, {
                            click: t => {
                                var n, o;
                                null !== (n = e.href) && void 0 !== n && n.startsWith("#") && "#" !== e.href && (t.preventDefault(), async function(e = {}, t = .3, n = r.default.vinnieInOut, o = 0) {
                                    new Promise((a => {
                                        f.default.to(window, {
                                            duration: t,
                                            ease: n,
                                            delay: o,
                                            scrollTo: {
                                                autoKill: !0,
                                                ...e
                                            },
                                            onComplete: a
                                        })
                                    }))
                                }({
                                    y: null !== (o = e.href) && void 0 !== o ? o : void 0
                                }, 1))
                            }
                        }), (0, o.bind)(t.outline, {
                            attr: {
                                viewBox: (0, o.computed)((() => {
                                    var e, o;
                                    return `0 0 ${n.value.width||(null===(e=t.self.element)||void 0===e?void 0:e.offsetWidth)} ${n.value.height||(null===(o=t.self.element)||void 0===o?void 0:o.offsetHeight)}`
                                }))
                            }
                        }), (0, o.bind)(t.outlinePath, {
                            attr: {
                                d: (0, o.computed)((() => {
                                    const {
                                        width: e,
                                        height: t
                                    } = n.value;
                                    return `M${e} ${t-y}\n              L${e-y} ${t}\n              ${m.value} Z`
                                }))
                            },
                            style: {
                                strokeDasharray: (0, o.computed)((() => {
                                    var e;
                                    const {
                                        width: o,
                                        height: a
                                    } = n.value, r = null === (e = t.outlinePath.element) || void 0 === e ? void 0 : e.getTotalLength(), i = (w + (o - 25)) * s.value, l = (r - i - (a - 25)) * s.value;
                                    return `0 ${i} ${l} ${r-l-i}`
                                })),
                                strokeDashoffset: (0, o.computed)((() => {
                                    var e;
                                    return "" + (null === (e = t.outlinePath.element) || void 0 === e ? void 0 : e.getTotalLength()) * u.value
                                }))
                            }
                        }), (0, o.bind)(t.self, {
                            mouseenter: () => null === g || void 0 === g ? void 0 : g.transitionIn(),
                            mouseleave: () => null === g || void 0 === g ? void 0 : g.transitionOut()
                        })]
                    }
                })
        },
        5982: function(e, t, n) {
            "use strict";
            n.d(t, {
                M1MultilineTitle: function() {
                    return c
                }
            });
            var o = n(4672),
                a = n(1096),
                r = n(6529),
                i = n(1198),
                l = n(212),
                s = n(6113);
            const u = (e, {
                    container: t,
                    line: n
                }) => {
                    e.add((0, l.fadeFromTo)(t, {
                        duration: .01
                    }), 0), n.forEach((t => {
                        const n = r.default.timeline();
                        n.fromTo(t, {
                            yPercent: 110
                        }, {
                            yPercent: 0,
                            clearProps: "y",
                            duration: .4333,
                            ease: s.default.jorisOut3
                        }), n.add((0, l.fadeFromTo)(t, {
                            duration: .2555,
                            ease: i.Sine.easeOut
                        }), "<"), e.add(n, "<0.03333")
                    }))
                },
                d = (e, {
                    container: t,
                    line: n
                }) => {
                    n.forEach((t => {
                        const n = r.default.timeline();
                        n.to(t, {
                            yPercent: -110,
                            duration: .5,
                            ease: "power2.inOut"
                        }), n.add((0, l.fadeTo)(t, {
                            duration: .3
                        }), "<"), e.add(n, "<0.05")
                    })), e.add((0, l.fadeTo)(t, {
                        duration: .01
                    }))
                },
                c = (0, o.defineComponent)({
                    name: "m1-multiline-title",
                    refs: {
                        line: (0, o.refCollection)("line", {
                            minimumItemsRequired: 1
                        })
                    },
                    setup: ({
                        refs: e
                    }) => ((0, a.useTransitionController)(e.self, {
                        setupTransitionInTimeline: u,
                        setupTransitionOutTimeline: d,
                        refs: e
                    }), [])
                })
        },
        549: function(e, t, n) {
            "use strict";
            n.d(t, {
                O2FaqTopicChooser: function() {
                    return d
                }
            });
            var o = n(4672),
                a = n(6529),
                r = n(3828),
                i = n(8716);
            var l = n(909),
                s = n(236),
                u = n(4791);
            const d = (0, o.defineComponent)({
                name: "o2-faq-topic-chooser",
                components: [u.ClA2Icon],
                props: {
                    activeIndex: o.propType.number.defaultValue(0),
                    onActiveIndexChange: o.propType.func.optional.shape(),
                    resetIndex: o.propType.boolean.defaultValue(!1)
                },
                refs: {
                    category: (0, o.refCollection)("category"),
                    carouselItemsWrapper: (0, o.refElement)("carousel-items-wrapper")
                },
                setup({
                    props: e,
                    refs: t,
                    element: n
                }) {
                    var u, d, c, p;
                    (0, r.useBlockInitialized)(n);
                    const [m, v] = (0, i.useState)(e.activeIndex), f = (0, o.computed)((() => e.resetIndex));
                    let g, h = null === (u = t.self) || void 0 === u || null === (d = u.element) || void 0 === d ? void 0 : d.getBoundingClientRect().width,
                        y = null === (c = t.carouselItemsWrapper) || void 0 === c || null === (p = c.element) || void 0 === p ? void 0 : p.getBoundingClientRect().width;
                    return (0, o.watch)(m, (() => {
                        var t;
                        return null === (t = e.onActiveIndexChange) || void 0 === t ? void 0 : t.call(e, m.value)
                    })), (0, o.watch)(f, (e => {
                        e && v(0)
                    })), h && y && (g = (0, s.useDraggable)(t.carouselItemsWrapper, {
                        dragClickables: !0,
                        allowContextMenu: !0,
                        type: "x",
                        throwProps: !0,
                        edgeResistance: .85,
                        zIndexBoost: !1,
                        bounds: {
                            minX: h - y,
                            maxX: 0,
                            minY: 0,
                            maxY: 0
                        }
                    })), (0, l.useResizeObserver)(t.self, (() => {
                        var e, n, o, r, i, l, s;
                        g && (h = null === (e = t.self) || void 0 === e || null === (n = e.element) || void 0 === n ? void 0 : n.getBoundingClientRect().width, y = null === (o = t.carouselItemsWrapper) || void 0 === o || null === (r = o.element) || void 0 === r ? void 0 : r.getBoundingClientRect().width, h && y && (h - y < 0 ? (null === (i = g.value) || void 0 === i || i.applyBounds({
                            minX: h - y,
                            maxX: 0
                        }), null === (l = g.value) || void 0 === l || l.enable()) : (t.carouselItemsWrapper.element && a.default.set(t.carouselItemsWrapper.element, {
                            x: 0
                        }), null === (s = g.value) || void 0 === s || s.disable())))
                    }), 200), [...(0, o.bindMap)(t.category, ((e, t) => ({
                        css: (0, o.computed)((() => ({
                            "is-active": t === m.value
                        }))),
                        click: () => {
                            v(t)
                        }
                    })))]
                }
            })
        },
        3828: function(e, t, n) {
            "use strict";
            n.d(t, {
                useBlockInitialized: function() {
                    return a
                }
            });
            var o = n(4672);

            function a(e) {
                (0, o.onMounted)((() => setTimeout((() => e.classList.add("is-initialized")), 0)))
            }
        },
        9858: function(e, t, n) {
            "use strict";
            n.d(t, {
                useClientBounds: function() {
                    return p
                }
            });
            var o = n(2732),
                a = n(2358),
                r = n(6992),
                i = n(4672),
                l = n(8085),
                s = n(5970),
                u = n(909);
            const d = ["width", "height", "left", "right", "top", "bottom", "x", "y"],
                c = {
                    updateOnScroll: !1,
                    updateOnResize: !1
                },
                p = (e, t = {}) => {
                    const {
                        updateOnScroll: n,
                        updateOnResize: p
                    } = { ...c,
                        ...t
                    }, m = (0, i.ref)({
                        width: 0,
                        height: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        x: 0,
                        y: 0
                    }), v = () => {
                        if (!e) return;
                        const t = (0, s.getElement)(e);
                        t && (m.value = (0, o.default)(t.getBoundingClientRect(), d))
                    };
                    return (0, u.useResizeObserver)(e, v), (0, l.default)(window, "scroll", n ? v : a.default), (0, l.default)(window, "resize", p ? (0, r.default)(v, 100) : a.default), (0, i.onMounted)(v), m
                }
        },
        236: function(e, t, n) {
            "use strict";
            n.d(t, {
                useDraggable: function() {
                    return i
                }
            });
            var o = n(6529),
                a = n(7178),
                r = n(4672);
            const i = (e, t) => {
                const i = (0, r.shallowRef)(null);
                return (0, r.onMounted)((async () => {
                    const r = await (async () => {
                        if ("undefined" === typeof window) return null;
                        const {
                            Draggable: e
                        } = await n.e(83).then(n.bind(n, 8083));
                        return o.default.registerPlugin(e, a.default), e
                    })();
                    r && e.element && ([i.value] = r.create(e.element, t))
                })), (0, r.onUnmounted)((() => {
                    var e;
                    return null === (e = i.value) || void 0 === e ? void 0 : e.kill()
                })), i
            }
        },
        5967: function(e, t, n) {
            "use strict";
            n.d(t, {
                useIntersectionObserver: function() {
                    return l
                }
            });
            var o = n(4672),
                a = n(5970),
                r = n(8716);
            const i = {};

            function l(e, t = {}) {
                var n;
                const [l, s] = (0, r.useState)(!1), u = null !== (n = t.threshold) && void 0 !== n ? n : .5, d = Array.isArray(u) ? u.join("|") : u.toString();
                return (0, o.watch)(l, (e => {
                    var n, o;
                    e && (null === (n = t.onEnterViewport) || void 0 === n || n.call(t)), e || null === (o = t.onLeaveViewport) || void 0 === o || o.call(t)
                })), (0, o.onMounted)((() => {
                    const t = (0, a.getElement)(e);
                    if (t) {
                        let e = i[d];
                        e || (e = (e => {
                            const t = new Map;
                            return {
                                callbackMap: t,
                                observer: new IntersectionObserver((e => {
                                    e.forEach((e => {
                                        const n = t.get(e.target);
                                        e.isIntersecting && (null === n || void 0 === n || n.onEnterViewport()), e.isIntersecting || null === n || void 0 === n || n.onLeaveViewport()
                                    }))
                                }), {
                                    threshold: e
                                })
                            }
                        })(u), i[d] = e), e.callbackMap.set(t, {
                            onEnterViewport: () => s(!0),
                            onLeaveViewport: () => s(!1)
                        }), e.observer.observe(t)
                    }
                })), (0, o.onUnmounted)((() => {
                    const t = (0, a.getElement)(e),
                        n = i[d];
                    t && n && (n.callbackMap.delete(t), n.observer.unobserve(t), 0 === n.callbackMap.size && (n.observer.disconnect(), delete i[d]))
                })), l
            }
        },
        909: function(e, t, n) {
            "use strict";
            n.d(t, {
                useResizeObserver: function() {
                    return u
                }
            });
            var o = n(2358),
                a = n(6992),
                r = n(4672),
                i = n(5970);
            const l = new Map,
                s = new ResizeObserver(((e, t) => e.forEach((n => {
                    var o;
                    return null === (o = l.get(n.target)) || void 0 === o ? void 0 : o(e, t)
                })))),
                u = (e, t = o.default, n = null) => {
                    if (!e) return;
                    const u = n ? (0, a.default)(t, n) : t;
                    (0, r.onMounted)((() => {
                        const t = (0, i.getElement)(e);
                        t && (l.set(t, u), s.observe(t))
                    })), (0, r.onUnmounted)((() => {
                        (0, i.getElement)(e)
                    }))
                }
        },
        8716: function(e, t, n) {
            "use strict";
            n.d(t, {
                useState: function() {
                    return a
                }
            });
            var o = n(4672);
            const a = e => {
                const t = (0, o.ref)((0, o.unref)(e));
                (0, o.isRef)(e) && (0, o.watchEffect)((() => {
                    void 0 !== e.value && (t.value = e.value)
                }));
                return [t, e => {
                    t.value = e
                }]
            }
        },
        1693: function(e) {
            "use strict";
            e.exports = '<svg viewBox="0 0 24 24" fill="none" stroke="#000" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 20.417V3.447M20.447 14.809l-5.964 5.638H8.519l-5.965-5.638" stroke-width="2.55"/></svg>'
        },
        4580: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-width="2.55"><path d="M21 12H4M9.64 20.89 4 14.93V9l5.64-6"/></g></svg>'
        },
        4170: function(e) {
            "use strict";
            e.exports = '<svg viewBox="0 0 24 24" fill="none" stroke="#000" xmlns="http://www.w3.org/2000/svg"><path d="M19.97 11.947H3M14.362 3 20 8.964v5.965l-5.638 5.964" stroke-width="2.55"/></svg>'
        },
        6228: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#000" viewBox="0 0 24 24"><path d="M6.34 17.66 17.66 6.34M17.66 17.66 6.34 6.34" fill="none" stroke-width="1.5"/></svg>'
        },
        3225: function(e) {
            "use strict";
            e.exports = '<svg width="17" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.98 7.673c-.102-1.835-.666-3.992-1.808-5.024-.374-.339-.814-.518-1.245-.397-.431.12-.808.497-1.127.825-.574.592-1.228 1.062-1.736.962-.54-.106-.902-.774-1.39-1.546C8.57.746 7.44.749 6.69 1.17c-.748.42-1.114 1.259-1.356 2.536-.148.767-.296 1.4-.936 1.502-.617.098-1.324-.207-1.993-.475-.864-.348-1.285-.243-1.615.056-.33.299-.57.794-.696 1.517-.546 3.131 1.381 6.767 3.223 9.206.115.152.27.323.473.193.202-.13.086-.328.019-.491-.834-2.016-1.014-3.767-.567-3.824.285-.036.892.648 1.294 1.264.108.166.233.39.48.31.221-.074.204-.34.204-.523 0-.586.006-1.894.49-2.053.535-.174 1.284 1.518 1.674 2.323a31.652 31.652 0 0 0 6.378 8.94c.182.18.415.4.676.2.26-.198.114-.501-.02-.726-1.714-2.858-3.237-7.638-2.843-10.97.089-.74.252-1.31.631-1.316.417-.006.834.833 1.126 1.603.068.18.164.46.423.417.227-.037.27-.305.296-.483.088-.549.156-1.787.787-1.767.548.018.67 1.391.745 2.056.082.748.148 1.758.18 2.375.01.165.011.4.233.423.221.024.285-.192.333-.359.411-1.406.76-3.481.651-5.431zm-9.439-3.84c-.243.027-.489.037-.734.03a.133.133 0 0 1-.05-.007 4.767 4.767 0 0 1-.638-.33c-.08-.05-.08-.07 0-.087.24-.051.485-.084.73-.099a.093.093 0 0 1 .047.017c.24.12.47.257.69.41.061.038.048.052-.045.066zm1.563-.804a4.679 4.679 0 0 1-.487.519.123.123 0 0 1-.045.022c-.228.087-.462.159-.7.214-.091.021-.11.012-.065-.049.157-.216.329-.42.513-.613.021-.022.03-.028.04-.031.234-.068.472-.118.714-.148.084-.012.09.008.03.083v.003z" fill="#000"/></svg>'
        },
        3072: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.51 7.68H7V10h1.51v7H11v-7h1.8l.2-2.32h-2v-1c0-.55.1-.77.55-.77H13V3.05h-1.91c-1.79 0-2.58.95-2.58 2.67z"/></svg>'
        },
        8176: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4H7.55a3.29 3.29 0 0 0-3.46 3.54v4.92a3.28 3.28 0 0 0 3.46 3.46h4.9a3.29 3.29 0 0 0 3.46-3.46V7.54a3.28 3.28 0 0 0-3.46-3.46C11.82 4.05 11.62 4 10 4zm0 1h2.44a2.27 2.27 0 0 1 2.48 2.48V12.37a2.28 2.28 0 0 1-2.48 2.49H7.56a2.28 2.28 0 0 1-2.48-2.49V7.48a2.27 2.27 0 0 1 2.48-2.41C8.2 5 8.39 5 10 5zm-3 5a3 3 0 1 1 3 3 3 3 0 0 1-3-3zm3 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm2.48-5.22a.74.74 0 0 1 .74-.78.75.75 0 0 1 .75.74.76.76 0 0 1-.75.75.75.75 0 0 1-.74-.72z" fill-rule="evenodd"/></svg>'
        },
        9477: function(e) {
            "use strict";
            e.exports = '<svg viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.79 10.106c-1.582 0-4.656.86-9.137 2.556-2.576.975-4.92 1.97-5.808 2.353l-.471.203.059.51c.223 1.916.75 5.718 1.775 9.644 1.54 5.893 5.07 14.336 13.139 21.087l.442.37.443-.37c8.07-6.751 11.599-15.194 13.139-21.087 1.025-3.927 1.552-7.728 1.774-9.644l.06-.51-.472-.203c-.887-.383-3.23-1.378-5.807-2.353-4.48-1.696-7.554-2.556-9.136-2.556zm0 .69c1.03 0 3.408.436 8.891 2.511a145.65 145.65 0 0 1 5.78 2.341c-.217 1.86-.739 5.648-1.757 9.55-1.524 5.829-5 14.11-12.915 20.732C9.874 39.308 6.4 31.027 4.875 25.198c-1.018-3.902-1.54-7.69-1.757-9.55.957-.412 3.245-1.382 5.78-2.34 5.483-2.076 7.862-2.512 8.892-2.512z" fill="#000"/><path d="m17.79 15.133 6.142-1.894c-2.607-.905-4.94-1.563-6.141-1.563-1.2 0-3.535.658-6.142 1.563l6.142 1.894zM17.788 20.06l8.702-2.454 4.623 1.303c.171-1.05.3-1.977.393-2.715l-.03-.012-4.986 1.406-8.702-2.454-8.735 2.462 8.735 2.464zM4.078 16.206c.091.729.218 1.642.386 2.674l4.548-1.283-4.934-1.39zM4.83 20.988c.176.921.381 1.89.618 2.88l4.356-1.343 7.983 2.462 7.982-2.462 4.357 1.344c.236-.99.442-1.96.618-2.88l-4.975 1.534-7.982-2.462-7.983 2.462-4.974-1.535z" fill="#000"/><path d="M5.976 25.879c.256.897.559 1.845.916 2.827l3.68-1.252 7.219 2.457 7.23-2.46 3.671 1.25c.355-.98.656-1.92.911-2.814l-4.582 1.56-7.23-2.462-7.22 2.457-4.595-1.563zM17.791 34.838l5.99-2.463-5.99-2.463-5.99 2.463 5.99 2.463z" fill="#000"/><path d="m9.002 33.527 2.801-1.152-4.139-1.703a40.64 40.64 0 0 0 1.338 2.855zM27.918 30.672l-4.139 1.702 2.802 1.152c.5-.966.944-1.921 1.337-2.854zM17.79 39.763l4.476-2.463-4.476-2.463-4.476 2.463 4.476 2.463zM25.094 36.161 22.271 37.3l1.575.755c.398-.574.894-1.32 1.248-1.894z" fill="#000"/><path d="M10.496 36.161 13.32 37.3l-1.574.755a46.837 46.837 0 0 1-1.249-1.894zM17.55 44.558l.24.132.24-.132a37.357 37.357 0 0 0 3.026-3.004l-3.265-1.79-3.267 1.79a37.404 37.404 0 0 0 3.026 3.004zM14.796 7.003l-.498.498a2.243 2.243 0 0 0 1.591.658c.558 0 1.114-.207 1.546-.617v1.303h.705V7.542c.433.41.99.617 1.546.617.577 0 1.153-.219 1.592-.658l-.498-.498a1.55 1.55 0 0 1-2.187 0 1.549 1.549 0 0 1 0-2.187 1.548 1.548 0 0 1 2.187 0l.498-.498a2.252 2.252 0 0 0-3.138-.04V2.975h-.705v1.302a2.252 2.252 0 0 0-3.137.041l.498.498a1.548 1.548 0 0 1 2.187 0 1.548 1.548 0 0 1 0 2.187 1.549 1.549 0 0 1-2.187 0z" fill="#000"/><path d="M.526 11.116a8.937 8.937 0 0 0-.009.423c0 .06.025 6.146 2.14 14.246 1.678 6.423 5.577 15.574 14.622 22.693.003.001.24.188.51.378.27-.19.508-.377.51-.378 9.047-7.119 12.946-16.27 14.624-22.693 2.115-8.1 2.14-14.185 2.14-14.246 0-.199-.005-.338-.01-.423a144.67 144.67 0 0 0-2.077-1.79C26.012 3.575 18.12.674 18.044.646L17.79.552l-.247.093c-.084.029-7.976 2.931-14.939 8.68-.508.42-1.75 1.504-2.078 1.791zm17.343 38.313h-.158l-.066-.044c-.34-.23-.671-.49-.686-.502C7.801 41.677 3.854 32.416 2.156 25.916.025 17.752 0 11.6 0 11.539c0-.386.017-.564.017-.571l.01-.102.077-.068c.016-.014 1.58-1.383 2.17-1.872C9.34 3.094 17.298.181 17.372.156L17.79 0l.428.16c.065.021 8.022 2.934 15.087 8.766.592.489 2.155 1.858 2.17 1.872l.078.068.01.102c0 .007.017.185.017.571 0 .062-.025 6.213-2.156 14.377-1.698 6.5-5.645 15.761-14.804 22.968-.014.01-.346.272-.685.5l-.066.045z" fill="#000"/></svg>'
        },
        3169: function(e) {
            "use strict";
            e.exports = '<svg viewBox="0 0 127 32" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="m31.81 16.588 2.314 4.476h3.65l-2.96-5.516 4.965-4.907h-3.421l-4.33 4.244.513-4.244h-3.234l-1.244 10.423h3.202l.545-4.476zM41.01 21.066h4.356c1.523 0 2.279-.59 2.45-1.913l.561-4.592c.079-.657 0-1.12-.264-1.404-.264-.284-.787-.496-1.604-.496h-4.371c-1.093 0-2.275.186-2.489 1.932l-.562 4.593c-.086.655 0 1.12.266 1.423.266.302.796.457 1.656.457zm1.806-5.948c.024-.288.152-1.145 1.248-1.145h1.161s-.106 1.023-.17 1.44l-.36 2.897c-.058.42-.178 1.229-1.293 1.229h-1.178l.592-4.421zM51.49 21.066h4.433c1.509 0 2.225-.56 2.408-1.895l.06-.467h-3.215c-.188.717-.86.835-1.239.835h-1.154l.227-1.94h5.514l.375-3.058c.077-.631-.013-1.081-.275-1.376-.294-.33-.825-.504-1.668-.504h-4.222c-1.686 0-2.398.569-2.567 1.934l-.583 4.591c-.08.644 0 1.104.276 1.404.275.3.794.476 1.63.476zm1.827-5.948a1.216 1.216 0 0 1 1.246-1.145h1.182l-.262 2.173-2.305.023.139-1.051zM98.497 21.066h4.434c1.508 0 2.224-.56 2.407-1.895l.06-.467h-3.215c-.187.717-.86.835-1.239.835H99.79l.227-1.94h5.513l.374-3.058c.077-.631-.015-1.081-.275-1.376-.296-.33-.826-.504-1.67-.504h-4.225c-1.686 0-2.399.569-2.567 1.934l-.585 4.591c-.079.644.011 1.104.278 1.404.266.3.802.476 1.637.476zm1.827-5.948a1.224 1.224 0 0 1 1.246-1.135h1.183l-.263 2.173-2.305.022.139-1.06zM63.793 15.528s.731-.597 1.214-.948c.381-.235.807-.388 1.25-.45 0 0-.14 1.068-.165 1.318l-.686 5.618h3.223l.782-6.505c.084-.66 0-1.12-.268-1.426-.268-.306-.759-.474-1.52-.474h-.75a3.237 3.237 0 0 0-1.704.496l-1.21.956.175-1.452h-3.223l-1.036 8.402H63.1l.693-5.535zM70.387 21.066h3.22l1.009-8.405h-3.21l-1.02 8.405zM78.415 12.66c-1.425 0-2.127.59-2.275 1.912l-.562 4.517c-.08.642.01 1.1.277 1.399.266.298.764.578 1.499.578h1.207c1.65 0 2.46-1.527 2.46-1.527l-.363 2.782h-5.434l-.165 1.557h6.252c1.192 0 2.436-.216 2.624-1.817l1.124-9.399-6.644-.002zm3.112 2.698-.341 2.818s-.637 1.363-2.087 1.363h-.368l.55-4.421c.069-.59.425-1.143 1.253-1.143h1.141s-.114 1.128-.148 1.383zM109.909 12.66c-1.424 0-2.127.59-2.275 1.912l-.562 4.517c-.079.642.011 1.1.275 1.399.264.298.767.578 1.499.578h1.201c1.651 0 2.461-1.527 2.461-1.527l-.364 2.782h-5.434l-.159 1.555h6.251c1.192 0 2.436-.216 2.623-1.816l1.125-9.4h-6.641zm3.112 2.698-.35 2.818s-.636 1.363-2.088 1.363h-.358l.551-4.421c.07-.59.426-1.143 1.254-1.143h1.141s-.126 1.128-.15 1.383zM120.36 12.66c-1.424 0-2.125.59-2.275 1.912l-.562 4.517c-.081.642.011 1.1.275 1.399.264.298.765.578 1.499.578h1.207c1.653 0 2.462-1.527 2.462-1.527l-.373 2.782h-5.434L117 23.876h6.253c1.192 0 2.436-.216 2.623-1.816l1.125-9.4h-6.641zm3.112 2.698-.35 2.818s-.635 1.363-2.088 1.363h-.358l.551-4.421c.068-.59.424-1.143 1.252-1.143h1.143s-.12 1.128-.15 1.383zM88.093 21.067h4.298c1.544 0 2.335-.653 2.489-1.971l.135-1.12c.078-.598 0-1.027-.248-1.317-.404-.474-1.22-.543-1.937-.56h-3.161l.106-.949a1.258 1.258 0 0 1 1.302-1.167h1.08l-.097 1.145h3.237l.089-.6c.075-.642-.023-1.103-.298-1.405-.276-.303-.772-.463-1.488-.452h-4.651c-1.407 0-2.108.59-2.275 1.914l-.155 1.144c-.087.712 0 1.208.273 1.515.403.459 1.205.47 1.983.481h3.056l-.062.482c-.026.321-.206 1.342-1.42 1.342h-1.093l.1-.834h-3.28l-.045.44c-.084.648 0 1.108.265 1.408.387.43 1.13.504 1.797.504zM6.676 23.178c.255.418.528.836.819 1.25l1.047-.498-1.866-.752zM4.898 19.68c.252.603.534 1.221.853 1.845l1.821-.747-2.674-1.098zM3.816 16.604c.165.577.358 1.184.585 1.815l2.372-.805-2.957-1.01zM3.09 13.47c.114.598.245 1.22.393 1.842l2.8-.859-3.193-.984zM2.598 10.393c.061.478.146 1.064.25 1.712l2.935-.817-3.185-.895zM7.574 20.774l3.855 1.575 3.856-1.575-3.856-1.58-3.855 1.58zM8.555 23.932l2.878 1.578 2.88-1.578-2.88-1.578-2.878 1.578z"/><path d="M15.356 24.434c.29-.415.562-.833.819-1.251l-1.874.747 1.055.504zM17.11 21.525a26.16 26.16 0 0 0 .853-1.845l-2.674 1.1 1.821.745zM18.454 18.42c.227-.632.42-1.239.585-1.816l-2.957 1.01 2.372.805zM19.37 15.312c.148-.622.28-1.244.394-1.843l-3.186.984 2.792.859zM17.074 11.289l2.933.821c.107-.647.187-1.234.253-1.712l-3.186.89zM15.377 8.494c-2.475-.857-3.523-1.003-3.946-1.003-.424 0-1.471.146-3.947 1.003l3.947 1.213 3.946-1.213zM11.431 25.52l-2.138 1.164c.667.735 1.38 1.424 2.138 2.066a22.672 22.672 0 0 0 2.138-2.066l-2.138-1.165zM6.29 14.447l5.137 1.577 5.14-1.578-5.14-1.577-5.138 1.578zM6.781 17.612l4.646 1.577 4.646-1.577-4.646-1.578-4.646 1.578zM5.79 11.286l5.637 1.576 5.639-1.576-5.639-1.577-5.638 1.577zM9.506 4.494l-.323.32a1.45 1.45 0 0 0 2.022.026v.836h.463v-.844a1.45 1.45 0 0 0 2.022-.026l-.335-.312a.996.996 0 0 1-1.699-.701.99.99 0 0 1 .614-.916.998.998 0 0 1 1.085.215l.322-.321a1.457 1.457 0 0 0-2.022-.026V1.91h-.454v.835a1.457 1.457 0 0 0-2.021.026l.322.32a.996.996 0 0 1 1.698.702.988.988 0 0 1-.614.916.998.998 0 0 1-1.084-.215h.004z"/><path d="M17.313 8.128c-2.884-1.086-4.872-1.64-5.884-1.64-1.011 0-2.998.561-5.883 1.64C3.886 8.754 1.5 9.77 1.5 9.77a51.357 51.357 0 0 0 1.182 6.516c.992 3.78 3.317 9.51 8.747 13.768 5.434-4.257 7.756-9.987 8.747-13.768a51.368 51.368 0 0 0 1.183-6.517s-2.386-1.013-4.046-1.64zm2.436 8.046c-1.006 3.835-3.266 9.227-8.318 13.314-5.06-4.087-7.308-9.48-8.318-13.314a49.98 49.98 0 0 1-1.124-6.128A121.2 121.2 0 0 1 5.71 8.543C9.24 7.212 10.77 6.93 11.437 6.93c.667 0 2.198.28 5.726 1.612a123.3 123.3 0 0 1 3.722 1.503 49.987 49.987 0 0 1-1.138 6.128h.002z"/><path d="M17.575 3.014A35.964 35.964 0 0 0 11.432 0a35.963 35.963 0 0 0-6.135 3.014C1.973 5.038 0 6.974 0 6.974a42.413 42.413 0 0 0 1.362 9.658c1.095 4.172 3.866 10.643 10.07 15.124 6.204-4.481 8.976-10.952 10.07-15.124a42.418 42.418 0 0 0 1.37-9.658s-1.973-1.936-5.297-3.96zm3.605 13.534a29.056 29.056 0 0 1-3.083 7.359 25.159 25.159 0 0 1-6.665 7.438 25.132 25.132 0 0 1-6.665-7.438 29.059 29.059 0 0 1-3.082-7.359A43.026 43.026 0 0 1 .326 7.114a33.012 33.012 0 0 1 5.138-3.817A36.23 36.23 0 0 1 11.432.351 36.23 36.23 0 0 1 17.4 3.295a33.01 33.01 0 0 1 5.137 3.819 43.152 43.152 0 0 1-1.357 9.434z"/></svg>'
        },
        5727: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.48 4h7A2.52 2.52 0 0 1 16 6.47v7.06a2.52 2.52 0 0 1-2.52 2.52h-7A2.52 2.52 0 0 1 4 13.53V6.47A2.52 2.52 0 0 1 6.48 4zm0 9.58H8V8H6.48zm.75-6.18a.89.89 0 1 1 .88-.89.89.89 0 0 1-.88.84zm5.28 6.18H14v-3.46a1.91 1.91 0 0 0-3.5-1.25V8H9v5.55h1.5V10.7c0-1.57 2-1.69 2 0z" fill-rule="evenodd"/></svg>'
        },
        4409: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path class="line line-top" d="M0 9.5h25" style="fill:none;stroke:#fff;stroke-width:1.5px"/><path class="line line-bottom" d="M0 15.5h25" style="fill:none;stroke:#fff;stroke-width:1.5px"/></svg>'
        },
        8205: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#000" viewBox="0 0 24 24"><path d="M4 20.57 7 22l15-8.57v-2.86L7 2 4 3.43z" fill="none" stroke-width="2"/></svg>'
        },
        7e3: function(e) {
            "use strict";
            e.exports = '<svg fill="none" stroke="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.04 24.04"><path d="M12 0v24M0 12h24" style="stroke-width:3.3357200622558594px"/></svg>'
        },
        254: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.24 4.24"><path d="M0 2.12 2.12 0l2.12 2.12-2.12 2.12z"/></svg>'
        },
        6478: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.19 5.64a6 6 0 0 1-1.7.46 2.9 2.9 0 0 0 1.3-1.6 6 6 0 0 1-1.87.7 3 3 0 0 0-2.16-.91 2.9 2.9 0 0 0-2.87 3.54 8.46 8.46 0 0 1-6.08-3 2.85 2.85 0 0 0 .92 3.85 3.14 3.14 0 0 1-1.34-.36 2.91 2.91 0 0 0 2.37 2.86 3.16 3.16 0 0 1-1.34.05 3 3 0 0 0 2.76 2 6 6 0 0 1-4.37 1.19 8.5 8.5 0 0 0 4.52 1.3 8.22 8.22 0 0 0 8.38-8.57 6 6 0 0 0 1.48-1.51z"/></svg>'
        },
        9882: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.17 4.28c2.28-.16 7.37-.16 9.66 0C17.3 4.45 17.59 6 17.61 10s-.31 5.55-2.78 5.72c-2.29.16-7.37.16-9.66 0C2.7 15.55 2.41 14 2.39 10s.31-5.55 2.78-5.72zM8 7.72v5.07l5-2.54z" fill-rule="evenodd"/></svg>'
        },
        3613: function(e, t, n) {
            var o = {
                "./arrow-down.svg": 1693,
                "./arrow-left.svg": 4580,
                "./arrow-right.svg": 4170,
                "./close.svg": 6228,
                "./cookie-icon.svg": 3225,
                "./facebook.svg": 3072,
                "./instagram.svg": 8176,
                "./koenigsegg-shield.svg": 9477,
                "./koenigsegg.svg": 3169,
                "./linkedin.svg": 5727,
                "./menu.svg": 4409,
                "./play.svg": 8205,
                "./plus.svg": 7e3,
                "./rectangle.svg": 254,
                "./twitter.svg": 6478,
                "./youtube.svg": 9882,
                "components/atoms/cl-a2-icon/svg/arrow-down.svg": 1693,
                "components/atoms/cl-a2-icon/svg/arrow-left.svg": 4580,
                "components/atoms/cl-a2-icon/svg/arrow-right.svg": 4170,
                "components/atoms/cl-a2-icon/svg/close.svg": 6228,
                "components/atoms/cl-a2-icon/svg/cookie-icon.svg": 3225,
                "components/atoms/cl-a2-icon/svg/facebook.svg": 3072,
                "components/atoms/cl-a2-icon/svg/instagram.svg": 8176,
                "components/atoms/cl-a2-icon/svg/koenigsegg-shield.svg": 9477,
                "components/atoms/cl-a2-icon/svg/koenigsegg.svg": 3169,
                "components/atoms/cl-a2-icon/svg/linkedin.svg": 5727,
                "components/atoms/cl-a2-icon/svg/menu.svg": 4409,
                "components/atoms/cl-a2-icon/svg/play.svg": 8205,
                "components/atoms/cl-a2-icon/svg/plus.svg": 7e3,
                "components/atoms/cl-a2-icon/svg/rectangle.svg": 254,
                "components/atoms/cl-a2-icon/svg/twitter.svg": 6478,
                "components/atoms/cl-a2-icon/svg/youtube.svg": 9882
            };

            function a(e) {
                var t = r(e);
                return n(t)
            }

            function r(e) {
                if (!n.o(o, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return o[e]
            }
            a.keys = function() {
                return Object.keys(o)
            }, a.resolve = r, e.exports = a, a.id = 3613
        }
    }
]);