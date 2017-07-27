/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Test", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.Demo", {
        statics: {
            showMenu: function () {
                var myDiv = document.createElement('div');
                Bridge.jQueryUI.Widgets.Extensions.dialog$1(myDiv, Bridge.jQueryUI.Widgets.DialogParameterCollection.ctor({ title: "Menu", position: Bridge.merge(new Bridge.jQueryUI.Widgets.Position(), {
                    setMy: Bridge.jQueryUI.Widgets.Enums.WindowPosition.left,
                    setAt: Bridge.jQueryUI.Widgets.Enums.WindowPosition.left
                } ), height: 600 }));
                var button1 = Bridge.merge(document.createElement('button'), {
                    textContent: "jQueryUI Demo"
                } );
                Bridge.jQueryUI.Widgets.Extensions.button(button1);
                button1.onclick = Bridge.fn.combine(button1.onclick, $asm.$.Test.Demo.f1);

                myDiv.appendChild(button1);
            },
            showDemo: function () {
                var contendElement = document.createElement('div');
                contendElement.appendChild(Bridge.merge(document.createElement('p'), {
                    textContent: "Autocomplete"
                } ));
                var autocmpl = document.createElement('input');
                Bridge.jQueryUI.Widgets.Extensions.autocompleteInput(autocmpl, System.Array.init(["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"], String));
                contendElement.appendChild(autocmpl);

                contendElement.appendChild(Bridge.merge(document.createElement('p'), {
                    textContent: "Buttons"
                } ));
                var btn = Bridge.merge(document.createElement('button'), {
                    textContent: "Button"
                } );
                Bridge.jQueryUI.Widgets.Extensions.button(btn);
                contendElement.appendChild(btn);

                Bridge.jQueryUI.Widgets.Extensions.dialog$1(contendElement, Bridge.jQueryUI.Widgets.DialogParameterCollection.ctor({ buttons: System.Array.init([Bridge.jQueryUI.Widgets.DialogButton.ctor({ click: function () {
                    Bridge.jQueryUI.Widgets.Extensions.dialogClose(contendElement);
                }, text: "Close" })], Bridge.jQueryUI.Widgets.DialogButton) }));
            }
        },
        $main: function () {
            var button = Bridge.merge(document.createElement('button'), {
                textContent: "Menu"
            } );
            Bridge.jQueryUI.Widgets.Extensions.button(button);
            button.onclick = Bridge.fn.combine(button.onclick, $asm.$.Test.Demo.f2);

            document.body.appendChild(button);
        }
    });

    Bridge.ns("Test.Demo", $asm.$);

    Bridge.apply($asm.$.Test.Demo, {
        f1: function (ev) {
            Test.Demo.showDemo();
        },
        f2: function (ev) {
            Test.Demo.showMenu();
        }
    });
});
