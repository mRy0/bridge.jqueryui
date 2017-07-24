/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Test", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.Demo", {
        $main: function () {
            var myDiv = document.createElement('div');

            document.body.appendChild(myDiv);
            Bridge.jQueryUI.jqueryUI.resizable(myDiv);


        }
    });
});
