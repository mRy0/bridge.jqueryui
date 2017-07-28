/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Test", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.Demo", {
        statics: {
            _demoButton: null,
            showMenu: function () {
                var myDiv = document.createElement('div');
                Bridge.jQueryUI.Widgets.Extensions.dialog$1(myDiv, Bridge.jQueryUI.Widgets.DialogParameter.ctor({ title: "Menu", position: Bridge.merge(Bridge.jQueryUI.Common.Position.ctor(), {
                    my: Bridge.jQueryUI.WindowPositions["left top"], at: Bridge.jQueryUI.WindowPositions["left bottom"], of: Test.Demo._demoButton
                } ), height: 600 }));
                var button1 = Bridge.merge(document.createElement('button'), {
                    textContent: "jQueryUI Demo All"
                } );
                Bridge.jQueryUI.Widgets.Extensions.button(button1);
                button1.onclick = Bridge.fn.combine(button1.onclick, $asm.$.Test.Demo.f1);

                myDiv.appendChild(button1);
            },
            showDemo: function () {
                var contendElement = document.createElement('div');

                {
                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Accordion"
                    } ));
                    var accordion = document.createElement('div');
                    accordion.appendChild(Bridge.merge(document.createElement("h3"), {
                        textContent: "Section 1"
                    } ));
                    var accSec1 = document.createElement('div');
                    accSec1.appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque.Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc.Nam a nibh.Donec suscipit eros.Nam mi.Proin viverra leo ut odio.Curabitur malesuada.Vestibulum a velit eu ante scelerisque vulputate."
                    } ));
                    accordion.appendChild(accSec1);


                    accordion.appendChild(Bridge.merge(document.createElement("h3"), {
                        textContent: "Section 2"
                    } ));
                    var accSec2 = document.createElement('div');
                    accSec2.appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna."
                    } ));
                    accordion.appendChild(accSec2);

                    accordion.appendChild(Bridge.merge(document.createElement("h3"), {
                        textContent: "Section 3"
                    } ));
                    var accSec3 = document.createElement('div');
                    accSec3.appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui."
                    } ));
                    var accSec3Li = document.createElement('ul');
                    accSec3Li.appendChild(Bridge.merge(document.createElement('li'), {
                        textContent: "List item one"
                    } ));
                    accSec3Li.appendChild(Bridge.merge(document.createElement('li'), {
                        textContent: "List item two"
                    } ));
                    accSec3Li.appendChild(Bridge.merge(document.createElement('li'), {
                        textContent: "List item three"
                    } ));
                    accSec3.appendChild(accSec3Li);
                    accordion.appendChild(accSec3);



                    accordion.appendChild(Bridge.merge(document.createElement("h3"), {
                        textContent: "Section 4"
                    } ));
                    var accSec4 = document.createElement('div');
                    accSec4.appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est."
                    } ));
                    accSec4.appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    } ));
                    accordion.appendChild(accSec4);

                    Bridge.jQueryUI.Widgets.Extensions.accordion$1(accordion, Bridge.jQueryUI.Widgets.AccordionParameter.ctor({ heightStyle: Bridge.jQueryUI.HeightStyles.content }));
                    contendElement.appendChild(accordion);
                }

                {
                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Autocomplete"
                    } ));
                    var autocmpl = document.createElement('input');
                    Bridge.jQueryUI.Widgets.Extensions.autocomplete$1(autocmpl, Bridge.jQueryUI.Widgets.AutocompleteParameter.ctor({ source: System.Array.init([Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("ActionScript"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("AppleScript"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Asp"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("BASIC"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("C"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("C#"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("C++"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Clojure"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("COBOL"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("ColdFusion"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Erlang"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Fortran"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Groovy"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Haskell"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Java"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("JavaScript"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Lisp"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Perl"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("PHP"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Python"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Ruby"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Scala"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Scheme")], Bridge.jQueryUI.Widgets.AutocompleteSource), appendTo: contendElement }));
                    contendElement.appendChild(autocmpl);
                }

                {
                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Buttons"
                    } ));
                    var btn = Bridge.merge(document.createElement('button'), {
                        textContent: "Button"
                    } );
                    Bridge.jQueryUI.Widgets.Extensions.button(btn);
                    contendElement.appendChild(btn);

                    var icnBtn = Bridge.merge(document.createElement('button'), {
                        textContent: "button with icon"
                    } );
                    Bridge.jQueryUI.Widgets.Extensions.button$1(icnBtn, Bridge.jQueryUI.Widgets.ButtonParameter.ctor({ icon: "ui-icon-gear", showLabel: false }));
                    contendElement.appendChild(icnBtn);
                }

                {
                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Checkboxes"
                    } ));
                    var outerFieldset = document.createElement('fieldset');
                    outerFieldset.appendChild(Bridge.merge(document.createElement('label'), {
                        textContent: "Hotel Ratings: "
                    } ));

                    var lbl1 = Bridge.merge(document.createElement('label'), {
                        htmlFor: "checkbox-1",
                        textContent: "2 Star"
                    } );
                    var cb1 = Bridge.merge(document.createElement('input'), {
                        type: "checkbox",
                        name: "checkbox-1",
                        id: "checkbox-1"
                    } );
                    var lbl2 = Bridge.merge(document.createElement('label'), {
                        htmlFor: "checkbox-2",
                        textContent: "3 Star"
                    } );
                    var cb2 = Bridge.merge(document.createElement('input'), {
                        type: "checkbox",
                        name: "checkbox-2",
                        id: "checkbox-2"
                    } );
                    var lbl3 = Bridge.merge(document.createElement('label'), {
                        htmlFor: "checkbox-3",
                        textContent: "4 Star"
                    } );
                    var cb3 = Bridge.merge(document.createElement('input'), {
                        type: "checkbox",
                        name: "checkbox-3",
                        id: "checkbox-3"
                    } );
                    var lbl4 = Bridge.merge(document.createElement('label'), {
                        htmlFor: "checkbox-4",
                        textContent: "5 Star"
                    } );
                    var cb4 = Bridge.merge(document.createElement('input'), {
                        type: "checkbox",
                        name: "checkbox-4",
                        id: "checkbox-4"
                    } );
                    outerFieldset.appendChild(lbl1);
                    outerFieldset.appendChild(cb1);
                    outerFieldset.appendChild(lbl2);
                    outerFieldset.appendChild(cb2);
                    outerFieldset.appendChild(lbl3);
                    outerFieldset.appendChild(cb3);
                    outerFieldset.appendChild(lbl4);
                    outerFieldset.appendChild(cb4);
                    Bridge.jQueryUI.Widgets.Extensions.checkboxradio(cb1);
                    Bridge.jQueryUI.Widgets.Extensions.checkboxradio(cb2);
                    Bridge.jQueryUI.Widgets.Extensions.checkboxradio(cb3);
                    Bridge.jQueryUI.Widgets.Extensions.checkboxradio(cb4);
                    contendElement.appendChild(outerFieldset);

                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Radio"
                    } ));
                    var outerFieldset2 = document.createElement('fieldset');
                    outerFieldset2.appendChild(Bridge.merge(document.createElement('label'), {
                        textContent: "Select a Location: "
                    } ));

                    var rlbl1 = Bridge.merge(document.createElement('label'), {
                        htmlFor: "radio-1",
                        textContent: "New York"
                    } );
                    var rd1 = Bridge.merge(document.createElement('input'), {
                        type: "radio",
                        name: "radio-1",
                        id: "radio-1"
                    } );
                    var rlbl2 = Bridge.merge(document.createElement('label'), {
                        htmlFor: "radio-2",
                        textContent: "Paris"
                    } );
                    var rd2 = Bridge.merge(document.createElement('input'), {
                        type: "radio",
                        name: "radio-1",
                        id: "radio-2"
                    } );
                    var rlbl3 = Bridge.merge(document.createElement('label'), {
                        htmlFor: "radio-3",
                        textContent: "London"
                    } );
                    var rd3 = Bridge.merge(document.createElement('input'), {
                        type: "radio",
                        name: "radio-1",
                        id: "radio-3"
                    } );
                    outerFieldset2.appendChild(rlbl1);
                    outerFieldset2.appendChild(rd1);
                    outerFieldset2.appendChild(rlbl2);
                    outerFieldset2.appendChild(rd2);
                    outerFieldset2.appendChild(rlbl3);
                    outerFieldset2.appendChild(rd3);
                    Bridge.jQueryUI.Widgets.Extensions.checkboxradio(rd1);
                    Bridge.jQueryUI.Widgets.Extensions.checkboxradio(rd2);
                    Bridge.jQueryUI.Widgets.Extensions.checkboxradio(rd3);
                    contendElement.appendChild(outerFieldset2);
                }


                {
                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Tabs"
                    } ));
                    var tabsdiv = Bridge.merge(document.createElement('div'), {
                        id: "tabs"
                    } );
                    var tabList = document.createElement('ul');
                    tabList.appendChild(document.createElement('li').appendChild(Bridge.merge(document.createElement('a'), {
                        href: "#tabs-1",
                        textContent: "Nunc tincidunt"
                    } )).parentElement);
                    tabList.appendChild(document.createElement('li').appendChild(Bridge.merge(document.createElement('a'), {
                        href: "#tabs-2",
                        textContent: "Proin dolor"
                    } )).parentElement);
                    tabList.appendChild(document.createElement('li').appendChild(Bridge.merge(document.createElement('a'), {
                        href: "#tabs-3",
                        textContent: "Aenean lacinia"
                    } )).parentElement);
                    tabsdiv.appendChild(tabList);
                    tabsdiv.appendChild(Bridge.merge(document.createElement('div'), {
                        id: "tabs-1"
                    } ).appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus."
                    } )).parentElement);
                    tabsdiv.appendChild(Bridge.merge(document.createElement('div'), {
                        id: "tabs-2"
                    } ).appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus."
                    } )).parentElement);
                    tabsdiv.appendChild(Bridge.merge(document.createElement('div'), {
                        id: "tabs-3"
                    } ).appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus."
                    } )).parentElement.appendChild(Bridge.merge(document.createElement('p'), {
                        textContent: "Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit."
                    } )).parentElement);
                    Bridge.jQueryUI.Widgets.Extensions.tabs(tabsdiv);
                    contendElement.appendChild(tabsdiv);
                }

                {

                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Dialog"
                    } ));
                    var btnNrm = Bridge.merge(document.createElement('button'), {
                        textContent: "Dialog"
                    } );
                    var btnMdl = Bridge.merge(document.createElement('button'), {
                        textContent: "Modal Dialog"
                    } );
                    Bridge.jQueryUI.Widgets.Extensions.button$1(btnNrm, Bridge.jQueryUI.Widgets.ButtonParameter.ctor({ icon: "ui-icon-newwin" }));
                    Bridge.jQueryUI.Widgets.Extensions.button$1(btnMdl, Bridge.jQueryUI.Widgets.ButtonParameter.ctor({ icon: "ui-icon-newwin" }));

                    btnNrm.onclick = Bridge.fn.combine(btnNrm.onclick, $asm.$.Test.Demo.f2);
                    btnMdl.onclick = Bridge.fn.combine(btnMdl.onclick, $asm.$.Test.Demo.f3);
                    contendElement.appendChild(btnNrm);
                    contendElement.appendChild(btnMdl);


                }


                {
                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Slider"
                    } ));
                    var slider = document.createElement('div');
                    Bridge.jQueryUI.Widgets.Extensions.slider(slider);
                    contendElement.appendChild(slider);
                    var val = Bridge.merge(document.createElement('p'), {
                        textContent: "Wert"
                    } );
                    contendElement.appendChild(val);
                    Bridge.jQueryUI.Widgets.Extensions.sliderSlide(slider, function (ev, ui) {
                        val.textContent = "Wert: " + ui.value;
                    });

                }

                {
                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Datepicker"
                    } ));
                    var inp = document.createElement('input');
                    Bridge.jQueryUI.Widgets.Extensions.datepicker(inp);
                    contendElement.appendChild(inp);
                }



                {


                    contendElement.appendChild(Bridge.merge(document.createElement("h2"), {
                        textContent: "Progressbar"
                    } ));
                    var div = document.createElement('div');
                    Bridge.jQueryUI.Widgets.Extensions.progressbar$1(div, Bridge.jQueryUI.Widgets.ProgressbarParamter.ctor({ max: 100 }));
                    contendElement.appendChild(div);

                    var btn1 = Bridge.merge(document.createElement('button'), {
                        textContent: "Start",
                        onclick: function (ev) {
                            Bridge.jQueryUI.Widgets.Extensions.progressbarValue$1(div, 0);

                            System.Threading.Tasks.Task.run(function () {
                                var $step = 0,
                                    $task1, 
                                    $jumpFromFinally, 
                                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                                    $returnValue, 
                                    val1, 
                                    $async_e, 
                                    $asyncBody = Bridge.fn.bind(this, function () {
                                        try {
                                            for (;;) {
                                                $step = System.Array.min([0,1,2,3], $step);
                                                switch ($step) {
                                                    case 0: {
                                                        if ( true ) {
                                                                $step = 1;
                                                                continue;
                                                            } 
                                                            $step = 3;
                                                            continue;
                                                    }
                                                    case 1: {
                                                        val1 = Bridge.jQueryUI.Widgets.Extensions.progressbarValue(div);
                                                            val1 = (val1 + 1) | 0;
                                                            if (val1 > 100) {
                                                                $tcs.setResult(null);
                                                                return;
                                                            }
                                                            Bridge.jQueryUI.Widgets.Extensions.progressbarValue$1(div, val1);
                                                            $task1 = System.Threading.Tasks.Task.delay(100);
                                                            $step = 2;
                                                            $task1.continueWith($asyncBody);
                                                            return;
                                                    }
                                                    case 2: {
                                                        $task1.getAwaitedResult();
                                                        
                                                            $step = 0;
                                                            continue;
                                                    }
                                                    case 3: {
                                                        $tcs.setResult(null);
                                                        return;
                                                    }
                                                    default: {
                                                        $tcs.setResult(null);
                                                        return;
                                                    }
                                                }
                                            }
                                        } catch($async_e1) {
                                            $async_e = System.Exception.create($async_e1);
                                            $tcs.setException($async_e);
                                        }
                                    }, arguments);

                                $asyncBody();
                                return $tcs.task;
                            });
                        }
                    } );
                    Bridge.jQueryUI.Widgets.Extensions.button(btn1);
                    contendElement.appendChild(btn1);

                }

                Bridge.jQueryUI.Widgets.Extensions.dialog$1(contendElement, Bridge.jQueryUI.Widgets.DialogParameter.ctor({ buttons: System.Array.init([Bridge.jQueryUI.Widgets.DialogButton.ctor({ click: function () {
                    Bridge.jQueryUI.Widgets.Extensions.dialogClose(contendElement);
                }, text: "Close" })], Bridge.jQueryUI.Widgets.DialogButton), height: 600, width: 900 }));


            }
        },
        $main: function () {
            //create a simple lets go button
            Test.Demo._demoButton = Bridge.merge(document.createElement('button'), {
                textContent: "Menu"
            } );
            Bridge.jQueryUI.Widgets.Extensions.button(Test.Demo._demoButton);
            Test.Demo._demoButton.onclick = Bridge.fn.combine(Test.Demo._demoButton.onclick, $asm.$.Test.Demo.f4);
            document.body.appendChild(Test.Demo._demoButton);
        }
    });

    Bridge.ns("Test.Demo", $asm.$);

    Bridge.apply($asm.$.Test.Demo, {
        f1: function (ev) {
            Test.Demo.showDemo();
        },
        f2: function (ev) {
            Bridge.jQueryUI.Widgets.Extensions.dialog$1((Bridge.merge(document.createElement('div'), {
                textContent: "Hello I am an dialog"
            } )), Bridge.jQueryUI.Widgets.DialogParameter.ctor({ title: "Dialog" }));
        },
        f3: function (ev) {
            var dialogDiv = Bridge.merge(document.createElement('div'), {
                textContent: "I am a modal dialog"
            } );
            Bridge.jQueryUI.Widgets.Extensions.dialog$1(dialogDiv, Bridge.jQueryUI.Widgets.DialogParameter.ctor({ title: "Modal Dialog", modal: true, buttons: System.Array.init([Bridge.jQueryUI.Widgets.DialogButton.ctor({ click: function () {
                Bridge.jQueryUI.Widgets.Extensions.dialogClose(dialogDiv);
            }, text: "OK" }), Bridge.jQueryUI.Widgets.DialogButton.ctor({ click: function () {
                Bridge.jQueryUI.Widgets.Extensions.dialogClose(dialogDiv);
            }, text: "Cancel" })], Bridge.jQueryUI.Widgets.DialogButton) }));
        },
        f4: function (ev) {
            Test.Demo.showMenu();
        }
    });
});
