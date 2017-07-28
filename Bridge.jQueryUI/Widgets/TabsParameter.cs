using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class TabsParameter
    {
        public bool Active { set; get; }
        public Common.ClassSelector[] Classes { set; get; }
        public bool Collapsible { set; get; }
        public bool Disabled { set; get; }
        public JqueryEvents Event { set; get; }
        public HeightStyles HeightStyle { set; get; }
        public Common.Animation Hide { set; get; }
        public Common.Animation Show { set; get; }


        public object ToJsObject()
        {
            var jObj = this.ToDynamic();
            if (!Script.IsNaN(Event)) jObj["event"] = Event.ToString();
            if (!Script.IsNaN(HeightStyle)) jObj.heightStyle = HeightStyle.ToString();
            if (!Script.IsNaN(Hide)) jObj.hide = Hide.ToJsObject();
            if (!Script.IsNaN(Show)) jObj.show = Show.ToJsObject();
            return jObj;
        }
    }
}
