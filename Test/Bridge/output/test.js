/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Test", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.Demo", {
        main: function Main () {
            var $t;
            //create a simple lets go button
            Test.Demo._demoButton = ($t = document.createElement('button'), $t.textContent = "Menu", $t);
            Bridge.jQueryUI.Widgets.Extensions.button(Test.Demo._demoButton);
            Test.Demo._demoButton.onclick = Bridge.fn.combine(Test.Demo._demoButton.onclick, $asm.$.Test.Demo.f1);
            document.body.appendChild(Test.Demo._demoButton);
        },
        statics: {
            fields: {
                _demoButton: null
            },
            methods: {
                ShowMenu: function () {
                    var $t;
                    var myDiv = document.createElement('div');
                    Bridge.jQueryUI.Widgets.Extensions.dialog$1(myDiv, { title: "Menu", position: ($t = Bridge.jQueryUI.Common.Position.ctor(), $t.my = Bridge.jQueryUI.WindowPositions["left top"], $t.at = Bridge.jQueryUI.WindowPositions["left bottom"], $t.of = Test.Demo._demoButton, $t), height: 600 });
                    var button1 = ($t = document.createElement('button'), $t.textContent = "jQueryUI Demo All", $t);
                    Bridge.jQueryUI.Widgets.Extensions.button(button1);
                    button1.onclick = Bridge.fn.combine(button1.onclick, $asm.$.Test.Demo.f2);
                    myDiv.appendChild(button1);
                    myDiv.appendChild(document.createElement('br'));

                    var themes = ($t = document.createElement('button'), $t.textContent = "Themes", $t);
                    Bridge.jQueryUI.Widgets.Extensions.button(themes);
                    themes.onclick = Bridge.fn.combine(themes.onclick, $asm.$.Test.Demo.f3);
                    myDiv.appendChild(themes);

                    var dtable = ($t = document.createElement('button'), $t.textContent = "Datatable", $t);
                    Bridge.jQueryUI.Widgets.Extensions.button(dtable);
                    dtable.onclick = Bridge.fn.combine(dtable.onclick, $asm.$.Test.Demo.f4);
                    myDiv.appendChild(dtable);
                },
                ShowDemo: function () {
                    var $t;
                    var contendElement = document.createElement('div');

                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Accordion", $t));
                        var accordion = document.createElement('div');
                        accordion.appendChild(($t = document.createElement("h3"), $t.textContent = "Section 1", $t));
                        var accSec1 = document.createElement('div');
                        accSec1.appendChild(($t = document.createElement('p'), $t.textContent = "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque.Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc.Nam a nibh.Donec suscipit eros.Nam mi.Proin viverra leo ut odio.Curabitur malesuada.Vestibulum a velit eu ante scelerisque vulputate.", $t));
                        accordion.appendChild(accSec1);


                        accordion.appendChild(($t = document.createElement("h3"), $t.textContent = "Section 2", $t));
                        var accSec2 = document.createElement('div');
                        accSec2.appendChild(($t = document.createElement('p'), $t.textContent = "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.", $t));
                        accordion.appendChild(accSec2);

                        accordion.appendChild(($t = document.createElement("h3"), $t.textContent = "Section 3", $t));
                        var accSec3 = document.createElement('div');
                        accSec3.appendChild(($t = document.createElement('p'), $t.textContent = "Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.", $t));
                        var accSec3Li = document.createElement('ul');
                        accSec3Li.appendChild(($t = document.createElement('li'), $t.textContent = "List item one", $t));
                        accSec3Li.appendChild(($t = document.createElement('li'), $t.textContent = "List item two", $t));
                        accSec3Li.appendChild(($t = document.createElement('li'), $t.textContent = "List item three", $t));
                        accSec3.appendChild(accSec3Li);
                        accordion.appendChild(accSec3);



                        accordion.appendChild(($t = document.createElement("h3"), $t.textContent = "Section 4", $t));
                        var accSec4 = document.createElement('div');
                        accSec4.appendChild(($t = document.createElement('p'), $t.textContent = "Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.", $t));
                        accSec4.appendChild(($t = document.createElement('p'), $t.textContent = "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", $t));
                        accordion.appendChild(accSec4);

                        Bridge.jQueryUI.Widgets.Extensions.accordion$1(accordion, { heightStyle: Bridge.jQueryUI.HeightStyles.content });
                        contendElement.appendChild(accordion);
                    }

                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Autocomplete", $t));
                        var autocmpl = document.createElement('input');
                        Bridge.jQueryUI.Widgets.Extensions.autocomplete$1(autocmpl, { source: System.Array.init([Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("ActionScript"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("AppleScript"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Asp"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("BASIC"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("C"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("C#"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("C++"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Clojure"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("COBOL"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("ColdFusion"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Erlang"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Fortran"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Groovy"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Haskell"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Java"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("JavaScript"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Lisp"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Perl"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("PHP"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Python"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Ruby"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Scala"), Bridge.jQueryUI.Widgets.AutocompleteSource.ctor("Scheme")], Bridge.jQueryUI.Widgets.AutocompleteSource), appendTo: contendElement });
                        contendElement.appendChild(autocmpl);
                    }

                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Buttons", $t));
                        var btn = ($t = document.createElement('button'), $t.textContent = "Button", $t);
                        Bridge.jQueryUI.Widgets.Extensions.button(btn);
                        contendElement.appendChild(btn);

                        var icnBtn = ($t = document.createElement('button'), $t.textContent = "button with icon", $t);
                        Bridge.jQueryUI.Widgets.Extensions.button$1(icnBtn, { icon: "ui-icon-gear", showLabel: false });
                        contendElement.appendChild(icnBtn);
                    }

                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Checkboxes", $t));
                        var outerFieldset = document.createElement('fieldset');
                        outerFieldset.appendChild(($t = document.createElement('label'), $t.textContent = "Hotel Ratings: ", $t));

                        var lbl1 = ($t = document.createElement('label'), $t.htmlFor = "checkbox-1", $t.textContent = "2 Star", $t);
                        var cb1 = ($t = document.createElement('input'), $t.type = "checkbox", $t.name = "checkbox-1", $t.id = "checkbox-1", $t);
                        var lbl2 = ($t = document.createElement('label'), $t.htmlFor = "checkbox-2", $t.textContent = "3 Star", $t);
                        var cb2 = ($t = document.createElement('input'), $t.type = "checkbox", $t.name = "checkbox-2", $t.id = "checkbox-2", $t);
                        var lbl3 = ($t = document.createElement('label'), $t.htmlFor = "checkbox-3", $t.textContent = "4 Star", $t);
                        var cb3 = ($t = document.createElement('input'), $t.type = "checkbox", $t.name = "checkbox-3", $t.id = "checkbox-3", $t);
                        var lbl4 = ($t = document.createElement('label'), $t.htmlFor = "checkbox-4", $t.textContent = "5 Star", $t);
                        var cb4 = ($t = document.createElement('input'), $t.type = "checkbox", $t.name = "checkbox-4", $t.id = "checkbox-4", $t);
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

                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Radio", $t));
                        var outerFieldset2 = document.createElement('fieldset');
                        outerFieldset2.appendChild(($t = document.createElement('label'), $t.textContent = "Select a Location: ", $t));

                        var rlbl1 = ($t = document.createElement('label'), $t.htmlFor = "radio-1", $t.textContent = "New York", $t);
                        var rd1 = ($t = document.createElement('input'), $t.type = "radio", $t.name = "radio-1", $t.id = "radio-1", $t);
                        var rlbl2 = ($t = document.createElement('label'), $t.htmlFor = "radio-2", $t.textContent = "Paris", $t);
                        var rd2 = ($t = document.createElement('input'), $t.type = "radio", $t.name = "radio-1", $t.id = "radio-2", $t);
                        var rlbl3 = ($t = document.createElement('label'), $t.htmlFor = "radio-3", $t.textContent = "London", $t);
                        var rd3 = ($t = document.createElement('input'), $t.type = "radio", $t.name = "radio-1", $t.id = "radio-3", $t);
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
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Tabs", $t));
                        var tabsdiv = ($t = document.createElement('div'), $t.id = "tabs", $t);
                        var tabList = document.createElement('ul');
                        tabList.appendChild(document.createElement('li').appendChild(($t = document.createElement('a'), $t.href = "#tabs-1", $t.textContent = "Nunc tincidunt", $t)).parentElement);
                        tabList.appendChild(document.createElement('li').appendChild(($t = document.createElement('a'), $t.href = "#tabs-2", $t.textContent = "Proin dolor", $t)).parentElement);
                        tabList.appendChild(document.createElement('li').appendChild(($t = document.createElement('a'), $t.href = "#tabs-3", $t.textContent = "Aenean lacinia", $t)).parentElement);
                        tabsdiv.appendChild(tabList);
                        tabsdiv.appendChild(($t = document.createElement('div'), $t.id = "tabs-1", $t).appendChild(($t = document.createElement('p'), $t.textContent = "Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.", $t)).parentElement);
                        tabsdiv.appendChild(($t = document.createElement('div'), $t.id = "tabs-2", $t).appendChild(($t = document.createElement('p'), $t.textContent = "Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.", $t)).parentElement);
                        tabsdiv.appendChild(($t = document.createElement('div'), $t.id = "tabs-3", $t).appendChild(($t = document.createElement('p'), $t.textContent = "Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.", $t)).parentElement.appendChild(($t = document.createElement('p'), $t.textContent = "Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.", $t)).parentElement);
                        Bridge.jQueryUI.Widgets.Extensions.tabs(tabsdiv);
                        contendElement.appendChild(tabsdiv);
                    }

                    {

                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Dialog", $t));
                        var btnNrm = ($t = document.createElement('button'), $t.textContent = "Dialog", $t);
                        var btnMdl = ($t = document.createElement('button'), $t.textContent = "Modal Dialog", $t);
                        Bridge.jQueryUI.Widgets.Extensions.button$1(btnNrm, { icon: "ui-icon-newwin" });
                        Bridge.jQueryUI.Widgets.Extensions.button$1(btnMdl, { icon: "ui-icon-newwin" });

                        btnNrm.onclick = Bridge.fn.combine(btnNrm.onclick, $asm.$.Test.Demo.f5);
                        btnMdl.onclick = Bridge.fn.combine(btnMdl.onclick, $asm.$.Test.Demo.f6);
                        contendElement.appendChild(btnNrm);
                        contendElement.appendChild(btnMdl);


                    }


                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Slider", $t));
                        var slider = document.createElement('div');
                        Bridge.jQueryUI.Widgets.Extensions.slider(slider);
                        contendElement.appendChild(slider);
                        var val = ($t = document.createElement('p'), $t.textContent = "Value", $t);
                        contendElement.appendChild(val);
                        Bridge.jQueryUI.Widgets.Extensions.sliderSlide(slider, function (ev, ui) {
                            val.textContent = "Value: " + ui.value;
                        });

                    }

                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Datepicker", $t));
                        var inp = document.createElement('input');
                        Bridge.jQueryUI.Widgets.Extensions.datepicker(inp);
                        contendElement.appendChild(inp);
                    }



                    {


                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Progressbar", $t));
                        var div = document.createElement('div');
                        Bridge.jQueryUI.Widgets.Extensions.progressbar$1(div, { max: 100 });
                        contendElement.appendChild(div);

                        var btn1 = ($t = document.createElement('button'), $t.textContent = "Start", $t.onclick = function (ev) {
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
                                                $step = System.Array.min([1,2,3,4], $step);
                                                switch ($step) {

                                                    case 1: {
                                                        if ( true ) {
                                                            $step = 2;
                                                            continue;
                                                        } 
                                                        $step = 4;
                                                        continue;
                                                    }
                                                    case 2: {
                                                        val1 = Bridge.jQueryUI.Widgets.Extensions.progressbarValue(div);
                                                        val1 = (val1 + 1) | 0;
                                                        if (val1 > 100) {
                                                            $tcs.setResult(null);
                                                            return;
                                                        }
                                                        Bridge.jQueryUI.Widgets.Extensions.progressbarValue$1(div, val1);
                                                        $task1 = System.Threading.Tasks.Task.delay(100);
                                                        $step = 3;
                                                        $task1.continueWith($asyncBody);
                                                        return;
                                                    }
                                                    case 3: {
                                                        $task1.getAwaitedResult();
                                                        
                                                        $step = 1;
                                                        continue;
                                                    }
                                                    case 4: {
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
                        }, $t);
                        Bridge.jQueryUI.Widgets.Extensions.button(btn1);
                        contendElement.appendChild(btn1);

                    }

                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Selectmenu", $t));
                        var sel = document.createElement('select');
                        sel.appendChild(($t = document.createElement('option'), $t.textContent = "Slower", $t));
                        sel.appendChild(($t = document.createElement('option'), $t.textContent = "Slow", $t));
                        sel.appendChild(($t = document.createElement('option'), $t.textContent = "Medium", $t));
                        sel.appendChild(($t = document.createElement('option'), $t.textContent = "Fast", $t));
                        sel.appendChild(($t = document.createElement('option'), $t.textContent = "Faster", $t));
                        contendElement.appendChild(sel);
                        Bridge.jQueryUI.Widgets.Extensions.selectmenu$1(sel, { appendTo: contendElement });
                    }


                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Menu", $t));

                        var menu = document.createElement('ul');
                        menu.style.width = "150px";
                        menu.appendChild(($t = document.createElement('li'), $t.className = "ui-state-disabled", $t).appendChild(($t = document.createElement('div'), $t.textContent = "Toys (n/a)", $t)).parentNode);
                        menu.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Books", $t)).parentNode);
                        menu.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Clothing", $t)).parentNode);
                        menu.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Electronics", $t)).parentNode.appendChild(document.createElement('ul').appendChild(($t = document.createElement('li'), $t.className = "ui-state-disabled", $t).appendChild(($t = document.createElement('div'), $t.textContent = "Home Entertainment", $t)).parentNode).parentNode.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Car Hifi", $t)).parentNode).parentNode.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Utilities", $t)).parentNode).parentNode).parentNode);
                        menu.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Movies", $t)).parentNode);

                        menu.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Music", $t)).parentNode.appendChild(document.createElement('ul').appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Rock", $t)).parentNode.appendChild(document.createElement('ul').appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Alternative", $t)).parentNode).parentNode.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Classics", $t)).parentNode).parentNode).parentNode).parentNode.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Jazz", $t)).parentNode.appendChild(document.createElement('ul').appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Freejazz", $t)).parentNode).parentNode.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Big Band", $t)).parentNode).parentNode.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Modern", $t)).parentNode).parentNode).parentNode).parentNode.appendChild(document.createElement('li').appendChild(($t = document.createElement('div'), $t.textContent = "Pop", $t)).parentNode).parentNode).parentNode);
                        menu.appendChild(($t = document.createElement('li'), $t.className = "ui-state-disabled", $t).appendChild(($t = document.createElement('div'), $t.textContent = "Specials (n/a)", $t)).parentNode);



                        Bridge.jQueryUI.Widgets.Extensions.menu(menu);
                        contendElement.appendChild(menu);
                    }


                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Tooltip", $t));

                        var para = document.createElement('p');
                        var ttlink = ($t = document.createElement('a'), $t.href = "#", $t.textContent = "Tooltips", $t.title = "That's what this widget is", $t);
                        Bridge.jQueryUI.Widgets.Extensions.tooltip(ttlink);
                        para.appendChild(ttlink);


                        para.appendChild(document.createTextNode(" can be attached to any element. When you hover the element with your mouse, the title attribute is displayed in a little box next to the element, just like a native tooltip."));
                        contendElement.appendChild(para);



                    }


                    {
                        contendElement.appendChild(($t = document.createElement("h2"), $t.textContent = "Highlight / Error", $t));
                        var highlight = document.createElement('div');
                        Bridge.jQueryUI.Messageboxes.highlight(highlight, "Hey!", " Sample ui-state-highlight style.");
                        contendElement.appendChild(highlight);
                        contendElement.appendChild(document.createElement('br'));
                        var error = document.createElement('div');
                        Bridge.jQueryUI.Messageboxes.error(error, "Hey!", "Sample ui-state-error style.");
                        contendElement.appendChild(error);
                    }




                    Bridge.jQueryUI.Widgets.Extensions.dialog$1(contendElement, { buttons: System.Array.init([{ click: function () {
                        Bridge.jQueryUI.Widgets.Extensions.dialogClose(contendElement);
                    }, text: "Close" }], System.Object), height: 600, width: 900, title: "jQueryUi Demo Elements" });


                },
                ThemeChanger: function () {
                    var $t, $t1;
                    var dialog = document.createElement('div');
                    var themes = System.Array.init(["base", "black-tie", "blitzer", "cupertino", "dark-hive", "dot-luv", "eggplant", "excite-bike", "flick", "hot-sneaks", "humanity", "le-frog", "mint-choc", "overcast", "pepper-grinder", "redmond", "smoothness", "south-street", "start", "sunny", "swanky-purse", "trontastic", "ui-darkness", "ui-lightness", "vader"], System.String);

                    var sel = document.createElement('select');
                    $t = Bridge.getEnumerator(themes);
                    try {
                        while ($t.moveNext()) {
                            var theme = $t.Current;
                            sel.appendChild(($t1 = document.createElement('option'), $t1.textContent = theme, $t1.value = theme, $t1));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }dialog.appendChild(sel);
                    Bridge.jQueryUI.Widgets.Extensions.selectmenu$1(sel, { appendTo: dialog });
                    var btn = ($t1 = document.createElement('button'), $t1.textContent = "OK", $t1);
                    Bridge.jQueryUI.Widgets.Extensions.button(btn);
                    btn.onclick = function (ev) {
                        var newTheme = sel.options[System.Array.index(sel.selectedIndex, sel.options)].value;
                        var theme1 = document.getElementById("uitheme");
                        theme1.href = System.String.concat("../css/ui_themes/", newTheme, "/theme.css");
                    };
                    dialog.appendChild(btn);
                    Bridge.jQueryUI.Widgets.Extensions.dialog$1(dialog, { position: ($t1 = Bridge.jQueryUI.Common.Position.ctor(), $t1.at = Bridge.jQueryUI.WindowPositions.center, $t1.my = Bridge.jQueryUI.WindowPositions.center, $t1), title: "Themeroller", width: 400, height: 300 });

                }
            }
        }
    });

    Bridge.ns("Test.Demo", $asm.$);

    Bridge.apply($asm.$.Test.Demo, {
        f1: function (ev) {
            Test.Demo.ShowMenu();
        },
        f2: function (ev) {
            Test.Demo.ShowDemo();
        },
        f3: function (ev) {
            Test.Demo.ThemeChanger();
        },
        f4: function (ev) {
            Test.TableDemo.ShowTableDemo();
        },
        f5: function (ev) {
            var $t1;
            Bridge.jQueryUI.Widgets.Extensions.dialog$1((($t1 = document.createElement('div'), $t1.textContent = "Hello I am an dialog", $t1)), { title: "Dialog" });
        },
        f6: function (ev) {
            var $t1;
            var dialogDiv = ($t1 = document.createElement('div'), $t1.textContent = "I am a modal dialog", $t1);
            Bridge.jQueryUI.Widgets.Extensions.dialog$1(dialogDiv, { title: "Modal Dialog", modal: true, buttons: System.Array.init([{ click: function () {
                Bridge.jQueryUI.Widgets.Extensions.dialogClose(dialogDiv);
            }, text: "OK" }, { click: function () {
                Bridge.jQueryUI.Widgets.Extensions.dialogClose(dialogDiv);
            }, text: "Cancel" }], System.Object) });
        }
    });

    Bridge.define("Test.TableDemo", {
        statics: {
            methods: {
                ShowTableDemo: function () {
                    var $t, $t1;
                    var div = document.createElement('div');

                    var table = document.createElement('table');
                    table.createTHead();
                    var tHeadRow = document.createElement('tr');
                    tHeadRow.appendChild(($t = document.createElement('th'), $t.textContent = "Name", $t));
                    tHeadRow.appendChild(($t = document.createElement('th'), $t.textContent = "Position", $t));
                    tHeadRow.appendChild(($t = document.createElement('th'), $t.textContent = "Office", $t));
                    tHeadRow.appendChild(($t = document.createElement('th'), $t.textContent = "Age", $t));
                    tHeadRow.appendChild(($t = document.createElement('th'), $t.textContent = "StartDate", $t));
                    tHeadRow.appendChild(($t = document.createElement('th'), $t.textContent = "Salary", $t));
                    table.tHead.appendChild(tHeadRow);
                    var tBody = document.createElement("tbody");
                    table.appendChild(tBody);
                    div.appendChild(table);

                    var data = tabledemoJsonData;
                    $t = Bridge.getEnumerator(data);
                    try {
                        while ($t.moveNext()) {
                            var dataRow = $t.Current;
                            var row = { v : document.createElement('tr') };
                            row.v.onmouseenter = (function ($me, row) {
                                return function (ev) {
                                    row.v.classList.add("highlight");
                                };
                            })(this, row);
                            row.v.onmouseleave = (function ($me, row) {
                                return function (ev) {
                                    row.v.classList.remove("highlight");
                                };
                            })(this, row);

                            row.v.onmousedown = (function ($me, row) {
                                return function (ev) {
                                    if (row.v.classList.contains("selected")) {
                                        row.v.classList.remove("selected");
                                    } else {
                                        row.v.classList.add("selected");
                                    }
                                };
                            })(this, row);

                            row.v.appendChild(($t1 = document.createElement('td'), $t1.textContent = dataRow.Name, $t1));
                            row.v.appendChild(($t1 = document.createElement('td'), $t1.textContent = dataRow.Position, $t1));
                            row.v.appendChild(($t1 = document.createElement('td'), $t1.textContent = dataRow.Office, $t1));
                            row.v.appendChild(($t1 = document.createElement('td'), $t1.textContent = dataRow.Age, $t1));
                            row.v.appendChild(($t1 = document.createElement('td'), $t1.textContent = dataRow.StartDate, $t1));
                            row.v.appendChild(($t1 = document.createElement('td'), $t1.textContent = dataRow.Salary, $t1));
                            tBody.appendChild(row.v);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }Bridge.jQueryUI.Widgets.Extensions.dialog$1(div, { title: "Datatable Demo", width: 960, height: 600 });

                    Bridge.jQueryUI.Widgets.Extensions.dialogEventResize(div, function (ev, ui) {

                        Datatables.net.Datatables.DataTableDraw(table);
                    });



                    Datatables.net.Datatables.DataTable$1(table, { scrollCollapse: true, scrollY: "100%" });


                    Datatables.net.Datatables.DataTableDraw(table);

                    //Bridge.jQuery2.jQuery.Ajax(new Bridge.jQuery2.AjaxOptions
                    //{
                    //    Url = "TextFile1.txt",
                    //    ContentType = "application/json; charset=utf-8",
                    //    Success = delegate (dynamic data, string str, Bridge.jQuery2.jqXHR jqxhr)
                    //    {
                    //        var row = new HTMLTableRowElement();
                    //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Name });
                    //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Position });
                    //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Office });
                    //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Age });
                    //        row.AppendChild(new HTMLTableColElement() { TextContent = data.StartDate });
                    //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Salary });
                    //        tBody.AppendChild(row);
                    //    }
                    //});



                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0LmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJEZW1vLmNzIiwiVGFibGVEZW1vLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7WUFnQllBLHdCQUFjQTtZQUNkQTtZQUNBQSxpRkFBdUJBO1lBQ3ZCQSwwQkFBMEJBOzs7Ozs7Ozs7b0JBTTFCQSxZQUF1QkE7b0JBQ3ZCQSxtREFBYUEsMkJBRUVBLE1BQUlBLGdEQUVOQSxxREFDQUEsd0RBQ0FBO29CQUliQSxjQUE0QkE7b0JBQzVCQTtvQkFDQUEscURBQW1CQTtvQkFDbkJBLGtCQUFrQkE7b0JBQ2xCQSxrQkFBa0JBOztvQkFFbEJBLGFBQWFBO29CQUNiQTtvQkFDQUEsbURBQWtCQTtvQkFDbEJBLGtCQUFrQkE7O29CQUVsQkEsYUFBYUE7b0JBQ2JBO29CQUNBQSxtREFBa0JBO29CQUNsQkEsa0JBQWtCQTs7OztvQkFNbEJBLHFCQUFnQ0E7Ozt3QkFJNUJBLDJCQUEyQkEsNkJBQXVCQTt3QkFDbERBLGdCQUFnQkE7d0JBQ2hCQSxzQkFBc0JBLDZCQUF1QkE7d0JBQzdDQSxjQUFjQTt3QkFDZEEsb0JBQW9CQTt3QkFLcEJBLHNCQUFzQkE7Ozt3QkFHdEJBLHNCQUFzQkEsNkJBQXVCQTt3QkFDN0NBLGNBQWNBO3dCQUNkQSxvQkFDSUE7d0JBSUpBLHNCQUFzQkE7O3dCQUV0QkEsc0JBQXNCQSw2QkFBdUJBO3dCQUM3Q0EsY0FBY0E7d0JBQ2RBLG9CQUNJQTt3QkFJSkEsZ0JBQWdCQTt3QkFDaEJBLHNCQUFzQkE7d0JBQ3RCQSxzQkFBc0JBO3dCQUN0QkEsc0JBQXNCQTt3QkFDdEJBLG9CQUFvQkE7d0JBQ3BCQSxzQkFBc0JBOzs7O3dCQUl0QkEsc0JBQXNCQSw2QkFBdUJBO3dCQUM3Q0EsY0FBY0E7d0JBQ2RBLG9CQUNJQTt3QkFJSkEsb0JBQ0lBO3dCQUlKQSxzQkFBc0JBOzt3QkFFdEJBLDBEQUFvQkEsZUFBeUNBO3dCQUM3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QkFDckJBLHFCQUFxQkE7b0JBQ3JCQSx3QkFBd0JBO29CQUN4QkEsWUFBWUEsdUJBQTRCQTtvQkFDeENBLGtCQUFrQkE7b0JBQ2xCQSxnQkFBZ0JBOztvQkFFaEJBLFdBQVdBO29CQUNYQSxLQUF1QkE7Ozs7NEJBRW5CQSxnQkFBVUE7NEJBQ1ZBLHFCQUFtQkE7aURBQUNBO29DQUFTQTs7OzRCQUM3QkEscUJBQW1CQTtpREFBQ0E7b0NBQVNBOzs7OzRCQUU3QkEsb0JBQWtCQTtpREFBQ0E7b0NBQ2ZBLElBQUlBO3dDQUVBQTs7d0NBSUFBOzs7Ozs0QkFJUkEsa0JBQWdCQSx1REFBK0NBOzRCQUMvREEsa0JBQWdCQSx1REFBK0NBOzRCQUMvREEsa0JBQWdCQSx1REFBK0NBOzRCQUMvREEsa0JBQWdCQSx1REFBK0NBOzRCQUMvREEsa0JBQWdCQSx1REFBK0NBOzRCQUMvREEsa0JBQWdCQSx1REFBK0NBOzRCQUMvREEsa0JBQWtCQTs7Ozs7O3FCQUV0QkEsaURBQVdBOztvQkFFWEEsMERBQ1pBLEFBQStIQSxVQUFDQSxJQUFJQTs7d0JBR2hIQTs7Ozs7b0JBTVJBLDZDQUFnQkE7OztvQkFHaEJBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBCcmlkZ2UualF1ZXJ5VUkuSW50ZXJhY3Rpb25zO1xyXG51c2luZyBCcmlkZ2UualF1ZXJ5VUkuV2lkZ2V0cztcclxudXNpbmcgQnJpZGdlLmpRdWVyeVVJLkVmZmVjdHM7XHJcbnVzaW5nIEJyaWRnZS5qUXVlcnlVSTtcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEZW1vXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgSFRNTEJ1dHRvbkVsZW1lbnQgX2RlbW9CdXR0b247XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jcmVhdGUgYSBzaW1wbGUgbGV0cyBnbyBidXR0b25cclxuICAgICAgICAgICAgX2RlbW9CdXR0b24gPSBuZXcgSFRNTEJ1dHRvbkVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJNZW51XCIgfTtcclxuICAgICAgICAgICAgX2RlbW9CdXR0b24uQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIF9kZW1vQnV0dG9uLk9uQ2xpY2sgKz0gKGV2KSA9PiB7IFNob3dNZW51KCk7IH07XHJcbiAgICAgICAgICAgIERvY3VtZW50LkJvZHkuQXBwZW5kQ2hpbGQoX2RlbW9CdXR0b24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zaG93IHRoZSBtYWluIG1lbnVcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIFNob3dNZW51KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEhUTUxEaXZFbGVtZW50IG15RGl2ID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIG15RGl2LkRpYWxvZyhuZXcgRGlhbG9nUGFyYW1ldGVyKCkge1xyXG4gICAgICAgICAgICAgICAgVGl0bGUgPSBcIk1lbnVcIiAsXHJcbiAgICAgICAgICAgICAgICBQb3NpdGlvbiA9IG5ldyBCcmlkZ2UualF1ZXJ5VUkuQ29tbW9uLlBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNeSA9IEJyaWRnZS5qUXVlcnlVSS5XaW5kb3dQb3NpdGlvbnMuVG9wTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICBBdCA9IEJyaWRnZS5qUXVlcnlVSS5XaW5kb3dQb3NpdGlvbnMuQm90dG9tTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICBPZiAgPV9kZW1vQnV0dG9uICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgSGVpZ2h0ID0gNjAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBIVE1MQnV0dG9uRWxlbWVudCBidXR0b24xID0gbmV3IEhUTUxCdXR0b25FbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwialF1ZXJ5VUkgRGVtbyBBbGxcIiB9O1xyXG4gICAgICAgICAgICBidXR0b24xLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICBidXR0b24xLk9uQ2xpY2sgKz0gKGV2KSA9PiBTaG93RGVtbygpO1xyXG4gICAgICAgICAgICBteURpdi5BcHBlbmRDaGlsZChidXR0b24xKTtcclxuICAgICAgICAgICAgbXlEaXYuQXBwZW5kQ2hpbGQobmV3IEhUTUxCUkVsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhlbWVzID0gbmV3IEhUTUxCdXR0b25FbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiVGhlbWVzXCIgfTtcclxuICAgICAgICAgICAgdGhlbWVzLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGVtZXMuT25DbGljayArPSAoZXYpID0+IFRoZW1lQ2hhbmdlcigpO1xyXG4gICAgICAgICAgICBteURpdi5BcHBlbmRDaGlsZCh0aGVtZXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGR0YWJsZSA9IG5ldyBIVE1MQnV0dG9uRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIkRhdGF0YWJsZVwiIH07XHJcbiAgICAgICAgICAgIGR0YWJsZS5CdXR0b24oKTtcclxuICAgICAgICAgICAgZHRhYmxlLk9uQ2xpY2sgKz0gKGV2KSA9PiBUYWJsZURlbW8uU2hvd1RhYmxlRGVtbygpO1xyXG4gICAgICAgICAgICBteURpdi5BcHBlbmRDaGlsZChkdGFibGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zaG93IHRoZSBkZWZhdWx0IGpxdWVyeSB1aSBkZW1vXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBTaG93RGVtbygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBIVE1MRGl2RWxlbWVudCBjb250ZW5kRWxlbWVudCA9IG5ldyBIVE1MRGl2RWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgI3JlZ2lvbiBhY2NvcmRpb25cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQobmV3IEhUTUxIZWFkaW5nRWxlbWVudChIZWFkaW5nVHlwZS5IMikgeyBUZXh0Q29udGVudCA9IFwiQWNjb3JkaW9uXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWNjb3JkaW9uID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBhY2NvcmRpb24uQXBwZW5kQ2hpbGQobmV3IEhUTUxIZWFkaW5nRWxlbWVudChIZWFkaW5nVHlwZS5IMykgeyBUZXh0Q29udGVudCA9IFwiU2VjdGlvbiAxXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWNjU2VjMSA9IG5ldyBIVE1MRGl2RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgYWNjU2VjMS5BcHBlbmRDaGlsZChuZXcgSFRNTFBhcmFncmFwaEVsZW1lbnQoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFRleHRDb250ZW50ID0gXCJNYXVyaXMgbWF1cmlzIGFudGUsIGJsYW5kaXQgZXQsIHVsdHJpY2VzIGEsIHN1c2NpcGl0IGVnZXQsIHF1YW0uIEludGVnZXIgdXQgbmVxdWUuVml2YW11cyBuaXNpIG1ldHVzLCBtb2xlc3RpZSB2ZWwsIGdyYXZpZGEgaW4sIGNvbmRpbWVudHVtIHNpdCBhbWV0LCBudW5jLk5hbSBhIG5pYmguRG9uZWMgc3VzY2lwaXQgZXJvcy5OYW0gbWkuUHJvaW4gdml2ZXJyYSBsZW8gdXQgb2Rpby5DdXJhYml0dXIgbWFsZXN1YWRhLlZlc3RpYnVsdW0gYSB2ZWxpdCBldSBhbnRlIHNjZWxlcmlzcXVlIHZ1bHB1dGF0ZS5cIlxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYWNjb3JkaW9uLkFwcGVuZENoaWxkKGFjY1NlYzEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBhY2NvcmRpb24uQXBwZW5kQ2hpbGQobmV3IEhUTUxIZWFkaW5nRWxlbWVudChIZWFkaW5nVHlwZS5IMykgeyBUZXh0Q29udGVudCA9IFwiU2VjdGlvbiAyXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWNjU2VjMiA9IG5ldyBIVE1MRGl2RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgYWNjU2VjMi5BcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTFBhcmFncmFwaEVsZW1lbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dENvbnRlbnQgPSBcIlNlZCBub24gdXJuYS4gRG9uZWMgZXQgYW50ZS4gUGhhc2VsbHVzIGV1IGxpZ3VsYS4gVmVzdGlidWx1bSBzaXQgYW1ldCBwdXJ1cy4gVml2YW11cyBoZW5kcmVyaXQsIGRvbG9yIGF0IGFsaXF1ZXQgbGFvcmVldCwgbWF1cmlzIHR1cnBpcyBwb3J0dGl0b3IgdmVsaXQsIGZhdWNpYnVzIGludGVyZHVtIHRlbGx1cyBsaWJlcm8gYWMganVzdG8uIFZpdmFtdXMgbm9uIHF1YW0uIEluIHN1c2NpcGl0IGZhdWNpYnVzIHVybmEuXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFjY29yZGlvbi5BcHBlbmRDaGlsZChhY2NTZWMyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhY2NvcmRpb24uQXBwZW5kQ2hpbGQobmV3IEhUTUxIZWFkaW5nRWxlbWVudChIZWFkaW5nVHlwZS5IMykgeyBUZXh0Q29udGVudCA9IFwiU2VjdGlvbiAzXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWNjU2VjMyA9IG5ldyBIVE1MRGl2RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgYWNjU2VjMy5BcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTFBhcmFncmFwaEVsZW1lbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dENvbnRlbnQgPSBcIk5hbSBlbmltIHJpc3VzLCBtb2xlc3RpZSBldCwgcG9ydGEgYWMsIGFsaXF1YW0gYWMsIHJpc3VzLiBRdWlzcXVlIGxvYm9ydGlzLiBQaGFzZWxsdXMgcGVsbGVudGVzcXVlIHB1cnVzIGluIG1hc3NhLiBBZW5lYW4gaW4gcGVkZS4gUGhhc2VsbHVzIGFjIGxpYmVybyBhYyB0ZWxsdXMgcGVsbGVudGVzcXVlIHNlbXBlci4gU2VkIGFjIGZlbGlzLiBTZWQgY29tbW9kbywgbWFnbmEgcXVpcyBsYWNpbmlhIG9ybmFyZSwgcXVhbSBhbnRlIGFsaXF1YW0gbmlzaSwgZXUgaWFjdWxpcyBsZW8gcHVydXMgdmVuZW5hdGlzIGR1aS5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjY1NlYzNMaSA9IG5ldyBIVE1MVUxpc3RFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBhY2NTZWMzTGkuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJMaXN0IGl0ZW0gb25lXCIgfSk7XHJcbiAgICAgICAgICAgICAgICBhY2NTZWMzTGkuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJMaXN0IGl0ZW0gdHdvXCIgfSk7XHJcbiAgICAgICAgICAgICAgICBhY2NTZWMzTGkuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJMaXN0IGl0ZW0gdGhyZWVcIiB9KTtcclxuICAgICAgICAgICAgICAgIGFjY1NlYzMuQXBwZW5kQ2hpbGQoYWNjU2VjM0xpKTtcclxuICAgICAgICAgICAgICAgIGFjY29yZGlvbi5BcHBlbmRDaGlsZChhY2NTZWMzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhY2NvcmRpb24uQXBwZW5kQ2hpbGQobmV3IEhUTUxIZWFkaW5nRWxlbWVudChIZWFkaW5nVHlwZS5IMykgeyBUZXh0Q29udGVudCA9IFwiU2VjdGlvbiA0XCIgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWNjU2VjNCA9IG5ldyBIVE1MRGl2RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgYWNjU2VjNC5BcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTFBhcmFncmFwaEVsZW1lbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dENvbnRlbnQgPSBcIkNyYXMgZGljdHVtLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IEFlbmVhbiBsYWNpbmlhIG1hdXJpcyB2ZWwgZXN0LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhY2NTZWM0LkFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBIVE1MUGFyYWdyYXBoRWxlbWVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0Q29udGVudCA9IFwiU3VzcGVuZGlzc2UgZXUgbmlzbC4gTnVsbGFtIHV0IGxpYmVyby4gSW50ZWdlciBkaWduaXNzaW0gY29uc2VxdWF0IGxlY3R1cy4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhY2NvcmRpb24uQXBwZW5kQ2hpbGQoYWNjU2VjNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWNjb3JkaW9uLkFjY29yZGlvbihuZXcgQWNjb3JkaW9uUGFyYW1ldGVyKCkgeyBIZWlnaHRTdHlsZSA9IEJyaWRnZS5qUXVlcnlVSS5IZWlnaHRTdHlsZXMuQ29udGVudH0pO1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQoYWNjb3JkaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG4gICAgICAgICAgICAjcmVnaW9uIGF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChuZXcgSFRNTEhlYWRpbmdFbGVtZW50KEhlYWRpbmdUeXBlLkgyKSB7IFRleHRDb250ZW50ID0gXCJBdXRvY29tcGxldGVcIiB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBhdXRvY21wbCA9IG5ldyBIVE1MSW5wdXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBhdXRvY21wbC5BdXRvY29tcGxldGUobmV3IEF1dG9jb21wbGV0ZVBhcmFtZXRlcigpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU291cmNlID0gbmV3IEF1dG9jb21wbGV0ZVNvdXJjZVtdXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXV0b2NvbXBsZXRlU291cmNlKFwiQWN0aW9uU2NyaXB0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXV0b2NvbXBsZXRlU291cmNlKFwiQXBwbGVTY3JpcHRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJBc3BcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJCQVNJQ1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEF1dG9jb21wbGV0ZVNvdXJjZShcIkNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJDI1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEF1dG9jb21wbGV0ZVNvdXJjZShcIkMrK1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEF1dG9jb21wbGV0ZVNvdXJjZShcIkNsb2p1cmVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJDT0JPTFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEF1dG9jb21wbGV0ZVNvdXJjZShcIkNvbGRGdXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJFcmxhbmdcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJGb3J0cmFuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXV0b2NvbXBsZXRlU291cmNlKFwiR3Jvb3Z5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXV0b2NvbXBsZXRlU291cmNlKFwiSGFza2VsbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEF1dG9jb21wbGV0ZVNvdXJjZShcIkphdmFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJKYXZhU2NyaXB0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXV0b2NvbXBsZXRlU291cmNlKFwiTGlzcFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEF1dG9jb21wbGV0ZVNvdXJjZShcIlBlcmxcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJQSFBcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJQeXRob25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJSdWJ5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXV0b2NvbXBsZXRlU291cmNlKFwiU2NhbGFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvY29tcGxldGVTb3VyY2UoXCJTY2hlbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBBcHBlbmRUbyA9IGNvbnRlbmRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKGF1dG9jbXBsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG4gICAgICAgICAgICAjcmVnaW9uIGJ1dHRvbnNcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQobmV3IEhUTUxIZWFkaW5nRWxlbWVudChIZWFkaW5nVHlwZS5IMikgeyBUZXh0Q29udGVudCA9IFwiQnV0dG9uc1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0biA9IG5ldyBIVE1MQnV0dG9uRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIkJ1dHRvblwiIH07XHJcbiAgICAgICAgICAgICAgICBidG4uQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpY25CdG4gPSBuZXcgSFRNTEJ1dHRvbkVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJidXR0b24gd2l0aCBpY29uXCIgfTtcclxuICAgICAgICAgICAgICAgIGljbkJ0bi5CdXR0b24obmV3IEJ1dHRvblBhcmFtZXRlcigpIHsgSWNvbiA9IFwidWktaWNvbi1nZWFyXCIsIFNob3dMYWJlbCA9IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQoaWNuQnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAjcmVnaW9uIGNoZWNrYm94cmFkaW9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQobmV3IEhUTUxIZWFkaW5nRWxlbWVudChIZWFkaW5nVHlwZS5IMikgeyBUZXh0Q29udGVudCA9IFwiQ2hlY2tib3hlc1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dGVyRmllbGRzZXQgPSBuZXcgSFRNTEZpZWxkU2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJGaWVsZHNldC5BcHBlbmRDaGlsZChuZXcgSFRNTExhYmVsRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIkhvdGVsIFJhdGluZ3M6IFwiIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIEhUTUxMYWJlbEVsZW1lbnQgbGJsMSA9IG5ldyBIVE1MTGFiZWxFbGVtZW50KCkgeyBIdG1sRm9yID0gXCJjaGVja2JveC0xXCIsIFRleHRDb250ZW50ID0gXCIyIFN0YXJcIiB9O1xyXG4gICAgICAgICAgICAgICAgSFRNTElucHV0RWxlbWVudCBjYjEgPSBuZXcgSFRNTElucHV0RWxlbWVudCgpIHsgVHlwZSA9IElucHV0VHlwZS5DaGVja2JveCwgTmFtZSA9IFwiY2hlY2tib3gtMVwiLCBJZCA9IFwiY2hlY2tib3gtMVwiIH07XHJcbiAgICAgICAgICAgICAgICBIVE1MTGFiZWxFbGVtZW50IGxibDIgPSBuZXcgSFRNTExhYmVsRWxlbWVudCgpIHsgSHRtbEZvciA9IFwiY2hlY2tib3gtMlwiLCBUZXh0Q29udGVudCA9IFwiMyBTdGFyXCIgfTtcclxuICAgICAgICAgICAgICAgIEhUTUxJbnB1dEVsZW1lbnQgY2IyID0gbmV3IEhUTUxJbnB1dEVsZW1lbnQoKSB7IFR5cGUgPSBJbnB1dFR5cGUuQ2hlY2tib3gsIE5hbWUgPSBcImNoZWNrYm94LTJcIiwgSWQgPSBcImNoZWNrYm94LTJcIiB9O1xyXG4gICAgICAgICAgICAgICAgSFRNTExhYmVsRWxlbWVudCBsYmwzID0gbmV3IEhUTUxMYWJlbEVsZW1lbnQoKSB7IEh0bWxGb3IgPSBcImNoZWNrYm94LTNcIiwgVGV4dENvbnRlbnQgPSBcIjQgU3RhclwiIH07XHJcbiAgICAgICAgICAgICAgICBIVE1MSW5wdXRFbGVtZW50IGNiMyA9IG5ldyBIVE1MSW5wdXRFbGVtZW50KCkgeyBUeXBlID0gSW5wdXRUeXBlLkNoZWNrYm94LCBOYW1lID0gXCJjaGVja2JveC0zXCIsIElkID0gXCJjaGVja2JveC0zXCIgfTtcclxuICAgICAgICAgICAgICAgIEhUTUxMYWJlbEVsZW1lbnQgbGJsNCA9IG5ldyBIVE1MTGFiZWxFbGVtZW50KCkgeyBIdG1sRm9yID0gXCJjaGVja2JveC00XCIsIFRleHRDb250ZW50ID0gXCI1IFN0YXJcIiB9O1xyXG4gICAgICAgICAgICAgICAgSFRNTElucHV0RWxlbWVudCBjYjQgPSBuZXcgSFRNTElucHV0RWxlbWVudCgpIHsgVHlwZSA9IElucHV0VHlwZS5DaGVja2JveCwgTmFtZSA9IFwiY2hlY2tib3gtNFwiLCBJZCA9IFwiY2hlY2tib3gtNFwiIH07XHJcbiAgICAgICAgICAgICAgICBvdXRlckZpZWxkc2V0LkFwcGVuZENoaWxkKGxibDEpO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJGaWVsZHNldC5BcHBlbmRDaGlsZChjYjEpO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJGaWVsZHNldC5BcHBlbmRDaGlsZChsYmwyKTtcclxuICAgICAgICAgICAgICAgIG91dGVyRmllbGRzZXQuQXBwZW5kQ2hpbGQoY2IyKTtcclxuICAgICAgICAgICAgICAgIG91dGVyRmllbGRzZXQuQXBwZW5kQ2hpbGQobGJsMyk7XHJcbiAgICAgICAgICAgICAgICBvdXRlckZpZWxkc2V0LkFwcGVuZENoaWxkKGNiMyk7XHJcbiAgICAgICAgICAgICAgICBvdXRlckZpZWxkc2V0LkFwcGVuZENoaWxkKGxibDQpO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJGaWVsZHNldC5BcHBlbmRDaGlsZChjYjQpO1xyXG4gICAgICAgICAgICAgICAgY2IxLkNoZWNrYm94cmFkaW8oKTtcclxuICAgICAgICAgICAgICAgIGNiMi5DaGVja2JveHJhZGlvKCk7XHJcbiAgICAgICAgICAgICAgICBjYjMuQ2hlY2tib3hyYWRpbygpO1xyXG4gICAgICAgICAgICAgICAgY2I0LkNoZWNrYm94cmFkaW8oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKG91dGVyRmllbGRzZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKG5ldyBIVE1MSGVhZGluZ0VsZW1lbnQoSGVhZGluZ1R5cGUuSDIpIHsgVGV4dENvbnRlbnQgPSBcIlJhZGlvXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0ZXJGaWVsZHNldDIgPSBuZXcgSFRNTEZpZWxkU2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJGaWVsZHNldDIuQXBwZW5kQ2hpbGQobmV3IEhUTUxMYWJlbEVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBMb2NhdGlvbjogXCIgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgSFRNTExhYmVsRWxlbWVudCBybGJsMSA9IG5ldyBIVE1MTGFiZWxFbGVtZW50KCkgeyBIdG1sRm9yID0gXCJyYWRpby0xXCIsIFRleHRDb250ZW50ID0gXCJOZXcgWW9ya1wiIH07XHJcbiAgICAgICAgICAgICAgICBIVE1MSW5wdXRFbGVtZW50IHJkMSA9IG5ldyBIVE1MSW5wdXRFbGVtZW50KCkgeyBUeXBlID0gSW5wdXRUeXBlLlJhZGlvLCBOYW1lID0gXCJyYWRpby0xXCIsIElkID0gXCJyYWRpby0xXCIgfTtcclxuICAgICAgICAgICAgICAgIEhUTUxMYWJlbEVsZW1lbnQgcmxibDIgPSBuZXcgSFRNTExhYmVsRWxlbWVudCgpIHsgSHRtbEZvciA9IFwicmFkaW8tMlwiLCBUZXh0Q29udGVudCA9IFwiUGFyaXNcIiB9O1xyXG4gICAgICAgICAgICAgICAgSFRNTElucHV0RWxlbWVudCByZDIgPSBuZXcgSFRNTElucHV0RWxlbWVudCgpIHsgVHlwZSA9IElucHV0VHlwZS5SYWRpbywgTmFtZSA9IFwicmFkaW8tMVwiLCBJZCA9IFwicmFkaW8tMlwiIH07XHJcbiAgICAgICAgICAgICAgICBIVE1MTGFiZWxFbGVtZW50IHJsYmwzID0gbmV3IEhUTUxMYWJlbEVsZW1lbnQoKSB7IEh0bWxGb3IgPSBcInJhZGlvLTNcIiwgVGV4dENvbnRlbnQgPSBcIkxvbmRvblwiIH07XHJcbiAgICAgICAgICAgICAgICBIVE1MSW5wdXRFbGVtZW50IHJkMyA9IG5ldyBIVE1MSW5wdXRFbGVtZW50KCkgeyBUeXBlID0gSW5wdXRUeXBlLlJhZGlvLCBOYW1lID0gXCJyYWRpby0xXCIsIElkID0gXCJyYWRpby0zXCIgfTtcclxuICAgICAgICAgICAgICAgIG91dGVyRmllbGRzZXQyLkFwcGVuZENoaWxkKHJsYmwxKTtcclxuICAgICAgICAgICAgICAgIG91dGVyRmllbGRzZXQyLkFwcGVuZENoaWxkKHJkMSk7XHJcbiAgICAgICAgICAgICAgICBvdXRlckZpZWxkc2V0Mi5BcHBlbmRDaGlsZChybGJsMik7XHJcbiAgICAgICAgICAgICAgICBvdXRlckZpZWxkc2V0Mi5BcHBlbmRDaGlsZChyZDIpO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJGaWVsZHNldDIuQXBwZW5kQ2hpbGQocmxibDMpO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJGaWVsZHNldDIuQXBwZW5kQ2hpbGQocmQzKTtcclxuICAgICAgICAgICAgICAgIHJkMS5DaGVja2JveHJhZGlvKCk7XHJcbiAgICAgICAgICAgICAgICByZDIuQ2hlY2tib3hyYWRpbygpO1xyXG4gICAgICAgICAgICAgICAgcmQzLkNoZWNrYm94cmFkaW8oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKG91dGVyRmllbGRzZXQyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG5cclxuICAgICAgICAgICAgI3JlZ2lvbiB0YWJzXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKG5ldyBIVE1MSGVhZGluZ0VsZW1lbnQoSGVhZGluZ1R5cGUuSDIpIHsgVGV4dENvbnRlbnQgPVwiVGFic1wifSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFic2RpdiA9IG5ldyBIVE1MRGl2RWxlbWVudCgpIHsgSWQgPVwidGFic1wifTtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJMaXN0ID0gbmV3IEhUTUxVTGlzdEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHRhYkxpc3QuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKS5BcHBlbmRDaGlsZChuZXcgSFRNTEFuY2hvckVsZW1lbnQoKSB7IEhyZWYgPSBcIiN0YWJzLTFcIiwgVGV4dENvbnRlbnQgPSBcIk51bmMgdGluY2lkdW50XCJ9KS5QYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRhYkxpc3QuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKS5BcHBlbmRDaGlsZChuZXcgSFRNTEFuY2hvckVsZW1lbnQoKSB7IEhyZWYgPSBcIiN0YWJzLTJcIiwgVGV4dENvbnRlbnQgPSBcIlByb2luIGRvbG9yXCIgfSkuUGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0YWJMaXN0LkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxBbmNob3JFbGVtZW50KCkgeyBIcmVmID0gXCIjdGFicy0zXCIsIFRleHRDb250ZW50ID0gXCJBZW5lYW4gbGFjaW5pYVwiIH0pLlBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGFic2Rpdi5BcHBlbmRDaGlsZCh0YWJMaXN0KTtcclxuICAgICAgICAgICAgICAgIHRhYnNkaXYuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBJZCA9IFwidGFicy0xXCIgfS5BcHBlbmRDaGlsZChuZXcgSFRNTFBhcmFncmFwaEVsZW1lbnQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGV4dENvbnRlbnQgPSBcIlByb2luIGVsaXQgYXJjdSwgcnV0cnVtIGNvbW1vZG8sIHZlaGljdWxhIHRlbXB1cywgY29tbW9kbyBhLCByaXN1cy4gQ3VyYWJpdHVyIG5lYyBhcmN1LiBEb25lYyBzb2xsaWNpdHVkaW4gbWkgc2l0IGFtZXQgbWF1cmlzLiBOYW0gZWxlbWVudHVtIHF1YW0gdWxsYW1jb3JwZXIgYW50ZS4gRXRpYW0gYWxpcXVldCBtYXNzYSBldCBsb3JlbS4gTWF1cmlzIGRhcGlidXMgbGFjdXMgYXVjdG9yIHJpc3VzLiBBZW5lYW4gdGVtcG9yIHVsbGFtY29ycGVyIGxlby4gVml2YW11cyBzZWQgbWFnbmEgcXVpcyBsaWd1bGEgZWxlaWZlbmQgYWRpcGlzY2luZy4gRHVpcyBvcmNpLiBBbGlxdWFtIHNvZGFsZXMgdG9ydG9yIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG51bGxhLiBEdWlzIGFsaXF1YW0gbW9sZXN0aWUgZXJhdC4gVXQgZXQgbWF1cmlzIHZlbCBwZWRlIHZhcml1cyBzb2xsaWNpdHVkaW4uIFNlZCB1dCBkb2xvciBuZWMgb3JjaSB0aW5jaWR1bnQgaW50ZXJkdW0uIFBoYXNlbGx1cyBpcHN1bS4gTnVuYyB0cmlzdGlxdWUgdGVtcHVzIGxlY3R1cy5cIlxyXG4gICAgICAgICAgICAgICAgfSkuUGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0YWJzZGl2LkFwcGVuZENoaWxkKG5ldyBIVE1MRGl2RWxlbWVudCgpIHsgSWQgPSBcInRhYnMtMlwiIH0uQXBwZW5kQ2hpbGQobmV3IEhUTUxQYXJhZ3JhcGhFbGVtZW50KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRleHRDb250ZW50ID0gXCJNb3JiaSB0aW5jaWR1bnQsIGR1aSBzaXQgYW1ldCBmYWNpbGlzaXMgZmV1Z2lhdCwgb2RpbyBtZXR1cyBncmF2aWRhIGFudGUsIHV0IHBoYXJldHJhIG1hc3NhIG1ldHVzIGlkIG51bmMuIER1aXMgc2NlbGVyaXNxdWUgbW9sZXN0aWUgdHVycGlzLiBTZWQgZnJpbmdpbGxhLCBtYXNzYSBlZ2V0IGx1Y3R1cyBtYWxlc3VhZGEsIG1ldHVzIGVyb3MgbW9sZXN0aWUgbGVjdHVzLCB1dCB0ZW1wdXMgZXJvcyBtYXNzYSB1dCBkb2xvci4gQWVuZWFuIGFsaXF1ZXQgZnJpbmdpbGxhIHNlbS4gU3VzcGVuZGlzc2Ugc2VkIGxpZ3VsYSBpbiBsaWd1bGEgc3VzY2lwaXQgYWxpcXVhbS4gUHJhZXNlbnQgaW4gZXJvcyB2ZXN0aWJ1bHVtIG1pIGFkaXBpc2NpbmcgYWRpcGlzY2luZy4gTW9yYmkgZmFjaWxpc2lzLiBDdXJhYml0dXIgb3JuYXJlIGNvbnNlcXVhdCBudW5jLiBBZW5lYW4gdmVsIG1ldHVzLiBVdCBwb3N1ZXJlIHZpdmVycmEgbnVsbGEuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gUGVsbGVudGVzcXVlIGNvbnZhbGxpcy4gTWFlY2VuYXMgZmV1Z2lhdCwgdGVsbHVzIHBlbGxlbnRlc3F1ZSBwcmV0aXVtIHBvc3VlcmUsIGZlbGlzIGxvcmVtIGV1aXNtb2QgZmVsaXMsIGV1IG9ybmFyZSBsZW8gbmlzaSB2ZWwgZmVsaXMuIE1hdXJpcyBjb25zZWN0ZXR1ciB0b3J0b3IgZXQgcHVydXMuXCJcclxuICAgICAgICAgICAgICAgIH0pLlBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGFic2Rpdi5BcHBlbmRDaGlsZChuZXcgSFRNTERpdkVsZW1lbnQoKSB7IElkID0gXCJ0YWJzLTNcIiB9LkFwcGVuZENoaWxkKG5ldyBIVE1MUGFyYWdyYXBoRWxlbWVudCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBUZXh0Q29udGVudCA9IFwiTWF1cmlzIGVsZWlmZW5kIGVzdCBldCB0dXJwaXMuIER1aXMgaWQgZXJhdC4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQWxpcXVhbSB2dWxwdXRhdGUsIHBlZGUgdmVsIHZlaGljdWxhIGFjY3Vtc2FuLCBtaSBuZXF1ZSBydXRydW0gZXJhdCwgZXUgY29uZ3VlIG9yY2kgbG9yZW0gZWdldCBsb3JlbS4gVmVzdGlidWx1bSBub24gYW50ZS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBGdXNjZSBzb2RhbGVzLiBRdWlzcXVlIGV1IHVybmEgdmVsIGVuaW0gY29tbW9kbyBwZWxsZW50ZXNxdWUuIFByYWVzZW50IGV1IHJpc3VzIGhlbmRyZXJpdCBsaWd1bGEgdGVtcHVzIHByZXRpdW0uIEN1cmFiaXR1ciBsb3JlbSBlbmltLCBwcmV0aXVtIG5lYywgZmV1Z2lhdCBuZWMsIGx1Y3R1cyBhLCBsYWN1cy5cIlxyXG4gICAgICAgICAgICAgICAgfSkuUGFyZW50RWxlbWVudC5BcHBlbmRDaGlsZChuZXcgSFRNTFBhcmFncmFwaEVsZW1lbnQoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFRleHRDb250ZW50ID0gXCJEdWlzIGN1cnN1cy4gTWFlY2VuYXMgbGlndWxhIGVyb3MsIGJsYW5kaXQgbmVjLCBwaGFyZXRyYSBhdCwgc2VtcGVyIGF0LCBtYWduYS4gTnVsbGFtIGFjIGxhY3VzLiBOdWxsYSBmYWNpbGlzaS4gUHJhZXNlbnQgdml2ZXJyYSBqdXN0byB2aXRhZSBuZXF1ZS4gUHJhZXNlbnQgYmxhbmRpdCBhZGlwaXNjaW5nIHZlbGl0LiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBEb25lYyBtYXR0aXMsIHBlZGUgdmVsIHBoYXJldHJhIGJsYW5kaXQsIG1hZ25hIGxpZ3VsYSBmYXVjaWJ1cyBlcm9zLCBpZCBldWlzbW9kIGxhY3VzIGRvbG9yIGVnZXQgb2Rpby4gTmFtIHNjZWxlcmlzcXVlLiBEb25lYyBub24gbGliZXJvIHNlZCBudWxsYSBtYXR0aXMgY29tbW9kby4gVXQgc2FnaXR0aXMuIERvbmVjIG5pc2kgbGVjdHVzLCBmZXVnaWF0IHBvcnR0aXRvciwgdGVtcG9yIGFjLCB0ZW1wb3Igdml0YWUsIHBlZGUuIEFlbmVhbiB2ZWhpY3VsYSB2ZWxpdCBldSB0ZWxsdXMgaW50ZXJkdW0gcnV0cnVtLiBNYWVjZW5hcyBjb21tb2RvLiBQZWxsZW50ZXNxdWUgbmVjIGVsaXQuIEZ1c2NlIGluIGxhY3VzLiBWaXZhbXVzIGEgbGliZXJvIHZpdGFlIGxlY3R1cyBoZW5kcmVyaXQgaGVuZHJlcml0LlwiXHJcbiAgICAgICAgICAgICAgICB9KS5QYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRhYnNkaXYuVGFicygpO1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQodGFic2Rpdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICAgICAgI3JlZ2lvbiBkaWFsb2dcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKG5ldyBIVE1MSGVhZGluZ0VsZW1lbnQoSGVhZGluZ1R5cGUuSDIpIHsgVGV4dENvbnRlbnQgPSBcIkRpYWxvZ1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bk5ybSA9IG5ldyBIVE1MQnV0dG9uRWxlbWVudCgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGV4dENvbnRlbnQgPSBcIkRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bk1kbCA9IG5ldyBIVE1MQnV0dG9uRWxlbWVudCgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGV4dENvbnRlbnQgPSBcIk1vZGFsIERpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnRuTnJtLkJ1dHRvbihuZXcgQnV0dG9uUGFyYW1ldGVyKCkgeyBJY29uID0gXCJ1aS1pY29uLW5ld3dpblwiIH0pO1xyXG4gICAgICAgICAgICAgICAgYnRuTWRsLkJ1dHRvbihuZXcgQnV0dG9uUGFyYW1ldGVyKCkgeyBJY29uID0gXCJ1aS1pY29uLW5ld3dpblwiIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ0bk5ybS5PbkNsaWNrICs9IChldikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiSGVsbG8gSSBhbSBhbiBkaWFsb2dcIiB9KS5EaWFsb2cobmV3IERpYWxvZ1BhcmFtZXRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZSA9IFwiRGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBidG5NZGwuT25DbGljayArPSAoZXYpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0RpdiA9IG5ldyBIVE1MRGl2RWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIkkgYW0gYSBtb2RhbCBkaWFsb2dcIiB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Rpdi5EaWFsb2cobmV3IERpYWxvZ1BhcmFtZXRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZSA9IFwiTW9kYWwgRGlhbG9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vZGFsID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9ucyA9IG5ldyBEaWFsb2dCdXR0b25bXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlhbG9nQnV0dG9uICgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgPSAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nRGl2LkRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0ID1cIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlhbG9nQnV0dG9uICgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgPSAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nRGl2LkRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0ID1cIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChidG5Ocm0pO1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQoYnRuTWRsKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlbmRyZWdpb25cclxuXHJcblxyXG4gICAgICAgICAgICAjcmVnaW9uIHNsaWRlclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChuZXcgSFRNTEhlYWRpbmdFbGVtZW50KEhlYWRpbmdUeXBlLkgyKSB7IFRleHRDb250ZW50ID0gXCJTbGlkZXJcIiB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXIgPSBuZXcgSFRNTERpdkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5TbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKHNsaWRlcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gbmV3IEhUTUxQYXJhZ3JhcGhFbGVtZW50KClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBUZXh0Q29udGVudCA9IFwiVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuU2xpZGVyU2xpZGUoKGdsb2JhbDo6U3lzdGVtLkFjdGlvbjxnbG9iYWw6OkJyaWRnZS5qUXVlcnlVSS5KcXVlcnlFdmVudHMsIGdsb2JhbDo6QnJpZGdlLmpRdWVyeVVJLldpZGdldHMuU2xpZGVyRXZlbnQ+KW5ldyBTeXN0ZW0uQWN0aW9uPEJyaWRnZS5qUXVlcnlVSS5KcXVlcnlFdmVudHMsIFNsaWRlckV2ZW50PigoZXYsIHVpKSA9PiBcclxuICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5UZXh0Q29udGVudCA9IFwiVmFsdWU6IFwiICsgdWkuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgICAgICNyZWdpb24gZGF0ZXBpY2tlclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChuZXcgSFRNTEhlYWRpbmdFbGVtZW50KEhlYWRpbmdUeXBlLkgyKSB7IFRleHRDb250ZW50ID0gXCJEYXRlcGlja2VyXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wID0gbmV3IEhUTUxJbnB1dEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlucC5EYXRlcGlja2VyKCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChpbnApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG5cclxuICAgICAgICAgICAgI3JlZ2lvbiBwcm9ncmVzc2JhciBcclxuICAgICAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChuZXcgSFRNTEhlYWRpbmdFbGVtZW50KEhlYWRpbmdUeXBlLkgyKSB7IFRleHRDb250ZW50ID0gXCJQcm9ncmVzc2JhclwiIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IG5ldyBIVE1MRGl2RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgZGl2LlByb2dyZXNzYmFyKG5ldyBQcm9ncmVzc2JhclBhcmFtdGVyKCkgeyBNYXggPTEwMH0pO1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYnRuID0gbmV3IEhUTUxCdXR0b25FbGVtZW50KClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBUZXh0Q29udGVudCA9IFwiU3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICBPbkNsaWNrID0gKGV2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LlByb2dyZXNzYmFyVmFsdWUoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzLlRhc2suUnVuPGdsb2JhbDo6U3lzdGVtLlRocmVhZGluZy5UYXNrcy5UYXNrPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OlN5c3RlbS5UaHJlYWRpbmcuVGFza3MuVGFzaz4pKGFzeW5jICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludCB2YWwgPSBkaXYuUHJvZ3Jlc3NiYXJWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPiAxMDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuUHJvZ3Jlc3NiYXJWYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFN5c3RlbS5UaHJlYWRpbmcuVGFza3MuVGFzay5EZWxheSgxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJ0bi5CdXR0b24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgICAgICNyZWdpb24gc2VsZWN0bWVudVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChuZXcgSFRNTEhlYWRpbmdFbGVtZW50KEhlYWRpbmdUeXBlLkgyKSB7IFRleHRDb250ZW50ID0gXCJTZWxlY3RtZW51XCIgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsID0gbmV3IEhUTUxTZWxlY3RFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBzZWwuQXBwZW5kQ2hpbGQobmV3IEhUTUxPcHRpb25FbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiU2xvd2VyXCIgfSk7XHJcbiAgICAgICAgICAgICAgICBzZWwuQXBwZW5kQ2hpbGQobmV3IEhUTUxPcHRpb25FbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiU2xvd1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgc2VsLkFwcGVuZENoaWxkKG5ldyBIVE1MT3B0aW9uRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiIH0pO1xyXG4gICAgICAgICAgICAgICAgc2VsLkFwcGVuZENoaWxkKG5ldyBIVE1MT3B0aW9uRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIkZhc3RcIiB9KTtcclxuICAgICAgICAgICAgICAgIHNlbC5BcHBlbmRDaGlsZChuZXcgSFRNTE9wdGlvbkVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJGYXN0ZXJcIiB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKHNlbCk7XHJcbiAgICAgICAgICAgICAgICBzZWwuU2VsZWN0bWVudShuZXcgU2VsZWN0bWVudVBhcmFtZXRlcigpIHsgQXBwZW5kVG8gPSBjb250ZW5kRWxlbWVudCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG5cclxuICAgICAgICAgICAgI3JlZ2lvbiBtZW51XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKG5ldyBIVE1MSGVhZGluZ0VsZW1lbnQoSGVhZGluZ1R5cGUuSDIpIHsgVGV4dENvbnRlbnQgPSBcIk1lbnVcIiB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudSA9IG5ldyBIVE1MVUxpc3RFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBtZW51LlN0eWxlLldpZHRoID0gXCIxNTBweFwiO1xyXG4gICAgICAgICAgICAgICAgbWVudS5BcHBlbmRDaGlsZChuZXcgSFRNTExJRWxlbWVudCgpIHsgQ2xhc3NOYW1lID0gXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiIH0uQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiVG95cyAobi9hKVwiIH0pLlBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5BcHBlbmRDaGlsZChuZXcgSFRNTExJRWxlbWVudCgpLkFwcGVuZENoaWxkKG5ldyBIVE1MRGl2RWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIkJvb2tzXCIgfSkuUGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICBtZW51LkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiQ2xvdGhpbmdcIiB9KS5QYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKS5BcHBlbmRDaGlsZChuZXcgSFRNTERpdkVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJFbGVjdHJvbmljc1wiIH0pLlBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAuQXBwZW5kQ2hpbGQobmV3IEhUTUxVTGlzdEVsZW1lbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKSB7IENsYXNzTmFtZSA9IFwidWktc3RhdGUtZGlzYWJsZWRcIiB9LkFwcGVuZENoaWxkKG5ldyBIVE1MRGl2RWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIkhvbWUgRW50ZXJ0YWlubWVudFwiIH0pLlBhcmVudE5vZGUpLlBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiQ2FyIEhpZmlcIiB9KS5QYXJlbnROb2RlKS5QYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5BcHBlbmRDaGlsZChuZXcgSFRNTExJRWxlbWVudCgpLkFwcGVuZENoaWxkKG5ldyBIVE1MRGl2RWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIlV0aWxpdGllc1wiIH0pLlBhcmVudE5vZGUpLlBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgKS5QYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKS5BcHBlbmRDaGlsZChuZXcgSFRNTERpdkVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJNb3ZpZXNcIiB9KS5QYXJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtZW51LkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiTXVzaWNcIiB9KS5QYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgLkFwcGVuZENoaWxkKG5ldyBIVE1MVUxpc3RFbGVtZW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiUm9ja1wiIH0pLlBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5BcHBlbmRDaGlsZChuZXcgSFRNTFVMaXN0RWxlbWVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiQWx0ZXJuYXRpdmVcIn0pLlBhcmVudE5vZGUpLlBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKS5BcHBlbmRDaGlsZChuZXcgSFRNTERpdkVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJDbGFzc2ljc1wiIH0pLlBhcmVudE5vZGUpLlBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuUGFyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLlBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiSmF6elwiIH0pLlBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5BcHBlbmRDaGlsZChuZXcgSFRNTFVMaXN0RWxlbWVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiRnJlZWphenpcIiB9KS5QYXJlbnROb2RlKS5QYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiQmlnIEJhbmRcIiB9KS5QYXJlbnROb2RlKS5QYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFwcGVuZENoaWxkKG5ldyBIVE1MTElFbGVtZW50KCkuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiTW9kZXJuXCIgfSkuUGFyZW50Tm9kZSkuUGFyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5QYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkuUGFyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKS5BcHBlbmRDaGlsZChuZXcgSFRNTERpdkVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJQb3BcIiB9KS5QYXJlbnROb2RlKS5QYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICkuUGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgIG1lbnUuQXBwZW5kQ2hpbGQobmV3IEhUTUxMSUVsZW1lbnQoKSB7IENsYXNzTmFtZSA9IFwidWktc3RhdGUtZGlzYWJsZWRcIiB9LkFwcGVuZENoaWxkKG5ldyBIVE1MRGl2RWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIlNwZWNpYWxzIChuL2EpXCIgfSkuUGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbWVudS5NZW51KCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChtZW51KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG5cclxuICAgICAgICAgICAgI3JlZ2lvbiB0b29sdGlwXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKG5ldyBIVE1MSGVhZGluZ0VsZW1lbnQoSGVhZGluZ1R5cGUuSDIpIHsgVGV4dENvbnRlbnQgPSBcIlRvb2x0aXBcIiB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYSA9IG5ldyBIVE1MUGFyYWdyYXBoRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR0bGluayA9IG5ldyBIVE1MQW5jaG9yRWxlbWVudCgpIHsgSHJlZiA9XCIjXCIsIFRleHRDb250ZW50ID0gXCJUb29sdGlwc1wiLCBUaXRsZSA9IFwiVGhhdCdzIHdoYXQgdGhpcyB3aWRnZXQgaXNcIiB9O1xyXG4gICAgICAgICAgICAgICAgdHRsaW5rLlRvb2x0aXAoKTtcclxuICAgICAgICAgICAgICAgIHBhcmEuQXBwZW5kQ2hpbGQodHRsaW5rKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYS5BcHBlbmRDaGlsZChuZXcgVGV4dChcIiBjYW4gYmUgYXR0YWNoZWQgdG8gYW55IGVsZW1lbnQuIFdoZW4geW91IGhvdmVyIHRoZSBlbGVtZW50IHdpdGggeW91ciBtb3VzZSwgdGhlIHRpdGxlIGF0dHJpYnV0ZSBpcyBkaXNwbGF5ZWQgaW4gYSBsaXR0bGUgYm94IG5leHQgdG8gdGhlIGVsZW1lbnQsIGp1c3QgbGlrZSBhIG5hdGl2ZSB0b29sdGlwLlwiKSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW5kRWxlbWVudC5BcHBlbmRDaGlsZChwYXJhKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG5cclxuICAgICAgICAgICAgI3JlZ2lvbiBlcnJvcmhpZ2hcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQobmV3IEhUTUxIZWFkaW5nRWxlbWVudChIZWFkaW5nVHlwZS5IMikgeyBUZXh0Q29udGVudCA9IFwiSGlnaGxpZ2h0IC8gRXJyb3JcIiB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBoaWdobGlnaHQgPSBuZXcgSFRNTERpdkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5IaWdobGlnaHQoXCJIZXkhXCIsIFwiIFNhbXBsZSB1aS1zdGF0ZS1oaWdobGlnaHQgc3R5bGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkFwcGVuZENoaWxkKG5ldyBIVE1MQlJFbGVtZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBlcnJvci5FcnJvcihcIkhleSFcIiwgXCJTYW1wbGUgdWktc3RhdGUtZXJyb3Igc3R5bGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGVuZEVsZW1lbnQuQXBwZW5kQ2hpbGQoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlbmRyZWdpb25cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnRlbmRFbGVtZW50LkRpYWxvZyhuZXcgRGlhbG9nUGFyYW1ldGVyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQnV0dG9ucyA9IG5ldyBEaWFsb2dCdXR0b25bXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IERpYWxvZ0J1dHRvbigpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayA9ICgpID0+IHsgY29udGVuZEVsZW1lbnQuRGlhbG9nQ2xvc2UoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCA9IFwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBIZWlnaHQgPSA2MDAsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IDkwMCxcclxuICAgICAgICAgICAgICAgIFRpdGxlID0gXCJqUXVlcnlVaSBEZW1vIEVsZW1lbnRzXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIFRoZW1lQ2hhbmdlcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZGlhbG9nID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIHZhciB0aGVtZXMgPSBuZXcgc3RyaW5nW10geyBcImJhc2VcIiwgXCJibGFjay10aWVcIiwgXCJibGl0emVyXCIsIFwiY3VwZXJ0aW5vXCIsIFwiZGFyay1oaXZlXCIsIFwiZG90LWx1dlwiLCBcImVnZ3BsYW50XCIsIFwiZXhjaXRlLWJpa2VcIiwgXCJmbGlja1wiLCBcImhvdC1zbmVha3NcIiwgXCJodW1hbml0eVwiLCBcImxlLWZyb2dcIiwgXCJtaW50LWNob2NcIixcclxuICAgICAgICAgICAgICAgIFwib3ZlcmNhc3RcIiwgXCJwZXBwZXItZ3JpbmRlclwiLCBcInJlZG1vbmRcIiwgXCJzbW9vdGhuZXNzXCIsIFwic291dGgtc3RyZWV0XCIsIFwic3RhcnRcIiwgXCJzdW5ueVwiLCBcInN3YW5reS1wdXJzZVwiLCBcInRyb250YXN0aWNcIiwgXCJ1aS1kYXJrbmVzc1wiLCBcInVpLWxpZ2h0bmVzc1wiLCBcInZhZGVyXCIgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWwgPSBuZXcgSFRNTFNlbGVjdEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgZm9yZWFjaCh2YXIgdGhlbWUgaW4gdGhlbWVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWwuQXBwZW5kQ2hpbGQobmV3IEhUTUxPcHRpb25FbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IHRoZW1lLCBWYWx1ZSA9IHRoZW1lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpYWxvZy5BcHBlbmRDaGlsZChzZWwpO1xyXG4gICAgICAgICAgICBzZWwuU2VsZWN0bWVudShuZXcgU2VsZWN0bWVudVBhcmFtZXRlcigpIHsgQXBwZW5kVG8gPSBkaWFsb2d9KTtcclxuICAgICAgICAgICAgdmFyIGJ0biA9IG5ldyBIVE1MQnV0dG9uRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIk9LXCIgfTtcclxuICAgICAgICAgICAgYnRuLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICBidG4uT25DbGljayA9IChldikgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdUaGVtZSA9IHNlbC5PcHRpb25zW3NlbC5TZWxlY3RlZEluZGV4XS5WYWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciB0aGVtZSA9IERvY3VtZW50LkdldEVsZW1lbnRCeUlkPEhUTUxTdHlsZUVsZW1lbnQ+KFwidWl0aGVtZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoZW1lLlRvRHluYW1pYygpLmhyZWYgPSBcIi4uL2Nzcy91aV90aGVtZXMvXCIgKyBuZXdUaGVtZSArIFwiL3RoZW1lLmNzc1wiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkaWFsb2cuQXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICAgICAgZGlhbG9nLkRpYWxvZyhuZXcgRGlhbG9nUGFyYW1ldGVyKCkge1xyXG4gICAgICAgICAgICAgICAgUG9zaXRpb24gPSBuZXcgQnJpZGdlLmpRdWVyeVVJLkNvbW1vbi5Qb3NpdGlvbigpIHsgQXQgPSBCcmlkZ2UualF1ZXJ5VUkuV2luZG93UG9zaXRpb25zLkNlbnRlciwgTXkgPSBCcmlkZ2UualF1ZXJ5VUkuV2luZG93UG9zaXRpb25zLkNlbnRlciB9LFxyXG4gICAgICAgICAgICAgICAgVGl0bGUgPSBcIlRoZW1lcm9sbGVyXCIsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IDQwMCxcclxuICAgICAgICAgICAgICAgIEhlaWdodCA9IDMwMCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLmpRdWVyeVVJLldpZGdldHM7XHJcbnVzaW5nIERhdGF0YWJsZXMubmV0O1xyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBUYWJsZURlbW9cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2hvd1RhYmxlRGVtbygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZGl2ID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGFibGUgPSBuZXcgSFRNTFRhYmxlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5DcmVhdGVUSGVhZCgpO1xyXG4gICAgICAgICAgICB2YXIgdEhlYWRSb3cgPSBuZXcgSFRNTFRhYmxlUm93RWxlbWVudCgpO1xyXG4gICAgICAgICAgICB0SGVhZFJvdy5BcHBlbmRDaGlsZChuZXcgSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJOYW1lXCIgfSk7XHJcbiAgICAgICAgICAgIHRIZWFkUm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIlBvc2l0aW9uXCIgfSk7XHJcbiAgICAgICAgICAgIHRIZWFkUm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIk9mZmljZVwiIH0pO1xyXG4gICAgICAgICAgICB0SGVhZFJvdy5BcHBlbmRDaGlsZChuZXcgSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gXCJBZ2VcIiB9KTtcclxuICAgICAgICAgICAgdEhlYWRSb3cuQXBwZW5kQ2hpbGQobmV3IEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IFwiU3RhcnREYXRlXCIgfSk7XHJcbiAgICAgICAgICAgIHRIZWFkUm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBcIlNhbGFyeVwiIH0pO1xyXG4gICAgICAgICAgICB0YWJsZS5USGVhZC5BcHBlbmRDaGlsZCh0SGVhZFJvdyk7XHJcbiAgICAgICAgICAgIHZhciB0Qm9keSA9IG5ldyBIVE1MVGFibGVTZWN0aW9uRWxlbWVudChUYWJsZVNlY3Rpb25UeXBlLkJvZHkpO1xyXG4gICAgICAgICAgICB0YWJsZS5BcHBlbmRDaGlsZCh0Qm9keSk7XHJcbiAgICAgICAgICAgIGRpdi5BcHBlbmRDaGlsZCh0YWJsZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFNjcmlwdC5HZXQoXCJ0YWJsZWRlbW9Kc29uRGF0YVwiKS5Ub0R5bmFtaWMoKTtcclxuICAgICAgICAgICAgZm9yZWFjaCh2YXIgZGF0YVJvdyBpbiBkYXRhKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gbmV3IEhUTUxUYWJsZVJvd0VsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHJvdy5Pbk1vdXNlRW50ZXIgPSAoZXYpID0+IHsgcm93LkNsYXNzTGlzdC5BZGQoXCJoaWdobGlnaHRcIik7IH07XHJcbiAgICAgICAgICAgICAgICByb3cuT25Nb3VzZUxlYXZlID0gKGV2KSA9PiB7IHJvdy5DbGFzc0xpc3QuUmVtb3ZlKFwiaGlnaGxpZ2h0XCIpOyB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJvdy5Pbk1vdXNlRG93biA9IChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cuQ2xhc3NMaXN0LkNvbnRhaW5zKFwic2VsZWN0ZWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuQ2xhc3NMaXN0LlJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuQ2xhc3NMaXN0LkFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gZGF0YVJvdy5OYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgcm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gZGF0YVJvdy5Qb3NpdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgIHJvdy5BcHBlbmRDaGlsZChuZXcgSFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IGRhdGFSb3cuT2ZmaWNlIH0pO1xyXG4gICAgICAgICAgICAgICAgcm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQoKSB7IFRleHRDb250ZW50ID0gZGF0YVJvdy5BZ2UgfSk7XHJcbiAgICAgICAgICAgICAgICByb3cuQXBwZW5kQ2hpbGQobmV3IEhUTUxUYWJsZURhdGFDZWxsRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBkYXRhUm93LlN0YXJ0RGF0ZSB9KTtcclxuICAgICAgICAgICAgICAgIHJvdy5BcHBlbmRDaGlsZChuZXcgSFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IGRhdGFSb3cuU2FsYXJ5IH0pO1xyXG4gICAgICAgICAgICAgICAgdEJvZHkuQXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYuRGlhbG9nKG5ldyBEaWFsb2dQYXJhbWV0ZXIoKSB7IFRpdGxlID0gXCJEYXRhdGFibGUgRGVtb1wiLCBXaWR0aCA9IDk2MCwgSGVpZ2h0ID0gNjAwIH0pO1xyXG5cclxuICAgICAgICAgICAgZGl2LkRpYWxvZ0V2ZW50UmVzaXplKFxyXG4oZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uPGdsb2JhbDo6QnJpZGdlLmpRdWVyeTIualF1ZXJ5RXZlbnQsIGdsb2JhbDo6QnJpZGdlLmpRdWVyeVVJLldpZGdldHMuRGlhbG9nUmVzaXplRXZlbnQ+KSggICAgICAgICAgICAgICAgKGV2LCB1aSkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5EYXRhVGFibGVEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbikgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICB0YWJsZS5EYXRhVGFibGUobmV3IERhdGFUYWJsZVBhcmFtZXRlcigpIHsgU2Nyb2xsQ29sbGFwc2UgPSB0cnVlLCBTY3JvbGxZID0gXCIxMDAlXCIgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGFibGUuRGF0YVRhYmxlRHJhdygpO1xyXG5cclxuICAgICAgICAgICAgLy9CcmlkZ2UualF1ZXJ5Mi5qUXVlcnkuQWpheChuZXcgQnJpZGdlLmpRdWVyeTIuQWpheE9wdGlvbnNcclxuICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgIC8vICAgIFVybCA9IFwiVGV4dEZpbGUxLnR4dFwiLFxyXG4gICAgICAgICAgICAvLyAgICBDb250ZW50VHlwZSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAvLyAgICBTdWNjZXNzID0gZGVsZWdhdGUgKGR5bmFtaWMgZGF0YSwgc3RyaW5nIHN0ciwgQnJpZGdlLmpRdWVyeTIuanFYSFIganF4aHIpXHJcbiAgICAgICAgICAgIC8vICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgIHZhciByb3cgPSBuZXcgSFRNTFRhYmxlUm93RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgcm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVDb2xFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IGRhdGEuTmFtZSB9KTtcclxuICAgICAgICAgICAgLy8gICAgICAgIHJvdy5BcHBlbmRDaGlsZChuZXcgSFRNTFRhYmxlQ29sRWxlbWVudCgpIHsgVGV4dENvbnRlbnQgPSBkYXRhLlBvc2l0aW9uIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgcm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVDb2xFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IGRhdGEuT2ZmaWNlIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgcm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVDb2xFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IGRhdGEuQWdlIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgcm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVDb2xFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IGRhdGEuU3RhcnREYXRlIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgcm93LkFwcGVuZENoaWxkKG5ldyBIVE1MVGFibGVDb2xFbGVtZW50KCkgeyBUZXh0Q29udGVudCA9IGRhdGEuU2FsYXJ5IH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgdEJvZHkuQXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXQp9Cg==
