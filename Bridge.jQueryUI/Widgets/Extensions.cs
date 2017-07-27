using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    public static class Extensions
    {
        public static void AutocompleteInput(this Bridge.Html5.HTMLInputElement input, string[] tags)
        {
            new jQuery2.jQuery(input).ToDynamic().autocomplete(new AutoCompleteTextboxParameter() { Source = tags});
        }
        public static void Datepicker(this Bridge.Html5.HTMLInputElement input)
        {
            new jQuery2.jQuery(input).ToDynamic().datepicker();
        }
        public static void Button(this Bridge.Html5.HTMLButtonElement button)
        {
            new jQuery2.jQuery(button).ToDynamic().button();
        }



        public static void Dialog(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().dialog();
        }


        public static void Dialog(this Bridge.Html5.Node node, DialogParameterCollection parameter)
        {
            var defaultParameter = new DialogParameterCollection();
            var sendedParameter = new object().ToDynamic();

            if (parameter.AppendTo != defaultParameter.AppendTo) sendedParameter["appendTo"] = new jQuery2.jQuery( parameter.AppendTo);
            if (parameter.AutoOpen != defaultParameter.AutoOpen) sendedParameter["autoOpen"] = parameter.AutoOpen;
            if (parameter.Buttons != defaultParameter.Buttons)
            {

                var btns = new object[parameter.Buttons.Length];
                for (int i = 0; i < btns.Length; i++)
                {
                    var btn = new object().ToDynamic();
                    btn.text = parameter.Buttons[i].Text;
                    btn.icon = parameter.Buttons[i].Icon;
                    btn.click = parameter.Buttons[i].Click;
                    btns[i] = btn;
                }
                sendedParameter["buttons"] = btns.ToDynamic();

            }

            if (parameter.Classes != defaultParameter.Classes) sendedParameter["classes"] = parameter.Classes;
            if (parameter.CloseOnEscape != defaultParameter.CloseOnEscape) sendedParameter["closeOnEscape"] = parameter.CloseOnEscape;
            if (parameter.CloseText != defaultParameter.CloseText) sendedParameter["closeText"] = parameter.CloseText;
            if (parameter.DialogClass != defaultParameter.DialogClass) sendedParameter["dialogClass"] = parameter.DialogClass;
            if (parameter.Draggable != defaultParameter.Draggable) sendedParameter["draggable"] = parameter.Draggable;
            if (parameter.Height != defaultParameter.Height) sendedParameter["height"] = parameter.Height;
            if (parameter.MaxHeight != defaultParameter.MaxHeight) sendedParameter["maxHeight"] = parameter.MaxHeight;
            if (parameter.MaxWidht != defaultParameter.MaxWidht) sendedParameter["maxWidht"] = parameter.MaxWidht;
            if (parameter.MinHeight != defaultParameter.MinHeight) sendedParameter["minHeight"] = parameter.MinHeight;
            if (parameter.MinWidth != defaultParameter.MinWidth) sendedParameter["minWidth"] = parameter.MinWidth;
            if (parameter.Modal != defaultParameter.Modal) sendedParameter["modal"] = parameter.Modal;
            if (parameter.Position != defaultParameter.Position)
            {
                sendedParameter["position"] = new object().ToDynamic();
                sendedParameter["position"]["my"] = parameter.Position.My.ToString();
                sendedParameter["position"]["at"] = parameter.Position.At.ToString();
                if (parameter.Position.Of != null) sendedParameter["position"]["at"] = new jQuery2.jQuery(parameter.Position.Of);
            }
            if (parameter.Resizable != defaultParameter.Resizable) sendedParameter["resizable"] = parameter.Resizable;
            if (parameter.Title != defaultParameter.Title) sendedParameter["title"] = parameter.Title;
            if (parameter.Width != defaultParameter.Width) sendedParameter["width"] = parameter.Width;


            new jQuery2.jQuery(node).ToDynamic().dialog(sendedParameter);
        }

        public static void Dialog(this Bridge.Html5.Node node, dynamic parameter)
        {
            new jQuery2.jQuery(node).ToDynamic().dialog(parameter);
        }


        public static void DialogClose(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().dialog("close");
        }
        public static void DialogDestroy(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().dialog("destroy");
        }
        public static bool  DialogIsOpen(this Bridge.Html5.Node node)
        {
            return new jQuery2.jQuery(node).ToDynamic().dialog("isOpen");
        }
        public static void DialogMoveToTop(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().dialog("moveToTop");
        }

    }
}
