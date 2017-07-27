/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Bridge.jQueryUI", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.jQueryUI.Effects.EffectPrameter", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Effects.Enums");

    Bridge.define("Bridge.jQueryUI.Effects.Enums.EffectTypes", {
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

    Bridge.define("Bridge.jQueryUI.Effects.Extensions", {
        statics: {
            effect: function (node, effect, options, duration, complete) {
                if (options === void 0) { options = null; }
                if (duration === void 0) { duration = 400; }
                if (complete === void 0) { complete = null; }
                var name = System.Enum.toString(Bridge.jQueryUI.Effects.Enums.EffectTypes, effect);
                $(node).effect(name);

            }
        }
    });

    /** @namespace Bridge.jQueryUI */

    /**
     * wrapper class for jquery ui js calls
     *
     * @static
     * @abstract
     * @public
     * @class Bridge.jQueryUI.ExternalCalls
     */
    Bridge.define("Bridge.jQueryUI.ExternalCalls");

    /**
     * some special helper for internal use
     *
     * @static
     * @abstract
     * @class Bridge.jQueryUI.Helper
     */
    Bridge.define("Bridge.jQueryUI.Helper");

    Bridge.define("Bridge.jQueryUI.Interactions.CursorPostition", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Interactions.DraggableParameterCollection", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Interactions.Enums", {
        statics: {
            AnimationSpeedFast: 200,
            AnimationSpeedSlow: 600
        }
    });

    Bridge.define("Bridge.jQueryUI.Interactions.Enums.Axis", {
        $kind: "enum",
        statics: {
            x: 1,
            y: 2,
            both: 3
        }
    });

    Bridge.define("Bridge.jQueryUI.Interactions.Enums.Easing", {
        $kind: "enum",
        statics: {
            linear: 1,
            swing: 2,
            default: 3
        }
    });

    Bridge.define("Bridge.jQueryUI.Interactions.Enums.SnapModes", {
        $kind: "enum",
        statics: {
            inner: 1,
            outer: 2,
            both: 3
        }
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
                var pramDefault = Bridge.jQueryUI.Interactions.DraggableParameterCollection.ctor({  });

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
                    jParam.cursor = ($t=parameter.cursor, System.Enum.toString(String, $t));
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
                    jParam.snapMode = ($t1=parameter.snapMode, System.Enum.toString(Bridge.jQueryUI.Interactions.Enums.SnapModes, $t1));
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

    Bridge.define("$AnonymousType$1", $asm, {
        $kind: "anonymous",
        ctor: function () {
        },
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
    });

    Bridge.define("$AnonymousType$2", $asm, {
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
    });

    Bridge.define("$AnonymousType$3", $asm, {
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
    });

    Bridge.define("Bridge.jQueryUI.Interactions.Grid", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Interactions.ResizeablePrameterCollection", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Statics");

    Bridge.define("Bridge.jQueryUI.Widgets.AutoCompleteTextboxParameter", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.DatepickerParameter", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.DialogButton", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.DialogParameterCollection", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.Enums");

    Bridge.define("Bridge.jQueryUI.Widgets.Enums.Collision", {
        $kind: "enum",
        statics: {
            flip: 0,
            fit: 1,
            "fit flip": 2,
            "fit none": 3
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.Enums.WindowPosition", {
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

    Bridge.define("Bridge.jQueryUI.Widgets.Extensions", {
        statics: {
            autocompleteInput: function (input, tags) {
                $(input).autocomplete(Bridge.jQueryUI.Widgets.AutoCompleteTextboxParameter.ctor({ source: tags }));
            },
            datepicker: function (input) {
                $(input).datepicker();
            },
            button: function (button) {
                $(button).button();
            },
            dialog: function (node) {
                $(node).dialog();
            },
            dialog$1: function (node, parameter) {
                var $t, $t1;
                var defaultParameter = Bridge.jQueryUI.Widgets.DialogParameterCollection.ctor({  });
                var sendedParameter = {  };

                if (!Bridge.referenceEquals(parameter.appendTo, defaultParameter.appendTo)) {
                    sendedParameter.appendTo = $(parameter.appendTo);
                }
                if (parameter.autoOpen !== defaultParameter.autoOpen) {
                    sendedParameter.autoOpen = parameter.autoOpen;
                }
                if (!Bridge.referenceEquals(parameter.buttons, defaultParameter.buttons)) {

                    var btns = System.Array.init(parameter.buttons.length, null, Object);
                    for (var i = 0; i < btns.length; i = (i + 1) | 0) {
                        var btn = {  };
                        btn.text = parameter.buttons[i].text;
                        btn.icon = parameter.buttons[i].icon;
                        btn.click = parameter.buttons[i].click;
                        btns[i] = btn;
                    }
                    sendedParameter.buttons = btns;

                }

                if (!Bridge.referenceEquals(parameter.classes, defaultParameter.classes)) {
                    sendedParameter.classes = parameter.classes;
                }
                if (parameter.closeOnEscape !== defaultParameter.closeOnEscape) {
                    sendedParameter.closeOnEscape = parameter.closeOnEscape;
                }
                if (!Bridge.referenceEquals(parameter.closeText, defaultParameter.closeText)) {
                    sendedParameter.closeText = parameter.closeText;
                }
                if (!Bridge.referenceEquals(parameter.dialogClass, defaultParameter.dialogClass)) {
                    sendedParameter.dialogClass = parameter.dialogClass;
                }
                if (parameter.draggable !== defaultParameter.draggable) {
                    sendedParameter.draggable = parameter.draggable;
                }
                if (parameter.height !== defaultParameter.height) {
                    sendedParameter.height = parameter.height;
                }
                if (parameter.maxHeight !== defaultParameter.maxHeight) {
                    sendedParameter.maxHeight = parameter.maxHeight;
                }
                if (parameter.maxWidht !== defaultParameter.maxWidht) {
                    sendedParameter.maxWidht = parameter.maxWidht;
                }
                if (parameter.minHeight !== defaultParameter.minHeight) {
                    sendedParameter.minHeight = parameter.minHeight;
                }
                if (parameter.minWidth !== defaultParameter.minWidth) {
                    sendedParameter.minWidth = parameter.minWidth;
                }
                if (parameter.modal !== defaultParameter.modal) {
                    sendedParameter.modal = parameter.modal;
                }
                if (!Bridge.referenceEquals(parameter.position, defaultParameter.position)) {
                    sendedParameter.position = {  };
                    sendedParameter.position.my = ($t=parameter.position.getMy(), System.Enum.toString(Bridge.jQueryUI.Widgets.Enums.WindowPosition, $t));
                    sendedParameter.position.at = ($t1=parameter.position.getAt(), System.Enum.toString(Bridge.jQueryUI.Widgets.Enums.WindowPosition, $t1));
                    if (parameter.position.getOf() != null) {
                        sendedParameter.position.at = $(parameter.position.getOf());
                    }
                }
                if (parameter.resizable !== defaultParameter.resizable) {
                    sendedParameter.resizable = parameter.resizable;
                }
                if (!Bridge.referenceEquals(parameter.title, defaultParameter.title)) {
                    sendedParameter.title = parameter.title;
                }
                if (parameter.width !== defaultParameter.width) {
                    sendedParameter.width = parameter.width;
                }


                $(node).dialog(sendedParameter);
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
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.Position", {
        config: {
            properties: {
                My: 0,
                At: 0,
                Of: null,
                Collision: 0
            }
        },
        ctor: function () {
            this.$initialize();
            this.setCollision(Bridge.jQueryUI.Widgets.Enums.Collision.flip);
            this.setMy(Bridge.jQueryUI.Widgets.Enums.WindowPosition.center);
            this.setAt(Bridge.jQueryUI.Widgets.Enums.WindowPosition.center);
            this.setOf(null);
        }
    });
});
