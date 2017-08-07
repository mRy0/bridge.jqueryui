/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Bridge.jQueryUI", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.jQueryUI.AnimationSpeeds", {
        $kind: "enum",
        statics: {
            fields: {
                fast: 200,
                slow: 600
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Axis", {
        $kind: "enum",
        statics: {
            fields: {
                x: 1,
                y: 2,
                both: 3
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Collisions", {
        $kind: "enum",
        statics: {
            fields: {
                flip: 0,
                fit: 1,
                "fit flip": 2,
                "fit none": 3
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Common.Animation", {
        $literal: true,
        ctors: {
            ctor: function () {
                var $this = {};
                $this.$getType = function () { return Bridge.jQueryUI.Common.Animation; };
                (function (){
                    this.disabled = false;
                    this.speed = 0;
                    this.easing = 0;
                    this.delay = 0;
                    this.duration = 0;
                    this.effect = 0;
                    this.disabled = false;
                }).call($this);
                return $this;
            }
        },
        methods: {
            toJsObject: function () {
                if (this.disabled) {
                    return (false);
                }

                var obj = {  };
                if (!isNaN(this.speed)) {
                    obj.speed = this.speed;
                }
                if (!isNaN(this.easing)) {
                    obj.easing = System.Enum.toString(Bridge.jQueryUI.Easings, this.easing);
                }
                if (!isNaN(this.delay)) {
                    obj.delay = this.delay;
                }
                if (!isNaN(this.duration)) {
                    obj.duration = this.duration;
                }
                if (!isNaN(this.effect)) {
                    obj.speed = System.Enum.toString(Bridge.jQueryUI.EffectTypes, this.effect);
                }

                return obj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Common.Grid", {
        props: {
            x: 0,
            y: 0
        }
    });

    Bridge.define("Bridge.jQueryUI.Common.Position", {
        $literal: true,
        ctors: {
            ctor: function () {
                var $this = {};
                $this.$getType = function () { return Bridge.jQueryUI.Common.Position; };
                (function (){
                    this.my = 0;
                    this.at = 0;
                    this.of = null;
                    this.collision = 0;
                    this.collision = Bridge.jQueryUI.Collisions.flip;
                    this.my = Bridge.jQueryUI.WindowPositions.center;
                    this.at = Bridge.jQueryUI.WindowPositions.center;
                    this.of = null;
                }).call($this);
                return $this;
            }
        },
        methods: {
            toJsObject: function () {
                var jObj = {  };
                jObj.my = System.Enum.toString(Bridge.jQueryUI.WindowPositions, this.my);
                jObj.at = System.Enum.toString(Bridge.jQueryUI.WindowPositions, this.at);
                jObj.collision = System.Enum.toString(Bridge.jQueryUI.Collisions, this.collision);
                if (this.of != null) {
                    jObj.of = $(this.of);
                }
                ;
                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Easings", {
        $kind: "enum",
        statics: {
            fields: {
                linear: 1,
                swing: 2
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Effects.Extensions", {
        statics: {
            methods: {
                effect: function (node, effect, options, duration, complete) {
                    if (options === void 0) { options = null; }
                    if (duration === void 0) { duration = 400; }
                    if (complete === void 0) { complete = null; }
                    var name = System.Enum.toString(Bridge.jQueryUI.EffectTypes, effect);
                    $(node).effect(name);

                }
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.EffectTypes", {
        $kind: "enum",
        statics: {
            fields: {
                blind: 1,
                bounce: 2,
                clip: 3,
                drop: 4,
                explode: 5,
                fade: 6,
                fold: 7,
                highlight: 8,
                puff: 9,
                pulsate: 10,
                scale: 11,
                snake: 12,
                size: 13,
                slide: 14,
                transfer: 15
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.HeightStyles", {
        $kind: "enum",
        statics: {
            fields: {
                auto: 0,
                fill: 1,
                content: 2
            }
        }
    });

    /** @namespace Bridge.jQueryUI */

    /**
     * some special helper for internal use
     *
     * @static
     * @abstract
     * @class Bridge.jQueryUI.Helper
     */
    Bridge.define("Bridge.jQueryUI.Helper", {
        statics: {
            methods: {
                toJsDynamic: function (selectors) {
                    var $t;
                    var rObj = ({  });
                    $t = Bridge.getEnumerator(selectors);
                    try {
                        while ($t.moveNext()) {
                            var selector = $t.Current;
                            rObj[System.Array.index(selector.uIClassName, rObj)] = selector.customClassName;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }return rObj;
                }
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.IconPositons", {
        $kind: "enum",
        statics: {
            fields: {
                beginning: 0,
                end: 1,
                top: 2,
                bottom: 3
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Interactions.Extensions", {
        statics: {
            methods: {
                resizable: function (node, parameter) {
                    if (parameter === void 0) { parameter = null; }
                    $(node).resizable();
                },
                draggable: function (node) {
                    $(node).draggable();
                },
                draggable$1: function (node, parameter) {
                    //todo make me better           
                    var pramDefault = {  };

                    var jParam = new $asm.$AnonymousType$1();
                    if (parameter.addClasses !== pramDefault.addClasses) {
                        jParam.addClasses = false;
                    }
                    if (!Bridge.referenceEquals(parameter.appendTo, pramDefault.appendTo)) {
                        jParam.appendTo = $(parameter.appendTo);
                    }
                    if (parameter.axis !== pramDefault.axis) {
                        jParam.axis = parameter.axis;
                    }
                    if (!Bridge.referenceEquals(parameter.cancel, pramDefault.cancel)) {
                        jParam.cancel = parameter.cancel;
                    }
                    if (!Bridge.referenceEquals(parameter.classes, pramDefault.classes)) {
                        jParam.classes = parameter.classes;
                    }
                    if (!Bridge.referenceEquals(parameter.connectToSortable, pramDefault.connectToSortable)) {
                        jParam.connectToSortable = parameter.connectToSortable;
                    }
                    if (!Bridge.referenceEquals(parameter.containment, pramDefault.containment)) {
                        jParam.containment = parameter.containment;
                    }
                    if (parameter.cursor !== pramDefault.cursor) {
                        jParam.cursor = System.Enum.toString(System.String, parameter.cursor);
                    }
                    if (!Bridge.referenceEquals(parameter.cursorAt, pramDefault.cursorAt)) {
                        jParam.cursorAt = new $asm.$AnonymousType$2(parameter.cursorAt.left, parameter.cursorAt.right, parameter.cursorAt.top, parameter.cursorAt.bottom);
                    }
                    if (parameter.delay !== pramDefault.delay) {
                        jParam.delay = parameter.delay;
                    }
                    if (parameter.disabled !== pramDefault.disabled) {
                        jParam.disabled = parameter.disabled;
                    }
                    if (parameter.distance !== pramDefault.distance) {
                        jParam.distance = parameter.distance;
                    }
                    if (!Bridge.referenceEquals(parameter.grid, pramDefault.grid)) {
                        jParam.grid = new $asm.$AnonymousType$3(parameter.grid.x, parameter.grid.y);
                    }
                    if (!Bridge.referenceEquals(parameter.handle, pramDefault.handle)) {
                        jParam.handle = $(parameter.handle);
                    }
                    if (!Bridge.referenceEquals(parameter.helper, pramDefault.helper)) {
                        jParam.helper = parameter.helper;
                    }
                    if (parameter.iFrameFix !== pramDefault.iFrameFix) {
                        jParam.iframeFix = parameter.iFrameFix;
                    }
                    if (parameter.opacity !== pramDefault.opacity) {
                        jParam.opacity = parameter.opacity;
                    }
                    if (parameter.refreshPosititions !== pramDefault.refreshPosititions) {
                        jParam.refreshPositions = parameter.refreshPosititions;
                    }
                    if (!Bridge.referenceEquals(parameter.revert, pramDefault.revert)) {
                        jParam.revert = parameter.revert;
                    }
                    if (parameter.revertDuration !== pramDefault.revertDuration) {
                        jParam.revertDuration = parameter.revertDuration;
                    }
                    if (!Bridge.referenceEquals(parameter.scope, pramDefault.scope)) {
                        jParam.scope = parameter.scope;
                    }
                    if (parameter.scroll !== pramDefault.scroll) {
                        jParam.scroll = parameter.scroll;
                    }
                    if (parameter.scrollSensivity !== pramDefault.scrollSensivity) {
                        jParam.scrollSensitivity = parameter.scrollSensivity;
                    }
                    if (parameter.scrollSpeed !== pramDefault.scrollSpeed) {
                        jParam.scrollSpeed = parameter.scrollSpeed;
                    }
                    if (parameter.snap !== pramDefault.snap) {
                        jParam.snap = parameter.snap;
                    }
                    if (parameter.snapMode !== pramDefault.snapMode) {
                        jParam.snapMode = System.Enum.toString(Bridge.jQueryUI.SnapModes, parameter.snapMode);
                    }
                    if (parameter.snapTolerance !== pramDefault.snapTolerance) {
                        jParam.snapTolerance = parameter.snapTolerance;
                    }
                    if (!Bridge.referenceEquals(parameter.stack, pramDefault.stack)) {
                        jParam.stack = parameter.stack;
                    }
                    if (parameter.zIndex !== pramDefault.zIndex) {
                        jParam[System.Array.index("zIndex ", jParam)] = parameter.zIndex;
                    }

                    $(node).draggable();
                },
                draggableDestroy: function (node) {
                    $(node).draggable("destroy");
                },
                draggableDisable: function (node) {
                    $(node).draggable("disable");
                },
                draggableEnable: function (node) {
                    $(node).draggable("enable");
                }
            }
        }
    });

    Bridge.define("$AnonymousType$1", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function () {
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$1)) {
                    return false;
                }
                return ;
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196186]);
                return h;
            },
            toJSON: function () {
                return {

                };
            }
        }
    });

    Bridge.define("$AnonymousType$2", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function (left, right, top, bottom) {
                this.left = left;
                this.right = right;
                this.top = top;
                this.bottom = bottom;
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$2)) {
                    return false;
                }
                return Bridge.equals(this.left, o.left) && Bridge.equals(this.right, o.right) && Bridge.equals(this.top, o.top) && Bridge.equals(this.bottom, o.bottom);
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196187, this.left, this.right, this.top, this.bottom]);
                return h;
            },
            toJSON: function () {
                return {
                    left : this.left,
                    right : this.right,
                    top : this.top,
                    bottom : this.bottom
                };
            }
        },
        statics : {
            methods: {
                $metadata : function () { return {"m":[{"a":2,"n":"bottom","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_bottom","t":8,"rt":System.Int32,"fg":"bottom"},"fn":"bottom"},{"a":2,"n":"left","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_left","t":8,"rt":System.Int32,"fg":"left"},"fn":"left"},{"a":2,"n":"right","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_right","t":8,"rt":System.Int32,"fg":"right"},"fn":"right"},{"a":2,"n":"top","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_top","t":8,"rt":System.Int32,"fg":"top"},"fn":"top"}]}; }
            }
        }
    });

    Bridge.define("$AnonymousType$3", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function (x, y) {
                this.x = x;
                this.y = y;
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$3)) {
                    return false;
                }
                return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196188, this.x, this.y]);
                return h;
            },
            toJSON: function () {
                return {
                    x : this.x,
                    y : this.y
                };
            }
        },
        statics : {
            methods: {
                $metadata : function () { return {"m":[{"a":2,"n":"x","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_x","t":8,"rt":System.Int32,"fg":"x"},"fn":"x"},{"a":2,"n":"y","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_y","t":8,"rt":System.Int32,"fg":"y"},"fn":"y"}]}; }
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Interactions.ResizeablePrameterCollection", {
        props: {
            animate: false,
            animateDuration: 0,
            animateEasing: 0,
            autoHide: false,
            classes: null,
            delay: 0,
            disabled: false,
            maxHeight: 0,
            maxWidht: 0,
            minHeight: 0,
            minWidth: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                var test = document.createElement('div');

                this.animate = false;
                this.animateDuration = Bridge.jQueryUI.AnimationSpeeds.fast;
                this.animateEasing = Bridge.jQueryUI.Easings.swing;
                this.autoHide = false;
                this.classes = null;
                this.delay = 0;
                this.disabled = false;
                this.maxHeight = -1;
                this.maxWidht = -1;
                this.minWidth = -1;
                this.minHeight = -1;

            }
        }
    });

    Bridge.define("Bridge.jQueryUI.JqueryEvents", {
        $kind: "enum",
        statics: {
            fields: {
                blur: 0,
                focus: 1,
                focusin: 2,
                focusout: 3,
                resize: 3,
                scroll: 4,
                click: 5,
                dblclick: 6,
                mousedown: 7,
                mouseup: 8,
                mousemove: 9,
                mouseover: 10,
                mouseout: 11,
                mouseenter: 12,
                mouseleave: 13,
                change: 14,
                select: 15,
                submit: 16,
                keydown: 17,
                keypress: 18,
                keyup: 19,
                contextmenu: 20,
                slide: 21,
                load: 22,
                unload: 23,
                beforeunload: 24
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Messageboxes", {
        statics: {
            methods: {
                highlight: function (div, title, message, icon) {
                    var $t;
                    if (icon === void 0) { icon = 123; }
                    var para = document.createElement('p');

                    para.appendChild(($t = document.createElement('span'), $t.className = System.String.concat("ui-icon ", System.Enum.toString(Bridge.jQueryUI.UIIcons, icon)), $t));
                    para.appendChild(($t = document.createElement("strong"), $t.textContent = title, $t));
                    para.appendChild(document.createTextNode(message));
                    div.appendChild(para);
                    div.classList.add("ui-state-highlight");
                    div.classList.add("ui-corner-all");
                },
                error: function (div, title, message, icon) {
                    var $t;
                    if (icon === void 0) { icon = 122; }
                    var para = document.createElement('p');

                    para.appendChild(($t = document.createElement('span'), $t.className = System.String.concat("ui-icon ", System.Enum.toString(Bridge.jQueryUI.UIIcons, icon)), $t));
                    para.appendChild(($t = document.createElement("strong"), $t.textContent = title, $t));
                    para.appendChild(document.createTextNode(message));
                    div.appendChild(para);
                    div.classList.add("ui-state-error");
                    div.classList.add("ui-corner-all");
                }
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Orientations", {
        $kind: "enum",
        statics: {
            fields: {
                horizontal: 0,
                vertical: 1
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Ranges", {
        $kind: "enum",
        statics: {
            fields: {
                none: 0,
                min: 1,
                max: 2,
                both: 3
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.SnapModes", {
        $kind: "enum",
        statics: {
            fields: {
                inner: 1,
                outer: 2,
                both: 3
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Statics");

    Bridge.define("Bridge.jQueryUI.UIIcons", {
        $kind: "enum",
        statics: {
            fields: {
                "ui-icon-blank": 1,
                "ui-icon-caret-1-n": 2,
                "ui-icon-caret-1-ne": 3,
                "ui-icon-caret-1-e": 4,
                "ui-icon-caret-1-se": 5,
                "ui-icon-caret-1-s": 6,
                "ui-icon-caret-1-sw": 7,
                "ui-icon-caret-1-w": 8,
                "ui-icon-caret-1-nw": 9,
                "ui-icon-caret-2-n-s": 10,
                "ui-icon-caret-2-e-w": 11,
                "ui-icon-triangle-1-n": 12,
                "ui-icon-triangle-1-ne": 13,
                "ui-icon-triangle-1-e": 14,
                "ui-icon-triangle-1-se": 15,
                "ui-icon-triangle-1-s": 16,
                "ui-icon-triangle-1-sw": 17,
                "ui-icon-triangle-1-w": 18,
                "ui-icon-triangle-1-nw": 19,
                "ui-icon-triangle-2-n-s": 20,
                "ui-icon-triangle-2-e-w": 21,
                "ui-icon-arrow-1-n": 22,
                "ui-icon-arrow-1-ne": 23,
                "ui-icon-arrow-1-e": 24,
                "ui-icon-arrow-1-se": 25,
                "ui-icon-arrow-1-s": 26,
                "ui-icon-arrow-1-sw": 27,
                "ui-icon-arrow-1-w": 28,
                "ui-icon-arrow-1-nw": 29,
                "ui-icon-arrow-2-n-s": 30,
                "ui-icon-arrow-2-ne-sw": 31,
                "ui-icon-arrow-2-e-w": 32,
                "ui-icon-arrow-2-se-nw": 33,
                "ui-icon-arrowstop-1-n": 34,
                "ui-icon-arrowstop-1-e": 35,
                "ui-icon-arrowstop-1-s": 36,
                "ui-icon-arrowstop-1-w": 37,
                "ui-icon-arrowthick-1-n": 38,
                "ui-icon-arrowthick-1-ne": 39,
                "ui-icon-arrowthick-1-e": 40,
                "ui-icon-arrowthick-1-se": 41,
                "ui-icon-arrowthick-1-s": 42,
                "ui-icon-arrowthick-1-sw": 43,
                "ui-icon-arrowthick-1-w": 44,
                "ui-icon-arrowthick-1-nw": 45,
                "ui-icon-arrowthick-2-n-s": 46,
                "ui-icon-arrowthick-2-ne-sw": 47,
                "ui-icon-arrowthick-2-e-w": 48,
                "ui-icon-arrowthick-2-se-nw": 49,
                "ui-icon-arrowthickstop-1-n": 50,
                "ui-icon-arrowthickstop-1-e": 51,
                "ui-icon-arrowthickstop-1-s": 52,
                "ui-icon-arrowthickstop-1-w": 53,
                "ui-icon-arrowreturnthick-1-w": 54,
                "ui-icon-arrowreturnthick-1-n": 55,
                "ui-icon-arrowreturnthick-1-e": 56,
                "ui-icon-arrowreturnthick-1-s": 57,
                "ui-icon-arrowreturn-1-w": 58,
                "ui-icon-arrowreturn-1-n": 59,
                "ui-icon-arrowreturn-1-e": 60,
                "ui-icon-arrowreturn-1-s": 61,
                "ui-icon-arrowrefresh-1-w": 62,
                "ui-icon-arrowrefresh-1-n": 63,
                "ui-icon-arrowrefresh-1-e": 64,
                "ui-icon-arrowrefresh-1-s": 65,
                "ui-icon-arrow-4": 66,
                "ui-icon-arrow-4-diag": 67,
                "ui-icon-extlink": 68,
                "ui-icon-newwin": 69,
                "ui-icon-refresh": 70,
                "ui-icon-shuffle": 71,
                "ui-icon-transfer-e-w": 72,
                "ui-icon-transferthick-e-w": 73,
                "ui-icon-folder-collapsed": 74,
                "ui-icon-folder-open": 75,
                "ui-icon-document": 76,
                "ui-icon-document-b": 77,
                "ui-icon-note": 78,
                "ui-icon-mail-closed": 79,
                "ui-icon-mail-open": 80,
                "ui-icon-suitcase": 81,
                "ui-icon-comment": 82,
                "ui-icon-person": 83,
                "ui-icon-print": 84,
                "ui-icon-trash": 85,
                "ui-icon-locked": 86,
                "ui-icon-unlocked": 87,
                "ui-icon-bookmark": 88,
                "ui-icon-tag": 89,
                "ui-icon-home": 90,
                "ui-icon-flag": 91,
                "ui-icon-calculator": 92,
                "ui-icon-cart": 93,
                "ui-icon-pencil": 94,
                "ui-icon-clock": 95,
                "ui-icon-disk": 96,
                "ui-icon-calendar": 97,
                "ui-icon-zoomin": 98,
                "ui-icon-zoomout": 99,
                "ui-icon-search": 100,
                "ui-icon-wrench": 101,
                "ui-icon-gear": 102,
                "ui-icon-heart": 103,
                "ui-icon-star": 104,
                "ui-icon-link": 105,
                "ui-icon-cancel": 106,
                "ui-icon-plus": 107,
                "ui-icon-plusthick": 108,
                "ui-icon-minus": 109,
                "ui-icon-minusthick": 110,
                "ui-icon-close": 111,
                "ui-icon-closethick": 112,
                "ui-icon-key": 113,
                "ui-icon-lightbulb": 114,
                "ui-icon-scissors": 115,
                "ui-icon-clipboard": 116,
                "ui-icon-copy": 117,
                "ui-icon-contact": 118,
                "ui-icon-image": 119,
                "ui-icon-video": 120,
                "ui-icon-script": 121,
                "ui-icon-alert": 122,
                "ui-icon-info": 123,
                "ui-icon-notice": 124,
                "ui-icon-help": 125,
                "ui-icon-check": 126,
                "ui-icon-bullet": 127,
                "ui-icon-radio-off": 128,
                "ui-icon-radio-on": 129,
                "ui-icon-pin-w": 130,
                "ui-icon-pin-s": 131,
                "ui-icon-play": 132,
                "ui-icon-pause": 133,
                "ui-icon-seek-next": 134,
                "ui-icon-seek-prev": 135,
                "ui-icon-seek-end": 136,
                "ui-icon-seek-first": 137,
                "ui-icon-stop": 138,
                "ui-icon-eject": 139,
                "ui-icon-volume-off": 140,
                "ui-icon-volume-on": 141,
                "ui-icon-power": 142,
                "ui-icon-signal-diag": 143,
                "ui-icon-signal": 144,
                "ui-icon-battery-0": 145,
                "ui-icon-battery-1": 146,
                "ui-icon-battery-2": 147,
                "ui-icon-battery-3": 148,
                "ui-icon-circle-plus": 149,
                "ui-icon-circle-minus": 150,
                "ui-icon-circle-close": 151,
                "ui-icon-circle-triangle-e": 152,
                "ui-icon-circle-triangle-s": 153,
                "ui-icon-circle-triangle-w": 154,
                "ui-icon-circle-triangle-n": 155,
                "ui-icon-circle-arrow-e": 156,
                "ui-icon-circle-arrow-s": 157,
                "ui-icon-circle-arrow-w": 158,
                "ui-icon-circle-arrow-n": 159,
                "ui-icon-circle-zoomin": 160,
                "ui-icon-circle-zoomout": 161,
                "ui-icon-circle-check": 162,
                "ui-icon-circlesmall-plus": 163,
                "ui-icon-circlesmall-minus": 164,
                "ui-icon-circlesmall-close": 165,
                "ui-icon-squaresmall-plus": 166,
                "ui-icon-squaresmall-minus": 167,
                "ui-icon-squaresmall-close": 168,
                "ui-icon-grip-dotted-vertical": 169,
                "ui-icon-grip-dotted-horizontal": 170,
                "ui-icon-grip-solid-vertical": 171,
                "ui-icon-grip-solid-horizontal": 172,
                "ui-icon-gripsmall-diagonal-se": 173,
                "ui-icon-grip-diagonal-se": 174
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.AccordionParameter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var obj = this;

                if (this.active === -2) {
                    obj.active = false;
                } else {
                    if (this.active === -1) {
                        obj.active = true;
                    } else {
                        obj.active = this.active;
                    }
                }

                if (this.animate != null) {
                    obj.animate = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.animate);
                }
                if (!isNaN(this.classes)) {
                    obj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }

                if (!isNaN(this.event)) {
                    obj.event = System.Enum.toString(Bridge.jQueryUI.JqueryEvents, this.event);
                }

                if (!isNaN(this.heightStyle)) {
                    obj.heightStyle = System.Enum.toString(Bridge.jQueryUI.HeightStyles, this.heightStyle);
                }

                return obj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.AutocompleteParameter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var jObj = this;

                if (this.appendTo != null) {
                    jObj.appendTo = $(this.appendTo);
                }
                if (!isNaN(this.classes)) {
                    jObj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }
                if (this.position != null) {
                    jObj.position = Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position);
                }

                return jObj;

            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.AutocompleteSource", {
        $literal: true,
        ctors: {
            ctor: function (text) {
                var $this = {};
                $this.$getType = function () { return Bridge.jQueryUI.Widgets.AutocompleteSource; };
                (function (){
                    this.label = null;
                    this.value = null;
                    this.label = text;
                    this.value = text;

                }).call($this);
                return $this;
            },
            $ctor1: function (label, value) {
                var $this = {};
                $this.$getType = function () { return Bridge.jQueryUI.Widgets.AutocompleteSource; };
                (function (){
                    this.label = null;
                    this.value = null;
                    this.label = label;
                    this.value = value;
                }).call($this);
                return $this;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.ButtonParameter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var jObj = this;
                if (!isNaN(this.classes)) {
                    jObj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }
                if (!isNaN(this.iconPosition)) {
                    jObj.iconPosition = System.Enum.toString(Bridge.jQueryUI.IconPositons, this.iconPosition);
                }
                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.CheckboxradioParameter", {
        props: {
            classes: null,
            disabled: false,
            icon: null,
            label: null
        },
        methods: {
            toJsObject: function () {
                return this;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.DialogParameter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var $t, $t1, $t2;
                var jObj = this;

                if (this.appendTo != null) {
                    jObj.appendTo = $(this.appendTo);
                }

                if (this.buttons != null) {
                    var btns = System.Array.init(this.buttons.length, null, System.Object);
                    for (var i = 0; i < btns.length; i = (i + 1) | 0) {
                        var btn = {  };
                        btn.text = ($t = this.buttons)[System.Array.index(i, $t)].text;
                        btn.icon = ($t1 = this.buttons)[System.Array.index(i, $t1)].icon;
                        btn.click = ($t2 = this.buttons)[System.Array.index(i, $t2)].click;
                        btns[System.Array.index(i, btns)] = btn;
                    }
                    jObj.buttons = btns;
                }

                if (this.position != null) {
                    jObj.position = Bridge.unbox(Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position));
                }

                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.Extensions", {
        statics: {
            methods: {
                autocomplete: function (input) {
                    $(input).autocomplete();
                },
                autocomplete$1: function (input, paramter) {
                    $(input).autocomplete(Bridge.unbox(Bridge.jQueryUI.Widgets.AutocompleteParameter.prototype.toJsObject.call(paramter)));
                },
                autocompleteClose: function (node) {
                    $(node).autocomplete("close");
                },
                autocompleteDestroy: function (node) {
                    $(node).autocomplete("destroy");
                },
                autocompleteDisable: function (node) {
                    return $(node).autocomplete("disable");
                },
                autocompleteEnable: function (node) {
                    return $(node).autocomplete("enable");
                },
                button: function (button) {
                    $(button).button();
                },
                button$1: function (button, parameter) {
                    $(button).button(Bridge.unbox(Bridge.jQueryUI.Widgets.ButtonParameter.prototype.toJsObject.call(parameter)));
                },
                buttonDestroy: function (button) {
                    $(button).button("destroy");
                },
                buttonDisable: function (button) {
                    $(button).button("disable");
                },
                buttonEnable: function (button) {
                    $(button).button("enable");
                },
                datepicker: function (input) {
                    $(input).datepicker();
                },
                dialog: function (node) {
                    $(node).dialog();
                },
                dialog$1: function (node, parameter) {

                    $(node).dialog(Bridge.unbox(Bridge.jQueryUI.Widgets.DialogParameter.prototype.toJsObject.call(parameter)));
                },
                dialog$2: function (node, parameter) {
                    $(node).dialog(parameter);
                },
                dialogClose: function (node) {
                    $(node).dialog("close");
                },
                dialogDestroy: function (node) {
                    $(node).dialog("destroy");
                },
                dialogIsOpen: function (node) {
                    return $(node).dialog("isOpen");
                },
                dialogMoveToTop: function (node) {
                    $(node).dialog("moveToTop");
                },
                dialogEventResize: function (node, ev) {
                    $(node).dialog(new $asm.$AnonymousType$4(ev));

                },
                accordion: function (node) {
                    $(node).accordion();
                },
                accordion$1: function (node, parameter) {
                    $(node).accordion(Bridge.unbox(Bridge.jQueryUI.Widgets.AccordionParameter.prototype.toJsObject.call(parameter)));
                },
                checkboxradio: function (node) {
                    $(node).checkboxradio();
                },
                checkboxradio$1: function (node, parameter) {
                    $(node).checkboxradio(Bridge.unbox(parameter.toJsObject()));
                },
                checkboxradioDestroy: function (node) {
                    $(node).checkboxradio("destroy");
                },
                checkboxradioDisable: function (node) {
                    $(node).checkboxradio("disable");
                },
                checkboxradioEnable: function (node) {
                    $(node).checkboxradio("enable");
                },
                tabs: function (node) {
                    $(node).tabs();
                },
                tabs$1: function (node, parameter) {
                    $(node).tabs(Bridge.unbox(Bridge.jQueryUI.Widgets.TabsParameter.prototype.toJsObject.call(parameter)));
                },
                tabsDestroy: function (node) {
                    $(node).tabs("destroy");
                },
                tabsEnable: function (node) {
                    $(node).tabs("enable");
                },
                tabsDisable: function (node) {
                    $(node).tabs("disable");
                },
                slider: function (node) {
                    $(node).slider();
                },
                slider$1: function (node, paramter) {
                    $(node).slider(Bridge.unbox(Bridge.jQueryUI.Widgets.SliderParamter.prototype.toJsObject.call(paramter)));
                },
                sliderDestroy: function (node) {
                    $(node).slider("destroy");
                },
                sliderEnable: function (node) {
                    $(node).slider("enable");
                },
                sliderDisable: function (node) {
                    $(node).slider("disable");
                },
                sliderSlide: function (node, slideing) {
                    $(node).slider(new $asm.$AnonymousType$5(function (o1, o2) {
                        var o1d = o1;
                        var o2d = o2;
                        slideing(Bridge.cast(System.Enum.parse(Bridge.jQueryUI.JqueryEvents, o1d.type, true), System.Int32), { handle: node, handleIndex: o2d.handleIndex, value: isNaN(o2d.value) ? -1 : o2d.value, values: isNaN(o2d.values) ? null : o2d.values });
                    }));
                },
                sliderChange: function (node, changed) {
                    $(node).slider(new $asm.$AnonymousType$6(function (o1, o2) {
                        var o2d = o2;
                        changed(System.Nullable.getValue(Bridge.cast(Bridge.unbox(System.Enum.parse(Bridge.jQueryUI.JqueryEvents, o1.toString(), true)), System.Int32)), { handle: node, handleIndex: o2d.handleIndex, value: isNaN(o2d.value) ? -1 : o2d.value, values: isNaN(o2d.values) ? null : o2d.values });
                    }));
                },
                progressbar: function (node) {
                    $(node).progressbar();
                },
                progressbar$1: function (node, parameter) {
                    $(node).progressbar(parameter);
                },
                progressbarDestroy: function (node) {
                    $(node).progressbar("destroy");
                },
                progressbarEnable: function (node) {
                    $(node).progressbar("enable");
                },
                progressbarDisable: function (node) {
                    $(node).progressbar("disable");
                },
                progressbarValue: function (node) {
                    return $(node).progressbar("value");
                },
                progressbarValue$1: function (node, value) {
                    $(node).progressbar("value", value);
                },
                selectmenu: function (node) {
                    $(node).selectmenu();
                },
                selectmenu$1: function (node, paramter) {
                    $(node).selectmenu(Bridge.unbox(Bridge.jQueryUI.Widgets.SelectmenuParameter.prototype.toJsObject.call(paramter)));
                },
                selectmenuClose: function (node) {
                    $(node).selectmenu("close");
                },
                selectmenuDestroy: function (node) {
                    $(node).selectmenu("destroy");
                },
                selectmenuDisable: function (node) {
                    return $(node).selectmenu("disable");
                },
                selectmenuEnable: function (node) {
                    return $(node).selectmenu("enable");
                },
                menu: function (node) {
                    $(node).menu();
                },
                menu$1: function (node, parameter) {
                    $(node).menu(Bridge.unbox(Bridge.jQueryUI.Widgets.MenuParameter.prototype.toJsObject.call(parameter)));
                },
                tooltip: function (node) {
                    $(node).tooltip();
                },
                tooltip$1: function (node, parameter) {
                    $(node).tooltip(Bridge.unbox(Bridge.jQueryUI.Widgets.TooltipParamter.prototype.toJsObject.call(parameter)));
                }
            }
        }
    });

    Bridge.define("$AnonymousType$4", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function (resize) {
                this.resize = resize;
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$4)) {
                    return false;
                }
                return Bridge.equals(this.resize, o.resize);
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196189, this.resize]);
                return h;
            },
            toJSON: function () {
                return {
                    resize : this.resize
                };
            }
        },
        statics : {
            methods: {
                $metadata : function () { return {"m":[{"a":2,"n":"resize","t":16,"rt":Function,"g":{"a":2,"n":"get_resize","t":8,"rt":Function,"fg":"resize"},"fn":"resize"}]}; }
            }
        }
    });

    Bridge.define("$AnonymousType$5", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function (slide) {
                this.slide = slide;
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$5)) {
                    return false;
                }
                return Bridge.equals(this.slide, o.slide);
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196190, this.slide]);
                return h;
            },
            toJSON: function () {
                return {
                    slide : this.slide
                };
            }
        },
        statics : {
            methods: {
                $metadata : function () { return {"m":[{"a":2,"n":"slide","t":16,"rt":Function,"g":{"a":2,"n":"get_slide","t":8,"rt":Function,"fg":"slide"},"fn":"slide"}]}; }
            }
        }
    });

    Bridge.define("$AnonymousType$6", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function (change) {
                this.change = change;
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$6)) {
                    return false;
                }
                return Bridge.equals(this.change, o.change);
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196191, this.change]);
                return h;
            },
            toJSON: function () {
                return {
                    change : this.change
                };
            }
        },
        statics : {
            methods: {
                $metadata : function () { return {"m":[{"a":2,"n":"change","t":16,"rt":Function,"g":{"a":2,"n":"get_change","t":8,"rt":Function,"fg":"change"},"fn":"change"}]}; }
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.MenuParameter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var jObj = this;
                if (!isNaN(this.classes)) {
                    jObj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }

                if (!isNaN(this.icon)) {
                    jObj.icon = System.Enum.toString(Bridge.jQueryUI.UIIcons, this.icon);
                }
                if (!isNaN(this.position)) {
                    jObj.position = Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position);
                }

                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.ProgressbarParamter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var jObj = this;
                if (!isNaN(this.classes)) {
                    jObj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }
                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.SelectmenuParameter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var jObj = this;

                if (!isNaN(this.classes)) {
                    jObj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }
                if (this.appendTo != null) {
                    jObj.appendTo = $(this.appendTo);
                }
                if (this.position != null) {
                    jObj.position = Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position);
                }

                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.SliderParamter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var jObj = this;
                if (!isNaN(this.animate)) {
                    jObj.animate = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.animate);
                }
                if (!isNaN(this.classes)) {
                    jObj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }
                if (!isNaN(this.orientation)) {
                    jObj.orientation = System.Enum.toString(Bridge.jQueryUI.Orientations, this.orientation);
                }
                if (!isNaN(this.range)) {
                    jObj.range = System.Enum.toString(Bridge.jQueryUI.Ranges, this.range);
                }
                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.TabsParameter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var jObj = this;
                if (!isNaN(this.classes)) {
                    jObj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }
                if (!isNaN(this.event)) {
                    jObj.event = System.Enum.toString(Bridge.jQueryUI.JqueryEvents, this.event);
                }
                if (!isNaN(this.heightStyle)) {
                    jObj.heightStyle = System.Enum.toString(Bridge.jQueryUI.HeightStyles, this.heightStyle);
                }
                if (!isNaN(this.hide)) {
                    jObj.hide = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.hide);
                }
                if (!isNaN(this.show)) {
                    jObj.show = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.show);
                }
                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.TooltipParamter", {
        $literal: true,
        methods: {
            toJsObject: function () {
                var jObj = this;

                if (!isNaN(this.classes)) {
                    jObj.classes = Bridge.jQueryUI.Helper.toJsDynamic(this.classes);
                }
                if (!isNaN(this.content)) {
                    jObj.content = $(this.content);
                }
                if (!isNaN(this.hide)) {
                    jObj.hide = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.hide);
                }
                if (!isNaN(this.position)) {
                    jObj.position = Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position);
                }
                if (!isNaN(this.show)) {
                    jObj.show = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.show);
                }

                return jObj;
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.WindowPositions", {
        $kind: "enum",
        statics: {
            fields: {
                center: 0,
                "left top": 1,
                top: 2,
                "right top": 3,
                left: 4,
                center: 5,
                right: 6,
                "left bottom": 7,
                bottom: 8,
                right: 9
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJicmlkZ2UuanF1ZXJ5dWkuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIkNvbW1vbi9BbmltYXRpb24uY3MiLCJDb21tb24vUG9zaXRpb24uY3MiLCJFZmZlY3RzL0V4dGVuc2lvbnMuY3MiLCJIZWxwZXIuY3MiLCJJbnRlcmFjdGlvbnMvRXh0ZW5zaW9ucy5jcyIsIkludGVyYWN0aW9ucy9SZXNpemFibGVQYXJhbWV0ZXIuY3MiLCJNZXNzYWdlYm94ZXMuY3MiLCJXaWRnZXRzL0FjY29yZGlvblBhcmFtZXRlci5jcyIsIldpZGdldHMvQXV0b2NvbXBsZXRlUGFyYW1ldGVyLmNzIiwiV2lkZ2V0cy9BdXRvY29tcGxldGVTb3VyY2UuY3MiLCJXaWRnZXRzL0J1dHRvblBhcmFtZXRlci5jcyIsIldpZGdldHMvQ2hlY2tib3hyYWRpb1BhcmFtZXRlci5jcyIsIldpZGdldHMvRGlhbG9nUGFyYW1ldGVyLmNzIiwiV2lkZ2V0cy9FeHRlbnNpb25zLmNzIiwiV2lkZ2V0cy9NZW51UGFyYW1ldGVyLmNzIiwiV2lkZ2V0cy9Qcm9ncmVzc2JhclBhcmFtdGVyLmNzIiwiV2lkZ2V0cy9TZWxlY3RtZW51UGFyYW1ldGVyLmNzIiwiV2lkZ2V0cy9TbGlkZXJQYXJhbXRlci5jcyIsIldpZGdldHMvVGFic1BhcmFtZXRlci5jcyIsIldpZGdldHMvVG9vbHRpcFBhcmFtdGVyLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBc0JZQTs7Ozs7OztnQkFLQUEsSUFBSUE7b0JBQVVBLE9BQU9BOzs7Z0JBRXJCQSxVQUFVQTtnQkFDVkEsSUFBSUEsQ0FBQ0EsTUFBYUE7b0JBQVFBLFlBQVlBOztnQkFDdENBLElBQUlBLENBQUNBLE1BQWFBO29CQUFTQSxhQUFhQTs7Z0JBQ3hDQSxJQUFJQSxDQUFDQSxNQUFhQTtvQkFBUUEsWUFB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OztnQkFDdkNBLE9BQU9BOzs7Ozs7Ozs7Z0JDL0JQQSxXQUFXQTtnQkFDWEEsSUFBSUEsQ0FBQ0EsTUFBYUE7b0JBQVVBLGVBQWVBOztnQkFDM0NBLElBQUlBLENBQUNBLE1BQWFBO29CQUFRQSxhQUFnQkE7O2dCQUMxQ0EsSUFBSUEsQ0FBQ0EsTUFBYUE7b0JBQWNBLG1CQUFtQkE7O2dCQUNuREEsSUFBSUEsQ0FBQ0EsTUFBYUE7b0JBQU9BLFlBQVlBOztnQkFDckNBLElBQUlBLENBQUNBLE1BQWFBO29CQUFPQSxZQUFZQTs7Z0JBQ3JDQSxPQUFPQTs7Ozs7Ozs7O2dCQ0xQQSxXQUFXQTs7Z0JBRVhBLElBQUlBLENBQUNBLE1BQWFBO29CQUFVQSxlQUFlQTs7Z0JBQzNDQSxJQUFJQSxDQUFDQSxNQUFhQTtvQkFBVUEsZUFBZUEsRUFBbUJBOztnQkFDOURBLElBQUlBLENBQUNBLE1BQWFBO29CQUFPQSxZQUFZQTs7Z0JBQ3JDQSxJQUFJQSxDQUFDQSxNQUFhQTtvQkFBV0EsZ0JBQWdCQTs7Z0JBQzdDQSxJQUFJQSxDQUFDQSxNQUFhQTtvQkFBT0EsWUFBWUE7OztnQkFFckNBLE9BQU9BIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UualF1ZXJ5VUkuQ29tbW9uXHJcbntcclxuICAgIFtPYmplY3RMaXRlcmFsKE9iamVjdENyZWF0ZU1vZGUuQ29uc3RydWN0b3IpXVxyXG4gICAgcHVibGljIGNsYXNzIEFuaW1hdGlvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBib29sIERpc2FibGVkIHsgc2V0OyBnZXQ7IH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgU3BlZWQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBFYXNpbmdzIEVhc2luZyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBEZWxheSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBEdXJhdGlvbiB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIEVmZmVjdFR5cGVzIEVmZmVjdCB7IHNldDsgZ2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBBbmltYXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGlzYWJsZWQgPSBmYWxzZTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9iamVjdCBUb0pzT2JqZWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChEaXNhYmxlZCkgcmV0dXJuIGZhbHNlLlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG9iaiA9IG5ldyBvYmplY3QoKS5Ub0R5bmFtaWMoKTtcclxuICAgICAgICAgICAgaWYgKCFTY3JpcHQuSXNOYU4oU3BlZWQpKSBvYmouc3BlZWQgPSBTcGVlZDtcclxuICAgICAgICAgICAgaWYgKCFTY3JpcHQuSXNOYU4oRWFzaW5nKSkgb2JqLmVhc2luZyA9IEVhc2luZy5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihEZWxheSkpIG9iai5kZWxheSA9IERlbGF5O1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihEdXJhdGlvbikpIG9iai5kdXJhdGlvbiA9IER1cmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihFZmZlY3QpKSBvYmouc3BlZWQgPSBFZmZlY3QuVG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UualF1ZXJ5VUkuQ29tbW9uXHJcbntcclxuXHJcbiAgICBbT2JqZWN0TGl0ZXJhbChPYmplY3RDcmVhdGVNb2RlLkNvbnN0cnVjdG9yKV1cclxuICAgIHB1YmxpYyBjbGFzcyBQb3NpdGlvblxyXG4gICAge1xyXG4gICAgICAgIC8vbXkgcG9zdGlvblxyXG4gICAgICAgIHB1YmxpYyBXaW5kb3dQb3NpdGlvbnMgTXkgeyBzZXQ7IGdldDsgfVxyXG5cclxuICAgICAgICAvL2F0IHBvc2l0aW9uXHJcbiAgICAgICAgcHVibGljIFdpbmRvd1Bvc2l0aW9ucyBBdCB7IHNldDsgZ2V0OyB9XHJcblxyXG4gICAgICAgIC8vb2YgXHJcbiAgICAgICAgcHVibGljIEh0bWw1Lk5vZGUgT2YgeyBzZXQ7IGdldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29sbGlzaW9ucyBDb2xsaXNpb24geyBzZXQ7IGdldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUG9zaXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29sbGlzaW9uID0gQ29sbGlzaW9ucy5GbGlwO1xyXG4gICAgICAgICAgICBNeSA9IFdpbmRvd1Bvc2l0aW9ucy5DZW50ZXI7XHJcbiAgICAgICAgICAgIEF0ID0gV2luZG93UG9zaXRpb25zLkNlbnRlcjtcclxuICAgICAgICAgICAgT2YgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9iamVjdCBUb0pzT2JqZWN0KClcclxuICAgICAgICB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGpPYmogPSBuZXcgb2JqZWN0KCkuVG9EeW5hbWljKCk7XHJcbiAgICAgICAgICAgIGpPYmoubXkgPSBNeS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICBqT2JqLmF0ID0gQXQuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgak9iai5jb2xsaXNpb24gPSBDb2xsaXNpb24uVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKE9mICE9IG51bGwpIGpPYmoub2YgPSBuZXcgalF1ZXJ5Mi5qUXVlcnkoT2YpOztcclxuICAgICAgICAgICAgcmV0dXJuIGpPYmo7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UualF1ZXJ5VUkuRWZmZWN0c1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEV4dGVuc2lvbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgRWZmZWN0KHRoaXMgQnJpZGdlLkh0bWw1Lk5vZGUgbm9kZSwgRWZmZWN0VHlwZXMgZWZmZWN0LCBFZmZlY3RQcmFtZXRlciBvcHRpb25zID0gbnVsbCwgaW50IGR1cmF0aW9uPSA0MDAsIEFjdGlvbiBjb21wbGV0ZSA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgbmFtZSA9IGVmZmVjdC5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuZWZmZWN0KG5hbWUpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSVxyXG57XHJcblxyXG5cclxuXHJcbiAgICAvL1tBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkZpZWxkLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgLy9wdWJsaWMgY2xhc3MgRW51bUpzTmFtZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAgLy97XHJcbiAgICAvLyAgICBwcml2YXRlIHJlYWRvbmx5IHN0cmluZyBqc05hbWU7XHJcbiAgICAvLyAgICBwdWJsaWMgc3RyaW5nIEpzTmFtZSB7IGdldCB7IHJldHVybiBqc05hbWU7IH0gfVxyXG4gICAgLy8gICAgcHVibGljIEVudW1Kc05hbWVBdHRyaWJ1dGUoc3RyaW5nIGpzTmFtZSlcclxuICAgIC8vICAgIHtcclxuICAgIC8vICAgICAgICB0aGlzLmpzTmFtZSA9IGpzTmFtZTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfVxyXG5cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gc29tZSBzcGVjaWFsIGhlbHBlciBmb3IgaW50ZXJuYWwgdXNlXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgaW50ZXJuYWwgc3RhdGljIGNsYXNzIEhlbHBlclxyXG4gICAge1xyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBvYmplY3QgVG9Kc0R5bmFtaWModGhpcyBDb21tb24uQ2xhc3NTZWxlY3RvcltdIHNlbGVjdG9ycylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByT2JqID0gKG5ldyBvYmplY3QoKSkuVG9EeW5hbWljKCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2godmFyIHNlbGVjdG9yIGluIHNlbGVjdG9ycylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgck9ialtzZWxlY3Rvci5VSUNsYXNzTmFtZV0gPSBzZWxlY3Rvci5DdXN0b21DbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJPYmo7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy9oZWxwZXIgYmVjYXVzZSBlbnVtIGluIGJyaWRnZSBpcyBudW1lcmljXHJcbiAgICAgICAgLy9wdWJsaWMgc3RhdGljIHN0cmluZyBHZXRKc0VudW1OYW1lIChUeXBlIGVudW1UeXBlLCBFbnVtIHZhbHVlKVxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vICAgIC8vaWYoIWVudW1UeXBlLklzRW51bSl7XHJcbiAgICAgICAgLy8gICAgLy8gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIm5vdCBhbiBlbnVtXCIpO1xyXG4gICAgICAgIC8vICAgIC8vfVxyXG4gICAgICAgIC8vICAgIC8vZWxzZVxyXG4gICAgICAgIC8vICAgIC8ve1xyXG4gICAgICAgIC8vICAgIC8vICAgIHZhciBuYW1lID0gRW51bS5HZXROYW1lKGVudW1UeXBlLCB2YWx1ZSk7XHJcbiAgICAgICAgLy8gICAgLy8gICAgdmFyIHJldFZhbCA9IGVudW1UeXBlLkdldEZpZWxkKG5hbWUpIC8vIEkgcHJlZmVyIHRvIGdldCBhdHRyaWJ1dGVzIHRoaXMgd2F5XHJcbiAgICAgICAgLy8gICAgLy8gICAgICAgIC5HZXRDdXN0b21BdHRyaWJ1dGVzKGZhbHNlKVxyXG4gICAgICAgIC8vICAgIC8vICAgICAgICAuT2ZUeXBlPEVudW1Kc05hbWVBdHRyaWJ1dGU+KClcclxuICAgICAgICAvLyAgICAvLyAgICAgICAgLlNpbmdsZU9yRGVmYXVsdCgpO1xyXG4gICAgICAgIC8vICAgIC8vICAgIGlmKHJldFZhbCAhPSBudWxsKVxyXG4gICAgICAgIC8vICAgIC8vICAgIHtcclxuICAgICAgICAvLyAgICAvLyAgICAgICAgcmV0dXJuIHJldFZhbC5Kc05hbWU7XHJcbiAgICAgICAgLy8gICAgLy8gICAgfVxyXG4gICAgICAgIC8vICAgIC8vICAgIGVsc2VcclxuICAgICAgICAvLyAgICAvLyAgICB7XHJcbiAgICAgICAgLy8gICAgLy8gICAgICAgIHJldHVybiBuYW1lLlRvTG93ZXIoKTtcclxuICAgICAgICAvLyAgICAvLyAgICB9XHJcbiAgICAgICAgLy8gICAgLy99XHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBCcmlkZ2UuSHRtbDU7XHJcblxyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSS5JbnRlcmFjdGlvbnNcclxue1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEV4dGVuc2lvbnNcclxuICAgIHtcclxuICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBSZXNpemFibGUodGhpcyBOb2RlIG5vZGUsIFJlc2l6ZWFibGVQcmFtZXRlckNvbGxlY3Rpb24gcGFyYW1ldGVyID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5yZXNpemFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNyZWdpb24gZHJhZ2dhYmxlXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIERyYWdnYWJsZSh0aGlzIE5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5kcmFnZ2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIERyYWdnYWJsZSh0aGlzIE5vZGUgbm9kZSwgRHJhZ2dhYmxlUGFyYW1ldGVyIHBhcmFtZXRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdG9kbyBtYWtlIG1lIGJldHRlciAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBwcmFtRGVmYXVsdCA9IG5ldyBEcmFnZ2FibGVQYXJhbWV0ZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBqUGFyYW0gPSBuZXcgeyB9LlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICAjcmVnaW9uIGdlbmVyYXRlIG9wdGlvbnNcclxuICAgICAgICAgICAgaWYocGFyYW1ldGVyLkFkZENsYXNzZXMgIT0gcHJhbURlZmF1bHQuQWRkQ2xhc3NlcykgalBhcmFtW1wiYWRkQ2xhc3Nlc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLkFwcGVuZFRvICE9IHByYW1EZWZhdWx0LkFwcGVuZFRvKSBqUGFyYW1bXCJhcHBlbmRUb1wiXSA9IG5ldyBqUXVlcnkyLmpRdWVyeShwYXJhbWV0ZXIuQXBwZW5kVG8pO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLkF4aXMgIT0gcHJhbURlZmF1bHQuQXhpcykgalBhcmFtW1wiYXhpc1wiXSA9IHBhcmFtZXRlci5BeGlzO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLkNhbmNlbCAhPSBwcmFtRGVmYXVsdC5DYW5jZWwpIGpQYXJhbVtcImNhbmNlbFwiXSA9IHBhcmFtZXRlci5DYW5jZWw7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuQ2xhc3NlcyAhPSBwcmFtRGVmYXVsdC5DbGFzc2VzKSBqUGFyYW1bXCJjbGFzc2VzXCJdID0gcGFyYW1ldGVyLkNsYXNzZXM7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuQ29ubmVjdFRvU29ydGFibGUgIT0gcHJhbURlZmF1bHQuQ29ubmVjdFRvU29ydGFibGUpIGpQYXJhbVtcImNvbm5lY3RUb1NvcnRhYmxlXCJdID0gcGFyYW1ldGVyLkNvbm5lY3RUb1NvcnRhYmxlO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLkNvbnRhaW5tZW50ICE9IHByYW1EZWZhdWx0LkNvbnRhaW5tZW50KSBqUGFyYW1bXCJjb250YWlubWVudFwiXSA9IHBhcmFtZXRlci5Db250YWlubWVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5DdXJzb3IgIT0gcHJhbURlZmF1bHQuQ3Vyc29yKSBqUGFyYW1bXCJjdXJzb3JcIl0gPSBwYXJhbWV0ZXIuQ3Vyc29yLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuQ3Vyc29yQXQgIT0gcHJhbURlZmF1bHQuQ3Vyc29yQXQpIGpQYXJhbVtcImN1cnNvckF0XCJdID0gbmV3XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBwYXJhbWV0ZXIuQ3Vyc29yQXQuTGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gcGFyYW1ldGVyLkN1cnNvckF0LlJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9wID0gcGFyYW1ldGVyLkN1cnNvckF0LlRvcCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbSA9IHBhcmFtZXRlci5DdXJzb3JBdC5Cb3R0b21cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5EZWxheSAhPSBwcmFtRGVmYXVsdC5EZWxheSkgalBhcmFtW1wiZGVsYXlcIl0gPSBwYXJhbWV0ZXIuRGVsYXk7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuRGlzYWJsZWQgIT0gcHJhbURlZmF1bHQuRGlzYWJsZWQpIGpQYXJhbVtcImRpc2FibGVkXCJdID0gcGFyYW1ldGVyLkRpc2FibGVkO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLkRpc3RhbmNlICE9IHByYW1EZWZhdWx0LkRpc3RhbmNlKSBqUGFyYW1bXCJkaXN0YW5jZVwiXSA9IHBhcmFtZXRlci5EaXN0YW5jZTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5HcmlkICE9IHByYW1EZWZhdWx0LkdyaWQpIGpQYXJhbVtcImdyaWRcIl0gPSBuZXcgeyB4ID0gcGFyYW1ldGVyLkdyaWQuWCwgeSA9IHBhcmFtZXRlci5HcmlkLlkgfTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5IYW5kbGUgIT0gcHJhbURlZmF1bHQuSGFuZGxlKSBqUGFyYW1bXCJoYW5kbGVcIl0gPSBuZXcgalF1ZXJ5Mi5qUXVlcnkocGFyYW1ldGVyLkhhbmRsZSk7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuSGVscGVyICE9IHByYW1EZWZhdWx0LkhlbHBlcikgalBhcmFtW1wiaGVscGVyXCJdID0gcGFyYW1ldGVyLkhlbHBlcjtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5JRnJhbWVGaXggIT0gcHJhbURlZmF1bHQuSUZyYW1lRml4KSBqUGFyYW1bXCJpZnJhbWVGaXhcIl0gPSBwYXJhbWV0ZXIuSUZyYW1lRml4O1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLk9wYWNpdHkgIT0gcHJhbURlZmF1bHQuT3BhY2l0eSkgalBhcmFtW1wib3BhY2l0eVwiXSA9IHBhcmFtZXRlci5PcGFjaXR5O1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLlJlZnJlc2hQb3NpdGl0aW9ucyAhPSBwcmFtRGVmYXVsdC5SZWZyZXNoUG9zaXRpdGlvbnMpIGpQYXJhbVtcInJlZnJlc2hQb3NpdGlvbnNcIl0gPSBwYXJhbWV0ZXIuUmVmcmVzaFBvc2l0aXRpb25zO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLlJldmVydCAhPSBwcmFtRGVmYXVsdC5SZXZlcnQpIGpQYXJhbVtcInJldmVydFwiXSA9IHBhcmFtZXRlci5SZXZlcnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuUmV2ZXJ0RHVyYXRpb24gIT0gcHJhbURlZmF1bHQuUmV2ZXJ0RHVyYXRpb24pIGpQYXJhbVtcInJldmVydER1cmF0aW9uXCJdID0gcGFyYW1ldGVyLlJldmVydER1cmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLlNjb3BlICE9IHByYW1EZWZhdWx0LlNjb3BlKSBqUGFyYW1bXCJzY29wZVwiXSA9IHBhcmFtZXRlci5TY29wZTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5TY3JvbGwgIT0gcHJhbURlZmF1bHQuU2Nyb2xsKSBqUGFyYW1bXCJzY3JvbGxcIl0gPSBwYXJhbWV0ZXIuU2Nyb2xsO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLlNjcm9sbFNlbnNpdml0eSAhPSBwcmFtRGVmYXVsdC5TY3JvbGxTZW5zaXZpdHkpIGpQYXJhbVtcInNjcm9sbFNlbnNpdGl2aXR5XCJdID0gcGFyYW1ldGVyLlNjcm9sbFNlbnNpdml0eTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5TY3JvbGxTcGVlZCAhPSBwcmFtRGVmYXVsdC5TY3JvbGxTcGVlZCkgalBhcmFtW1wic2Nyb2xsU3BlZWRcIl0gPSBwYXJhbWV0ZXIuU2Nyb2xsU3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuU25hcCAhPSBwcmFtRGVmYXVsdC5TbmFwKSBqUGFyYW1bXCJzbmFwXCJdID0gcGFyYW1ldGVyLlNuYXA7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuU25hcE1vZGUgIT0gcHJhbURlZmF1bHQuU25hcE1vZGUpIGpQYXJhbVtcInNuYXBNb2RlXCJdID0gcGFyYW1ldGVyLlNuYXBNb2RlLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuU25hcFRvbGVyYW5jZSAhPSBwcmFtRGVmYXVsdC5TbmFwVG9sZXJhbmNlKSBqUGFyYW1bXCJzbmFwVG9sZXJhbmNlXCJdID0gcGFyYW1ldGVyLlNuYXBUb2xlcmFuY2U7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIuU3RhY2sgIT0gcHJhbURlZmF1bHQuU3RhY2spIGpQYXJhbVtcInN0YWNrXCJdID0gcGFyYW1ldGVyLlN0YWNrO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLlpJbmRleCAhPSBwcmFtRGVmYXVsdC5aSW5kZXgpIGpQYXJhbVtcInpJbmRleCBcIl0gPSBwYXJhbWV0ZXIuWkluZGV4O1xyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuZHJhZ2dhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBEcmFnZ2FibGVEZXN0cm95ICh0aGlzIE5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5kcmFnZ2FibGUoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgRHJhZ2dhYmxlRGlzYWJsZSh0aGlzIE5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5kcmFnZ2FibGUoXCJkaXNhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgRHJhZ2dhYmxlRW5hYmxlKHRoaXMgTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmRyYWdnYWJsZShcImVuYWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBCcmlkZ2UualF1ZXJ5VUkuSW50ZXJhY3Rpb25zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBSZXNpemVhYmxlUHJhbWV0ZXJDb2xsZWN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgLy9wdWJsaWMgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Tm9kZT4gQWxzb1Jlc2l6ZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgQW5pbWF0ZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBBbmltYXRlRHVyYXRpb24geyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBFYXNpbmdzIEFuaW1hdGVFYXNpbmcgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIC8vcHVibGljIGJvb2wgQXNwZWN0UmF0aW8geyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIEF1dG9IaWRlIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICAvL3B1YmxpYyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxTeXN0ZW0uVHlwZT4gQ2FuY2VsIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIENsYXNzZXMgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIC8vcHVibGljIHN0cmluZyBDb250YWlubWVudCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBEZWxheSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgRGlzYWJsZWQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIC8vcHVibGljIGludCBEaXN0YW5jZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgLy9wdWJsaWMgc3RyaW5nIEdob3N0IHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICAvL3B1YmxpYyBzdHJpbmcgR3JpZCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBNYXhIZWlnaHQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWF4V2lkaHQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWluSGVpZ2h0IHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IE1pbldpZHRoIHsgc2V0OyBnZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlc2l6ZWFibGVQcmFtZXRlckNvbGxlY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHRlc3QgPSBuZXcgSHRtbDUuSFRNTERpdkVsZW1lbnQoKVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBbmltYXRlRHVyYXRpb24gPSAoaW50KUFuaW1hdGlvblNwZWVkcy5GYXN0O1xyXG4gICAgICAgICAgICBBbmltYXRlRWFzaW5nID0gRWFzaW5ncy5Td2luZztcclxuICAgICAgICAgICAgQXV0b0hpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ2xhc3NlcyA9IG51bGw7XHJcbiAgICAgICAgICAgIERlbGF5ID0gMDtcclxuICAgICAgICAgICAgRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgTWF4SGVpZ2h0ID0gLTE7XHJcbiAgICAgICAgICAgIE1heFdpZGh0ID0gLTE7XHJcbiAgICAgICAgICAgIE1pbldpZHRoID0gLTE7XHJcbiAgICAgICAgICAgIE1pbkhlaWdodCA9IC0xO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIE1lc3NhZ2Vib3hlc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBIaWdobGlnaHQodGhpcyBIdG1sNS5IVE1MRGl2RWxlbWVudCBkaXYsIHN0cmluZyB0aXRsZSwgc3RyaW5nIG1lc3NhZ2UsIFVJSWNvbnMgaWNvbiA9IFVJSWNvbnMuSW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhID0gbmV3IEh0bWw1LkhUTUxQYXJhZ3JhcGhFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICBwYXJhLkFwcGVuZENoaWxkKG5ldyBIdG1sNS5IVE1MU3BhbkVsZW1lbnQoKSB7IENsYXNzTmFtZSA9IFwidWktaWNvbiBcIiArIGljb24uVG9TdHJpbmcoKSB9KTtcclxuICAgICAgICAgICAgcGFyYS5BcHBlbmRDaGlsZChuZXcgSHRtbDUuSFRNTEVsZW1lbnQoXCJzdHJvbmdcIikgeyBUZXh0Q29udGVudCA9IHRpdGxlIH0pO1xyXG4gICAgICAgICAgICBwYXJhLkFwcGVuZENoaWxkKG5ldyBIdG1sNS5UZXh0KG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgZGl2LkFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgICAgICAgICBkaXYuQ2xhc3NMaXN0LkFkZChcInVpLXN0YXRlLWhpZ2hsaWdodFwiKTtcclxuICAgICAgICAgICAgZGl2LkNsYXNzTGlzdC5BZGQoXCJ1aS1jb3JuZXItYWxsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEVycm9yKHRoaXMgSHRtbDUuSFRNTERpdkVsZW1lbnQgZGl2LCBzdHJpbmcgdGl0bGUsIHN0cmluZyBtZXNzYWdlLCBVSUljb25zIGljb24gPSBVSUljb25zLkFsZXJ0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBhcmEgPSBuZXcgSHRtbDUuSFRNTFBhcmFncmFwaEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHBhcmEuQXBwZW5kQ2hpbGQobmV3IEh0bWw1LkhUTUxTcGFuRWxlbWVudCgpIHsgQ2xhc3NOYW1lID0gXCJ1aS1pY29uIFwiICsgaWNvbi5Ub1N0cmluZygpIH0pO1xyXG4gICAgICAgICAgICBwYXJhLkFwcGVuZENoaWxkKG5ldyBIdG1sNS5IVE1MRWxlbWVudChcInN0cm9uZ1wiKSB7IFRleHRDb250ZW50ID0gdGl0bGUgfSk7XHJcbiAgICAgICAgICAgIHBhcmEuQXBwZW5kQ2hpbGQobmV3IEh0bWw1LlRleHQobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBkaXYuQXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICAgICAgICAgIGRpdi5DbGFzc0xpc3QuQWRkKFwidWktc3RhdGUtZXJyb3JcIik7XHJcbiAgICAgICAgICAgIGRpdi5DbGFzc0xpc3QuQWRkKFwidWktY29ybmVyLWFsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSS5XaWRnZXRzXHJcbntcclxuICAgIFtPYmplY3RMaXRlcmFsXVxyXG4gICAgcHVibGljIGNsYXNzIEFjY29yZGlvblBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gV2hpY2ggcGFuZWwgaXMgY3VycmVudGx5IG9wZW4uXHJcbiAgICAgICAgLy8vIERlZmF1bHQ6IDBcclxuICAgICAgICAvLy8gLTEgPSBub3RoaW5nXHJcbiAgICAgICAgLy8vIC0yID0gYWxsXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgaW50IEFjdGl2ZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5BbmltYXRpb24gQW5pbWF0ZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5DbGFzc1NlbGVjdG9yW10gQ2xhc3NlcyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgQ29sbGFwc2libGUgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIERpc2FibGVkIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgSnF1ZXJ5RXZlbnRzIEV2ZW50IHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEhlYWRlciB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIEhlaWdodFN0eWxlcyBIZWlnaHRTdHlsZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBJY29ucyB7IHNldDsgZ2V0OyB9XHJcblxyXG4gICAgICAgIGludGVybmFsIG9iamVjdCBUb0pzT2JqZWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLlRvRHluYW1pYygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKEFjdGl2ZSA9PSAtMikgb2JqLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChBY3RpdmUgPT0gLTEpIG9iai5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbHNlIG9iai5hY3RpdmUgPSBBY3RpdmU7XHJcblxyXG4gICAgICAgICAgICBpZiAoQW5pbWF0ZSAhPSBudWxsKSBvYmouYW5pbWF0ZSA9IEFuaW1hdGUuVG9Kc09iamVjdCgpO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihDbGFzc2VzKSkgb2JqLmNsYXNzZXMgPSBDbGFzc2VzLlRvSnNEeW5hbWljKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihFdmVudCkpIG9ialtcImV2ZW50XCJdID0gRXZlbnQuVG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKEhlaWdodFN0eWxlKSkgb2JqLmhlaWdodFN0eWxlID0gSGVpZ2h0U3R5bGUuVG9TdHJpbmcoKTsgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSS5XaWRnZXRzXHJcbntcclxuICAgIFtPYmplY3RMaXRlcmFsXVxyXG4gICAgcHVibGljIGNsYXNzIEF1dG9jb21wbGV0ZVBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBIdG1sNS5Ob2RlIEFwcGVuZFRvIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBBdXRvRm9jdXMgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBDb21tb24uQ2xhc3NTZWxlY3RvcltdIENsYXNzZXMgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBpbnQgRGVsYXkgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIERpc2FibGVkIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IE1pbkxlbmd0aCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5Qb3NpdGlvbiBQb3NpdGlvbiB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgLy90b2RvIHN1cHBvcnQgbXVsdGlwbGUgdHlwZXNcclxuICAgICAgICBwdWJsaWMgQXV0b2NvbXBsZXRlU291cmNlW10gU291cmNlIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgb2JqZWN0IFRvSnNPYmplY3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGpPYmogPSB0aGlzLlRvRHluYW1pYygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKEFwcGVuZFRvICE9IG51bGwpIGpPYmouYXBwZW5kVG8gPSBuZXcgalF1ZXJ5Mi5qUXVlcnkoQXBwZW5kVG8pO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihDbGFzc2VzKSkgak9iai5jbGFzc2VzID0gQ2xhc3Nlcy5Ub0pzRHluYW1pYygpO1xyXG4gICAgICAgICAgICBpZiAoUG9zaXRpb24gIT0gbnVsbCkgeyBqT2JqLnBvc2l0aW9uID0gUG9zaXRpb24uVG9Kc09iamVjdCgpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gak9iajtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLmpRdWVyeVVJLldpZGdldHNcclxue1xyXG4gICAgW09iamVjdExpdGVyYWwoT2JqZWN0Q3JlYXRlTW9kZS5Db25zdHJ1Y3RvcildXHJcbiAgICBwdWJsaWMgY2xhc3MgQXV0b2NvbXBsZXRlU291cmNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBMYWJlbCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBWYWx1ZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIEF1dG9jb21wbGV0ZVNvdXJjZShzdHJpbmcgdGV4dCkge1xyXG4gICAgICAgICAgICBMYWJlbCA9IHRleHQ7XHJcbiAgICAgICAgICAgIFZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQXV0b2NvbXBsZXRlU291cmNlKHN0cmluZyBsYWJlbCwgc3RyaW5nIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGFiZWwgPSBsYWJlbDtcclxuICAgICAgICAgICAgVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSS5XaWRnZXRzXHJcbntcclxuICAgIFtPYmplY3RMaXRlcmFsXVxyXG4gICAgcHVibGljIGNsYXNzIEJ1dHRvblBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDb21tb24uQ2xhc3NTZWxlY3RvcltdIENsYXNzZXMgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIERpc2FibGVkIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEljb24geyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBJY29uUG9zaXRvbnMgSWNvblBvc2l0aW9uIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIExhYmVsIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBTaG93TGFiZWwgeyBzZXQ7IGdldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqZWN0IFRvSnNPYmplY3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGpPYmogPSB0aGlzLlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihDbGFzc2VzKSkgak9iai5jbGFzc2VzID0gQ2xhc3Nlcy5Ub0pzRHluYW1pYygpO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihJY29uUG9zaXRpb24pKSBqT2JqLmljb25Qb3NpdGlvbiA9IEljb25Qb3NpdGlvbi5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICByZXR1cm4gak9iajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSS5XaWRnZXRzXHJcbntcclxuICAgIHB1YmxpYyAgY2xhc3MgQ2hlY2tib3hyYWRpb1BhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDb21tb24uQ2xhc3NTZWxlY3RvcltdIENsYXNzZXMgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIERpc2FibGVkIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEljb24geyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTGFiZWwgeyBzZXQ7IGdldDsgfVxyXG5cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgb2JqZWN0IFRvSnNPYmplY3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG9EeW5hbWljKCk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLmpRdWVyeVVJLldpZGdldHNcclxue1xyXG4gICAgW09iamVjdExpdGVyYWxdXHJcbiAgICBwdWJsaWMgY2xhc3MgRGlhbG9nUGFyYW1ldGVyXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sNS5Ob2RlIEFwcGVuZFRvIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBBdXRvT3BlbiB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIERpYWxvZ0J1dHRvbltdIEJ1dHRvbnMgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ2xhc3NlcyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgQ2xvc2VPbkVzY2FwZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDbG9zZVRleHQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRGlhbG9nQ2xhc3MgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIERyYWdnYWJsZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBIZWlnaHQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIC8vcHVibGljIG9iamVjdCBIaWRlIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IE1heEhlaWdodCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBNYXhXaWRodCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBNaW5IZWlnaHQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWluV2lkdGggeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIE1vZGFsIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQ29tbW9uLlBvc2l0aW9uIFBvc2l0aW9uIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZXNpemFibGUgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIC8vcHVibGljIG9iamVjdCBTaG93IHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFRpdGxlIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoIHsgc2V0OyBnZXQ7IH1cclxuXHJcblxyXG4gICAgICAgIGludGVybmFsIG9iamVjdCBUb0pzT2JqZWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBqT2JqID0gdGhpcy5Ub0R5bmFtaWMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChBcHBlbmRUbyAhPSBudWxsKSBqT2JqW1wiYXBwZW5kVG9cIl0gPSBuZXcgalF1ZXJ5Mi5qUXVlcnkoQXBwZW5kVG8pO1xyXG5cclxuICAgICAgICAgICAgaWYgKEJ1dHRvbnMgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bnMgPSBuZXcgb2JqZWN0W0J1dHRvbnMuTGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgYnRucy5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnRuID0gbmV3IG9iamVjdCgpLlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi50ZXh0ID0gQnV0dG9uc1tpXS5UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5pY29uID0gQnV0dG9uc1tpXS5JY29uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGljayA9IEJ1dHRvbnNbaV0uQ2xpY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuc1tpXSA9IGJ0bjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpPYmpbXCJidXR0b25zXCJdID0gYnRucy5Ub0R5bmFtaWMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFBvc2l0aW9uICE9IG51bGwpIGpPYmpbXCJwb3NpdGlvblwiXSA9IFBvc2l0aW9uLlRvSnNPYmplY3QoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBqT2JqO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAvKiAgcHVibGljIG9iamVjdCBUb0pzT2JqZWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0UGFyYW1ldGVyID0gbmV3IERpYWxvZ1BhcmFtZXRlcigpO1xyXG4gICAgICAgICAgICB2YXIgc2VuZGVkUGFyYW1ldGVyID0gbmV3IG9iamVjdCgpLlRvRHluYW1pYygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKEFwcGVuZFRvICE9IGRlZmF1bHRQYXJhbWV0ZXIuQXBwZW5kVG8pIHNlbmRlZFBhcmFtZXRlcltcImFwcGVuZFRvXCJdID0gbmV3IGpRdWVyeTIualF1ZXJ5KEFwcGVuZFRvKTtcclxuICAgICAgICAgICAgaWYgKEF1dG9PcGVuICE9IGRlZmF1bHRQYXJhbWV0ZXIuQXV0b09wZW4pIHNlbmRlZFBhcmFtZXRlcltcImF1dG9PcGVuXCJdID0gQXV0b09wZW47XHJcbiAgICAgICAgICAgIGlmIChCdXR0b25zICE9IGRlZmF1bHRQYXJhbWV0ZXIuQnV0dG9ucylcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBidG5zID0gbmV3IG9iamVjdFtCdXR0b25zLkxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGJ0bnMuTGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ0biA9IG5ldyBvYmplY3QoKS5Ub0R5bmFtaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICBidG4udGV4dCA9IEJ1dHRvbnNbaV0uVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBidG4uaWNvbiA9IEJ1dHRvbnNbaV0uSWNvbjtcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2sgPSBCdXR0b25zW2ldLkNsaWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bnNbaV0gPSBidG47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZW5kZWRQYXJhbWV0ZXJbXCJidXR0b25zXCJdID0gYnRucy5Ub0R5bmFtaWMoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChDbGFzc2VzICE9IGRlZmF1bHRQYXJhbWV0ZXIuQ2xhc3Nlcykgc2VuZGVkUGFyYW1ldGVyW1wiY2xhc3Nlc1wiXSA9IENsYXNzZXM7XHJcbiAgICAgICAgICAgIGlmIChDbG9zZU9uRXNjYXBlICE9IGRlZmF1bHRQYXJhbWV0ZXIuQ2xvc2VPbkVzY2FwZSkgc2VuZGVkUGFyYW1ldGVyW1wiY2xvc2VPbkVzY2FwZVwiXSA9IENsb3NlT25Fc2NhcGU7XHJcbiAgICAgICAgICAgIGlmIChDbG9zZVRleHQgIT0gZGVmYXVsdFBhcmFtZXRlci5DbG9zZVRleHQpIHNlbmRlZFBhcmFtZXRlcltcImNsb3NlVGV4dFwiXSA9IENsb3NlVGV4dDtcclxuICAgICAgICAgICAgaWYgKERpYWxvZ0NsYXNzICE9IGRlZmF1bHRQYXJhbWV0ZXIuRGlhbG9nQ2xhc3MpIHNlbmRlZFBhcmFtZXRlcltcImRpYWxvZ0NsYXNzXCJdID0gRGlhbG9nQ2xhc3M7XHJcbiAgICAgICAgICAgIGlmIChEcmFnZ2FibGUgIT0gZGVmYXVsdFBhcmFtZXRlci5EcmFnZ2FibGUpIHNlbmRlZFBhcmFtZXRlcltcImRyYWdnYWJsZVwiXSA9IERyYWdnYWJsZTtcclxuICAgICAgICAgICAgaWYgKEhlaWdodCAhPSBkZWZhdWx0UGFyYW1ldGVyLkhlaWdodCkgc2VuZGVkUGFyYW1ldGVyW1wiaGVpZ2h0XCJdID0gSGVpZ2h0O1xyXG4gICAgICAgICAgICBpZiAoTWF4SGVpZ2h0ICE9IGRlZmF1bHRQYXJhbWV0ZXIuTWF4SGVpZ2h0KSBzZW5kZWRQYXJhbWV0ZXJbXCJtYXhIZWlnaHRcIl0gPSBNYXhIZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChNYXhXaWRodCAhPSBkZWZhdWx0UGFyYW1ldGVyLk1heFdpZGh0KSBzZW5kZWRQYXJhbWV0ZXJbXCJtYXhXaWRodFwiXSA9IE1heFdpZGh0O1xyXG4gICAgICAgICAgICBpZiAoTWluSGVpZ2h0ICE9IGRlZmF1bHRQYXJhbWV0ZXIuTWluSGVpZ2h0KSBzZW5kZWRQYXJhbWV0ZXJbXCJtaW5IZWlnaHRcIl0gPSBNaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChNaW5XaWR0aCAhPSBkZWZhdWx0UGFyYW1ldGVyLk1pbldpZHRoKSBzZW5kZWRQYXJhbWV0ZXJbXCJtaW5XaWR0aFwiXSA9IE1pbldpZHRoO1xyXG4gICAgICAgICAgICBpZiAoTW9kYWwgIT0gZGVmYXVsdFBhcmFtZXRlci5Nb2RhbCkgc2VuZGVkUGFyYW1ldGVyW1wibW9kYWxcIl0gPSBNb2RhbDtcclxuICAgICAgICAgICAgaWYgKFBvc2l0aW9uICE9IGRlZmF1bHRQYXJhbWV0ZXIuUG9zaXRpb24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbmRlZFBhcmFtZXRlcltcInBvc2l0aW9uXCJdID0gbmV3IG9iamVjdCgpLlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICAgICAgc2VuZGVkUGFyYW1ldGVyW1wicG9zaXRpb25cIl1bXCJteVwiXSA9IFBvc2l0aW9uLk15LlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBzZW5kZWRQYXJhbWV0ZXJbXCJwb3NpdGlvblwiXVtcImF0XCJdID0gUG9zaXRpb24uQXQuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChQb3NpdGlvbi5PZiAhPSBudWxsKSBzZW5kZWRQYXJhbWV0ZXJbXCJwb3NpdGlvblwiXVtcImF0XCJdID0gbmV3IGpRdWVyeTIualF1ZXJ5KFBvc2l0aW9uLk9mKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoUmVzaXphYmxlICE9IGRlZmF1bHRQYXJhbWV0ZXIuUmVzaXphYmxlKSBzZW5kZWRQYXJhbWV0ZXJbXCJyZXNpemFibGVcIl0gPSBSZXNpemFibGU7XHJcbiAgICAgICAgICAgIGlmIChUaXRsZSAhPSBkZWZhdWx0UGFyYW1ldGVyLlRpdGxlKSBzZW5kZWRQYXJhbWV0ZXJbXCJ0aXRsZVwiXSA9IFRpdGxlO1xyXG4gICAgICAgICAgICBpZiAoV2lkdGggIT0gZGVmYXVsdFBhcmFtZXRlci5XaWR0aCkgc2VuZGVkUGFyYW1ldGVyW1wid2lkdGhcIl0gPSBXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZW5kZWRQYXJhbWV0ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UualF1ZXJ5VUkuV2lkZ2V0c1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEV4dGVuc2lvbnNcclxuICAgIHtcclxuICAgICAgICAjcmVnaW9uIGF1dG9jb21wbGV0ZXRcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgQXV0b2NvbXBsZXRlKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxJbnB1dEVsZW1lbnQgaW5wdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkoaW5wdXQpLlRvRHluYW1pYygpLmF1dG9jb21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgQXV0b2NvbXBsZXRlKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxJbnB1dEVsZW1lbnQgaW5wdXQsIEF1dG9jb21wbGV0ZVBhcmFtZXRlciBwYXJhbXRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShpbnB1dCkuVG9EeW5hbWljKCkuYXV0b2NvbXBsZXRlKHBhcmFtdGVyLlRvSnNPYmplY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBBdXRvY29tcGxldGVDbG9zZSh0aGlzIEJyaWRnZS5IdG1sNS5Ob2RlIG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuYXV0b2NvbXBsZXRlKFwiY2xvc2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBBdXRvY29tcGxldGVEZXN0cm95KHRoaXMgQnJpZGdlLkh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5hdXRvY29tcGxldGUoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgQXV0b2NvbXBsZXRlRGlzYWJsZSh0aGlzIEJyaWRnZS5IdG1sNS5Ob2RlIG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmF1dG9jb21wbGV0ZShcImRpc2FibGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBBdXRvY29tcGxldGVFbmFibGUodGhpcyBCcmlkZ2UuSHRtbDUuTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5hdXRvY29tcGxldGUoXCJlbmFibGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgI3JlZ2lvbiBidXR0b25cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgQnV0dG9uKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxCdXR0b25FbGVtZW50IGJ1dHRvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShidXR0b24pLlRvRHluYW1pYygpLmJ1dHRvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEJ1dHRvbih0aGlzIEJyaWRnZS5IdG1sNS5IVE1MQnV0dG9uRWxlbWVudCBidXR0b24sIEJ1dHRvblBhcmFtZXRlciBwYXJhbWV0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkoYnV0dG9uKS5Ub0R5bmFtaWMoKS5idXR0b24ocGFyYW1ldGVyLlRvSnNPYmplY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBCdXR0b25EZXN0cm95KHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxCdXR0b25FbGVtZW50IGJ1dHRvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShidXR0b24pLlRvRHluYW1pYygpLmJ1dHRvbihcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBCdXR0b25EaXNhYmxlKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxCdXR0b25FbGVtZW50IGJ1dHRvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShidXR0b24pLlRvRHluYW1pYygpLmJ1dHRvbihcImRpc2FibGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBCdXR0b25FbmFibGUodGhpcyBCcmlkZ2UuSHRtbDUuSFRNTEJ1dHRvbkVsZW1lbnQgYnV0dG9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KGJ1dHRvbikuVG9EeW5hbWljKCkuYnV0dG9uKFwiZW5hYmxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBEYXRlcGlja2VyKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxJbnB1dEVsZW1lbnQgaW5wdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkoaW5wdXQpLlRvRHluYW1pYygpLmRhdGVwaWNrZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICNyZWdpb24gZGlhbG9nXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIERpYWxvZyh0aGlzIEJyaWRnZS5IdG1sNS5IVE1MRGl2RWxlbWVudCBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmRpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgRGlhbG9nKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxEaXZFbGVtZW50IG5vZGUsIERpYWxvZ1BhcmFtZXRlciBwYXJhbWV0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmRpYWxvZyhwYXJhbWV0ZXIuVG9Kc09iamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIERpYWxvZyh0aGlzIEJyaWRnZS5IdG1sNS5IVE1MRGl2RWxlbWVudCBub2RlLCBkeW5hbWljIHBhcmFtZXRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5kaWFsb2cocGFyYW1ldGVyKTtcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBEaWFsb2dDbG9zZSh0aGlzIEJyaWRnZS5IdG1sNS5IVE1MRGl2RWxlbWVudCBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmRpYWxvZyhcImNsb3NlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgRGlhbG9nRGVzdHJveSh0aGlzIEJyaWRnZS5IdG1sNS5IVE1MRGl2RWxlbWVudCBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmRpYWxvZyhcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCAgRGlhbG9nSXNPcGVuKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxEaXZFbGVtZW50IG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmRpYWxvZyhcImlzT3BlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIERpYWxvZ01vdmVUb1RvcCh0aGlzIEJyaWRnZS5IdG1sNS5IVE1MRGl2RWxlbWVudCBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmRpYWxvZyhcIm1vdmVUb1RvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIERpYWxvZ0V2ZW50UmVzaXplKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxEaXZFbGVtZW50IG5vZGUsIEFjdGlvbjxqUXVlcnkyLmpRdWVyeUV2ZW50LCBEaWFsb2dSZXNpemVFdmVudD4gZXYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuZGlhbG9nKG5ldyB7IHJlc2l6ZSA9IGV2IH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICAjcmVnaW9uIGFjY29yZGlvbiBcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEFjY29yZGlvbiAodGhpcyBCcmlkZ2UuSHRtbDUuTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmFjY29yZGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEFjY29yZGlvbiAodGhpcyBCcmlkZ2UuSHRtbDUuTm9kZSBub2RlLCBBY2NvcmRpb25QYXJhbWV0ZXIgcGFyYW1ldGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmFjY29yZGlvbihwYXJhbWV0ZXIuVG9Kc09iamVjdCgpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG5cclxuXHJcbiAgICAgICAgI3JlZ2lvbiBjaGVja2JveHJhZGlvXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBDaGVja2JveHJhZGlvKHRoaXMgQnJpZGdlLkh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5jaGVja2JveHJhZGlvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBDaGVja2JveHJhZGlvKHRoaXMgQnJpZGdlLkh0bWw1Lk5vZGUgbm9kZSwgQ2hlY2tib3hyYWRpb1BhcmFtZXRlciBwYXJhbWV0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuY2hlY2tib3hyYWRpbyhwYXJhbWV0ZXIuVG9Kc09iamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIENoZWNrYm94cmFkaW9EZXN0cm95KHRoaXMgQnJpZGdlLkh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5jaGVja2JveHJhZGlvKFwiZGVzdHJveVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIENoZWNrYm94cmFkaW9EaXNhYmxlKHRoaXMgQnJpZGdlLkh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5jaGVja2JveHJhZGlvKFwiZGlzYWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIENoZWNrYm94cmFkaW9FbmFibGUodGhpcyBCcmlkZ2UuSHRtbDUuTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLmNoZWNrYm94cmFkaW8oXCJlbmFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuXHJcbiAgICAgICAgI3JlZ2lvbiB0YWJzXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRhYnMgKHRoaXMgSHRtbDUuTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLnRhYnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRhYnModGhpcyBIdG1sNS5Ob2RlIG5vZGUsIFRhYnNQYXJhbWV0ZXIgcGFyYW1ldGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLnRhYnMocGFyYW1ldGVyLlRvSnNPYmplY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUYWJzRGVzdHJveSh0aGlzIEh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS50YWJzKFwiZGVzdHJveVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRhYnNFbmFibGUodGhpcyBIdG1sNS5Ob2RlIG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkudGFicyhcImVuYWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRhYnNEaXNhYmxlKHRoaXMgSHRtbDUuTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLnRhYnMoXCJkaXNhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuXHJcbiAgICAgICAgI3JlZ2lvbiBzbGlkZXJcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2xpZGVyKHRoaXMgSHRtbDUuTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLnNsaWRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFNsaWRlcih0aGlzIEh0bWw1Lk5vZGUgbm9kZSwgU2xpZGVyUGFyYW10ZXIgcGFyYW10ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuc2xpZGVyKHBhcmFtdGVyLlRvSnNPYmplY3QoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2xpZGVyRGVzdHJveSh0aGlzIEh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5zbGlkZXIoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFNsaWRlckVuYWJsZSh0aGlzIEh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5zbGlkZXIoXCJlbmFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2xpZGVyRGlzYWJsZSh0aGlzIEh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5zbGlkZXIoXCJkaXNhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFNsaWRlclNsaWRlKHRoaXMgSHRtbDUuTm9kZSBub2RlLCBBY3Rpb248SnF1ZXJ5RXZlbnRzLCBTbGlkZXJFdmVudD4gc2xpZGVpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuc2xpZGVyKFxyXG4gICAgICAgICAgICAgICAgIG5ldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNsaWRlID0gbmV3IEFjdGlvbjxvYmplY3QsIG9iamVjdD4oKG8xLCBvMikgPT5cclxuICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8xZCA9IG8xLlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8yZCA9IG8yLlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVpbmcoKEpxdWVyeUV2ZW50cylFbnVtLlBhcnNlKHR5cGVvZihKcXVlcnlFdmVudHMpLCBvMWQudHlwZSwgdHJ1ZSksIG5ldyBTbGlkZXJFdmVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlID0gbm9kZSwgLy8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlSW5kZXggPSBvMmQuaGFuZGxlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUgPSBTY3JpcHQuSXNOYU4obzJkLnZhbHVlKSA/ICAtMSA6IG8yZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZXMgPSBTY3JpcHQuSXNOYU4obzJkLnZhbHVlcykgPyBudWxsIDogbzJkLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTbGlkZXJDaGFuZ2UodGhpcyBIdG1sNS5Ob2RlIG5vZGUsIEFjdGlvbjxKcXVlcnlFdmVudHMsIFNsaWRlckV2ZW50PiBjaGFuZ2VkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLnNsaWRlcihcclxuICAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9IG5ldyBBY3Rpb248b2JqZWN0LCBvYmplY3Q+KChvMSwgbzIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvMmQgPSBvMi5Ub0R5bmFtaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQoKEpxdWVyeUV2ZW50cylFbnVtLlBhcnNlKHR5cGVvZihKcXVlcnlFdmVudHMpLCBvMS5Ub1N0cmluZygpLCB0cnVlKSwgbmV3IFNsaWRlckV2ZW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGUgPSBub2RlLCAvLz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVJbmRleCA9IG8yZC5oYW5kbGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZSA9IFNjcmlwdC5Jc05hTihvMmQudmFsdWUpID8gLTEgOiBvMmQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWVzID0gU2NyaXB0LklzTmFOKG8yZC52YWx1ZXMpID8gbnVsbCA6IG8yZC52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuXHJcbiAgICAgICAgI3JlZ2lvbiBQcm9ncmVzc2JhclxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBQcm9ncmVzc2Jhcih0aGlzIEh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5wcm9ncmVzc2JhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgUHJvZ3Jlc3NiYXIodGhpcyBIdG1sNS5Ob2RlIG5vZGUsIFByb2dyZXNzYmFyUGFyYW10ZXIgcGFyYW1ldGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLnByb2dyZXNzYmFyKHBhcmFtZXRlci5Ub0R5bmFtaWMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBQcm9ncmVzc2JhckRlc3Ryb3kodGhpcyBIdG1sNS5Ob2RlIG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkucHJvZ3Jlc3NiYXIoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgUHJvZ3Jlc3NiYXJFbmFibGUodGhpcyBIdG1sNS5Ob2RlIG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkucHJvZ3Jlc3NiYXIoXCJlbmFibGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBQcm9ncmVzc2JhckRpc2FibGUodGhpcyBIdG1sNS5Ob2RlIG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkucHJvZ3Jlc3NiYXIoXCJkaXNhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGludCBQcm9ncmVzc2JhclZhbHVlKHRoaXMgSHRtbDUuTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5wcm9ncmVzc2JhcihcInZhbHVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgUHJvZ3Jlc3NiYXJWYWx1ZSh0aGlzIEh0bWw1Lk5vZGUgbm9kZSwgaW50IHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLnByb2dyZXNzYmFyKFwidmFsdWVcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNlbmRyZWdpb25cclxuXHJcblxyXG4gICAgICAgICNyZWdpb24gU2VsZWN0bWVudVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFNlbGVjdG1lbnUodGhpcyBCcmlkZ2UuSHRtbDUuSFRNTFNlbGVjdEVsZW1lbnQgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5zZWxlY3RtZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTZWxlY3RtZW51KHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxTZWxlY3RFbGVtZW50IG5vZGUsIFNlbGVjdG1lbnVQYXJhbWV0ZXIgcGFyYW10ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuc2VsZWN0bWVudShwYXJhbXRlci5Ub0pzT2JqZWN0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2VsZWN0bWVudUNsb3NlKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxTZWxlY3RFbGVtZW50IG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkuc2VsZWN0bWVudShcImNsb3NlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2VsZWN0bWVudURlc3Ryb3kodGhpcyBCcmlkZ2UuSHRtbDUuSFRNTFNlbGVjdEVsZW1lbnQgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5zZWxlY3RtZW51KFwiZGVzdHJveVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIFNlbGVjdG1lbnVEaXNhYmxlKHRoaXMgQnJpZGdlLkh0bWw1LkhUTUxTZWxlY3RFbGVtZW50IG5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLnNlbGVjdG1lbnUoXCJkaXNhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgU2VsZWN0bWVudUVuYWJsZSh0aGlzIEJyaWRnZS5IdG1sNS5IVE1MU2VsZWN0RWxlbWVudCBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS5zZWxlY3RtZW51KFwiZW5hYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG5cclxuICAgICAgICAjcmVnaW9uIE1lbnVcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1lbnUodGhpcyBCcmlkZ2UuSHRtbDUuTm9kZSBub2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IGpRdWVyeTIualF1ZXJ5KG5vZGUpLlRvRHluYW1pYygpLm1lbnUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNZW51KHRoaXMgQnJpZGdlLkh0bWw1Lk5vZGUgbm9kZSwgTWVudVBhcmFtZXRlciBwYXJhbWV0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkubWVudShwYXJhbWV0ZXIuVG9Kc09iamVjdCgpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG5cclxuICAgICAgICAjcmVnaW9uIHRvb2x0aXBcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRvb2x0aXAgKHRoaXMgQnJpZGdlLkh0bWw1Lk5vZGUgbm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBqUXVlcnkyLmpRdWVyeShub2RlKS5Ub0R5bmFtaWMoKS50b29sdGlwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVG9vbHRpcCh0aGlzIEJyaWRnZS5IdG1sNS5Ob2RlIG5vZGUsIFRvb2x0aXBQYXJhbXRlciBwYXJhbWV0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgalF1ZXJ5Mi5qUXVlcnkobm9kZSkuVG9EeW5hbWljKCkudG9vbHRpcChwYXJhbWV0ZXIuVG9Kc09iamVjdCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNlbmRyZWdpb25cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSS5XaWRnZXRzXHJcbntcclxuICAgIFtPYmplY3RMaXRlcmFsXVxyXG4gICAgcHVibGljIGNsYXNzIE1lbnVQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ29tbW9uLkNsYXNzU2VsZWN0b3JbXSBDbGFzc2VzIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBEaXNhYmxlZCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIFVJSWNvbnMgSWNvbiB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBJdGVtcyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBNZW51cyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5Qb3NpdGlvbiBQb3NpdGlvbiB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBSb2xlIHsgc2V0OyBnZXQ7IH1cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqZWN0IFRvSnNPYmplY3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGpPYmogPSB0aGlzLlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihDbGFzc2VzKSkgak9iai5jbGFzc2VzID0gQ2xhc3Nlcy5Ub0pzRHluYW1pYygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTY3JpcHQuSXNOYU4oSWNvbikpIGpPYmouaWNvbiA9IEljb24uVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKCFTY3JpcHQuSXNOYU4oUG9zaXRpb24pKSBqT2JqLnBvc2l0aW9uID0gUG9zaXRpb24uVG9Kc09iamVjdCgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGpPYmo7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLmpRdWVyeVVJLldpZGdldHNcclxue1xyXG4gICAgW09iamVjdExpdGVyYWxdXHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZ3Jlc3NiYXJQYXJhbXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDb21tb24uQ2xhc3NTZWxlY3RvcltdIENsYXNzZXMgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIERpc2FibGVkIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IE1heCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBWYWx1ZSB7IHNldDsgZ2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgVG9Kc09iamVjdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgak9iaiA9IHRoaXMuVG9EeW5hbWljKCk7XHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKENsYXNzZXMpKSBqT2JqLmNsYXNzZXMgPSBDbGFzc2VzLlRvSnNEeW5hbWljKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBqT2JqO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLmpRdWVyeVVJLldpZGdldHNcclxue1xyXG4gICAgW09iamVjdExpdGVyYWxdXHJcbiAgICBwdWJsaWMgY2xhc3MgU2VsZWN0bWVudVBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBIdG1sNS5Ob2RlIEFwcGVuZFRvIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQ29tbW9uLkNsYXNzU2VsZWN0b3JbXSBDbGFzc2VzIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBEaXNhYmxlZCB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBJY29ucyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5Qb3NpdGlvbiBQb3NpdGlvbiB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBXaWR0aCB7IHNldDsgZ2V0OyB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqZWN0IFRvSnNPYmplY3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGpPYmogPSB0aGlzLlRvRHluYW1pYygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTY3JpcHQuSXNOYU4oQ2xhc3NlcykpIGpPYmouY2xhc3NlcyA9IENsYXNzZXMuVG9Kc0R5bmFtaWMoKTtcclxuICAgICAgICAgICAgaWYgKEFwcGVuZFRvICE9IG51bGwpIGpPYmouYXBwZW5kVG8gPSBuZXcgalF1ZXJ5Mi5qUXVlcnkoQXBwZW5kVG8pO1xyXG4gICAgICAgICAgICBpZiAoUG9zaXRpb24gIT0gbnVsbCkgeyBqT2JqLnBvc2l0aW9uID0gUG9zaXRpb24uVG9Kc09iamVjdCgpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gak9iajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5qUXVlcnlVSS5XaWRnZXRzXHJcbntcclxuICAgIFtPYmplY3RMaXRlcmFsXVxyXG4gICAgcHVibGljIGNsYXNzIFNsaWRlclBhcmFtdGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5BbmltYXRpb24gQW5pbWF0ZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5DbGFzc1NlbGVjdG9yW10gQ2xhc3NlcyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEaXNhYmxlcyB0aGUgc2xpZGVyIGlmIHNldCB0byB0cnVlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGJvb2wgRGlzYWJsZWQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIHNsaWRlci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWF4IHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSBzbGlkZXIuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgaW50IE1pbiB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNsaWRlciBoYW5kbGVzIG1vdmUgaG9yaXpvbnRhbGx5IChtaW4gb24gbGVmdCwgbWF4IG9uIHJpZ2h0KSBvciB2ZXJ0aWNhbGx5IChtaW4gb24gYm90dG9tLCBtYXggb24gdG9wKS4gUG9zc2libGUgdmFsdWVzOiBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIE9yaWVudGF0aW9ucyBPcmllbnRhdGlvbiB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBXaGV0aGVyIHRoZSBzbGlkZXIgcmVwcmVzZW50cyBhIHJhbmdlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIFJhbmdlcyBSYW5nZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXRlcm1pbmVzIHRoZSBzaXplIG9yIGFtb3VudCBvZiBlYWNoIGludGVydmFsIG9yIHN0ZXAgdGhlIHNsaWRlciB0YWtlcyBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heC4gVGhlIGZ1bGwgc3BlY2lmaWVkIHZhbHVlIHJhbmdlIG9mIHRoZSBzbGlkZXIgKG1heCAtIG1pbikgc2hvdWxkIGJlIGV2ZW5seSBkaXZpc2libGUgYnkgdGhlIHN0ZXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgaW50IFN0ZXAgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGV0ZXJtaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciwgaWYgdGhlcmUncyBvbmx5IG9uZSBoYW5kbGUuIElmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgaGFuZGxlLCBkZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgaGFuZGxlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGludCBWYWx1ZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IG11bHRpcGxlIGhhbmRsZXMuIElmIHRoZSByYW5nZSBvcHRpb24gaXMgc2V0IHRvIHRydWUsIHRoZSBsZW5ndGggb2YgdmFsdWVzIHNob3VsZCBiZSAyLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGludFtdIFZhbHVlcyB7IHNldDsgZ2V0OyB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqZWN0IFRvSnNPYmplY3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGpPYmogPSB0aGlzLlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihBbmltYXRlKSkgak9iai5hbmltYXRlID0gQW5pbWF0ZS5Ub0pzT2JqZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKENsYXNzZXMpKSBqT2JqLmNsYXNzZXMgPSBDbGFzc2VzLlRvSnNEeW5hbWljKCk7XHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKE9yaWVudGF0aW9uKSkgak9iai5vcmllbnRhdGlvbiA9IE9yaWVudGF0aW9uLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKFJhbmdlKSkgak9iai5yYW5nZSA9IFJhbmdlLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBqT2JqO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLmpRdWVyeVVJLldpZGdldHNcclxue1xyXG4gICAgW09iamVjdExpdGVyYWxdXHJcbiAgICBwdWJsaWMgY2xhc3MgVGFic1BhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBib29sIEFjdGl2ZSB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5DbGFzc1NlbGVjdG9yW10gQ2xhc3NlcyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgQ29sbGFwc2libGUgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIERpc2FibGVkIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgSnF1ZXJ5RXZlbnRzIEV2ZW50IHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgSGVpZ2h0U3R5bGVzIEhlaWdodFN0eWxlIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQ29tbW9uLkFuaW1hdGlvbiBIaWRlIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQ29tbW9uLkFuaW1hdGlvbiBTaG93IHsgc2V0OyBnZXQ7IH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgVG9Kc09iamVjdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgak9iaiA9IHRoaXMuVG9EeW5hbWljKCk7XHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKENsYXNzZXMpKSBqT2JqLmNsYXNzZXMgPSBDbGFzc2VzLlRvSnNEeW5hbWljKCk7XHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKEV2ZW50KSkgak9ialtcImV2ZW50XCJdID0gRXZlbnQuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKCFTY3JpcHQuSXNOYU4oSGVpZ2h0U3R5bGUpKSBqT2JqLmhlaWdodFN0eWxlID0gSGVpZ2h0U3R5bGUuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKCFTY3JpcHQuSXNOYU4oSGlkZSkpIGpPYmouaGlkZSA9IEhpZGUuVG9Kc09iamVjdCgpO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihTaG93KSkgak9iai5zaG93ID0gU2hvdy5Ub0pzT2JqZWN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBqT2JqO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLmpRdWVyeVVJLldpZGdldHNcclxue1xyXG4gICAgW09iamVjdExpdGVyYWxdXHJcbiAgICBwdWJsaWMgY2xhc3MgVG9vbHRpcFBhcmFtdGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIENvbW1vbi5DbGFzc1NlbGVjdG9yW10gQ2xhc3NlcyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIEJyaWRnZS5IdG1sNS5Ob2RlIENvbnRlbnQgeyBzZXQ7IGdldDsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIERpc2FibGVkIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQ29tbW9uLkFuaW1hdGlvbiBIaWRlIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEl0bWVzIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQ29tbW9uLlBvc2l0aW9uIFBvc2l0aW9uIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQ29tbW9uLkFuaW1hdGlvbiBTaG93IHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFRvb2x0aXBDbGFzcyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgVHJhY2sgeyBzZXQ7IGdldDsgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIG9iamVjdCBUb0pzT2JqZWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBqT2JqID0gdGhpcy5Ub0R5bmFtaWMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKENsYXNzZXMpKSBqT2JqLmNsYXNzZXMgPSBDbGFzc2VzLlRvSnNEeW5hbWljKCk7XHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKENvbnRlbnQpKSBqT2JqLmNvbnRlbnQgPSBuZXcgalF1ZXJ5Mi5qUXVlcnkoQ29udGVudCk7XHJcbiAgICAgICAgICAgIGlmICghU2NyaXB0LklzTmFOKEhpZGUpKSBqT2JqLmhpZGUgPSBIaWRlLlRvSnNPYmplY3QoKTtcclxuICAgICAgICAgICAgaWYgKCFTY3JpcHQuSXNOYU4oUG9zaXRpb24pKSBqT2JqLnBvc2l0aW9uID0gUG9zaXRpb24uVG9Kc09iamVjdCgpO1xyXG4gICAgICAgICAgICBpZiAoIVNjcmlwdC5Jc05hTihTaG93KSkgak9iai5zaG93ID0gU2hvdy5Ub0pzT2JqZWN0KCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gak9iajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
