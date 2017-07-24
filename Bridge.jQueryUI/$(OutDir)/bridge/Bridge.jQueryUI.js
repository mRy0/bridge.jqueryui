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

    Bridge.define("Bridge.jQueryUI.Effects.Enums", {
        statics: {
            getEffectNameFromEffect: function (type) {
                return System.Enum.toString(Bridge.jQueryUI.Effects.Enums.EffectTypes, type).toLowerCase();
            }
        }
    });

    Bridge.define("Bridge.jQueryUI.Effects.Enums.EffectTypes", {
        $kind: "enum",
        statics: {
            Bldind: 1,
            Bounce: 2,
            Clip: 3,
            Drop: 4,
            Explode: 5,
            Fade: 6,
            Fold: 7,
            Highlight: 8,
            Puff: 9,
            Pulsate: 10,
            Scale: 11,
            Shake: 12,
            Size: 13,
            Slide: 14,
            Transfer: 15
        }
    });

    Bridge.define("Bridge.jQueryUI.Effects.Extensions", {
        statics: {
            effect: function (node, effect, options, duration, complete) {
                if (options === void 0) { options = null; }
                if (duration === void 0) { duration = 400; }
                if (complete === void 0) { complete = null; }
                $(node).effect(Bridge.jQueryUI.Effects.Enums.getEffectNameFromEffect(effect));

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
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Statics");

    Bridge.define("Bridge.jQueryUI.Widgets.AutoCompleteTextboxParameter", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.DatepickerParameter", {
        $literal: true
    });

    Bridge.define("Bridge.jQueryUI.Widgets.Extensions", {
        statics: {
            autocompleteInput: function (input, tags) {
                var element = $(input).autocomplete(Bridge.jQueryUI.Widgets.AutoCompleteTextboxParameter.ctor({ source: tags }));
            },
            datepicker: function (input) {
                $(input).datepicker();
            },
            button: function (button) {
                $(button).button();
            }
        }
    });
});
