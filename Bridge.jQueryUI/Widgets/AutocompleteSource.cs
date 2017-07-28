using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral(ObjectCreateMode.Constructor)]
    public class AutocompleteSource
    {
        public string Label { set; get; }
        public string Value { set; get; }
        public AutocompleteSource(string text) {
            Label = text;
            Value = text;

        }

        public AutocompleteSource(string label, string value)
        {
            Label = label;
            Value = value;
        }
        
    }
}
