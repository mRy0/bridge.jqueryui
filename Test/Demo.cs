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





            HTMLDivElement myDiv = new HTMLDivElement() { Id = "demodiv" };
            myDiv.Resizable();
            myDiv.Draggable();
            Document.Body.AppendChild(myDiv);



            HTMLInputElement autocompleteBox = new HTMLInputElement();
            autocompleteBox.AutocompleteInput(new string[] { "Rafael", "Denise", "Axel", "Muttern" });
            myDiv.AppendChild(autocompleteBox);

            HTMLInputElement datebox = new HTMLInputElement();
            datebox.Datepicker();
            myDiv.AppendChild(datebox);

            HTMLButtonElement button = new HTMLButtonElement() { TextContent = "bounce" };
            button.Button();
            button.OnClick = (ev) => 
            {
                myDiv.Effect(Bridge.jQueryUI.Effects.Enums.EffectTypes.Explode);
            };
            myDiv.AppendChild(button);
        }
    }
}
