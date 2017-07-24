Bridge.assembly("Bridge.jQueryUI", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.jQueryUI.Interactions.Enums", {
        statics: {
            AnimationSpeedFast: 200,
            AnimationSpeedSlow: 600
        }
    });

    Bridge.define("Bridge.jQueryUI.Interactions.Enums.Easing", {
        $kind: "enum",
        statics: {
            Linear: 1,
            Swing: 2,
            Default: 3
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
            }
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
            this.setAnimate(false);
            this.setAnimateDuration(Bridge.jQueryUI.Interactions.Enums.AnimationSpeedFast);
            this.setAnimateEasing(Bridge.jQueryUI.Interactions.Enums.Easing.Swing);
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
});
