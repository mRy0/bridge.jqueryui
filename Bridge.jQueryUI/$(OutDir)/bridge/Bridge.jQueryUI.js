/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Bridge.jQueryUI", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.jQueryUI.AnimationSpeeds", {
        $kind: "enum",
        statics: {
            Fast: 200,
            Slow: 600
        }
    });

    Bridge.define("Bridge.jQueryUI.Axis", {
        $kind: "enum",
        statics: {
            x: 1,
            y: 2,
            both: 3
        }
    });

    Bridge.define("Bridge.jQueryUI.Collisions", {
        $kind: "enum",
        statics: {
            flip: 0,
            fit: 1,
            "fit flip": 2,
            "fit none": 3
        }
    });

    Bridge.define("Bridge.jQueryUI.Common.Animation", {
        $literal: true,
        ctor: function () {
            var $this = {};
            $this.$getType = function() { return Bridge.jQueryUI.Common.Animation; };
            (function(){
                this.disabled = false;
                this.speed = 0;
                this.easing = 0;
                this.delay = 0;
                this.duration = 0;
                this.effect = 0;
                this.disabled = false;
            }).call($this);
            return $this;
        },
        toJsObject: function () {
            var $t, $t1;
            if (this.disabled) {
                return (false);
            }

            var obj = {  };
            if (!isNaN(this.speed)) {
                obj.speed = this.speed;
            }
            if (!isNaN(this.easing)) {
                obj.easing = ($t=this.easing, System.Enum.toString(Bridge.jQueryUI.Easings, $t));
            }
            if (!isNaN(this.delay)) {
                obj.delay = this.delay;
            }
            if (!isNaN(this.duration)) {
                obj.duration = this.duration;
            }
            if (!isNaN(this.effect)) {
                obj.speed = ($t1=this.effect, System.Enum.toString(Bridge.jQueryUI.EffectTypes, $t1));
            }

            return obj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Common.ClassSelector", {
        $literal: true,
        toDynamic: function () {
            return new $asm.$AnonymousType$1(this.customClassName);
        }
    });

    Bridge.define("$AnonymousType$1", $asm, {
        $kind: "anonymous",
        ctor: function (uIClassName) {
            this.uIClassName = uIClassName;
        },
        getUIClassName : function () {
            return this.uIClassName;
        },
        equals: function (o) {
            if (!Bridge.is(o, $asm.$AnonymousType$1)) {
                return false;
            }
            return Bridge.equals(this.uIClassName, o.uIClassName);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7550196186, this.uIClassName]);
            return h;
        },
        toJSON: function () {
            return {
                uIClassName : this.uIClassName
            };
        }
    });

    Bridge.define("Bridge.jQueryUI.Common.CursorPostition", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Common.Grid", {
        config: {
            properties: {
                X: 0,
                Y: 0
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Common.Position", {
        $literal: true,
        ctor: function () {
            var $this = {};
            $this.$getType = function() { return Bridge.jQueryUI.Common.Position; };
            (function(){
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
        },
        toJsObject: function () {
            var $t, $t1, $t2;
            var jObj = {  };
            jObj.my = ($t=this.my, System.Enum.toString(Bridge.jQueryUI.WindowPositions, $t));
            jObj.at = ($t1=this.at, System.Enum.toString(Bridge.jQueryUI.WindowPositions, $t1));
            jObj.collision = ($t2=this.collision, System.Enum.toString(Bridge.jQueryUI.Collisions, $t2));
            if (this.of != null) {
                jObj.of = $(this.of);
            }
            ;
            return jObj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Easings", {
        $kind: "enum",
        statics: {
            linear: 1,
            swing: 2
        }
    });

    Bridge.define("Bridge.jQueryUI.Effects.EffectPrameter", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Effects.Extensions", {
        statics: {
            effect: function (node, effect, options, duration, complete) {
                if (options === void 0) { options = null; }
                if (duration === void 0) { duration = 400; }
                if (complete === void 0) { complete = null; }
                var name = System.Enum.toString(Bridge.jQueryUI.EffectTypes, effect);
                $(node).effect(name);

            }
        }
    });

    Bridge.define("Bridge.jQueryUI.EffectTypes", {
        $kind: "enum",
        statics: {
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
    });

    Bridge.define("Bridge.jQueryUI.HeightStyles", {
        $kind: "enum",
        statics: {
            auto: 0,
            fill: 1,
            content: 2
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
    Bridge.define("Bridge.jQueryUI.Helper");

    Bridge.define("Bridge.jQueryUI.IconPositons", {
        $kind: "enum",
        statics: {
            beginning: 0,
            end: 1,
            top: 2,
            bottom: 3
        }
    });

    Bridge.define("Bridge.jQueryUI.Interactions.DraggableParameter", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Interactions.Extensions", {
        statics: {
            resizable: function (node, parameter) {
                if (parameter === void 0) { parameter = null; }
                $(node).resizable();
            },
            draggable: function (node) {
                $(node).draggable();
            },
            draggable$1: function (node, parameter) {
                var $t, $t1;
                //todo make me better           
                var pramDefault = Bridge.jQueryUI.Interactions.DraggableParameter.ctor({  });

                var jParam = new $asm.$AnonymousType$2();
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
                    jParam.cursor = ($t=parameter.cursor, System.Enum.toString(String, $t));
                }
                if (!Bridge.referenceEquals(parameter.cursorAt, pramDefault.cursorAt)) {
                    jParam.cursorAt = new $asm.$AnonymousType$3(parameter.cursorAt.left, parameter.cursorAt.right, parameter.cursorAt.top, parameter.cursorAt.bottom);
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
                    jParam.grid = new $asm.$AnonymousType$4(parameter.grid.getX(), parameter.grid.getY());
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
                    jParam.snapMode = ($t1=parameter.snapMode, System.Enum.toString(Bridge.jQueryUI.SnapModes, $t1));
                }
                if (parameter.snapTolerance !== pramDefault.snapTolerance) {
                    jParam.snapTolerance = parameter.snapTolerance;
                }
                if (!Bridge.referenceEquals(parameter.stack, pramDefault.stack)) {
                    jParam.stack = parameter.stack;
                }
                if (parameter.zIndex !== pramDefault.zIndex) {
                    jParam["zIndex "] = parameter.zIndex;
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
    });

    Bridge.define("$AnonymousType$2", $asm, {
        $kind: "anonymous",
        ctor: function () {
        },
        equals: function (o) {
            if (!Bridge.is(o, $asm.$AnonymousType$2)) {
                return false;
            }
            return ;
        },
        getHashCode: function () {
            var h = Bridge.addHash([7550196187]);
            return h;
        },
        toJSON: function () {
            return {

            };
        }
    });

    Bridge.define("$AnonymousType$3", $asm, {
        $kind: "anonymous",
        ctor: function (left, right, top, bottom) {
            this.left = left;
            this.right = right;
            this.top = top;
            this.bottom = bottom;
        },
        getleft : function () {
            return this.left;
        },
        getright : function () {
            return this.right;
        },
        gettop : function () {
            return this.top;
        },
        getbottom : function () {
            return this.bottom;
        },
        equals: function (o) {
            if (!Bridge.is(o, $asm.$AnonymousType$3)) {
                return false;
            }
            return Bridge.equals(this.left, o.left) && Bridge.equals(this.right, o.right) && Bridge.equals(this.top, o.top) && Bridge.equals(this.bottom, o.bottom);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7550196188, this.left, this.right, this.top, this.bottom]);
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
    });

    Bridge.define("$AnonymousType$4", $asm, {
        $kind: "anonymous",
        ctor: function (x, y) {
            this.x = x;
            this.y = y;
        },
        getx : function () {
            return this.x;
        },
        gety : function () {
            return this.y;
        },
        equals: function (o) {
            if (!Bridge.is(o, $asm.$AnonymousType$4)) {
                return false;
            }
            return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7550196189, this.x, this.y]);
            return h;
        },
        toJSON: function () {
            return {
                x : this.x,
                y : this.y
            };
        }
    });

    Bridge.define("Bridge.jQueryUI.Interactions.ResizeablePrameterCollection", {
        config: {
            properties: {
                Animate: false,
                AnimateDuration: 0,
                AnimateEasing: 0,
                AutoHide: false,
                Classes: null,
                Delay: 0,
                Disabled: false,
                MaxHeight: 0,
                MaxWidht: 0,
                MinHeight: 0,
                MinWidth: 0
            }
        },
        ctor: function () {
            this.$initialize();
            var test = document.createElement('div');

            this.setAnimate(false);
            this.setAnimateDuration(Bridge.jQueryUI.AnimationSpeeds.Fast);
            this.setAnimateEasing(Bridge.jQueryUI.Easings.swing);
            this.setAutoHide(false);
            this.setClasses(null);
            this.setDelay(0);
            this.setDisabled(false);
            this.setMaxHeight(-1);
            this.setMaxWidht(-1);
            this.setMinWidth(-1);
            this.setMinHeight(-1);

        }
    });

    Bridge.define("Bridge.jQueryUI.JqueryEvents", {
        $kind: "enum",
        statics: {
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
    });

    Bridge.define("Bridge.jQueryUI.Messageboxes", {
        statics: {
            highlight: function (div, title, message, icon) {
                if (icon === void 0) { icon = 123; }
                var para = document.createElement('p');

                para.appendChild(Bridge.merge(document.createElement('span'), {
                    className: System.String.concat("ui-icon ", System.Enum.toString(Bridge.jQueryUI.UIIcons, icon))
                } ));
                para.appendChild(Bridge.merge(document.createElement("strong"), {
                    textContent: title
                } ));
                para.appendChild(document.createTextNode(message));
                div.appendChild(para);
                div.classList.add("ui-state-highlight");
                div.classList.add("ui-corner-all");
            },
            error: function (div, title, message, icon) {
                if (icon === void 0) { icon = 122; }
                var para = document.createElement('p');

                para.appendChild(Bridge.merge(document.createElement('span'), {
                    className: System.String.concat("ui-icon ", System.Enum.toString(Bridge.jQueryUI.UIIcons, icon))
                } ));
                para.appendChild(Bridge.merge(document.createElement("strong"), {
                    textContent: title
                } ));
                para.appendChild(document.createTextNode(message));
                div.appendChild(para);
                div.classList.add("ui-state-error");
                div.classList.add("ui-corner-all");
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Orientations", {
        $kind: "enum",
        statics: {
            horizontal: 0,
            vertical: 1
        }
    });

    Bridge.define("Bridge.jQueryUI.Ranges", {
        $kind: "enum",
        statics: {
            none: 0,
            min: 1,
            max: 2,
            both: 3
        }
    });

    Bridge.define("Bridge.jQueryUI.SnapModes", {
        $kind: "enum",
        statics: {
            inner: 1,
            outer: 2,
            both: 3
        }
    });

    Bridge.define("Bridge.jQueryUI.Statics");

    Bridge.define("Bridge.jQueryUI.UIIcons", {
        $kind: "enum",
        statics: {
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
    });

    Bridge.define("Bridge.jQueryUI.Widgets.AccordionParameter", {
        $literal: true,
        toJsObject: function () {
            var $t, $t1;
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

            if (!isNaN(this.event)) {
                obj.event = ($t=this.event, System.Enum.toString(Bridge.jQueryUI.JqueryEvents, $t));
            }

            if (!isNaN(this.heightStyle)) {
                obj.heightStyle = ($t1=this.heightStyle, System.Enum.toString(Bridge.jQueryUI.HeightStyles, $t1));
            }

            return obj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.AutocompleteParameter", {
        $literal: true,
        toJsObject: function () {
            var jObj = this;

            if (this.appendTo != null) {
                jObj.appendTo = $(this.appendTo);
            }
            if (this.position != null) {
                jObj.position = Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position);
            }

            return jObj;

        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.AutocompleteSource", {
        $literal: true,
        ctor: function (text) {
            var $this = {};
            $this.$getType = function() { return Bridge.jQueryUI.Widgets.AutocompleteSource; };
            (function(){
                this.label = null;
                this.value = null;
                this.label = text;
                this.value = text;

            }).call($this);
            return $this;
        },
        $ctor1: function (label, value) {
            var $this = {};
            $this.$getType = function() { return Bridge.jQueryUI.Widgets.AutocompleteSource; };
            (function(){
                this.label = null;
                this.value = null;
                this.label = label;
                this.value = value;
            }).call($this);
            return $this;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.ButtonParameter", {
        $literal: true,
        toJsObject: function () {
            var $t;
            var jObj = this;
            if (!isNaN(this.iconPosition)) {
                jObj.iconPosition = ($t=this.iconPosition, System.Enum.toString(Bridge.jQueryUI.IconPositons, $t));
            }
            return jObj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.CheckboxradioParameter", {
        config: {
            properties: {
                Classes: null,
                Disabled: false,
                Icon: null,
                Label: null
            }
        },
        toJsObject: function () {
            return this;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.DatepickerParameter", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.DialogButton", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.DialogParameter", {
        $literal: true,
        toJsObject: function () {
            var jObj = this;

            if (this.appendTo != null) {
                jObj.appendTo = $(this.appendTo);
            }

            if (this.buttons != null) {
                var btns = System.Array.init(this.buttons.length, null, Object);
                for (var i = 0; i < btns.length; i = (i + 1) | 0) {
                    var btn = {  };
                    btn.text = this.buttons[i].text;
                    btn.icon = this.buttons[i].icon;
                    btn.click = this.buttons[i].click;
                    btns[i] = btn;
                }
                jObj.buttons = btns;
            }

            if (this.position != null) {
                jObj.position = Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position);
            }

            return jObj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.Extensions", {
        statics: {
            autocomplete: function (input) {
                $(input).autocomplete();
            },
            autocomplete$1: function (input, paramter) {
                $(input).autocomplete(Bridge.jQueryUI.Widgets.AutocompleteParameter.prototype.toJsObject.call(paramter));
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
                $(button).button(Bridge.jQueryUI.Widgets.ButtonParameter.prototype.toJsObject.call(parameter));
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

                $(node).dialog(Bridge.jQueryUI.Widgets.DialogParameter.prototype.toJsObject.call(parameter));
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
            accordion: function (node) {
                $(node).accordion();
            },
            accordion$1: function (node, parameter) {
                $(node).accordion(Bridge.jQueryUI.Widgets.AccordionParameter.prototype.toJsObject.call(parameter));
            },
            checkboxradio: function (node) {
                $(node).checkboxradio();
            },
            checkboxradio$1: function (node, parameter) {
                $(node).checkboxradio(parameter.toJsObject());
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
                $(node).tabs(Bridge.jQueryUI.Widgets.TabsParameter.prototype.toJsObject.call(parameter));
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
                $(node).slider(Bridge.jQueryUI.Widgets.SliderParamter.prototype.toJsObject.call(paramter));
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
                    slideing(Bridge.cast(System.Enum.parse(Bridge.jQueryUI.JqueryEvents, o1d.type, true), System.Int32), Bridge.jQueryUI.Widgets.SliderEvent.ctor({ handle: node, handleIndex: o2d.handleIndex, value: isNaN(o2d.value) ? -1 : o2d.value, values: isNaN(o2d.values) ? null : o2d.values }));
                }));
            },
            sliderChange: function (node, changed) {
                $(node).slider(new $asm.$AnonymousType$6(function (o1, o2) {
                    var o2d = o2;
                    changed(System.Nullable.getValue(Bridge.cast(System.Enum.parse(Bridge.jQueryUI.JqueryEvents, o1.toString(), true), System.Int32)), Bridge.jQueryUI.Widgets.SliderEvent.ctor({ handle: node, handleIndex: o2d.handleIndex, value: isNaN(o2d.value) ? -1 : o2d.value, values: isNaN(o2d.values) ? null : o2d.values }));
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
                $(node).selectmenu(Bridge.jQueryUI.Widgets.SelectmenuParameter.prototype.toJsObject.call(paramter));
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
                $(node).menu(Bridge.jQueryUI.Widgets.MenuParameter.prototype.toJsObject.call(parameter));
            },
            tooltip: function (node) {
                $(node).tooltip();
            },
            tooltip$1: function (node, parameter) {
                $(node).tooltip(Bridge.jQueryUI.Widgets.TooltipParamter.prototype.toJsObject.call(parameter));
            }
        }
    });

    Bridge.define("$AnonymousType$5", $asm, {
        $kind: "anonymous",
        ctor: function (slide) {
            this.slide = slide;
        },
        getslide : function () {
            return this.slide;
        },
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
    });

    Bridge.define("$AnonymousType$6", $asm, {
        $kind: "anonymous",
        ctor: function (change) {
            this.change = change;
        },
        getchange : function () {
            return this.change;
        },
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
    });

    Bridge.define("Bridge.jQueryUI.Widgets.MenuParameter", {
        $literal: true,
        toJsObject: function () {
            var $t;
            var jObj = this;

            if (!isNaN(this.icon)) {
                jObj.icon = ($t=this.icon, System.Enum.toString(Bridge.jQueryUI.UIIcons, $t));
            }
            if (!isNaN(this.position)) {
                jObj.position = Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position);
            }

            return jObj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.ProgressbarParamter", {
        $literal: true,
        toJsObject: function () {
            return this;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.SelectmenuParameter", {
        $literal: true,
        toJsObject: function () {
            var jObj = this;

            if (this.appendTo != null) {
                jObj.appendTo = $(this.appendTo);
            }
            if (this.position != null) {
                jObj.position = Bridge.jQueryUI.Common.Position.prototype.toJsObject.call(this.position);
            }

            return jObj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.SliderEvent", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.SliderParamter", {
        $literal: true,
        toJsObject: function () {
            var $t, $t1;
            var jObj = this;
            if (!isNaN(this.animate)) {
                jObj.animate = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.animate);
            }
            if (!isNaN(this.orientation)) {
                jObj.orientation = ($t=this.orientation, System.Enum.toString(Bridge.jQueryUI.Orientations, $t));
            }
            if (!isNaN(this.range)) {
                jObj.range = ($t1=this.range, System.Enum.toString(Bridge.jQueryUI.Ranges, $t1));
            }
            return jObj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.TabsParameter", {
        $literal: true,
        toJsObject: function () {
            var $t, $t1;
            var jObj = this;
            if (!isNaN(this.event)) {
                jObj.event = ($t=this.event, System.Enum.toString(Bridge.jQueryUI.JqueryEvents, $t));
            }
            if (!isNaN(this.heightStyle)) {
                jObj.heightStyle = ($t1=this.heightStyle, System.Enum.toString(Bridge.jQueryUI.HeightStyles, $t1));
            }
            if (!isNaN(this.hide)) {
                jObj.hide = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.hide);
            }
            if (!isNaN(this.show)) {
                jObj.show = Bridge.jQueryUI.Common.Animation.prototype.toJsObject.call(this.show);
            }
            return jObj;
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.TooltipParamter", {
        $literal: true,
        toJsObject: function () {
            var jObj = this;

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
    });

    Bridge.define("Bridge.jQueryUI.WindowPositions", {
        $kind: "enum",
        statics: {
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
    });
});
