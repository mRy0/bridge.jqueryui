using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class AccordionParameter
    {
        /// <summary>
        /// Which panel is currently open.
        /// Default: 0
        /// -1 = nothing
        /// -2 = all
        /// </summary>
        public int Active { set; get; }
        public Common.Animation Animate { set; get; }
        public Common.ClassSelector[] Classes { set; get; }
        public bool Collapsible { set; get; }
        public bool Disabled { set; get; }
        public JqueryEvents Event { set; get; }
        public string Header { set; get; }
        public HeightStyles HeightStyle { set; get; }
        public string Icons { set; get; }

        internal object ToJsObject()
        {
            var obj = this.ToDynamic();

            if (Active == -2) obj.active = false;
            else if (Active == -1) obj.active = true;
            else obj.active = Active;

            if (Animate != null) obj.animate = Animate.ToJsObject();

            if (!Script.IsNaN(Event)) obj["event"] = Event.ToString();

            if (!Script.IsNaN(HeightStyle)) obj.heightStyle = HeightStyle.ToString();           

            return obj;
        }
    }
}
