/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Bridge.jQueryUI", function ($asm, globals) {
    "use strict";

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

    Bridge.define("Bridge.jQueryUI.jqueryUI", {
        statics: {
            resizable: function (node) {
                node.resizable();
            }
        }
    });
});
