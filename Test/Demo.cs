using Bridge;
using Bridge.Html5;
using Bridge.jQueryUI.Interactions;
using Bridge.jQueryUI.Widgets;
using Bridge.jQueryUI.Effects;

namespace Test
{
    public class Demo
    {
        public static void Main()
        {
            HTMLButtonElement button = new HTMLButtonElement() { TextContent = "Menu" };
            button.Button();
            button.OnClick += (ev) => { ShowMenu(); };

            Document.Body.AppendChild(button);
        }


        private static void ShowMenu()
        {
            HTMLDivElement myDiv = new HTMLDivElement();
            myDiv.Dialog(new DialogParameterCollection() {
                Title = "Menu" ,
                Position = new Bridge.jQueryUI.Widgets.Position()
                {
                    My = Bridge.jQueryUI.Widgets.Enums.WindowPosition.Left,
                    At = Bridge.jQueryUI.Widgets.Enums.WindowPosition.Left,                  
                },
                Height = 600
            });
            HTMLButtonElement button1 = new HTMLButtonElement() { TextContent = "jQueryUI Demo" };
            button1.Button();
            button1.OnClick += (ev) => ShowDemo();

            myDiv.AppendChild(button1);
        }


        private static void ShowDemo()
        {
            HTMLDivElement contendElement = new HTMLDivElement();
            contendElement.AppendChild(new HTMLParagraphElement() { TextContent = "Autocomplete" });
            var autocmpl = new HTMLInputElement();
            autocmpl.AutocompleteInput( new string[] { "ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" } );
            contendElement.AppendChild(autocmpl);

            contendElement.AppendChild(new HTMLParagraphElement() { TextContent = "Buttons" });
            var btn = new HTMLButtonElement() { TextContent = "Button" };
            btn.Button();
            contendElement.AppendChild(btn);

            contendElement.Dialog(new DialogParameterCollection()
            {
                Buttons = new DialogButton[] {
                    new DialogButton()
                    {
                        Click = () => { contendElement.DialogClose(); },
                        Text = "Close"
                    }
                }
            });
        }
    }
}
