using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class ProgressbarParamter
    {
        public Common.ClassSelector[] Classes { set; get; }
        public bool Disabled { set; get; }
        public int Max { set; get; }
        public int Value { set; get; }

        public object ToJsObject()
        {
            var jObj = this.ToDynamic();
            if (!Script.IsNaN(Classes)) jObj.classes = Classes.ToJsDynamic();
            return jObj;
        }
    }
}
