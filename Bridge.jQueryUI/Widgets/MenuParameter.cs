using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class MenuParameter
    {
        public Common.ClassSelector[] Classes { set; get; }
        public bool Disabled { set; get; }
        public UIIcons Icon { set; get; }
        public string Items { set; get; }
        public string Menus { set; get; }
        public Common.Position Position { set; get; }
        public string Role { set; get; }



        public object ToJsObject()
        {
            var jObj = this.ToDynamic();

            if (!Script.IsNaN(Icon)) jObj.icon = Icon.ToString();
            if (!Script.IsNaN(Position)) jObj.position = Position.ToJsObject();

            return jObj;
        }

    }
}
