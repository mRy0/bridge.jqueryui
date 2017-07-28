using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    public  class CheckboxradioParameter
    {
        public Common.ClassSelector[] Classes { set; get; }
        public bool Disabled { set; get; }
        public string Icon { set; get; }
        public string Label { set; get; }


        internal object ToJsObject()
        {
            return this.ToDynamic();
        }             
    }
}
