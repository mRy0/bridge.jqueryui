using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class TooltipParamter
    {
        public Common.ClassSelector[] Classes { set; get; }
        public Bridge.Html5.Node Content { set; get; }
        public bool Disabled { set; get; }
        public Common.Animation Hide { set; get; }
        public string Itmes { set; get; }
        public Common.Position Position { set; get; }
        public Common.Animation Show { set; get; }
        public string TooltipClass { set; get; }
        public bool Track { set; get; }


        public object ToJsObject()
        {
            var jObj = this.ToDynamic();

            if (!Script.IsNaN(Content)) jObj.content = new jQuery2.jQuery(Content);
            if (!Script.IsNaN(Hide)) jObj.hide = Hide.ToJsObject();
            if (!Script.IsNaN(Position)) jObj.position = Position.ToJsObject();
            if (!Script.IsNaN(Show)) jObj.show = Show.ToJsObject();

            return jObj;
        }
    }
}
