using Bridge;
using Bridge.Html5;
using Bridge.jQueryUI.Interactions;
using Bridge.jQueryUI.Widgets;
using Bridge.jQueryUI.Effects;
using Bridge.jQueryUI;

namespace Test
{
    public class Demo
    {
        
        private static HTMLButtonElement _demoButton;
        public static void Main()
        {
            //create a simple lets go button
            _demoButton = new HTMLButtonElement() { TextContent = "Menu" };
            _demoButton.Button();
            _demoButton.OnClick += (ev) => { ShowMenu(); };
            Document.Body.AppendChild(_demoButton);
        }

        //show the main menu
        private static void ShowMenu()
        {
            HTMLDivElement myDiv = new HTMLDivElement();
            myDiv.Dialog(new DialogParameter() {
                Title = "Menu" ,
                Position = new Bridge.jQueryUI.Common.Position()
                {
                    My = Bridge.jQueryUI.WindowPositions.TopLeft,
                    At = Bridge.jQueryUI.WindowPositions.BottomLeft,
                    Of  =_demoButton                  
                },
                Height = 600
            });
            HTMLButtonElement button1 = new HTMLButtonElement() { TextContent = "jQueryUI Demo All" };
            button1.Button();
            button1.OnClick += (ev) => ShowDemo();
            myDiv.AppendChild(button1);
            myDiv.AppendChild(new HTMLBRElement());

            var themes = new HTMLButtonElement() { TextContent = "Themes" };
            themes.Button();
            themes.OnClick += (ev) => ThemeChanger();

            myDiv.AppendChild(themes);
        }

        //show the default jquery ui demo
        private static void ShowDemo()
        {
            HTMLDivElement contendElement = new HTMLDivElement();

            #region accordion
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Accordion" });
                var accordion = new HTMLDivElement();
                accordion.AppendChild(new HTMLHeadingElement(HeadingType.H3) { TextContent = "Section 1" });
                var accSec1 = new HTMLDivElement();
                accSec1.AppendChild(new HTMLParagraphElement()
                {
                    TextContent = "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque.Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc.Nam a nibh.Donec suscipit eros.Nam mi.Proin viverra leo ut odio.Curabitur malesuada.Vestibulum a velit eu ante scelerisque vulputate."

                });
                accordion.AppendChild(accSec1);


                accordion.AppendChild(new HTMLHeadingElement(HeadingType.H3) { TextContent = "Section 2" });
                var accSec2 = new HTMLDivElement();
                accSec2.AppendChild(
                    new HTMLParagraphElement()
                    {
                        TextContent = "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna."
                    });
                accordion.AppendChild(accSec2);

                accordion.AppendChild(new HTMLHeadingElement(HeadingType.H3) { TextContent = "Section 3" });
                var accSec3 = new HTMLDivElement();
                accSec3.AppendChild(
                    new HTMLParagraphElement()
                    {
                        TextContent = "Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui."
                    });
                var accSec3Li = new HTMLUListElement();
                accSec3Li.AppendChild(new HTMLLIElement() { TextContent = "List item one" });
                accSec3Li.AppendChild(new HTMLLIElement() { TextContent = "List item two" });
                accSec3Li.AppendChild(new HTMLLIElement() { TextContent = "List item three" });
                accSec3.AppendChild(accSec3Li);
                accordion.AppendChild(accSec3);


                
                accordion.AppendChild(new HTMLHeadingElement(HeadingType.H3) { TextContent = "Section 4" });
                var accSec4 = new HTMLDivElement();
                accSec4.AppendChild(
                    new HTMLParagraphElement()
                    {
                        TextContent = "Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est."
                    });
                accSec4.AppendChild(
                    new HTMLParagraphElement()
                    {
                        TextContent = "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    });
                accordion.AppendChild(accSec4);

                accordion.Accordion(new AccordionParameter() { HeightStyle = Bridge.jQueryUI.HeightStyles.Content});
                contendElement.AppendChild(accordion);
            }
            #endregion

            #region autocomplete
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Autocomplete" });
                var autocmpl = new HTMLInputElement();
                autocmpl.Autocomplete(new AutocompleteParameter()
                {
                    Source = new AutocompleteSource[]
                    {
                        new AutocompleteSource("ActionScript"),
                        new AutocompleteSource("AppleScript"),
                        new AutocompleteSource("Asp"),
                        new AutocompleteSource("BASIC"),
                        new AutocompleteSource("C"),
                        new AutocompleteSource("C#"),
                        new AutocompleteSource("C++"),
                        new AutocompleteSource("Clojure"),
                        new AutocompleteSource("COBOL"),
                        new AutocompleteSource("ColdFusion"),
                        new AutocompleteSource("Erlang"),
                        new AutocompleteSource("Fortran"),
                        new AutocompleteSource("Groovy"),
                        new AutocompleteSource("Haskell"),
                        new AutocompleteSource("Java"),
                        new AutocompleteSource("JavaScript"),
                        new AutocompleteSource("Lisp"),
                        new AutocompleteSource("Perl"),
                        new AutocompleteSource("PHP"),
                        new AutocompleteSource("Python"),
                        new AutocompleteSource("Ruby"),
                        new AutocompleteSource("Scala"),
                        new AutocompleteSource("Scheme"),
                    },
                    
                    AppendTo = contendElement
                });
                contendElement.AppendChild(autocmpl);
            }
            #endregion

            #region buttons
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Buttons" });
                var btn = new HTMLButtonElement() { TextContent = "Button" };
                btn.Button();
                contendElement.AppendChild(btn);

                var icnBtn = new HTMLButtonElement() { TextContent = "button with icon" };
                icnBtn.Button(new ButtonParameter() { Icon = "ui-icon-gear", ShowLabel = false });
                contendElement.AppendChild(icnBtn);
            }
            #endregion
            
