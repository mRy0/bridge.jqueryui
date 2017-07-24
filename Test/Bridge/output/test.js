/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Test", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.Demo", {
        $main: function () {
            var myDiv = Bridge.merge(document.createElement('div'), {
                id: "demodiv"
            } );
            Bridge.jQueryUI.Interactions.Extensions.resizable(myDiv);
            Bridge.jQueryUI.Interactions.Extensions.draggable(myDiv);
            document.body.appendChild(myDiv);



            var autocompleteBox = document.createElement('input');
            Bridge.jQueryUI.Widgets.Extensions.autocompleteInput(autocompleteBox, System.Array.init(["Rafael", "Denise", "Axel", "Muttern"], String));
            myDiv.appendChild(autocompleteBox);

            var datebox = document.createElement('input');
            Bridge.jQueryUI.Widgets.Extensions.datepicker(datebox);
            myDiv.appendChild(datebox);

            var button = Bridge.merge(document.createElement('button'), {
                textContent: "bounce"
            } );
            Bridge.jQueryUI.Widgets.Extensions.button(button);
            button.onclick = function (ev) {
                Bridge.jQueryUI.Effects.Extensions.effect(myDiv, Bridge.jQueryUI.Effects.Enums.EffectTypes.Explode);
            };
            myDiv.appendChild(button);
        }
    });
});
