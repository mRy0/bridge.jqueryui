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
            var element = new jQuery2.jQuery(input).ToDynamic().autocomplete(new AutoCompleteTextboxParameter() { Source = tags});
        }
        public static void Datepicker(this Bridge.Html5.HTMLInputElement input)
        {
            new jQuery2.jQuery(input).ToDynamic().datepicker();
        }
        public static void Button(this Bridge.Html5.HTMLButtonElement button)
        {
            new jQuery2.jQuery(button).ToDynamic().button();
        }
    }
}
