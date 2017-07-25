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

    Bridge.define("Bridge.jQueryUI.Widgets.DialogParameterCollection", {
        config: {
            properties: {
                AppendTo: null,
                AutoOpen: false,
                Classes: null,
                CloseOnEscape: false,
                CloseText: null,
                DialogClass: null,
                Draggable: false,
                Height: 0,
                MaxHeight: 0,
                MaxWidht: 0,
                MinHeight: 0,
                MinWidth: 0,
                Modal: false,
                Position: 0,
                Resizable: false,
                Title: null,
                Width: 0
            }
        },
        ctor: function () {
            this.$initialize();
            this.setAppendTo(null);
            this.setAutoOpen(true);
            //Buttons = true;
            this.setClasses("");
            this.setCloseOnEscape(true);
            this.setCloseText("close");
            this.setDialogClass("");
            this.setDraggable(true);
            this.setHeight(-1);
            //Hide = null;
            this.setMaxHeight(-1);
            this.setMaxWidht(-1);
            this.setMinHeight(-1);
            this.setMinWidth(-1);
            this.setModal(false);
            this.setPosition(Bridge.jQueryUI.Widgets.Enums.WindowPosition.Default);
            this.setResizable(true);
            //Show = null;
            this.setTitle(null);
            this.setWidth(300);
        }
    });

    Bridge.define("Bridge.jQueryUI.Widgets.Enums");

    Bridge.define("Bridge.jQueryUI.Widgets.Enums.WindowPosition", {
        $kind: "enum",
        statics: {
            Default: 0,
            TopLeft: 1,
            Top: 2,
            TopRight: 3,
            CenterLeft: 4,
            Center: 5,
            CenterRight: 6,
            BottomLeft: 7,
            Bottom: 8,
            BottomRight: 9
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
            dialogOpen: function (node) {
                $(node).dialog();
            },
            dialogOpen$1: function (node, parameter) {
                var defaultParameter = new Bridge.jQueryUI.Widgets.DialogParameterCollection();
                var sendedParameter = new $asm.$AnonymousType$1();

                if (!Bridge.referenceEquals(parameter.getAppendTo(), defaultParameter.getAppendTo())) {
                    sendedParameter.appendTo = $(parameter.getAppendTo());
                }
                if (parameter.getAutoOpen() !== defaultParameter.getAutoOpen()) {
                    sendedParameter.autoOpen = parameter.getAutoOpen();
                }
                if (!Bridge.referenceEquals(parameter.getClasses(), defaultParameter.getClasses())) {
                    sendedParameter.classes = parameter.getClasses();
                }
                if (parameter.getCloseOnEscape() !== defaultParameter.getCloseOnEscape()) {
                    sendedParameter.closeOnEscape = parameter.getCloseOnEscape();
                }
                if (!Bridge.referenceEquals(parameter.getCloseText(), defaultParameter.getCloseText())) {
                    sendedParameter.closeText = parameter.getCloseText();
                }
                if (!Bridge.referenceEquals(parameter.getDialogClass(), defaultParameter.getDialogClass())) {
                    sendedParameter.dialogClass = parameter.getDialogClass();
                }
                if (parameter.getDraggable() !== defaultParameter.getDraggable()) {
                    sendedParameter.draggable = parameter.getDraggable();
                }
                if (parameter.getHeight() !== defaultParameter.getHeight()) {
                    sendedParameter.height = parameter.getHeight();
                }
                if (parameter.getMaxHeight() !== defaultParameter.getMaxHeight()) {
                    sendedParameter.maxHeight = parameter.getMaxHeight();
                }
                if (parameter.getMaxWidht() !== defaultParameter.getMaxWidht()) {
                    sendedParameter.maxWidht = parameter.getMaxWidht();
                }
                if (parameter.getMinHeight() !== defaultParameter.getMinHeight()) {
                    sendedParameter.minHeight = parameter.getMinHeight();
                }
                if (parameter.getMinWidth() !== defaultParameter.getMinWidth()) {
                    sendedParameter.minWidth = parameter.getMinWidth();
                }
                if (parameter.getModal() !== defaultParameter.getModal()) {
                    sendedParameter.modal = parameter.getModal();
                }
                if (parameter.getPosition() !== defaultParameter.getPosition()) {
                    sendedParameter.position = new $asm.$AnonymousType$1();
                    switch (parameter.getPosition()) {
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.Default: 
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.TopLeft: 
                            sendedParameter.position.my = "left top";
                            sendedParameter.position.at = "left top";
                            sendedParameter.position.of = null;
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.Top: 
                            sendedParameter.position.my = "top";
                            sendedParameter.position.at = "top";
                            sendedParameter.position.of = null;
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.TopRight: 
                            sendedParameter.position.my = "right top";
                            sendedParameter.position.at = "right top";
                            sendedParameter.position.of = null;
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.CenterLeft: 
                            sendedParameter.position.my = "left";
                            sendedParameter.position.at = "left";
                            sendedParameter.position.of = null;
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.Center: 
                            sendedParameter.position.my = "center";
                            sendedParameter.position.at = "center";
                            sendedParameter.position.of = null;
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.CenterRight: 
                            sendedParameter.position.my = "right";
                            sendedParameter.position.at = "right";
                            sendedParameter.position.of = null;
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.BottomLeft: 
                            sendedParameter.position.my = "left bottom";
                            sendedParameter.position.at = "left bottom";
                            sendedParameter.position.of = null;
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.Bottom: 
                            sendedParameter.position.my = "bottom";
                            sendedParameter.position.at = "bottom";
                            sendedParameter.position.of = null;
                            break;
                        case Bridge.jQueryUI.Widgets.Enums.WindowPosition.BottomRight: 
                            sendedParameter.position.my = "right bottom";
                            sendedParameter.position.at = "right bottom";
                            sendedParameter.position.of = null;
                            break;
                        default: 
                            break;
                    }

                }

                if (parameter.getResizable() !== defaultParameter.getResizable()) {
                    sendedParameter.resizable = parameter.getResizable();
                }
                if (!Bridge.referenceEquals(parameter.getTitle(), defaultParameter.getTitle())) {
                    sendedParameter.title = parameter.getTitle();
                }
                if (parameter.getWidth() !== defaultParameter.getWidth()) {
                    sendedParameter.width = parameter.getWidth();
                }


                $(node).dialog(sendedParameter);
            },
            dialogOpen$2: function (node, parameter) {


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
});