            #region checkboxradio
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Checkboxes" });
                var outerFieldset = new HTMLFieldSetElement();
                outerFieldset.AppendChild(new HTMLLabelElement() { TextContent = "Hotel Ratings: " });

                HTMLLabelElement lbl1 = new HTMLLabelElement() { HtmlFor = "checkbox-1", TextContent = "2 Star" };
                HTMLInputElement cb1 = new HTMLInputElement() { Type = InputType.Checkbox, Name = "checkbox-1", Id = "checkbox-1" };
                HTMLLabelElement lbl2 = new HTMLLabelElement() { HtmlFor = "checkbox-2", TextContent = "3 Star" };
                HTMLInputElement cb2 = new HTMLInputElement() { Type = InputType.Checkbox, Name = "checkbox-2", Id = "checkbox-2" };
                HTMLLabelElement lbl3 = new HTMLLabelElement() { HtmlFor = "checkbox-3", TextContent = "4 Star" };
                HTMLInputElement cb3 = new HTMLInputElement() { Type = InputType.Checkbox, Name = "checkbox-3", Id = "checkbox-3" };
                HTMLLabelElement lbl4 = new HTMLLabelElement() { HtmlFor = "checkbox-4", TextContent = "5 Star" };
                HTMLInputElement cb4 = new HTMLInputElement() { Type = InputType.Checkbox, Name = "checkbox-4", Id = "checkbox-4" };
                outerFieldset.AppendChild(lbl1);
                outerFieldset.AppendChild(cb1);
                outerFieldset.AppendChild(lbl2);
                outerFieldset.AppendChild(cb2);
                outerFieldset.AppendChild(lbl3);
                outerFieldset.AppendChild(cb3);
                outerFieldset.AppendChild(lbl4);
                outerFieldset.AppendChild(cb4);
                cb1.Checkboxradio();
                cb2.Checkboxradio();
                cb3.Checkboxradio();
                cb4.Checkboxradio();
                contendElement.AppendChild(outerFieldset);

                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Radio" });
                var outerFieldset2 = new HTMLFieldSetElement();
                outerFieldset2.AppendChild(new HTMLLabelElement() { TextContent = "Select a Location: " });

