using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class AutocompleteParameter
    {
        public Html5.Node AppendTo { set; get; }
        public bool AutoFocus { set; get; }
        public Common.ClassSelector[] Classes { set; get; }
        public int Delay { set; get; }
        public bool Disabled { set; get; }
        public int MinLength { set; get; }
        public Common.Position Position { set; get; }
        //todo support multiple types
        public AutocompleteSource[] Source { set; get; }
        
        public object ToJsObject()
        {
            var jObj = this.ToDynamic();

            if (AppendTo != null) jObj.appendTo = new jQuery2.jQuery(AppendTo);
            if (Position != null) { jObj.position = Position.ToJsObject(); }

            return jObj;

        }

    }
}
