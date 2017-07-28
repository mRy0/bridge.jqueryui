using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    public static class Extensions
    {
        #region autocompletet
        public static void Autocomplete(this Bridge.Html5.HTMLInputElement input)
        {
            new jQuery2.jQuery(input).ToDynamic().autocomplete();
        }
        public static void Autocomplete(this Bridge.Html5.HTMLInputElement input, AutocompleteParameter paramter)
        {
            new jQuery2.jQuery(input).ToDynamic().autocomplete(paramter.ToJsObject());
        }
        public static void AutocompleteClose(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().autocomplete("close");
        }
        public static void AutocompleteDestroy(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().autocomplete("destroy");
        }
        public static bool AutocompleteDisable(this Bridge.Html5.Node node)
        {
            return new jQuery2.jQuery(node).ToDynamic().autocomplete("disable");
        }
        public static bool AutocompleteEnable(this Bridge.Html5.Node node)
        {
            return new jQuery2.jQuery(node).ToDynamic().autocomplete("enable");
        }
        #endregion

        #region button
        public static void Button(this Bridge.Html5.HTMLButtonElement button)
        {
            new jQuery2.jQuery(button).ToDynamic().button();
        }

        public static void Button(this Bridge.Html5.HTMLButtonElement button, ButtonParameter parameter)
        {
            new jQuery2.jQuery(button).ToDynamic().button(parameter.ToJsObject());
        }
        public static void ButtonDestroy(this Bridge.Html5.HTMLButtonElement button)
        {
            new jQuery2.jQuery(button).ToDynamic().button("destroy");
        }
        public static void ButtonDisable(this Bridge.Html5.HTMLButtonElement button)
        {
            new jQuery2.jQuery(button).ToDynamic().button("disable");
        }
        public static void ButtonEnable(this Bridge.Html5.HTMLButtonElement button)
        {
            new jQuery2.jQuery(button).ToDynamic().button("enable");
        }

        #endregion



        public static void Datepicker(this Bridge.Html5.HTMLInputElement input)
        {
            new jQuery2.jQuery(input).ToDynamic().datepicker();
        }
        

        #region dialog
        public static void Dialog(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().dialog();
        }
        public static void Dialog(this Bridge.Html5.Node node, DialogParameter parameter)
        {
            
            new jQuery2.jQuery(node).ToDynamic().dialog(parameter.ToJsObject());
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
        #endregion

        #region accordion 

        public static void Accordion (this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().accordion();
        }

        public static void Accordion (this Bridge.Html5.Node node, AccordionParameter parameter)
        {
            new jQuery2.jQuery(node).ToDynamic().accordion(parameter.ToJsObject());
        }


        #endregion



        #region checkboxradio

        public static void Checkboxradio(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().checkboxradio();
        }
        public static void Checkboxradio(this Bridge.Html5.Node node, CheckboxradioParameter parameter)
        {
            new jQuery2.jQuery(node).ToDynamic().checkboxradio(parameter.ToJsObject());
        }
        public static void CheckboxradioDestroy(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().checkboxradio("destroy");
        }
        public static void CheckboxradioDisable(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().checkboxradio("disable");
        }
        public static void CheckboxradioEnable(this Bridge.Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().checkboxradio("enable");
        }


        #endregion


        #region tabs
        public static void Tabs (this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().tabs();
        }
        public static void Tabs(this Html5.Node node, TabsParameter parameter)
        {
            new jQuery2.jQuery(node).ToDynamic().tabs(parameter.ToJsObject());
        }
        public static void TabsDestroy(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().tabs("destroy");
        }
        public static void TabsEnable(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().tabs("enable");
        }
        public static void TabsDisable(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().tabs("disable");
        }

        #endregion


        #region slider
        public static void Slider(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().slider();
        }

        public static void Slider(this Html5.Node node, SliderParamter paramter)
        {
            new jQuery2.jQuery(node).ToDynamic().slider(paramter.ToJsObject());
        }

        public static void SliderDestroy(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().slider("destroy");
        }

        public static void SliderEnable(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().slider("enable");
        }

        public static void SliderDisable(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().slider("disable");
        }

        public static void SliderSlide(this Html5.Node node, Action<JqueryEvents, SliderEvent> slideing)
        {
            new jQuery2.jQuery(node).ToDynamic().slider(
                 new {
                     slide = new Action<object, object>((o1, o2) =>
                     {
                         var o1d = o1.ToDynamic();
                         var o2d = o2.ToDynamic();
                         slideing((JqueryEvents)Enum.Parse(typeof(JqueryEvents), o1d.type, true), new SliderEvent()
                         {
                             Handle = node, //?
                             HandleIndex = o2d.handleIndex,
                             Value = Script.IsNaN(o2d.value) ?  -1 : o2d.value,
                             Values = Script.IsNaN(o2d.values) ? null : o2d.values,
                         });
                     })
                 }
            );
        }

        public static void SliderChange(this Html5.Node node, Action<JqueryEvents, SliderEvent> changed)
        {
            new jQuery2.jQuery(node).ToDynamic().slider(
                 new
                 {
                     change = new Action<object, object>((o1, o2) =>
                     {
                         var o2d = o2.ToDynamic();
                         changed((JqueryEvents)Enum.Parse(typeof(JqueryEvents), o1.ToString(), true), new SliderEvent()
                         {
                             Handle = node, //?
                             HandleIndex = o2d.handleIndex,
                             Value = Script.IsNaN(o2d.value) ? -1 : o2d.value,
                             Values = Script.IsNaN(o2d.values) ? null : o2d.values,
                         });
                     })
                 }
            );
        }


        #endregion


        #region Progressbar
        public static void Progressbar(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().progressbar();
        }
        public static void Progressbar(this Html5.Node node, ProgressbarParamter parameter)
        {
            new jQuery2.jQuery(node).ToDynamic().progressbar(parameter.ToDynamic());
        }
        public static void ProgressbarDestroy(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().progressbar("destroy");
        }
        public static void ProgressbarEnable(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().progressbar("enable");
        }
        public static void ProgressbarDisable(this Html5.Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().progressbar("disable");
        }
        public static int ProgressbarValue(this Html5.Node node)
        {
            return new jQuery2.jQuery(node).ToDynamic().progressbar("value");
        }
        public static void ProgressbarValue(this Html5.Node node, int value)
        {
            new jQuery2.jQuery(node).ToDynamic().progressbar("value", value);
        }


        #endregion
    }
}
