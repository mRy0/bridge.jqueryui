using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class ButtonParameter
    {
        public Common.ClassSelector Classes { set; get; }
        public bool Disabled { set; get; }
        public string Icon { set; get; }
        public IconPositons IconPosition { set; get; }
        public string Label { set; get; }
        public bool ShowLabel { set; get; }

        public object ToJsObject()
        {
            var jObj = this.ToDynamic();
            if (!Script.IsNaN(IconPosition)) jObj.iconPosition = IconPosition.ToString();
            return jObj;
        }
    }
}
