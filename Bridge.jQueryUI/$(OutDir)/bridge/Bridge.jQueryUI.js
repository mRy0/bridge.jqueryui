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

    Bridge.define("Bridge.jQueryUI.Widgets.ProgressbarParamter", {
        $literal: true,
        toJsObject: function () {
            return this;
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