                HTMLLabelElement rlbl1 = new HTMLLabelElement() { HtmlFor = "radio-1", TextContent = "New York" };
                HTMLInputElement rd1 = new HTMLInputElement() { Type = InputType.Radio, Name = "radio-1", Id = "radio-1" };
                HTMLLabelElement rlbl2 = new HTMLLabelElement() { HtmlFor = "radio-2", TextContent = "Paris" };
                HTMLInputElement rd2 = new HTMLInputElement() { Type = InputType.Radio, Name = "radio-1", Id = "radio-2" };
                HTMLLabelElement rlbl3 = new HTMLLabelElement() { HtmlFor = "radio-3", TextContent = "London" };
                HTMLInputElement rd3 = new HTMLInputElement() { Type = InputType.Radio, Name = "radio-1", Id = "radio-3" };
                outerFieldset2.AppendChild(rlbl1);
                outerFieldset2.AppendChild(rd1);
                outerFieldset2.AppendChild(rlbl2);
                outerFieldset2.AppendChild(rd2);
                outerFieldset2.AppendChild(rlbl3);
                outerFieldset2.AppendChild(rd3);
                rd1.Checkboxradio();
                rd2.Checkboxradio();
                rd3.Checkboxradio();
                contendElement.AppendChild(outerFieldset2);
            }
            #endregion


