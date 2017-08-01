using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class SelectmenuParameter
    {
        public Html5.Node AppendTo { set; get; }
        public Common.ClassSelector[] Classes { set; get; }
        public bool Disabled { set; get; }
        public string Icons { set; get; }
        public Common.Position Position { set; get; }
        public int Width { set; get; }


        public object ToJsObject()
        {
            var jObj = this.ToDynamic();

            if (AppendTo != null) jObj.appendTo = new jQuery2.jQuery(AppendTo);
            if (Position != null) { jObj.position = Position.ToJsObject(); }

            return jObj;
        }
    }
}