            #region tabs
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent ="Tabs"});
                var tabsdiv = new HTMLDivElement() { Id ="tabs"};
                var tabList = new HTMLUListElement();
                tabList.AppendChild(new HTMLLIElement().AppendChild(new HTMLAnchorElement() { Href = "#tabs-1", TextContent = "Nunc tincidunt"}).ParentElement);
                tabList.AppendChild(new HTMLLIElement().AppendChild(new HTMLAnchorElement() { Href = "#tabs-2", TextContent = "Proin dolor" }).ParentElement);
                tabList.AppendChild(new HTMLLIElement().AppendChild(new HTMLAnchorElement() { Href = "#tabs-3", TextContent = "Aenean lacinia" }).ParentElement);
                tabsdiv.AppendChild(tabList);
                tabsdiv.AppendChild(new HTMLDivElement() { Id = "tabs-1" }.AppendChild(new HTMLParagraphElement() {
                    TextContent = "Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus."
                }).ParentElement);
                tabsdiv.AppendChild(new HTMLDivElement() { Id = "tabs-2" }.AppendChild(new HTMLParagraphElement() {
                    TextContent = "Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus."
                }).ParentElement);
                tabsdiv.AppendChild(new HTMLDivElement() { Id = "tabs-3" }.AppendChild(new HTMLParagraphElement() {
                    TextContent = "Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus."
                }).ParentElement.AppendChild(new HTMLParagraphElement()
                {
                    TextContent = "Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit."
                }).ParentElement);
                tabsdiv.Tabs();
                contendElement.AppendChild(tabsdiv);
            }
            #endregion

            #region dialog
            {

                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Dialog" });
                var btnNrm = new HTMLButtonElement()
                {
                    TextContent = "Dialog"
                };
                var btnMdl = new HTMLButtonElement()
                {
                    TextContent = "Modal Dialog"
                };
                btnNrm.Button(new ButtonParameter() { Icon = "ui-icon-newwin" });
                btnMdl.Button(new ButtonParameter() { Icon = "ui-icon-newwin" });

                btnNrm.OnClick += (ev) =>
                {
                    (new HTMLDivElement() { TextContent = "Hello I am an dialog" }).Dialog(new DialogParameter()
                    {
                        Title = "Dialog"
                    });
                };
                btnMdl.OnClick += (ev) =>
                {
                    var dialogDiv = new HTMLDivElement() { TextContent = "I am a modal dialog" };
                    dialogDiv.Dialog(new DialogParameter()
                    {
                        Title = "Modal Dialog",
                        Modal = true,
                        Buttons = new DialogButton[]
                        {
                            new DialogButton ()
                            {
                                Click = () =>
                                {
                                    dialogDiv.DialogClose();
                                },
                                Text ="OK"
                            },
                            new DialogButton ()
                            {
                                Click = () =>
                                {
                                    dialogDiv.DialogClose();
                                },
                                Text ="Cancel"
                            }
                        }
                    });
                };
                contendElement.AppendChild(btnNrm);
                contendElement.AppendChild(btnMdl);


            }
            #endregion


            #region slider
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Slider" });
                var slider = new HTMLDivElement();
                slider.Slider();
                contendElement.AppendChild(slider);
                var val = new HTMLParagraphElement()
                {
                    TextContent = "Value"
                };
                contendElement.AppendChild(val);
                slider.SliderSlide(new System.Action<Bridge.jQueryUI.JqueryEvents, SliderEvent>((ev, ui) => 
                {                    
                    val.TextContent = "Value: " + ui.Value;
                }));

            }
            #endregion

            #region datepicker
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Datepicker" });
                var inp = new HTMLInputElement();
                inp.Datepicker();
                contendElement.AppendChild(inp);
            }

            #endregion


            #region progressbar 
            {


                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Progressbar" });
                var div = new HTMLDivElement();
                div.Progressbar(new ProgressbarParamter() { Max =100});
                contendElement.AppendChild(div);

                var btn = new HTMLButtonElement()
                {
                    TextContent = "Start",
                    OnClick = (ev) =>
                    {
                        div.ProgressbarValue(0);

                        System.Threading.Tasks.Task.Run(async () =>
                        {
                            while (true)
                            {
                                int val = div.ProgressbarValue();
                                val++;
                                if (val > 100) return;
                                div.ProgressbarValue(val);
                                await System.Threading.Tasks.Task.Delay(100);
                            }
                        });
                    }
                };
                btn.Button();
                contendElement.AppendChild(btn);

            }
            #endregion

            #region selectmenu
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Selectmenu" });
                var sel = new HTMLSelectElement();
                sel.AppendChild(new HTMLOptionElement() { TextContent = "Slower" });
                sel.AppendChild(new HTMLOptionElement() { TextContent = "Slow" });
                sel.AppendChild(new HTMLOptionElement() { TextContent = "Medium" });
                sel.AppendChild(new HTMLOptionElement() { TextContent = "Fast" });
                sel.AppendChild(new HTMLOptionElement() { TextContent = "Faster" });
                contendElement.AppendChild(sel);
                sel.Selectmenu(new SelectmenuParameter() { AppendTo = contendElement });
            }
            #endregion


            #region menu
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Menu" });

                var menu = new HTMLUListElement();
                menu.Style.Width = "150px";
                menu.AppendChild(new HTMLLIElement() { ClassName = "ui-state-disabled" }.AppendChild(new HTMLDivElement() { TextContent = "Toys (n/a)" }).ParentNode);
                menu.AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Books" }).ParentNode);
                menu.AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Clothing" }).ParentNode);
                menu.AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Electronics" }).ParentNode
                    .AppendChild(new HTMLUListElement()
                        .AppendChild(new HTMLLIElement() { ClassName = "ui-state-disabled" }.AppendChild(new HTMLDivElement() { TextContent = "Home Entertainment" }).ParentNode).ParentNode
                        .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Car Hifi" }).ParentNode).ParentNode
                        .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Utilities" }).ParentNode).ParentNode
               ).ParentNode);
                menu.AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Movies" }).ParentNode);

                menu.AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Music" }).ParentNode
                    .AppendChild(new HTMLUListElement()
                        .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Rock" }).ParentNode
                            .AppendChild(new HTMLUListElement()
                                .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Alternative"}).ParentNode).ParentNode
                                .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Classics" }).ParentNode).ParentNode
                            ).ParentNode
                        ).ParentNode
                        .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Jazz" }).ParentNode
                            .AppendChild(new HTMLUListElement()
                                .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Freejazz" }).ParentNode).ParentNode
                                .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Big Band" }).ParentNode).ParentNode
                                .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Modern" }).ParentNode).ParentNode
                            ).ParentNode
                        ).ParentNode
                        .AppendChild(new HTMLLIElement().AppendChild(new HTMLDivElement() { TextContent = "Pop" }).ParentNode).ParentNode
               ).ParentNode);
               menu.AppendChild(new HTMLLIElement() { ClassName = "ui-state-disabled" }.AppendChild(new HTMLDivElement() { TextContent = "Specials (n/a)" }).ParentNode);
                


                menu.Menu();
                contendElement.AppendChild(menu);
            }
            #endregion


            #region tooltip
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Tooltip" });

                var para = new HTMLParagraphElement();
                var ttlink = new HTMLAnchorElement() { Href ="#", TextContent = "Tooltips", Title = "That's what this widget is" };
                ttlink.Tooltip();
                para.AppendChild(ttlink);


                para.AppendChild(new Text(" can be attached to any element. When you hover the element with your mouse, the title attribute is displayed in a little box next to the element, just like a native tooltip."));
                contendElement.AppendChild(para);



            }
            #endregion


            #region errorhigh
            {
                contendElement.AppendChild(new HTMLHeadingElement(HeadingType.H2) { TextContent = "Highlight / Error" });
                var highlight = new HTMLDivElement();
                highlight.Highlight("Hey!", " Sample ui-state-highlight style.");
                contendElement.AppendChild(highlight);
                contendElement.AppendChild(new HTMLBRElement());
                var error = new HTMLDivElement();
                error.Error("Hey!", "Sample ui-state-error style.");
                contendElement.AppendChild(error);
            }
            #endregion




            contendElement.Dialog(new DialogParameter()
            {
                Buttons = new DialogButton[] {
                    new DialogButton()
                    {
                        Click = () => { contendElement.DialogClose(); },
                        Text = "Close"
                    }
                },
                Height = 600,
                Width = 900,
                Title = "jQueryUi Demo Elements"
            });


        }


        private static void ThemeChanger()
        {
            var dialog = new HTMLDivElement();
            var themes = new string[] { "base", "black-tie", "blitzer", "cupertino", "dark-hive", "dot-luv", "eggplant", "excite-bike", "flick", "hot-sneaks", "humanity", "le-frog", "mint-choc",
                "overcast", "pepper-grinder", "redmond", "smoothness", "south-street", "start", "sunny", "swanky-purse", "trontastic", "ui-darkness", "ui-lightness", "vader" };

            var sel = new HTMLSelectElement();
            foreach(var theme in themes)
            {
                sel.AppendChild(new HTMLOptionElement() { TextContent = theme, Value = theme });
            }
            dialog.AppendChild(sel);
            sel.Selectmenu(new SelectmenuParameter() { AppendTo = dialog});
            var btn = new HTMLButtonElement() { TextContent = "OK" };
            btn.Button();
            btn.OnClick = (ev) => 
            {
                var newTheme = sel.Options[sel.SelectedIndex].Value;
                var theme = Document.GetElementById<HTMLStyleElement>("uitheme");
                theme.ToDynamic().href = "../css/ui_themes/" + newTheme + "/theme.css";
            };
            dialog.AppendChild(btn);
            dialog.Dialog(new DialogParameter() {
                Position = new Bridge.jQueryUI.Common.Position() { At = Bridge.jQueryUI.WindowPositions.Center, My = Bridge.jQueryUI.WindowPositions.Center },
                Title = "Themeroller",
                Width = 400,
                Height = 300                
            });
            
        }
    }
}
